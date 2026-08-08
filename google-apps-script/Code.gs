const SHEET_NAME = 'KetQua';
const EXAM_CODE = 'PTML-15P';
const ANSWERS = [1,2,1,2,1,2,2,1,1,2,1,0,1,1,1];

function doGet() {
  return json_({ok:true, service:'quiz-submit', examCode:EXAM_CODE});
}

function doPost(e) {
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || '{}');
    const name = String(data.name || '').trim();
    const className = String(data.className || '').trim();
    const answers = Array.isArray(data.answers) ? data.answers : [];
    const startedAt = String(data.startedAt || '');
    const autoSubmit = !!data.autoSubmit;

    if (!name || !className) throw new Error('Vui lòng nhập Họ tên và Lớp.');
    if (answers.length !== ANSWERS.length) throw new Error('Dữ liệu bài làm không hợp lệ.');

    let correct = 0;
    ANSWERS.forEach((answer, i) => { if (Number(answers[i]) === answer) correct++; });
    const score = Math.round(correct * 10 / ANSWERS.length * 100) / 100;
    const duration = startedAt ? formatDuration_(Date.now() - new Date(startedAt).getTime()) : '';

    const ss = getSpreadsheet_();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    ensureHeader_(sheet);
    sheet.appendRow([new Date(), name, className, EXAM_CODE, score, correct, ANSWERS.length, duration, autoSubmit ? 'Có' : 'Không']);

    return json_({ok:true, score:score, correct:correct, total:ANSWERS.length});
  } catch (err) {
    return json_({ok:false, error:String(err.message || err)});
  }
}

function getSpreadsheet_() {
  const props = PropertiesService.getScriptProperties();
  const id = String(props.getProperty('SPREADSHEET_ID') || '').trim();
  if (id) return SpreadsheetApp.openById(id);

  // Nếu Code.gs là script liên kết trực tiếp với Google Sheet,
  // tự lấy file đang liên kết và lưu ID để các lần sau dùng lại.
  const active = SpreadsheetApp.getActiveSpreadsheet();
  if (active) {
    props.setProperty('SPREADSHEET_ID', active.getId());
    return active;
  }

  throw new Error('Chưa liên kết Google Sheet. Hãy mở Apps Script từ Google Sheet và chạy setupSheet() một lần.');
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp','Họ tên','Lớp','Mã đề','Điểm','Số câu đúng','Tổng số câu','Thời gian làm','Tự động nộp']);
    sheet.setFrozenRows(1);
    sheet.getRange(1,1,1,9).setFontWeight('bold');
  }
}

function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('Hãy mở Apps Script từ Google Sheet này rồi chạy lại setupSheet().');
  PropertiesService.getScriptProperties().setProperty('SPREADSHEET_ID', ss.getId());
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp','Họ tên','Lớp','Mã đề','Điểm','Số câu đúng','Tổng số câu','Thời gian làm','Tự động nộp']);
  }
  sheet.setFrozenRows(1);
  sheet.getRange(1,1,1,9).setFontWeight('bold');
  sheet.autoResizeColumns(1,9);
}

function formatDuration_(ms) {
  if (!isFinite(ms) || ms < 0) return '';
  const sec = Math.floor(ms / 1000);
  return Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2,'0');
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
