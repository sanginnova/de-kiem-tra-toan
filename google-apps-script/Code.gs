const SHEET_NAME = 'KetQua';

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ok:true, service:'quiz-submit'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const ss = SpreadsheetApp.openById(data.spreadsheetId || PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID'));
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp','Họ tên','Lớp','Mã đề','Điểm','Số câu đúng','Tổng số câu','Thời gian nộp','Tự động nộp','Chi tiết']);
    }

    const required = ['name','className','score','correct','total','duration','autoSubmit'];
    required.forEach(k => { if (data[k] === undefined || data[k] === null) throw new Error('Thiếu dữ liệu: ' + k); });

    sheet.appendRow([
      new Date(),
      String(data.name).trim(),
      String(data.className).trim(),
      String(data.examCode || 'PTML-15P'),
      Number(data.score),
      Number(data.correct),
      Number(data.total),
      String(data.duration),
      data.autoSubmit ? 'Có' : 'Không',
      JSON.stringify(data.answers || {})
    ]);

    return json_({ok:true, message:'Đã ghi kết quả'});
  } catch (err) {
    return json_({ok:false, error:String(err.message || err)});
  }
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  sheet.clear();
  sheet.appendRow(['Timestamp','Họ tên','Lớp','Mã đề','Điểm','Số câu đúng','Tổng số câu','Thời gian nộp','Tự động nộp','Chi tiết']);
  sheet.setFrozenRows(1);
  sheet.getRange(1,1,1,10).setFontWeight('bold');
  sheet.autoResizeColumns(1,10);
}
