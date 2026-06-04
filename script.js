/* =====================================================================
   BEAU MARIAGE — interactions
   ===================================================================== */

// 1. Génération des pétales qui tombent
(function petals() {
  const layer = document.getElementById('petals');
  if (!layer) return;
  const COUNT = 18;
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = 9 + Math.random() * 9 + 's';
    p.style.animationDelay = -Math.random() * 12 + 's';
    const s = 0.7 + Math.random() * 0.9;
    p.style.transform = `scale(${s})`;
    layer.appendChild(p);
  }
})();

// 2. Navigation : effet au scroll + menu mobile
(function nav() {
  const bar = document.querySelector('.nav');
  const burger = document.querySelector('.nav__burger');
  const links = document.querySelector('.nav__links');

  window.addEventListener('scroll', () => {
    if (bar) bar.classList.toggle('shrink', window.scrollY > 40);
  });

  if (burger && links) {
    burger.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }
})();

// 3. Apparition des éléments au scroll
(function reveal() {
  const items = document.querySelectorAll('.fade');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('in'), i * 60);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
})();
