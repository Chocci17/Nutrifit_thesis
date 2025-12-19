// Supabase Configuration
const SUPABASE_URL = 'https://pncfzxuecxzcdyxdwuok.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuY2Z6eHVlY3h6Y2R5eGR3dW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4Njg1NzEsImV4cCI6MjA3ODQ0NDU3MX0.BlfihjUmYAgP-9UisG4EN1srsteB_SZ9ut5TiBgAQ-E';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Get current user from localStorage
const currentUser = JSON.parse(localStorage.getItem('nutrifit_user') || 'null');

document.addEventListener('DOMContentLoaded', async () => {
  const signLink = document.querySelector('.navbar-links-container a[href*="signup"]') || Array.from(document.querySelectorAll('.navbar-links-container a')).find(a => /sign/i.test(a.textContent));
  if (!signLink) return;
  const page = window.location.pathname.split('/').pop().toLowerCase();
  function setLink(text, href) {
    signLink.textContent = text;
    signLink.setAttribute('href', href);
    signLink.onclick = (e) => { e.preventDefault(); window.location.href = href; return false; };
  }
  if (page === 'signup.html') {
    setLink('Login', 'login.html');
  } else if (page === 'login.html') {
    setLink('Sign Up', 'signup.html');
  } else {
    setLink('Sign Up', 'signup.html');
  }

  // Check if user is logged in and profile is complete - only if they came from login
  if (currentUser && currentUser.id && currentUser.loggedInAt) {
    // Check if logged in recently (within last 5 minutes)
    const loginTime = new Date(currentUser.loggedInAt);
    const now = new Date();
    const timeDiff = (now - loginTime) / 1000 / 60; // minutes
    
    if (timeDiff < 5) {
      await checkProfileCompletion();
    }
  }
});

// Check if profile setup is complete
async function checkProfileCompletion() {
  try {
<<<<<<< HEAD
    // Query Supabase for the user's profile by user ID
    const { data: profile, error: profileError } = await supabaseClient
=======
    const { data: profile, error } = await supabase
>>>>>>> parent of 649e4fb (s)
      .from('profiles')
      .select('*')
      .eq('id', currentUser.id)
      .maybeSingle();

    if (error) {
      console.error('Error checking profile:', error);
      return;
    }

    // Check if profile is incomplete
    const isIncomplete = !profile || 
                         !profile.display_name || 
                         !profile.age || 
                         !profile.gender || 
                         !profile.height || 
                         !profile.weight;

    // Check if this is first login from localStorage flag
    const isFirstLogin = currentUser.isFirstLogin === true;

    if (isIncomplete || isFirstLogin) {
      console.log('Profile incomplete or first login, showing setup modal');
      showProfileSetupModal();
    }
  } catch (err) {
    console.error('Error in checkProfileCompletion:', err);
  }
}

// Show profile setup modal
function showProfileSetupModal() {
  const modal = document.getElementById('profileSetupModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Close profile setup modal
function closeProfileSetupModal() {
  const modal = document.getElementById('profileSetupModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Handle profile setup form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('profileSetupForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      await handleProfileSetupSubmit();
    });
  }
});

async function handleProfileSetupSubmit() {
  try {
    console.log('Starting profile setup submission...');
    console.log('Current user:', currentUser);

    // Verify user is authenticated
    const { data: { session }, error: sessionError } = await supabaseClient.auth.getSession();
    console.log('Current session:', session);
    
    if (sessionError || !session) {
      throw new Error('Not authenticated. Please log in again.');
    }

    // Get form values
    const displayName = document.getElementById('setupDisplayName').value.trim();
    const age = parseInt(document.getElementById('setupAge').value);
    const gender = document.getElementById('setupGender').value;
    const height = document.getElementById('setupHeight').value;
    const weight = parseFloat(document.getElementById('setupWeight').value);
    const primaryGoal = document.getElementById('setupPrimaryGoal').value;
    const targetWeight = parseFloat(document.getElementById('setupTargetWeight').value);
    const difficulty = document.getElementById('setupDifficulty').value;

    console.log('Form values:', { displayName, age, gender, height, weight, primaryGoal, targetWeight, difficulty });

    // Validate all fields
    if (!displayName || !age || !gender || !height || !weight || !primaryGoal || !targetWeight || !difficulty) {
      alert('Please fill in all required fields');
      return;
    }

    // Disable submit button
    const submitBtn = document.querySelector('.setup-submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Saving...';

    // Update or insert profiles table
    console.log('Updating profiles table...');
    const { data: profileData, error: profileError } = await supabaseClient
      .from('profiles')
      .upsert({
        id: currentUser.id,
        display_name: displayName,
        age: age,
        gender: gender,
        height: height + ' cm',
        weight: weight + ' kg',
        updated_at: new Date().toISOString()
      }, { onConflict: 'id' })
      .select();

    console.log('Profile update result:', profileData, profileError);
    
    if (profileError) {
      console.error('Profile update error:', profileError);
      throw new Error('Profile update failed: ' + profileError.message);
    }
    
    if (!profileData || profileData.length === 0) {
      console.warn('No data returned from profile upsert');
    }

    // Insert or update macro_targets table
    console.log('Updating macro_targets table...');
    const { data: targetData, error: targetError } = await supabaseClient
      .from('macro_targets')
      .upsert({
        user_id: currentUser.id,
        primary_goal: primaryGoal,
        target_weight: targetWeight,
        difficulty: difficulty,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id' })
      .select();

    console.log('Macro targets update result:', targetData, targetError);

    if (targetError) {
      console.error('Macro targets error:', targetError);
      throw new Error('Macro targets update failed: ' + targetError.message);
    }

    // Update localStorage and mark as no longer first login
    currentUser.displayName = displayName;
    currentUser.isFirstLogin = false;
    localStorage.setItem('nutrifit_user', JSON.stringify(currentUser));

    // Success
    console.log('Profile setup completed successfully!');
    alert('Profile setup complete! Welcome to NutriFit! 🎉');
    closeProfileSetupModal();
    
    // Redirect to Meal log page
    window.location.href = 'Meal log.html';

  } catch (err) {
    console.error('Error saving profile:', err);
    console.error('Error details:', err.message, err.details, err.hint);
    alert('Failed to save profile: ' + (err.message || 'Unknown error. Please try again.'));
    
    // Re-enable submit button
    const submitBtn = document.querySelector('.setup-submit-btn');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Complete Setup';
    }
  }
}