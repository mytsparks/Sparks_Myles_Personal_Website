(function() {
  function readLocalStorageTheme() {
    try { return localStorage.getItem('theme'); } catch (_) { return null; }
  }

  function writeLocalStorageTheme(theme) {
    try { localStorage.setItem('theme', theme); } catch (_) {}
  }

  function readWindowNameTheme() {
    var name = window.name || '';
    var match = name.match(/(?:^|;)__THEME__:(dark|light)(?:;|$)/);
    return match ? match[1] : null;
  }

  function writeWindowNameTheme(theme) {
    var name = window.name || '';
    if (/(?:^|;)__THEME__:(?:dark|light)(?:;|$)/.test(name)) {
      name = name.replace(/(?:^|;)__THEME__:(?:dark|light)(?=;|$)/, ';__THEME__:' + theme);
    } else {
      name = (name ? name.replace(/;?$/, ';') : '') + '__THEME__:' + theme + ';';
    }
    window.name = name;
  }

  function getPersistedTheme() {
    return readLocalStorageTheme() || readWindowNameTheme();
  }

  function setTheme(theme, persist) {
    document.documentElement.setAttribute('data-theme', theme);
    if (persist) {
      writeLocalStorageTheme(theme);
      writeWindowNameTheme(theme);
    }
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
    // Initialize button state from current attribute or persisted value
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var initial = document.documentElement.getAttribute('data-theme') || getPersistedTheme() || (prefersDark ? 'dark' : 'light');
    setTheme(initial, false);

    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function() {
        var next = currentTheme() === 'dark' ? 'light' : 'dark';
        setTheme(next, true);
      });
    }

    // Sync across tabs/windows when localStorage changes
    window.addEventListener('storage', function(e) {
      if (e.key === 'theme' && e.newValue) {
        setTheme(e.newValue, false);
      }
    });
  });
})();


