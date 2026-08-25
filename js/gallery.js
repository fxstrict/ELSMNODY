/* ============================================================
   ELSMNODY BESPOKE — Gallery Page JavaScript
   Phase 6: Gallery System
   Bilingual: Arabic (RTL) Primary | English (LTR) Secondary
   ============================================================ */

'use strict';

const IMG = 'assets/images/';

/* ============================================================
   1. TRANSLATIONS
   ============================================================ */
const T = {
  ar: {
    /* Navbar */
    nav_collections: 'المجموعات', nav_tailoring: 'رحلة الخياطة',
    nav_fabrics: 'الأقمشة',       nav_about: 'عن المصمم',
    nav_gallery: 'المعرض',         nav_contact: 'التواصل',
    nav_book: 'احجز موعدك',        nav_lang: 'EN',

    /* Hero */
    hero_eyebrow:       'معرض الأعمال',
    hero_title:         'كل صورة',
    hero_title_accent:  'قصة أناقة',
    hero_sub:           'مجموعة مختارة من أرقى أعمال إلسمنودي بيسبوك — بدلات على المقاس تحكي قصة كل رجل.',

    /* Filter */
    filter_all:         'الكل',
    filter_executive:   'التنفيذي',
    filter_wedding:     'الزفاف',
    filter_judicial:    'القضائي',
    filter_blacklabel:  'بلاك لابيل',
    filter_lifestyle:   'لايف ستايل',
    filter_tailoring:   'الخياطة',

    /* Grid */
    grid_results:       'صورة',
    grid_showing:       'عرض',

    /* Load More */
    load_more:          'عرض المزيد',
    all_shown:          'تم عرض جميع الصور',

    /* CTA */
    cta_eyebrow:        'ابدأ قصتك',
    cta_title:          'حان وقت بدلتك',
    cta_desc:           'كل بدلة في معرضنا بدأت باستشارة. تواصل معنا اليوم لنصمم تحفتك الخاصة.',
    cta_whatsapp:       'تواصل عبر واتساب',
    cta_book:           'احجز موعد',

    /* Lightbox */
    lightbox_of:        'من',

    /* Footer */
    footer_tagline:     'Crafting Presence. Tailoring Influence.',
    footer_collections: 'المجموعات',
    footer_executive:   'التنفيذي',
    footer_wedding:     'الأفراح',
    footer_judicial:    'القضائي',
    footer_blacklabel:  'بلاك لابيل',
    footer_pages:       'الصفحات',
    footer_about:       'عن المصمم',
    footer_fabrics:     'الأقمشة',
    footer_gallery:     'المعرض',
    footer_contact:     'التواصل',
    footer_rights:      'جميع الحقوق محفوظة',

    /* Gallery items labels */
    labels: {
      'collection-executive':  'بدلة تنفيذي',
      'collection-wedding':    'بدلة زفاف',
      'collection-judicial':   'بدلة قضائية',
      'collection-black-label':'بلاك لابيل',
      'collection-tuxedo':     'سموكن فاخر',
      'collection-blazer':     'بليزر كلاسيك',
      'lifestyle-business':    'رجل الأعمال',
      'lifestyle-event':       'حفل رسمي',
      'lifestyle-redcarpet':   'السجادة الحمراء',
      'lifestyle-detail':      'تفاصيل حرفية',
      'lifestyle-store':       'الأتيليه',
      'tailoring-measurement': 'القياسات',
      'tailoring-cutting':     'القص',
      'tailoring-stitching':   'الخياطة',
      'tailoring-fitting':     'التجربة',
      'tailoring-finish':      'اللمسة الأخيرة',
      'founder-portrait':      'محمد السمنودي',
      'founder-closeup':       'الخبرة والدقة',
      'founder-workspace':     'مساحة الإبداع',
      'founder-elegant':       'الأناقة الأصيلة',
    }
  },

  en: {
    /* Navbar */
    nav_collections: 'Collections', nav_tailoring: 'Journey',
    nav_fabrics: 'Fabrics',          nav_about: 'About',
    nav_gallery: 'Gallery',           nav_contact: 'Contact',
    nav_book: 'Book Appointment',     nav_lang: 'AR',

    /* Hero */
    hero_eyebrow:       'Portfolio',
    hero_title:         'Every Photo',
    hero_title_accent:  'A Story of Elegance',
    hero_sub:           'A curated selection of ELSMNODY BESPOKE\'s finest works — bespoke suits that tell the story of every distinguished gentleman.',

    /* Filter */
    filter_all:         'All',
    filter_executive:   'Executive',
    filter_wedding:     'Wedding',
    filter_judicial:    'Judicial',
    filter_blacklabel:  'Black Label',
    filter_lifestyle:   'Lifestyle',
    filter_tailoring:   'Tailoring',

    /* Grid */
    grid_results:       'items',
    grid_showing:       'Showing',

    /* Load More */
    load_more:          'Load More',
    all_shown:          'All photos displayed',

    /* CTA */
    cta_eyebrow:        'Begin Your Journey',
    cta_title:          'Time for Your Suit',
    cta_desc:           'Every suit in our portfolio began with a consultation. Contact us today to design your masterpiece.',
    cta_whatsapp:       'Contact via WhatsApp',
    cta_book:           'Book Appointment',

    /* Lightbox */
    lightbox_of:        'of',

    /* Footer */
    footer_tagline:     'Crafting Presence. Tailoring Influence.',
    footer_collections: 'Collections',
    footer_executive:   'Executive',
    footer_wedding:     'Wedding',
    footer_judicial:    'Judicial',
    footer_blacklabel:  'Black Label',
    footer_pages:       'Pages',
    footer_about:       'About Founder',
    footer_fabrics:     'Fabrics',
    footer_gallery:     'Gallery',
    footer_contact:     'Contact',
    footer_rights:      'All rights reserved',

    labels: {
      'collection-executive':  'Executive Suit',
      'collection-wedding':    'Wedding Suit',
      'collection-judicial':   'Judicial Suit',
      'collection-black-label':'Black Label',
      'collection-tuxedo':     'Luxury Tuxedo',
      'collection-blazer':     'Classic Blazer',
      'lifestyle-business':    'Business',
      'lifestyle-event':       'Formal Event',
      'lifestyle-redcarpet':   'Red Carpet',
      'lifestyle-detail':      'Craft Details',
      'lifestyle-store':       'The Atelier',
      'tailoring-measurement': 'Measurements',
      'tailoring-cutting':     'Cutting',
      'tailoring-stitching':   'Stitching',
      'tailoring-fitting':     'Fitting',
      'tailoring-finish':      'Final Touch',
      'founder-portrait':      'Mohamed Elsmnody',
      'founder-closeup':       'Expertise & Precision',
      'founder-workspace':     'Creative Space',
      'founder-elegant':       'Timeless Elegance',
    }
  }
};

/* ============================================================
   2. GALLERY DATA
   ============================================================ */
const GALLERY_ITEMS = [
  // Collections — primary showcase
  { id: 'collection-executive',   cat: 'executive',   img: 'collections/collection-executive.webp',   tall: false },
  { id: 'collection-wedding',     cat: 'wedding',     img: 'collections/collection-wedding.webp',     tall: true  },
  { id: 'collection-judicial',    cat: 'judicial',    img: 'collections/collection-judicial.webp',    tall: false },
  { id: 'collection-black-label', cat: 'blacklabel',  img: 'collections/collection-black-label.webp', tall: true  },
  { id: 'collection-tuxedo',      cat: 'blacklabel',  img: 'collections/collection-tuxedo.webp',      tall: false },
  { id: 'collection-blazer',      cat: 'executive',   img: 'collections/collection-blazer.webp',      tall: true  },
  // Lifestyle
  { id: 'lifestyle-business',     cat: 'lifestyle',   img: 'lifestyle/lifestyle-business.webp',       tall: false },
  { id: 'lifestyle-event',        cat: 'lifestyle',   img: 'lifestyle/lifestyle-event.webp',           tall: false },
  { id: 'lifestyle-redcarpet',    cat: 'lifestyle',   img: 'lifestyle/lifestyle-redcarpet.webp',       tall: true  },
  { id: 'lifestyle-detail',       cat: 'lifestyle',   img: 'lifestyle/lifestyle-detail.webp',          tall: false },
  { id: 'lifestyle-store',        cat: 'lifestyle',   img: 'lifestyle/lifestyle-store.webp',           tall: false },
  // Tailoring
  { id: 'tailoring-measurement',  cat: 'tailoring',   img: 'tailoring/tailoring-measurement.webp',    tall: true  },
  { id: 'tailoring-cutting',      cat: 'tailoring',   img: 'tailoring/tailoring-cutting.webp',        tall: false },
  { id: 'tailoring-stitching',    cat: 'tailoring',   img: 'tailoring/tailoring-stitching.webp',      tall: false },
  { id: 'tailoring-fitting',      cat: 'tailoring',   img: 'tailoring/tailoring-fitting.webp',        tall: true  },
  { id: 'tailoring-finish',       cat: 'tailoring',   img: 'tailoring/tailoring-finish.webp',         tall: false },
  // Founder
  { id: 'founder-portrait',       cat: 'lifestyle',   img: 'founder/founder-portrait.webp',           tall: true  },
  { id: 'founder-closeup',        cat: 'tailoring',   img: 'founder/founder-closeup.webp',            tall: false },
  { id: 'founder-workspace',      cat: 'tailoring',   img: 'founder/founder-workspace.webp',          tall: false },
  { id: 'founder-elegant',        cat: 'executive',   img: 'founder/founder-elegant.webp',            tall: true  },
];

const CATS = ['all','executive','wedding','judicial','blacklabel','lifestyle','tailoring'];
const LOAD_BATCH = 12; // initial visible count

/* ============================================================
   3. LANGUAGE MANAGER
   ============================================================ */
const Lang = {
  current: localStorage.getItem('eb_lang') || 'ar',
  get: (key) => T[Lang.current][key] || key,
  toggle() {
    Lang.current = Lang.current === 'ar' ? 'en' : 'ar';
    localStorage.setItem('eb_lang', Lang.current);
    const html = document.documentElement;
    html.setAttribute('lang', Lang.current);
    html.setAttribute('dir', Lang.current === 'ar' ? 'rtl' : 'ltr');
    html.setAttribute('data-lang', Lang.current);
    renderAll();
  }
};

/* ============================================================
   4. STATE
   ============================================================ */
let activeFilter   = 'all';
let visibleCount   = LOAD_BATCH;
let lightboxIndex  = 0;
let filteredItems  = [];

/* ============================================================
   5. RENDER — NAVBAR
   ============================================================ */
function renderNavbar() {
  const l = Lang.current;
  const t = T[l];
  const cta = document.querySelector('.navbar__cta');
  if (!cta) return;

  const links = [
    ['collections.html', t.nav_collections],
    ['about.html',       t.nav_about],
    ['fabrics.html',     t.nav_fabrics],
    ['gallery.html',     t.nav_gallery],
    ['contact.html',     t.nav_contact],
  ];

  const navLinks = links.map(([href, label]) =>
    `<a href="${href}" class="navbar__link${href === 'gallery.html' ? ' active' : ''}">${label}</a>`
  ).join('');

  cta.innerHTML = `
    <nav class="navbar__links">${navLinks}</nav>
    <a href="contact.html" class="btn btn-primary btn-sm">${t.nav_book}</a>
    <button class="btn btn-ghost btn-sm" id="lang-toggle" onclick="Lang.toggle()">${t.nav_lang}</button>
  `;

  // Mobile toggle
  const toggle  = document.querySelector('.navbar__toggle');
  const existing = document.getElementById('mobile-menu');
  if (existing) existing.remove();
  const mobileMenu = document.createElement('div');
  mobileMenu.id = 'mobile-menu';
  mobileMenu.className = 'navbar__mobile';
  mobileMenu.innerHTML = links.map(([href, label]) =>
    `<a href="${href}" class="navbar__mobile-link">${label}</a>`
  ).join('') + `<a href="contact.html" class="btn btn-primary" style="margin-top:var(--space-4)">${t.nav_book}</a>`;
  document.body.appendChild(mobileMenu);

  if (toggle) {
    toggle.onclick = () => {
      mobileMenu.classList.toggle('open');
      toggle.classList.toggle('open');
    };
  }
}

/* ============================================================
   6. RENDER — HERO
   ============================================================ */
function renderHero() {
  const t = T[Lang.current];
  const sec = document.getElementById('gallery-hero');
  if (!sec) return;
  sec.innerHTML = `
    <div class="gallery-hero__bg" id="heroBg"></div>
    <div class="gallery-hero__overlay"></div>
    <div class="gallery-hero__content">
      <div class="container" style="max-width:1200px;margin:0 auto">
        <span class="gallery-hero__eyebrow reveal">${t.hero_eyebrow}</span>
        <h1 class="gallery-hero__title reveal reveal-delay-1">
          ${t.hero_title} <em>${t.hero_title_accent}</em>
        </h1>
        <p class="gallery-hero__sub reveal reveal-delay-2">${t.hero_sub}</p>
      </div>
    </div>
  `;
  requestAnimationFrame(() => {
    const bg = document.getElementById('heroBg');
    if (bg) bg.classList.add('loaded');
  });
}

/* ============================================================
   7. RENDER — FILTER BAR
   ============================================================ */
function renderFilter() {
  const t  = T[Lang.current];
  const el = document.getElementById('gallery-filter');
  if (!el) return;

  const catKeys = {
    all:        t.filter_all,
    executive:  t.filter_executive,
    wedding:    t.filter_wedding,
    judicial:   t.filter_judicial,
    blacklabel: t.filter_blacklabel,
    lifestyle:  t.filter_lifestyle,
    tailoring:  t.filter_tailoring,
  };

  const counts = {};
  CATS.forEach(c => {
    counts[c] = c === 'all'
      ? GALLERY_ITEMS.length
      : GALLERY_ITEMS.filter(i => i.cat === c).length;
  });

  el.innerHTML = `
    <div class="gallery-filter-bar__inner">
      ${CATS.map(cat => `
        <button
          class="gallery-filter-btn${activeFilter === cat ? ' active' : ''}"
          data-cat="${cat}"
          onclick="setFilter('${cat}')"
        >
          ${catKeys[cat]}
          <span class="count">${counts[cat]}</span>
        </button>
      `).join('')}
    </div>
  `;
}

/* ============================================================
   8. RENDER — MASONRY GRID
   ============================================================ */
function renderGrid(resetCount = false) {
  const t   = T[Lang.current];
  const sec = document.getElementById('gallery-grid');
  if (!sec) return;

  if (resetCount) visibleCount = LOAD_BATCH;

  filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(i => i.cat === activeFilter);

  const toShow = filteredItems.slice(0, visibleCount);

  sec.innerHTML = `
    <div class="gallery-grid-section__header">
      <div>
        <span class="eyebrow">${t.filter_all === 'الكل' ? 'معرض الأعمال' : 'Gallery'}</span>
      </div>
      <span class="gallery-grid__count">
        ${t.grid_showing} ${toShow.length} ${t.grid_results}
      </span>
    </div>
    <div class="gallery-masonry" id="masonryGrid">
      ${toShow.map((item, idx) => {
        const label  = (T[Lang.current].labels || {})[item.id] || item.id;
        const catKey = {
          executive: t.filter_executive,
          wedding:   t.filter_wedding,
          judicial:  t.filter_judicial,
          blacklabel:t.filter_blacklabel,
          lifestyle: t.filter_lifestyle,
          tailoring: t.filter_tailoring,
        }[item.cat] || item.cat;
        return `
          <div
            class="gallery-item"
            data-index="${idx}"
            onclick="openLightbox(${idx})"
            role="button"
            tabindex="0"
            aria-label="${label}"
          >
            <img
              class="gallery-item__img"
              src="${IMG}${item.img}"
              alt="${label}"
              loading="lazy"
              onerror="this.onerror=null;this.style.display='none'"
              ${item.tall ? 'style="aspect-ratio:3/4"' : 'style="aspect-ratio:4/3"'}
            >
            <div class="gallery-item__overlay">
              <div>
                <span class="gallery-item__cat">${catKey}</span>
                <div class="gallery-item__label">${label}</div>
              </div>
            </div>
            <div class="gallery-item__expand">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Animate items in
  requestAnimationFrame(() => {
    const items = sec.querySelectorAll('.gallery-item');
    items.forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 60);
    });
  });

  renderLoadMore();
}

/* ============================================================
   9. RENDER — LOAD MORE
   ============================================================ */
function renderLoadMore() {
  const t   = T[Lang.current];
  const el  = document.getElementById('gallery-loadmore');
  if (!el) return;
  const hasMore = visibleCount < filteredItems.length;
  el.innerHTML = hasMore ? `
    <button class="gallery-loadmore-btn" onclick="loadMore()">
      ${t.load_more}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.33"/>
      </svg>
    </button>
  ` : (filteredItems.length > 0 ? `
    <p style="color:var(--color-text-muted);font-size:.8rem;letter-spacing:2px;text-transform:uppercase">
      ${t.all_shown}
    </p>
  ` : '');
}

/* ============================================================
   10. RENDER — CTA
   ============================================================ */
function renderCTA() {
  const t   = T[Lang.current];
  const sec = document.getElementById('gallery-cta');
  if (!sec) return;
  sec.innerHTML = `
    <div class="gallery-cta__inner reveal">
      <span class="eyebrow">${t.cta_eyebrow}</span>
      <h2 class="section-title" style="margin:var(--space-4) 0">${t.cta_title}</h2>
      <div class="divider-gold"></div>
      <p style="color:var(--color-text-secondary);margin:var(--space-6) 0 var(--space-10);line-height:var(--leading-relaxed)">
        ${t.cta_desc}
      </p>
      <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
        <a
          href="https://wa.me/201555277205?text=مرحباً، رأيت معرض أعمال إلسمنودي وأريد الاستفسار"
          class="btn btn-whatsapp btn-lg"
          target="_blank" rel="noopener"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display:inline;vertical-align:middle;margin-inline-end:8px">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.123 1.528 5.855L.057 23.926l6.261-1.644A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.369l-.359-.213-3.718.976.992-3.625-.234-.372A9.818 9.818 0 1112 21.818z"/>
          </svg>
          ${t.cta_whatsapp}
        </a>
        <a href="contact.html" class="btn btn-secondary btn-lg">${t.cta_book}</a>
      </div>
    </div>
  `;
}

/* ============================================================
   11. RENDER — FOOTER
   ============================================================ */
function renderFooter() {
  const t   = T[Lang.current];
  const el  = document.getElementById('footer');
  if (!el) return;
  el.innerHTML = `
    <div class="container" style="max-width:1200px;margin:0 auto;padding:0 var(--space-8)">
      <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:var(--space-10);margin-bottom:var(--space-10)">
        <div>
          <img src="assets/logo/logo.svg" alt="ELSMNODY BESPOKE" style="height:48px;margin-bottom:var(--space-4)"
            onerror="this.outerHTML='<span style=\'font-family:var(--font-display);font-size:1.1rem;color:var(--color-gold);letter-spacing:4px\'>ELSMNODY</span>'">
          <p style="color:var(--color-text-muted);font-size:.85rem;line-height:var(--leading-relaxed);margin-top:var(--space-3)">
            ${t.footer_tagline}
          </p>
        </div>
        <div>
          <p style="font-size:.7rem;letter-spacing:3px;text-transform:uppercase;color:var(--color-gold);margin-bottom:var(--space-4)">${t.footer_collections}</p>
          ${[
            ['collections/executive.html', t.footer_executive],
            ['collections/wedding.html',   t.footer_wedding],
            ['collections/judicial.html',  t.footer_judicial],
            ['collections/black-label.html',t.footer_blacklabel],
          ].map(([h,l])=>`<a href="${h}" style="display:block;color:var(--color-text-muted);font-size:.85rem;margin-bottom:var(--space-2);transition:color .2s"
            onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='var(--color-text-muted)'">${l}</a>`).join('')}
        </div>
        <div>
          <p style="font-size:.7rem;letter-spacing:3px;text-transform:uppercase;color:var(--color-gold);margin-bottom:var(--space-4)">${t.footer_pages}</p>
          ${[
            ['about.html',   t.footer_about],
            ['fabrics.html', t.footer_fabrics],
            ['gallery.html', t.footer_gallery],
            ['contact.html', t.footer_contact],
          ].map(([h,l])=>`<a href="${h}" style="display:block;color:var(--color-text-muted);font-size:.85rem;margin-bottom:var(--space-2);transition:color .2s"
            onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='var(--color-text-muted)'">${l}</a>`).join('')}
        </div>
      </div>
      <div style="border-top:var(--divider-gold);padding-top:var(--space-6);text-align:center;color:var(--color-text-muted);font-size:.75rem;letter-spacing:.05em">
        © ${new Date().getFullYear()} ELSMNODY BESPOKE. ${t.footer_rights}.
      </div>
    </div>
  `;
}

/* ============================================================
   12. LIGHTBOX
   ============================================================ */
function openLightbox(idx) {
  lightboxIndex = idx;
  updateLightbox();
  document.getElementById('galleryLightbox').classList.add('active');
  document.getElementById('lightboxBackdrop').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('galleryLightbox').classList.remove('active');
  document.getElementById('lightboxBackdrop').classList.remove('active');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const t    = T[Lang.current];
  const item = filteredItems[lightboxIndex];
  if (!item) return;
  const label = (T[Lang.current].labels || {})[item.id] || item.id;
  const img   = document.getElementById('lightboxImg');
  img.src = IMG + item.img;
  img.onerror = null;
  img.alt = label;
  document.getElementById('lightboxCaption').textContent = label;
  document.getElementById('lightboxCounter').textContent =
    `${lightboxIndex + 1} ${t.lightbox_of} ${filteredItems.length}`;
}

function lightboxPrev() {
  lightboxIndex = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
  updateLightbox();
}
function lightboxNext() {
  lightboxIndex = (lightboxIndex + 1) % filteredItems.length;
  updateLightbox();
}

/* ============================================================
   13. FILTER & LOAD MORE
   ============================================================ */
function setFilter(cat) {
  activeFilter = cat;
  renderFilter();
  renderGrid(true);
}

function loadMore() {
  visibleCount += LOAD_BATCH;
  renderGrid(false);
}

/* ============================================================
   14. SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

/* ============================================================
   15. NAVBAR SCROLL EFFECT
   ============================================================ */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ============================================================
   16. KEYBOARD NAVIGATION
   ============================================================ */
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('galleryLightbox');
    if (!lb || !lb.classList.contains('active')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   Lang.current === 'ar' ? lightboxNext() : lightboxPrev();
    if (e.key === 'ArrowRight')  Lang.current === 'ar' ? lightboxPrev() : lightboxNext();
  });
}

/* ============================================================
   17. INIT
   ============================================================ */
function renderAll() {
  renderNavbar();
  renderHero();
  renderFilter();
  renderGrid(true);
  renderCTA();
  renderFooter();
  initReveal();
}

document.addEventListener('DOMContentLoaded', () => {
  // Set initial lang
  const html = document.documentElement;
  html.setAttribute('lang', Lang.current);
  html.setAttribute('dir', Lang.current === 'ar' ? 'rtl' : 'ltr');
  html.setAttribute('data-lang', Lang.current);

  renderAll();
  initNavbarScroll();
  initKeyboard();

  // Lightbox controls
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxBackdrop').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', lightboxPrev);
  document.getElementById('lightboxNext').addEventListener('click', lightboxNext);
});
