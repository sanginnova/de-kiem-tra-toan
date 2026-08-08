# Google Sheets + Apps Script

## 1. Tạo Google Sheets
Tạo một Google Sheet mới, tạo sheet tên `KetQua`.

Các cột sẽ được Apps Script tạo tự động:
`Timestamp | Họ tên | Lớp | Mã đề | Điểm | Số câu đúng | Tổng số câu | Thời gian nộp | Tự động nộp | Chi tiết`

## 2. Tạo Apps Script
Trong Google Sheets chọn Extensions → Apps Script.
Mở file `Code.gs` trong thư mục này và dán toàn bộ mã vào Apps Script.

## 3. Deploy Web App
Chọn Deploy → New deployment → Web app.
- Execute as: Me
- Who has access: Anyone

Copy URL Web App.

## 4. Kết nối HTML
Trong HTML đặt URL Web App vào biến `GOOGLE_SCRIPT_URL`.
HTML gửi POST JSON gồm: name, className, examCode, score, correct, total, duration, autoSubmit, answers.

## 5. Lưu ý bảo mật
Không gửi mật khẩu hoặc dữ liệu nhạy cảm trong HTML. Vì HTML phía học sinh có thể bị chỉnh sửa, điểm gửi từ client chỉ nên dùng cho kiểm tra thông thường. Nếu cần chống gian lận/chống sửa điểm, nên chấm đáp án ở server bằng Apps Script thay vì gửi điểm đã tính từ HTML.
