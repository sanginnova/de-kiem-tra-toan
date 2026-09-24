/**
 * Đề Kiểm Tra Trắc Nghiệm 30 Phút: Hệ Bất Phương Trình Bậc Nhất Hai Ẩn - Toán 10
 * DẠNG 2: CÂU HỎI TRẮC NGHIỆM ĐÚNG / SAI (CÂU 17 -> 21)
 * Bộ môn Toán - Khoa Cơ Bản - Trường Cao Đẳng Nghề Số 1 - BQP & THPT GDPT 2018
 * Giáo viên biên soạn: ThS. Nguyễn Văn Sang
 */

// ==========================================
// 1. DỮ LIỆU CÂU HỎI ĐÚNG / SAI (CÂU 17 ĐẾN CÂU 21)
// ==========================================
const QUIZ_30P_QUESTIONS = [
  {
    id: 1,
    originalNum: 17,
    level: "Thông hiểu",
    topic: "Nhận dạng hệ BPT & Điểm thuộc miền nghiệm",
    prompt: "Cho hệ bất phương trình: $$\\begin{cases} x \\ge 0 & (1) \\\\ -2x + 3y \\ge -6 & (2) \\\\ x + y \\le 3 & (3) \\end{cases}$$ Các mệnh đề sau đúng hay sai?",
    image: null,
    svgType: "b2_q17_region",
    statements: [
      {
        id: "a",
        label: "a",
        text: "Bất phương trình $(3)$ là bất phương trình bậc nhất hai ẩn.",
        correct: true,
        reason: "<strong>Mệnh đề ĐÚNG.</strong> Bất phương trình $x + y \\le 3$ có dạng tổng quát $ax + by \\le c$ với $a = 1 \\ne 0, b = 1 \\ne 0, c = 3$, cả hai ẩn $x, y$ đều có bậc nhất."
      },
      {
        id: "b",
        label: "b",
        text: "Hệ trên là một hệ bất phương trình bậc nhất hai ẩn.",
        correct: true,
        reason: "<strong>Mệnh đề ĐÚNG.</strong> Hệ gồm ba bất phương trình $(1), (2), (3)$, trong đó mỗi bất phương trình đều là bất phương trình bậc nhất hai ẩn $x$ và $y$."
      },
      {
        id: "c",
        label: "c",
        text: "Điểm $O(0; 0)$ thuộc miền nghiệm của hệ bất phương trình trên.",
        correct: true,
        reason: "<strong>Mệnh đề ĐÚNG.</strong> Thay $x = 0, y = 0$ vào từng bất phương trình của hệ:<br>• $(1): 0 \\ge 0$ (Đúng)<br>• $(2): -2(0) + 3(0) = 0 \\ge -6$ (Đúng)<br>• $(3): 0 + 0 = 0 \\le 3$ (Đúng)<br>Vì thỏa mãn đồng thời cả ba bất phương trình nên gốc tọa độ $O(0; 0)$ thuộc miền nghiệm của hệ."
      },
      {
        id: "d",
        label: "d",
        text: "Điểm $M(3; 1)$ thuộc miền nghiệm của hệ bất phương trình trên.",
        correct: false,
        reason: "<strong>Mệnh đề SAI.</strong> Thay tọa độ điểm $M(3; 1)$ vào bất phương trình $(3)$:<br>$x + y = 3 + 1 = 4 \\le 3$ (Mệnh đề SAI).<br>Vì điểm $M(3; 1)$ không thỏa mãn bất phương trình $(3)$ nên điểm $M$ không thuộc miền nghiệm của hệ."
      }
    ],
    explanation: `
      <div class="exp-block">
        <h4><i data-lucide="compass"></i> Phân tích tổng quan và miền nghiệm hình học:</h4>
        <p>• Đường thẳng $d_1: x = 0$ (trục tung $Oy$). Miền $x \\ge 0$ là nửa mặt phẳng bên phải trục tung.</p>
        <p>• Đường thẳng $d_2: -2x + 3y = -6$ cắt trục hoành tại $(3; 0)$ và cắt trục tung tại $(0; -2)$. Thay $(0; 0)$ vào ta có $0 \\ge -6$ (đúng), do đó miền nghiệm chứa điểm $O(0; 0)$.</p>
        <p>• Đường thẳng $d_3: x + y = 3$ cắt trục hoành tại $(3; 0)$ và cắt trục tung tại $(0; 3)$. Thay $(0; 0)$ vào ta có $0 \\le 3$ (đúng), miền nghiệm chứa điểm $O(0; 0)$.</p>
        <p>• Miền nghiệm của hệ là miền tam giác kín có ba đỉnh $A(0; 3)$, $B(0; -2)$ và $C(3; 0)$ (kể cả biên). Điểm $O(0; 0)$ nằm trong miền tam giác, còn điểm $M(3; 1)$ nằm ngoài miền tam giác.</p>
      </div>
    `
  },
  {
    id: 2,
    originalNum: 18,
    level: "Vận dụng",
    topic: "Miền nghiệm đa giác & Tối ưu biểu thức F(x, y)",
    prompt: "Cho hệ bất phương trình: $$\\begin{cases} 2x + 3y \\ge 6 \\\\ x - 2y \\le 3 \\\\ x + y \\le 6 \\\\ x \\ge 1 \\end{cases} \\quad (I)$$ Khi đó các mệnh đề sau đúng hay sai?",
    image: null,
    svgType: "b2_q18_region",
    statements: [
      {
        id: "a",
        label: "a",
        text: "Hệ bất phương trình $(I)$ là hệ bất phương trình bậc nhất hai ẩn $x; y$.",
        correct: true,
        reason: "<strong>Mệnh đề ĐÚNG.</strong> Cả 4 bất phương trình trong hệ đều chỉ chứa hai ẩn $x, y$ với bậc cao nhất là bậc 1."
      },
      {
        id: "b",
        label: "b",
        text: "Cặp số $(x; y) = (4; 3)$ là một nghiệm của hệ bất phương trình trên.",
        correct: false,
        reason: "<strong>Mệnh đề SAI.</strong> Thay cặp số $(4; 3)$ vào bất phương trình thứ ba của hệ:<br>$x + y = 4 + 3 = 7 \\le 6$ (Mệnh đề SAI).<br>Do đó $(4; 3)$ không phải là nghiệm của hệ bất phương trình."
      },
      {
        id: "c",
        label: "c",
        text: "Miền nghiệm của hệ bất phương trình $(I)$ là miền tam giác.",
        correct: false,
        reason: "<strong>Mệnh đề SAI.</strong> Miền nghiệm của hệ $(I)$ là <strong>miền tứ giác</strong> $ABCD$ tạo bởi 4 giao điểm:<br>• $A(1; 5)$ (giao $x = 1$ và $x + y = 6$)<br>• $B(5; 1)$ (giao $x + y = 6$ và $x - 2y = 3$)<br>• $C(3; 0)$ (giao $x - 2y = 3$ và $2x + 3y = 6$)<br>• $D\\left(1; \\dfrac{4}{3}\\right)$ (giao $x = 1$ và $2x + 3y = 6$)."
      },
      {
        id: "d",
        label: "d",
        text: "Nếu $x = x_0; y = y_0$ là nghiệm của hệ bất phương trình sao cho $F = 4x - 5y$ đạt giá trị nhỏ nhất thì $x_0^2 + y_0^2 = 26$.",
        correct: true,
        reason: "<strong>Mệnh đề ĐÚNG.</strong> Giá trị nhỏ nhất của $F(x, y) = 4x - 5y$ trên miền tứ giác đạt tại một trong 4 đỉnh:<br>• $F(A) = F(1; 5) = 4(1) - 5(5) = -21$<br>• $F(B) = F(5; 1) = 4(5) - 5(1) = 15$<br>• $F(C) = F(3; 0) = 4(3) - 5(0) = 12$<br>• $F(D) = F\\left(1; \\dfrac{4}{3}\\right) = 4(1) - 5\\cdot\\dfrac{4}{3} = -\\dfrac{8}{3} \\approx -2{,}67$<br>Giá trị nhỏ nhất là $F_{\\min} = -21$ đạt tại đỉnh $A(1; 5)$. Khi đó $x_0 = 1, y_0 = 5 \\implies x_0^2 + y_0^2 = 1^2 + 5^2 = 26$."
      }
    ],
    explanation: `
      <div class="exp-block">
        <h4><i data-lucide="check-circle"></i> Bảng tính giá trị biểu thức F(x, y) tại 4 đỉnh miền nghiệm:</h4>
        <table class="detail-summary-table">
          <thead>
            <tr>
              <th>Đỉnh</th>
              <th>Tọa độ $(x; y)$</th>
              <th>Giá trị $F(x; y) = 4x - 5y$</th>
              <th>Nhận xét</th>
            </tr>
          </thead>
          <tbody>
            <tr class="highlight-row">
              <td><strong>A</strong></td>
              <td>$(1; 5)$</td>
              <td>$4(1) - 5(5) = -21$</td>
              <td><span class="badge-pill pill-success">Giá trị nhỏ nhất (F_min)</span></td>
            </tr>
            <tr>
              <td><strong>B</strong></td>
              <td>$(5; 1)$</td>
              <td>$4(5) - 5(1) = 15$</td>
              <td><span class="badge-pill pill-primary">Giá trị lớn nhất (F_max)</span></td>
            </tr>
            <tr>
              <td><strong>C</strong></td>
              <td>$(3; 0)$</td>
              <td>$4(3) - 5(0) = 12$</td>
              <td></td>
            </tr>
            <tr>
              <td><strong>D</strong></td>
              <td>$\\left(1; \\dfrac{4}{3}\\right)$</td>
              <td>$4(1) - 5\\left(\\dfrac{4}{3}\\right) = -\\dfrac{8}{3}$</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: 3,
    originalNum: 19,
    level: "Vận dụng cao",
    topic: "Bài toán thực tế tối ưu tiền công may mặc",
    prompt: "Một người thợ may cần may một số áo và quần thể thao. Để may xong một cái áo người thợ mất $2$ giờ và để may xong một cái quần mất $3$ giờ. Người thợ may phải hoàn thành công việc trong thời gian không quá $72$ giờ. Tổng số lượng áo và quần mà người thợ cần may ít nhất là $12$ cái và số lượng áo không vượt quá một nửa số lượng quần. Biết tiền công may một cái áo là $200$ nghìn đồng, một cái quần là $250$ nghìn đồng. Gọi $x$ và $y$ ($x, y \\in \\mathbb{N}$) lần lượt là số áo và số quần mà người thợ may làm được. Khi đó:",
    image: "images_b2/xref_103.png",
    svgType: "b2_q19_region",
    statements: [
      {
        id: "a",
        label: "a",
        text: "Số tiền công người thợ may thu được là $T(x; y) = 200x + 250y$ nghìn đồng.",
        correct: true,
        reason: "<strong>Mệnh đề ĐÚNG.</strong> Tiền công 1 áo là 200 nghìn, 1 quần là 250 nghìn nên với $x$ áo và $y$ quần, tiền công thu được là $T(x; y) = 200x + 250y$ (nghìn đồng)."
      },
      {
        id: "b",
        label: "b",
        text: "$x + y \\ge 12$.",
        correct: true,
        reason: "<strong>Mệnh đề ĐÚNG.</strong> Đề bài cho biết tổng số lượng áo và quần cần may ít nhất là 12 cái, do đó bất phương trình là $x + y \\ge 12$."
      },
      {
        id: "c",
        label: "c",
        text: "$3x + 2y \\le 72$.",
        correct: false,
        reason: "<strong>Mệnh đề SAI.</strong> Để may 1 cái áo mất 2 giờ, 1 cái quần mất 3 giờ nên tổng thời gian may là $2x + 3y$. Thời gian làm việc không quá 72 giờ nên bất phương trình đúng phải là $2x + 3y \\le 72$ (không phải $3x + 2y \\le 72$)."
      },
      {
        id: "d",
        label: "d",
        text: "Để thu được tiền công lớn nhất thì người thợ phải may $9$ cái áo và $18$ cái quần.",
        correct: true,
        reason: "<strong>Mệnh đề ĐÚNG.</strong> Miền nghiệm xác định bởi hệ $\\begin{cases} x \\ge 0, y \\ge 0 \\\\ x + y \\ge 12 \\\\ 2x + 3y \\le 72 \\\\ 2x - y \\le 0 \\end{cases}$ là miền tứ giác $ABCD$ với các đỉnh:<br>• $A(4; 8) \\implies T(A) = 200(4) + 250(8) = 2\\,800$ nghìn đồng.<br>• $B(9; 18) \\implies T(B) = 200(9) + 250(18) = 1\\,800 + 4\\,500 = 6\\,300$ nghìn đồng.<br>• $C(0; 24) \\implies T(C) = 250(24) = 6\\,000$ nghìn đồng.<br>• $D(0; 12) \\implies T(D) = 250(12) = 3\\,000$ nghìn đồng.<br>Tiền công lớn nhất là $6\\,300$ nghìn đồng ($6{,}3$ triệu đồng), đạt khi thợ may $9$ cái áo ($x = 9$) và $18$ cái quần ($y = 18$)."
      }
    ],
    explanation: `
      <div class="exp-block">
        <h4><i data-lucide="layers"></i> Hệ bất phương trình mô tả bài toán may mặc:</h4>
        $$\\begin{cases} x \\ge 0, y \\ge 0 \\quad (x, y \\in \\mathbb{N}) \\\\ 2x + 3y \\le 72 \\quad (\\text{Thời gian tối đa 72 giờ}) \\\\ x + y \\ge 12 \\quad (\\text{Tổng sản phẩm ít nhất 12 cái}) \\\\ x \\le \\dfrac{1}{2}y \\iff 2x - y \\le 0 \\quad (\\text{Số áo không quá nửa số quần}) \\end{cases}$$
        <p>Miền nghiệm là tứ giác $ABCD$ nằm ở góc phần tư thứ nhất, đỉnh $B(9; 18)$ là giao điểm của $2x - y = 0$ và $2x + 3y = 72$.</p>
      </div>
    `
  },
  {
    id: 4,
    originalNum: 20,
    level: "Vận dụng cao",
    topic: "Bài toán thực tế chi phí thuê xe vận chuyển",
    prompt: "Một công ty cần thuê xe để chở $280$ người và $9$ tấn hàng. Nơi thuê chỉ có hai loại xe I và II. Trong đó xe loại I có $8$ chiếc, xe loại II có $9$ chiếc. Một chiếc xe loại I cho thuê với giá $8$ triệu đồng, loại II giá $4$ triệu đồng. Biết rằng một chiếc xe loại I chỉ chở được tối đa $40$ người và $0{,}6$ tấn hàng; một chiếc xe loại II chở được tối đa $20$ người và $1{,}5$ tấn hàng. Gọi $x, y$ ($x, y \\in \\mathbb{N}$) lần lượt là số xe loại I và loại II mà công ty thuê. Khi đó:",
    image: null,
    svgType: "b2_q20_region",
    statements: [
      {
        id: "a",
        label: "a",
        text: "Số tiền thuê xe là $T(x; y) = 8x + 4y$ triệu đồng.",
        correct: true,
        reason: "<strong>Mệnh đề ĐÚNG.</strong> Giá thuê xe loại I là 8 triệu đồng/xe, loại II là 4 triệu đồng/xe nên tổng chi phí thuê xe là $T(x; y) = 8x + 4y$ (triệu đồng)."
      },
      {
        id: "b",
        label: "b",
        text: "$0 \\le x \\le 9$ và $0 \\le y \\le 8$.",
        correct: false,
        reason: "<strong>Mệnh đề SAI.</strong> Đề bài cho biết nơi thuê chỉ có 8 xe loại I và 9 xe loại II, do đó điều kiện đúng phải là $0 \\le x \\le 8$ và $0 \\le y \\le 9$ (mệnh đề bị đảo ngược số lượng xe giữa hai loại)."
      },
      {
        id: "c",
        label: "c",
        text: "$2x + y \\ge 14$.",
        correct: true,
        reason: "<strong>Mệnh đề ĐÚNG.</strong> Để chở tối thiểu 280 người: $40x + 20y \\ge 280$. Rút gọn hai vế cho 20 ta được $2x + y \\ge 14$."
      },
      {
        id: "d",
        label: "d",
        text: "Để tốn ít chi phí thuê xe nhất thì công ty cần thuê $5$ chiếc xe loại I và $4$ chiếc xe loại II.",
        correct: true,
        reason: "<strong>Mệnh đề ĐÚNG.</strong> Ràng buộc hàng hóa: $0{,}6x + 1{,}5y \\ge 9 \\iff 2x + 5y \\ge 30$.<br>Giao điểm của $2x + y = 14$ và $2x + 5y = 30$ là $(5; 4)$.<br>Tại $(5; 4)$: chi phí $T(5; 4) = 8(5) + 4(4) = 40 + 16 = 56$ triệu đồng.<br>Đây là chi phí thấp nhất thỏa mãn đầy đủ các điều kiện chuyên chở và số xe hiện có."
      }
    ],
    explanation: `
      <div class="exp-block">
        <h4><i data-lucide="truck"></i> Mô hình toán học bài toán thuê xe:</h4>
        $$\\begin{cases} 0 \\le x \\le 8, \\quad 0 \\le y \\le 9 \\quad (x, y \\in \\mathbb{N}) \\\\ 2x + y \\ge 14 \\quad (\\text{Đủ chở 280 người}) \\\\ 2x + 5y \\ge 30 \\quad (\\text{Đủ chở 9 tấn hàng}) \\end{cases}$$
        <p>Chi phí $T(x; y) = 8x + 4y = 4(2x + y)$. Với các cặp số tự nhiên thỏa mãn trên đoạn biên $2x + y = 14$, tại $(5; 4)$ và $(4; 6)$ đều cho chi phí tối thiểu là $56$ triệu đồng. Do đó phương án thuê 5 xe loại I và 4 xe loại II là hoàn toàn chính xác.</p>
      </div>
    `
  },
  {
    id: 5,
    originalNum: 21,
    level: "Vận dụng cao",
    topic: "Bài toán thực tế chế độ ăn kiêng dinh dưỡng tối ưu",
    prompt: "Bà Lan được tư vấn bổ sung chế độ ăn kiêng đặc biệt bằng cách sử dụng hai loại thực phẩm khác nhau là $X$ và $Y$. Mỗi gói thực phẩm $X$ chứa $20$ đơn vị canxi, $20$ đơn vị sắt và $10$ đơn vị vitamin B. Mỗi gói thực phẩm $Y$ chứa $20$ đơn vị canxi, $10$ đơn vị sắt và $20$ đơn vị vitamin B. Yêu cầu hàng ngày tối thiểu trong chế độ ăn uống là $240$ đơn vị canxi, $160$ đơn vị sắt và $140$ đơn vị vitamin B. Mỗi ngày không được dùng quá $12$ gói mỗi loại. Các mệnh đề sau đúng hay sai?",
    image: null,
    svgType: "b2_q21_region",
    statements: [
      {
        id: "a",
        label: "a",
        text: "Hệ bất phương trình mô tả số gói thực phẩm $X$ và thực phẩm $Y$ mà bà Lan cần dùng mỗi ngày trong chế độ ăn kiêng để đáp ứng đủ nhu cầu cần thiết đối với canxi, sắt, vitamin B là $\\begin{cases} x + y \\ge 12 \\\\ 2x + y \\ge 16 \\\\ x + 2y \\ge 14 \\\\ 0 \\le x \\le 12 \\\\ 0 \\le y \\le 12 \\end{cases}$.",
        correct: true,
        reason: "<strong>Mệnh đề ĐÚNG.</strong><br>• Canxi: $20x + 20y \\ge 240 \\iff x + y \\ge 12$<br>• Sắt: $20x + 10y \\ge 160 \\iff 2x + y \\ge 16$<br>• Vitamin B: $10x + 20y \\ge 140 \\iff x + 2y \\ge 14$<br>• Không quá 12 gói mỗi loại: $0 \\le x \\le 12, 0 \\le y \\le 12$."
      },
      {
        id: "b",
        label: "b",
        text: "Miền nghiệm của hệ bất phương trình mô tả số gói thực phẩm $X$ và thực phẩm $Y$ mà bà Lan cần dùng mỗi ngày trong chế độ ăn kiêng là một ngũ giác.",
        correct: true,
        reason: "<strong>Mệnh đề ĐÚNG.</strong> Miền nghiệm là hình ngũ giác lồi với 5 đỉnh:<br>• $A(2; 12)$ (giao $2x + y = 16$ và $y = 12$)<br>• $B(12; 12)$ (giao $x = 12$ và $y = 12$)<br>• $C(12; 1)$ (giao $x = 12$ và $x + 2y = 14$)<br>• $D(10; 2)$ (giao $x + 2y = 14$ và $x + y = 12$)<br>• $E(4; 8)$ (giao $x + y = 12$ và $2x + y = 16$)."
      },
      {
        id: "c",
        label: "c",
        text: "Biết 1 gói thực phẩm loại $X$ giá $20\\,000$ đồng, 1 gói thực phẩm loại $Y$ giá $25\\,000$ đồng. Bà Lan cần dùng $10$ gói loại $X$ và $2$ gói loại $Y$ để chi phí mua là ít nhất.",
        correct: true,
        reason: "<strong>Mệnh đề ĐÚNG.</strong> Hàm chi phí: $C(x; y) = 20x + 25y$ (nghìn đồng). Tính giá trị tại 5 đỉnh:<br>• $C(A) = C(2; 12) = 20(2) + 25(12) = 340$<br>• $C(B) = C(12; 12) = 20(12) + 25(12) = 540$<br>• $C(C) = C(12; 1) = 20(12) + 25(1) = 265$<br>• $C(D) = C(10; 2) = 20(10) + 25(2) = 250$<br>• $C(E) = C(4; 8) = 20(4) + 25(8) = 280$<br>Chi phí thấp nhất là $250\\,000$ đồng, đạt được khi dùng $10$ gói $X$ và $2$ gói $Y$."
      },
      {
        id: "d",
        label: "d",
        text: "Điểm $(10; 8)$ không thuộc miền nghiệm của hệ bất phương trình mô tả số gói thực phẩm $X$ và thực phẩm $Y$ mà bà Lan cần dùng mỗi ngày.",
        correct: false,
        reason: "<strong>Mệnh đề SAI.</strong> Thay tọa độ $(10; 8)$ vào hệ:<br>• $0 \\le 10 \\le 12, 0 \\le 8 \\le 12$ (Đúng)<br>• $10 + 8 = 18 \\ge 12$ (Đúng)<br>• $2(10) + 8 = 28 \\ge 16$ (Đúng)<br>• $10 + 2(8) = 26 \\ge 14$ (Đúng)<br>Điểm $(10; 8)$ thỏa mãn tất cả các bất phương trình nên <strong>thuộc miền nghiệm</strong>. Mệnh đề khẳng định 'không thuộc' là SAI."
      }
    ],
    explanation: `
      <div class="exp-block">
        <h4><i data-lucide="pie-chart"></i> Bảng so sánh chi phí dinh dưỡng tại 5 đỉnh ngũ giác:</h4>
        <table class="detail-summary-table">
          <thead>
            <tr>
              <th>Đỉnh</th>
              <th>Tọa độ $(x; y)$</th>
              <th>Canxi $\\ge 240$</th>
              <th>Sắt $\\ge 160$</th>
              <th>Vitamin B $\\ge 140$</th>
              <th>Chi phí $C(x, y)$ (đồng)</th>
              <th>Đánh giá</th>
            </tr>
          </thead>
          <tbody>
            <tr class="highlight-row">
              <td><strong>D</strong></td>
              <td>$(10; 2)$</td>
              <td>$240$</td>
              <td>$220$</td>
              <td>$140$</td>
              <td><strong>$250\\,000$</strong></td>
              <td><span class="badge-pill pill-success">Tối ưu nhất (Rẻ nhất)</span></td>
            </tr>
            <tr>
              <td><strong>C</strong></td>
              <td>$(12; 1)$</td>
              <td>$260$</td>
              <td>$250$</td>
              <td>$140$</td>
              <td>$265\\,000$</td>
              <td></td>
            </tr>
            <tr>
              <td><strong>E</strong></td>
              <td>$(4; 8)$</td>
              <td>$240$</td>
              <td>$160$</td>
              <td>$200$</td>
              <td>$280\\,000$</td>
              <td></td>
            </tr>
            <tr>
              <td><strong>A</strong></td>
              <td>$(2; 12)$</td>
              <td>$280$</td>
              <td>$160$</td>
              <td>$260$</td>
              <td>$340\\,000$</td>
              <td></td>
            </tr>
            <tr>
              <td><strong>B</strong></td>
              <td>$(12; 12)$</td>
              <td>$480$</td>
              <td>$360$</td>
              <td>$360$</td>
              <td>$540\\,000$</td>
              <td>Đắt nhất</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  }
];

// ==========================================
// 2. CÁC HÀM VẼ ĐỒ THỊ SVG MIỀN NGHIỆM TRỰC QUAN
// ==========================================
const QUIZ_30P_SVGS = {
  // Câu 17: Miền nghiệm tam giác kín A(0,3), B(0,-2), C(3,0)
  b2_q17_region: function() {
    return `
      <svg viewBox="0 0 460 360" xmlns="http://www.w3.org/2000/svg" class="svg-math-canvas">
        <defs>
          <marker id="arr17" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
          </marker>
        </defs>

        <!-- Lưới tọa độ mờ -->
        <pattern id="grid17" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#f1f5f9" stroke-width="1"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid17)" />

        <!-- Miền tam giác nghiệm: A(0;3) -> (120, 90), B(0;-2) -> (120, 240), C(3;0) -> (270, 180) -->
        <!-- Tâm O tại (120, 180), tỉ lệ 1 đơn vị = 50px -->
        <polygon points="120,30 120,280 270,180" fill="#a7f3d0" opacity="0.65" stroke="#059669" stroke-width="2.5" />

        <!-- Trục tọa độ Ox, Oy -->
        <line x1="50" y1="180" x2="420" y2="180" stroke="#0f172a" stroke-width="2" marker-end="url(#arr17)" />
        <line x1="120" y1="330" x2="120" y2="20" stroke="#0f172a" stroke-width="2" marker-end="url(#arr17)" />

        <text x="405" y="170" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">x</text>
        <text x="132" y="35" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">y</text>
        <text x="96" y="202" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">O</text>

        <!-- Điểm O(0,0) -->
        <circle cx="120" cy="180" r="4.5" fill="#1e3a8a" />
        <text x="132" y="172" font-size="13" font-weight="bold" fill="#059669">O ∈ Miền nghiệm</text>

        <!-- Đỉnh A(0, 3) -->
        <circle cx="120" cy="30" r="5" fill="#059669" />
        <text x="85" y="36" font-size="16" font-weight="bold" fill="#0f172a">3</text>
        <text x="132" y="32" font-size="16" font-weight="bold" fill="#059669">A(0; 3)</text>

        <!-- Đỉnh B(0, -2) -->
        <circle cx="120" cy="280" r="5" fill="#059669" />
        <text x="80" y="286" font-size="16" font-weight="bold" fill="#0f172a">-2</text>
        <text x="132" y="284" font-size="16" font-weight="bold" fill="#059669">B(0; -2)</text>

        <!-- Đỉnh C(3, 0) -->
        <circle cx="270" cy="180" r="5" fill="#059669" />
        <text x="265" y="206" font-size="16" font-weight="bold" fill="#0f172a">3</text>
        <text x="272" y="168" font-size="16" font-weight="bold" fill="#059669">C(3; 0)</text>

        <!-- Điểm thử M(3; 1) bên ngoài -->
        <circle cx="270" cy="130" r="5" fill="#e11d48" />
        <line x1="270" y1="130" x2="270" y2="180" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="4,4" />
        <line x1="270" y1="130" x2="120" y2="130" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="4,4" />
        <text x="95" y="135" font-size="15" fill="#0f172a">1</text>
        <text x="282" y="132" font-size="15" font-weight="bold" fill="#e11d48">M(3; 1) ∉ Miền nghiệm</text>

        <!-- Tên đường thẳng d2: -2x + 3y = -6 -->
        <text x="260" y="275" font-size="14" font-weight="bold" fill="#4338ca">d₂: -2x + 3y = -6</text>

        <!-- Tên đường thẳng d3: x + y = 3 -->
        <text x="260" y="80" font-size="14" font-weight="bold" fill="#0284c7">d₃: x + y = 3</text>
      </svg>
    `;
  },

  // Câu 18: Miền tứ giác ABCD với A(1;5), B(5;1), C(3;0), D(1; 4/3)
  b2_q18_region: function() {
    return `
      <svg viewBox="0 0 460 360" xmlns="http://www.w3.org/2000/svg" class="svg-math-canvas">
        <defs>
          <marker id="arr18" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
          </marker>
        </defs>

        <!-- Gốc O tại (80, 290), scale 1 đơn vị = 45px -->
        <!-- A(1; 5) -> (125, 65) -->
        <!-- B(5; 1) -> (305, 245) -->
        <!-- C(3; 0) -> (215, 290) -->
        <!-- D(1; 4/3) -> (125, 230) -->
        <polygon points="125,65 305,245 215,290 125,230" fill="#fed7aa" opacity="0.75" stroke="#ea580c" stroke-width="2.5" />

        <!-- Trục tọa độ -->
        <line x1="50" y1="290" x2="430" y2="290" stroke="#0f172a" stroke-width="2" marker-end="url(#arr18)" />
        <line x1="80" y1="330" x2="80" y2="30" stroke="#0f172a" stroke-width="2" marker-end="url(#arr18)" />

        <text x="415" y="280" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">x</text>
        <text x="92" y="45" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">y</text>
        <text x="60" y="312" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">O</text>

        <!-- Đường x = 1 -->
        <line x1="125" y1="40" x2="125" y2="320" stroke="#9333ea" stroke-width="2" stroke-dasharray="6,4" />
        <text x="130" y="55" font-size="14" font-weight="bold" fill="#9333ea">x = 1</text>

        <!-- Đỉnh A(1; 5) -->
        <circle cx="125" cy="65" r="5" fill="#ea580c" />
        <text x="135" y="70" font-size="15" font-weight="bold" fill="#b45309">A(1; 5) [F_min = -21]</text>

        <!-- Đỉnh B(5; 1) -->
        <circle cx="305" cy="245" r="5" fill="#ea580c" />
        <text x="315" y="245" font-size="15" font-weight="bold" fill="#ea580c">B(5; 1) [F_max = 15]</text>

        <!-- Đỉnh C(3; 0) -->
        <circle cx="215" cy="290" r="5" fill="#ea580c" />
        <text x="210" y="315" font-size="15" font-weight="bold" fill="#0f172a">3</text>
        <text x="220" y="282" font-size="15" font-weight="bold" fill="#ea580c">C(3; 0)</text>

        <!-- Đỉnh D(1; 4/3) -->
        <circle cx="125" cy="230" r="5" fill="#ea580c" />
        <text x="50" y="234" font-size="14" font-weight="bold" fill="#ea580c">D(1; 4/3)</text>

        <!-- Điểm thử (4; 3) không thuộc miền nghiệm -->
        <circle cx="260" cy="155" r="5" fill="#e11d48" />
        <text x="272" y="155" font-size="14" font-weight="bold" fill="#e11d48">(4; 3) ∉ Miền tứ giác</text>
      </svg>
    `;
  },

  // Câu 19: Miền tứ giác ABCD tối ưu may mặc: A(4,8), B(9,18), C(0,24), D(0,12)
  b2_q19_region: function() {
    return `
      <svg viewBox="0 0 460 360" xmlns="http://www.w3.org/2000/svg" class="svg-math-canvas">
        <defs>
          <marker id="arr19" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
          </marker>
        </defs>

        <!-- Gốc O tại (60, 310), scale: x (1 đơn vị = 12px), y (1 đơn vị = 10px) -->
        <!-- D(0; 12) -> (60, 190) -->
        <!-- C(0; 24) -> (60, 70) -->
        <!-- B(9; 18) -> (168, 130) -->
        <!-- A(4; 8) -> (108, 230) -->
        <polygon points="60,190 60,70 168,130 108,230" fill="#bae6fd" opacity="0.8" stroke="#0284c7" stroke-width="2.5" />

        <!-- Trục tọa độ -->
        <line x1="40" y1="310" x2="430" y2="310" stroke="#0f172a" stroke-width="2" marker-end="url(#arr19)" />
        <line x1="60" y1="340" x2="60" y2="30" stroke="#0f172a" stroke-width="2" marker-end="url(#arr19)" />

        <text x="415" y="300" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">x (áo)</text>
        <text x="72" y="45" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">y (quần)</text>
        <text x="40" y="328" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">O</text>

        <!-- Đỉnh B(9; 18) - Điểm cực đại -->
        <circle cx="168" cy="130" r="6" fill="#e11d48" />
        <line x1="168" y1="130" x2="168" y2="310" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="4,4" />
        <line x1="168" y1="130" x2="60" y2="130" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="4,4" />
        <text x="160" y="328" font-size="15" font-weight="bold" fill="#e11d48">9</text>
        <text x="35" y="135" font-size="15" font-weight="bold" fill="#e11d48">18</text>
        <text x="180" y="125" font-size="15" font-weight="bold" fill="#e11d48">B(9; 18) → Max: 6.300k</text>

        <!-- Đỉnh A(4; 8) -->
        <circle cx="108" cy="230" r="5" fill="#0284c7" />
        <text x="120" y="240" font-size="14" font-weight="bold" fill="#0284c7">A(4; 8)</text>

        <!-- Đỉnh C(0; 24) -->
        <circle cx="60" cy="70" r="5" fill="#0284c7" />
        <text x="15" y="75" font-size="15" font-weight="bold" fill="#0f172a">24</text>
        <text x="70" y="75" font-size="14" font-weight="bold" fill="#0284c7">C(0; 24)</text>

        <!-- Đỉnh D(0; 12) -->
        <circle cx="60" cy="190" r="5" fill="#0284c7" />
        <text x="15" y="195" font-size="15" font-weight="bold" fill="#0f172a">12</text>
        <text x="70" y="195" font-size="14" font-weight="bold" fill="#0284c7">D(0; 12)</text>

        <!-- Đường 2x + 3y = 72 -->
        <text x="240" y="90" font-size="14" font-weight="bold" fill="#4f46e5">2x + 3y = 72</text>
        <!-- Đường x + y = 12 -->
        <text x="150" y="280" font-size="14" font-weight="bold" fill="#059669">x + y = 12</text>
        <!-- Đường 2x - y = 0 -->
        <text x="210" y="170" font-size="14" font-weight="bold" fill="#ea580c">y = 2x</text>
      </svg>
    `;
  },

  // Câu 20: Miền nghiệm bài toán thuê xe với điểm tối ưu (5; 4)
  b2_q20_region: function() {
    return `
      <svg viewBox="0 0 460 360" xmlns="http://www.w3.org/2000/svg" class="svg-math-canvas">
        <defs>
          <marker id="arr20" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
          </marker>
        </defs>

        <!-- Gốc O tại (60, 300), scale x (25px), y (22px) -->
        <!-- Miền nghiệm giới hạn bởi x <= 8, y <= 9, 2x + y >= 14, 2x + 5y >= 30 -->
        <!-- Điểm P(5; 4) -> (185, 212) -->
        <!-- Điểm Q(2.5; 9) -> (122.5, 102) -->
        <!-- Điểm R(8; 9) -> (260, 102) -->
        <!-- Điểm S(8; 2.8) -> (260, 238) -->
        <polygon points="122.5,102 260,102 260,238 185,212" fill="#ddd6fe" opacity="0.8" stroke="#7c3aed" stroke-width="2.5" />

        <!-- Trục tọa độ -->
        <line x1="40" y1="300" x2="430" y2="300" stroke="#0f172a" stroke-width="2" marker-end="url(#arr20)" />
        <line x1="60" y1="330" x2="60" y2="30" stroke="#0f172a" stroke-width="2" marker-end="url(#arr20)" />

        <text x="410" y="290" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">x (Xe I)</text>
        <text x="72" y="45" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">y (Xe II)</text>
        <text x="40" y="320" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">O</text>

        <!-- Điểm tối ưu P(5; 4) -->
        <circle cx="185" cy="212" r="6" fill="#e11d48" />
        <line x1="185" y1="212" x2="185" y2="300" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="4,4" />
        <line x1="185" y1="212" x2="60" y2="212" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="4,4" />
        <text x="180" y="318" font-size="15" font-weight="bold" fill="#e11d48">5</text>
        <text x="42" y="217" font-size="15" font-weight="bold" fill="#e11d48">4</text>
        <text x="195" y="210" font-size="15" font-weight="bold" fill="#e11d48">Thuê (5; 4) → 56 triệu</text>

        <!-- Giới hạn x <= 8 -->
        <line x1="260" y1="80" x2="260" y2="310" stroke="#64748b" stroke-width="1.8" stroke-dasharray="4,4" />
        <text x="255" y="320" font-size="15" font-weight="bold" fill="#64748b">8</text>

        <!-- Giới hạn y <= 9 -->
        <line x1="50" y1="102" x2="300" y2="102" stroke="#64748b" stroke-width="1.8" stroke-dasharray="4,4" />
        <text x="42" y="107" font-size="15" font-weight="bold" fill="#64748b">9</text>

        <text x="290" y="170" font-size="14" font-weight="bold" fill="#7c3aed">2x + y = 14</text>
        <text x="290" y="250" font-size="14" font-weight="bold" fill="#0284c7">2x + 5y = 30</text>
      </svg>
    `;
  },

  // Câu 21: Miền ngũ giác dinh dưỡng với 5 đỉnh A(2,12), B(12,12), C(12,1), D(10,2), E(4,8)
  b2_q21_region: function() {
    return `
      <svg viewBox="0 0 460 360" xmlns="http://www.w3.org/2000/svg" class="svg-math-canvas">
        <defs>
          <marker id="arr21" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a" />
          </marker>
        </defs>

        <!-- Gốc O tại (60, 310), scale: 1 đơn vị = 20px -->
        <!-- A(2; 12) -> (100, 70) -->
        <!-- B(12; 12) -> (300, 70) -->
        <!-- C(12; 1) -> (300, 290) -->
        <!-- D(10; 2) -> (260, 270) -->
        <!-- E(4; 8) -> (140, 150) -->
        <polygon points="100,70 300,70 300,290 260,270 140,150" fill="#fbcfe8" opacity="0.75" stroke="#db2777" stroke-width="2.5" />

        <!-- Trục tọa độ -->
        <line x1="40" y1="310" x2="430" y2="310" stroke="#0f172a" stroke-width="2" marker-end="url(#arr21)" />
        <line x1="60" y1="340" x2="60" y2="30" stroke="#0f172a" stroke-width="2" marker-end="url(#arr21)" />

        <text x="415" y="300" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">x (gói X)</text>
        <text x="72" y="45" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">y (gói Y)</text>
        <text x="40" y="328" font-size="18" font-weight="bold" font-style="italic" fill="#0f172a">O</text>

        <!-- 5 Đỉnh của ngũ giác -->
        <!-- Đỉnh D(10; 2) - Tối ưu nhất -->
        <circle cx="260" cy="270" r="6" fill="#e11d48" />
        <text x="240" y="260" font-size="15" font-weight="bold" fill="#e11d48">D(10; 2) [Min 250k]</text>

        <circle cx="100" cy="70" r="5" fill="#db2777" />
        <text x="80" y="60" font-size="14" font-weight="bold" fill="#db2777">A(2; 12)</text>

        <circle cx="300" cy="70" r="5" fill="#db2777" />
        <text x="310" y="65" font-size="14" font-weight="bold" fill="#db2777">B(12; 12)</text>

        <circle cx="300" cy="290" r="5" fill="#db2777" />
        <text x="310" y="295" font-size="14" font-weight="bold" fill="#db2777">C(12; 1)</text>

        <circle cx="140" cy="150" r="5" fill="#db2777" />
        <text x="148" y="155" font-size="14" font-weight="bold" fill="#db2777">E(4; 8)</text>

        <!-- Điểm thử (10; 8) nằm trong miền ngũ giác -->
        <circle cx="260" cy="150" r="5" fill="#059669" />
        <text x="270" y="150" font-size="14" font-weight="bold" fill="#059669">(10; 8) ∈ Ngũ giác</text>
      </svg>
    `;
  }
};

// ==========================================
// 3. TRẠNG THÁI QUIZ & KHỞI TẠO (QUIZ STATE)
// ==========================================
const Quiz30pState = {
  currentQuestionIndex: 0,
  // Mỗi câu là 1 object: { a: boolean | null, b: boolean | null, c: boolean | null, d: boolean | null }
  userAnswers: QUIZ_30P_QUESTIONS.map(() => ({ a: null, b: null, c: null, d: null })),
  flaggedQuestions: new Set(),
  timeRemainingSeconds: 30 * 60, // 30 phút
  totalSeconds: 30 * 60,
  isSubmitted: false,
  timerInterval: null,
  studentName: "Học sinh Toán 10",
  studentClass: "10A"
};

// ==========================================
// 4. LẮNG NGHE SỰ KIỆN GIAO DIỆN KHI TẢI TRANG
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initLucideIcons();
  loadSavedPreferences();
  bindQuizEvents();
  renderNavGrid();
  renderQuestion(Quiz30pState.currentQuestionIndex);
  startTimer();
  updateProgressStats();
});

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function loadSavedPreferences() {
  const savedTheme = localStorage.getItem("cdn01_math_theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  const savedFontSize = localStorage.getItem("cdn01_font_size") || "normal";
  document.documentElement.setAttribute("data-font-size", savedFontSize);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("themeIcon");
  if (!icon) return;
  if (theme === "dark") {
    icon.setAttribute("data-lucide", "sun");
  } else {
    icon.setAttribute("data-lucide", "moon");
  }
  initLucideIcons();
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("cdn01_math_theme", next);
  updateThemeIcon(next);
}

function setFontSize(size) {
  document.documentElement.setAttribute("data-font-size", size);
  localStorage.setItem("cdn01_font_size", size);
  document.querySelectorAll(".font-zoom-btn").forEach(btn => btn.classList.remove("active"));
  if (size === "normal") document.getElementById("fontResetBtn")?.classList.add("active");
  if (size === "large") document.getElementById("fontIncreaseBtn")?.classList.add("active");
}

function bindQuizEvents() {
  // Theme & Font
  document.getElementById("themeToggleBtn")?.addEventListener("click", toggleTheme);
  document.getElementById("fontDecreaseBtn")?.addEventListener("click", () => setFontSize("normal"));
  document.getElementById("fontResetBtn")?.addEventListener("click", () => setFontSize("normal"));
  document.getElementById("fontIncreaseBtn")?.addEventListener("click", () => setFontSize("large"));

  // Thông tin thí sinh
  const nameInput = document.getElementById("studentNameInput");
  nameInput?.addEventListener("input", (e) => {
    Quiz30pState.studentName = e.target.value.trim() || "Học sinh Toán 10";
  });

  const classInput = document.getElementById("studentClassInput");
  classInput?.addEventListener("input", (e) => {
    Quiz30pState.studentClass = e.target.value.trim() || "10A";
  });

  // Điều hướng câu hỏi
  document.getElementById("prevQuestionBtn")?.addEventListener("click", () => {
    if (Quiz30pState.currentQuestionIndex > 0) {
      goToQuestion(Quiz30pState.currentQuestionIndex - 1);
    }
  });

  document.getElementById("nextQuestionBtn")?.addEventListener("click", () => {
    if (Quiz30pState.currentQuestionIndex < QUIZ_30P_QUESTIONS.length - 1) {
      goToQuestion(Quiz30pState.currentQuestionIndex + 1);
    }
  });

  // Đặt cờ
  document.getElementById("flagBtn")?.addEventListener("click", toggleFlagCurrentQuestion);

  // Xóa lựa chọn câu hiện tại
  document.getElementById("clearAnswerBtn")?.addEventListener("click", clearCurrentQuestionAnswers);

  // Nộp bài
  document.querySelectorAll(".submit-action-btn").forEach(btn => {
    btn.addEventListener("click", openSubmitConfirmModal);
  });

  document.getElementById("confirmSubmitBtn")?.addEventListener("click", () => {
    closeModal("submitConfirmModal");
    submitQuiz();
  });

  document.getElementById("cancelSubmitBtn")?.addEventListener("click", () => {
    closeModal("submitConfirmModal");
  });

  // Modal kết quả
  document.getElementById("closeResultModalBtn")?.addEventListener("click", () => {
    closeModal("resultModal");
  });

  document.getElementById("viewExplanationBtn")?.addEventListener("click", () => {
    closeModal("resultModal");
    scrollToDetailedReview();
  });

  // In / Xuất PDF
  document.getElementById("headerPrintBtn")?.addEventListener("click", openPrintMenu);
  document.getElementById("printExamOnlyBtn")?.addEventListener("click", () => printExam(false));
  document.getElementById("printWithSolutionBtn")?.addEventListener("click", () => printExam(true));
}

// ==========================================
// 5. HIỂN THỊ CÂU HỎI VÀ LỰA CHỌN ĐÚNG / SAI
// ==========================================
function goToQuestion(index) {
  Quiz30pState.currentQuestionIndex = index;
  renderQuestion(index);
  renderNavGrid();
}

function renderQuestion(index) {
  const q = QUIZ_30P_QUESTIONS[index];
  if (!q) return;

  // Header câu hỏi
  const levelEl = document.getElementById("questionLevelText");
  if (levelEl) levelEl.textContent = `Câu ${index + 1} (Câu gốc ${q.originalNum}) • Mức độ: ${q.level} • ${q.topic}`;

  // Cập nhật nút Đặt cờ
  const isFlagged = Quiz30pState.flaggedQuestions.has(index);
  const flagBtn = document.getElementById("flagBtn");
  const flagText = document.getElementById("flagText");
  if (flagBtn) {
    if (isFlagged) {
      flagBtn.classList.add("flagged");
      if (flagText) flagText.textContent = "Bỏ cờ";
    } else {
      flagBtn.classList.remove("flagged");
      if (flagText) flagText.textContent = "Đặt cờ";
    }
  }

  // Nội dung đề bài
  const promptEl = document.getElementById("questionPrompt");
  if (promptEl) {
    promptEl.innerHTML = q.prompt;
  }

  // Hình ảnh minh họa (nếu có)
  const imgWrapper = document.getElementById("questionImageWrapper");
  const qImg = document.getElementById("questionImg");
  if (imgWrapper && qImg) {
    if (q.image) {
      qImg.src = q.image;
      imgWrapper.style.display = "block";
    } else {
      imgWrapper.style.display = "none";
    }
  }

  // Đồ thị SVG (nếu có)
  const diagramWrapper = document.getElementById("diagramWrapper");
  const svgContainer = document.getElementById("svgContainer");
  if (diagramWrapper && svgContainer) {
    if (q.svgType && QUIZ_30P_SVGS[q.svgType]) {
      svgContainer.innerHTML = QUIZ_30P_SVGS[q.svgType]();
      diagramWrapper.style.display = "block";
    } else {
      diagramWrapper.style.display = "none";
    }
  }

  // Danh sách các mệnh đề a, b, c, d
  const tfContainer = document.getElementById("tfStatementsContainer");
  if (tfContainer) {
    const currentAns = Quiz30pState.userAnswers[index];
    let html = "";

    q.statements.forEach((st) => {
      const selectedVal = currentAns[st.id]; // true, false, hoặc null
      const isTrueActive = selectedVal === true ? "active" : "";
      const isFalseActive = selectedVal === false ? "active" : "";

      html += `
        <div class="tf-statement-row" data-statement-id="${st.id}">
          <div class="tf-statement-content">
            <span class="statement-label">${st.label})</span>
            <div class="statement-math-text">${st.text}</div>
          </div>
          <div class="tf-btn-group">
            <button type="button" class="tf-btn tf-btn-true ${isTrueActive}" onclick="selectStatementOption(${index}, '${st.id}', true)">
              <i data-lucide="check" class="tf-icon"></i>
              <span>ĐÚNG</span>
            </button>
            <button type="button" class="tf-btn tf-btn-false ${isFalseActive}" onclick="selectStatementOption(${index}, '${st.id}', false)">
              <i data-lucide="x" class="tf-icon"></i>
              <span>SAI</span>
            </button>
          </div>
        </div>
      `;
    });

    tfContainer.innerHTML = html;
  }

  // Cập nhật số chỉ câu hỏi
  const indicator = document.getElementById("questionIndexIndicator");
  if (indicator) {
    indicator.textContent = `Câu ${index + 1} / ${QUIZ_30P_QUESTIONS.length}`;
  }

  // Cập nhật trạng thái nút Prev/Next
  const prevBtn = document.getElementById("prevQuestionBtn");
  const nextBtn = document.getElementById("nextQuestionBtn");
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.disabled = index === QUIZ_30P_QUESTIONS.length - 1;

  // Render lại công thức toán bằng KaTeX
  renderKaTeXMath();
  initLucideIcons();
}

function selectStatementOption(qIndex, statementId, value) {
  if (Quiz30pState.isSubmitted) return;

  const currentVal = Quiz30pState.userAnswers[qIndex][statementId];
  if (currentVal === value) {
    // Nhấp lại vào cùng lựa chọn -> bỏ chọn
    Quiz30pState.userAnswers[qIndex][statementId] = null;
  } else {
    Quiz30pState.userAnswers[qIndex][statementId] = value;
  }

  renderQuestion(qIndex);
  renderNavGrid();
  updateProgressStats();
}

function toggleFlagCurrentQuestion() {
  const idx = Quiz30pState.currentQuestionIndex;
  if (Quiz30pState.flaggedQuestions.has(idx)) {
    Quiz30pState.flaggedQuestions.delete(idx);
  } else {
    Quiz30pState.flaggedQuestions.add(idx);
  }
  renderQuestion(idx);
  renderNavGrid();
  updateProgressStats();
}

function clearCurrentQuestionAnswers() {
  if (Quiz30pState.isSubmitted) return;
  const idx = Quiz30pState.currentQuestionIndex;
  Quiz30pState.userAnswers[idx] = { a: null, b: null, c: null, d: null };
  renderQuestion(idx);
  renderNavGrid();
  updateProgressStats();
}

// ==========================================
// 6. BẢNG ĐIỀU HƯỚNG CÂU HỎI (NAV GRID)
// ==========================================
function renderNavGrid() {
  const navGrid = document.getElementById("navGrid");
  if (!navGrid) return;

  let html = "";
  QUIZ_30P_QUESTIONS.forEach((q, idx) => {
    const isCurrent = idx === Quiz30pState.currentQuestionIndex;
    const isFlagged = Quiz30pState.flaggedQuestions.has(idx);
    const ans = Quiz30pState.userAnswers[idx];

    // Đếm số ý đã làm (trên 4 ý)
    let answeredParts = 0;
    if (ans.a !== null) answeredParts++;
    if (ans.b !== null) answeredParts++;
    if (ans.c !== null) answeredParts++;
    if (ans.d !== null) answeredParts++;

    let statusClass = "unanswered";
    if (answeredParts === 4) {
      statusClass = "fully-answered";
    } else if (answeredParts > 0) {
      statusClass = "partially-answered";
    }

    if (isFlagged) {
      statusClass += " flagged";
    }
    if (isCurrent) {
      statusClass += " current";
    }

    html += `
      <button class="nav-cell ${statusClass}" onclick="goToQuestion(${idx})" title="Câu ${idx + 1} (Gốc: ${q.originalNum}) - Đã làm ${answeredParts}/4 ý">
        <span class="cell-num">Câu ${idx + 1}</span>
        <span class="cell-parts">${answeredParts}/4</span>
        ${isFlagged ? '<i data-lucide="flag" class="cell-flag-icon"></i>' : ''}
      </button>
    `;
  });

  navGrid.innerHTML = html;
  initLucideIcons();
}

function updateProgressStats() {
  let fullyCount = 0;
  let totalPartsAnswered = 0;
  const totalParts = QUIZ_30P_QUESTIONS.length * 4; // 20 ý

  Quiz30pState.userAnswers.forEach(ans => {
    let p = 0;
    if (ans.a !== null) { p++; totalPartsAnswered++; }
    if (ans.b !== null) { p++; totalPartsAnswered++; }
    if (ans.c !== null) { p++; totalPartsAnswered++; }
    if (ans.d !== null) { p++; totalPartsAnswered++; }
    if (p === 4) fullyCount++;
  });

  const answeredCountEl = document.getElementById("answeredCount");
  if (answeredCountEl) {
    answeredCountEl.textContent = `${fullyCount}/${QUIZ_30P_QUESTIONS.length} (${totalPartsAnswered}/${totalParts} ý)`;
  }

  const flaggedCountEl = document.getElementById("flaggedCount");
  if (flaggedCountEl) {
    flaggedCountEl.textContent = Quiz30pState.flaggedQuestions.size;
  }
}

// ==========================================
// 7. ĐỒNG HỒ ĐẾM NGƯỢC 30 PHÚT (TIMER)
// ==========================================
function startTimer() {
  updateTimerDisplay();
  Quiz30pState.timerInterval = setInterval(() => {
    if (Quiz30pState.timeRemainingSeconds > 0) {
      Quiz30pState.timeRemainingSeconds--;
      updateTimerDisplay();

      // Cảnh báo gần hết giờ (< 5 phút)
      if (Quiz30pState.timeRemainingSeconds <= 300) {
        document.getElementById("timerContainer")?.classList.add("warning");
      }
      if (Quiz30pState.timeRemainingSeconds <= 60) {
        document.getElementById("timerContainer")?.classList.add("danger");
      }
    } else {
      // Hết 30 phút -> tự động nộp bài
      clearInterval(Quiz30pState.timerInterval);
      alert("Đã hết 30 phút làm bài! Hệ thống tự động thu bài và chấm điểm.");
      submitQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(Quiz30pState.timeRemainingSeconds / 60);
  const secs = Quiz30pState.timeRemainingSeconds % 60;
  const displayStr = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  const timerEl = document.getElementById("timer");
  if (timerEl) timerEl.textContent = displayStr;

  // Cập nhật SVG Progress Ring
  const ring = document.getElementById("timerRing");
  if (ring) {
    const fraction = Quiz30pState.timeRemainingSeconds / Quiz30pState.totalSeconds;
    const dashOffset = 100 * (1 - fraction);
    ring.style.strokeDashoffset = dashOffset;
  }
}

// ==========================================
// 8. CHẤM ĐIỂM CHUẨN ĐÚNG / SAI GDPT 2018
// ==========================================
/**
 * Quy định thang điểm 10 phần trắc nghiệm Đúng / Sai (5 câu):
 * Mỗi câu tối đa 2.0 điểm:
 * - Đúng 1 ý: 0.2 điểm
 * - Đúng 2 ý: 0.5 điểm
 * - Đúng 3 ý: 1.0 điểm
 * - Đúng 4 ý: 2.0 điểm
 * Tổng 5 câu: 10.0 điểm
 */
function calculateScore() {
  let totalScore = 0;
  let totalCorrectStatements = 0;
  let perfectQuestionsCount = 0;
  const questionDetails = [];

  QUIZ_30P_QUESTIONS.forEach((q, qIdx) => {
    const userAns = Quiz30pState.userAnswers[qIdx];
    let correctCountThisQ = 0;
    const statementsResult = {};

    q.statements.forEach((st) => {
      const userChoice = userAns[st.id];
      const isCorrect = userChoice === st.correct;
      if (isCorrect) {
        correctCountThisQ++;
        totalCorrectStatements++;
      }
      statementsResult[st.id] = {
        userChoice: userChoice,
        correctChoice: st.correct,
        isCorrect: isCorrect
      };
    });

    // Thang điểm Bộ GD&ĐT quy đổi cho 1 câu tối đa 2.0 điểm:
    let qScore = 0;
    if (correctCountThisQ === 1) qScore = 0.2;
    else if (correctCountThisQ === 2) qScore = 0.5;
    else if (correctCountThisQ === 3) qScore = 1.0;
    else if (correctCountThisQ === 4) {
      qScore = 2.0;
      perfectQuestionsCount++;
    }

    totalScore += qScore;
    questionDetails.push({
      questionIndex: qIdx,
      originalNum: q.originalNum,
      correctCount: correctCountThisQ,
      score: qScore,
      statementsResult: statementsResult
    });
  });

  return {
    totalScore: Math.round(totalScore * 10) / 10,
    totalCorrectStatements: totalCorrectStatements,
    perfectQuestionsCount: perfectQuestionsCount,
    questionDetails: questionDetails
  };
}

function openSubmitConfirmModal() {
  if (Quiz30pState.isSubmitted) return;

  let unansweredStatements = 0;
  Quiz30pState.userAnswers.forEach(ans => {
    if (ans.a === null) unansweredStatements++;
    if (ans.b === null) unansweredStatements++;
    if (ans.c === null) unansweredStatements++;
    if (ans.d === null) unansweredStatements++;
  });

  const modalPrompt = document.getElementById("submitConfirmText");
  if (modalPrompt) {
    if (unansweredStatements > 0) {
      modalPrompt.innerHTML = `Bạn vẫn còn <strong>${unansweredStatements} ý</strong> chưa lựa chọn Đúng / Sai.<br>Bạn có chắc chắn muốn nộp bài thi ngay bây giờ?`;
    } else {
      modalPrompt.innerHTML = `Bạn đã hoàn thành đầy đủ cả 5 câu (20 ý).<br>Bạn có chắc chắn muốn nộp bài để chấm điểm?`;
    }
  }

  openModal("submitConfirmModal");
}

function submitQuiz() {
  if (Quiz30pState.isSubmitted) return;
  Quiz30pState.isSubmitted = true;
  clearInterval(Quiz30pState.timerInterval);

  const results = calculateScore();
  showResultsModal(results);
  renderDetailedReview(results);

  // Ẩn nút Nộp bài, đổi thành Xem kết quả
  document.querySelectorAll(".submit-action-btn").forEach(btn => {
    btn.innerHTML = `<i data-lucide="award" class="btn-icon"></i> <span>Xem Kết Quả</span>`;
    btn.onclick = () => openModal("resultModal");
  });

  initLucideIcons();
}

function showResultsModal(results) {
  const modal = document.getElementById("resultModal");
  if (!modal) return;

  const scoreEl = document.getElementById("modalScoreValue");
  if (scoreEl) scoreEl.textContent = results.totalScore.toFixed(1);

  const scoreDisplayEl = document.getElementById("modalScoreDisplay");
  if (scoreDisplayEl) scoreDisplayEl.textContent = results.totalScore.toFixed(1);

  const correctPartsEl = document.getElementById("modalCorrectParts");
  if (correctPartsEl) correctPartsEl.textContent = `${results.totalCorrectStatements}/20 ý`;

  const perfectQEl = document.getElementById("modalPerfectQuestions");
  if (perfectQEl) perfectQEl.textContent = `${results.perfectQuestionsCount}/5 câu`;

  // Xếp loại học lực
  const rankEl = document.getElementById("modalRankBadge");
  const commentEl = document.getElementById("modalRankComment");
  if (rankEl && commentEl) {
    const s = results.totalScore;
    if (s >= 9.0) {
      rankEl.className = "rank-badge rank-excellent";
      rankEl.textContent = "Xuất sắc (A+)";
      commentEl.textContent = "Chúc mừng bạn! Khả năng tư duy toán học và giải quyết bài toán tối ưu thực tế cực kỳ xuất sắc!";
    } else if (s >= 8.0) {
      rankEl.className = "rank-badge rank-good";
      rankEl.textContent = "Giỏi (A)";
      commentEl.textContent = "Rất tốt! Bạn nắm vững kiến thức hệ bất phương trình và cách xác định miền nghiệm.";
    } else if (s >= 6.5) {
      rankEl.className = "rank-badge rank-fair";
      rankEl.textContent = "Khá (B)";
      commentEl.textContent = "Khá tốt! Bạn hãy chú ý thêm các bước lập bảng tọa độ đỉnh để tìm giá trị tối ưu chính xác hơn nhé.";
    } else if (s >= 5.0) {
      rankEl.className = "rank-badge rank-average";
      rankEl.textContent = "Trung bình (C)";
      commentEl.textContent = "Cần cố gắng thêm! Hãy xem kỹ phần lời giải chi tiết bên dưới để hiểu rõ từng bài toán.";
    } else {
      rankEl.className = "rank-badge rank-poor";
      rankEl.textContent = "Cần rèn luyện (D)";
      commentEl.textContent = "Hãy ôn lại quy tắc xác định miền nghiệm và cách tính giá trị biểu thức mục tiêu F(x, y).";
    }
  }

  const timeUsedSeconds = Quiz30pState.totalSeconds - Quiz30pState.timeRemainingSeconds;
  const timeUsedMins = Math.floor(timeUsedSeconds / 60);
  const timeUsedSecs = timeUsedSeconds % 60;
  const timeUsedEl = document.getElementById("modalTimeUsed");
  if (timeUsedEl) timeUsedEl.textContent = `${timeUsedMins} phút ${timeUsedSecs} giây`;

  openModal("resultModal");
}

function scrollToDetailedReview() {
  const sec = document.getElementById("resultsSection");
  if (sec) {
    sec.style.display = "block";
    sec.scrollIntoView({ behavior: "smooth" });
  }
}

// ==========================================
// 9. HIỂN THỊ LỜI GIẢI CHI TIẾT & ĐỐI CHIẾU KẾT QUẢ
// ==========================================
function renderDetailedReview(results) {
  const container = document.getElementById("detailedReviewContainer");
  if (!container) return;

  let html = "";
  QUIZ_30P_QUESTIONS.forEach((q, idx) => {
    const qRes = results.questionDetails[idx];
    const isPerfect = qRes.correctCount === 4;

    html += `
      <div class="review-card ${isPerfect ? 'review-perfect' : ''}">
        <div class="review-card-header">
          <div class="review-title-group">
            <span class="review-q-badge">Câu ${idx + 1} (Gốc: Câu ${q.originalNum})</span>
            <span class="review-level-tag">${q.level} • ${q.topic}</span>
          </div>
          <div class="review-score-badge">
            <i data-lucide="award"></i>
            <span>Đạt <strong>${qRes.score.toFixed(1)}/2.0</strong> điểm (${qRes.correctCount}/4 ý đúng)</span>
          </div>
        </div>

        <div class="review-prompt">${q.prompt}</div>

        ${q.image ? `<div class="review-image"><img src="${q.image}" alt="Minh họa câu ${idx + 1}" style="max-height:220px; border-radius:8px;"></div>` : ''}

        ${q.svgType && QUIZ_30P_SVGS[q.svgType] ? `
          <div class="review-diagram-box">
            <div class="diagram-caption"><i data-lucide="image"></i> Đồ thị minh họa miền nghiệm tọa độ Oxy:</div>
            <div class="svg-canvas-container">${QUIZ_30P_SVGS[q.svgType]()}</div>
          </div>
        ` : ''}

        <div class="review-statements-table">
          <table class="statements-comparison-table">
            <thead>
              <tr>
                <th style="width: 50px;">Ý</th>
                <th>Nội dung mệnh đề</th>
                <th style="width: 110px; text-align:center;">Lựa chọn của bạn</th>
                <th style="width: 100px; text-align:center;">Đáp án chuẩn</th>
                <th style="width: 90px; text-align:center;">Kết quả</th>
              </tr>
            </thead>
            <tbody>
              ${q.statements.map(st => {
                const res = qRes.statementsResult[st.id];
                const userChoiceText = res.userChoice === true ? "ĐÚNG" : (res.userChoice === false ? "SAI" : "Chưa làm");
                const correctChoiceText = res.correctChoice === true ? "ĐÚNG" : "SAI";
                const rowClass = res.isCorrect ? "st-correct" : "st-incorrect";

                return `
                  <tr class="${rowClass}">
                    <td class="st-col-label"><strong>${st.label})</strong></td>
                    <td class="st-col-text">
                      <div>${st.text}</div>
                      <div class="st-reason-box">${st.reason}</div>
                    </td>
                    <td class="st-col-user" style="text-align:center;">
                      <span class="user-choice-pill ${res.userChoice === true ? 'pill-true' : (res.userChoice === false ? 'pill-false' : 'pill-empty')}">
                        ${userChoiceText}
                      </span>
                    </td>
                    <td class="st-col-correct" style="text-align:center;">
                      <span class="correct-choice-pill ${res.correctChoice === true ? 'pill-true' : 'pill-false'}">
                        ${correctChoiceText}
                      </span>
                    </td>
                    <td class="st-col-icon" style="text-align:center;">
                      ${res.isCorrect ? '<span class="status-icon icon-pass"><i data-lucide="check-circle-2"></i> +Đúng</span>' : '<span class="status-icon icon-fail"><i data-lucide="x-circle"></i> Sai</span>'}
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>

        <div class="review-explanation-section">
          ${q.explanation}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  document.getElementById("resultsSection").style.display = "block";
  renderKaTeXMath();
  initLucideIcons();
}

// ==========================================
// 10. MODAL UTILITIES & IN ẤN (PRINT MODE)
// ==========================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("show");
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("show");
  }
}

function openPrintMenu() {
  openModal("printModal");
}

function printExam(includeSolution) {
  closeModal("printModal");
  if (includeSolution) {
    document.body.classList.add("print-with-solutions");
    document.body.classList.remove("print-exam-only");
  } else {
    document.body.classList.add("print-exam-only");
    document.body.classList.remove("print-with-solutions");
  }

  // Tạm dừng timer khi in
  window.print();
}

function renderKaTeXMath() {
  if (window.renderMathInElement) {
    window.renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false
    });
  }
}
