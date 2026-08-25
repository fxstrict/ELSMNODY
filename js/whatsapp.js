/* ============================================================
   js/whatsapp.js — ELSMNODY BESPOKE WhatsApp System
   Phase 9: Smart WhatsApp Integration
   ============================================================
   USAGE: Add to any page before </body> (use a relative path matching
   the page's depth, e.g. "css/whatsapp.css" at root or "../css/whatsapp.css"
   one level deep — do NOT use a leading "/", it breaks if the site is
   served from a sub-path):
     <link rel="stylesheet" href="css/whatsapp.css">
     <script src="js/whatsapp.js"></script>
   The script auto-detects the current page and injects:
     - .wa-float button (replaces any static placeholder)
     - #wa-popup chat bubble
     - #wa-toast success notification
   ============================================================ */

(function () {
  'use strict';

  /* ── Configuration ──────────────────────────────────────── */
  const WA = {
    number: '201555277205', // ← ضع الرقم الحقيقي هنا (مع رمز الدولة بدون +)
    brandName: 'ELSMNODY BESPOKE',
    founderName: 'محمد السمنودي',
    founderNameEn: 'Mohamed Elsmnody',
    businessHours: { from: 9, to: 22 }, // 9AM–10PM Cairo time
    typingDelayMs: 1400,
  };

  /* ── Page-Specific Messages ─────────────────────────────── */
  const PAGE_MESSAGES = {
    // Home / Default
    default: {
      ar: {
        bubble: 'مرحباً 👋\nأنا محمد السمنودي — يسعدني مساعدتك في اختيار بدلتك الفاخرة.\nكيف أقدر أخدمك؟',
        cta: 'ابدأ المحادثة',
        tooltip: 'تحدث معنا الآن',
        chips: ['حجز موعد استشارة', 'عرض الأسعار', 'تفاصيل التفصيل'],
        waText: 'مرحباً، أرغب في الاستفسار عن خدمات إلسمنودي بيسبوك.',
      },
      en: {
        bubble: 'Hello 👋\nI\'m Mohamed Elsmnody — happy to help you find your perfect bespoke suit.\nHow can I assist you?',
        cta: 'Start Chat',
        tooltip: 'Chat with us now',
        chips: ['Book a Consultation', 'Pricing Info', 'Tailoring Details'],
        waText: 'Hello, I would like to inquire about ELSMNODY BESPOKE services.',
      },
    },

    // Collections pages
    wedding: {
      ar: {
        bubble: '💍 أهنيك على القادم الجميل!\nتفصيل بدل الأفراح هو تخصصنا — من اختيار القماش حتى اللمسة الأخيرة.\nدعني أساعدك في الاختيار المثالي.',
        cta: 'استشارة بدلة الأفراح',
        tooltip: 'استشارة بدلة الزفاف',
        chips: ['موديلات الأفراح', 'الأقمشة المتاحة', 'المدة والسعر'],
        waText: 'مرحباً، أرغب في الاستفسار عن بدل الأفراح والتفصيل للمناسبات.',
      },
      en: {
        bubble: '💍 Congratulations on your upcoming special day!\nWedding suit tailoring is our specialty — from fabric selection to the final stitch.\nLet me help you make the perfect choice.',
        cta: 'Wedding Suit Consultation',
        tooltip: 'Wedding Suit Enquiry',
        chips: ['Wedding Styles', 'Available Fabrics', 'Timeline & Pricing'],
        waText: 'Hello, I would like to inquire about wedding suit tailoring.',
      },
    },

    judicial: {
      ar: {
        bubble: '⚖️ مرحباً بكم في إلسمنودي بيسبوك\nنفصّل بدل القضاة والمحامين بمواصفات دقيقة تليق بمقامهم.\nهل تودّ الاستفسار عن المقاسات أو الأقمشة؟',
        cta: 'استشارة المجموعة القضائية',
        tooltip: 'بدل القضاة والمحامين',
        chips: ['بدل القضاة', 'بدل المحامين', 'الأقمشة الرسمية'],
        waText: 'مرحباً، أرغب في الاستفسار عن تفصيل بدل القضاة والمحامين.',
      },
      en: {
        bubble: '⚖️ Welcome to ELSMNODY BESPOKE\nWe tailor judicial and legal attire to the highest professional standards.\nWould you like to enquire about measurements or fabrics?',
        cta: 'Judicial Collection Enquiry',
        tooltip: 'Judicial & Legal Suits',
        chips: ['Judges\' Robes', 'Lawyers\' Suits', 'Formal Fabrics'],
        waText: 'Hello, I would like to inquire about tailoring for judges and lawyers.',
      },
    },

    executive: {
      ar: {
        bubble: '👔 مرحباً بك في مجموعة التنفيذي\nبدل رجال الأعمال — قوة في الحضور، دقة في التفصيل.\nأخبرني عن احتياجك.',
        cta: 'استشارة بدلة التنفيذي',
        tooltip: 'بدل رجال الأعمال',
        chips: ['موديلات التنفيذي', 'الأقمشة الفاخرة', 'تفصيل مؤسسي'],
        waText: 'مرحباً، أرغب في الاستفسار عن مجموعة البدل التنفيذية.',
      },
      en: {
        bubble: '👔 Welcome to the Executive Collection\nBusiness suits — powerful presence, precise tailoring.\nTell me what you\'re looking for.',
        cta: 'Executive Suit Enquiry',
        tooltip: 'Executive Business Suits',
        chips: ['Executive Styles', 'Premium Fabrics', 'Corporate Tailoring'],
        waText: 'Hello, I would like to inquire about the Executive suit collection.',
      },
    },

    'black-label': {
      ar: {
        bubble: '✦ مرحباً بك في Black Label — أعلى مراتب الفخامة\nأقمشة Vicuña وCashmere الحصرية، لمن يستحق الأفضل.\nكيف يمكنني خدمتك؟',
        cta: 'استشارة Black Label',
        tooltip: 'Black Label الحصري',
        chips: ['أقمشة Vicuña', 'التصميم الحصري', 'مواعيد التسليم'],
        waText: 'مرحباً، أرغب في الاستفسار عن مجموعة Black Label الحصرية.',
      },
      en: {
        bubble: '✦ Welcome to Black Label — the pinnacle of luxury\nExclusive Vicuña and Cashmere fabrics, for those who deserve the best.\nHow may I serve you?',
        cta: 'Black Label Enquiry',
        tooltip: 'Black Label Exclusive',
        chips: ['Vicuña Fabrics', 'Bespoke Design', 'Delivery Timeline'],
        waText: 'Hello, I would like to inquire about the exclusive Black Label collection.',
      },
    },

    fabrics: {
      ar: {
        bubble: '🧵 مرحباً! تصفّح مجموعتنا من أفضل أقمشة العالم\nZegna · Scabal · Holland & Sherry · Loro Piana\nهل تودّ معرفة المزيد عن قماش معين؟',
        cta: 'استفسر عن الأقمشة',
        tooltip: 'استشارة الأقمشة',
        chips: ['صوف إيطالي', 'كاشمير', 'صوف إنجليزي', 'كتان'],
        waText: 'مرحباً، أرغب في الاستفسار عن أقمشة إلسمنودي بيسبوك.',
      },
      en: {
        bubble: '🧵 Hello! Browse our collection of the world\'s finest fabrics\nZegna · Scabal · Holland & Sherry · Loro Piana\nWould you like to know more about a specific fabric?',
        cta: 'Fabric Enquiry',
        tooltip: 'Fabric Consultation',
        chips: ['Italian Wool', 'Cashmere', 'English Wool', 'Linen'],
        waText: 'Hello, I would like to inquire about ELSMNODY BESPOKE fabrics.',
      },
    },

    gallery: {
      ar: {
        bubble: '🖼️ مشاهدة جيدة!\nكل قطعة تراها صُنعت بعناية فائقة لصاحبها.\nهل تودّ تفصيل قطعة مشابهة؟',
        cta: 'احجز موعدك',
        tooltip: 'تحدث عن القطع',
        chips: ['أريد بدلة مشابهة', 'حجز استشارة', 'الأسعار'],
        waText: 'مرحباً، رأيت أعمالكم في المعرض وأرغب في الاستفسار عن التفصيل.',
      },
      en: {
        bubble: '🖼️ Great browsing!\nEvery piece you see was crafted with exceptional care for its owner.\nWould you like something similar tailored for you?',
        cta: 'Book Your Appointment',
        tooltip: 'Discuss the Collection',
        chips: ['Similar Suit', 'Book Consultation', 'Pricing'],
        waText: 'Hello, I saw your gallery and would like to inquire about tailoring.',
      },
    },

    about: {
      ar: {
        bubble: '👋 شكراً لاهتمامك بقصة البراند\nمحمد السمنودي يرحب باستشارتك الشخصية مباشرةً.\nكيف نبدأ؟',
        cta: 'استشارة شخصية مع محمد',
        tooltip: 'تحدث مع محمد',
        chips: ['استشارة شخصية', 'قصة البراند', 'حجز موعد'],
        waText: 'مرحباً يا محمد، تابعت قصتك وأرغب في حجز استشارة شخصية.',
      },
      en: {
        bubble: '👋 Thank you for your interest in the brand story\nMohamed Elsmnody welcomes your personal consultation directly.\nHow shall we begin?',
        cta: 'Personal Consultation with Mohamed',
        tooltip: 'Talk to Mohamed',
        chips: ['Personal Consultation', 'Brand Story', 'Book Appointment'],
        waText: 'Hello Mohamed, I read your story and would like to book a personal consultation.',
      },
    },

    contact: {
      ar: {
        bubble: '📋 هل تودّ إتمام حجزك عبر واتساب مباشرةً؟\nأرسل لنا بياناتك وسنتواصل معك في أقرب وقت.',
        cta: 'إرسال الحجز عبر واتساب',
        tooltip: 'أكمل الحجز عبر واتساب',
        chips: ['إرسال طلب حجز', 'الأسئلة الشائعة', 'اتصل بنا'],
        waText: 'مرحباً، أرغب في حجز موعد تفصيل مع إلسمنودي بيسبوك.',
      },
      en: {
        bubble: '📋 Would you like to complete your booking via WhatsApp directly?\nSend us your details and we\'ll get back to you promptly.',
        cta: 'Complete Booking via WhatsApp',
        tooltip: 'Book via WhatsApp',
        chips: ['Send Booking Request', 'FAQ', 'Contact Us'],
        waText: 'Hello, I would like to book a tailoring appointment with ELSMNODY BESPOKE.',
      },
    },
  };

  /* ── Language Detection ─────────────────────────────────── */
  function getLang() {
    return (
      document.documentElement.lang ||
      localStorage.getItem('lang') ||
      'ar'
    ).startsWith('en') ? 'en' : 'ar';
  }

  /* ── Page Detection ─────────────────────────────────────── */
  function getPageKey() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('wedding'))     return 'wedding';
    if (path.includes('judicial'))    return 'judicial';
    if (path.includes('executive'))   return 'executive';
    if (path.includes('black-label')) return 'black-label';
    if (path.includes('fabric'))      return 'fabrics';
    if (path.includes('gallery'))     return 'gallery';
    if (path.includes('about'))       return 'about';
    if (path.includes('contact'))     return 'contact';
    return 'default';
  }

  /* ── Business Hours Check ───────────────────────────────── */
  function isBusinessHours() {
    try {
      const now  = new Date().toLocaleString('en-US', { timeZone: 'Africa/Cairo' });
      const hour = new Date(now).getHours();
      return hour >= WA.businessHours.from && hour < WA.businessHours.to;
    } catch (e) {
      return true; // fallback: assume open
    }
  }

  /* ── WhatsApp URL Builder ───────────────────────────────── */
  function buildWaUrl(text) {
    return `https://wa.me/${WA.number}?text=${encodeURIComponent(text)}`;
  }

  /* ── SVG Icons ──────────────────────────────────────────── */
  const SVG_WA = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.123 1.528 5.855L.057 23.926l6.261-1.644A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.369l-.359-.213-3.718.976.992-3.625-.234-.372A9.818 9.818 0 1112 21.818z"/></svg>`;

  const SVG_SEND = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>`;

  const SVG_CHECK = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>`;

  /* ── Build & Inject Float Button ───────────────────────── */
  function buildFloat(pageKey, lang) {
    const msg  = (PAGE_MESSAGES[pageKey] || PAGE_MESSAGES.default)[lang];
    const href = buildWaUrl(msg.waText);

    // Remove any existing static float buttons (from older phase markup)
    document.querySelectorAll('.wa-float, .whatsapp-float').forEach(el => el.remove());

    const btn = document.createElement('button');
    btn.id            = 'wa-float-btn';
    btn.className     = 'wa-float';
    btn.setAttribute('aria-label', 'WhatsApp');
    btn.setAttribute('data-tooltip', msg.tooltip);
    btn.setAttribute('type', 'button');
    btn.innerHTML     = `<div class="wa-float__pulse"></div>${SVG_WA}`;

    btn.addEventListener('click', () => togglePopup(pageKey, lang));
    document.body.appendChild(btn);

    return btn;
  }

  /* ── Build & Inject Popup ───────────────────────────────── */
  let _popupOpen = false;
  let _typingDone = false;

  function buildPopup() {
    const existing = document.getElementById('wa-popup');
    if (existing) existing.remove();

    const popup = document.createElement('div');
    popup.id = 'wa-popup';
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-modal', 'true');
    popup.setAttribute('aria-label', 'WhatsApp Chat');
    document.body.appendChild(popup);
    return popup;
  }

  function renderPopup(pageKey, lang) {
    const popup = document.getElementById('wa-popup') || buildPopup();
    const msg   = (PAGE_MESSAGES[pageKey] || PAGE_MESSAGES.default)[lang];
    const open  = isBusinessHours();
    const now   = new Date();
    const timeStr = now.toLocaleTimeString(lang === 'ar' ? 'ar-EG' : 'en-US', {
      hour: '2-digit', minute: '2-digit', hour12: true,
    });

    const statusText = open
      ? (lang === 'ar' ? 'متصل الآن' : 'Online Now')
      : (lang === 'ar' ? 'سنرد قريباً' : 'Will reply soon');

    const chipsHtml = msg.chips
      .map(c => `<button class="wa-chip" type="button" onclick="window._waChipClick('${c.replace(/'/g,"\\'")}','${pageKey}','${lang}')">${c}</button>`)
      .join('');

    popup.innerHTML = `
      <div class="wa-popup__header">
        <div class="wa-popup__avatar">${SVG_WA}</div>
        <div class="wa-popup__info">
          <div class="wa-popup__name">${WA.brandName}</div>
          <div class="wa-popup__status">${statusText}</div>
        </div>
        <button class="wa-popup__close" onclick="window._waClosePopup()" aria-label="${lang==='ar'?'إغلاق':'Close'}">✕</button>
      </div>
      <div class="wa-popup__body">
        <div class="wa-popup__typing" id="wa-typing">
          <span></span><span></span><span></span>
        </div>
        <div class="wa-popup__bubble" id="wa-bubble" style="display:none">
          ${msg.bubble.replace(/\n/g,'<br>')}
          <div class="wa-popup__bubble-time">${timeStr}</div>
        </div>
      </div>
      <div class="wa-popup__footer">
        <div class="wa-popup__chips" id="wa-chips" style="display:none">${chipsHtml}</div>
        <a
          href="${buildWaUrl(msg.waText)}"
          target="_blank"
          rel="noopener noreferrer"
          class="wa-popup__send-btn"
          onclick="window._waTrackOpen('${pageKey}')"
        >
          ${SVG_SEND}
          ${msg.cta}
        </a>
      </div>
    `;
  }

  function togglePopup(pageKey, lang) {
    let popup = document.getElementById('wa-popup');
    if (!popup) { popup = buildPopup(); }

    if (_popupOpen) {
      popup.classList.remove('wa-popup--open');
      _popupOpen = false;
      return;
    }

    // Re-render with fresh lang
    renderPopup(pageKey, lang);
    popup.classList.add('wa-popup--open');
    _popupOpen = true;
    _typingDone = false;

    // Show typing → then show bubble
    setTimeout(() => {
      const typing = document.getElementById('wa-typing');
      const bubble = document.getElementById('wa-bubble');
      const chips  = document.getElementById('wa-chips');
      if (typing) typing.style.display = 'none';
      if (bubble) bubble.style.display = 'block';
      if (chips)  chips.style.display  = 'flex';
      _typingDone = true;
    }, WA.typingDelayMs);
  }

  /* ── Chip click handler ─────────────────────────────────── */
  window._waChipClick = function(chipText, pageKey, lang) {
    const msg     = (PAGE_MESSAGES[pageKey] || PAGE_MESSAGES.default)[lang];
    const text    = msg.waText + ' ' + chipText;
    window.open(buildWaUrl(text), '_blank', 'noopener,noreferrer');
  };

  window._waClosePopup = function() {
    const popup = document.getElementById('wa-popup');
    if (popup) popup.classList.remove('wa-popup--open');
    _popupOpen = false;
  };

  window._waTrackOpen = function(pageKey) {
    // Analytics hook — called on direct CTA click
    try {
      if (window.gtag) gtag('event', 'whatsapp_open', { page: pageKey });
    } catch(e) {}
  };

  /* ── Toast (used by booking success) ───────────────────── */
  function buildToast() {
    const existing = document.getElementById('wa-toast');
    if (existing) return existing;

    const toast = document.createElement('div');
    toast.id = 'wa-toast';
    toast.innerHTML = `${SVG_CHECK} <span id="wa-toast-msg"></span>`;
    document.body.appendChild(toast);
    return toast;
  }

  /**
   * Show a toast notification.
   * @param {string} message
   * @param {number} [duration=3500]
   */
  window.waShowToast = function(message, duration) {
    const toast = buildToast();
    document.getElementById('wa-toast-msg').textContent = message;
    toast.classList.add('wa-toast--show');
    setTimeout(() => toast.classList.remove('wa-toast--show'), duration || 3500);
  };

  /**
   * Send booking confirmation via WhatsApp.
   * Called by booking.js after successful form submission.
   * @param {Object} data - { name, phone, service, date, customizer }
   * @param {string} [lang]
   */
  window.waSendBookingConfirmation = function(data, lang) {
    lang = lang || getLang();
    const d    = data || {};
    const name = d.name    || (lang === 'ar' ? 'العميل الكريم' : 'Valued Client');
    const svc  = d.service || (lang === 'ar' ? 'تفصيل بيسبوك' : 'Bespoke Tailoring');
    const date = d.date    || '';
    const id   = d.bookingId || '';

    let text;
    if (lang === 'ar') {
      text =
        `🌟 *إلسمنودي بيسبوك — تأكيد الحجز*\n\n` +
        `السلام عليكم ${name}،\n` +
        `تم استلام حجزك بنجاح ✅\n\n` +
        `📋 *تفاصيل الحجز:*\n` +
        `• الخدمة: ${svc}\n` +
        (date ? `• التاريخ المفضل: ${date}\n` : '') +
        (id   ? `• رقم الحجز: ${id}\n` : '') +
        `\nسنتواصل معك قريباً لتأكيد الموعد.\n\n` +
        `_ELSMNODY BESPOKE — Crafting Presence. Tailoring Influence._`;
    } else {
      text =
        `🌟 *ELSMNODY BESPOKE — Booking Confirmation*\n\n` +
        `Dear ${name},\n` +
        `Your booking has been received successfully ✅\n\n` +
        `📋 *Booking Details:*\n` +
        `• Service: ${svc}\n` +
        (date ? `• Preferred Date: ${date}\n` : '') +
        (id   ? `• Booking ID: ${id}\n` : '') +
        `\nWe will contact you shortly to confirm your appointment.\n\n` +
        `_ELSMNODY BESPOKE — Crafting Presence. Tailoring Influence._`;
    }

    window.open(buildWaUrl(text), '_blank', 'noopener,noreferrer');

    // Show toast
    const toastMsg = lang === 'ar'
      ? 'تم إرسال تأكيد الحجز عبر واتساب ✓'
      : 'Booking confirmation sent via WhatsApp ✓';
    window.waShowToast(toastMsg);
  };

  /**
   * Public API: open WhatsApp with a custom message.
   * Can be called from any page:
   *   window.waOpen('أريد الاستفسار عن ...')
   * @param {string} [customText]
   */
  window.waOpen = function(customText) {
    const lang    = getLang();
    const pageKey = getPageKey();
    const msg     = (PAGE_MESSAGES[pageKey] || PAGE_MESSAGES.default)[lang];
    const text    = customText || msg.waText;
    window.open(buildWaUrl(text), '_blank', 'noopener,noreferrer');
  };

  /* ── Update Float href (legacy static anchor support) ────── */
  function updateStaticAnchors(pageKey, lang) {
    const msg = (PAGE_MESSAGES[pageKey] || PAGE_MESSAGES.default)[lang];
    const href = buildWaUrl(msg.waText);
    // Update any older static wa.me hrefs that weren't replaced
    document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
      if (!a.classList.contains('wa-popup__send-btn')) {
        a.href = href;
      }
    });
  }

  /* ── Language change listener ───────────────────────────── */
  function onLangChange() {
    const lang    = getLang();
    const pageKey = getPageKey();
    updateStaticAnchors(pageKey, lang);
    const floatBtn = document.getElementById('wa-float-btn');
    if (floatBtn) {
      const msg = (PAGE_MESSAGES[pageKey] || PAGE_MESSAGES.default)[lang];
      floatBtn.setAttribute('data-tooltip', msg.tooltip);
    }
    // Re-render popup if open
    if (_popupOpen) {
      renderPopup(pageKey, lang);
    }
  }

  /* ── Close popup on outside click ──────────────────────── */
  document.addEventListener('click', function(e) {
    if (!_popupOpen) return;
    const popup    = document.getElementById('wa-popup');
    const floatBtn = document.getElementById('wa-float-btn');
    if (popup && !popup.contains(e.target) && floatBtn && !floatBtn.contains(e.target)) {
      popup.classList.remove('wa-popup--open');
      _popupOpen = false;
    }
  });

  /* ── Close popup on ESC ─────────────────────────────────── */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && _popupOpen) window._waClosePopup();
  });

  /* ── Listen for lang toggle events ─────────────────────── */
  document.addEventListener('langChange', onLangChange);
  // Also watch html[lang] attribute changes via MutationObserver
  new MutationObserver(onLangChange).observe(document.documentElement, {
    attributes: true, attributeFilter: ['lang', 'dir'],
  });

  /* ── Init ───────────────────────────────────────────────── */
  function init() {
    const lang    = getLang();
    const pageKey = getPageKey();
    buildFloat(pageKey, lang);
    buildPopup();
    renderPopup(pageKey, lang);
    updateStaticAnchors(pageKey, lang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
