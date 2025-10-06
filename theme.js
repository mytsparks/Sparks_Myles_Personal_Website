(function() {
  function getStoredTheme() {
    try { return localStorage.getItem('theme'); } catch (_) { return null; }
  }

  function storeTheme(theme) {
    try { localStorage.setItem('theme', theme); } catch (_) {}
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    storeTheme(theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      var isDark = theme === 'dark';
      btn.setAttribute('aria-pressed', String(isDark));
      btn.textContent = isDark ? '☀️' : '🌙';
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Initialize button state
    applyTheme(document.documentElement.getAttribute('data-theme') || 'light');

    var toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', function() {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  });
})();


