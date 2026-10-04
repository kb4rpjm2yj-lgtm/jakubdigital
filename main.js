// Rotující slovo v hero
(function () {
  var words = ['prodávat', 'být za 5 dní', 'najít AI', 'dělat práci za vás'];
  var el = document.querySelector('.rotator');
  if (!el) return;
  var i = 0;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  setInterval(function () { i = (i + 1) % words.length; el.textContent = words[i]; }, 2800);
})();

// Mobilní navigace (hamburger)
(function () {
  function init() {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('#nav');
    if (!toggle || !nav) return;

    function setState(open) {
      nav.classList.toggle('open', open);
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '✕' : '☰';
    }

    toggle.addEventListener('click', function () {
      setState(!nav.classList.contains('open'));
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setState(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setState(false);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();

// Jemné odhalování obsahu při scrollu
(function () {
  function init() {
    var nodes = document.querySelectorAll('section:not(.hero), .card, .ref');
    if (!nodes.length) return;
    if (!('IntersectionObserver' in window)) return;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    nodes.forEach(function (r) {
      r.classList.add('reveal');
      io.observe(r);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();

// Interaktivní kalkulačka ceny
(function () {
  function init() {
    var calc = document.getElementById('calc');
    if (!calc) return;
    var webGroup = calc.querySelector('[data-group="web"]');
    var addons = calc.querySelectorAll('[data-group="addons"] .calc-opt');
    var out = document.getElementById('calc-total');

    function fmt(n) {
      return n.toLocaleString('cs-CZ').replace(/\u00a0/g, ' ') + ' Kč';
    }
    function recalc() {
      var base = parseInt(webGroup.querySelector('.calc-opt.active').getAttribute('data-price'), 10);
      var sum = base;
      addons.forEach(function (b) {
        if (b.classList.contains('active')) sum += parseInt(b.getAttribute('data-add'), 10);
      });
      out.textContent = fmt(sum);
    }
    webGroup.querySelectorAll('.calc-opt').forEach(function (b) {
      b.addEventListener('click', function () {
        webGroup.querySelectorAll('.calc-opt').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        recalc();
      });
    });
    addons.forEach(function (b) {
      b.addEventListener('click', function () {
        b.classList.toggle('active');
        recalc();
      });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
