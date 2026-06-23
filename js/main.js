(function () {
  'use strict';

  /* ---------- Theme toggle (Siang / Malam) ---------- */
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function syncToggleUI() {
    if (!toggle) return;
    var isDark = root.classList.contains('dark');
    toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    toggle.querySelector('.seg-light').classList.toggle('is-active', !isDark);
    toggle.querySelector('.seg-dark').classList.toggle('is-active', isDark);
  }

  function setTheme(isDark) {
    root.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('jf-theme', isDark ? 'dark' : 'light');
    } catch (e) {
      /* localStorage unavailable (e.g. sandboxed preview) — theme still works, just won't persist */
    }
    syncToggleUI();
  }

  if (toggle) {
    syncToggleUI();
    toggle.addEventListener('click', function () {
      setTheme(!root.classList.contains('dark'));
    });
  }

  /* ---------- Mobile nav ---------- */
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      hamburger.setAttribute('aria-expanded', (!isOpen).toString());
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
