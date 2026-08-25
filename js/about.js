/* ============================================================
   ELSMNODY BESPOKE — About Founder Page JavaScript
   Phase 4: About Page
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
    hero_eyebrow: 'عن المصمم',
    hero_title:   'محمد السمنودي',
    hero_sub:     'حرفي يحوّل القماش إلى حضور، والخيط إلى هوية.',

    /* Intro */
    intro_eyebrow: 'القصة',
    intro_title:   'رجل خلف كل بدلة',
    intro_p1: 'وُلدت الحرفة في يدَي محمد السمنودي منذ الصغر، حين تعلّم من والده أن القماش الجيد لا يكفي وحده — ما يصنع الفرق هو الإنسان الذي يمسكه.',
    intro_p2: 'على مدى أكثر من عقدين، بنى محمد سمعة راسخة بين نخبة القضاة ورجال الأعمال والمسؤولين في مصر والخليج، ليس فقط بجودة الخياطة، بل بقدرته الفريدة على قراءة شخصية العميل وترجمتها إلى بدلة تنطق بهويته.',
    intro_p3: 'اليوم، إلسمنودي بيسبوك ليس مجرد أتيليه — إنه بيت حرفة يحمل رسالة: أن كل إنسان يستحق أن يُرى كما يريد أن يُرى.',
    intro_sig: 'محمد السمنودي',
    intro_sig_title: 'مؤسس ومصمم إلسمنودي بيسبوك',

    /* Stats */
    stats_eyebrow: 'بالأرقام',
    stats: [
      { value: 20,   suffix: '+', label: 'عاماً من الخبرة'      },
      { value: 1200, suffix: '+', label: 'بدلة مُسلَّمة'        },
      { value: 22,   suffix: '',  label: 'قياساً لكل بدلة'      },
      { value: 4,    suffix: '',  label: 'دول في المنطقة'       },
    ],

    /* Philosophy */
    phil_eyebrow: 'الفلسفة',
    phil_title:   'ما نؤمن به',
    phil_quote:   '"الأناقة الحقيقية لا تُشترى — تُصنع. وكل بدلة هي رسالة صامتة تُقرأ قبل أن تتكلم."',
    phil_values: [
      { icon: '✦', title: 'الإتقان أولاً',        desc: 'لا نسلّم بدلة حتى تبلغ مستوى الكمال. التفاصيل الصغيرة هي ما تصنع الفارق الكبير.' },
      { icon: '👁', title: 'العميل في المركز',     desc: 'كل بدلة تبدأ باستماع حقيقي — نفهم من أنت، أين تذهب، وكيف تريد أن يراك العالم.' },
      { icon: '🤝', title: 'شراكة مدى الحياة',    desc: 'علاقتنا لا تنتهي عند التسليم. نحن هنا لكل تعديل، لكل مناسبة، لكل مرحلة جديدة.' },
      { icon: '🌍', title: 'هوية عربية راقية',     desc: 'نفخر بجذورنا ونقدّم خياطة تليق بمكانة الرجل العربي الطموح في العالم.' },
    ],

    /* Timeline */
    timeline_eyebrow: 'المسيرة',
    timeline_title:   'رحلة عقدين',
    timeline: [
      { year: '2002', title: 'البداية',            desc: 'افتتاح أول أتيليه صغير في القاهرة. الحلم كان كبيراً والإمكانيات محدودة، لكن الإتقان لم يكن قابلاً للتفاوض.' },
      { year: '2007', title: 'الانطلاقة',          desc: 'أول بدلة للقضاء — بداية تخصص حمل إلسمنودي إلى دوائر المهنيين وأصحاب المكانة.' },
      { year: '2012', title: 'الاعتراف',           desc: 'توصيات شخصية من مسؤولين بارزين فتحت أبواب الخليج وأسّست لحضور إقليمي.' },
      { year: '2017', title: 'التوسع',             desc: 'توسيع الأتيليه وتطوير فريق من الحرفيين المتخصصين. إطلاق مجموعة Black Label لأول مرة.' },
      { year: '2024', title: 'إلسمنودي بيسبوك',   desc: 'إطلاق الهوية الجديدة والموقع الرسمي. الحفاظ على جوهر الحرفة مع الانفتاح على عملاء جدد.' },
    ],

    /* Atelier */
    atelier_eyebrow: 'أتيليه إلسمنودي',
    atelier_title:   'المكان الذي تولد فيه البدلات',
    atelier_desc:    'في قلب أتيليه إلسمنودي، حيث تلتقي يد الحرفي بأفخر الأقمشة، تبدأ رحلة كل بدلة. مساحة مُصمَّمة للإبداع والدقة — كل طاولة قصّ، كل إبرة، كل خيطة تحكي قصة الالتزام بالكمال.',

    /* Testimonials */
    test_eyebrow: 'يقولون عنه',
    test_title:   'شهادات من وثقوا بالحرفة',
    testimonials: [
      { text: 'محمد ليس مجرد خياط — إنه فنان يقرأ شخصيتك من النظرة الأولى. بدلتي كانت أجمل ما ارتديت في حياتي.', name: 'المستشار خالد إبراهيم', role: 'قاضٍ — القاهرة', initial: 'خ' },
      { text: 'قبل أي اجتماع مهم، أحرص أن أكون بإحدى بدلات إلسمنودي. الفرق في الثقة التي تمنحها لا يُقارَن.', name: 'م. سامي الحسن', role: 'رئيس مجلس إدارة', initial: 'س' },
      { text: 'سافرت خصيصاً من الرياض لأتيليه إلسمنودي. الخدمة والجودة تستحق كل شيء. سيظل خياطي المفضل دائماً.', name: 'عبدالله المطيري', role: 'رجل أعمال — الرياض', initial: 'ع' },
    ],

    /* CTA */
    cta_title: 'تعرّف على محمد شخصياً',
    cta_desc:  'احجز استشارة مجانية وتعرّف على كيفية تصميم بدلتك المثالية.',
    cta_wa:    'تواصل عبر واتساب',
    cta_book:  'احجز موعدك',

    /* Footer */
    footer_rights: '© 2024 إلسمنودي بيسبوك. جميع الحقوق محفوظة.',
    footer_made:   'صُنع بشغف في مصر',
  },

  en: {
    nav_collections: 'Collections', nav_tailoring: 'Tailoring',
    nav_fabrics: 'Fabrics', nav_about: 'About',
    nav_gallery: 'Gallery', nav_contact: 'Contact',
    nav_book: 'Book Appointment', nav_lang: 'ع',

    hero_eyebrow: 'About the Designer',
    hero_title:   'Mohamed Elsmnody',
    hero_sub:     'A craftsman who transforms fabric into presence, and thread into identity.',

    intro_eyebrow: 'The Story',
    intro_title:   'The Man Behind Every Suit',
    intro_p1: 'Mohamed Elsmnody\'s mastery was born in his hands from an early age, when he learned from his father that fine fabric alone is not enough — what makes the difference is the person who holds it.',
    intro_p2: 'Over more than two decades, Mohamed built a distinguished reputation among Egypt\'s and the Gulf\'s elite — judges, executives, and senior officials — not only through the quality of his tailoring, but through his unique ability to read a client\'s character and translate it into a suit that speaks his identity.',
    intro_p3: 'Today, ELSMNODY BESPOKE is not merely an atelier — it is a craft house that carries a message: that every person deserves to be seen exactly as they wish to be seen.',
    intro_sig: 'Mohamed Elsmnody',
    intro_sig_title: 'Founder & Designer, ELSMNODY BESPOKE',

    stats_eyebrow: 'By the Numbers',
    stats: [
      { value: 20,   suffix: '+', label: 'Years of Expertise'    },
      { value: 1200, suffix: '+', label: 'Suits Delivered'       },
      { value: 22,   suffix: '',  label: 'Measurements Per Suit' },
      { value: 4,    suffix: '',  label: 'Countries Served'      },
    ],

    phil_eyebrow: 'Philosophy',
    phil_title:   'What We Believe',
    phil_quote:   '"True elegance cannot be bought — it is crafted. Every suit is a silent message read before you speak."',
    phil_values: [
      { icon: '✦', title: 'Mastery First',          desc: 'We do not deliver a suit until it reaches perfection. Small details make the greatest difference.' },
      { icon: '👁', title: 'Client at the Centre',  desc: 'Every suit begins with genuine listening — we understand who you are, where you go, and how you want the world to see you.' },
      { icon: '🤝', title: 'A Lifelong Partnership',desc: 'Our relationship does not end at delivery. We are here for every alteration, every occasion, every new chapter.' },
      { icon: '🌍', title: 'Refined Arab Identity', desc: 'We are proud of our heritage and deliver tailoring worthy of the ambitious Arab man\'s standing in the world.' },
    ],

    timeline_eyebrow: 'The Journey',
    timeline_title:   'Two Decades in Craft',
    timeline: [
      { year: '2002', title: 'The Beginning',        desc: 'Opening of the first small atelier in Cairo. The dream was grand and resources were modest, but excellence was never negotiable.' },
      { year: '2007', title: 'The Launch',           desc: 'The first judicial suit — the beginning of a specialisation that brought ELSMNODY into the circles of professionals and the distinguished.' },
      { year: '2012', title: 'Recognition',          desc: 'Personal referrals from senior officials opened the doors of the Gulf and established a regional presence.' },
      { year: '2017', title: 'Expansion',            desc: 'The atelier was enlarged and a team of specialist craftsmen developed. The Black Label collection was launched for the first time.' },
      { year: '2024', title: 'ELSMNODY BESPOKE',    desc: 'Launch of the new identity and official website. Preserving the essence of craft while welcoming new clients.' },
    ],

    atelier_eyebrow: 'The Atelier',
    atelier_title:   'Where Suits Are Born',
    atelier_desc:    'At the heart of the ELSMNODY atelier, where the craftsman\'s hand meets the finest fabrics, every suit\'s journey begins. A space designed for creativity and precision — every cutting table, every needle, every thread tells the story of a commitment to perfection.',

    test_eyebrow: 'They Say',
    test_title:   'Testimonials from Those Who Trusted the Craft',
    testimonials: [
      { text: 'Mohamed is not merely a tailor — he is an artist who reads your personality from the first glance. My suit was the most beautiful thing I have ever worn.', name: 'Counsellor Khaled Ibrahim', role: 'Judge — Cairo', initial: 'K' },
      { text: 'Before any important meeting, I make sure to wear one of my ELSMNODY suits. The difference in confidence they provide is incomparable.', name: 'Eng. Sami Al-Hassan', role: 'Chairman of the Board', initial: 'S' },
      { text: 'I travelled specifically from Riyadh to the ELSMNODY atelier. The service and quality are worth everything. He will always be my preferred tailor.', name: 'Abdullah Al-Mutairi', role: 'Businessman — Riyadh', initial: 'A' },
    ],

    cta_title: 'Meet Mohamed in Person',
    cta_desc:  'Book a free consultation and discover how your perfect suit is designed.',
    cta_wa:    'Contact via WhatsApp',
    cta_book:  'Book Your Appointment',

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
    li.innerHTML = `<a href="${href}"${href === 'about.html' ? ' style="color:var(--color-gold)"' : ''}>${label}</a>`;
    ul.appendChild(li);
  });

  const cta = nav.querySelector('.navbar__cta');
  if (cta) {
    cta.innerHTML = `
      <button class="btn btn-secondary btn-sm" onclick="Lang.toggle()">${Lang.t('nav_lang')}</button>
      <a href="contact.html" class="btn btn-primary btn-sm">${Lang.t('nav_book')}</a>
    `;
    nav.insertBefore(ul, cta);
  }

  const mob = document.createElement('div');
  mob.className = 'navbar__mobile';
  mob.id = 'mobileMenu';
  mob.innerHTML = `
    <button class="navbar__mobile-close" onclick="closeMobileMenu()">✕</button>
    ${links.map(([h,l]) => `<a href="${h}" onclick="closeMobileMenu()">${l}</a>`).join('')}
    <a href="contact.html" class="btn btn-luxury" onclick="closeMobileMenu()">${Lang.t('nav_book')}</a>
    <button onclick="Lang.toggle();closeMobileMenu();" class="btn btn-ghost btn-sm" style="margin-top:8px">${Lang.t('nav_lang')}</button>
  `;
  document.body.appendChild(mob);
}

/* ============================================================
   4. RENDER — HERO
   ============================================================ */
function renderHero() {
  const el = document.getElementById('about-hero');
  if (!el) return;
  el.innerHTML = `
    <div class="about-hero__bg"></div>
    <div class="about-hero__overlay"></div>
    <div class="about-hero__content">
      <span class="eyebrow">${Lang.t('hero_eyebrow')}</span>
      <h1 class="about-hero__title">${Lang.t('hero_title')}</h1>
      <div class="about-hero__divider"></div>
      <p class="about-hero__sub">${Lang.t('hero_sub')}</p>
    </div>
    <div class="about-hero__scroll">
      <div class="about-hero__scroll-line"></div>
    </div>
  `;
}

/* ============================================================
   5. RENDER — INTRO (Story)
   ============================================================ */
function renderIntro() {
  const el = document.getElementById('about-intro');
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="about-intro__inner">
        <div class="about-intro__images reveal">
          <div class="about-intro__img-main">
            <img src="${IMG}founder/founder-portrait.webp" alt="${Lang.t('hero_title')}" loading="lazy">
          </div>
          <div class="about-intro__img-secondary">
            <img src="${IMG}founder/founder-closeup.webp" alt="${Lang.t('hero_title')}" loading="lazy">
          </div>
          <div class="about-intro__img-accent"></div>
        </div>
        <div class="about-intro__text">
          <span class="eyebrow reveal">${Lang.t('intro_eyebrow')}</span>
          <h2 class="about-intro__title reveal">${Lang.t('intro_title')}</h2>
          <div class="divider-gold-left reveal"></div>
          <p class="about-intro__p reveal reveal-delay-1">${Lang.t('intro_p1')}</p>
          <p class="about-intro__p reveal reveal-delay-2">${Lang.t('intro_p2')}</p>
          <p class="about-intro__p reveal reveal-delay-3">${Lang.t('intro_p3')}</p>
          <div class="about-intro__sig reveal reveal-delay-4">
            <div class="about-intro__sig-name">${Lang.t('intro_sig')}</div>
            <div class="about-intro__sig-title">${Lang.t('intro_sig_title')}</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ============================================================
   6. RENDER — STATS (Counter Animation)
   ============================================================ */
function renderStats() {
  const el = document.getElementById('about-stats');
  if (!el) return;
  const stats = T[Lang.current()].stats;
  el.innerHTML = `
    <div class="container">
      <span class="eyebrow" style="display:block;text-align:center;margin-bottom:var(--space-12)">${Lang.t('stats_eyebrow')}</span>
      <div class="about-stats__grid">
        ${stats.map((s, i) => `
          <div class="about-stat reveal reveal-delay-${i+1}">
            <div class="about-stat__number">
              <span class="about-stat__value" data-target="${s.value}">0</span><span class="about-stat__suffix">${s.suffix}</span>
            </div>
            <div class="about-stat__label">${s.label}</div>
            <div class="about-stat__line"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ============================================================
   7. RENDER — PHILOSOPHY
   ============================================================ */
function renderPhilosophy() {
  const el = document.getElementById('about-philosophy');
  if (!el) return;
  const vals = T[Lang.current()].phil_values;
  el.innerHTML = `
    <div class="container">
      <div class="about-phil__inner">
        <div class="about-phil__quote-col reveal">
          <span class="eyebrow">${Lang.t('phil_eyebrow')}</span>
          <h2 class="about-phil__title">${Lang.t('phil_title')}</h2>
          <div class="divider-gold-left"></div>
          <blockquote class="about-phil__quote">${Lang.t('phil_quote')}</blockquote>
          <img src="${IMG}founder/founder-elegant.webp" alt="Mohamed Elsmnody" class="about-phil__img reveal reveal-delay-2" loading="lazy">
        </div>
        <div class="about-phil__values">
          ${vals.map((v, i) => `
            <div class="about-phil__value reveal reveal-delay-${i+1}">
              <span class="about-phil__value-icon">${v.icon}</span>
              <div>
                <h3 class="about-phil__value-title">${v.title}</h3>
                <p class="about-phil__value-desc">${v.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ============================================================
   8. RENDER — TIMELINE
   ============================================================ */
function renderTimeline() {
  const el = document.getElementById('about-timeline');
  if (!el) return;
  const items = T[Lang.current()].timeline;
  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">${Lang.t('timeline_eyebrow')}</span>
        <h2 class="section-title">${Lang.t('timeline_title')}</h2>
        <div class="divider-gold"></div>
      </div>
      <div class="about-timeline__track">
        <div class="about-timeline__line"></div>
        ${items.map((item, i) => `
          <div class="about-timeline__item ${i % 2 === 0 ? 'about-timeline__item--left' : 'about-timeline__item--right'} reveal reveal-delay-${(i % 3) + 1}">
            <div class="about-timeline__card">
              <span class="about-timeline__year">${item.year}</span>
              <h3 class="about-timeline__event-title">${item.title}</h3>
              <p class="about-timeline__event-desc">${item.desc}</p>
            </div>
            <div class="about-timeline__dot"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ============================================================
   9. RENDER — ATELIER GALLERY
   ============================================================ */
function renderAtelier() {
  const el = document.getElementById('about-atelier');
  if (!el) return;
  const images = [
    { src: 'founder/founder-workspace.webp',    size: 'large' },
    { src: 'tailoring/tailoring-cutting.webp',  size: 'small' },
    { src: 'tailoring/tailoring-stitching.webp',size: 'small' },
    { src: 'branding/branding-atelier-sign.webp',size: 'small'},
    { src: 'tailoring/tailoring-finish.webp',   size: 'small' },
  ];
  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">${Lang.t('atelier_eyebrow')}</span>
        <h2 class="section-title">${Lang.t('atelier_title')}</h2>
        <p class="section-subtitle">${Lang.t('atelier_desc')}</p>
        <div class="divider-gold"></div>
      </div>
      <div class="about-atelier__grid">
        ${images.map((img, i) => `
          <div class="about-atelier__item about-atelier__item--${img.size} reveal reveal-delay-${(i % 3) + 1}"
               onclick="openLightbox('${IMG}${img.src}')">
            <img src="${IMG}${img.src}" alt="Atelier ELSMNODY ${i+1}" loading="lazy">
            <div class="about-atelier__overlay">
              <span class="about-atelier__icon">⊕</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ============================================================
   10. RENDER — TESTIMONIALS
   ============================================================ */
function renderTestimonials() {
  const el = document.getElementById('about-testimonials');
  if (!el) return;
  const list = T[Lang.current()].testimonials;
  el.innerHTML = `
    <div class="container" style="position:relative;z-index:1">
      <div class="section-header reveal">
        <span class="eyebrow">${Lang.t('test_eyebrow')}</span>
        <h2 class="section-title">${Lang.t('test_title')}</h2>
        <div class="divider-gold"></div>
      </div>
      <div class="about-test__grid">
        ${list.map((item, i) => `
          <div class="about-test__card reveal reveal-delay-${i+1}">
            <div class="about-test__stars">★★★★★</div>
            <p class="about-test__text">"${item.text}"</p>
            <div class="about-test__author">
              <div class="about-test__avatar">${item.initial}</div>
              <div>
                <div class="about-test__name">${item.name}</div>
                <div class="about-test__role">${item.role}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ============================================================
   11. RENDER — CTA STRIP
   ============================================================ */
function renderCTA() {
  const el = document.getElementById('about-cta');
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="about-cta__inner reveal">
        <div class="about-cta__text">
          <h2 class="about-cta__title">${Lang.t('cta_title')}</h2>
          <p class="about-cta__desc">${Lang.t('cta_desc')}</p>
        </div>
        <div class="about-cta__actions">
          <a href="https://wa.me/201555277205" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display:inline;vertical-align:middle;margin-inline-end:6px">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.123 1.528 5.855L.057 23.926l6.261-1.644A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.369l-.359-.213-3.718.976.992-3.625-.234-.372A9.818 9.818 0 1112 21.818z"/>
            </svg>
            ${Lang.t('cta_wa')}
          </a>
          <a href="contact.html" class="btn btn-primary btn-lg">${Lang.t('cta_book')}</a>
        </div>
      </div>
    </div>
  `;
}

/* ============================================================
   12. RENDER — FOOTER
   ============================================================ */
function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  const links = [
    ['index.html#collections', Lang.t('nav_collections')],
    ['fabrics.html',           Lang.t('nav_fabrics')],
    ['about.html',             Lang.t('nav_about')],
    ['gallery.html',           Lang.t('nav_gallery')],
    ['index.html#contact',     Lang.t('nav_contact')],
  ];
  el.innerHTML = `
    <div class="container">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;
                  gap:var(--space-6);padding-bottom:var(--space-8);border-bottom:var(--divider-light)">
        <img src="assets/logo/logo.svg" alt="ELSMNODY BESPOKE" style="height:44px"
          onerror="this.outerHTML='<span style=\'font-family:var(--font-display);font-size:1rem;color:var(--color-gold);letter-spacing:4px\'>ELSMNODY</span>'">
        <nav style="display:flex;gap:var(--space-6);flex-wrap:wrap">
          ${links.map(([href,label]) => `
            <a href="${href}" style="font-size:var(--text-xs);color:var(--color-text-muted);
               letter-spacing:var(--tracking-wider);text-transform:uppercase;
               transition:color 0.3s" onmouseover="this.style.color='var(--color-gold)'"
               onmouseout="this.style.color='var(--color-text-muted)'">${label}</a>
          `).join('')}
        </nav>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;
                  gap:var(--space-4);padding-top:var(--space-8);
                  font-size:var(--text-xs);color:var(--color-text-muted)">
        <span>${Lang.t('footer_rights')}</span>
        <span>${Lang.t('footer_made')} 🇪🇬</span>
      </div>
    </div>
  `;
}

/* ============================================================
   13. COUNTER ANIMATION
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('.about-stat__value');
  if (!counters.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = +el.dataset.target;
      const dur    = 1800;
      const step   = 16;
      const inc    = target / (dur / step);
      let cur      = 0;

      const timer = setInterval(() => {
        cur += inc;
        if (cur >= target) {
          el.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          el.textContent = Math.floor(cur).toLocaleString();
        }
      }, step);

      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => obs.observe(el));
}

/* ============================================================
   14. SCROLL REVEAL
   ============================================================ */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

/* ============================================================
   15. MASTER RENDER
   ============================================================ */
function renderPage() {
  const lang = Lang.current();
  document.title = `${T[lang].hero_title} | ELSMNODY BESPOKE`;
  renderNavbar();
  renderHero();
  renderIntro();
  renderStats();
  renderPhilosophy();
  renderTimeline();
  renderAtelier();
  renderTestimonials();
  renderCTA();
  renderFooter();
  // Re-init observers after DOM rebuild
  requestAnimationFrame(() => {
    initScrollReveal();
    initCounters();
  });
}

/* ============================================================
   16. UTILITIES
   ============================================================ */
window.openLightbox = function(src) {
  const lb  = document.getElementById('lightbox');
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
window.openMobileMenu  = () => { document.getElementById('mobileMenu')?.classList.add('open'); document.body.style.overflow = 'hidden'; };
window.closeMobileMenu = () => { document.getElementById('mobileMenu')?.classList.remove('open'); document.body.style.overflow = ''; };
window.Lang = Lang;

/* ============================================================
   17. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  Lang.init();

  // Navbar scroll
  const nb = document.querySelector('.navbar');
  window.addEventListener('scroll', () => nb?.classList.toggle('scrolled', window.scrollY > 60), { passive: true });

  // Hamburger
  document.querySelector('.navbar__toggle')?.addEventListener('click', window.openMobileMenu);

  // Lightbox backdrop close
  document.getElementById('lightbox')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) window.closeLightbox();
  });

  // Keyboard close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { window.closeLightbox(); window.closeMobileMenu(); }
  });

  // Smooth scroll
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
