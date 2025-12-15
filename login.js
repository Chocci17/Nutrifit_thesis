window.addEventListener('DOMContentLoaded', () => {
  const SUPABASE_URL = 'https://pncfzxuecxzcdyxdwuok.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuY2Z6eHVlY3h6Y2R5eGR3dW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4Njg1NzEsImV4cCI6MjA3ODQ0NDU3MX0.BlfihjUmYAgP-9UisG4EN1srsteB_SZ9ut5TiBgAQ-E';
  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  let isSubmitting = false;

  // Handle email confirmation callback
  async function handleEmailConfirmation() {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = hashParams.get('access_token');
    const type = hashParams.get('type');

    if (type === 'signup' && accessToken) {
      console.log('Email confirmation detected');
      
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Session error:', error);
          alert('Email confirmation failed. Please try logging in.');
          return;
        }

        if (data.session) {
          const user = data.session.user;
          
          // Fetch user profile
          const { data: profileData } = await supabase
            .from('profiles')
            .select('first_name, last_name')
            .eq('id', user.id)
            .single();

          // Check if profile has display_name (to determine if first login)
          const isFirstLogin = !profileData?.display_name;

          // Store user info
          localStorage.setItem('nutrifit_user', JSON.stringify({
            id: user.id,
            email: user.email,
            firstName: profileData?.first_name || '',
            lastName: profileData?.last_name || '',
            loggedInAt: new Date().toISOString(),
            isFirstLogin: isFirstLogin
          }));

          localStorage.setItem('nutrifit_session', JSON.stringify(data.session));

          alert('Email confirmed! Welcome to NutriFit!');
          window.location.href = 'profile.html';
        }
      } catch (err) {
        console.error('Confirmation error:', err);
        alert('An error occurred during confirmation. Please try logging in.');
      }
    }
  }

  // Check for email confirmation on page load
  handleEmailConfirmation();

  async function handleLogin(e) {
    e.preventDefault();
    
    if (isSubmitting) return;
    isSubmitting = true;

    try {
      const email = document.querySelector('input[type="email"]').value.trim();
      const password = document.querySelector('input[type="password"]').value.trim();

      if (!email || !password) {
        alert('Please enter both email and password.');
        return;
      }

      const button = document.querySelector('.btn-primary');
      const originalText = button.textContent;
      button.textContent = 'Signing in...';
      button.disabled = true;

      // Sign in with Supabase
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });

      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          alert('Login failed: Invalid email or password. If you just signed up, please check your email and confirm your account first.');
        } else if (error.message.includes('Email not confirmed')) {
          alert('Please confirm your email address before logging in. Check your inbox for the confirmation link.');
        } else {
          alert('Login failed: ' + error.message);
        }
        button.textContent = originalText;
        button.disabled = false;
        return;
      }

      const user = data.user;
      if (user) {
        // Fetch user profile from profiles table
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('first_name, last_name')
          .eq('id', user.id)
          .single();

        // Check if profile has display_name (to determine if first login)
        const isFirstLogin = !profileData?.display_name;

        // Store user info in localStorage
        localStorage.setItem('nutrifit_user', JSON.stringify({
          id: user.id,
          email: user.email,
          firstName: profileData?.first_name || '',
          lastName: profileData?.last_name || '',
          loggedInAt: new Date().toISOString(),
          isFirstLogin: isFirstLogin
        }));

        // Store session
        localStorage.setItem('nutrifit_session', JSON.stringify(data.session));

        alert('Login successful!');
        
        // Redirect to profile.html where profile check will run
        window.location.href = 'profile.html';
      }

    } catch (err) {
      console.error('Unexpected error:', err);
      alert('An unexpected error occurred. Please try again.');
      const button = document.querySelector('.btn-primary');
      button.textContent = 'Sign in';
      button.disabled = false;
    } finally {
      isSubmitting = false;
    }
  }

  // Attach event listener to form
  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }

  // Also handle Enter key on password field
  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && document.activeElement.type === 'password') {
      const form = document.querySelector('.login-form');
      if (form) {
        handleLogin(e);
      }
    }
  });
});

// Navbar Sign Up / Login toggle
document.addEventListener('DOMContentLoaded', () => {
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
});
