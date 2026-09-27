/**
 * Đề Kiểm Tra Trắc Nghiệm & Hệ Thống Tự Luyện Toán 11
 * Chương 1: Hàm số & Phương trình Lượng giác (Bài 1 -> Bài 3)
 * Biên soạn: ThS. Nguyễn Văn Sang - Khoa Cơ Bản - Trường Cao Đẳng Nghề Số 1 - BQP & THPT GDPT 2018
 * Nguồn tư liệu: Sách giáo khoa & Tài liệu Toán 11 - Từ Tâm
 */

// ==========================================
// 1. NGÂN HÀNG CÂU HỎI THEO BÀI HỌC (LESSON BANKS)
// ==========================================
const LESSON_BANKS = {
  // 1.1 ĐỀ KIỂM TRA TỔNG HỢP 15 PHÚT (BÀI 1 ĐẾN BÀI 3)
  all: {
    id: "all",
    title: "Kiểm Tra 15 Phút: Góc & Công Thức Lượng Giác",
    badge: "TOÁN 11 • CHƯƠNG 1: TỔNG HỢP BÀI 1 ĐẾN BÀI 3",
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
        explanation: "<strong>Đáp án B đúng.</strong><br>• Công thức chuyển đổi giữa độ và rađian là: $\\alpha\\text{ (rad)} = a^\\circ \\cdot \\dfrac{\\pi}{180^\\circ}$.<br>• Với $a = 108^\\circ$, ta có:<br>$$\\alpha = 108 \\cdot \\dfrac{\\pi}{180} = \\dfrac{108}{180}\\pi = \\dfrac{3\\pi}{5}\\text{ rad}$$."
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
        explanation: "<strong>Đáp án A đúng.</strong><br>• Cung tròn có số đo $\\alpha\\text{ rad}$ trên đường tròn bán kính $R$ có độ dài tính theo công thức:<br>$$l = R \\cdot \\alpha$$<br>• Thay số: $R = 15\\text{ cm}$, $\\alpha = \\dfrac{2\\pi}{3}\\text{ rad}$, ta được:<br>$$l = 15 \\cdot \\dfrac{2\\pi}{3} = 10\\pi\\text{ cm}$$."
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
        explanation: "<strong>Đáp án A đúng.</strong><br>• Theo định nghĩa trên đường tròn lượng giác, điểm $M$ biểu diễn góc lượng giác $\\alpha$ có tọa độ là $(x_M; y_M) = (\\cos\\alpha; \\sin\\alpha)$.<br>• Với $\\alpha = \\dfrac{5\\pi}{6}$, ta tính được:<br>- Hoành độ: $x_M = \\cos\\left(\\dfrac{5\\pi}{6}\\right) = -\\dfrac{\\sqrt{3}}{2}$.<br>- Tung độ: $y_M = \\sin\\left(\\dfrac{5\\pi}{6}\\right) = \\dfrac{1}{2}$.<br>• Vậy tọa độ điểm $M$ là $M\\left(-\\dfrac{\\sqrt{3}}{2}; \\dfrac{1}{2}\\right)$."
      },
      {
        id: 4,
        lesson: "Bài 2: Giá trị lượng giác của một góc lượng giác",
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
        explanation: "<strong>Đáp án C đúng.</strong><br>• Với $\\dfrac{\\pi}{2} < \\alpha < \\pi$, điểm biểu diễn của góc lượng giác $\\alpha$ nằm trong <strong>góc phần tư thứ II</strong> của mặt phẳng tọa độ $Oxy$.<br>• Trong góc phần tư thứ II:<br>- Hoành độ âm: $\\cos\\alpha < 0$.<br>- Tung độ dương: $\\sin\\alpha > 0$.<br>- Kéo theo $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} < 0$ và $\\cot\\alpha < 0$."
      },
      {
        id: 5,
        lesson: "Bài 2: Giá trị lượng giác của một góc lượng giác",
        level: "Thông hiểu",
        prompt: "Trong các khẳng định sau về giá trị lượng giác của các góc có liên quan đặc biệt, khẳng định nào <strong>SAI</strong> với mọi góc lượng giác $\\alpha$?",
        svgType: null,
        options: [
          "$\\sin(\\pi - \\alpha) = \\sin\\alpha$",
          "$\\cos(\\pi - \\alpha) = -\\cos\\alpha$",
          "$\\tan(\\pi + \\alpha) = \\tan\\alpha$",
          "$\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = -\\sin\\alpha$"
        ],
        correctIndex: 3,
        explanation: "<strong>Đáp án D đúng (vì mệnh đề D là khẳng định SAI).</strong><br>• Hai góc bù nhau: $\\sin(\\pi - \\alpha) = \\sin\\alpha$ (A đúng), $\\cos(\\pi - \\alpha) = -\\cos\\alpha$ (B đúng).<br>• Hai góc hơn kém $\\pi$: $\\tan(\\pi + \\alpha) = \\tan\\alpha$ (C đúng).<br>• Hai góc phụ nhau: $\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha$. Do đó mệnh đề $\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = -\\sin\\alpha$ ở đáp án D là <strong>SAI</strong>."
      },
      {
        id: 6,
        lesson: "Bài 2: Giá trị lượng giác của một góc lượng giác",
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
        explanation: "<strong>Đáp án A đúng.</strong><br>1. Sử dụng hệ thức cơ bản $\\sin^2\\alpha + \\cos^2\\alpha = 1$, ta có:<br>$$\\cos^2\\alpha = 1 - \\sin^2\\alpha = 1 - \\left(\\dfrac{3}{5}\\right)^2 = \\dfrac{16}{25}$$<br>2. Vì $\\dfrac{\\pi}{2} < \\alpha < \\pi$ (góc phần tư thứ II) nên $\\cos\\alpha < 0$. Suy ra:<br>$$\\cos\\alpha = -\\sqrt{\\dfrac{16}{25}} = -\\dfrac{4}{5}$$<br>3. Tính $\\tan\\alpha = \\dfrac{\\sin\\alpha}{\\cos\\alpha} = \\dfrac{3/5}{-4/5} = -\\dfrac{3}{4}$.<br>4. Thay vào biểu thức $P$:<br>$$P = 2\\left(-\\dfrac{4}{5}\\right) + \\left(-\\dfrac{3}{4}\\right) = -\\dfrac{8}{5} - \\dfrac{3}{4} = -\\dfrac{32 + 15}{20} = -\\dfrac{47}{20}$$."
      },
      {
        id: 7,
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
        explanation: "<strong>Đáp án D đúng (vì khẳng định D là công thức SAI).</strong><br>• Công thức nhân đôi cho $\\sin 2a$: $\\sin 2a = 2\\sin a \\cos a$ (A đúng).<br>• Công thức nhân đôi cho $\\cos 2a$ gồm:<br>1) $\\cos 2a = \\cos^2 a - \\sin^2 a$ (B đúng)<br>2) $\\cos 2a = 2\\cos^2 a - 1$<br>3) $\\cos 2a = 1 - 2\\sin^2 a$ (C đúng)<br>• Phương án D viết $\\cos 2a = 1 - 2\\cos^2 a$ là <strong>SAI</strong> (công thức đúng là $2\\cos^2 a - 1$)."
      },
      {
        id: 8,
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
        explanation: "<strong>Đáp án B đúng.</strong><br>• Áp dụng công thức cộng đối với cosin:<br>$$\\cos(a - b) = \\cos a \\cos b + \\sin a \\sin b$$<br>• Đặt $a = 2x$ và $b = x$, ta có:<br>$$M = \\cos 2x \\cos x + \\sin 2x \\sin x = \\cos(2x - x) = \\cos x$$."
      },
      {
        id: 9,
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
        explanation: "<strong>Đáp án C đúng.</strong><br>• Áp dụng công thức cộng đối với hàm tang:<br>$$\\tan(a + b) = \\dfrac{\\tan a + \\tan b}{1 - \\tan a \\tan b}$$<br>• Áp dụng với $a = 20^\\circ$ và $b = 25^\\circ$:<br>$$T = \\dfrac{\\tan 20^\\circ + \\tan 25^\\circ}{1 - \\tan 20^\\circ \\tan 25^\\circ} = \\tan(20^\\circ + 25^\\circ) = \\tan 45^\\circ = 1$$."
      },
      {
        id: 10,
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
        explanation: "<strong>Đáp án A đúng.</strong><br>1. Bình phương hai vế của giả thiết $\\sin x + \\cos x = \\dfrac{1}{2}$:<br>$$(\\sin x + \\cos x)^2 = \\left(\\dfrac{1}{2}\\right)^2 \\Leftrightarrow \\sin^2 x + 2\\sin x \\cos x + \\cos^2 x = \\dfrac{1}{4}$$<br>2. Nhận thấy $\\sin^2 x + \\cos^2 x = 1$ và $2\\sin x \\cos x = \\sin 2x$, thay vào ta được:<br>$$1 + \\sin 2x = \\dfrac{1}{4} \\Leftrightarrow \\sin 2x = \\dfrac{1}{4} - 1 = -\\dfrac{3}{4}$$."
      }
    ]
  },

  // 1.2 TỰ LUYỆN BÀI 1: GÓC LƯỢNG GIÁC
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
        explanation: "<strong>Đáp án A đúng.</strong><br>Ta có: $\\alpha = \\dfrac{2\\pi}{5} \\cdot \\dfrac{180^\\circ}{\\pi} = \\dfrac{360^\\circ}{5} = 72^\\circ$."
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
        explanation: "<strong>Đáp án B đúng.</strong><br>• Cả bánh xe là một vòng tròn $360^\\circ$ gồm 72 răng.<br>• Mỗi răng tương ứng với số đo góc: $\\dfrac{360^\\circ}{72} = 5^\\circ$.<br>• Khi bánh xe quay được 10 răng thì góc quay được là: $10 \\times 5^\\circ = 50^\\circ$."
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
        explanation: "<strong>Đáp án A đúng.</strong><br>Điểm ngọn $M$ của góc lượng giác $\\alpha$ có tọa độ $M(\\cos\\alpha; \\sin\\alpha)$.<br>Với $\\alpha = \\dfrac{5\\pi}{6}$:<br>$x_M = \\cos\\left(\\dfrac{5\\pi}{6}\\right) = -\\dfrac{\\sqrt{3}}{2}$, $y_M = \\sin\\left(\\dfrac{5\\pi}{6}\\right) = \\dfrac{1}{2}$.<br>Vậy $M\\left(-\\dfrac{\\sqrt{3}}{2}; \\dfrac{1}{2}\\right)$."
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
        explanation: "<strong>Đáp án B đúng.</strong><br>Đổi sang độ: $\\alpha = \\dfrac{5\\pi}{4} \\cdot \\dfrac{180^\\circ}{\\pi} = 5 \\cdot 45^\\circ = 225^\\circ$."
      }
    ]
  },

  // 1.3 TỰ LUYỆN BÀI 2: GIÁ TRỊ LƯỢNG GIÁC
  b2: {
    id: "b2",
    title: "Tự Luyện: Bài 2 - Giá Trị Lượng Giác Của Một Góc Lượng Giác",
    badge: "TOÁN 11 • CHƯƠNG 1: BÀI 2 - GIÁ TRỊ LƯỢNG GIÁC",
    durationMins: 15,
    questions: [
      {
        id: 1,
        lesson: "Bài 2: Giá trị lượng giác của một góc lượng giác",
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
        explanation: "<strong>Đáp án C đúng.</strong><br>Vì $\\dfrac{\\pi}{2} < \\alpha < \\pi$ (góc phần tư thứ II) nên $\\sin\\alpha > 0$ và $\\cos\\alpha < 0$."
      },
      {
        id: 2,
        lesson: "Bài 2: Giá trị lượng giác của một góc lượng giác",
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
        explanation: "<strong>Đáp án A đúng.</strong><br>Hệ thức cơ bản: $\\sin^2\\alpha + \\cos^2\\alpha = 1$ với mọi $\\alpha$."
      },
      {
        id: 3,
        lesson: "Bài 2: Giá trị lượng giác của một góc lượng giác",
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
        explanation: "<strong>Đáp án B đúng.</strong><br>Theo công thức hai góc bù nhau: $\\sin(\\pi - x) = \\sin x$ và $\\cos(\\pi - x) = -\\cos x$.<br>Do đó $A = \\sin x - \\cos x$."
      },
      {
        id: 4,
        lesson: "Bài 2: Giá trị lượng giác của một góc lượng giác",
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
        explanation: "<strong>Đáp án B đúng (vì mệnh đề B là SAI).</strong><br>Công thức đúng của hai góc phụ nhau là $\\cos\\left(\\dfrac{\\pi}{2} - \\alpha\\right) = \\sin\\alpha$ (không có dấu trừ)."
      },
      {
        id: 5,
        lesson: "Bài 2: Giá trị lượng giác của một góc lượng giác",
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
        explanation: "<strong>Đáp án A đúng.</strong><br>• $\\cos^2\\alpha = 1 - (3/5)^2 = 16/25$. Do $\\alpha \\in (\\pi/2; \\pi)$ nên $\\cos\\alpha = -4/5$.<br>• $\\tan\\alpha = \\dfrac{3/5}{-4/5} = -3/4$.<br>• $P = 2(-4/5) + (-3/4) = -8/5 - 3/4 = -47/20$."
      },
      {
        id: 6,
        lesson: "Bài 2: Giá trị lượng giác của một góc lượng giác",
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
        explanation: "<strong>Đáp án B đúng.</strong><br>Vì $\\tan\\alpha$ xác định nên $\\cos\\alpha \\neq 0$. Chia cả tử và mẫu của $E$ cho $\\cos\\alpha$:<br>$$E = \\dfrac{2\\tan\\alpha + 1}{\\tan\\alpha - 3} = \\dfrac{2(2) + 1}{2 - 3} = \\dfrac{5}{-1} = -5$$."
      }
    ]
  },

  // 1.4 TỰ LUYỆN BÀI 3: CÔNG THỨC LƯỢNG GIÁC
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
        explanation: "<strong>Đáp án D đúng (vì khẳng định D là công thức SAI).</strong><br>Công thức đúng cho cosin nhân đôi là $\\cos 2a = 2\\cos^2 a - 1$."
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
        explanation: "<strong>Đáp án A đúng.</strong><br>Theo công thức cộng: $\\cos(a + b) = \\cos a \\cos b - \\sin a \\sin b$."
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
        explanation: "<strong>Đáp án B đúng.</strong><br>Áp dụng công thức cộng: $M = \\cos(2x - x) = \\cos x$."
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
        explanation: "<strong>Đáp án A đúng.</strong><br>Ta có: $P = 2(2\\sin x \\cos x)\\cos 2x = 2\\sin 2x \\cos 2x = \\sin 4x$."
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
        explanation: "<strong>Đáp án C đúng.</strong><br>Ta có: $T = \\tan(20^\\circ + 25^\\circ) = \\tan 45^\\circ = 1$."
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
        explanation: "<strong>Đáp án A đúng.</strong><br>Bình phương 2 vế: $(\\sin x + \\cos x)^2 = 1/4 \\Leftrightarrow 1 + \\sin 2x = 1/4 \\Leftrightarrow \\sin 2x = -3/4$."
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
  timeRemainingSeconds: 15 * 60,
  totalSeconds: 15 * 60,
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
  
  // Khởi tạo bài học mặc định
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

  // Level Badge & Lesson
  document.getElementById("questionLevelText").textContent = `${q.lesson} • Mức độ: ${q.level}`;
  document.getElementById("questionIndexIndicator").textContent = `Câu ${index + 1} / ${questions.length}`;

  // Trạng thái Prev / Next
  document.getElementById("prevQuestionBtn").disabled = (index === 0);
  document.getElementById("nextQuestionBtn").disabled = (index === questions.length - 1);

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

  // Đồ thị SVG (nếu có)
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

  // Tính điểm
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

  // Đánh giá xếp loại
  let rank = "Giỏi";
  let feedback = "Kiến thức Lượng giác rất vững vàng!";
  if (finalScore >= 9.0) {
    rank = "Xuất sắc";
    feedback = "Hoàn hảo! Nắm chắc từ góc lượng giác đến công thức biến đổi.";
  } else if (finalScore >= 8.0) {
    rank = "Giỏi";
    feedback = "Rất tốt! Tư duy công thức nhanh và chuẩn xác.";
  } else if (finalScore >= 6.5) {
    rank = "Khá";
    feedback = "Khá tốt! Hãy củng cố thêm các công thức biến đổi.";
  } else if (finalScore >= 5.0) {
    rank = "Trung bình";
    feedback = "Cần rèn luyện thêm hệ thức cơ bản và công thức góc liên kết.";
  } else {
    rank = "Cần cố gắng";
    feedback = "Hãy ôn tập kỹ lý thuyết và bấm 'Làm lại bài thi' để cải thiện.";
  }

  // Cập nhật DOM kết quả
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
          <span>${isCorrect ? "Chính xác (+1.0 đ)" : "Chưa đúng (0 đ)"}</span>
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
