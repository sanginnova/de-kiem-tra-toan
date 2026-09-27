/**
 * HỆ THỐNG ÔN TẬP VÀ KIỂM TRA TRẮC NGHIỆM TOÁN 11 - TOÀN BỘ CHƯƠNG 1
 * Chương 1: Hàm Số và Phương Trình Lượng Giác (Trọn bộ Bài 1 đến Bài 5)
 * Nguồn tài liệu gốc: TOÁN 11 - CHƯƠNG 1: HÀM SỐ và PHƯƠNG TRÌNH LƯỢNG GIÁC (GDPT 2018)
 * Biên soạn & Giảng dạy: ThS. Nguyễn Văn Sang - Khoa Cơ Bản - Trường Cao Đẳng Nghề Số 1 - BQP & THPT GDPT 2018
 */

// ==========================================
// 1. NGÂN HÀNG CÂU HỎI THEO BÀI HỌC (LESSON BANKS)
// ==========================================
const LESSON_BANKS = {
  // 1.1 ĐỀ TỔNG ÔN CHƯƠNG 1 (TRỌN BỘ BÀI 1 ĐẾN BÀI 5)
  all: {
    id: "all",
    title: "Đề Tổng Ôn Chương 1: Hàm Số & Phương Trình Lượng Giác",
    badge: "TOÁN 11 • TỔNG ÔN CHƯƠNG 1: BÀI 1 ĐẾN BÀI 5",
    durationMins: 20,
    questions: [
      {
        id: 1,
        lesson: "Bài 1: Góc lượng giác",
        level: "Nhận biết",
        prompt: "Cho góc lượng giác có số đo bằng $108^\\circ$. Khi đổi sang đơn vị rađian, số đo của góc đó bằng:",
        svgType: null,
        options: [
          "$\\dfrac{2\\pi}{5}\\text{ rad}$",
          "$\\dfrac{3\\pi}{5}\\text{ rad}$",
          "$\\dfrac{3\\pi}{10}\\text{ rad}$",
          "$\\dfrac{4\\pi}{5}\\text{ rad}$"
        ],
        correctIndex: 1,
        explanation: "<strong>Đáp án B đúng.</strong><br>Công thức đổi độ sang rađian: $\\alpha = 108^\\circ \\cdot \\dfrac{\\pi}{180^\\circ} = \\dfrac{3\\pi}{5}\\text{ rad}$."
      },
      {
        id: 2,
        lesson: "Bài 1: Góc lượng giác",
        level: "Nhận biết",
        prompt: "Một đường tròn có bán kính $R = 15\\text{ cm}$. Độ dài của cung tròn trên đường tròn đó có số đo $\\alpha = \\dfrac{2\\pi}{3}\\text{ rad}$ là:",
        svgType: null,
        options: [
          "$l = 10\\pi\\text{ cm}$",
          "$l = 5\\pi\\text{ cm}$",
          "$l = 20\\pi\\text{ cm}$",
          "$l = 15\\pi\\text{ cm}$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>Độ dài cung tròn: $l = R \\cdot \\alpha = 15 \\cdot \\dfrac{2\\pi}{3} = 10\\pi\\text{ cm}$."
      },
      {
        id: 3,
        lesson: "Bài 1: Góc lượng giác",
        level: "Thông hiểu",
        prompt: "Trên đường tròn lượng giác gốc $A(1; 0)$ như hình vẽ bên dưới, điểm $M$ biểu diễn cho góc lượng giác có số đo bằng $\\dfrac{5\\pi}{6}$. Tọa độ của điểm $M$ là:",
        svgType: "unit_circle_5pi_6",
        options: [
          "$M\\left(-\\dfrac{\\sqrt{3}}{2}; \\dfrac{1}{2}\\right)$",
          "$M\\left(-\\dfrac{1}{2}; \\dfrac{\\sqrt{3}}{2}\\right)$",
          "$M\\left(\\dfrac{\\sqrt{3}}{2}; -\\dfrac{1}{2}\\right)$",
          "$M\\left(-\\dfrac{\\sqrt{3}}{2}; -\\dfrac{1}{2}\\right)$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>Điểm ngọn $M(\\cos\\alpha; \\sin\\alpha)$. Với $\\alpha = \\dfrac{5\\pi}{6}$ thì $x_M = \\cos\\dfrac{5\pi}{6} = -\\dfrac{\\sqrt{3}}{2}$ và $y_M = \\sin\\dfrac{5\\pi}{6} = \\dfrac{1}{2}$."
      },
      {
        id: 4,
        lesson: "Bài 2: Giá trị lượng giác",
        level: "Nhận biết",
        prompt: "Cho góc lượng giác $\\alpha$ thỏa mãn $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Khẳng định nào sau đây là <strong>đúng</strong>?",
        svgType: null,
        options: [
          "$\\sin\\alpha > 0$ và $\\cos\\alpha > 0$",
          "$\\sin\\alpha < 0$ và $\\cos\\alpha < 0$",
          "$\\sin\\alpha > 0$ và $\\cos\\alpha < 0$",
          "$\\sin\\alpha < 0$ và $\\cos\\alpha > 0$"
        ],
        correctIndex: 2,
        explanation: "<strong>Đáp án C đúng.</strong><br>Góc phần tư thứ II có tung độ dương ($\sin\\alpha > 0$) và hoành độ âm ($\cos\\alpha < 0$)."
      },
      {
        id: 5,
        lesson: "Bài 2: Giá trị lượng giác",
        level: "Thông hiểu",
        prompt: "Cho góc lượng giác $\\alpha$ thỏa mãn $\\sin\\alpha = \\dfrac{3}{5}$ và $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Giá trị của biểu thức $P = 2\\cos\\alpha + \\tan\\alpha$ bằng:",
        svgType: null,
        options: [
          "$P = -\\dfrac{47}{20}$",
          "$P = \\dfrac{47}{20}$",
          "$P = -\\dfrac{17}{20}$",
          "$P = -\\dfrac{23}{20}$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>Vì $\\alpha \\in (\\pi/2; \\pi)$ nên $\\cos\\alpha = -\\sqrt{1 - 9/25} = -4/5$. $\\tan\\alpha = -3/4$. Suy ra $P = 2(-4/5) + (-3/4) = -47/20$."
      },
      {
        id: 6,
        lesson: "Bài 3: Công thức lượng giác",
        level: "Nhận biết",
        prompt: "Trong các công thức nhân đôi sau đây, công thức nào <strong>SAI</strong> với mọi góc lượng giác $a$?",
        svgType: null,
        options: [
          "$\\sin 2a = 2\\sin a \\cos a$",
          "$\\cos 2a = \\cos^2 a - \\sin^2 a$",
          "$\\cos 2a = 1 - 2\\sin^2 a$",
          "$\\cos 2a = 1 - 2\\cos^2 a$"
        ],
        correctIndex: 3,
        explanation: "<strong>Đáp án D đúng (vì công thức D SAI).</strong><br>Công thức đúng của cosin nhân đôi là $\\cos 2a = 2\\cos^2 a - 1$."
      },
      {
        id: 7,
        lesson: "Bài 3: Công thức lượng giác",
        level: "Thông hiểu",
        prompt: "Rút gọn biểu thức $M = \\cos 2x \\cos x + \\sin 2x \\sin x$, ta được kết quả là:",
        svgType: null,
        options: [
          "$M = \\cos 3x$",
          "$M = \\cos x$",
          "$M = \\sin 3x$",
          "$M = \\sin x$"
        ],
        correctIndex: 1,
        explanation: "<strong>Đáp án B đúng.</strong><br>Công thức cộng: $\\cos(2x - x) = \\cos x$."
      },
      {
        id: 8,
        lesson: "Bài 3: Công thức lượng giác",
        level: "Vận dụng",
        prompt: "Giá trị của biểu thức $T = \\dfrac{\\tan 20^\\circ + \\tan 25^\\circ}{1 - \\tan 20^\\circ \\tan 25^\\circ}$ bằng:",
        svgType: null,
        options: [
          "$T = 0$",
          "$T = \\dfrac{\\sqrt{3}}{3}$",
          "$T = 1$",
          "$T = \\sqrt{3}$"
        ],
        correctIndex: 2,
        explanation: "<strong>Đáp án C đúng.</strong><br>$T = \\tan(20^\\circ + 25^\\circ) = \\tan 45^\\circ = 1$."
      },
      {
        id: 9,
        lesson: "Bài 4: Hàm số lượng giác",
        level: "Nhận biết",
        prompt: "Trong các hàm số sau đây, hàm số nào là <strong>hàm số chẵn</strong> trên tập xác định của nó?",
        svgType: null,
        options: [
          "$y = \\sin x$",
          "$y = \\tan x$",
          "$y = \\cos x$",
          "$y = \\cot x$"
        ],
        correctIndex: 2,
        explanation: "<strong>Đáp án C đúng.</strong><br>Hàm số $y = \\cos x$ có tập xác định $D = \\mathbb{R}$ và $\\cos(-x) = \\cos x$ với mọi $x$, do đó $y = \\cos x$ là hàm số chẵn. Các hàm số $\\sin x, \\tan x, \\cot x$ đều là hàm số lẻ."
      },
      {
        id: 10,
        lesson: "Bài 4: Hàm số lượng giác",
        level: "Thông hiểu",
        prompt: "Giá trị lớn nhất $M$ và giá trị nhỏ nhất $m$ của hàm số $y = 3\\sin x - 2$ trên $\\mathbb{R}$ lần lượt là:",
        svgType: null,
        options: [
          "$M = 1; m = -5$",
          "$M = 5; m = -1$",
          "$M = 1; m = -1$",
          "$M = 3; m = -2$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>Với mọi $x \\in \\mathbb{R}$, ta có $-1 \\le \\sin x \\le 1$.<br>Nhân 3 và trừ 2: $3(-1) - 2 \\le 3\\sin x - 2 \\le 3(1) - 2 \\Leftrightarrow -5 \\le y \\le 1$.<br>Do đó $M = 1$ và $m = -5$."
      },
      {
        id: 11,
        lesson: "Bài 5: Phương trình lượng giác",
        level: "Nhận biết",
        prompt: "Phương trình lượng giác $\\cos x = 0$ có tất cả các nghiệm là:",
        svgType: null,
        options: [
          "$x = k\\pi\\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k2\\pi\\ (k \\in \\mathbb{Z})$",
          "$x = k2\\pi\\ (k \\in \\mathbb{Z})$"
        ],
        correctIndex: 1,
        explanation: "<strong>Đáp án B đúng.</strong><br>Phương trình đặc biệt $\\cos x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$."
      },
      {
        id: 12,
        lesson: "Bài 5: Phương trình lượng giác",
        level: "Thông hiểu",
        prompt: "Tập nghiệm của phương trình lượng giác $2\\sin x - 1 = 0$ là:",
        svgType: null,
        options: [
          "$\\left\\{ \\dfrac{\\pi}{6} + k2\\pi; \\dfrac{5\\pi}{6} + k2\\pi, k \\in \\mathbb{Z} \\right\\}$",
          "$\\left\\{ \\pm \\dfrac{\\pi}{3} + k2\\pi, k \\in \\mathbb{Z} \\right\\}$",
          "$\\left\\{ \\dfrac{\\pi}{3} + k2\\pi; \\dfrac{2\\pi}{3} + k2\\pi, k \\in \\mathbb{Z} \\right\\}$",
          "$\\left\\{ \\dfrac{\\pi}{6} + k\\pi, k \\in \\mathbb{Z} \\right\\}$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>$2\\sin x - 1 = 0 \\Leftrightarrow \\sin x = \\dfrac{1}{2} = \\sin\\dfrac{\\pi}{6} \\Leftrightarrow \\begin{cases} x = \\dfrac{\\pi}{6} + k2\\pi \\\\ x = \\pi - \\dfrac{\\pi}{6} + k2\\pi = \\dfrac{5\\pi}{6} + k2\\pi \\end{cases}\\ (k \\in \\mathbb{Z})$."
      }
    ]
  },

  // 1.2 BÀI 1: GÓC LƯỢNG GIÁC
  b1: {
    id: "b1",
    title: "Tự Luyện: Bài 1 - Góc Lượng Giác & Đường Tròn Lượng Giác",
    badge: "TOÁN 11 • CHƯƠNG 1: BÀI 1 - GÓC LƯỢNG GIÁC",
    durationMins: 15,
    questions: [
      {
        id: 1,
        lesson: "Bài 1: Góc lượng giác",
        level: "Nhận biết",
        prompt: "Cho góc lượng giác có số đo bằng $108^\\circ$. Khi đổi sang đơn vị rađian, số đo của góc đó bằng:",
        svgType: null,
        options: [
          "$\\dfrac{2\\pi}{5}\\text{ rad}$",
          "$\\dfrac{3\\pi}{5}\\text{ rad}$",
          "$\\dfrac{3\\pi}{10}\\text{ rad}$",
          "$\\dfrac{4\\pi}{5}\\text{ rad}$"
        ],
        correctIndex: 1,
        explanation: "<strong>Đáp án B đúng.</strong><br>Ta có: $\\alpha = 108^\\circ \\cdot \\dfrac{\\pi}{180^\\circ} = \\dfrac{3\\pi}{5}\\text{ rad}$."
      },
      {
        id: 2,
        lesson: "Bài 1: Góc lượng giác",
        level: "Nhận biết",
        prompt: "Góc có số đo $\\dfrac{2\\pi}{5}\\text{ rad}$ khi đổi sang đơn vị độ bằng:",
        svgType: null,
        options: [
          "$72^\\circ$",
          "$135^\\circ$",
          "$144^\\circ$",
          "$36^\\circ$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>Ta có: $\\alpha = \\dfrac{2\\pi}{5} \\cdot \\dfrac{180^\\circ}{\\pi} = 72^\\circ$."
      },
      {
        id: 3,
        lesson: "Bài 1: Góc lượng giác",
        level: "Nhận biết",
        prompt: "Một đường tròn có bán kính $R = 15\\text{ cm}$. Độ dài của cung tròn trên đường tròn đó có số đo $\\alpha = \\dfrac{2\\pi}{3}\\text{ rad}$ là:",
        svgType: null,
        options: [
          "$l = 10\\pi\\text{ cm}$",
          "$l = 5\\pi\\text{ cm}$",
          "$l = 20\\pi\\text{ cm}$",
          "$l = 15\\pi\\text{ cm}$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>Độ dài cung tròn: $l = R \\cdot \\alpha = 15 \\cdot \\dfrac{2\\pi}{3} = 10\\pi\\text{ cm}$."
      },
      {
        id: 4,
        lesson: "Bài 1: Góc lượng giác",
        level: "Thông hiểu",
        prompt: "Một bánh xe có 72 răng. Số đo góc (theo độ) mà bánh xe đã quay được khi di chuyển được đúng 10 răng là:",
        svgType: null,
        options: [
          "$30^\\circ$",
          "$50^\\circ$",
          "$60^\\circ$",
          "$72^\\circ$"
        ],
        correctIndex: 1,
        explanation: "<strong>Đáp án B đúng.</strong><br>Mỗi răng tương ứng: $\\dfrac{360^\\circ}{72} = 5^\\circ$. Với 10 răng: $10 \\times 5^\\circ = 50^\\circ$."
      },
      {
        id: 5,
        lesson: "Bài 1: Góc lượng giác",
        level: "Thông hiểu",
        prompt: "Trên đường tròn lượng giác gốc $A(1; 0)$ như hình vẽ, điểm $M$ biểu diễn cho góc lượng giác có số đo bằng $\\dfrac{5\\pi}{6}$. Tọa độ của điểm $M$ là:",
        svgType: "unit_circle_5pi_6",
        options: [
          "$M\\left(-\\dfrac{\\sqrt{3}}{2}; \\dfrac{1}{2}\\right)$",
          "$M\\left(-\\dfrac{1}{2}; \\dfrac{\\sqrt{3}}{2}\\right)$",
          "$M\\left(\\dfrac{\\sqrt{3}}{2}; -\\dfrac{1}{2}\\right)$",
          "$M\\left(-\\dfrac{\\sqrt{3}}{2}; -\\dfrac{1}{2}\\right)$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>Điểm ngọn $M(\\cos\\alpha; \\sin\\alpha)$. Với $\\alpha = 5\\pi/6$, tọa độ là $M(-\\sqrt{3}/2; 1/2)$."
      },
      {
        id: 6,
        lesson: "Bài 1: Góc lượng giác",
        level: "Vận dụng",
        prompt: "Cung tròn có số đo là $\\dfrac{5\\pi}{4}\\text{ rad}$. Số đo theo độ của cung tròn đó là:",
        svgType: null,
        options: [
          "$172^\\circ$",
          "$225^\\circ$",
          "$135^\\circ$",
          "$240^\\circ$"
        ],
        correctIndex: 1,
        explanation: "<strong>Đáp án B đúng.</strong><br>Đổi sang độ: $\\alpha = \\dfrac{5\\pi}{4} \\cdot \\dfrac{180^\\circ}{\\pi} = 225^\\circ$."
      }
    ]
  },

  // 1.3 BÀI 2: GIÁ TRỊ LƯỢNG GIÁC
  b2: {
    id: "b2",
    title: "Tự Luyện: Bài 2 - Giá Trị Lượng Giác Của Một Góc Lượng Giác",
    badge: "TOÁN 11 • CHƯƠNG 1: BÀI 2 - GIÁ TRỊ LƯỢNG GIÁC",
    durationMins: 15,
    questions: [
      {
        id: 1,
        lesson: "Bài 2: Giá trị lượng giác",
        level: "Nhận biết",
        prompt: "Cho góc lượng giác $\\alpha$ thỏa mãn $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Khẳng định nào sau đây là <strong>đúng</strong>?",
        svgType: null,
        options: [
          "$\\sin\\alpha > 0$ và $\\cos\\alpha > 0$",
          "$\\sin\\alpha < 0$ và $\\cos\\alpha < 0$",
          "$\\sin\\alpha > 0$ và $\\cos\\alpha < 0$",
          "$\\sin\\alpha < 0$ và $\\cos\\alpha > 0$"
        ],
        correctIndex: 2,
        explanation: "<strong>Đáp án C đúng.</strong><br>Góc phần tư thứ II: $\\sin\\alpha > 0$ và $\\cos\\alpha < 0$."
      },
      {
        id: 2,
        lesson: "Bài 2: Giá trị lượng giác",
        level: "Nhận biết",
        prompt: "Trong các công thức cơ bản sau đây, công thức nào đúng với mọi góc $\\alpha$?",
        svgType: null,
        options: [
          "$\\sin^2\\alpha + \\cos^2\\alpha = 1$",
          "$\\sin^2\\alpha - \\cos^2\\alpha = 1$",
          "$\\tan\\alpha = \\dfrac{\\cos\\alpha}{\\sin\\alpha}$",
          "$\\tan\\alpha \\cdot \\cot\\alpha = -1$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>Hệ thức cơ bản: $\\sin^2\\alpha + \\cos^2\\alpha = 1$."
      },
      {
        id: 3,
        lesson: "Bài 2: Giá trị lượng giác",
        level: "Thông hiểu",
        prompt: "Rút gọn biểu thức $A = \\sin(\\pi - x) + \\cos(\\pi - x)$, ta được kết quả là:",
        svgType: null,
        options: [
          "$A = \\sin x + \\cos x$",
          "$A = \\sin x - \\cos x$",
          "$A = -\\sin x - \\cos x$",
          "$A = -\\sin x + \\cos x$"
        ],
        correctIndex: 1,
        explanation: "<strong>Đáp án B đúng.</strong><br>Theo công thức bù: $\\sin(\\pi - x) = \\sin x, \\cos(\\pi - x) = -\\cos x \\Rightarrow A = \\sin x - \\cos x$."
      },
      {
        id: 4,
        lesson: "Bài 2: Giá trị lượng giác",
        level: "Thông hiểu",
        prompt: "Trong các khẳng định sau về góc phụ nhau, khẳng định nào <strong>SAI</strong>?",
        svgType: null,
        options: [
          "$\\sin\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cos\\alpha$",
          "$\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = -\\sin\\alpha$",
          "$\\tan\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\cot\\alpha$",
          "$\\cot\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\tan\\alpha$"
        ],
        correctIndex: 1,
        explanation: "<strong>Đáp án B đúng (vì mệnh đề B là SAI).</strong><br>Công thức đúng: $\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha$ (dương)."
      },
      {
        id: 5,
        lesson: "Bài 2: Giá trị lượng giác",
        level: "Thông hiểu",
        prompt: "Cho góc $\\alpha$ thỏa mãn $\\sin\\alpha = \\dfrac{3}{5}$ và $\\dfrac{\\pi}{2} < \\alpha < \\pi$. Giá trị của biểu thức $P = 2\\cos\\alpha + \\tan\\alpha$ bằng:",
        svgType: null,
        options: [
          "$P = -\\dfrac{47}{20}$",
          "$P = \\dfrac{47}{20}$",
          "$P = -\\dfrac{17}{20}$",
          "$P = -\\dfrac{23}{20}$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>$\\cos\\alpha = -4/5, \\tan\\alpha = -3/4 \\Rightarrow P = 2(-4/5) + (-3/4) = -47/20$."
      },
      {
        id: 6,
        lesson: "Bài 2: Giá trị lượng giác",
        level: "Vận dụng",
        prompt: "Cho $\\tan\\alpha = 2$. Giá trị của biểu thức $E = \\dfrac{2\\sin\\alpha + \\cos\\alpha}{\\sin\\alpha - 3\\cos\\alpha}$ bằng:",
        svgType: null,
        options: [
          "$E = 5$",
          "$E = -5$",
          "$E = 3$",
          "$E = -3$"
        ],
        correctIndex: 1,
        explanation: "<strong>Đáp án B đúng.</strong><br>Chia cả tử và mẫu cho $\\cos\\alpha$: $E = \\dfrac{2\\tan\\alpha + 1}{\\tan\\alpha - 3} = \\dfrac{2(2) + 1}{2 - 3} = -5$."
      }
    ]
  },

  // 1.4 BÀI 3: CÔNG THỨC LƯỢNG GIÁC
  b3: {
    id: "b3",
    title: "Tự Luyện: Bài 3 - Công Thức Lượng Giác",
    badge: "TOÁN 11 • CHƯƠNG 1: BÀI 3 - CÔNG THỨC LƯỢNG GIÁC",
    durationMins: 15,
    questions: [
      {
        id: 1,
        lesson: "Bài 3: Công thức lượng giác",
        level: "Nhận biết",
        prompt: "Trong các công thức nhân đôi sau đây, công thức nào <strong>SAI</strong> với mọi góc lượng giác $a$?",
        svgType: null,
        options: [
          "$\\sin 2a = 2\\sin a \\cos a$",
          "$\\cos 2a = \\cos^2 a - \\sin^2 a$",
          "$\\cos 2a = 1 - 2\\sin^2 a$",
          "$\\cos 2a = 1 - 2\\cos^2 a$"
        ],
        correctIndex: 3,
        explanation: "<strong>Đáp án D đúng (vì khẳng định D là công thức SAI).</strong><br>Công thức đúng: $\\cos 2a = 2\\cos^2 a - 1$."
      },
      {
        id: 2,
        lesson: "Bài 3: Công thức lượng giác",
        level: "Nhận biết",
        prompt: "Khẳng định nào sau đây là <strong>đúng</strong> về công thức cộng của hàm cosin?",
        svgType: null,
        options: [
          "$\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$",
          "$\\cos(a + b) = \\cos a \\cos b + \\sin a \\sin b$",
          "$\\cos(a - b) = \\cos a \\cos b - \\sin a \\sin b$",
          "$\\cos(a + b) = \\sin a \\cos b - \\cos a \\sin b$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>Công thức cộng: $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$."
      },
      {
        id: 3,
        lesson: "Bài 3: Công thức lượng giác",
        level: "Thông hiểu",
        prompt: "Rút gọn biểu thức $M = \\cos 2x \\cos x + \\sin 2x \\sin x$, ta được kết quả là:",
        svgType: null,
        options: [
          "$M = \\cos 3x$",
          "$M = \\cos x$",
          "$M = \\sin 3x$",
          "$M = \\sin x$"
        ],
        correctIndex: 1,
        explanation: "<strong>Đáp án B đúng.</strong><br>Ta có: $M = \\cos(2x - x) = \\cos x$."
      },
      {
        id: 4,
        lesson: "Bài 3: Công thức lượng giác",
        level: "Thông hiểu",
        prompt: "Rút gọn biểu thức $P = 4\\sin x \\cos x \\cos 2x$, ta được kết quả là:",
        svgType: null,
        options: [
          "$P = \\sin 4x$",
          "$P = 2\\sin 4x$",
          "$P = \\cos 4x$",
          "$P = \\sin 2x$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>$P = 2(2\\sin x \\cos x)\\cos 2x = 2\\sin 2x \\cos 2x = \\sin 4x$."
      },
      {
        id: 5,
        lesson: "Bài 3: Công thức lượng giác",
        level: "Vận dụng",
        prompt: "Giá trị của biểu thức $T = \\dfrac{\\tan 20^\\circ + \\tan 25^\\circ}{1 - \\tan 20^\\circ \\tan 25^\\circ}$ bằng:",
        svgType: null,
        options: [
          "$T = 0$",
          "$T = \\dfrac{\\sqrt{3}}{3}$",
          "$T = 1$",
          "$T = \\sqrt{3}$"
        ],
        correctIndex: 2,
        explanation: "<strong>Đáp án C đúng.</strong><br>$T = \\tan(20^\\circ + 25^\\circ) = \\tan 45^\\circ = 1$."
      },
      {
        id: 6,
        lesson: "Bài 3: Công thức lượng giác",
        level: "Vận dụng cao",
        prompt: "Cho góc lượng giác $x$ thỏa mãn $\\sin x + \\cos x = \\dfrac{1}{2}$. Giá trị của biểu thức $Q = \\sin 2x$ bằng:",
        svgType: null,
        options: [
          "$Q = -\\dfrac{3}{4}$",
          "$Q = \\dfrac{3}{4}$",
          "$Q = -\\dfrac{1}{4}$",
          "$Q = \\dfrac{1}{4}$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>$(\\sin x + \\cos x)^2 = 1/4 \\Leftrightarrow 1 + \\sin 2x = 1/4 \\Leftrightarrow \\sin 2x = -3/4$."
      }
    ]
  },

  // 1.5 BÀI 4: HÀM SỐ LƯỢNG GIÁC
  b4: {
    id: "b4",
    title: "Tự Luyện: Bài 4 - Hàm Số Lượng Giác",
    badge: "TOÁN 11 • CHƯƠNG 1: BÀI 4 - HÀM SỐ LƯỢNG GIÁC",
    durationMins: 15,
    questions: [
      {
        id: 1,
        lesson: "Bài 4: Hàm số lượng giác",
        level: "Nhận biết",
        prompt: "Tập xác định của hàm số $y = \\tan x$ là:",
        svgType: null,
        options: [
          "$D = \\mathbb{R} \\setminus \\left\\{ \\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z} \\right\\}$",
          "$D = \\mathbb{R} \\setminus \\{ k\\pi, k \\in \\mathbb{Z} \\}$",
          "$D = \\mathbb{R}$",
          "$D = \\mathbb{R} \\setminus \\left\\{ \\dfrac{\\pi}{2} + k2\\pi, k \\in \\mathbb{Z} \\right\\}$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>Hàm số $y = \\tan x = \\dfrac{\\sin x}{\\cos x}$ xác định khi $\\cos x \\neq 0 \\Leftrightarrow x \\neq \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$."
      },
      {
        id: 2,
        lesson: "Bài 4: Hàm số lượng giác",
        level: "Nhận biết",
        prompt: "Trong các hàm số lượng giác sau đây, hàm số nào có đồ thị <strong>nhận trục tung $Oy$ làm trục đối xứng</strong>?",
        svgType: null,
        options: [
          "$y = \\sin x$",
          "$y = \\tan x$",
          "$y = \\cos x$",
          "$y = \\cot x$"
        ],
        correctIndex: 2,
        explanation: "<strong>Đáp án C đúng.</strong><br>Đồ thị nhận trục tung làm trục đối xứng khi và chỉ khi hàm số đó là hàm số chẵn. Trong 4 hàm số cơ bản, chỉ có $y = \\cos x$ là hàm số chẵn."
      },
      {
        id: 3,
        lesson: "Bài 4: Hàm số lượng giác",
        level: "Thông hiểu",
        prompt: "Tập xác định của hàm số $y = \\dfrac{1}{\\sin x}$ là:",
        svgType: null,
        options: [
          "$D = \\mathbb{R} \\setminus \\{ k\\pi, k \\in \\mathbb{Z} \\}$",
          "$D = \\mathbb{R} \\setminus \\left\\{ \\dfrac{\\pi}{2} + k\\pi, k \\in \\mathbb{Z} \\right\\}$",
          "$D = \\mathbb{R} \\setminus \\{ 0 \\}$",
          "$D = \\mathbb{R}$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>Hàm số xác định khi mẫu số khác 0: $\\sin x \\neq 0 \\Leftrightarrow x \\neq k\\pi\\ (k \\in \\mathbb{Z})$."
      },
      {
        id: 4,
        lesson: "Bài 4: Hàm số lượng giác",
        level: "Thông hiểu",
        prompt: "Chu kỳ tuần hoàn $T$ của hàm số $y = \\sin 2x$ là:",
        svgType: null,
        options: [
          "$T = 2\\pi$",
          "$T = \\pi$",
          "$T = \\dfrac{\\pi}{2}$",
          "$T = 4\\pi$"
        ],
        correctIndex: 1,
        explanation: "<strong>Đáp án B đúng.</strong><br>Hàm số $y = \\sin(\\omega x + \\varphi)$ có chu kỳ tuần hoàn là $T = \\dfrac{2\\pi}{|\\omega|}$. Với $\\omega = 2$, ta có: $T = \\dfrac{2\\pi}{2} = \\pi$."
      },
      {
        id: 5,
        lesson: "Bài 4: Hàm số lượng giác",
        level: "Thông hiểu",
        prompt: "Giá trị lớn nhất $M$ và giá trị nhỏ nhất $m$ của hàm số $y = 3\\sin x - 2$ trên $\\mathbb{R}$ lần lượt là:",
        svgType: null,
        options: [
          "$M = 1; m = -5$",
          "$M = 5; m = -1$",
          "$M = 1; m = -1$",
          "$M = 3; m = -2$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>Vì $-1 \\le \\sin x \\le 1$ nên $-3 - 2 \\le 3\\sin x - 2 \\le 3 - 2 \\Leftrightarrow -5 \\le y \\le 1$.<br>Do đó $M = 1$ và $m = -5$."
      },
      {
        id: 6,
        lesson: "Bài 4: Hàm số lượng giác",
        level: "Vận dụng",
        prompt: "Hàm số $y = \\sin x$ đồng biến trên khoảng nào dưới đây?",
        svgType: null,
        options: [
          "$(0; \\pi)$",
          "$\\left( -\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2} \\right)$",
          "$(\\pi; 2\\pi)$",
          "$\\left( \\dfrac{\\pi}{2}; \\dfrac{3\\pi}{2} \\right)$"
        ],
        correctIndex: 1,
        explanation: "<strong>Đáp án B đúng.</strong><br>Theo tính chất hàm số $y = \\sin x$, trên khoảng $\\left(-\\dfrac{\\pi}{2}; \\dfrac{\\pi}{2}\\right)$, khi góc $x$ tăng từ $-\\pi/2$ đến $\\pi/2$ thì giá trị $\\sin x$ tăng liên tục từ $-1$ đến $1$, nên hàm số đồng biến."
      }
    ]
  },

  // 1.6 BÀI 5: PHƯƠNG TRÌNH LƯỢNG GIÁC
  b5: {
    id: "b5",
    title: "Tự Luyện: Bài 5 - Phương Trình Lượng Giác",
    badge: "TOÁN 11 • CHƯƠNG 1: BÀI 5 - PHƯƠNG TRÌNH LƯỢNG GIÁC",
    durationMins: 15,
    questions: [
      {
        id: 1,
        lesson: "Bài 5: Phương trình lượng giác",
        level: "Nhận biết",
        prompt: "Phương trình lượng giác $\\cos x = 0$ có tất cả các nghiệm là:",
        svgType: null,
        options: [
          "$x = k\\pi\\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{2} + k2\\pi\\ (k \\in \\mathbb{Z})$",
          "$x = k2\\pi\\ (k \\in \\mathbb{Z})$"
        ],
        correctIndex: 1,
        explanation: "<strong>Đáp án B đúng.</strong><br>Nghiệm phương trình cơ bản: $\\cos x = 0 \\Leftrightarrow x = \\dfrac{\\pi}{2} + k\\pi\\ (k \\in \\mathbb{Z})$."
      },
      {
        id: 2,
        lesson: "Bài 5: Phương trình lượng giác",
        level: "Nhận biết",
        prompt: "Tập nghiệm của phương trình lượng giác $2\\sin x - 1 = 0$ là:",
        svgType: null,
        options: [
          "$\\left\\{ \\dfrac{\\pi}{6} + k2\\pi; \\dfrac{5\\pi}{6} + k2\\pi, k \\in \\mathbb{Z} \\right\\}$",
          "$\\left\\{ \\pm \\dfrac{\\pi}{3} + k2\\pi, k \\in \\mathbb{Z} \\right\\}$",
          "$\\left\\{ \\dfrac{\\pi}{3} + k2\\pi; \\dfrac{2\\pi}{3} + k2\\pi, k \\in \\mathbb{Z} \\right\\}$",
          "$\\left\\{ \\dfrac{\\pi}{6} + k\\pi, k \\in \\mathbb{Z} \\right\\}$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>$\\sin x = \\dfrac{1}{2} = \\sin\\dfrac{\\pi}{6} \\Leftrightarrow x = \\dfrac{\\pi}{6} + k2\\pi$ hoặc $x = \\dfrac{5\\pi}{6} + k2\\pi$."
      },
      {
        id: 3,
        lesson: "Bài 5: Phương trình lượng giác",
        level: "Thông hiểu",
        prompt: "Nghiệm của phương trình lượng giác $\\cos x = \\dfrac{1}{2}$ là:",
        svgType: null,
        options: [
          "$x = \\pm \\dfrac{\\pi}{3} + k2\\pi\\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\dfrac{\\pi}{6} + k2\\pi\\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{3} + k\\pi\\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\dfrac{2\\pi}{3} + k2\\pi\\ (k \\in \\mathbb{Z})$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>$\\cos x = \\dfrac{1}{2} = \\cos\\dfrac{\\pi}{3} \\Leftrightarrow x = \\pm \\dfrac{\\pi}{3} + k2\\pi\\ (k \\in \\mathbb{Z})$."
      },
      {
        id: 4,
        lesson: "Bài 5: Phương trình lượng giác",
        level: "Thông hiểu",
        prompt: "Nghiệm của phương trình lượng giác $\\tan x = \\sqrt{3}$ là:",
        svgType: null,
        options: [
          "$x = \\dfrac{\\pi}{3} + k\\pi\\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{6} + k\\pi\\ (k \\in \\mathbb{Z})$",
          "$x = \\dfrac{\\pi}{3} + k2\\pi\\ (k \\in \\mathbb{Z})$",
          "$x = \\pm \\dfrac{\\pi}{3} + k\\pi\\ (k \\in \\mathbb{Z})$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>$\\tan x = \\sqrt{3} = \\tan\\dfrac{\\pi}{3} \\Leftrightarrow x = \\dfrac{\\pi}{3} + k\\pi\\ (k \\in \\mathbb{Z})$."
      },
      {
        id: 5,
        lesson: "Bài 5: Phương trình lượng giác",
        level: "Thông hiểu",
        prompt: "Số nghiệm của phương trình lượng giác $\\sin x = 0$ thuộc đoạn $[0; 2\\pi]$ là:",
        svgType: null,
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        correctIndex: 2,
        explanation: "<strong>Đáp án C đúng.</strong><br>$\\sin x = 0 \\Leftrightarrow x = k\\pi\\ (k \\in \\mathbb{Z})$.<br>Trên đoạn $[0; 2\\pi]$, ta có $0 \\le k\\pi \\le 2\\pi \\Leftrightarrow 0 \\le k \\le 2 \\Rightarrow k \\in \\{0; 1; 2\\}$.<br>Vậy có đúng 3 nghiệm là $x_1 = 0, x_2 = \\pi, x_3 = 2\\pi$."
      },
      {
        id: 6,
        lesson: "Bài 5: Phương trình lượng giác",
        level: "Vận dụng",
        prompt: "Tập nghiệm của phương trình lượng giác $2\\cos^2 x - 3\\cos x + 1 = 0$ là:",
        svgType: null,
        options: [
          "$\\left\\{ k2\\pi; \\pm \\dfrac{\\pi}{3} + k2\\pi, k \\in \\mathbb{Z} \\right\\}$",
          "$\\left\\{ k\\pi; \\pm \\dfrac{\\pi}{6} + k2\\pi, k \\in \\mathbb{Z} \\right\\}$",
          "$\\left\\{ k2\\pi; \\pm \\dfrac{\\pi}{6} + k2\\pi, k \\in \\mathbb{Z} \\right\\}$",
          "$\\left\\{ \\dfrac{\\pi}{2} + k\\pi; \\pm \\dfrac{\\pi}{3} + k2\\pi, k \\in \\mathbb{Z} \\right\\}$"
        ],
        correctIndex: 0,
        explanation: "<strong>Đáp án A đúng.</strong><br>Đặt $t = \\cos x\\ (-1 \\le t \\le 1)$, phương trình trở thành $2t^2 - 3t + 1 = 0 \\Leftrightarrow t = 1$ hoặc $t = 1/2$.<br>• Với $\\cos x = 1 \\Leftrightarrow x = k2\\pi$.<br>• Với $\\cos x = 1/2 \\Leftrightarrow x = \\pm \\dfrac{\\pi}{3} + k2\\pi$."
      }
    ]
  }
};

// ==========================================
// 2. HÌNH VẼ ĐỒ THỊ SVG VECTOR SẮC NÉT (BẢO MẬT, KHÔNG LỘ ĐÁP ÁN)
// ==========================================
const SVG_DIAGRAMS = {
  unit_circle_5pi_6: function() {
    return `
      <svg viewBox="0 0 420 360" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff; border-radius:12px; border:1px solid #cbd5e1; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); max-width: 100%; height: auto;">
        <defs>
          <marker id="arr_x" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
          </marker>
          <marker id="arr_arc" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 2 L 8 5 L 0 8 z" fill="#d97706" />
          </marker>
        </defs>

        <!-- Trục tọa độ Ox (Trục cos), Oy (Trục sin) -->
        <line x1="30" y1="180" x2="390" y2="180" stroke="#0f172a" stroke-width="2" marker-end="url(#arr_x)" />
        <line x1="210" y1="340" x2="210" y2="20" stroke="#0f172a" stroke-width="2" marker-end="url(#arr_x)" />

        <!-- Tên trục -->
        <text x="370" y="170" font-size="16" font-weight="bold" fill="#0f172a" font-family="Times New Roman, serif">x (cos)</text>
        <text x="218" y="32" font-size="16" font-weight="bold" fill="#0f172a" font-family="Times New Roman, serif">y (sin)</text>
        <text x="192" y="198" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a" font-family="Times New Roman, serif">O</text>

        <!-- Đường tròn lượng giác R = 120 -->
        <circle cx="210" cy="180" r="120" fill="none" stroke="#2563eb" stroke-width="2.2" />

        <!-- Các điểm mốc A(1;0), A'(-1;0), B(0;1), B'(0;-1) -->
        <circle cx="330" cy="180" r="4" fill="#0f172a" />
        <text x="334" y="200" font-size="15" font-weight="bold" fill="#0f172a">A(1)</text>

        <circle cx="90" cy="180" r="4" fill="#0f172a" />
        <text x="56" y="200" font-size="15" font-weight="bold" fill="#0f172a">A'(-1)</text>

        <circle cx="210" cy="60" r="4" fill="#0f172a" />
        <text x="220" y="65" font-size="15" font-weight="bold" fill="#0f172a">B(1)</text>

        <circle cx="210" cy="300" r="4" fill="#0f172a" />
        <text x="220" y="305" font-size="15" font-weight="bold" fill="#0f172a">B'(-1)</text>

        <!-- Điểm M biểu diễn góc 5pi/6 = 150 deg -->
        <line x1="210" y1="180" x2="106.1" y2="120" stroke="#dc2626" stroke-width="2.5" />
        <circle cx="106.1" cy="120" r="6" fill="#dc2626" />
        <text x="75" y="112" font-size="17" font-weight="bold" fill="#dc2626" font-family="Times New Roman, serif">M</text>

        <!-- Đường dóng hình chiếu vuông góc lên Ox và Oy (KHÔNG GHI SỐ TỌA ĐỘ) -->
        <line x1="106.1" y1="120" x2="106.1" y2="180" stroke="#64748b" stroke-width="1.6" stroke-dasharray="4,4" />
        <line x1="106.1" y1="120" x2="210" y2="120" stroke="#64748b" stroke-width="1.6" stroke-dasharray="4,4" />

        <circle cx="106.1" cy="180" r="3.5" fill="#64748b" />
        <circle cx="210" cy="120" r="3.5" fill="#64748b" />

        <!-- Cung góc alpha = 150 độ từ A đến M -->
        <path d="M 260 180 A 50 50 0 0 0 166.7 155" fill="none" stroke="#d97706" stroke-width="2.2" marker-end="url(#arr_arc)" />
        <text x="220" y="152" font-size="15" font-weight="bold" fill="#d97706">5π/6</text>
      </svg>
    `;
  }
};

// ==========================================
// 3. TRẠNG THÁI BÀI THI & TỰ LUYỆN
// ==========================================
const QuizState = {
  currentLessonKey: "all",
  currentQuestionIndex: 0,
  userAnswers: [],
  flaggedQuestions: new Set(),
  timeRemainingSeconds: 20 * 60,
  totalSeconds: 20 * 60,
  isSubmitted: false,
  timerInterval: null,
  studentName: "Học sinh Toán 11"
};

function getCurrentQuestions() {
  const bank = LESSON_BANKS[QuizState.currentLessonKey] || LESSON_BANKS.all;
  return bank.questions;
}

// ==========================================
// 4. KHỞI TẠO VÀ LẮNG NGHE SỰ KIỆN GIAO DIỆN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initIcons();
  loadSavedTheme();
  loadSavedFontSize();
  bindEvents();
  
  loadLesson(QuizState.currentLessonKey);
});

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function bindEvents() {
  // Chuyển Theme
  document.getElementById("themeToggleBtn")?.addEventListener("click", toggleTheme);

  // Cỡ chữ
  document.getElementById("fontDecreaseBtn")?.addEventListener("click", () => setFontSize("normal"));
  document.getElementById("fontResetBtn")?.addEventListener("click", () => setFontSize("normal"));
  document.getElementById("fontIncreaseBtn")?.addEventListener("click", () => setFontSize("large"));

  // Tên học sinh
  document.getElementById("studentNameInput")?.addEventListener("input", (e) => {
    QuizState.studentName = e.target.value.trim() || "Học sinh Toán 11";
  });

  // Điều hướng câu hỏi
  document.getElementById("prevQuestionBtn")?.addEventListener("click", () => {
    if (QuizState.currentQuestionIndex > 0) {
      goToQuestion(QuizState.currentQuestionIndex - 1);
    }
  });

  document.getElementById("nextQuestionBtn")?.addEventListener("click", () => {
    const questions = getCurrentQuestions();
    if (QuizState.currentQuestionIndex < questions.length - 1) {
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
  document.getElementById("retakeQuizBtn")?.addEventListener("click", resetCurrentQuiz);
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

  // Modal Menu Tự Luyện
  document.getElementById("openLessonHubBtn")?.addEventListener("click", openLessonHubModal);
  document.getElementById("closeLessonHubBtn")?.addEventListener("click", closeLessonHubModal);

  // Selector Tabs bài học
  const lessonPills = document.querySelectorAll(".lesson-pill-btn");
  lessonPills.forEach(pill => {
    pill.addEventListener("click", () => {
      const lessonKey = pill.getAttribute("data-lesson");
      if (lessonKey) {
        loadLesson(lessonKey);
      }
    });
  });

  // Phím tắt bàn phím
  document.addEventListener("keydown", handleKeyNavigation);
}

// ==========================================
// 5. CHỌN BÀI HỌC TỰ LUYỆN
// ==========================================
function loadLesson(lessonKey) {
  const bank = LESSON_BANKS[lessonKey] || LESSON_BANKS.all;
  QuizState.currentLessonKey = lessonKey;
  QuizState.currentQuestionIndex = 0;
  QuizState.userAnswers = new Array(bank.questions.length).fill(null);
  QuizState.flaggedQuestions.clear();
  QuizState.totalSeconds = bank.durationMins * 60;
  QuizState.timeRemainingSeconds = QuizState.totalSeconds;
  QuizState.isSubmitted = false;

  // Cập nhật tiêu đề & badge
  const titleEl = document.querySelector(".quiz-title");
  if (titleEl) titleEl.textContent = bank.title;

  const badgeSpan = document.querySelector(".brand-badge span");
  if (badgeSpan) badgeSpan.textContent = bank.badge;

  // Cập nhật số lượng câu hiển thị trên thanh info
  const totalCountEl = document.getElementById("totalQuestionCount");
  if (totalCountEl) totalCountEl.textContent = `${bank.questions.length} câu trắc nghiệm`;

  // Cập nhật trạng thái nút tab bài học
  const lessonPills = document.querySelectorAll(".lesson-pill-btn");
  lessonPills.forEach(p => {
    if (p.getAttribute("data-lesson") === lessonKey) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });

  // Hiển thị lại vùng làm bài nếu đang ở trang kết quả
  document.getElementById("quizBody").style.display = "grid";
  document.getElementById("resultsSection").style.display = "none";

  const submitBtn = document.getElementById("headerSubmitBtn");
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `<i data-lucide="send" class="btn-icon"></i><span>Nộp bài</span>`;
  }

  renderNavigationGrid();
  renderQuestion(0);
  startTimer();
  initIcons();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openLessonHubModal() {
  const modal = document.getElementById("lessonHubModal");
  if (modal) modal.style.display = "flex";
  initIcons();
}

function closeLessonHubModal() {
  const modal = document.getElementById("lessonHubModal");
  if (modal) modal.style.display = "none";
}

// ==========================================
// 6. HIỂN THỊ CÂU HỎI
// ==========================================
function renderQuestion(index) {
  const questions = getCurrentQuestions();
  const q = questions[index];
  if (!q) return;

  QuizState.currentQuestionIndex = index;

  document.getElementById("questionLevelText").textContent = `${q.lesson} • Mức độ: ${q.level}`;
  document.getElementById("questionIndexIndicator").textContent = `Câu ${index + 1} / ${questions.length}`;

  document.getElementById("prevQuestionBtn").disabled = (index === 0);
  document.getElementById("nextQuestionBtn").disabled = (index === questions.length - 1);

  const flagBtn = document.getElementById("flagBtn");
  if (QuizState.flaggedQuestions.has(index)) {
    flagBtn.classList.add("active");
    document.getElementById("flagText").textContent = "Bỏ đặt cờ";
  } else {
    flagBtn.classList.remove("active");
    document.getElementById("flagText").textContent = "Đặt cờ";
  }

  const promptEl = document.getElementById("questionPrompt");
  promptEl.innerHTML = `Câu ${index + 1}: ${q.prompt}`;

  const diagramWrapper = document.getElementById("diagramWrapper");
  const svgContainer = document.getElementById("svgContainer");
  if (q.svgType && SVG_DIAGRAMS[q.svgType]) {
    diagramWrapper.style.display = "flex";
    svgContainer.innerHTML = SVG_DIAGRAMS[q.svgType]();
  } else {
    diagramWrapper.style.display = "none";
    svgContainer.innerHTML = "";
  }

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

    optCard.addEventListener("click", () => selectOption(index, optIdx));
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
  const questions = getCurrentQuestions();
  if (index < 0 || index >= questions.length) return;
  renderQuestion(index);
}

// ==========================================
// 7. BẢNG ĐIỀU HƯỚNG CÂU HỎI
// ==========================================
function renderNavigationGrid() {
  const grid = document.getElementById("navGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const questions = getCurrentQuestions();
  questions.forEach((_, idx) => {
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
  const questions = getCurrentQuestions();
  questions.forEach((_, idx) => {
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
  const questions = getCurrentQuestions();
  const answeredCount = QuizState.userAnswers.filter(a => a !== null).length;
  const answeredCountEl = document.getElementById("answeredCount");
  if (answeredCountEl) answeredCountEl.textContent = answeredCount;

  const totalTagEl = document.getElementById("totalQuestionTag");
  if (totalTagEl) totalTagEl.textContent = questions.length;

  const flaggedCountEl = document.getElementById("flaggedCount");
  if (flaggedCountEl) flaggedCountEl.textContent = QuizState.flaggedQuestions.size;
}

// ==========================================
// 8. ĐỒNG HỒ ĐẾM NGƯỢC
// ==========================================
function startTimer() {
  clearInterval(QuizState.timerInterval);
  updateTimerDisplay();

  QuizState.timerInterval = setInterval(() => {
    if (QuizState.timeRemainingSeconds > 0) {
      QuizState.timeRemainingSeconds--;
      updateTimerDisplay();

      if (QuizState.timeRemainingSeconds === 180) {
        showNotification("Lưu ý: Thời gian làm bài chỉ còn 3 phút!");
      }
    } else {
      clearInterval(QuizState.timerInterval);
      showNotification("Hết giờ làm bài! Hệ thống tự động thu bài.", "warning");
      submitQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(QuizState.timeRemainingSeconds / 60);
  const secs = QuizState.timeRemainingSeconds % 60;
  const timeFormatted = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  const timerEl = document.getElementById("timer");
  if (timerEl) {
    timerEl.textContent = timeFormatted;
  }

  const ring = document.getElementById("timerRing");
  if (ring) {
    const progressPercent = (QuizState.timeRemainingSeconds / QuizState.totalSeconds) * 100;
    ring.setAttribute("stroke-dasharray", `${progressPercent.toFixed(1)}, 100`);

    if (QuizState.timeRemainingSeconds <= 120) {
      ring.style.stroke = "#ef4444";
    } else if (QuizState.timeRemainingSeconds <= 300) {
      ring.style.stroke = "#f59e0b";
    } else {
      ring.style.stroke = "#10b981";
    }
  }
}

// ==========================================
// 9. XÁC NHẬN VÀ NỘP BÀI THI
// ==========================================
function promptSubmitConfirmation() {
  if (QuizState.isSubmitted) return;

  const questions = getCurrentQuestions();
  const answeredCount = QuizState.userAnswers.filter(a => a !== null).length;
  const unansweredCount = questions.length - answeredCount;

  const modal = document.getElementById("confirmModal");
  const warnEl = document.getElementById("unansweredWarning");
  const countEl = document.getElementById("unansweredModalCount");

  if (unansweredCount > 0) {
    warnEl.style.display = "flex";
    countEl.textContent = unansweredCount;
  } else {
    warnEl.style.display = "none";
  }

  modal.style.display = "flex";
  initIcons();
}

function closeSubmitModal() {
  document.getElementById("confirmModal").style.display = "none";
}

function submitQuiz() {
  QuizState.isSubmitted = true;
  clearInterval(QuizState.timerInterval);

  const questions = getCurrentQuestions();

  let correctCount = 0;
  QuizState.userAnswers.forEach((ans, idx) => {
    if (ans === questions[idx].correctIndex) {
      correctCount++;
    }
  });

  const finalScore = ((correctCount / questions.length) * 10).toFixed(1);
  const accuracy = Math.round((correctCount / questions.length) * 100);
  const spentSeconds = QuizState.totalSeconds - QuizState.timeRemainingSeconds;
  const spentMins = Math.floor(spentSeconds / 60);
  const spentSecs = spentSeconds % 60;
  const spentFormatted = `${String(spentMins).padStart(2, "0")}:${String(spentSecs).padStart(2, "0")}`;

  let rank = "Giỏi";
  let feedback = "Nắm vững toàn bộ kiến thức Chương 1!";
  if (finalScore >= 9.0) {
    rank = "Xuất sắc";
    feedback = "Hoàn hảo! Làm chủ từ góc lượng giác đến hàm số & phương trình lượng giác.";
  } else if (finalScore >= 8.0) {
    rank = "Giỏi";
    feedback = "Rất tốt! Khả năng biến đổi công thức và giải phương trình chuẩn xác.";
  } else if (finalScore >= 6.5) {
    rank = "Khá";
    feedback = "Khá tốt! Hãy rèn luyện thêm phương trình lượng giác và TXĐ hàm số.";
  } else if (finalScore >= 5.0) {
    rank = "Trung bình";
    feedback = "Cần rèn luyện thêm hệ thức cơ bản và công thức nghiệm phương trình.";
  } else {
    rank = "Cần cố gắng";
    feedback = "Hãy bấm 'Làm lại bài này' hoặc chọn từng bài học để tự luyện từng bước.";
  }

  document.getElementById("finalScore").textContent = finalScore;
  document.getElementById("correctCount").textContent = `${correctCount} / ${questions.length}`;
  document.getElementById("accuracyRate").textContent = `Tỉ lệ: ${accuracy}%`;
  document.getElementById("timeSpent").textContent = spentFormatted;
  document.getElementById("rankCategory").textContent = rank;
  document.getElementById("rankFeedback").textContent = feedback;
  document.getElementById("resultStudentName").textContent = QuizState.studentName;

  document.getElementById("quizBody").style.display = "none";
  document.getElementById("resultsSection").style.display = "block";

  const headerSubmitBtn = document.getElementById("headerSubmitBtn");
  if (headerSubmitBtn) {
    headerSubmitBtn.disabled = true;
    headerSubmitBtn.innerHTML = `<i data-lucide="check" class="btn-icon"></i><span>Đã nộp bài</span>`;
  }

  renderDetailedSolutions();
  initIcons();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// 10. HIỂN THỊ LỜI GIẢI CHI TIẾT
// ==========================================
function renderDetailedSolutions() {
  const listEl = document.getElementById("solutionList");
  if (!listEl) return;
  listEl.innerHTML = "";

  const questions = getCurrentQuestions();
  let wrongCount = 0;
  let correctCount = 0;

  questions.forEach((q, idx) => {
    const userChoice = QuizState.userAnswers[idx];
    const isCorrect = (userChoice === q.correctIndex);
    if (isCorrect) correctCount++; else wrongCount++;

    const card = document.createElement("div");
    card.className = `solution-card ${isCorrect ? "correct" : "wrong"}`;
    card.setAttribute("data-status", isCorrect ? "correct" : "wrong");

    const letters = ["A", "B", "C", "D"];
    const userChoiceText = userChoice !== null ? letters[userChoice] : "Chưa trả lời";
    const correctChoiceText = letters[q.correctIndex];

    card.innerHTML = `
      <div class="solution-card-header">
        <div class="sol-title">
          <span class="sol-index">Câu ${idx + 1}</span>
          <span class="sol-lesson">${q.lesson}</span>
          <span class="sol-level">${q.level}</span>
        </div>
        <div class="sol-status-badge ${isCorrect ? "success" : "danger"}">
          <i data-lucide="${isCorrect ? "check-circle" : "x-circle"}"></i>
          <span>${isCorrect ? "Chính xác" : "Chưa đúng"}</span>
        </div>
      </div>

      <div class="sol-prompt">
        <p><strong>Đề bài:</strong> ${q.prompt}</p>
        ${q.svgType && SVG_DIAGRAMS[q.svgType] ? `
          <div class="sol-diagram-wrap">
            ${SVG_DIAGRAMS[q.svgType]()}
          </div>
        ` : ""}
      </div>

      <div class="sol-options-grid">
        ${q.options.map((opt, oIdx) => {
          let optClass = "sol-opt";
          if (oIdx === q.correctIndex) optClass += " is-correct-answer";
          if (oIdx === userChoice && !isCorrect) optClass += " is-wrong-chosen";
          return `
            <div class="${optClass}">
              <span class="opt-label">${letters[oIdx]}.</span>
              <span class="opt-math">${opt}</span>
              ${oIdx === q.correctIndex ? '<i data-lucide="check" class="opt-check"></i>' : ""}
              ${oIdx === userChoice && !isCorrect ? '<i data-lucide="x" class="opt-x"></i>' : ""}
            </div>
          `;
        }).join("")}
      </div>

      <div class="sol-user-summary">
        <span>Lựa chọn của bạn: <strong>${userChoiceText}</strong></span>
        <span>Đáp án đúng: <strong class="text-success">${correctChoiceText}</strong></span>
      </div>

      <div class="sol-explanation-box">
        <div class="exp-title">
          <i data-lucide="lightbulb" class="exp-icon"></i>
          <span>Hướng dẫn giải chi tiết:</span>
        </div>
        <div class="exp-content">${q.explanation}</div>
      </div>
    `;

    listEl.appendChild(card);
  });

  document.getElementById("filterWrongCount").textContent = wrongCount;
  document.getElementById("filterCorrectCount").textContent = correctCount;

  renderMathInElementSafely(listEl);
  initIcons();
}

function applySolutionFilter(filter) {
  const cards = document.querySelectorAll(".solution-card");
  cards.forEach(card => {
    const status = card.getAttribute("data-status");
    if (filter === "all") {
      card.style.display = "block";
    } else if (filter === "wrong" && status === "wrong") {
      card.style.display = "block";
    } else if (filter === "correct" && status === "correct") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function resetCurrentQuiz() {
  loadLesson(QuizState.currentLessonKey);
}

// ==========================================
// 11. PHÍM TẮT BÀN PHÍM
// ==========================================
function handleKeyNavigation(e) {
  if (QuizState.isSubmitted) return;
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

  const questions = getCurrentQuestions();
  const key = e.key.toUpperCase();
  if (["A", "B", "C", "D"].includes(key)) {
    const map = { A: 0, B: 1, C: 2, D: 3 };
    selectOption(QuizState.currentQuestionIndex, map[key]);
  } else if (e.key === "ArrowLeft") {
    if (QuizState.currentQuestionIndex > 0) goToQuestion(QuizState.currentQuestionIndex - 1);
  } else if (e.key === "ArrowRight") {
    if (QuizState.currentQuestionIndex < questions.length - 1) goToQuestion(QuizState.currentQuestionIndex + 1);
  } else if (key === "F") {
    toggleFlagCurrentQuestion();
  }
}

// ==========================================
// 12. GIAO DIỆN SÁNG / TỐI (THEME)
// ==========================================
function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("mathQuizTheme", next);
  updateThemeIcon(next);
}

function loadSavedTheme() {
  const saved = localStorage.getItem("mathQuizTheme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (icon) {
    icon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon");
    initIcons();
  }
}

// ==========================================
// 13. CỠ CHỮ
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
// 14. AN TOÀN KATEX RENDER
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
  setTimeout(() => window.print(), 300);
}

function handlePrintFullSolution() {
  closePrintModal();
  document.body.classList.add("print-mode-solution");
  renderDetailedSolutions();
  setTimeout(() => window.print(), 300);
}

function renderPrintableExamSheet() {
  const container = document.getElementById("printableExamSheet");
  if (!container) return;

  const bank = LESSON_BANKS[QuizState.currentLessonKey] || LESSON_BANKS.all;
  const questions = bank.questions;
  const letters = ["A", "B", "C", "D"];

  container.innerHTML = `
    <div class="print-page-header">
      <div class="print-header-top">
        <div class="school-side">
          <p><strong>TRƯỜNG CAO ĐẲNG NGHỀ SỐ 1 - BQP</strong></p>
          <p>KHOA CƠ BẢN - TỔ TOÁN HỌC</p>
          <p class="exam-code">Mã đề: <strong>1101</strong></p>
        </div>
        <div class="exam-title-side">
          <h3>${bank.title.toUpperCase()}</h3>
          <p><strong>${bank.badge}</strong></p>
          <p>Thời gian làm bài: ${bank.durationMins} phút</p>
        </div>
      </div>
      <div class="student-id-row">
        <span>Họ và tên học sinh: <strong>${QuizState.studentName}</strong></span>
        <span>Lớp: ................................</span>
        <span>Điểm số: ......... / 10</span>
      </div>
    </div>

    <div class="print-questions-grid">
      ${questions.map((q, idx) => `
        <div class="print-q-block">
          <p class="print-q-title"><strong>Câu ${idx + 1}:</strong> ${q.prompt}</p>
          ${q.svgType && SVG_DIAGRAMS[q.svgType] ? `
            <div class="print-diagram-box">
              ${SVG_DIAGRAMS[q.svgType]()}
            </div>
          ` : ""}
          <div class="print-options-grid">
            ${q.options.map((opt, oIdx) => `
              <div class="print-opt-col">
                <strong>${letters[oIdx]}.</strong> <span>${opt}</span>
              </div>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>

    <div class="print-answer-matrix">
      <h4 style="margin: 10px 0 6px 0; text-align:center;">BẢNG TRẢ LỜI TRẮC NGHIỆM (Học sinh điền chữ cái A, B, C, D)</h4>
      <table class="matrix-table" style="width:100%; border-collapse:collapse; text-align:center;">
        <thead>
          <tr style="background:#f1f5f9;">
            <th style="border:1px solid #334155; padding:6px;">Câu</th>
            ${questions.map((_, i) => `<th style="border:1px solid #334155; padding:6px;">${i + 1}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid #334155; padding:10px; font-weight:bold;">Đáp án</td>
            ${questions.map(() => `<td style="border:1px solid #334155; padding:10px;">&nbsp;</td>`).join("")}
          </tr>
        </tbody>
      </table>
    </div>

    <div class="print-footer-sign" style="margin-top:20px; display:flex; justify-content:space-between; text-align:center;">
      <div style="width:40%;">
        <p><strong>CÁN BỘ COI THI</strong></p>
        <p style="font-style:italic; font-size:12px;">(Ký và ghi rõ họ tên)</p>
      </div>
      <div style="width:40%;">
        <p><strong>GIÁO VIÊN BIÊN SOẠN</strong></p>
        <p style="font-style:italic; font-size:12px;">(Ký và ghi rõ họ tên)</p>
        <br><br>
        <p><strong>ThS. Nguyễn Văn Sang</strong></p>
      </div>
    </div>
  `;

  renderMathInElementSafely(container);
}

function showNotification(msg, type = "info") {
  const toast = document.createElement("div");
  toast.className = `app-toast toast-${type}`;
  toast.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: ${type === "warning" ? "#f59e0b" : "#4f46e5"};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.2);
    z-index: 9999;
    transition: all 0.3s ease;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
