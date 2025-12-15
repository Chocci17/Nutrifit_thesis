// Initialize Supabase
    const SUPABASE_URL = 'https://pncfzxuecxzcdyxdwuok.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuY2Z6eHVlY3h6Y2R5eGR3dW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4Njg1NzEsImV4cCI6MjA3ODQ0NDU3MX0.BlfihjUmYAgP-9UisG4EN1srsteB_SZ9ut5TiBgAQ-E';
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    // Get current logged-in user
    function getCurrentUser() {
      try {
        const userStr = localStorage.getItem('nutrifit_user');
        if (!userStr) {
          alert('You must be logged in to access this page.');
          window.location.href = 'login.html';
          return null;
        }
        return JSON.parse(userStr);
      } catch (e) {
        alert('Session error. Please log in again.');
        window.location.href = 'login.html';
        return null;
      }
    }

    const currentUser = getCurrentUser();
    if (!currentUser) throw new Error('No user logged in');

    let currentUnit = 'metric';
    let records = [];
    
    // Supabase operations for BMI
    async function loadBMIRecords() {
      try {
        const { data, error } = await supabase
          .from('bmi_records')
          .select('*')
          .eq('user_id', currentUser.id)
          .order('date', { ascending: false });
        
        if (error) throw error;
        records = data.map(row => ({
          id: row.id,
          date: row.date,
          bmi: Number(row.bmi),
          category: row.category
        }));
        return records;
      } catch (e) {
        console.error('Error loading BMI records:', e);
        return [];
      }
    }
    
    async function saveBMIRecord(record) {
      try {
        const { error } = await supabase
          .from('bmi_records')
          .insert([{
            user_id: currentUser.id,
            date: record.date,
            bmi: record.bmi,
            category: record.category
          }]);
        
        if (error) throw error;
      } catch (e) {
        console.error('Error saving BMI record:', e);
        alert('Failed to save BMI record.');
      }
    }
    
    async function deleteBMIRecord(id) {
      try {
        const { error } = await supabase
          .from('bmi_records')
          .delete()
          .eq('id', id)
          .eq('user_id', currentUser.id);
        
        if (error) throw error;
      } catch (e) {
        console.error('Error deleting BMI record:', e);
      }
    }

    function setUnit(unit) {
      currentUnit = unit;
      const buttons = document.querySelectorAll('.unit-btn');
      buttons.forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');

      if (unit === 'metric') {
        document.getElementById('weightUnit').textContent = 'kg';
        document.getElementById('heightUnit').textContent = 'cm';
      } else {
        document.getElementById('weightUnit').textContent = 'lbs';
        document.getElementById('heightUnit').textContent = 'inches';
      }
    }

    function calculateBMI(weight, height, unit) {
      let bmi;
      if (unit === 'metric') {
        const heightInMeters = height / 100;
        bmi = weight / (heightInMeters * heightInMeters);
      } else {
        bmi = (weight / (height * height)) * 703;
      }
      return bmi;
    }

    function getBMICategory(bmi) {
      if (bmi < 18.5) return { category: 'Underweight', class: 'underweight', colorClass: 'underweight-color' };
      if (bmi < 25) return { category: 'Normal Weight', class: 'normal', colorClass: 'normal-color' };
      if (bmi < 30) return { category: 'Overweight', class: 'overweight', colorClass: 'overweight-color' };
      if (bmi < 40) return { category: 'Obese', class: 'obese', colorClass: 'obese-color' };
      return { category: 'Extremely Obese', class: 'extreme', colorClass: 'extreme-color' };
    }

    function updateColorWheel(bmi, colorClass) {
      const wheelCenter = document.getElementById('wheelCenter');
      const wheelBmiValue = document.getElementById('wheelBmiValue');
      const wheelBmiLabel = document.getElementById('wheelBmiLabel');
      const colorWheel = document.getElementById('colorWheel');

      // Remove all color classes
      wheelCenter.className = 'wheel-center';
      
      // Add the appropriate color class
      wheelCenter.classList.add(colorClass);
      
      // Update the center display
      wheelBmiValue.textContent = bmi.toFixed(1);
      wheelBmiValue.style.display = 'block';
      wheelBmiLabel.style.display = 'block';
      
      // Add active animation
      colorWheel.classList.add('active');
      setTimeout(() => colorWheel.classList.remove('active'), 300);
    }

    function updateTracker() {
      const totalRecordsEl = document.getElementById('totalRecords');
      const avgBMIEl = document.getElementById('avgBMI');
      const progressList = document.getElementById('progressList');

      totalRecordsEl.textContent = records.length;

      if (records.length === 0) {
        progressList.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">📊</div>
            <p>No progress records yet. Calculate your BMI to get started!</p>
          </div>
        `;
        avgBMIEl.textContent = '--';
        return;
      }

      const avg = (records.reduce((sum, r) => sum + r.bmi, 0) / records.length).toFixed(1);
      avgBMIEl.textContent = avg;

      const maxBMI = Math.max(...records.map(r => r.bmi));
      const minBMI = Math.min(...records.map(r => r.bmi));
      const range = maxBMI - minBMI || 1;

      progressList.innerHTML = records.map((record) => `
        <div class="progress-item" data-id="${record.id}">
          <div class="progress-header">
            <div>
              <div class="progress-date">${record.date} - ${record.category}</div>
            </div>
            <div style="display:flex;gap:8px;align-items:center">
              <div class="progress-value">${record.bmi}</div>
              <button class="delete-btn" data-id="${record.id}" title="Delete record">Delete</button>
            </div>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${((record.bmi - minBMI) / range) * 100}%"></div>
          </div>
        </div>
      `).join('');
    }

    document.getElementById('bmiForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const weight = parseFloat(document.getElementById('weight').value);
      const height = parseFloat(document.getElementById('height').value);

      if (!weight || !height || weight <= 0 || height <= 0) {
        alert('Please enter valid weight and height values');
        return;
      }

      const bmi = calculateBMI(weight, height, currentUnit);
      const { category, class: categoryClass, colorClass } = getBMICategory(bmi);

      // Update color wheel and display
      document.getElementById('initialMsg').style.display = 'none';
      document.getElementById('result').style.display = 'block';
      document.getElementById('bmiNumber').textContent = bmi.toFixed(1);

      const categoryElement = document.getElementById('bmiCategory');
      categoryElement.textContent = category;
      categoryElement.className = 'bmi-category ' + categoryClass;

      updateColorWheel(bmi, colorClass);

      // Get selected date from record date input
      const recordDateInput = document.getElementById('recordDate');
      const selectedDate = recordDateInput ? recordDateInput.value : null;
      const dateToSave = selectedDate || new Date().toISOString().split('T')[0];

      // Save record
      const record = {
        id: Date.now(),
        date: dateToSave,
        bmi: parseFloat(bmi.toFixed(1)),
        category
      };

      records.unshift(record);
      
      // Save to Supabase
      saveBMIRecord(record);

      updateTracker();
    });

    // Initialize tracker on page load
    (async function init() {
      await loadBMIRecords();
      updateTracker();
    })();

    // Delegate clicks on the progress list: delete button or click item to delete
    (function bindProgressActions(){
      const progressList = document.getElementById('progressList');
      progressList.addEventListener('click', function(e){
        const del = e.target.closest('.delete-btn');
        if(del){
          const id = del.dataset.id; if(!id) return;
          if(!confirm('Delete this record?')) return;
          deleteRecordById(id);
          return;
        }

        const item = e.target.closest('.progress-item');
        if(item){
          const id = item.dataset.id; if(!id) return;
          if(!confirm('Delete this record?')) return;
          deleteRecordById(id);
        }
      });
    })();

    async function deleteRecordById(id){
      const numId = Number(id);
      const idx = records.findIndex(r=> Number(r.id) === numId);
      if(idx === -1) return;
      
      // Delete from Supabase
      await deleteBMIRecord(id);
      
      records.splice(idx,1);
      await updateTracker();
      if(records.length === 0){ document.getElementById('initialMsg').style.display = 'block'; document.getElementById('result').style.display = 'none'; }
    }

    function navigateTo(page) {
      window.location.href = page;
    }

    // Toggle sidebar dropdown
    function toggleSidebar() {
      const sidebar = document.getElementById('dropdownSidebar');
      const overlay = document.getElementById('sidebarOverlay');
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
    }
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
      const sidebar = document.getElementById('dropdownSidebar');
      const brand = document.querySelector('.navbar-brand');
      if (sidebar && brand && sidebar.classList.contains('active')) {
        if (!sidebar.contains(event.target) && !brand.contains(event.target)) {
          toggleSidebar();
        }
      }
    });

    // About Modal Functions
    function openAboutModal() {
      const aboutModal = document.getElementById('aboutModal');
      aboutModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Close sidebar if open
      const sidebar = document.getElementById('dropdownSidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar && overlay) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      }
    }

    function closeAboutModal() {
      const aboutModal = document.getElementById('aboutModal');
      aboutModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Close About modal when clicking outside
    document.addEventListener('click', function(event) {
      const aboutModal = document.getElementById('aboutModal');
      if (event.target === aboutModal) {
        closeAboutModal();
      }
    });

    // Terms Modal Functions
    function openTermsModal() {
      const termsModal = document.getElementById('termsModal');
      termsModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Close sidebar if open
      const sidebar = document.getElementById('dropdownSidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar && overlay) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      }
    }

    function closeTermsModal() {
      const termsModal = document.getElementById('termsModal');
      termsModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Close Terms modal when clicking outside
    document.addEventListener('click', function(event) {
      const termsModal = document.getElementById('termsModal');
      if (event.target === termsModal) {
        closeTermsModal();
      }
    });

    // Logout function
    async function logout() {
      localStorage.removeItem('nutrifit_user');
      localStorage.removeItem('nutrifit_session');
      
      if (window.supabase) {
        try {
          await supabase.auth.signOut();
        } catch (err) {
          console.error('Error signing out:', err);
        }
      }
      
      window.location.href = 'index.html';
    }