// Filter functionality
const filterButtons = document.querySelectorAll('.filter');
const planCards = document.querySelectorAll('.plan-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    const filterValue = button.dataset.filter;

    planCards.forEach(card => {
      if (filterValue === 'all' || card.dataset.level === filterValue) {
        card.style.display = 'block';
        setTimeout(() => card.style.opacity = '1', 0);
      } else {
        card.style.display = 'none';
      }
    });
  });
});

function navigateTo(page) {
  window.location.href = page;
}
