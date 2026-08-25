/**
 * ELSMNODY BESPOKE — Booking API Integration
 * Phase 8: Google Sheets + Drive Integration
 *
 * يربط نموذج الحجز بـ Google Apps Script
 * يرسل البيانات والملفات إلى Google Sheets + Drive
 * يرسل إيميل التأكيد للعميل وإشعار للمصمم
 */

// ============================================================
// CONFIGURATION
// بعد نشر Google Apps Script، انسخ الـ URL هنا
// ============================================================
const BOOKING_API = {
  // Web App URL من Google Apps Script (بعد النشر)
  SCRIPT_URL: 'REPLACE_WITH_YOUR_APPS_SCRIPT_WEB_APP_URL',

  // حالة الإرسال
  isSubmitting: false
};

// ============================================================
// MAIN: submitForm — تُستدعى من contact.html
// ============================================================
async function submitForm() {
  if (BOOKING_API.isSubmitting) return;

  // تحقق من إكمال الخطوة الأخيرة
  if (!validateCurrentStep()) return;

  BOOKING_API.isSubmitting = true;
  showSubmitLoader(true);

  try {
    // 1. جمع كل بيانات الفورم
    const formData = collectFormData();

    // 2. رفع الملفات (تحويل إلى Base64 في المتصفح)
    const files = await collectFiles();
    if (Object.keys(files).length > 0) {
      formData.files = files;
    }

    // 3. إرسال إلى Google Apps Script
    const result = await sendToGoogleSheets(formData);

    if (result.success) {
      // 4. نجاح: عرض Modal مع رقم الحجز
      showSuccessModal(result.bookingId);

      // 5. إرسال واتساب في نفس الوقت
      setTimeout(() => {
        submitWhatsApp();
      }, 1500);
    } else {
      showErrorMessage(result.error || 'حدث خطأ. يرجى المحاولة مرة أخرى.');
    }

  } catch (error) {
    console.error('Booking submission error:', error);

    // Fallback: إرسال واتساب فقط إذا فشل Google
    showFallbackMessage();
    setTimeout(() => submitWhatsApp(), 2000);
  } finally {
    BOOKING_API.isSubmitting = false;
    showSubmitLoader(false);
  }
}

// ============================================================
// DATA COLLECTION — جمع بيانات الفورم
// ============================================================
function collectFormData() {
  const isAr = typeof Lang !== 'undefined' ? Lang.current === 'ar' : true;

  // Step 1: Personal Info
  const name     = document.getElementById('fullName')?.value?.trim() || '';
  const country  = document.getElementById('country')?.value?.trim() || '';
  const city     = document.getElementById('city')?.value?.trim() || '';
  const whatsapp = document.getElementById('whatsapp')?.value?.trim() || '';
  const email    = document.getElementById('email')?.value?.trim() || '';

  // Step 2: Service
  const service       = document.querySelector('input[name="service"]:checked')?.value || '';
  const preferredDate = document.getElementById('preferredDate')?.value || '';
  const notes         = document.getElementById('notes')?.value?.trim() || '';

  // Step 3: Measurements
  const measurementMethod = getActiveMeasurementTab();
  const measurements = {
    chest:   document.getElementById('mChest')?.value || '',
    shoulder:document.getElementById('mShoulder')?.value || '',
    waist:   document.getElementById('mWaist')?.value || '',
    hip:     document.getElementById('mHip')?.value || '',
    arm:     document.getElementById('mArm')?.value || '',
    jacket:  document.getElementById('mJacket')?.value || '',
    trouser: document.getElementById('mTrouser')?.value || '',
    neck:    document.getElementById('mNeck')?.value || ''
  };

  // Step 4: Customizer
  const customizer = {
    collar:  typeof customizerState !== 'undefined' ? customizerState.collar  : '',
    buttons: typeof customizerState !== 'undefined' ? customizerState.buttons : '',
    lining:  typeof customizerState !== 'undefined' ? customizerState.lining  : '',
    pocket:  typeof customizerState !== 'undefined' ? customizerState.pocket  : '',
    fabric:  typeof customizerState !== 'undefined' ? customizerState.fabric  : ''
  };

  const specialRequests = document.getElementById('specialRequests')?.value?.trim() || '';

  return {
    name, country, city, whatsapp, email,
    service, preferredDate, notes,
    measurementMethod, measurements,
    customizer, specialRequests,
    lang: isAr ? 'ar' : 'en',
    submittedAt: new Date().toISOString(),
    source: 'website'
  };
}

// ============================================================
// FILE COLLECTION — تحويل الملفات إلى Base64
// ============================================================
async function collectFiles() {
  const files = {};

  // ملف المقاسات (PDF/JPG/PNG)
  const measFile = document.getElementById('measFile');
  if (measFile?.files?.length > 0) {
    const file = measFile.files[0];
    if (file.size <= 10 * 1024 * 1024) { // حد 10MB
      files['measurements'] = await fileToBase64Object(file);
    }
  }

  // فيديو المقاسات
  const videoFile = document.getElementById('measVideo');
  if (videoFile?.files?.length > 0) {
    const file = videoFile.files[0];
    if (file.size <= 50 * 1024 * 1024) { // حد 50MB للفيديو
      files['video'] = await fileToBase64Object(file);
    }
  }

  return files;
}

/**
 * تحويل File إلى كائن Base64 للإرسال
 */
function fileToBase64Object(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result.split(',')[1]; // إزالة data:...;base64,
      resolve({
        name: file.name,
        mimeType: file.type,
        size: file.size,
        base64: base64
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// ============================================================
// SEND TO GOOGLE SHEETS
// ============================================================
async function sendToGoogleSheets(formData) {
  const response = await fetch(BOOKING_API.SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors', // Google Apps Script يتطلب هذا
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });

  // no-cors لا يسمح بقراءة الـ response body
  // نفترض النجاح إذا لم يكن هناك خطأ
  // (Google Apps Script يعالج الطلب بالكامل من جانبه)
  return {
    success: true,
    bookingId: generateLocalBookingId()
  };
}

/**
 * توليد رقم حجز محلي (fallback للعرض فقط)
 */
function generateLocalBookingId() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, '');
  const rand = Math.floor(1000 + Math.random() * 9000);
  return 'EB-' + date + '-' + rand;
}

// ============================================================
// HELPERS
// ============================================================
function getActiveMeasurementTab() {
  const activeTab = document.querySelector('.meas-tab.active');
  if (!activeTab) return 'manual';
  const id = activeTab.getAttribute('data-tab') || activeTab.id || '';
  if (id.includes('file')) return 'file';
  if (id.includes('video')) return 'video';
  return 'manual';
}

// ============================================================
// UI FEEDBACK
// ============================================================
function showSubmitLoader(show) {
  const btn = document.getElementById('submitBtn') || document.querySelector('.submit-btn');
  if (!btn) return;
  const isAr = typeof Lang !== 'undefined' && Lang.current === 'ar';

  if (show) {
    btn.disabled = true;
    btn.innerHTML = '<span class="loader-spin">⟳</span> ' + (isAr ? 'جارٍ الإرسال...' : 'Sending...');
    btn.style.opacity = '0.7';
  } else {
    btn.disabled = false;
    btn.innerHTML = isAr ? '✦ إرسال الطلب' : '✦ Submit Request';
    btn.style.opacity = '1';
  }
}

function showSuccessModal(bookingId) {
  // تحديث رقم الحجز في الـ modal إن وجد
  const bookingIdEl = document.getElementById('bookingIdDisplay');
  if (bookingIdEl) bookingIdEl.textContent = '#' + (bookingId || '');

  // إظهار الـ modal
  const modal = document.getElementById('successModal');
  if (modal) modal.classList.remove('hidden');

  // إرسال تأكيد واتساب عبر نظام Phase 9
  try {
    const lang = (typeof Lang !== 'undefined' && Lang.current) || 'ar';
    const name = document.getElementById('fullName')?.value || '';
    const svc  = document.querySelector('.service-card.selected .service-name')?.textContent
                 || document.querySelector('[data-key="svc_bespoke"]')?.textContent
                 || 'Bespoke';
    const date = document.getElementById('appointmentDate')?.value || '';
    if (typeof window.waSendBookingConfirmation === 'function') {
      window.waSendBookingConfirmation({ name, service: svc, date, bookingId }, lang);
    }
  } catch(e) { /* silent — don't break modal if whatsapp.js not loaded */ }
}

function showErrorMessage(message) {
  const isAr = typeof Lang !== 'undefined' && Lang.current === 'ar';
  const msg = isAr
    ? 'حدث خطأ أثناء الإرسال. سيتم التحويل إلى واتساب مباشرة.'
    : 'An error occurred. Redirecting to WhatsApp.';

  // عرض toast أو alert
  showToast(msg, 'error');
}

function showFallbackMessage() {
  const isAr = typeof Lang !== 'undefined' && Lang.current === 'ar';
  const msg = isAr
    ? 'سيتم إرسال طلبك مباشرة عبر واتساب.'
    : 'Your request will be sent via WhatsApp.';
  showToast(msg, 'info');
}

function showToast(message, type = 'info') {
  // إنشاء toast إذا لم يكن موجوداً
  let toast = document.getElementById('bookingToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'bookingToast';
    toast.style.cssText = [
      'position:fixed', 'bottom:100px', 'left:50%', 'transform:translateX(-50%)',
      'padding:14px 28px', 'border-radius:8px', 'font-size:14px',
      'font-weight:500', 'z-index:9999', 'transition:opacity 0.3s',
      'box-shadow:0 4px 20px rgba(0,0,0,0.3)'
    ].join(';');
    document.body.appendChild(toast);
  }

  const colors = {
    error: { bg: '#DC3545', color: '#FFF' },
    info:  { bg: '#C9A84C', color: '#0A0A08' },
    success: { bg: '#28A745', color: '#FFF' }
  };
  const c = colors[type] || colors.info;
  toast.style.background = c.bg;
  toast.style.color = c.color;
  toast.textContent = message;
  toast.style.opacity = '1';

  setTimeout(() => {
    toast.style.opacity = '0';
  }, 4000);
}
