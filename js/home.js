/* ============================================================
   ELSMNODY BESPOKE — Home Page JavaScript
   Phase 2: Homepage UI
   Bilingual: Arabic (RTL) Primary | English (LTR) Secondary
   ============================================================ */

'use strict';

/* ============================================================
   1. TRANSLATIONS — Arabic / English
   ============================================================ */
const TRANSLATIONS = {
  ar: {
    // Navbar
    nav_collections:  'المجموعات',
    nav_tailoring:    'رحلة الخياطة',
    nav_fabrics:      'الأقمشة',
    nav_about:        'عن المصمم',
    nav_gallery:      'المعرض',
    nav_contact:      'التواصل',
    nav_book:         'احجز موعدك',
    nav_lang:         'EN',

    // Hero
    hero_eyebrow:     'بيت الخياطة الرجالية الفاخرة',
    hero_title_1:     'حيث تُصنع',
    hero_title_em:    'الأناقة',
    hero_title_2:     'على مقاسك',
    hero_subtitle:    'بدلة تعكس شخصيتك، وتروي قصتك. كل قطعة تُصنع يدوياً بأرقى الأقمشة الإيطالية والإنجليزية، على يد حرفيين متمرسين.',
    hero_cta_primary: 'اكتشف المجموعات',
    hero_cta_second:  'احجز استشارة مجانية',
    hero_scroll:      'اكتشف',

    // Why
    why_eyebrow:      'لماذا إلسمنودي',
    why_title:        'أربعة أسباب تجعلنا الخيار الأول',
    why_1_title:      'قياس دقيق',
    why_1_desc:       'نأخذ أكثر من 22 قياساً لضمان أن كل بدلة تُلائم جسمك بشكل استثنائي.',
    why_2_title:      'أقمشة حصرية',
    why_2_desc:       'أجود الأقمشة من أرقى دور الأقمشة الإيطالية والإنجليزية العريقة.',
    why_3_title:      'خبرة عقود',
    why_3_desc:       'أكثر من 20 عاماً في صناعة البدلات الفاخرة للقضاة والمسؤولين ورجال الأعمال.',
    why_4_title:      'ضمان مدى الحياة',
    why_4_desc:       'نقف خلف كل خيطة. إذا احتجت تعديلاً، نحن هنا دائماً.',

    // Collections
    coll_eyebrow:     'مجموعاتنا',
    coll_title:       'أناقة لكل مناسبة',
    coll_subtitle:    'من قاعة المحكمة إلى قاعة المؤتمرات، من حفل الزفاف إلى الحفل الرسمي.',
    coll_executive:   'التنفيذي',
    coll_wedding:     'الأفراح',
    coll_judicial:    'القضائي',
    coll_tuxedo:      'السموكن',
    coll_blazer:      'البليزر',
    coll_see_all:     'عرض جميع المجموعات',
    coll_explore:     'استكشف',

    // Journey
    journey_eyebrow:  'رحلة الخياطة',
    journey_title:    'من الفكرة إلى البدلة المثالية',
    journey_subtitle: 'خمس مراحل من الاهتمام الشخصي لضمان بدلة تعكس مكانتك.',
    step_1_title:     'الاستشارة',
    step_1_desc:      'نستمع لرؤيتك ونناقش أسلوبك واحتياجاتك.',
    step_2_title:     'القياسات',
    step_2_desc:      'أخذ أكثر من 22 قياساً دقيقاً لجسمك.',
    step_3_title:     'القص والتفصيل',
    step_3_desc:      'حرفيون متمرسون يقطعون القماش بدقة متناهية.',
    step_4_title:     'القفطنة',
    step_4_desc:      'جلسة تجربة لضبط كل التفاصيل الدقيقة.',
    step_5_title:     'التسليم',
    step_5_desc:      'بدلتك جاهزة، ومعبأة في علبة تليق بها.',

    // Fabrics
    fab_eyebrow:      'الأقمشة',
    fab_title:        'مجموعة الأقمشة الحصرية',
    fab_subtitle:     'اختر من بين مئات الأقمشة المميزة من دور النسيج العريقة.',
    fab_wall:         'مكتبة الأقمشة',
    fab_wool:         'صوف إيطالي',
    fab_cashmere:     'كشمير',
    fab_eng:          'صوف إنجليزي',
    fab_linen:        'كتان',
    fab_see:          'استكشف الأقمشة',

    // Gallery
    gal_eyebrow:      'معرض الأعمال',
    gal_title:        'قصص أناقة حقيقية',
    gal_subtitle:     'أعمال تحكي عن تفانينا في صناعة كل قطعة.',
    gal_see:          'عرض المعرض كاملاً',

    // Founder
    founder_eyebrow:  'عن المصمم',
    founder_title_1:  'محمد',
    founder_title_em: 'السمنودي',
    founder_text_1:   'أكثر من عقدين من الخبرة في صناعة الأزياء الرجالية الفاخرة، بنى فيهما سمعة راسخة بين نخبة رجال الأعمال والقضاة والمسؤولين.',
    founder_text_2:   'يؤمن محمد بأن البدلة ليست مجرد ملبس — إنها رسالة، وحضور، وتعبير عن شخصية صاحبها.',
    founder_quote:    '"الأناقة الحقيقية تولد من داخل الحرفة، وتكتمل على مقاس الإنسان."',
    founder_sig:      'محمد السمنودي',
    founder_cta:      'تعرف أكثر على القصة',

    // Testimonials
    test_eyebrow:     'آراء عملائنا',
    test_title:       'يقولون عن إلسمنودي',
    testimonials: [
      { text: 'أفضل بدلة ارتديتها في حياتي. الدقة في القياس والخامة الاستثنائية جعلتني أشعر بالفرق من أول لحظة.', name: 'م. أحمد الشريف', role: 'مدير تنفيذي', initial: 'أ' },
      { text: 'لبست بدلة إلسمنودي في أهم يوم في حياتي. كل من رآني سأل عن المصمم. شكراً على هذه التجربة الاستثنائية.', name: 'خالد المنصور', role: 'رجل أعمال', initial: 'خ' },
      { text: 'كقاضٍ، المظهر الرسمي جزء من مهنتي. إلسمنودي يفهم هذا تماماً — احترافية ودقة لا تضاهى.', name: 'المستشار رامي حسن', role: 'قاضٍ', initial: 'ر' },
    ],

    // Footer
    footer_desc:      'بيت الخياطة الرجالية الراقية في مصر. نصنع البدلات الفاخرة على مقاس لأصحاب الطموح والمكانة.',
    footer_links:     'روابط سريعة',
    footer_services:  'خدماتنا',
    footer_contact:   'تواصل معنا',
    serv_bespoke:     'البدلة على المقاس',
    serv_fabric:      'اختيار الأقمشة',
    serv_consult:     'استشارة مجانية',
    serv_alter:       'التعديلات',
    footer_rights:    '© 2024 إلسمنودي بيسبوك. جميع الحقوق محفوظة.',
    footer_made:      'صُنع بشغف في مصر',
  },

  en: {
    nav_collections:  'Collections',
    nav_tailoring:    'Tailoring',
    nav_fabrics:      'Fabrics',
    nav_about:        'About',
    nav_gallery:      'Gallery',
    nav_contact:      'Contact',
    nav_book:         'Book Appointment',
    nav_lang:         'ع',

    hero_eyebrow:     'House of Luxury Bespoke Tailoring',
    hero_title_1:     'Where',
    hero_title_em:    'Elegance',
    hero_title_2:     'is Tailored for You',
    hero_subtitle:    'A suit that mirrors your character and tells your story. Every piece is handcrafted from the finest Italian and English fabrics by master artisans.',
    hero_cta_primary: 'Explore Collections',
    hero_cta_second:  'Book Free Consultation',
    hero_scroll:      'Discover',

    why_eyebrow:      'Why ELSMNODY',
    why_title:        'Four Reasons We Are the First Choice',
    why_1_title:      'Precise Measurements',
    why_1_desc:       'We take over 22 measurements to ensure each suit fits your body exceptionally.',
    why_2_title:      'Exclusive Fabrics',
    why_2_desc:       'The finest fabrics from the most prestigious Italian and English mills.',
    why_3_title:      'Decades of Expertise',
    why_3_desc:       'Over 20 years crafting luxury suits for judges, officials, and executives.',
    why_4_title:      'Lifetime Guarantee',
    why_4_desc:       'We stand behind every stitch. Alterations are always on us.',

    coll_eyebrow:     'Collections',
    coll_title:       'Elegance for Every Occasion',
    coll_subtitle:    'From the courtroom to the boardroom, from a wedding to a black-tie gala.',
    coll_executive:   'Executive',
    coll_wedding:     'Wedding',
    coll_judicial:    'Judicial',
    coll_tuxedo:      'Tuxedo',
    coll_blazer:      'Blazer',
    coll_see_all:     'View All Collections',
    coll_explore:     'Explore',

    journey_eyebrow:  'Tailoring Journey',
    journey_title:    'From Vision to the Perfect Suit',
    journey_subtitle: 'Five stages of personal attention to craft a suit worthy of your standing.',
    step_1_title:     'Consultation',
    step_1_desc:      'We listen to your vision and discuss your style and needs.',
    step_2_title:     'Measurements',
    step_2_desc:      'Over 22 precise measurements taken for your unique form.',
    step_3_title:     'Cutting',
    step_3_desc:      'Master craftsmen cut the fabric with meticulous precision.',
    step_4_title:     'Fitting',
    step_4_desc:      'A fitting session to perfect every fine detail.',
    step_5_title:     'Delivery',
    step_5_desc:      'Your suit is ready, packaged in a presentation box worthy of it.',

    fab_eyebrow:      'Fabrics',
    fab_title:        'Exclusive Fabric Collection',
    fab_subtitle:     'Choose from hundreds of distinguished fabrics from heritage mills.',
    fab_wall:         'Fabric Library',
    fab_wool:         'Italian Wool',
    fab_cashmere:     'Cashmere',
    fab_eng:          'English Wool',
    fab_linen:        'Linen',
    fab_see:          'Explore Fabrics',

    gal_eyebrow:      'Portfolio',
    gal_title:        'Real Stories of Elegance',
    gal_subtitle:     'Works that speak to our devotion in crafting every piece.',
    gal_see:          'View Full Gallery',

    founder_eyebrow:  'About the Designer',
    founder_title_1:  'Mohamed',
    founder_title_em: 'Elsmnody',
    founder_text_1:   'Over two decades of expertise in luxury menswear, building a distinguished reputation among Egypt\'s elite — executives, judges, and senior officials.',
    founder_text_2:   'Mohamed believes a suit is not merely clothing — it is a message, a presence, and an expression of its wearer\'s identity.',
    founder_quote:    '"True elegance is born within the craft, and completed to the measure of the man."',
    founder_sig:      'Mohamed Elsmnody',
    founder_cta:      'Discover the Story',

    test_eyebrow:     'Client Testimonials',
    test_title:       'What They Say About ELSMNODY',
    testimonials: [
      { text: 'The finest suit I have ever worn. The precision in measurements and exceptional quality made me feel the difference from the very first moment.', name: 'Eng. Ahmed Al-Sharif', role: 'CEO', initial: 'A' },
      { text: 'I wore an ELSMNODY suit on the most important day of my life. Everyone who saw me asked about the designer. Thank you for this extraordinary experience.', name: 'Khaled Al-Mansour', role: 'Businessman', initial: 'K' },
      { text: 'As a judge, professional appearance is part of my role. ELSMNODY understands this perfectly — unmatched professionalism and precision.', name: 'Counselor Rami Hassan', role: 'Judge', initial: 'R' },
    ],

    footer_desc:      'Egypt\'s house of luxury bespoke menswear. Crafting tailored suits for the ambitious and distinguished.',
    footer_links:     'Quick Links',
    footer_services:  'Services',
    footer_contact:   'Contact',
    serv_bespoke:     'Bespoke Suits',
    serv_fabric:      'Fabric Selection',
    serv_consult:     'Free Consultation',
    serv_alter:       'Alterations',
    footer_rights:    '© 2024 ELSMNODY BESPOKE. All rights reserved.',
    footer_made:      'Crafted with passion in Egypt',
  }
};

/* ============================================================
   2. LANGUAGE MANAGER
   ============================================================ */
const Lang = (() => {
  const STORAGE_KEY = 'elsmnody_lang';
  let current = localStorage.getItem(STORAGE_KEY) || 'ar';

  function apply(lang) {
    current = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('data-lang', lang);
    renderAll();
  }

  function t(key) {
    return TRANSLATIONS[current][key] || TRANSLATIONS['ar'][key] || key;
  }

  function toggle() {
    apply(current === 'ar' ? 'en' : 'ar');
  }

  function init() { apply(current); }

  return { init, toggle, t, current: () => current };
})();

/* ============================================================
   3. IMAGE BASE URL
   ============================================================ */
const IMG = 'assets/images/';

/* ============================================================
   4. RENDER FUNCTIONS — Build DOM from translations
   ============================================================ */
function renderAll() {
  renderNavbar();
  renderHero();
  renderWhy();
  renderCollections();
  renderJourney();
  renderFabrics();
  renderGallery();
  renderFounder();
  renderTestimonials();
  renderFooter();
  updateScrollReveal();
}

function renderNavbar() {
  const t = Lang.t.bind(Lang);
  document.querySelector('.navbar__links')?.remove();
  document.querySelector('.navbar__mobile')?.remove();

  const nav = document.querySelector('.navbar__inner');
  if (!nav) return;

  const links = [
    ['#collections', t('nav_collections')],
    ['#journey',     t('nav_tailoring')],
    ['#fabrics',     t('nav_fabrics')],
    ['#founder',     t('nav_about')],
    ['#gallery',     t('nav_gallery')],
    ['#contact',     t('nav_contact')],
  ];

  const ul = document.createElement('ul');
  ul.className = 'navbar__links';
  links.forEach(([href, label]) => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${href}">${label}</a>`;
    ul.appendChild(li);
  });

  const cta = nav.querySelector('.navbar__cta');
  if (cta) {
    cta.innerHTML = `
      <button class="btn btn-secondary btn-sm" id="lang-toggle" onclick="Lang.toggle()">
        ${t('nav_lang')}
      </button>
      <a href="contact.html" class="btn btn-primary btn-sm">${t('nav_book')}</a>
    `;
    nav.insertBefore(ul, cta);
  }

  // Mobile menu
  const mobile = document.createElement('div');
  mobile.className = 'navbar__mobile';
  mobile.id = 'mobileMenu';
  mobile.innerHTML = `
    <button class="navbar__mobile-close" onclick="closeMobileMenu()">✕</button>
    ${links.map(([href, label]) => `<a href="${href}" onclick="closeMobileMenu()">${label}</a>`).join('')}
    <a href="contact.html" class="btn btn-luxury" onclick="closeMobileMenu()">${t('nav_book')}</a>
    <button onclick="Lang.toggle(); closeMobileMenu();" class="btn btn-ghost btn-sm" style="margin-top:8px">${t('nav_lang')}</button>
  `;
  document.body.appendChild(mobile);
}

function renderHero() {
  const t = Lang.t.bind(Lang);
  const hero = document.getElementById('hero');
  if (!hero) return;
  hero.innerHTML = `
    <div class="hero__bg" id="heroBg"></div>
    <div class="hero__overlay"></div>
    <div class="hero__content">
      <div class="hero__logo-wrap">
        <img src="assets/logo/logo-vertical.svg" alt="ELSMNODY BESPOKE" class="hero__logo-img"
          onerror="this.style.display='none'">
      </div>
      <span class="hero__eyebrow">${t('hero_eyebrow')}</span>
      <h1 class="hero__title">
        ${t('hero_title_1')} <em>${t('hero_title_em')}</em><br>${t('hero_title_2')}
      </h1>
      <p class="hero__subtitle">${t('hero_subtitle')}</p>
      <div class="hero__actions">
        <a href="#collections" class="btn btn-luxury btn-lg">${t('hero_cta_primary')}</a>
        <a href="contact.html" class="btn btn-secondary btn-lg">${t('hero_cta_second')}</a>
      </div>
    </div>
    <div class="hero__scroll">
      <div class="hero__scroll-line"></div>
      <span>${t('hero_scroll')}</span>
    </div>
  `;
  // Trigger bg loaded animation
  requestAnimationFrame(() => {
    const bg = document.getElementById('heroBg');
    if (bg) setTimeout(() => bg.classList.add('loaded'), 100);
  });
}

function renderWhy() {
  const t = Lang.t.bind(Lang);
  const section = document.getElementById('why');
  if (!section) return;
  const cards = [
    { icon: '📐', titleKey: 'why_1_title', descKey: 'why_1_desc' },
    { icon: '🧵', titleKey: 'why_2_title', descKey: 'why_2_desc' },
    { icon: '⏳', titleKey: 'why_3_title', descKey: 'why_3_desc' },
    { icon: '✦',  titleKey: 'why_4_title', descKey: 'why_4_desc' },
  ];
  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">${t('why_eyebrow')}</span>
        <h2 class="section-title">${t('why_title')}</h2>
        <div class="divider-gold"></div>
      </div>
      <div class="why__grid">
        ${cards.map((c, i) => `
          <div class="why__card reveal reveal-delay-${i+1}">
            <span class="why__icon">${c.icon}</span>
            <h3 class="why__title">${t(c.titleKey)}</h3>
            <p class="why__desc">${t(c.descKey)}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderCollections() {
  const t = Lang.t.bind(Lang);
  const section = document.getElementById('collections');
  if (!section) return;
  const items = [
    { key: 'coll_executive', img: 'collections/collection-executive.webp', href: 'collections/executive.html' },
    { key: 'coll_wedding',   img: 'collections/collection-wedding.webp',   href: 'collections/wedding.html'   },
    { key: 'coll_judicial',  img: 'collections/collection-judicial.webp',  href: 'collections/judicial.html'  },
    { key: 'coll_tuxedo',    img: 'collections/collection-tuxedo.webp',    href: 'collections/tuxedo.html'    },
    { key: 'coll_blazer',    img: 'collections/collection-blazer.webp',    href: 'collections/blazer.html'    },
  ];
  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">${t('coll_eyebrow')}</span>
        <h2 class="section-title">${t('coll_title')}</h2>
        <p class="section-subtitle">${t('coll_subtitle')}</p>
        <div class="divider-gold"></div>
      </div>
      <div class="collections__grid">
        ${items.map((item, i) => `
          <a href="${item.href}" class="coll-card reveal reveal-delay-${i+1}">
            <img class="coll-card__img" src="${IMG}${item.img}" alt="${t(item.key)}" loading="lazy">
            <div class="coll-card__overlay">
              <span class="coll-card__label">${t('coll_eyebrow')}</span>
              <h3 class="coll-card__title">${t(item.key)}</h3>
              <span class="coll-card__link">${t('coll_explore')} →</span>
            </div>
          </a>
        `).join('')}
      </div>
      <div style="text-align:center;margin-top:var(--space-10)">
        <a href="collections.html" class="btn btn-secondary btn-lg reveal">${t('coll_see_all')}</a>
      </div>
    </div>
  `;
}

function renderJourney() {
  const t = Lang.t.bind(Lang);
  const section = document.getElementById('journey');
  if (!section) return;
  const steps = [
    { titleKey: 'step_1_title', descKey: 'step_1_desc', img: 'founder/founder-workspace.webp' },
    { titleKey: 'step_2_title', descKey: 'step_2_desc', img: 'tailoring/tailoring-measurement.webp' },
    { titleKey: 'step_3_title', descKey: 'step_3_desc', img: 'tailoring/tailoring-cutting.webp' },
    { titleKey: 'step_4_title', descKey: 'step_4_desc', img: 'tailoring/tailoring-fitting.webp' },
    { titleKey: 'step_5_title', descKey: 'step_5_desc', img: 'tailoring/tailoring-finish.webp' },
  ];
  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">${t('journey_eyebrow')}</span>
        <h2 class="section-title">${t('journey_title')}</h2>
        <p class="section-subtitle">${t('journey_subtitle')}</p>
        <div class="divider-gold"></div>
      </div>
      <div class="journey__steps">
        ${steps.map((s, i) => `
          <div class="journey__step reveal reveal-delay-${i+1}">
            <img class="journey__step-img" src="${IMG}${s.img}" alt="${t(s.titleKey)}" loading="lazy">
            <span class="journey__step-num">${i+1}</span>
            <h3 class="journey__step-title">${t(s.titleKey)}</h3>
            <p class="journey__step-desc">${t(s.descKey)}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderFabrics() {
  const t = Lang.t.bind(Lang);
  const section = document.getElementById('fabrics');
  if (!section) return;
  const items = [
    { key: 'fab_wall',  img: 'fabrics/fabric-wall.webp',         origin: '' },
    { key: 'fab_wool',  img: 'fabrics/fabric-italian-wool.webp', origin: 'Italy' },
    { key: 'fab_cashmere', img: 'fabrics/fabric-cashmere.webp',  origin: 'Scotland' },
    { key: 'fab_eng',   img: 'fabrics/fabric-english-wool.webp', origin: 'England' },
    { key: 'fab_linen', img: 'fabrics/fabric-linen.webp',        origin: 'Belgium' },
  ];
  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">${t('fab_eyebrow')}</span>
        <h2 class="section-title">${t('fab_title')}</h2>
        <p class="section-subtitle">${t('fab_subtitle')}</p>
        <div class="divider-gold"></div>
      </div>
      <div class="fabrics__grid">
        ${items.map((item, i) => `
          <div class="fabric-card reveal reveal-delay-${Math.min(i+1,5)}">
            <img class="fabric-card__img" src="${IMG}${item.img}" alt="${t(item.key)}" loading="lazy">
            <div class="fabric-card__label">
              <div class="fabric-card__name">${t(item.key)}</div>
              ${item.origin ? `<div class="fabric-card__origin">${item.origin}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
      <div style="text-align:center;margin-top:var(--space-10)">
        <a href="fabrics.html" class="btn btn-secondary btn-lg reveal">${t('fab_see')}</a>
      </div>
    </div>
  `;
}

function renderGallery() {
  const t = Lang.t.bind(Lang);
  const section = document.getElementById('gallery');
  if (!section) return;
  const imgs = [
    'lifestyle/lifestyle-business.webp',
    'tailoring/tailoring-stitching.webp',
    'lifestyle/lifestyle-event.webp',
    'founder/founder-elegant.webp',
    'lifestyle/lifestyle-redcarpet.webp',
    'tailoring/tailoring-measurement.webp',
    'lifestyle/lifestyle-detail.webp',
    'branding/branding-card.webp',
    'lifestyle/lifestyle-store.webp',
  ];
  section.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">${t('gal_eyebrow')}</span>
        <h2 class="section-title">${t('gal_title')}</h2>
        <p class="section-subtitle">${t('gal_subtitle')}</p>
        <div class="divider-gold"></div>
      </div>
      <div class="gallery__masonry">
        ${imgs.map((src, i) => `
          <div class="gallery__item reveal" onclick="openLightbox('${IMG}${src}')">
            <img src="${IMG}${src}" alt="ELSMNODY Gallery ${i+1}" loading="lazy">
            <div class="gallery__item-overlay">
              <span class="gallery__item-icon">⊕</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="text-align:center;margin-top:var(--space-10)">
        <a href="gallery.html" class="btn btn-secondary btn-lg reveal">${t('gal_see')}</a>
      </div>
    </div>
  `;
}

function renderFounder() {
  const t = Lang.t.bind(Lang);
  const section = document.getElementById('founder');
  if (!section) return;
  section.innerHTML = `
    <div class="container">
      <div class="founder-preview__inner">
        <div class="founder-preview__img-wrap reveal">
          <img class="founder-preview__img" src="${IMG}founder/founder-portrait.webp" alt="${t('founder_sig')}" loading="lazy">
          <div class="founder-preview__img-accent"></div>
        </div>
        <div class="founder-preview__content reveal reveal-delay-2">
          <span class="eyebrow">${t('founder_eyebrow')}</span>
          <h2 class="founder-preview__name">
            ${t('founder_title_1')} <em>${t('founder_title_em')}</em>
          </h2>
          <div class="divider-gold-left"></div>
          <p class="founder-preview__text">${t('founder_text_1')}</p>
          <p class="founder-preview__text">${t('founder_text_2')}</p>
          <blockquote style="border-${document.documentElement.dir === 'rtl' ? 'right' : 'left'}:3px solid var(--color-gold);
            padding-${document.documentElement.dir === 'rtl' ? 'right' : 'left'}:var(--space-5);
            margin:var(--space-6) 0;color:var(--color-ivory-soft);font-style:italic;line-height:var(--leading-relaxed)">
            ${t('founder_quote')}
          </blockquote>
          <div class="founder-preview__sig">${t('founder_sig')}</div>
          <div style="margin-top:var(--space-8)">
            <a href="about.html" class="btn btn-primary btn-lg">${t('founder_cta')}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderTestimonials() {
  const t = Lang.t.bind(Lang);
  const section = document.getElementById('testimonials');
  if (!section) return;
  const list = TRANSLATIONS[Lang.current()].testimonials;
  section.innerHTML = `
    <div class="container" style="position:relative;z-index:1">
      <div class="section-header reveal">
        <span class="eyebrow">${t('test_eyebrow')}</span>
        <h2 class="section-title">${t('test_title')}</h2>
        <div class="divider-gold"></div>
      </div>
      <div class="testimonials__track">
        ${list.map((item, i) => `
          <div class="testimonial-card reveal reveal-delay-${i+1}">
            <div class="testimonial-card__stars">★★★★★</div>
            <p class="testimonial-card__text">"${item.text}"</p>
            <div class="testimonial-card__author">
              <div class="testimonial-card__avatar">${item.initial}</div>
              <div>
                <div class="testimonial-card__name">${item.name}</div>
                <div class="testimonial-card__role">${item.role}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderFooter() {
  const t = Lang.t.bind(Lang);
  const footer = document.getElementById('footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="container">
      <div class="footer__top">
        <div>
          <img class="footer__brand-logo" src="assets/logo/logo.svg" alt="ELSMNODY BESPOKE" onerror="this.style.display='none'">
          <p class="footer__brand-desc">${t('footer_desc')}</p>
          <div class="footer__social">
            <a href="#" class="footer__social-link" aria-label="Instagram">IG</a>
            <a href="#" class="footer__social-link" aria-label="Facebook">FB</a>
            <a href="#" class="footer__social-link" aria-label="WhatsApp">WA</a>
          </div>
        </div>
        <div>
          <h4 class="footer__col-title">${t('footer_links')}</h4>
          <ul class="footer__links">
            <li><a href="#collections">${t('nav_collections')}</a></li>
            <li><a href="#journey">${t('nav_tailoring')}</a></li>
            <li><a href="#fabrics">${t('nav_fabrics')}</a></li>
            <li><a href="about.html">${t('nav_about')}</a></li>
            <li><a href="gallery.html">${t('nav_gallery')}</a></li>
          </ul>
        </div>
        <div>
          <h4 class="footer__col-title">${t('footer_services')}</h4>
          <ul class="footer__links">
            <li><a href="#contact">${t('serv_bespoke')}</a></li>
            <li><a href="fabrics.html">${t('serv_fabric')}</a></li>
            <li><a href="#contact">${t('serv_consult')}</a></li>
            <li><a href="#contact">${t('serv_alter')}</a></li>
          </ul>
        </div>
        <div id="footer-contact-col">
          <h4 class="footer__col-title">${t('footer_contact')}</h4>
          <ul class="footer__links">
            <li><a href="tel:+201555277205">+20 155 527 7205</a></li>
            <li><a href="https://wa.me/201555277205">WhatsApp</a></li>
            <li><a href="mailto:info@elsmnody.com">info@elsmnody.com</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>${t('footer_rights')}</span>
        <span>${t('footer_made')} 🇪🇬</span>
      </div>
    </div>
  `;
}

/* ============================================================
   5. NAVBAR SCROLL BEHAVIOR
   ============================================================ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

window.openMobileMenu  = function() { document.getElementById('mobileMenu')?.classList.add('open'); document.body.style.overflow = 'hidden'; };
window.closeMobileMenu = function() { document.getElementById('mobileMenu')?.classList.remove('open'); document.body.style.overflow = ''; };
document.querySelector('.navbar__toggle')?.addEventListener('click', window.openMobileMenu);

/* ============================================================
   6. SCROLL REVEAL
   ============================================================ */
let revealObserver;
function updateScrollReveal() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ============================================================
   7. LIGHTBOX
   ============================================================ */
window.openLightbox = function(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  if (!lb || !img) return;
  img.src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
};
window.closeLightbox = function() {
  document.getElementById('lightbox')?.classList.remove('open');
  document.body.style.overflow = '';
};

/* ============================================================
   8. SMOOTH SCROLL for anchor links
   ============================================================ */
document.addEventListener('click', e => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.getAttribute('href').slice(1);
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* ============================================================
   9. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  Lang.init();
  initNavbar();
  // Mobile menu toggle
  const toggle = document.querySelector('.navbar__toggle');
  if (toggle) toggle.addEventListener('click', window.openMobileMenu);
  // Lightbox close on backdrop click
  document.getElementById('lightbox')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) window.closeLightbox();
  });
  // Keyboard close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { window.closeLightbox(); window.closeMobileMenu(); }
  });
});

// Expose Lang globally for onclick handlers
window.Lang = Lang;
