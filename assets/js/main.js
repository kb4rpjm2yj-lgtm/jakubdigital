/* Jakub Digital — v2 „grafická dílna"
   Bez knihoven. Parallax nástěnky, přetahovatelné lístky, běžící pás (CSS),
   postupné odkrývání, vodorovná lišta projektů, mobilní menu, mailto formulář. */
(() => {
  const root = document.documentElement;
  const stage = document.getElementById('heroStage');
  const cursor = document.querySelector('.cursor');
  const toast = document.querySelector('.toast');
  let toastT;

  const notify = (m) => {
    if (!toast) return;
    toast.textContent = m;
    toast.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(() => toast.classList.remove('show'), 2400);
  };

  /* ---- scroll progress ---- */
  const onScroll = () => {
    const max = root.scrollHeight - window.innerHeight;
    root.style.setProperty('--scroll', max > 0 ? String(window.scrollY / max) : '0');
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- postupné odkrývání ---- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.rv').forEach((el) => io.observe(el));

  /* ---- parallax nástěnky + vlastní kurzor ---- */
  if (stage) {
    stage.addEventListener('pointermove', (e) => {
      if (e.pointerType === 'touch') return;
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width * 2 - 1;
      const y = (e.clientY - r.top) / r.height * 2 - 1;
      root.style.setProperty('--mx', x.toFixed(3));
      root.style.setProperty('--my', y.toFixed(3));
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.classList.add('on');
      }
    });
    stage.addEventListener('pointerleave', () => {
      root.style.setProperty('--mx', '0');
      root.style.setProperty('--my', '0');
      cursor && cursor.classList.remove('on');
    });
    document.querySelectorAll('a, button, [data-draggable]').forEach((el) => {
      el.addEventListener('pointerenter', () => cursor && cursor.classList.add('big'));
      el.addEventListener('pointerleave', () => cursor && cursor.classList.remove('big'));
    });
  }

  /* ---- přetahovatelné lístky ---- */
  document.querySelectorAll('[data-draggable]').forEach((note) => {
    let drag = false, sx = 0, sy = 0, l0 = 0, t0 = 0;
    const start = (e) => {
      if (e.type === 'keydown') {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const on = note.classList.toggle('note-focused');
          note.style.zIndex = on ? '30' : '';
          notify(on ? 'Lístek zvýrazněn.' : 'Lístek vrácen.');
        }
        return;
      }
      if (e.button !== undefined && e.button !== 0) return;
      drag = true;
      note.setPointerCapture && note.setPointerCapture(e.pointerId);
      const s = stage.getBoundingClientRect(), r = note.getBoundingClientRect();
      sx = e.clientX; sy = e.clientY;
      l0 = r.left - s.left; t0 = r.top - s.top;
      note.style.left = l0 + 'px';
      note.style.top = t0 + 'px';
      note.style.right = 'auto';
      note.style.bottom = 'auto';
      note.style.zIndex = '30';
      note.style.transform = 'rotate(0deg) scale(1.03)';
      e.preventDefault();
    };
    const move = (e) => {
      if (!drag) return;
      const mx = stage.clientWidth - note.offsetWidth;
      const my = stage.clientHeight - note.offsetHeight;
      note.style.left = Math.max(0, Math.min(mx, l0 + e.clientX - sx)) + 'px';
      note.style.top = Math.max(0, Math.min(my, t0 + e.clientY - sy)) + 'px';
    };
    const end = () => { if (!drag) return; drag = false; note.style.transform = ''; };
    note.addEventListener('pointerdown', start);
    note.addEventListener('pointermove', move);
    note.addEventListener('pointerup', end);
    note.addEventListener('pointercancel', end);
    note.addEventListener('keydown', start);
  });

  /* ---- mobilní menu ---- */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  if (burger && nav) {
    const close = () => {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Otevřít navigaci');
      burger.textContent = '☰';
    };
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Zavřít navigaci' : 'Otevřít navigaci');
      burger.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  }

  /* ---- vodorovná lišta projektů ---- */
  const rail = document.getElementById('rail');
  if (rail) {
    const prev = document.getElementById('workPrev');
    const next = document.getElementById('workNext');
    const step = () => Math.min(rail.clientWidth * 0.72, 560);
    prev && prev.addEventListener('click', () => rail.scrollBy({ left: -step(), behavior: 'smooth' }));
    next && next.addEventListener('click', () => rail.scrollBy({ left: step(), behavior: 'smooth' }));
    let down = false, px = 0, sl = 0;
    rail.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button, a')) return;
      down = true; px = e.clientX; sl = rail.scrollLeft; rail.classList.add('dragging');
    });
    rail.addEventListener('pointermove', (e) => { if (down) rail.scrollLeft = sl - (e.clientX - px); });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach((t) =>
      rail.addEventListener(t, () => { down = false; rail.classList.remove('dragging'); }));
    rail.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') rail.scrollBy({ left: step(), behavior: 'smooth' });
      if (e.key === 'ArrowLeft') rail.scrollBy({ left: -step(), behavior: 'smooth' });
    });
  }

  /* ---- FAQ ---- */
  document.querySelectorAll('.faq__q').forEach((q) => {
    q.addEventListener('click', () => {
      const open = q.getAttribute('aria-expanded') === 'true';
      q.setAttribute('aria-expanded', String(!open));
      const panel = document.getElementById(q.getAttribute('aria-controls'));
      if (panel) panel.hidden = open;
    });
  });

  /* ---- formulář → mailto (nic se nikam neposílá) ---- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const d = new FormData(form);
      const subj = encodeURIComponent('Nápad na projekt — ' + d.get('name'));
      const body = encodeURIComponent(
        'Jméno: ' + d.get('name') + '\nE-mail: ' + d.get('email') + '\n\n' + d.get('message')
      );
      const msg = document.getElementById('formMsg');
      if (msg) msg.textContent = 'Otevírám váš e-mailový program…';
      window.location.href = 'mailto:jakub@jakubdigital.cz?subject=' + subj + '&body=' + body;
    });
  }

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('no-motion');
    document.querySelectorAll('.rv').forEach((el) => el.classList.add('in'));
  }
})();
