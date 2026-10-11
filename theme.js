(function() {
  var savedTheme = localStorage.getItem('niharika-theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark-theme');
  }
})();

document.addEventListener('DOMContentLoaded', function() {
  var toggleBtn = document.getElementById('theme-toggle');
  var savedTheme = localStorage.getItem('niharika-theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }

  function updateButtonLabel() {
    if (toggleBtn) {
      if (document.body.classList.contains('dark-theme')) {
        toggleBtn.textContent = 'Theme: Dark';
        } else {
        toggleBtn.textContent = 'Theme: Light';
          }
      }
  }

  updateButtonLabel();

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
      var isDark = document.body.classList.contains('dark-theme');
      if (isDark) {
        localStorage.setItem('niharika-theme', 'dark');
      } else {
        localStorage.setItem('niharika-theme', 'light');
      }
      updateButtonLabel();
    });
  }
});