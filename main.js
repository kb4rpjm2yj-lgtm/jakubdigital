// Rotující slovo v hero
  const words = ['prodávat', 'být za 5 dní', 'najít AI', 'dělat práci za vás'];
  const el = document.querySelector('.rotator');
  let i = 0;
  setInterval(() => { i = (i + 1) % words.length; el.textContent = words[i]; }, 2800);
