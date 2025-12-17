// Global Supabase client (used by multiple handlers). Replace keys if needed.
const SUPABASE_URL = 'https://pncfzxuecxzcdyxdwuok.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuY2Z6eHVlY3h6Y2R5eGR3dW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4Njg1NzEsImV4cCI6MjA3ODQ0NDU3MX0.BlfihjUmYAgP-9UisG4EN1srsteB_SZ9ut5TiBgAQ-E';
const supabase = (window.supabase && typeof window.supabase.createClient === 'function')
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

// EmailJS configuration (client-side). Replace these placeholders with your EmailJS values.
// Create an account at https://www.emailjs.com/, create a service and template, then get your public key.
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';

// Initialize EmailJS if available and a public key is provided
try {
  if (window.emailjs && EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
} catch (e) {
  console.warn('EmailJS init failed or not present', e);
}

window.addEventListener('DOMContentLoaded', () => {

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
          window.location.href = 'Main.html';
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
        
        // Redirect to Main.html after login so modal logic can run
        window.location.href = 'Main.html';
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

// Forgot-password modal handlers: open modal, send recovery via Supabase or fallback
document.addEventListener('DOMContentLoaded', () => {
  const forgotLink = document.querySelector('.forgot');
  const modal = document.getElementById('forgotModal');
  const closeBtn = document.getElementById('forgotClose');
  const cancelBtn = document.getElementById('forgotCancel');
  const sendBtn = document.getElementById('forgotSend');
  const emailInput = document.getElementById('forgotEmail');
  const msgEl = document.getElementById('forgotMessage');

  if (!forgotLink || !modal) return;

  let _prevActiveElement = null;
  const openModal = () => {
    if (msgEl) { msgEl.textContent = ''; msgEl.style.display = 'none'; msgEl.classList.remove('success','error'); }
    // store previously focused element to restore focus on close
    _prevActiveElement = document.activeElement;
    // mark modal as visible to AT and make other content inert to prevent focus
    modal.setAttribute('aria-hidden', 'false');
    try {
      Array.from(document.body.children).forEach((el) => {
        if (el !== modal) el.setAttribute('inert', '');
      });
    } catch (e) {
      // inert may not be supported; ignore
    }
    modal.classList.add('show');
    // focus the input inside the modal
    if (emailInput) emailInput.focus();
  };

  const closeModal = () => {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    try {
      Array.from(document.body.children).forEach((el) => {
        if (el !== modal) el.removeAttribute('inert');
      });
    } catch (e) {
      // ignore
    }
    // restore previous focus
    try {
      if (_prevActiveElement && typeof _prevActiveElement.focus === 'function') _prevActiveElement.focus();
    } catch (e) {}
  };

  const setMessage = (text, type) => {
    if (!msgEl) return;
    msgEl.textContent = text;
    msgEl.classList.remove('success','error');
    if (type) msgEl.classList.add(type);
    msgEl.style.display = 'block';
  };

  forgotLink.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
    emailInput && emailInput.focus();
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

  // Click outside modal to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (sendBtn) {
    sendBtn.addEventListener('click', async () => {
      const email = (emailInput && emailInput.value || '').trim();
      if (!email) {
        setMessage('Please enter your email address.', 'error');
        return;
      }

      sendBtn.disabled = true;
      const original = sendBtn.textContent;
      sendBtn.textContent = 'Sending...';

      try {
        // Prefer sending a password-recovery/reset via Supabase if available
        if (window.supabase && supabase.auth) {
          if (typeof supabase.auth.resetPasswordForEmail === 'function') {
            // Some SDK versions expect a plain email string rather than an object
            // Call with the email string to avoid JSON parse errors on the server
            const res = await supabase.auth.resetPasswordForEmail(email);
            if (res?.error) throw res.error;
            setMessage('If an account exists for that email, recovery instructions have been sent.', 'success');
            sendBtn.disabled = true;
            sendBtn.textContent = 'Sent';
            return;
          }

          // Fallback: send magic link (passwordless) if reset not available
          if (typeof supabase.auth.signInWithOtp === 'function') {
            const { data, error } = await supabase.auth.signInWithOtp({ email });
            if (error) throw error;
            setMessage('A sign-in/recovery link has been sent to your email (check spam).', 'success');
            sendBtn.disabled = true;
            sendBtn.textContent = 'Sent';
            return;
          }
        }

        // Try EmailJS (client-side) as a fallback if configured
        if (window.emailjs && EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' && EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID') {
          try {
            await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
              to_email: email,
              subject: 'NutriFit account recovery',
              message: 'Please provide a password recovery link or instructions for this account.'
            });
            setMessage('If an account exists for that email, recovery instructions have been emailed.', 'success');
            sendBtn.disabled = true;
            sendBtn.textContent = 'Sent';
            return;
          } catch (emailErr) {
            console.warn('EmailJS send failed', emailErr);
            // fall through to mailto fallback
          }
        }

        // Final fallback: open user's mail client with prefilled email
        const subject = encodeURIComponent('NutriFit account recovery request');
        const body = encodeURIComponent('Please help me recover access to my NutriFit account for: ' + email);
        setMessage('Opening your mail client as a fallback. If nothing happens, please email support.', 'success');
        window.location.href = `mailto:support@yourdomain.com?subject=${subject}&body=${body}`;
      } catch (err) {
        console.error('Recovery send error:', err);
        setMessage('Unable to automatically send recovery email. Opening mail client as fallback.', 'error');
        const subject = encodeURIComponent('NutriFit account recovery request');
        const body = encodeURIComponent('Please help me recover access to my NutriFit account for: ' + email + '\n\nError: ' + (err?.message || err));
        window.location.href = `mailto:support@yourdomain.com?subject=${subject}&body=${body}`;
      } finally {
        // on success we leave button disabled; on failure mailto will navigate away
        if (sendBtn) {
          sendBtn.disabled = false;
          sendBtn.textContent = original;
        }
      }
    });
  }
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
