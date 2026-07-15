/* ==========================================================================
   PARALLAX — interaction layer
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- header scroll state --------------------------------------- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile nav -------------------------------------------------*/
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', open);
  });
  mainNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- scroll-reveal for article cards ----------------------------*/
  const cards = document.querySelectorAll('.article-card');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  cards.forEach(card => revealObserver.observe(card));

  /* ---------- article filtering ------------------------------------------*/
  const filterRow = document.getElementById('filterRow');
  filterRow.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    filterRow.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const filter = chip.dataset.filter;
    cards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !match);
      if (match) card.classList.add('is-visible');
    });
  });

  /* ---------- article modal ----------------------------------------------*/
  const overlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  const modalClose = document.getElementById('modalClose');

  function openArticle(id) {
    const article = ARTICLES[id];
    if (!article) return;
    modalContent.innerHTML = `
      ${article.img ? `<div class="modal-media"><img src="${article.img}" alt="${article.title}" loading="lazy"><span class="mono modal-credit">${article.credit || ''}</span></div>` : ''}
      <p class="mono">${article.catalog}</p>
      <h2>${article.title}</h2>
      ${article.body.map(p => `<p>${p}</p>`).join('')}
    `;
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeArticle() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  document.getElementById('articleGrid').addEventListener('click', (e) => {
    const btn = e.target.closest('.card-read');
    if (!btn) return;
    openArticle(btn.dataset.article);
  });
  modalClose.addEventListener('click', closeArticle);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeArticle(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeArticle(); });

  /* ---------- stellar lifecycle slider ------------------------------------*/
  const massSlider = document.getElementById('massSlider');
  const stageMarker = document.getElementById('stageMarker');
  const massReadout = document.getElementById('massReadout');
  const stageTitle = document.getElementById('stageTitle');
  const stageDesc = document.getElementById('stageDesc');

  function updateLifecycle(val) {
    stageMarker.style.left = val + '%';
    const stage = STAGES.find(s => val < s.max) || STAGES[STAGES.length - 1];
    massReadout.textContent = stage.mass;
    stageTitle.textContent = stage.title;
    stageDesc.textContent = stage.desc;
  }
  massSlider.addEventListener('input', (e) => updateLifecycle(Number(e.target.value)));
  updateLifecycle(Number(massSlider.value));

  /* ---------- planetary log ------------------------------------------------*/
  const planetRail = document.getElementById('planetRail');
  const planetDetail = document.getElementById('planetDetail');

  function renderPlanet(key) {
    const p = PLANETS[key];
    if (!p) return;
    planetDetail.innerHTML = `
      <div class="planet-visual" style="box-shadow:0 0 50px -6px ${p.color}99, inset 4px -4px 24px rgba(0,0,0,.5);">
        <img src="${p.img}" alt="${p.name} photographed by NASA" loading="lazy">
        <div class="orbit-ring"></div>
        <span class="planet-credit mono">NASA</span>
      </div>
      <div class="planet-detail-body">
        <p class="mono">${p.catalog}</p>
        <h3>${p.name}</h3>
        <p class="desc">${p.desc}</p>
        <div class="planet-stats">
          ${p.stats.map(([label, value]) => `
            <div>
              <div class="stat-label">${label}</div>
              <div class="stat-value">${value}</div>
            </div>`).join('')}
        </div>
      </div>
    `;
  }

  planetRail.addEventListener('click', (e) => {
    const chip = e.target.closest('.planet-chip');
    if (!chip) return;
    planetRail.querySelectorAll('.planet-chip').forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    renderPlanet(chip.dataset.planet);
  });
  renderPlanet('earth');

  /* ---------- subscribe form (front-end only) ------------------------------*/
  const form = document.getElementById('subscribeForm');
  const note = document.getElementById('subscribeNote');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = '✓ transmission received — check your inbox to confirm';
    form.reset();
  });

});
