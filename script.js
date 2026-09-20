// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }

  // Research area filter pills (research.html)
  const pills = document.querySelectorAll('.pill');
  const rows = document.querySelectorAll('[data-category]');
  if (pills.length && rows.length) {
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const filter = pill.dataset.filter;
        rows.forEach(row => {
          const match = filter === 'all' || row.dataset.category === filter;
          row.style.display = match ? '' : 'none';
        });
      });
    });
  }

  // Contact form: local-only confirmation (no backend attached)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = document.querySelector('#form-status');
      if (note) {
        note.textContent = 'Message captured locally — connect a form service (e.g. Formspree) to deliver it to your inbox.';
      }
      form.reset();
    });
  }

  // One orchestrated hero reveal on load
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.classList.add('reveal-ready');
    requestAnimationFrame(() => hero.classList.add('reveal-on'));
  }
});
