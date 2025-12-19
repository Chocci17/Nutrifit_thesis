window.addEventListener('DOMContentLoaded', () => {
  const SUPABASE_URL = 'https://pncfzxuecxzcdyxdwuok.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuY2Z6eHVlY3h6Y2R5eGR3dW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4Njg1NzEsImV4cCI6MjA3ODQ0NDU3MX0.BlfihjUmYAgP-9UisG4EN1srsteB_SZ9ut5TiBgAQ-E';
  if (!window.supabaseClient) {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
  var supabase = window.supabaseClient;

  let isSubmitting = false;

  async function createAccount() {
    if (isSubmitting) return;
    isSubmitting = true;

    try {
      const formData = getFormData();
      console.log('Form Data:', formData);

      const validation = validateFormData(formData);
      if (!validation.valid) {
        alert(validation.message);
        return;
      }

      const button = document.querySelector('.btn-primary');
      const originalText = button.textContent;
      button.textContent = 'Creating account...';
      button.disabled = true;

      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName
          }
        }
      });

      console.log('Signup response:', data, error);
      console.log('Current session:', await supabase.auth.getSession());

      if (error) {
        if (error.message.includes('already registered')) {
          alert('This email is already registered. Please login instead.');
        } else if (error.message.includes('rate limit')) {
          alert('Too many signup attempts. Please wait a few minutes and try again.');
        } else {
          alert('Signup failed: ' + error.message);
        }
        return;
      }

      const user = data.user;
      const session = data.session;

      // Check if user already exists (Supabase returns user even if already registered)
      if (user && user.identities && user.identities.length === 0) {
        alert('This email is already registered. Please check your email for the confirmation link, or try logging in.');
        return;
      }
      
      if (user) {
        const userId = user.id;

        // Try to insert profile regardless of session (trigger will handle it if this fails)
        const { error: profileError, data: profileData } = await supabase
          .from('profiles')
          .insert([
            {
              id: userId,
              email: formData.email,
              first_name: formData.firstName,
              last_name: formData.lastName,
              created_at: new Date().toISOString()
            }
          ])
          .select();

        console.log('Profile insert result:', profileData, profileError);

        if (profileError) {
          console.error('Profile creation failed:', profileError);
          // Profile should be created by trigger on email confirmation
        }

        if (session) {
          alert('Account created successfully! You can now login.');
        } else {
          alert('Account created successfully! Please check your email to verify your account before logging in.');
        }

        localStorage.setItem('nutrifit_user', JSON.stringify({
          id: userId,
          email: user.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          createdAt: new Date().toISOString()
        }));

        setTimeout(() => {
          window.location.href = 'login.html';
        }, 2000);
      }

    } catch (err) {
      console.error('Unexpected error:', err);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      isSubmitting = false;
      const button = document.querySelector('.btn-primary');
      button.textContent = 'Create account';
      button.disabled = false;
    }
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isValidPassword(password) {
    return password.length >= 6;
  }

  function getFormData() {
    return {
      firstName: document.querySelector('input[name="first"]').value.trim(),
      lastName: document.querySelector('input[name="last"]').value.trim(),
      email: document.querySelector('input[name="email"]').value.trim(),
      password: document.querySelector('input[name="password"]').value.trim(),
      agreed: document.querySelector('input[name="agree"]').checked
    };
  }

  function validateFormData(formData) {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      return { valid: false, message: 'Please fill out all fields.' };
    }
    if (!isValidEmail(formData.email)) {
      return { valid: false, message: 'Please enter a valid email address.' };
    }
    if (!isValidPassword(formData.password)) {
      return { valid: false, message: 'Password must be at least 6 characters long.' };
    }
    if (!formData.agreed) {
      return { valid: false, message: 'You must agree to the terms & conditions.' };
    }
    return { valid: true };
  }

  const signupForm = document.querySelector('.login-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      createAccount();
    });
  }

  // Also add click listener to button as backup
  const signupButton = document.querySelector('.btn-primary');
  if (signupButton) {
    signupButton.addEventListener('click', (e) => {
      e.preventDefault();
      createAccount();
    });
  }

  document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && document.activeElement.type === 'password') {
      e.preventDefault();
      createAccount();
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

// Terms & Conditions Modal
document.addEventListener('DOMContentLoaded', () => {
  const termsLink = document.getElementById('terms-link');
  const modal = document.getElementById('terms-modal');
  const closeBtn = modal.querySelector('.close-btn');

  termsLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});
