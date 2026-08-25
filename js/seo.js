/**
 * js/seo.js — ELSMNODY BESPOKE SEO System
 * Phase 10 — Dynamic Meta Tags, Open Graph, Twitter Card, Schema Markup, Canonical URLs
 * Architecture: Auto-detects current page and injects all SEO tags dynamically
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     BRAND CONFIG
  ───────────────────────────────────────────── */
  const BRAND = {
    name:         'ELSMNODY BESPOKE',
    nameAr:       'إلسمنودي بيسبوك',
    tagline:      'Crafting Presence. Tailoring Influence.',
    taglineAr:    'حاضر بقوة. مفصّل بتأثير.',
    founder:      'Mohamed El-Smnody',
    founderAr:    'محمد السمنودي',
    phone:        '+201555277205',
    whatsapp:     '201555277205',
    email:        'info@elsmnody.com',
    siteUrl:      'https://fxstrict.github.io/ELSMNODY', // ⚠️ حدّث هذا برابط الدومين الفعلي عند النشر
    twitterHandle:'@ElsmnodyBespoke',
    locale_ar:    'ar_EG',
    locale_en:    'en_US',
    address: {
      country:    'Egypt',
      countryAr:  'مصر',
      region:     'Cairo Governorate',
      locality:   'Cairo',
      postalCode: '11511'
    }
  };

  /* ─────────────────────────────────────────────
     PAGE DEFINITIONS — AR + EN SEO DATA
  ───────────────────────────────────────────── */
  const PAGES = {
    'index': {
      ar: {
        title:       'إلسمنودي بيسبوك | بيت الخياطة الرجالية الفاخرة في مصر',
        description: 'إلسمنودي بيسبوك — تجربة التفصيل الرجالي الفاخر في مصر. بدلات على المقاس من أرقى الأقمشة الإيطالية والإنجليزية. للقضاة والمحامين ورجال الأعمال.',
        keywords:    'بدلة على المقاس مصر, خياطة فاخرة, بدلات رجالية, تفصيل بدل, إلسمنودي, بيسبوك, بدل رجال أعمال',
        ogTitle:     'إلسمنودي بيسبوك — Crafting Presence. Tailoring Influence.',
        ogDescription:'بيت الخياطة الرجالية الفاخرة في مصر. بدلات على المقاس للقضاة والمحامين ورجال الأعمال.'
      },
      en: {
        title:       'ELSMNODY BESPOKE | Luxury Bespoke Tailoring in Egypt',
        description: 'ELSMNODY BESPOKE — Egypt\'s premier luxury bespoke tailoring house. Custom suits crafted from the finest Italian & English fabrics for judges, lawyers and executives.',
        keywords:    'bespoke suits Egypt, luxury tailoring Cairo, custom suits, made to measure Egypt, ELSMNODY, menswear Egypt',
        ogTitle:     'ELSMNODY BESPOKE — Crafting Presence. Tailoring Influence.',
        ogDescription:'Egypt\'s premier luxury bespoke tailoring house. Custom suits for judges, lawyers, and executives.'
      },
      image:  'assets/images/hero/hero-main.webp',
      schema: ['LocalBusiness', 'Person']
    },

    'about': {
      ar: {
        title:       'قصة المصمم محمد السمنودي | إلسمنودي بيسبوك',
        description: 'تعرّف على محمد السمنودي، مؤسس إلسمنودي بيسبوك. رحلة من الحرفية المصرية الأصيلة إلى ذروة التفصيل الرجالي الفاخر.',
        keywords:    'محمد السمنودي, إلسمنودي, خياطة فاخرة, مصمم بدل مصر, بيسبوك',
        ogTitle:     'محمد السمنودي — قصة الإتقان والهيبة',
        ogDescription:'رحلة محمد السمنودي من الحرفية الأصيلة إلى ذروة التفصيل الرجالي الفاخر في مصر.'
      },
      en: {
        title:       'About Mohamed El-Smnody | ELSMNODY BESPOKE Founder',
        description: 'Meet Mohamed El-Smnody, founder of ELSMNODY BESPOKE. A journey from authentic Egyptian craftsmanship to the pinnacle of luxury bespoke tailoring.',
        keywords:    'Mohamed El-Smnody, ELSMNODY founder, bespoke tailor Egypt, luxury suit designer Cairo',
        ogTitle:     'Mohamed El-Smnody — A Story of Mastery & Presence',
        ogDescription:'The journey of Mohamed El-Smnody from authentic craftsmanship to the pinnacle of luxury bespoke tailoring in Egypt.'
      },
      image:  'assets/images/founder/founder-portrait.webp',
      schema: ['Person', 'LocalBusiness']
    },

    'collections': {
      ar: {
        title:       'مجموعات البدل | إلسمنودي بيسبوك',
        description: 'اكتشف مجموعات إلسمنودي بيسبوك: Executive للأعمال، Wedding لحفلات الأعراس، Judicial للقضاة والمحامين، وBlack Label — القمة في الفخامة.',
        keywords:    'مجموعات بدل, بدل أعمال, بدل أعراس, بدل قضاة, بلاك لايبل, إلسمنودي',
        ogTitle:     'مجموعات إلسمنودي بيسبوك',
        ogDescription:'Executive, Wedding, Judicial, وBlack Label — كل مجموعة صُنعت لرجل يعرف قيمة حضوره.'
      },
      en: {
        title:       'Collections | ELSMNODY BESPOKE',
        description: 'Discover ELSMNODY BESPOKE collections: Executive Business Suits, Wedding Suits, Judicial Attire for judges & lawyers, and Black Label — the ultimate in luxury.',
        keywords:    'bespoke suit collections, executive suits Egypt, wedding suits Cairo, judicial robes Egypt, black label suits',
        ogTitle:     'ELSMNODY BESPOKE Collections',
        ogDescription:'Executive, Wedding, Judicial & Black Label — each collection crafted for men who understand the power of presence.'
      },
      image:  'assets/images/collections/collection-executive.webp',
      schema: ['Product']
    },

    'collections/executive': {
      ar: {
        title:       'بدل الأعمال | Executive Collection | إلسمنودي بيسبوك',
        description: 'بدلات الأعمال التنفيذية من إلسمنودي بيسبوك. مفصّلة على قياسك من أجود الأقمشة الإيطالية. للمدير التنفيذي الذي يعرف قيمة حضوره.',
        keywords:    'بدلة أعمال على المقاس, بدلة مدير تنفيذي, بدل رجال أعمال مصر, خياطة بدل فاخرة',
        ogTitle:     'Executive Collection — إلسمنودي بيسبوك',
        ogDescription:'بدلات الأعمال التنفيذية. مفصّلة من أجود الأقمشة الإيطالية لرجل الأعمال الذي يقود.'
      },
      en: {
        title:       'Executive Business Suits | ELSMNODY BESPOKE',
        description: 'ELSMNODY BESPOKE Executive Collection. Bespoke business suits crafted from the finest Italian fabrics for the executive who commands presence.',
        keywords:    'executive bespoke suits Egypt, business suits Cairo, custom suits for executives, Italian fabric suits',
        ogTitle:     'Executive Collection — ELSMNODY BESPOKE',
        ogDescription:'Bespoke business suits crafted from the finest Italian fabrics for the executive who commands presence.'
      },
      image:  'assets/images/collections/collection-executive.webp',
      schema: ['Product']
    },

    'collections/wedding': {
      ar: {
        title:       'بدل الأعراس | Wedding Collection | إلسمنودي بيسبوك',
        description: 'بدلة زفافك من إلسمنودي بيسبوك. تصاميم حصرية لعريس مصر والخليج. بدلات زواج مفصّلة على مقاسك بأرقى الأقمشة.',
        keywords:    'بدلة عريس مصر, بدلة زواج على المقاس, بدلة عريس خليجي, خياطة بدلة زفاف فاخرة',
        ogTitle:     'Wedding Collection — إلسمنودي بيسبوك',
        ogDescription:'ليلة عمرك تستحق بدلة من إلسمنودي بيسبوك. تصاميم حصرية مفصّلة على مقاسك.'
      },
      en: {
        title:       'Wedding Suits | ELSMNODY BESPOKE',
        description: 'ELSMNODY BESPOKE Wedding Collection. Exclusive bespoke wedding suits for Egypt & Gulf grooms. Crafted to perfection for your most important day.',
        keywords:    'bespoke wedding suits Egypt, custom groom suits Cairo, luxury wedding attire, wedding suits Gulf',
        ogTitle:     'Wedding Collection — ELSMNODY BESPOKE',
        ogDescription:'Exclusive bespoke wedding suits crafted for Egypt & Gulf grooms. Your most important day deserves perfection.'
      },
      image:  'assets/images/collections/collection-wedding.webp',
      schema: ['Product']
    },

    'collections/judicial': {
      ar: {
        title:       'بدل القضاة والمحامين | Judicial Collection | إلسمنودي بيسبوك',
        description: 'بدلات القضاة والمحامين من إلسمنودي بيسبوك. هيبة وأناقة لرجل القانون. مفصّلة من أجود الأقمشة لتعكس مكانتك.',
        keywords:    'بدلة قاضي مصر, بدلة محامي على المقاس, بدل رجال القانون, خياطة بدل قضائية',
        ogTitle:     'Judicial Collection — إلسمنودي بيسبوك',
        ogDescription:'بدلات القضاة والمحامين. هيبة وأناقة مفصّلة من إلسمنودي بيسبوك لرجل القانون.'
      },
      en: {
        title:       'Judicial Suits for Judges & Lawyers | ELSMNODY BESPOKE',
        description: 'ELSMNODY BESPOKE Judicial Collection. Bespoke suits for judges and lawyers in Egypt. Authority and elegance crafted to reflect your position.',
        keywords:    'judicial suits Egypt, bespoke suits for lawyers, judge attire Cairo, lawyer suits custom Egypt',
        ogTitle:     'Judicial Collection — ELSMNODY BESPOKE',
        ogDescription:'Bespoke suits for judges and lawyers. Authority, elegance and precision — crafted to reflect your position.'
      },
      image:  'assets/images/collections/collection-judicial.webp',
      schema: ['Product']
    },

    'collections/black-label': {
      ar: {
        title:       'بلاك لايبل — القمة في الفخامة | إلسمنودي بيسبوك',
        description: 'Black Label من إلسمنودي بيسبوك — أعلى مستويات الخياطة الفاخرة. أقمشة نادرة كالكاشمير ولوبرو بيانا. لمن لا يقبل إلا الأفضل.',
        keywords:    'بلاك لايبل بدلة فاخرة, أرقى البدل مصر, كاشمير على المقاس, بدلة فاخرة حصرية',
        ogTitle:     'Black Label — القمة في الفخامة | إلسمنودي بيسبوك',
        ogDescription:'Black Label — حيث تلتقي الأقمشة النادرة بالحرفية الفائقة. لمن لا يقبل إلا الأفضل.'
      },
      en: {
        title:       'Black Label — The Pinnacle of Luxury | ELSMNODY BESPOKE',
        description: 'ELSMNODY BESPOKE Black Label — the ultimate expression of bespoke luxury. Rare fabrics including cashmere and Loro Piana. For those who accept nothing but the best.',
        keywords:    'black label suits Egypt, luxury cashmere suit, Loro Piana bespoke Egypt, ultra luxury tailoring Cairo',
        ogTitle:     'Black Label — The Pinnacle of Luxury | ELSMNODY BESPOKE',
        ogDescription:'Rare fabrics. Unmatched craftsmanship. Black Label from ELSMNODY BESPOKE — for those who accept nothing but the finest.'
      },
      image:  'assets/images/collections/collection-black-label.webp',
      schema: ['Product']
    },

    'fabrics': {
      ar: {
        title:       'مجموعة الأقمشة الفاخرة | إلسمنودي بيسبوك',
        description: 'أرقى الأقمشة الإيطالية والإنجليزية في إلسمنودي بيسبوك. كاشمير لوبرو بيانا، صوف إرمينيجيلدو زينيا، وصوف إنجليزي هولاند آند شيري.',
        keywords:    'أقمشة فاخرة مصر, قماش إيطالي للبدل, كاشمير لوبرو بيانا, صوف زينيا, أقمشة بدل',
        ogTitle:     'الأقمشة الفاخرة — إلسمنودي بيسبوك',
        ogDescription:'كاشمير لوبرو بيانا. صوف زينيا. كتان توماس ميسون. اكتشف أرقى أقمشة العالم في إلسمنودي بيسبوك.'
      },
      en: {
        title:       'Luxury Fabric Collection | ELSMNODY BESPOKE',
        description: 'Discover ELSMNODY BESPOKE\'s curated selection of the world\'s finest fabrics. Loro Piana cashmere, Ermenegildo Zegna wool, Holland & Sherry English tweed.',
        keywords:    'luxury suit fabrics Egypt, Loro Piana cashmere Cairo, Zegna wool suits, English wool fabric, Italian wool bespoke',
        ogTitle:     'Luxury Fabrics — ELSMNODY BESPOKE',
        ogDescription:'Loro Piana cashmere. Zegna wool. Thomas Mason linen. Discover the world\'s finest fabrics at ELSMNODY BESPOKE.'
      },
      image:  'assets/images/fabrics/fabric-wall.webp',
      schema: ['Product']
    },

    'gallery': {
      ar: {
        title:       'معرض أعمال إلسمنودي بيسبوك | صور البدل الفاخرة',
        description: 'شاهد أعمال إلسمنودي بيسبوك. معرض صور يضم بدلات الأعمال، بدل الأعراس، بدل القضاة، وصور الأتيليه والحفلات.',
        keywords:    'معرض بدل فاخرة مصر, صور خياطة, بدل على المقاس مصر, أعمال إلسمنودي',
        ogTitle:     'معرض أعمال إلسمنودي بيسبوك',
        ogDescription:'شاهد كيف تتحوّل الأقمشة النادرة والحرفية الفائقة إلى بدلة تعكس هويتك.'
      },
      en: {
        title:       'ELSMNODY BESPOKE Gallery | Luxury Bespoke Suit Portfolio',
        description: 'Browse the ELSMNODY BESPOKE portfolio. Gallery of executive suits, wedding attire, judicial robes, atelier scenes and lifestyle moments.',
        keywords:    'bespoke suit gallery Egypt, luxury suit photos, ELSMNODY portfolio, custom suit images Cairo',
        ogTitle:     'ELSMNODY BESPOKE Gallery',
        ogDescription:'Witness how rare fabrics and masterful craftsmanship become a suit that defines your identity.'
      },
      image:  'assets/images/lifestyle/lifestyle-redcarpet.webp',
      schema: ['ImageGallery']
    },

    'contact': {
      ar: {
        title:       'احجز موعد تفصيل | إلسمنودي بيسبوك',
        description: 'احجز موعد استشارتك المجانية مع إلسمنودي بيسبوك. أدخل مقاساتك، اختر تصميم بدلتك، واحصل على بدلة مفصّلة على قياسك.',
        keywords:    'حجز تفصيل بدلة, موعد خياطة مصر, استشارة مجانية بدلة, إلسمنودي حجز',
        ogTitle:     'احجز موعدك مع إلسمنودي بيسبوك',
        ogDescription:'ابدأ رحلة بدلتك الآن. استشارة مجانية، تصميم حصري، وتسليم حيثما كنت.'
      },
      en: {
        title:       'Book a Bespoke Appointment | ELSMNODY BESPOKE',
        description: 'Book your free consultation with ELSMNODY BESPOKE. Enter your measurements, customize your suit design, and we\'ll craft your perfect bespoke suit.',
        keywords:    'book bespoke suit Egypt, book tailoring appointment Cairo, custom suit consultation Egypt, ELSMNODY booking',
        ogTitle:     'Book Your Bespoke Appointment | ELSMNODY BESPOKE',
        ogDescription:'Begin your bespoke journey. Free consultation, exclusive design, worldwide delivery.'
      },
      image:  'assets/images/tailoring/tailoring-measurement.webp',
      schema: ['LocalBusiness']
    }
  };

  /* ─────────────────────────────────────────────
     DETECT CURRENT PAGE
  ───────────────────────────────────────────── */
  function getPageKey() {
    const path = window.location.pathname;
    const file = path.split('/').filter(Boolean).pop() || 'index';
    const name = file.replace('.html', '');

    // Collections sub-pages
    if (path.includes('/collections/')) {
      const sub = path.split('/collections/')[1].replace('.html', '');
      const key = 'collections/' + sub;
      if (PAGES[key]) return key;
    }

    return PAGES[name] ? name : 'index';
  }

  /* ─────────────────────────────────────────────
     DETECT CURRENT LANGUAGE
  ───────────────────────────────────────────── */
  function getLang() {
    return document.documentElement.lang === 'en' ? 'en' : 'ar';
  }

  /* ─────────────────────────────────────────────
     BUILD ABSOLUTE URL
  ───────────────────────────────────────────── */
  function absUrl(relative) {
    if (!relative) return BRAND.siteUrl + '/assets/images/hero/hero-main.webp';
    if (relative.startsWith('http')) return relative;
    const base = BRAND.siteUrl.replace(/\/$/, '');
    // Handle depth for sub-pages
    return base + '/' + relative;
  }

  function canonicalForPage(pageKey) {
    if (pageKey === 'index') return BRAND.siteUrl + '/';
    return BRAND.siteUrl + '/' + pageKey + '.html';
  }

  /* ─────────────────────────────────────────────
     META TAG HELPERS
  ───────────────────────────────────────────── */
  function setMeta(name, content, useProperty) {
    if (!content) return;
    const attr = useProperty ? 'property' : 'name';
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  function setLink(rel, href) {
    if (!href) return;
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }

  function setScriptLd(id, obj) {
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement('script');
      el.id = id;
      el.type = 'application/ld+json';
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(obj, null, 2);
  }

  /* ─────────────────────────────────────────────
     SCHEMA MARKUP BUILDERS
  ───────────────────────────────────────────── */
  function buildLocalBusiness() {
    return {
      '@context': 'https://schema.org',
      '@type': 'ClothingStore',
      '@id': BRAND.siteUrl + '/#business',
      name: BRAND.name,
      alternateName: BRAND.nameAr,
      description: 'Luxury bespoke tailoring house in Egypt crafting custom suits for judges, lawyers, executives and discerning gentlemen.',
      url: BRAND.siteUrl,
      telephone: BRAND.phone,
      email: BRAND.email,
      image: absUrl('assets/images/hero/hero-main.webp'),
      logo: absUrl('assets/logo/logo.svg'),
      priceRange: '$$$$',
      currenciesAccepted: 'EGP, USD',
      paymentAccepted: 'Cash, Bank Transfer, WhatsApp Booking',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'EG',
        addressRegion: BRAND.address.region,
        addressLocality: BRAND.address.locality
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '30.0444',
        longitude: '31.2357'
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday'], opens: '10:00', closes: '22:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday','Sunday'], opens: '12:00', closes: '20:00' }
      ],
      sameAs: [
        'https://wa.me/' + BRAND.whatsapp,
        'https://www.instagram.com/elsmnody'
      ],
      hasMap: 'https://maps.google.com/?q=Cairo+Egypt',
      founder: {
        '@type': 'Person',
        name: BRAND.founder,
        alternateName: BRAND.founderAr,
        jobTitle: 'Master Bespoke Tailor & Founder'
      }
    };
  }

  function buildPerson() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': BRAND.siteUrl + '/about.html#founder',
      name: BRAND.founder,
      alternateName: BRAND.founderAr,
      jobTitle: 'Master Bespoke Tailor & Founder',
      description: 'Master bespoke tailor and founder of ELSMNODY BESPOKE, Egypt\'s premier luxury tailoring house.',
      url: BRAND.siteUrl + '/about.html',
      image: absUrl('assets/images/founder/founder-portrait.webp'),
      worksFor: {
        '@type': 'ClothingStore',
        name: BRAND.name,
        url: BRAND.siteUrl
      },
      knowsAbout: ['Bespoke Tailoring', 'Luxury Menswear', 'Italian Fabrics', 'Made-to-Measure'],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'EG',
        addressLocality: BRAND.address.locality
      }
    };
  }

  function buildProduct(pageKey, lang) {
    const page = PAGES[pageKey];
    const copy = page[lang];
    const productNames = {
      'collections': lang === 'ar' ? 'مجموعات إلسمنودي بيسبوك' : 'ELSMNODY BESPOKE Collections',
      'collections/executive': lang === 'ar' ? 'بدلة أعمال تنفيذية' : 'Executive Business Suit',
      'collections/wedding': lang === 'ar' ? 'بدلة زفاف' : 'Bespoke Wedding Suit',
      'collections/judicial': lang === 'ar' ? 'بدلة قضائية' : 'Judicial Bespoke Suit',
      'collections/black-label': lang === 'ar' ? 'بدلة بلاك لايبل' : 'Black Label Suit',
      'fabrics': lang === 'ar' ? 'أقمشة فاخرة' : 'Luxury Fabrics',
    };
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: productNames[pageKey] || BRAND.name,
      description: copy.description,
      image: absUrl(page.image),
      brand: {
        '@type': 'Brand',
        name: BRAND.name
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'EGP',
        url: canonicalForPage(pageKey),
        seller: {
          '@type': 'ClothingStore',
          name: BRAND.name
        }
      }
    };
  }

  function buildImageGallery() {
    return {
      '@context': 'https://schema.org',
      '@type': 'ImageGallery',
      name: BRAND.name + ' — Portfolio Gallery',
      description: 'Luxury bespoke suit portfolio by ELSMNODY BESPOKE',
      url: BRAND.siteUrl + '/gallery.html',
      author: {
        '@type': 'Person',
        name: BRAND.founder
      }
    };
  }

  function buildWebSite() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': BRAND.siteUrl + '/#website',
      name: BRAND.name,
      alternateName: BRAND.nameAr,
      url: BRAND.siteUrl,
      inLanguage: ['ar', 'en'],
      potentialAction: {
        '@type': 'ContactAction',
        target: 'https://wa.me/' + BRAND.whatsapp
      }
    };
  }

  /* ─────────────────────────────────────────────
     MAIN INJECT FUNCTION
  ───────────────────────────────────────────── */
  function injectSEO() {
    const pageKey = getPageKey();
    const lang    = getLang();
    const page    = PAGES[pageKey] || PAGES['index'];
    const copy    = page[lang] || page['ar'];
    const imgUrl  = absUrl(page.image);
    const canonical = canonicalForPage(pageKey);
    const locale  = lang === 'en' ? BRAND.locale_en : BRAND.locale_ar;
    const altLang = lang === 'en' ? 'ar' : 'en';

    // ── Title
    document.title = copy.title;

    // ── Basic meta
    setMeta('description', copy.description);
    setMeta('keywords',    copy.keywords);
    setMeta('author',      BRAND.founder);
    setMeta('robots',      'index, follow, max-snippet:-1, max-image-preview:large');
    setMeta('theme-color', '#C9A84C');
    setMeta('language',    lang === 'ar' ? 'Arabic' : 'English');

    // ── Canonical
    setLink('canonical', canonical);

    // ── Alternate hreflang
    setLink('alternate', canonical);
    // inject or update hreflang links
    ['ar','en'].forEach(l => {
      const href = BRAND.siteUrl + '/' + (pageKey === 'index' ? '' : pageKey + '.html');
      let el = document.querySelector(`link[hreflang="${l}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'alternate');
        el.setAttribute('hreflang', l);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    });

    // ── Open Graph
    setMeta('og:type',        'website',              true);
    setMeta('og:site_name',   BRAND.name,             true);
    setMeta('og:title',       copy.ogTitle || copy.title, true);
    setMeta('og:description', copy.ogDescription || copy.description, true);
    setMeta('og:image',       imgUrl,                 true);
    setMeta('og:image:width', '1200',                 true);
    setMeta('og:image:height','630',                  true);
    setMeta('og:image:alt',   BRAND.name,             true);
    setMeta('og:url',         canonical,              true);
    setMeta('og:locale',      locale,                 true);
    setMeta('og:locale:alternate', altLang === 'ar' ? BRAND.locale_ar : BRAND.locale_en, true);

    // ── Twitter Card
    setMeta('twitter:card',        'summary_large_image');
    setMeta('twitter:site',        BRAND.twitterHandle);
    setMeta('twitter:creator',     BRAND.twitterHandle);
    setMeta('twitter:title',       copy.ogTitle || copy.title);
    setMeta('twitter:description', copy.ogDescription || copy.description);
    setMeta('twitter:image',       imgUrl);
    setMeta('twitter:image:alt',   BRAND.name);

    // ── Schema Markup
    const schemas = page.schema || ['LocalBusiness'];
    const schemaObjs = [];

    // Always include WebSite on homepage
    if (pageKey === 'index') {
      schemaObjs.push(buildWebSite());
    }

    schemas.forEach(type => {
      if (type === 'LocalBusiness') schemaObjs.push(buildLocalBusiness());
      if (type === 'Person')        schemaObjs.push(buildPerson());
      if (type === 'Product')       schemaObjs.push(buildProduct(pageKey, lang));
      if (type === 'ImageGallery')  schemaObjs.push(buildImageGallery());
    });

    schemaObjs.forEach((obj, i) => {
      setScriptLd('ld-json-' + i, obj);
    });
  }

  /* ─────────────────────────────────────────────
     LANGUAGE CHANGE LISTENER — Re-inject on lang toggle
  ───────────────────────────────────────────── */
  function watchLangChange() {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(m) {
        if (m.attributeName === 'lang') {
          injectSEO();
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    document.addEventListener('langChange', injectSEO);
  }

  /* ─────────────────────────────────────────────
     INIT
  ───────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      injectSEO();
      watchLangChange();
    });
  } else {
    injectSEO();
    watchLangChange();
  }

})();
