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
          const SUPABASE_URL = 'https://pncfzxuecxzcdyxdwuok.supabase.co';
          const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuY2Z6eHVlY3h6Y2R5eGR3dW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4Njg1NzEsImV4cCI6MjA3ODQ0NDU3MX0.BlfihjUmYAgP-9UisG4EN1srsteB_SZ9ut5TiBgAQ-E';
          const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
          await supabase.auth.signOut();
        } catch (err) {
          console.error('Error signing out:', err);
        }
      }
      
      window.location.href = 'profile.html';
    }

    function getBMICategory(bmi) {
      if (bmi < 18.5) return { category: 'Underweight', class: 'underweight', colorClass: 'underweight-color' };
      if (bmi < 25) return { category: 'Normal', class: 'normal', colorClass: 'normal-color' };
      if (bmi < 30) return { category: 'Overweight', class: 'overweight', colorClass: 'overweight-color' };
      if (bmi < 40) return { category: 'Obese', class: 'obese', colorClass: 'obese-color' };
      return { category: 'Extremely Obese', class: 'extreme', colorClass: 'extreme-color' };
    }

    async function loadAnalytics() {
      // Load from Supabase
      let records = [];
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
      } catch (e) {
        console.error('Error loading BMI records:', e);
      }
      
      const contentDiv = document.getElementById('content');

      if (records.length === 0) {
        contentDiv.innerHTML = `
          <div class="empty-state">
            <div class="empty-state-icon">📊</div>
            <div class="empty-state-text">No BMI Data Available</div>
            <div class="empty-state-subtext">Start tracking your BMI to see analytics and insights here.</div>
          </div>
        `;
        return;
      }

      // Calculate statistics
      const totalRecords = records.length;
      const bmis = records.map(r => r.bmi);
      const avgBMI = (bmis.reduce((a, b) => a + b, 0) / totalRecords).toFixed(1);
      const maxBMI = Math.max(...bmis).toFixed(1);
      const minBMI = Math.min(...bmis).toFixed(1);

      // Category breakdown
      const categoryCount = {};
      records.forEach(record => {
        const { category } = getBMICategory(record.bmi);
        categoryCount[category] = (categoryCount[category] || 0) + 1;
      });

      // Calculate 7-day weekly progress
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      
      const weeklyRecords = records.filter(r => {
        const recordDate = new Date(r.date);
        return recordDate >= sevenDaysAgo;
      }).sort((a, b) => new Date(a.date) - new Date(b.date));
      
      let weeklyProgressHTML = '';
      let progressStatus = '';
      let progressIcon = '';
      let progressMessage = '';
      
      if (weeklyRecords.length >= 2) {
        const firstBMI = weeklyRecords[0].bmi;
        const lastBMI = weeklyRecords[weeklyRecords.length - 1].bmi;
        const bmiChange = (lastBMI - firstBMI).toFixed(2);
        const percentChange = ((bmiChange / firstBMI) * 100).toFixed(1);
        
        const firstCategory = getBMICategory(firstBMI).category;
        const lastCategory = getBMICategory(lastBMI).category;
        
        if (bmiChange < 0) {
          progressStatus = 'improving';
          progressIcon = '📉';
          progressMessage = 'Great job! Your BMI has decreased this week.';
        } else if (bmiChange > 0) {
          progressStatus = 'increasing';
          progressIcon = '📈';
          progressMessage = 'Your BMI has increased this week. Consider reviewing your goals.';
        } else {
          progressStatus = 'stable';
          progressIcon = '➡️';
          progressMessage = 'Your BMI has remained stable this week.';
        }
        
        weeklyProgressHTML = `
          <div class="progress-result ${progressStatus}">
            <div class="progress-icon">${progressIcon}</div>
            <div class="progress-message">${progressMessage}</div>
            <div class="progress-details">
              <div class="progress-metric">
                <span class="metric-label">BMI Change:</span>
                <span class="metric-value ${bmiChange < 0 ? 'positive' : bmiChange > 0 ? 'negative' : 'neutral'}">${bmiChange > 0 ? '+' : ''}${bmiChange}</span>
              </div>
              <div class="progress-metric">
                <span class="metric-label">Percentage:</span>
                <span class="metric-value">${percentChange}%</span>
              </div>
              <div class="progress-metric">
                <span class="metric-label">Category:</span>
                <span class="metric-value">${firstCategory} → ${lastCategory}</span>
              </div>
              <div class="progress-metric">
                <span class="metric-label">Records This Week:</span>
                <span class="metric-value">${weeklyRecords.length}</span>
              </div>
            </div>
          </div>
        `;
      } else if (weeklyRecords.length === 1) {
        weeklyProgressHTML = `
          <div class="progress-result stable">
            <div class="progress-icon">📊</div>
            <div class="progress-message">You have 1 BMI record this week. Add more entries to track your progress!</div>
            <div class="progress-details">
              <div class="progress-metric">
                <span class="metric-label">Current BMI:</span>
                <span class="metric-value">${weeklyRecords[0].bmi.toFixed(1)}</span>
              </div>
              <div class="progress-metric">
                <span class="metric-label">Category:</span>
                <span class="metric-value">${getBMICategory(weeklyRecords[0].bmi).category}</span>
              </div>
            </div>
          </div>
        `;
      } else {
        weeklyProgressHTML = `
          <div class="progress-result stable">
            <div class="progress-icon">📝</div>
            <div class="progress-message">No BMI records in the last 7 days. Start tracking to see your weekly progress!</div>
          </div>
        `;
      }

      // Generate HTML
      contentDiv.innerHTML = `
        <!-- Weekly Progress Summary -->
        <div class="chart-container">
          <div class="chart-title">📊 Weekly Progress Summary (Last 7 Days)</div>
          ${weeklyProgressHTML}
        </div>

        <!-- Stats Grid -->
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-label">Total Records</div>
            <div class="stat-value">${totalRecords}</div>
            <div class="stat-description">BMI entries tracked</div>
          </div>

          <div class="stat-card">
            <div class="stat-label">Average BMI</div>
            <div class="stat-value">${avgBMI}</div>
            <div class="stat-description">${getBMICategory(parseFloat(avgBMI)).category}</div>
          </div>

          <div class="stat-card">
            <div class="stat-label">Highest BMI</div>
            <div class="stat-value">${maxBMI}</div>
            <div class="stat-description">Peak recorded value</div>
          </div>

          <div class="stat-card">
            <div class="stat-label">Lowest BMI</div>
            <div class="stat-value">${minBMI}</div>
            <div class="stat-description">Minimum recorded value</div>
          </div>
        </div>

        <!-- BMI History Chart -->
        <div class="chart-container">
          <div class="chart-title">BMI History Timeline</div>
          <div class="chart-area" id="chartArea">
            ${records.slice(-10).reverse().map((record, index) => {
              const height = (record.bmi / Math.max(...bmis)) * 300;
              // Display the date string directly as it's already formatted
              const dateStr = record.date || 'N/A';
              const { colorClass } = getBMICategory(record.bmi);
              return `
                <div class="bar-container">
                  <div class="bar ${colorClass}" style="height: ${height}px;">
                    <div class="bar-value">${record.bmi.toFixed(1)}</div>
                  </div>
                  <div class="bar-label">${dateStr}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Category Breakdown -->
        <div class="chart-container">
          <div class="chart-title">BMI Category Distribution</div>
          <div class="category-breakdown">
            ${Object.entries(categoryCount).map(([category, count]) => {
              const { colorClass } = getBMICategory(category === 'Underweight' ? 17 : 
                                                     category === 'Normal' ? 22 : 
                                                     category === 'Overweight' ? 27 : 
                                                     category === 'Obese' ? 35 : 42);
              return `
                <div class="category-item">
                  <div class="category-color ${colorClass}"></div>
                  <div class="category-info">
                    <div class="category-name">${category}</div>
                    <div class="category-count">${count} record${count !== 1 ? 's' : ''} (${((count/totalRecords)*100).toFixed(1)}%)</div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // Load analytics on page load
    window.addEventListener('DOMContentLoaded', loadAnalytics);