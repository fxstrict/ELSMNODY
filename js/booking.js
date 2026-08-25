/* ============================================================
   ELSMNODY BESPOKE — Booking System JavaScript
   Phase 7: Booking System UI
   Bilingual: Arabic (RTL) Primary | English (LTR) Secondary
   ============================================================ */

'use strict';

/* ============================================================
   1. TRANSLATIONS
   ============================================================ */
const TRANSLATIONS = {
  ar: {
    // Navbar
    nav_home:              'الرئيسية',
    nav_collections:       'المجموعات',
    nav_fabrics:           'الأقمشة',
    nav_about:             'عن المصمم',
    nav_gallery:           'المعرض',
    nav_contact:           'الحجز',
    nav_book:              'احجز موعدك',
    nav_lang:              'EN',

    // Hero
    book_eyebrow:          'نظام الحجز الفاخر',
    book_hero_title:       'ابدأ رحلة بدلتك المثالية',
    book_hero_subtitle:    'أربع خطوات بسيطة تفصل بينك وبين البدلة التي تعكس شخصيتك بشكل استثنائي.',
    book_step1_label:      'بياناتك',
    book_step2_label:      'الخدمة',
    book_step3_label:      'المقاسات',
    book_step4_label:      'التصميم',
    scroll_down:           'انتقل للحجز',

    // Progress
    prog_personal:         'البيانات الشخصية',
    prog_service:          'الخدمة والموعد',
    prog_measurements:     'المقاسات',
    prog_customizer:       'تصميم البدلة',

    // Step 1
    step1_title:           'أخبرنا عن نفسك',
    step1_desc:            'نحتاج بعض معلوماتك الأساسية للتواصل معك وتحديد أقرب فرع.',
    field_fullname:        'الاسم الكامل',
    field_country:         'الدولة',
    field_city:            'المدينة',
    field_whatsapp:        'رقم واتساب',
    field_email:           'البريد الإلكتروني (اختياري)',
    ph_fullname:           'محمد أحمد السمنودي',
    ph_city:               'القاهرة',
    ph_whatsapp:           '201012345678',
    ph_email:              'your@email.com',
    ph_country:            'اختر دولتك',
    country_other:         'دولة أخرى',
    hint_whatsapp:         'أدخل الرقم مع رمز الدولة — مثال: 201012345678',
    hint_email:            'سيُرسل إليك تأكيد الحجز على بريدك',
    err_required:          'هذا الحقل مطلوب',
    err_phone:             'يرجى إدخال رقم واتساب صحيح',
    btn_next:              'التالي',
    btn_back:              'السابق',

    // Step 2
    step2_title:           'اختر خدمتك',
    step2_desc:            'كل خدمة مصممة لمستوى مختلف من الرقي والاهتمام بالتفاصيل.',
    svc_bespoke_title:     'بيسبوك فاخر',
    svc_bespoke_desc:      'بدلة مصنوعة بالكامل من الصفر على مقاسك وذوقك الشخصي. الخيار الأعلى فخامة.',
    svc_bespoke_badge:     'Black Label',
    svc_mtm_title:         'على المقاس',
    svc_mtm_desc:          'نموذج قياسي معدّل بدقة ليلائم جسمك. توازن مثالي بين الجودة والوقت.',
    svc_mtm_badge:         'Made to Measure',
    svc_corp_title:        'أزياء المؤسسات',
    svc_corp_desc:         'طلبيات جماعية للشركات والهيئات الحكومية والفرق القانونية.',
    svc_corp_badge:        'Corporate',
    field_date:            'التاريخ المفضل للموعد',
    hint_date:             'سنتواصل معك لتأكيد التاريخ المناسب',
    field_notes:           'ملاحظات إضافية (اختياري)',
    ph_notes:              'أي تفاصيل تريد مشاركتها معنا مسبقاً...',

    // Step 3
    step3_title:           'مقاساتك',
    step3_desc:            'المقاسات الدقيقة هي سر البدلة المثالية. اختر الطريقة التي تناسبك.',
    meas_manual_tab:       'إدخال يدوي',
    meas_file_tab:         'رفع ملف',
    meas_video_tab:        'رفع فيديو',
    meas_hint:             'أدخل المقاسات بالسنتيمتر. إذا لم تكن متأكداً من مقاس ما، يمكنك تركه فارغاً وسنأخذه في الجلسة الأولى.',
    meas_chest:            'محيط الصدر',
    meas_shoulder:         'عرض الكتفين',
    meas_waist:            'محيط الخصر',
    meas_hip:              'محيط الأرداف',
    meas_arm:              'طول الذراع',
    meas_jacket:           'طول الجاكيت',
    meas_trouser:          'طول البنطلون',
    meas_neck:             'محيط الرقبة',
    upload_title:          'ارفع ملف المقاسات',
    upload_desc:           'يمكنك رفع ملف PDF أو صورة تحتوي على مقاساتك. الصيغ المقبولة: PDF, JPG, PNG',
    upload_btn:            'اختر الملف',
    video_title:           'ارفع فيديو للمقاسات',
    video_desc:            'سجّل فيديو قصير (1-2 دقيقة) يظهر فيه جسمك من الأمام والجانبين لمساعدتنا في أخذ المقاسات.',
    video_btn:             'اختر الفيديو',
    video_tips_title:      'نصائح لتصوير جيد:',
    video_tips: [
      'ارتدِ ملابس ضيقة (تيشرت وبنطلون رياضي)',
      'قف في مكان مضاء جيداً',
      'صوّر من مسافة كافية تُظهر كامل جسمك',
      'صوّر من الأمام، اليمين، اليسار، والخلف',
      'قف بشكل مستقيم وذراعيك بجانبيك'
    ],

    // Step 4
    step4_title:           'صمّم بدلتك',
    step4_desc:            'اختر التفاصيل التي تعكس أسلوبك الشخصي. كل خيار يمكن تعديله لاحقاً مع المصمم.',
    cust_collar:           'نوع الياقة',
    cust_buttons:          'عدد الأزرار',
    cust_lining:           'لون البطانة',
    cust_pocket:           'شكل الجيب',
    cust_fabric:           'نوع القماش',
    cust_special:          'طلبات خاصة',
    ph_special:            'أي تفاصيل إضافية تريدها في بدلتك...',

    // Collar options
    collar_notch:          'ياقة كلاسيكية',
    collar_peak:           'ياقة حادة',
    collar_shawl:          'شال كولار',
    collar_mandarin:       'ياقة ماندرين',
    // Button options
    btn_1:                 'زر واحد',
    btn_2:                 'زرّان',
    btn_3:                 'ثلاثة أزرار',
    btn_db:                'مزدوج',
    // Pocket options
    pkt_welt:              'ويلت',
    pkt_patch:             'باتش',
    pkt_flap:              'فلاب',
    pkt_jetted:            'مُخفى',
    // Fabric options
    fab_italian_wool:      'صوف إيطالي',
    fab_cashmere:          'كشمير',
    fab_english_wool:      'صوف إنجليزي',
    fab_linen:             'كتان',
    fab_cotton:            'قطن مصري',

    // Summary
    summary_title:         'ملخص طلبك',
    sum_name:              'الاسم:',
    sum_country:           'الدولة:',
    sum_whatsapp:          'واتساب:',
    sum_service:           'الخدمة:',
    sum_date:              'الموعد:',
    sum_collar:            'الياقة:',
    sum_buttons:           'الأزرار:',
    sum_fabric:            'القماش:',
    sum_meas_method:       'المقاسات:',
    sum_method_manual:     'إدخال يدوي',
    sum_method_file:       'ملف مرفوع',
    sum_method_video:      'فيديو مرفوع',

    // Submit
    btn_whatsapp_submit:   'إرسال عبر واتساب',
    btn_form_submit:       'إرسال الطلب',

    // CTA Strip
    cta_strip_text:        'تفضّل بالتواصل معنا مباشرة لاستشارة حصرية',
    cta_whatsapp:          'تواصل عبر واتساب',

    // Footer
    footer_tagline:        'Crafting Presence. Tailoring Influence.',
    footer_nav_title:      'الصفحات',
    footer_copy:           '© 2025 ELSMNODY BESPOKE. جميع الحقوق محفوظة.',

    // Modal
    modal_title:           'تم استلام طلبك',
    modal_text:            'سيتواصل معك فريق إلسمنودي خلال 24 ساعة لتأكيد الموعد وتفاصيل الحجز.',
    modal_btn:             'حسناً، شكراً'
  },

  en: {
    nav_home:              'Home',
    nav_collections:       'Collections',
    nav_fabrics:           'Fabrics',
    nav_about:             'The Designer',
    nav_gallery:           'Gallery',
    nav_contact:           'Book',
    nav_book:              'Book Appointment',
    nav_lang:              'ع',
    book_eyebrow:          'Luxury Booking System',
    book_hero_title:       'Begin Your Bespoke Journey',
    book_hero_subtitle:    'Four simple steps to the suit that defines you.',
    book_step1_label:      'Your Details',
    book_step2_label:      'Service',
    book_step3_label:      'Measurements',
    book_step4_label:      'Design',
    scroll_down:           'Start Booking',
    prog_personal:         'Personal Details',
    prog_service:          'Service & Date',
    prog_measurements:     'Measurements',
    prog_customizer:       'Suit Design',
    step1_title:           'Tell Us About Yourself',
    step1_desc:            'We need your basic information to get in touch and arrange your consultation.',
    field_fullname:        'Full Name',
    field_country:         'Country',
    field_city:            'City',
    field_whatsapp:        'WhatsApp Number',
    field_email:           'Email (Optional)',
    ph_fullname:           'Mohamed Ahmed El-Samnody',
    ph_city:               'Cairo',
    ph_whatsapp:           '201012345678',
    ph_email:              'your@email.com',
    ph_country:            'Select Your Country',
    country_other:         'Other Country',
    hint_whatsapp:         'Include country code — e.g. 201012345678',
    hint_email:            'Booking confirmation will be sent here',
    err_required:          'This field is required',
    err_phone:             'Please enter a valid WhatsApp number',
    btn_next:              'Next',
    btn_back:              'Back',
    step2_title:           'Choose Your Service',
    step2_desc:            'Each service is crafted for a different level of refinement and personal attention.',
    svc_bespoke_title:     'Full Bespoke',
    svc_bespoke_desc:      'A suit built entirely from scratch to your exact measurements and personal taste.',
    svc_bespoke_badge:     'Black Label',
    svc_mtm_title:         'Made to Measure',
    svc_mtm_desc:          'A standard pattern adjusted precisely to fit your body — the perfect balance of quality and time.',
    svc_mtm_badge:         'Made to Measure',
    svc_corp_title:        'Corporate Orders',
    svc_corp_desc:         'Bulk orders for firms, government bodies, and legal teams.',
    svc_corp_badge:        'Corporate',
    field_date:            'Preferred Appointment Date',
    hint_date:             'We will contact you to confirm a suitable date',
    field_notes:           'Additional Notes (Optional)',
    ph_notes:              'Any details you want to share with us beforehand...',
    step3_title:           'Your Measurements',
    step3_desc:            'Precise measurements are the secret to a perfect suit. Choose the method that suits you.',
    meas_manual_tab:       'Manual Entry',
    meas_file_tab:         'Upload File',
    meas_video_tab:        'Upload Video',
    meas_hint:             'Enter measurements in centimeters. If unsure about any measurement, leave it blank — we\'ll take it at your first session.',
    meas_chest:            'Chest Circumference',
    meas_shoulder:         'Shoulder Width',
    meas_waist:            'Waist Circumference',
    meas_hip:              'Hip Circumference',
    meas_arm:              'Arm Length',
    meas_jacket:           'Jacket Length',
    meas_trouser:          'Trouser Length',
    meas_neck:             'Neck Circumference',
    upload_title:          'Upload Your Measurements File',
    upload_desc:           'Upload a PDF or image containing your measurements. Accepted formats: PDF, JPG, PNG',
    upload_btn:            'Choose File',
    video_title:           'Upload a Measurements Video',
    video_desc:            'Record a short video (1-2 min) showing your body from front and sides to help us take measurements.',
    video_btn:             'Choose Video',
    video_tips_title:      'Tips for a good recording:',
    video_tips: [
      'Wear fitted clothing (T-shirt and athletic pants)',
      'Stand in a well-lit area',
      'Film from a distance that shows your full body',
      'Record from front, right, left, and back',
      'Stand straight with arms at your sides'
    ],
    step4_title:           'Design Your Suit',
    step4_desc:            'Choose the details that reflect your personal style. All options can be refined with the designer.',
    cust_collar:           'Lapel Style',
    cust_buttons:          'Button Count',
    cust_lining:           'Lining Color',
    cust_pocket:           'Pocket Style',
    cust_fabric:           'Fabric Type',
    cust_special:          'Special Requests',
    ph_special:            'Any additional details you want in your suit...',
    collar_notch:          'Notch Lapel',
    collar_peak:           'Peak Lapel',
    collar_shawl:          'Shawl Collar',
    collar_mandarin:       'Mandarin Collar',
    btn_1:                 'One Button',
    btn_2:                 'Two Buttons',
    btn_3:                 'Three Buttons',
    btn_db:                'Double Breasted',
    pkt_welt:              'Welt',
    pkt_patch:             'Patch',
    pkt_flap:              'Flap',
    pkt_jetted:            'Jetted',
    fab_italian_wool:      'Italian Wool',
    fab_cashmere:          'Cashmere',
    fab_english_wool:      'English Wool',
    fab_linen:             'Linen',
    fab_cotton:            'Egyptian Cotton',
    summary_title:         'Your Booking Summary',
    sum_name:              'Name:',
    sum_country:           'Country:',
    sum_whatsapp:          'WhatsApp:',
    sum_service:           'Service:',
    sum_date:              'Date:',
    sum_collar:            'Lapel:',
    sum_buttons:           'Buttons:',
    sum_fabric:            'Fabric:',
    sum_meas_method:       'Measurements:',
    sum_method_manual:     'Manual Entry',
    sum_method_file:       'Uploaded File',
    sum_method_video:      'Uploaded Video',
    btn_whatsapp_submit:   'Send via WhatsApp',
    btn_form_submit:       'Submit Request',
    cta_strip_text:        'Prefer to speak directly? Contact us for an exclusive consultation.',
    cta_whatsapp:          'WhatsApp Us',
    footer_tagline:        'Crafting Presence. Tailoring Influence.',
    footer_nav_title:      'Pages',
    footer_copy:           '© 2025 ELSMNODY BESPOKE. All rights reserved.',
    modal_title:           'Request Received',
    modal_text:            'The ELSMNODY team will contact you within 24 hours to confirm your appointment and booking details.',
    modal_btn:             'Thank You'
  }
};

/* ============================================================
   2. LANGUAGE MANAGER
   ============================================================ */
const Lang = {
  current: localStorage.getItem('elsmnody_lang') || 'ar',

  init() {
    document.documentElement.lang = this.current;
    document.documentElement.dir  = this.current === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('data-lang', this.current);
    this.render();
  },

  toggle() {
    this.current = this.current === 'ar' ? 'en' : 'ar';
    localStorage.setItem('elsmnody_lang', this.current);
    this.init();
  },

  t(key) {
    return TRANSLATIONS[this.current][key] || TRANSLATIONS['ar'][key] || key;
  },

  render() {
    // Text content
    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');
      el.textContent = this.t(key);
    });
    // Placeholders
    document.querySelectorAll('[data-ph]').forEach(el => {
      el.placeholder = this.t(el.getAttribute('data-ph'));
    });
    // select first option placeholders
    document.querySelectorAll('select option[data-key]').forEach(el => {
      el.textContent = this.t(el.getAttribute('data-key'));
    });
    // Video tips
    const tipsList = document.getElementById('videoTipsList');
    if (tipsList) {
      const tips = TRANSLATIONS[this.current].video_tips || [];
      tipsList.innerHTML = tips.map(t => `<li>${t}</li>`).join('');
    }
    // Lang toggle label
    const btn = document.getElementById('langToggle');
    if (btn) btn.textContent = this.t('nav_lang');
    // Dynamic renders
    renderCollarOptions();
    renderButtonOptions();
    renderPocketOptions();
    renderLiningColors();
    renderFabricSelector();
    renderSummary();
  }
};

function T(key) { return Lang.t(key); }

/* ============================================================
   3. STEP MANAGER
   ============================================================ */
let currentStep = 1;
const TOTAL_STEPS = 4;

function goToStep(n) {
  if (n < 1 || n > TOTAL_STEPS) return;
  // Hide current
  document.getElementById(`step${currentStep}`).classList.add('hidden');
  // Show new
  const next = document.getElementById(`step${n}`);
  next.classList.remove('hidden');
  currentStep = n;
  // Progress bar
  updateProgress();
  // Scroll to form
  document.querySelector('.booking-main').scrollIntoView({ behavior: 'smooth', block: 'start' });
  // Update summary on step 4
  if (n === 4) renderSummary();
}

function nextStep(from) {
  if (from === 1 && !validateStep1()) return;
  if (from === 2 && !validateStep2()) return;
  goToStep(from + 1);
}

function prevStep(from) {
  goToStep(from - 1);
}

function updateProgress() {
  const pct = (currentStep / TOTAL_STEPS) * 100;
  document.getElementById('progressFill').style.width = pct + '%';
  document.querySelectorAll('.progress-step').forEach(btn => {
    const s = parseInt(btn.getAttribute('data-step'));
    btn.classList.toggle('active', s === currentStep);
    btn.classList.toggle('completed', s < currentStep);
  });
}

/* ============================================================
   4. VALIDATION
   ============================================================ */
function validateStep1() {
  let valid = true;
  const fields = [
    { id: 'fullName', errKey: 'err_required' },
    { id: 'country',  errKey: 'err_required' },
    { id: 'city',     errKey: 'err_required' },
    { id: 'whatsapp', errKey: 'err_phone' }
  ];
  fields.forEach(({ id, errKey }) => {
    const el  = document.getElementById(id);
    const err = el.parentElement.querySelector('.form-error') ||
                el.closest('.form-group')?.querySelector('.form-error');
    if (!el.value.trim()) {
      el.classList.add('invalid');
      if (err) { err.textContent = T(errKey); err.classList.add('visible'); }
      valid = false;
    } else {
      el.classList.remove('invalid');
      if (err) err.classList.remove('visible');
    }
  });
  // Phone basic check
  const wp = document.getElementById('whatsapp');
  if (wp.value && !/^\d{7,15}$/.test(wp.value.replace(/\s/g,''))) {
    wp.classList.add('invalid');
    const err = wp.closest('.form-group')?.querySelector('.form-error');
    if (err) { err.textContent = T('err_phone'); err.classList.add('visible'); }
    valid = false;
  }
  return valid;
}

function validateStep2() {
  const selected = document.querySelector('input[name="service"]:checked');
  if (!selected) {
    document.querySelectorAll('.service-card__inner').forEach(c => {
      c.style.borderColor = 'rgba(139,26,26,0.5)';
      setTimeout(() => c.style.borderColor = '', 1500);
    });
    return false;
  }
  return true;
}

/* ============================================================
   5. SERVICE CARD INTERACTION
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.service-card').forEach(c =>
        c.querySelector('.service-card__inner').style.borderColor = ''
      );
    });
  });

  // Set minimum date to tomorrow
  const dateInput = document.getElementById('preferredDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
  }

  // Init
  Lang.init();
  updateProgress();
  initNavbar();
});

/* ============================================================
   6. MEASUREMENT TABS
   ============================================================ */
function switchMeasTab(tab) {
  document.querySelectorAll('.meas-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.meas-panel').forEach(p => p.classList.add('hidden'));
  document.querySelector(`.meas-tab[data-tab="${tab}"]`).classList.add('active');
  document.getElementById(`meas${tab.charAt(0).toUpperCase() + tab.slice(1)}`).classList.remove('hidden');
}

/* ============================================================
   7. FILE UPLOAD HANDLERS
   ============================================================ */
function handleDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}
function handleDragLeave(e) {
  e.currentTarget.classList.remove('drag-over');
}
function handleFileDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  handleFiles(e.dataTransfer.files, 'uploadPreview');
}
function handleFileSelect(e) {
  handleFiles(e.target.files, 'uploadPreview');
}
function handleFiles(files, previewId) {
  const preview = document.getElementById(previewId);
  preview.innerHTML = '';
  Array.from(files).forEach(file => {
    if (file.type === 'application/pdf') {
      const div = document.createElement('div');
      div.className = 'upload-preview-pdf';
      div.innerHTML = `<span>📄</span><span>${file.name}</span>
        <button onclick="this.parentElement.remove()" style="background:none;border:none;color:var(--color-error);cursor:pointer">✕</button>`;
      preview.appendChild(div);
    } else if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = ev => {
        const div = document.createElement('div');
        div.className = 'upload-preview-item';
        div.innerHTML = `<img src="${ev.target.result}" alt="${file.name}">
          <button class="remove-file" onclick="this.parentElement.remove()">✕</button>`;
        preview.appendChild(div);
      };
      reader.readAsDataURL(file);
    }
  });
}
function handleVideoDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('video/')) previewVideo(file);
}
function handleVideoSelect(e) {
  const file = e.target.files[0];
  if (file) previewVideo(file);
}
function previewVideo(file) {
  const preview = document.getElementById('videoPreview');
  const url = URL.createObjectURL(file);
  preview.innerHTML = `<video controls><source src="${url}" type="${file.type}"></video>
    <p style="font-family:var(--font-arabic);font-size:var(--text-sm);color:var(--color-text-secondary);margin-top:8px;">${file.name}</p>`;
}

/* ============================================================
   8. CUSTOMIZER OPTIONS
   ============================================================ */
const customizerState = {
  collar: null, buttons: null, lining: null, pocket: null, fabric: null
};

function renderCollarOptions() {
  const container = document.getElementById('collarOptions');
  if (!container) return;
  const options = [
    { key: 'collar_notch', val: 'notch' },
    { key: 'collar_peak',  val: 'peak' },
    { key: 'collar_shawl', val: 'shawl' },
    { key: 'collar_mandarin', val: 'mandarin' }
  ];
  container.innerHTML = options.map(o =>
    `<button class="option-pill${customizerState.collar === o.val ? ' selected' : ''}"
      onclick="selectOption('collar','${o.val}', this)">${T(o.key)}</button>`
  ).join('');
}

function renderButtonOptions() {
  const container = document.getElementById('buttonOptions');
  if (!container) return;
  const options = [
    { key: 'btn_1', val: '1' },
    { key: 'btn_2', val: '2' },
    { key: 'btn_3', val: '3' },
    { key: 'btn_db', val: 'double' }
  ];
  container.innerHTML = options.map(o =>
    `<button class="option-pill${customizerState.buttons === o.val ? ' selected' : ''}"
      onclick="selectOption('buttons','${o.val}', this)">${T(o.key)}</button>`
  ).join('');
}

function renderPocketOptions() {
  const container = document.getElementById('pocketOptions');
  if (!container) return;
  const options = [
    { key: 'pkt_welt',   val: 'welt' },
    { key: 'pkt_patch',  val: 'patch' },
    { key: 'pkt_flap',   val: 'flap' },
    { key: 'pkt_jetted', val: 'jetted' }
  ];
  container.innerHTML = options.map(o =>
    `<button class="option-pill${customizerState.pocket === o.val ? ' selected' : ''}"
      onclick="selectOption('pocket','${o.val}', this)">${T(o.key)}</button>`
  ).join('');
}

const LINING_COLORS = [
  { color: '#1A2744', label: 'Navy' },
  { color: '#8B1A1A', label: 'Burgundy' },
  { color: '#2D4A1E', label: 'Forest' },
  { color: '#C9A84C', label: 'Gold' },
  { color: '#1C1C1C', label: 'Charcoal' },
  { color: '#F5F0E8', label: 'Ivory' },
  { color: '#5C2D91', label: 'Purple' },
  { color: '#1A4A3C', label: 'Emerald' }
];

function renderLiningColors() {
  const container = document.getElementById('liningColors');
  if (!container) return;
  container.innerHTML = LINING_COLORS.map(c =>
    `<button class="color-swatch${customizerState.lining === c.color ? ' selected' : ''}"
      style="background:${c.color}" title="${c.label}"
      onclick="selectColor('${c.color}', this)"></button>`
  ).join('');
}

const FABRICS_DATA = [
  { key: 'fab_italian_wool', val: 'italian-wool', img: 'fabric-italian-wool' },
  { key: 'fab_cashmere',     val: 'cashmere',     img: 'fabric-cashmere' },
  { key: 'fab_english_wool', val: 'english-wool',  img: 'fabric-english-wool' },
  { key: 'fab_linen',        val: 'linen',         img: 'fabric-linen' },
  { key: 'fab_cotton',       val: 'cotton',        img: 'fabric-wall' }
];

const IMG_BASE = 'assets/images/';

function renderFabricSelector() {
  const container = document.getElementById('fabricSelector');
  if (!container) return;
  container.innerHTML = FABRICS_DATA.map(f =>
    `<div class="fabric-option${customizerState.fabric === f.val ? ' selected' : ''}"
      onclick="selectFabric('${f.val}', this)">
      <img src="${IMG_BASE}fabrics/${f.img}.webp"
           alt="${T(f.key)}" loading="lazy">
      <div class="fabric-option__name">${T(f.key)}</div>
    </div>`
  ).join('');
}

function selectOption(type, val, el) {
  customizerState[type] = val;
  el.closest('.option-pills').querySelectorAll('.option-pill').forEach(p => p.classList.remove('selected'));
  el.classList.add('selected');
  renderSummary();
}
function selectColor(color, el) {
  customizerState.lining = color;
  el.closest('.color-swatches').querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  renderSummary();
}
function selectFabric(val, el) {
  customizerState.fabric = val;
  el.closest('.fabric-selector').querySelectorAll('.fabric-option').forEach(f => f.classList.remove('selected'));
  el.classList.add('selected');
  renderSummary();
}

/* ============================================================
   9. SUMMARY RENDER
   ============================================================ */
function renderSummary() {
  const grid = document.getElementById('summaryGrid');
  if (!grid) return;

  const service = document.querySelector('input[name="service"]:checked')?.value;
  const svcMap = { bespoke: T('svc_bespoke_title'), 'made-to-measure': T('svc_mtm_title'), corporate: T('svc_corp_title') };
  const collarMap = { notch: T('collar_notch'), peak: T('collar_peak'), shawl: T('collar_shawl'), mandarin: T('collar_mandarin') };
  const btnMap = { '1': T('btn_1'), '2': T('btn_2'), '3': T('btn_3'), double: T('btn_db') };
  const fabMap = {
    'italian-wool': T('fab_italian_wool'), cashmere: T('fab_cashmere'),
    'english-wool': T('fab_english_wool'), linen: T('fab_linen'), cotton: T('fab_cotton')
  };
  const measTab = document.querySelector('.meas-tab.active')?.getAttribute('data-tab') || 'manual';
  const measMap = { manual: T('sum_method_manual'), file: T('sum_method_file'), video: T('sum_method_video') };

  const items = [
    { label: T('sum_name'),       value: document.getElementById('fullName')?.value || '—' },
    { label: T('sum_country'),    value: document.getElementById('country')?.options[document.getElementById('country')?.selectedIndex]?.text || '—' },
    { label: T('sum_whatsapp'),   value: document.getElementById('whatsapp')?.value ? '+' + document.getElementById('whatsapp').value : '—' },
    { label: T('sum_service'),    value: service ? svcMap[service] : '—' },
    { label: T('sum_date'),       value: document.getElementById('preferredDate')?.value || '—' },
    { label: T('sum_collar'),     value: customizerState.collar ? collarMap[customizerState.collar] : '—' },
    { label: T('sum_buttons'),    value: customizerState.buttons ? btnMap[customizerState.buttons] : '—' },
    { label: T('sum_fabric'),     value: customizerState.fabric ? fabMap[customizerState.fabric] : '—' },
    { label: T('sum_meas_method'), value: measMap[measTab] }
  ];

  grid.innerHTML = items.map(item =>
    `<div class="summary-item">
      <span class="summary-item__label">${item.label}</span>
      <span class="summary-item__value">${item.value}</span>
    </div>`
  ).join('');
}

/* ============================================================
   10. SUBMIT HANDLERS
   ============================================================ */
function buildWhatsAppMessage() {
  const name    = document.getElementById('fullName')?.value || '';
  const country = document.getElementById('country')?.options[document.getElementById('country')?.selectedIndex]?.text || '';
  const city    = document.getElementById('city')?.value || '';
  const wa      = document.getElementById('whatsapp')?.value || '';
  const email   = document.getElementById('email')?.value || '';
  const service = document.querySelector('input[name="service"]:checked')?.value || '';
  const date    = document.getElementById('preferredDate')?.value || '';
  const notes   = document.getElementById('notes')?.value || '';
  const special = document.getElementById('specialRequests')?.value || '';

  const svcMap  = { bespoke: T('svc_bespoke_title'), 'made-to-measure': T('svc_mtm_title'), corporate: T('svc_corp_title') };
  const collarMap = { notch: T('collar_notch'), peak: T('collar_peak'), shawl: T('collar_shawl'), mandarin: T('collar_mandarin') };
  const btnMap = { '1': T('btn_1'), '2': T('btn_2'), '3': T('btn_3'), double: T('btn_db') };
  const fabMap = {
    'italian-wool': T('fab_italian_wool'), cashmere: T('fab_cashmere'),
    'english-wool': T('fab_english_wool'), linen: T('fab_linen'), cotton: T('fab_cotton')
  };

  // Manual measurements
  const measFields = ['mChest','mShoulder','mWaist','mHip','mArm','mJacket','mTrouser','mNeck'];
  const measLabels = [T('meas_chest'),T('meas_shoulder'),T('meas_waist'),T('meas_hip'),T('meas_arm'),T('meas_jacket'),T('meas_trouser'),T('meas_neck')];
  const measLines = measFields.map((id, i) => {
    const val = document.getElementById(id)?.value;
    return val ? `  ${measLabels[i]}: ${val} cm` : null;
  }).filter(Boolean).join('\n');

  const isAr = Lang.current === 'ar';

  let msg = isAr
    ? `🎩 *طلب حجز جديد — ELSMNODY BESPOKE*\n\n`
    + `👤 *الاسم:* ${name}\n`
    + `🌍 *الدولة/المدينة:* ${country} — ${city}\n`
    + `📱 *واتساب:* +${wa}\n`
    + (email ? `📧 *الإيميل:* ${email}\n` : '')
    + `\n💼 *الخدمة:* ${svcMap[service] || service}\n`
    + (date ? `📅 *الموعد المفضل:* ${date}\n` : '')
    + (notes ? `📝 *ملاحظات:* ${notes}\n` : '')
    + (customizerState.collar || customizerState.buttons || customizerState.fabric
      ? `\n✦ *تصميم البدلة:*\n`
        + (customizerState.collar  ? `  • الياقة: ${collarMap[customizerState.collar]}\n` : '')
        + (customizerState.buttons ? `  • الأزرار: ${btnMap[customizerState.buttons]}\n` : '')
        + (customizerState.fabric  ? `  • القماش: ${fabMap[customizerState.fabric]}\n` : '')
      : '')
    + (measLines ? `\n📐 *المقاسات:*\n${measLines}\n` : '')
    + (special ? `\n🌟 *طلبات خاصة:* ${special}\n` : '')
    + `\n_تم الإرسال عبر موقع ELSMNODY BESPOKE_`

    : `🎩 *New Booking Request — ELSMNODY BESPOKE*\n\n`
    + `👤 *Name:* ${name}\n`
    + `🌍 *Country/City:* ${country} — ${city}\n`
    + `📱 *WhatsApp:* +${wa}\n`
    + (email ? `📧 *Email:* ${email}\n` : '')
    + `\n💼 *Service:* ${svcMap[service] || service}\n`
    + (date ? `📅 *Preferred Date:* ${date}\n` : '')
    + (notes ? `📝 *Notes:* ${notes}\n` : '')
    + (customizerState.collar || customizerState.buttons || customizerState.fabric
      ? `\n✦ *Suit Design:*\n`
        + (customizerState.collar  ? `  • Lapel: ${collarMap[customizerState.collar]}\n` : '')
        + (customizerState.buttons ? `  • Buttons: ${btnMap[customizerState.buttons]}\n` : '')
        + (customizerState.fabric  ? `  • Fabric: ${fabMap[customizerState.fabric]}\n` : '')
      : '')
    + (measLines ? `\n📐 *Measurements:*\n${measLines}\n` : '')
    + (special ? `\n🌟 *Special Requests:* ${special}\n` : '')
    + `\n_Sent via ELSMNODY BESPOKE website_`;

  return encodeURIComponent(msg);
}

function submitWhatsApp() {
  const waNumber = '201555277205';
  const msg = buildWhatsAppMessage();
  const url = `https://wa.me/${waNumber}?text=${msg}`;
  window.open(url, '_blank');
  showSuccessModal();
}

function submitForm() {
  // Placeholder for Phase 8 Google Sheets integration
  showSuccessModal();
}

function showSuccessModal() {
  document.getElementById('successModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('successModal').classList.add('hidden');
  // Reset to step 1
  goToStep(1);
}

/* ============================================================
   11. NAVBAR
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.background = window.scrollY > 50
      ? 'rgba(10,10,8,0.97)' : 'rgba(10,10,8,0.92)';
  });
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
