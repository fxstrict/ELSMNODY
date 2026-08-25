# إعداد Google Integration — ELSMNODY BESPOKE
## Phase 8: دليل الإعداد الكامل

---

## ما ستحتاجه
- حساب Google (Gmail)
- متصفح Chrome

---

## الخطوة 1: إنشاء Google Sheet

1. افتح [Google Sheets](https://sheets.google.com)
2. أنشئ ملفاً جديداً واسمه: **ELSMNODY BESPOKE — Bookings**
3. من الرابط، انسخ الـ **Spreadsheet ID**:
   ```
   https://docs.google.com/spreadsheets/d/[SPREADSHEET_ID]/edit
   ```

---

## الخطوة 2: إنشاء مجلد Google Drive

1. افتح [Google Drive](https://drive.google.com)
2. أنشئ مجلداً جديداً: **ELSMNODY — Client Files**
3. افتح المجلد، من الرابط انسخ الـ **Folder ID**:
   ```
   https://drive.google.com/drive/folders/[FOLDER_ID]
   ```

---

## الخطوة 3: نشر Google Apps Script

1. افتح [script.google.com](https://script.google.com)
2. انقر **New project** — سمِّه: **ELSMNODY BESPOKE API**
3. احذف المحتوى الافتراضي
4. انسخ محتوى ملف `google-apps-script/Code.gs` والصقه
5. في بداية الملف، عدّل الـ CONFIG:

```javascript
const CONFIG = {
  SPREADSHEET_ID: 'ID من الخطوة 1',
  SHEET_NAME: 'Bookings',
  DRIVE_FOLDER_ID: 'ID من الخطوة 2',
  ADMIN_EMAIL: 'بريدك@gmail.com',
  BRAND_NAME: 'ELSMNODY BESPOKE',
  WHATSAPP_NUMBER: '201XXXXXXXXX'  // رقمك بالكود الدولي بدون +
};
```

6. احفظ: **Ctrl+S**

---

## الخطوة 4: إعداد الجدول (مرة واحدة)

1. في Apps Script، اختر الدالة **setupInitialSheet** من القائمة المنسدلة
2. اضغط **Run ▶**
3. اقبل الصلاحيات المطلوبة
4. ستجد الجدول جاهزاً في Google Sheets

---

## الخطوة 5: نشر كـ Web App

1. في Apps Script: **Deploy → New deployment**
2. اختر نوع: **Web app**
3. الإعدادات:
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
4. اضغط **Deploy**
5. انسخ الـ **Web App URL** — يبدو هكذا:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

---

## الخطوة 6: تحديث الموقع

افتح `js/booking-api.js` وعدّل:

```javascript
const BOOKING_API = {
  SCRIPT_URL: 'الـ URL من الخطوة 5',
  // ...
};
```

وفي `js/booking.js` عدّل رقم الواتساب:
```javascript
const waNumber = '201XXXXXXXXX';
```

---

## الخطوة 7: اختبار

1. في Apps Script، شغّل دالة **testConnection** للتحقق من الاتصال
2. افتح `contact.html` في المتصفح
3. أكمل الفورم وأرسله
4. تحقق من Google Sheets — يجب أن يظهر الحجز فوراً

---

## الصلاحيات المطلوبة

عند أول تشغيل، Google ستطلب إذناً لـ:
- ✅ قراءة وكتابة Google Sheets
- ✅ رفع ملفات إلى Google Drive
- ✅ إرسال إيميلات عبر Gmail

هذه صلاحيات آمنة وضرورية للنظام.

---

## هيكل Google Sheets

| العمود | المحتوى |
|--------|----------|
| A | Booking ID (EB-YYYYMMDD-XXXX) |
| B | Date & Time |
| C | Full Name |
| D | Country |
| E | City |
| F | WhatsApp |
| G | Email |
| H | Service Type |
| I | Preferred Date |
| J | Notes |
| K | Measurement Method |
| L-S | Measurements (8 fields) |
| T-X | Customizer (5 fields) |
| Y | Special Requests |
| Z | File Links (Drive URLs) |
| AA | Status (New/Contacted/Done) |
| AB | Language (ar/en) |

---

## استكشاف الأخطاء

**المشكلة:** لا يظهر حجز في Sheets
- تحقق من الـ SPREADSHEET_ID في CONFIG
- تحقق من صلاحيات النشر (Anyone)
- شغّل testConnection() في Apps Script

**المشكلة:** لا يصل إيميل
- تحقق من ADMIN_EMAIL
- تحقق من صندوق Spam

**المشكلة:** خطأ CORS
- Google Apps Script يعمل بـ `mode: 'no-cors'` — هذا طبيعي
- الـ response لن تكون قابلة للقراءة من المتصفح لكن البيانات تُحفظ

---

*ELSMNODY BESPOKE | Crafting Presence. Tailoring Influence.*
