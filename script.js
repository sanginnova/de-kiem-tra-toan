/**
 * Đề Kiểm Tra Trắc Nghiệm 15 Phút: Bất Phương Trình Bậc Nhất Hai Ẩn - Toán 10
 * NGUỒN DỮ LIỆU: TOÁN 10 - TỪ TÂM (CHƯƠNG 2: BPT VÀ HỆ BPT BẬC NHẤT HAI ẨN)
 */

// ==========================================
// 1. DỮ LIỆU CÂU HỎI (TRÍCH 100% TỪ NGUỒN TOÁN 10 - TỪ TÂM)
// ==========================================
const QUIZ_QUESTIONS = [
  {
    id: 1,
    level: "Nhận biết (Trích Câu 8 - Trang 7 | Toán 10 Từ Tâm)",
    prompt: "Trong các bất phương trình sau, bất phương trình nào là <strong>bất phương trình bậc nhất hai ẩn</strong>?",
    svgType: null,
    options: [
      "$2x - 5y + 3z \\le 0$",
      "$3x^2 + 2x - 4 > 0$",
      "$2x^2 + 5y > 3$",
      "$2x + 3y < 5$"
    ],
    correctIndex: 3,
    explanation: "<strong>Đáp án D đúng.</strong><br>Bất phương trình bậc nhất hai ẩn có dạng $ax + by < c$ (hoặc $\\le, >, \\ge$) với $a^2 + b^2 \\ne 0$. Ở phương án D, $2x + 3y < 5$ chứa đúng 2 ẩn $x, y$ và đều có bậc nhất.<br>• Phương án A: chứa 3 ẩn $x, y, z$.<br>• Phương án B & C: chứa ẩn bậc hai ($x^2$)."
  },
  {
    id: 2,
    level: "Nhận biết (Trích Câu 1 - Trang 7 | Toán 10 Từ Tâm)",
    prompt: "Trong mặt phẳng tọa độ $Oxy$, khẳng định nào sau đây là <strong>đúng</strong> về miền nghiệm của bất phương trình bậc nhất hai ẩn $ax + by \\le c$ ($a^2 + b^2 \\ne 0$)?",
    svgType: null,
    options: [
      "Miền nghiệm là nửa mặt phẳng (kể cả bờ $d: ax + by = c$) gồm các điểm có tọa độ thỏa mãn bất phương trình.",
      "Bất phương trình bậc nhất hai ẩn chỉ có duy nhất một nghiệm.",
      "Miền nghiệm của bất phương trình luôn luôn chứa gốc tọa độ $O(0; 0)$.",
      "Tập nghiệm của bất phương trình bậc nhất hai ẩn luôn là tập rỗng."
    ],
    correctIndex: 0,
    explanation: "<strong>Đáp án A đúng.</strong><br>Theo định nghĩa trong SGK và tài liệu Toán Từ Tâm:<br>Trong mặt phẳng toạ độ $Oxy$, tập hợp các điểm có toạ độ là nghiệm của bất phương trình $ax + by \\le c$ được gọi là miền nghiệm của nó. Miền nghiệm là nửa mặt phẳng có bờ là đường thẳng $d: ax + by = c$ (kể cả bờ)."
  },
  {
    id: 3,
    level: "Nhận biết (Trích Câu 9 - Trang 7 | Toán 10 Từ Tâm)",
    prompt: "Điểm nào sau đây thuộc miền nghiệm của bất phương trình $2x + y - 3 > 0$?",
    svgType: null,
    options: [
      "$Q(-1; -3)$",
      "$M\\left(1; \\dfrac{3}{2}\\right)$",
      "$N(1; 1)$",
      "$P\\left(-1; \\dfrac{3}{2}\\right)$"
    ],
    correctIndex: 1,
    explanation: "<strong>Đáp án B đúng.</strong><br>Thay tọa độ các điểm vào vế trái $f(x, y) = 2x + y - 3$:<br>• Với $M\\left(1; \\dfrac{3}{2}\\right)$: $f = 2(1) + \\dfrac{3}{2} - 3 = \\dfrac{1}{2} > 0$ (Đúng, điểm $M$ thuộc miền nghiệm).<br>• Với $Q(-1; -3)$: $f = 2(-1) - 3 - 3 = -8 < 0$ (Loại).<br>• Với $N(1; 1)$: $f = 2(1) + 1 - 3 = 0 \\ngtr 0$ (Loại, vì dấu $>$ không lấy bờ).<br>• Với $P\\left(-1; \\dfrac{3}{2}\\right)$: $f = 2(-1) + \\dfrac{3}{2} - 3 = -3{,}5 < 0$ (Loại)."
  },
  {
    id: 4,
    level: "Thông hiểu (Trích Câu 7 - Trang 7 | Toán 10 Từ Tâm)",
    prompt: "Trong các cặp số sau đây, cặp số nào <strong>KHÔNG</strong> là nghiệm của bất phương trình $x - 4y + 5 \\ge 0$?",
    svgType: null,
    options: [
      "$(-5; 0)$",
      "$(-2; 1)$",
      "$(-1; 3)$",
      "$(0; 0)$"
    ],
    correctIndex: 2,
    explanation: "<strong>Đáp án C đúng.</strong><br>Thay lần lượt các cặp số vào vế trái $f(x, y) = x - 4y + 5$:<br>• Với $(-1; 3)$: $f(-1, 3) = -1 - 4(3) + 5 = -8 < 0$, do đó $(-1; 3)$ không thỏa mãn điều kiện $\\ge 0$.<br>• Các cặp $(-5; 0)$, $(-2; 1)$, $(0; 0)$ đều cho kết quả $\\ge 0$ nên đều là nghiệm."
  },
  {
    id: 5,
    level: "Thông hiểu (Trích Câu 10 - Trang 7-8 | Toán 10 Từ Tâm)",
    prompt: "Miền nghiệm của bất phương trình $-3x + y + 2 \\le 0$ <strong>không chứa</strong> điểm nào sau đây?",
    svgType: null,
    options: [
      "$A(1; 2)$",
      "$B(2; 1)$",
      "$C\\left(1; \\dfrac{1}{2}\\right)$",
      "$D(3; 1)$"
    ],
    correctIndex: 0,
    explanation: "<strong>Đáp án A đúng.</strong><br>Thay lần lượt tọa độ các điểm vào vế trái $f(x, y) = -3x + y + 2$:<br>• Với $A(1; 2)$: $f(1, 2) = -3(1) + 2 + 2 = 1 > 0$ (Không thỏa mãn điều kiện $\\le 0$). Do đó miền nghiệm không chứa điểm $A$.<br>• Với $B(2; 1)$: $-3(2) + 1 + 2 = -3 \\le 0$ (Thỏa mãn).<br>• Với $C\\left(1; \\dfrac{1}{2}\\right)$: $-3(1) + 0{,}5 + 2 = -0{,}5 \\le 0$ (Thỏa mãn).<br>• Với $D(3; 1)$: $-3(3) + 1 + 2 = -6 \\le 0$ (Thỏa mãn)."
  },
  {
    id: 6,
    level: "Thông hiểu (Trích Câu 21 - Trang 9 | Toán 10 Từ Tâm)",
    prompt: "Đường thẳng bờ $d$ đi qua hai điểm $(2; 0)$ và $(0; 3)$ có phương trình $3x + 2y = 6$. Miền nghiệm của bất phương trình $3x + 2y > 6$ (minh họa bởi phần tô màu trên hình vẽ bên dưới) là nửa mặt phẳng bờ $d$:",
    svgType: "tutam_q21_diagram",
    options: [
      "Không chứa gốc tọa độ $O(0; 0)$ và không kể bờ $d$.",
      "Chứa gốc tọa độ $O(0; 0)$ và không kể bờ $d$.",
      "Chứa điểm $M(1; 1)$ và kể cả bờ $d$.",
      "Chứa điểm $N(0; 2)$ và không kể bờ $d$."
    ],
    correctIndex: 0,
    explanation: "<strong>Đáp án A đúng.</strong><br>1. Đường thẳng $d$ cắt $Ox$ tại $(2; 0)$ và $Oy$ tại $(0; 3)$ có phương trình $\\dfrac{x}{2} + \\dfrac{y}{3} = 1 \\Leftrightarrow 3x + 2y = 6$.<br>2. Bất phương trình $3x + 2y > 6$ mang dấu '$>$' (ngặt) nên <strong>không kể bờ</strong> $d$ (đường nét đứt).<br>3. Thay gốc tọa độ $O(0; 0)$ vào vế trái: $3(0) + 2(0) = 0 \\ngtr 6$ (Sai). Do đó miền nghiệm là nửa mặt phẳng không chứa gốc tọa độ $O(0; 0)$."
  },
  {
    id: 7,
    level: "Thông hiểu (Trích Câu 20 - Trang 8-9 | Toán 10 Từ Tâm)",
    prompt: "Miền nghiệm của bất phương trình $3x - 2y > -6$ (được minh họa bởi phần tô màu trên hình vẽ bên dưới) là nửa mặt phẳng có bờ là đường thẳng $d: 3x - 2y = -6$:",
    svgType: "tutam_q20_diagram",
    options: [
      "Chứa gốc tọa độ $O(0; 0)$ và không kể bờ $d$.",
      "Không chứa gốc tọa độ $O(0; 0)$ và không kể bờ $d$.",
      "Chứa gốc tọa độ $O(0; 0)$ và kể cả bờ $d$.",
      "Không chứa gốc tọa độ $O(0; 0)$ và kể cả bờ $d$."
    ],
    correctIndex: 0,
    explanation: "<strong>Đáp án A đúng.</strong><br>1. Đường thẳng $d: 3x - 2y = -6$ đi qua hai điểm $(-2; 0)$ và $(0; 3)$.<br>2. Thay tọa độ $O(0; 0)$ vào vế trái: $3(0) - 2(0) = 0 > -6$ (Mệnh đề đúng).<br>3. Vì dấu bất phương trình là '$>$' nên miền nghiệm không lấy bờ $d$ (vẽ nét đứt).<br>Vậy miền nghiệm là nửa mặt phẳng có bờ là đường thẳng $d$, chứa gốc tọa độ $O(0; 0)$ và không kể bờ $d$."
  },
  {
    id: 8,
    level: "Thông hiểu (Trích Câu 24 - Trang 10 | Toán 10 Từ Tâm)",
    prompt: "Cặp số $(x_0; y_0)$ nào sau đây là <strong>nghiệm</strong> của bất phương trình $3x - 3y \\ge 4$?",
    svgType: null,
    options: [
      "$(x_0; y_0) = (-2; 2)$",
      "$(x_0; y_0) = (5; 1)$",
      "$(x_0; y_0) = (-4; 0)$",
      "$(x_0; y_0) = (2; 1)$"
    ],
    correctIndex: 1,
    explanation: "<strong>Đáp án B đúng.</strong><br>Thay lần lượt các cặp số vào vế trái $f(x, y) = 3x - 3y$:<br>• Với $(5; 1)$: $f(5, 1) = 3(5) - 3(1) = 15 - 3 = 12 \\ge 4$ (Thỏa mãn).<br>• Với $(-2; 2)$: $3(-2) - 3(2) = -12 \\ngeq 4$ (Loại).<br>• Với $(-4; 0)$: $3(-4) - 3(0) = -12 \\ngeq 4$ (Loại).<br>• Với $(2; 1)$: $3(2) - 3(1) = 3 \\ngeq 4$ (Loại)."
  },
  {
    id: 9,
    level: "Vận dụng (Trích Câu 33 - Trang 12 | Toán 10 Từ Tâm)",
    prompt: "Một đội sản xuất cần $3$ giờ để làm xong một sản phẩm loại I và $2$ giờ để làm xong một sản phẩm loại II. Biết tổng thời gian tối đa cho việc sản xuất hai sản phẩm trên là $18$ giờ. Gọi $x, y$ lần lượt là số sản phẩm loại I và loại II mà đội làm được trong thời gian cho phép ($x, y \\in \\mathbb{N}$). Bất phương trình bậc nhất hai ẩn mô tả điều kiện thời gian của đội sản xuất là:",
    svgType: null,
    options: [
      "$2x + 3y \\le 18$",
      "$3x + 2y < 18$",
      "$3x + 2y \\le 18$",
      "$3x + 2y \\ge 18$"
    ],
    correctIndex: 2,
    explanation: "<strong>Đáp án C đúng.</strong><br>• Thời gian làm $x$ sản phẩm loại I là: $3x$ (giờ).<br>• Thời gian làm $y$ sản phẩm loại II là: $2y$ (giờ).<br>• Tổng thời gian sản xuất là $3x + 2y$ (giờ).<br>• Vì tổng thời gian cho phép tối đa là $18$ giờ nên ta có bất phương trình: $3x + 2y \\le 18$ (có dấu $\\le$ vì tính cả trường hợp dùng hết đúng 18 giờ)."
  },
  {
    id: 10,
    level: "Vận dụng (Trích Câu 36 - Trang 12 | Toán 10 Từ Tâm)",
    prompt: "Có bao nhiêu giá trị nguyên của tham số $m$ trong đoạn $[-10; 10]$ sao cho cặp số $(x; y) = (1; -1)$ là nghiệm của bất phương trình $2(m - 1)x + (m + 2)y \\ge 0$?",
    svgType: null,
    options: [
      "7",
      "10",
      "14",
      "15"
    ],
    correctIndex: 0,
    explanation: "<strong>Đáp án A đúng.</strong><br>Thay $x = 1$ và $y = -1$ vào bất phương trình đã cho:<br>$$2(m - 1)\\cdot 1 + (m + 2)(-1) \\ge 0 \\Leftrightarrow 2m - 2 - m - 2 \\ge 0 \\Leftrightarrow m - 4 \\ge 0 \\Leftrightarrow m \\ge 4$$<br>Kết hợp với điều kiện $m \\in [-10; 10]$ và $m \\in \\mathbb{Z}$, ta được:<br>$$m \\in \\{4; 5; 6; 7; 8; 9; 10\\}$$<br>Vậy có đúng <strong>7</strong> giá trị nguyên của tham số $m$ thỏa mãn yêu cầu bài toán."
  }
];

// ==========================================
// 2. BỘ PHÁT SINH HÌNH VẼ SVG ĐỒ THỊ CHUẨN TOÁN TỪ TÂM
// ==========================================
const SVG_DIAGRAMS = {
  // Câu 6 (Trích Câu 21 Từ Tâm): 3x + 2y = 6, qua (2,0) và (0,3), miền tô màu không chứa O(0,0), nét đứt
  tutam_q21_diagram: function() {
    return `
      <svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:12px; border:1px solid #e2e8f0;">
        <defs>
          <marker id="tutam_arr1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
          </marker>
        </defs>

        <!-- Shaded region: 3x + 2y > 6 (Upper right half-plane, not containing O(0,0)) -->
        <polygon points="20,20 345,20 345,300 240,300" fill="#bae6fd" opacity="0.65" />

        <!-- Axes: Ox at y=240, Oy at x=110 -->
        <!-- Scale: (2,0) -> (110 + 90, 240) = (200, 240). (0,3) -> (110, 240 - 135) = (110, 105) -->
        <line x1="20" y1="240" x2="345" y2="240" stroke="#0284c7" stroke-width="2.2" marker-end="url(#tutam_arr1)" />
        <line x1="110" y1="305" x2="110" y2="25" stroke="#0284c7" stroke-width="2.2" marker-end="url(#tutam_arr1)" />

        <!-- Axis Labels -->
        <text x="325" y="228" font-size="20" font-weight="bold" font-style="italic" fill="#0284c7" font-family="Times New Roman, serif">x</text>
        <text x="120" y="38" font-size="20" font-weight="bold" font-style="italic" fill="#0284c7" font-family="Times New Roman, serif">y</text>
        <text x="78" y="268" font-size="22" font-weight="bold" font-style="italic" fill="#0284c7" font-family="Times New Roman, serif">O</text>
        <circle cx="110" cy="240" r="3.5" fill="#0284c7" stroke="#000" stroke-width="1" />

        <!-- Intercept points: (2, 0) and (0, 3) -->
        <text x="195" y="270" font-size="20" font-weight="bold" fill="#0284c7" font-family="Times New Roman, serif">2</text>
        <circle cx="200" cy="240" r="3.5" fill="#0284c7" />
        <text x="80" y="112" font-size="20" font-weight="bold" fill="#0284c7" font-family="Times New Roman, serif">3</text>
        <circle cx="110" cy="105" r="3.5" fill="#0284c7" />

        <!-- Boundary line: 3x + 2y = 6 (Dashed line because > 6 does not include boundary) -->
        <line x1="40" y1="0" x2="260" y2="330" stroke="#2563eb" stroke-width="2.8" stroke-dasharray="6,4" />
        <text x="210" y="70" font-size="16" font-weight="bold" fill="#2563eb" font-family="Times New Roman, serif">d: 3x + 2y = 6</text>
      </svg>
    `;
  },

  // Câu 7 (Trích Câu 20 Từ Tâm): 3x - 2y = -6, qua (-2,0) và (0,3), miền tô màu chứa O(0,0), nét đứt
  tutam_q20_diagram: function() {
    return `
      <svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:12px; border:1px solid #e2e8f0;">
        <defs>
          <marker id="tutam_arr2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0284c7" />
          </marker>
        </defs>

        <!-- Shaded region: 3x - 2y > -6 (Lower right half-plane, contains O(0,0)) -->
        <polygon points="50,310 260,10 345,10 345,310" fill="#bae6fd" opacity="0.65" />

        <!-- Axes: Ox at y=230, Oy at x=200 -->
        <!-- Scale: (-2,0) -> (200 - 90, 230) = (110, 230). (0,3) -> (200, 230 - 135) = (200, 95) -->
        <line x1="20" y1="230" x2="345" y2="230" stroke="#0284c7" stroke-width="2.2" marker-end="url(#tutam_arr2)" />
        <line x1="200" y1="305" x2="200" y2="25" stroke="#0284c7" stroke-width="2.2" marker-end="url(#tutam_arr2)" />

        <!-- Axis Labels -->
        <text x="325" y="220" font-size="20" font-weight="bold" font-style="italic" fill="#0284c7" font-family="Times New Roman, serif">x</text>
        <text x="175" y="45" font-size="20" font-weight="bold" font-style="italic" fill="#0284c7" font-family="Times New Roman, serif">y</text>
        <text x="165" y="260" font-size="22" font-weight="bold" font-style="italic" fill="#0284c7" font-family="Times New Roman, serif">O</text>
        <circle cx="200" cy="230" r="3.5" fill="#0284c7" stroke="#000" stroke-width="1" />

        <!-- Intercept points: (-2, 0) and (0, 3) -->
        <text x="90" y="260" font-size="20" font-weight="bold" fill="#0284c7" font-family="Times New Roman, serif">-2</text>
        <circle cx="110" cy="230" r="3.5" fill="#0284c7" />
        <text x="170" y="102" font-size="20" font-weight="bold" fill="#0284c7" font-family="Times New Roman, serif">3</text>
        <circle cx="200" cy="95" r="3.5" fill="#0284c7" />

        <!-- Boundary line: 3x - 2y = -6 (Dashed line because > -6 does not include boundary) -->
        <line x1="40" y1="330" x2="260" y2="0" stroke="#2563eb" stroke-width="2.8" stroke-dasharray="6,4" />
        <text x="40" y="60" font-size="16" font-weight="bold" fill="#2563eb" font-family="Times New Roman, serif">d: 3x - 2y = -6</text>
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
  document.getElementById("printResultBtn").addEventListener("click", openPrintModal);

  // Print / Export PDF Actions
  document.getElementById("headerPrintBtn")?.addEventListener("click", openPrintModal);
  document.getElementById("closePrintModalBtn")?.addEventListener("click", closePrintModal);
  document.getElementById("printExamOnlyBtn")?.addEventListener("click", handlePrintExamOnly);
  document.getElementById("printFullSolutionBtn")?.addEventListener("click", handlePrintFullSolution);
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

// ==========================================
// 15. HỆ THỐNG IN ẤN VÀ XUẤT FILE PDF KHỔ A4
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

  // Bảng điền đáp án 10 câu
  let tableHeaderCols = "";
  let tableEmptyCols = "";
  for (let i = 1; i <= QUIZ_QUESTIONS.length; i++) {
    tableHeaderCols += `<th>Câu ${i}</th>`;
    tableEmptyCols += `<td style="height: 26px;">&nbsp;</td>`;
  }

  container.innerHTML = `
    <div class="paper-exam-header">
      <div class="paper-header-left">
        <h3>SỞ GD&ĐT • TRƯỜNG THPT: .................................</h3>
        <p>Tổ chuyên môn: Toán - Tin học</p>
      </div>
      <div class="paper-header-right">
        <h2>ĐỀ KIỂM TRA 15 PHÚT MÔN TOÁN 10</h2>
        <p><strong>Chủ đề:</strong> Bất phương trình bậc nhất hai ẩn</p>
        <p><em>(Thời gian làm bài: 15 phút, gồm 10 câu trắc nghiệm)</em></p>
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


