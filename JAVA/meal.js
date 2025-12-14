document.addEventListener('DOMContentLoaded', () => {
  const viewPlanBtns = document.querySelectorAll('.view-plan-btn');

  viewPlanBtns.forEach(button => {
    button.addEventListener('click', e => {
      e.stopPropagation();

      const container = button.closest('.meal-container');
      if (!container) return;

      const panel = container.querySelector('.meal-dropdown-panel');
      if (!panel) return;

      // Close all others except the current
      document.querySelectorAll('.meal-dropdown-panel.show').forEach(otherPanel => {
        if (otherPanel !== panel) {
          otherPanel.classList.remove('show');
        }
      });

      panel.classList.toggle('show');
    });
  });

  // Close if clicking outside
  document.addEventListener('click', e => {
    if (!e.target.closest('.meal-container')) {
      document.querySelectorAll('.meal-dropdown-panel.show').forEach(panel => {
        panel.classList.remove('show');
      });
    }
  });
});
