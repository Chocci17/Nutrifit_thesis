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
