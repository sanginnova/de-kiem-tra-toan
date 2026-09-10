/**
 * Đề Kiểm Tra Trắc Nghiệm 15 Phút: Bất Phương Trình Bậc Nhất Hai Ẩn - Toán 10
 * Bám sát tài liệu: "Bài 1 - Bất phương trình bậc nhất hai ẩn.pdf"
 */

// ==========================================
// 1. DỮ LIỆU CÂU HỎI (BÁM SÁT 100% TÀI LIỆU BÀI 1)
// ==========================================
const QUIZ_QUESTIONS = [
  {
    id: 1,
    level: "Nhận biết (Trích Câu 3 - Trang 27)",
    prompt: "Trong các bất phương trình sau, đâu là một <strong>bất phương trình bậc nhất hai ẩn</strong>?",
    svgType: null,
    options: [
      "$2x - y < 1$",
      "$x^2 + 2y < 1$",
      "$2x - y^2 \\ge 1$",
      "$xy \\le 1$"
    ],
    correctIndex: 0,
    explanation: "<strong>Đáp án A đúng.</strong><br>Theo định nghĩa, bất phương trình bậc nhất hai ẩn $x, y$ có dạng tổng quát là $ax + by < c$ (hoặc $\\le, >, \\ge$), trong đó $a, b$ không đồng thời bằng 0 và bậc của mỗi ẩn đều là bậc nhất.<br>• Ở phương án B: chứa $x^2$ (bậc 2).<br>• Ở phương án C: chứa $y^2$ (bậc 2).<br>• Ở phương án D: chứa tích hai ẩn $xy$ (bậc 2)."
  },
  {
    id: 2,
    level: "Nhận biết (Trích Câu 2 - Trang 27)",
    prompt: "Cho bất phương trình $x - 2y + 5 > 0$ có tập nghiệm là $S$. Mệnh đề nào sau đây là <strong>đúng</strong>?",
    svgType: null,
    options: [
      "$(-2; 2) \\in S$",
      "$(2; 2) \\in S$",
      "$(-2; 4) \\in S$",
      "$(1; 3) \\in S$"
    ],
    correctIndex: 1,
    explanation: "<strong>Đáp án B đúng.</strong><br>Thay lần lượt tọa độ từng điểm vào vế trái $f(x, y) = x - 2y + 5$:<br>• Với $(2; 2)$: $f(2, 2) = 2 - 2(2) + 5 = 3 > 0$ (Đúng, do đó $(2; 2) \\in S$).<br>• Với $(-2; 2)$: $-2 - 2(2) + 5 = -1 < 0$ (Sai).<br>• Với $(-2; 4)$: $-2 - 2(4) + 5 = -5 < 0$ (Sai).<br>• Với $(1; 3)$: $1 - 2(3) + 5 = 0 \\ngtr 0$ (Sai)."
  },
  {
    id: 3,
    level: "Nhận biết (Trích Câu 4 - Trang 27)",
    prompt: "Cặp số nào sau đây là <strong>nghiệm</strong> của bất phương trình $2x + 3y > 2$?",
    svgType: null,
    options: [
      "$(0; 0)$",
      "$(2; -1)$",
      "$(1; 0)$",
      "$(1; 1)$"
    ],
    correctIndex: 3,
    explanation: "<strong>Đáp án D đúng.</strong><br>Thay từng cặp số vào vế trái $f(x, y) = 2x + 3y$:<br>• Với $(1; 1)$: $2(1) + 3(1) = 5 > 2$ (Thỏa mãn).<br>• Với $(0; 0)$: $2(0) + 3(0) = 0 \\ngtr 2$ (Loại).<br>• Với $(2; -1)$: $2(2) + 3(-1) = 1 \\ngtr 2$ (Loại).<br>• Với $(1; 0)$: $2(1) + 3(0) = 2 \\ngtr 2$ (Loại)."
  },
  {
    id: 4,
    level: "Thông hiểu (Trích Câu 6 - Trang 27)",
    prompt: "Cho bất phương trình bậc nhất hai ẩn $x + 2y \\le 3$. Cặp số nào sau đây <strong>KHÔNG PHẢI</strong> là một nghiệm của bất phương trình đã cho?",
    svgType: null,
    options: [
      "$(-2; 1)$",
      "$(-1; -2)$",
      "$(1; 2)$",
      "$(-2; -1)$"
    ],
    correctIndex: 2,
    explanation: "<strong>Đáp án C đúng.</strong><br>Thay lần lượt các cặp số vào vế trái $f(x, y) = x + 2y$:<br>• Với $(1; 2)$: $1 + 2(2) = 5 > 3$. Do $5 \\nle 3$ nên $(1; 2)$ không thỏa mãn bất phương trình đã cho.<br>• Các cặp $(-2; 1)$, $(-1; -2)$, $(-2; -1)$ đều cho kết quả $\\le 3$ nên đều là nghiệm."
  },
  {
    id: 5,
    level: "Thông hiểu (Trích Câu 7 - Trang 28)",
    prompt: "Trong các bất phương trình bên dưới, bất phương trình nào có <strong>miền nghiệm tô màu</strong> được biểu diễn trên hệ trục toạ độ $Oxy$ như hình vẽ bên dưới?",
    svgType: "pdf_q7_diagram",
    options: [
      "$2x + 2y \\le 0$",
      "$x + y \\ge 2$",
      "$x + y \\le 2$",
      "$x - y \\le 2$"
    ],
    correctIndex: 1,
    explanation: "<strong>Đáp án B đúng.</strong><br>1. Đường thẳng bờ $d$ đi qua hai điểm $(2; 0)$ và $(0; 2)$ có phương trình đoạn chắn là: $\\dfrac{x}{2} + \\dfrac{y}{2} = 1 \\Leftrightarrow x + y = 2$.<br>2. Đường thẳng bờ được vẽ nét liền nên miền nghiệm kể cả bờ (có dấu $\\ge$ hoặc $\\le$).<br>3. Miền nghiệm tô màu không chứa gốc tọa độ $O(0; 0)$. Ta thử tọa độ $O(0; 0)$: $0 + 0 = 0 < 2$. Do đó miền tô màu biểu diễn bất phương trình $x + y \\ge 2$."
  },
  {
    id: 6,
    level: "Thông hiểu (Trích Câu 11 - Trang 29)",
    prompt: "Cho đường thẳng $d: 7x - 9y + 2 = 0$ chia mặt phẳng tọa độ làm hai nửa mặt phẳng. Miền nghiệm của bất phương trình $7x - 9y + 2 \\ge 0$ là nửa mặt phẳng:",
    svgType: null,
    options: [
      "Có bờ là đường thẳng $d$ và không chứa điểm $O(0; 0)$.",
      "Có bờ là đường thẳng $d$ và chứa điểm $O(0; 0)$.",
      "Có bờ là đường thẳng $d$ và không chứa điểm $M(1; 0)$.",
      "Có bờ là đường thẳng $d$ và chứa điểm $N(0; 1)$."
    ],
    correctIndex: 1,
    explanation: "<strong>Đáp án B đúng.</strong><br>Thay tọa độ điểm $O(0; 0)$ vào vế trái $f(x, y) = 7x - 9y + 2$:<br>$$f(0, 0) = 7(0) - 9(0) + 2 = 2 \\ge 0$$<br>Vì $2 \\ge 0$ là mệnh đề đúng nên gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của bất phương trình. Vậy miền nghiệm là nửa mặt phẳng có bờ là đường thẳng $d$ và chứa điểm $O(0; 0)$."
  },
  {
    id: 7,
    level: "Thông hiểu (Trích Câu 12 - Trang 29)",
    prompt: "Phần <strong>không tô màu</strong> trong hình vẽ dưới đây (không bao gồm đường thẳng $d$) là miền nghiệm của bất phương trình bậc nhất hai ẩn nào dưới đây?",
    svgType: "pdf_q12_diagram",
    options: [
      "$x - 2y < 0$",
      "$x - 2y < 2$",
      "$x - 2y < -2$",
      "$x - 2y > 1$"
    ],
    correctIndex: 1,
    explanation: "<strong>Đáp án B đúng.</strong><br>1. Đường thẳng bờ $d$ đi qua hai điểm $(2; 0)$ và $(0; -1)$ có phương trình là $\\dfrac{x}{2} + \\dfrac{y}{-1} = 1 \\Leftrightarrow x - 2y = 2$.<br>2. Đường bờ không được lấy nên bất phương trình có dấu ngặt '$<$' hoặc '$>$'.<br>3. Quan sát hình vẽ, phần không tô màu chứa gốc tọa độ $O(0; 0)$. Thay $(0; 0)$ vào vế trái $x - 2y$ ta được $0 - 2(0) = 0 < 2$.<br>Vậy miền không tô màu biểu diễn bất phương trình $x - 2y < 2$."
  },
  {
    id: 8,
    level: "Thông hiểu (Trích Câu 14 - Trang 30)",
    prompt: "Miền <strong>tô màu</strong> trong hình dưới đây (tính cả đường thẳng bờ) là miền nghiệm của bất phương trình nào?",
    svgType: "pdf_q14_diagram",
    options: [
      "$3x - 2y \\le -6$",
      "$3x - 2y \\ge -6$",
      "$2x - 3y \\ge -6$",
      "$3x - 2y > -6$"
    ],
    correctIndex: 1,
    explanation: "<strong>Đáp án B đúng.</strong><br>1. Đường thẳng bờ $d$ cắt trục $Ox$ tại $(-2; 0)$ và cắt $Oy$ tại $(0; 3)$ có phương trình: $\\dfrac{x}{-2} + \\dfrac{y}{3} = 1 \\Leftrightarrow -3x + 2y = 6 \\Leftrightarrow 3x - 2y = -6$.<br>2. Miền tô màu chứa gốc tọa độ $O(0; 0)$. Thay $(0; 0)$ vào $3x - 2y$ ta được $3(0) - 2(0) = 0 \\ge -6$ (Đúng).<br>3. Vì tính cả bờ nên bất phương trình tương ứng là $3x - 2y \\ge -6$."
  },
  {
    id: 9,
    level: "Vận dụng (Trích Câu 15 - Trang 30)",
    prompt: "Bạn Lan mang $150.000$ đồng đi nhà sách để mua một số quyển vở và bút cùng loại. Biết rằng mỗi quyển vở có giá $8.000$ đồng và mỗi chiếc bút có giá $6.000$ đồng. Gọi $x$ và $y$ lần lượt là số quyển vở và số chiếc bút Lan đã mua. Tìm bất phương trình biểu diễn điều kiện của $x$ và $y$.",
    svgType: null,
    options: [
      "$8x + 6y > 150$",
      "$8x - 6y \\ge 150$",
      "$8x + 6y \\le 15$",
      "$8x + 6y \\le 150$"
    ],
    correctIndex: 3,
    explanation: "<strong>Đáp án D đúng.</strong><br>• Số tiền mua $x$ quyển vở là: $8.000x$ (đồng).<br>• Số tiền mua $y$ chiếc bút là: $6.000y$ (đồng).<br>• Vì số tiền đem theo tối đa là $150.000$ đồng nên ta có bất phương trình:<br>$$8.000x + 6.000y \\le 150.000$$<br>Chia cả hai vế cho $1.000$, ta nhận được: $8x + 6y \\le 150$."
  },
  {
    id: 10,
    level: "Vận dụng (Trích Câu 20 - Trang 31)",
    prompt: "Cho bất phương trình bậc nhất hai ẩn $x + 2y \\le 20$. Có bao nhiêu giá trị nguyên dương của tham số $m$ để cặp số $(m; 2m - 1)$ là một nghiệm của bất phương trình đã cho?",
    svgType: null,
    options: [
      "4",
      "5",
      "3",
      "Vô số"
    ],
    correctIndex: 0,
    explanation: "<strong>Đáp án A đúng.</strong><br>Để cặp $(m; 2m - 1)$ là nghiệm của bất phương trình, ta thay $x = m$ và $y = 2m - 1$ vào bất phương trình:<br>$$m + 2(2m - 1) \\le 20 \\Leftrightarrow m + 4m - 2 \\le 20 \\Leftrightarrow 5m \\le 22 \\Leftrightarrow m \\le \\dfrac{22}{5} = 4,4$$<br>Do $m$ là số nguyên dương ($m \\in \\mathbb{Z}^+$) nên $m \\in \\{1; 2; 3; 4\\}$.<br>Vậy có đúng <strong>4</strong> giá trị nguyên dương của $m$ thỏa mãn yêu cầu."
  }
];

// ==========================================
// 2. BỘ PHÁT SINH HÌNH VẼ SVG ĐỒ THỊ CHUẨN TÀI LIỆU
// ==========================================
const SVG_DIAGRAMS = {
  // Câu 5 (Trích Câu 7 tài liệu): x + y = 2, cắt (2,0) và (0,2), miền tô màu không chứa O(0,0)
  pdf_q7_diagram: function() {
    return `
      <svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:12px; border:1px solid #e2e8f0;">
        <defs>
          <marker id="pdf_arrow1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#d946ef" />
          </marker>
        </defs>

        <!-- Shaded region: x + y >= 2 (Upper right half-plane) -->
        <polygon points="10,80 340,320 350,320 350,10 10,10" fill="#fbcfe8" opacity="0.8" />

        <!-- Axes: Ox at y=240, Oy at x=110 -->
        <!-- Scale: 1 unit = 60px. (2,0) -> (110 + 120, 240) = (230, 240). (0,2) -> (110, 240 - 120) = (110, 120) -->
        <line x1="20" y1="240" x2="345" y2="240" stroke="#db2777" stroke-width="2.2" marker-end="url(#pdf_arrow1)" />
        <line x1="110" y1="305" x2="110" y2="25" stroke="#db2777" stroke-width="2.2" marker-end="url(#pdf_arrow1)" />

        <!-- Axis Labels -->
        <text x="325" y="228" font-size="20" font-weight="bold" font-style="italic" fill="#db2777" font-family="Times New Roman, serif">x</text>
        <text x="120" y="38" font-size="20" font-weight="bold" font-style="italic" fill="#db2777" font-family="Times New Roman, serif">y</text>
        <text x="75" y="268" font-size="22" font-weight="bold" font-style="italic" fill="#db2777" font-family="Times New Roman, serif">O</text>
        <circle cx="110" cy="240" r="3.5" fill="#f43f5e" stroke="#000" stroke-width="1" />

        <!-- Intercept points: (2, 0) and (0, 2) -->
        <text x="215" y="270" font-size="20" font-weight="bold" fill="#db2777" font-family="Times New Roman, serif">2</text>
        <text x="75" y="130" font-size="20" font-weight="bold" fill="#db2777" font-family="Times New Roman, serif">2</text>

        <!-- Boundary line: x + y = 2 (solid pink line) -->
        <line x1="15" y1="45" x2="320" y2="300" stroke="#db2777" stroke-width="2.8" />
      </svg>
    `;
  },

  // Câu 7 (Trích Câu 12 tài liệu): x - 2y = 2, cắt (2,0) và (0,-1), phần KHÔNG TÔ MÀU chứa O(0,0)
  pdf_q12_diagram: function() {
    return `
      <svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:12px; border:1px solid #e2e8f0;">
        <defs>
          <marker id="pdf_arrow2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#d946ef" />
          </marker>
        </defs>

        <!-- Shaded region: x - 2y > 2 (Lower half-plane) -->
        <polygon points="10,210 350,60 350,250 10,250" fill="#fbcfe8" opacity="0.8" />

        <!-- Axes: Ox at y=110, Oy at x=90 -->
        <!-- Scale: 1 unit = 60px. (2,0) -> (90+120, 110) = (210, 110). (0,-1) -> (90, 110+60) = (90, 170) -->
        <line x1="15" y1="110" x2="345" y2="110" stroke="#db2777" stroke-width="2.2" marker-end="url(#pdf_arrow2)" />
        <line x1="90" y1="245" x2="90" y2="25" stroke="#db2777" stroke-width="2.2" marker-end="url(#pdf_arrow2)" />

        <!-- Axis Labels -->
        <text x="325" y="100" font-size="20" font-weight="bold" font-style="italic" fill="#db2777" font-family="Times New Roman, serif">x</text>
        <text x="65" y="45" font-size="20" font-weight="bold" font-style="italic" fill="#db2777" font-family="Times New Roman, serif">y</text>
        <text x="55" y="138" font-size="22" font-weight="bold" font-style="italic" fill="#db2777" font-family="Times New Roman, serif">O</text>
        <circle cx="90" cy="110" r="3.5" fill="#f43f5e" stroke="#000" stroke-width="1" />

        <!-- Intercept points: (2, 0) and (0, -1) -->
        <text x="202" y="95" font-size="20" font-weight="bold" fill="#db2777" font-family="Times New Roman, serif">2</text>
        <text x="40" y="180" font-size="20" font-weight="bold" fill="#db2777" font-family="Times New Roman, serif">-1</text>

        <!-- Boundary line d: x - 2y = 2 -->
        <line x1="10" y1="205" x2="350" y2="55" stroke="#db2777" stroke-width="2.8" />
      </svg>
    `;
  },

  // Câu 8 (Trích Câu 14 tài liệu): 3x - 2y = -6, cắt (-2,0) và (0,3), miền TÔ MÀU chứa O(0,0)
  pdf_q14_diagram: function() {
    return `
      <svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:12px; border:1px solid #e2e8f0;">
        <defs>
          <marker id="pdf_arrow3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#d946ef" />
          </marker>
        </defs>

        <!-- Shaded region: 3x - 2y >= -6 (Lower right, contains O(0,0)) -->
        <polygon points="50,310 300,10 350,10 350,310" fill="#fbcfe8" opacity="0.8" />

        <!-- Axes: Ox at y=230, Oy at x=200 -->
        <!-- Scale: 1 unit = 50px. (-2,0) -> (200 - 100, 230) = (100, 230). (0,3) -> (200, 230 - 150) = (200, 80) -->
        <line x1="20" y1="230" x2="345" y2="230" stroke="#db2777" stroke-width="2.2" marker-end="url(#pdf_arrow3)" />
        <line x1="200" y1="305" x2="200" y2="25" stroke="#db2777" stroke-width="2.2" marker-end="url(#pdf_arrow3)" />

        <!-- Axis Labels -->
        <text x="325" y="220" font-size="20" font-weight="bold" font-style="italic" fill="#db2777" font-family="Times New Roman, serif">x</text>
        <text x="175" y="45" font-size="20" font-weight="bold" font-style="italic" fill="#db2777" font-family="Times New Roman, serif">y</text>
        <text x="165" y="260" font-size="22" font-weight="bold" font-style="italic" fill="#db2777" font-family="Times New Roman, serif">O</text>
        <circle cx="200" cy="230" r="3.5" fill="#f43f5e" stroke="#000" stroke-width="1" />

        <!-- Intercept points: (-2, 0) and (0, 3) -->
        <text x="75" y="215" font-size="20" font-weight="bold" fill="#db2777" font-family="Times New Roman, serif">-2</text>
        <text x="170" y="90" font-size="20" font-weight="bold" fill="#db2777" font-family="Times New Roman, serif">3</text>

        <!-- Boundary line d: 3x - 2y = -6 -->
        <line x1="45" y1="315" x2="305" y2="5" stroke="#db2777" stroke-width="2.8" />
      </svg>
    `;
  }
};

// ==========================================
// 3. TRẠNG THÁI BÀI THI (QUIZ STATE - 15 PHÚT)
// ==========================================
const QuizState = {
  currentQuestionIndex: 0,
  userAnswers: new Array(QUIZ_QUESTIONS.length).fill(null),
  flaggedQuestions: new Set(),
  timeRemainingSeconds: 15 * 60, // 15 phút = 900 giây
  totalSeconds: 15 * 60,
  isSubmitted: false,
  timerInterval: null,
  studentName: "Học sinh Toán 10"
};

// ==========================================
// 4. KHỞI TẠO VÀ SỰ KIỆN GIAO DIỆN
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
  // Theme Toggle
  const themeBtn = document.getElementById("themeToggleBtn");
  themeBtn.addEventListener("click", toggleTheme);

  // Font Size Buttons
  document.getElementById("fontDecreaseBtn")?.addEventListener("click", () => setFontSize("normal"));
  document.getElementById("fontResetBtn")?.addEventListener("click", () => setFontSize("normal"));
  document.getElementById("fontIncreaseBtn")?.addEventListener("click", () => setFontSize("large"));

  // Student Name
  const nameInput = document.getElementById("studentNameInput");
  nameInput.addEventListener("input", (e) => {
    QuizState.studentName = e.target.value.trim() || "Học sinh Toán 10";
  });

  // Prev / Next Navigation
  document.getElementById("prevQuestionBtn").addEventListener("click", () => {
    if (QuizState.currentQuestionIndex > 0) {
      goToQuestion(QuizState.currentQuestionIndex - 1);
    }
  });

  document.getElementById("nextQuestionBtn").addEventListener("click", () => {
    if (QuizState.currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      goToQuestion(QuizState.currentQuestionIndex + 1);
    }
  });

  // Flag Question
  document.getElementById("flagBtn").addEventListener("click", toggleFlagCurrentQuestion);

  // Clear Answer
  document.getElementById("clearAnswerBtn").addEventListener("click", clearAnswerCurrentQuestion);

  // Submit Buttons
  document.getElementById("headerSubmitBtn").addEventListener("click", promptSubmitConfirmation);
  document.getElementById("submitQuizBtn").addEventListener("click", promptSubmitConfirmation);

  // Modal Buttons
  document.getElementById("cancelModalBtn").addEventListener("click", closeSubmitModal);
  document.getElementById("confirmSubmitBtn").addEventListener("click", () => {
    closeSubmitModal();
    submitQuiz();
  });

  // Results Actions
  document.getElementById("retakeQuizBtn").addEventListener("click", resetQuiz);
  document.getElementById("printResultBtn").addEventListener("click", () => window.print());
  document.getElementById("scrollToReviewBtn").addEventListener("click", () => {
    document.getElementById("solutionsContainer").scrollIntoView({ behavior: "smooth" });
  });

  // Solution Filter Buttons
  const filterChips = document.querySelectorAll(".filter-chip");
  filterChips.forEach(chip => {
    chip.addEventListener("click", (e) => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      applySolutionFilter(chip.getAttribute("data-filter"));
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", handleKeyNavigation);
}

// ==========================================
// 5. HIỂN THỊ CÂU HỎI & VẼ ĐỒ THỊ
// ==========================================
function renderQuestion(index) {
  const q = QUIZ_QUESTIONS[index];
  QuizState.currentQuestionIndex = index;

  // Level Badge
  document.getElementById("questionLevelText").textContent = q.level;
  document.getElementById("questionIndexIndicator").textContent = `Câu ${index + 1} / ${QUIZ_QUESTIONS.length}`;

  // Prev / Next button states
  document.getElementById("prevQuestionBtn").disabled = (index === 0);
  document.getElementById("nextQuestionBtn").disabled = (index === QUIZ_QUESTIONS.length - 1);

  // Flag Button State
  const flagBtn = document.getElementById("flagBtn");
  if (QuizState.flaggedQuestions.has(index)) {
    flagBtn.classList.add("active");
    document.getElementById("flagText").textContent = "Bỏ đặt cờ";
  } else {
    flagBtn.classList.remove("active");
    document.getElementById("flagText").textContent = "Đặt cờ";
  }

  // Question Prompt
  const promptEl = document.getElementById("questionPrompt");
  promptEl.innerHTML = `Câu ${index + 1}: ${q.prompt}`;

  // SVG Diagram Check
  const diagramWrapper = document.getElementById("diagramWrapper");
  const svgContainer = document.getElementById("svgContainer");
  if (q.svgType && SVG_DIAGRAMS[q.svgType]) {
    diagramWrapper.style.display = "flex";
    svgContainer.innerHTML = SVG_DIAGRAMS[q.svgType]();
  } else {
    diagramWrapper.style.display = "none";
    svgContainer.innerHTML = "";
  }

  // Options Container
  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  const optionLetters = ["A", "B", "C", "D"];
  q.options.forEach((optText, optIdx) => {
    const isSelected = (QuizState.userAnswers[index] === optIdx);
    
    const optDiv = document.createElement("div");
    optDiv.className = `option-item ${isSelected ? "selected" : ""}`;
    optDiv.setAttribute("role", "button");
    optDiv.setAttribute("tabindex", "0");
    optDiv.innerHTML = `
      <span class="option-key">${optionLetters[optIdx]}</span>
      <span class="option-text">${optText}</span>
    `;

    optDiv.addEventListener("click", () => selectOption(index, optIdx));
    optionsContainer.appendChild(optDiv);
  });

  // Render KaTeX Math Expressions
  renderMathInElementSafely(document.getElementById("questionCard"));

  // Update Nav Grid highlight
  updateNavGridVisuals();
  updateStatusTags();
  initIcons();
}

function selectOption(qIndex, optIdx) {
  if (QuizState.isSubmitted) return;
  QuizState.userAnswers[qIndex] = optIdx;
  renderQuestion(qIndex);
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

function clearAnswerCurrentQuestion() {
  if (QuizState.isSubmitted) return;
  QuizState.userAnswers[QuizState.currentQuestionIndex] = null;
  renderQuestion(QuizState.currentQuestionIndex);
}

function goToQuestion(index) {
  renderQuestion(index);
}

// ==========================================
// 6. BẢNG ĐIỀU HƯỚNG CÂU HỎI (NAV GRID)
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
// 7. BỘ ĐẾM THỜI GIAN (15 PHÚT COUNTDOWN)
// ==========================================
function startTimer() {
  updateTimerDisplay();

  QuizState.timerInterval = setInterval(() => {
    QuizState.timeRemainingSeconds--;

    updateTimerDisplay();

    if (QuizState.timeRemainingSeconds <= 0) {
      clearInterval(QuizState.timerInterval);
      autoSubmitTimeout();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const total = QuizState.timeRemainingSeconds;
  const minutes = Math.floor(Math.max(0, total) / 60);
  const seconds = Math.max(0, total) % 60;
  
  const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById("timer").textContent = formatted;

  const timerBox = document.getElementById("timerContainer");
  const ringFill = document.getElementById("timerRing");

  const percentLeft = Math.max(0, (total / QuizState.totalSeconds) * 100);
  if (ringFill) {
    ringFill.setAttribute("stroke-dasharray", `${percentLeft}, 100`);
  }

  // Cảnh báo thời gian: dưới 3 phút vàng, dưới 1 phút đỏ
  if (total <= 180 && total > 60) {
    timerBox.classList.add("warning");
    timerBox.classList.remove("danger");
  } else if (total <= 60) {
    timerBox.classList.remove("warning");
    timerBox.classList.add("danger");
  } else {
    timerBox.classList.remove("warning", "danger");
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
    rankFeedbackEl.textContent = "Nắm rất vững kiến thức Bài 1!";
    scoreCongratsEl.textContent = "Chúc mừng bạn đạt điểm Xuất sắc!";
  } else if (scoreOutOf10 >= 7.0) {
    rankCategoryEl.textContent = "Khá - Giỏi";
    rankCategoryEl.className = "metric-value text-info";
    rankFeedbackEl.textContent = "Nắm tốt lý thuyết và kỹ năng đọc đồ thị.";
    scoreCongratsEl.textContent = "Làm bài rất tốt!";
  } else if (scoreOutOf10 >= 5.0) {
    rankCategoryEl.textContent = "Trung bình";
    rankCategoryEl.className = "metric-value text-highlight";
    rankFeedbackEl.textContent = "Cần chú ý thêm cách thử điểm và dấu miền nghiệm.";
    scoreCongratsEl.textContent = "Hoàn thành bài thi!";
  } else {
    rankCategoryEl.textContent = "Cần cố gắng";
    rankCategoryEl.className = "metric-value text-danger";
    rankFeedbackEl.textContent = "Hãy xem kỹ bảng lời giải chi tiết bên dưới nhé.";
    scoreCongratsEl.textContent = "Cần cố gắng thêm!";
  }

  const wrongCount = totalQuestions - correctCount;
  document.getElementById("filterWrongCount").textContent = wrongCount;
  document.getElementById("filterCorrectCount").textContent = correctCount;

  renderDetailedSolutions();
  window.scrollTo({ top: 0, behavior: "smooth" });
  initIcons();
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
// 10. LÀM LẠI BÀI THI (RESET QUIZ)
// ==========================================
function resetQuiz() {
  if (!confirm("Bạn có chắc chắn muốn làm lại bài kiểm tra 15 phút từ đầu?")) return;

  QuizState.currentQuestionIndex = 0;
  QuizState.userAnswers.fill(null);
  QuizState.flaggedQuestions.clear();
  QuizState.timeRemainingSeconds = QuizState.totalSeconds;
  QuizState.isSubmitted = false;

  document.getElementById("resultsSection").style.display = "none";
  document.getElementById("quizBody").style.display = "grid";

  renderNavigationGrid();
  renderQuestion(0);
  startTimer();
}

// ==========================================
// 11. ĐIỀU HƯỚNG BẰNG BÀN PHÍM
// ==========================================
function handleKeyNavigation(e) {
  if (QuizState.isSubmitted) return;
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

  if (e.key === "ArrowLeft") {
    if (QuizState.currentQuestionIndex > 0) {
      goToQuestion(QuizState.currentQuestionIndex - 1);
    }
  } else if (e.key === "ArrowRight") {
    if (QuizState.currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      goToQuestion(QuizState.currentQuestionIndex + 1);
    }
  } else if (["1", "2", "3", "4"].includes(e.key)) {
    const optIdx = parseInt(e.key, 10) - 1;
    selectOption(QuizState.currentQuestionIndex, optIdx);
  }
}

// ==========================================
// 12. GIAO DIỆN SÁNG / TỐI (THEME)
// ==========================================
function loadSavedTheme() {
  const savedTheme = localStorage.getItem("mathQuizTheme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const newTheme = (currentTheme === "dark") ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("mathQuizTheme", newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (!icon) return;
  icon.setAttribute("data-lucide", (theme === "dark") ? "sun" : "moon");
  initIcons();
}

// ==========================================
// 13. HIỂN THỊ CÔNG THỨC TOÁN KATEX
// ==========================================
function renderMathInElementSafely(element) {
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
// 14. ĐIỀU CHỈNH CỠ CHỮ PHÙ HỢP THỊ LỰC
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

