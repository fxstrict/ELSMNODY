/* ============================================================
   ELSMNODY BESPOKE — Fabric Collection Page JavaScript
   Phase 5: Fabric Collection Page
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
    nav_fabrics: 'الأقمشة', nav_about: 'عن المصمم',
    nav_gallery: 'المعرض', nav_contact: 'التواصل',
    nav_book: 'احجز موعدك', nav_lang: 'EN',

    /* Hero */
    hero_eyebrow: 'مجموعة الأقمشة',
    hero_title:   'الأقمشة الفاخرة',
    hero_title_accent: 'أساس كل شيء',
    hero_sub:     'نختار بعناية أفخر الأقمشة من إيطاليا وإنجلترا وسكوتلندا — لأن الجودة الحقيقية تبدأ من القماش.',

    /* Filter */
    filter_label: 'تصفية حسب النوع',
    filter_all:   'الكل',
    filter_wool:  'صوف',
    filter_cashmere: 'كشمير',
    filter_linen: 'كتان',
    filter_english: 'إنجليزي',

    /* Fabrics */
    fabrics_eyebrow: 'مجموعتنا',
    fabrics_title:   'أقمشة نختارها لتليق بك',
    fabrics_subtitle: 'كل قماش يُختار بعين الخبير وخبرة عشرين عاماً في الخياطة الفاخرة.',

    fabric_origin: 'الأصل',
    fabric_weight: 'الوزن',
    fabric_usage:  'مناسب لـ',
    fabric_btn:    'طلب هذا القماش',

    fabrics: [
      {
        id: 'italian-wool',
        category: 'wool',
        name: 'الصوف الإيطالي',
        subtitle: 'Ermenegildo Zegna — Vitale Barberis Canonico',
        desc: 'أيقونة الخياطة الفاخرة. صوف مرن يجمع بين المتانة والأناقة، ويُعدّ الخيار الأول لرجل الأعمال والمدير التنفيذي.',
        origin: 'إيطاليا',
        weight: '220–280 غرام/م²',
        usage: 'البدل الرسمية، الاجتماعات، المناسبات الكبرى',
        tag_color: '#C9A84C',
        tag: 'الأكثر طلباً',
        img: IMG + 'fabrics/fabric-italian-wool.webp',
      },
      {
        id: 'cashmere',
        category: 'cashmere',
        name: 'الكشمير الملكي',
        subtitle: 'Loro Piana — Zegna Cashmere',
        desc: 'أرقى ألياف الطبيعة، حريرية الملمس، دافئة بلا ثقل. الكشمير الخيار المثالي للمناسبات الشتوية الفاخرة.',
        origin: 'منغوليا — إيطاليا',
        weight: '300–360 غرام/م²',
        usage: 'بدل الشتاء، المآدب، الأمسيات الرسمية',
        tag_color: '#1A2744',
        tag: 'تحفة فنية',
        img: IMG + 'fabrics/fabric-cashmere.webp',
      },
      {
        id: 'english-wool',
        category: 'english',
        name: 'الصوف الإنجليزي',
        subtitle: 'Holland & Sherry — Scabal',
        desc: 'تقليد عريق تجاوز المئتي عام. الصوف الإنجليزي بمتانته الاستثنائية يُناسب البدل القضائية والمهنية التي تتحمل العمل اليومي.',
        origin: 'إنجلترا — ويلز',
        weight: '260–320 غرام/م²',
        usage: 'البدل القضائية، الزي المهني، البدل اليومية',
        tag_color: '#2D6A3F',
        tag: 'مفضّل للقضاة',
        img: IMG + 'fabrics/fabric-english-wool.webp',
      },
      {
        id: 'linen',
        category: 'linen',
        name: 'الكتان الفاخر',
        subtitle: 'Thomas Mason — Cerruti 1881',
        desc: 'الرفيق المثالي لمناخ مصر والخليج. كتان خفيف متهوّي يمنحك مظهراً راقياً حتى في أشد أيام الصيف.',
        origin: 'إيطاليا — فرنسا',
        weight: '170–210 غرام/م²',
        usage: 'البيئات الحارة، الاجتماعات النهارية، السفر',
        tag_color: '#8B6914',
        tag: 'مثالي للصيف',
        img: IMG + 'fabrics/fabric-linen.webp',
      },
      {
        id: 'fabric-wall',
        category: 'wool',
        name: 'جدار الأقمشة',
        subtitle: 'مجموعة حصرية مختارة',
        desc: 'جدار إلسمنودي من الأقمشة — مئات الخيارات في ألوان وأوزان متنوعة، يصطحبك فيها محمد السمنودي شخصياً لاختيار ما يناسب هويتك.',
        origin: 'إيطاليا، إنجلترا، فرنسا',
        weight: 'متنوع',
        usage: 'جميع أنواع البدل',
        tag_color: '#6B3FA0',
        tag: 'اكتشف الأكثر',
        img: IMG + 'fabrics/fabric-wall.webp',
      },
      {
        id: 'fabric-selection',
        category: 'cashmere',
        name: 'مختارات حصرية',
        subtitle: 'Black Label — Limited Edition',
        desc: 'أقمشة لا تجدها في أي مكان آخر. مختارات Black Label للعميل الاستثنائي — قيكونيا، موهير ذهبي، وأقمشة مرقّمة بأعداد محدودة.',
        origin: 'منغوليا — بيرو — اليابان',
        weight: '280–400 غرام/م²',
        usage: 'Black Label فقط',
        tag_color: '#0A0A08',
        tag: '◆ حصري',
        img: IMG + 'fabrics/fabric-selection.webp',
      },
    ],

    /* Exclusive */
    exclusive_eyebrow: 'أقمشة حصرية',
    exclusive_title:   'لمن يطلب الاستثنائي فقط',
    exclusive_desc:    'نحتفظ بمجموعة مختارة من أنادر أقمشة العالم — لعدد محدود جداً من العملاء. تواصل معنا لمعرفة ما هو متاح حالياً.',
    exclusive_items: [
      { icon: '🦙', name: 'قيكونيا', origin: 'بيرو', desc: 'أندر ألياف العالم — ألف مرة أرق من الشعر الإنساني' },
      { icon: '✦',  name: 'موهير ذهبي', origin: 'جنوب أفريقيا', desc: 'بريق طبيعي استثنائي، حريري بلا بديل' },
      { icon: '🌿', name: 'كتان آيرلندي', origin: 'أيرلندا', desc: 'أعرق كتان في التاريخ، متانة تدوم عقوداً' },
      { icon: '🏔', name: 'ألباكا', origin: 'الأنديز', desc: 'دفء الكشمير بخفة غير مسبوقة' },
    ],
    exclusive_cta: 'استفسر عن الأقمشة الحصرية',

    /* Process */
    process_eyebrow: 'كيف نختار القماش',
    process_title:   'الاختيار معاً',
    process_desc:    'لا نترك اختيار القماش لصدفة — هذه جلسة تشاورية بينك وبين محمد السمنودي يشرح فيها خصائص كل قماش وفقاً لمناسبتك وشخصيتك.',
    process_steps: [
      { num: '01', title: 'الاستشارة',       desc: 'نجلس معك لفهم مناسبتك، بيئة عملك، وأسلوبك.' },
      { num: '02', title: 'عيّنات القماش',   desc: 'تلمس القماش بيدك وترى اللون في الضوء الطبيعي.' },
      { num: '03', title: 'الاختيار النهائي', desc: 'توصية محمد السمنودي المبنية على 20 عاماً من الخبرة.' },
      { num: '04', title: 'البدء',            desc: 'يبدأ الحياكة فور اعتمادك على القماش والتصميم.' },
    ],

    /* CTA */
    cta_title: 'ابدأ باختيار قماشك',
    cta_desc:  'احجز جلسة مجانية مع محمد السمنودي واكتشف القماش الذي يليق بك.',
    cta_wa:    'تواصل عبر واتساب',
    cta_book:  'احجز موعد الاستشارة',

    /* Footer */
    footer_rights: '© 2024 إلسمنودي بيسبوك. جميع الحقوق محفوظة.',
    footer_made:   'صُنع بشغف في مصر',
  },

  en: {
    /* Navbar */
    nav_collections: 'Collections', nav_tailoring: 'Tailoring',
    nav_fabrics: 'Fabrics', nav_about: 'About',
    nav_gallery: 'Gallery', nav_contact: 'Contact',
    nav_book: 'Book Appointment', nav_lang: 'ع',

    /* Hero */
    hero_eyebrow: 'Fabric Collection',
    hero_title:   'The Finest Fabrics',
    hero_title_accent: 'The Foundation of Everything',
    hero_sub:     'We carefully source the world\'s finest fabrics from Italy, England, and Scotland — because true quality begins with the cloth.',

    /* Filter */
    filter_label: 'Filter by Type',
    filter_all:   'All',
    filter_wool:  'Wool',
    filter_cashmere: 'Cashmere',
    filter_linen: 'Linen',
    filter_english: 'English',

    /* Fabrics */
    fabrics_eyebrow: 'Our Collection',
    fabrics_title:   'Fabrics Chosen to Suit You',
    fabrics_subtitle: 'Each fabric is selected with expert eyes and twenty years of bespoke tailoring experience.',

    fabric_origin: 'Origin',
    fabric_weight: 'Weight',
    fabric_usage:  'Ideal For',
    fabric_btn:    'Request This Fabric',

    fabrics: [
      {
        id: 'italian-wool',
        category: 'wool',
        name: 'Italian Wool',
        subtitle: 'Ermenegildo Zegna — Vitale Barberis Canonico',
        desc: 'The icon of luxury tailoring. A resilient wool combining durability with elegance — the first choice for the executive and the businessman.',
        origin: 'Italy',
        weight: '220–280 g/m²',
        usage: 'Formal suits, business meetings, grand occasions',
        tag_color: '#C9A84C',
        tag: 'Most Requested',
        img: IMG + 'fabrics/fabric-italian-wool.webp',
      },
      {
        id: 'cashmere',
        category: 'cashmere',
        name: 'Royal Cashmere',
        subtitle: 'Loro Piana — Zegna Cashmere',
        desc: 'Nature\'s finest fibre — silk-like to the touch, warm without weight. Cashmere is the ideal choice for distinguished winter occasions.',
        origin: 'Mongolia — Italy',
        weight: '300–360 g/m²',
        usage: 'Winter suits, banquets, formal evenings',
        tag_color: '#1A2744',
        tag: 'Masterpiece',
        img: IMG + 'fabrics/fabric-cashmere.webp',
      },
      {
        id: 'english-wool',
        category: 'english',
        name: 'English Wool',
        subtitle: 'Holland & Sherry — Scabal',
        desc: 'A heritage spanning over two centuries. English wool\'s exceptional durability makes it ideal for judicial and professional suits that withstand daily wear.',
        origin: 'England — Wales',
        weight: '260–320 g/m²',
        usage: 'Judicial suits, professional attire, daily suits',
        tag_color: '#2D6A3F',
        tag: 'Judges\' Favourite',
        img: IMG + 'fabrics/fabric-english-wool.webp',
      },
      {
        id: 'linen',
        category: 'linen',
        name: 'Luxury Linen',
        subtitle: 'Thomas Mason — Cerruti 1881',
        desc: 'The perfect companion for Egypt\'s and the Gulf\'s climate. Light and breathable linen grants you a refined look even on the hottest summer days.',
        origin: 'Italy — France',
        weight: '170–210 g/m²',
        usage: 'Warm climates, daytime meetings, travel',
        tag_color: '#8B6914',
        tag: 'Summer Perfect',
        img: IMG + 'fabrics/fabric-linen.webp',
      },
      {
        id: 'fabric-wall',
        category: 'wool',
        name: 'The Fabric Wall',
        subtitle: 'Exclusive Curated Selection',
        desc: 'The ELSMNODY fabric wall — hundreds of choices in varied colours and weights, guided personally by Mohamed Elsmnody to find what suits your identity.',
        origin: 'Italy, England, France',
        weight: 'Various',
        usage: 'All suit types',
        tag_color: '#6B3FA0',
        tag: 'Explore More',
        img: IMG + 'fabrics/fabric-wall.webp',
      },
      {
        id: 'fabric-selection',
        category: 'cashmere',
        name: 'Exclusive Selections',
        subtitle: 'Black Label — Limited Edition',
        desc: 'Fabrics you will not find anywhere else. Black Label selections for the exceptional client — vicuña, golden mohair, and numbered limited-edition cloths.',
        origin: 'Mongolia — Peru — Japan',
        weight: '280–400 g/m²',
        usage: 'Black Label exclusively',
        tag_color: '#0A0A08',
        tag: '◆ Exclusive',
        img: IMG + 'fabrics/fabric-selection.webp',
      },
    ],

    /* Exclusive */
    exclusive_eyebrow: 'Exclusive Fabrics',
    exclusive_title:   'For Those Who Accept Only the Exceptional',
    exclusive_desc:    'We hold a curated selection of the world\'s rarest fabrics — available to a very limited number of clients. Contact us to learn what is currently available.',
    exclusive_items: [
      { icon: '🦙', name: 'Vicuña',        origin: 'Peru',          desc: 'The world\'s rarest fibre — a thousand times finer than human hair' },
      { icon: '✦',  name: 'Golden Mohair', origin: 'South Africa',  desc: 'Exceptional natural lustre, unparalleled in its silk-like quality' },
      { icon: '🌿', name: 'Irish Linen',   origin: 'Ireland',       desc: 'The most venerable linen in history — durability that lasts decades' },
      { icon: '🏔', name: 'Alpaca',        origin: 'The Andes',     desc: 'The warmth of cashmere with unprecedented lightness' },
    ],
    exclusive_cta: 'Enquire About Exclusive Fabrics',

    /* Process */
    process_eyebrow: 'How We Choose Fabric',
    process_title:   'Choosing Together',
    process_desc:    'We never leave fabric selection to chance — this is a consultative session between you and Mohamed Elsmnody, where he explains each fabric\'s properties according to your occasion and personality.',
    process_steps: [
      { num: '01', title: 'Consultation',      desc: 'We sit with you to understand your occasion, work environment, and personal style.' },
      { num: '02', title: 'Fabric Samples',    desc: 'You touch the fabric with your hands and see the colour in natural light.' },
      { num: '03', title: 'Final Selection',   desc: 'Mohamed Elsmnody\'s recommendation, built on 20 years of expertise.' },
      { num: '04', title: 'We Begin',          desc: 'The tailoring starts the moment you approve the fabric and design.' },
    ],

    /* CTA */
    cta_title: 'Begin with Choosing Your Fabric',
    cta_desc:  'Book a free session with Mohamed Elsmnody and discover the fabric that befits you.',
    cta_wa:    'Contact via WhatsApp',
    cta_book:  'Book a Consultation',

    /* Footer */
    footer_rights: '© 2024 ELSMNODY BESPOKE. All rights reserved.',
    footer_made:   'Crafted with passion in Egypt',
  },
};

/* ============================================================
   2. LANGUAGE MANAGER
   ============================================================ */
const Lang = (() => {
  const KEY = 'elsmnody_lang';
  let cur = localStorage.getItem(KEY) || 'ar';
  function apply(lang) {
    cur = lang;
    localStorage.setItem(KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('data-lang', lang);
    renderPage();
  }
  function t(key) { return T[cur][key] || T.ar[key] || key; }
  function toggle() { apply(cur === 'ar' ? 'en' : 'ar'); }
  function current() { return cur; }
  function init() { apply(cur); }
  return { init, toggle, t, current };
})();

/* ============================================================
   3. RENDER — NAVBAR
   ============================================================ */
function renderNavbar() {
  document.querySelector('.navbar__links')?.remove();
  document.querySelector('.navbar__mobile')?.remove();
  const nav = document.querySelector('.navbar__inner');
  if (!nav) return;

  const links = [
    ['index.html#collections', Lang.t('nav_collections')],
    ['index.html#journey',     Lang.t('nav_tailoring')],
    ['fabrics.html',           Lang.t('nav_fabrics')],
    ['about.html',             Lang.t('nav_about')],
    ['gallery.html',           Lang.t('nav_gallery')],
    ['index.html#contact',     Lang.t('nav_contact')],
  ];

  const ul = document.createElement('ul');
  ul.className = 'navbar__links';
  links.forEach(([href, label]) => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.href = href; a.textContent = label;
    if (href.startsWith('fabrics')) a.classList.add('active');
    li.appendChild(a); ul.appendChild(li);
  });

  const cta = nav.querySelector('.navbar__cta');
  cta.innerHTML = `
    <a href="contact.html" class="btn btn-primary btn-sm">${Lang.t('nav_book')}</a>
    <button class="btn btn-ghost btn-sm" id="lang-toggle">${Lang.t('nav_lang')}</button>
  `;
  nav.insertBefore(ul, cta);

  // Mobile menu
  const mobile = document.createElement('nav');
  mobile.className = 'navbar__mobile';
  mobile.innerHTML = `<ul>${links.map(([h,l]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul>
    <div style="display:flex;gap:var(--space-3);justify-content:center;margin-top:var(--space-4)">
      <a href="contact.html" class="btn btn-primary btn-sm">${Lang.t('nav_book')}</a>
      <button class="btn btn-ghost btn-sm" id="lang-toggle-mobile">${Lang.t('nav_lang')}</button>
    </div>`;
  document.body.insertBefore(mobile, document.body.firstChild.nextSibling);

  document.getElementById('lang-toggle')?.addEventListener('click', Lang.toggle);
  document.getElementById('lang-toggle-mobile')?.addEventListener('click', Lang.toggle);

  // Hamburger
  const toggle = document.querySelector('.navbar__toggle');
  toggle?.addEventListener('click', () => mobile.classList.toggle('open'));
}

/* ============================================================
   4. RENDER — HERO
   ============================================================ */
function renderHero() {
  const el = document.getElementById('fabrics-hero');
  if (!el) return;
  el.innerHTML = `
    <div class="fabrics-hero__bg">
      <img src="${IMG}fabrics/fabric-wall.webp" alt="Fabric Wall" class="fabrics-hero__img"
           onerror="this.style.display='none'">
      <div class="fabrics-hero__overlay"></div>
    </div>
    <div class="container fabrics-hero__content reveal">
      <span class="eyebrow">${Lang.t('hero_eyebrow')}</span>
      <h1 class="fabrics-hero__title">
        ${Lang.t('hero_title')}<br>
        <em class="fabrics-hero__accent">${Lang.t('hero_title_accent')}</em>
      </h1>
      <p class="fabrics-hero__sub">${Lang.t('hero_sub')}</p>
    </div>
    <div class="fabrics-hero__scroll">
      <span></span>
    </div>
  `;
}

/* ============================================================
   5. RENDER — FILTER TABS
   ============================================================ */
let activeFilter = 'all';

function renderFilter() {
  const el = document.getElementById('fabrics-filter');
  if (!el) return;
  const filters = [
    { key: 'all',      label: Lang.t('filter_all')      },
    { key: 'wool',     label: Lang.t('filter_wool')     },
    { key: 'cashmere', label: Lang.t('filter_cashmere') },
    { key: 'linen',    label: Lang.t('filter_linen')    },
    { key: 'english',  label: Lang.t('filter_english')  },
  ];
  el.innerHTML = `
    <div class="container">
      <div class="filter-tabs">
        ${filters.map(f => `
          <button class="filter-tab ${f.key === activeFilter ? 'active' : ''}"
                  data-filter="${f.key}">${f.label}</button>
        `).join('')}
      </div>
    </div>
  `;
  el.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      renderFilter();
      renderFabricGrid();
    });
  });
}

/* ============================================================
   6. RENDER — FABRIC GRID
   ============================================================ */
function renderFabricGrid() {
  const el = document.getElementById('fabrics-grid');
  if (!el) return;
  const fabrics = T[Lang.current()].fabrics;
  const filtered = activeFilter === 'all'
    ? fabrics
    : fabrics.filter(f => f.category === activeFilter);

  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">${Lang.t('fabrics_eyebrow')}</span>
        <h2 class="section-title">${Lang.t('fabrics_title')}</h2>
        <p class="section-subtitle">${Lang.t('fabrics_subtitle')}</p>
      </div>
      <div class="fabrics-cards" id="fabrics-cards-list">
        ${filtered.map((f, i) => `
          <article class="fabric-card reveal reveal-delay-${(i % 3) + 1}" data-category="${f.category}">
            <div class="fabric-card__img-wrap">
              <img src="${f.img}" alt="${f.name}" class="fabric-card__img"
                   loading="lazy"
                   onerror="this.parentElement.style.background='var(--color-bg-card)'">
              <span class="fabric-card__tag" style="background:${f.tag_color}">${f.tag}</span>
            </div>
            <div class="fabric-card__body">
              <div class="fabric-card__head">
                <h3 class="fabric-card__name">${f.name}</h3>
                <p class="fabric-card__subtitle">${f.subtitle}</p>
              </div>
              <p class="fabric-card__desc">${f.desc}</p>
              <div class="fabric-card__specs">
                <div class="fabric-spec">
                  <span class="fabric-spec__label">${Lang.t('fabric_origin')}</span>
                  <span class="fabric-spec__value">${f.origin}</span>
                </div>
                <div class="fabric-spec">
                  <span class="fabric-spec__label">${Lang.t('fabric_weight')}</span>
                  <span class="fabric-spec__value">${f.weight}</span>
                </div>
                <div class="fabric-spec fabric-spec--full">
                  <span class="fabric-spec__label">${Lang.t('fabric_usage')}</span>
                  <span class="fabric-spec__value">${f.usage}</span>
                </div>
              </div>
              <a href="https://wa.me/201555277205?text=أريد الاستفسار عن قماش: ${f.name}"
                 class="btn btn-secondary fabric-card__cta" target="_blank">
                ${Lang.t('fabric_btn')}
              </a>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
  initReveal();
}

/* ============================================================
   7. RENDER — EXCLUSIVE FABRICS
   ============================================================ */
function renderExclusive() {
  const el = document.getElementById('fabrics-exclusive');
  if (!el) return;
  const items = Lang.t('exclusive_items');
  el.innerHTML = `
    <div class="exclusive-bg">
      <img src="${IMG}fabrics/fabric-selection.webp" alt="" class="exclusive-bg__img"
           onerror="this.style.display='none'">
      <div class="exclusive-bg__overlay"></div>
    </div>
    <div class="container exclusive-inner">
      <div class="exclusive-header reveal">
        <span class="eyebrow">${Lang.t('exclusive_eyebrow')}</span>
        <h2 class="section-title">${Lang.t('exclusive_title')}</h2>
        <p class="section-subtitle">${Lang.t('exclusive_desc')}</p>
      </div>
      <div class="exclusive-grid">
        ${items.map((item, i) => `
          <div class="exclusive-item reveal reveal-delay-${i + 1}">
            <div class="exclusive-item__icon">${item.icon}</div>
            <h3 class="exclusive-item__name">${item.name}</h3>
            <span class="exclusive-item__origin">${item.origin}</span>
            <p class="exclusive-item__desc">${item.desc}</p>
          </div>
        `).join('')}
      </div>
      <div class="exclusive-cta reveal">
        <a href="https://wa.me/201555277205?text=أريد الاستفسار عن الأقمشة الحصرية"
           class="btn btn-luxury" target="_blank">
          ${Lang.t('exclusive_cta')}
        </a>
      </div>
    </div>
  `;
  initReveal();
}

/* ============================================================
   8. RENDER — PROCESS STEPS
   ============================================================ */
function renderProcess() {
  const el = document.getElementById('fabrics-process');
  if (!el) return;
  const steps = Lang.t('process_steps');
  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">${Lang.t('process_eyebrow')}</span>
        <h2 class="section-title">${Lang.t('process_title')}</h2>
        <p class="section-subtitle">${Lang.t('process_desc')}</p>
      </div>
      <div class="process-steps">
        <div class="process-img reveal">
          <img src="${IMG}tailoring/tailoring-measurement.webp" alt="Fabric Consultation"
               onerror="this.style.display='none'">
          <img src="${IMG}tailoring/tailoring-cutting.webp" alt="Fabric Selection"
               class="process-img__secondary"
               onerror="this.style.display='none'">
        </div>
        <div class="process-list">
          ${steps.map((s, i) => `
            <div class="process-step reveal reveal-delay-${i + 1}">
              <div class="process-step__num">${s.num}</div>
              <div class="process-step__content">
                <h3 class="process-step__title">${s.title}</h3>
                <p class="process-step__desc">${s.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  initReveal();
}

/* ============================================================
   9. RENDER — CTA
   ============================================================ */
function renderCTA() {
  const el = document.getElementById('fabrics-cta');
  if (!el) return;
  el.innerHTML = `
    <div class="container fabrics-cta__inner reveal">
      <div>
        <h2 class="fabrics-cta__title">${Lang.t('cta_title')}</h2>
        <p class="fabrics-cta__desc">${Lang.t('cta_desc')}</p>
      </div>
      <div class="fabrics-cta__btns">
        <a href="https://wa.me/201555277205?text=أريد الاستفسار عن اختيار قماش بدلتي"
           class="btn btn-whatsapp btn-lg" target="_blank">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          ${Lang.t('cta_wa')}
        </a>
        <a href="contact.html" class="btn btn-secondary btn-lg">${Lang.t('cta_book')}</a>
      </div>
    </div>
  `;
  initReveal();
}

/* ============================================================
   10. RENDER — FOOTER
   ============================================================ */
function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  const lang = Lang.current();
  el.innerHTML = `
    <div class="container" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-6);text-align:center">
      <img src="assets/logo/logo-vertical.svg" alt="ELSMNODY BESPOKE"
           style="height:60px;opacity:.8" onerror="this.outerHTML='<span style=\\'font-family:var(--font-display);font-size:1.2rem;color:var(--color-gold);letter-spacing:4px\\'>ELSMNODY</span>'">
      <nav style="display:flex;flex-wrap:wrap;gap:var(--space-6);justify-content:center">
        <a href="index.html" style="color:var(--color-text-muted);font-size:var(--text-sm);transition:color .3s" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='var(--color-text-muted)'">${lang==='ar'?'الرئيسية':'Home'}</a>
        <a href="collections.html" style="color:var(--color-text-muted);font-size:var(--text-sm);transition:color .3s" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='var(--color-text-muted)'">${Lang.t('nav_collections')}</a>
        <a href="fabrics.html" style="color:var(--color-gold);font-size:var(--text-sm)">${Lang.t('nav_fabrics')}</a>
        <a href="about.html" style="color:var(--color-text-muted);font-size:var(--text-sm);transition:color .3s" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='var(--color-text-muted)'">${Lang.t('nav_about')}</a>
        <a href="gallery.html" style="color:var(--color-text-muted);font-size:var(--text-sm);transition:color .3s" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='var(--color-text-muted)'">${Lang.t('nav_gallery')}</a>
      </nav>
      <div style="width:60px;height:1px;background:var(--color-gold-muted)"></div>
      <p style="font-size:var(--text-xs);color:var(--color-text-muted)">${Lang.t('footer_rights')}</p>
      <p style="font-size:var(--text-xs);color:var(--color-text-muted)">${Lang.t('footer_made')}</p>
    </div>
  `;
}

/* ============================================================
   11. SCROLL REVEAL
   ============================================================ */
function initReveal() {
  const items = document.querySelectorAll('.reveal:not(.is-visible)');
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  items.forEach(el => io.observe(el));
}

/* ============================================================
   12. NAVBAR SCROLL EFFECT
   ============================================================ */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ============================================================
   13. RENDER ALL
   ============================================================ */
function renderPage() {
  renderNavbar();
  renderHero();
  renderFilter();
  renderFabricGrid();
  renderExclusive();
  renderProcess();
  renderCTA();
  renderFooter();
  initReveal();
}

/* ============================================================
   14. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  Lang.init();
});
