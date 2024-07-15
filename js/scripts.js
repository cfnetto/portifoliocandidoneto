document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌙' : '🌞';
  });
});
