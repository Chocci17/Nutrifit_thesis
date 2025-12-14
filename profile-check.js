document.addEventListener('DOMContentLoaded', () => {
  const publicPages = ['index.html', 'login.html', 'signup.html', 'test-supabase.html', 'turon.htm'];
  const page = window.location.pathname.split('/').pop().toLowerCase();
  if (!page || publicPages.includes(page)) return;

  try {
    const session = localStorage.getItem('nutrifit_session');
    if (!session) {
      window.location.href = 'login.html';
    }
  } catch (e) {
    console.error('Error checking session:', e);
    window.location.href = 'login.html';
  }
});
