/**
 * Đề Kiểm Tra Trắc Nghiệm 15 Phút: Hệ Bất Phương Trình Bậc Nhất Hai Ẩn - Toán 10
 * Bộ môn Toán - Khoa Cơ Bản - Trường Cao Đẳng Nghề Số 1 - BQP & THPT GDPT 2018
 * Giáo viên biên soạn: ThS. Nguyễn Văn Sang
 */

// ==========================================
// 1. DỮ LIỆU CÂU HỎI (CHUẨN MA TRẬN NHẬN THỨC BÀI 2)
// ==========================================
const QUIZ_QUESTIONS = [
  {
    id: 1,
    level: "Nhận biết",
    prompt: "Hệ bất phương trình nào sau đây là <strong>hệ bất phương trình bậc nhất hai ẩn</strong>?",
    svgType: null,
    options: [
      "$\\begin{cases} 2x - y < 3 \\\\ x^2 + y \\ge 1 \\end{cases}$",
      "$\\begin{cases} x - 3y \\le 2 \\\\ 2x + y + 1 > 0 \\end{cases}$",
      "$\\begin{cases} x + 2y - z \\le 0 \\\\ 3x - y > 4 \\end{cases}$",
      "$\\begin{cases} 2xy - 1 \\le 0 \\\\ x + y > 3 \\end{cases}$"
    ],
    correctIndex: 1,
    explanation: "<strong>Đáp án B đúng.</strong><br>• Hệ bất phương trình bậc nhất hai ẩn là hệ gồm từ hai bất phương trình bậc nhất hai ẩn $x, y$ trở lên.<br>• Ở phương án B, hệ $\\begin{cases} x - 3y \\le 2 \\\\ 2x + y + 1 > 0 \\end{cases}$ gồm hai bất phương trình đều có bậc nhất đối với hai ẩn $x$ và $y$.<br>• Phương án A: chứa ẩn bậc hai ($x^2$).<br>• Phương án C: chứa 3 ẩn ($x, y, z$).<br>• Phương án D: chứa tích $xy$ (bậc hai)."
  },
  {
    id: 2,
    level: "Nhận biết",
    prompt: "Trong mặt phẳng tọa độ $Oxy$, khẳng định nào sau đây là <strong>đúng</strong> về miền nghiệm của hệ bất phương trình bậc nhất hai ẩn?",
    svgType: null,
    options: [
      "Miền nghiệm là <strong>giao</strong> của các miền nghiệm của các bất phương trình trong hệ.",
      "Miền nghiệm là <strong>hợp</strong> của các miền nghiệm của các bất phương trình trong hệ.",
      "Miền nghiệm luôn luôn là miền nghiệm của bất phương trình có chứa số ẩn nhiều nhất.",
      "Miền nghiệm luôn luôn là một miền đa giác lồi có diện tích hữu hạn."
    ],
    correctIndex: 0,
    explanation: "<strong>Đáp án A đúng.</strong><br>Theo định nghĩa trong SGK Toán 10:<br>Trong mặt phẳng tọa độ $Oxy$, tập hợp các điểm có tọa độ thỏa mãn <em>đồng thời</em> tất cả các bất phương trình của hệ được gọi là miền nghiệm của hệ bất phương trình. Do đó, miền nghiệm của hệ chính là <strong>giao các miền nghiệm</strong> của các bất phương trình thành phần."
  },
  {
    id: 3,
    level: "Nhận biết",
    prompt: "Điểm nào sau đây <strong>thuộc miền nghiệm</strong> của hệ bất phương trình $\\begin{cases} x + y - 2 \\le 0 \\\\ 2x - y + 1 > 0 \\end{cases}$?",
    svgType: null,
    options: [
      "$N(1; 2)$",
      "$P(-1; 3)$",
      "$M(0; 0)$",
      "$Q(2; 1)$"
    ],
    correctIndex: 2,
    explanation: "<strong>Đáp án C đúng.</strong><br>Thay lần lượt tọa độ các điểm vào hệ bất phương trình:<br>• Với $M(0; 0)$: $\\begin{cases} 0 + 0 - 2 = -2 \\le 0 \\text{ (Đúng)} \\\\ 2(0) - 0 + 1 = 1 > 0 \\text{ (Đúng)} \\end{cases}$. Do đó điểm $M(0; 0)$ thuộc miền nghiệm.<br>• Với $N(1; 2)$: $1 + 2 - 2 = 1 \\le 0$ (Sai).<br>• Với $P(-1; 3)$: $2(-1) - 3 + 1 = -4 > 0$ (Sai).<br>• Với $Q(2; 1)$: $2 + 1 - 2 = 1 \\le 0$ (Sai)."
  },
  {
    id: 4,
    level: "Nhận biết",
    prompt: "Trong các cặp số $(x; y)$ sau đây, cặp số nào <strong>KHÔNG</strong> là nghiệm của hệ bất phương trình $\\begin{cases} x - 2y < 0 \\\\ 2x + y \\ge 3 \\\\ y > 0 \\end{cases}$?",
    svgType: null,
    options: [
      "$(1; 2)$",
      "$(2; 2)$",
      "$(1; 1)$",
      "$(3; 1)$"
    ],
    correctIndex: 3,
    explanation: "<strong>Đáp án D đúng.</strong><br>Thay cặp số $(3; 1)$ vào bất phương trình thứ nhất của hệ:<br>$x - 2y = 3 - 2(1) = 1 < 0$ (mệnh đề Sai).<br>Vì cặp số $(3; 1)$ không thỏa mãn bất phương trình thứ nhất nên $(3; 1)$ không là nghiệm của hệ bất phương trình đã cho.<br>Các cặp $(1; 2)$, $(2; 2)$, $(1; 1)$ đều thỏa mãn đồng thời cả 3 bất phương trình."
  },
  {
    id: 5,
    level: "Thông hiểu",
    prompt: "Miền tam giác $OAB$ (kể cả biên, phần tô màu trong hình vẽ bên dưới) là miền nghiệm của hệ bất phương trình nào, biết $O(0; 0)$, $A(3; 0)$, $B(0; 2)$?",
    svgType: "b2_q5_triangle",
    options: [
      "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + 3y \\ge 6 \\end{cases}$",
      "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + 3y \\le 6 \\end{cases}$",
      "$\\begin{cases} x \\le 0 \\\\ y \\le 0 \\\\ 2x + 3y \\le 6 \\end{cases}$",
      "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 3x + 2y \\le 6 \\end{cases}$"
    ],
    correctIndex: 1,
    explanation: "<strong>Đáp án B đúng.</strong><br>1. Đường thẳng $AB$ đi qua hai điểm $A(3; 0)$ và $B(0; 2)$ có phương trình theo đoạn chắn là:<br>$$\\dfrac{x}{3} + \\dfrac{y}{2} = 1 \\Leftrightarrow 2x + 3y = 6$$<br>2. Miền tam giác $OAB$ nằm ở góc phần tư thứ nhất nên $x \\ge 0$ và $y \\ge 0$.<br>3. Điểm gốc tọa độ $O(0; 0)$ nằm trong miền tam giác, thay tọa độ $O(0; 0)$ vào biểu thức $2x + 3y$:<br>$$2(0) + 3(0) = 0 \\le 6 \\text{ (Đúng)}$$<br>Do đó miền tam giác (kể cả bờ) xác định bởi hệ: $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + 3y \\le 6 \\end{cases}$."
  },
  {
    id: 6,
    level: "Thông hiểu",
    prompt: "Phần tô màu trong mặt phẳng tọa độ $Oxy$ ở hình vẽ bên dưới (kể cả biên) là miền nghiệm của hệ bất phương trình nào sau đây?",
    svgType: "b2_q6_region",
    options: [
      "$\\begin{cases} x - y \\le 0 \\\\ x + y \\le 2 \\\\ y \\ge 0 \\end{cases}$",
      "$\\begin{cases} x - y \\le 0 \\\\ x + y \\ge 2 \\\\ y \\ge 0 \\end{cases}$",
      "$\\begin{cases} x - y \\ge 0 \\\\ x + y \\le 2 \\\\ y \\ge 0 \\end{cases}$",
      "$\\begin{cases} x - y \\ge 0 \\\\ x + y \\ge 2 \\\\ y \\ge 0 \\end{cases}$"
    ],
    correctIndex: 2,
    explanation: "<strong>Đáp án C đúng.</strong><br>• Hai đường thẳng tạo biên cho miền nghiệm là $d_1: x - y = 0$ (tức $y = x$) và $d_2: x + y = 2$.<br>• Miền tam giác nằm phía trên trục hoành nên $y \\ge 0$.<br>• Lấy điểm thử nằm hẳn bên trong tam giác, chẳng hạn điểm $M(1; 0{,}5)$:<br>- Với $x - y$: $1 - 0{,}5 = 0{,}5 \\ge 0$ (thỏa mãn $x - y \\ge 0$).<br>- Với $x + y$: $1 + 0{,}5 = 1{,}5 \\le 2$ (thỏa mãn $x + y \\le 2$).<br>- Với $y$: $0{,}5 \\ge 0$.<br>Vì miền nghiệm kể cả các cạnh nên hệ bất phương trình là $\\begin{cases} x - y \\ge 0 \\\\ x + y \\le 2 \\\\ y \\ge 0 \\end{cases}$."
  },
  {
    id: 7,
    level: "Thông hiểu",
    prompt: "Cho hệ bất phương trình $\\begin{cases} x + y - 2 > 0 \\\\ 2x - y - 10 \\le 0 \\end{cases}$. Có bao nhiêu <strong>giá trị nguyên</strong> của tham số $m$ để cặp số $(m; 1)$ thuộc miền nghiệm của hệ bất phương trình đã cho?",
    svgType: null,
    options: [
      "$5$",
      "$6$",
      "$3$",
      "$4$"
    ],
    correctIndex: 3,
    explanation: "<strong>Đáp án D đúng.</strong><br>Cặp số $(m; 1)$ thuộc miền nghiệm của hệ khi và chỉ khi:<br>$$\\begin{cases} m + 1 - 2 > 0 \\\\ 2m - 1 - 10 \\le 0 \\end{cases} \\Leftrightarrow \\begin{cases} m > 1 \\\\ 2m \\le 11 \\end{cases} \\Leftrightarrow \\begin{cases} m > 1 \\\\ m \\le 5{,}5 \\end{cases} \\Leftrightarrow 1 < m \\le 5{,}5$$<br>Vì $m$ là số nguyên ($m \\in \\mathbb{Z}$) nên $m \\in \\{2; 3; 4; 5\\}$.<br>Vậy có đúng <strong>4 giá trị nguyên</strong> của $m$ thỏa mãn."
  },
  {
    id: 8,
    level: "Thông hiểu",
    prompt: "Bác Năm dự định trồng lúa và ngô trên mảnh đất có diện tích tối đa là $6\\text{ ha}$. Mỗi ha trồng lúa cần $10$ ngày công, mỗi ha trồng ngô cần $20$ ngày công. Biết rằng tổng số ngày công có thể huy động không quá $100$ ngày. Gọi $x, y$ lần lượt là số ha đất trồng lúa và ngô ($x \\ge 0, y \\ge 0$). Hệ bất phương trình mô tả các điều kiện của bài toán là:",
    svgType: null,
    options: [
      "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ x + 2y \\le 10 \\end{cases}$",
      "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ 2x + y \\le 10 \\end{cases}$",
      "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\ge 6 \\\\ x + 2y \\le 10 \\end{cases}$",
      "$\\begin{cases} x > 0 \\\\ y > 0 \\\\ x + y \\le 10 \\\\ x + 2y \\le 6 \\end{cases}$"
    ],
    correctIndex: 0,
    explanation: "<strong>Đáp án A đúng.</strong><br>• Điều kiện diện tích không âm: $x \\ge 0, y \\ge 0$.<br>• Tổng diện tích canh tác không quá $6\\text{ ha}$: $x + y \\le 6$.<br>• Tổng số ngày công trồng lúa và ngô là $10x + 20y$ (ngày). Theo đề bài, tổng số ngày công không quá $100$ ngày nên:<br>$$10x + 20y \\le 100 \\Leftrightarrow x + 2y \\le 10$$<br>Vậy hệ bất phương trình mô tả bài toán là: $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 6 \\\\ x + 2y \\le 10 \\end{cases}$."
  },
  {
    id: 9,
    level: "Vận dụng",
    prompt: "Cho hệ bất phương trình $\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ x + y \\le 4 \\\\ 2x + y \\le 6 \\end{cases}$. Giá trị <strong>lớn nhất</strong> của biểu thức $F(x; y) = 3x + 2y$ trên miền nghiệm của hệ bất phương trình đã cho bằng:",
    svgType: null,
    options: [
      "$9$",
      "$10$",
      "$12$",
      "$8$"
    ],
    correctIndex: 1,
    explanation: "<strong>Đáp án B đúng.</strong><br>1. Miền nghiệm của hệ là miền tứ giác lồi $OABC$ với các đỉnh:<br>• $O(0; 0)$<br>• $A(3; 0)$ là giao điểm của đường thẳng $2x + y = 6$ với trục $Ox$ ($y = 0$).<br>• $B(2; 2)$ là giao điểm của hai đường thẳng $x + y = 4$ và $2x + y = 6$.<br>• $C(0; 4)$ là giao điểm của đường thẳng $x + y = 4$ với trục $Oy$ ($x = 0$).<br><br>2. Tính giá trị của biểu thức mục tiêu $F(x; y) = 3x + 2y$ tại 4 đỉnh:<br>• $F(O) = 3(0) + 2(0) = 0$<br>• $F(A) = 3(3) + 2(0) = 9$<br>• $F(B) = 3(2) + 2(2) = 10$<br>• $F(C) = 3(0) + 2(4) = 8$<br><br>So sánh các kết quả, ta thấy $\\max F(x; y) = 10$, đạt được tại đỉnh $B(2; 2)$."
  },
  {
    id: 10,
    level: "Vận dụng cao",
    prompt: "Một xưởng cơ khí sản xuất hai loại ghế $A$ và $B$. Để sản xuất một chiếc ghế loại $A$ cần $2$ giờ cưa gỗ và $1$ giờ sơn bóng. Để sản xuất một chiếc ghế loại $B$ cần $1$ giờ cưa gỗ và $2$ giờ sơn bóng. Phân xưởng có tối đa $10$ giờ cưa gỗ và $8$ giờ sơn bóng trong một ngày. Mỗi chiếc ghế loại $A$ đem lại lợi nhuận $300$ nghìn đồng, loại $B$ đem lại lợi nhuận $400$ nghìn đồng. Để thu được lợi nhuận lớn nhất, phân xưởng cần sản xuất bao nhiêu ghế mỗi loại?",
    svgType: null,
    options: [
      "$5$ chiếc ghế loại $A$ và $0$ chiếc ghế loại $B$",
      "$0$ chiếc ghế loại $A$ và $4$ chiếc ghế loại $B$",
      "$4$ chiếc ghế loại $A$ và $2$ chiếc ghế loại $B$",
      "$3$ chiếc ghế loại $A$ và $3$ chiếc ghế loại $B$"
    ],
    correctIndex: 2,
    explanation: "<strong>Đáp án C đúng.</strong><br>1. Gọi $x, y$ lần lượt là số chiếc ghế loại $A$ và loại $B$ sản xuất trong một ngày ($x, y \\ge 0$).<br>• Điều kiện thời gian cưa gỗ: $2x + y \\le 10$.<br>• Điều kiện thời gian sơn bóng: $x + 2y \\le 8$.<br>• Hàm lợi nhuận cần tối đa hóa: $L(x; y) = 300x + 400y$ (nghìn đồng).<br><br>2. Miền nghiệm là miền tứ giác $OABC$ với các đỉnh:<br>• $O(0; 0)$<br>• $A(5; 0)$ (giao điểm của $2x + y = 10$ với trục $Ox$)<br>• $B(4; 2)$ (nghiệm của hệ $\\begin{cases} 2x + y = 10 \\\\ x + 2y = 8 \\end{cases}$)<br>• $C(0; 4)$ (giao điểm của $x + 2y = 8$ với trục $Oy$)<br><br>3. Tính lợi nhuận tại các đỉnh:<br>• $L(O) = 0$<br>• $L(A) = 300(5) = 1500$ nghìn đồng.<br>• $L(B) = 300(4) + 400(2) = 1200 + 800 = 2000$ nghìn đồng ($2$ triệu đồng).<br>• $L(C) = 400(4) = 1600$ nghìn đồng.<br><br>Vậy lợi nhuận cao nhất đạt $2000$ nghìn đồng khi xưởng sản xuất <strong>4 ghế loại $A$ và 2 ghế loại $B$</strong>."
  }
];

// ==========================================
// 2. BỘ PHÁT SINH HÌNH VẼ VECTOR SVG ĐỒ THỊ CHUẨN SƯ PHẠM
// ==========================================
const SVG_DIAGRAMS = {
  // Câu 5: Miền tam giác OAB với O(0,0), A(3,0), B(0,2) và biên 2x + 3y = 6
  b2_q5_triangle: function() {
    return `
      <svg viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:12px; border:1px solid #cbd5e1; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <defs>
          <marker id="b2_arr1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e3a8a" />
          </marker>
        </defs>

        <!-- Miền tam giác nghiệm OAB tô màu xanh dương thanh lịch -->
        <polygon points="90,240 270,240 90,120" fill="#93c5fd" opacity="0.65" stroke="#1e40af" stroke-width="1.5" />

        <!-- Trục tọa độ Ox, Oy -->
        <line x1="40" y1="240" x2="350" y2="240" stroke="#0f172a" stroke-width="2.2" marker-end="url(#b2_arr1)" />
        <line x1="90" y1="290" x2="90" y2="30" stroke="#0f172a" stroke-width="2.2" marker-end="url(#b2_arr1)" />

        <!-- Tên trục -->
        <text x="335" y="230" font-size="20" font-weight="bold" font-style="italic" fill="#0f172a" font-family="Times New Roman, serif">x</text>
        <text x="102" y="45" font-size="20" font-weight="bold" font-style="italic" fill="#0f172a" font-family="Times New Roman, serif">y</text>
        <text x="65" y="265" font-size="22" font-weight="bold" font-style="italic" fill="#0f172a" font-family="Times New Roman, serif">O</text>
        <circle cx="90" cy="240" r="4" fill="#1e3a8a" />

        <!-- Tọa độ A(3; 0) và B(0; 2) -->
        <circle cx="270" cy="240" r="4.5" fill="#1e3a8a" />
        <text x="264" y="266" font-size="19" font-weight="bold" fill="#0f172a" font-family="Times New Roman, serif">3</text>
        <text x="272" y="226" font-size="19" font-weight="bold" fill="#1e3a8a" font-family="Times New Roman, serif">A</text>

        <circle cx="90" cy="120" r="4.5" fill="#1e3a8a" />
        <text x="62" y="126" font-size="19" font-weight="bold" fill="#0f172a" font-family="Times New Roman, serif">2</text>
        <text x="100" y="115" font-size="19" font-weight="bold" fill="#1e3a8a" font-family="Times New Roman, serif">B</text>

        <!-- Đường thẳng d: 2x + 3y = 6 -->
        <line x1="45" y1="90" x2="315" y2="270" stroke="#1e3a8a" stroke-width="2.6" />
        <text x="175" y="160" font-size="15" font-weight="bold" fill="#1e3a8a" font-family="Times New Roman, serif" transform="rotate(33 175 160)">d: 2x + 3y = 6</text>
      </svg>
    `;
  },

  // Câu 6: Miền tam giác tạo bởi d1: x - y = 0, d2: x + y = 2 và y = 0
  b2_q6_region: function() {
    return `
      <svg viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:12px; border:1px solid #cbd5e1; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
        <defs>
          <marker id="b2_arr2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
          </marker>
        </defs>

        <!-- Miền tam giác nghiệm: O(0,0), I(1,1), (2,0) -->
        <polygon points="90,240 250,240 170,160" fill="#a7f3d0" opacity="0.7" stroke="#059669" stroke-width="1.8" />

        <!-- Trục tọa độ Ox, Oy -->
        <line x1="40" y1="240" x2="350" y2="240" stroke="#0f172a" stroke-width="2.2" marker-end="url(#b2_arr2)" />
        <line x1="90" y1="290" x2="90" y2="30" stroke="#0f172a" stroke-width="2.2" marker-end="url(#b2_arr2)" />

        <!-- Tên trục -->
        <text x="335" y="230" font-size="20" font-weight="bold" font-style="italic" fill="#0f172a" font-family="Times New Roman, serif">x</text>
        <text x="102" y="45" font-size="20" font-weight="bold" font-style="italic" fill="#0f172a" font-family="Times New Roman, serif">y</text>
        <text x="65" y="265" font-size="22" font-weight="bold" font-style="italic" fill="#0f172a" font-family="Times New Roman, serif">O</text>
        <circle cx="90" cy="240" r="4" fill="#0f172a" />

        <!-- Điểm đỉnh (2; 0) và I(1; 1) -->
        <circle cx="250" cy="240" r="4" fill="#0f172a" />
        <text x="245" y="265" font-size="18" font-weight="bold" fill="#0f172a" font-family="Times New Roman, serif">2</text>

        <circle cx="170" cy="160" r="4.5" fill="#059669" />
        <!-- Đường gióng nét đứt từ I(1,1) -->
        <line x1="170" y1="160" x2="170" y2="240" stroke="#64748b" stroke-width="1.6" stroke-dasharray="4,4" />
        <line x1="170" y1="160" x2="90" y2="160" stroke="#64748b" stroke-width="1.6" stroke-dasharray="4,4" />
        <text x="165" y="265" font-size="18" font-weight="bold" fill="#0f172a" font-family="Times New Roman, serif">1</text>
        <text x="65" y="166" font-size="18" font-weight="bold" fill="#0f172a" font-family="Times New Roman, serif">1</text>

        <!-- Đường thẳng d1: x - y = 0 -->
        <line x1="40" y1="290" x2="230" y2="100" stroke="#dc2626" stroke-width="2.4" />
        <text x="185" y="90" font-size="15" font-weight="bold" fill="#dc2626" font-family="Times New Roman, serif">d₁: x - y = 0</text>

        <!-- Đường thẳng d2: x + y = 2 -->
        <line x1="70" y1="60" x2="280" y2="270" stroke="#2563eb" stroke-width="2.4" />
        <text x="250" y="160" font-size="15" font-weight="bold" fill="#2563eb" font-family="Times New Roman, serif">d₂: x + y = 2</text>
      </svg>
    `;
  }
};

// ==========================================
// 3. TRẠNG THÁI BÀI THI (QUIZ STATE)
// ==========================================
const QuizState = {
  currentQuestionIndex: 0,
  userAnswers: new Array(QUIZ_QUESTIONS.length).fill(null),
  flaggedQuestions: new Set(),
  timeRemainingSeconds: 15 * 60,
  totalSeconds: 15 * 60,
  isSubmitted: false,
  timerInterval: null,
  studentName: "Học sinh Toán 10"
};

// ==========================================
// 4. KHỞI TẠO VÀ LẮNG NGHE SỰ KIỆN GIAO DIỆN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initIcons();
  loadSavedTheme();
  loadSavedFontSize();
  bindEvents();
  renderNavigationGrid();
  renderQuestion(QuizState.currentQuestionIndex);
  startTimer();
});

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function bindEvents() {
  // Chuyển Theme
  const themeBtn = document.getElementById("themeToggleBtn");
  themeBtn?.addEventListener("click", toggleTheme);

  // Cỡ chữ
  document.getElementById("fontDecreaseBtn")?.addEventListener("click", () => setFontSize("normal"));
  document.getElementById("fontResetBtn")?.addEventListener("click", () => setFontSize("normal"));
  document.getElementById("fontIncreaseBtn")?.addEventListener("click", () => setFontSize("large"));

  // Tên học sinh
  const nameInput = document.getElementById("studentNameInput");
  nameInput?.addEventListener("input", (e) => {
    QuizState.studentName = e.target.value.trim() || "Học sinh Toán 10";
  });

  // Điều hướng câu hỏi
  document.getElementById("prevQuestionBtn")?.addEventListener("click", () => {
    if (QuizState.currentQuestionIndex > 0) {
      goToQuestion(QuizState.currentQuestionIndex - 1);
    }
  });

  document.getElementById("nextQuestionBtn")?.addEventListener("click", () => {
    if (QuizState.currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      goToQuestion(QuizState.currentQuestionIndex + 1);
    }
  });

  // Đặt cờ
  document.getElementById("flagBtn")?.addEventListener("click", toggleFlagCurrentQuestion);

  // Xóa lựa chọn
  document.getElementById("clearAnswerBtn")?.addEventListener("click", clearAnswerCurrentQuestion);

  // Nộp bài
  document.getElementById("headerSubmitBtn")?.addEventListener("click", promptSubmitConfirmation);
  document.getElementById("submitQuizBtn")?.addEventListener("click", promptSubmitConfirmation);

  // Modal xác nhận
  document.getElementById("cancelModalBtn")?.addEventListener("click", closeSubmitModal);
  document.getElementById("confirmSubmitBtn")?.addEventListener("click", () => {
    closeSubmitModal();
    submitQuiz();
  });

  // Kết quả thi & Làm lại
  document.getElementById("retakeQuizBtn")?.addEventListener("click", resetQuiz);
  document.getElementById("printResultBtn")?.addEventListener("click", openPrintModal);

  // In / Xuất PDF
  document.getElementById("headerPrintBtn")?.addEventListener("click", openPrintModal);
  document.getElementById("closePrintModalBtn")?.addEventListener("click", closePrintModal);
  document.getElementById("printExamOnlyBtn")?.addEventListener("click", handlePrintExamOnly);
  document.getElementById("printFullSolutionBtn")?.addEventListener("click", handlePrintFullSolution);
  document.getElementById("scrollToReviewBtn")?.addEventListener("click", () => {
    document.getElementById("solutionsContainer")?.scrollIntoView({ behavior: "smooth" });
  });

  // Bộ lọc lời giải
  const filterChips = document.querySelectorAll(".filter-chip");
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      applySolutionFilter(chip.getAttribute("data-filter"));
    });
  });

  // Phím tắt bàn phím
  document.addEventListener("keydown", handleKeyNavigation);
}

// ==========================================
// 5. HIỂN THỊ CÂU HỎI
// ==========================================
function renderQuestion(index) {
  const q = QUIZ_QUESTIONS[index];
  QuizState.currentQuestionIndex = index;

  // Level Badge
  document.getElementById("questionLevelText").textContent = `Mức độ: ${q.level}`;
  document.getElementById("questionIndexIndicator").textContent = `Câu ${index + 1} / ${QUIZ_QUESTIONS.length}`;

  // Trạng thái Prev / Next
  document.getElementById("prevQuestionBtn").disabled = (index === 0);
  document.getElementById("nextQuestionBtn").disabled = (index === QUIZ_QUESTIONS.length - 1);

  // Đặt cờ
  const flagBtn = document.getElementById("flagBtn");
  if (QuizState.flaggedQuestions.has(index)) {
    flagBtn.classList.add("active");
    document.getElementById("flagText").textContent = "Bỏ đặt cờ";
  } else {
    flagBtn.classList.remove("active");
    document.getElementById("flagText").textContent = "Đặt cờ";
  }

  // Tiêu đề câu hỏi
  const promptEl = document.getElementById("questionPrompt");
  promptEl.innerHTML = `Câu ${index + 1}: ${q.prompt}`;

  // Đồ thị SVG
  const diagramWrapper = document.getElementById("diagramWrapper");
  const svgContainer = document.getElementById("svgContainer");
  if (q.svgType && SVG_DIAGRAMS[q.svgType]) {
    diagramWrapper.style.display = "flex";
    svgContainer.innerHTML = SVG_DIAGRAMS[q.svgType]();
  } else {
    diagramWrapper.style.display = "none";
    svgContainer.innerHTML = "";
  }

  // Dàn phương án A, B, C, D
  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  const labels = ["A", "B", "C", "D"];
  q.options.forEach((optText, optIdx) => {
    const isSelected = (QuizState.userAnswers[index] === optIdx);
    const optCard = document.createElement("div");
    optCard.className = `option-item ${isSelected ? "selected" : ""}`;
    optCard.setAttribute("tabindex", "0");
    optCard.setAttribute("role", "radio");
    optCard.setAttribute("aria-checked", isSelected ? "true" : "false");

    optCard.innerHTML = `
      <div class="option-prefix">${labels[optIdx]}</div>
      <div class="option-text">${optText}</div>
      <div class="option-check-circle">
        <i data-lucide="check" class="check-icon"></i>
      </div>
    `;

    optCard.addEventListener("click", () => {
      selectOption(index, optIdx);
    });

    optCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectOption(index, optIdx);
      }
    });

    optionsContainer.appendChild(optCard);
  });

  renderMathInElementSafely(document.getElementById("questionCard"));
  updateNavGridVisuals();
  updateStatusTags();
  initIcons();
}

function selectOption(qIndex, optIdx) {
  if (QuizState.isSubmitted) return;
  QuizState.userAnswers[qIndex] = optIdx;
  renderQuestion(qIndex);
}

function clearAnswerCurrentQuestion() {
  if (QuizState.isSubmitted) return;
  QuizState.userAnswers[QuizState.currentQuestionIndex] = null;
  renderQuestion(QuizState.currentQuestionIndex);
}

function toggleFlagCurrentQuestion() {
  const cur = QuizState.currentQuestionIndex;
  if (QuizState.flaggedQuestions.has(cur)) {
    QuizState.flaggedQuestions.delete(cur);
  } else {
    QuizState.flaggedQuestions.add(cur);
  }
  renderQuestion(cur);
}

function goToQuestion(index) {
  if (index < 0 || index >= QUIZ_QUESTIONS.length) return;
  renderQuestion(index);
}

// ==========================================
// 6. BẢNG ĐIỀU HƯỚNG CÂU HỎI
// ==========================================
function renderNavigationGrid() {
  const grid = document.getElementById("navGrid");
  grid.innerHTML = "";

  QUIZ_QUESTIONS.forEach((_, idx) => {
    const btn = document.createElement("button");
    btn.className = "nav-item-btn";
    btn.id = `navBtn_${idx}`;
    btn.textContent = (idx + 1);
    btn.title = `Chuyển tới câu ${idx + 1}`;
    btn.addEventListener("click", () => goToQuestion(idx));
    grid.appendChild(btn);
  });

  updateNavGridVisuals();
}

function updateNavGridVisuals() {
  QUIZ_QUESTIONS.forEach((_, idx) => {
    const btn = document.getElementById(`navBtn_${idx}`);
    if (!btn) return;

    btn.className = "nav-item-btn";

    if (idx === QuizState.currentQuestionIndex) {
      btn.classList.add("active");
    }
    if (QuizState.userAnswers[idx] !== null) {
      btn.classList.add("answered");
    }
    if (QuizState.flaggedQuestions.has(idx)) {
      btn.classList.add("flagged");
    }
  });
}

function updateStatusTags() {
  const answeredCount = QuizState.userAnswers.filter(a => a !== null).length;
  document.getElementById("answeredCount").textContent = answeredCount;
  document.getElementById("flaggedCount").textContent = QuizState.flaggedQuestions.size;
}

// ==========================================
// 7. BỘ ĐẾM GIỜ 15 PHÚT
// ==========================================
function startTimer() {
  const timerText = document.getElementById("timer");
  const timerRing = document.getElementById("timerRing");
  const totalSec = QuizState.totalSeconds;

  updateTimerDisplay();

  QuizState.timerInterval = setInterval(() => {
    QuizState.timeRemainingSeconds--;

    if (QuizState.timeRemainingSeconds <= 0) {
      clearInterval(QuizState.timerInterval);
      QuizState.timeRemainingSeconds = 0;
      updateTimerDisplay();
      autoSubmitTimeout();
    } else {
      updateTimerDisplay();
    }
  }, 1000);

  function updateTimerDisplay() {
    const mins = Math.floor(QuizState.timeRemainingSeconds / 60);
    const secs = QuizState.timeRemainingSeconds % 60;
    timerText.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

    const progress = (QuizState.timeRemainingSeconds / totalSec) * 100;
    timerRing?.setAttribute("stroke-dasharray", `${progress}, 100`);

    const timerBox = document.getElementById("timerContainer");
    if (QuizState.timeRemainingSeconds <= 180) {
      timerBox?.classList.add("warning");
    } else {
      timerBox?.classList.remove("warning");
    }
  }
}

function autoSubmitTimeout() {
  alert("⏰ ĐÃ HẾT THỜI GIAN 15 PHÚT!\nHệ thống tự động nộp bài và tổng kết điểm số cho bạn.");
  submitQuiz();
}

// ==========================================
// 8. XÁC NHẬN VÀ CHẤM ĐIỂM BÀI THI
// ==========================================
function promptSubmitConfirmation() {
  if (QuizState.isSubmitted) return;

  const unansweredCount = QuizState.userAnswers.filter(a => a === null).length;
  const warningEl = document.getElementById("unansweredWarning");
  const unansweredCountEl = document.getElementById("unansweredModalCount");

  if (unansweredCount > 0) {
    warningEl.style.display = "flex";
    unansweredCountEl.textContent = unansweredCount;
  } else {
    warningEl.style.display = "none";
  }

  document.getElementById("confirmModal").style.display = "flex";
  initIcons();
}

function closeSubmitModal() {
  document.getElementById("confirmModal").style.display = "none";
}

function submitQuiz() {
  QuizState.isSubmitted = true;
  clearInterval(QuizState.timerInterval);

  let correctCount = 0;
  QUIZ_QUESTIONS.forEach((q, idx) => {
    if (QuizState.userAnswers[idx] === q.correctIndex) {
      correctCount++;
    }
  });

  const totalQuestions = QUIZ_QUESTIONS.length;
  const scoreOutOf10 = (correctCount / totalQuestions) * 10;
  const timeUsedSeconds = QuizState.totalSeconds - QuizState.timeRemainingSeconds;
  const usedMinutes = Math.floor(timeUsedSeconds / 60);
  const usedSecs = timeUsedSeconds % 60;
  const timeUsedFormatted = `${String(usedMinutes).padStart(2, '0')}:${String(usedSecs).padStart(2, '0')}`;

  document.getElementById("quizBody").style.display = "none";
  const resultsSec = document.getElementById("resultsSection");
  resultsSec.style.display = "flex";

  document.getElementById("resultStudentName").textContent = QuizState.studentName;
  document.getElementById("finalScore").textContent = scoreOutOf10.toFixed(1);
  document.getElementById("correctCount").textContent = `${correctCount} / ${totalQuestions}`;
  document.getElementById("accuracyRate").textContent = `Tỉ lệ: ${(correctCount / totalQuestions * 100).toFixed(0)}%`;
  document.getElementById("timeSpent").textContent = timeUsedFormatted;

  const rankCategoryEl = document.getElementById("rankCategory");
  const rankFeedbackEl = document.getElementById("rankFeedback");
  const scoreCongratsEl = document.getElementById("scoreCongrats");

  if (scoreOutOf10 >= 9.0) {
    rankCategoryEl.textContent = "Xuất sắc";
    rankCategoryEl.className = "metric-value text-success";
    rankFeedbackEl.textContent = "Nắm rất vững kiến thức Hệ BPT!";
    scoreCongratsEl.textContent = "Chúc mừng bạn đạt điểm Xuất sắc!";
  } else if (scoreOutOf10 >= 7.0) {
    rankCategoryEl.textContent = "Khá - Giỏi";
    rankCategoryEl.className = "metric-value text-info";
    rankFeedbackEl.textContent = "Nắm tốt lý thuyết và kỹ năng giải miền nghiệm.";
    scoreCongratsEl.textContent = "Làm bài rất tốt!";
  } else if (scoreOutOf10 >= 5.0) {
    rankCategoryEl.textContent = "Trung bình";
    rankCategoryEl.className = "metric-value text-highlight";
    rankFeedbackEl.textContent = "Cần rèn luyện thêm bài toán biểu diễn miền nghiệm và tối ưu.";
    scoreCongratsEl.textContent = "Hoàn thành bài kiểm tra!";
  } else {
    rankCategoryEl.textContent = "Cần cố gắng";
    rankCategoryEl.className = "metric-value text-danger";
    rankFeedbackEl.textContent = "Hãy xem kỹ lời giải chi tiết bên dưới để bổ sung kiến thức.";
    scoreCongratsEl.textContent = "Cố gắng hơn ở bài tiếp theo nhé!";
  }

  // Cập nhật số lượng lọc
  const wrongCount = totalQuestions - correctCount;
  document.getElementById("filterWrongCount").textContent = wrongCount;
  document.getElementById("filterCorrectCount").textContent = correctCount;

  renderDetailedSolutions();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// 9. HIỂN THỊ LỜI GIẢI CHI TIẾT
// ==========================================
function renderDetailedSolutions() {
  const container = document.getElementById("solutionList");
  container.innerHTML = "";

  const optionLetters = ["A", "B", "C", "D"];

  QUIZ_QUESTIONS.forEach((q, idx) => {
    const studentChoice = QuizState.userAnswers[idx];
    const isCorrect = (studentChoice === q.correctIndex);

    const card = document.createElement("div");
    card.className = `solution-card ${isCorrect ? "correct" : "wrong"}`;
    card.setAttribute("data-status", isCorrect ? "correct" : "wrong");

    let statusHtml = isCorrect 
      ? `<span class="sol-status-badge correct"><i data-lucide="check" style="width:14px;height:14px;"></i> Chính xác (+1.0 đ)</span>`
      : `<span class="sol-status-badge wrong"><i data-lucide="x" style="width:14px;height:14px;"></i> Chưa chính xác (0 đ)</span>`;

    let diagramHtml = "";
    if (q.svgType && SVG_DIAGRAMS[q.svgType]) {
      diagramHtml = `
        <div class="diagram-wrapper" style="margin: 12px 0;">
          <div class="diagram-caption">
            <i data-lucide="image" class="caption-icon"></i>
            <span>Hình vẽ đồ thị bài toán:</span>
          </div>
          <div class="svg-canvas-container">
            ${SVG_DIAGRAMS[q.svgType]()}
          </div>
        </div>
      `;
    }

    let optionsHtml = q.options.map((optText, optIdx) => {
      let optClass = "sol-opt";
      let tagNote = "";

      if (optIdx === q.correctIndex) {
        optClass += " correct-answer";
        tagNote = ` <strong style="color:var(--accent-emerald);margin-left:auto;">[Đáp án đúng]</strong>`;
      }
      if (studentChoice === optIdx && !isCorrect) {
        optClass += " student-wrong";
        tagNote = ` <strong style="color:var(--accent-rose);margin-left:auto;">[Lựa chọn của bạn]</strong>`;
      } else if (studentChoice === optIdx && isCorrect) {
        tagNote = ` <strong style="color:var(--accent-emerald);margin-left:auto;">[Bạn đã chọn đúng]</strong>`;
      }

      return `
        <div class="${optClass}">
          <strong>${optionLetters[optIdx]}.</strong>
          <span>${optText}</span>
          ${tagNote}
        </div>
      `;
    }).join("");

    card.innerHTML = `
      <div class="sol-card-header">
        <span class="sol-number">Câu ${idx + 1} • ${q.level}</span>
        ${statusHtml}
      </div>

      <p class="sol-prompt">${q.prompt}</p>

      ${diagramHtml}

      <div class="sol-options-grid">
        ${optionsHtml}
      </div>

      <div class="sol-explanation-box">
        <div class="sol-explanation-title">
          <i data-lucide="lightbulb" style="width:16px;height:16px;"></i>
          <span>Lời giải chi tiết:</span>
        </div>
        <div class="sol-explanation-text">
          ${q.explanation}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  renderMathInElementSafely(container);
  initIcons();
}

function applySolutionFilter(filterType) {
  const cards = document.querySelectorAll(".solution-card");
  cards.forEach(card => {
    const status = card.getAttribute("data-status");
    if (filterType === "all") {
      card.style.display = "flex";
    } else if (filterType === "correct") {
      card.style.display = (status === "correct") ? "flex" : "none";
    } else if (filterType === "wrong") {
      card.style.display = (status === "wrong") ? "flex" : "none";
    }
  });
}

// ==========================================
// 10. LÀM LẠI BÀI THI
// ==========================================
function resetQuiz() {
  if (!confirm("Bạn có chắc chắn muốn làm lại bài kiểm tra 15 phút từ đầu?")) return;

  QuizState.currentQuestionIndex = 0;
  QuizState.userAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);
  QuizState.flaggedQuestions.clear();
  QuizState.timeRemainingSeconds = QuizState.totalSeconds;
  QuizState.isSubmitted = false;

  document.getElementById("quizBody").style.display = "grid";
  document.getElementById("resultsSection").style.display = "none";
  document.getElementById("headerSubmitBtn").style.display = "inline-flex";

  renderNavigationGrid();
  renderQuestion(0);
  startTimer();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// 11. ĐIỀU HƯỚNG BẰNG BÀN PHÍM
// ==========================================
function handleKeyNavigation(e) {
  if (QuizState.isSubmitted) return;

  const key = e.key.toUpperCase();
  if (["A", "B", "C", "D"].includes(key)) {
    const map = { "A": 0, "B": 1, "C": 2, "D": 3 };
    selectOption(QuizState.currentQuestionIndex, map[key]);
  } else if (["1", "2", "3", "4"].includes(key)) {
    selectOption(QuizState.currentQuestionIndex, parseInt(key, 10) - 1);
  } else if (e.key === "ArrowLeft") {
    if (QuizState.currentQuestionIndex > 0) {
      goToQuestion(QuizState.currentQuestionIndex - 1);
    }
  } else if (e.key === "ArrowRight") {
    if (QuizState.currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      goToQuestion(QuizState.currentQuestionIndex + 1);
    }
  }
}

// ==========================================
// 12. GIAO DIỆN SÁNG / TỐI
// ==========================================
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const target = (current === "dark") ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", target);
  localStorage.setItem("mathQuizTheme", target);

  const icon = document.getElementById("themeIcon");
  if (icon) {
    icon.setAttribute("data-lucide", target === "dark" ? "sun" : "moon");
    initIcons();
  }
}

function loadSavedTheme() {
  const saved = localStorage.getItem("mathQuizTheme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  const icon = document.getElementById("themeIcon");
  if (icon) {
    icon.setAttribute("data-lucide", saved === "dark" ? "sun" : "moon");
  }
}

// ==========================================
// 13. TIỆN ÍCH KATEX
// ==========================================
function renderMathInElementSafely(element) {
  if (!element) return;
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(element, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        throwOnError: false
      });
    } catch (err) {
      console.warn("KaTeX render error:", err);
    }
  } else {
    setTimeout(() => {
      if (window.renderMathInElement) {
        renderMathInElementSafely(element);
      }
    }, 300);
  }
}

// ==========================================
// 14. ĐIỀU CHỈNH CỠ CHỮ
// ==========================================
function loadSavedFontSize() {
  const saved = localStorage.getItem("mathQuizFontSize") || "normal";
  setFontSize(saved, false);
}

function setFontSize(size, save = true) {
  const resetBtn = document.getElementById("fontResetBtn");
  const incBtn = document.getElementById("fontIncreaseBtn");
  const decBtn = document.getElementById("fontDecreaseBtn");

  if (size === "large") {
    document.documentElement.setAttribute("data-font-size", "large");
    incBtn?.classList.add("active");
    resetBtn?.classList.remove("active");
    decBtn?.classList.remove("active");
  } else if (size === "xlarge") {
    document.documentElement.setAttribute("data-font-size", "xlarge");
    incBtn?.classList.add("active");
    resetBtn?.classList.remove("active");
    decBtn?.classList.remove("active");
  } else {
    document.documentElement.removeAttribute("data-font-size");
    resetBtn?.classList.add("active");
    decBtn?.classList.remove("active");
    incBtn?.classList.remove("active");
  }

  if (save) {
    localStorage.setItem("mathQuizFontSize", size);
  }
}

// ==========================================
// 15. IN ẤN VÀ XUẤT PDF A4
// ==========================================
function openPrintModal() {
  document.getElementById("printModal").style.display = "flex";
  initIcons();
}

function closePrintModal() {
  document.getElementById("printModal").style.display = "none";
}

function handlePrintExamOnly() {
  closePrintModal();
  document.body.classList.remove("print-mode-solution");
  renderPrintableExamSheet();
  setTimeout(() => {
    window.print();
  }, 300);
}

function handlePrintFullSolution() {
  closePrintModal();
  document.body.classList.add("print-mode-solution");
  renderDetailedSolutions();
  setTimeout(() => {
    window.print();
  }, 300);
}

function renderPrintableExamSheet() {
  const container = document.getElementById("printableExamSheet");
  if (!container) return;

  const optionLetters = ["A", "B", "C", "D"];

  let questionsHtml = QUIZ_QUESTIONS.map((q, idx) => {
    let diagramHtml = "";
    if (q.svgType && SVG_DIAGRAMS[q.svgType]) {
      diagramHtml = `
        <div class="paper-diagram-box">
          ${SVG_DIAGRAMS[q.svgType]()}
        </div>
      `;
    }

    let optionsHtml = q.options.map((optText, optIdx) => `
      <div class="paper-opt">
        <strong>${optionLetters[optIdx]}.</strong>
        <span>${optText}</span>
      </div>
    `).join("");

    return `
      <div class="paper-question-item">
        <div class="paper-question-prompt">
          <strong>Câu ${idx + 1}:</strong> ${q.prompt}
        </div>
        ${diagramHtml}
        <div class="paper-options-grid">
          ${optionsHtml}
        </div>
      </div>
    `;
  }).join("");

  let tableHeaderCols = "";
  let tableEmptyCols = "";
  for (let i = 1; i <= QUIZ_QUESTIONS.length; i++) {
    tableHeaderCols += `<th>Câu ${i}</th>`;
    tableEmptyCols += `<td style="height: 26px;">&nbsp;</td>`;
  }

  container.innerHTML = `
    <div class="paper-exam-header">
      <div class="paper-header-left">
        <h3>TRƯỜNG CAO ĐẲNG NGHỀ SỐ 1 - BQP</h3>
        <p>Khoa Cơ Bản - Tổ Toán • GV: Nguyễn Văn Sang</p>
      </div>
      <div class="paper-header-right">
        <h2>ĐỀ KIỂM TRA 15 PHÚT MÔN TOÁN 10</h2>
        <p><strong>Chủ đề:</strong> Bài 2. Hệ bất phương trình bậc nhất hai ẩn</p>
        <p><em>(Thời gian làm bài: 15 phút, gồm 10 câu trắc nghiệm • Mã đề: 102)</em></p>
      </div>
    </div>

    <div class="paper-student-info">
      <span><strong>Họ và tên thí sinh:</strong> ${QuizState.studentName || '................................................'}</span>
      <span><strong>Lớp:</strong> .................</span>
      <span><strong>Điểm số:</strong> ................. / 10</span>
    </div>

    <div class="paper-questions-list">
      ${questionsHtml}
    </div>

    <div class="paper-answer-sheet-box">
      <p style="font-weight: bold; margin-bottom: 4px;">BẢNG TRẢ LỜI CỦA HỌC SINH (Khoanh tròn hoặc điền A, B, C, D):</p>
      <table class="paper-answer-table">
        <tr>${tableHeaderCols}</tr>
        <tr>${tableEmptyCols}</tr>
      </table>
    </div>
  `;

  renderMathInElementSafely(container);
}
