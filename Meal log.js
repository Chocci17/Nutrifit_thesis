    // Initialize Supabase
    const SUPABASE_URL = 'https://pncfzxuecxzcdyxdwuok.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuY2Z6eHVlY3h6Y2R5eGR3dW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4Njg1NzEsImV4cCI6MjA3ODQ0NDU3MX0.BlfihjUmYAgP-9UisG4EN1srsteB_SZ9ut5TiBgAQ-E';
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    // Restore Supabase session from localStorage
    (async function restoreSession() {
      try {
        const sessionStr = localStorage.getItem('nutrifit_session');
        if (sessionStr) {
          const session = JSON.parse(sessionStr);
          await supabase.auth.setSession({
            access_token: session.access_token,
            refresh_token: session.refresh_token
          });
          console.log('Supabase session restored');
        }
      } catch (e) {
        console.warn('Could not restore session:', e);
      }
    })();

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

    // helpers
    const $ = sel => document.querySelector(sel);
    
    // Supabase data operations
    async function load() {
      try {
        const { data, error } = await supabase
          .from('meal_logs')
          .select('*')
          .eq('user_id', currentUser.id)
          .order('date', { ascending: false });
        
        if (error) throw error;
        const meals = data.map(row => ({
          id: row.id,
          date: row.date,
          mealType: row.meal_name,
          protein: Number(row.protein),
          carbs: Number(row.carbs),
          fat: Number(row.fat),
          cal: Number(row.calories),
          remarks: row.remarks || row.notes || ''
        }));
        console.log('Loaded meals from DB:', meals);
        return meals;
      } catch (e) {
        console.error('Error loading meals:', e);
        return [];
      }
    }
    
    async function save(entry) {
      try {
        console.log('Attempting to save meal:', entry);
        console.log('User ID:', currentUser.id);
        
        const { data, error } = await supabase
          .from('meal_logs')
          .insert([{
            user_id: currentUser.id,
            date: entry.date,
            meal_name: entry.mealType || 'Meal',
            remarks: entry.remarks || '',
            protein: entry.protein || 0,
            carbs: entry.carbs || 0,
            fat: entry.fat || 0,
            calories: entry.cal || 0
          }])
          .select();
        
        if (error) {
          console.error('Supabase error:', error);
          if (error.message.includes('meal_logs') || error.code === '42P01' || error.code === 'PGRST204') {
            alert('⚠️ DATABASE SETUP REQUIRED\n\n' +
                  'The meal_logs table does not exist in your Supabase database.\n\n' +
                  'STEPS TO FIX:\n' +
                  '1. Go to: https://supabase.com/dashboard/project/pncfzxuecxzcdyxdwuok/sql/new\n' +
                  '2. Open the file: supabase-schema.sql\n' +
                  '3. Copy ALL the SQL code\n' +
                  '4. Paste it into the SQL Editor\n' +
                  '5. Click RUN\n\n' +
                  'After running the SQL, refresh this page and try again.');
          } else if (error.code === '42501') {
            alert('Permission denied. Please check Row Level Security policies.');
          } else {
            alert('Failed to save meal: ' + error.message);
          }
          throw error;
        }
        
        console.log('Meal saved successfully:', data);
        return data[0];
      } catch (e) {
        console.error('Error saving meal:', e);
        return null;
      }
    }

    async function deleteMeal(id) {
      try {
        const { error } = await supabase
          .from('meal_logs')
          .delete()
          .eq('id', id)
          .eq('user_id', currentUser.id);
        
        if (error) throw error;
        return true;
      } catch (e) {
        console.error('Error deleting meal:', e);
        return false;
      }
    }

    function pad(n){ return n.toString().padStart(2,'0'); }
    // return local date as YYYY-MM-DD
    function isoLocal(d){ return d.getFullYear() + '-' + pad(d.getMonth()+1) + '-' + pad(d.getDate()); }
    // parse YYYY-MM-DD into a local Date at local midnight
    function parseISODate(s){ const parts = (s||'').split('-'); if(parts.length<3) return new Date(s); return new Date(Number(parts[0]), Number(parts[1])-1, Number(parts[2])); }

    // calendar state
    let viewDate = new Date(); // currently viewed month
    let selectedDate = null; // ISO yyyy-mm-dd string

    // elements
    const calGrid = $('#calGrid');
    const monthTitle = $('#monthTitle');
    const prevMonth = $('#prevMonth');
    const nextMonth = $('#nextMonth');
    const selectedLabel = $('#selectedLabel');
    const selectedMealsEl = $('#selectedMeals');

    // form
    const mealForm = $('#mealForm');
    const dateInput = $('#date');

    // macro UI
    const protTotal = $('#protTotal'), carbTotal = $('#carbTotal'), fatTotal = $('#fatTotal'), calTotal = $('#calTotal');
    const protFill = $('#protFill'), carbFill = $('#carbFill'), fatFill = $('#fatFill'), calFill = $('#calFill');
    const tProt = $('#targetProtein'), tCarb = $('#targetCarbs'), tFat = $('#targetFat'), tCal = $('#targetCalories');

    // Fitness goal presets
    const FITNESS_GOALS = {
      'weight-loss': {
        protein: 150,
        carbs: 150,
        fat: 50,
        calories: 1800
      },
      'muscle-gain': {
        protein: 180,
        carbs: 300,
        fat: 70,
        calories: 2800
      },
      'weight-gain': {
        protein: 160,
        carbs: 400,
        fat: 90,
        calories: 3200
      },
      'balanced': {
        protein: 120,
        carbs: 250,
        fat: 70,
        calories: 2200
      }
    };

    // init
    (async function init(){
      // set default date
      if(dateInput && !dateInput.value) dateInput.value = isoLocal(new Date());

      // load targets from Supabase
      try {
        const { data, error } = await supabase
          .from('macro_targets')
          .select('*')
          .eq('user_id', currentUser.id)
          .maybeSingle();
        
        if (data) {
          tProt.value = data.protein || 120;
          tCarb.value = data.carbs || 250;
          tFat.value = data.fat || 70;
          tCal.value = data.calories || 2200;
          
          const goalSelect = document.getElementById('fitnessGoal');
          if(goalSelect) goalSelect.value = data.fitness_goal || 'balanced';
        }
      } catch (e) {
        console.log('No saved targets, using defaults');
        // Use defaults from FITNESS_GOALS
        tProt.value = 120;
        tCarb.value = 250;
        tFat.value = 70;
        tCal.value = 2200;
      }

      await renderCalendar();
      bind();
      await renderForSelected();
    })();

    function bind(){
      prevMonth.addEventListener('click', ()=>{ viewDate.setMonth(viewDate.getMonth()-1); renderCalendar(); });
      nextMonth.addEventListener('click', ()=>{ viewDate.setMonth(viewDate.getMonth()+1); renderCalendar(); });
      
      // fitness goal change handler
      const goalSelect = document.getElementById('fitnessGoal');
      if(goalSelect){
        goalSelect.addEventListener('change', async (e)=>{
          const goal = e.target.value;
          const preset = FITNESS_GOALS[goal];
          if(preset){
            tProt.value = preset.protein;
            tCarb.value = preset.carbs;
            tFat.value = preset.fat;
            tCal.value = preset.calories;
            localStorage.setItem(`fitnessGoal_${currentUser.id}`, goal);
            await renderForSelected(); // update progress bars
          }
        });
      }

      mealForm.addEventListener('submit', async (e)=>{
        e.preventDefault();
        // determine the date to save: prefer explicit date input, fall back to selected calendar date
        const inputDate = (dateInput && dateInput.value) ? dateInput.value : '';
        const saveDate = inputDate || selectedDate || new Date().toISOString().slice(0,10);

        const entry = {
          date: saveDate,
          mealType: document.getElementById('mealType').value,
          protein: Number(document.getElementById('protein').value)||0,
          carbs: Number(document.getElementById('carbs').value)||0,
          fat: Number(document.getElementById('fat').value)||0,
          cal: Number(document.getElementById('cal').value)||0,
          remarks: document.getElementById('remarks').value||''
        };

        const savedMeal = await save(entry);
        
        if (!savedMeal) {
          alert('Failed to save meal. Please try again.');
          return;
        }
        
        console.log('Meal saved successfully, saveDate was:', saveDate, 'selectedDate is:', selectedDate);

        // Do NOT change the currently selected calendar date or the viewed month.
        // Preserve the date input value across the form reset so the chooser stays as the user set it.
        const prevDateVal = (dateInput && dateInput.value) ? dateInput.value : '';
        const prevSelectedDate = selectedDate;
        
        mealForm.reset();
        if(dateInput && prevDateVal) dateInput.value = prevDateVal;
        
        // Make sure selectedDate is preserved or set to the date we just saved to
        if(!prevSelectedDate && saveDate) {
          selectedDate = saveDate;
        } else {
          selectedDate = prevSelectedDate;
        }
        
        console.log('After save, selectedDate is now:', selectedDate);

        // re-render calendar to show the small indicator on the saved date; keep current selection unchanged
        await renderCalendar();
        // Only render selected if we have a selected date
        if(selectedDate) {
          await renderForSelected();
        }
      });

      $('#clearBtn').addEventListener('click', ()=>{ mealForm.reset(); if(dateInput) dateInput.value = new Date().toISOString().slice(0,10); });

      $('#saveTargets').addEventListener('click', async ()=>{
        const goalSelect = document.getElementById('fitnessGoal');
        const goal = goalSelect ? goalSelect.value : 'balanced';
        
        try {
          const { data, error } = await supabase
            .from('macro_targets')
            .upsert({
              user_id: currentUser.id,
              protein: Number(tProt.value)||0,
              carbs: Number(tCarb.value)||0,
              fat: Number(tFat.value)||0,
              calories: Number(tCal.value)||0,
              fitness_goal: goal
            }, { onConflict: 'user_id' });
          
          if (error) throw error;
          alert('Targets saved successfully!');
          await renderForSelected();
        } catch (e) {
          console.error('Error saving targets:', e);
          alert('Failed to save targets. Please try again.');
        }
      });

      // keep calendar selection in sync with the date input
      if(dateInput){
        dateInput.addEventListener('change', async ()=>{
          const val = dateInput.value; if(!val) return;
          selectedDate = val;
          // move viewDate to that month if different
          const d = parseISODate(val);
          if(d.getFullYear() !== viewDate.getFullYear() || d.getMonth() !== viewDate.getMonth()){
            viewDate = new Date(d.getFullYear(), d.getMonth(), 1);
            await renderCalendar();
          } else {
            // just re-render selection
            await renderCalendar();
          }
          await renderForSelected();
        });
      }

    }

    async function renderCalendar(){
      calGrid.innerHTML = '';
      const year = viewDate.getFullYear();
      const month = viewDate.getMonth();
      monthTitle.textContent = viewDate.toLocaleString(undefined,{month:'long',year:'numeric'});

      // first day of month and padding
      const first = new Date(year, month, 1);
      const startDay = first.getDay(); // 0..6 (Sun..Sat)

      // days in month
      const daysInMonth = new Date(year, month+1, 0).getDate();

      // fill blanks for week start (we'll show Sunday..Saturday)
      for(let i=0;i<startDay;i++){ const el = document.createElement('div'); el.className='cal-day'; el.innerHTML=''; calGrid.appendChild(el); }

      const meals = await load();
      const todayIso = isoLocal(new Date());
      for(let d=1; d<=daysInMonth; d++){
        const date = new Date(year, month, d);
        const iso = isoLocal(date);
        const items = meals.filter(m=> (m.date||'').slice(0,10)===iso);
        const el = document.createElement('div'); el.className='cal-day';
        if(iso===todayIso) el.classList.add('today');
        // mark selected date
        if(selectedDate && iso === selectedDate) el.classList.add('selected');
        el.dataset.date = iso;
        el.innerHTML = `<div class="date">${d}</div>`;
        if(items.length){ const b = document.createElement('div'); b.className='badge'; b.title = items.length + ' meal' + (items.length>1? 's':''); el.appendChild(b); }
        el.addEventListener('click', async ()=>{ 
          selectedDate = iso; 
          if(dateInput) dateInput.value = iso; 
          console.log('Calendar day clicked, selectedDate set to:', selectedDate);
          await renderCalendar(); // Re-render calendar first to update selection styling
          await renderForSelected(); // Then render the meals for the selected date
        });
        calGrid.appendChild(el);
      }
    }

    async function renderForSelected(){
      if(!selectedDate){ selectedLabel.textContent = 'None'; selectedMealsEl.innerHTML = '<div class="muted">Pick a date from the calendar</div>'; await updateMacroTotals(null); return; }
      selectedLabel.textContent = parseISODate(selectedDate).toLocaleDateString();
      const allMeals = await load();
      console.log('Selected date:', selectedDate);
      console.log('All meals:', allMeals);
      let items = allMeals.filter(m=> {
        const mealDate = (m.date||'').slice(0,10);
        console.log('Comparing meal date:', mealDate, 'with selected:', selectedDate, 'match:', mealDate===selectedDate);
        return mealDate===selectedDate;
      });
      console.log('Filtered items for selected date:', items);
      // Sort by id (assuming sequential IDs) or keep database order
      items.sort((a,b)=>{
        // If id is a number, compare directly
        if(typeof a.id === 'number' && typeof b.id === 'number') {
          return a.id - b.id;
        }
        // If id is a string (UUID), just keep original order
        return 0;
      });
      if(!items.length){
        selectedMealsEl.innerHTML = '<div class="muted">No meals logged</div>';
      } else {
        console.log('Rendering', items.length, 'meals');
        selectedMealsEl.innerHTML = items.map(i=>{
          return `
            <div class="meal-item" data-id="${i.id}">
              <div>
                <strong>${escapeHtml(i.mealType)}</strong>
                ${i.remarks ? `<div class="muted" style="font-size:0.85rem;margin-top:4px">${escapeHtml(i.remarks)}</div>` : ''}
              </div>
              <div style="display:flex;gap:8px;align-items:center">
                <div class="muted" style="font-size:0.85rem">Protein: ${i.protein}g · Carbs: ${i.carbs}g · Fat: ${i.fat}g · Calories: ${i.cal} kcal</div>
                <button class="btn danger delete-meal" data-id="${i.id}" title="Delete meal" aria-label="Delete meal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;display:inline-block">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                    <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            </div>`;
        }).join('');
        // Reset scroll to leftmost position
        selectedMealsEl.scrollLeft = 0;
      }
      await updateMacroTotals(selectedDate);
    }

    async function updateMacroTotals(dateISO){
      const arr = await load();
      const date = dateISO || isoLocal(new Date());
      const dayItems = arr.filter(m=> (m.date||'').slice(0,10)===date);
      console.log('updateMacroTotals - date:', date, 'dayItems:', dayItems);
      const totals = dayItems.reduce((s,i)=>{ s.p += (Number(i.protein)||0); s.c += (Number(i.carbs)||0); s.f += (Number(i.fat)||0); s.cal += (Number(i.cal)||0); return s; }, {p:0,c:0,f:0,cal:0});

      // targets
      const t = {};
      const tp = Number(t.protein) || Number(tProt.value) || 120;
      const tc = Number(t.carbs) || Number(tCarb.value) || 250;
      const tf = Number(t.fat) || Number(tFat.value) || 70;
      const tcal = Number(t.calories) || Number(tCal.value) || 2000;

      protTotal.textContent = totals.p + ' g';
      carbTotal.textContent = totals.c + ' g';
      fatTotal.textContent = totals.f + ' g';
      calTotal.textContent = totals.cal + ' kcal';

      const protPercent = Math.round((totals.p / tp) * 100);
      const carbPercent = Math.round((totals.c / tc) * 100);
      const fatPercent = Math.round((totals.f / tf) * 100);
      const calPercent = Math.round((totals.cal / tcal) * 100);

      protFill.style.width = Math.min(100, protPercent) + '%';
      carbFill.style.width = Math.min(100, carbPercent) + '%';
      fatFill.style.width = Math.min(100, fatPercent) + '%';
      calFill.style.width = Math.min(100, calPercent) + '%';

      // Check if targets are hit and show indicators
      const protHit = $('#protHit');
      const carbHit = $('#carbHit');
      const fatHit = $('#fatHit');
      const calHit = $('#calHit');
      const successMsg = $('#targetSuccessMsg');

      const protAchieved = totals.p >= tp;
      const carbAchieved = totals.c >= tc;
      const fatAchieved = totals.f >= tf;
      const calAchieved = totals.cal >= tcal;

      // Update indicators
      protHit.style.display = protAchieved ? 'inline' : 'none';
      carbHit.style.display = carbAchieved ? 'inline' : 'none';
      fatHit.style.display = fatAchieved ? 'inline' : 'none';
      calHit.style.display = calAchieved ? 'inline' : 'none';

      // Add special styling to progress bars when target achieved
      protFill.classList.toggle('target-achieved', protAchieved);
      carbFill.classList.toggle('target-achieved', carbAchieved);
      fatFill.classList.toggle('target-achieved', fatAchieved);
      calFill.classList.toggle('target-achieved', calAchieved);

      // Show success message if all targets hit
      if (protAchieved && carbAchieved && fatAchieved && calAchieved) {
        successMsg.style.display = 'block';
        successMsg.className = 'target-success';
        successMsg.textContent = 'You\'ve hit all your daily targets! 🎉';
      } else {
        successMsg.style.display = 'none';
      }
    }

    // Delegate delete clicks from the selected meals container
    selectedMealsEl.addEventListener('click', async function(e){
      const btn = e.target.closest('.delete-meal');
      if(!btn) return;
      const id = btn.dataset.id;
      if(!id) return;
      if(!confirm('Delete this meal?')) return;
      
      const success = await deleteMeal(id);
      if(success){
        await renderCalendar();
        await renderForSelected();
      }
    });

    function escapeHtml(s){ if(!s) return ''; return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c])); }

    // simple navigation helper used by navbar links
    function navigateTo(page){ window.location.href = page; }
    
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

    // Logout function
    async function logout() {
      // Clear local storage
      localStorage.removeItem('nutrifit_user');
      localStorage.removeItem('nutrifit_session');
      
      // Sign out from Supabase if available
      if (window.supabase) {
        try {
          const SUPABASE_URL = 'https://pncfzxuecxzcdyxdwuok.supabase.co';
          const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuY2Z6eHVlY3h6Y2R5eGR3dW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4Njg1NzEsImV4cCI6MjA3ODQ0NDU3MX0.BlfihjUmYAgP-9UisG4EN1srsteB_SZ9ut5TiBgAQ-E';
          const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
          await supabase.auth.signOut();
        } catch (err) {
          console.error('Error signing out:', err);
        }
      }
      
      // Redirect to profile.html
      window.location.href = 'profile.html';
    }

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