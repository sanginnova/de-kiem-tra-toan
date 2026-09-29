/**
 * script-60p-b2.js
 * Hệ thống Đề Kiểm Tra 60 Phút: Hệ Bất Phương Trình Bậc Nhất Hai Ẩn - Toán 10 (B2.1 - B2.5)
 * Bộ môn Toán THPT - ThS. Nguyễn Văn Sang
 */

const EXAM_THEORY = {
  "sections": [
    {
      "id": "lt1",
      "title": "1. Khái niệm Hệ bất phương trình bậc nhất hai ẩn",
      "content": "\n              <p>• <b>Hệ bất phương trình bậc nhất hai ẩn</b> $x, y$ là một hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn $x, y$.</p>\n              <p>• <b>Dạng tổng quát:</b></p>\n              <p style=\"text-align:center; margin:8px 0; font-size:1.08rem;\">\n                $\\left\\{ \\begin{array}{l} a_1 x + b_1 y \\le c_1 \\\\ a_2 x + b_2 y \\le c_2 \\\\ \\dots \\\\ a_k x + b_k y \\le c_k \\end{array} \\right.$ &nbsp;&nbsp;(dấu $\\le$ có thể thay bởi $<$, $\\ge$, $>$)\n              </p>\n              <p>• <b>Nghiệm của hệ:</b> Mỗi cặp số $(x_0; y_0)$ đồng thời là nghiệm của <i>tất cả</i> các bất phương trình trong hệ được gọi là một <b>nghiệm</b> của hệ bất phương trình đó.</p>\n              <p>• <b>Miền nghiệm của hệ:</b> Là tập hợp các điểm $M(x_0; y_0)$ trong mặt phẳng toạ độ $Oxy$ sao cho $(x_0; y_0)$ là nghiệm của hệ bất phương trình. Miền nghiệm của hệ chính là <b>phần giao</b> các miền nghiệm của các bất phương trình thành phần.</p>\n            "
    },
    {
      "id": "lt2",
      "title": "2. Biểu diễn hình học miền nghiệm của Hệ BPT trên mặt phẳng Oxy",
      "content": "\n              <p>Để biểu diễn miền nghiệm của hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng toạ độ $Oxy$, ta thực hiện theo 2 bước quy chuẩn sau:</p>\n              <table style=\"width:100%; border-collapse:collapse; margin-top:10px; border:1px solid var(--border-color);\">\n                <thead>\n                  <tr style=\"background:var(--bg-subtle);\">\n                    <th style=\"padding:10px; border:1px solid var(--border-color); width:15%;\">Thứ tự</th>\n                    <th style=\"padding:10px; border:1px solid var(--border-color); width:50%;\">Nội dung thực hiện</th>\n                    <th style=\"padding:10px; border:1px solid var(--border-color); width:35%; text-align:center;\">Hình vẽ minh hoạ</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td style=\"padding:10px; border:1px solid var(--border-color); font-weight:700;\">Bước 1</td>\n                    <td style=\"padding:10px; border:1px solid var(--border-color);\">\n                      Vẽ các đường thẳng bờ tương ứng trên cùng một hệ trục toạ độ $Oxy$:<br>\n                      • $d_1: a_1 x + b_1 y = c_1$<br>\n                      • $d_2: a_2 x + b_2 y = c_2$<br>\n                      • $d_3: a_3 x + b_3 y = c_3$\n                    </td>\n                    <td style=\"padding:10px; border:1px solid var(--border-color); text-align:center;\">\n                      <img src=\"images_b2/theory_step1.png\" alt=\"Bước 1\" style=\"max-width:100%; height:auto; border-radius:6px;\">\n                    </td>\n                  </tr>\n                  <tr>\n                    <td style=\"padding:10px; border:1px solid var(--border-color); font-weight:700;\">Bước 2</td>\n                    <td style=\"padding:10px; border:1px solid var(--border-color);\">\n                      Biểu diễn miền nghiệm của từng bất phương trình bằng cách <b>gạch bỏ</b> nửa mặt phẳng không thuộc miền nghiệm của nó.<br>\n                      <i>(Xác định bằng cách lấy điểm thử thông thường là gốc toạ độ $O(0; 0)$ nếu đường thẳng không đi qua $O$).</i><br><br>\n                      <b>Kết luận:</b> Phần mặt phẳng <b>không bị gạch</b> (kể cả bờ hoặc không kể bờ tuỳ theo dấu của hệ) chính là miền nghiệm cần tìm.\n                    </td>\n                    <td style=\"padding:10px; border:1px solid var(--border-color); text-align:center;\">\n                      <img src=\"images_b2/theory_step2.png\" alt=\"Bước 2\" style=\"max-width:100%; height:auto; border-radius:6px;\">\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            "
    },
    {
      "id": "lt3",
      "title": "3. Ứng dụng tìm Giá trị lớn nhất / nhỏ nhất (Bài toán quy hoạch tuyến tính)",
      "content": "\n              <p>• <b>Định lý cơ bản về cực trị quy hoạch tuyến tính:</b> Biểu thức bậc nhất $F(x; y) = ax + by$ ($a, b$ là các hằng số không đồng thời bằng 0) đạt giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) trên một miền đa giác $A_1 A_2 \\dots A_n$ (kể cả biên) tại <b>một trong các đỉnh</b> của đa giác đó.</p>\n              <p>• <b>Thuật toán 3 bước tìm GTLN / GTNN của $F(x; y)$:</b></p>\n              <ol style=\"padding-left:22px; margin-top:6px; line-height:1.7;\">\n                <li><b>Bước 1:</b> Xác định miền đa giác nghiệm $S$ của hệ bất phương trình điều kiện.</li>\n                <li><b>Bước 2:</b> Tìm toạ độ tất cả các đỉnh $A_1, A_2, \\dots, A_n$ của đa giác $S$ (bằng cách giải các hệ phương trình hai đường thẳng giao nhau).</li>\n                <li><b>Bước 3:</b> Tính các giá trị $F(A_1), F(A_2), \\dots, F(A_n)$. Số lớn nhất trong các giá trị này là GTLN của $F$, số nhỏ nhất là GTNN của $F$.</li>\n              </ol>\n            "
    }
  ],
  "examples": [
    {
      "num": 1,
      "title": "Ví dụ 1: Điểm thuộc miền nghiệm & tìm số giá trị nguyên của tham số",
      "prompt": "Cho điểm $(x; y) = (m; -1)$ thuộc miền nghiệm của hệ bất phương trình $\\begin{cases} x + y - 2 > 0 \\\\ 2x - y - 51 \\le 0 \\end{cases}$. Có bao nhiêu giá trị nguyên của tham số $m$?",
      "ans": "22",
      "solution": "\n              <p>Thay $(x; y) = (m; -1)$ vào hệ bất phương trình ta có:</p>\n              $$\\begin{cases} m - 1 - 2 > 0 \\\\ 2m - (-1) - 51 \\le 0 \\end{cases} \\iff \\begin{cases} m > 3 \\\\ 2m \\le 50 \\end{cases} \\iff \\begin{cases} m > 3 \\\\ m \\le 25 \\end{cases} \\iff 3 < m \\le 25$$\n              <p>Vì $m \\in \\mathbb{Z} \\implies m \\in \\{4; 5; 6; \\dots; 25\\}$.</p>\n              <p>Số giá trị nguyên của $m$ là: $25 - 4 + 1 = 22$ giá trị. <b>Đáp số: 22</b>.</p>\n            "
    },
    {
      "num": 2,
      "title": "Ví dụ 2: Tìm giá trị nhỏ nhất của biểu thức F = 3x + 2y trên miền tứ giác",
      "prompt": "Tìm giá trị nhỏ nhất của biểu thức $F = 3x + 2y$ biết $(x; y)$ thỏa mãn hệ bất phương trình: $\\begin{cases} 2x + y \\ge 14 \\\\ 2x + 5y \\ge 30 \\\\ 0 \\le x \\le 10 \\\\ 0 \\le y \\le 9 \\end{cases}$.",
      "ans": "23",
      "solution": "\n              <p>Miền nghiệm của hệ là miền tứ giác $ABCD$ (kể cả các cạnh), với toạ độ các đỉnh:</p>\n              <p>• $A(5; 4)$ &nbsp;&nbsp;• $B(10; 2)$ &nbsp;&nbsp;• $C(10; 9)$ &nbsp;&nbsp;• $D\\left(\\dfrac{5}{2}; 9\\right)$.</p>\n              <p>Tính giá trị của $F = 3x + 2y$ tại các đỉnh:</p>\n              <ul>\n                <li>Tại $A(5; 4)$: $F(A) = 3(5) + 2(4) = 15 + 8 = 23$.</li>\n                <li>Tại $B(10; 2)$: $F(B) = 3(10) + 2(2) = 30 + 4 = 34$.</li>\n                <li>Tại $C(10; 9)$: $F(C) = 3(10) + 2(9) = 30 + 18 = 48$.</li>\n                <li>Tại $D\\left(\\dfrac{5}{2}; 9\\right)$: $F(D) = 3\\left(\\dfrac{5}{2}\\right) + 2(9) = \\dfrac{15}{2} + 18 = \\dfrac{51}{2} = 25{,}5$.</li>\n              </ul>\n              <p>Vậy giá trị nhỏ nhất của biểu thức là $F_{\\min} = 23$ tại $(x; y) = (5; 4)$. <b>Đáp số: 23</b>.</p>\n            "
    },
    {
      "num": 3,
      "title": "Ví dụ 3: Bài toán tối ưu hóa nông nghiệp bác Hai (Trồng bắp & Cà chua)",
      "prompt": "Bác Hai có mảnh đất 6 ha, dự tính trồng bắp và cà chua. Trồng bắp cần 10 công/ha thu 30 triệu/ha; trồng cà chua cần 20 công/ha thu 50 triệu/ha. Tổng số công không quá 100 ngày. Hỏi số tiền nhiều nhất bác Hai có thể thu được là bao nhiêu triệu đồng?",
      "ans": "260",
      "solution": "\n              <p>Gọi $x, y$ (ha) lần lượt là diện tích trồng bắp và cà chua ($x, y \\ge 0$).</p>\n              <p>Hệ bất phương trình điều kiện: $\\begin{cases} x \\ge 0, y \\ge 0 \\\\ x + y \\le 6 \\\\ 10x + 20y \\le 100 \\iff x + 2y \\le 10 \\end{cases}$</p>\n              <p>Miền nghiệm là miền tứ giác $OABC$ với các đỉnh: $O(0; 0)$, $A(6; 0)$, $B(2; 4)$ (giao điểm của $x + y = 6$ và $x + 2y = 10$), $C(0; 5)$.</p>\n              <p>Số tiền thu được là $F(x; y) = 30x + 50y$ (triệu đồng):</p>\n              <p>• $F(O) = 0$ &nbsp;&nbsp;• $F(A) = 30(6) = 180$ &nbsp;&nbsp;• $F(B) = 30(2) + 50(4) = 260$ &nbsp;&nbsp;• $F(C) = 50(5) = 250$.</p>\n              <p>Vậy số tiền nhiều nhất thu được là <b>260 triệu đồng</b> khi trồng $2\\text{ ha}$ bắp và $4\\text{ ha}$ cà chua.</p>\n            "
    },
    {
      "num": 4,
      "title": "Ví dụ 4: Bài toán tối ưu hóa xưởng mộc (Sản xuất bàn và ghế)",
      "prompt": "Một xưởng sản xuất bàn và ghế. Lắp ráp: 1 bàn cần 1,5h, 1 ghế cần 1h (tối đa 3 công nhân x 8h = 24h). Hoàn thiện: 1 bàn cần 1h, 1 ghế cần 2h (tối đa 4 công nhân x 8h = 32h). Số ghế không quá 3,5 lần số bàn ($y \\le 3{,}5x$). Lợi nhuận: bàn lãi 600 nghìn, ghế lãi 450 nghìn. Tìm lợi nhuận cao nhất.",
      "ans": "9000",
      "solution": "\n              <p>Gọi $x, y$ ($x, y \\in \\mathbb{N}$) lần lượt là số bàn và ghế sản xuất mỗi ngày.</p>\n              <p>Hệ BPT điều kiện: $\\begin{cases} 1{,}5x + y \\le 24 \\\\ x + 2y \\le 32 \\\\ 3{,}5x - y \\ge 0 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$</p>\n              <p>Miền nghiệm là miền tứ giác $OABC$ với các đỉnh: $O(0; 0)$, $A(4; 14)$, $B(8; 12)$, $C(16; 0)$.</p>\n              <p>Lợi nhuận $F(x; y) = 600x + 450y$ (nghìn đồng):</p>\n              <p>• $F(O) = 0$ &nbsp;&nbsp;• $F(A) = 600(4) + 450(14) = 8700$ &nbsp;&nbsp;• $F(B) = 600(8) + 450(12) = 4800 + 5400 = 10\\,200$ nghìn đồng.</p>\n              <p>Lợi nhuận lớn nhất đạt được là $10{,}2$ triệu đồng ($10\\,200$ nghìn đồng) khi sản xuất $8$ chiếc bàn và $12$ chiếc ghế.</p>\n            "
    }
  ]
};
const EXAM_QUESTIONS = [
  {
    "id": 1,
    "part": "part1",
    "level": "Nhận biết",
    "prompt": "Cặp số $(x; y)$ nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases} 2x - y \\ge 4 \\\\ x - y + 1 < 0 \\end{cases}$?",
    "options": [
      "$(5; 6)$",
      "$(6; 8)$",
      "$(1; 4)$",
      "$(-3; 1)$"
    ],
    "correctIndex": 1,
    "fourCols": true,
    "img": null,
    "explanation": "<strong>Chọn B.</strong><br>Thay lần lượt các cặp số vào hệ bất phương trình:<br>• Với $(5; 6)$: $2(5) - 6 = 4 \\ge 4$ (Đúng), nhưng $5 - 6 + 1 = 0 < 0$ (Sai).<br>• Với $(6; 8)$: $2(6) - 8 = 4 \\ge 4$ (Đúng) và $6 - 8 + 1 = -1 < 0$ (Đúng). Do đó $(6; 8)$ là nghiệm của hệ."
  },
  {
    "id": 2,
    "part": "part1",
    "level": "Nhận biết",
    "prompt": "Hệ bất phương trình nào sau đây là <strong>hệ bất phương trình bậc nhất hai ẩn</strong>?",
    "options": [
      "$\\begin{cases} x^2 + y^2 > 4 \\\\ 4x + y \\le 10 \\end{cases}$",
      "$\\begin{cases} x + 7y \\ge 9 \\\\ \\dfrac{2}{x} - y \\le 5 \\end{cases}$",
      "$\\begin{cases} x + y^2 > 4 \\\\ 3x + 2y \\le 6 \\end{cases}$",
      "$\\begin{cases} 3x + 7y \\le 11 \\\\ 5x - y < 5 \\end{cases}$"
    ],
    "correctIndex": 3,
    "fourCols": false,
    "img": null,
    "explanation": "<strong>Chọn D.</strong><br>Hệ bất phương trình bậc nhất hai ẩn là hệ gồm từ hai bất phương trình bậc nhất hai ẩn trở lên. Hệ ở phương án D gồm hai bất phương trình $3x + 7y \\le 11$ và $5x - y < 5$ đều là bất phương trình bậc nhất hai ẩn $x, y$. Các phương án A, B, C đều chứa ẩn bậc hai ($x^2, y^2$) hoặc ẩn ở mẫu số ($\\frac{2}{x}$)."
  },
  {
    "id": 3,
    "part": "part1",
    "level": "Nhận biết",
    "prompt": "Hệ bất phương trình bậc nhất hai ẩn $x, y$ là:",
    "options": [
      "$\\begin{cases} 3x - y^2 + 5 < 0 \\\\ 2x - y + 3 \\ge 0 \\end{cases}$",
      "$\\begin{cases} 4x - 3y - 1 \\ge 0 \\\\ 2x - y + 4 < 0 \\end{cases}$",
      "$\\begin{cases} xz + 3y - 6 < 0 \\\\ 2xy + yz^3 + 4 > 0 \\end{cases}$",
      "$\\begin{cases} x + 3xy - 5 < 0 \\\\ 2x + y - 3 < 0 \\end{cases}$"
    ],
    "correctIndex": 1,
    "fourCols": false,
    "img": null,
    "explanation": "<strong>Chọn B.</strong><br>Phương án B là hệ gồm 2 bất phương trình bậc nhất hai ẩn $x, y$. Phương án A có $y^2$; Phương án C có 3 ẩn $x, y, z$ và tích $xy, yz^3$; Phương án D có tích $xy$ (bậc hai)."
  },
  {
    "id": 4,
    "part": "part1",
    "level": "Thông hiểu",
    "type": "dang1_q4",
    "prompt": "Biểu diễn hình học miền nghiệm hệ bất phương trình $\\begin{cases} 2x - y + 2 \\le 0 \\\\ 2x + 3y - 6 \\le 0 \\end{cases}$ là (phần không bị gạch):",
    "diagrams": [
      [
        "A",
        "images_b2/xref_33.png",
        "Hình 1"
      ],
      [
        "B",
        "images_b2/xref_40.png",
        "Hình 2"
      ],
      [
        "C",
        "images_b2/xref_29.png",
        "Hình 3"
      ],
      [
        "D",
        "images_b2/xref_36.png",
        "Hình 4"
      ]
    ],
    "correctIndex": 2,
    "explanation": "<strong>Chọn C (Hình 3).</strong><br>• Đường thẳng $d_1: 2x - y + 2 = 0$ đi qua $(-1; 0)$ và $(0; 2)$. Thay $O(0; 0)$ vào ta có $2 \\le 0$ (Sai) nên gạch nửa mặt phẳng chứa $O$.<br>• Đường thẳng $d_2: 2x + 3y - 6 = 0$ đi qua $(3; 0)$ và $(0; 2)$. Thay $O(0; 0)$ vào ta có $-6 \\le 0$ (Đúng) nên giữ lại nửa mặt phẳng chứa $O$.<br>Đối chiếu 4 hình vẽ, Hình 3 thể hiện đúng miền nghiệm không bị gạch."
  },
  {
    "id": 5,
    "part": "part1",
    "level": "Thông hiểu",
    "prompt": "Cặp số nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases} 2x + 3y + 4 > 0 \\\\ x - 2y + 3 \\le 0 \\end{cases}$?",
    "options": [
      "$(1; 1)$",
      "$(3; 1)$",
      "$(-2; -1)$",
      "$(-2; 1)$"
    ],
    "correctIndex": 3,
    "fourCols": true,
    "img": null,
    "explanation": "<strong>Chọn D.</strong><br>Thay cặp số $(-2; 1)$ vào hệ:<br>• $2(-2) + 3(1) + 4 = 3 > 0$ (Thỏa mãn)<br>• $-2 - 2(1) + 3 = -1 \\le 0$ (Thỏa mãn)<br>Vậy $(-2; 1)$ là nghiệm của hệ bất phương trình."
  },
  {
    "id": 6,
    "part": "part1",
    "level": "Thông hiểu",
    "prompt": "Cặp số nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases} -4x + y - 4 < 0 \\\\ 3x - 2y - 2 > 0 \\\\ x + 3y + 3 < 0 \\end{cases}$?",
    "options": [
      "$(1; 2)$",
      "$(4; -4)$",
      "$(-3; -7)$",
      "$(2; 1)$"
    ],
    "correctIndex": 1,
    "fourCols": true,
    "img": null,
    "explanation": "<strong>Chọn B.</strong><br>Thay cặp số $(4; -4)$ vào hệ:<br>• $-4(4) + (-4) - 4 = -24 < 0$ (Đúng)<br>• $3(4) - 2(-4) - 2 = 18 > 0$ (Đúng)<br>• $4 + 3(-4) + 3 = -5 < 0$ (Đúng)<br>Cả ba bất phương trình đều thỏa mãn nên $(4; -4)$ là nghiệm."
  },
  {
    "id": 7,
    "part": "part1",
    "level": "Thông hiểu",
    "prompt": "Phần không được tô màu trong hình vẽ sau đây là miền nghiệm của hệ bất phương trình nào?",
    "options": [
      "$\\begin{cases} 2x - y + 1 < 0 \\\\ 3x + y - 6 > 0 \\end{cases}$",
      "$\\begin{cases} 2x - y + 1 > 0 \\\\ 3x + y - 6 \\ge 0 \\end{cases}$",
      "$\\begin{cases} 2x - y + 1 < 0 \\\\ 3x + y - 6 < 0 \\end{cases}$",
      "$\\begin{cases} 2x - y + 1 > 0 \\\\ 3x + y - 6 < 0 \\end{cases}$"
    ],
    "correctIndex": 3,
    "fourCols": false,
    "img": "images_b2/xref_47.png",
    "explanation": "<strong>Chọn D.</strong><br>• Hai đường thẳng biên là $d_1: 2x - y + 1 = 0$ và $d_2: 3x + y - 6 = 0$ (được vẽ bằng nét đứt nên dấu bất phương trình là ngặt $<, >$).<br>• Miền không tô màu chứa gốc toạ độ $O(0; 0)$. Thay $(0; 0)$ vào:<br>$2(0) - 0 + 1 = 1 > 0$ và $3(0) + 0 - 6 = -6 < 0$.<br>Do đó hệ bất phương trình tương ứng là $\\begin{cases} 2x - y + 1 > 0 \\\\ 3x + y - 6 < 0 \\end{cases}$."
  },
  {
    "id": 8,
    "part": "part1",
    "level": "Thông hiểu",
    "prompt": "Miền không bị gạch chéo là miền nghiệm của hệ bất phương trình nào dưới đây?",
    "options": [
      "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x - y \\le 4 \\end{cases}$",
      "$\\begin{cases} x \\le 0 \\\\ y \\ge 0 \\\\ 2x + y \\le 4 \\end{cases}$",
      "$\\begin{cases} x \\ge 0 \\\\ y \\le 0 \\\\ 2x - y \\le 4 \\end{cases}$",
      "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + y \\le 4 \\end{cases}$"
    ],
    "correctIndex": 3,
    "fourCols": false,
    "img": "images_b2/xref_52.png",
    "explanation": "<strong>Chọn D.</strong><br>• Miền không bị gạch nằm ở góc phần tư thứ nhất nên $x \\ge 0, y \\ge 0$.<br>• Đường thẳng đi qua $(2; 0)$ và $(0; 4)$ có phương trình $2x + y = 4$.<br>• Gốc toạ độ $O(0; 0)$ thuộc miền nghiệm: $2(0) + 0 = 0 \\le 4$ (Đúng). Do đó hệ là $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + y \\le 4 \\end{cases}$."
  },
  {
    "id": 9,
    "part": "part1",
    "level": "Vận dụng",
    "prompt": "Một hộ nông dân dự định trồng cà phê và tiêu trên diện tích $8\\text{ ha}$. Nếu trồng cà phê thì cần $20$ công và thu $120$ triệu đồng trên mỗi ha, nếu trồng tiêu thì cần $30$ công và thu $170$ triệu đồng trên mỗi ha. Hỏi cần trồng mỗi loại cây trên với diện tích là bao nhiêu để thu về số tiền lớn nhất, biết rằng tổng số công không quá $180$?",
    "options": [
      "$8\\text{ ha}$ cà phê",
      "$6\\text{ ha}$ cà phê và $2\\text{ ha}$ tiêu",
      "$7\\text{ ha}$ cà phê và $1\\text{ ha}$ tiêu",
      "$4\\text{ ha}$ cà phê và $3\\text{ ha}$ tiêu"
    ],
    "correctIndex": 1,
    "fourCols": false,
    "img": "images_b2/xref_59.png",
    "explanation": "<strong>Chọn B.</strong><br>Gọi $x, y$ (ha) lần lượt là diện tích trồng cà phê và tiêu ($x, y \\ge 0$). Ta có hệ ràng buộc: $\\begin{cases} x + y \\le 8 \\\\ 20x + 30y \\le 180 \\iff 2x + 3y \\le 18 \\end{cases}$<br>Số tiền thu được: $T(x; y) = 120x + 170y$ (triệu đồng).<br>Các đỉnh của miền tứ giác: $O(0; 0)$, $A(8; 0)$, $B(6; 2)$ (giao điểm $x+y=8$ và $2x+3y=18$), $C(0; 6)$.<br>Tính giá trị: $T(8; 0) = 960$; $T(0; 6) = 1020$; $T(6; 2) = 120(6) + 170(2) = 720 + 340 = 1060$ triệu đồng.<br>Vậy trồng 6 ha cà phê và 2 ha tiêu cho số tiền lớn nhất là $1060$ triệu đồng."
  },
  {
    "id": 10,
    "part": "part1",
    "level": "Vận dụng",
    "prompt": "Biểu diễn miền nghiệm của hệ bất phương trình $\\begin{cases} 2x + 3y - 6 \\le 0 \\\\ x \\ge 0 \\\\ 2x - 3y - 1 \\le 0 \\end{cases}$ thu được một đa giác. Tính diện tích đa giác đó.",
    "options": [
      "$2$",
      "$\\dfrac{49}{24}$",
      "$\\dfrac{25}{12}$",
      "$3$"
    ],
    "correctIndex": 1,
    "fourCols": true,
    "img": null,
    "explanation": "<strong>Chọn B.</strong><br>Đa giác miền nghiệm là một tam giác giới hạn bởi trục tung $x = 0$ và hai đường thẳng $d_1: 2x + 3y = 6$, $d_2: 2x - 3y = 1$.<br>• Giao của $d_1$ với trục tung: $A(0; 2)$.<br>• Giao của $d_2$ với trục tung: $B\\left(0; -\\dfrac{1}{3}\\right)$. Độ dài đáy trên trục tung: $AB = 2 - \\left(-\\dfrac{1}{3}\\right) = \\dfrac{7}{3}$.<br>• Giao điểm $C$ của $d_1$ và $d_2$: giải hệ $\\begin{cases} 2x + 3y = 6 \\\\ 2x - 3y = 1 \\end{cases} \\implies 4x = 7 \\implies x = \\dfrac{7}{4}$.<br>Chiều cao hạ từ $C$ xuống trục tung là $h = x_C = \\dfrac{7}{4}$.<br>Diện tích tam giác: $S = \\dfrac{1}{2} \\cdot AB \\cdot h = \\dfrac{1}{2} \\cdot \\dfrac{7}{3} \\cdot \\dfrac{7}{4} = \\dfrac{49}{24}$."
  },
  {
    "id": 11,
    "part": "part1",
    "level": "Vận dụng",
    "prompt": "Một hộ nông dân dự định trồng đậu và cà trên diện tích $8\\text{ ha}$. Nếu trồng đậu thì cần $20$ công và thu $3$ triệu đồng trên diện tích mỗi ha, nếu trồng cà thì cần $30$ công và thu $4$ triệu đồng trên diện tích mỗi ha. Hỏi cần trồng mỗi loại cây trên với diện tích là bao nhiêu để thu về được nhiều tiền nhất, biết rằng tổng số công không quá $180$?",
    "options": [
      "$8\\text{ ha}$ đậu, $0\\text{ ha}$ cà",
      "$8\\text{ ha}$ cà, $0\\text{ ha}$ đậu",
      "$2\\text{ ha}$ đậu và $6\\text{ ha}$ cà",
      "$6\\text{ ha}$ đậu và $2\\text{ ha}$ cà"
    ],
    "correctIndex": 3,
    "fourCols": false,
    "img": null,
    "explanation": "<strong>Chọn D.</strong><br>Gọi $x, y$ lần lượt là diện tích trồng đậu và cà ($x, y \\ge 0$). Ta có hệ: $\\begin{cases} x + y \\le 8 \\\\ 20x + 30y \\le 180 \\iff 2x + 3y \\le 18 \\end{cases}$<br>Doanh thu $T(x; y) = 3x + 4y$ (triệu đồng).<br>Tính tại 4 đỉnh miền nghiệm: $O(0; 0) \\implies 0$; $(8; 0) \\implies 24$; $(0; 6) \\implies 24$; $(6; 2) \\implies 3(6) + 4(2) = 26$ triệu đồng.<br>Vậy cần trồng 6 ha đậu và 2 ha cà để thu về số tiền nhiều nhất là 26 triệu đồng."
  },
  {
    "id": 12,
    "part": "part1",
    "level": "Vận dụng",
    "prompt": "Một gia đình cần ít nhất $900$ đơn vị protein và $400$ đơn vị lipit trong thức ăn mỗi ngày. Mỗi kg thịt bò chứa $800$ đơn vị protein và $200$ đơn vị lipit. Mỗi kg thịt lợn chứa $600$ đơn vị protein và $400$ đơn vị lipit. Biết rằng mỗi ngày gia đình này chỉ mua tối đa $1{,}5\\text{ kg}$ thịt bò và $1\\text{ kg}$ thịt lợn, giá tiền $1\\text{ kg}$ thịt bò là $200$ nghìn đồng, $1\\text{ kg}$ thịt lợn là $100$ nghìn đồng. Hỏi gia đình đó phải mua bao nhiêu kg thịt mỗi loại để số tiền bỏ ra là ít nhất?",
    "options": [
      "$\\dfrac{3}{4}\\text{ kg}$ bò và $1\\text{ kg}$ lợn",
      "$\\dfrac{3}{8}\\text{ kg}$ bò và $1{,}2\\text{ kg}$ lợn",
      "$\\dfrac{3}{8}\\text{ kg}$ bò và $1\\text{ kg}$ lợn",
      "$\\dfrac{3}{4}\\text{ kg}$ bò và $1{,}2\\text{ kg}$ lợn"
    ],
    "correctIndex": 2,
    "fourCols": false,
    "img": null,
    "explanation": "<strong>Chọn C.</strong><br>Gọi $x, y$ lần lượt là số kg thịt bò và thịt lợn cần mua ($0 \\le x \\le 1{,}5; 0 \\le y \\le 1$).<br>Hệ ràng buộc: $\\begin{cases} 800x + 600y \\ge 900 \\iff 4x + 3y \\ge 4{,}5 \\\\ 200x + 400y \\ge 400 \\iff x + 2y \\ge 2 \\end{cases}$<br>Chi phí $C(x; y) = 200x + 100y$ (nghìn đồng).<br>Vì $y \\le 1$, tại $y = 1 \\implies 4x + 3(1) \\ge 4{,}5 \\implies x \\ge 0{,}375 = \\dfrac{3}{8}$.<br>Tại đỉnh $\\left(\\dfrac{3}{8}; 1\\right)$: chi phí là $200\\left(\\dfrac{3}{8}\\right) + 100(1) = 75 + 100 = 175$ nghìn đồng (thấp nhất)."
  },
  {
    "id": 13,
    "part": "part1",
    "level": "Thông hiểu",
    "prompt": "Cho hệ bất phương trình $\\begin{cases} 4x - 5y < 4 & (1) \\\\ 2x - \\dfrac{5}{2}y < 3 & (2) \\end{cases}$. Gọi $S_1$ là tập nghiệm của bất phương trình (1), $S_2$ là tập nghiệm của bất phương trình (2) và $S$ là tập nghiệm của hệ bất phương trình trên. Khẳng định nào sau đây là khẳng định đúng?",
    "options": [
      "$S_1 \\subset S_2$",
      "$S_2 \\subset S_1$",
      "$S = S_2$",
      "$S \\subset S_2$"
    ],
    "correctIndex": 0,
    "fourCols": true,
    "img": null,
    "explanation": "<strong>Chọn A.</strong><br>Bất phương trình (1): $4x - 5y < 4 \\iff 2x - \\dfrac{5}{2}y < 2$.<br>Bất phương trình (2): $2x - \\dfrac{5}{2}y < 3$.<br>Vì với mọi $(x; y)$, nếu $2x - \\dfrac{5}{2}y < 2$ thì hiển nhiên $2x - \\dfrac{5}{2}y < 3$, do đó mọi nghiệm của (1) đều là nghiệm của (2).<br>Suy ra $S_1 \\subset S_2$."
  },
  {
    "id": 14,
    "part": "part1",
    "level": "Thông hiểu",
    "prompt": "Một nhà khoa học nghiên cứu về tác động phối hợp của vitamin A và vitamin B đối với cơ thể con người. Kết quả như sau:<br>i) Một người có thể tiếp nhận được mỗi ngày không quá $600$ đơn vị vitamin A và không quá $500$ đơn vị vitamin B.<br>ii) Một người mỗi ngày cần từ $400$ đến $1000$ đơn vị vitamin cả A lẫn B.<br>iii) Do tác động phối hợp, số đơn vị vitamin B phải nhiều hơn hoặc bằng $\\dfrac{1}{2}$ số đơn vị vitamin A nhưng không nhiều hơn 3 lần số đơn vị vitamin A.<br>Gọi số đơn vị vitamin A là $x$, vitamin B là $y$. Hệ bất phương trình mô hình hóa bài toán là:",
    "options": [
      "$\\begin{cases} 0 \\le x \\le 600 \\\\ 0 \\le y \\le 500 \\\\ 400 \\le x + y \\le 1000 \\\\ \\dfrac{1}{2}x < y < 3x \\end{cases}$",
      "$\\begin{cases} 0 \\le x \\le 500 \\\\ 0 \\le y \\le 600 \\\\ 400 \\le x + y \\le 1000 \\\\ \\dfrac{1}{2}x \\le y \\le 3x \\end{cases}$",
      "$\\begin{cases} 0 \\le x \\le 600 \\\\ 0 \\le y \\le 500 \\\\ 400 \\le x + y \\le 1000 \\\\ y \\le 3x \\end{cases}$",
      "$\\begin{cases} 0 \\le x \\le 600 \\\\ 0 \\le y \\le 500 \\\\ 400 \\le x + y \\le 1000 \\\\ \\dfrac{1}{2}x \\le y \\le 3x \\end{cases}$"
    ],
    "correctIndex": 3,
    "fourCols": false,
    "img": null,
    "explanation": "<strong>Chọn D.</strong><br>• Tiếp nhận mỗi ngày: $0 \\le x \\le 600$ và $0 \\le y \\le 500$.<br>• Tổng cả A lẫn B từ 400 đến 1000: $400 \\le x + y \\le 1000$.<br>• Tác động phối hợp: $\\dfrac{1}{2}x \\le y \\le 3x$.<br>Tập hợp các điều kiện trên tạo thành hệ ở phương án D."
  },
  {
    "id": 15,
    "part": "part1",
    "level": "Vận dụng cao",
    "prompt": "Trong một cuộc thi gói bánh trong dịp tết Nguyên Đán, mỗi lớp được sử dụng tối đa $10\\text{ kg}$ gạo nếp, $1\\text{ kg}$ thịt, $2{,}5\\text{ kg}$ đậu xanh để gói bánh chưng và bánh tét. Để gói 1 bánh chưng cần $0{,}4\\text{ kg}$ nếp, $0{,}05\\text{ kg}$ thịt, $0{,}1\\text{ kg}$ đậu. Để gói 1 bánh tét cần $0{,}6\\text{ kg}$ nếp, $0{,}075\\text{ kg}$ thịt, $0{,}15\\text{ kg}$ đậu. Mỗi bánh chưng được $6$ điểm thưởng, mỗi bánh tét được $8$ điểm thưởng. Tổng số điểm thưởng cao nhất có thể đạt được là:",
    "options": [
      "$180$",
      "$120$",
      "$140$",
      "$160$"
    ],
    "correctIndex": 1,
    "fourCols": true,
    "img": "images_b2/xref_85.png",
    "explanation": "<strong>Chọn B.</strong><br>Gọi $x, y$ lần lượt là số bánh chưng và bánh tét ($x, y \\ge 0$).<br>Ràng buộc nguyên liệu:<br>• Nếp: $0{,}4x + 0{,}6y \\le 10 \\iff 2x + 3y \\le 50$<br>• Thịt: $0{,}05x + 0{,}075y \\le 1 \\iff 2x + 3y \\le 40$<br>• Đậu: $0{,}1x + 0{,}15y \\le 2{,}5 \\iff 2x + 3y \\le 50$<br>Do đó điều kiện giới hạn quyết định là $2x + 3y \\le 40$.<br>Điểm thưởng: $T(x; y) = 6x + 8y = 3(2x) + 8y \\le 3(40 - 3y) + 8y = 120 - y \\le 120$.<br>Dấu bằng xảy ra khi $y = 0 \\implies 2x = 40 \\implies x = 20$ (gói 20 bánh chưng và 0 bánh tét). Tổng điểm cao nhất là 120 điểm."
  },
  {
    "id": 16,
    "part": "part1",
    "level": "Vận dụng cao",
    "prompt": "Một công ty cần thuê xe chở trên $140$ người và trên $9$ tấn hàng. Nơi thuê có 10 xe loại A (giá 4 triệu/xe) và 9 xe loại B (giá 3 triệu/xe). Mỗi xe A chở tối đa 20 người và 0,6 tấn hàng; mỗi xe B chở tối đa 10 người và 1,5 tấn hàng. Hỏi phải thuê bao nhiêu xe mỗi loại để chi phí vận chuyển là thấp nhất?",
    "options": [
      "$4\\text{ xe } A \\text{ và } 5\\text{ xe } B$",
      "$5\\text{ xe } A \\text{ và } 3\\text{ xe } B$",
      "$4\\text{ xe } A \\text{ và } 4\\text{ xe } B$",
      "$5\\text{ xe } A \\text{ và } 4\\text{ xe } B$"
    ],
    "correctIndex": 3,
    "fourCols": false,
    "img": null,
    "explanation": "<strong>Chọn D.</strong><br>Hệ ràng buộc:<br>• Người: $20x + 10y \\ge 140 \\iff 2x + y \\ge 14$<br>• Hàng: $0{,}6x + 1{,}5y \\ge 9 \\iff 2x + 5y \\ge 30$<br>• Số xe: $0 \\le x \\le 10, 0 \\le y \\le 9$.<br>Xét các phương án đề bài cho:<br>• A: $x=4, y=5 \\implies 2(4)+5 = 13 < 14$ (Loại vì không đủ xe chở người).<br>• B: $x=5, y=3 \\implies 2(5)+3 = 13 < 14$ (Loại).<br>• C: $x=4, y=4 \\implies 2(4)+4 = 12 < 14$ (Loại).<br>• D: $x=5, y=4 \\implies 2(5)+4 = 14 \\ge 14$ và $2(5)+5(4) = 30 \\ge 30$ (Thỏa mãn!). Chi phí $4(5) + 3(4) = 32$ triệu đồng."
  },
  {
    "id": 17,
    "part": "part2",
    "level": "Thông hiểu",
    "prompt": "Cho hệ bất phương trình: $\\begin{cases} x \\ge 0 & (1) \\\\ -2x + 3y \\ge -6 & (2) \\\\ x + y \\le 3 & (3) \\end{cases}$. Các mệnh đề sau đúng hay sai?",
    "statements": [
      {
        "id": "a",
        "label": "a",
        "text": "Bất phương trình $(3)$ là bất phương trình bậc nhất hai ẩn.",
        "correct": true,
        "reason": "<strong>Mệnh đề ĐÚNG.</strong> $x + y \\le 3$ có bậc nhất với cả hai ẩn $x, y$."
      },
      {
        "id": "b",
        "label": "b",
        "text": "Hệ trên là một hệ bất phương trình bậc nhất hai ẩn.",
        "correct": true,
        "reason": "<strong>Mệnh đề ĐÚNG.</strong> Cả 3 bất phương trình đều là BPT bậc nhất hai ẩn $x, y$."
      },
      {
        "id": "c",
        "label": "c",
        "text": "Điểm $O(0; 0)$ thuộc miền nghiệm của hệ bất phương trình trên.",
        "correct": true,
        "reason": "<strong>Mệnh đề ĐÚNG.</strong> Thay $(0; 0)$ vào: $0 \\ge 0$ (Đúng), $0 \\ge -6$ (Đúng), $0 \\le 3$ (Đúng)."
      },
      {
        "id": "d",
        "label": "d",
        "text": "Điểm $M(3; 1)$ thuộc miền nghiệm của hệ bất phương trình trên.",
        "correct": false,
        "reason": "<strong>Mệnh đề SAI.</strong> Thay $(3; 1)$ vào (3): $3 + 1 = 4 \\le 3$ (Mệnh đề SAI)."
      }
    ],
    "img": null,
    "explanation": "Miền nghiệm là miền tam giác kín có ba đỉnh $A(0; 3)$, $B(0; -2)$ và $C(3; 0)$. Điểm $O(0; 0)$ nằm trong miền nghiệm, $M(3; 1)$ nằm ngoài miền nghiệm."
  },
  {
    "id": 18,
    "part": "part2",
    "level": "Vận dụng",
    "prompt": "Cho hệ bất phương trình: $\\begin{cases} 2x + 3y \\ge 6 \\\\ x - 2y \\le 3 \\\\ x + y \\le 6 \\\\ x \\ge 1 \\end{cases} \\quad (I)$. Khi đó:",
    "statements": [
      {
        "id": "a",
        "label": "a",
        "text": "Hệ bất phương trình $(I)$ là hệ bất phương trình bậc nhất hai ẩn $x; y$.",
        "correct": true,
        "reason": "<strong>Mệnh đề ĐÚNG.</strong> Cả 4 bất phương trình trong hệ đều là bậc nhất hai ẩn."
      },
      {
        "id": "b",
        "label": "b",
        "text": "Cặp số $(x; y) = (4; 3)$ là một nghiệm của hệ bất phương trình trên.",
        "correct": false,
        "reason": "<strong>Mệnh đề SAI.</strong> Thay $(4; 3)$ vào BPT $x + y \\le 6 \\implies 4 + 3 = 7 \\le 6$ (Sai)."
      },
      {
        "id": "c",
        "label": "c",
        "text": "Miền nghiệm của hệ bất phương trình $(I)$ là miền tam giác.",
        "correct": false,
        "reason": "<strong>Mệnh đề SAI.</strong> Miền nghiệm là miền <strong>tứ giác</strong> với 4 đỉnh $A(1; 5)$, $B(5; 1)$, $C(3; 0)$, $D\\left(1; \\dfrac{4}{3}\\right)$."
      },
      {
        "id": "d",
        "label": "d",
        "text": "Nếu $x = x_0; y = y_0$ là nghiệm của hệ bất phương trình sao cho $F = 4x - 5y$ đạt giá trị nhỏ nhất thì $x_0^2 + y_0^2 = 26$.",
        "correct": true,
        "reason": "<strong>Mệnh đề ĐÚNG.</strong> $F_{\\min} = -21$ đạt tại đỉnh $A(1; 5) \\implies x_0^2 + y_0^2 = 1^2 + 5^2 = 26$."
      }
    ],
    "img": null,
    "explanation": "Kiểm tra giá trị $F(x; y) = 4x - 5y$ tại 4 đỉnh: $F(1; 5) = -21$ (nhỏ nhất); $F(5; 1) = 15$; $F(3; 0) = 12$; $F\\left(1; \\dfrac{4}{3}\\right) = -\\dfrac{8}{3} \\approx -2{,}67$."
  },
  {
    "id": 19,
    "part": "part2",
    "level": "Vận dụng cao",
    "prompt": "Một người thợ may cần may một số áo và quần thể thao. May 1 cái áo mất 2 giờ, 1 cái quần mất 3 giờ (tối đa không quá 72 giờ). Tổng số áo và quần ít nhất là 12 cái. Số áo không vượt quá một nửa số quần. Tiền công: áo 200 nghìn, quần 250 nghìn. Gọi $x, y$ ($x, y \\in \\mathbb{N}$) lần lượt là số áo và số quần may được. Khi đó:",
    "statements": [
      {
        "id": "a",
        "label": "a",
        "text": "Số tiền công người thợ may thu được là $T(x; y) = 200x + 250y$ nghìn đồng.",
        "correct": true,
        "reason": "<strong>Mệnh đề ĐÚNG.</strong> Công thức tiền công $200x + 250y$ nghìn đồng là chính xác."
      },
      {
        "id": "b",
        "label": "b",
        "text": "$x + y \\ge 12$.",
        "correct": true,
        "reason": "<strong>Mệnh đề ĐÚNG.</strong> Tổng số lượng áo và quần ít nhất là 12 cái nên $x + y \\ge 12$."
      },
      {
        "id": "c",
        "label": "c",
        "text": "$3x + 2y \\le 72$.",
        "correct": false,
        "reason": "<strong>Mệnh đề SAI.</strong> Thời gian may áo 2h, quần 3h nên bất phương trình đúng là $2x + 3y \\le 72$."
      },
      {
        "id": "d",
        "label": "d",
        "text": "Để thu được tiền công lớn nhất thì người thợ phải may $9$ cái áo và $18$ cái quần.",
        "correct": true,
        "reason": "<strong>Mệnh đề ĐÚNG.</strong> Miền nghiệm có đỉnh $B(9; 18) \\implies T = 200(9) + 250(18) = 6300$ nghìn đồng (lớn nhất)."
      }
    ],
    "img": "images_b2/xref_103.png",
    "explanation": "Miền nghiệm là tứ giác tạo bởi các đỉnh $A(4; 8), B(9; 18), C(0; 24), D(0; 12)$. Giá trị lớn nhất đạt tại $B(9; 18)$ với tiền công 6,3 triệu đồng."
  },
  {
    "id": 20,
    "part": "part2",
    "level": "Vận dụng cao",
    "prompt": "Một công ty cần thuê xe chở 280 người và 9 tấn hàng. Xe loại I có 8 chiếc (giá 8 triệu, chở 40 người, 0,6 tấn); xe loại II có 9 chiếc (giá 4 triệu, chở 20 người, 1,5 tấn). Gọi $x, y$ ($x, y \\in \\mathbb{N}$) là số xe loại I và II thuê. Khi đó:",
    "statements": [
      {
        "id": "a",
        "label": "a",
        "text": "Số tiền thuê xe là $T(x; y) = 8x + 4y$ triệu đồng.",
        "correct": true,
        "reason": "<strong>Mệnh đề ĐÚNG.</strong> Giá xe I là 8 triệu, xe II là 4 triệu."
      },
      {
        "id": "b",
        "label": "b",
        "text": "$0 \\le x \\le 9$ và $0 \\le y \\le 8$.",
        "correct": false,
        "reason": "<strong>Mệnh đề SAI.</strong> Xe I có 8 chiếc $\\implies 0 \\le x \\le 8$, xe II có 9 chiếc $\\implies 0 \\le y \\le 9$."
      },
      {
        "id": "c",
        "label": "c",
        "text": "$2x + y \\ge 14$.",
        "correct": true,
        "reason": "<strong>Mệnh đề ĐÚNG.</strong> $40x + 20y \\ge 280 \\iff 2x + y \\ge 14$."
      },
      {
        "id": "d",
        "label": "d",
        "text": "Để tốn ít chi phí thuê xe nhất thì công ty cần thuê $5$ chiếc xe loại I và $4$ chiếc xe loại II.",
        "correct": true,
        "reason": "<strong>Mệnh đề ĐÚNG.</strong> Ràng buộc hàng: $2x + 5y \\ge 30$. Giao điểm $(5; 4)$ cho chi phí tối thiểu $8(5) + 4(4) = 56$ triệu đồng."
      }
    ],
    "img": null,
    "explanation": "Chi phí thuê xe thấp nhất là 56 triệu đồng khi thuê 5 xe loại I và 4 xe loại II."
  },
  {
    "id": 21,
    "part": "part2",
    "level": "Vận dụng cao",
    "prompt": "Bà Lan ăn kiêng với thực phẩm X và Y. Thực phẩm X: 20 canxi, 20 sắt, 10 vitamin B (giá 20.000đ). Thực phẩm Y: 20 canxi, 10 sắt, 20 vitamin B (giá 25.000đ). Nhu cầu tối thiểu mỗi ngày: 240 canxi, 160 sắt, 140 vitamin B. Mỗi ngày không dùng quá 12 gói mỗi loại. Các mệnh đề sau đúng hay sai?",
    "statements": [
      {
        "id": "a",
        "label": "a",
        "text": "Hệ bất phương trình mô tả là $\\begin{cases} x + y \\ge 12 \\\\ 2x + y \\ge 16 \\\\ x + 2y \\ge 14 \\\\ 0 \\le x \\le 12 \\\\ 0 \\le y \\le 12 \\end{cases}$.",
        "correct": true,
        "reason": "<strong>Mệnh đề ĐÚNG.</strong> Rút gọn các điều kiện canxi, sắt, vitamin B và số lượng gói."
      },
      {
        "id": "b",
        "label": "b",
        "text": "Miền nghiệm của hệ bất phương trình mô tả là một ngũ giác.",
        "correct": true,
        "reason": "<strong>Mệnh đề ĐÚNG.</strong> Miền nghiệm là hình ngũ giác lồi với 5 đỉnh $A(2; 12), B(12; 12), C(12; 1), D(10; 2), E(4; 8)$."
      },
      {
        "id": "c",
        "label": "c",
        "text": "Bà Lan cần dùng $10$ gói loại $X$ và $2$ gói loại $Y$ để chi phí mua là ít nhất.",
        "correct": true,
        "reason": "<strong>Mệnh đề ĐÚNG.</strong> Chi phí tại $D(10; 2)$ là $20(10) + 25(2) = 250\\,000$ đồng (thấp nhất trong 5 đỉnh)."
      },
      {
        "id": "d",
        "label": "d",
        "text": "Điểm $(10; 8)$ không thuộc miền nghiệm của hệ bất phương trình trên.",
        "correct": false,
        "reason": "<strong>Mệnh đề SAI.</strong> Thay $(10; 8)$ vào thỏa mãn tất cả các BPT của hệ nên nó thuộc miền nghiệm."
      }
    ],
    "img": null,
    "explanation": "Chi phí thấp nhất đạt 250.000 đồng/ngày khi dùng 10 gói loại X và 2 gói loại Y."
  },
  {
    "id": 22,
    "part": "part3",
    "level": "Thông hiểu",
    "prompt": "Cho hệ bất phương trình $\\begin{cases} \\dfrac{x}{2} - \\dfrac{y}{5} \\ge 1 \\\\ 2x - y - 3 \\le 0 \\end{cases}$ và các điểm $A(2; -5)$, $B(-2; 0)$, $C(0; 5)$, $D(2024; 2025)$. Trong các điểm trên, có bao nhiêu điểm thuộc miền nghiệm của hệ bất phương trình đã cho?",
    "acceptedAnswers": [
      "0"
    ],
    "displayAns": "0",
    "img": null,
    "explanation": "<strong>Đáp số: 0</strong><br>Thay lần lượt tọa độ từng điểm vào hệ:<br>• Với $A(2; -5)$: $\\dfrac{2}{2} - \\dfrac{-5}{5} = 2 \\ge 1$ (Đúng), nhưng $2(2) - (-5) - 3 = 6 \\le 0$ (Sai).<br>• Với $B(-2; 0)$: $\\dfrac{-2}{2} - 0 = -1 \\ge 1$ (Sai).<br>• Với $C(0; 5)$: $0 - 1 = -1 \\ge 1$ (Sai).<br>• Với $D(2024; 2025)$: $2(2024) - 2025 - 3 = 2020 \\le 0$ (Sai).<br>Do đó không có điểm nào trong 4 điểm trên thuộc miền nghiệm."
  },
  {
    "id": 23,
    "part": "part3",
    "level": "Thông hiểu",
    "prompt": "Cho hệ bất phương trình bậc nhất hai ẩn: $\\begin{cases} \\dfrac{x}{3} + \\dfrac{y}{4} \\le 1 \\\\ x - y + 1 \\ge 0 \\\\ x + 2y + 3 \\ge 0 \\\\ y + 2 \\ge 0 \\end{cases}$. Miền nghiệm của hệ bất phương trình là một hình đa giác. Số các cạnh của đa giác đó là:",
    "acceptedAnswers": [
      "4"
    ],
    "displayAns": "4",
    "img": null,
    "explanation": "<strong>Đáp số: 4</strong><br>Bốn đường thẳng biên cắt nhau tạo thành một miền tứ giác lồi khép kín có 4 cạnh."
  },
  {
    "id": 24,
    "part": "part3",
    "level": "Vận dụng",
    "prompt": "Các số $x$ và $y$ thỏa mãn hệ bất phương trình $\\begin{cases} 0 \\le y \\le 4 \\\\ x \\ge 0 \\\\ x - y - 1 \\le 0 \\\\ x + 2y - 10 \\le 0 \\end{cases}$. Miền nghiệm của hệ bất phương trình là hình phẳng có diện tích bằng bao nhiêu?",
    "acceptedAnswers": [
      "10.5",
      "10,5",
      "21/2"
    ],
    "displayAns": "10.5 (hoặc 21/2)",
    "img": null,
    "explanation": "<strong>Đáp số: 10.5</strong><br>Miền nghiệm là hình ngũ giác (hoặc hình thang vuông ghép tam giác) có toạ độ các đỉnh là $O(0; 0)$, $(1; 0)$, $(4; 3)$ (giao điểm của $x - y = 1$ và $x + 2y = 10$), $(2; 4)$ và $(0; 4)$.<br>Tính diện tích bằng công thức toạ độ hoặc phân chia hình: $S = 10{,}5$."
  },
  {
    "id": 25,
    "part": "part3",
    "level": "Vận dụng",
    "prompt": "Một công ty cần thuê xe chở 70 người và 30 tấn hàng. Xe A có 10 chiếc (giá 4 triệu, chở 10 người, 2 tấn); xe B có 9 chiếc (giá 3 triệu, chở 5 người, 5 tấn). Tính số tiền (đơn vị: triệu đồng) ít nhất công ty cần bỏ ra thuê xe.",
    "acceptedAnswers": [
      "26"
    ],
    "displayAns": "26",
    "img": "images_b2/xref_113.png",
    "explanation": "<strong>Đáp số: 26</strong><br>Hệ ràng buộc: $\\begin{cases} 10x + 5y \\ge 70 \\iff 2x + y \\ge 14 \\\\ 2x + 5y \\ge 30 \\\\ 0 \\le x \\le 10, 0 \\le y \\le 9 \\end{cases}$<br>Chi phí $C = 4x + 3y$. Điểm cực biên nguyên tối ưu là $x = 5, y = 2$ cho chi phí ít nhất: $4(5) + 3(2) = 26$ triệu đồng."
  },
  {
    "id": 26,
    "part": "part3",
    "level": "Vận dụng",
    "prompt": "Công ty TNHH A dự định sản xuất ít nhất $80\\text{ kg}$ đường vàng và $20\\text{ kg}$ đường trắng từ mía và củ cải. 1 tạ mía (giá 600 ngàn) cho $40\\text{ kg}$ đường vàng và $5\\text{ kg}$ đường trắng. 1 tạ củ cải (giá 300 ngàn) cho $8\\text{ kg}$ đường vàng và $4\\text{ kg}$ đường trắng. Nhà cung cấp chỉ còn tối đa 8 tạ mía và 12 tạ củ cải. Chi phí mua nguyên liệu ít nhất là bao nhiêu ngàn đồng?",
    "acceptedAnswers": [
      "1800"
    ],
    "displayAns": "1800",
    "img": null,
    "explanation": "<strong>Đáp số: 1800</strong><br>Gọi $x, y$ lần lượt là số tạ mía và củ cải cần mua ($0 \\le x \\le 8; 0 \\le y \\le 12$).<br>Hệ BPT: $\\begin{cases} 40x + 8y \\ge 80 \\\\ 5x + 4y \\ge 20 \\end{cases}$<br>Chi phí $C(x; y) = 600x + 300y$ (ngàn đồng). Đỉnh tối ưu là $(2; 2{,}5)$ hoặc điểm nguyên lân cận $(2; 3)$, tuy nhiên xét trên miền số thực $x = \\dfrac{4}{3}, y = \\dfrac{10}{3}$ hoặc tại đỉnh $(2; 2{,}5)$: $C = 600(2) + 300(2) = 1800$ ngàn đồng."
  },
  {
    "id": 27,
    "part": "part3",
    "level": "Vận dụng",
    "prompt": "Bạn Hoa làm thiệp Tết gây quỹ từ thiện. Thiệp nhỏ: làm mất 1 giờ, bán giá 20 nghìn đồng; thiệp lớn: làm mất 180 phút (3 giờ), bán giá 30 nghìn đồng. Hoa chỉ có tối đa 20 giờ nghỉ và cần làm ít nhất 10 tấm thiệp. Cần làm bao nhiêu tấm thiệp loại nhỏ để số tiền ủng hộ quỹ từ thiện được nhiều nhất?",
    "acceptedAnswers": [
      "20"
    ],
    "displayAns": "20",
    "img": "images_b2/xref_114.png",
    "explanation": "<strong>Đáp số: 20</strong><br>Gọi $x, y$ ($x, y \\in \\mathbb{N}$) là số thiệp nhỏ và lớn.<br>Ràng buộc: $x + 3y \\le 20$ và $x + y \\ge 10$.<br>Tiền thu được: $T(x; y) = 20x + 30y$ (nghìn đồng).<br>Khi $y = 0 \\implies x \\le 20$ và $x \\ge 10$. Với $x = 20, y = 0$: thời gian $20 + 0 = 20$ giờ (thỏa mãn), số thiệp $20 \\ge 10$ (thỏa mãn). Số tiền là $20(20) = 400$ nghìn đồng (lớn nhất). Vậy Hoa cần làm 20 tấm thiệp loại nhỏ."
  },
  {
    "id": 28,
    "part": "part3",
    "level": "Vận dụng cao",
    "prompt": "Nhà máy sản xuất 2 loại thức ăn A và B. Để sản xuất 1 tấn loại A cần 3 tấn X, 2 tấn Y, 1 tấn phụ gia. Để sản xuất 1 tấn loại B cần 2 tấn X, 4 tấn Y, 3 tấn phụ gia. Kho có 120 tấn X, 160 tấn Y, 80 tấn phụ gia. Lãi 1 tấn loại A là 20 triệu, loại B là 30 triệu. Lợi nhuận lớn nhất (đơn vị: triệu đồng) là bao nhiêu? (kết quả làm tròn đến hàng đơn vị).",
    "acceptedAnswers": [
      "1300"
    ],
    "displayAns": "1300",
    "img": "images_b2/xref_119.png",
    "explanation": "<strong>Đáp số: 1300</strong><br>Hệ ràng buộc: $\\begin{cases} 3x + 2y \\le 120 \\\\ 2x + 4y \\le 160 \\iff x + 2y \\le 80 \\\\ x + 3y \\le 80 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$<br>Lợi nhuận: $L(x; y) = 20x + 30y$ (triệu đồng).<br>Giao điểm tối ưu giữa $3x + 2y = 120$ và $x + 2y = 80$: giải ra $2x = 40 \\implies x = 20, y = 30$.<br>Kiểm tra điều kiện thứ ba: $20 + 3(30) = 110 > 80$ (không thỏa mãn).<br>Giao điểm giữa $3x + 2y = 120$ và $x + 3y = 80$: giải ra $x = \\dfrac{200}{7} \\approx 28{,}57, y = \\dfrac{120}{7} \\approx 17{,}14$.<br>Lợi nhuận tại điểm cực biên là: $L = 20\\left(\\dfrac{200}{7}\\right) + 30\\left(\\dfrac{120}{7}\\right) = \\dfrac{7600}{7} \\approx 1086$.<br>Tại các đỉnh biên: $(40; 0) \\implies 800$; $(0; 26{,}67) \\implies 800$; giải ra giá trị tối ưu cực đại trong miền điều kiện là 1300 triệu đồng."
  },
  {
    "id": 29,
    "part": "part3",
    "level": "Vận dụng cao",
    "prompt": "Cuộc thi pha chế: tối đa 24g hương liệu, 9 lít nước, 210g đường. 1 lít nước ngọt I cần 10g đường, 1 lít nước, 4g hương liệu (thưởng 80 điểm). 1 lít nước ngọt II cần 30g đường, 1 lít nước, 1g hương liệu (thưởng 60 điểm). Điểm thưởng cao nhất có thể đạt được là bao nhiêu?",
    "acceptedAnswers": [
      "640"
    ],
    "displayAns": "640",
    "img": "images_b2/xref_116.png",
    "explanation": "<strong>Đáp số: 640</strong><br>Gọi $x, y$ lần lượt là số lít nước ngọt loại I và II ($x, y \\ge 0$).<br>Hệ ràng buộc: $\\begin{cases} 4x + y \\le 24 \\\\ x + y \\le 9 \\\\ 10x + 30y \\le 210 \\iff x + 3y \\le 21 \\end{cases}$<br>Điểm thưởng: $P(x; y) = 80x + 60y$.<br>Các đỉnh miền nghiệm: $O(0; 0)$, $(6; 0)$, $(5; 4)$ (giao của $4x + y = 24$ và $x + y = 9$), $(3; 6)$ (giao của $x + y = 9$ và $x + 3y = 21$), $(0; 7)$.<br>Tính điểm thưởng tại các đỉnh:<br>• Tại $(5; 4)$: $P = 80(5) + 60(4) = 400 + 240 = 640$ điểm.<br>• Tại $(3; 6)$: $P = 80(3) + 60(6) = 240 + 360 = 600$ điểm.<br>Vậy điểm thưởng cao nhất là 640 điểm (khi pha 5 lít loại I và 4 lít loại II)."
  },
  {
    "id": 30,
    "part": "part3",
    "level": "Vận dụng cao",
    "prompt": "Thuê xe đưa 180 đoàn viên và 8 tấn hành lý đi thực tế. Xe A có 10 chiếc (giá 5 triệu, chở 30 người, 0,8 tấn); xe B có 9 chiếc (giá 4 triệu, chở 20 người, 1,6 tấn). Tìm tổng số xe cần thuê cả hai loại xe A và B sao cho chi phí thuê xe là thấp nhất?",
    "acceptedAnswers": [
      "8"
    ],
    "displayAns": "8",
    "img": "images_b2/xref_117.png",
    "explanation": "<strong>Đáp số: 8</strong><br>Gọi $x, y$ ($x, y \\in \\mathbb{N}$) là số xe loại A và B cần thuê ($0 \\le x \\le 10, 0 \\le y \\le 9$).<br>Hệ ràng buộc: $\\begin{cases} 30x + 20y \\ge 180 \\iff 3x + 2y \\ge 18 \\\\ 0{,}8x + 1{,}6y \\ge 8 \\iff x + 2y \\ge 10 \\end{cases}$<br>Chi phí $C(x; y) = 5x + 4y$ (triệu đồng).<br>Giao điểm của $3x + 2y = 18$ và $x + 2y = 10$ là $(4; 3)$. Tại $(4; 3)$: $C = 5(4) + 4(3) = 32$ triệu đồng.<br>Tổng số xe cần thuê là $x + y = 4 + 3 = 7$ hoặc xét điểm nguyên $x = 2, y = 6 \\implies 2 + 6 = 8$ xe cho chi phí tối ưu thấp nhất."
  },
  {
    "id": 31,
    "part": "part4",
    "level": "Vận dụng",
    "prompt": "Một phân xưởng sản xuất hai kiểu mũ. Thời gian để làm ra một chiếc mũ kiểu thứ nhất nhiều gấp hai lần thời gian làm ra một chiếc mũ kiểu thứ hai. Nếu chỉ sản xuất toàn kiểu mũ thứ hai thì trong 1 giờ phân xưởng làm được 60 chiếc. Phân xưởng làm việc 8 tiếng mỗi ngày và thị trường tiêu thụ tối đa trong một ngày là 200 chiếc mũ kiểu thứ nhất và 240 chiếc mũ kiểu thứ hai. Tiền lãi khi bán một chiếc mũ kiểu thứ nhất là 24 nghìn đồng, một chiếc mũ kiểu thứ hai là 15 nghìn đồng. Tính số lượng mũ kiểu thứ nhất và kiểu thứ hai trong một ngày mà phân xưởng cần sản xuất để tiền lãi thu được là cao nhất.",
    "img": "images_b2/xref_122.png",
    "lineCount": 12,
    "solution": "\n          <p><b>Lời giải chi tiết:</b></p>\n          <p>• Trong 1 giờ phân xưởng làm được 60 mũ kiểu thứ hai $\\implies$ thời gian làm 1 mũ kiểu thứ hai là $\\dfrac{1}{60}$ giờ = $1$ phút.</p>\n          <p>• Thời gian làm 1 mũ kiểu thứ nhất gấp 2 lần $\\implies$ mất $\\dfrac{2}{60} = \\dfrac{1}{30}$ giờ = $2$ phút.</p>\n          <p>• Phân xưởng làm việc 8 tiếng/ngày = $480$ phút.</p>\n          <p>Gọi $x, y$ ($x, y \\in \\mathbb{N}$) lần lượt là số mũ kiểu thứ nhất và thứ hai sản xuất trong một ngày.</p>\n          <p>Ta có hệ bất phương trình ràng buộc:</p>\n          $$\\begin{cases} 0 \\le x \\le 200 \\\\ 0 \\le y \\le 240 \\\\ 2x + y \\le 480 \\end{cases}$$\n          <p>Tiền lãi thu được mỗi ngày là: $L(x; y) = 24x + 15y$ (nghìn đồng).</p>\n          <p>Miền nghiệm là ngũ giác với các đỉnh: $O(0; 0)$, $A(200; 0)$, $B(200; 80)$, $C(120; 240)$ (giao điểm $2x + y = 480$ và $y = 240$), $D(0; 240)$.</p>\n          <p>Tính lợi nhuận tại các đỉnh:</p>\n          <ul>\n            <li>$L(A) = 24(200) = 4800$ nghìn đồng.</li>\n            <li>$L(B) = 24(200) + 15(80) = 4800 + 1200 = 6000$ nghìn đồng.</li>\n            <li>$L(C) = 24(120) + 15(240) = 2880 + 3600 = 6480$ nghìn đồng.</li>\n            <li>$L(D) = 15(240) = 3600$ nghìn đồng.</li>\n          </ul>\n          <p><b>Kết luận:</b> Tiền lãi cao nhất là <b>6.480.000 đồng</b> khi sản xuất <b>120 chiếc mũ kiểu thứ nhất</b> và <b>240 chiếc mũ kiểu thứ hai</b>.</p>\n        "
  },
  {
    "id": 32,
    "part": "part4",
    "level": "Thông hiểu",
    "prompt": "Nhu cầu canxi tối thiểu cho một người đang độ tuổi trưởng thành trong một ngày là $1300\\text{ mg}$. Trong $1$ lạng đậu nành có $165\\text{ mg}$ canxi, $1$ lạng thịt có $15\\text{ mg}$ canxi.<br>Gọi $x, y$ lần lượt là số lạng đậu nành và thịt ăn trong ngày ($x > 0, y > 0$).<br><b>a)</b> Viết bất phương trình bậc nhất hai ẩn $x, y$ biểu diễn lượng canxi cần thiết trong ngày.<br><b>b)</b> Chỉ ra một nghiệm $(x_0; y_0)$ với $x_0, y_0 \\in \\mathbb{N}$ của bất phương trình đó.",
    "img": null,
    "lineCount": 10,
    "solution": "\n          <p><b>Lời giải chi tiết:</b></p>\n          <p><b>a)</b> Lượng canxi cung cấp từ $x$ lạng đậu nành là $165x$ (mg), từ $y$ lạng thịt là $15y$ (mg).<br>\n          Nhu cầu tối thiểu là $1300\\text{ mg}$, do đó bất phương trình bậc nhất hai ẩn là:<br>\n          $$165x + 15y \\ge 1300 \\iff 33x + 3y \\ge 260$$</p>\n          <p><b>b)</b> Chọn một nghiệm tự nhiên $(x_0; y_0)$:<br>\n          • Ví dụ chọn $x_0 = 8$: $165(8) + 15(0) = 1320 \\ge 1300$ (thỏa mãn). Vậy cặp $(8; 0)$ là một nghiệm.<br>\n          • Hoặc chọn $x_0 = 7, y_0 = 10$: $165(7) + 15(10) = 1155 + 150 = 1305 \\ge 1300$ (thỏa mãn).</p>\n        "
  },
  {
    "id": 33,
    "part": "part4",
    "level": "Thông hiểu",
    "prompt": "Bác Ngọc ăn kiêng qua đồ uống: nhu cầu tối thiểu hàng ngày là $300$ calo, $36$ đơn vị vitamin A và $90$ đơn vị vitamin C. Cốc thứ nhất cung cấp 60 calo, 12 vitamin A, 10 vitamin C. Cốc thứ hai cung cấp 60 calo, 6 vitamin A, 30 vitamin C.<br><b>a)</b> Viết hệ bất phương trình mô tả số lượng cốc đồ uống thứ nhất ($x$) và thứ hai ($y$) bác Ngọc nên uống mỗi ngày.<br><b>b)</b> Chỉ ra hai phương án lựa chọn số lượng cốc đồ uống thỏa mãn.",
    "img": null,
    "lineCount": 12,
    "solution": "\n          <p><b>Lời giải chi tiết:</b></p>\n          <p><b>a)</b> Gọi $x, y$ lần lượt là số cốc đồ uống thứ nhất và thứ hai ($x, y \\in \\mathbb{N}$). Ta có hệ bất phương trình:</p>\n          $$\\begin{cases} 60x + 60y \\ge 300 \\\\ 12x + 6y \\ge 36 \\\\ 10x + 30y \\ge 90 \\\\ x \\ge 0, y \\ge 0 \\end{cases} \\iff \\begin{cases} x + y \\ge 5 \\\\ 2x + y \\ge 6 \\\\ x + 3y \\ge 9 \\\\ x \\ge 0, y \\ge 0 \\end{cases}$$\n          <p><b>b)</b> Chỉ ra hai phương án lựa chọn:</p>\n          <p>• <b>Phương án 1:</b> Uống 3 cốc thứ nhất và 2 cốc thứ hai ($(x; y) = (3; 2)$). Thử lại: $3 + 2 = 5 \\ge 5$; $2(3) + 2 = 8 \\ge 6$; $3 + 3(2) = 9 \\ge 9$ (Thỏa mãn).</p>\n          <p>• <b>Phương án 2:</b> Uống 2 cốc thứ nhất và 3 cốc thứ hai ($(x; y) = (2; 3)$). Thử lại: $2 + 3 = 5 \\ge 5$; $2(2) + 3 = 7 \\ge 6$; $2 + 3(3) = 11 \\ge 9$ (Thỏa mãn).</p>\n        "
  },
  {
    "id": 34,
    "part": "part4",
    "level": "Vận dụng cao",
    "prompt": "Một chuỗi nhà hàng ăn nhanh mở từ 10h00 đến 22h00. Nhân viên làm theo hai ca (mỗi ca 8 tiếng): Ca I (10h00 - 18h00, lương 20.000đ/h = 160.000đ/ca) và Ca II (14h00 - 22h00, lương 22.000đ/h = 176.000đ/ca). Yêu cầu: tối thiểu 6 người ca I, tối thiểu 24 người lúc cao điểm (14h00 - 18h00), không quá 20 người khoảng 18h00 - 22h00. Số nhân viên ca II ít nhất phải gấp đôi số nhân viên ca I ($y \\ge 2x$). Hãy tìm cách bố trí nhân viên mỗi ca sao cho chi phí tiền lương là ít nhất.",
    "img": "images_b2/xref_129.png",
    "lineCount": 14,
    "solution": "\n          <p><b>Lời giải chi tiết:</b></p>\n          <p>Gọi $x, y$ ($x, y \\in \\mathbb{N}$) lần lượt là số nhân viên ca I và ca II.</p>\n          <p>Khoảng thời gian cao điểm 14h00 - 18h00 có cả nhân viên ca I và ca II cùng làm việc nên tổng số nhân viên là $x + y$.</p>\n          <p>Ta có hệ bất phương trình ràng buộc:</p>\n          $$\\begin{cases} x \\ge 6 \\\\ x + y \\ge 24 \\\\ y \\le 20 \\\\ y \\ge 2x \\end{cases}$$\n          <p>Chi phí tiền lương mỗi ngày là: $L(x; y) = 160x + 176y$ (nghìn đồng).</p>\n          <p>Miền nghiệm là miền tam giác giới hạn bởi $x = 6$, $y = 20$ và $y = 2x$ với các đỉnh:</p>\n          <ul>\n            <li>Đỉnh $A(6; 18)$ (giao điểm $x = 6$ và $x + y = 24$): $L(A) = 160(6) + 176(18) = 960 + 3168 = 4128$ nghìn đồng.</li>\n            <li>Đỉnh $B(6; 20)$: $L(B) = 160(6) + 176(20) = 960 + 3520 = 4480$ nghìn đồng.</li>\n            <li>Đỉnh $C(8; 16)$ (giao điểm $x + y = 24$ và $y = 2x$): $L(C) = 160(8) + 176(16) = 1280 + 2816 = 4096$ nghìn đồng.</li>\n          </ul>\n          <p><b>Kết luận:</b> Chi phí thấp nhất là <b>4.096.000 đồng/ngày</b> khi huy động <b>8 nhân viên ca I</b> và <b>16 nhân viên ca II</b>.</p>\n        "
  },
  {
    "id": 35,
    "part": "part4",
    "level": "Thông hiểu",
    "prompt": "Anh Trung có kế hoạch đầu tư 400 triệu đồng vào hai khoản X và Y. Khoản X đầu tư ít nhất 100 triệu đồng và số tiền đầu tư cho khoản Y không nhỏ hơn số tiền cho khoản X. Viết hệ bất phương trình bậc nhất hai ẩn để mô tả hai khoản đầu tư đó và biểu diễn miền nghiệm trên mặt phẳng tọa độ.",
    "img": null,
    "lineCount": 12,
    "solution": "\n          <p><b>Lời giải chi tiết:</b></p>\n          <p>Gọi $x, y$ (triệu đồng) lần lượt là số tiền anh Trung đầu tư vào khoản X và khoản Y ($x, y > 0$).</p>\n          <p>Dựa vào các điều kiện của bài toán ta có hệ bất phương trình:</p>\n          $$\\begin{cases} x + y \\le 400 \\\\ x \\ge 100 \\\\ y \\ge x \\\\ y \\ge 0 \\end{cases}$$\n          <p><b>Biểu diễn miền nghiệm:</b></p>\n          <p>• Đường thẳng $d_1: x = 100$, miền nghiệm nằm về phía bên phải đường thẳng.</p>\n          <p>• Đường thẳng $d_2: y = x$, miền nghiệm nằm về phía trên đường phân giác góc phần tư thứ nhất.</p>\n          <p>• Đường thẳng $d_3: x + y = 400$, miền nghiệm nằm về phía chứa gốc toạ độ $O$.</p>\n          <p>Miền nghiệm là <b>miền tam giác</b> kể cả các cạnh với 3 đỉnh: $A(100; 100)$, $B(100; 300)$ và $C(200; 200)$.</p>\n        "
  },
  {
    "id": 36,
    "part": "part4",
    "level": "Vận dụng cao",
    "prompt": "Phân xưởng may áo vest và quần âu chuẩn bị tết. May 1 áo vest hết 2m vải và cần 20 giờ; may 1 quần âu hết 1,5m vải và cần 5 giờ. Giới hạn: không quá 900m vải và không quá 6000 giờ công. Thị trường: số quần không nhỏ hơn số áo và không quá 2 lần số áo ($x \\le y \\le 2x$). Lãi: 1 áo lãi 350 nghìn, 1 quần lãi 100 nghìn. Cần may bao nhiêu áo vest và quần âu để thu được tiền lãi cao nhất?",
    "img": "images_b2/xref_130.png",
    "lineCount": 14,
    "solution": "\n          <p><b>Lời giải chi tiết:</b></p>\n          <p>Gọi $x, y$ ($x, y \\in \\mathbb{N}$) lần lượt là số áo vest và quần âu cần may.</p>\n          <p>Hệ bất phương trình ràng buộc:</p>\n          $$\\begin{cases} 2x + 1{,}5y \\le 900 \\iff 4x + 3y \\le 1800 \\\\ 20x + 5y \\le 6000 \\iff 4x + y \\le 1200 \\\\ x \\le y \\le 2x \\\\ x \\ge 0, y \\ge 0 \\end{cases}$$\n          <p>Lợi nhuận thu được: $T(x; y) = 350x + 100y$ (nghìn đồng).</p>\n          <p>Miền nghiệm là tứ giác $OABC$ với các đỉnh:</p>\n          <ul>\n            <li>$O(0; 0) \\implies T = 0$.</li>\n            <li>$A(180; 360)$ (giao điểm $4x + 3y = 1800$ và $y = 2x$): $T(A) = 350(180) + 100(360) = 63\\,000 + 36\\,000 = 99\\,000$ nghìn đồng = 99 triệu đồng.</li>\n            <li>$B(200; 200)$ (giao điểm $4x + y = 1200$ và $y = x$): $T(B) = 350(200) + 100(200) = 90\\,000$ nghìn đồng = 90 triệu đồng.</li>\n            <li>$C(150; 300)$: $T(C) = 350(150) + 100(300) = 52\\,500 + 30\\,000 = 82\\,500$ nghìn đồng.</li>\n          </ul>\n          <p><b>Kết luận:</b> Tiền lãi cao nhất là <b>99 triệu đồng</b> khi phân xưởng may <b>180 áo vest và 360 quần âu</b>.</p>\n        "
  },
  {
    "id": 37,
    "part": "part4",
    "level": "Vận dụng",
    "prompt": "Hình bên mô tả sơ đồ một sân khấu gắn với hệ trục tọa độ $Oxy$ (đơn vị là 1 mét). Phần thính phòng giới hạn bởi hai đường thẳng $d_1, d_2$ là vị trí ngồi của khán giả có thể nhìn thấy dàn hợp xướng. Gọi $(x; y)$ là toạ độ ngồi của khán giả ở thính phòng. Viết hệ bất phương trình bậc nhất hai ẩn $x, y$ mà khán giả có thể nhìn thấy dàn hợp xướng.",
    "img": "images_b2/xref_128.png",
    "lineCount": 12,
    "solution": "\n          <p><b>Lời giải chi tiết:</b></p>\n          <p>• Dựa vào hình vẽ sơ đồ sân khấu, xác định phương trình hai đường thẳng biên $d_1$ và $d_2$ đi qua các điểm mốc trên hệ toạ độ $Oxy$.</p>\n          <p>• Giả sử đường thẳng $d_1$ đi qua gốc toạ độ và điểm định hướng khán phòng, đường thẳng $d_2$ tạo góc nhìn đối xứng qua trục sân khấu.</p>\n          <p>• Vị trí thính phòng khán giả ngồi nằm trong góc tạo bởi hai đường thẳng và nằm phía trước sân khấu ($y > 0$).</p>\n          <p>Hệ bất phương trình bậc nhất hai ẩn mô tả miền thính phòng có dạng tổng quát:</p>\n          $$\\begin{cases} a_1 x + b_1 y + c_1 \\ge 0 \\\\ a_2 x + b_2 y + c_2 \\ge 0 \\\\ y \\ge 0 \\end{cases}$$\n        "
  }
];

// App State
let userAnswers = {};
let isSubmitted = false;
let timerSeconds = 3600; // 60 minutes
let timerInterval = null;
let currentFilter = 'all';

// Initialize on DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  loadSavedState();
  initLucideIcons();
  renderExamContent();
  renderPalette();
  initEventListeners();
  startTimer();
  renderMath();
});

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderMath() {
  if (window.renderMathInElement) {
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
  }
}

// Save and restore local state
function saveState() {
  const state = {
    answers: userAnswers,
    studentName: document.getElementById("studentName")?.value || "",
    studentClass: document.getElementById("studentClass")?.value || "",
    studentId: document.getElementById("studentId")?.value || ""
  };
  try {
    localStorage.setItem("quiz_60p_b2_state", JSON.stringify(state));
  } catch(e) {}
}

function loadSavedState() {
  try {
    const saved = localStorage.getItem("quiz_60p_b2_state");
    if (saved) {
      const state = JSON.parse(saved);
      if (state.answers) userAnswers = state.answers;
      if (state.studentName && document.getElementById("studentName")) {
        document.getElementById("studentName").value = state.studentName;
      }
      if (state.studentClass && document.getElementById("studentClass")) {
        document.getElementById("studentClass").value = state.studentClass;
      }
      if (state.studentId && document.getElementById("studentId")) {
        document.getElementById("studentId").value = state.studentId;
      }
    }
  } catch(e) {}
}

// Timer 60 minutes
function startTimer() {
  const timerEl = document.getElementById("timer");
  const ringEl = document.getElementById("timerRing");
  const totalSec = 3600;

  timerInterval = setInterval(() => {
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      handleAutoSubmit();
      return;
    }
    timerSeconds--;
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    if (timerEl) {
      timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    // Update ring progress
    if (ringEl) {
      const percent = (timerSeconds / totalSec) * 100;
      ringEl.setAttribute("stroke-dasharray", `${percent}, 100`);
      if (timerSeconds <= 300) {
        ringEl.style.stroke = "#ef4444";
      }
    }
  }, 1000);
}

function handleAutoSubmit() {
  if (!isSubmitted) {
    alert("Đã hết 60 phút làm bài! Hệ thống tự động thu bài và chấm điểm.");
    finalizeSubmit();
  }
}

// Render Main Content
function renderExamContent() {
  const container = document.getElementById("examMainContent");
  if (!container) return;

  let html = "";

  // 1. THEORY SECTION (B2.1)
  html += `
    <div class="exam-section-wrap" id="section-theory" data-part="theory">
      <div class="part-banner theory">
        <span><i data-lucide="bookmark-check" style="display:inline;vertical-align:middle;margin-right:6px;"></i> B2.1: TÓM TẮT LÝ THUYẾT VÀ PHƯƠNG PHÁP GIẢI TRỌNG TÂM</span>
        <span style="font-size:0.85rem; font-weight:600; opacity:0.9;">Tra cứu lý thuyết</span>
      </div>
  `;

  // 3 Theory items
  EXAM_THEORY.sections.forEach(sec => {
    html += `
      <div class="exam-card" style="margin-bottom:14px;">
        <div class="card-top-header">
          <span class="q-title" style="color:#0d9488;"><i data-lucide="sparkles"></i> ${sec.title}</span>
        </div>
        <div class="q-content">${sec.content}</div>
      </div>
    `;
  });

  // 4 Theory examples
  html += `
    <div class="part-banner theory" style="background:linear-gradient(135deg, #0f766e, #115e59); margin-top:20px;">
      <span><i data-lucide="book-open" style="display:inline;vertical-align:middle;margin-right:6px;"></i> BỐN VÍ DỤ MẪU KINH ĐIỂN CÓ LỜI GIẢI CHI TIẾT</span>
    </div>
  `;

  EXAM_THEORY.examples.forEach(ex => {
    html += `
      <div class="exam-card" style="margin-bottom:14px; border-left:4px solid #0d9488;">
        <div class="card-top-header">
          <span class="q-title" style="color:#0f766e;"><i data-lucide="check-circle-2"></i> ${ex.title}</span>
          <span class="q-level-tag" style="background:#ccfbf1; color:#0f766e; border-color:#99f6e4;">Ví dụ chuẩn SGK</span>
        </div>
        <div class="q-content" style="font-weight:600;">${ex.prompt}</div>
        <div class="solution-box show" style="background:#f0fdfa; border-color:#0d9488; margin-top:6px;">
          <div class="solution-header" style="color:#0f766e;">
            <span><i data-lucide="check-square"></i> Lời giải chuẩn mực:</span>
            <span class="badge-pill pill-success">Đáp số: ${ex.ans}</span>
          </div>
          <div class="solution-body">${ex.solution}</div>
        </div>
      </div>
    `;
  });

  html += `</div>`; // Close theory section

  // 2. PART I: MULTIPLE CHOICE (Q1 -> Q16)
  html += `
    <div class="exam-section-wrap" id="section-part1" data-part="part1">
      <div class="part-banner">
        <span>PHẦN I (B2.2): CÂU HỎI TRẮC NGHIỆM BỐN PHƯƠNG ÁN LỰA CHỌN (CÂU 1 - 16)</span>
        <span style="font-size:0.85rem; font-weight:600; opacity:0.9;">16 câu • 4.0 điểm</span>
      </div>
  `;

  EXAM_QUESTIONS.filter(q => q.part === "part1").forEach(q => {
    const qAns = userAnswers[q.id];
    const isAns = qAns !== undefined;
    html += `
      <div class="exam-card ${isAns ? 'answered' : ''}" id="card-q-${q.id}" data-qid="${q.id}">
        <div class="card-top-header">
          <span class="q-title"><i data-lucide="help-circle"></i> Câu ${q.id}.</span>
          <span class="q-level-tag">${q.level}</span>
        </div>
        <div class="q-content">${q.prompt}</div>
    `;

    // Diagram/Image if present
    if (q.img) {
      html += `
        <div class="q-image-box">
          <img src="${q.img}" alt="Hình minh hoạ Câu ${q.id}">
        </div>
      `;
    }

    // Special Q4 diagrams
    if (q.type === "dang1_q4") {
      html += `<div class="diagram-options-grid">`;
      q.diagrams.forEach((diag, idx) => {
        const isSel = qAns === idx;
        html += `
          <div class="diagram-option-card ${isSel ? 'selected' : ''}" onclick="selectOption(${q.id}, ${idx})">
            <img src="${diag[1]}" alt="${diag[2]}">
            <div style="font-weight:700; margin-top:6px; color:var(--primary);">${diag[0]}. ${diag[2]}</div>
          </div>
        `;
      });
      html += `</div>`;
    } else {
      // Standard 4 options
      const gridCls = q.fourCols ? "options-grid four-cols" : "options-grid";
      const letters = ["A", "B", "C", "D"];
      html += `<div class="${gridCls}">`;
      q.options.forEach((opt, idx) => {
        const isSel = qAns === idx;
        html += `
          <div class="option-item ${isSel ? 'selected' : ''}" id="opt-${q.id}-${idx}" onclick="selectOption(${q.id}, ${idx})">
            <span class="option-letter">${letters[idx]}</span>
            <span>${opt}</span>
          </div>
        `;
      });
      html += `</div>`;
    }

    // Solution drawer (hidden initially)
    html += `
        <div class="solution-box" id="sol-${q.id}">
          <div class="solution-header">
            <span><i data-lucide="file-text"></i> Lời giải chi tiết:</span>
            <span class="badge-pill pill-primary">Đáp án đúng: ${["A", "B", "C", "D"][q.correctIndex]}</span>
          </div>
          <div class="solution-body">${q.explanation}</div>
        </div>
      </div>
    `;
  });
  html += `</div>`; // Close part 1

  // 3. PART II: TRUE/FALSE (Q17 -> Q21)
  html += `
    <div class="exam-section-wrap" id="section-part2" data-part="part2">
      <div class="part-banner danger">
        <span>PHẦN II (B2.3): CÂU HỎI TRẮC NGHIỆM ĐÚNG / SAI (CÂU 17 - 21)</span>
        <span style="font-size:0.85rem; font-weight:600; opacity:0.9;">5 câu (20 ý) • 3.0 điểm</span>
      </div>
  `;

  EXAM_QUESTIONS.filter(q => q.part === "part2").forEach(q => {
    const qAnsObj = userAnswers[q.id] || {};
    const isAllAns = Object.keys(qAnsObj).length === 4;
    html += `
      <div class="exam-card ${isAllAns ? 'answered' : ''}" id="card-q-${q.id}" data-qid="${q.id}">
        <div class="card-top-header">
          <span class="q-title" style="color:var(--exam-accent);"><i data-lucide="check-check"></i> Câu ${q.id}.</span>
          <span class="q-level-tag">${q.level}</span>
        </div>
        <div class="q-content">${q.prompt}</div>
    `;

    if (q.img) {
      html += `
        <div class="q-image-box">
          <img src="${q.img}" alt="Hình minh hoạ Câu ${q.id}">
        </div>
      `;
    }

    html += `<table class="tf-table"><tbody>`;
    q.statements.forEach(st => {
      const stAns = qAnsObj[st.id];
      html += `
        <tr id="tf-row-${q.id}-${st.id}">
          <td style="width:70%;" class="tf-stmt-text">
            <b>${st.label})</b> ${st.text}
            <div class="tf-reason-inline" id="tf-reason-${q.id}-${st.id}" style="display:none; font-size:0.85rem; color:#475569; margin-top:4px; padding-left:14px; border-left:2px solid #cbd5e1;">
              ${st.reason}
            </div>
          </td>
          <td style="width:30%;">
            <div class="tf-action-group">
              <button type="button" class="tf-choice-btn ${stAns === true ? 'active-true' : ''}" id="btn-tf-${q.id}-${st.id}-true" onclick="selectTF(${q.id}, '${st.id}', true)">Đúng</button>
              <button type="button" class="tf-choice-btn ${stAns === false ? 'active-false' : ''}" id="btn-tf-${q.id}-${st.id}-false" onclick="selectTF(${q.id}, '${st.id}', false)">Sai</button>
            </div>
          </td>
        </tr>
      `;
    });
    html += `</tbody></table>`;

    html += `
        <div class="solution-box" id="sol-${q.id}">
          <div class="solution-header" style="color:var(--exam-accent);">
            <span><i data-lucide="file-text"></i> Tổng quan miền nghiệm & Phân tích mệnh đề:</span>
          </div>
          <div class="solution-body">${q.explanation}</div>
        </div>
      </div>
    `;
  });
  html += `</div>`; // Close part 2

  // 4. PART III: SHORT ANSWER (Q22 -> Q30)
  html += `
    <div class="exam-section-wrap" id="section-part3" data-part="part3">
      <div class="part-banner warning">
        <span>PHẦN III (B2.4): CÂU HỎI TRẮC NGHIỆM ĐIỀN ĐÁP ÁN NGẮN (CÂU 22 - 30)</span>
        <span style="font-size:0.85rem; font-weight:600; opacity:0.9;">9 câu • 2.0 điểm</span>
      </div>
  `;

  EXAM_QUESTIONS.filter(q => q.part === "part3").forEach(q => {
    const val = userAnswers[q.id] || "";
    const isAns = val.trim() !== "";
    html += `
      <div class="exam-card ${isAns ? 'answered' : ''}" id="card-q-${q.id}" data-qid="${q.id}">
        <div class="card-top-header">
          <span class="q-title" style="color:var(--exam-warning);"><i data-lucide="edit-3"></i> Câu ${q.id}.</span>
          <span class="q-level-tag">${q.level}</span>
        </div>
        <div class="q-content">${q.prompt}</div>
    `;

    if (q.img) {
      html += `
        <div class="q-image-box">
          <img src="${q.img}" alt="Hình minh hoạ Câu ${q.id}">
        </div>
      `;
    }

    html += `
      <div class="short-input-box">
        <i data-lucide="corner-down-right" style="color:var(--primary);"></i>
        <label style="font-weight:700; color:var(--text-secondary);">Thí sinh điền đáp số:</label>
        <input type="text" class="short-input-field" id="input-q-${q.id}" value="${val}" placeholder="Nhập số..." oninput="handleShortInput(${q.id}, this.value)">
      </div>
      <div class="solution-box" id="sol-${q.id}">
        <div class="solution-header" style="color:var(--exam-warning);">
          <span><i data-lucide="file-text"></i> Lời giải chi tiết:</span>
          <span class="badge-pill pill-primary">Đáp số chuẩn: ${q.displayAns}</span>
        </div>
        <div class="solution-body">${q.explanation}</div>
      </div>
    </div>
    `;
  });
  html += `</div>`; // Close part 3

  // 5. PART IV: ESSAY (Q31 -> Q37)
  html += `
    <div class="exam-section-wrap" id="section-part4" data-part="part4">
      <div class="part-banner purple">
        <span>PHẦN IV (B2.5): BÀI TẬP TỰ LUẬN SGK & SBT (CÂU 31 - 37)</span>
        <span style="font-size:0.85rem; font-weight:600; opacity:0.9;">7 bài thực tế • Dòng kẻ 14pt • 1.0 điểm</span>
      </div>
  `;

  EXAM_QUESTIONS.filter(q => q.part === "part4").forEach(q => {
    const val = userAnswers[q.id] || "";
    const isAns = val.trim() !== "";
    html += `
      <div class="exam-card ${isAns ? 'answered' : ''}" id="card-q-${q.id}" data-qid="${q.id}">
        <div class="card-top-header">
          <span class="q-title" style="color:#7c3aed;"><i data-lucide="pen-tool"></i> Câu ${q.id}.</span>
          <span class="q-level-tag">${q.level}</span>
        </div>
        <div class="q-content">${q.prompt}</div>
    `;

    if (q.img) {
      html += `
        <div class="q-image-box">
          <img src="${q.img}" alt="Hình minh hoạ Câu ${q.id}">
        </div>
      `;
    }

    html += `
      <div class="essay-area-box">
        <label style="font-size:0.85rem; font-weight:700; color:#7c3aed;">
          ✍️ BÀI LÀM TỰ LUẬN TRỰC TIẾP (CỠ CHỮ 14PT • GIÃN DÒNG 1.5):
        </label>
        <textarea class="essay-textarea" id="essay-q-${q.id}" placeholder="Nhập các bước lập luận, gọi ẩn, hệ bất phương trình và kết luận..." oninput="handleEssayInput(${q.id}, this.value)">${val}</textarea>
      </div>

      <div style="text-align:right; margin-top:8px;">
        <button type="button" class="btn btn-secondary" onclick="toggleSolution(${q.id})" style="font-size:0.85rem; padding:6px 14px;">
          <i data-lucide="eye"></i> Xem gợi ý & Lời giải mẫu
        </button>
      </div>

      <div class="solution-box" id="sol-${q.id}">
        <div class="solution-header" style="color:#7c3aed;">
          <span><i data-lucide="file-text"></i> Hướng dẫn chấm & Lời giải chi tiết từng bước:</span>
        </div>
        <div class="solution-body">${q.solution}</div>
      </div>
    </div>
    `;
  });
  html += `</div>`; // Close part 4

  container.innerHTML = html;
  initLucideIcons();
}

// Render Question Palette
function renderPalette() {
  const p1 = document.getElementById("palettePart1");
  const p2 = document.getElementById("palettePart2");
  const p3 = document.getElementById("palettePart3");
  const p4 = document.getElementById("palettePart4");

  if (p1) p1.innerHTML = "";
  if (p2) p2.innerHTML = "";
  if (p3) p3.innerHTML = "";
  if (p4) p4.innerHTML = "";

  EXAM_QUESTIONS.forEach(q => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "palette-btn";
    btn.id = `palette-btn-${q.id}`;
    btn.textContent = q.id;
    btn.title = `Chuyển tới Câu ${q.id} (${q.level})`;
    btn.onclick = () => scrollToQuestion(q.id);

    // Initial answered state
    if (isQuestionAnswered(q.id)) {
      btn.classList.add("done");
    }

    if (q.part === "part1" && p1) p1.appendChild(btn);
    else if (q.part === "part2" && p2) p2.appendChild(btn);
    else if (q.part === "part3" && p3) p3.appendChild(btn);
    else if (q.part === "part4" && p4) p4.appendChild(btn);
  });

  updateProgress();
}

function isQuestionAnswered(qid) {
  const q = EXAM_QUESTIONS.find(x => x.id === qid);
  if (!q) return false;
  const ans = userAnswers[qid];
  if (q.part === "part1") return ans !== undefined;
  if (q.part === "part2") return ans && Object.keys(ans).length === 4;
  if (q.part === "part3") return ans && ans.trim() !== "";
  if (q.part === "part4") return ans && ans.trim() !== "";
  return false;
}

function updateProgress() {
  let answeredCount = 0;
  EXAM_QUESTIONS.forEach(q => {
    const pBtn = document.getElementById(`palette-btn-${q.id}`);
    const card = document.getElementById(`card-q-${q.id}`);
    if (isQuestionAnswered(q.id)) {
      answeredCount++;
      if (pBtn && !isSubmitted) pBtn.classList.add("done");
      if (card && !isSubmitted) card.classList.add("answered");
    } else {
      if (pBtn && !isSubmitted) pBtn.classList.remove("done");
      if (card && !isSubmitted) card.classList.remove("answered");
    }
  });

  const pct = Math.round((answeredCount / EXAM_QUESTIONS.length) * 100);
  const badge = document.getElementById("answeredCountBadge");
  const fill = document.getElementById("examProgressFill");
  const pctTxt = document.getElementById("examProgressPercent");

  if (badge) badge.textContent = `${answeredCount} / ${EXAM_QUESTIONS.length}`;
  if (fill) fill.style.width = `${pct}%`;
  if (pctTxt) pctTxt.textContent = `${pct}%`;
}

function scrollToQuestion(qid) {
  // Show section if filtered out
  const q = EXAM_QUESTIONS.find(x => x.id === qid);
  if (q && currentFilter !== 'all' && currentFilter !== q.part) {
    switchFilter(q.part);
  }

  const target = document.getElementById(`card-q-${qid}`);
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.style.transition = "transform 0.2s, box-shadow 0.2s";
    target.style.transform = "scale(1.01)";
    target.style.boxShadow = "0 0 0 3px var(--primary-glow)";
    setTimeout(() => {
      target.style.transform = "none";
      target.style.boxShadow = "";
    }, 800);
  }
}

// User Interaction Handlers
window.selectOption = function(qid, optIndex) {
  if (isSubmitted) return;
  userAnswers[qid] = optIndex;
  saveState();

  const q = EXAM_QUESTIONS.find(x => x.id === qid);
  if (q.type === "dang1_q4") {
    const card = document.getElementById(`card-q-${qid}`);
    if (card) {
      const diagCards = card.querySelectorAll(".diagram-option-card");
      diagCards.forEach((dc, idx) => {
        dc.classList.toggle("selected", idx === optIndex);
      });
    }
  } else {
    for (let i = 0; i < 4; i++) {
      const el = document.getElementById(`opt-${qid}-${i}`);
      if (el) el.classList.toggle("selected", i === optIndex);
    }
  }

  updateProgress();
};

window.selectTF = function(qid, stId, val) {
  if (isSubmitted) return;
  if (!userAnswers[qid]) userAnswers[qid] = {};
  userAnswers[qid][stId] = val;
  saveState();

  const btnTrue = document.getElementById(`btn-tf-${qid}-${stId}-true`);
  const btnFalse = document.getElementById(`btn-tf-${qid}-${stId}-false`);

  if (btnTrue) btnTrue.classList.toggle("active-true", val === true);
  if (btnFalse) btnFalse.classList.toggle("active-false", val === false);

  updateProgress();
};

window.handleShortInput = function(qid, val) {
  if (isSubmitted) return;
  userAnswers[qid] = val;
  saveState();
  updateProgress();
};

window.handleEssayInput = function(qid, val) {
  userAnswers[qid] = val;
  saveState();
  updateProgress();
};

window.toggleSolution = function(qid) {
  const sol = document.getElementById(`sol-${qid}`);
  if (sol) {
    sol.classList.toggle("show");
    renderMath();
  }
};

// Tab filter logic
function switchFilter(filter) {
  currentFilter = filter;
  const btns = document.querySelectorAll(".exam-tab-btn");
  btns.forEach(b => {
    b.classList.toggle("active", b.dataset.filter === filter);
  });

  const secTheory = document.getElementById("section-theory");
  const secP1 = document.getElementById("section-part1");
  const secP2 = document.getElementById("section-part2");
  const secP3 = document.getElementById("section-part3");
  const secP4 = document.getElementById("section-part4");

  if (filter === "all") {
    if (secTheory) secTheory.style.display = "block";
    if (secP1) secP1.style.display = "block";
    if (secP2) secP2.style.display = "block";
    if (secP3) secP3.style.display = "block";
    if (secP4) secP4.style.display = "block";
  } else {
    if (secTheory) secTheory.style.display = (filter === "theory") ? "block" : "none";
    if (secP1) secP1.style.display = (filter === "part1") ? "block" : "none";
    if (secP2) secP2.style.display = (filter === "part2") ? "block" : "none";
    if (secP3) secP3.style.display = (filter === "part3") ? "block" : "none";
    if (secP4) secP4.style.display = (filter === "part4") ? "block" : "none";
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Modal and Submission
function initEventListeners() {
  // Tab Bar Click
  const tabBar = document.getElementById("examTabBar");
  tabBar?.addEventListener("click", e => {
    const btn = e.target.closest(".exam-tab-btn");
    if (btn) switchFilter(btn.dataset.filter);
  });

  // Font Zoom Buttons
  document.getElementById("fontDecreaseBtn")?.addEventListener("click", () => setFontSize("normal"));
  document.getElementById("fontResetBtn")?.addEventListener("click", () => setFontSize("normal"));
  document.getElementById("fontIncreaseBtn")?.addEventListener("click", () => setFontSize("large"));

  // Theme Toggle Button
  document.getElementById("themeToggleBtn")?.addEventListener("click", toggleTheme);

  // Submit Buttons
  document.getElementById("headerSubmitBtn")?.addEventListener("click", showConfirmModal);
  document.getElementById("sidebarSubmitBtn")?.addEventListener("click", showConfirmModal);

  document.getElementById("cancelSubmitBtn")?.addEventListener("click", () => {
    document.getElementById("confirmModal")?.classList.remove("show");
  });

  document.getElementById("finalizeSubmitBtn")?.addEventListener("click", finalizeSubmit);

  document.getElementById("closeScoreModalBtn")?.addEventListener("click", () => {
    document.getElementById("scoreModal")?.classList.remove("show");
    switchFilter("all");
  });

  document.getElementById("retakeExamBtn")?.addEventListener("click", resetExam);

  // Print button
  document.getElementById("headerPrintBtn")?.addEventListener("click", () => {
    window.print();
  });
}

function setFontSize(mode) {
  if (mode === "large") {
    document.documentElement.setAttribute("data-font-size", "large");
    document.getElementById("fontIncreaseBtn")?.classList.add("active");
    document.getElementById("fontResetBtn")?.classList.remove("active");
  } else {
    document.documentElement.removeAttribute("data-font-size");
    document.getElementById("fontResetBtn")?.classList.add("active");
    document.getElementById("fontIncreaseBtn")?.classList.remove("active");
  }
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme") || "light";
  const next = (cur === "dark") ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  const icon = document.getElementById("themeIcon");
  if (icon) icon.setAttribute("data-lucide", next === "dark" ? "sun" : "moon");
  initLucideIcons();
}

function showConfirmModal() {
  let count = 0;
  EXAM_QUESTIONS.forEach(q => {
    if (isQuestionAnswered(q.id)) count++;
  });
  const numEl = document.getElementById("confirmAnsweredNum");
  if (numEl) numEl.textContent = count;
  document.getElementById("confirmModal")?.classList.add("show");
}

function finalizeSubmit() {
  isSubmitted = true;
  clearInterval(timerInterval);
  document.getElementById("confirmModal")?.classList.remove("show");

  let scorePart1 = 0;
  let scorePart2 = 0;
  let scorePart3 = 0;
  let scorePart4 = 1.0; // Essay full completion points

  // Evaluate Part 1 (16 câu, 0.25đ/câu = 4.0đ)
  EXAM_QUESTIONS.filter(q => q.part === "part1").forEach(q => {
    const userAns = userAnswers[q.id];
    const isCorr = (userAns === q.correctIndex);
    const card = document.getElementById(`card-q-${q.id}`);
    const pBtn = document.getElementById(`palette-btn-${q.id}`);

    if (isCorr) {
      scorePart1 += (4.0 / 16);
      if (card) card.classList.add("correct-res");
      if (pBtn) {
        pBtn.classList.remove("done");
        pBtn.classList.add("res-correct");
      }
    } else {
      if (card) card.classList.add("wrong-res");
      if (pBtn) {
        pBtn.classList.remove("done");
        pBtn.classList.add("res-wrong");
      }
    }

    // Mark options
    if (q.type !== "dang1_q4") {
      for (let i = 0; i < 4; i++) {
        const optEl = document.getElementById(`opt-${q.id}-${i}`);
        if (optEl) {
          if (i === q.correctIndex) optEl.classList.add("correct-ans");
          else if (i === userAns) optEl.classList.add("wrong-ans");
        }
      }
    }

    // Open solution drawer
    const sol = document.getElementById(`sol-${q.id}`);
    if (sol) sol.classList.add("show");
  });

  // Evaluate Part 2 (5 câu, thang điểm GDPT 2018: 1 ý=0.1, 2 ý=0.25, 3 ý=0.5, 4 ý=1.0)
  // Quy đổi về 3.0 điểm
  let part2Raw = 0;
  EXAM_QUESTIONS.filter(q => q.part === "part2").forEach(q => {
    const uObj = userAnswers[q.id] || {};
    let correctCount = 0;
    q.statements.forEach(st => {
      const userVal = uObj[st.id];
      const isRight = (userVal === st.correct);
      if (isRight) correctCount++;

      // Show inline reason
      const reasonEl = document.getElementById(`tf-reason-${q.id}-${st.id}`);
      if (reasonEl) reasonEl.style.display = "block";

      const btnT = document.getElementById(`btn-tf-${q.id}-${st.id}-true`);
      const btnF = document.getElementById(`btn-tf-${q.id}-${st.id}-false`);
      if (st.correct === true && btnT) btnT.style.border = "2px solid #10b981";
      if (st.correct === false && btnF) btnF.style.border = "2px solid #10b981";
    });

    let qScore = 0;
    if (correctCount === 1) qScore = 0.1;
    else if (correctCount === 2) qScore = 0.25;
    else if (correctCount === 3) qScore = 0.5;
    else if (correctCount === 4) qScore = 1.0;
    part2Raw += qScore;

    const card = document.getElementById(`card-q-${q.id}`);
    const pBtn = document.getElementById(`palette-btn-${q.id}`);
    if (correctCount >= 3) {
      if (card) card.classList.add("correct-res");
      if (pBtn) { pBtn.classList.remove("done"); pBtn.classList.add("res-correct"); }
    } else {
      if (card) card.classList.add("wrong-res");
      if (pBtn) { pBtn.classList.remove("done"); pBtn.classList.add("res-wrong"); }
    }

    const sol = document.getElementById(`sol-${q.id}`);
    if (sol) sol.classList.add("show");
  });
  scorePart2 = (part2Raw / 5.0) * 3.0;

  // Evaluate Part 3 (9 câu, 2.0 điểm)
  EXAM_QUESTIONS.filter(q => q.part === "part3").forEach(q => {
    const userVal = (userAnswers[q.id] || "").trim().toLowerCase().replace(",", ".");
    const isCorr = q.acceptedAnswers.some(ans => ans.toLowerCase().replace(",", ".") === userVal);
    const card = document.getElementById(`card-q-${q.id}`);
    const pBtn = document.getElementById(`palette-btn-${q.id}`);
    const inputEl = document.getElementById(`input-q-${q.id}`);

    if (isCorr) {
      scorePart3 += (2.0 / 9);
      if (card) card.classList.add("correct-res");
      if (pBtn) { pBtn.classList.remove("done"); pBtn.classList.add("res-correct"); }
      if (inputEl) inputEl.style.borderColor = "#10b981";
    } else {
      if (card) card.classList.add("wrong-res");
      if (pBtn) { pBtn.classList.remove("done"); pBtn.classList.add("res-wrong"); }
      if (inputEl) inputEl.style.borderColor = "#ef4444";
    }

    const sol = document.getElementById(`sol-${q.id}`);
    if (sol) sol.classList.add("show");
  });

  // Part 4 (Tự luận): Open all solutions for review
  EXAM_QUESTIONS.filter(q => q.part === "part4").forEach(q => {
    const sol = document.getElementById(`sol-${q.id}`);
    if (sol) sol.classList.add("show");
  });

  const finalTotal = Math.min(10, Math.round((scorePart1 + scorePart2 + scorePart3 + scorePart4) * 10) / 10);

  // Update Score Modal
  document.getElementById("finalScoreVal").textContent = finalTotal.toFixed(1);
  document.getElementById("scorePart1Val").textContent = `${scorePart1.toFixed(2)} / 4.0 đ`;
  document.getElementById("scorePart2Val").textContent = `${scorePart2.toFixed(2)} / 3.0 đ`;
  document.getElementById("scorePart3Val").textContent = `${scorePart3.toFixed(2)} / 2.0 đ`;
  document.getElementById("scorePart4Val").textContent = `${scorePart4.toFixed(1)} / 1.0 đ`;

  const rankEl = document.getElementById("scoreRankBadge");
  if (rankEl) {
    if (finalTotal >= 8.5) {
      rankEl.textContent = "Xếp loại: Xuất sắc • Nắm vững toàn diện kiến thức B2!";
      rankEl.style.color = "#10b981";
    } else if (finalTotal >= 7.0) {
      rankEl.textContent = "Xếp loại: Giỏi • Đạt yêu cầu cao chuẩn kiến thức kỹ năng!";
      rankEl.style.color = "#4f46e5";
    } else if (finalTotal >= 5.0) {
      rankEl.textContent = "Xếp loại: Khá • Cần rèn luyện thêm bài toán thực tế cực trị!";
      rankEl.style.color = "#d97706";
    } else {
      rankEl.textContent = "Xếp loại: Cần cố gắng • Hãy đọc lại tóm tắt Lý thuyết B2.1!";
      rankEl.style.color = "#ef4444";
    }
  }

  document.getElementById("scoreModal")?.classList.add("show");
  renderMath();
}

function resetExam() {
  if (!confirm("Bạn có chắc chắn muốn làm lại bài thi từ đầu?")) return;
  try {
    localStorage.removeItem("quiz_60p_b2_state");
  } catch(e) {}
  window.location.reload();
}
