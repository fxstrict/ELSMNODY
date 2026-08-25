/**
 * ELSMNODY BESPOKE — Google Apps Script Backend
 * Phase 8: Google Integration
 *
 * يستقبل بيانات الحجوزات من الموقع ويحفظها في Google Sheets
 * ويرفع الملفات إلى Google Drive ويرسل إيميلات التأكيد
 *
 * SETUP INSTRUCTIONS: اقرأ docs/setup-google.md
 */

// ============================================================
// CONFIGURATION — قم بتعديل هذه القيم بعد الإعداد
// ============================================================
const CONFIG = {
  SPREADSHEET_ID: 'REPLACE_WITH_YOUR_SPREADSHEET_ID',
  SHEET_NAME: 'Bookings',
  DRIVE_FOLDER_ID: 'REPLACE_WITH_YOUR_DRIVE_FOLDER_ID',
  ADMIN_EMAIL: 'REPLACE_WITH_YOUR_EMAIL@gmail.com',
  BRAND_NAME: 'ELSMNODY BESPOKE',
  WHATSAPP_NUMBER: '201555277205'
};

// ============================================================
// MAIN ENTRY POINT
// ============================================================
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const bookingId = saveToSheets(data);
    let fileUrls = {};
    if (data.files && Object.keys(data.files).length > 0) {
      fileUrls = uploadFilesToDrive(data.files, bookingId, data.name);
    }
    sendClientConfirmation(data, bookingId);
    sendAdminNotification(data, bookingId, fileUrls);
    if (Object.keys(fileUrls).length > 0) {
      updateFileLinks(bookingId, fileUrls);
    }
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, bookingId: bookingId, message: 'تم استلام حجزك بنجاح. سنتواصل معك قريباً.' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ELSMNODY BESPOKE API is running', version: '1.0', timestamp: new Date().toISOString() }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ============================================================
// GOOGLE SHEETS
// ============================================================
function saveToSheets(data) {
  const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) { sheet = ss.insertSheet(CONFIG.SHEET_NAME); setupSheetHeaders(sheet); }
  const bookingId = generateBookingId();
  const timestamp = new Date();
  const row = [
    bookingId,
    Utilities.formatDate(timestamp, 'Asia/Riyadh', 'yyyy-MM-dd HH:mm:ss'),
    data.name || '', data.country || '', data.city || '',
    data.whatsapp || '', data.email || '', data.service || '',
    data.preferredDate || '', data.notes || '', data.measurementMethod || '',
    data.measurements?.chest || '', data.measurements?.shoulder || '',
    data.measurements?.waist || '', data.measurements?.hip || '',
    data.measurements?.arm || '', data.measurements?.jacket || '',
    data.measurements?.trouser || '', data.measurements?.neck || '',
    data.customizer?.collar || '', data.customizer?.buttons || '',
    data.customizer?.lining || '', data.customizer?.pocket || '',
    data.customizer?.fabric || '', data.specialRequests || '',
    '', 'New', data.lang || 'ar'
  ];
  sheet.appendRow(row);
  const lastRow = sheet.getLastRow();
  sheet.getRange(lastRow, 1, 1, row.length).setBackground(lastRow % 2 === 0 ? '#F8F5EE' : '#FFFFFF');
  sheet.getRange(lastRow, 27).setBackground('#FFF3CD').setFontColor('#856404');
  return bookingId;
}

function setupSheetHeaders(sheet) {
  const headers = [
    'Booking ID','Date & Time','Full Name','Country','City',
    'WhatsApp','Email','Service Type','Preferred Date','Notes',
    'Measurement Method','Chest (cm)','Shoulder (cm)','Waist (cm)','Hip (cm)',
    'Arm (cm)','Jacket Length (cm)','Trouser Length (cm)','Neck (cm)',
    'Collar Style','Buttons','Lining Color','Pocket Style','Fabric',
    'Special Requests','File Links','Status','Language'
  ];
  sheet.appendRow(headers);
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#0A0A08').setFontColor('#C9A84C').setFontWeight('bold').setFontSize(11);
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 130); sheet.setColumnWidth(2, 160);
  sheet.setColumnWidth(3, 180); sheet.setColumnWidth(26, 250);
}

function updateFileLinks(bookingId, fileUrls) {
  const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  const sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === bookingId) {
      const links = Object.entries(fileUrls).map(([type, url]) => type + ': ' + url).join(' | ');
      sheet.getRange(i + 1, 26).setValue(links);
      break;
    }
  }
}

// ============================================================
// GOOGLE DRIVE
// ============================================================
function uploadFilesToDrive(files, bookingId, clientName) {
  const folder = DriveApp.getFolderById(CONFIG.DRIVE_FOLDER_ID);
  const clientFolder = folder.createFolder(bookingId + ' — ' + clientName);
  const fileUrls = {};
  for (const [fileType, fileData] of Object.entries(files)) {
    try {
      if (!fileData.base64 || !fileData.mimeType || !fileData.name) continue;
      const decoded = Utilities.base64Decode(fileData.base64);
      const blob = Utilities.newBlob(decoded, fileData.mimeType, fileData.name);
      const file = clientFolder.createFile(blob);
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
      fileUrls[fileType] = file.getUrl();
    } catch (err) { Logger.log('Error uploading ' + fileType + ': ' + err.toString()); }
  }
  return fileUrls;
}

// ============================================================
// EMAIL
// ============================================================
function sendClientConfirmation(data, bookingId) {
  if (!data.email) return;
  const isAr = (data.lang || 'ar') === 'ar';
  const subject = isAr
    ? '✅ تم استلام طلب حجزك — ' + CONFIG.BRAND_NAME + ' #' + bookingId
    : '✅ Booking Request Received — ' + CONFIG.BRAND_NAME + ' #' + bookingId;
  const htmlBody = buildClientEmailHtml(data, bookingId, isAr);
  try {
    GmailApp.sendEmail(data.email, subject, '', { htmlBody: htmlBody, name: CONFIG.BRAND_NAME, replyTo: CONFIG.ADMIN_EMAIL });
  } catch (err) { Logger.log('Error sending client email: ' + err.toString()); }
}

function sendAdminNotification(data, bookingId, fileUrls) {
  const subject = '🎩 حجز جديد #' + bookingId + ' — ' + data.name + ' (' + data.country + ')';
  const serviceMap = { 'bespoke': 'Bespoke تفصيل كامل', 'made-to-measure': 'Made-to-Measure', 'corporate': 'Corporate أطقم شركات' };
  const fileSection = Object.keys(fileUrls).length > 0
    ? '<h3 style="color:#C9A84C;">📎 الملفات المرفوعة:</h3><ul>' + Object.entries(fileUrls).map(function(e2){return '<li><a href="'+e2[1]+'">'+e2[0]+'</a></li>';}).join('') + '</ul>'
    : '';
  const wa = (data.whatsapp||'').replace(/\D/g,'');
  const html = '<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="UTF-8"></head><body style="font-family:Arial,sans-serif;background:#0A0A08;color:#F5F0E8;padding:20px;">'
    + '<div style="max-width:600px;margin:0 auto;background:#161612;border:1px solid #C9A84C;border-radius:8px;overflow:hidden;">'
    + '<div style="background:#C9A84C;padding:20px;text-align:center;"><h1 style="color:#0A0A08;margin:0;font-size:20px;">🎩 حجز جديد — ELSMNODY BESPOKE</h1>'
    + '<p style="color:#0A0A08;margin:5px 0;font-size:14px;">Booking ID: <strong>#' + bookingId + '</strong></p></div>'
    + '<div style="padding:25px;"><table style="width:100%;border-collapse:collapse;">'
    + '<tr style="border-bottom:1px solid #2A2A22;"><td style="padding:10px;color:#C9A84C;width:40%;">👤 الاسم:</td><td style="padding:10px;color:#F5F0E8;font-weight:bold;">' + (data.name||'—') + '</td></tr>'
    + '<tr style="border-bottom:1px solid #2A2A22;"><td style="padding:10px;color:#C9A84C;">🌍 الدولة / المدينة:</td><td style="padding:10px;color:#F5F0E8;">' + (data.country||'—') + ' — ' + (data.city||'—') + '</td></tr>'
    + '<tr style="border-bottom:1px solid #2A2A22;"><td style="padding:10px;color:#C9A84C;">📱 واتساب:</td><td style="padding:10px;"><a href="https://wa.me/'+wa+'" style="color:#25D366;text-decoration:none;font-weight:bold;">+' + (data.whatsapp||'—') + '</a></td></tr>'
    + (data.email ? '<tr style="border-bottom:1px solid #2A2A22;"><td style="padding:10px;color:#C9A84C;">📧 الإيميل:</td><td style="padding:10px;color:#F5F0E8;">'+data.email+'</td></tr>' : '')
    + '<tr style="border-bottom:1px solid #2A2A22;"><td style="padding:10px;color:#C9A84C;">💼 الخدمة:</td><td style="padding:10px;color:#F5F0E8;">' + (serviceMap[data.service]||data.service||'—') + '</td></tr>'
    + (data.preferredDate ? '<tr><td style="padding:10px;color:#C9A84C;">📅 الموعد:</td><td style="padding:10px;color:#F5F0E8;">'+data.preferredDate+'</td></tr>' : '')
    + '</table>' + fileSection
    + '<div style="margin-top:20px;text-align:center;">'
    + '<a href="https://wa.me/'+wa+'" style="display:inline-block;background:#25D366;color:#FFF;padding:12px 30px;border-radius:6px;text-decoration:none;font-weight:bold;margin:5px;">💬 فتح واتساب العميل</a>'
    + '<a href="https://docs.google.com/spreadsheets/d/'+CONFIG.SPREADSHEET_ID+'" style="display:inline-block;background:#C9A84C;color:#0A0A08;padding:12px 30px;border-radius:6px;text-decoration:none;font-weight:bold;margin:5px;">📊 فتح Google Sheets</a>'
    + '</div></div><div style="background:#0A0A08;padding:15px;text-align:center;border-top:1px solid #2A2A22;">'
    + '<p style="color:#7A7468;margin:0;font-size:12px;">ELSMNODY BESPOKE — Crafting Presence. Tailoring Influence.</p></div></div></body></html>';
  try {
    GmailApp.sendEmail(CONFIG.ADMIN_EMAIL, subject, '', { htmlBody: html, name: CONFIG.BRAND_NAME + ' — نظام الحجوزات' });
  } catch (err) { Logger.log('Error sending admin notification: ' + err.toString()); }
}

function buildClientEmailHtml(data, bookingId, isAr) {
  const wn = CONFIG.WHATSAPP_NUMBER;
  if (isAr) {
    return '<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="UTF-8"></head>'
      + '<body style="font-family:Arial,sans-serif;background:#F5F0E8;padding:20px;margin:0;">'
      + '<div style="max-width:600px;margin:0 auto;background:#FFF;border-radius:8px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.1);">'
      + '<div style="background:#0A0A08;padding:30px;text-align:center;">'
      + '<h1 style="color:#C9A84C;font-size:24px;margin:0 0 5px;">ELSMNODY BESPOKE</h1>'
      + '<p style="color:#7A7468;margin:0;font-size:13px;letter-spacing:2px;">CRAFTING PRESENCE. TAILORING INFLUENCE.</p></div>'
      + '<div style="background:#C9A84C;height:3px;"></div>'
      + '<div style="padding:35px 30px;">'
      + '<h2 style="color:#0A0A08;font-size:22px;margin:0 0 10px;">✅ تم استلام طلبك بنجاح</h2>'
      + '<p style="color:#555;line-height:1.7;margin:0 0 20px;">عزيزي <strong>' + (data.name||'عميلنا الكريم') + '</strong>،<br>شكراً لثقتك بـ ELSMNODY BESPOKE. تم استلام طلب حجزك وسيتواصل معك فريقنا خلال <strong>24 ساعة</strong>.</p>'
      + '<div style="background:#F8F5EE;border:1px solid #C9A84C;border-radius:6px;padding:15px;text-align:center;margin-bottom:25px;">'
      + '<p style="color:#7A7468;margin:0 0 5px;font-size:12px;letter-spacing:1px;">رقم الحجز</p>'
      + '<p style="color:#0A0A08;font-size:22px;font-weight:bold;margin:0;font-family:monospace;">#' + bookingId + '</p>'
      + '<p style="color:#7A7468;margin:5px 0 0;font-size:11px;">احتفظ بهذا الرقم للمتابعة</p></div>'
      + '<div style="text-align:center;margin-top:25px;">'
      + '<a href="https://wa.me/'+wn+'" style="display:inline-block;background:#25D366;color:#FFF;padding:13px 35px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:15px;">💬 تواصل معنا عبر واتساب</a></div></div>'
      + '<div style="background:#0A0A08;padding:20px;text-align:center;border-top:3px solid #C9A84C;">'
      + '<p style="color:#C9A84C;margin:0 0 5px;font-size:12px;letter-spacing:2px;">ELSMNODY BESPOKE</p>'
      + '<p style="color:#7A7468;margin:0;font-size:11px;">Crafting Presence. Tailoring Influence.</p></div></div></body></html>';
  } else {
    return '<!DOCTYPE html><html dir="ltr" lang="en"><head><meta charset="UTF-8"></head>'
      + '<body style="font-family:Arial,sans-serif;background:#F5F0E8;padding:20px;margin:0;">'
      + '<div style="max-width:600px;margin:0 auto;background:#FFF;border-radius:8px;overflow:hidden;">'
      + '<div style="background:#0A0A08;padding:30px;text-align:center;">'
      + '<h1 style="color:#C9A84C;font-size:24px;margin:0 0 5px;">ELSMNODY BESPOKE</h1>'
      + '<p style="color:#7A7468;margin:0;font-size:13px;letter-spacing:2px;">CRAFTING PRESENCE. TAILORING INFLUENCE.</p></div>'
      + '<div style="background:#C9A84C;height:3px;"></div>'
      + '<div style="padding:35px 30px;">'
      + '<h2 style="color:#0A0A08;font-size:22px;">✅ Booking Request Received</h2>'
      + '<p style="color:#555;line-height:1.7;">Dear <strong>' + (data.name||'Valued Client') + '</strong>,<br>Thank you for choosing ELSMNODY BESPOKE. Our team will contact you within <strong>24 hours</strong>.</p>'
      + '<div style="background:#F8F5EE;border:1px solid #C9A84C;border-radius:6px;padding:15px;text-align:center;margin-bottom:25px;">'
      + '<p style="color:#7A7468;margin:0 0 5px;font-size:12px;letter-spacing:1px;">BOOKING REFERENCE</p>'
      + '<p style="color:#0A0A08;font-size:22px;font-weight:bold;margin:0;font-family:monospace;">#' + bookingId + '</p></div>'
      + '<div style="text-align:center;">'
      + '<a href="https://wa.me/'+wn+'" style="display:inline-block;background:#25D366;color:#FFF;padding:13px 35px;border-radius:6px;text-decoration:none;font-weight:bold;">💬 Contact Us via WhatsApp</a></div></div>'
      + '<div style="background:#0A0A08;padding:20px;text-align:center;border-top:3px solid #C9A84C;">'
      + '<p style="color:#C9A84C;margin:0;font-size:12px;letter-spacing:2px;">ELSMNODY BESPOKE</p></div></div></body></html>';
  }
}

// ============================================================
// HELPERS
// ============================================================
function generateBookingId() {
  const now = new Date();
  const date = Utilities.formatDate(now, 'Asia/Riyadh', 'yyyyMMdd');
  const rand = Math.floor(1000 + Math.random() * 9000);
  return 'EB-' + date + '-' + rand;
}

function setupInitialSheet() {
  const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
  if (!sheet) { sheet = ss.insertSheet(CONFIG.SHEET_NAME); } else { sheet.clear(); }
  setupSheetHeaders(sheet);
  Logger.log('✅ Sheet setup complete!');
}

function testConnection() {
  Logger.log('Testing Google Sheets connection...');
  const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  Logger.log('✅ Spreadsheet found: ' + ss.getName());
  Logger.log('Testing Google Drive connection...');
  const folder = DriveApp.getFolderById(CONFIG.DRIVE_FOLDER_ID);
  Logger.log('✅ Drive folder found: ' + folder.getName());
  Logger.log('✅ All connections successful!');
}
