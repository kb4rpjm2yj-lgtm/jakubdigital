/* Jakub Digital — obsahové stránky: mobilní navigace + FAQ + drobnosti. */
(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    var setState = function (open) {
      nav.classList.toggle('open', open);
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '✕' : '☰';
    };
    toggle.addEventListener('click', function () { setState(!nav.classList.contains('open')); });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setState(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setState(false);
    });
  }

  document.querySelectorAll('.faq__q').forEach(function (q) {
    q.addEventListener('click', function () {
      var open = q.getAttribute('aria-expanded') === 'true';
      q.setAttribute('aria-expanded', String(!open));
      var panel = document.getElementById(q.getAttribute('aria-controls'));
      if (panel) panel.hidden = open;
    });
  });
})();
