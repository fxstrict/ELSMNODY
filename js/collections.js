/* ============================================================
   ELSMNODY BESPOKE — Collections JavaScript
   Phase 3: Collections Pages
   Bilingual: Arabic (RTL) Primary | English (LTR) Secondary
   ============================================================ */

'use strict';

/* ============================================================
   1. IMAGE BASE
   ============================================================ */
/* هذا الملف مشترك بين collections.html (على مستوى الجذر) وصفحات
   collections/*.html (على بعد مستوى واحد)، لذلك لازم نحدد المسار
   النسبي الصحيح ديناميكياً بدل تثبيته على '../' دايماً. */
const ON_DETAIL_PAGE = /\/collections\//.test(window.location.pathname);
const DEPTH = ON_DETAIL_PAGE ? '../' : '';
const IMG = DEPTH + 'assets/images/';

/* ============================================================
   2. COLLECTION DATA — Each collection fully defined
   ============================================================ */
const COLLECTIONS_DATA = {
  executive: {
    ar: {
      eyebrow:     'مجموعة التنفيذي',
      hero_title:  'حضور يليق بالقيادة',
      hero_sub:    'بدلات مصممة للقائد الذي يؤمن بأن المظهر جزء من رسالته.',
      desc_title:  'الأناقة التنفيذية',
      desc:        'مجموعة التنفيذي تُجسّد التوازن المثالي بين الاحترافية والأناقة. مصممة خصيصاً لرجل الأعمال الذي يعيش في قاعات الاجتماعات والمؤتمرات الدولية، حيث تتحدث البدلة قبل أن يتكلم صاحبها.',
      features: [
        { icon: '🧵', title: 'قماش صوف إيطالي فاخر', desc: 'أجود أقمشة Ermenegildo Zegna وLoro Piana للتنفيذيين.' },
        { icon: '✂️', title: 'قصّة كلاسيكية محكمة', desc: 'قصة إيطالية بكتفين محددة وخصر منسوب يعكس الثقة.' },
        { icon: '🎨', title: 'ألوان اللون الرمادي والكحلي', desc: 'الرمادي الفحمي والكحلي الغامق والأسود — ألوان القيادة.' },
        { icon: '⏱',  title: 'تسليم في 3 أسابيع',  desc: 'مع إمكانية التسليم السريع خلال أسبوعين عند الطلب.' },
      ],
      gallery_title: 'أعمال من المجموعة التنفيذية',
      specs_title:   'مواصفات المجموعة',
      specs: [
        { label: 'الأقمشة',     value: 'صوف إيطالي 100% Super 130s-150s' },
        { label: 'البطانة',     value: 'قماش Bemberg ياباني أو حرير طبيعي' },
        { label: 'الأزرار',     value: 'قرن طبيعي أو بلاستيك فاخر' },
        { label: 'الغرز',       value: 'أكثر من 20,000 غرزة يدوية' },
        { label: 'وقت الإنتاج', value: '3 أسابيع (يمكن التسريع)' },
        { label: 'التعديلات',   value: 'مجانية مدى الحياة' },
      ],
      cta_title: 'احجز استشارتك المجانية',
      cta_desc:  'تحدث مع مصممنا لاختيار القماش والقصّة المناسبة لك.',
    },
    en: {
      eyebrow:     'Executive Collection',
      hero_title:  'A Presence Worthy of Leadership',
      hero_sub:    'Suits designed for the leader who believes appearance is part of his message.',
      desc_title:  'Executive Elegance',
      desc:        'The Executive Collection embodies the perfect balance between professionalism and elegance. Designed specifically for the business leader who lives in boardrooms and international conferences, where the suit speaks before its wearer does.',
      features: [
        { icon: '🧵', title: 'Luxury Italian Wool',       desc: 'The finest Ermenegildo Zegna and Loro Piana fabrics for executives.' },
        { icon: '✂️', title: 'Precise Classic Cut',       desc: 'Italian silhouette with defined shoulders and a tapered waist that projects confidence.' },
        { icon: '🎨', title: 'Executive Colour Palette',  desc: 'Charcoal, deep navy, and midnight black — the colours of leadership.' },
        { icon: '⏱',  title: '3-Week Delivery',           desc: 'With the option for express delivery in two weeks upon request.' },
      ],
      gallery_title: 'Works from the Executive Collection',
      specs_title:   'Collection Specifications',
      specs: [
        { label: 'Fabrics',    value: '100% Italian Wool Super 130s–150s' },
        { label: 'Lining',     value: 'Japanese Bemberg or Natural Silk' },
        { label: 'Buttons',    value: 'Natural Horn or Luxury Resin' },
        { label: 'Stitching',  value: 'Over 20,000 hand stitches' },
        { label: 'Production', value: '3 weeks (express available)' },
        { label: 'Alterations',value: 'Free for life' },
      ],
      cta_title: 'Book Your Free Consultation',
      cta_desc:  'Speak with our designer to choose the perfect fabric and cut for you.',
    },
    images: {
      hero:    'hero/hero-main.webp',
      gallery: [
        'collections/collection-executive.webp',
        'lifestyle/lifestyle-business.webp',
        'fabrics/fabric-italian-wool.webp',
        'tailoring/tailoring-fitting.webp',
        'lifestyle/lifestyle-detail.webp',
        'tailoring/tailoring-finish.webp',
      ],
    },
    accent: '#1A2744',
    label_en: 'Executive',
    label_ar: 'التنفيذي',
  },

  wedding: {
    ar: {
      eyebrow:     'مجموعة الأفراح',
      hero_title:  'ليكن يومك الأجمل لا يُنسى',
      hero_sub:    'بدلة العريس المثالية — تصنع من أجل لحظة واحدة، وتبقى في الذاكرة إلى الأبد.',
      desc_title:  'أناقة العرسان',
      desc:        'يوم زفافك يستحق بدلة استثنائية. مجموعة الأفراح تجمع بين الفخامة والرومانسية في تصميم يُبهر الحاضرين ويجعلك مركز الأنظار. كل خيطة تُحكى قصة يوم لا يُنسى.',
      features: [
        { icon: '🤍', title: 'أقمشة ناعمة الملمس',    desc: 'قماش كريب صوف خفيف الوزن أو ساتان للحفلات المسائية.' },
        { icon: '✨', title: 'تطريز وتفاصيل راقية',   desc: 'خيوط حريرية وتفاصيل مزخرفة يدوياً عند الطلب.' },
        { icon: '🎨', title: 'ألوان العرس',            desc: 'أبيض مكسر، كريمي، رمادي فاتح، كحلي فاخر، ولون البيج.' },
        { icon: '📏', title: '28 قياساً دقيقاً',       desc: 'قياسات إضافية تضمن الراحة التامة طوال يوم الفرح.' },
      ],
      gallery_title: 'لحظات لا تُنسى من مجموعة الأفراح',
      specs_title:   'مواصفات المجموعة',
      specs: [
        { label: 'الأقمشة',     value: 'كريب صوف أو جاكار حرير Super 120s' },
        { label: 'البطانة',     value: 'حرير طبيعي أو Bemberg ياباني' },
        { label: 'الأزرار',     value: 'صدف طبيعي أو كريستال' },
        { label: 'الغرز',       value: 'أكثر من 25,000 غرزة يدوية' },
        { label: 'وقت الإنتاج', value: '4 أسابيع (احجز مبكراً)' },
        { label: 'الخدمة',      value: 'جلسة تجربة يوم الفرح مجاناً' },
      ],
      cta_title: 'احجز موعدك قبل يومك الكبير',
      cta_desc:  'ننصح بالحجز قبل الزفاف بـ 8 أسابيع على الأقل لضمان الوقت الكافي.',
    },
    en: {
      eyebrow:     'Wedding Collection',
      hero_title:  'Make Your Most Beautiful Day Unforgettable',
      hero_sub:    'The perfect groom\'s suit — crafted for one moment, remembered forever.',
      desc_title:  'Bridal Elegance',
      desc:        'Your wedding day deserves an exceptional suit. The Wedding Collection blends luxury and romance in a design that captivates all present and makes you the centre of attention. Every stitch tells the story of an unforgettable day.',
      features: [
        { icon: '🤍', title: 'Soft-Touch Fabrics',      desc: 'Lightweight wool crêpe or evening satin for formal celebrations.' },
        { icon: '✨', title: 'Refined Details',          desc: 'Silk threads and hand-embroidered details available on request.' },
        { icon: '🎨', title: 'Wedding Colour Palette',   desc: 'Off-white, ivory, soft grey, deep navy, and champagne.' },
        { icon: '📏', title: '28 Precise Measurements', desc: 'Additional measurements to ensure complete comfort throughout the day.' },
      ],
      gallery_title: 'Unforgettable Moments from the Wedding Collection',
      specs_title:   'Collection Specifications',
      specs: [
        { label: 'Fabrics',    value: 'Wool Crêpe or Silk Jacquard Super 120s' },
        { label: 'Lining',     value: 'Natural Silk or Japanese Bemberg' },
        { label: 'Buttons',    value: 'Natural Mother-of-Pearl or Crystal' },
        { label: 'Stitching',  value: 'Over 25,000 hand stitches' },
        { label: 'Production', value: '4 weeks (book early)' },
        { label: 'Service',    value: 'Free wedding-day fitting session' },
      ],
      cta_title: 'Book Before Your Big Day',
      cta_desc:  'We recommend booking at least 8 weeks before the wedding to allow sufficient time.',
    },
    images: {
      hero:    'hero/hero-atelier.webp',
      gallery: [
        'collections/collection-wedding.webp',
        'lifestyle/lifestyle-event.webp',
        'fabrics/fabric-cashmere.webp',
        'tailoring/tailoring-stitching.webp',
        'branding/branding-packaging.webp',
        'lifestyle/lifestyle-redcarpet.webp',
      ],
    },
    accent: '#6B4C2A',
    label_en: 'Wedding',
    label_ar: 'الأفراح',
  },

  judicial: {
    ar: {
      eyebrow:     'المجموعة القضائية',
      hero_title:  'الهيبة التي تليق بالعدل',
      hero_sub:    'بدلات مصممة للقاضي والمحامي والمستشار — حيث الاحترام يُقرأ من المظهر.',
      desc_title:  'احترافية بلا تنازل',
      desc:        'المجموعة القضائية هي الأكثر حصرية في بيت إلسمنودي. مصممة بإتقان لأصحاب الرداء القانوني، تجمع بين الرسمية الصارمة والأناقة الهادئة التي تعكس مكانة أصحابها داخل قاعات المحاكم وخارجها.',
      features: [
        { icon: '⚖️', title: 'رسمية صارمة',           desc: 'تصميم محكم يُعبّر عن الهيبة والمكانة القانونية الرفيعة.' },
        { icon: '🖤', title: 'أقمشة داكنة فاخرة',     desc: 'أسود عميق وكحلي داكن وأرجواني قاتم — ألوان العدالة.' },
        { icon: '🧵', title: 'خياطة يدوية كاملة',     desc: 'كل بدلة تُنجز يدوياً من البداية للنهاية بإشراف مباشر من المصمم.' },
        { icon: '🏛️', title: 'تفصيل للبروتوكول',    desc: 'مراعاة متطلبات الزي الرسمي القضائي والبروتوكول المعتمد.' },
      ],
      gallery_title: 'من المجموعة القضائية',
      specs_title:   'مواصفات المجموعة',
      specs: [
        { label: 'الأقمشة',     value: 'صوف إنجليزي Worsted 100% أو فرنسي' },
        { label: 'البطانة',     value: 'حرير طبيعي — الأسود أو الكحلي الداكن' },
        { label: 'الأزرار',     value: 'قرن طبيعي داكن أو معدن أسود مصقول' },
        { label: 'القصّة',      value: 'إنجليزية كلاسيكية أو بدلة صدرية مزدوجة' },
        { label: 'وقت الإنتاج', value: '3–4 أسابيع' },
        { label: 'الضمان',      value: 'ضمان مدى الحياة على الخياطة' },
      ],
      cta_title: 'فصّل بدلتك القضائية',
      cta_desc:  'نخصص وقتاً كافياً لكل عميل لضمان أن البدلة تعكس مكانته القانونية.',
    },
    en: {
      eyebrow:     'Judicial Collection',
      hero_title:  'The Gravitas Justice Deserves',
      hero_sub:    'Suits designed for judges, lawyers and counsellors — where respect is read from appearance.',
      desc_title:  'Professionalism Without Compromise',
      desc:        'The Judicial Collection is the most exclusive line in the ELSMNODY house. Crafted with mastery for those who wear the legal mantle, it unites strict formality with quiet elegance that reflects the standing of its wearers — inside the courtroom and beyond.',
      features: [
        { icon: '⚖️', title: 'Strict Formality',         desc: 'A precise design that conveys authority and high legal standing.' },
        { icon: '🖤', title: 'Luxury Dark Fabrics',       desc: 'Deep black, dark navy, and dark burgundy — the colours of justice.' },
        { icon: '🧵', title: 'Full Hand Tailoring',       desc: 'Every suit is completed by hand from start to finish under the designer\'s direct supervision.' },
        { icon: '🏛️', title: 'Protocol Tailoring',       desc: 'Full compliance with formal judicial dress requirements and approved protocol.' },
      ],
      gallery_title: 'From the Judicial Collection',
      specs_title:   'Collection Specifications',
      specs: [
        { label: 'Fabrics',    value: '100% English Worsted or French Wool' },
        { label: 'Lining',     value: 'Natural Silk — black or dark navy' },
        { label: 'Buttons',    value: 'Dark natural horn or polished black metal' },
        { label: 'Cut',        value: 'Classic English or Double-Breasted' },
        { label: 'Production', value: '3–4 weeks' },
        { label: 'Guarantee',  value: 'Lifetime tailoring guarantee' },
      ],
      cta_title: 'Commission Your Judicial Suit',
      cta_desc:  'We dedicate ample time to each client to ensure the suit reflects their legal standing.',
    },
    images: {
      hero:    'hero/hero-dark.webp',
      gallery: [
        'collections/collection-judicial.webp',
        'fabrics/fabric-english-wool.webp',
        'tailoring/tailoring-cutting.webp',
        'lifestyle/lifestyle-business.webp',
        'tailoring/tailoring-measurement.webp',
        'branding/branding-label.webp',
      ],
    },
    accent: '#8B1A1A',
    label_en: 'Judicial',
    label_ar: 'القضائي',
  },

  'black-label': {
    ar: {
      eyebrow:     'Black Label',
      hero_title:  'أعلى مستويات الخياطة',
      hero_sub:    'مجموعة محدودة الإصدار لمن يرفضون أي شيء أقل من الكمال.',
      desc_title:  'ما وراء الفخامة',
      desc:        'Black Label هي التتويج النهائي لحرفة إلسمنودي. إصدارات محدودة، أقمشة نادرة بالغة الثمن، وخياطة يدوية بالكامل تستغرق أسابيع من العمل المتواصل. ليست مجرد بدلة — إنها تحفة فنية ترتديها.',
      features: [
        { icon: '♦️', title: 'أقمشة نادرة',            desc: 'Vicuña أو Kiton K-Gold أو Loro Piana Tasmanian — أغلى الأقمشة في العالم.' },
        { icon: '🤲', title: 'خياطة يدوية 100%',        desc: 'كل غرزة بيد حرفي واحد، يُشرف عليه المصمم شخصياً.' },
        { icon: '📦', title: 'تغليف استثنائي',          desc: 'صندوق مخمل مُخصص مع شهادة أصالة وبطاقة مُوقَّعة من المصمم.' },
        { icon: '🔒', title: 'إصدار محدود',             desc: 'أقل من 12 بدلة سنوياً — كل واحدة فريدة ومُرقَّمة.' },
      ],
      gallery_title: 'من مجموعة Black Label',
      specs_title:   'مواصفات الإصدار المحدود',
      specs: [
        { label: 'الأقمشة',     value: 'Vicuña / Loro Piana 15 Milmil / Kiton' },
        { label: 'البطانة',     value: 'حرير طبيعي أبيض مُطرَّز بالاسم' },
        { label: 'الأزرار',     value: 'صدف نادر أو ذهب 18 قيراطاً' },
        { label: 'الغرز',       value: '+35,000 غرزة يدوية' },
        { label: 'وقت الإنتاج', value: '6–8 أسابيع' },
        { label: 'الشهادة',     value: 'شهادة أصالة مُوقَّعة + رقم تسلسلي' },
      ],
      cta_title: 'تواصل لمعرفة التفاصيل',
      cta_desc:  'مجموعة Black Label تتطلب استشارة خاصة. تواصل معنا لمناقشة التفاصيل الحصرية.',
    },
    en: {
      eyebrow:     'Black Label',
      hero_title:  'The Pinnacle of Tailoring',
      hero_sub:    'A limited-edition collection for those who refuse anything less than perfection.',
      desc_title:  'Beyond Luxury',
      desc:        'Black Label is the ultimate culmination of ELSMNODY craftsmanship. Limited editions, extraordinarily rare and precious fabrics, and entirely hand-tailored over weeks of continuous work. This is not merely a suit — it is a wearable work of art.',
      features: [
        { icon: '♦️', title: 'Rare Fabrics',            desc: 'Vicuña, Kiton K-Gold, or Loro Piana Tasmanian — the world\'s most precious cloths.' },
        { icon: '🤲', title: '100% Hand Tailoring',     desc: 'Every stitch by a single master craftsman, personally supervised by the designer.' },
        { icon: '📦', title: 'Exceptional Presentation',desc: 'Custom velvet box with a certificate of authenticity and a designer-signed card.' },
        { icon: '🔒', title: 'Limited Edition',         desc: 'Fewer than 12 suits per year — each unique and individually numbered.' },
      ],
      gallery_title: 'From the Black Label Collection',
      specs_title:   'Limited Edition Specifications',
      specs: [
        { label: 'Fabrics',    value: 'Vicuña / Loro Piana 15 Milmil / Kiton' },
        { label: 'Lining',     value: 'Natural white silk embroidered with owner\'s name' },
        { label: 'Buttons',    value: 'Rare shell or 18-carat gold' },
        { label: 'Stitching',  value: '+35,000 hand stitches' },
        { label: 'Production', value: '6–8 weeks' },
        { label: 'Certificate',value: 'Signed certificate of authenticity + serial number' },
      ],
      cta_title: 'Contact for Exclusive Details',
      cta_desc:  'The Black Label collection requires a private consultation. Contact us to discuss exclusive details.',
    },
    images: {
      hero:    'hero/hero-dark.webp',
      gallery: [
        'collections/collection-black-label.webp',
        'fabrics/fabric-cashmere.webp',
        'branding/branding-card.webp',
        'tailoring/tailoring-stitching.webp',
        'branding/branding-packaging.webp',
        'branding/branding-atelier-sign.webp',
      ],
    },
    accent: '#8B8000',
    label_en: 'Black Label',
    label_ar: 'بلاك لايبل',
  },
};

/* ============================================================
   3. SHARED TRANSLATIONS (Navbar, Footer, Common UI)
   ============================================================ */
const T = {
  ar: {
    nav_collections: 'المجموعات', nav_tailoring: 'رحلة الخياطة',
    nav_fabrics: 'الأقمشة', nav_about: 'عن المصمم',
    nav_gallery: 'المعرض', nav_contact: 'التواصل',
    nav_book: 'احجز موعدك', nav_lang: 'EN',
    back_home: '→ العودة للرئيسية',
    all_collections: 'جميع المجموعات',
    view_gallery: 'عرض المعرض',
    book_now: 'احجز موعدك الآن',
    whatsapp_cta: 'تواصل عبر واتساب',
    phone_cta: 'اتصل بنا',
    spec_label: 'المواصفات',
    other_collections: 'مجموعات أخرى',
    footer_rights: '© 2024 إلسمنودي بيسبوك. جميع الحقوق محفوظة.',
    footer_made: 'صُنع بشغف في مصر',
  },
  en: {
    nav_collections: 'Collections', nav_tailoring: 'Tailoring',
    nav_fabrics: 'Fabrics', nav_about: 'About',
    nav_gallery: 'Gallery', nav_contact: 'Contact',
    nav_book: 'Book Appointment', nav_lang: 'ع',
    back_home: '← Back to Home',
    all_collections: 'All Collections',
    view_gallery: 'View Gallery',
    book_now: 'Book Your Appointment',
    whatsapp_cta: 'Contact via WhatsApp',
    phone_cta: 'Call Us',
    spec_label: 'Specifications',
    other_collections: 'Other Collections',
    footer_rights: '© 2024 ELSMNODY BESPOKE. All rights reserved.',
    footer_made: 'Crafted with passion in Egypt',
  },
};

/* ============================================================
   4. LANGUAGE MANAGER
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
   5. DETECT CURRENT COLLECTION FROM URL
   ============================================================ */
function detectCollection() {
  const path = window.location.pathname;
  const file = path.split('/').pop().replace('.html', '');
  return COLLECTIONS_DATA[file] ? file : 'executive';
}

/* ============================================================
   6. RENDER — Navbar
   ============================================================ */
function renderNavbar() {
  const nav = document.querySelector('.navbar__inner');
  if (!nav) return;
  document.querySelector('.navbar__links')?.remove();
  document.querySelector('.navbar__mobile')?.remove();

  const links = [
    [DEPTH + 'index.html#collections', Lang.t('nav_collections')],
    [DEPTH + 'index.html#journey',     Lang.t('nav_tailoring')],
    [DEPTH + 'fabrics.html',           Lang.t('nav_fabrics')],
    [DEPTH + 'about.html',             Lang.t('nav_about')],
    [DEPTH + 'gallery.html',           Lang.t('nav_gallery')],
    [DEPTH + 'index.html#contact',     Lang.t('nav_contact')],
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
      <button class="btn btn-secondary btn-sm" onclick="Lang.toggle()">${Lang.t('nav_lang')}</button>
      <a href="${DEPTH}contact.html" class="btn btn-primary btn-sm">${Lang.t('nav_book')}</a>
    `;
    nav.insertBefore(ul, cta);
  }

  // Mobile menu
  const mob = document.createElement('div');
  mob.className = 'navbar__mobile';
  mob.id = 'mobileMenu';
  mob.innerHTML = `
    <button class="navbar__mobile-close" onclick="closeMobileMenu()">✕</button>
    ${links.map(([h, l]) => `<a href="${h}" onclick="closeMobileMenu()">${l}</a>`).join('')}
    <a href="${DEPTH}contact.html" class="btn btn-luxury" onclick="closeMobileMenu()">${Lang.t('nav_book')}</a>
    <button onclick="Lang.toggle();closeMobileMenu();" class="btn btn-ghost btn-sm" style="margin-top:8px">${Lang.t('nav_lang')}</button>
  `;
  document.body.appendChild(mob);
}

/* ============================================================
   7. RENDER — Hero (Short)
   ============================================================ */
function renderHero(cKey, cData, lang) {
  const el = document.getElementById('coll-hero');
  if (!el) return;
  const d = cData[lang];
  el.style.backgroundImage = `url('${IMG}${cData.images.hero}')`;
  el.innerHTML = `
    <div class="coll-hero__overlay" style="--accent:${cData.accent}"></div>
    <div class="coll-hero__content">
      <a href="../index.html" class="coll-hero__back">${Lang.t('back_home')}</a>
      <span class="eyebrow" style="color:var(--color-gold)">${d.eyebrow}</span>
      <h1 class="coll-hero__title">${d.hero_title}</h1>
      <p class="coll-hero__sub">${d.hero_sub}</p>
    </div>
    <div class="coll-hero__scroll">
      <div class="coll-hero__scroll-line"></div>
    </div>
  `;
}

/* ============================================================
   8. RENDER — Description + Features
   ============================================================ */
function renderDesc(cKey, cData, lang) {
  const el = document.getElementById('coll-desc');
  if (!el) return;
  const d = cData[lang];
  el.innerHTML = `
    <div class="container">
      <div class="coll-desc__inner">
        <div class="coll-desc__text reveal">
          <span class="eyebrow">${d.eyebrow}</span>
          <h2 class="coll-desc__title">${d.desc_title}</h2>
          <div class="divider-gold-left"></div>
          <p class="coll-desc__body">${d.desc}</p>
          <div style="margin-top:var(--space-8);display:flex;gap:var(--space-4);flex-wrap:wrap">
            <a href="../index.html#contact" class="btn btn-primary btn-lg">${Lang.t('book_now')}</a>
            <a href="https://wa.me/201555277205" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display:inline;vertical-align:middle;margin-inline-end:6px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.123 1.528 5.855L.057 23.926l6.261-1.644A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.369l-.359-.213-3.718.976.992-3.625-.234-.372A9.818 9.818 0 1112 21.818z"/></svg>
              ${Lang.t('whatsapp_cta')}
            </a>
          </div>
        </div>
        <div class="coll-desc__features">
          ${d.features.map((f, i) => `
            <div class="coll-feature reveal reveal-delay-${i+1}">
              <span class="coll-feature__icon">${f.icon}</span>
              <div>
                <h3 class="coll-feature__title">${f.title}</h3>
                <p class="coll-feature__desc">${f.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ============================================================
   9. RENDER — Gallery Grid
   ============================================================ */
function renderGallery(cKey, cData, lang) {
  const el = document.getElementById('coll-gallery');
  if (!el) return;
  const d = cData[lang];
  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">${Lang.t('view_gallery')}</span>
        <h2 class="section-title">${d.gallery_title}</h2>
        <div class="divider-gold"></div>
      </div>
      <div class="coll-gallery__grid">
        ${cData.images.gallery.map((src, i) => `
          <div class="coll-gallery__item reveal reveal-delay-${(i % 4) + 1}" onclick="openLightbox('${IMG}${src}')">
            <img src="${IMG}${src}" alt="${d.gallery_title} ${i+1}" loading="lazy">
            <div class="coll-gallery__overlay">
              <span class="coll-gallery__icon">⊕</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="text-align:center;margin-top:var(--space-10)">
        <a href="../gallery.html" class="btn btn-secondary btn-lg reveal">${Lang.t('view_gallery')}</a>
      </div>
    </div>
  `;
}

/* ============================================================
   10. RENDER — Specs Table
   ============================================================ */
function renderSpecs(cKey, cData, lang) {
  const el = document.getElementById('coll-specs');
  if (!el) return;
  const d = cData[lang];
  el.innerHTML = `
    <div class="container">
      <div class="coll-specs__inner">
        <div class="reveal">
          <span class="eyebrow">${Lang.t('spec_label')}</span>
          <h2 class="coll-specs__title">${d.specs_title}</h2>
          <div class="divider-gold-left"></div>
          <table class="coll-specs__table">
            <tbody>
              ${d.specs.map(s => `
                <tr>
                  <td class="coll-specs__label">${s.label}</td>
                  <td class="coll-specs__value">${s.value}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <div class="coll-specs__cta reveal reveal-delay-2" style="--accent:${cData.accent}">
          <h3 class="coll-specs__cta-title">${d.cta_title}</h3>
          <p class="coll-specs__cta-desc">${d.cta_desc}</p>
          <div style="display:flex;flex-direction:column;gap:var(--space-3);margin-top:var(--space-8)">
            <a href="https://wa.me/201555277205" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display:inline;vertical-align:middle;margin-inline-end:6px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.123 1.528 5.855L.057 23.926l6.261-1.644A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.369l-.359-.213-3.718.976.992-3.625-.234-.372A9.818 9.818 0 1112 21.818z"/></svg>
              ${Lang.t('whatsapp_cta')}
            </a>
            <a href="tel:+201555277205" class="btn btn-secondary btn-lg">${Lang.t('phone_cta')}</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ============================================================
   11. RENDER — Other Collections Strip
   ============================================================ */
function renderOtherCollections(currentKey, lang) {
  const el = document.getElementById('coll-others');
  if (!el) return;
  const others = Object.entries(COLLECTIONS_DATA)
    .filter(([k]) => k !== currentKey)
    .slice(0, 3);

  el.innerHTML = `
    <div class="container">
      <div class="section-header reveal">
        <span class="eyebrow">${Lang.t('all_collections')}</span>
        <h2 class="section-title">${Lang.t('other_collections')}</h2>
        <div class="divider-gold"></div>
      </div>
      <div class="coll-others__grid">
        ${others.map(([k, c], i) => `
          <a href="${k}.html" class="coll-others__card reveal reveal-delay-${i+1}">
            <div class="coll-others__img-wrap">
              <img src="${IMG}${c.images.gallery[0]}" alt="${c[lang].eyebrow}" loading="lazy">
              <div class="coll-others__overlay" style="--accent:${c.accent}20"></div>
            </div>
            <div class="coll-others__label">
              <span class="eyebrow" style="font-size:10px">${Lang.t('all_collections')}</span>
              <h3 class="coll-others__title">${c[lang].eyebrow}</h3>
              <span class="coll-others__arrow">${lang === 'ar' ? '←' : '→'}</span>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

/* ============================================================
   12. RENDER — Footer
   ============================================================ */
function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-6);padding-bottom:var(--space-8);border-bottom:var(--divider-light)">
        <img src="../assets/logo/logo.svg" alt="ELSMNODY BESPOKE" style="height:44px" onerror="this.outerHTML='<span style=\'font-family:var(--font-display);font-size:1rem;color:var(--color-gold);letter-spacing:4px\'>ELSMNODY</span>'">
        <nav style="display:flex;gap:var(--space-6);flex-wrap:wrap">
          <a href="../index.html#collections" style="font-size:var(--text-xs);color:var(--color-text-muted);letter-spacing:var(--tracking-wider);text-transform:uppercase;transition:color 0.3s" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='var(--color-text-muted)'">${Lang.t('nav_collections')}</a>
          <a href="../fabrics.html"            style="font-size:var(--text-xs);color:var(--color-text-muted);letter-spacing:var(--tracking-wider);text-transform:uppercase;transition:color 0.3s" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='var(--color-text-muted)'">${Lang.t('nav_fabrics')}</a>
          <a href="../about.html"              style="font-size:var(--text-xs);color:var(--color-text-muted);letter-spacing:var(--tracking-wider);text-transform:uppercase;transition:color 0.3s" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='var(--color-text-muted)'">${Lang.t('nav_about')}</a>
          <a href="../index.html#contact"      style="font-size:var(--text-xs);color:var(--color-text-muted);letter-spacing:var(--tracking-wider);text-transform:uppercase;transition:color 0.3s" onmouseover="this.style.color='var(--color-gold)'" onmouseout="this.style.color='var(--color-text-muted)'">${Lang.t('nav_contact')}</a>
        </nav>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-4);padding-top:var(--space-8);font-size:var(--text-xs);color:var(--color-text-muted)">
        <span>${Lang.t('footer_rights')}</span>
        <span>${Lang.t('footer_made')} 🇪🇬</span>
      </div>
    </div>
  `;
}

/* ============================================================
   12b. RENDER — Collections Index Grid (collections.html)
   كل الـ 6 مجموعات، بما فيها blazer و tuxedo اللي مالهاش بيانات
   في COLLECTIONS_DATA لأن صفحاتهم مبنية بشكل ثابت (static).
   ============================================================ */
const INDEX_CARDS = [
  { slug: 'executive',    img: 'collection-executive.webp',   ar: 'مجموعة التنفيذي',    en: 'Executive Collection' },
  { slug: 'wedding',      img: 'collection-wedding.webp',     ar: 'مجموعة الأفراح',     en: 'Wedding Collection' },
  { slug: 'judicial',     img: 'collection-judicial.webp',    ar: 'المجموعة القضائية',  en: 'Judicial Collection' },
  { slug: 'black-label',  img: 'collection-black-label.webp', ar: 'Black Label',        en: 'Black Label' },
  { slug: 'tuxedo',       img: 'collection-tuxedo.webp',      ar: 'السموكن الفاخر',     en: 'Tuxedo Collection' },
  { slug: 'blazer',       img: 'collection-blazer.webp',      ar: 'البليزر الكلاسيك',   en: 'Blazer Collection' },
];

function renderIndexGrid(lang) {
  const el = document.getElementById('ci-grid');
  if (!el) return;
  el.innerHTML = INDEX_CARDS.map(c => `
    <a href="collections/${c.slug}.html" class="collections-index-grid__card reveal">
      <div class="collections-index-grid__img-wrap">
        <img src="${IMG}collections/${c.img}" alt="${lang === 'ar' ? c.ar : c.en}" loading="lazy">
      </div>
      <h3 class="collections-index-grid__title">${lang === 'ar' ? c.ar : c.en}</h3>
    </a>
  `).join('');
}

/* ============================================================
   13. MASTER RENDER
   ============================================================ */
function renderPage() {
  const lang = Lang.current();

  // صفحة قائمة المجموعات (collections.html) — شبكة كل المجموعات
  if (document.getElementById('ci-grid')) {
    renderNavbar();
    renderIndexGrid(lang);
    renderFooter();
    initScrollReveal();
    return;
  }

  // صفحة تفاصيل مجموعة واحدة (collections/*.html)
  const cKey  = detectCollection();
  const cData = COLLECTIONS_DATA[cKey];
  if (!cData) { renderNavbar(); renderFooter(); return; }

  // Page title + meta
  document.title = `${cData[lang].eyebrow} | ELSMNODY BESPOKE`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = cData[lang].desc.slice(0, 155);

  renderNavbar();
  renderHero(cKey, cData, lang);
  renderDesc(cKey, cData, lang);
  renderGallery(cKey, cData, lang);
  renderSpecs(cKey, cData, lang);
  renderOtherCollections(cKey, lang);
  renderFooter();
  initScrollReveal();
}

/* ============================================================
   14. UTILITIES
   ============================================================ */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function initNavbarScroll() {
  const nb = document.querySelector('.navbar');
  if (!nb) return;
  window.addEventListener('scroll', () => nb.classList.toggle('scrolled', window.scrollY > 60), { passive: true });
}

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
   15. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  Lang.init();
  initNavbarScroll();

  document.querySelector('.navbar__toggle')?.addEventListener('click', window.openMobileMenu);
  document.getElementById('lightbox')?.addEventListener('click', e => { if (e.target === e.currentTarget) window.closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { window.closeLightbox(); window.closeMobileMenu(); } });
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
