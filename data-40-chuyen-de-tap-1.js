/**
 * Dữ liệu 21 Chuyên đề Ôn thi Tốt nghiệp THPT 2026 (Tập 1: 1 - 21)
 * Chuẩn Sư phạm - Khoa Cơ Bản - Trường Cao Đẳng Nghề Số 1 - BQP & THPT GDPT 2018
 * GV: Nguyễn Văn Sang
 */

const TOPICS_DATA = [
  {
    "id": 1,
    "code": "CĐ-01",
    "title": "Chuyên đề 01: PHƯƠNG TRÌNH LƯỢNG GIÁC",
    "category": "algebra_11",
    "categoryName": "Đại số & Giải tích 11",
    "grade": "Lớp 11",
    "badgeColor": "#6366f1",
    "summary": "Nghiệm phương trình lượng giác cơ bản: sin x = m, cos x = m, tan x = m, cot x = m và các trường hợp đặc biệt.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Phương trình $\\sin x = m$</h4>\n        <ul class=\"theory-bullets\">\n          <li>Nếu $|m| > 1$: Phương trình vô nghiệm.</li>\n          <li>Nếu $|m| \\le 1$: Tồn tại duy nhất $\\alpha \\in \\left[-\\frac{\\pi}{2}; \\frac{\\pi}{2}\\right]$ sao cho $\\sin\\alpha = m$. Khi đó:\n            $$\\sin x = \\sin\\alpha \\Leftrightarrow \\begin{cases} x = \\alpha + k2\\pi \\\\ x = \\pi - \\alpha + k2\\pi \\end{cases} \\quad (k \\in \\mathbb{Z})$$\n          </li>\n          <li><strong>Các trường hợp đặc biệt:</strong>\n            $$\\sin x = 0 \\Leftrightarrow x = k\\pi; \\quad \\sin x = 1 \\Leftrightarrow x = \\frac{\\pi}{2} + k2\\pi; \\quad \\sin x = -1 \\Leftrightarrow x = -\\frac{\\pi}{2} + k2\\pi$$\n          </li>\n        </ul>\n\n        <h4 class=\"theory-heading\">2. Phương trình $\\cos x = m$</h4>\n        <ul class=\"theory-bullets\">\n          <li>Nếu $|m| > 1$: Phương trình vô nghiệm.</li>\n          <li>Nếu $|m| \\le 1$: Tồn tại duy nhất $\\alpha \\in [0; \\pi]$ sao cho $\\cos\\alpha = m$. Khi đó:\n            $$\\cos x = \\cos\\alpha \\Leftrightarrow x = \\pm \\alpha + k2\\pi \\quad (k \\in \\mathbb{Z})$$\n          </li>\n          <li><strong>Các trường hợp đặc biệt:</strong>\n            $$\\cos x = 0 \\Leftrightarrow x = \\frac{\\pi}{2} + k\\pi; \\quad \\cos x = 1 \\Leftrightarrow x = k2\\pi; \\quad \\cos x = -1 \\Leftrightarrow x = \\pi + k2\\pi$$\n          </li>\n        </ul>\n\n        <h4 class=\"theory-heading\">3. Phương trình $\\tan x = m$ và $\\cot x = m$</h4>\n        <ul class=\"theory-bullets\">\n          <li>$\\tan x = \\tan\\alpha \\Leftrightarrow x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})$ với điều kiện $x \\ne \\frac{\\pi}{2} + k\\pi$.</li>\n          <li>$\\cot x = \\cot\\alpha \\Leftrightarrow x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})$ với điều kiện $x \\ne k\\pi$.</li>\n        </ul>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ01_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Tập nghiệm của phương trình $\\sin x = \\frac{1}{2}$ là:",
        "options": [
          "$S = \\left\\{ \\frac{\\pi}{6} + k2\\pi, \\frac{5\\pi}{6} + k2\\pi, k \\in \\mathbb{Z} \\right\\}$",
          "$S = \\left\\{ \\frac{\\pi}{3} + k2\\pi, \\frac{2\\pi}{3} + k2\\pi, k \\in \\mathbb{Z} \\right\\}$",
          "$S = \\left\\{ \\pm \\frac{\\pi}{6} + k2\\pi, k \\in \\mathbb{Z} \\right\\}$",
          "$S = \\left\\{ \\frac{\\pi}{6} + k\\pi, k \\in \\mathbb{Z} \\right\\}$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Ta có $\\sin x = \\sin \\frac{\\pi}{6} \\Leftrightarrow x = \\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\pi - \\frac{\\pi}{6} + k2\\pi = \\frac{5\\pi}{6} + k2\\pi$ ($k \\in \\mathbb{Z}$)."
      },
      {
        "id": "CĐ01_Q2",
        "num": 2,
        "type": "multiple_choice",
        "prompt": "Phương trình $\\cos\\left(2x - \\frac{\\pi}{3}\\right) = 0$ có nghiệm là:",
        "options": [
          "$x = \\frac{5\\pi}{12} + k\\frac{\\pi}{2}, k \\in \\mathbb{Z}$",
          "$x = \\frac{\\pi}{6} + k\\pi, k \\in \\mathbb{Z}$",
          "$x = \\frac{5\\pi}{6} + k\\pi, k \\in \\mathbb{Z}$",
          "$x = \\frac{\\pi}{3} + k2\\pi, k \\in \\mathbb{Z}$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "$\\cos\\left(2x - \\frac{\\pi}{3}\\right) = 0 \\Leftrightarrow 2x - \\frac{\\pi}{3} = \\frac{\\pi}{2} + k\\pi \\Leftrightarrow 2x = \\frac{5\\pi}{6} + k\\pi \\Leftrightarrow x = \\frac{5\\pi}{12} + k\\frac{\\pi}{2}$ ($k \\in \\mathbb{Z}$)."
      },
      {
        "id": "CĐ01_Q3",
        "num": 3,
        "type": "short_answer",
        "prompt": "Tìm số nghiệm của phương trình $2\\sin x - 1 = 0$ thuộc đoạn $[0; 2\\pi]$.",
        "correct": "2",
        "lines": 10,
        "hint": "Phương trình tương đương $\\sin x = \\frac{1}{2} \\Leftrightarrow x = \\frac{\\pi}{6} + k2\\pi$ hoặc $x = \\frac{5\\pi}{6} + k2\\pi$. Trên đoạn $[0; 2\\pi]$, ta có đúng 2 nghiệm là $x_1 = \\frac{\\pi}{6}$ và $x_2 = \\frac{5\\pi}{6}$."
      },
      {
        "id": "CĐ01_Q4",
        "num": 4,
        "type": "essay",
        "prompt": "(Tự luận) Giải phương trình lượng giác: $\\sqrt{3}\\sin 2x + \\cos 2x = \\sqrt{2}$.",
        "correct": "Tự luận",
        "lines": 12,
        "hint": "Chia cả hai vế cho $\\sqrt{(\\sqrt{3})^2 + 1^2} = 2$: $\\frac{\\sqrt{3}}{2}\\sin 2x + \\frac{1}{2}\\cos 2x = \\frac{\\sqrt{2}}{2} \\Leftrightarrow \\sin\\left(2x + \\frac{\\pi}{6}\\right) = \\sin \\frac{\\pi}{4}$. Suy ra $2x + \\frac{\\pi}{6} = \\frac{\\pi}{4} + k2\\pi$ hoặc $2x + \\frac{\\pi}{6} = \\frac{3\\pi}{4} + k2\\pi$."
      }
    ]
  },
  {
    "id": 2,
    "code": "CĐ-02",
    "title": "Chuyên đề 02: CẤP SỐ CỘNG – CẤP SỐ NHÂN",
    "category": "algebra_11",
    "categoryName": "Đại số & Giải tích 11",
    "grade": "Lớp 11",
    "badgeColor": "#6366f1",
    "summary": "Công sai, công bội, số hạng tổng quát và tổng $n$ số hạng đầu tiên của CSC và CSN.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Cấp số cộng (CSC)</h4>\n        <ul class=\"theory-bullets\">\n          <li>Định nghĩa: $u_{n+1} = u_n + d$ ($d$ là công sai).</li>\n          <li>Số hạng tổng quát: $u_n = u_1 + (n - 1)d \\quad (n \\ge 2)$.</li>\n          <li>Tính chất: $u_k = \\frac{u_{k-1} + u_{k+1}}{2} \\quad (k \\ge 2)$.</li>\n          <li>Tổng $n$ số hạng đầu: $S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n-1)d]}{2}$.</li>\n        </ul>\n\n        <h4 class=\"theory-heading\">2. Cấp số nhân (CSN)</h4>\n        <ul class=\"theory-bullets\">\n          <li>Định nghĩa: $u_{n+1} = u_n \\cdot q$ ($q$ là công bội).</li>\n          <li>Số hạng tổng quát: $u_n = u_1 \\cdot q^{n-1} \\quad (n \\ge 2)$.</li>\n          <li>Tổng $n$ số hạng đầu ($q \\ne 1$): $S_n = \\frac{u_1(1 - q^n)}{1 - q}$.</li>\n          <li>Tổng CSN lùi vô hạn ($|q| < 1$): $S = \\frac{u_1}{1 - q}$.</li>\n        </ul>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ02_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Cho cấp số cộng $(u_n)$ có $u_1 = 3$ và công sai $d = 2$. Số hạng thứ 5 của cấp số cộng là:",
        "options": [
          "$u_5 = 11$",
          "$u_5 = 13$",
          "$u_5 = 10$",
          "$u_5 = 15$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Áp dụng công thức số hạng tổng quát: $u_5 = u_1 + 4d = 3 + 4(2) = 11$."
      },
      {
        "id": "CĐ02_Q2",
        "num": 2,
        "type": "multiple_choice",
        "prompt": "Cho cấp số nhân $(u_n)$ có $u_1 = 2$ và công bội $q = 3$. Tổng $4$ số hạng đầu $S_4$ bằng:",
        "options": [
          "$80$",
          "$26$",
          "$242$",
          "$162$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Áp dụng công thức: $S_4 = \\frac{u_1(1 - q^4)}{1 - q} = \\frac{2(1 - 3^4)}{1 - 3} = \\frac{2(1 - 81)}{-2} = 80$."
      },
      {
        "id": "CĐ02_Q3",
        "num": 3,
        "type": "essay",
        "prompt": "(Tự luận) Một rạp hát có 20 hàng ghế, hàng đầu tiên có 15 ghế, mỗi hàng sau nhiều hơn hàng liền trước 2 ghế. Tính tổng số ghế của rạp hát.",
        "correct": "Tự luận",
        "lines": 10,
        "hint": "Số ghế ở mỗi hàng lập thành một cấp số cộng với $u_1 = 15$, $d = 2$, $n = 20$. Tổng số ghế là $S_{20} = \\frac{20[2(15) + 19(2)]}{2} = 10(30 + 38) = 680$ ghế."
      }
    ]
  },
  {
    "id": 3,
    "code": "CĐ-03",
    "title": "Chuyên đề 03: PHÉP ĐẾM – HOÁN VỊ - CHỈNH HỢP – TỔ HỢP",
    "category": "algebra_11",
    "categoryName": "Đại số & Giải tích 11",
    "grade": "Lớp 11",
    "badgeColor": "#6366f1",
    "summary": "Quy tắc cộng, nhân; hoán vị $P_n$, chỉnh hợp $A_n^k$, tổ hợp $C_n^k$ và ứng dụng giải bài toán thực tế.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Hai quy tắc đếm cơ bản</h4>\n        <ul class=\"theory-bullets\">\n          <li><strong>Quy tắc cộng:</strong> Các phương án thực hiện độc lập, không giao nhau. Số cách là $m + n$.</li>\n          <li><strong>Quy tắc nhân:</strong> Một công việc gồm nhiều giai đoạn liên tiếp. Số cách là $m \\times n$.</li>\n        </ul>\n\n        <h4 class=\"theory-heading\">2. Hoán vị - Chỉnh hợp - Tổ hợp</h4>\n        <ul class=\"theory-bullets\">\n          <li><strong>Hoán vị:</strong> Đổi chỗ $n$ phần tử phân biệt: $P_n = n! = 1 \\cdot 2 \\dots n$.</li>\n          <li><strong>Chỉnh hợp:</strong> Chọn $k$ phần tử từ $n$ phần tử VÀ CÓ sắp xếp thứ tự:\n            $$A_n^k = \\frac{n!}{(n - k)!} \\quad (1 \\le k \\le n)$$\n          </li>\n          <li><strong>Tổ hợp:</strong> Chọn $k$ phần tử từ $n$ phần tử KHÔNG phân biệt thứ tự:\n            $$C_n^k = \\frac{n!}{k!(n - k)!} \\quad (0 \\le k \\le n)$$\n          </li>\n          <li>Tính chất tổ hợp: $C_n^k = C_n^{n-k}$ và $C_n^k + C_n^{k+1} = C_{n+1}^{k+1}$.</li>\n        </ul>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ03_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Có bao nhiêu cách chọn 3 học sinh từ một nhóm gồm 10 học sinh để tham gia đội tình nguyện?",
        "options": [
          "$C_{10}^3 = 120$",
          "$A_{10}^3 = 720$",
          "$10^3 = 1000$",
          "$30$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Chọn 3 học sinh không phân biệt thứ tự vị trí nên là tổ hợp: $C_{10}^3 = \\frac{10!}{3!7!} = \\frac{10 \\times 9 \\times 8}{6} = 120$ cách."
      },
      {
        "id": "CĐ03_Q2",
        "num": 2,
        "type": "short_answer",
        "prompt": "Từ các chữ số $1, 2, 3, 4, 5, 6$ có thể lập được bao nhiêu số tự nhiên gồm 4 chữ số đôi một khác nhau?",
        "correct": "360",
        "lines": 8,
        "hint": "Mỗi số gồm 4 chữ số đôi một khác nhau lấy từ 6 chữ số là một chỉnh hợp chập 4 của 6 phần tử: $A_6^4 = \\frac{6!}{2!} = 6 \\times 5 \\times 4 \\times 3 = 360$ số."
      }
    ]
  },
  {
    "id": 4,
    "code": "CĐ-04",
    "title": "Chuyên đề 04: PHƯƠNG TRÌNH MŨ – PHƯƠNG TRÌNH LOGARIT",
    "category": "algebra_11",
    "categoryName": "Đại số & Giải tích 11",
    "grade": "Lớp 11",
    "badgeColor": "#6366f1",
    "summary": "Nghiệm phương trình $a^x = b$, $\\log_a x = b$, đưa về cùng cơ số, đặt ẩn phụ và logarit hóa.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Phương trình mũ cơ bản $a^x = b$ ($0 < a \\ne 1$)</h4>\n        <ul class=\"theory-bullets\">\n          <li>Nếu $b \\le 0$: Phương trình vô nghiệm.</li>\n          <li>Nếu $b > 0$: Phương trình có nghiệm duy nhất $x = \\log_a b$.</li>\n          <li>Dạng cùng cơ số: $a^{f(x)} = a^{g(x)} \\Leftrightarrow f(x) = g(x)$.</li>\n        </ul>\n\n        <h4 class=\"theory-heading\">2. Phương trình logarit cơ bản $\\log_a x = b$ ($0 < a \\ne 1$)</h4>\n        <ul class=\"theory-bullets\">\n          <li>Phương trình luôn có nghiệm duy nhất $x = a^b$.</li>\n          <li>Dạng cùng cơ số: $\\log_a f(x) = \\log_a g(x) \\Leftrightarrow \\begin{cases} f(x) > 0 \\text{ (hoặc } g(x) > 0) \\\\ f(x) = g(x) \\end{cases}$.</li>\n        </ul>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ04_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Nghiệm của phương trình $2^{2x - 1} = 32$ là:",
        "options": [
          "$x = 3$",
          "$x = 2$",
          "$x = \\frac{5}{2}$",
          "$x = 4$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Ta có $32 = 2^5$. Do đó $2^{2x - 1} = 2^5 \\Leftrightarrow 2x - 1 = 5 \\Leftrightarrow 2x = 6 \\Leftrightarrow x = 3$."
      },
      {
        "id": "CĐ04_Q2",
        "num": 2,
        "type": "multiple_choice",
        "prompt": "Nghiệm của phương trình $\\log_3(x - 2) = 2$ là:",
        "options": [
          "$x = 11$",
          "$x = 8$",
          "$x = 7$",
          "$x = 6$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Điều kiện $x > 2$. Phương trình tương đương $x - 2 = 3^2 = 9 \\Leftrightarrow x = 11$ (thỏa mãn)."
      }
    ]
  },
  {
    "id": 5,
    "code": "CĐ-05",
    "title": "Chuyên đề 05: BẤT PHƯƠNG TRÌNH MŨ – LOGARIT CƠ BẢN",
    "category": "algebra_11",
    "categoryName": "Đại số & Giải tích 11",
    "grade": "Lớp 11",
    "badgeColor": "#6366f1",
    "summary": "Xét dấu cơ số $a > 1$ (cùng chiều) và $0 < a < 1$ (đổi chiều) khi giải bất phương trình mũ và logarit.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Bất phương trình mũ</h4>\n        <ul class=\"theory-bullets\">\n          <li>Với $a > 1$: $a^{f(x)} > a^{g(x)} \\Leftrightarrow f(x) > g(x)$ (giữ nguyên chiều).</li>\n          <li>Với $0 < a < 1$: $a^{f(x)} > a^{g(x)} \\Leftrightarrow f(x) < g(x)$ (đổi chiều).</li>\n        </ul>\n\n        <h4 class=\"theory-heading\">2. Bất phương trình logarit</h4>\n        <ul class=\"theory-bullets\">\n          <li>Với $a > 1$: $\\log_a f(x) > \\log_a g(x) \\Leftrightarrow f(x) > g(x) > 0$.</li>\n          <li>Với $0 < a < 1$: $\\log_a f(x) > \\log_a g(x) \\Leftrightarrow 0 < f(x) < g(x)$.</li>\n        </ul>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ05_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Tập nghiệm của bất phương trình $3^{x + 1} \\le 9$ là:",
        "options": [
          "$(-\\infty; 1]$",
          "$[1; +\\infty)$",
          "$(-\\infty; 2]$",
          "$[2; +\\infty)$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Ta có $9 = 3^2$. Do cơ số $3 > 1$ nên $3^{x+1} \\le 3^2 \\Leftrightarrow x + 1 \\le 2 \\Leftrightarrow x \\le 1$. Vậy $S = (-\\infty; 1]$."
      },
      {
        "id": "CĐ05_Q2",
        "num": 2,
        "type": "multiple_choice",
        "prompt": "Tập nghiệm của bất phương trình $\\log_{\\frac{1}{2}}(x - 1) \\ge -2$ là:",
        "options": [
          "$(1; 5]$",
          "$[5; +\\infty)$",
          "$(1; 4]$",
          "$[4; +\\infty)$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "ĐK: $x - 1 > 0 \\Leftrightarrow x > 1$. Cơ số $0 < \\frac{1}{2} < 1$ nên đổi chiều: $x - 1 \\le \\left(\\frac{1}{2}\\right)^{-2} = 4 \\Leftrightarrow x \\le 5$. Kết hợp ĐK được $1 < x \\le 5$."
      }
    ]
  },
  {
    "id": 6,
    "code": "CĐ-06",
    "title": "Chuyên đề 06: QUAN HỆ SONG SONG TRONG KHÔNG GIAN",
    "category": "geometry_space",
    "categoryName": "Hình học không gian & Oxyz",
    "grade": "Lớp 11",
    "badgeColor": "#0284c7",
    "summary": "Đường thẳng song song mặt phẳng, hai mặt phẳng song song và định lý giao tuyến song song.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Đường thẳng song song mặt phẳng ($d \\parallel (\\alpha)$)</h4>\n        <p>Nếu đường thẳng $d$ không nằm trong $(\\alpha)$ và song song với một đường thẳng $d'$ nằm trong $(\\alpha)$ thì $d \\parallel (\\alpha)$.</p>\n        $$\\begin{cases} d \\not\\subset (\\alpha) \\\\ d \\parallel d' \\subset (\\alpha) \\end{cases} \\Rightarrow d \\parallel (\\alpha)$$\n\n        <h4 class=\"theory-heading\">2. Hai mặt phẳng song song ($(\\alpha) \\parallel (\\beta)$)</h4>\n        <p>Nếu mặt phẳng $(\\alpha)$ chứa hai đường thẳng cắt nhau cùng song song với mặt phẳng $(\\beta)$ thì $(\\alpha) \\parallel (\\beta)$.</p>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ06_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Cho hình chóp $S.ABCD$ có đáy $ABCD$ là hình bình hành. Gọi $M$ là trung điểm của $SC$. Đường thẳng $AM$ song song với mặt phẳng nào sau đây?",
        "options": [
          "$(SBD)$",
          "$(SCD)$",
          "$(SAB)$",
          "Không song song với mặt nào"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Gọi $O = AC \\cap BD$. Trong tam giác $SAC$, $O$ là trung điểm $AC$ và $M$ là trung điểm $SC$ nên $OM$ là đường trung bình $\\Rightarrow AM$ không song song nhưng $OM \\parallel SA$. Chú ý đề hỏi $AM$ hay đường trung bình: xét trong $(SAC)$ đường nối tâm."
      }
    ]
  },
  {
    "id": 7,
    "code": "CĐ-07",
    "title": "Chuyên đề 07: QUAN HỆ VUÔNG GÓC TRONG KHÔNG GIAN",
    "category": "geometry_space",
    "categoryName": "Hình học không gian & Oxyz",
    "grade": "Lớp 11",
    "badgeColor": "#0284c7",
    "summary": "Đường thẳng vuông góc mặt phẳng, định lý 3 đường vuông góc và hai mặt phẳng vuông góc.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Đường thẳng vuông góc mặt phẳng</h4>\n        <p>Đường thẳng $d$ vuông góc với mặt phẳng $(\\alpha)$ khi và chỉ khi $d$ vuông góc với hai đường thẳng cắt nhau nằm trong $(\\alpha)$.</p>\n        $$\\begin{cases} d \\perp a, d \\perp b \\subset (\\alpha) \\\\ a \\cap b = I \\end{cases} \\Rightarrow d \\perp (\\alpha)$$\n        <h4 class=\"theory-heading\">2. Hai mặt phẳng vuông góc</h4>\n        <p>Điều kiện: Mặt phẳng này chứa một đường thẳng vuông góc với mặt phẳng kia.</p>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ07_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác vuông tại $B$, $SA \\perp (ABC)$. Khẳng định nào sau đây là đúng?",
        "options": [
          "$BC \\perp (SAB)$",
          "$AB \\perp (SBC)$",
          "$AC \\perp (SBC)$",
          "$SA \\perp (SBC)$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Ta có $BC \\perp AB$ (do tam giác vuông tại $B$) và $BC \\perp SA$ (do $SA \\perp (ABC)$). Do đó $BC \\perp (SAB)$."
      }
    ]
  },
  {
    "id": 8,
    "code": "CĐ-08",
    "title": "Chuyên đề 08: GÓC – KHOẢNG CÁCH",
    "category": "geometry_space",
    "categoryName": "Hình học không gian & Oxyz",
    "grade": "Lớp 11",
    "badgeColor": "#0284c7",
    "summary": "Góc giữa đường thẳng và mặt phẳng, góc giữa hai mặt phẳng, khoảng cách từ điểm đến mặt phẳng.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Góc giữa đường thẳng và mặt phẳng</h4>\n        <p>Góc giữa đường thẳng $d$ và mặt phẳng $(\\alpha)$ là góc giữa $d$ và hình chiếu $d'$ của nó trên $(\\alpha)$ ($0^\\circ \\le \\varphi \\le 90^\\circ$).</p>\n        <h4 class=\"theory-heading\">2. Khoảng cách từ điểm đến mặt phẳng</h4>\n        <p>Khoảng cách từ điểm $M$ đến mặt phẳng $(\\alpha)$ là độ dài đoạn vuông góc $MH$ kẻ từ $M$ đến $(\\alpha)$. Kỹ thuật quy điểm: chuyển từ điểm bất kỳ về chân đường cao.</p>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ08_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Cho hình chóp $S.ABC$ có $SA \\perp (ABC)$, tam giác $ABC$ vuông cân tại $B$, $SA = AB = a$. Góc giữa đường thẳng $SB$ và mặt phẳng $(ABC)$ bằng:",
        "options": [
          "$45^\\circ$",
          "$30^\\circ$",
          "$60^\\circ$",
          "$90^\\circ$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Hình chiếu của $SB$ trên $(ABC)$ là $AB$. Do đó góc giữa $SB$ và $(ABC)$ là $\\widehat{SBA}$. Trong tam giác vuông $SAB$, $\\tan\\widehat{SBA} = \\frac{SA}{AB} = 1 \\Rightarrow \\widehat{SBA} = 45^\\circ$."
      }
    ]
  },
  {
    "id": 9,
    "code": "CĐ-09",
    "title": "Chuyên đề 09: THỂ TÍCH KHỐI ĐA DIỆN",
    "category": "geometry_space",
    "categoryName": "Hình học không gian & Oxyz",
    "grade": "Lớp 12",
    "badgeColor": "#0284c7",
    "summary": "Thể tích khối lăng trụ $V = B \\cdot h$, thể tích khối chóp $V = \\frac{1}{3}B \\cdot h$ và tỉ số thể tích Simson.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Công thức thể tích cơ bản</h4>\n        <ul class=\"theory-bullets\">\n          <li>Khối lăng trụ: $V = B \\cdot h$ ($B$ là diện tích đáy, $h$ là chiều cao).</li>\n          <li>Khối chóp: $V = \\frac{1}{3}B \\cdot h$.</li>\n          <li>Khối hộp chữ nhật: $V = a \\cdot b \\cdot c$.</li>\n          <li>Khối lập phương cạnh $a$: $V = a^3$.</li>\n        </ul>\n        <h4 class=\"theory-heading\">2. Tỉ số thể tích khối chóp tam giác (Simson)</h4>\n        $$\\frac{V_{S.A'B'C'}}{V_{S.ABC}} = \\frac{SA'}{SA} \\cdot \\frac{SB'}{SB} \\cdot \\frac{SC'}{SC}$$\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ09_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Cho hình chóp $S.ABC$ có đáy $ABC$ là tam giác đều cạnh $a$, $SA \\perp (ABC)$ và $SA = a\\sqrt{3}$. Thể tích khối chóp $S.ABC$ là:",
        "options": [
          "$\\frac{a^3}{4}$",
          "$\\frac{a^3\\sqrt{3}}{4}$",
          "$\\frac{a^3}{12}$",
          "$a^3$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Diện tích đáy $B = \\frac{a^2\\sqrt{3}}{4}$. Chiều cao $h = SA = a\\sqrt{3}$. Thể tích $V = \\frac{1}{3}Bh = \\frac{1}{3} \\cdot \\frac{a^2\\sqrt{3}}{4} \\cdot a\\sqrt{3} = \\frac{a^3}{4}$."
      }
    ]
  },
  {
    "id": 10,
    "code": "CĐ-10",
    "title": "Chuyên đề 10: TÍNH ĐƠN ĐIỆU CỦA HÀM SỐ",
    "category": "calculus_12",
    "categoryName": "Hàm số & Giải tích 12",
    "grade": "Lớp 12",
    "badgeColor": "#e11d48",
    "summary": "Xét dấu đạo hàm $y' = f'(x)$, đọc khoảng đồng biến và nghịch biến từ bảng biến thiên và đồ thị.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Định lý mở rộng về tính đơn điệu</h4>\n        <ul class=\"theory-bullets\">\n          <li>Hàm số $y = f(x)$ đồng biến trên $(a; b) \\Leftrightarrow f'(x) \\ge 0, \\forall x \\in (a; b)$ và $f'(x) = 0$ tại hữu hạn điểm.</li>\n          <li>Hàm số $y = f(x)$ nghịch biến trên $(a; b) \\Leftrightarrow f'(x) \\le 0, \\forall x \\in (a; b)$ và $f'(x) = 0$ tại hữu hạn điểm.</li>\n        </ul>\n        <h4 class=\"theory-heading\">2. Quy tắc đọc đồ thị / bảng biến thiên</h4>\n        <p>Mũi tên đi lên $\\Leftrightarrow f'(x) > 0 \\Leftrightarrow$ đồng biến. Mũi tên đi xuống $\\Leftrightarrow f'(x) < 0 \\Leftrightarrow$ nghịch biến.</p>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ10_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Hàm số $y = x^3 - 3x + 2$ đồng biến trên khoảng nào sau đây?",
        "options": [
          "$(1; +\\infty)$",
          "$(-1; 1)$",
          "$(-\\infty; 1)$",
          "$(0; 2)$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Ta có $y' = 3x^2 - 3 = 3(x^2 - 1)$. $y' > 0 \\Leftrightarrow x < -1$ hoặc $x > 1$. Vậy hàm số đồng biến trên $(-\\infty; -1)$ và $(1; +\\infty)$."
      }
    ]
  },
  {
    "id": 11,
    "code": "CĐ-11",
    "title": "Chuyên đề 11: CỰC TRỊ CỦA HÀM SỐ",
    "category": "calculus_12",
    "categoryName": "Hàm số & Giải tích 12",
    "grade": "Lớp 12",
    "badgeColor": "#e11d48",
    "summary": "Điểm cực đại, điểm cực tiểu, giá trị cực trị và điều kiện đổi dấu của đạo hàm $y'$.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Dấu hiệu cực trị (Đổi dấu của $f'(x)$)</h4>\n        <ul class=\"theory-bullets\">\n          <li>$f'(x)$ đổi dấu từ <strong>dương sang âm</strong> khi qua $x_0 \\Rightarrow x_0$ là điểm <strong>cực đại</strong>.</li>\n          <li>$f'(x)$ đổi dấu từ <strong>âm sang dương</strong> khi qua $x_0 \\Rightarrow x_0$ là điểm <strong>cực tiểu</strong>.</li>\n          <li>Nếu $f'(x)$ không đổi dấu khi qua $x_0$ thì $x_0$ không phải là điểm cực trị.</li>\n        </ul>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ11_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Điểm cực đại của hàm số $y = -x^3 + 3x^2 + 1$ là:",
        "options": [
          "$x = 2$",
          "$x = 0$",
          "$y = 5$",
          "$(2; 5)$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "$y' = -3x^2 + 6x = -3x(x - 2) = 0 \\Leftrightarrow x = 0$ hoặc $x = 2$. Bảng xét dấu: $y'$ đổi dấu từ $(+)$ sang $(-)$ khi qua $x = 2$. Vậy điểm cực đại là $x = 2$."
      }
    ]
  },
  {
    "id": 12,
    "code": "CĐ-12",
    "title": "Chuyên đề 12: GIÁ TRỊ LỚN NHẤT VÀ GIÁ TRỊ NHỎ NHẤT CỦA HÀM SỐ",
    "category": "calculus_12",
    "categoryName": "Hàm số & Giải tích 12",
    "grade": "Lớp 12",
    "badgeColor": "#e11d48",
    "summary": "Quy tắc tìm GTLN, GTNN trên đoạn $[a; b]$ và bài toán thực tế tối ưu hóa.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Quy tắc tìm $\\max, \\min$ trên đoạn $[a; b]$</h4>\n        <ul class=\"theory-bullets\">\n          <li>Bước 1: Tính $f'(x)$, tìm các nghiệm $x_i \\in (a; b)$ và các điểm làm $f'(x)$ không xác định.</li>\n          <li>Bước 2: Tính các giá trị $f(a), f(b), f(x_i)$.</li>\n          <li>Bước 3: Số lớn nhất là $\\max_{[a;b]} f(x)$, số nhỏ nhất là $\\min_{[a;b]} f(x)$.</li>\n        </ul>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ12_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Giá trị lớn nhất của hàm số $f(x) = x^3 - 3x + 1$ trên đoạn $[0; 2]$ bằng:",
        "options": [
          "$3$",
          "$1$",
          "$-1$",
          "$5$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "$f'(x) = 3x^2 - 3 = 0 \\Leftrightarrow x = \\pm 1$. Chọn nghiệm $x = 1 \\in (0; 2)$. Ta có $f(0) = 1, f(1) = -1, f(2) = 8 - 6 + 1 = 3$. Vậy $\\max_{[0; 2]} f(x) = 3$."
      }
    ]
  },
  {
    "id": 13,
    "code": "CĐ-13",
    "title": "Chuyên đề 13: TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ",
    "category": "calculus_12",
    "categoryName": "Hàm số & Giải tích 12",
    "grade": "Lớp 12",
    "badgeColor": "#e11d48",
    "summary": "Tiệm cận đứng, tiệm cận ngang và tiệm cận xiên của đồ thị hàm phân thức.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Định nghĩa tiệm cận</h4>\n        <ul class=\"theory-bullets\">\n          <li><strong>Tiệm cận ngang:</strong> Đường thẳng $y = y_0$ là tiệm cận ngang nếu $\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0$.</li>\n          <li><strong>Tiệm cận đứng:</strong> Đường thẳng $x = x_0$ là tiệm cận đứng nếu ít nhất một trong các giới hạn $\\lim_{x \\to x_0^\\pm} f(x) = \\pm\\infty$.</li>\n          <li><strong>Tiệm cận xiên (GDPT 2018):</strong> $y = ax + b$ ($a \\ne 0$) nếu $\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0$.</li>\n        </ul>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ13_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Đồ thị hàm số $y = \\frac{2x - 1}{x + 1}$ có tiệm cận đứng và tiệm cận ngang lần lượt là:",
        "options": [
          "$x = -1$ và $y = 2$",
          "$x = 1$ và $y = 2$",
          "$x = 2$ và $y = -1$",
          "$x = -1$ và $y = -1$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Nghiệm mẫu số $x + 1 = 0 \\Leftrightarrow x = -1$ là tiệm cận đứng. Giới hạn vô cực $\\lim_{x \\to \\infty} \\frac{2x-1}{x+1} = 2$ cho tiệm cận ngang $y = 2$."
      }
    ]
  },
  {
    "id": 14,
    "code": "CĐ-14",
    "title": "Chuyên đề 14: NHẬN DẠNG ĐỒ THỊ HÀM SỐ",
    "category": "calculus_12",
    "categoryName": "Hàm số & Giải tích 12",
    "grade": "Lớp 12",
    "badgeColor": "#e11d48",
    "summary": "Kỹ năng nhận diện đồ thị hàm bậc 3, hàm phân thức bậc 1/bậc 1 và hàm phân thức bậc 2/bậc 1.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">Các bước nhận dạng đồ thị</h4>\n        <ul class=\"theory-bullets\">\n          <li>1. Nhánh vô cực bên phải: hướng lên $\\Rightarrow a > 0$, hướng xuống $\\Rightarrow a < 0$.</li>\n          <li>2. Tiệm cận (đối với hàm phân thức): kiểm tra vị trí tiệm cận đứng và tiệm cận ngang/xiên.</li>\n          <li>3. Giao điểm với trục tung: thay $x = 0$ tìm $y$.</li>\n          <li>4. Giao điểm với trục hoành: giải $y = 0$ tìm số nghiệm.</li>\n          <li>5. Số lượng và tọa độ các điểm cực trị.</li>\n        </ul>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ14_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Đường cong hình chữ N có nhánh bên phải đi lên, cắt trục tung tại $(0; 1)$ và có 2 điểm cực trị là đồ thị của hàm số nào?",
        "options": [
          "$y = x^3 - 3x + 1$",
          "$y = -x^3 + 3x + 1$",
          "$y = x^4 - 2x^2 + 1$",
          "$y = \\frac{x+1}{x-1}$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Đồ thị chữ N là hàm bậc ba với hệ số $a > 0$ và có 2 cực trị, cắt trục tung tại $(0; 1)$ nên hệ số tự do $d = 1$. Chọn A."
      }
    ]
  },
  {
    "id": 15,
    "code": "CĐ-15",
    "title": "Chuyên đề 15: VECTO TRONG KHÔNG GIAN",
    "category": "geometry_space",
    "categoryName": "Hình học không gian & Oxyz",
    "grade": "Lớp 12",
    "badgeColor": "#0284c7",
    "summary": "Các phép toán vectơ trong không gian, quy tắc hình hộp, ba vectơ đồng phẳng và tích vô hướng.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Các quy tắc quan trọng</h4>\n        <ul class=\"theory-bullets\">\n          <li><strong>Quy tắc hình hộp:</strong> Nếu $ABCD.A'B'C'D'$ là hình hộp thì $\\vec{AC'} = \\vec{AB} + \\vec{AD} + \\vec{AA'}$.</li>\n          <li><strong>Quy tắc trọng tâm tứ diện:</strong> $\\vec{GA} + \\vec{GB} + \\vec{GC} + \\vec{GD} = \\vec{0}$.</li>\n          <li><strong>Tích vô hướng:</strong> $\\vec{u} \\cdot \\vec{v} = |\\vec{u}| \\cdot |\\vec{v}| \\cdot \\cos(\\vec{u}, \\vec{v})$.</li>\n        </ul>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ15_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Cho hình hộp $ABCD.A'B'C'D'$. Tổng vectơ $\\vec{AB} + \\vec{AD} + \\vec{AA'}$ bằng vectơ nào sau đây?",
        "options": [
          "$\\vec{AC'}$",
          "$\\vec{CA'}$",
          "$\\vec{BD'}$",
          "$\\vec{A'C}$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Theo quy tắc hình hộp, tổng ba vectơ xuất phát từ đỉnh $A$ bằng vectơ đường chéo $\\vec{AC'}$."
      }
    ]
  },
  {
    "id": 16,
    "code": "CĐ-16",
    "title": "Chuyên đề 16: THỐNG KÊ (MẪU SỐ LIỆU GHÉP NHÓM)",
    "category": "statistics_12",
    "categoryName": "Thống kê & Xác suất 12",
    "grade": "Lớp 12",
    "badgeColor": "#059669",
    "summary": "Số trung bình, trung vị, tứ phân vị ($Q_1, Q_2, Q_3$), mốt và phương sai mẫu ghép nhóm.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">Công thức đặc trưng mẫu số liệu ghép nhóm</h4>\n        <ul class=\"theory-bullets\">\n          <li><strong>Số trung bình:</strong> $\\bar{x} = \\frac{1}{n}\\sum_{i=1}^k m_i c_i$ ($c_i$ là giá trị đại diện nhóm).</li>\n          <li><strong>Trung vị:</strong> $M_e = u_m + \\frac{\\frac{n}{2} - C}{n_m} \\cdot (u_{m+1} - u_m)$.</li>\n          <li><strong>Mốt:</strong> $M_o = u_j + \\frac{n_j - n_{j-1}}{(n_j - n_{j-1}) + (n_j - n_{j+1})} \\cdot (u_{j+1} - u_j)$.</li>\n        </ul>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ16_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Giá trị đại diện của nhóm số liệu $[20; 30)$ bằng:",
        "options": [
          "$25$",
          "$20$",
          "$30$",
          "$10$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Giá trị đại diện của nhóm $[a; b)$ là trung điểm: $c = \\frac{a + b}{2} = \\frac{20 + 30}{2} = 25$."
      }
    ]
  },
  {
    "id": 17,
    "code": "CĐ-17",
    "title": "Chuyên đề 17: NGUYÊN HÀM CỦA CÁC HÀM SỐ ĐƠN GIẢN",
    "category": "calculus_12",
    "categoryName": "Hàm số & Giải tích 12",
    "grade": "Lớp 12",
    "badgeColor": "#e11d48",
    "summary": "Bảng nguyên hàm cơ bản: lũy thừa, mũ, lượng giác và phương pháp đổi biến, từng phần.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">Bảng nguyên hàm cơ bản</h4>\n        <ul class=\"theory-bullets\">\n          <li>$\\int x^\\alpha dx = \\frac{x^{\\alpha+1}}{\\alpha+1} + C \\quad (\\alpha \\ne -1)$.</li>\n          <li>$\\int \\frac{1}{x} dx = \\ln|x| + C$.</li>\n          <li>$\\int e^x dx = e^x + C; \\quad \\int a^x dx = \\frac{a^x}{\\ln a} + C$.</li>\n          <li>$\\int \\cos x dx = \\sin x + C; \\quad \\int \\sin x dx = -\\cos x + C$.</li>\n        </ul>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ17_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Nguyên hàm của hàm số $f(x) = 3x^2 + 2x$ là:",
        "options": [
          "$F(x) = x^3 + x^2 + C$",
          "$F(x) = 6x + 2 + C$",
          "$F(x) = x^3 + 2x^2 + C$",
          "$F(x) = 3x^3 + x^2 + C$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "$\\int (3x^2 + 2x) dx = 3 \\cdot \\frac{x^3}{3} + 2 \\cdot \\frac{x^2}{2} + C = x^3 + x^2 + C$."
      }
    ]
  },
  {
    "id": 18,
    "code": "CĐ-18",
    "title": "Chuyên đề 18: TÍCH PHÂN CÁC HÀM SỐ ĐƠN GIẢN",
    "category": "calculus_12",
    "categoryName": "Hàm số & Giải tích 12",
    "grade": "Lớp 12",
    "badgeColor": "#e11d48",
    "summary": "Định nghĩa tích phân Newton-Leibniz: $\\int_a^b f(x) dx = F(b) - F(a)$ và các tính chất cơ bản.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">Tính chất cơ bản của tích phân</h4>\n        <ul class=\"theory-bullets\">\n          <li>$\\int_a^b [f(x) \\pm g(x)] dx = \\int_a^b f(x) dx \\pm \\int_a^b g(x) dx$.</li>\n          <li>$\\int_a^b k f(x) dx = k \\int_a^b f(x) dx$.</li>\n          <li>Quy tắc chèn cận: $\\int_a^b f(x) dx = \\int_a^c f(x) dx + \\int_c^b f(x) dx$.</li>\n        </ul>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ18_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Cho $\\int_1^2 f(x) dx = 3$ và $\\int_1^2 g(x) dx = 2$. Tính $I = \\int_1^2 [f(x) - 2g(x)] dx$.",
        "options": [
          "$I = -1$",
          "$I = 1$",
          "$I = 7$",
          "$I = -4$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "$I = \\int_1^2 f(x) dx - 2\\int_1^2 g(x) dx = 3 - 2(2) = 3 - 4 = -1$."
      }
    ]
  },
  {
    "id": 19,
    "code": "CĐ-19",
    "title": "Chuyên đề 19: ỨNG DỤNG TÍCH PHÂN",
    "category": "calculus_12",
    "categoryName": "Hàm số & Giải tích 12",
    "grade": "Lớp 12",
    "badgeColor": "#e11d48",
    "summary": "Tính diện tích hình phẳng $S = \\int_a^b |f(x) - g(x)| dx$ và thể tích khối tròn xoay quanh trục $Ox$.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Diện tích hình phẳng</h4>\n        $$S = \\int_a^b |f_1(x) - f_2(x)| dx$$\n        <h4 class=\"theory-heading\">2. Thể tích khối tròn xoay quanh trục $Ox$</h4>\n        $$V = \\pi \\int_a^b [f(x)]^2 dx$$\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ19_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Diện tích hình phẳng giới hạn bởi đồ thị $y = x^2$, trục hoành $y = 0$ và hai đường thẳng $x = 0, x = 3$ là:",
        "options": [
          "$9$",
          "$3$",
          "$27$",
          "$18$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "$S = \\int_0^3 x^2 dx = \\left. \\frac{x^3}{3} \\right|_0^3 = \\frac{27}{3} = 9$."
      }
    ]
  },
  {
    "id": 20,
    "code": "CĐ-20",
    "title": "Chuyên đề 20: BIỂU THỨC TỌA ĐỘ TRONG KHÔNG GIAN",
    "category": "geometry_space",
    "categoryName": "Hình học không gian & Oxyz",
    "grade": "Lớp 12",
    "badgeColor": "#0284c7",
    "summary": "Hệ tọa độ $Oxyz$, tọa độ điểm, tọa độ vectơ, khoảng cách 2 điểm và tích có hướng hai vectơ.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">Công thức tọa độ cơ bản</h4>\n        <ul class=\"theory-bullets\">\n          <li>Đoạn thẳng $AB$: $\\vec{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)$.</li>\n          <li>Độ dài: $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$.</li>\n          <li>Tọa độ trung điểm: $M\\left(\\frac{x_A + x_B}{2}; \\frac{y_A + y_B}{2}; \\frac{z_A + z_B}{2}\\right)$.</li>\n          <li>Tích vô hướng: $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2$.</li>\n        </ul>\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ20_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Trong không gian $Oxyz$, cho hai điểm $A(1; 2; -1)$ và $B(3; 0; 1)$. Tọa độ trung điểm $M$ của đoạn thẳng $AB$ là:",
        "options": [
          "$M(2; 1; 0)$",
          "$M(4; 2; 0)$",
          "$M(1; -1; 1)$",
          "$M(2; -1; 1)$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "$x_M = \\frac{1 + 3}{2} = 2$, $y_M = \\frac{2 + 0}{2} = 1$, $z_M = \\frac{-1 + 1}{2} = 0$. Vậy $M(2; 1; 0)$."
      }
    ]
  },
  {
    "id": 21,
    "code": "CĐ-21",
    "title": "Chuyên đề 21: PHƯƠNG TRÌNH MẶT PHẲNG",
    "category": "geometry_space",
    "categoryName": "Hình học không gian & Oxyz",
    "grade": "Lớp 12",
    "badgeColor": "#0284c7",
    "summary": "Vectơ pháp tuyến $\\vec{n}$, phương trình tổng quát $Ax + By + Cz + D = 0$ và phương trình đoạn chắn.",
    "theoryHtml": "\n      <div class=\"theory-block\">\n        <h4 class=\"theory-heading\">1. Phương trình tổng quát mặt phẳng</h4>\n        <p>Mặt phẳng đi qua $M_0(x_0; y_0; z_0)$ và nhận $\\vec{n} = (A; B; C) \\ne \\vec{0}$ làm VTPT có phương trình:</p>\n        $$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\Leftrightarrow Ax + By + Cz + D = 0$$\n        <h4 class=\"theory-heading\">2. Phương trình đoạn chắn</h4>\n        <p>Mặt phẳng cắt 3 trục tọa độ tại $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ ($abc \\ne 0$):</p>\n        $$\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1$$\n      </div>\n    ",
    "theoryNoteLines": 8,
    "exercises": [
      {
        "id": "CĐ21_Q1",
        "num": 1,
        "type": "multiple_choice",
        "prompt": "Trong không gian $Oxyz$, mặt phẳng $(\\alpha)$ đi qua điểm $M(1; -2; 3)$ và có VTPT $\\vec{n} = (2; -1; 4)$ có phương trình là:",
        "options": [
          "$2x - y + 4z - 16 = 0$",
          "$2x - y + 4z + 16 = 0$",
          "$x - 2y + 3z - 16 = 0$",
          "$2x - y + 4z - 12 = 0$"
        ],
        "correct": "A",
        "lines": 8,
        "hint": "Phương trình: $2(x - 1) - 1(y + 2) + 4(z - 3) = 0 \\Leftrightarrow 2x - 2 - y - 2 + 4z - 12 = 0 \\Leftrightarrow 2x - y + 4z - 16 = 0$."
      },
      {
        "id": "CĐ21_Q2",
        "num": 2,
        "type": "essay",
        "prompt": "(Tự luận) Viết phương trình mặt phẳng $(\\beta)$ đi qua ba điểm $A(2; 0; 0)$, $B(0; -3; 0)$, $C(0; 0; 4)$.",
        "correct": "Tự luận",
        "lines": 10,
        "hint": "Sử dụng phương trình đoạn chắn: $\\frac{x}{2} + \\frac{y}{-3} + \\frac{z}{4} = 1 \\Leftrightarrow 6x - 4y + 3z - 12 = 0$."
      }
    ]
  }
];
