/* MMC — interaction layer. No analytics, no tracking, no backend. */
(function () {
  'use strict';
  document.documentElement.classList.remove('no-js');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- header: transparent over hero, solid once scrolled ---- */
  var header = document.querySelector('.header');
  if (header) {
    var overlay = header.dataset.overlay === 'true';
    var apply = function () {
      var past = window.scrollY > 40;
      header.classList.toggle('is-solid', past || !overlay);
      header.classList.toggle('is-transparent', overlay && !past);
    };
    apply();
    window.addEventListener('scroll', apply, { passive: true });
  }

  /* ---- desktop dropdown nav (hover + keyboard) ---- */
  var items = document.querySelectorAll('.nav__item--has-panel');
  items.forEach(function (item) {
    var link = item.querySelector('.nav__link');
    var close = function () { item.classList.remove('is-open'); link.setAttribute('aria-expanded', 'false'); };
    var open = function () {
      items.forEach(function (o) { if (o !== item) o.classList.remove('is-open'); });
      item.classList.add('is-open'); link.setAttribute('aria-expanded', 'true');
    };
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', close);
    link.addEventListener('click', function (e) {
      e.preventDefault();
      item.classList.contains('is-open') ? close() : open();
    });
    item.addEventListener('keydown', function (e) { if (e.key === 'Escape') { close(); link.focus(); } });
    document.addEventListener('click', function (e) { if (!item.contains(e.target)) close(); });
  });

  /* ---- mobile drawer ---- */
  var toggle = document.querySelector('.nav__toggle');
  var drawer = document.querySelector('.drawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      drawer.classList.toggle('is-open', !open);
      document.body.style.overflow = !open ? 'hidden' : '';
    });
  }

  /* ---- collapsible panels: drawer groups + accordions ---- */
  function collapsible(headSel) {
    document.querySelectorAll(headSel).forEach(function (head) {
      head.addEventListener('click', function () {
        var panel = head.nextElementSibling;
        var open = head.getAttribute('aria-expanded') === 'true';
        head.setAttribute('aria-expanded', String(!open));
        panel.style.maxHeight = open ? null : panel.scrollHeight + 'px';
      });
    });
  }
  collapsible('.drawer__head');
  collapsible('.acc__head');

  /* ---- reveal on scroll ---- */
  var targets = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || reduced) {
    targets.forEach(function (t) { t.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---- parallax on hero + image bands ---- */
  var layers = document.querySelectorAll('.hero__media, .band__media');
  if (layers.length && !reduced) {
    var ticking = false;
    var frame = function () {
      layers.forEach(function (el) {
        var host = el.parentElement;
        var r = host.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) return;
        var progress = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        el.style.transform = 'translate3d(0,' + (progress * -52).toFixed(2) + 'px,0)';
      });
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(frame); }
    }, { passive: true });
    frame();
  }

  /* ---- count-up on stat figures ---- */
  var nums = document.querySelectorAll('[data-count]');
  if (nums.length && 'IntersectionObserver' in window && !reduced) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, end = parseFloat(el.dataset.count),
            pre = el.dataset.prefix || '', suf = el.dataset.suffix || '',
            dec = (el.dataset.decimals | 0), t0 = null;
        var step = function (ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / 1600, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = pre + (end * eased).toFixed(dec).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + suf;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { cio.observe(n); });
  }

  /* ---- forms: placeholder UI only, nothing is sent anywhere ---- */
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type=submit]');
      if (!btn || btn.dataset.busy) return;
      var label = btn.innerHTML;
      btn.dataset.busy = '1';
      btn.innerHTML = 'Demo form — not connected';
      btn.style.background = 'var(--ok)';
      btn.style.borderColor = 'var(--ok)';
      setTimeout(function () {
        btn.innerHTML = label; btn.style.background = ''; btn.style.borderColor = '';
        delete btn.dataset.busy;
      }, 2600);
    });
  });

  /* ---- current year ---- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
