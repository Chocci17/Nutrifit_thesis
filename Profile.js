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

    function togglePreference(element) {
      element.classList.toggle('active');
    }

    // Edit Personal Information Modal Functions
    function editPersonalInfo() {
      const modal = document.getElementById('editPersonalModal');
      
      // Populate form with current values
      document.getElementById('editFirstName').value = document.getElementById('firstName').textContent;
      document.getElementById('editLastName').value = document.getElementById('lastName').textContent;
      document.getElementById('editDisplayName').value = document.getElementById('displayName').textContent;
      document.getElementById('editEmail').value = document.getElementById('email').textContent;
      document.getElementById('editAge').value = document.getElementById('age').textContent.replace(' years', '');
      document.getElementById('editGender').value = document.getElementById('gender').textContent;
      document.getElementById('editHeight').value = document.getElementById('height').textContent;
      document.getElementById('editWeight').value = document.getElementById('weight').textContent;
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Close sidebar if open
      const sidebar = document.getElementById('dropdownSidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar && overlay) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      }
    }

    function closeEditPersonalModal() {
      const modal = document.getElementById('editPersonalModal');
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    async function savePersonalInfo(event) {
      event.preventDefault();
      
      // Get form values
      const firstName = document.getElementById('editFirstName').value.trim();
      const lastName = document.getElementById('editLastName').value.trim();
      const displayName = document.getElementById('editDisplayName').value.trim();
      const email = document.getElementById('editEmail').value;
      const age = document.getElementById('editAge').value;
      const gender = document.getElementById('editGender').value;
      const height = document.getElementById('editHeight').value.trim();
      const weight = document.getElementById('editWeight').value.trim();
      
      try {
        // First, check if profile exists
        const { data: existingProfile, error: checkError } = await supabase
          .from('profiles')
          .select('id')
          .eq('id', currentUser.id)
          .maybeSingle();
        
        console.log('Existing profile:', existingProfile);
        
        // Prepare the profile data (email is stored in auth.users, not profiles)
        const profileData = {
          id: currentUser.id,
          first_name: firstName,
          last_name: lastName,
          display_name: displayName || null,
          age: age ? parseInt(age) : null,
          gender: gender || null,
          height: height || null,
          weight: weight || null,
          updated_at: new Date().toISOString()
        };
        
        let result;
        if (existingProfile) {
          // Update existing profile
          result = await supabase
            .from('profiles')
            .update(profileData)
            .eq('id', currentUser.id);
        } else {
          // Insert new profile
          result = await supabase
            .from('profiles')
            .insert([profileData]);
        }
        
        if (result.error) {
          console.error('Supabase error:', result.error);
          throw result.error;
        }
        
        console.log('Profile saved successfully:', result);
        
        // Update localStorage
        currentUser.firstName = firstName;
        currentUser.lastName = lastName;
        currentUser.email = email;
        localStorage.setItem('nutrifit_user', JSON.stringify(currentUser));
        
        // Update profile display
        document.getElementById('firstName').textContent = firstName;
        document.getElementById('lastName').textContent = lastName;
        document.getElementById('displayName').textContent = displayName || 'N/A';
        document.getElementById('userName').textContent = `${firstName} ${lastName}`;
        document.getElementById('email').textContent = email;
        document.getElementById('userEmail').textContent = email;
        document.getElementById('age').textContent = age ? age + ' years' : 'N/A';
        document.getElementById('gender').textContent = gender || 'N/A';
        document.getElementById('height').textContent = height || 'N/A';
        document.getElementById('weight').textContent = weight || 'N/A';
        
        // Close modal
        closeEditPersonalModal();
        
        alert('Profile updated successfully!');
      } catch (err) {
        console.error('Error saving profile:', err);
        console.error('Error details:', JSON.stringify(err, null, 2));
        alert('Failed to save profile. Error: ' + (err.message || 'Unknown error. Check console for details.'));
      }
      
      // Close modal
      closeEditPersonalModal();
    }

    // Edit Fitness Goals Modal Functions
    function editFitnessGoals() {
      const modal = document.getElementById('editGoalsModal');
      
      // Populate form with current values
      document.getElementById('editPrimaryGoal').value = document.getElementById('primaryGoal').textContent;
      const targetWeightText = document.getElementById('targetWeight').textContent;
      const targetWeightValue = targetWeightText.replace(' kg', '').trim();
      document.getElementById('editTargetWeight').value = targetWeightValue;
      document.getElementById('editDifficulty').value = document.getElementById('difficulty').textContent;
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Close sidebar if open
      const sidebar = document.getElementById('dropdownSidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar && overlay) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      }
    }

    function closeEditGoalsModal() {
      const modal = document.getElementById('editGoalsModal');
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    async function saveGoals(event) {
      event.preventDefault();
      
      // Get form values
      const primaryGoal = document.getElementById('editPrimaryGoal').value;
      const targetWeight = parseFloat(document.getElementById('editTargetWeight').value);
      const difficulty = document.getElementById('editDifficulty').value;
      
      try {
        // Save to Supabase macro_targets table
        const { error } = await supabase
          .from('macro_targets')
          .upsert({
            user_id: currentUser.id,
            primary_goal: primaryGoal,
            target_weight: targetWeight,
            difficulty: difficulty,
            updated_at: new Date().toISOString()
          }, { onConflict: 'user_id' });
        
        if (error) throw error;
        
        // Update profile display
        document.getElementById('primaryGoal').textContent = primaryGoal;
        document.getElementById('targetWeight').textContent = targetWeight + ' kg';
        document.getElementById('difficulty').textContent = difficulty;
        
        alert('Fitness goals updated successfully!');
      } catch (err) {
        console.error('Error saving fitness goals:', err);
        alert('Failed to save fitness goals. Please try again.');
      }
      
      // Close modal
      closeEditGoalsModal();
    }

    // Close modals when clicking outside
    document.addEventListener('click', function(event) {
      const personalModal = document.getElementById('editPersonalModal');
      const goalsModal = document.getElementById('editGoalsModal');
      
      if (event.target === personalModal) {
        closeEditPersonalModal();
      }
      if (event.target === goalsModal) {
        closeEditGoalsModal();
      }
    });

    // About Modal Functions
    function openAboutModal() {
      const aboutModal = document.getElementById('aboutModal');
      aboutModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
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

    // Load user data from Supabase and display it
    window.addEventListener('DOMContentLoaded', async function() {
      console.log('Profile page loaded');
      
      if (currentUser) {
        try {
          // Get auth user data first (includes metadata)
          const { data: authData, error: authError } = await supabase.auth.getUser();
          
          console.log('Auth user data:', authData);
          
          // Load profile from Supabase
          const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', currentUser.id)
            .maybeSingle();
          
          if (error) {
            console.error('Error loading profile:', error);
          }
          
          if (data) {
            // Update from database - Display first and last name separately
            console.log('Raw data from Supabase profiles:', data);
            console.log('Auth user metadata:', authData?.user?.user_metadata);
            console.log('Auth user identities:', authData?.user?.identities);
            
            // Get first and last name from profiles table or auth metadata
            let firstName = data.first_name;
            let lastName = data.last_name;
            
            // If not in profiles, try to get from auth metadata (from signup)
            if (!firstName && authData?.user?.user_metadata?.first_name) {
              firstName = authData.user.user_metadata.first_name;
            }
            if (!lastName && authData?.user?.user_metadata?.last_name) {
              lastName = authData.user.user_metadata.last_name;
            }
            
            // Fallback values
            firstName = firstName || 'N/A';
            lastName = lastName || 'N/A';
            
            // Get display name from auth user email (username part)
            let displayName = 'N/A';
            
            // First try: get from profile table
            if (data.display_name) {
              displayName = data.display_name;
              console.log('Display name from profiles table:', displayName);
            }
            // Second try: get from user metadata
            else if (authData?.user?.user_metadata) {
              const metadata = authData.user.user_metadata;
              if (metadata.display_name) {
                displayName = metadata.display_name;
                console.log('Display name from user_metadata.display_name:', displayName);
              } else if (metadata.full_name) {
                displayName = metadata.full_name;
                console.log('Display name from user_metadata.full_name:', displayName);
              } else if (metadata.name) {
                displayName = metadata.name;
                console.log('Display name from user_metadata.name:', displayName);
              }
            }
            // Third try: get from auth user email
            if (displayName === 'N/A' && authData?.user?.email) {
              displayName = authData.user.email.split('@')[0];
              console.log('Display name from email:', displayName);
            }
            
            const fullName = `${firstName} ${lastName}`.trim();
            console.log('Final values - firstName:', firstName, 'lastName:', lastName, 'displayName:', displayName);
            
            // Update all name displays
            document.getElementById('userName').textContent = fullName !== 'N/A N/A' ? fullName : 'User';
            document.getElementById('firstName').textContent = firstName;
            document.getElementById('lastName').textContent = lastName;
            document.getElementById('displayName').textContent = displayName;
            
            // Update email - get from authenticated user
            const userEmail = authData?.user?.email || data.email || 'N/A';
            document.getElementById('userEmail').textContent = userEmail;
            document.getElementById('email').textContent = userEmail;
            
            // Update age
            document.getElementById('age').textContent = data.age ? data.age + ' years' : 'N/A';
            
            // Update gender
            document.getElementById('gender').textContent = data.gender || 'N/A';
            
            // Update height
            document.getElementById('height').textContent = data.height || 'N/A';
            
            // Update weight
            document.getElementById('weight').textContent = data.weight || 'N/A';
            
            console.log('Profile loaded from database:', data);
          } else {
            // Fallback to localStorage - Display first and last name separately
            const firstName = currentUser.firstName || 'First';
            const lastName = currentUser.lastName || 'Last';
            const displayName = currentUser.displayName || 'N/A';
            const fullName = `${firstName} ${lastName}`.trim();
            document.getElementById('userName').textContent = fullName;
            document.getElementById('firstName').textContent = firstName;
            document.getElementById('lastName').textContent = lastName;
            document.getElementById('displayName').textContent = displayName;
            
            // Get email from authenticated user
            const userEmail = authData?.user?.email || currentUser.email || 'N/A';
            document.getElementById('userEmail').textContent = userEmail;
            document.getElementById('email').textContent = userEmail;
          }

          // Load Days Active (count unique calendar days from BMI records)
          const { data: bmiRecordsData, error: bmiRecordsError } = await supabase
            .from('bmi_records')
            .select('date, created_at')
            .eq('user_id', currentUser.id);
          
          if (!bmiRecordsError && bmiRecordsData && bmiRecordsData.length > 0) {
            const uniqueDates = new Set();
            
            bmiRecordsData.forEach(record => {
              // Prefer the date field if it exists, otherwise use created_at
              if (record.date) {
                uniqueDates.add(record.date);
              } else if (record.created_at) {
                // Extract just the date part (YYYY-MM-DD) from timestamp
                const dateOnly = record.created_at.split('T')[0];
                uniqueDates.add(dateOnly);
              }
            });
            
            const daysActive = uniqueDates.size;
            document.getElementById('statDays').textContent = daysActive;
            console.log('Days active (unique calendar days from BMI records):', daysActive);
            console.log('Unique BMI tracking dates:', Array.from(uniqueDates).sort());
          } else {
            document.getElementById('statDays').textContent = '0';
            console.log('No BMI records found or error:', bmiRecordsError);
          }

          // Load Meals Logged (count total meal logs)
          const { data: mealData, error: mealError } = await supabase
            .from('meal_logs')
            .select('id', { count: 'exact' })
            .eq('user_id', currentUser.id);
          
          if (!mealError && mealData) {
            const mealsLogged = mealData.length;
            document.getElementById('statMeals').textContent = mealsLogged;
            console.log('Meals logged:', mealsLogged);
          } else {
            document.getElementById('statMeals').textContent = '0';
            console.log('No meal logs found or error:', mealError);
          }

          // Load Fitness Goals from macro_targets table
          const { data: goalsData, error: goalsError } = await supabase
            .from('macro_targets')
            .select('primary_goal, target_weight, difficulty')
            .eq('user_id', currentUser.id)
            .maybeSingle();
          
          if (!goalsError && goalsData) {
            if (goalsData.primary_goal) {
              document.getElementById('primaryGoal').textContent = goalsData.primary_goal;
            }
            if (goalsData.target_weight) {
              document.getElementById('targetWeight').textContent = goalsData.target_weight + ' kg';
            }
            if (goalsData.difficulty) {
              document.getElementById('difficulty').textContent = goalsData.difficulty;
            }
            console.log('Fitness goals loaded:', goalsData);
          } else {
            console.log('No fitness goals found or error:', goalsError);
          }

        } catch (err) {
          console.error('Error:', err);
        }
      }
    });