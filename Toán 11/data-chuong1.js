/**
 * TOÁN 11 - CHƯƠNG 1: HÀM SỐ VÀ PHƯƠNG TRÌNH LƯỢNG GIÁC
 * TỔNG HỢP TOÀN BỘ 228 CÂU HỎI TRỌN BỘ 5 BÀI HỌC (GDPT 2018)
 * - Bài 1: Góc lượng giác (35 câu: 21 TN, 8 Đ/S, 6 TLN)
 * - Bài 2: Giá trị lượng giác của một góc lượng giác (54 câu: 22 TN, 12 Đ/S, 20 TLN)
 * - Bài 3: Công thức lượng giác (29 câu: 12 TN, 7 Đ/S, 10 TLN)
 * - Bài 4: Hàm số lượng giác (50 câu: 24 TN, 11 Đ/S, 15 TLN)
 * - Bài 5: Phương trình lượng giác (60 câu: 37 TN, 10 Đ/S, 13 TLN)
 * Đầy đủ đáp án, lời giải chi tiết và hình vẽ trích xuất gốc.
 * Tác giả: ThS. Nguyễn Văn Sang - Khoa Cơ bản - Trường Cao đẳng Nghề số 1 - BQP.
 */

const CHUONG1_FULL_DATA = {
  "b1": [
    {
      "id": 1,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Góc có số đo  \\frac { \\pi } { 24 }  đổi sang độ bằng",
      "explanation": "Ta có:  \\frac { \\pi } { 24 }=\\frac { 180^\\circ } { 24 }=7^\\circ30'.",
      "diagram": null,
      "options": [
        "A.  7^\\circ",
        "B.  7^\\circ30'",
        "C.  8^\\circ",
        "D.  8^\\circ30'"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 2,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một đường tròn có đường kính là  50\\left ( { { c }{ m } } \\right )  . Độ dài của cung tròn trên đường tròn có số đo là  \\frac { \\pi } { 4 }  bằng (làm tròn đến hàng đơn vị):",
      "explanation": "Độ dài của cung tròn  l=\\alpha.R=\\frac { \\pi } { 4 }.25=\\frac { 25 } { 4 }\\pi\\approx 20\\left ( { { c }{ m } } \\right )  .",
      "diagram": null,
      "options": [
        "A.  40\\left ( { { c }{ m } } \\right )",
        "B.  39\\left ( { { c }{ m } } \\right )",
        "C.  19\\left ( { { c }{ m } } \\right )",
        "D.  20\\left ( { { c }{ m } } \\right )"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 3,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Số đo theo đơn vị rađian của góc  315^\\circ  là",
      "explanation": "Ta có  315^\\circ=\\frac { 315 } { 180 }.\\pi=\\frac { 7\\pi } { 4 }  (rađian).",
      "diagram": null,
      "options": [
        "A.  \\frac { 7\\pi } { 2 }",
        "B.  \\frac { 7\\pi } { 4 }",
        "C.  \\frac { 2\\pi } { 7 }",
        "D.  \\frac { 4\\pi } { 7 }"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 4,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cung tròn có số đo là  \\frac { 5\\pi } { 4 }  . Hãy chọn số đo độ của cung tròn đó trong các cung tròn sau đây.",
      "explanation": "Ta có:  a^\\circ=\\frac { \\alpha } { \\pi }.180^\\circ=\\frac { \\frac { 5\\pi } { 4 } } { \\pi }.180^\\circ=225^\\circ  .",
      "diagram": null,
      "options": [
        "A.  5^\\circ",
        "B.  15^\\circ",
        "C.  172^\\circ",
        "D.  225^\\circ"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 5,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cung tròn có số đo là  \\pi  . Hãy chọn số đo độ của cung tròn đó trong các cung tròn sau đây.",
      "explanation": "Ta có:  a^\\circ=\\frac { \\alpha } { \\pi }.180^\\circ=180^\\circ  .",
      "diagram": null,
      "options": [
        "A.  30^\\circ",
        "B.  45^\\circ",
        "C.  90^\\circ",
        "D.  180^\\circ"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 6,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Góc có số đo  \\frac { 2\\pi } { 5 }  đổi sang độ là:",
      "explanation": "Ta có:  \\frac { 2\\pi } { 5 }=\\frac { 2.180 ^ { 0 } } { 5 }=72 ^ { 0 } .",
      "diagram": null,
      "options": [
        "A.  135 ^ { 0 } .",
        "B.  72 ^ { 0 } .",
        "C.  270 ^ { 0 } .",
        "D.  240 ^ { 0 } ."
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 7,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Góc có số đo  108 ^ { 0 }  đổi ra rađian là:",
      "explanation": "Ta có:  108 ^ { 0 } =\\frac { 108 ^ { 0 } .\\pi } { 180 ^ { 0 } }=\\frac { 3\\pi } { 5 }.",
      "diagram": null,
      "options": [
        "A.  \\frac { 3\\pi } { 5 }",
        "B.  \\frac { \\pi } { 10 }",
        "C.  \\frac { 3\\pi } { 2 }",
        "D.  \\frac { \\pi } { 4 }"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 8,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một bánh xe có  72  răng. Số đo góc mà bánh xe đã quay được khi di chuyển  10  răng là:",
      "explanation": "+ 1 bánh răng tương ứng với  \\frac { 360 ^ { 0 } } { 72 }=5 ^ { 0 }  \\Rightarrow 10  bánh răng là  50 ^ { 0 }  .",
      "diagram": null,
      "options": [
        "A.  60 ^ { 0 }",
        "B.  30 ^ { 0 }",
        "C.  40 ^ { 0 }",
        "D.  50 ^ { 0 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 9,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trên đường tròn với điểm gốc là  A  . Điểm  M  thuộc đường tròn sao cho cung lượng giác  AM  có số đo  60^\\circ  . Gọi  N  là điểm đối xứng với điểm  M  qua trục  Oy  , số đo cung  AN  là",
      "explanation": "Ta có:  \\widehat { AON }=60^\\circ  ,  \\widehat { MON }=60^\\circ  nên  \\widehat { AOM }=120^\\circ  . Khi đó số đo cung  AN  bằng  120^\\circ  .",
      "diagram": null,
      "options": [
        "A.  -120^\\circ  hoặc  240^\\circ",
        "B.  120^\\circ+k360^\\circ,k\\in \\mathbb{Z}",
        "C.  120^\\circ",
        "D.  -240^\\circ"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 10,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trên đường tròn bán kính  r=15  , độ dài của cung có số đo  50 ^ { 0 }  là:",
      "explanation": "l=\\frac { \\pi.r.n ^ { 0 } } { 180 ^ { 0 } }=\\frac { \\pi15.50 } { 180 }  .",
      "diagram": null,
      "options": [
        "A.  l=15.\\frac { 180 } { \\pi }",
        "B.  l=\\frac { 15\\pi } { 180 }.",
        "C.  l=15.\\frac { 180 } { \\pi }.50",
        "D.  l=750"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 11,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trên đường tròn bán kính  r=5  , độ dài của cung đo  \\frac { \\pi } { 8 }  là:",
      "explanation": "Độ dài cung AB có số đo cung AB bằng n độ:  l=r.n=5.\\frac { \\pi } { 8 }  .",
      "diagram": null,
      "options": [
        "A.  l=\\frac { \\pi } { 8 }",
        "B.  l=\\frac { 3\\pi } { 8 }",
        "C.  l=\\frac { 5\\pi } { 8 }",
        "D.  l=\\frac { 2\\pi } { 3 }"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 12,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Số đo của cung tròn có độ dài  75\\left ( { { c }{ m } } \\right )  trên đường tròn có đường kính  30\\left ( { { c }{ m } } \\right )  (lấy  \\pi\\approx 3,14  và làm tròn đến phút) có dạng  a ^ { 0 } b'\\left ( { a,b\\in \\mathbb{Z} } \\right )  . Giá trị của biểu thức  P=2a-b  bằng:",
      "explanation": "Độ dài của cung tròn  l=\\frac { \\alpha } { 180 }.\\pi.R\\Rightarrow \\alpha=\\frac { l.180 } { \\pi.R }=\\frac { 75.180 } { 3,14.15 }\\approx 286 ^ { 0 } 37'  .\nVậy  P=2a-b=2.286-37=535  .",
      "diagram": null,
      "options": [
        "A.  533",
        "B.  535",
        "C.  267",
        "D.  266"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 13,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trên hình vẽ hai điểm  M,N  biểu diễn các cung có số đo là:",
      "explanation": "",
      "diagram": "assets/diagrams/b1_q13.png",
      "options": [
        "A.  x=\\frac { \\pi } { 3 }+2k\\pi",
        "B.  x=-\\frac { \\pi } { 3 }+k\\pi",
        "C.  x=\\frac { \\pi } { 3 }+k\\pi",
        "D.  x=\\frac { \\pi } { 3 }+k\\frac { \\pi } { 2 }."
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 14,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trên đường tròn lượng giác gốc A, cho điểm M xác định bởi sđ  \\mathop { AM } =\\frac { \\pi } { 3 }  . Gọi  M_{ 1 }  là điểm đối xứng của M qua trục  Ox  . Tìm số đo của cung lượng giác  \\mathop { AM_{ 1 } } .",
      "explanation": "Vì  M_{ 1 }  là điểm đối xứng của M qua trục  Ox  nên có 1 góc lượng giác  \\left ( { OA,OM_{ 1 } } \\right )=-\\frac { \\pi } { 3 } \n \\Rightarrow  sđ  \\mathop { AM_{ 1 } } =\\frac { -\\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}  .",
      "diagram": null,
      "options": [
        "A. sđ  \\mathop { AM_{ 1 } } =\\frac { -5\\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}",
        "B. sđ  \\mathop { AM_{ 1 } } =\\frac { \\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}",
        "C. sđ  \\mathop { AM_{ 1 } } =\\frac { -\\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}",
        "D. sđ  \\mathop { AM_{ 1 } } =\\frac { -\\pi } { 3 }+k\\pi,k\\in \\mathbb{Z}"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 15,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Điểm  M  trong hình vẽ sau là điểm biểu diễn của góc  \\alpha  . Số đo của  \\alpha  là",
      "explanation": "Số đo của  \\alpha  là  \\alpha=-\\frac { 5\\pi } { 6 }+k2\\pi,k\\in \\mathbb{Z}  .",
      "diagram": "assets/diagrams/b1_q15.png",
      "options": [
        "A.  \\alpha=-\\frac { \\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}",
        "B.  \\alpha=-\\frac { 5\\pi } { 6 }+k\\pi,k\\in \\mathbb{Z}",
        "C.  \\alpha=\\frac { \\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}",
        "D.  \\alpha=-\\frac { 5\\pi } { 6 }+k2\\pi,k\\in \\mathbb{Z}"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 16,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Khi biểu diễn cung lượng giác trên đường tròn lượng giác, khẳng định nào dưới đây sai?",
      "explanation": "Khẳng định B sai vì điểm biểu diễn cung  \\alpha  và cung  -\\alpha  đối xứng nhau qua trục hoành.",
      "diagram": null,
      "options": [
        "A. Điểm biểu diễn cung  \\alpha  và cung  \\pi-\\alpha  đối xứng nhau qua trục tung",
        "B. Điểm biểu diễn cung  \\alpha  và cung  -\\alpha  đối xứng nhau qua gốc tọa độ",
        "C. Mỗi cung lượng giác được biểu diễn bởi một điểm duy nhất",
        "D. Cung  \\alpha  và cung  \\alpha+k2\\pi\\,\\left ( { k\\in \\mathbb{Z} } \\right )  có cùng điểm biểu diễn"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 17,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một đồng hồ treo tường, kim giờ dài  10,57\\text{cm}  và kim phút dài  13,34\\text{cm}  .Trong 30 phút mũi kim giờ vạch lên cung tròn có độ dài là",
      "explanation": "6 giờ thì kim giờ vạch lên 1 cung có số đo nên 30 phút kim giờ vạch lên 1 cung có số đo là  \\frac { 1 } { 12 }\\pi  , suy ra độ dài cung tròn mà nó vạch lên là  l=R\\alpha=10,57×\\frac { 3,14 } { 12 }\\approx 2,77",
      "diagram": null,
      "options": [
        "A.  2,78\\text{cm}",
        "B.  2,77\\text{cm}",
        "C.  2,76\\text{cm}",
        "D.  2,8\\text{cm}"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 18,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong 20 giây bánh xe của xe gắn máy quay được 60 vòng.Tính độ dài quãng đường xe gắn máy đã đi được trong vòng 3 phút,biết rằng bán kính bánh xe gắn máy bằng  6,5\\text{cm}  (lấy  \\pi=3,1416  )",
      "explanation": "3 phút xe đi được  \\frac { 3×60 } { 20 }×60=540  vòng.\nĐộ dài 1 vòng bằng chu vi bánh xe là  2\\piR=2×3,1416×6,5=40,8408  .\nVậy quãng đường xe đi được là  540×40,8408=22054,032\\text{cm}",
      "diagram": null,
      "options": [
        "A.  22043\\text{cm}",
        "B.  22055\\text{cm}",
        "C.  22042\\text{cm}",
        "D.  22054\\text{cm}"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 19,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một bánh xe đạp quay được 25 vòng trong 10 giây. Tính độ dài quãng đường mà người đi xe thực hiện được trong 2,35 phút, biết rằng bán kính bánh xe bằng  340 mm  . (Tính theo đơn vị mét, kết quả được làm tròn đến hàng phần trăm).",
      "explanation": "Sau 2,35 phút ( = 141 giây), số vòng mà bánh xe thực hiện được là:\n \\frac { 141.25 } { 10 }=352,5{ }{ v }{ ò }{ n }{ g }{ . }{ }  Bán kính bánh xe:  R=340 mm=0,34 m  .\nQuãng đường mà người đi xe đạp thực hiện được sau 2,35 phút là:\n 352,5⋅2\\piR=352,5⋅2\\pi⋅0,34=\\frac { 2397 } { 10 }\\pi\\approx 753,04( m){ . }{ }",
      "diagram": null,
      "options": [
        "A.  314,5( m)",
        "B.  753,04( m)",
        "C.  514,8\\left ( { m } \\right )",
        "D.  437,8\\left ( { m } \\right )"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 20,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Từ một vị trí ban đầu trong không gian, vệ tinh  X  chuyển động theo quỹ đạo là một đường tròn quanh Trái Đất và luôn cách tâm Trái Đất một khoảng bằng  9200 km  . Sau 2 giờ thì vệ tinh  X  hoàn thành hết một vòng di chuyển. Quãng đường vệ tinh  X  chuyển động được sau 1 giờ là",
      "explanation": "Một vòng di chuyển của  X  chính là chu vi đường tròn:\n C=2\\piR=2\\pi.9200=18400\\pi(km){ . }{ } \nSau 1 giờ, vệ tinh di chuyển nửa đường tròn với quãng đường là:\n \\frac { 1 } { 2 }C=9200\\pi\\approx 28902,65( km){ . }{ }",
      "diagram": null,
      "options": [
        "A.  28902,65( km)",
        "B.  29802,65( km)",
        "C.  32102,65( km)",
        "D.  28905( km)"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 21,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một chiếc đu quay có bán kính  75 m  , tâm của vòng quay ở độ cao  90 m  , thời gian thực hiện mỗi vòng quay của đu quay là 30 phút. Nếu một người vào cabin tại vị trí thấp nhất của vòng quay, thì sau 20 phút quay, người đó ở độ cao bao nhiêu mét?",
      "explanation": "Do tính đối xứng, dù đu quay chuyển động theo chiều kim đồng hồ hay ngược chiều kim đồng hồ, ta đều thấy rằng độ cao của người đó là như nhau sau cùng một khoảng thời gian.\nỞ đây ta xét đu quay chuyển động theo chiều kim đồng hồ.\nGắn đu quay có bán kính  75 m  , tâm của vòng quay ở độ cao  90 m  vào hệ trục tọa độ  Oxy  ta được hình bên:\nSau 20 phút quay cabin đi được một góc là  \\frac { 20 } { 30 }⋅360 ^ { ^\\circ } =240 ^ { ^\\circ }  tức là đến vị trí điểm  M'  .\nKhi đó góc  \\widehat { M'OH }=30 ^ { ^\\circ }  và  M'H=30 ^ { ^\\circ } .OM'=37,5\\,\\,\\left ( { m } \\right )  .\nVậy sau 20 phút quay, người đó ở độ cao  37,5+90=127,5( m)  .\nB.Câu hỏi – Trả lời Đúng/sai",
      "diagram": null,
      "options": [
        "A.  127,5( m)",
        "B.  154,3\\left ( { m } \\right )",
        "C.  87,7\\left ( { m } \\right )",
        "D.  157,5"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 22,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Đổi số đo của các góc sang radian. Khi đó:",
      "explanation": "(a)  30 ^ { ^\\circ } =\\frac { \\pi } { 6 }  rad\n 30 ^ { ^\\circ } =\\frac { 30\\pi } { 180 }rad=\\frac { \\pi } { 6 }rad  .\n» Chọn ĐÚNG.\n(b)  \\left ( { \\frac { 15 } { \\pi } } \\right ) ^ { ^\\circ } =\\frac { 1 } { 12 }  rad\n \\left ( { \\frac { 15 } { \\pi } } \\right ) ^ { ^\\circ } =\\frac { \\frac { 15 } { \\pi }\\pi } { 180 }rad=\\frac { 1 } { 12 }rad  .\n» Chọn ĐÚNG.\n(c)  132 ^ { ^\\circ } =\\frac { 11\\pi } { 15 }  rad\n 132 ^ { ^\\circ } =\\frac { 132\\pi } { 180 }rad=\\frac { 11\\pi } { 15 }rad \n» Chọn ĐÚNG.\n(d)  -495 ^ { ^\\circ } =-\\frac { 13\\pi } { 4 }  rad\n -495 ^ { ^\\circ } =\\frac { -495\\pi } { 180 }rad=-\\frac { 11\\pi } { 4 }rad  .\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "30 ^ { ^\\circ } =\\frac { \\pi } { 6 }  rad",
          "correct": true
        },
        {
          "subId": "b",
          "text": "\\left ( { \\frac { 15 } { \\pi } } \\right ) ^ { ^\\circ } =\\frac { 1 } { 12 }  rad",
          "correct": true
        },
        {
          "subId": "c",
          "text": "132 ^ { ^\\circ } =\\frac { 11\\pi } { 15 }  rad",
          "correct": true
        },
        {
          "subId": "d",
          "text": "-495 ^ { ^\\circ } =-\\frac { 13\\pi } { 4 }  rad",
          "correct": false
        }
      ]
    },
    {
      "id": 23,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Đổi số đo của các góc sang độ. Khi đó:",
      "explanation": "(a)  \\frac { 3\\pi } { 4 }rad=135 ^ { ^\\circ }  ;\n \\frac { 3\\pi } { 4 }rad=\\left ( { \\frac { 3\\pi } { 4 }⋅\\frac { 180 } { \\pi } } \\right ) ^ { ^\\circ } =135 ^ { ^\\circ } \n» Chọn ĐÚNG.\n(b)  -\\frac { \\pi } { 360 }rad=-0,5 ^ { ^\\circ }  ;\n -\\frac { \\pi } { 360 }rad=\\left ( { -\\frac { \\pi } { 360 }⋅\\frac { 180 } { \\pi } } \\right ) ^ { ^\\circ } =-0,5 ^ { ^\\circ }  .\n» Chọn ĐÚNG.\n(c)  \\frac { 31\\pi } { 2 }rad=27 ^ { ^\\circ }  ;\n \\frac { 31\\pi } { 2 }rad=\\left ( { \\frac { 31\\pi } { 2 }⋅\\frac { 180 } { \\pi } } \\right ) ^ { ^\\circ } =2790 ^ { ^\\circ }  .\n» Chọn SAI.\n(d)  -4\\text{ rad}\\approx -229,18 ^ { ^\\circ }  .\n -4\\text{ rad}=\\left ( { -4⋅\\frac { 180 } { \\pi } } \\right ) ^ { ^\\circ } =\\left ( { -\\frac { 720 } { \\pi } } \\right ) ^ { ^\\circ } \\approx -229,18 ^ { ^\\circ }  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\frac { 3\\pi } { 4 }rad=135 ^ { ^\\circ }",
          "correct": true
        },
        {
          "subId": "b",
          "text": "-\\frac { \\pi } { 360 }rad=-0,5 ^ { ^\\circ }",
          "correct": true
        },
        {
          "subId": "c",
          "text": "\\frac { 31\\pi } { 2 }rad=27 ^ { ^\\circ }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "-4\\text{ rad}\\approx -229,18 ^ { ^\\circ }",
          "correct": true
        }
      ]
    },
    {
      "id": 24,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Biểu diễn góc lượng giác trên đường tròn lượng giác. Khi đó:",
      "explanation": "(a)  125 ^ { ^\\circ }  là điểm  M  thuộc góc phần tư thứ thứ II\nĐiểm biểu diễn của góc lượng giác có số đo  125 ^ { ^\\circ }  là điểm  M  thuộc góc phần tư thứ thứ II của đường tròn lượng giác thoả mãn  \\widehat { AOM }=125 ^ { ^\\circ }  (Hình 1).\nHình 1\n» Chọn ĐÚNG.\n(b)  405 ^ { ^\\circ }  là điểm  N  thuộc góc phần tư thứ III\nTa có:  405 ^ { ^\\circ } =45 ^ { ^\\circ } +360 ^ { ^\\circ }  . Vì vậy điểm biểu diễn của góc lượng giác  405 ^ { ^\\circ }  là điểm  N  thuộc góc phần tư thứ  I  của đường tròn lượng giác và thoả mãn  \\widehat { AON }=45 ^ { ^\\circ }  (Hình 2).\nHình 2\n» Chọn SAI.\n(c)  \\frac { 19\\pi } { 3 }  là điểm  P  thuộc góc phần tư thứ II\nTa có:  \\frac { 19\\pi } { 3 }=\\frac { 18\\pi+\\pi } { 3 }=\\frac { \\pi } { 3 }+3.2\\pi  .\nVì vậy điểm biểu diễn của góc lượng giác  \\frac { 19\\pi } { 3 }  là điểm  P  thuộc góc phần tư thứ  I  của đường tròn lượng giác và thoả mãn  \\widehat { AOP }=\\frac { \\pi } { 3 }  (Hình 3).\nHình 3\n» Chọn SAI.\n(d)  -\\frac { 13\\pi } { 6 }  là điểm  Q  thuộc góc phần tư thứ IV\nTa có:  -\\frac { 13\\pi } { 6 }=\\frac { -12\\pi-\\pi } { 6 }=-\\frac { \\pi } { 6 }-2\\pi  .\nVì vậy điểm biểu diễn của góc lượng giác  -\\frac { 13\\pi } { 6 }  là điểm  Q  thuộc góc phần tư thứ IV của đường tròn lượng giác và thoả mãn  \\widehat { AOQ }=\\frac { \\pi } { 6 }  (Hình 4).\nHình 4\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "125 ^ { ^\\circ }  là điểm  M  thuộc góc phần tư thứ thứ II",
          "correct": true
        },
        {
          "subId": "b",
          "text": "405 ^ { ^\\circ }  là điểm  N  thuộc góc phần tư thứ III",
          "correct": false
        },
        {
          "subId": "c",
          "text": "\\frac { 19\\pi } { 3 }  là điểm  P  thuộc góc phần tư thứ II",
          "correct": false
        },
        {
          "subId": "d",
          "text": "-\\frac { 13\\pi } { 6 }  là điểm  Q  thuộc góc phần tư thứ IV",
          "correct": true
        }
      ]
    },
    {
      "id": 25,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Biểu diễn góc lượng giác trên đường tròn lượng giác. Khi đó:",
      "explanation": "(a)  36 ^ { ^\\circ } +k360 ^ { ^\\circ } ,k\\in \\mathbb{Z}  là điểm  M  thuộc góc phần tư thứ  II \nXét góc lượng giác  k360 ^ { ^\\circ }  , dù  k  là số chã̃n hay số lẻ thì góc này cũng có điểm biểu diễn là điểm  A  (điểm gốc trên đường tròn lượng giác).\nVì vậy, góc lượng giác  36 ^ { ^\\circ } +k360 ^ { ^\\circ }  có điểm biểu diễn là điểm  M  thuộc góc phần tư thứ  I  của đường tròn lượng giác và  \\widehat { AOM }=36 ^ { ^\\circ }  .\n» Chọn SAI.\n(b)  -60 ^ { ^\\circ } +k180 ^ { ^\\circ } ,k\\in \\mathbb{Z}  là các điểm  M_{ 1 } ,M_{ 2 }  thuộc góc phần tư thứ  II  và  IV \nXét góc lượng giác  k180 ^ { ^\\circ }  .\nNếu  k  chẵn thì góc này có điểm biểu diễn là  A\\left ( { 1;0 } \\right )  ,\nNếu  k  lẻ thì góc này có điểm biểu diễn là điểm  B\\left ( { -1;0 } \\right )  .\nVì vậy,  -60 ^ { ^\\circ } +k180 ^ { ^\\circ }  có các điểm biểu diễn là  M_{ 1 }  và  M_{ 2 }  như hình vẽ bên.\n» Chọn ĐÚNG.\n(c)  -\\frac { \\pi } { 4 }+k2\\pi,k\\in \\mathbb{Z}  là  M  thuộc góc phần tư thứ  III \nTa biết góc lượng giác  k2\\pi  luôn có điểm biểu diễn là  A\\left ( { 1;0 } \\right )  , vì vậy góc lượng giác  -\\frac { \\pi } { 4 }+k2\\pi  có điểm biểu diễn là  M  thuộc góc phần tư thứ IV và thoả mãn  \\widehat { AOM }=\\frac { \\pi } { 4 }  .\n» Chọn ĐÚNG.\n(d)  -\\frac { \\pi } { 6 }+k\\frac { \\pi } { 2 },k\\in \\mathbb{Z}  là bốn điểm  M,N,P,Q  thuộc góc phần tư thứ  I,II,III,IV \nXét góc lượng giác  k\\frac { \\pi } { 2 }  .\nKhi  k=0  thì  k\\frac { \\pi } { 2 }=0  , góc này có điểm biểu diễn là điểm  A\\left ( { 1;0 } \\right )  .\nKhi  k=1  thì  k\\frac { \\pi } { 2 }=\\frac { \\pi } { 2 }  , góc này có điểm biểu diễn là điểm  C\\left ( { 0;1 } \\right )  .\nKhi  k=2  thì  k\\frac { \\pi } { 2 }=\\pi  , góc này có điểm biểu diễn là điểm  B\\left ( { -1;0 } \\right )  .\nKhi  k=3  thì  k\\frac { \\pi } { 2 }=\\frac { 3\\pi } { 2 }  , góc này có điểm biểu diễn là điểm  D\\left ( { 0;-1 } \\right )  .\nNếu  k=4,5,6,…  thì ta thấy rằng các điểm biểu diễn có được vẫn là sự lặp lại của  A,B,C,D  .\nVì vậy điểm biểu diễn của  -\\frac { \\pi } { 6 }+k\\frac { \\pi } { 2 }  là bốn điểm  M,N,P,Q  trên đường tròn lượng giác (xem hình vẽ trên).\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "36 ^ { ^\\circ } +k360 ^ { ^\\circ } ,k\\in \\mathbb{Z}  là điểm  M  thuộc góc phần tư thứ  II",
          "correct": false
        },
        {
          "subId": "b",
          "text": "-60 ^ { ^\\circ } +k180 ^ { ^\\circ } ,k\\in \\mathbb{Z}  là các điểm  M_{ 1 } ,M_{ 2 }  thuộc góc phần tư thứ  II  và  IV",
          "correct": true
        },
        {
          "subId": "c",
          "text": "-\\frac { \\pi } { 4 }+k2\\pi,k\\in \\mathbb{Z}  là  M  thuộc góc phần tư thứ  III",
          "correct": true
        },
        {
          "subId": "d",
          "text": "-\\frac { \\pi } { 6 }+k\\frac { \\pi } { 2 },k\\in \\mathbb{Z}  là bốn điểm  M,N,P,Q  thuộc góc phần tư thứ  I,II,III,IV",
          "correct": true
        }
      ]
    },
    {
      "id": 26,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Trong hình vẽ bên, ta xem hình ảnh đường tròn trên một bánh lái tàu thuỷ tương ứng với một đường tròn lượng giác.",
      "explanation": "(a) Công thức tổng quát biểu diễn góc lượng giác  \\left ( { OA,OB } \\right )  theo đơn vị radian:  \\left ( { OA,OB } \\right )=\\frac { \\pi } { 4 }+k2\\pi(k\\in \\mathbb{Z}); \nTa có:  \\left ( { OA,OB } \\right )=\\frac { \\pi } { 4 }+k2\\pi(k\\in \\mathbb{Z})  ;\n» Chọn ĐÚNG.\n(b) Công thức tổng quát chỉ ra góc lượng giác tương ứng với bốn điểm biểu diễn là  A,C,E,G  theo đơn vị radian là  k\\frac { \\pi } { 3 }(k\\in \\mathbb{Z}) \nTa thấy  A,C,E,G  lần lượt biểu diễn cho các góc lượng giác  0\\text{ rad},\\frac { \\pi } { 2 }rad,\\pirad,\\frac { 3\\pi } { 2 }rad,2\\pirad  ,  \\frac { 5\\pi } { 2 }rad,..  . Tất cả các góc này theo thứ tự chênh lệch nhau  \\frac { \\pi } { 2 }  rad.\nVì vậy công thức duy nhất biểu diễn cho các góc lượng giác ấy là  k\\frac { \\pi } { 2 }(k\\in \\mathbb{Z})  .\n» Chọn SAI.\n(c) Công thức tổng quát chỉ ra góc lượng giác tương ứng với hai điểm biểu diễn là  A,E  theo đơn vị độ là:  k180 ^ { ^\\circ } (k\\in \\mathbb{Z}) \nTa thấy hai điểm  A,E  lần lượt biểu diễn cho các góc lượng giác  0 ^ { ^\\circ } ,180 ^ { ^\\circ } ,360 ^ { ^\\circ } ,540 ^ { ^\\circ } ,… \nTất cả các góc này theo thứ tự chênh lệch nhau  180 ^ { ^\\circ }  .\nVì vậy công thức duy nhất biểu diễn cho các góc lượng giác ấy là  k180 ^ { ^\\circ } (k\\in \\mathbb{Z})  .\n» Chọn ĐÚNG.\n(d) Công thức tổng quát biểu diễn góc lượng giác  \\left ( { OA,OC } \\right )+\\left ( { OC,OH } \\right )  theo đơn vị radian:  \\frac { \\pi } { 4 }+k2\\pi(k\\in \\mathbb{Z}) \nTheo hệ thức Sa-lơ, ta có:\n \\left ( { OA,OB } \\right )+\\left ( { OB,OC } \\right )=\\left ( { OA,OC } \\right )=\\frac { \\pi } { 2 }+k2\\pi(k\\in \\mathbb{Z}) \n \\left ( { OA,OC } \\right )+\\left ( { OC,OH } \\right )=\\left ( { OA,OH } \\right )=-\\frac { \\pi } { 4 }+k2\\pi(k\\in \\mathbb{Z}) \n» Chọn ĐÚNG.",
      "diagram": "assets/diagrams/b1_q26.png",
      "items": [
        {
          "subId": "a",
          "text": "Công thức tổng quát biểu diễn góc lượng giác  \\left ( { OA,OB } \\right )  theo đơn vị radian:  \\left ( { OA,OB } \\right )=\\frac { \\pi } { 4 }+k2\\pi(k\\in \\mathbb{Z});",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Công thức tổng quát chỉ ra góc lượng giác tương ứng với bốn điểm biểu diễn là  A,C,E,G  theo đơn vị radian là  k\\frac { \\pi } { 3 }(k\\in \\mathbb{Z})",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Công thức tổng quát chỉ ra góc lượng giác tương ứng với hai điểm biểu diễn là  A,E  theo đơn vị độ là:  k180 ^ { ^\\circ } (k\\in \\mathbb{Z})",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Công thức tổng quát biểu diễn góc lượng giác  \\left ( { OA,OC } \\right )+\\left ( { OC,OH } \\right )  theo đơn vị radian:  \\frac { \\pi } { 4 }+k2\\pi(k\\in \\mathbb{Z})",
          "correct": true
        }
      ]
    },
    {
      "id": 27,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Đường kính của một bánh xe máy là  60\\,\\,\\left ( { { c }{ m } } \\right )  . Trong mỗi ý ở mỗi câu, hãy chọn đúng hay sai",
      "explanation": "(a) Độ dài cung  40^\\circ  của một bánh xe gần bằng  20,9\\,(\\text{cm})  , kết quả làm tròn đến chữ số thập phân thứ 2.\nĐộ dài cung tròn có số đo  \\alpha\\,\\left ( { rad } \\right )  là  l=\\alpha.R=\\frac { \\pi.40 } { 180 }.R=\\frac { \\pi.40 } { 180 }.30\\simeq 20,94\\,(\\text{cm}) \n» Chọn ĐÚNG.\n(b) Mỗi bánh xe phải lăn một vòng thì người đi xe đi được quãng đường  94,2\\,\\left ( { { c }{ m } } \\right )  , kết quả làm tròn đến chữ số thập phân thứ 1.\nMỗi bánh xe phải lăn một vòng thì người đi xe đi được quãng đường  94,2\\,\\left ( { { c }{ m } } \\right ) \nTa có  R=30 \nChu vi bánh xe là:  l=\\alpha.R=2\\piR=60.\\pi=188,5\\,\\left ( { { c }{ m } } \\right )  .\n» Chọn SAI.\n(c) Để người đi xe đi được quãng đường  2\\,\\left ( { { k }{ m } } \\right )  thì mỗi bánh xe phải lăn  1000  vòng\nĐể người đi xe đi được quãng đường  2\\,\\left ( { { k }{ m } } \\right )  thì mỗi bánh xe phải lăn  1000  vòng\nĐổi:  2\\,\\left ( { { k }{ m } } \\right )=200000\\,\\left ( { { c }{ m } } \\right )  .\nSố vòng bánh xe cần lăn để đi được quãng đường dài  200000\\,\\left ( { { c }{ m } } \\right )  là  \\frac { 200000 } { 188,5 }\\simeq 1061  (vòng).\n» Chọn SAI.\n(d) Nếu xe chạy với vận tốc  50\\,\\left ( { km{ / }h } \\right )  thì trong  5  giây bánh xe quay được gần  36,9  vòng.\nNếu xe chạy với vận tốc  50(km/h)  thì trong  5  giây bánh xe quay được gần  36,9  vòng.\nTrong một phút bánh xe quay được:  \\left[ \\frac { 50.1000 } { 3600 }:(0,6.\\pi) \\right].5\\simeq 36,9  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Độ dài cung  40^\\circ  của một bánh xe gần bằng  20,94\\,(\\text{cm})  , kết quả làm tròn đến chữ số thập phân thứ 2.",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Mỗi bánh xe phải lăn một vòng thì người đi xe đi được quãng đường  94,2\\,\\left ( { { c }{ m } } \\right )  , kết quả làm tròn đến chữ số thập phân thứ 1.",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Để người đi xe đi được quãng đường  2\\,\\left ( { { k }{ m } } \\right )  thì mỗi bánh xe phải lăn  1000  vòng",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Nếu xe chạy với vận tốc  50\\,\\left ( { km{ / }h } \\right )  thì trong  5  giây bánh xe quay được gần  36,9  vòng.",
          "correct": true
        }
      ]
    },
    {
      "id": 28,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Trên đường tròn lượng giác tâm  O  và hệ trục tọa độ  Oxy  cho điểm  M  sao cho  \\widehat { AOM }=\\frac { \\pi } { 5 }  .",
      "explanation": "(a) Số đo của góc lượng giác có tia đầu là  OA  tia cuối là  OM  bằng  \\frac { \\pi } { 5 }+k\\pi { k\\in () }  .\nSố đo của góc lượng giác có tia đầu là  OA  tia cuối là  OM  bằng  \\frac { \\pi } { 5 }+k2\\pi { k\\in () }  .\n» Chọn SAI.\n(b) Góc lượng giác có số đo  \\frac { 11\\pi } { 5 }  có cùng tia đầu và tia cuối với góc lượng giác  \\left ( { OA,OM } \\right )  .\nTa có  \\frac { 11\\pi } { 5 }=\\frac { \\pi } { 5 }+2\\pi\\Rightarrow  Góc lượng giác có số đo  \\frac { 11\\pi } { 5 }  có cùng tia đầu và tia cuối với góc lượng giác có sđ  \\left ( { OA,OM } \\right )=\\frac { \\pi } { 5 }+k2\\pi,\\,\\,k\\in  .\n» Chọn ĐÚNG.\n(c) Trên đường tròn lượng giác biểu diễn góc lượng giác có số đo  \\frac { \\pi } { 5 }+\\frac { k\\pi } { 3 },k\\in  ta được  6  điểm.\nTa có  \\frac { \\pi } { 5 }+\\frac { k\\pi } { 3 }=\\frac { \\pi } { 5 }+\\frac { k2\\pi } { 6 },k\\in  nên khi biểu diễn trên đường tròn lượng giác ta được  6  điểm.\n» Chọn ĐÚNG.\n(d) Khi biểu diễn góc  \\alpha=\\frac { \\pi } { 5 }+\\frac { k\\pi } { 2 },k\\in  lên đường tròn lượng giác ta được tập hợp điểm là một đa giác đều thì diện tích của đa giác đều đó bằng  4  .\nTa có tập hợp điểm biểu diễn của  \\alpha  là hình vuông có đường chéo bằng 2.\nDiện tích của đa giác biểu diễn là  S=\\frac { 1 } { 2 }.2 ^ { 2 } =2  (đvdt).\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Số đo của góc lượng giác có tia đầu là  OA  tia cuối là  OM  bằng  \\frac { \\pi } { 5 }+k\\pi { k\\in () }  .",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Góc lượng giác có số đo  \\frac { 11\\pi } { 5 }  có cùng tia đầu và tia cuối với góc lượng giác  \\left ( { OA,OM } \\right )  .",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Trên đường tròn lượng giác biểu diễn góc lượng giác có số đo  \\frac { \\pi } { 5 }+\\frac { k\\pi } { 3 },k\\in  ta được  6  điểm.",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Khi biểu diễn góc  \\alpha=\\frac { \\pi } { 5 }+\\frac { k\\pi } { 2 },k\\in  lên đường tròn lượng giác ta được tập hợp điểm là một đa giác đều thì diện tích của đa giác đều đó bằng  4  .",
          "correct": false
        }
      ]
    },
    {
      "id": 29,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Từ một vị trí ban đầu trong không gian, vệ tinh  X  chuyển động theo quỹ đạo là một đường tròn quanh Trái Đất và luôn cách tâm Trái Đất một khoảng bằng  9200 km  . Sau 2 giờ thì vệ tinh  X  hoàn thành hết một vòng di chuyển.",
      "explanation": "(a) Quãng đường vệ tinh  X  chuyển động được sau 1 giờ là:  \\approx 28902,65\\,\\left ( { km } \\right )  , kết quả làm tròn đến chữ số thập phân thứ 2.\nMột vòng di chuyển của  X  chính là chu vi đường tròn:\n C=2\\piR=2\\pi.9200=18400\\pi(km){ . }{ } \nSau 1 giờ, vệ tinh di chuyển nửa đường tròn với quãng đường là:\n \\frac { 1 } { 2 }C=9200\\pi\\approx 28902,65( km){ . }{ } \n» Chọn ĐÚNG.\n(b) Quãng đường vệ tinh  X  chuyển động được sau 1,5 giờ là:  \\approx 43353,98\\,\\left ( { km } \\right )  , kết quả làm tròn đến chữ số thập phân thứ 2.\nSau 1,5 giờ, vệ tinh di chuyển được  \\frac { 1,5.1 } { 2 }  đường tròn (hay  \\frac { 3 } { 4 }  đường tròn), quãng đường là:  \\frac { 3 } { 4 }C=\\frac { 3 } { 4 }⋅18400\\pi=13800\\pi\\approx 43353,98( km)  .\n» Chọn ĐÚNG.\n(c) Sau khoảng 5,3 giờ thì  X  di chuyển được quãng đường  240000 \\,\\left ( { km } \\right ) \nSố giờ để vệ tinh  X  thực hiện quãng đường  240000 km  là:  \\frac { 240000 } { 9200\\pi }\\approx 8,3  (giờ).\n» Chọn SAI.\n(d) Giả sử vệ tinh di chuyển theo chiều dương của đường tròn, sau 4,5 giờ thì vệ tinh vẽ nên một góc  \\frac { 9\\pi } { 2 }  rad?\nSau 4,5 giờ thì số vòng tròn mà vệ tinh  X  di chuyển được là:  \\frac { 4,5 } { 2 }=\\frac { 9 } { 4 }  (vòng).\nSố đo góc lượng giác thu được là:  \\frac { 9 } { 4 }⋅2\\pi=\\frac { 9\\pi } { 2 }(rad)  .\n» Chọn ĐÚNG.\nC.Câu hỏi – Trả lời ngắn",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Quãng đường vệ tinh  X  chuyển động được sau 1 giờ là:  \\approx 28902,65\\,\\left ( { km } \\right )  , kết quả làm tròn đến chữ số thập phân thứ 2.",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Quãng đường vệ tinh  X  chuyển động được sau 1,5 giờ là:  \\approx 43353,98( km)  , kết quả làm tròn đến chữ số thập phân thứ 2.",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Sau khoảng 5,3 giờ thì  X  di chuyển được quãng đường  240000 \\,\\left ( { km } \\right )",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Giả sử vệ tinh di chuyển theo chiều dương của đường tròn, sau 4,5 giờ thì vệ tinh vẽ nên một góc  \\frac { 9\\pi } { 2 }  rad?",
          "correct": true
        }
      ]
    },
    {
      "id": 30,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Từ hình vẽ đường tròn lượng giác, công thức số đo tổng quát của góc lượng giác  \\left ( { OA,OM } \\right )  ;  \\left ( { OA,ON } \\right )  có dạng lần lượt là  n ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )  ;  m ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )  với  n;m  là các số nguyên. Tính giá trị  S=\\frac { 1 } { 4 }m ^ { 2 } -n",
      "explanation": "Ta có:  \\left ( { OA,OM } \\right )=225 ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow n=225  ;\n \\left ( { OA,ON } \\right )=-60 ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow m=-60  .\nVậy  S=\\frac { 1 } { 4 }\\left ( { -60 } \\right ) ^ { 2 } -225=675",
      "diagram": "assets/diagrams/b1_q30.png",
      "correctAnswer": "675"
    },
    {
      "id": 31,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Từ hình vẽ đường tròn lượng giác, công thức số đo tổng quát của góc lượng giác  \\left ( { OA,OM } \\right )  ;  \\left ( { OA,ON } \\right )  có dạng lần lượt là  \\frac { n } { m }\\pi+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  ;  -\\frac { p } { q }\\pi+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  với  m;n;p;q  là các số nguyên và  \\frac { n } { m };\\frac { p } { q }  là phân số tối giản. Tính giá trị  T=\\left ( { m+p } \\right )-\\left ( { n+q } \\right )",
      "explanation": "Ta có:  \\frac { 29\\pi } { 12 }=\\frac { 5\\pi+24\\pi } { 12 }=\\frac { 5\\pi } { 12 }+2\\pi  , vì vậy  \\left ( { OA,OM } \\right )=\\frac { 5\\pi } { 12 }+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow \\left \\{ \\begin{array}{l} n=5 \\\\ m=12 \\end{array} \\right.  .\n \\left ( { OA,ON } \\right )=-\\frac { 3\\pi } { 4 }+k2\\pi\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow \\left \\{ \\begin{array}{l} p=3 \\\\ q=4 \\end{array} \\right.  .\nVậy  T=\\left ( { m+p } \\right )-\\left ( { n+q } \\right )=\\left ( { 12+3 } \\right )-\\left ( { 5+4 } \\right )=6",
      "diagram": "assets/diagrams/b1_q31.png",
      "correctAnswer": "6"
    },
    {
      "id": 32,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Một bánh xe có đường kính kể cả lốp xe là  55 \\text{cm}  . Nếu xe chạy với tốc độ  50 km/h  thì trong một giây bánh xe quay được bao nhiêu vòng? (Kết quả được làm tròn đến hàng phần trăm).",
      "explanation": "Tốc độ xe là:  50 km/h=\\frac { 50.100000 } { 3600 } \\text{cm}/s=\\frac { 12500 } { 9 } \\text{cm}/s  .\nMỗi vòng bánh  x  e có chiều dài:  2\\piR=2\\pi⋅\\frac { 55 } { 2 }=55\\pi(\\text{cm})  .\nVậy mỗi giây thì bánh xe lăn được số vòng là  \\frac { 12500 } { 9 }:(55\\pi)\\approx 8,04  (vòng).",
      "diagram": null,
      "correctAnswer": "8,04"
    },
    {
      "id": 33,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Một bánh xe đạp quay được 25 vòng trong 10 giây. Tính độ dài quãng đường mà người đi xe thực hiện được trong 2,35 phút, biết rằng bán kính bánh xe bằng  340 mm  . (Tính theo đơn vị mét, kết quả được làm tròn đến hàng đơn vị).",
      "explanation": "Sau 2,35 phút (141 giây), số vòng mà bánh xe thực hiện được là:  \\frac { 41.25 } { 0 }=352,5  vòng.\nBán kính bánh xe:  R=340 mm=0,34 m  .\nQuãng đường mà người đi xe đạp thực hiện được sau 2,35 phút là:\n 352,5.2\\piR=352,5.2\\pi.0,34=\\frac { 2397 } { 10 }\\pi\\approx 753( m)  .",
      "diagram": null,
      "correctAnswer": "753"
    },
    {
      "id": 34,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Một cái đồng hồ treo tường có đường kính bằng  60 \\text{cm}  , ta xem vành ngoài chiếc đồng hồ là một đường tròn với các điểm  A,B,C  lần lượt tương ứng với vị trí các số  2,9,4  . Tính tổng độ dài các cung nhỏ  AB  và  AC  (kết quả tính theo đơn vị centimét và làm tròn đến hàng phần trăm).",
      "explanation": "Bán kính đường tròn là  R=\\frac { 60 } { 2 }=30 \\text{cm}  .\nTa có:  \\widehat { AOB }=150 ^ { ^\\circ } =\\frac { 150\\pi } { 180 }rad=\\frac { 5\\pi } { 6 }rad  ; suy ra độ dài cung nhỏ  AB  là  l_{ \\overset ⌢ { AB } } =R⋅ \\widehat { AOB }=30⋅\\frac { 5\\pi } { 6 }=25\\pi  .\nTa có:  \\widehat { AOC }=60 ^ { ^\\circ } =\\frac { 60\\pi } { 180 }rad=\\frac { \\pi } { 3 }rad  ; suy ra độ dài cung nhỏ  AC  là\n l_{ \\overset ⌢ { AC } } =R⋅ \\widehat { AOC }=30⋅\\frac { \\pi } { 3 }=10\\pi \nKhi đó  l_{ \\overset ⌢ { AB } } +l_{ \\overset ⌢ { AC } } =25\\pi+10\\pi=35\\pi\\approx 109,96",
      "diagram": null,
      "correctAnswer": "109,96"
    },
    {
      "id": 35,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Gọi  M,N,P  là các điểm trên đường tròn lượng giác sao cho số đo các góc lượng giác  \\left ( { OA,OM } \\right ),\\left ( { OA,ON } \\right ),  \\left ( { OA,OP } \\right )  lần lượt bằng  \\frac { \\pi } { 2 },\\frac { 7\\pi } { 6 },-\\frac { \\pi } { 6 }  và  MN=NP=2  . Tính diện tích tam giác  MNP  . Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "Theo hệ thức Sa-lơ, ta có:\n \\left ( { OA,OM } \\right )+\\left ( { OM,ON } \\right )=\\left ( { OA,ON } \\right )\\Leftrightarrow \\frac { \\pi } { 2 }+\\left ( { OM,ON } \\right )=\\frac { 7\\pi } { 6 }\\Leftrightarrow \\left ( { OM,ON } \\right )=\\frac { 2\\pi } { 3 }. \nTa có  \\widehat { MON }=120 ^ { ^\\circ } \\Rightarrow \\widehat { MPN }=60 ^ { ^\\circ }  (1) (số đo góc nội tiếp bằng nửa số đo góc ở tâm chắn cùng một cung).\nTa có:  \\left ( { OA,OP } \\right )=-\\frac { \\pi } { 6 }+2\\pi=\\frac { 11\\pi } { 6 }  .\nTheo hệ thức Sa-lơ:\n \\left ( { OA,ON } \\right )+\\left ( { ON,OP } \\right )=\\left ( { OA,OP } \\right )  \\Leftrightarrow \\frac { 7\\pi } { 6 }+\\left ( { ON,OP } \\right )=\\frac { 11\\pi } { 6 }\\Leftrightarrow \\left ( { ON,OP } \\right )=\\frac { 2\\pi } { 3 }  .\nTa có  \\widehat { NOP }=120 ^ { ^\\circ } \\Rightarrow \\widehat { NMP }=60 ^ { ^\\circ }  (2) (số đo góc nội tiếp bằng nửa số đo góc ở tâm chắn cùng một cung).\nTừ (1) và (2)  \\Rightarrow \\DeltaMNP  là tam giác đều.\nVậy  S_{ MNP } =MN.NP.\\sin\\left ( { \\widehat { MNP } } \\right )=2.2.\\sin\\left ( { 60^\\circ } \\right )=2\\sqrt[] { 3 }\\approx 3,46",
      "diagram": null,
      "correctAnswer": "3,46"
    }
  ],
  "b2": [
    {
      "id": 1,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\frac { \\pi } { 2 } < a < \\pi  . Kết quả đúng là",
      "explanation": "Vì  \\frac { \\pi } { 2 } < a < \\pi  \\Rightarrow sina>0  ,  cosa < 0  .",
      "diagram": null,
      "options": [
        "A.  sina>0  ,  cosa>0",
        "B.  sina < 0  ,  cosa < 0",
        "C.  sina>0  ,  cosa < 0",
        "D.  sina < 0  ,  cosa>0"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 2,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các đẳng thức sau, đẳng thức nào đúng?",
      "explanation": "Theo công thức.",
      "diagram": null,
      "options": [
        "A.  \\sin\\left ( { 180 ^ { 0 } –a } \\right )=–cosa",
        "B.  \\sin\\left ( { 180 ^ { 0 } –a } \\right )=-sina",
        "C.  \\sin\\left ( { 180 ^ { 0 } –a } \\right )=sina",
        "D.  \\sin\\left ( { 180 ^ { 0 } –a } \\right )=cosa"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 3,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Chọn đẳng thức sai trong các đẳng thức sau",
      "explanation": "",
      "diagram": null,
      "options": [
        "A.  \\sin\\left ( { \\frac { \\pi } { 2 }-x } \\right )=cosx",
        "B.  \\sin\\left ( { \\frac { \\pi } { 2 }+x } \\right )=cosx",
        "C.  \\tan\\left ( { \\frac { \\pi } { 2 }-x } \\right )=cotx",
        "D.  \\tan\\left ( { \\frac { \\pi } { 2 }+x } \\right )=cotx"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 4,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho biết  \\tan\\alpha=\\frac { 1 } { 2 }  . Tính  \\cot\\alpha",
      "explanation": "Ta có:  \\tan\\alpha.\\cot\\alpha=1  \\Rightarrow \\cot\\alpha=\\frac { 1 } { \\tan\\alpha }=\\frac { 1 } { \\frac { 1 } { 2 } }=2  .",
      "diagram": null,
      "options": [
        "A.  \\cot\\alpha=2",
        "B.  \\cot\\alpha=\\frac { 1 } { 4 }",
        "C.  \\cot\\alpha=\\frac { 1 } { 2 }",
        "D.  \\cot\\alpha=\\sqrt[] { 2 }"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 5,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\frac { \\pi } { 2 } < a < \\pi  . Khẳng định nào sau đây đúng ?",
      "explanation": "",
      "diagram": null,
      "options": [
        "A.  sina < 0",
        "B.  \\tan\\alpha>0",
        "C.  \\cot\\alpha>0",
        "D.  cosa < 0"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 6,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Biết  \\tan\\alpha=2  và  \\pi < a < \\frac { 3\\pi } { 2 }  . Tính  \\sin\\alpha  .",
      "explanation": "Vì  \\tan\\alpha=2\\Rightarrow \\sin\\alpha=2cos\\alpha  .\nTa có  \\sin ^ { 2 } \\alpha+\\cos ^ { 2 } \\alpha=1\\Rightarrow 5cos ^ { 2 } \\alpha=1\\Leftrightarrow \\cos\\alpha=\\pm \\frac { 1 } { \\sqrt[] { 5 } }  .\nDo  \\pi < a < \\frac { 3\\pi } { 2 }\\Rightarrow \\cos\\alpha < 0\\Rightarrow \\cos\\alpha=-\\frac { 1 } { \\sqrt[] { 5 } }\\Rightarrow \\sin\\alpha=-\\frac { 2 } { \\sqrt[] { 5 } }  .",
      "diagram": null,
      "options": [
        "A.  -\\frac { 2\\sqrt[] { 5 } } { 5 }",
        "B.  \\frac { 2\\sqrt[] { 5 } } { 5 }",
        "C.  -\\frac { \\sqrt[] { 5 } } { 5 }",
        "D.  \\frac { \\sqrt[] { 5 } } { 5 }"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 7,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Biết  \\tan\\alpha=-3  . Tính  \\tan\\left ( { \\alpha-\\frac { 7\\pi } { 2 } } \\right )  .",
      "explanation": "\\tan\\left ( { \\alpha-\\frac { 7\\pi } { 2 } } \\right )=\\tan\\left ( { \\alpha-\\frac { \\pi } { 2 }-3\\pi } \\right )=\\tan\\left ( { \\alpha-\\frac { \\pi } { 2 } } \\right )=-\\tan\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )=-\\cot\\alpha=-\\frac { 1 } { \\tan\\alpha }=\\frac { 1 } { 3 }  .",
      "diagram": null,
      "options": [
        "A.  -\\frac { 1 } { 3 }",
        "B.  \\frac { 1 } { 3 }",
        "C. 3",
        "D.  -3"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 8,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các công thức sau, công thức nào sai?",
      "explanation": "D sai vì:  \\tan\\alpha.\\cot\\alpha=1\\,\\left ( { \\alpha\\ne \\frac { k\\pi } { 2 },\\,k\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  \\sin ^ { 2 } \\alpha+\\cos ^ { 2 } \\alpha=1",
        "B.  1+\\tan ^ { 2 } \\alpha=\\frac { 1 } { \\cos ^ { 2 } \\alpha }\\,\\left ( { \\alpha\\ne \\frac { \\pi } { 2 }+k\\pi,\\,k\\in \\mathbb{Z} } \\right )",
        "C.  1+\\cot ^ { 2 } \\alpha=\\frac { 1 } { \\sin ^ { 2 } \\alpha }\\ \\left ( { \\alpha\\ne k\\pi,\\,k\\in \\mathbb{Z} } \\right )",
        "D.  \\tan\\alpha+\\cot\\alpha=1\\,\\left ( { \\alpha\\ne \\frac { k\\pi } { 2 },\\,k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 9,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\sin\\alpha=\\frac { 3 } { 5 }  và  \\frac { \\pi } { 2 } < \\alpha < \\pi  . Giá trị của  { c }{ o }{ s }\\alpha  là:",
      "explanation": "Ta có:  \\sin ^ { 2 } \\alpha+\\cos ^ { 2 } \\alpha=1  \\Rightarrow \\cos ^ { 2 } \\alpha{ = }{ 1 }-{ s }{ i }{ n } ^ { 2 } \\alpha=1-\\frac { 9 } { 25 }=\\frac { 16 } { 25 }  \\Leftrightarrow \\left[ \\cos\\alpha=\\frac { 4 } { 5 } \\\\ \\cos\\alpha=-\\frac { 4 } { 5 } \\right.  .\nVì  \\frac { \\pi } { 2 } < \\alpha < \\pi  \\Rightarrow { c }{ o }{ s }\\alpha=-\\frac { 4 } { 5 }  .",
      "diagram": null,
      "options": [
        "A.  \\frac { 4 } { 5 }",
        "B.  -\\frac { 4 } { 5 }",
        "C.  \\pm \\frac { 4 } { 5 }",
        "D.  \\frac { 16 } { 25 }"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 10,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\cos\\alpha=\\frac { 4 } { 5 }  với  0 < \\alpha < \\frac { \\pi } { 2 }  . Tính  \\sin\\alpha  .",
      "explanation": "Ta có:  \\sin ^ { 2 } \\alpha=1-\\cos ^ { 2 } \\alpha=1-\\left ( { \\frac { 4 } { 5 } } \\right ) ^ { 2 } =\\frac { 9 } { 25 }  \\Rightarrow \\sin\\alpha=\\pm \\frac { 3 } { 5 }  .\nDo  0 < \\alpha < \\frac { \\pi } { 2 }  nên  \\sin\\alpha>0  . Suy ra,  \\sin\\alpha=\\frac { 3 } { 5 }  .",
      "diagram": null,
      "options": [
        "A.  \\sin\\alpha=\\frac { 1 } { 5 }",
        "B.  \\sin\\alpha=-\\frac { 1 } { 5 }",
        "C.  \\sin\\alpha=\\frac { 3 } { 5 }",
        "D.  \\sin\\alpha=\\pm \\frac { 3 } { 5 }"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 11,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Rút gọn biểu thức  P=\\sin\\left ( { a+\\frac { \\pi } { 4 } } \\right )\\sin\\left ( { a-\\frac { \\pi } { 4 } } \\right )  .",
      "explanation": "Ta có  P=\\sin\\left ( { a+\\frac { \\pi } { 4 } } \\right )\\sin\\left ( { a-\\frac { \\pi } { 4 } } \\right )\\,=\\,\\frac { 1 } { 2 }\\left ( { { c }{ o }{ s }\\frac { \\pi } { 2 }-cos2a } \\right )\\,=\\,\\frac { -1 } { 2 }cos2a  .",
      "diagram": null,
      "options": [
        "A.  -\\frac { 3 } { 2 }cos2a",
        "B.  \\frac { 1 } { 2 }cos2a",
        "C.  -\\frac { 2 } { 3 }cos2a",
        "D.  -\\frac { 1 } { 2 }cos2a"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 12,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Giá trị biểu thức  P=\\sin ^ { 2 } \\frac { \\pi } { 6 }+\\sin ^ { 2 } \\frac { \\pi } { 3 }+\\sin ^ { 2 } \\frac { \\pi } { 4 }+\\sin ^ { 2 } \\frac { 9\\pi } { 4 }+\\tan\\frac { \\pi } { 6 }\\cot\\frac { \\pi } { 6 }  bằng",
      "explanation": "Ta có  \\sin\\frac { \\pi } { 6 }=\\frac { 1 } { 2 }\\Rightarrow \\sin ^ { 2 } \\frac { \\pi } { 6 }=\\frac { 1 } { 4 }  ,  \\sin\\frac { \\pi } { 3 }=\\frac { \\sqrt[] { 3 } } { 2 }\\Rightarrow \\sin ^ { 2 } \\frac { \\pi } { 3 }=\\frac { 3 } { 4 }  ,  \\sin\\frac { \\pi } { 4 }=\\frac { \\sqrt[] { 2 } } { 2 }\\Rightarrow \\sin ^ { 2 } \\frac { \\pi } { 4 }=\\frac { 1 } { 2 }  ,\n \\sin\\frac { 9\\pi } { 4 }=\\sin\\left ( { \\frac { \\pi } { 4 }+2\\pi } \\right )=\\sin\\frac { \\pi } { 4 }=\\frac { \\sqrt[] { 2 } } { 2 }  \\Rightarrow \\sin ^ { 2 } \\frac { 9\\pi } { 4 }=\\frac { 1 } { 2 }  ,  \\tan\\frac { \\pi } { 6 }\\cot\\frac { \\pi } { 6 }=1  .\nSuy ra  P=\\frac { 1 } { 4 }+\\frac { 3 } { 4 }+\\frac { 1 } { 2 }+\\frac { 1 } { 2 }+1=3  .",
      "diagram": null,
      "options": [
        "A.  2",
        "B.  4",
        "C.  3",
        "D.  1"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 13,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\sin\\alpha=\\frac { 3 } { 5 }  và  \\frac { \\pi } { 2 } < \\alpha < \\pi  . Giá trị của  { c }{ o }{ s }\\alpha  là:",
      "explanation": "Ta có:  \\sin ^ { 2 } \\alpha+\\cos ^ { 2 } \\alpha=1  \\Rightarrow \\cos ^ { 2 } \\alpha{ = }{ 1 }-{ s }{ i }{ n } ^ { 2 } \\alpha=1-\\frac { 9 } { 25 }=\\frac { 16 } { 25 }  \\Leftrightarrow \\left[ \\cos\\alpha=\\frac { 4 } { 5 } \\\\ \\cos\\alpha=-\\frac { 4 } { 5 } \\right.  .\nVì  \\frac { \\pi } { 2 } < \\alpha < \\pi  \\Rightarrow { c }{ o }{ s }\\alpha=-\\frac { 4 } { 5 }  .",
      "diagram": null,
      "options": [
        "A.  \\frac { 4 } { 5 }",
        "B.  -\\frac { 4 } { 5 }",
        "C.  \\pm \\frac { 4 } { 5 }",
        "D.  \\frac { 16 } { 25 }"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 14,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\cos\\alpha=\\frac { 4 } { 5 }  với  0 < \\alpha < \\frac { \\pi } { 2 }  . Tính  \\sin\\alpha  .",
      "explanation": "Ta có:  \\sin ^ { 2 } \\alpha=1-\\cos ^ { 2 } \\alpha=1-\\left ( { \\frac { 4 } { 5 } } \\right ) ^ { 2 } =\\frac { 9 } { 25 }  \\Rightarrow \\sin\\alpha=\\pm \\frac { 3 } { 5 }  .\nDo  0 < \\alpha < \\frac { \\pi } { 2 }  nên  \\sin\\alpha>0  . Suy ra,  \\sin\\alpha=\\frac { 3 } { 5 }  .",
      "diagram": null,
      "options": [
        "A.  \\sin\\alpha=\\frac { 1 } { 5 }",
        "B.  \\sin\\alpha=-\\frac { 1 } { 5 }",
        "C.  \\sin\\alpha=\\frac { 3 } { 5 }",
        "D.  \\sin\\alpha=\\pm \\frac { 3 } { 5 }"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 15,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\tan\\alpha=-\\frac { 4 } { 5 }  với  \\frac { { 3 }\\pi } { { 2 } } < \\alpha < 2\\pi  . Khi đó:",
      "explanation": "1+\\tan ^ { 2 } \\alpha=\\frac { 1 } { \\cos ^ { 2 } \\alpha }  \\Rightarrow 1+\\frac { 16 } { 25 }=\\frac { 1 } { \\cos ^ { 2 } \\alpha }  \\Rightarrow \\frac { 1 } { \\cos ^ { 2 } \\alpha }=\\frac { 41 } { 25 }  \\Rightarrow \\cos ^ { 2 } \\alpha=\\frac { 25 } { 41 }  \\Rightarrow \\cos\\alpha=\\pm \\frac { 5 } { \\sqrt[] { 41 } } \n \\sin ^ { 2 } \\alpha=1-\\cos ^ { 2 } \\alpha=1-\\frac { 25 } { 41 }=\\frac { 16 } { 41 }  \\to \\sin\\alpha=\\pm \\frac { 4 } { \\sqrt[] { 41 } } \n \\frac { 3\\pi } { 2 } < \\alpha < 2\\pi  \\Rightarrow \\left[ \\cos\\alpha>0\\to \\cos\\alpha=\\frac { 5 } { \\sqrt[] { 41 } } \\\\ \\sin\\alpha < 0\\to \\sin\\alpha=-\\frac { 4 } { \\sqrt[] { 41 } } \\right.  .",
      "diagram": null,
      "options": [
        "A.  \\sin\\alpha=-\\frac { 4 } { \\sqrt[] { 41 } }  ,  \\cos\\alpha=-\\frac { 5 } { \\sqrt[] { 41 } }",
        "B.  \\sin\\alpha=\\frac { 4 } { \\sqrt[] { 41 } }  ,  \\cos\\alpha=\\frac { 5 } { \\sqrt[] { 41 } }",
        "C.  \\sin\\alpha=-\\frac { 4 } { \\sqrt[] { 41 } }  \\cos\\alpha=\\frac { 5 } { \\sqrt[] { 41 } }",
        "D.  \\sin\\alpha=\\frac { 4 } { \\sqrt[] { 41 } }  ,  \\cos\\alpha=-\\frac { 5 } { \\sqrt[] { 41 } }"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 16,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trên nửa đường tròn đơn vị cho góc  \\alpha  sao cho  \\sin\\alpha=\\frac { 2 } { 3 }  và  \\cos\\alpha < 0  . Tính  \\tan\\alpha  .",
      "explanation": "Có  \\cos ^ { 2 } \\alpha=1-\\sin ^ { 2 } \\alpha  , mà  \\sin\\alpha=\\frac { 2 } { 3 }  .\nSuy ra  \\cos ^ { 2 } \\alpha=\\frac { 5 } { 9 }  , có  \\cos\\alpha < 0  \\Leftrightarrow \\cos\\alpha=-\\frac { \\sqrt[] { 5 } } { 3 }  .\nCó  \\tan\\alpha=\\frac { \\sin\\alpha } { \\cos\\alpha }=-\\frac { 2\\sqrt[] { 5 } } { 5 }  .",
      "diagram": null,
      "options": [
        "A.  \\frac { -2\\sqrt[] { 5 } } { 5 }",
        "B.  \\frac { 2\\sqrt[] { 5 } } { 5 }",
        "C.  \\frac { -2 } { 5 }",
        "D.  1"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 17,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\sin\\alpha=\\frac { 1 } { 3 }  và  \\frac { \\pi } { 2 } < \\alpha < \\pi  . Khi đó  \\cos\\alpha  có giá trị là.",
      "explanation": "Vì  \\frac { \\pi } { 2 } < \\alpha < \\pi  nên  \\cos\\alpha < 0  .\nTa có  \\sin ^ { 2 } \\alpha+{ c }{ o }{ s } ^ { 2 } \\alpha=1\\Rightarrow { c }{ o }{ s } ^ { 2 } \\alpha=1-\\sin ^ { 2 } \\alpha=\\frac { 8 } { 9 }  \\Rightarrow \\left[ \\cos\\alpha=\\sqrt[] { \\frac { 8 } { 9 } }=\\frac { 2\\sqrt[] { 2 } } { 3 }\\left ( { l } \\right ) \\\\ \\cos\\alpha=-\\sqrt[] { \\frac { 8 } { 9 } }=-\\frac { 2\\sqrt[] { 2 } } { 3 }\\left ( { tm } \\right ) \\right.",
      "diagram": null,
      "options": [
        "A.  \\cos\\alpha=-\\frac { 2 } { 3 }",
        "B.  \\cos\\alpha=\\frac { 2\\sqrt[] { 2 } } { 3 }",
        "C.  \\cos\\alpha=\\frac { 8 } { 9 }",
        "D.  \\cos\\alpha=-\\frac { 2\\sqrt[] { 2 } } { 3 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 18,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  P=\\frac { 3sinx-cosx } { sinx+2cosx }  với  tanx=2  . Giá trị của  P  bằng",
      "explanation": "Ta có  P=\\frac { 3sinx-cosx } { sinx+2cosx }=\\frac { 3tanx-1 } { tanx+2 }=\\frac { 3.2-1 } { 2+2 }=\\frac { 5 } { 4 }  .",
      "diagram": null,
      "options": [
        "A.  \\frac { 8 } { 9 }",
        "B.  -\\frac { 2\\sqrt[] { 2 } } { 3 }",
        "C.  \\frac { \\sqrt[] { 8 } } { 9 }",
        "D.  \\frac { 5 } { 4 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 19,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  sinx=\\frac { 1 } { 2 }  và  cosx  nhận giá trị âm, giá trị của biểu thức  A=\\frac { sinx-cosx } { sinx+cosx }  bằng",
      "explanation": "Vì  cosx  nhận giá trị âm nên ta có  cosx=-\\sqrt[] { 1-\\sin ^ { 2 } x }=-\\sqrt[] { 1-\\frac { 1 } { 4 } }=-\\frac { \\sqrt[] { 3 } } { 2 } \nSuy ra:  A=\\frac { \\frac { 1 } { 2 }+\\frac { \\sqrt[] { 3 } } { 2 } } { \\frac { 1 } { 2 }-\\frac { \\sqrt[] { 3 } } { 2 } }=\\frac { 1+\\sqrt[] { 3 } } { 1-\\sqrt[] { 3 } }=-2-\\sqrt[] { 3 }  .",
      "diagram": null,
      "options": [
        "A.  -2-\\sqrt[] { 3 }",
        "B.  2+\\sqrt[] { 3 }",
        "C.  -2+\\sqrt[] { 3 }",
        "D.  2-\\sqrt[] { 3 }"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 20,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Biểu thức  P=\\frac { 3 } { \\cos ^ { 4 } x }-2tan ^ { 4 } x  trên  \\left[ 0;\\frac { \\pi } { 3 } \\right]  đạt giá trị lớn nhất tại",
      "explanation": "Ta có  y=3\\left ( { 1+\\tan ^ { 2 } x } \\right ) ^ { 2 } -2tan ^ { 4 } x\\,\\,\\,\\,=\\tan ^ { 4 } x+6tan ^ { 2 } x+3 \nĐặt  \\tan ^ { 2 } x=u;\\,\\,u\\in \\left[ 0;3 \\right]  vì  x\\in \\left[ 0;\\frac { \\pi } { 3 } \\right] \nXét hàm số:  y=u ^ { 2 } +6u+3  trên  \\left[ 0;3 \\right]  .\nTa có bảng biến thiên\n \\mathop { max } \\limits_{ \\left[ 0;3 \\right] } f\\left ( { u } \\right )=30  và  \\,\\mathop { max } \\limits_{ \\left[ 0;\\frac { \\pi } { 3 } \\right] } y=30\\Leftrightarrow x=\\frac { \\pi } { 3 }  .",
      "diagram": null,
      "options": [
        "A.  x=0",
        "B.  x=\\frac { \\pi } { 3 }",
        "C.  x=\\frac { \\pi } { 6 }",
        "D.  x=\\frac { \\pi } { 12 }"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 21,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một vật dao động điều hòa theo phương trình  x=1,25cos\\left ( { 2\\pit-\\frac { \\pi } { 12 } } \\right )\\,\\,(\\text{cm})\\,  (  t  đo bằng giây). Tính quãng đường vật đi được sau thời gian  t=2,5\\,s  kể từ lúc bắt đầu dao động.",
      "explanation": "Ta có:  x=1,25cos\\left ( { 2\\pit-\\frac { \\pi } { 12 } } \\right )\\,\\,(\\text{cm})\\, \nVới  t=2,5\\,\\,s\\Rightarrow \\left | { x } \\right |=\\left | { 1,25.\\cos\\left ( { 5\\pi-\\frac { \\pi } { 12 } } \\right ) } \\right |\\approx 1,21\\,(\\text{cm}). \nVậy quãng đường vật đi được gần bằng  1,21\\,(\\text{cm}).",
      "diagram": null,
      "options": [
        "A.  4,21\\left ( { \\text{cm} } \\right )",
        "B.  3,21\\left ( { \\text{cm} } \\right )",
        "C.  1,21\\left ( { \\text{cm} } \\right )",
        "D.  2,21\\left ( { \\text{cm} } \\right )  ."
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 22,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Hằng ngày, mực nước của một con kênh lên xuống theo thủy triều. Độ sâu h(m) của con kênh tính theo thời gian  t  (giờ) trong một ngày được cho bởi công thức:  h=\\frac { 1 } { 2 }\\cos\\left ( { \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 } } \\right )+3,\\,\\,\\,0\\le \\,\\,\\,t\\,\\,\\le 24.  Hỏi tại thời nào trong ngày thì mực nước của con kênh cao nhất?",
      "explanation": "Ta có  h=\\frac { 1 } { 2 }\\cos\\left ( { \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 } } \\right )+3,\\,\\,\\,0\\le \\,\\,\\,t\\,\\,\\le 24. \nTa thấy  h  đạt giá trị lớn nhất khi  \\cos\\left ( { \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 } } \\right )=1 \n \\cos\\left ( { \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 } } \\right )=1\\Leftrightarrow \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 }=2k\\pi\\Leftrightarrow t=-2+16k \nDo  t>0  và  0\\le \\,\\,\\,t\\,\\,\\le 24  nên  t=14 \nVậy lúc 14h thì mực nước của con kênh cao nhất.\nB.Câu hỏi – Trả lời Đúng/sai",
      "diagram": null,
      "options": [
        "A.  10\\left ( { h } \\right )",
        "B.  12\\left ( { h } \\right )",
        "C.  14\\left ( { h } \\right )",
        "D.  15\\left ( { h } \\right )  ."
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 23,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ }  . Xét được dấu của các biểu thức sau. Khi đó:",
      "explanation": "(a)  A=\\sin\\left ( { \\alpha+90 ^ { ^\\circ } } \\right )>0  ;\nTa có:  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ } \\Rightarrow 90 ^ { ^\\circ } < \\alpha+90 ^ { ^\\circ } < 180 ^ { ^\\circ } \n \\Rightarrow \\sin\\left ( { \\alpha+90 ^ { ^\\circ } } \\right )>0{ . }{ } \n» Chọn ĐÚNG.\n(b)  B=\\cos\\left ( { \\alpha-45 ^ { ^\\circ } } \\right )>0  ;\nTa có:  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ } \\Rightarrow -45 ^ { ^\\circ } < \\alpha-45 ^ { ^\\circ } < 45 ^ { ^\\circ } \n \\Rightarrow \\cos\\left ( { \\alpha-45 ^ { ^\\circ } } \\right )>0{ . }{ } \n» Chọn ĐÚNG.\n(c)  C=\\tan\\left ( { 270 ^ { ^\\circ } -\\alpha } \\right ) < 0  ;\nTa có:  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ } \\Rightarrow -90 ^ { ^\\circ } < -\\alpha < 0 ^ { ^\\circ } \n \\Rightarrow 270 ^ { ^\\circ } +\\left ( { -90 ^ { ^\\circ } } \\right ) < 270 ^ { ^\\circ } +(-\\alpha) < 270 ^ { ^\\circ } +0 ^ { ^\\circ } \n \\Rightarrow 180 ^ { ^\\circ } < 270 ^ { ^\\circ } -\\alpha < 270 ^ { ^\\circ } \\Rightarrow \\tan\\left ( { 270 ^ { ^\\circ } -\\alpha } \\right )>0 \n» Chọn SAI.\n(d)  D=\\cos\\left ( { 2\\alpha+90 ^ { ^\\circ } } \\right )>0  .\nTa có:  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ } \\Rightarrow 90 ^ { ^\\circ } < 2\\alpha+90 ^ { ^\\circ } < 270 ^ { ^\\circ } \n \\Rightarrow \\cos\\left ( { 2\\alpha+270 ^ { ^\\circ } } \\right ) < 0 \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "A=\\sin\\left ( { \\alpha+90 ^ { ^\\circ } } \\right )>0",
          "correct": true
        },
        {
          "subId": "b",
          "text": "B=\\cos\\left ( { \\alpha-45 ^ { ^\\circ } } \\right )>0",
          "correct": true
        },
        {
          "subId": "c",
          "text": "C=\\tan\\left ( { 270 ^ { ^\\circ } -\\alpha } \\right ) < 0",
          "correct": false
        },
        {
          "subId": "d",
          "text": "D=\\cos\\left ( { 2\\alpha+90 ^ { ^\\circ } } \\right )>0",
          "correct": false
        }
      ]
    },
    {
      "id": 24,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho  tanx=-2  . Tính được các biểu thức  A_{ 1 } =\\frac { 5cotx+4tanx } { 5cotx-4tanx },A_{ 2 } =\\frac { 2sinx+cosx } { cosx-3sinx }  , khi đó:",
      "explanation": "(a)  cotx=-\\frac { 1 } { 2 } \nTa có:  tanx=-2\\Rightarrow cotx=-\\frac { 1 } { 2 } \n» Chọn ĐÚNG.\n(b) Vì  tanx=-2  nên  cosx=0 \nVì  tanx=-2  nên  cosx\\ne 0  .\n» Chọn SAI.\n(c)  A_{ 1 } =-\\frac { 21 } { 11 } \n \\Rightarrow A_{ 1 } =\\frac { -\\frac { 5 } { 2 }+4⋅\\left ( { -2 } \\right ) } { -\\frac { 5 } { 2 }-4⋅\\left ( { -2 } \\right ) }=-\\frac { 21 } { 11 }  .\n» Chọn ĐÚNG.\n(d)  A_{ 2 } =\\frac { 3 } { 7 } \nChia tử và mẫu của biểu thức  A_{ 2 }  cho  cosx  , ta được:\n A_{ 2 } =\\frac { \\frac { 2sinx } { cosx }+\\frac { cosx } { cosx } } { \\frac { cosx } { cosx }-\\frac { 3sinx } { cosx } }=\\frac { 2tanx+1 } { 1-3tanx }=\\frac { 2\\left ( { -2 } \\right )+1 } { 1-3\\left ( { -2 } \\right ) }=-\\frac { 3 } { 7 } \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "cotx=-\\frac { 1 } { 2 }",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Vì  tanx=-2  nên  cosx=0",
          "correct": false
        },
        {
          "subId": "c",
          "text": "A_{ 1 } =-\\frac { 21 } { 11 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "A_{ 2 } =\\frac { 3 } { 7 }",
          "correct": false
        }
      ]
    },
    {
      "id": 25,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho  cotx=2  . Tính được các biểu thức  B_{ 1 } =\\frac { 2sinx+3cosx } { 3sinx-2cosx },B_{ 2 } =\\frac { 2 } { \\cos ^ { 2 } x-sinxcosx }  , khi đó:",
      "explanation": "(a) Vì  cotx=2  nên  sinx\\ne 0  .\nVì  cotx=2  nên  sinx\\ne 0  .\n» Chọn ĐÚNG.\n(b)  B_{ 1 } =-8 \nChia cả tử và mẫu của biểu thức  B_{ 1 }  cho  sinx  , ta được:\n B_{ 1 } =\\frac { 2\\frac { sinx } { sinx }+3\\frac { cosx } { sinx } } { 3\\frac { sinx } { sinx }-2\\frac { cosx } { sinx } }=\\frac { 2+3cotx } { 3-2cotx }=\\frac { 2+3⋅2 } { 3-2⋅2 }=-8 \n» Chọn ĐÚNG.\n(c)  B_{ 2 } =-5 \nChia cả tử và mẫu của biểu thức  B_{ 2 }  cho  \\sin ^ { 2 } x  , ta được:\n B_{ 2 } =\\frac { \\frac { 2 } { \\sin ^ { 2 } x } } { \\frac { \\cos ^ { 2 } x } { \\sin ^ { 2 } x }-\\frac { sinxcosx } { \\sin ^ { 2 } x } }=\\frac { 2\\left ( { 1+\\cot ^ { 2 } x } \\right ) } { \\cot ^ { 2 } x-cotx }=\\frac { 2\\left ( { 1+2 ^ { 2 } } \\right ) } { 2 ^ { 2 } -2 }=5 \n» Chọn SAI.\n(d)  B_{ 1 } +B_{ 2 } =-13 \n B_{ 1 } +B_{ 2 } =-8+5=-3 \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Vì  cotx=2  nên  sinx\\ne 0  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "B_{ 1 } =-8",
          "correct": true
        },
        {
          "subId": "c",
          "text": "B_{ 2 } =-5",
          "correct": false
        },
        {
          "subId": "d",
          "text": "B_{ 1 } +B_{ 2 } =-13",
          "correct": false
        }
      ]
    },
    {
      "id": 26,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Từ một vị trí ban đầu trong không gian, vệ tinh  X  chuyển động theo quỹ đạo là một đường tròn quanh Trái Đất và luôn cách tâm Trái Đất một khoảng bằng  9200 km  . Sau 2 giờ thì vệ tinh  X  hoàn thành hết một vòng di chuyển.",
      "explanation": "(a) Quãng đường vệ tinh  X  chuyển động được sau 1 giờ là:  \\approx 28902,65( km){ . }{ } \nMột vòng di chuyển của  X  chính là chu vi đường tròn:\n C=2\\piR=2\\pi.9200=18400\\pi(km){ . }{ } \nSau 1 giờ, vệ tinh di chuyển nửa đường tròn với quãng đường là:\n \\frac { 1 } { 2 }C=9200\\pi\\approx 28902,65( km){ . }{ } \n» Chọn ĐÚNG.\n(b) Quãng đường vệ tinh  X  chuyển động được sau 1,5 giờ là:  \\approx 43353,98( km) \nSau 1,5 giờ, vệ tinh di chuyển được  \\frac { 1,5.1 } { 2 }  đường tròn (hay  \\frac { 3 } { 4 }  đường tròn), quãng đường là:  \\frac { 3 } { 4 }C=\\frac { 3 } { 4 }⋅18400\\pi=13800\\pi\\approx 43353,98( km)  .\n» Chọn ĐÚNG.\n(c) Sau khoảng 5,3 giờ thì  X  di chuyển được quãng đường  240000 km \nSố giờ để vệ tinh  X  thực hiện quãng đường  240000 km  là:  \\frac { 240000 } { 9200\\pi }\\approx 8,3  (giờ).\n» Chọn SAI.\n(d) Giả sử vệ tinh di chuyển theo chiều dương của đường tròn, sau 4,5 giờ thì vệ tinh vẽ nên một góc  \\frac { 9\\pi } { 2 }  rad\nSau 4,5 giờ thì số vòng tròn mà vệ tinh  X  di chuyển được là:  \\frac { 4,5 } { 2 }=\\frac { 9 } { 4 }  (vòng).\nSố đo góc lượng giác thu được là:  \\frac { 9 } { 4 }⋅2\\pi=\\frac { 9\\pi } { 2 }(rad)  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Quãng đường vệ tinh  X  chuyển động được sau 1 giờ là:  \\approx 28902,65( km){ . }{ }",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Quãng đường vệ tinh  X  chuyển động được sau 1,5 giờ là:  \\approx 43353,98( km)",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Sau khoảng 5,3 giờ thì  X  di chuyển được quãng đường  240000 km",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Giả sử vệ tinh di chuyển theo chiều dương của đường tròn, sau 4,5 giờ thì vệ tinh vẽ nên một góc  \\frac { 9\\pi } { 2 }  rad",
          "correct": true
        }
      ]
    },
    {
      "id": 27,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho  0 < \\alpha < \\frac { \\pi } { 2 }  . Xét được dấu của các biểu thức sau. Khi đó:",
      "explanation": "(a)  A=\\cos\\left ( { \\alpha+\\pi } \\right ) < 0  ;\nVì  0 < \\alpha < \\frac { \\pi } { 2 }\\Rightarrow \\pi < \\alpha+\\pi < \\frac { 3\\pi } { 2 }\\Rightarrow \\cos(\\alpha+\\pi) < 0  .\n» Chọn ĐÚNG.\n(b)  B=\\tan\\left ( { \\alpha-\\pi } \\right )>0  ;\nVì  0 < \\alpha < \\frac { \\pi } { 2 }\\Rightarrow -\\pi < \\alpha-\\pi < -\\frac { \\pi } { 2 }\\Rightarrow \\tan(\\alpha-\\pi)>0  .\n» Chọn ĐÚNG.\n(c)  C=\\sin\\left ( { \\alpha+\\frac { 2\\pi } { 5 } } \\right ) < 0  ;\nVì  0 < \\alpha < \\frac { \\pi } { 2 }\\Rightarrow \\frac { 2\\pi } { 5 } < \\alpha+\\frac { 2\\pi } { 5 } < \\frac { 9\\pi } { 10 }\\Rightarrow \\sin\\left ( { \\alpha+\\frac { 2\\pi } { 5 } } \\right )>0  .\n» Chọn SAI.\n(d)  D=\\cos\\left ( { \\alpha-\\frac { 3\\pi } { 8 } } \\right ) < 0  .\nVì  0 < \\alpha < \\frac { \\pi } { 2 }\\Rightarrow -\\frac { 3\\pi } { 8 } < \\alpha-\\frac { 3\\pi } { 8 } < \\frac { \\pi } { 8 }\\Rightarrow \\cos\\left ( { \\alpha-\\frac { 3\\pi } { 8 } } \\right )>0  .\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "A=\\cos\\left ( { \\alpha+\\pi } \\right ) < 0",
          "correct": true
        },
        {
          "subId": "b",
          "text": "B=\\tan\\left ( { \\alpha-\\pi } \\right )>0",
          "correct": true
        },
        {
          "subId": "c",
          "text": "C=\\sin\\left ( { \\alpha+\\frac { 2\\pi } { 5 } } \\right ) < 0",
          "correct": false
        },
        {
          "subId": "d",
          "text": "D=\\cos\\left ( { \\alpha-\\frac { 3\\pi } { 8 } } \\right ) < 0",
          "correct": false
        }
      ]
    },
    {
      "id": 28,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Tính được các giá trị lượng giác còn lại của góc  x  , biết:  tanx=\\frac { 1 } { 3 }  với  \\frac { \\pi } { 2 } < x < \\pi  , khi đó:",
      "explanation": "(a)  cosx < 0 \nVì  \\frac { \\pi } { 2 } < x < \\pi  nên  cosx < 0  .\n» Chọn ĐÚNG.\n(b)  cosx=-\\frac { \\sqrt[] { 10 } } { 10 } \nTa có:  \\frac { 1 } { \\cos ^ { 2 } x }=1+\\tan ^ { 2 } x=1+\\frac { 1 } { 9 }=\\frac { 10 } { 9 }\\Rightarrow \\cos ^ { 2 } x=\\frac { 9 } { 10 }\\Rightarrow cosx=-\\frac { 3\\sqrt[] { 10 } } { 10 }  ;\n» Chọn SAI.\n(c)  sinx=-\\frac { \\sqrt[] { 10 } } { 10 } \n sinx=cosxtanx=-\\frac { 3\\sqrt[] { 10 } } { 10 }⋅\\frac { 1 } { 3 }=-\\frac { \\sqrt[] { 10 } } { 10 } \n» Chọn ĐÚNG.\n(d)  sinx+cosx=-\\frac { \\sqrt[] { 10 } } { 5 } \n sinx+cosx=-\\frac { 2\\sqrt[] { 10 } } { 5 } \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "cosx < 0",
          "correct": true
        },
        {
          "subId": "b",
          "text": "cosx=-\\frac { \\sqrt[] { 10 } } { 10 }",
          "correct": false
        },
        {
          "subId": "c",
          "text": "sinx=-\\frac { \\sqrt[] { 10 } } { 10 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "sinx+cosx=-\\frac { \\sqrt[] { 10 } } { 5 }",
          "correct": false
        }
      ]
    },
    {
      "id": 29,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Tính được các giá trị lượng giác của góc  \\alpha  , biết:  \\sin\\alpha=-\\frac { \\sqrt[] { 7 } } { 4 },-\\frac { \\pi } { 2 } < \\alpha < 0  . Khi đó:",
      "explanation": "(a)  \\cos ^ { 2 } \\alpha=\\frac { 9 } { 16 } \n \\sin\\alpha=\\frac { \\sqrt[] { 7 } } { 4 },-\\frac { \\pi } { 2 } < \\alpha < 0. \n \\sin ^ { 2 } \\alpha+\\cos ^ { 2 } \\alpha=1\\Rightarrow \\cos ^ { 2 } \\alpha=\\frac { 9 } { 16 } \n» Chọn ĐÚNG.\n(b)  \\cos\\alpha=-\\frac { 3 } { 4 } \nVì  -\\frac { \\pi } { 2 } < \\alpha < 0\\Rightarrow \\cos\\alpha>0\\Rightarrow \\cos\\alpha=\\frac { 3 } { 4 } \n» Chọn SAI.\n(c)  \\cot\\alpha=-\\frac { 3 } { \\sqrt[] { 7 } } \n \\tan\\alpha=\\frac { \\sin\\alpha } { \\cos\\alpha }=-\\frac { \\sqrt[] { 7 } } { 3 };\\cot\\alpha=-\\frac { 3 } { \\sqrt[] { 7 } } \n» Chọn ĐÚNG.\n(d)  \\tan\\alpha+\\cot\\alpha=-\\frac { 16\\sqrt[] { 7 } } { 23 } \n \\tan\\alpha+\\cot\\alpha=-\\frac { 16\\sqrt[] { 7 } } { 21 } \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\cos ^ { 2 } \\alpha=\\frac { 9 } { 16 }",
          "correct": true
        },
        {
          "subId": "b",
          "text": "\\cos\\alpha=-\\frac { 3 } { 4 }",
          "correct": false
        },
        {
          "subId": "c",
          "text": "\\cot\\alpha=-\\frac { 3 } { \\sqrt[] { 7 } }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "\\tan\\alpha+\\cot\\alpha=-\\frac { 16\\sqrt[] { 7 } } { 23 }",
          "correct": false
        }
      ]
    },
    {
      "id": 30,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Tính được các giá trị lượng giác của góc  \\alpha  , biết:  \\tan\\alpha=2,0 < \\alpha < \\frac { \\pi } { 2 }  . Khi đó",
      "explanation": "(a)  \\cot\\alpha=\\frac { 1 } { 2 } \n \\tan\\alpha=2\\,\\,\\,\\left ( { 0 < \\alpha < \\frac { \\pi } { 2 } } \\right ) \nTa có:  \\cot\\alpha=\\frac { 1 } { \\tan\\alpha }=\\frac { 1 } { 2 } \n» Chọn ĐÚNG.\n(b)  \\cos ^ { 2 } \\alpha=\\frac { 1 } { 5 } \n 1+\\tan ^ { 2 } \\alpha=\\frac { 1 } { \\cos ^ { 2 } \\alpha }\\Rightarrow \\cos ^ { 2 } \\alpha=\\frac { 1 } { 5 }  ,\n» Chọn ĐÚNG.\n(c)  \\cos\\alpha=-\\frac { \\sqrt[] { 5 } } { 5 } \nVì  0 < \\alpha < \\frac { \\pi } { 2 }  nên  \\cos\\alpha=\\frac { \\sqrt[] { 5 } } { 5 }  .\n» Chọn SAI.\n(d)  \\sin\\alpha=\\frac { 2\\sqrt[] { 5 } } { 5 } \n \\tan\\alpha=\\frac { \\sin\\alpha } { \\cos\\alpha }\\Rightarrow \\sin\\alpha=\\frac { 2\\sqrt[] { 5 } } { 5 }  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\cot\\alpha=\\frac { 1 } { 2 }",
          "correct": true
        },
        {
          "subId": "b",
          "text": "\\cos ^ { 2 } \\alpha=\\frac { 1 } { 5 }",
          "correct": true
        },
        {
          "subId": "c",
          "text": "\\cos\\alpha=-\\frac { \\sqrt[] { 5 } } { 5 }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "\\sin\\alpha=\\frac { 2\\sqrt[] { 5 } } { 5 }",
          "correct": true
        }
      ]
    },
    {
      "id": 31,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Tính được các giá trị lượng giác của góc  \\alpha  , biết:  \\sin\\alpha=\\frac { 2 } { 3 },\\frac { \\pi } { 2 } < \\alpha < \\pi  . Khi đó:",
      "explanation": "(a)  \\cos\\alpha < 0 \n \\frac { \\pi } { 2 } < \\alpha < \\pi\\Rightarrow \\cos\\alpha < 0 \n» Chọn ĐÚNG.\n(b)  \\cos\\alpha=\\frac { \\sqrt[] { 5 } } { 3 } \n \\cos\\alpha=-\\sqrt[] { 1-\\sin ^ { 2 } \\alpha }=\\sqrt[] { 1-\\frac { 4 } { 9 } }=-\\frac { \\sqrt[] { 5 } } { 3 }  ,\n» Chọn SAI.\n(c)  \\tan\\alpha=-\\frac { 2 } { \\sqrt[] { 5 } } \n \\tan\\alpha=\\frac { \\sin\\alpha } { \\cos\\alpha }=\\frac { \\frac { 2 } { 3 } } { -\\frac { \\sqrt[] { 5 } } { 3 } }=-\\frac { 2 } { \\sqrt[] { 5 } } \n» Chọn ĐÚNG.\n(d)  \\cot\\alpha=-\\frac { \\sqrt[] { 5 } } { 2 } \n \\cot\\alpha=\\frac { 1 } { \\tan\\alpha }=\\frac { 1 } { -\\frac { 2 } { \\sqrt[] { 5 } } }=-\\frac { \\sqrt[] { 5 } } { 2 } \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\cos\\alpha < 0",
          "correct": true
        },
        {
          "subId": "b",
          "text": "\\cos\\alpha=\\frac { \\sqrt[] { 5 } } { 3 }",
          "correct": false
        },
        {
          "subId": "c",
          "text": "\\tan\\alpha=-\\frac { 2 } { \\sqrt[] { 5 } }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "\\cot\\alpha=-\\frac { \\sqrt[] { 5 } } { 2 }",
          "correct": true
        }
      ]
    },
    {
      "id": 32,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Tính được các giá trị lượng giác của góc  \\alpha  , biết:  \\cos\\alpha=-\\frac { 3 } { 4 },-\\frac { 3\\pi } { 2 } < \\alpha < -\\pi  . Khi đó:",
      "explanation": "(a)  \\sin\\alpha < 0 \n -\\frac { 3\\pi } { 2 } < \\alpha < -\\pi\\Rightarrow \\sin\\alpha>0 \n» Chọn SAI.\n(b)  \\sin\\alpha=-\\frac { \\sqrt[] { 7 } } { 4 } \n \\sin\\alpha=\\sqrt[] { 1-\\cos ^ { 2 } \\alpha }=\\sqrt[] { 1-\\frac { 9 } { 16 } }=\\frac { \\sqrt[] { 7 } } { 4 }  ;\n» Chọn SAI.\n(c)  \\tan\\alpha=\\frac { -\\sqrt[] { 7 } } { 3 } \n \\tan\\alpha=\\frac { \\sin\\alpha } { \\cos\\alpha }=\\frac { \\frac { \\sqrt[] { 7 } } { 4 } } { -\\frac { 3 } { 4 } }=\\frac { -\\sqrt[] { 7 } } { 3 } \n» Chọn ĐÚNG.\n(d)  \\cot\\alpha=-\\frac { 3 } { \\sqrt[] { 7 } }. \n \\cot\\alpha=\\frac { 1 } { \\tan\\alpha }=\\frac { 1 } { \\frac { -\\sqrt[] { 7 } } { 3 } }=-\\frac { 3 } { \\sqrt[] { 7 } } \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\sin\\alpha < 0",
          "correct": false
        },
        {
          "subId": "b",
          "text": "\\sin\\alpha=-\\frac { \\sqrt[] { 7 } } { 4 }",
          "correct": false
        },
        {
          "subId": "c",
          "text": "\\tan\\alpha=\\frac { -\\sqrt[] { 7 } } { 3 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "\\cot\\alpha=-\\frac { 3 } { \\sqrt[] { 7 } }.",
          "correct": true
        }
      ]
    },
    {
      "id": 33,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Tính được các giá trị lượng giác của góc  \\alpha  , biết:  \\tan\\alpha=\\frac { 2\\sqrt[] { 10 } } { 9 },\\pi < \\alpha < \\frac { 3\\pi } { 2 }  . Khi đó:",
      "explanation": "(a)  \\cot\\alpha=\\frac { 9 } { 2\\sqrt[] { 10 } } \n \\cot\\alpha=\\frac { 9 } { 2\\sqrt[] { 10 } } \n» Chọn ĐÚNG.\n(b)  \\cos\\alpha=-\\frac { 9 } { 11 } \n \\cos\\alpha=-\\sqrt[] { \\frac { 1 } { \\tan ^ { 2 } \\alpha+1 } }=-\\sqrt[] { \\frac { 1 } { \\frac { 40 } { 81 }+1 } }=-\\frac { 9 } { 11 } \n» Chọn ĐÚNG.\n(c)  \\left \\{ \\begin{array}{l} \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\end{array} \\right. \n \\pi < \\alpha < \\frac { 3\\pi } { 2 }\\Rightarrow \\left \\{ \\begin{array}{l} \\cos\\alpha < 0 \\\\ \\sin\\alpha < 0 \\end{array} \\right. \n» Chọn ĐÚNG.\n(d)  \\sin\\alpha=-\\frac { 2\\sqrt[] { 10 } } { 11 } \n \\sin\\alpha=-\\sqrt[] { 1-\\cos ^ { 2 } \\alpha }=-\\sqrt[] { 1-\\frac { 81 } { 121 } }=\\frac { 2\\sqrt[] { 10 } } { 11 } \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\cot\\alpha=\\frac { 9 } { 2\\sqrt[] { 10 } }",
          "correct": true
        },
        {
          "subId": "b",
          "text": "\\cos\\alpha=-\\frac { 9 } { 11 }",
          "correct": true
        },
        {
          "subId": "c",
          "text": "\\left \\{ \\begin{array}{l} \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\end{array} \\right.",
          "correct": true
        },
        {
          "subId": "d",
          "text": "\\sin\\alpha=-\\frac { 2\\sqrt[] { 10 } } { 11 }",
          "correct": false
        }
      ]
    },
    {
      "id": 34,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Tính được các giá trị lượng giác của góc  \\alpha  , biết:  \\cot\\alpha=\\sqrt[] { 2 }+1,0 < \\alpha < \\frac { \\pi } { 2 }  . Khi đó:",
      "explanation": "(a)  \\left \\{ \\begin{array}{l} \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\end{array} \\right. \n 0 < \\alpha < \\frac { \\pi } { 2 }\\Rightarrow \\left \\{ \\begin{array}{l} \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\end{array} \\right.  ;\n» Chọn ĐÚNG.\n(b)  \\tan\\alpha=\\sqrt[] { 2 }+1 \n \\tan\\alpha=\\frac { 1 } { \\sqrt[] { 2 }+1 }=\\sqrt[] { 2 }-1  ;\n» Chọn SAI.\n(c)  \\sin\\alpha=\\frac { \\sqrt[] { 2-\\sqrt[] { 2 } } } { 2 } \n \\sin\\alpha=\\sqrt[] { \\frac { 1 } { \\cot ^ { 2 } \\alpha+1 }=\\sqrt[] { \\frac { 1 } { \\left ( { \\sqrt[] { 2 }+1 } \\right ) ^ { 2 } +1 } }=\\frac { \\sqrt[] { 2-\\sqrt[] { 2 } } } { 2 } } \n» Chọn ĐÚNG.\n(d)  \\cos\\alpha=\\frac { \\sqrt[] { 2+\\sqrt[] { 2 } } } { 2 } \n \\cos\\alpha=\\sqrt[] { 1-\\left ( { \\frac { \\sqrt[] { 2-\\sqrt[] { 2 } } } { 2 } } \\right ) ^ { 2 } }=\\frac { \\sqrt[] { 2+\\sqrt[] { 2 } } } { 2 } \n» Chọn ĐÚNG.\nC.Câu hỏi – Trả lời ngắn",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\left \\{ \\begin{array}{l} \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\end{array} \\right.",
          "correct": true
        },
        {
          "subId": "b",
          "text": "\\tan\\alpha=\\sqrt[] { 2 }+1",
          "correct": false
        },
        {
          "subId": "c",
          "text": "\\sin\\alpha=\\frac { \\sqrt[] { 2-\\sqrt[] { 2 } } } { 2 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "\\cos\\alpha=\\frac { \\sqrt[] { 2+\\sqrt[] { 2 } } } { 2 }",
          "correct": true
        }
      ]
    },
    {
      "id": 35,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  cosx=\\frac { 1 } { 2 }  . Tính giá trị biểu thức  P=3sin ^ { 2 } x+4cos ^ { 2 } x  .",
      "explanation": "Ta có:  cosx=\\frac { 1 } { 2 }\\Rightarrow \\sin ^ { 2 } x=1-\\cos ^ { 2 } x=1-\\frac { 1 } { 4 }=\\frac { 3 } { 4 }  .\nKhi đó:  P=3sin ^ { 2 } x+4cos ^ { 2 } x=3⋅\\frac { 3 } { 4 }+4⋅\\frac { 1 } { 4 }=\\frac { 13 } { 4 }  .",
      "diagram": null,
      "correctAnswer": "3,25"
    },
    {
      "id": 36,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Biểu thức sau:  T=2sin\\left ( { \\frac { 9\\pi } { 2 }-x } \\right )+3cos\\left ( { 19\\pi-x } \\right )=kcosx  . Khi đó  k=?",
      "explanation": "Ta có:  T=2sin\\left ( { 4\\pi+\\frac { \\pi } { 2 }-x } \\right )+3cos\\left ( { 18\\pi+\\pi-x } \\right ) \n =2sin\\left ( { \\frac { \\pi } { 2 }-x } \\right )+3cos\\left ( { \\pi-x } \\right )=2cosx-3cosx=-cosx",
      "diagram": null,
      "correctAnswer": "-1"
    },
    {
      "id": 37,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Biểu thức sau:  S=\\frac { \\sin\\left ( { \\frac { 15\\pi } { 2 }-x } \\right )-2cos\\left ( { x-\\pi } \\right ) } { \\cos\\left ( { \\frac { 5\\pi } { 2 }-x } \\right ) }=kcotx  . Khi đó  k=?",
      "explanation": "Ta có:  S=\\frac { \\sin\\left ( { 7\\pi+\\frac { \\pi } { 2 }-x } \\right )-2cos(\\pi-x) } { \\cos\\left ( { 2\\pi+\\frac { \\pi } { 2 }-x } \\right ) } \n =\\frac { \\sin\\left ( { \\pi+\\frac { \\pi } { 2 }-x } \\right )+2cosx } { \\cos\\left ( { \\frac { \\pi } { 2 }-x } \\right ) }=\\frac { -\\sin\\left ( { \\frac { \\pi } { 2 }-x } \\right )+2cosx } { sinx }=\\frac { -cosx+2cosx } { sinx }=\\frac { cosx } { sinx }=cotx",
      "diagram": null,
      "correctAnswer": "1"
    },
    {
      "id": 38,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho tam giác  ABC  , khi đó biểu thức  \\frac { \\sin ^ { 3 } \\frac { \\widehat { B } } { 2 } } { \\cos\\left ( { \\frac { \\widehat { A }+ \\widehat { C } } { 2 } } \\right ) }+\\frac { \\cos ^ { 3 } \\frac { \\widehat { B } } { 2 } } { \\sin\\left ( { \\frac { \\widehat { A }+ \\widehat { C } } { 2 } } \\right ) }-\\frac { \\cos( \\widehat { A }+ \\widehat { C }) } { sinB }\\tan \\widehat { B }  bằng?",
      "explanation": "Vì  \\widehat { A }+ \\widehat { B }+ \\widehat { C }=180 ^ { ^\\circ }  nên  \\widehat { A }+ \\widehat { C }=180 ^ { ^\\circ } - \\widehat { B }  .\n { }{ V }{ T }{ }=\\frac { \\sin ^ { 3 } \\frac { \\widehat { B } } { 2 } } { \\cos\\left ( { \\frac { 180 ^ { ^\\circ } - \\widehat { B } } { 2 } } \\right ) }+\\frac { \\cos ^ { 3 } \\frac { \\widehat { B } } { 2 } } { \\sin\\left ( { \\frac { 180 ^ { ^\\circ } - \\widehat { B } } { 2 } } \\right ) }-\\frac { \\cos\\left ( { 180 ^ { ^\\circ } - \\widehat { B } } \\right ) } { \\sin \\widehat { B } }⋅\\tan \\widehat { B } \n =\\frac { \\sin ^ { 3 } \\frac { \\widehat { B } } { 2 } } { \\sin\\frac { \\widehat { B } } { 2 } }+\\frac { \\cos ^ { 3 } \\frac { \\widehat { B } } { 2 } } { \\cos\\frac { \\widehat { B } } { 2 } }-\\frac { -\\cos \\widehat { B } } { \\sin \\widehat { B } }⋅\\tan \\widehat { B }=\\sin ^ { 2 } \\frac { \\widehat { B } } { 2 }+\\cos ^ { 2 } \\frac { \\widehat { B } } { 2 }+\\cot \\widehat { B }⋅\\tan \\widehat { B }=1+1=2={ V }{ P }",
      "diagram": null,
      "correctAnswer": "2"
    },
    {
      "id": 39,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Biểu thức  A=\\tan\\left ( { \\frac { 17\\pi } { 2 }-x } \\right )+2cot\\left ( { 5\\pi+x } \\right )=kcotx  , khi đó:  k=?",
      "explanation": "A=\\tan\\left ( { 8\\pi+\\frac { \\pi } { 2 }-x } \\right )+2cotx=\\tan\\left ( { \\frac { \\pi } { 2 }-x } \\right )+2cotx=cotx+2cotx=3cotx",
      "diagram": null,
      "correctAnswer": "3"
    },
    {
      "id": 40,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Biểu thức  B=\\frac { 2sin(x-4\\pi)+\\cos\\left ( { x-\\frac { 5\\pi } { 2 } } \\right ) } { \\sin\\left ( { \\frac { 3\\pi } { 2 }-x } \\right ) }=ktanx  , khi đó:  k=?",
      "explanation": "B=\\frac { 2sinx+\\cos\\left ( { x-\\frac { \\pi } { 2 }-2\\pi } \\right ) } { \\sin\\left ( { \\pi+\\frac { \\pi } { 2 }-x } \\right ) }=\\frac { 2sinx+\\cos\\left ( { x-\\frac { \\pi } { 2 } } \\right ) } { -\\sin\\left ( { \\frac { \\pi } { 2 }-x } \\right ) }=\\frac { 2sinx+\\cos\\left ( { \\frac { \\pi } { 2 }-x } \\right ) } { -cosx } \n =\\frac { 2sinx+sinx } { -cosx }=-3tanx  .",
      "diagram": null,
      "correctAnswer": "-3"
    },
    {
      "id": 41,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  \\cot\\alpha=\\frac { 1 } { 3 }  . Tính giá trị của biểu thức  A=\\frac { 3sin\\alpha+4cos\\alpha } { 2sin\\alpha-5cos\\alpha }  .",
      "explanation": "Vì  \\cot\\alpha=\\frac { 1 } { 3 }  nên  \\sin\\alpha\\ne 0  . Chia cả tử và mẫu của biểu thức  A  cho  \\sin\\alpha  , ta có:  A=\\frac { 3+4cot\\alpha } { 2-5cot\\alpha }=\\frac { 3+4⋅\\frac { 1 } { 3 } } { 2-5⋅\\frac { 1 } { 3 } }=13  .",
      "diagram": null,
      "correctAnswer": "13"
    },
    {
      "id": 42,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  \\cos\\alpha=\\frac { 3 } { 4 }  . Tính giá trị của biểu thức  B=\\frac { \\tan\\alpha+3cot\\alpha } { \\tan\\alpha+\\cot\\alpha }  . Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "Ta có:  \\cos\\alpha=\\frac { 3 } { 4 }\\Rightarrow 1+\\tan ^ { 2 } \\alpha=\\frac { 1 } { \\cos ^ { 2 } \\alpha }=\\frac { 16 } { 9 }\\Rightarrow \\tan ^ { 2 } \\alpha=\\frac { 7 } { 9 }  .\nKhi đó:  B=\\frac { \\tan\\alpha+\\frac { 3 } { \\tan\\alpha } } { \\tan\\alpha+\\frac { 1 } { \\tan\\alpha } }=\\frac { \\tan ^ { 2 } \\alpha+3 } { \\tan ^ { 2 } \\alpha+1 }=\\frac { \\frac { 7 } { 9 }+3 } { \\frac { 7 } { 9 }+1 }=\\frac { 17 } { 8 }\\approx 2,13  .",
      "diagram": null,
      "correctAnswer": "2,13"
    },
    {
      "id": 43,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  \\tan\\alpha=\\sqrt[] { 2 }  . Tính giá trị của biểu thức  C=\\frac { \\sin\\alpha-\\cos\\alpha } { \\sin ^ { 3 } \\alpha+3cos ^ { 3 } \\alpha+2sin\\alpha }  . Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "Vì  \\tan\\alpha=\\sqrt[] { 2 }  nên  \\cos\\alpha\\ne 0  . Chia cả tử và mẫu của biểu thức  C  cho  \\cos ^ { 3 } \\alpha  , ta được:\n C=\\frac { \\frac { \\sin\\alpha } { \\cos\\alpha }⋅\\frac { 1 } { \\cos ^ { 2 } \\alpha }-\\frac { 1 } { \\cos ^ { 2 } \\alpha } } { \\tan ^ { 3 } \\alpha+3+2⋅\\frac { \\sin\\alpha } { \\cos\\alpha }⋅\\frac { 1 } { \\cos ^ { 2 } \\alpha } }=\\frac { \\tan\\alpha\\left ( { 1+\\tan ^ { 2 } \\alpha } \\right )-\\left ( { 1+\\tan ^ { 2 } \\alpha } \\right ) } { \\tan ^ { 3 } \\alpha+3+2tan\\alpha\\left ( { 1+\\tan ^ { 2 } \\alpha } \\right ) } \n =\\frac { \\left ( { 1+\\tan ^ { 2 } \\alpha } \\right )\\left ( { \\tan\\alpha-1 } \\right ) } { 3tan ^ { 3 } \\alpha+2tan\\alpha+3 }=\\frac { \\left ( { 1+2 } \\right )\\left ( { \\sqrt[] { 2 }-1 } \\right ) } { 3⋅2\\sqrt[] { 2 }+2\\sqrt[] { 2 }+3 }=\\frac { 3(\\sqrt[] { 2 }-1) } { 8\\sqrt[] { 2 }+3 }",
      "diagram": null,
      "correctAnswer": "0,09"
    },
    {
      "id": 44,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Biết  sina+cosa=\\sqrt[] { 2 }  . Tính giá trị của  \\sin ^ { 4 } a+\\cos ^ { 4 } a  .",
      "explanation": "Ta có:\n sina+cosa=\\sqrt[] { 2 } \n \\Rightarrow 2=\\left ( { sina+cosa } \\right ) ^ { 2 } =\\sin ^ { 2 } a+2sinacosa+\\cos ^ { 2 } a=1+2sinacosa\\Rightarrow sinacosa=\\frac { 1 } { 2 } \nKhi đó:  \\sin ^ { 4 } a+\\cos ^ { 4 } a=\\left ( { \\sin ^ { 2 } a+\\cos ^ { 2 } a } \\right ) ^ { 2 } -2sin ^ { 2 } acos ^ { 2 } a=1-2\\left ( { \\frac { 1 } { 2 } } \\right ) ^ { 2 } =\\frac { 1 } { 2 }  .",
      "diagram": null,
      "correctAnswer": "0,5"
    },
    {
      "id": 45,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Đơn giản các biểu thức sau (giả sử mỗi biểu thức sau luôn có nghĩa):  C=\\frac { \\cos ^ { 2 } x-\\sin ^ { 2 } y } { \\sin ^ { 2 } xsin ^ { 2 } y }-\\cot ^ { 2 } xcot ^ { 2 } y  .",
      "explanation": "\\begin{array} {} \\begin{array} {} \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array}",
      "diagram": null,
      "correctAnswer": "-1"
    },
    {
      "id": 46,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Trong tam giác  ABC  ta có:  \\cos \\widehat { A }+\\cos( \\widehat { B }+ \\widehat { C })+\\tan\\frac { \\widehat { A }+ \\widehat { B } } { 2 }=kcot\\frac { \\widehat { C } } { 2 }  . Khi đó:  k=?",
      "explanation": "Vì  \\widehat { A }+ \\widehat { B }+ \\widehat { C }=180 ^ { ^\\circ }  nên  \\widehat { B }+ \\widehat { C }=180 ^ { ^\\circ } - \\widehat { A }  và  \\frac { \\widehat { A }+ \\widehat { B } } { 2 }=\\frac { 180 ^ { ^\\circ } - \\widehat { C } } { 2 }  .\nDo đó:\n \\cos \\widehat { A }+\\cos( \\widehat { B }+ \\widehat { C })+\\tan\\frac { \\widehat { A }+ \\widehat { B } } { 2 }=\\cos \\widehat { A }+\\cos\\left ( { 180 ^ { ^\\circ } - \\widehat { A } } \\right )+\\tan\\frac { 180 ^ { ^\\circ } - \\widehat { C } } { 2 } \\\\ =\\cos \\widehat { A }-\\cos \\widehat { A }+\\tan\\left ( { 90 ^ { ^\\circ } -\\frac { \\widehat { C } } { 2 } } \\right )=\\cot\\frac { \\widehat { C } } { 2 }",
      "diagram": null,
      "correctAnswer": "1"
    },
    {
      "id": 47,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho biểu thức  f\\left ( { x } \\right )=3\\left ( { \\sin ^ { 4 } x+\\cos ^ { 4 } x } \\right )-2\\left ( { \\sin ^ { 6 } x+\\cos ^ { 6 } x } \\right )  tính  f\\left ( { 1 } \\right )",
      "explanation": "Ta có:  \\sin ^ { 4 } x+\\cos ^ { 4 } x=1-2sin ^ { 2 } xcos ^ { 2 } x,\\sin ^ { 6 } x+\\cos ^ { 6 } x=1-3sin ^ { 2 } xcos ^ { 2 } x  .\nSuy ra:  f\\left ( { x } \\right )=3\\left ( { 1-2sin ^ { 2 } xcos ^ { 2 } x } \\right )-2\\left ( { 1-3sin ^ { 2 } xcos ^ { 2 } x } \\right )=1  .\nVậy biểu thức  f\\left ( { x } \\right )  không phụ thuộc vào  x  nên  f\\left ( { 1 } \\right )=1",
      "diagram": null,
      "correctAnswer": "1"
    },
    {
      "id": 48,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho biểu thức  g\\left ( { x } \\right )=\\frac { -2cot ^ { 2 } x-\\cos ^ { 2 } x } { \\cot ^ { 2 } x }+\\frac { sinxcosx } { cotx }  với  x\\ne 0,x\\ne \\frac { \\pi } { 2 },x\\ne \\pi  . Tính  g\\left ( { \\frac { 2024\\pi } { 2023 } } \\right )",
      "explanation": "g\\left ( { x } \\right )=-2-\\frac { \\cos ^ { 2 } x } { \\cot ^ { 2 } x }+\\frac { sinxcosx } { \\frac { cosx } { sinx } }  =-2-\\frac { \\cos ^ { 2 } x } { \\frac { \\cos ^ { 2 } x } { \\sin ^ { 2 } x } }+\\sin ^ { 2 } x=-2-\\sin ^ { 2 } x+\\sin ^ { 2 } x=-2. \nVậy biểu thức  g\\left ( { x } \\right )  không phụ thuộc vào  x  nên  g\\left ( { \\frac { 2024\\pi } { 2023 } } \\right )=-2",
      "diagram": null,
      "correctAnswer": "-2"
    },
    {
      "id": 49,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho hai góc nhọn  a  và  b  . Biết  cosa=\\frac { 1 } { 3 }  và  cosb=\\frac { 1 } { 4 }  . Tính giá trị của:  P=\\left ( { cosa⋅cosb } \\right ) ^ { 2 } -\\left ( { sina⋅sinb } \\right ) ^ { 2 } .  Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "Ta có:\n P==\\left ( { cosacosb } \\right ) ^ { 2 } -\\left ( { sinasinb } \\right ) ^ { 2 } =\\left ( { cosacosb } \\right ) ^ { 2 } -\\left ( { 1-\\cos ^ { 2 } a } \\right )\\left ( { 1-\\cos ^ { 2 } b } \\right )=\\left ( { \\frac { 1 } { 12 } } \\right ) ^ { 2 } -\\frac { 8 } { 9 }⋅\\frac { 15 } { 16 }=-\\frac { 119 } { 144 }",
      "diagram": null,
      "correctAnswer": "-0,83"
    },
    {
      "id": 50,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  tanx=-\\frac { 4 } { 3 }  và  \\frac { \\pi } { 2 } < x < \\pi  . Tính giá trị của biểu thức  M=\\frac { \\sin ^ { 2 } x-cosx } { sinx-\\cos ^ { 2 } x }  . Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "Ta có:  tanx=-\\frac { 4 } { 3 }\\Rightarrow \\cos ^ { 2 } x=\\frac { 1 } { 1+\\tan ^ { 2 } x }=\\frac { 9 } { 25 }\\Rightarrow cosx=\\pm \\frac { 3 } { 5 }  .\nVì  \\frac { \\pi } { 2 } < x < \\pi\\Rightarrow cosx=-\\frac { 3 } { 5 }\\Rightarrow sinx=tanx⋅cosx=\\frac { 4 } { 5 }\\Rightarrow M=\\frac { \\sin ^ { 2 } x-cosx } { sinx-\\cos ^ { 2 } x }=\\frac { 31 } { 11 }  .",
      "diagram": null,
      "correctAnswer": "2,82"
    },
    {
      "id": 51,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  3cos\\alpha-\\sin\\alpha=1,0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ }  . Tính giá trị của  \\tan\\alpha  . Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "Ta có  3cos\\alpha-\\sin\\alpha=1\\Leftrightarrow 3cos\\alpha=\\sin\\alpha+1\\to 9cos ^ { 2 } \\alpha=(\\sin\\alpha+1) ^ { 2 } \n \\Leftrightarrow 9cos ^ { 2 } \\alpha=\\sin ^ { 2 } \\alpha+2sin\\alpha+1\\Leftrightarrow 9\\left ( { 1-\\sin ^ { 2 } \\alpha } \\right )=\\sin ^ { 2 } \\alpha+2sin\\alpha+1 \n \\Leftrightarrow 10sin ^ { 2 } \\alpha+2sin\\alpha-8=0\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.  .\n-  \\sin\\alpha=-1  : không thỏa mãn vì  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ }  .\n-  \\sin\\alpha=\\frac { 4 } { 5 }\\Rightarrow \\cos\\alpha=\\frac { 3 } { 5 }\\to \\tan\\alpha=\\frac { \\sin\\alpha } { \\cos\\alpha }=\\frac { 4 } { 3 }  .",
      "diagram": null,
      "correctAnswer": "1,33"
    },
    {
      "id": 52,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho biểu thức  A=\\frac { \\left ( { 1-\\tan ^ { 2 } x } \\right ) ^ { 2 } } { 4tan ^ { 2 } x }-\\frac { 1 } { 4sin ^ { 2 } xcos ^ { 2 } x }  khi  x=\\frac { 2024\\pi } { 2023 }  thì  A  bằng bao nhiêu?",
      "explanation": "Ta có:\n A=\\frac { \\left ( { 1-\\frac { \\sin ^ { 2 } x } { \\cos ^ { 2 } x } } \\right ) ^ { 2 } } { 4tan ^ { 2 } x }-\\frac { 1 } { 4sin ^ { 2 } xcos ^ { 2 } x }=\\frac { \\left ( { \\cos ^ { 2 } x-\\sin ^ { 2 } x } \\right ) ^ { 2 } } { 4sin ^ { 2 } xcos ^ { 2 } x }-\\frac { 1 } { 4sin ^ { 2 } xcos ^ { 2 } x } \\\\ A=\\frac { \\left ( { \\cos ^ { 2 } x-\\sin ^ { 2 } x+1 } \\right )\\left ( { \\cos ^ { 2 } x-\\sin ^ { 2 } x-1 } \\right ) } { 4sin ^ { 2 } xcos ^ { 2 } x }=\\frac { 2cos ^ { 2 } x⋅\\left ( { -2sin ^ { 2 } x } \\right ) } { 4sin ^ { 2 } xcos ^ { 2 } x }=-1.",
      "diagram": null,
      "correctAnswer": "-1"
    },
    {
      "id": 53,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho biểu thức  B=\\left[ \\sin\\left ( { \\frac { \\pi } { 2 }-x } \\right )+\\sin\\left ( { 10\\pi+x } \\right ) \\right] ^ { 2 } +\\left[ \\cos\\left ( { \\frac { 3\\pi } { 2 }-x } \\right )+\\cos\\left ( { 8\\pi-x } \\right ) \\right] ^ { 2 }  khi  x=\\frac { 2024\\pi } { 2023 }  thì  B  bằng bao nhiêu?",
      "explanation": "Ta có:  \\left \\{ \\begin{array}{l} \\sin\\left ( { \\frac { \\pi } { 2 }-x } \\right )=cosx \\\\ \\sin\\left ( { 10\\pi+x } \\right )=sinx \\\\ \\cos\\left ( { \\frac { 3\\pi } { 2 }-x } \\right )=-sinx \\\\ \\cos\\left ( { 8\\pi-x } \\right )=cosx \\end{array} \\right. \nThay vào  B=\\left[ \\sin\\left ( { \\frac { \\pi } { 2 }-x } \\right )+\\sin\\left ( { 10\\pi+x } \\right ) \\right] ^ { 2 } +\\left[ \\cos\\left ( { \\frac { 3\\pi } { 2 }-x } \\right )+\\cos\\left ( { 8\\pi-x } \\right ) \\right] ^ { 2 } \nTa có:  B=\\left ( { cosx+sinx } \\right ) ^ { 2 } +\\left ( { -sinx+cosx } \\right ) ^ { 2 } =2  .",
      "diagram": null,
      "correctAnswer": "2"
    },
    {
      "id": 54,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Tính  S=\\sin ^ { 2 } 5 ^ { ^\\circ } +\\sin ^ { 2 } 10 ^ { ^\\circ } +\\sin ^ { 2 } 15 ^ { ^\\circ } +…+\\sin ^ { 2 } 80 ^ { ^\\circ } +\\sin ^ { 2 } 85 ^ { ^\\circ }  .",
      "explanation": "Ta có\n \\sin ^ { 2 } 5 ^ { ^\\circ } +\\sin ^ { 2 } 85 ^ { ^\\circ } =\\cos ^ { 2 } 85 ^ { ^\\circ } +\\sin ^ { 2 } 85 ^ { ^\\circ } =1. \n \\sin ^ { 2 } 10 ^ { ^\\circ } +\\sin ^ { 2 } 80 ^ { ^\\circ } =\\cos ^ { 2 } 80 ^ { ^\\circ } +\\sin ^ { 2 } 80 ^ { ^\\circ } =1. \n … \n \\sin ^ { 2 } 40 ^ { ^\\circ } +\\sin ^ { 2 } 45 ^ { ^\\circ } =\\cos ^ { 2 } 45 ^ { ^\\circ } +\\sin ^ { 2 } 45 ^ { ^\\circ } =1. \nTổng số có 8 cặp dư ra  \\sin ^ { 2 } 45 ^ { ^\\circ }  nên  S=8+\\frac { 1 } { 2 }=\\frac { 17 } { 2 }  .",
      "diagram": null,
      "correctAnswer": "8,5"
    }
  ],
  "b3": [
    {
      "id": 1,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Rút gọn biểu thức  M=cos2x.cosx+sin2x.sinx  ta được kết quả là:",
      "explanation": "Ta có:  M=cos2x.cosx+sin2x.sinx=\\cos\\left ( { 2x-x } \\right )=cosx  .",
      "diagram": null,
      "options": [
        "A.  M=cosx",
        "B.  M=cos3x",
        "C.  M=sinx",
        "D.  M=sin3x"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 2,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Rút gọn biểu thức  \\cos\\left ( { 120^\\circ–{ }x } \\right )+\\cos\\left ( { 120^\\circ+{ }x } \\right )–cosx  ta được kết quả là",
      "explanation": "\\cos\\left ( { 120^\\circ–{ }x } \\right )+\\cos\\left ( { 120^\\circ+{ }x } \\right )–cosx \n =cos120^\\circcosx+sin120^\\circ.sinx+cos120^\\circcosx-sin120^\\circ.sinx–cosx \n =cos120^\\circcosx+cos120^\\circcosx–cosx \n =2cos120^\\circcosx–cosx=2.\\left ( { -\\frac { 1 } { 2 } } \\right )cosx–cosx=-2cosx",
      "diagram": null,
      "options": [
        "A.  0",
        "B.  –cosx",
        "C.  –2cosx",
        "D.  sinx–cosx"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 3,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Biết  sina=\\frac { 5 } { 13 }  ,  cosb=\\frac { 3 } { 5 }  ,  \\left ( { \\frac { \\pi } { 2 } < a < \\pi;\\,\\,0 < b < \\frac { \\pi } { 2 } } \\right )  . Kết quả của biểu thức  \\sin\\left ( { a+b } \\right )  bằng:",
      "explanation": "+ Ta có:  \\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 } < a < \\pi \\\\ sina=\\frac { 5 } { 13 } \\end{array} \\right.\\Rightarrow cosa=-\\frac { 12 } { 13 }  .\n \\left \\{ \\begin{array}{l} 0 < b < \\frac { \\pi } { 2 } \\\\ cosb=\\frac { 3 } { 5 } \\end{array} \\right.\\Rightarrow sinb=\\frac { 4 } { 5 }  .\nKhi đó  \\sin\\left ( { a+b } \\right )=sina.cosb+cosa.sinb=\\frac { 5 } { 13 }.\\frac { 3 } { 5 }+\\left ( { -\\frac { 12 } { 13 } } \\right ).\\frac { 4 } { 5 }=\\frac { -33 } { 65 }  .",
      "diagram": null,
      "options": [
        "A.  0",
        "B.  \\frac { 63 } { 65 }",
        "C.  \\frac { 56 } { 65 }",
        "D.  \\frac { -33 } { 65 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 4,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các công thức sau, công thức nào sai ?",
      "explanation": "Ta có  cos6a=\\cos\\left ( { 2.3a } \\right )=\\cos ^ { 2 } 3a-\\sin ^ { 2 } 3a=2cos ^ { 2 } 3a-1=1-2sin ^ { 2 } 3a  nên đáp án C sai.",
      "diagram": null,
      "options": [
        "A.  cos6a=\\cos ^ { 2 } 3a-\\sin ^ { 2 } 3a",
        "B.  cos6a=1-2sin ^ { 2 } 3a",
        "C.  cos6a=1-6sin ^ { 2 } a",
        "D.  cos6a=2cos ^ { 2 } 3a-1"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 5,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Đẳng thức nào không đúng với mọi  x  ?",
      "explanation": "Ta có  \\sin ^ { 2 } 2x=\\frac { 1-cos4x } { 2 }  .",
      "diagram": null,
      "options": [
        "A.  \\cos ^ { 2 } 3x=\\frac { 1+cos6x } { 2 }",
        "B.  cos2x=1-2sin ^ { 2 } x",
        "C.  sin2x=2sinxcosx",
        "D.  \\sin ^ { 2 } 2x=\\frac { 1+cos4x } { 2 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 6,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Nếu  sinx+cosx=\\frac { 1 } { 2 }  thì  sin2x  bằng",
      "explanation": "Do  { s }{ i }{ n }\\,x+cosx=\\frac { 1 } { 2 }\\Rightarrow \\frac { 1 } { 4 }=\\left ( { { s }{ i }{ n }\\,x+{ c }{ o }{ s }\\,x } \\right ) ^ { 2 } \\,=\\,\\left ( { { s }{ i }{ n }\\,x } \\right ) ^ { 2 } +\\left ( { { c }{ o }{ s }\\,x } \\right ) ^ { 2 } +2sinx.{ c }{ o }{ s }x \n \\Rightarrow \\frac { 1 } { 4 }\\,=\\,1+sin2x\\Rightarrow sin2x\\,=\\frac { -3 } { 4 }  .",
      "diagram": null,
      "options": [
        "A.  \\frac { 3 } { 4 }",
        "B.  \\frac { 3 } { 8 }",
        "C.  \\frac { \\sqrt[] { 2 } } { 2 }",
        "D.  \\frac { -3 } { 4 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 7,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Biết rằng  \\frac { 1 } { \\cos ^ { 2 } x-s\\,in ^ { 2 } x }+\\frac { 2.tanx } { 1-\\tan ^ { 2 } x }=\\frac { \\cos\\left ( { ax } \\right ) } { b-\\sin\\left ( { ax } \\right ) }\\,\\,\\left ( { a,\\,b\\in \\mathbb{R} } \\right )  . Tính giá trị của biểu thức  P=a+b  .",
      "explanation": "Ta có:  \\frac { 1 } { \\cos ^ { 2 } x-s\\,in ^ { 2 } x }+\\frac { 2.tanx } { 1-\\tan ^ { 2 } x }=\\,\\frac { 1 } { cos2x }+\\,tan2x  =\\,\\frac { 1 } { cos2x }+\\frac { sin2\\,x } { cos2x }=\\,\\frac { 1+sin2\\,x } { cos2x }=\\,\\frac { \\left ( { 1+sin2\\,x } \\right )cos2x } { \\cos ^ { 2 } 2x }  =\\frac { \\left ( { 1+sin2\\,x } \\right )cos2x } { 1-\\sin ^ { 2 } 2\\,x } \n =\\,\\frac { cos2x } { 1-sin2x }\\,  . Vậy  a=2,\\,b=1  . Suy ra  P=a+b=3  .",
      "diagram": null,
      "options": [
        "A.  P=4",
        "B.  P=1",
        "C.  P=2",
        "D.  P=3"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 8,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Biết  \\sin\\left ( { \\alpha+\\frac { 3\\pi } { 2 } } \\right )+\\cos\\left ( { \\alpha+\\frac { 3\\pi } { 2 } } \\right )=\\sqrt[] { 2 }  . Tính  \\sin\\left ( { \\alpha+\\pi } \\right )-2cos\\left ( { \\alpha-\\pi } \\right )  .",
      "explanation": "Ta có  \\sin\\left ( { \\alpha+\\frac { 3\\pi } { 2 } } \\right )=\\sin\\left ( { \\alpha+2\\pi-\\frac { \\pi } { 2 } } \\right )=\\sin\\left ( { \\alpha-\\frac { \\pi } { 2 } } \\right )=-\\sin\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )=-\\cos\\alpha  .\n \\cos\\left ( { \\alpha+\\frac { 3\\pi } { 2 } } \\right )=\\cos\\left ( { \\alpha+2\\pi-\\frac { \\pi } { 2 } } \\right )=\\cos\\left ( { \\alpha-\\frac { \\pi } { 2 } } \\right )=\\cos\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )=\\sin\\alpha  .\nSuy ra  \\sin\\alpha-\\cos\\alpha=\\sqrt[] { 2 }\\Rightarrow \\sin\\alpha=\\cos\\alpha+\\sqrt[] { 2 }  .\nVì  \\sin ^ { 2 } \\alpha+\\cos ^ { 2 } \\alpha=1\\Rightarrow 2cos ^ { 2 } \\alpha+2\\sqrt[] { 2 }\\cos\\alpha+2=1 \n \\Leftrightarrow 2cos ^ { 2 } \\alpha+2\\sqrt[] { 2 }\\cos\\alpha+1=0\\Leftrightarrow \\cos\\alpha=-\\frac { 1 } { \\sqrt[] { 2 } }\\Rightarrow \\sin\\alpha=\\frac { 1 } { \\sqrt[] { 2 } }  .\nDo đó  \\sin\\left ( { \\alpha+\\pi } \\right )-2cos\\left ( { \\alpha-\\pi } \\right )=-\\sin\\alpha+2cos\\alpha=-\\frac { 3 } { \\sqrt[] { 2 } }  .",
      "diagram": null,
      "options": [
        "A.  \\frac { 3 } { \\sqrt[] { 2 } }",
        "B.  -\\frac { 3 } { \\sqrt[] { 2 } }",
        "C.  -\\frac { 1 } { \\sqrt[] { 2 } }",
        "D.  \\frac { 1 } { \\sqrt[] { 2 } }"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 9,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Biết tam giác  ABC  có các góc thỏa mãn  sinA+sinB+sinC=acos\\frac { A } { b }\\cos\\frac { B } { b }\\cos\\frac { C } { b }  với a, b nguyên. Tính  a+b  .",
      "explanation": "VT=sinA+\\left ( { sinB+sinC } \\right )=sinA+2sin\\frac { B+C } { 2 }.\\cos\\frac { B-C } { 2 } \n =2sin\\frac { A } { 2 }.\\cos\\frac { A } { 2 }+2sin\\frac { B+C } { 2 }.\\cos\\frac { B-C } { 2 } \n =2sin\\frac { B+C } { 2 }.\\left ( { \\cos\\frac { B+C } { 2 }+\\cos\\frac { B-C } { 2 } } \\right )  (vì  A+B+C=\\pi  nên  \\frac { A } { 2 }=\\frac { \\pi } { 2 }-\\frac { B+C } { 2 }  )\n =4cos\\frac { A } { 2 }.\\cos\\frac { B } { 2 }.\\cos\\frac { C } { 2 }  . Suy ra  a=4;\\,b=2  . Vậy  a+b=4+2=6  .",
      "diagram": null,
      "options": [
        "A.  a+b=6",
        "B.  a+b=4",
        "C.  a+b=2",
        "D.  a+b=8"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 10,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tìm giá trị lớn nhất của hàm số  y=\\sqrt[] { 2sinx+2 }  .",
      "explanation": "Ta có  ∀x\\in \\mathbb{R}:-1\\le sinx\\le 1\\Leftrightarrow  0\\le 2sinx+2\\le 4\\Rightarrow 0\\le y\\le 2  .\nVậy giá trị lớn nhất của hàm số bằng  2  đạt được khi  sinx=1\\Leftrightarrow x=\\frac { \\pi } { 2 }+k2\\pi  .\nGiá trị nhỏ nhất bằng  0  đạt được khi  x=-\\frac { \\pi } { 2 }+k2\\pi  .",
      "diagram": null,
      "options": [
        "A.  -1",
        "B.  1",
        "C.  2",
        "D.  0  ."
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 11,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho tam giác  ABC  . Giá trị của biểu thức  P=\\sin ^ { 2 } A+\\sin ^ { 2 } B+\\sin ^ { 2 } C-2cosAcosBcosC  bằng",
      "explanation": "Ta có:\n+)  \\sin ^ { 2 } A+\\sin ^ { 2 } B+\\sin ^ { 2 } C=\\frac { 1-cos2A } { 2 }+\\frac { 1-cos2B } { 2 }+1-\\cos ^ { 2 } C \n =2-\\frac { cos2A+cos2B } { 2 }-\\cos ^ { 2 } C  =2-\\cos\\left ( { A+B } \\right )\\cos\\left ( { A-B } \\right )-\\cos ^ { 2 } C \n =2-\\cos\\left ( { \\pi-C } \\right )\\cos\\left ( { A-B } \\right )-\\cos ^ { 2 } C=2+cosCcos\\left ( { A-B } \\right )-\\cos ^ { 2 } C \n+)  2cosAcosBcosC=\\left ( { \\cos\\left ( { A+B } \\right )+\\cos\\left ( { A-B } \\right ) } \\right )cosC=\\left ( { -cosC+\\cos\\left ( { A-B } \\right ) } \\right )cosC \n =-\\cos ^ { 2 } C+\\cos\\left ( { A-B } \\right )cosC \n \\Rightarrow A=2+cosCcos\\left ( { A-B } \\right )-\\cos ^ { 2 } C+\\cos ^ { 2 } C-cosCcos\\left ( { A-B } \\right )=2  .",
      "diagram": null,
      "options": [
        "A.  1",
        "B.  3",
        "C.  2",
        "D.  0"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 12,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho biểu thức  S=sinx+\\sin\\left ( { x+a } \\right )+\\sin\\left ( { x+2a } \\right )+\\sin\\left ( { x+3a } \\right )+\\sin\\left ( { x+4a } \\right )  . Nếu  0 < a < \\pi  thì  S  không phụ thuộc vào  x  khi  a  nhận giá trị nào?",
      "explanation": "Nhân 2 vế của  S  với  \\sin\\frac { a } { 2 }\\ne 0  ta được\n \\sin\\frac { a } { 2 }.S=\\sin\\frac { a } { 2 }sinx+\\sin\\frac { a } { 2 }\\sin\\left ( { x+a } \\right )+\\sin\\frac { a } { 2 }\\sin\\left ( { x+2a } \\right )+\\sin\\frac { a } { 2 }\\sin\\left ( { x+3a } \\right )+\\sin\\frac { a } { 2 }\\sin\\left ( { x+4a } \\right )  Ta có:\n+  \\sin\\frac { a } { 2 }sinx=\\frac { 1 } { 2 }\\left[ \\cos\\left ( { \\frac { a } { 2 }-x } \\right )-\\cos\\left ( { \\frac { a } { 2 }+x } \\right ) \\right] \n+  \\sin\\frac { a } { 2 }\\sin\\left ( { x+a } \\right )=\\frac { 1 } { 2 }\\left[ \\cos\\left ( { \\frac { a } { 2 }+x } \\right )-\\cos\\left ( { \\frac { 3a } { 2 }+x } \\right ) \\right] \n+  \\sin\\frac { a } { 2 }\\sin\\left ( { x+2a } \\right )=\\frac { 1 } { 2 }\\left[ \\cos\\left ( { \\frac { 3a } { 2 }+x } \\right )-\\cos\\left ( { \\frac { 5a } { 2 }+x } \\right ) \\right] \n+  \\sin\\frac { a } { 2 }\\sin\\left ( { x+3a } \\right )=\\frac { 1 } { 2 }\\left[ \\cos\\left ( { \\frac { 5a } { 2 }+x } \\right )-\\cos\\left ( { \\frac { 7a } { 2 }+x } \\right ) \\right] \n+  \\sin\\frac { a } { 2 }\\sin\\left ( { x+4a } \\right )=\\frac { 1 } { 2 }\\left[ \\cos\\left ( { \\frac { 7a } { 2 }+x } \\right )-\\cos\\left ( { \\frac { 9a } { 2 }+x } \\right ) \\right] \n \\Rightarrow \\sin\\frac { a } { 2 }S=\\frac { 1 } { 2 }\\left[ \\cos\\left ( { \\frac { a } { 2 }-x } \\right )-\\cos\\left ( { \\frac { 9a } { 2 }+x } \\right ) \\right]=\\sin\\frac { 5a } { 2 }\\sin\\left ( { x+2a } \\right ) \n \\Rightarrow S=\\frac { \\sin\\frac { 5a } { 2 }\\sin\\left ( { x+2a } \\right ) } { \\sin\\frac { a } { 2 } }  .\nĐể  S  không phụ thuộc vào  x  thì  \\sin\\frac { 5a } { 2 }=0  .\nDo  0 < a < \\pi  nên  a=\\frac { 2\\pi } { 5 }  hoặc  a=\\frac { 4\\pi } { 5 }  .\nB.Câu hỏi – Trả lời Đúng/sai",
      "diagram": null,
      "options": [
        "A.  a=\\frac { 2\\pi } { 5 }",
        "B.  a=\\frac { 2\\pi } { 5 }  hoặc  a=\\frac { 4\\pi } { 5 }",
        "C.  a=-\\frac { 2\\pi } { 5 }  hoặc  a=\\frac { 4\\pi } { 5 }",
        "D.  a=\\frac { 4\\pi } { 5 }"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 13,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho biết  \\sin\\alpha=\\frac { 3 } { 5 },\\cos\\alpha=-\\frac { 4 } { 5 }  và các biểu thức  A=\\sin\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )+\\sin(\\pi+\\alpha)  ;  B=\\cos(\\pi-\\alpha)+\\cot\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )  . Khi đó",
      "explanation": "(a)  A=\\cos\\alpha-\\sin\\alpha  .\nTa có:  A=\\sin\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )+\\sin(\\pi+\\alpha)=\\cos\\alpha-\\sin\\alpha=-\\frac { 4 } { 5 }-\\frac { 3 } { 5 }=-\\frac { 7 } { 5 }  .\n» Chọn ĐÚNG.\n(b)  B=\\cos\\alpha+\\tan\\alpha  .\nTa có:  B=\\cos(\\pi-\\alpha)+\\cot\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )=-\\cos\\alpha+\\tan\\alpha  =-\\cos\\alpha+\\frac { \\sin\\alpha } { \\cos\\alpha }=\\frac { 4 } { 5 }+\\frac { \\frac { 3 } { 5 } } { -\\frac { 4 } { 5 } }=\\frac { 1 } { 20 }{ . }{ } \n» Chọn SAI.\n(c)  A+B=\\frac { 27 } { 20 }  .\nTa có  A+B=-\\frac { 27 } { 20 }  .\n» Chọn SAI.\n(d)  A-B=-\\frac { 29 } { 20 }  .\nTa có  A-B=-\\frac { 29 } { 20 }  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "A=\\cos\\alpha-\\sin\\alpha",
          "correct": true
        },
        {
          "subId": "b",
          "text": "B=\\cos\\alpha+\\tan\\alpha",
          "correct": false
        },
        {
          "subId": "c",
          "text": "A+B=\\frac { 27 } { 20 }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "A-B=-\\frac { 29 } { 20 }",
          "correct": true
        }
      ]
    },
    {
      "id": 14,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho  0 < a < \\frac { \\pi } { 2 };\\frac { \\pi } { 2 } < b < \\pi  và  tana=3;tanb=-2  .",
      "explanation": "(a)  \\tan\\left ( { a+\\pi } \\right )=-3  .\n \\tan\\left ( { a+\\pi } \\right )=tana=3  .\n» Chọn SAI.\n(b)  \\tan\\left ( { a+b } \\right )=-1  .\n \\tan\\left ( { a+b } \\right )=\\frac { tana+tanb } { 1-tana.tanb }=\\frac { 3+\\left ( { -2 } \\right ) } { 1-3.\\left ( { -2 } \\right ) }=\\frac { 1 } { 7 }  .\n» Chọn SAI.\n(c)  \\cot\\left ( { a-b } \\right )=1  .\n \\cot\\left ( { a-b } \\right )=\\frac { 1 } { \\tan\\left ( { a-b } \\right ) }=\\frac { 1 } { \\frac { tana-tanb } { 1+tana.tanb } }=-1  .\n» Chọn SAI.\n(d)  \\sin\\left ( { a-b } \\right )=-\\frac { \\sqrt[] { 2 } } { 2 }  .\nTa có:  0 < a < \\frac { \\pi } { 2 };  tana=3\\Rightarrow cosa>0  ;\n 1+\\tan ^ { 2 } a=\\frac { 1 } { \\cos ^ { 2 } a }\\Rightarrow cosa=\\frac { \\sqrt[] { 10 } } { 10 };sina=tana.cosa=\\frac { 3\\sqrt[] { 10 } } { 10 }  .\nTa có:  \\frac { \\pi } { 2 } < b < \\pi;  tanb=-2\\Rightarrow cosb < 0  ;\n 1+\\tan ^ { 2 } b=\\frac { 1 } { \\cos ^ { 2 } b }\\Rightarrow cosb=-\\frac { \\sqrt[] { 5 } } { 5 };sinb=tanb.cosb=\\frac { 2\\sqrt[] { 5 } } { 5 }  .\nVậy  \\sin\\left ( { a-b } \\right )=sina.cosb-cosa.sinb=\\frac { 3\\sqrt[] { 10 } } { 10 }.\\left ( { -\\frac { \\sqrt[] { 5 } } { 5 } } \\right )-\\frac { \\sqrt[] { 10 } } { 10 }.\\frac { 2\\sqrt[] { 5 } } { 5 }=-\\frac { \\sqrt[] { 2 } } { 2 } \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\tan\\left ( { a+\\pi } \\right )=-3",
          "correct": false
        },
        {
          "subId": "b",
          "text": "\\tan\\left ( { a+b } \\right )=-1",
          "correct": false
        },
        {
          "subId": "c",
          "text": "\\cot\\left ( { a-b } \\right )=1",
          "correct": false
        },
        {
          "subId": "d",
          "text": "\\sin\\left ( { a-b } \\right )=-\\frac { \\sqrt[] { 2 } } { 2 }",
          "correct": true
        }
      ]
    },
    {
      "id": 15,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho  sinx=-\\frac { 4 } { 5 }  và  \\frac { 3\\pi } { 2 } < x < 2\\pi  .",
      "explanation": "(a)  cos2x=-\\frac { \\sqrt[] { 7 } } { 5 }  .\nCó  cos2x=1-2sin ^ { 2 } x=1-\\frac { 32 } { 25 }=-\\frac { 7 } { 25 }  .\n» Chọn SAI.\n(b)  \\sin\\frac { x } { 2 }=\\frac { \\sqrt[] { 5 } } { 5 }  .\nCó  \\cos ^ { 2 } x=1-\\sin ^ { 2 } x=1-\\frac { 16 } { 25 }=\\frac { 9 } { 5 }  . Do  \\frac { 3\\pi } { 2 } < x < 2\\pi  nên  cosx>0\\Rightarrow cosx=\\frac { 3 } { 5 }  .\nTa cũng có  \\sin ^ { 2 } \\frac { x } { 2 }=\\frac { 1-cosx } { 2 }=\\frac { 1 } { 5 }  mà  \\frac { 3\\pi } { 2 } < x < 2\\pi\\Leftrightarrow \\frac { 3\\pi } { 4 } < \\frac { x } { 2 } < \\pi\\Rightarrow \\sin\\frac { x } { 2 }>0  nên chọn  \\sin\\frac { x } { 2 }=\\frac { \\sqrt[] { 5 } } { 5 }  .\n» Chọn ĐÚNG.\n(c)  \\tan\\frac { x } { 2 }=\\frac { 1 } { 2 }  .\nTheo trên ta có  sinx=2sin\\frac { x } { 2 }.\\cos\\frac { x } { 2 }\\Rightarrow \\cos\\frac { x } { 2 }=\\frac { sinx } { 2sin\\frac { x } { 2 } }=\\frac { -2\\sqrt[] { 5 } } { 5 }  .\nVậy  \\tan\\frac { x } { 2 }=\\frac { \\sin\\frac { x } { 2 } } { \\cos\\frac { x } { 2 } }=-\\frac { 1 } { 2 }  .\n» Chọn SAI.\n(d)  C=\\frac { 2sin2x-cos2x } { tan2x+cos2x }=\\frac { -287 } { 551 }. \nCó  C=\\frac { 2sin2x-cos2x } { tan2x+cos2x }=\\frac { 4sinx.{ c }{ o }{ s }\\,x-\\left ( { 2cos ^ { 2 } x-1 } \\right ) } { \\frac { 2sinx.{ c }{ o }{ s }\\,x } { 2cos ^ { 2 } x-1 }+\\left ( { 2cos ^ { 2 } x-1 } \\right ) }=\\frac { -287 } { 551 }. \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "cos2x=-\\frac { \\sqrt[] { 7 } } { 5 }",
          "correct": false
        },
        {
          "subId": "b",
          "text": "\\sin\\frac { x } { 2 }=\\frac { \\sqrt[] { 5 } } { 5 }",
          "correct": true
        },
        {
          "subId": "c",
          "text": "\\tan\\frac { x } { 2 }=\\frac { 1 } { 2 }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "C=\\frac { 2sin2x-cos2x } { tan2x+cos2x }=\\frac { -287 } { 551 }.",
          "correct": true
        }
      ]
    },
    {
      "id": 16,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Biết  sin2\\alpha=-\\frac { 4 } { 5 },\\frac { \\pi } { 2 } < \\alpha < \\frac { 3\\pi } { 4 }  . Các mệnh đề sau đây đúng hay sai?",
      "explanation": "(a)  A=cos2\\alpha=\\frac { 3 } { 5 } \nTa có  \\cos ^ { 2 } 2\\alpha=1-\\sin ^ { 2 } 2\\alpha=1-\\frac { 16 } { 25 }=\\frac { 9 } { 25 }  .\nVì  \\frac { \\pi } { 2 } < \\alpha < \\frac { 3\\pi } { 4 }\\Rightarrow \\pi < 2\\alpha < \\frac { 3\\pi } { 2 }\\Rightarrow cos2\\alpha < 0\\Rightarrow cos2\\alpha=\\frac { -3 } { 5 } \n» Chọn SAI.\n(b)  B=\\left ( { 1+3sin ^ { 2 } \\alpha } \\right )\\left ( { 1-4cos ^ { 2 } \\alpha } \\right )=\\frac { 17 } { 25 } \nTa có  B=\\left ( { 1+3.\\frac { 1-cos2\\alpha } { 2 } } \\right )\\left ( { 1-4.\\frac { 1+cos2\\alpha } { 2 } } \\right )=\\left ( { \\frac { 5 } { 2 }-\\frac { 3 } { 2 }cos2\\alpha } \\right )\\left ( { -1-2cos2\\alpha } \\right )  .\nThay  cos2\\alpha=-\\frac { 3 } { 5 }  vào  P  , ta được  P=\\left ( { \\frac { 5 } { 2 }-\\frac { 3 } { 2 }.\\left ( { \\frac { -3 } { 5 } } \\right ) } \\right )\\left ( { -1-2.\\left ( { \\frac { -3 } { 5 } } \\right ) } \\right )=\\frac { 17 } { 25 }  .\n» Chọn ĐÚNG.\n(c)  C=\\sin ^ { 4 } \\alpha+\\cos ^ { 4 } \\alpha=\\frac { 7 } { 25 } \nÁp dụng  a ^ { 4 } +b ^ { 4 } =\\left ( { a ^ { 2 } +b ^ { 2 } } \\right ) ^ { 2 } -2a ^ { 2 } b ^ { 2 }  .\nTa có  C=\\sin ^ { 4 } \\alpha+\\cos ^ { 4 } \\alpha=\\left ( { \\sin ^ { 2 } \\alpha+\\cos ^ { 2 } \\alpha } \\right ) ^ { 2 } -2sin ^ { 2 } \\alpha.\\cos ^ { 2 } \\alpha=1-\\frac { 1 } { 2 }\\sin ^ { 2 } 2\\alpha=\\frac { 17 } { 25 }  .\n» Chọn SAI.\n(d)  D=\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )=\\frac { -7\\sqrt[] { 2 } } { 10 } \nTa có  \\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )=sin2xcos\\frac { \\pi } { 4 }+cos2xsin\\frac { \\pi } { 4 }=\\left ( { \\frac { -4 } { 5 } } \\right ).\\frac { \\sqrt[] { 2 } } { 2 }+\\left ( { \\frac { -3 } { 5 } } \\right ).\\frac { \\sqrt[] { 2 } } { 2 }=\\frac { -7\\sqrt[] { 2 } } { 10 } \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "A=cos2\\alpha=\\frac { 3 } { 5 }",
          "correct": false
        },
        {
          "subId": "b",
          "text": "B=\\left ( { 1+3sin ^ { 2 } \\alpha } \\right )\\left ( { 1-4cos ^ { 2 } \\alpha } \\right )=\\frac { 17 } { 25 }",
          "correct": true
        },
        {
          "subId": "c",
          "text": "C=\\sin ^ { 4 } \\alpha+\\cos ^ { 4 } \\alpha=\\frac { 7 } { 25 }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "D=\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )=\\frac { -7\\sqrt[] { 2 } } { 10 }",
          "correct": true
        }
      ]
    },
    {
      "id": 17,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho tam giác  ABC.",
      "explanation": "(a)  \\widehat { A }=180 ^ { 0 } -\\left ( { \\widehat { B }+ \\widehat { C } } \\right )  .\nĐúng vì :  A+B+C=180 ^ { 0 } \\Leftrightarrow A=180 ^ { 0 } -\\left ( { B+C } \\right ) \n» Chọn ĐÚNG.\n(b)  sinB+\\sin\\left ( { A+C } \\right )=0  .\n A+B+C=180 ^ { 0 } \n \\Leftrightarrow B=180 ^ { 0 } -\\left ( { A+C } \\right )\\Leftrightarrow sinB=\\sin\\left ( { 180 ^ { 0 } -\\left ( { A+C } \\right ) } \\right )=\\sin\\left ( { A+C } \\right ) \nSuy ra:  sinB-\\sin\\left ( { A+C } \\right )=0  .\n» Chọn SAI.\n(c)  sinA+sinB+sinC=4cos\\frac { A } { 2 }\\cos\\frac { B } { 2 }\\cos\\frac { C } { 2 } \n \\left ( { sinA+sinB } \\right )+sinC=2sin\\frac { A+B } { 2 }\\cos\\frac { A-B } { 2 }+2sin\\frac { C } { 2 }\\cos\\frac { C } { 2 }  (1)\nDo  \\frac { A+B } { 2 }=\\frac { 180 ^ { 0 } -C } { 2 }=90 ^ { 0 } -\\frac { C } { 2 }  nên  \\sin\\frac { A+B } { 2 }=\\cos\\frac { C } { 2 }  (2)\nTương tự:  \\sin\\frac { C } { 2 }=\\cos\\frac { A+B } { 2 }  (3)\nTừ (1),(2) và (3)  \\Rightarrow \\left ( { sinA+sinB } \\right )+sinC \n =2cos\\frac { C } { 2 }\\cos\\frac { A-B } { 2 }+2sin\\frac { C } { 2 }\\cos\\frac { C } { 2 } \n =2cos\\frac { C } { 2 }.\\left ( { \\cos\\frac { A-B } { 2 }+\\cos\\frac { A+B } { 2 } } \\right )=2cos\\frac { A } { 2 }.2cos\\frac { B } { 2 }.\\cos\\frac { C } { 2 }=4cos\\frac { A } { 2 }.\\cos\\frac { B } { 2 }.\\cos\\frac { C } { 2 } \n» Chọn ĐÚNG.\n(d)  \\DeltaABC  cân khi  sinA.sinC=cosA.cosC \n sinA.sinC=cosA.cosC\\Leftrightarrow cosA.cosC-sinA.sinC=0\\Leftrightarrow \\cos\\left ( { A+C } \\right )=0  \\Leftrightarrow -cosB=0\\Leftrightarrow cosB=0\\Leftrightarrow B=90 ^ { 0 }  .\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\widehat { A }=180 ^ { 0 } -\\left ( { \\widehat { B }+ \\widehat { C } } \\right )",
          "correct": true
        },
        {
          "subId": "b",
          "text": "sinB+\\sin\\left ( { A+C } \\right )=0",
          "correct": false
        },
        {
          "subId": "c",
          "text": "sinA+sinB+sinC=4cos\\frac { A } { 2 }\\cos\\frac { B } { 2 }\\cos\\frac { C } { 2 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "\\DeltaABC  cân khi  sinA.sinC=cosA.cosC",
          "correct": false
        }
      ]
    },
    {
      "id": 18,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Biết  tanx=-\\frac { 1 } { 2 }  và  \\frac { \\pi } { 2 } < x < \\pi  . Các mệnh đề sau đúng hay sai?",
      "explanation": "(a)  cotx=-2  .\nVì  tanx=-\\frac { 1 } { 2 }  \\Rightarrow cotx=-2  nên mệnh đề ĐÚNG\n» Chọn ĐÚNG.\n(b)  cosx=\\frac { 2\\sqrt[] { 5 } } { 5 }  .\nCó  tanx=-\\frac { 1 } { 2 }  \\Rightarrow \\cos ^ { 2 } x=\\frac { 1 } { 1+\\tan ^ { 2 } x }=\\frac { 4 } { 5 }  .\nMà  \\frac { \\pi } { 2 } < x < \\pi  \\Rightarrow \\left \\{ \\begin{array}{l} sinx>0 \\\\ cosx < 0 \\end{array} \\right.  \\Rightarrow cosx=-\\frac { 2\\sqrt[] { 5 } } { 5 }  . Mệnh đề b) SAI.\n» Chọn SAI.\n(c)  sinx+cosx=-\\frac { \\sqrt[] { 5 } } { 5 }  .\n sinx=tanx.cosx=\\frac { \\sqrt[] { 5 } } { 5 }\\Rightarrow sinx+cosx=-\\frac { \\sqrt[] { 5 } } { 5 }  nên mệnh đề ĐÚNG.\n» Chọn ĐÚNG.\n(d)  M=\\frac { 2sin ^ { 2 } x+3sinx.cosx-4cos ^ { 2 } x } { 5cos ^ { 2 } x-\\sin ^ { 2 } x }=-\\frac { 8 } { 19 } \nChia cả tử và mẫu của  M  cho  \\cos ^ { 2 } x  ta có  M=\\frac { 2\\frac { \\sin ^ { 2 } x } { \\cos ^ { 2 } x }+3\\frac { sinx.cosx } { \\cos ^ { 2 } x }-4 } { 5-\\frac { \\sin ^ { 2 } x } { \\cos ^ { 2 } x } }=\\frac { 2.\\frac { 1 } { 4 }+3.\\left ( { -\\frac { 1 } { 2 } } \\right )-4 } { 5-\\frac { 1 } { 4 } }=-\\frac { 20 } { 19 }  nên mệnh đề SAI.\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "cotx=-2",
          "correct": true
        },
        {
          "subId": "b",
          "text": "cosx=\\frac { 2\\sqrt[] { 5 } } { 5 }",
          "correct": false
        },
        {
          "subId": "c",
          "text": "sinx+cosx=-\\frac { \\sqrt[] { 5 } } { 5 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "M=\\frac { 2sin ^ { 2 } x+3sinx.cosx-4cos ^ { 2 } x } { 5cos ^ { 2 } x-\\sin ^ { 2 } x }=-\\frac { 8 } { 19 }",
          "correct": false
        }
      ]
    },
    {
      "id": 19,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Trong vật lý, phương trình tổng quát của một vật giao động điều hòa được cho bởi công thức  x(t)=Acos(ωt+\\varphi)  trong đó  t  là thời điểm (tính bằng giây), .  x\\left ( { t } \\right )  là li độ của vật tại thời điểm  t  ,  A  là biên độ dao động  (A>0)  . (Dùng cho ba ý a, b, c).",
      "explanation": "(a) Nếu một vật giao động theo phương trình  x\\left ( { t } \\right )=5cos\\left ( { 100\\pit+\\frac { \\pi } { 4 } } \\right )  thì li độ của vật ở thời điểm ban đầu là  5\\sqrt[] { 2 }  .\nTa có:  x\\left ( { t } \\right )=5sin\\left ( { 100\\pit+\\frac { \\pi } { 4 } } \\right )  thì li độ của vật ở thời điểm ban đầu (ứng với  t=0  ) là  x=5sin\\left ( { \\frac { \\pi } { 4 } } \\right )=\\frac { 5\\sqrt[] { 2 } } { 2 }  .\n» Chọn SAI.\n(b) Một vật giao động điều hòa theo phương trình  x\\left ( { t } \\right )=10sin\\left ( { 50\\pit } \\right ).\\cos\\left ( { 50\\pit } \\right )  thì biên độ của giao động là  5  .\nTa có:  x\\left ( { t } \\right )=10sin\\left ( { 50\\pit } \\right ).\\cos\\left ( { 50\\pit } \\right )=5.\\sin\\left ( { 100\\pit } \\right )=5.\\cos\\left ( { 100\\pit+\\frac { 3\\pi } { 2 } } \\right )  .\nKhi đó biên độ của giao động là  5  .\n» Chọn ĐÚNG.\n(c) Cho hai dao động điều hòa cùng phương có phương trình lần lượt là  x_{ 1 } =5cos\\left ( { 100\\pi{ t }+\\pi } \\right )  ({ c }{ m })  và  x_{ 2 } =5cos\\left ( { 100\\pi{ t }-\\frac { \\pi } { 2 } } \\right )  ({ c }{ m })  . Khi đó phương trình dao động tổng hợp của hai dao động trên là  x=5\\sqrt[] { 2 }\\cos\\left ( { 100\\pit+\\frac { \\pi } { 4 } } \\right )({ c }{ m })  .\nTa có:  x=x_{ 1 } +x_{ 2 } { }=5cos\\left ( { 100\\pi{ t }+\\pi } \\right )+5cos\\left ( { 100\\pi{ t }-\\frac { \\pi } { 2 } } \\right ){ }=5\\left[ \\cos\\left ( { 100\\pi{ t }+\\pi } \\right )+\\cos\\left ( { 100\\pi{ t }-\\frac { \\pi } { 2 } } \\right ) \\right]{ } \n =5.2cos\\left ( { 100\\pit+\\frac { \\pi } { 4 } } \\right )\\cos\\frac { 3\\pi } { 4 }{ }=-5\\sqrt[] { 2 }\\cos\\left ( { 100\\pit+\\frac { \\pi } { 4 } } \\right ){ }=5\\sqrt[] { 2 }\\cos\\left ( { 100\\pit-\\frac { 3\\pi } { 4 } } \\right ). \n» Chọn SAI.\n(d) Một sợi cáp  R  được gắn vào một cột thẳng đứng ở vị trí cách mặt đất  14 { m }  . Một sợi cáp  S  khác cũng được gắn vào cột đó ở vị trí cách mặt đất  12 { m }  . Biết rằng hai sợi cáp trên cùng được gắn với mặt đất tại một vị trí cách chân cột  15 { m }  (Hình vẽ bên dưới). Gọi  \\alpha  là góc giữa hai sợi cáp trên khi đó  \\tan\\alpha=\\frac { 10 } { 131 }. \nTa có  \\tan\\beta=\\frac { AH } { HO }=\\frac { 14 } { 15 };\\quad \\tan\\beta_{ 1 } =\\frac { BH } { HO }=\\frac { 12 } { 15 }. \nKhi đó  \\tan\\alpha=\\tan\\left ( { \\beta-\\beta_{ 1 } } \\right )=\\frac { \\tan\\beta-\\tan\\beta_{ 1 } } { 1+\\tan\\betatan\\beta_{ 1 } }=\\frac { 10 } { 131 }. \n» Chọn ĐÚNG.\nC.Câu hỏi – Trả lời ngắn",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Nếu một vật giao động theo phương trình  x\\left ( { t } \\right )=5cos\\left ( { 100\\pit+\\frac { \\pi } { 4 } } \\right )  thì li độ của vật ở thời điểm ban đầu là  5\\sqrt[] { 2 }  .",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Một vật giao động điều hòa theo phương trình  x\\left ( { t } \\right )=10sin\\left ( { 50\\pit } \\right ).\\cos\\left ( { 50\\pit } \\right )  thì biên độ của giao động là  5  .",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Cho hai dao động điều hòa cùng phương có phương trình lần lượt là  x_{ 1 } =5cos\\left ( { 100\\pi{ t }+\\pi } \\right )  ({ c }{ m })  và  x_{ 2 } =5cos\\left ( { 100\\pi{ t }-\\frac { \\pi } { 2 } } \\right )  ({ c }{ m })  . Khi đó phương trình dao động tổng hợp của hai dao động trên là  x=5\\sqrt[] { 2 }\\cos\\left ( { 100\\pit+\\frac { \\pi } { 4 } } \\right )({ c }{ m })  .",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Một sợi cáp  R  được gắn vào một cột thẳng đứng ở vị trí cách mặt đất  14 { m }  . Một sợi cáp  S  khác cũng được gắn vào cột đó ở vị trí cách mặt đất  12 { m }  . Biết rằng hai sợi cáp trên cùng được gắn với mặt đất tại một vị trí cách chân cột  15 { m }  (Hình vẽ bên dưới). Gọi  \\alpha  là góc giữa hai sợi cáp trên khi đó  \\tan\\alpha=\\frac { 10 } { 131 }.",
          "correct": true
        }
      ]
    },
    {
      "id": 20,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho biểu thức  P=cos5x.cos3x-\\cos\\left ( { 5x+90^\\circ } \\right ).\\cos\\left ( { -3x-90^\\circ } \\right )  . Sau khi đơn giản hóa, ta được biểu thức  P=\\cos\\left ( { ax } \\right )  . Giá trị của  a  bằng",
      "explanation": "Biến đổi biểu thức  P  , ta có:\n P=cos5x.cos3x-\\cos\\left ( { 5x+90^\\circ } \\right ).\\cos\\left ( { -3x-90^\\circ } \\right ) \n =cos5x.cos3x+sin5x.\\cos\\left ( { 3x+90^\\circ } \\right )=cos5x.cos3x-sin5x.sin3x=\\cos\\left ( { 5x+3x } \\right )=\\cos\\left ( { 8x } \\right ) \n \\Rightarrow a=8  .",
      "diagram": null,
      "correctAnswer": "8"
    },
    {
      "id": 21,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho góc  \\alpha  thỏa mãn  \\sin\\alpha=\\frac { 1 } { 5 }  . Khi đó giá trị biểu thức  P=\\cos ^ { 2 } 2x+\\cos ^ { 2 } x  bằng  \\frac { a } { b }  . Tính  a+b  . Biết rằng phân số  \\frac { a } { b }  là phân số tối giản.",
      "explanation": "Biến đổi biểu thức  P  rồi thay giá trị  \\sin\\alpha=\\frac { 1 } { 5 }  vào  P  , ta được:\n P=\\cos ^ { 2 } 2x+\\cos ^ { 2 } x \n =\\left ( { 1-2sin ^ { 2 } \\alpha } \\right ) ^ { 2 } +\\left ( { 1-\\sin ^ { 2 } \\alpha } \\right )=\\left ( { 1-2.\\left ( { \\frac { 1 } { 5 } } \\right ) ^ { 2 } } \\right ) ^ { 2 } +\\left ( { 1-\\left ( { \\frac { 1 } { 5 } } \\right ) ^ { 2 } } \\right )=\\frac { 1129 } { 625 } \n \\Rightarrow \\left \\{ \\begin{array}{l} a=1129 \\\\ b=625 \\end{array} \\right.\\Rightarrow a+b=1754",
      "diagram": null,
      "correctAnswer": "1754"
    },
    {
      "id": 22,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Tính giá trị biểu thức:  A=\\frac { cos10x-cos9x-cos8x+cos7x } { sin10x-sin9x-sin8x+sin7x }  với  x=\\frac { \\pi } { 34 }  (kết quả làm tròn đến hàng phần trăm).",
      "explanation": "Ta có:  A=\\frac { \\left ( { cos10x+cos7x } \\right )-\\left ( { cos9x+cos8x } \\right ) } { \\left ( { sin10x+sin7x } \\right )-\\left ( { sin9x+sin8x } \\right ) } \n =\\frac { 2cos\\frac { 17x } { 2 }\\cos\\frac { 3x } { 2 }-2cos\\frac { 17x } { 2 }\\cos\\frac { x } { 2 } } { 2sin\\frac { 17x } { 2 }\\cos\\frac { 3x } { 2 }-2sin\\frac { 17x } { 2 }\\cos\\frac { x } { 2 } }  =\\frac { 2cos\\frac { 17x } { 2 }\\left ( { \\cos\\frac { 3x } { 2 }-\\cos\\frac { x } { 2 } } \\right ) } { 2sin\\frac { 17x } { 2 }\\left ( { \\cos\\frac { 3x } { 2 }-\\cos\\frac { x } { 2 } } \\right ) }  =\\cot\\frac { 17x } { 2 }  .\nVậy giá trị của biểu thức  A  tại  x=\\frac { \\pi } { 34 }  bằng  \\cot\\frac { 17.\\frac { \\pi } { 34 } } { 2 }=\\cot\\frac { \\pi } { 4 }=\\frac { \\sqrt[] { 2 } } { 2 }\\approx 0,71",
      "diagram": null,
      "correctAnswer": "0,71"
    },
    {
      "id": 23,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  tana=2  và  a\\in \\left ( { 0;\\frac { \\pi } { 2 } } \\right )  . Tính  A=2\\sqrt[] { 2 }\\sin\\frac { a } { 2 }\\sin\\left ( { \\frac { a } { 2 }+\\frac { \\pi } { 4 } } \\right )  (kết quả làm tròn đến hàng phần trăm).",
      "explanation": "Ta có  \\frac { 1 } { \\cos ^ { 2 } a }=\\tan ^ { 2 } a+1\\Leftrightarrow \\cos ^ { 2 } a=\\frac { 1 } { \\tan ^ { 2 } a+1 }=\\frac { 1 } { 5 }\\Leftrightarrow cosa=\\pm \\frac { 1 } { \\sqrt[] { 5 } } \nMà  a\\in \\left ( { 0;\\frac { \\pi } { 2 } } \\right )  nên  cosa=\\frac { 1 } { \\sqrt[] { 5 } }  và  sina=tana.cosa=\\frac { 2 } { \\sqrt[] { 5 } }  .\nMặt khác  A=2\\sqrt[] { 2 }\\sin\\frac { a } { 2 }\\sin\\left ( { \\frac { a } { 2 }+\\frac { \\pi } { 4 } } \\right ) \n \\Leftrightarrow A=2\\sqrt[] { 2 }\\sin\\frac { a } { 2 }\\left ( { \\sin\\frac { a } { 2 }\\cos\\frac { \\pi } { 4 }+\\sin\\frac { \\pi } { 4 }\\cos\\frac { a } { 2 } } \\right )\\Leftrightarrow A=2\\sqrt[] { 2 }\\sin\\frac { a } { 2 }\\left ( { \\frac { \\sqrt[] { 2 } } { 2 }\\sin\\frac { a } { 2 }+\\frac { \\sqrt[] { 2 } } { 2 }\\cos\\frac { a } { 2 } } \\right ) \n \\Leftrightarrow A=2sin\\frac { a } { 2 }\\left ( { \\sin\\frac { a } { 2 }+\\cos\\frac { a } { 2 } } \\right )\\Leftrightarrow A=2sin ^ { 2 } \\frac { a } { 2 }+2sin\\frac { a } { 2 }\\cos\\frac { a } { 2 }\\Leftrightarrow A=2\\left ( { \\frac { 1-cosa } { 2 } } \\right )+sina \n \\Leftrightarrow A=sina-cosa+1\\Leftrightarrow A=\\frac { 2 } { \\sqrt[] { 5 } }-\\frac { 1 } { \\sqrt[] { 5 } }+1\\Leftrightarrow A=\\frac { 5+\\sqrt[] { 5 } } { 5 }\\approx 1,45  .",
      "diagram": null,
      "correctAnswer": "1,45"
    },
    {
      "id": 24,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  \\sin\\alpha=\\frac { 3 } { 5 }  và  \\frac { \\pi } { 2 } < \\alpha < \\pi  . Giá trị gần đúng của biểu thức  E=\\frac { 2tan\\alpha-\\cot\\alpha } { \\tan\\alpha+3cot\\alpha }  là bao nhiêu (làm tròn kết quả đến hàng trăm)?",
      "explanation": "Vì  \\frac { \\pi } { 2 } < \\alpha < \\pi\\Rightarrow c{ o }{ s }\\alpha < { 0 }  nên  c{ o }{ s }\\alpha=-\\sqrt[] { 1-\\sin ^ { 2 } \\alpha }=-\\sqrt[] { 1-\\frac { 9 } { 25 } }=-\\frac { 4 } { 5 }  .\n \\tan\\alpha=\\frac { \\sin\\alpha } { \\cos\\alpha }=-\\frac { 3 } { 4 }\\Rightarrow \\cot\\alpha=-\\frac { 4 } { 3 }  \\Rightarrow \\frac { 2tan\\alpha-\\cot\\alpha } { \\tan\\alpha+3cot\\alpha }=\\frac { 2 } { 57 }\\approx 0,04  .",
      "diagram": null,
      "correctAnswer": "0,04"
    },
    {
      "id": 25,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho biểu thức lượng giác sau (giả sử các biểu thức đều có nghĩa):  A=\\cos(5\\pi-x)-\\sin\\left ( { \\frac { 3\\pi } { 2 }+x } \\right )+\\tan\\left ( { \\frac { 3\\pi } { 2 }-x } \\right )+\\cot\\left ( { 3\\pi-x } \\right )  . Khi đó giá trị của  10A  bằng bao nhiêu?",
      "explanation": "Ta có  \\cos\\left ( { 5\\pi-x } \\right )=\\cos\\left ( { \\pi-x+2.2\\pi } \\right )=\\cos\\left ( { \\pi-x } \\right )=-cosx  .\n \\sin\\left ( { \\frac { 3\\pi } { 2 }+x } \\right )=\\sin\\left ( { \\pi+\\frac { \\pi } { 2 }+x } \\right )=-\\sin\\left ( { \\frac { \\pi } { 2 }+x } \\right )=-cosx  .\n \\tan\\left ( { \\frac { 3\\pi } { 2 }-x } \\right )=\\tan\\left ( { \\pi+\\frac { \\pi } { 2 }-x } \\right )=\\tan\\left ( { \\frac { \\pi } { 2 }-x } \\right )=cotx  .\n \\cot\\left ( { 3\\pi-x } \\right )=\\cot\\left ( { -x } \\right )=-cotx  .\nSuy ra  A=-cosx-\\left ( { -cosx } \\right )+cotx+\\left ( { -cotx } \\right )=0\\Rightarrow 10A=0  .",
      "diagram": null,
      "correctAnswer": "0"
    },
    {
      "id": 26,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Đơn giản biểu thức  P=\\left ( { \\frac { 1-\\cos\\alpha } { \\sin ^ { 2 } \\alpha }+\\frac { 1 } { 1+\\cos\\alpha } } \\right )\\sin ^ { 2 } \\alpha.",
      "explanation": "Ta có  \\frac { 1-\\cos\\alpha } { \\sin ^ { 2 } \\alpha }+\\frac { 1 } { 1-\\cos\\alpha }=\\frac { 1-\\cos\\alpha } { 1-\\cos ^ { 2 } \\alpha }+\\frac { 1 } { 1-\\cos\\alpha } \n =\\frac { 1-\\cos\\alpha } { \\left ( { 1-\\cos\\alpha } \\right )\\left ( { 1+\\cos\\alpha } \\right ) }+\\frac { 1 } { 1-\\cos\\alpha }=\\frac { 1 } { 1+\\cos\\alpha }+\\frac { 1 } { 1-\\cos\\alpha }=\\frac { 2 } { \\sin ^ { 2 } \\alpha }  .\n P=\\left[ \\frac { 1-\\cos\\alpha } { \\left ( { 1-\\cos\\alpha } \\right )\\left ( { 1+\\cos\\alpha } \\right ) }+\\frac { 1 } { 1-\\cos\\alpha } \\right]\\sin ^ { 2 } \\alpha=\\frac { 2 } { \\sin ^ { 2 } \\alpha }.\\sin ^ { 2 } \\alpha=2",
      "diagram": null,
      "correctAnswer": "2"
    },
    {
      "id": 27,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Gọi  S  là tập hợp các giá trị của tham số  m  sao cho giá trị nhỏ nhất của hàm số  y=\\left | { \\cos ^ { 4 } x-cos2x+m } \\right |  bằng 3. Tính tổng các phần tử của tập  S  .",
      "explanation": "Ta có  y=\\left | { \\cos ^ { 4 } x-cos2x+m } \\right |=\\left | { \\cos ^ { 4 } x-\\left ( { \\cos ^ { 2 } x-\\sin ^ { 2 } x } \\right )\\left ( { \\cos ^ { 2 } x+\\sin ^ { 2 } x } \\right )+m } \\right |=\\left | { \\sin ^ { 4 } x+m } \\right | \nĐặt  t=\\sin ^ { 4 } x  ,  t\\in \\left[ 0;1 \\right]  .\nSuy ra  y=\\left | { t+m } \\right |  ,  t\\in \\left[ 0;1 \\right]  .\nXét hàm số  f\\left ( { t } \\right )=t+m  trên đoạn  \\left[ 0;1 \\right]  .\n \\mathop { max } \\limits_{ \\left[ 0;\\,1 \\right] } f\\left ( { t } \\right )=f\\left ( { 1 } \\right )=m+1  ,  \\mathop { min } \\limits_{ \\left[ 0;\\,1 \\right] } f\\left ( { t } \\right )=f\\left ( { 0 } \\right )=m  .\nTrường hợp 1: Xét  m\\ge 0  ta có  \\mathop { min } \\limits_{ t\\in \\left[ 0;1 \\right] } y=m\\Leftrightarrow m=3  (TM).\nTrường hợp 2:Xét  m\\le -1  . ta có  \\mathop { min } \\limits_{ t\\in \\left[ 0;1 \\right] } y=-m-1\\Rightarrow -m-1=3\\Leftrightarrow m=-4  (TM).\nTrường hợp 3: Xét  -1 < m < 0  ta có  \\mathop { min } \\limits_{ t\\in \\left[ 0;1 \\right] } y=0\\Rightarrow 0=3  (vô lý)\nVậy  S=\\left \\{ \\begin{array}{l} -4;3 \\end{array} \\right \\}\\Rightarrow -4+3=-1  .",
      "diagram": null,
      "correctAnswer": "-1"
    },
    {
      "id": 28,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho tam giác  ABC  có độ dài ba cạnh  BC=a,AC=b,AB=c  thỏa mãn  a+c=4b  . Tính giá trị biểu thức  P=\\tan\\frac { A } { 2 }.\\tan\\frac { C } { 2 }  .",
      "explanation": "Áp dụng định lý \\sin, ta có:  a+c=4b \n \\Leftrightarrow 2RsinA+2RsinC=8RsinB\\Leftrightarrow sinA+sinC=4sinB \n \\Leftrightarrow 2sin\\frac { A+C } { 2 }\\cos\\frac { A-C } { 2 }=8sin\\frac { B } { 2 }\\cos\\frac { B } { 2 } \n \\Leftrightarrow \\cos\\frac { A-C } { 2 }=4sin\\frac { B } { 2 }  vì  \\sin\\frac { A+C } { 2 }=\\cos\\frac { B } { 2 }\\ne 0,{ }{ }\\frac { \\widehat { B } } { 2 }\\in \\left ( { 0;\\frac { \\pi } { 2 } } \\right ) \n \\Leftrightarrow \\cos\\frac { A-C } { 2 }=4cos\\frac { A+C } { 2 } \n \\Leftrightarrow \\cos\\frac { A } { 2 }\\cos\\frac { C } { 2 }+\\sin\\frac { A } { 2 }\\sin\\frac { C } { 2 }=4\\left ( { \\cos\\frac { A } { 2 }\\cos\\frac { C } { 2 }-\\sin\\frac { A } { 2 }\\sin\\frac { C } { 2 } } \\right ) \n \\Leftrightarrow 5sin\\frac { A } { 2 }\\sin\\frac { C } { 2 }=3cos\\frac { A } { 2 }\\cos\\frac { C } { 2 }  \\Leftrightarrow \\frac { \\sin\\frac { A } { 2 }\\sin\\frac { C } { 2 } } { \\cos\\frac { A } { 2 }\\cos\\frac { C } { 2 } }=\\frac { 3 } { 5 }  \\Leftrightarrow \\tan\\frac { A } { 2 }.\\tan\\frac { C } { 2 }=\\frac { 3 } { 5 }=0,6. \nVậy  P=0,6  .",
      "diagram": null,
      "correctAnswer": "0,6"
    },
    {
      "id": 29,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Trong Vật lí, phương trình tổng quát của một vật dao động điều hòa cho bởi công thức  x\\left ( { t } \\right )=Acos\\left ( { ωt+\\varphi } \\right )  , trong đó t là thời điểm (tính bằng giây),  x\\left ( { t } \\right )  là li độ của vật tại thời điểm t, A là biên độ dao động (  A>0  ) và  \\varphi\\in \\left[ -\\pi;\\pi \\right]  là pha ban đầu của dao động. Xét hai dao động điều hòa có phương trình:  x_{ 1 } \\left ( { t } \\right )=2cos\\left ( { \\frac { \\pi } { 3 }t+\\frac { \\pi } { 6 } } \\right )\\,\\,({ c }{ m }),  x_{ 2 } \\left ( { t } \\right )=2cos\\left ( { \\frac { \\pi } { 3 }t-\\frac { \\pi } { 3 } } \\right )\\,\\,({ c }{ m })  . Tìm pha ban đầu của dao động tổng hợp này. Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "Ta có  x\\left ( { t } \\right )=x_{ 1 } \\left ( { t } \\right )+x_{ 2 } \\left ( { t } \\right )=2cos\\left ( { \\frac { \\pi } { 3 }t+\\frac { \\pi } { 6 } } \\right )+2cos\\left ( { \\frac { \\pi } { 3 }t-\\frac { \\pi } { 3 } } \\right ) \n =2.2cos\\left ( { \\frac { \\pi } { 3 }t-\\frac { \\pi } { 12 } } \\right ).\\cos\\frac { \\pi } { 4 }=2\\sqrt[] { 2 }\\cos\\left ( { \\frac { \\pi } { 3 }t-\\frac { \\pi } { 12 } } \\right )  .\nVậy pha ban đầu bằng  -\\frac { \\pi } { 12 }\\approx -0,26  .",
      "diagram": null,
      "correctAnswer": "-0,26"
    }
  ],
  "b4": [
    {
      "id": 1,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập xác định của hàm số  y=tan2x  là",
      "explanation": "Điều kiện xác định của hàm số  y=tan2x  là  2x\\ne \\frac { \\pi } { 2 }+k\\pi\\Leftrightarrow x\\ne \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }(k\\in ℤ)  .\nVậy tập xác định của hàm số  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }∣k\\in ℤ \\end{array} \\right \\}  .",
      "diagram": null,
      "options": [
        "A.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }∣k\\in ℤ \\end{array} \\right \\}",
        "B.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }∣k\\in ℤ \\end{array} \\right \\}",
        "C.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k2\\pi∣k\\in ℤ \\end{array} \\right \\}",
        "D.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi∣k\\in ℤ \\end{array} \\right \\}"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 2,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập xác định của hàm số  y=sinx  là",
      "explanation": "",
      "diagram": null,
      "options": [
        "A.  \\left[ -1;1 \\right]",
        "B.  \\left ( { -1;1 } \\right )",
        "C.  \\left ( { 0;+∞ } \\right )",
        "D.  \\mathbb{R}"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 3,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập xác định của hàm số  y=\\frac { 1 } { sinx }  là",
      "explanation": "Hàm số  y=\\frac { 1 } { sinx }  xác định khi và chỉ khi  sinx\\ne 0  \\Leftrightarrow x\\ne k\\pi,k\\in \\mathbb{Z}.",
      "diagram": null,
      "options": [
        "A.  { D }=\\mathbb{R}\\\\left \\{ \\begin{array}{l} 0 \\end{array} \\right \\}.",
        "B.  { D }=\\mathbb{R}\\\\left \\{ \\begin{array}{l} k2\\pi,\\ k\\in \\mathbb{Z} \\end{array} \\right \\}.",
        "C.  { D }=\\mathbb{R}\\\\left \\{ \\begin{array}{l} k\\pi,\\ k\\in \\mathbb{Z} \\end{array} \\right \\}.",
        "D.  { D }=\\mathbb{R}\\\\left \\{ \\begin{array}{l} 0;\\pi \\end{array} \\right \\}."
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 4,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập xác định của hàm số  y=\\frac { 1 } { sin2x+1 }  là",
      "explanation": "Điều kiện xác định của hàm số là  sin2x\\ne -1\\Leftrightarrow 2x\\ne -\\frac { \\pi } { 2 }+k2\\pi\\Leftrightarrow x\\ne -\\frac { \\pi } { 4 }+k\\pi,k\\in \\mathbb{Z}  .\nVậy TXĐ:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 4 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}  .",
      "diagram": null,
      "options": [
        "A.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "B.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 2 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "C.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 4 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "D.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 4 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 5,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Hàm số  y=\\frac { cos2x } { 1+tanx }  không xác định trong khoảng nào trong các khoảng sau đây?",
      "explanation": "Hàm số xác định khi và chỉ khi  \\left \\{ \\begin{array}{l} tanx\\ne -1 \\\\ cosx\\ne 0 \\end{array} \\right.\\Leftrightarrow \\left \\{ \\begin{array}{l} x\\ne \\frac { -\\pi } { 4 }+k\\pi \\\\ x\\ne \\frac { \\pi } { 2 }+k\\pi \\end{array} \\right.,\\,k\\in \\mathbb{Z}  .\nTa chọn  k=0\\to \\left \\{ \\begin{array}{l} x\\ne -\\frac { \\pi } { 4 } \\\\ x\\ne \\frac { \\pi } { 2 } \\end{array} \\right.  nhưng điểm  -\\frac { \\pi } { 4 }  thuộc khoảng  \\left ( { -\\frac { \\pi } { 2 }+k2\\pi;\\frac { \\pi } { 2 }+k2\\pi } \\right )  .\nVậy hàm số không xác định trong khoảng  \\left ( { -\\frac { \\pi } { 2 }+k2\\pi;\\frac { \\pi } { 2 }+k2\\pi } \\right )  .",
      "diagram": null,
      "options": [
        "A.  \\left ( { \\frac { \\pi } { 2 }+k2\\pi;\\frac { 3\\pi } { 4 }+k2\\pi } \\right ),\\,k\\in \\mathbb{Z}",
        "B.  \\left ( { \\frac { 3\\pi } { 4 }+k2\\pi;\\frac { 3\\pi } { 2 }+k2\\pi } \\right )",
        "C.  \\left ( { \\pi+k2\\pi;\\frac { 3\\pi } { 2 }+k2\\pi } \\right ),\\,k\\in \\mathbb{Z}",
        "D.  \\left ( { \\frac { -\\pi } { 2 }+k2\\pi;\\frac { \\pi } { 2 }+k2\\pi } \\right ),\\,k\\in \\mathbb{Z}"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 6,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập xác định của hàm số  y=cot2x-tanx  là:",
      "explanation": "Hàm số xác định khi  \\left \\begin{array}{l} n2x\\ne 0sx\\ne 0\\{\\Leftrightarrow \\left \\{ \\begin{array}{l} x\\ne k\\frac { \\pi } { 2 } \\\\ x\\ne \\frac { \\pi } { 2 }+k\\pi \\end{array} \\right.\\Leftrightarrow x\\ne k\\frac { \\pi } { 2 }\\left ( { k\\in \\mathbb{Z} } \\right ) \\end{array} \\right.  .",
      "diagram": null,
      "options": [
        "A.  \\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "B.  \\mathbb{R}\\\\left \\{ \\begin{array}{l} k\\pi,k\\in \\mathbb{Z}\\, \\end{array} \\right \\}",
        "C.  \\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 },k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "D.  \\mathbb{R}\\\\left \\{ \\begin{array}{l} k\\frac { \\pi } { 2 },k\\in \\mathbb{Z} \\end{array} \\right \\}"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 7,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Chọn phát biểu đúng:",
      "explanation": "Hàm số  y=cosx  là hàm số chẵn, hàm số  y=sinx  ,  y=cotx  ,  y=tanx  là các hàm số lẻ.",
      "diagram": null,
      "options": [
        "A. Các hàm số  y=sinx  ,  y=cosx  ,  y=cotx  đều là hàm số chẵn",
        "B. Các hàm số  y=sinx  ,  y=cosx  ,  y=cotx  đều là hàm số lẻ",
        "C. Các hàm số  y=sinx  ,  y=cotx  ,  y=tanx  đều là hàm số chẵn",
        "D. Các hàm số  y=sinx  ,  y=cotx  ,  y=tanx  đều là hàm số lẻ"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 8,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các hàm số sau đây, hàm số nào có đồ thị đối xứng qua trục tung?",
      "explanation": "Hàm số có đồ thị đối xứng qua trục tung là hàm số chẵn.\nVậy đáp án cần chọn là  y=cosx  .",
      "diagram": null,
      "options": [
        "A.  y=tanx",
        "B.  y=cosx",
        "C.  y=sinx",
        "D.  y=cotx"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 9,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các hàm số sau, hàm số nào tuần hoàn với chu kì  2\\pi  ?",
      "explanation": "Hàm số  y=sinx  tuần hoàn với chu kì  2\\pi  .\nCác hàm số lượng giác còn lại  y=tanx  ,  y=cotx  ,  y=cos2x  tuần hoàn với chu kì  \\pi  .\nXét  y=cos2x  : ta có  y\\left ( { x+\\pi } \\right )=cos2\\left ( { x+\\pi } \\right )=\\cos\\left ( { 2x+2\\pi } \\right )=cos2x=y\\left ( { x } \\right )  nên  y=cos2x  tuần hoàn với chu kì  \\pi  .",
      "diagram": null,
      "options": [
        "A.  y=sinx",
        "B.  y=tanx",
        "C.  y=cotx",
        "D.  y=cos2x"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 10,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Chu kì tuần hoàn của hàm số  tanx+\\sin ^ { 2 } x  là",
      "explanation": "Ta có:  tanx+\\sin ^ { 2 } x=tanx+\\frac { 1 } { 2 }\\left ( { 1-{ c }{ o }{ s }{ 2 }x } \\right )  .\n+)  tanx  có chu kì là  \\pi  .\n+)  { c }{ o }{ s }{ 2 }x  có chu kì là  \\pi  .\nVậy hàm số đã cho có chu kì là  \\pi  .",
      "diagram": null,
      "options": [
        "A.  k2\\pi",
        "B.  2\\pi",
        "C.  \\pi",
        "D.  4\\pi"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 11,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Hàm số nào sau đây là hàm số lẻ?",
      "explanation": "Xét hàm số  y=f\\left ( { x } \\right )=\\frac { cosx } { x ^ { 3 } }  . Tập xác định  D=\\mathbb{R}\\{ \\{ }0\\}  là tập đối xứng.\n f\\left ( { -x } \\right )=\\frac { \\cos\\left ( { -x } \\right ) } { -x ^ { 3 } }=-\\frac { \\cos\\left ( { x } \\right ) } { x ^ { 3 } }=-f\\left ( { x } \\right ). \nDo đó hàm số  y=\\frac { cosx } { x ^ { 3 } }  là hàm số lẻ.",
      "diagram": null,
      "options": [
        "A.  y=2x+cosx",
        "B.  y=cos3x",
        "C.  y=x ^ { 2 } \\sin\\left ( { x+3 } \\right )",
        "D.  y=\\frac { cosx } { x ^ { 3 } }"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 12,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các hàm số sau, hàm số nào có đồ thị đối xứng qua gốc tọa độ?",
      "explanation": "Hàm số lẻ có đồ thị đối xứng qua gốc tọa độ.\nTa kiểm tra được đáp án A là hàm số lẻ nên có đồ thị đối xứng qua gốc tọa độ.\nĐáp án B là hàm số không chẵn, không lẻ. Đáp án C và D là các hàm số chẵn.",
      "diagram": null,
      "options": [
        "A.  y=cot4x.",
        "B.  y=\\frac { sinx+1 } { cosx }.",
        "C.  y=\\tan ^ { 2 } x.",
        "D.  y=\\left | { cotx } \\right |."
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 13,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho hai hàm số  f\\left ( { x } \\right )=\\frac { cos2x } { 1+\\sin ^ { 2 } 3x }  và  g\\left ( { x } \\right )=\\frac { \\left | { sin2x } \\right |-cos3x } { 2+\\tan ^ { 2 } x }  . Mệnh đề nào sau đây là đúng?",
      "explanation": "Xét hàm số  f\\left ( { x } \\right )=\\frac { cos2x } { 1+\\sin ^ { 2 } 3x }. \nTXĐ:  { D }=\\mathbb{R}  . Do đó  ∀x\\in { D }\\Rightarrow -x\\in { D }{ . } \nTa có  f\\left ( { -x } \\right )=\\frac { \\cos\\left ( { -2x } \\right ) } { 1+\\sin ^ { 2 } \\left ( { -3x } \\right ) }=\\frac { cos2x } { 1+\\sin ^ { 2 } 3x }=f\\left ( { x } \\right )  \\xrightarrow f\\left ( { x } \\right )  là hàm số chẵn.\nXét hàm số  g\\left ( { x } \\right )=\\frac { \\left | { sin2x } \\right |-cos3x } { 2+\\tan ^ { 2 } x }. \nTXĐ:  { D }=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right ) \\end{array} \\right \\}  . Do đó  ∀x\\in { D }\\Rightarrow -x\\in { D }{ . } \nTa có  g\\left ( { -x } \\right )=\\frac { \\left | { \\sin\\left ( { -2x } \\right ) } \\right |-\\cos\\left ( { -3x } \\right ) } { 2+\\tan ^ { 2 } \\left ( { -x } \\right ) }=\\frac { \\left | { sin2x } \\right |-cos3x } { 2+\\tan ^ { 2 } x }=g\\left ( { x } \\right )  \\xrightarrow g\\left ( { x } \\right )  là hàm số chẵn.\nVậy  f\\left ( { x } \\right )  và  g\\left ( { x } \\right )  chẵn.",
      "diagram": null,
      "options": [
        "A.  f\\left ( { x } \\right )  lẻ và  g\\left ( { x } \\right )  chẵn",
        "B.  f\\left ( { x } \\right )  và  g\\left ( { x } \\right )  chẵn",
        "C.  f\\left ( { x } \\right )  chẵn,  g\\left ( { x } \\right )  lẻ",
        "D.  f\\left ( { x } \\right )  và  g\\left ( { x } \\right )  lẻ"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 14,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các hàm số sau, hàm số nào có đồ thị đối xứng qua gốc tọa độ?",
      "explanation": "Viết lại đáp án B là  y=\\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=\\frac { 1 } { \\sqrt[] { 2 } }\\left ( { sinx+cosx } \\right ). \nViết lại đáp án C là  y=\\sqrt[] { 2 }\\cos\\left ( { x-\\frac { \\pi } { 4 } } \\right )=sinx+cosx. \nKiểm tra được đáp án A là hàm số lẻ nên có đồ thị đối xứng qua gốc tọa độ.\nTa kiểm tra được đáp án B và C là các hàm số không chẵn, không lẻ.\nXét đáp án D.\nHàm số xác định  \\Leftrightarrow sin2x\\ge 0\\Leftrightarrow 2x\\in \\left[ k2\\pi;\\pi+k2\\pi \\right]\\Leftrightarrow x\\in \\left[ k\\pi;\\frac { \\pi } { 2 }+k\\pi \\right] \n \\xrightarrow D=\\left[ k\\pi;\\frac { \\pi } { 2 }+k\\pi \\right]{ }\\left ( { k\\in \\mathbb{Z} } \\right ). \nChọn  x=\\frac { \\pi } { 4 }\\in { D }  nhưng  -x=-\\frac { \\pi } { 4 }∉{ D }{ . }  Vậy  y=\\sqrt[] { sin2x }  không chẵn, không lẻ.",
      "diagram": null,
      "options": [
        "A.  y=\\frac { 1 } { \\sin ^ { 3 } x }.",
        "B.  y=\\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right ).",
        "C.  y=\\sqrt[] { 2 }\\cos\\left ( { x-\\frac { \\pi } { 4 } } \\right ).",
        "D.  y=\\sqrt[] { sin2x }."
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 15,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số  y=3{ s }{ i }{ n }\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )-1  lần lượt là:",
      "explanation": "Tập xác định:  D=\\mathbb{R}  .\n+)  ∀x\\in \\mathbb{R}  ta có:  -1\\le { s }{ i }{ n }\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )\\le 1  \\Leftrightarrow -3\\le 3{ s }{ i }{ n }\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )\\le 3  \\Leftrightarrow -4\\le 3{ s }{ i }{ n }\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )-1\\le 2  \\Rightarrow -4\\le y\\le 2  .\nVậy giá trị lớn nhất của hàm số  y=3{ s }{ i }{ n }\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )-1  là  2  khi  x=-\\frac { \\pi } { 4 }  .\nGiá trị nhỏ nhất của hàm số  y=3{ s }{ i }{ n }\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )-1  là  -4  khi  x=\\frac { 3\\pi } { 4 }  .",
      "diagram": null,
      "options": [
        "A.  4;-2",
        "B.  2;\\,-4",
        "C.  1;-1",
        "D.  3;-3"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 16,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Gọi  M,m  lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số  y=6cos2x-7  trên đoạn  \\left[ -\\frac { \\pi } { 3 }\\,;\\,\\frac { \\pi } { 6 } \\right]  . Tính  M+m.",
      "explanation": "Ta có:  -\\frac { \\pi } { 3 }\\le x\\le \\,\\,\\frac { \\pi } { 6 }  \\Leftrightarrow -\\frac { 2\\pi } { 3 }\\le 2x\\le \\,\\,\\frac { \\pi } { 3 }  \\Leftrightarrow -\\frac { 1 } { 2 }\\le cos2x\\le 1\\Leftrightarrow -10\\le 6cos2x-7\\le -1  .\nSuy ra  M=-1,\\,m=-10.  Vậy  M+m=-11.",
      "diagram": null,
      "options": [
        "A.  -14.",
        "B.  3.",
        "C.  -11.",
        "D.  -10."
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 17,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tìm giá trị lớn nhất, giá trị nhỏ nhất của hàm số  y=2sin ^ { 2 } x+3sin2x-4cos ^ { 2 } x  .",
      "explanation": "Ta có:  y=1-cos2x+3sin2x-2(1+cos2x)  =3sin2x-3cos2x-1=3\\sqrt[] { 2 }\\sin\\left ( { 2x-\\frac { \\pi } { 4 } } \\right )-1  .\n \\Rightarrow -3\\sqrt[] { 2 }-1\\le y\\le 3\\sqrt[] { 2 }-1  ∀x\\in \\mathbb{R}  .\nVậy  miny=-3\\sqrt[] { 2 }-1;{ }maxy=3\\sqrt[] { 2 }-1  .",
      "diagram": null,
      "options": [
        "A.  miny=-3\\sqrt[] { 2 }-1;{ }maxy=3\\sqrt[] { 2 }+1.",
        "B.  miny=-3\\sqrt[] { 2 }-2;{ }maxy=3\\sqrt[] { 2 }-1.",
        "C.  miny=-3\\sqrt[] { 2 };{ }maxy=3\\sqrt[] { 2 }-1.",
        "D.  miny=-3\\sqrt[] { 2 }-1;{ }maxy=3\\sqrt[] { 2 }-1."
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 18,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Xét sự biến thiên của hàm số  y=tan2x  trên một chu kì tuần hoàn. Trong các kết luận sau, kết luận nào đúng?",
      "explanation": "Tập xác định của hàm số đã cho là  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }\\|\\,k\\in \\mathbb{Z} \\end{array} \\right \\}. \nHàm số  y=tan2x  tuần hoàn với chu kì  \\frac { \\pi } { 2 },  dựa vào các phương án A; B; C; D thì ta sẽ xét tính đơn điệu của hàm số trên  \\left ( { 0;\\,\\frac { \\pi } { 2 } } \\right )\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 } \\end{array} \\right \\}. \nDựa theo kết quả khảo sát sự biến thiên của hàm số  y=tanx  , có thể suy ra với hàm số  y=tan2x  đồng biến trên khoảng  \\left ( { 0;\\,\\frac { \\pi } { 4 } } \\right )  và  \\left ( { \\frac { \\pi } { 4 };\\,\\frac { \\pi } { 2 } } \\right ).",
      "diagram": null,
      "options": [
        "A. Hàm số đã cho đồng biến trên khoảng  \\left ( { 0;\\,\\frac { \\pi } { 4 } } \\right )  và  \\left ( { \\frac { \\pi } { 4 };\\,\\frac { \\pi } { 2 } } \\right )",
        "B. Hàm số đã cho đồng biến trên khoảng  \\left ( { 0;\\,\\frac { \\pi } { 4 } } \\right )  và nghịch biến trên khoảng  \\left ( { \\frac { \\pi } { 4 };\\,\\frac { \\pi } { 2 } } \\right )",
        "C. Hàm số đã cho luôn đồng biến trên khoảng  \\,\\,\\left ( { 0;\\,\\frac { \\pi } { 2 } } \\right )",
        "D. Hàm số đã cho nghịch biến trên khoảng  \\left ( { 0;\\,\\frac { \\pi } { 4 } } \\right )  và đồng biến trên khoảng  \\left ( { \\frac { \\pi } { 4 };\\,\\frac { \\pi } { 2 } } \\right )"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 19,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho đồ thị hàm số lượng giác  y=sinx  như hình vẽ dưới đây: Hàm số  y=\\left | { sinx } \\right |  có bao nhiêu lần đạt giá trị bằng 1 trong đoạn  \\left[ \\frac { -3\\pi } { 2 };\\frac { 5\\pi } { 2 } \\right]  ?",
      "explanation": "Đồ thị hàm số  y=\\left | { sinx } \\right | \nNhìn đồ thị ta thấy  y=\\left | { sinx } \\right |  có 5 lần đạt giá trị bằng 1 trong đoạn  \\left[ \\frac { -3\\pi } { 2 };\\frac { 5\\pi } { 2 } \\right]",
      "diagram": "assets/diagrams/b4_q19.png",
      "options": [
        "A.  5",
        "B.  1",
        "C.  3",
        "D.  7"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 20,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Huyết áp là áp lực máu cần thiết tác động lên thành động mạch nhằm đưa máu đi nuôi dưỡng các mô trong cơ thể. Nhờ lực co bóp của tim và sức cản của động mạch mà huyết áp được tạo ra. Huyết áp tối đa và huyết áp tối thiểu tương ứng được gọi là huyết áp tâm thu và huyết áp tâm trương. Chỉ số huyết áp của chúng ta được tính bằng huyết áp tâm thu/huyết áp tâm trương. Giả sử huyết áp của người đó thay đổi theo thời gian được cho bởi công thức:  p\\left ( { t } \\right )=115{ }+{ }25sin\\left ( { 160\\pit } \\right )  trong đó p(t) là huyết áp tính theo đơn vị mmHg (milimet thủy ngân) và thời gian t tính theo đơn vị phút. Khi đó, chỉ số huyết áp bằng",
      "explanation": "Ta có  -1\\le sinx\\le 1\\,\\,\\,\\,∀x  nên  115-25.1\\le p\\left ( { t } \\right )=115{ }+{ }25sin\\left ( { 160\\pit } \\right )\\le 115+25.1  \\Leftrightarrow 90\\le p\\left ( { t } \\right )\\le 140 \nVậy chỉ số huyết áp là  \\frac { 140 } { 90 }",
      "diagram": null,
      "options": [
        "A.  \\frac { 115 } { 90 }",
        "B.  \\frac { 150 } { 60 }",
        "C.  \\frac { 120 } { 80 }",
        "D.  \\frac { 140 } { 90 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 21,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một con lắc lò xo sau khi được kéo xuống dưới vị trí cân bằng  4\\,\\text{cm}  và thả ra thì nó dao động điều hòa với phương trình:  y=-4cos8t\\,\\left ( { \\text{cm} } \\right )  (tham khảo hình vẽ). Biên độ  A\\,\\text{cm}  và chu kỳ  \\,T  của dao động là",
      "explanation": "Biên độ của dao động là:  A=\\left | { -4 } \\right |=4\\,\\left ( { \\text{cm} } \\right ). \nChu kỳ của dao động là:  T=\\frac { 2\\pi } { \\left | { 8 } \\right | }=\\frac { \\pi } { 4 }.",
      "diagram": "assets/diagrams/b4_q21.png",
      "options": [
        "A.  A=4\\,\\text{cm};\\,\\,T=\\frac { \\pi } { 4 }",
        "B.  A=4\\,\\text{cm};\\,\\,T=\\frac { \\pi } { 2 }",
        "C.  A=8\\,\\text{cm};\\,\\,T=\\frac { \\pi } { 4 }",
        "D.  A=4\\,\\text{cm};\\,\\,T=2\\pi"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 22,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Hằng ngày mực nước của con kênh lên xuống theo thủy triều. Độ sâu  h  (mét) của mực nước trong kênh được tính tại thời điểm  t  (giờ) trong một ngày bởi công thức  h=3cos\\left ( { \\frac { \\pit } { 7=8 }+\\frac { \\pi } { 4 } } \\right )+12  . Mực nước của kênh cao nhất khi:",
      "explanation": "Mực nước của kênh cao nhất khi  h  lớn nhất\n \\Leftrightarrow \\cos\\left ( { \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 } } \\right )=1\\Leftrightarrow \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 }=k2\\pi  với  0 < t\\le 24  và  k\\in \\mathbb{Z}  .\nLần lượt thay các đáp án, ta được đáp án B thỏa mãn.\nVì với  t=14  thì  \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 }=2\\pi  (đúng với  k=1\\in \\mathbb{Z}  ).",
      "diagram": null,
      "options": [
        "A.  t=13  (giờ)",
        "B.  t=14  (giờ)",
        "C.  t=15  (giờ)",
        "D.  t=16  (giờ)"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 23,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  thuộc đoạn  \\left[ -10;10 \\right]  để hàm số  y=\\sqrt[] { \\sin ^ { 2 } x-2sinx+m-1 }  xác định trên  \\mathbb{R}  .",
      "explanation": "Hàm số xác định trên  \\mathbb{R}  khi chỉ khi:  \\sin ^ { 2 } x-2sinx+m-1\\ge 0\\,\\,,\\,∀x\\in \\mathbb{R} \n \\Leftrightarrow m\\ge -\\sin ^ { 2 } x+2sinx+1=2-\\left ( { sinx-1 } \\right ) ^ { 2 } \\,,\\,∀x\\in \\mathbb{R} \n \\Leftrightarrow m\\ge \\mathop { max } \\limits_{ \\left ( { -∞\\,;\\,+∞ } \\right ) } \\left ( { -\\sin ^ { 2 } x+2sinx+1 } \\right )=2\\Leftrightarrow m\\ge 2  .\nMà  m\\in \\mathbb{Z}  ;m\\in \\left[ -10;10 \\right]\\Rightarrow m\\in \\left \\{ \\begin{array}{l} 2;3;4\\,;\\,5;\\,6\\,;\\,7\\,;\\,8\\,;\\,9\\,;\\,10\\, \\end{array} \\right \\}  .",
      "diagram": null,
      "options": [
        "A.  8",
        "B.  9",
        "C.  12",
        "D.  13"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 24,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Số giờ có ánh sáng của một thành phố  A  trong ngày thứ  t  của năm  2021  được cho bởi một hàm số  y=4sin\\left | { \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) } \\right |+10  , với  t\\in Z  và  0 < t\\le 365  . Vào ngày nào trong năm thì thành phố  A  có nhiều giờ ánh sáng mặt trời nhất ?",
      "explanation": "Vì  \\sin\\left | { \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) } \\right |\\le 1\\Rightarrow y=4sin\\left | { \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) } \\right |+10\\le 14  .\nNgày có ánh nắng mặt trời chiếu nhiều nhất  \\Leftrightarrow y=14\\Leftrightarrow \\sin\\left | { \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) } \\right |=1\\Leftrightarrow \\frac { \\pi } { 178 }\\left ( { t-60 } \\right )=\\frac { \\pi } { 2 }+k2\\pi\\Leftrightarrow t=149+356k  .\nMà  0 < t\\le 365\\Leftrightarrow 0 < 149+356k\\le 365\\Leftrightarrow -\\frac { 149 } { 356 } < k\\le \\frac { 54 } { 89 }  .\nVì  k\\in \\mathbb{Z}  nên  k=0  .\nVới  k=0\\Rightarrow t=149  tức rơi vào ngày  29  tháng  5 \nVì ta đã biết tháng  1  và  3  có  31  ngày, tháng  4  có  30  ngày,\nRiêng đối với năm  2021  thì không phải năm nhuận nên tháng  2  có  28  ngày hoặc dựa vào dữ kiện  0 < t\\le 365  thì ta biết năm này tháng  2  chỉ có  28  ngày).\nB.Câu hỏi – Trả lời Đúng/sai",
      "diagram": null,
      "options": [
        "A.  28  tháng  5",
        "B.  29  tháng  5",
        "C.  30  tháng  5",
        "D.  31  tháng  5"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 25,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  y=3-\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )  , khi đó:",
      "explanation": "y=3-\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right ) \n(a) Hàm số có tập xác định  D=\\mathbb{R} \nTa có: hàm số có tập xác định  D=\\mathbb{R}  .\n -1\\le \\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )\\le 1\\Leftrightarrow 1\\ge -\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )\\ge -1\\Leftrightarrow 4\\ge 3-\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )\\ge 2\\Leftrightarrow 4\\ge y\\ge 2 \n» Chọn ĐÚNG.\n(b) Giá trị nhỏ nhất của hàm số bằng 2\nVậy giá trị nhỏ nhất của hàm số bằng  2  .\n» Chọn ĐÚNG.\n(c) Giá trị lớn nhất của hàm số bằng 4\nVậy giá trị lớn nhất của hàm số bằng  4  .\n» Chọn ĐÚNG.\n(d) Tập giá trị của hàm số là  T=\\left[ 2;4 \\right] \nDo đó tập giá trị của hàm số là  T=\\left[ 2;4 \\right]  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Hàm số có tập xác định  D=\\mathbb{R}",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Giá trị nhỏ nhất của hàm số bằng 2",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Giá trị lớn nhất của hàm số bằng 4",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Tập giá trị của hàm số là  T=\\left[ 2;4 \\right]",
          "correct": true
        }
      ]
    },
    {
      "id": 26,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  f\\left ( { x } \\right )=tan2x-1  . Khi đó:",
      "explanation": "(a) Giá trị của hàm số tại  x=\\frac { \\pi } { 8 }  bằng 0\nTa có:\n f\\left ( { \\frac { \\pi } { 8 } } \\right )=\\tan\\left ( { 2⋅\\frac { \\pi } { 8 } } \\right )-1=1-1=0 \n» Chọn ĐÚNG.\n(b) Giá trị của hàm số tại  x=\\frac { \\pi } { 3 }  bằng  -\\sqrt[] { 3 }-1 \n f\\left ( { \\frac { \\pi } { 3 } } \\right )=\\tan\\left ( { 2⋅\\frac { \\pi } { 3 } } \\right )-1=-\\sqrt[] { 3 }-1 \n» Chọn ĐÚNG.\n(c) Có ba giá trị  x  thuộc  \\left[ 0;\\pi \\right]  khi hàm số đạt giá trị bằng  -2  .\nTa có:  f\\left ( { x } \\right )=-2\\Leftrightarrow tan2x-1=-2\\Leftrightarrow tan2x=-1 \n \\Leftrightarrow 2x=-\\frac { \\pi } { 4 }+k\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )\\Leftrightarrow x=-\\frac { \\pi } { 8 }+k\\frac { \\pi } { 2 }\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right ) \nVì  x\\in \\left[ 0;\\pi \\right]  nên  x\\in \\left \\{ \\begin{array}{l} \\frac { 3\\pi } { 8 };\\frac { 7\\pi } { 8 } \\end{array} \\right \\}  (khi đó  k=1;k=2  ).\n» Chọn SAI.\n(d) Hàm số đã cho là hàm tuần hoàn.\nTập xác định hàm số là:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }∣\\,k\\in \\mathbb{Z} \\end{array} \\right \\}  .\nVới mọi  x\\in D  , ta có:  x\\pm \\frac { \\pi } { 2 }\\in D  và\n f\\left ( { x+\\frac { \\pi } { 2 } } \\right )=tan2\\left ( { x+\\frac { \\pi } { 2 } } \\right )-1=\\tan\\left ( { 2x+\\pi } \\right )-1=tan2x-1=f\\left ( { x } \\right ) \nVậy hàm số đã cho là hàm tuần hoàn.\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Giá trị của hàm số tại  x=\\frac { \\pi } { 8 }  bằng 0",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Giá trị của hàm số tại  x=\\frac { \\pi } { 3 }  bằng  -\\sqrt[] { 3 }-1",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Có ba giá trị  x  thuộc  \\left[ 0;\\pi \\right]  khi hàm số đạt giá trị bằng  -2  .",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Hàm số đã cho là hàm tuần hoàn.",
          "correct": true
        }
      ]
    },
    {
      "id": 27,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  f\\left ( { x } \\right )=\\left | { x } \\right |sinx  . Khi đó:",
      "explanation": "(a) Tập xác định của hàm số:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} 0 \\end{array} \\right \\}  .\nTập xác định của hàm số:  D=\\mathbb{R}  .\n» Chọn SAI.\n(b)  f\\left ( { -\\pi } \\right )=-f\\left ( { \\pi } \\right )  .\nTa có  f\\left ( { \\pi } \\right )=\\pisin\\pi  ;  f\\left ( { -\\pi } \\right )=\\left | { -\\pi } \\right |\\sin\\left ( { -\\pi } \\right )=-\\pisin\\left ( { \\pi } \\right )=-f\\left ( { \\pi } \\right ) \n» Chọn ĐÚNG.\n(c) Đồ thị hàm số đã cho đối xứng qua gốc tọa độ  O\\left ( { 0;0 } \\right )  .\nVới mọi  x\\in D  , ta có:  -x\\in D  và  f\\left ( { -x } \\right )=\\left | { -x } \\right |\\sin(-x)=-\\left | { x } \\right |sinx=-f\\left ( { x } \\right )  .\nVậy hàm số đã cho là hàm số lẻ\n» Chọn ĐÚNG.\n(d)  f\\left ( { -x } \\right )=-f\\left ( { x } \\right )  .\nTa có  f\\left ( { -x } \\right )=-f\\left ( { x } \\right )  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Tập xác định của hàm số:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} 0 \\end{array} \\right \\}  .",
          "correct": false
        },
        {
          "subId": "b",
          "text": "f\\left ( { -\\pi } \\right )=-f\\left ( { \\pi } \\right )  .",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Đồ thị hàm số đã cho đối xứng qua gốc tọa độ  O\\left ( { 0;0 } \\right )  .",
          "correct": true
        },
        {
          "subId": "d",
          "text": "f\\left ( { -x } \\right )=-f\\left ( { x } \\right )  .",
          "correct": true
        }
      ]
    },
    {
      "id": 28,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Hàm số  y=f\\left ( { x } \\right )  có đồ thị như sau",
      "explanation": "(a) Hàm số có tập xác định  D=\\left[ -\\frac { 3\\pi } { 2 };\\frac { 3\\pi } { 2 } \\right]  .\nHàm số có dạng  f\\left ( { x } \\right )=sinx+1\\Rightarrow  hàm số có tập xác định  D=\\mathbb{R}  .\n» Chọn SAI.\n(b) Hàm số đồng biến trên khoảng  \\left ( { -\\pi;0 } \\right )  .\nDựa vào đồ thị ta có hàm số đồng biến trên  \\left ( { -\\frac { \\pi } { 2 };\\frac { \\pi } { 2 } } \\right )  .\n» Chọn SAI.\n(c) Hàm số nghịch biến trên khoảng  \\left ( { -\\pi;-\\frac { \\pi } { 2 } } \\right )  .\nDựa vào đồ thị ta có hàm số nghịch biến trên khoảng  \\left ( { -\\pi;-\\frac { \\pi } { 2 } } \\right )  .\n» Chọn ĐÚNG.\n(d) Tập giá trị của hàm số là  \\left[ 0;2 \\right]  .\nTập giá trị của hàm số là  \\left[ 0;2 \\right]  .\n» Chọn ĐÚNG.",
      "diagram": "assets/diagrams/b4_q28.png",
      "items": [
        {
          "subId": "a",
          "text": "Hàm số có tập xác định  D=\\left[ -\\frac { 3\\pi } { 2 };\\frac { 3\\pi } { 2 } \\right]  .",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Hàm số đồng biến trên khoảng  \\left ( { -\\pi;0 } \\right )  .",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Hàm số nghịch biến trên khoảng  \\left ( { -\\pi;-\\frac { \\pi } { 2 } } \\right )  .",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Tập giá trị của hàm số là  \\left[ 0;2 \\right]  .",
          "correct": true
        }
      ]
    },
    {
      "id": 29,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  f\\left ( { x } \\right )=\\left | { tanx } \\right |+\\left | { x ^ { 3 } -3x } \\right |  . Khi đó:",
      "explanation": "(a) Tập xác định của hàm số:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}  .\nTập xác định của hàm số:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}  .\n» Chọn ĐÚNG.\n(b) Hàm số đã cho là hàm số chẵn.\n ∀x\\in D  , ta có:  -x\\in D  và  f\\left ( { -x } \\right )=\\left | { \\tan\\left ( { -x } \\right ) } \\right |+\\left | { \\left ( { -x } \\right ) ^ { 3 } -3\\left ( { -x } \\right ) } \\right |=\\|tanx\\|+\\left | { x ^ { 3 } -3x } \\right |=f\\left ( { x } \\right ) \nVậy hàm số đã cho là hàm số chẵn.\n» Chọn ĐÚNG.\n(c)  f\\left ( { -\\pi } \\right )=-f\\left ( { \\pi } \\right ) \nDo đó  f\\left ( { -\\pi } \\right )\\ne -f\\left ( { \\pi } \\right )  .\n» Chọn SAI.\n(d) Đồ thị hàm số đã cho đối xứng qua gốc tọa độ  O\\left ( { 0;0 } \\right ) \nDo hàm số đã cho là hàm số chẵn.\nNên hàm số không đối xứng qua gốc tọa độ.\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Tập xác định của hàm số:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Hàm số đã cho là hàm số chẵn.",
          "correct": true
        },
        {
          "subId": "c",
          "text": "f\\left ( { -\\pi } \\right )=-f\\left ( { \\pi } \\right )",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Đồ thị hàm số đã cho đối xứng qua gốc tọa độ  O\\left ( { 0;0 } \\right )",
          "correct": false
        }
      ]
    },
    {
      "id": 30,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  f\\left ( { x } \\right )=2cosx+1  và  g\\left ( { x } \\right )=sinx+tanx  . Khi đó:",
      "explanation": "(a) Tập xác định hàm số  f\\left ( { x } \\right )  :  D=\\mathbb{R}  .\nTập xác định hàm số:  D=\\mathbb{R}  .\n» Chọn ĐÚNG.\n(b) Hàm số  f\\left ( { x } \\right )  là hàm tuần hoàn.\nVới mọi  x\\in D  thì  x\\pm 2\\pi\\in D  và  f\\left ( { x+2\\pi } \\right )=2cos\\left ( { x+2\\pi } \\right )+1=2cosx+1=f\\left ( { x } \\right )  .\nVậy hàm số đã cho là hàm tuần hoàn.\n» Chọn ĐÚNG.\n(c) Tập xác định hàm số  g\\left ( { x } \\right )  :  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 3 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .\nTập xác định hàm số:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .\n» Chọn SAI.\n(d) Hàm số  g\\left ( { x } \\right )  là hàm không tuần hoàn.\nVới mọi  x\\in D  thì  x\\pm 2\\pi\\in D  và  f\\left ( { x+2\\pi } \\right )=\\sin\\left ( { x+2\\pi } \\right )+\\tan\\left ( { x+2\\pi } \\right )=sinx+tanx=f\\left ( { x } \\right )  .\nVậy hàm số đã cho là hàm tuần hoàn.\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Tập xác định hàm số  f\\left ( { x } \\right )  :  D=\\mathbb{R}  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Hàm số  f\\left ( { x } \\right )  là hàm tuần hoàn.",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Tập xác định hàm số  g\\left ( { x } \\right )  :  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 3 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Hàm số  g\\left ( { x } \\right )  là hàm không tuần hoàn.",
          "correct": false
        }
      ]
    },
    {
      "id": 31,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  f\\left ( { x } \\right )=tanx  và  g\\left ( { x } \\right )=\\cot ^ { 2 } x-\\frac { sin2x } { 2 }  . Khi đó:",
      "explanation": "(a) Tập xác định hàm số  f\\left ( { x } \\right )  :  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .\nTập xác định hàm số:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .\n» Chọn ĐÚNG.\n(b) Hàm số  f\\left ( { x } \\right )  là hàm không tuần hoàn.\nVới mọi  x\\in D  thì  x\\pm \\pi\\in D  và  f(x+\\pi)=\\tan(x+\\pi)=tanx=f(x)  .\nVậy hàm số đã cho là hàm tuần hoàn.\n» Chọn SAI.\n(c) Tập xác định hàm số  g\\left ( { x } \\right )  :  D=\\mathbb{R}\\\\{k\\pi\\left | { k\\in \\mathbb{Z} } \\right .\\}  .\nTập xác định hàm số:  D=\\mathbb{R}\\\\{k\\pi\\left | { k\\in \\mathbb{Z} } \\right .\\}  .\n» Chọn ĐÚNG.\n(d) Hàm số  g\\left ( { x } \\right )  là hàm tuần hoàn.\nVới mọi  x\\in D  thì  x\\pm \\pi\\in D  và\n f\\left ( { x+\\pi } \\right )=\\cot ^ { 2 } \\left ( { x+\\pi } \\right )-\\frac { sin2\\left ( { x+\\pi } \\right ) } { 2 }=\\cot ^ { 2 } x-\\frac { sin2x } { 2 }=f\\left ( { x } \\right ). \nVậy hàm số đã cho là hàm tuần hoàn.\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Tập xác định hàm số  f\\left ( { x } \\right )  :  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Hàm số  f\\left ( { x } \\right )  là hàm không tuần hoàn.",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Tập xác định hàm số  g\\left ( { x } \\right )  :  D=\\mathbb{R}\\\\{k\\pi\\left | { k\\in \\mathbb{Z} } \\right .\\}  .",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Hàm số  g\\left ( { x } \\right )  là hàm tuần hoàn.",
          "correct": true
        }
      ]
    },
    {
      "id": 32,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  f\\left ( { x } \\right )=2+3cosx  và  g\\left ( { x } \\right )=sinx+cosx  . Khi đó:",
      "explanation": "(a) Giá trị lớn nhất của hàm số  f\\left ( { x } \\right )  bằng 5\nVới mọi  x\\in \\mathbb{R}  , ta có:  -1\\le cosx\\le 1\\Rightarrow -3\\le 3cosx\\le 3\\Rightarrow -1\\le 2+3cosx\\le 5  .\n» Chọn ĐÚNG.\n(b) Hàm số  f\\left ( { x } \\right )  đạt giá trị nhỏ nhất khi  x=\\pi+k2\\pi(k\\in \\mathbb{Z}) \nVậy giá trị lớn nhất của hàm số bằng 5 , khi đó  cosx=1\\Leftrightarrow x=k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right ) \nGiá trị nhỏ nhất của hàm số bằng  -1  , khi đó  cosx=-1\\Leftrightarrow x=\\pi+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  .\n» Chọn ĐÚNG.\n(c) Giá trị lớn nhất của hàm số  g\\left ( { x } \\right )  bằng  -\\sqrt[] { 2 } \nTa có:  sinx+cosx=\\sqrt[] { 2 }\\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )  .\n» Chọn SAI.\n(d) Hàm số  g\\left ( { x } \\right )  đạt giá trị nhỏ nhất khi  x=-\\frac { 3\\pi } { 4 }+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right ). \nVới mọi  x\\in \\mathbb{R}  , ta có:  -1\\le \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )\\le 1\\Leftrightarrow -\\sqrt[] { 2 }\\le \\sqrt[] { 2 }\\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )\\le \\sqrt[] { 2 }  .\nVậy giá trị lớn nhất của hàm số bằng  \\sqrt[] { 2 }  , khi đó  \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=1 \n \\Leftrightarrow x+\\frac { \\pi } { 4 }=\\frac { \\pi } { 2 }+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )\\Leftrightarrow x=\\frac { \\pi } { 4 }+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right ). \nGiá trị nhỏ nhất của hàm số bằng  -\\sqrt[] { 2 }  , khi đó  \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=-1 \n \\Leftrightarrow x+\\frac { \\pi } { 4 }=-\\frac { \\pi } { 2 }+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )\\Leftrightarrow x=-\\frac { 3\\pi } { 4 }+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right ). \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Giá trị lớn nhất của hàm số  f\\left ( { x } \\right )  bằng 5",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Hàm số  f\\left ( { x } \\right )  đạt giá trị nhỏ nhất khi  x=\\pi+k2\\pi\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Giá trị lớn nhất của hàm số  g\\left ( { x } \\right )  bằng  -\\sqrt[] { 2 }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Hàm số  g\\left ( { x } \\right )  đạt giá trị nhỏ nhất khi  x=-\\frac { 3\\pi } { 4 }+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )",
          "correct": true
        }
      ]
    },
    {
      "id": 33,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho các hàm số sau:  f\\left ( { x } \\right )=\\sqrt[] { 5-3sin ^ { 2 } x }  ;  g\\left ( { x } \\right )=tanx-xcosx  . Khi đó:",
      "explanation": "(a) Tập xác định hàm số  f\\left ( { x } \\right )  là:  D=\\mathbb{R}  .\nTập xác định hàm số là:  D=\\mathbb{R}  .\n» Chọn ĐÚNG.\n(b) Hàm số  f\\left ( { x } \\right )  đã cho là hàm số lẻ.\nVới mọi  x\\in D  thì  -x\\in D  và  f\\left ( { -x } \\right )=\\sqrt[] { 5-3sin ^ { 2 } \\left ( { -x } \\right ) }=\\sqrt[] { 5-3sin ^ { 2 } x }=f\\left ( { x } \\right ) \nVậy hàm số đã cho là hàm số chẵn.\n» Chọn SAI.\n(c) Tập xác định hàm số  g\\left ( { x } \\right )  là:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .\nTập xác định hàm số là:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .\n» Chọn ĐÚNG.\n(d) Hàm số  g\\left ( { x } \\right )  đã cho là hàm số lẻ.\nVới mọi  x\\in D  thì  -x\\in D  và  f\\left ( { -x } \\right )=\\tan\\left ( { -x } \\right )-\\left ( { -x } \\right )\\cos\\left ( { -x } \\right )=-tanx+xcosx=-f\\left ( { x } \\right )  .\nVậy hàm số đã cho là hàm số lẻ.\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Tập xác định hàm số  f\\left ( { x } \\right )  là:  D=\\mathbb{R}  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Hàm số  f\\left ( { x } \\right )  đã cho là hàm số lẻ.",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Tập xác định hàm số  g\\left ( { x } \\right )  là:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Hàm số  g\\left ( { x } \\right )  đã cho là hàm số lẻ.",
          "correct": true
        }
      ]
    },
    {
      "id": 34,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Hằng ngày mực nước của con kênh lên xuống theo thủy triều. Độ sâu  h  (mét) của mực nước trong kênh tính theo thời gian  t  (giờ) được cho bởi công thức  h\\left ( { t } \\right )=3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )+14  .",
      "explanation": "(a) Công thức tuần hoàn với chu kì  T=2\\pi  .\nCông thức có dạng  y=\\cos\\left ( { ax+b } \\right )  tuần hoàn với chu kì  T=\\frac { 2\\pi } { \\left | { a } \\right | }  nên chu kì cần tìm là  T=\\frac { 2\\pi } { \\left | { \\frac { \\pi } { 6 } } \\right | }=12  .\n» Chọn SAI.\n(b) Chiều sâu của mực nước thấp nhất là  11\\,{ m }  .\nTa có  ∀t:-1\\le \\cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )\\le 1  \\Leftrightarrow -3\\le 3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )\\le 3  \\Leftrightarrow 11\\le 3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )+14\\le 17  \\Leftrightarrow 11\\le h\\le 17  . Vậy chiều sâu của mực nước thấp nhất là  11\\,{ m }  .\n» Chọn ĐÚNG.\n(c) Chiều sâu của mực nước cao nhất là  14\\,{ m }  .\nTa có  ∀t:-1\\le \\cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )\\le 1  \\Leftrightarrow -3\\le 3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )\\le 3  \\Leftrightarrow 11\\le 3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )+14\\le 17  \\Leftrightarrow 11\\le h\\le 17  . Chiều sâu của mực nước cao nhất là  17\\,{ m }  .\n» Chọn SAI.\n(d) Thời gian để mực nước cao nhất là  t=9  .\nTa có  ∀t:-1\\le \\cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )\\le 1  \\Leftrightarrow -3\\le 3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )\\le 3  \\Leftrightarrow 11\\le 3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )+14\\le 17  \\Leftrightarrow 11\\le h\\le 17  . Chiều sâu của mực nước cao nhất là  17\\,{ m }  .\nMax  h=17  \\Leftrightarrow \\cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )=1  \\Leftrightarrow \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 }=k2\\pi  \\Leftrightarrow t=-3+12k,k\\in \\mathbb{Z}  .\nVì thời gian không âm và  k\\in \\mathbb{Z}  nên ta chọn  t=1  .\nVậy thời gian ngắn nhất  t=-3+12=9  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Công thức tuần hoàn với chu kì  T=2\\pi  .",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Chiều sâu của mực nước thấp nhất là  11\\,{ m }  .",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Chiều sâu của mực nước cao nhất là  14\\,{ m }  .",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Thời gian để mực nước cao nhất là  t=9  .",
          "correct": true
        }
      ]
    },
    {
      "id": 35,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Chiều cao so với mực nước biển trung bình tại thời điểm  t  (giây) của mỗi cơn sóng được cho bởi hàm số  h\\left ( { t } \\right )=75sin\\left ( { \\frac { \\pit } { 8 } } \\right )  , trong đó  h\\left ( { t } \\right )  được tính bằng centimét. (Tất cả kết quả được làm tròn đến hàng phần mười)",
      "explanation": "(a) Chiều cao của sóng tại các thời điểm 5 giây bằng  69,3\\,\\,\\left ( { \\text{cm} } \\right ) \nKhi  t=5  , ta có:  h\\left ( { 5 } \\right )=75sin\\left ( { \\frac { \\pi.5 } { 8 } } \\right )\\approx 69,3\\,\\,\\left ( { \\text{cm} } \\right )  .\n» Chọn ĐÚNG.\n(b) Chiều cao của sóng tại các thời điểm 20 giây bằng  75\\,\\,\\left ( { \\text{cm} } \\right ) \nKhi  t=20  , ta có:  h\\left ( { 20 } \\right )=75sin\\left ( { \\frac { \\pi⋅20 } { 8 } } \\right )=75\\,\\,\\left ( { \\text{cm} } \\right )  .\n» Chọn ĐÚNG.\n(c) Trong 30 giây đầu tiên (kể từ mốc  t=0  giây), thời điểm để sóng đạt chiều cao lớn nhất 6 giây\nTa có:  \\sin\\left ( { \\frac { \\pit } { 8 } } \\right )\\le 1\\Rightarrow 75sin\\left ( { \\frac { \\pit } { 8 } } \\right )\\le 75  hay  h(t)\\le 75  .\nGiá trị lớn nhất của  h\\left ( { t } \\right )  là 75, khi đó  \\sin\\left ( { \\frac { \\pit } { 8 } } \\right )=1\\Rightarrow \\frac { \\pit } { 8 }=\\frac { \\pi } { 2 }+k2\\pi(k\\in \\mathbb{Z})  \\Rightarrow t=4+16k\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  . Vì  t\\in \\left[ 0;30 \\right]\\Rightarrow t\\in \\left \\{ \\begin{array}{l} 4;20 \\end{array} \\right \\}  (ứng với  k  bằng 0 và 1).\n» Chọn SAI.\n(d) Trong 30 giây đầu tiên (kể từ mốc  t=0  giây), thời điểm để sóng đạt chiều cao lớn nhất 18 giây\nVậy tại các thời điểm 4 giây hoặc 20 giây (trong 30 giây đầu tiên) thì cơn sóng đạt chiều cao cực đại (là  75 \\text{cm}  ).\n» Chọn SAI.\nC.Câu hỏi – Trả lời ngắn",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Chiều cao của sóng tại các thời điểm 5 giây bằng  69,3\\,\\,\\left ( { \\text{cm} } \\right )",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Chiều cao của sóng tại các thời điểm 20 giây bằng  75\\,\\,\\left ( { \\text{cm} } \\right )",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Trong 30 giây đầu tiên (kể từ mốc  t=0  giây), thời điểm để sóng đạt chiều cao lớn nhất 6 giây",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Trong 30 giây đầu tiên (kể từ mốc  t=0  giây), thời điểm để sóng đạt chiều cao lớn nhất 18 giây",
          "correct": false
        }
      ]
    },
    {
      "id": 36,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Tập giá trị của hàm số:  y=5+4sin2xcos2x  có dạng  \\left[ a;b \\right]  với  a;b  là các số nguyên. Tính giá trị  S=a ^ { 2 } -2ab",
      "explanation": "y=5+4sin2xcos2x  .\nHàm số có tập xác định  D=\\mathbb{R}  .\nTa có  y=5+4sin2xcos2x=5+2sin4x  .\nDo  -1\\le sin4x\\le 1\\Leftrightarrow -2\\le 2sin4x\\le 2\\Leftrightarrow 3\\le 5+2sin4x\\le 7\\Leftrightarrow 3\\le y\\le 7  .\nVậy giá trị của hàm số là  T=\\left[ 3;7 \\right]\\Rightarrow \\left \\{ \\begin{array}{l} a=3 \\\\ b=7 \\end{array} \\right.\\Rightarrow S=-33  .",
      "diagram": null,
      "correctAnswer": "-33"
    },
    {
      "id": 37,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Tập giá trị của hàm số:  y=\\sin ^ { 6 } x+\\cos ^ { 6 } x  có dạng  \\left[ \\frac { a } { b };1 \\right]  với  a;b  là các số nguyên,  \\frac { a } { b }  là phân số tối giản. Tính giá trị  S=a+ab ^ { 2 }",
      "explanation": "y=\\sin ^ { 6 } x+\\cos ^ { 6 } x \nHàm số có tập xác định  D=\\mathbb{R}  .\nTa có:\n y=\\sin ^ { 6 } x+\\cos ^ { 6 } x=\\left ( { \\sin ^ { 2 } x+\\cos ^ { 2 } x } \\right ) ^ { 3 } -3sin ^ { 2 } xcos ^ { 2 } x\\left ( { \\sin ^ { 2 } x+\\cos ^ { 2 } x } \\right )=1-\\frac { 3 } { 4 }\\sin ^ { 2 } 2x  .\nDo  0\\le \\sin ^ { 2 } 2x\\le 1\\Leftrightarrow 0\\ge -\\frac { 3 } { 4 }\\sin ^ { 2 } 2x\\ge -\\frac { 3 } { 4 }\\Leftrightarrow 1\\ge 1-\\frac { 3 } { 4 }\\sin ^ { 2 } 2x\\ge \\frac { 1 } { 4 }\\Leftrightarrow 1\\ge y\\ge \\frac { 1 } { 4 }  .\nVậy giá trị của hàm số là  T=\\left[ \\frac { 1 } { 4 };1 \\right]\\Rightarrow \\left \\{ \\begin{array}{l} a=1 \\\\ b=4 \\end{array} \\right.\\Rightarrow S=17  .",
      "diagram": null,
      "correctAnswer": "17"
    },
    {
      "id": 38,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  m  trong đoạn  \\left[ 0;10 \\right]  để hàm số  y=\\sqrt[] { m-2sinx }  xác định trên  \\mathbb{R}  .",
      "explanation": "Hàm số xác định  \\Leftrightarrow m-2sinx\\ge 0,∀x\\in \\mathbb{R}\\Leftrightarrow m\\ge 2sinx,∀x\\in \\mathbb{R}\\Leftrightarrow m\\ge 2  .\nVậy  m\\ge 2  .\nKhi đó trong đoạn  \\left[ 0;10 \\right]  có 9 giá trị thỏa mãn.",
      "diagram": null,
      "correctAnswer": "9"
    },
    {
      "id": 39,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Số giờ có ánh sáng của thành phố  T  ở vĩ độ  40 ^ { ^\\circ }  bắc trong ngày thứ t của một năm không nhuận được cho bởi hàm số  d(t)=3⋅\\sin\\left[ \\frac { \\pi } { 182 }(t-80) \\right]+12  với  t\\in \\mathbb{Z}  và  0 < t\\le 365  . Bạn An muốn đi tham quan thành phố  T  nhưng lại không thích ánh sáng mặt trời, vậy bạn An nên chọn đi vào ngày nào trong năm để thành phố  T  có ít giờ có ánh sáng mặt trời nhất?",
      "explanation": "Do  \\sin\\left[ \\frac { \\pi } { 182 }(t-80) \\right]\\ge -1\\Rightarrow 3⋅\\sin\\left[ \\frac { \\pi } { 182 }(t-80) \\right]\\ge -3 \n \\Rightarrow 3⋅\\sin\\left[ \\frac { \\pi } { 182 }(t-80) \\right]+12\\ge 9\\Rightarrow d(t)\\ge 9  .\nVậy thành phố  T  có ít giờ có ánh sáng mặt trời nhất khi và chỉ khi:\n \\sin\\left[ \\frac { \\pi } { 182 }(t-80) \\right]=-1\\Leftrightarrow \\frac { \\pi } { 182 }(t-80)=-\\frac { \\pi } { 2 }+k2\\pi \n \\Leftrightarrow t-80=182\\left ( { -\\frac { 1 } { 2 }+2k } \\right )\\Leftrightarrow t=364k-11,k\\in \\mathbb{Z}  .\nMặt khác:  0\\le 364k-11\\le 365\\Leftrightarrow \\frac { 11 } { 364 }\\le k\\le \\frac { 376 } { 364 }\\Leftrightarrow k=1(  do  k\\in \\mathbb{Z}) \n \\Rightarrow t=364-11=353 \nVậy thành phố  T  có ít giờ ánh sáng Mặt Trời nhất là 9 giờ khi  t=353  , tức là vào ngày thứ 353 trong năm.",
      "diagram": null,
      "correctAnswer": "353"
    },
    {
      "id": 40,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  m  trong đoạn  \\left[ -10;10 \\right]  để hàm số  y=\\frac { sinx-1 } { cosx+m }  có tập xác định  \\mathbb{R}  .",
      "explanation": "Điều kiện xác định:  cosx+m\\ne 0\\Leftrightarrow cosx\\ne -m \nHàm số xác định trên  \\mathbb{R}\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right. \\right.  .\nKhi đó trong đoạn  \\left[ -10;10 \\right]  có 9+9=18 giá trị thỏa mãn.",
      "diagram": null,
      "correctAnswer": "18"
    },
    {
      "id": 41,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Tính tổng giá trị lớn nhất và giá trị nhỏ nhất (nếu có) của hàm số:  y=2cos\\left ( { x-\\frac { \\pi } { 3 } } \\right )-1  .",
      "explanation": "y=f\\left ( { x } \\right )=2cos\\left ( { x-\\frac { \\pi } { 3 } } \\right )-1  .\nTXD:  D=\\mathbb{R}  .\nTa có:  -1\\le \\cos\\left ( { x-\\frac { \\pi } { 3 } } \\right )\\le 1,∀x\\in \\mathbb{R} \n \\Leftrightarrow -2\\le 2cos\\left ( { x-\\frac { \\pi } { 3 } } \\right )\\le 2,∀x\\in \\mathbb{R}\\Leftrightarrow -3\\le 2cos\\left ( { x-\\frac { \\pi } { 3 } } \\right )-1\\le 1,∀x\\in \\mathbb{R} \n f_{ { M }{ a }{ x }{ } } \\left ( { x } \\right )=1\\Leftrightarrow \\cos\\left ( { x-\\frac { \\pi } { 3 } } \\right )=1\\Leftrightarrow x-\\frac { \\pi } { 3 }=k2\\pi\\Leftrightarrow x=\\frac { \\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}. \n f_{ { M }{ i }{ n }{ } } \\left ( { x } \\right )=-3\\Leftrightarrow \\cos\\left ( { x-\\frac { \\pi } { 3 } } \\right )=-1\\Leftrightarrow x-\\frac { \\pi } { 3 }=\\pi+k2\\pi\\Leftrightarrow x=\\frac { 4\\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}. \nKhi đó tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số bằng  -2",
      "diagram": null,
      "correctAnswer": "-2"
    },
    {
      "id": 42,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Tính tổng giá trị lớn nhất và giá trị nhỏ nhất (nếu có) của hàm số:  y=\\sqrt[] { 1+sinx }-3  . Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "y=f\\left ( { x } \\right )=\\sqrt[] { 1+sinx }-3  .\nDo  sinx\\ge -1,∀x\\in \\mathbb{R}  nên tập xác định của hàm số là  D=\\mathbb{R}  .\nTa có:  -1\\le sinx\\le 1,∀x\\in \\mathbb{R} \n \\Leftrightarrow 0\\le 1+sinx\\le 2,∀x\\in \\mathbb{R}\\Leftrightarrow -3\\le \\sqrt[] { 1+sinx }-3\\le \\sqrt[] { 2 }-3,∀x\\in \\mathbb{R}\\Leftrightarrow -3\\le f\\left ( { x } \\right )\\le \\sqrt[] { 2 }-3,∀x\\in \\mathbb{R} \n f_{ { M }{ i }{ n }{ } } \\left ( { x } \\right )=-3\\Leftrightarrow sinx=-1\\Leftrightarrow x=-\\frac { \\pi } { 2 }+k2\\pi,k\\in \\mathbb{Z}. \n f_{ { M }{ a }{ x }{ } } \\left ( { x } \\right )=\\sqrt[] { 2 }-3\\Leftrightarrow sinx=1\\Leftrightarrow x=\\frac { \\pi } { 2 }+k2\\pi,k\\in \\mathbb{Z}. \nKhi đó tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số bằng  -3+\\sqrt[] { 2 }-3=-6+\\sqrt[] { 2 }\\approx -4,59",
      "diagram": null,
      "correctAnswer": "-4,59"
    },
    {
      "id": 43,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Hàm số  y=1-3\\sqrt[] { 1-\\cos ^ { 2 } x }  đạt giá trị nhỏ nhất tại điểm  x=\\frac { a } { b }\\pi+k\\pi,k\\in \\mathbb{Z}  , với  a;b  là các số nguyên,  \\frac { a } { b }  là phân số tối giản. Tính giá trị  S=a+ab ^ { 2 }",
      "explanation": "Ta có:  \\cos ^ { 2 } x\\ge 0\\Rightarrow -\\cos ^ { 2 } x\\le 0\\Leftrightarrow 1-\\cos ^ { 2 } x\\le 1 \n \\Rightarrow \\sqrt[] { 1-\\cos ^ { 2 } x }\\le 1\\Leftrightarrow -3\\sqrt[] { 1-\\cos ^ { 2 } x }\\ge -3\\Leftrightarrow 1-3\\sqrt[] { 1-\\cos ^ { 2 } x }\\ge -2\\Leftrightarrow y\\ge -2. \n(Dấu “=” xảy ra  \\Leftrightarrow 1-\\cos ^ { 2 } x=1\\Leftrightarrow \\cos ^ { 2 } x=0\\Leftrightarrow \\frac { 1+cos2x } { 2 }=0 \n \\left ) { \\Leftrightarrow cos2x=-1\\Leftrightarrow 2x=\\pi+k2\\pi,k\\in \\mathbb{Z}\\Leftrightarrow x=\\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z}. } \nVậy tại  x=\\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z}  thì  y  đạt giá trị nhỏ nhất bằng  -2  .\nKhi đó  a=1;b=2\\Rightarrow S=1+2 ^ { 2 } =5",
      "diagram": null,
      "correctAnswer": "5"
    },
    {
      "id": 44,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  m  để hàm số  y=\\sqrt[] { \\frac { m-1 } { m }-2cos4x }  xác định trên  \\mathbb{R}  .",
      "explanation": "Để hàm số  y=\\sqrt[] { \\frac { m-1 } { m }-2cos4x }  xác định trên  \\mathbb{R} \n \\Leftrightarrow \\frac { m-1 } { m }-2cos4x\\ge 0,∀x\\in \\mathbb{R}\\Leftrightarrow \\frac { m-1 } { 2m }\\ge cos4x\\ge 1\\Leftrightarrow \\frac { m-1 } { 2m }\\ge 1\\Leftrightarrow -1\\le m\\le 0.",
      "diagram": null,
      "correctAnswer": "2"
    },
    {
      "id": 45,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có tất cả bao nhiêu giá trị nguyên của tham số  m\\in \\left[ -2024;2024 \\right]  để hàm số  y=\\sqrt[] { \\sin ^ { 2 } x-2sinx+1-m }  xác định trên  \\mathbb{R}  ?",
      "explanation": "Hàm số xác định trên  \\mathbb{R}  khi và chỉ khi  \\sin ^ { 2 } x-2sinx+1-m\\ge 0,∀x\\in \\mathbb{R}  .\nĐặt  t=sinx  \\Rightarrow t\\in \\left[ -1;1 \\right] \nLúc này ta đi tìm điều kiện của  m  để  f\\left ( { t } \\right )=t ^ { 2 } -2t+1-m\\ge 0,∀t\\in \\left[ -1;1 \\right]\\,\\,(1) \nTa có  (1)\\Leftrightarrow \\mathop { \\mathop { min } \\limits_{ \\left[ -1;1 \\right] } f\\left ( { t } \\right )\\ge 0\\,\\,\\left ( { 2 } \\right ) } \nXét  f\\left ( { t } \\right )=t ^ { 2 } -2t+1-m,t\\in \\left[ -1;1 \\right]  , ta có bảng biến thiên\nDo đó (2)  \\Leftrightarrow -m\\ge 0\\Leftrightarrow m\\le 0  .\nVì  m\\in \\left[ -2024;2024 \\right]  và  m\\in \\mathbb{Z}  nên  m\\in \\left \\{ \\begin{array}{l} -2024;-2023;...;0 \\end{array} \\right \\}  nên có 2025 giá trị của tham số  m  .",
      "diagram": null,
      "correctAnswer": "2025"
    },
    {
      "id": 46,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Gọi  M  và  m  lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số  y=sinx+\\sqrt[] { 3 }cosx+3  . Tính  M+m  .",
      "explanation": "Ta có  y=sinx+\\sqrt[] { 3 }cosx+3=2\\left ( { \\frac { 1 } { 2 }sinx+\\frac { \\sqrt[] { 3 } } { 2 }cosx } \\right )+3=2sin\\left ( { x+\\frac { \\pi } { 3 } } \\right )+3 \nDo  ∀x:-1\\le \\sin\\left ( { x+\\frac { \\pi } { 3 } } \\right )\\le 1  \\Leftrightarrow -2\\le 2sin\\left ( { x+\\frac { \\pi } { 3 } } \\right )\\le 2  \\Leftrightarrow 1\\le 2sin\\left ( { x+\\frac { \\pi } { 3 } } \\right )+3\\le 5  \\Leftrightarrow 1\\le y\\le 5  .\nVậy  m=\\mathop { min } \\limits_{ \\mathbb{R} } y=1{ }{ k }{ h }{ i }{ }x=-\\frac { 5\\pi } { 6 }+k2\\pi,(k\\in \\mathbb{Z})  và  M=\\mathop { max } \\limits_{ \\mathbb{R} } y=5  khi  x=\\frac { \\pi } { 6 }+k2\\pi,(k\\in \\mathbb{Z})  nên  M+m=6  .",
      "diagram": null,
      "correctAnswer": "6"
    },
    {
      "id": 47,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Trong các hàm số  y=sin2x  ,  y=\\tan\\left | { x } \\right |  ,  y=tanx+cotx  ,  y=2sinx+3  có bao nhiêu hàm số lẻ?",
      "explanation": "» Xét hàm số  y=sin2x \nTXĐ:  D=\\mathbb{R}.  Suy ra  ∀x\\in D\\Rightarrow -x\\in D  .\nTa có:  f\\left ( { -x } \\right )=\\sin\\left ( { -2x } \\right )=-sin2x=-f\\left ( { x } \\right )  .\nDo đó hàm số đã cho là hàm số lẻ.\n» Xét hàm số  y=\\tan\\left | { x } \\right | \nTXĐ:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\pm \\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}.  Suy ra  ∀x\\in D\\Rightarrow -x\\in D  .\nTa có:  f\\left ( { -x } \\right )=\\tan\\left | { -x } \\right |=\\tan\\left | { x } \\right |=f\\left ( { x } \\right )  .\nDo đó hàm số đã cho là hàm số chẵn.\n» Xét hàm số  y=tanx+cotx \nTXĐ:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { k\\pi } { 2 },k\\in \\mathbb{Z} \\end{array} \\right \\}.  Suy ra  ∀x\\in D\\Rightarrow -x\\in D \nTa có:  f\\left ( { -x } \\right )=\\tan\\left ( { -x } \\right )+\\cot\\left ( { -x } \\right )=-tanx-cotx=-\\left ( { tanx+cotx } \\right )=-f\\left ( { x } \\right ) \nDo đó hàm số đã cho là hàm số lẻ.\n» Xét hàm số  y=2sinx+3 \nTXĐ:  D=\\mathbb{R}.  Suy ra  ∀x\\in D\\Rightarrow -x\\in D \nTa có:  f\\left ( { -\\frac { \\pi } { 2 } } \\right )=2sin\\left ( { \\frac { -\\pi } { 2 } } \\right )+3=1  ;  f\\left ( { \\frac { \\pi } { 2 } } \\right )=2sin\\left ( { \\frac { \\pi } { 2 } } \\right )+3=5 \nNhận thấy  \\left \\{ \\begin{array}{l} f\\left ( { -\\frac { \\pi } { 2 } } \\right )\\ne f\\left ( { \\frac { \\pi } { 2 } } \\right ) \\\\ f\\left ( { -\\frac { \\pi } { 2 } } \\right )\\ne -f\\left ( { \\frac { \\pi } { 2 } } \\right ) \\end{array} \\right. \nDo đó hàm số không chẵn không lẻ.",
      "diagram": null,
      "correctAnswer": "2"
    },
    {
      "id": 48,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Tìm chu kì tuần hoàn của hàm số  f\\left ( { x } \\right )=tan2x  (kết quả được làm tròn đến hàng phần trăm).",
      "explanation": "Ta có :  f\\left ( { x+\\frac { \\pi } { 2 } } \\right )=f\\left ( { x } \\right ),\\,\\,\\,∀x\\in D  .\nGiả sử có số thực dương  T < \\frac { \\pi } { 2 }  thỏa  f\\left ( { x+T } \\right )=f\\left ( { x } \\right )\\Leftrightarrow \\tan\\left ( { 2x+2T } \\right )=tan2x\\,\\,\\,,\\,∀x\\in D\\,\\,\\,\\,(**) \nCho  x=0\\Rightarrow VT(**)=tan2T\\ne 0;\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,VP(**)=0 \n \\Rightarrow (**)  không xảy ra với mọi  x\\in D  . Vậy hàm số đã cho tuần hoàn với chu kỳ  T_{ 0 } =\\frac { \\pi } { 2 }\\approx 1,57  .",
      "diagram": null,
      "correctAnswer": "1,57"
    },
    {
      "id": 49,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho hàm số  y=ksin\\left ( { tx } \\right )  với  k,t\\in \\mathbb{R}  có đồ thị như hình vẽ. Hàm số có tập giá trị là  \\left[ a,b \\right]  . Tính  T=2a+6b  .",
      "explanation": "Vì hàm số đi qua các điểm  O\\left ( { 0,0 } \\right ),\\,\\,M\\left ( { \\frac { \\pi } { 3 },\\frac { \\sqrt[] { 3 } } { 4 } } \\right ),\\,A\\left ( { \\frac { \\pi } { 2 },0 } \\right )  nên ta tìm được hàm số đã cho là  y=\\frac { 1 } { 2 }\\sin\\left ( { 2x } \\right )  .\nVì  ∀x:-1\\le \\sin\\left ( { 2x } \\right )\\le 1  nên  -\\frac { 1 } { 2 }\\le \\frac { 1 } { 2 }\\sin\\left ( { 2x } \\right )\\le \\frac { 1 } { 2 }  .\nSuy ra tập giá trị của hàm số là  \\left[ -\\frac { 1 } { 2 },\\frac { 1 } { 2 } \\right]  .\nVậy  T=2.\\frac { -1 } { 2 }+6.\\frac { 1 } { 2 }=2  .",
      "diagram": "assets/diagrams/b4_q49.png",
      "correctAnswer": "2"
    },
    {
      "id": 50,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Số giờ có ánh sáng của một thành phố  A  trong ngày thứ  t  của năm 2024 được cho bởi một hàm số  y=4sin\\left[ \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) \\right]+10  , với  t\\in \\mathbb{Z}  và  0 < t\\le 365  . Vào ngày nào trong tháng 5 năm 2024 thì thành phố  A  có số giờ ánh sáng mặt trời chiếu nhiều nhất?",
      "explanation": "Vì  \\sin\\left[ \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) \\right]\\le 1\\Leftrightarrow 4sin\\left[ \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) \\right]\\le 4\\Leftrightarrow 4sin\\left[ \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) \\right]+10\\le 14\\Leftrightarrow y\\le 14  .\nNgày có ánh nắng mặt trời chiếu nhiều nhất khi  y=14 \n \\Leftrightarrow \\sin\\left[ \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) \\right]=1 \n \\Leftrightarrow \\frac { \\pi } { 178 }\\left ( { t-60 } \\right )=\\frac { \\pi } { 2 }+2k\\pi,\\left ( { k\\in \\mathbb{Z} } \\right )\\Leftrightarrow t-60=89+356k\\Leftrightarrow t=149+356k \nMà  0 < t\\le 365\\Leftrightarrow 0 < 149+356k\\le 365 \n \\Leftrightarrow -149 < 356k\\le 216\\Leftrightarrow \\frac { -149 } { 356 } < k\\le \\frac { 54 } { 89 } \nVì  k\\in \\mathbb{Z}  nên  k=0  .\nVới  k=0  thì  t=149  .\nNăm 2024 là năm nhuận nên tháng 1, tháng 3 và tháng 5 có 31 ngày, tháng 2 có 29 ngày, tháng 4 có 30 ngày.\nVậy ngày thứ 149 trong năm 2024 rơi vào ngày 28 tháng 5 .\n-------------------- Hết --------------------",
      "diagram": null,
      "correctAnswer": "28"
    }
  ],
  "b5": [
    {
      "id": 1,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho hàm số  y=cosx  có đồ thị như hình vẽ. Nghiệm của phương trình  cosx=-1  trong khoảng  \\left ( { 0;2\\pi } \\right )  là:",
      "explanation": "Dựa vào đồ thị ta dễ thấy phương trình  cosx=-1  có một nghiệm trong khoảng  \\left ( { 0;2\\pi } \\right )  là  x=\\pi  .",
      "diagram": "assets/diagrams/b5_q1.png",
      "options": [
        "A.  x=0",
        "B.  x=\\pi",
        "C.  x=2\\pi",
        "D.  x=\\frac { \\pi } { 2 }"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 2,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho hàm số  y=sinx  có đồ thị như hình vẽ. Nghiệm của phương trình  sinx=1  trong khoảng  \\left ( { 0;\\pi } \\right )  là:",
      "explanation": "Dựa vào đồ thị ta dễ thấy phương trình  sinx=1  có một nghiệm trong khoảng  \\left ( { 0;\\pi } \\right )  là  x=\\frac { \\pi } { 2 }  .",
      "diagram": "assets/diagrams/b5_q2.png",
      "options": [
        "A.  x=0",
        "B.  x=\\pi",
        "C.  x=-\\frac { \\pi } { 2 }",
        "D.  x=\\frac { \\pi } { 2 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 3,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho hàm số  y=cosx  có đồ thị như hình vẽ. Tập nghiệm của phương trình  cosx=1  là?",
      "explanation": "Ta thấy đường thẳng  y=1  cắt đồ thị  y=cosx  tại các điểm có hoành độ  x=k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right ) \nNên tập nghiệm của phương trình  cosx=1  là  x=k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )  .",
      "diagram": "assets/diagrams/b5_q3.png",
      "options": [
        "A.  x=k\\pi\\,\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  x=\\pi+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  x=k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  x=\\frac { \\pi } { 2 }+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 4,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  cosx=0  có nghiệm là:",
      "explanation": "Theo công thức nghiệm đặc biệt thì  cosx=0\\Leftrightarrow x=\\frac { \\pi } { 2 }+k\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  x=\\frac { \\pi } { 2 }+k\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  x=k2\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  x=\\frac { \\pi } { 2 }+k2\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  x=k\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 5,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  2.sinx-1=0  có tập nghiệm là",
      "explanation": "Ta có:  2.sinx-1=0\\Leftrightarrow sinx=\\frac { 1 } { 2 }\\Leftrightarrow sinx=\\sin\\frac { \\pi } { 6 }\\Leftrightarrow \\left[ x=\\frac { \\pi } { 6 }+k2\\pi \\\\ x=\\frac { 5\\pi } { 6 }+k2\\pi \\right.\\,\\,\\, { k\\in () }",
      "diagram": null,
      "options": [
        "A.  S=\\left \\begin{array}{l} \\frac { \\pi } { 6 }+k2\\pi;\\frac { 5\\pi } { 6 }+k2\\pi,k\\in \\{\\} \\end{array} \\right.",
        "B.  S=\\left \\begin{array}{l} \\frac { \\pi } { 3 }+k2\\pi;-\\frac { 2\\pi } { 3 }+k2\\pi,k\\in \\{\\} \\end{array} \\right.",
        "C.  S=\\left \\begin{array}{l} \\frac { \\pi } { 6 }+k2\\pi;-\\frac { \\pi } { 6 }+k2\\pi,k\\in \\{\\} \\end{array} \\right.",
        "D.  S=\\left \\begin{array}{l} \\frac { 1 } { 6 }+k2\\pi,k\\in \\{\\} \\end{array} \\right."
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 6,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  cosx=\\cos\\frac { \\pi } { 3 }  có tất cả các nghiệm là:",
      "explanation": "Phương trình  cosx=\\cos\\frac { \\pi } { 3 }\\Leftrightarrow x=\\pm \\frac { \\pi } { 3 }+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )",
      "diagram": null,
      "options": [
        "A.  x=\\frac { 2\\pi } { 3 }+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  x=\\pm \\frac { \\pi } { 3 }+k\\pi\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  x=\\pm \\frac { \\pi } { 3 }+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  x=\\frac { \\pi } { 3 }+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 7,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tất cả các nghiệm của phương trình  sinx=\\sin\\frac { \\pi } { 3 }  là",
      "explanation": "Áp dụng công thức:  sinx=sina\\Leftrightarrow \\left[ x=a+k2\\pi \\\\ x=\\pi-a+k2\\pi \\right.\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=-\\frac { \\pi } { 3 }+k2\\pi \\right.\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=\\frac { 2\\pi } { 3 }+k2\\pi \\right.\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  x=\\frac { \\pi } { 3 }+k\\pi\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  \\left[ x=\\frac { \\pi } { 3 }+k\\pi \\\\ x=\\frac { 2\\pi } { 3 }+k\\pi \\right.\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 8,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Nghiệm của phương trình  cosx=\\frac { 1 } { 2 }  là",
      "explanation": "Ta có  cosx=\\cos\\frac { \\pi } { 3 }\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.\\left ( { k\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  x=\\pm \\frac { \\pi } { 2 }+k2\\pi",
        "B.  x=\\pm \\frac { \\pi } { 3 }+k2\\pi",
        "C.  x=\\pm \\frac { \\pi } { 4 }+k2\\pi",
        "D.  x=\\pm \\frac { \\pi } { 6 }+k2\\pi"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 9,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  cos2\\pix=\\frac { 2025 } { 2024 }  có bao nhiêu nghiệm trong  \\left ( { -\\pi;\\pi } \\right )",
      "explanation": "Ta có  \\frac { 2025 } { 2024 }>1  nên phương trình  cos2\\pix=\\frac { 2025 } { 2024 }  vô nghiệm.",
      "diagram": null,
      "options": [
        "A.  1",
        "B.  0",
        "C.  2",
        "D.  5"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 10,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Nghiệm của phương trình  2cos\\left ( { x-15^\\circ } \\right )-1=0  là",
      "explanation": "2cos\\left ( { x-15^\\circ } \\right )-1=0\\Leftrightarrow \\cos\\left ( { x-15^\\circ } \\right )=\\frac { 1 } { 2 }\\Leftrightarrow \\cos\\left ( { x-15^\\circ } \\right )=cos60^\\circ \n \\Leftrightarrow \\left[ x-15^\\circ=60^\\circ+k360^\\circ \\\\ x-15^\\circ=-60^\\circ+k360^\\circ \\right.\\Leftrightarrow \\left[ x=75^\\circ+k360^\\circ \\\\ x=-45^\\circ+k360^\\circ \\right.  ,  k\\in \\mathbb{Z}  .",
      "diagram": null,
      "options": [
        "A.  \\left[ x=75^\\circ+k360^\\circ \\\\ x=135^\\circ+k360^\\circ \\right.  ,  k\\in \\mathbb{Z}",
        "B.  \\left[ x=60^\\circ+k360^\\circ \\\\ x=-60^\\circ+k360^\\circ \\right.  ,  k\\in \\mathbb{Z}",
        "C.  \\left[ x=45^\\circ+k360^\\circ \\\\ x=-45^\\circ+k360^\\circ \\right.  ,  k\\in \\mathbb{Z}",
        "D.  \\left[ x=75^\\circ+k360^\\circ \\\\ x=-45^\\circ+k360^\\circ \\right.  ,  k\\in \\mathbb{Z}"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 11,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Giải phương trình  cosx=\\frac { \\sqrt[] { 3 } } { 2 }",
      "explanation": "Ta có:  cosx=\\frac { \\sqrt[] { 3 } } { 2 }\\Leftrightarrow cosx=\\cos\\frac { \\pi } { 6 }\\Leftrightarrow x=\\pm \\frac { \\pi } { 6 }+k2\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  x=\\pm \\frac { \\sqrt[] { 3 } } { 2 }+k2\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  x=\\pm \\frac { \\pi } { 6 }+k\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  x=\\pm \\frac { \\pi } { 6 }+k2\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  x=\\pm \\frac { \\pi } { 3 }+k2\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 12,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Nghiệm của phương trình  cosx=\\cos\\frac { \\pi } { 12 }  là",
      "explanation": "Ta có  cosx=\\cos\\frac { \\pi } { 12 }\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.\\left ( { k,l\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.\\left ( { k,l\\in \\mathbb{Z} } \\right )",
        "B.  \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.\\left ( { k,l\\in \\mathbb{Z} } \\right )",
        "C.  x=\\frac { \\pi } { 12 }+k2\\pi\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  x=\\frac { 11\\pi } { 12 }+k2\\pi\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 13,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  \\sin\\left ( { 2x-\\frac { \\pi } { 3 } } \\right )=0  có nghiệm là",
      "explanation": "Ta có  \\sin\\left ( { 2x-\\frac { \\pi } { 3 } } \\right )=0\\Leftrightarrow  2x-\\frac { \\pi } { 3 }=k\\pi,\\,k\\in \\mathbb{Z}  \\Leftrightarrow x=\\frac { \\pi } { 6 }+\\frac { k\\pi } { 2 },\\,k\\in \\mathbb{Z}  .",
      "diagram": null,
      "options": [
        "A.  x=k\\pi,\\,k\\in \\mathbb{Z}",
        "B.  x=\\frac { \\pi } { 6 }+\\frac { k\\pi } { 2 },\\,k\\in \\mathbb{Z}",
        "C.  x=\\frac { \\pi } { 2 }+k\\pi,\\,k\\in \\mathbb{Z}",
        "D.  x=\\frac { \\pi } { 3 }+k\\pi,\\,k\\in \\mathbb{Z}"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 14,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Giải phương trình  cosx=1  .",
      "explanation": "Ta có  cosx=1  \\Leftrightarrow x=k2\\pi  ,  k\\in \\mathbb{Z}  .",
      "diagram": null,
      "options": [
        "A.  x=\\frac { k\\pi } { 2 }  ,  k\\in \\mathbb{Z}",
        "B.  x=k\\pi  ,  k\\in \\mathbb{Z}",
        "C.  x=\\frac { \\pi } { 2 }+k2\\pi  ,  k\\in \\mathbb{Z}",
        "D.  x=k2\\pi  ,  k\\in \\mathbb{Z}"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 15,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  2sinx-\\sqrt[] { 3 }=0  có tập nghiệm là:",
      "explanation": "2sinx-\\sqrt[] { 3 }=0\\Leftrightarrow sinx=\\frac { \\sqrt[] { 3 } } { 2 }\\Leftrightarrow \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=\\frac { 2\\pi } { 3 }+k2\\pi \\right.\\left ( { k\\in \\mathbb{Z} } \\right ). \nVậy tập nghiệm của phương trình là:  S=\\left \\{ \\begin{array}{l} \\frac { \\pi } { 3 }+k2\\pi,\\frac { 2\\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
      "diagram": null,
      "options": [
        "A.  \\left \\{ \\begin{array}{l} \\pm \\frac { \\pi } { 6 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "B.  \\left \\{ \\begin{array}{l} \\pm \\frac { \\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "C.  \\left \\{ \\begin{array}{l} \\frac { \\pi } { 6 }+k2\\pi,\\frac { 5\\pi } { 6 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "D.  \\left \\{ \\begin{array}{l} \\frac { \\pi } { 3 }+k2\\pi,\\frac { 2\\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 16,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tổng các nghiệm của phương trình  2sin\\left ( { x+40^\\circ } \\right )=\\sqrt[] { 3 }  trên khoảng  \\left ( { -180^\\circ\\,;\\,180^\\circ } \\right )  là",
      "explanation": "Ta có:  2sin\\left ( { x+40^\\circ } \\right )=\\sqrt[] { 3 }  \\Leftrightarrow \\sin\\left ( { x+40^\\circ } \\right )=\\frac { \\sqrt[] { 3 } } { 2 } \n \\Leftrightarrow \\left[ x+40^\\circ=60^\\circ+k360^\\circ \\\\ x+40^\\circ=120^\\circ+k360^\\circ \\right.\\left ( { k\\in \\mathbb{Z} } \\right )  \\Leftrightarrow \\left[ x=20^\\circ+k360^\\circ \\\\ x=80^\\circ+k360^\\circ \\right.\\left ( { k\\in \\mathbb{Z} } \\right ) \nTheo đề bài:\n -180^\\circ < 20^\\circ+k360^\\circ < 180^\\circ\\Leftrightarrow -\\frac { 5 } { 9 } < k < \\frac { 4 } { 9 }\\Rightarrow k=0\\Rightarrow x=20^\\circ  .\n -180^\\circ < 80^\\circ+k360^\\circ < 180^\\circ\\Leftrightarrow -\\frac { 13 } { 18 } < k < \\frac { 5 } { 18 }\\Rightarrow k=0\\Rightarrow x=80^\\circ  .\nVậy tổng các nghiệm của phương trình là  20^\\circ+80^\\circ=100^\\circ  .",
      "diagram": null,
      "options": [
        "A.  20^\\circ",
        "B.  100^\\circ",
        "C.  80^\\circ",
        "D.  120^\\circ"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 17,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tìm tổng các nghiệm của phương trình  \\cos\\left ( { 5x-\\frac { \\pi } { 6 } } \\right )=\\cos\\left ( { 2x-\\frac { \\pi } { 3 } } \\right )  trên  \\left[ 0\\,;\\pi \\right]  .",
      "explanation": "Ta có:\n \\cos\\left ( { 5x-\\frac { \\pi } { 6 } } \\right )=\\cos\\left ( { 2x-\\frac { \\pi } { 3 } } \\right )  \\Leftrightarrow \\left[ 5x-\\frac { \\pi } { 6 }=2x-\\frac { \\pi } { 3 }+k2\\pi \\\\ 5x-\\frac { \\pi } { 6 }=-2x+\\frac { \\pi } { 3 }+k2\\pi \\right.,k\\in  \\Leftrightarrow \\left[ x=-\\frac { \\pi } { 18 }+\\frac { k2\\pi } { 3 } \\\\ x=\\frac { \\pi } { 14 }+\\frac { k2\\pi } { 7 } \\right.,k\\in  .\nVì  x\\in \\left[ 0\\,;\\pi \\right]  nên ta có :\n+) Với  x=-\\frac { \\pi } { 18 }+\\frac { k2\\pi } { 3 }\\Rightarrow 0\\le -\\frac { \\pi } { 18 }+\\frac { k2\\pi } { 3 }\\le \\pi\\Leftrightarrow \\frac { 1 } { 12 }\\le k\\le \\frac { 19 } { 12 }  , do  k\\in  nên  x=\\frac { 11\\pi } { 18 }  .\n+) Với  x=\\frac { \\pi } { 14 }+\\frac { k2\\pi } { 7 }\\Rightarrow 0\\le \\frac { \\pi } { 14 }+\\frac { k2\\pi } { 7 }\\le \\pi\\Leftrightarrow \\frac { -1 } { 4 }\\le k\\le \\frac { 13 } { 4 }  , do  k\\in  nên  x\\in \\left \\{ \\begin{array}{l} \\frac { \\pi } { 14 };\\frac { 5\\pi } { 14 };\\frac { 9\\pi } { 14 };\\frac { 13\\pi } { 14 } \\end{array} \\right \\}  .\nTổng tất cả các nghiệm là:  \\frac { 11\\pi } { 18 }+\\frac { \\pi } { 14 }+\\frac { 5\\pi } { 14 }+\\frac { 9\\pi } { 14 }+\\frac { 13\\pi } { 14 }=\\frac { 47\\pi } { 18 }  .",
      "diagram": null,
      "options": [
        "A.  \\frac { 47\\pi } { 18 }",
        "B.  \\frac { 4\\pi } { 18 }",
        "C.  \\frac { 45\\pi } { 18 }",
        "D.  \\frac { 7\\pi } { 18 }"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 18,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Số nghiệm phương trình  \\frac { sin3x } { cosx+1 }=0  thuộc đoạn  \\left[ 2\\pi;4\\pi \\right]  là",
      "explanation": "Điều kiện:  cosx+1\\ne 0\\Leftrightarrow x\\ne \\pi+k2\\pi  .\nTa có  \\frac { sin3x } { cosx+1 }=0\\Rightarrow sin3x=0\\Leftrightarrow x=\\frac { k\\pi } { 3 }\\left ( { k\\in \\mathbb{Z} } \\right ). \nSo với điều kiện nghiệm của phương trình là  x=\\frac { k\\pi } { 3 }  với  k\\in \\mathbb{Z},\\,\\,k\\ne 3\\left ( { 2l+1 } \\right ) \nVì  2\\pi\\le x\\le 4\\pi\\Leftrightarrow 2\\pi\\le \\frac { k\\pi } { 3 }\\le 4\\pi\\Leftrightarrow 6\\le k\\le 12  nên ta chọn  k\\in \\left \\{ \\begin{array}{l} 6,7,8,10,11,12 \\end{array} \\right \\}  .",
      "diagram": null,
      "options": [
        "A.  7",
        "B.  6",
        "C.  4",
        "D.  5"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 19,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Với những giá trị nào của  x  thì giá trị của các hàm số  y=sin3x  và  y=sinx  bằng nhau?",
      "explanation": "Xét phương trình hoành độ giao điểm:\n sin3x=sinx  \\Leftrightarrow \\left[ 3x=x+k2\\pi \\\\ 3x=\\pi-x+k2\\pi \\right.\\Leftrightarrow \\left[ x=k\\pi \\\\ x=\\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 } \\right.{ }\\left ( { k\\in \\mathbb{Z} } \\right ).",
      "diagram": null,
      "options": [
        "A.  \\left[ x=k2\\pi \\\\ x=\\frac { \\pi } { 4 }+k2\\pi \\right.{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  x=k\\frac { \\pi } { 4 }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  x=k\\frac { \\pi } { 2 }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  \\left[ x=k\\pi \\\\ x=\\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 } \\right.{ }\\left ( { k\\in \\mathbb{Z} } \\right )."
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 20,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Số nghiệm của phương trình  sinx=0  trên đoạn  \\left[ 0;\\pi \\right]  là",
      "explanation": "Ta có  sinx=0\\Leftrightarrow x=k\\pi  ,  k\\in \\mathbb{Z}  .\n x\\in \\left[ 0;\\pi \\right]\\Leftrightarrow 0\\le k\\pi\\le \\pi\\Leftrightarrow 0\\le k\\le 1  mà  k\\in \\mathbb{Z}  nên  k=0  ;  k=1  . Suy ra  x=0  ;  x=\\pi  .\nVậy phương trình  sinx=0  có 2 nghiệm trên đoạn  \\left[ 0;\\pi \\right]  .",
      "diagram": null,
      "options": [
        "A.  1",
        "B.  2",
        "C.  0",
        "D.  5"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 21,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Nghiệm của phương trình  \\sin\\left ( { \\frac { \\pi } { 3 }-x } \\right )+1=0  là",
      "explanation": "\\sin\\left ( { \\frac { \\pi } { 3 }-x } \\right )+1=0\\Leftrightarrow \\sin\\left ( { \\frac { \\pi } { 3 }-x } \\right )=-1  \\Leftrightarrow \\frac { \\pi } { 3 }-x=-\\frac { \\pi } { 2 }+k2\\pi\\Leftrightarrow x=\\frac { 5\\pi } { 6 }-k2\\pi  ,  k\\in \\mathbb{Z}  .\nVới  k\\in \\mathbb{Z}  ,  x=\\frac { 5\\pi } { 6 }+k2\\pi  cũng là nghiệm của phương trình.",
      "diagram": null,
      "options": [
        "A.  x=\\frac { 7\\pi } { 6 }+k2\\pi  ,  k\\in \\mathbb{Z}",
        "B.  x=\\frac { 5\\pi } { 6 }+k\\pi  ,  k\\in \\mathbb{Z}",
        "C.  x=-\\frac { 7\\pi } { 6 }+k\\pi  ,  k\\in \\mathbb{Z}",
        "D.  x=\\frac { 5\\pi } { 6 }+k2\\pi  ,  k\\in \\mathbb{Z}"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 22,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập nghiệm của phương trình  cos3x+\\sin\\frac { 2\\pi } { 3 }=0  là",
      "explanation": "Phương trình  cos3x+\\sin\\frac { 2\\pi } { 3 }=0,\\left ( { 1 } \\right )  có tập xác định  D=\\mathbb{R} \n \\left ( { 1 } \\right )\\Leftrightarrow cos3x=-\\sin\\frac { 2\\pi } { 3 }\\Leftrightarrow cos3x=\\cos\\frac { 5\\pi } { 6 } \n \\Leftrightarrow 3x=\\pm \\frac { 5\\pi } { 6 }+k.2\\pi,k\\in \\mathbb{Z} \n x=\\pm \\frac { 5\\pi } { 18 }+\\frac { k2\\pi } { 3 },k\\in \\mathbb{Z}  .",
      "diagram": null,
      "options": [
        "A.  \\left \\{ \\begin{array}{l} \\pm \\frac { 5\\pi } { 16 }+\\frac { k2\\pi } { 3 },k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "B.  \\left \\{ \\begin{array}{l} \\pm \\frac { 2\\pi } { 9 }+\\frac { k2\\pi } { 3 },k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "C.  \\left \\{ \\begin{array}{l} \\pm \\frac { 5\\pi } { 9 }+\\frac { k2\\pi } { 3 },k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "D.  \\left \\{ \\begin{array}{l} \\pm \\frac { 5\\pi } { 12 }+\\frac { k2\\pi } { 3 },k\\in \\mathbb{Z} \\end{array} \\right \\}"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 23,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các phương trình sau, phương trình nào có nghiệm?",
      "explanation": "Phương trình lượng giác cơ bản dạng  sinu=\\alpha  ,  cosu=a  có nghiệm khi và chỉ khi  \\left | { a } \\right |\\le 1",
      "diagram": null,
      "options": [
        "A.  cosx=3",
        "B.  sin2x=-2",
        "C.  \\cos\\left ( { 2x-\\frac { \\pi } { 3 } } \\right )=-1",
        "D.  \\cos\\left ( { 2x-1 } \\right )=\\frac { \\sqrt[] { 7 } } { 2 }"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 24,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình nào sau đây có nghiệm?",
      "explanation": "Phương trình  sinx=a  và  cosx=a  có nghiệm khi và chỉ khi  \\left | { a } \\right |\\le 1  .\nĐối chiếu các đáp án ta thấy chỉ có đáp án D là phương trình có nghiệm.",
      "diagram": null,
      "options": [
        "A.  sin2021x-2=0",
        "B.  \\cos\\left ( { 2x+2021 } \\right )=3",
        "C.  \\sin ^ { 2 } x+1=0",
        "D.  \\cos\\left ( { 2x+2021 } \\right )=-1"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 25,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  2sinx+\\sqrt[] { 3 }=0  có tổng nghiệm dương nhỏ nhất và nghiệm âm lớn nhất bằng",
      "explanation": "* Ta có:  2sinx+\\sqrt[] { 3 }=0\\Leftrightarrow sinx=-\\frac { \\sqrt[] { 3 } } { 2 }=\\sin\\left ( { -\\frac { \\pi } { 3 } } \\right )\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.\\,\\,\\,\\,\\,,k\\in \\mathbb{Z}  .\n* Xét  x=-\\frac { \\pi } { 3 }+k2\\pi  ,  k\\in \\mathbb{Z}  ta được nghiệm dương nhỏ nhất là  x_{ 1 } =\\frac { 5\\pi } { 3 }  và nghiệm âm lớn nhất là  x_{ 2 } =-\\frac { \\pi } { 3 }  .\n* Xét  x=\\frac { 4\\pi } { 3 }+k2\\pi  ,  k\\in \\mathbb{Z}  ta được nghiệm dương nhỏ nhất là  x_{ 3 } =\\frac { 4\\pi } { 3 }  và nghiệm âm lớn nhất là  x_{ 4 } =-\\frac { 2\\pi } { 3 }  .\n* So sánh  x_{ 1 }  và  x_{ 3 }  ta suy ra nghiệm dương nhỏ nhất của phương trình đã cho là  x_{ 3 } =\\frac { 4\\pi } { 3 }  .\nSo sánh  x_{ 2 }  và  x_{ 4 }  ta suy ra nghiệm âm lớn nhất của phương trình đã cho là  x_{ 2 } =-\\frac { \\pi } { 3 }  .\n* Ta có  x_{ 2 } +x_{ 3 } =-\\frac { \\pi } { 3 }+\\frac { 4\\pi } { 3 }=\\pi  .",
      "diagram": null,
      "options": [
        "A.  \\frac { 4\\pi } { 3 }",
        "B.  2\\pi",
        "C.  \\frac { \\pi } { 3 }",
        "D.  \\pi"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 26,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Nghiệm của phương trình  \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=\\frac { \\sqrt[] { 2 } } { 2 }\\sin\\left ( { \\frac { \\pi } { 4 } } \\right )  là",
      "explanation": "Biến đổi và giải phương trình như sau:\n \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=\\frac { \\sqrt[] { 2 } } { 2 }\\sin\\left ( { \\frac { \\pi } { 4 } } \\right ) \n \\Leftrightarrow \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=\\frac { \\sqrt[] { 2 } } { 2 }.\\frac { \\sqrt[] { 2 } } { 2 }=\\frac { 1 } { 2 } \n \\Leftrightarrow \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=\\sin\\frac { \\pi } { 6 }\\Rightarrow \\left[ x+\\frac { \\pi } { 4 }=\\frac { \\pi } { 6 }+2k\\pi \\\\ x+\\frac { \\pi } { 4 }=\\pi-\\frac { \\pi } { 6 }+2k\\pi \\right.\\Leftrightarrow \\left[ x=-\\frac { \\pi } { 12 }+2k\\pi \\\\ x=\\frac { 7\\pi } { 12 }+2k\\pi \\right.  với  k\\in \\mathbb{Z}  .",
      "diagram": null,
      "options": [
        "A.  \\left[ x=\\frac { \\pi } { 12 }+2k\\pi \\\\ x=-\\frac { 7\\pi } { 12 }+2k\\pi \\right.",
        "B.  \\left[ x=-\\frac { \\pi } { 12 }+k\\pi \\\\ x=-\\frac { 7\\pi } { 12 }+k\\pi \\right.",
        "C.  \\left[ x=-\\frac { \\pi } { 12 }+2k\\pi \\\\ x=\\frac { 7\\pi } { 12 }+2k\\pi \\right.",
        "D.  \\left[ x=-\\frac { \\pi } { 12 }+k\\pi \\\\ x=\\frac { 7\\pi } { 12 }+k\\pi \\right."
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 27,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập nghiệm của phương trình  \\sin ^ { 2 } x-2sinx+1=0  là?",
      "explanation": "Ta có:  \\sin ^ { 2 } x-2sinx+1=0\\Leftrightarrow \\left ( { sinx+1 } \\right ) ^ { 2 } =0  \\Leftrightarrow sinx=-1  \\Leftrightarrow x=-\\frac { \\pi } { 2 }+2k\\pi  với  k\\in \\mathbb{Z}  .\nHay  x=\\frac { 3\\pi } { 2 }+2k\\pi,k\\in \\mathbb{Z}  .",
      "diagram": null,
      "options": [
        "A.  x=-\\frac { 3\\pi } { 2 }+2k\\pi,k\\in \\mathbb{Z}",
        "B.  x=\\frac { 3\\pi } { 2 }+2k\\pi,k\\in \\mathbb{Z}",
        "C.  x=\\frac { \\pi } { 2 }+2k\\pi,k\\in \\mathbb{Z}",
        "D.  x=-\\frac { 3\\pi } { 2 }+k\\pi,k\\in \\mathbb{Z}"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 28,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho phương trình  sinx=\\frac { \\sqrt[] { 2 } } { 2 }  . Số nghiệm của phương trình trên đoạn  \\left[ -\\frac { \\pi } { 2 };\\pi \\right]  là?",
      "explanation": "Ta có:  sinx=\\frac { \\sqrt[] { 2 } } { 2 }\\Leftrightarrow sinx=\\sin\\frac { \\pi } { 4 }\\Rightarrow \\left[ x=\\frac { \\pi } { 4 }+2k\\pi \\\\ x=\\frac { 3\\pi } { 4 }+2k\\pi \\right.,k\\in \\mathbb{Z}  .\nĐể tìm được số nghiệm của phương trình, ta có thể sử dụng phương pháp đại số hoặc phương pháp sử dụng vòng tròn lượng giác như sau:\nPP1: Phương pháp đại số. (tham số  k\\in \\mathbb{Z}  )\nVới nghiệm  x=\\frac { \\pi } { 4 }+2k\\pi  \\in \\left[ -\\frac { \\pi } { 2 };\\pi \\right]  \\Rightarrow -\\frac { \\pi } { 2 }\\le \\frac { \\pi } { 4 }+2k\\pi\\le \\pi\\Leftrightarrow -\\frac { 3 } { 8 }\\le k\\le \\frac { 3 } { 8 } \n \\Rightarrow k=0  tương ứng  x=\\frac { \\pi } { 4 }  là nghiệm duy nhất thuộc đoạn  \\left[ -\\frac { \\pi } { 2 };\\pi \\right]  .\nVới nghiệm  x=\\frac { 3\\pi } { 4 }+2k\\pi\\in \\left[ -\\frac { \\pi } { 2 };\\pi \\right]  \\Rightarrow -\\frac { \\pi } { 2 }\\le \\frac { 3\\pi } { 4 }+2k\\pi\\le \\pi\\Leftrightarrow -\\frac { 5 } { 8 }\\le k\\le \\frac { 1 } { 8 } \n \\Rightarrow k=0  tương ứng  x=\\frac { 3\\pi } { 4 }  là nghiệm duy nhất thuộc đoạn  \\left[ -\\frac { \\pi } { 2 };\\pi \\right]  .\nVậy phương trình  sinx=\\frac { \\sqrt[] { 2 } } { 2 }  có hai nghiệm thuộc đoạn  \\left[ -\\frac { \\pi } { 2 };\\pi \\right]  .\nPP2: Sử dụng vòng tròn lượng giác.\nTrên trục  \\sin  , ta xác định  \\frac { \\sqrt[] { 2 } } { 2 }  . Từ vị trí đó, kẻ đường thẳng vuông góc với trục  \\sin  .\nKhi đó, hai giao điểm được tạo thành là hai nghiệm cơ bản của phương trình.\nQuan sát thấy rằng, trong đoạn từ  \\left[ -\\frac { \\pi } { 2 };\\pi \\right]  chỉ có hai giao điểm tương ứng với hai nghiệm.",
      "diagram": null,
      "options": [
        "A.  2",
        "B.  3",
        "C.  4",
        "D.  1"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 29,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  3cos ^ { 2 } x+7cosx-10=0  có nghiệm là?",
      "explanation": "Ta có:  3cos ^ { 2 } x+7cosx-10=0\\Leftrightarrow \\left[ cosx=1 \\\\ cosx=-\\frac { 10 } { 3 } \\right.  .\nVới  cosx=1\\Rightarrow x=2k\\pi  với  k\\in \\mathbb{Z}  .\nVới  cosx=-\\frac { 10 } { 3 }\\to  Loại vì tập giá trị của  cosx  là  \\left[ -1;1 \\right]  .",
      "diagram": null,
      "options": [
        "A.  x=\\frac { k\\pi } { 2 },k\\in \\mathbb{Z}",
        "B.  x=\\pi+2k\\pi,k\\in \\mathbb{Z}",
        "C.  x=k\\pi,k\\in \\mathbb{Z}",
        "D.  x=2k\\pi,k\\in \\mathbb{Z}"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 30,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  \\cos\\left ( { 2x+30^\\circ } \\right )+sinx=0  có nghiệm là",
      "explanation": "\\cos\\left ( { 2x+30^\\circ } \\right )+sinx=0\\Leftrightarrow \\cos\\left ( { 2x+30^\\circ } \\right )=-sinx\\Leftrightarrow \\cos\\left ( { 2x+30^\\circ } \\right )=\\sin\\left ( { -x } \\right ) \n \\Leftrightarrow \\cos\\left ( { 2x+30^\\circ } \\right )=\\cos\\left ( { x+90^\\circ } \\right )\\Leftrightarrow \\left[ x=60^\\circ+k360^\\circ \\\\ x=-40^\\circ+k120^\\circ\\,\\,\\, \\right.\\left ( { k\\in \\mathbb{Z} } \\right )",
      "diagram": null,
      "options": [
        "A.  \\left[ x=60^\\circ+k180^\\circ \\\\ x=40^\\circ+k120^\\circ \\right.\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  \\left[ x=60^\\circ+k360^\\circ \\\\ x=-40^\\circ+k120 \\right.\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  \\left[ x=30^\\circ+k360^\\circ \\\\ x=15^\\circ+k180^\\circ \\right.\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  \\left[ x=\\frac { \\pi } { 3 }+\\frac { k2\\pi } { 3 } \\\\ x=k2\\pi \\right.\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 31,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho hàm số  y=sinx  có đồ thị như hình vẽ. Hãy tìm tập tất cả các giá trị của  m  để phương trình  \\left | { sinx } \\right |=m  có nghiệm?",
      "explanation": "Đồ thị hàm số  y=\\left | { sinx } \\right |  được suy ra từ đồ thị  y=sinx  bằng:\n+ Giữ nguyên phần đồ thị bên trên trục  Ox  .\n+ Lấy đối xứng phần bên dưới qua trục  Ox  .\nTa được đồ thị như hình vẽ.\nDựa vào đồ thị ta thấy phương trình  \\left | { sinx } \\right |=m  có nghiệm khi  0\\le m\\le 1  .",
      "diagram": "assets/diagrams/b5_q31.png",
      "options": [
        "A.  -1\\le m\\le 1",
        "B.  -1\\le m\\le 0",
        "C.  -1 < m < 0",
        "D.  0\\le m\\le 1"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 32,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tìm tất cả các nghiệm của phương trình  sinx.\\sin\\frac { \\pi } { 3 }+cos2x.\\sin\\frac { \\pi } { 4 }=cosx.\\cos\\frac { \\pi } { 3 }+sin2x.\\cos\\frac { \\pi } { 4 }  .",
      "explanation": "⬥ Phương trình:  sinx.\\sin\\frac { \\pi } { 3 }+cos2x.\\sin\\frac { \\pi } { 4 }=cosx.\\cos\\frac { \\pi } { 3 }+sin2x.\\cos\\frac { \\pi } { 4 } \n \\Leftrightarrow cos2x.\\sin\\frac { \\pi } { 4 }-sin2x.\\cos\\frac { \\pi } { 4 }=cosx.\\cos\\frac { \\pi } { 3 }-sinx.\\sin\\frac { \\pi } { 3 } \n \\Leftrightarrow \\sin\\left ( { \\frac { \\pi } { 4 }-2x } \\right )=\\cos\\left ( { x+\\frac { \\pi } { 3 } } \\right ) \n \\Leftrightarrow \\cos\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )=\\cos\\left ( { x+\\frac { \\pi } { 3 } } \\right ) \n \\Leftrightarrow \\left[ 2x+\\frac { \\pi } { 4 }=x+\\frac { \\pi } { 3 }+k2\\pi \\\\ 2x+\\frac { \\pi } { 4 }=-x-\\frac { \\pi } { 3 }+k2\\pi \\right.\\Leftrightarrow \\left[ x=\\frac { \\pi } { 12 }+k2\\pi \\\\ 3x=-\\frac { 7\\pi } { 12 }+k2\\pi \\right.  \\Leftrightarrow \\left[ x=\\frac { \\pi } { 12 }+k2\\pi \\\\ x=-\\frac { 7\\pi } { 36 }+k\\frac { 2\\pi } { 3 } \\right.{ }{ }\\left ( { k\\in \\mathbb{Z} } \\right ) \nVậy phương trình có nghiệm là  x=\\frac { \\pi } { 12 }+k2\\pi  ,  x=-\\frac { 7\\pi } { 36 }+k\\frac { 2\\pi } { 3 }  \\left ( { k\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  \\left[ x=\\frac { \\pi } { 12 }+k2\\pi \\\\ x=-\\frac { 7\\pi } { 36 }+k\\frac { 2\\pi } { 3 } \\right.\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  \\left[ x=-\\frac { 7\\pi } { 12 }+k2\\pi \\\\ x=\\frac { \\pi } { 36 }+k\\frac { 2\\pi } { 3 } \\right.\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  \\left[ x=\\frac { 5\\pi } { 12 }+k2\\pi \\\\ x=-\\frac { \\pi } { 6 }+k\\frac { 2\\pi } { 3 } \\right.\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  \\left[ x=\\frac { 7\\pi } { 12 }+k\\pi \\\\ x=-\\frac { \\pi } { 36 }+k2\\pi \\right.\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 33,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  sin5x-sinx=0  có bao nhiêu nghiệm thuộc đoạn  \\left[ -2018\\pi;\\,2018\\pi \\right]  ?",
      "explanation": "Ta có  sin5x-sinx=0  \\Leftrightarrow sin5x=sinx  \\Leftrightarrow \\left[ x=\\frac { k{ \\pi } } { 2 } \\\\ x=\\frac { { \\pi } } { 6 }+\\frac { k{ \\pi } } { 3 } \\right.  , (  k  \\in \\mathbb{Z}  ).\nVì  x\\in \\left[ -2018{ \\pi };\\,2018{ \\pi } \\right]  nên\n+ Với  x=\\frac { k{ \\pi } } { 2 }  ta có  -2018{ \\pi }\\le \\frac { k{ \\pi } } { 2 }\\le 2018{ \\pi }  \\Leftrightarrow -4036\\le k\\le 4036  . Suy ra có  8073  nghiệm.\n+ Với  x=\\frac { { \\pi } } { 6 }+\\frac { k{ \\pi } } { 3 }  ta có  -2018{ \\pi }\\le \\frac { { \\pi } } { 6 }+\\frac { k{ \\pi } } { 3 }\\le 2018{ \\pi }  \\Leftrightarrow -\\frac { 12109 } { 2 }\\le k\\le \\frac { 12107 } { 2 }  . Suy ra có  12108  nghiệm.\nVậy có  8073+12108=20181  nghiệm thuộc đoạn  \\left[ -2018\\pi;\\,2018\\pi \\right]  .",
      "diagram": null,
      "options": [
        "A.  20179",
        "B.  20181",
        "C.  16144",
        "D.  16145"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 34,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Nghiệm của phương trình  sin8x-cos6x=\\sqrt[] { 3 }\\left ( { sin6x+cos8x } \\right )  là",
      "explanation": "Ta có  sin8x-cos6x=\\sqrt[] { 3 }\\left ( { sin6x+cos8x } \\right )\\Leftrightarrow sin8x-\\sqrt[] { 3 }cos8x=\\sqrt[] { 3 }sin6x+cos6x \n \\Leftrightarrow \\sin\\left ( { 8x-\\frac { \\pi } { 3 } } \\right )=\\sin\\left ( { 6x+\\frac { \\pi } { 6 } } \\right )\\Leftrightarrow \\left[ 8x-\\frac { \\pi } { 3 }=6x+\\frac { \\pi } { 6 }+k2\\pi \\\\ 8x-\\frac { \\pi } { 3 }=\\frac { 5\\pi } { 6 }-6x+k2\\pi \\right.\\Leftrightarrow \\left[ x=\\frac { \\pi } { 4 }+k\\pi \\\\ x=\\frac { \\pi } { 12 }+\\frac { k\\pi } { 7 } \\right.\\,\\,(k\\in \\mathbb{Z})  .",
      "diagram": null,
      "options": [
        "A.  \\left[ x=\\frac { \\pi } { 4 }+k\\pi \\\\ x=\\frac { \\pi } { 12 }+k\\frac { \\pi } { 7 } \\right.\\,\\,(k\\in \\mathbb{Z})",
        "B.  \\left[ x=\\frac { \\pi } { 3 }+k\\pi \\\\ x=\\frac { \\pi } { 6 }+k\\frac { \\pi } { 2 } \\right.\\,\\,(k\\in \\mathbb{Z})",
        "C.  \\left[ x=\\frac { \\pi } { 5 }+k\\pi \\\\ x=\\frac { \\pi } { 7 }+k\\frac { \\pi } { 2 } \\right.\\,\\,(k\\in \\mathbb{Z})",
        "D.  \\left[ x=\\frac { \\pi } { 8 }+k\\pi \\\\ x=\\frac { \\pi } { 9 }+k\\frac { \\pi } { 3 } \\right.\\,\\,(k\\in \\mathbb{Z})"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 35,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Số giờ có ánh sáng mặt trời của một thành phố A ở vĩ độ  40 ^ { { o } }  bắc trong ngày thứ t của một năm không nhuận được cho bởi hàm số  d\\left ( { t } \\right )=3sin\\left[ \\frac { \\pi } { 180 }\\left ( { t-80 } \\right ) \\right]+12  với  t\\in \\mathbb{Z}  và  0 < t\\le 365  . Vào ngày nào trong năm thì thành phố A có nhiều giờ có ánh sáng mặt trời nhất?",
      "explanation": "Ta có  d\\left ( { t } \\right )=3sin\\left[ \\frac { \\pi } { 180 }\\left ( { t-80 } \\right ) \\right]+12\\le 3.1+12=15  .\nVậy thành phố A có nhiều giờ có ánh sáng mặt trời nhất khi  \\sin\\left[ \\frac { \\pi } { 180 }\\left ( { t-80 } \\right ) \\right]=1\\Leftrightarrow \\frac { \\pi } { 180 }\\left ( { t-80 } \\right )=\\frac { \\pi } { 2 }+k2\\pi\\Leftrightarrow t=170+360k\\,(k\\in \\mathbb{Z})  .\nVì  0 < t\\le 365  nên  0 < 170+360k\\le 365\\Leftrightarrow -\\frac { 17 } { 36 } < k\\le \\frac { 39 } { 72 }\\Rightarrow k=0\\Rightarrow t=170  .\nVậy vào ngày thứ 170 trong năm thì thành phố A có nhiều giờ có ánh sáng mặt trời nhất.",
      "diagram": null,
      "options": [
        "A. 170",
        "B. 171",
        "C. 172",
        "D. 173"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 36,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một chiếc guồng nước có dạng hình tròn bán kính 2,5m; trục của nó đặt cách mặt nước 2m (hình vẽ). Khi guồng quay đều, khoảng cách h (mét) từ một chiếc gầu gắn tại điểm A của guồng đến mặt nước được tính theo công thức  h=\\left | { y } \\right |  trong đó  y=2+2,5sin\\left[ 2\\pi\\left ( { x-\\frac { 1 } { 4 } } \\right ) \\right]  với x là thời gian quay của guồng  (x\\ge 0)  , tính bằng phút (quy ước  y>0  khi gầu ở bên trên mặt nước và  y < 0  khi gầu ở dưới nước). Chiếc gầu cách mặt nước 2m lần đầu tiên khi nào?",
      "explanation": "Ta có  h=2\\Leftrightarrow \\left | { y } \\right |=2\\Leftrightarrow y=\\pm 2  . Thấy khi gầu dưới mặt nước thì khoảng cách từ gầu đến mặt nước lớn nhất là 0,5m.\n \\Rightarrow y=2\\Leftrightarrow 2+2,5sin\\left[ 2\\pi\\left ( { x-\\frac { 1 } { 4 } } \\right ) \\right]=2\\Leftrightarrow \\sin\\left[ 2\\pi\\left ( { x-\\frac { 1 } { 4 } } \\right ) \\right]=0\\Leftrightarrow 2\\pi\\left ( { x-\\frac { 1 } { 4 } } \\right )=k\\pi\\Leftrightarrow x=\\frac { 1 } { 4 }+\\frac { k } { 2 } \nMà  x\\ge 0\\Rightarrow \\frac { 1 } { 4 }+\\frac { k } { 2 }\\ge 0\\Leftrightarrow k\\ge -\\frac { 1 } { 2 }  . Do  k\\in \\mathbb{Z}\\Rightarrow k\\in \\left \\{ \\begin{array}{l} 0,1,2,... \\end{array} \\right \\}  . Vậy thời điểm gầu cách mặt nước 2m lần đầu tiên đạt được khi  k=0\\Rightarrow  x=\\frac { 1 } { 4 }  phút.",
      "diagram": "assets/diagrams/b5_q36.png",
      "options": [
        "A.  4  phút",
        "B.  \\frac { 1 } { 4 }  phút",
        "C.  2  phút",
        "D.  \\frac { 1 } { 2 }  phút"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 37,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Guồng nước (hay còn gọi là con nước) không chỉ là công cụ phục vụ sản xuất nông nghiệp, mà đã trở thành hình ảnh quen thuộc của bản làng và là một nét văn hóa đặc trưng của đồng bào dân tộc miền núi phía Bắc. Một chiếc guồng nước có dạng hình tròn bán kính  3,5 m  ; trục của nó đặt cách mặt nước  3 m  . Khi guồng quay đều, khoảng cách  h\\,\\left ( { m } \\right )  từ một ống đựng nước gắn tại một điểm của guồng đến mặt nước được tính theo công thức  h=\\left | { y } \\right |  , trong đó  y=3,5sin\\left ( { 2\\pix-\\frac { \\pi } { 2 } } \\right )+3  , với  x  (phút) là thời gian quay của guồng  (x\\ge 0)  . Hãy chỉ ra giá trị của  x  nhỏ nhất để ống đựng nước cách mặt nước  3m  .",
      "explanation": "Để ống đựng nước cách mặt nước  3m  , ta có phương trình:\n \\left | { 3,5sin\\left ( { 2\\pix-\\frac { \\pi } { 2 } } \\right )+3 } \\right |=3\\Leftrightarrow \\left[ 3,5sin\\left ( { 2\\pix-\\frac { \\pi } { 2 } } \\right )+3=3 \\\\ 3,5sin\\left ( { 2\\pix-\\frac { \\pi } { 2 } } \\right )+3=-3 \\right.\\Leftrightarrow \\left[ \\sin\\left ( { 2\\pix-\\frac { \\pi } { 2 } } \\right )=0 \\\\ 3,5sin\\left ( { 2\\pix-\\frac { \\pi } { 2 } } \\right )=-\\frac { 6 } { 3,5 } < -1\\,\\,(VN) \\right. \\\\ \\Leftrightarrow 2\\pix-\\frac { \\pi } { 2 }=k\\pi\\Leftrightarrow x=\\frac { 2k+1 } { 4 };k\\in \\mathbb{Z} \nVì  x\\ge 0  nên một số giá trị của  x  là:  \\frac { 1 } { 4 };\\frac { 3 } { 4 };\\frac { 5 } { 4 };\\frac { 7 } { 4 };... \nVậy giá trị nhỏ nhất của  x  theo yêu cầu bài toán là  \\frac { 1 } { 4 } \nB.Câu hỏi – Trả lời Đúng/sai",
      "diagram": null,
      "options": [
        "A.  \\frac { 1 } { 4 }",
        "B.  \\frac { 5 } { 4 }",
        "C.  \\frac { 1 } { 8 }",
        "D.  \\frac { 7 } { 8 }"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 38,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình  sinx=a  (1).",
      "explanation": "(a) Nếu  a>1  thì phương trình (1) vô nghiệm.\n» Chọn ĐÚNG.\n(b) Nếu  a=1  thì phương trình (1) có nghiệm  \\alpha=\\frac { \\pi } { 2 }+k\\pi,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  .\nNếu  a=1  \\Rightarrow \\sin\\alpha=1\\Leftrightarrow \\alpha=\\frac { \\pi } { 2 }+k2\\pi,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  .\n» Chọn SAI.\n(c) Nếu  -1\\le a\\le 1  thì phương trình (1) có nghiệm  \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\left ( { k\\in \\mathbb{Z} } \\right ) \\right.  với  a=\\sin\\alpha  .\n» Chọn ĐÚNG.\n(d) Phương trình (1) có hai điểm biểu diễn nghiệm trên đường tròn lượng giác.\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Nếu  a>1  thì phương trình (1) vô nghiệm.",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Nếu  a=1  thì phương trình (1) có nghiệm  \\alpha=\\frac { \\pi } { 2 }+k\\pi,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  .",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Nếu  -1\\le a\\le 1  thì phương trình (1) có nghiệm  \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\left ( { k\\in \\mathbb{Z} } \\right ) \\right.  với  a=\\sin\\alpha  .",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Phương trình (1) có hai điểm biểu diễn nghiệm trên đường tròn lượng giác.",
          "correct": false
        }
      ]
    },
    {
      "id": 39,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình lượng giác  2sinx-\\sqrt[] { 2 }=0  . Khi đó:",
      "explanation": "(a) Phương trình tương đương với phương trình  sinx=\\sin\\frac { \\pi } { 4 }  .\n 2sinx-\\sqrt[] { 2 }=0  \\Leftrightarrow sinx=\\frac { \\sqrt[] { 2 } } { 2 }  \\Leftrightarrow sinx=\\sin\\frac { \\pi } { 4 }  .\n» Chọn ĐÚNG.\n(b) Phương trình có nghiệm là  x=\\frac { \\pi } { 4 }+k2\\pi;x=\\frac { 3\\pi } { 4 }+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )  .\n 2sinx-\\sqrt[] { 2 }=0  \\Leftrightarrow sinx=\\sin\\frac { \\pi } { 4 }\\Leftrightarrow \\left[ x=\\frac { \\pi } { 4 }+k2\\pi \\\\ x=\\frac { 3\\pi } { 4 }+k2\\pi \\right.\\left ( { k\\in \\mathbb{Z} } \\right ) \n» Chọn ĐÚNG.\n(c) Phương trình có nghiệm âm lớn nhất là  \\frac { \\pi } { 4 }  .\nDo  x  là nghiệm âm lớn nhất nên\nTrường hợp 1:  x=\\frac { \\pi } { 4 }+k2\\pi < 0\\Leftrightarrow k < \\frac { -1 } { 8 }\\Rightarrow k=-1\\Rightarrow x=\\frac { -7\\pi } { 4 }  .\nTrường hợp 2:  x=\\frac { 3\\pi } { 4 }+k2\\pi < 0\\Leftrightarrow k < \\frac { -3 } { 8 }\\Rightarrow k=-1\\Rightarrow x=\\frac { -5\\pi } { 4 } \nTrong hai nghiệm  \\frac { -7\\pi } { 4 }  và  \\frac { -5\\pi } { 4 }  thì nghiệm âm lớn nhất là  \\frac { -5\\pi } { 4 }  .\nPhương trình có nghiệm âm lớn nhất là  -\\frac { 5\\pi } { 4 }  .\n» Chọn SAI.\n(d) Số nghiệm của phương trình trong khoảng  \\left ( { -\\frac { \\pi } { 2 };\\frac { \\pi } { 2 } } \\right )  là hai nghiệm.\n x\\in \\left ( { -\\frac { \\pi } { 2 };\\frac { \\pi } { 2 } } \\right ) \n+)  x=\\frac { \\pi } { 4 }+k2\\pi  : Ta có  \\frac { -\\pi } { 2 } < \\frac { \\pi } { 4 }+k2\\pi < \\frac { \\pi } { 2 }\\Leftrightarrow \\frac { -3 } { 8 } < k < \\frac { 1 } { 8 }  .\nMà  k\\in \\mathbb{Z}  nên  k=0  :  x=\\frac { \\pi } { 4 } \n+)  x=\\frac { 3\\pi } { 4 }+k2\\pi  : Ta có  \\frac { -\\pi } { 2 } < \\frac { 3\\pi } { 4 }+k2\\pi < \\frac { \\pi } { 2 }\\Leftrightarrow \\frac { -5 } { 8 } < k < \\frac { -1 } { 8 }  .\nMà  k\\in \\mathbb{Z}  nên không có giá trị nào của  k  thỏa mãn.\nVậy số nghiệm của phương trình trong khoảng  \\left ( { -\\frac { \\pi } { 2 };\\frac { \\pi } { 2 } } \\right )  là một nghiệm.\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Phương trình tương đương với phương trình  sinx=\\sin\\frac { \\pi } { 4 }  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Phương trình có nghiệm là  x=\\frac { \\pi } { 4 }+k2\\pi;x=\\frac { 3\\pi } { 4 }+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )  .",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Phương trình có nghiệm âm lớn nhất là  \\frac { \\pi } { 4 }  .",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Số nghiệm của phương trình trong khoảng  \\left ( { -\\frac { \\pi } { 2 };\\frac { \\pi } { 2 } } \\right )  là hai nghiệm.",
          "correct": false
        }
      ]
    },
    {
      "id": 40,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình lượng giác  sin2x=-\\frac { 1 } { 2 }\\,\\,\\,\\left ( { * } \\right )  . Khi đó:",
      "explanation": "(a) Phương trình  \\left ( { * } \\right )  tương đương  sin2x=\\sin\\frac { \\pi } { 6 } \n sin2x=-\\frac { 1 } { 2 }\\Leftrightarrow sin2x=\\sin\\frac { -\\pi } { 6 }  \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z})\\Rightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z}) \\right. \\right. \n» Chọn SAI.\n(b) Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có 3 nghiệm\n 0 < x < \\pi\\Rightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z})\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right. \\right.  .\n» Chọn SAI.\n(c) Tổng các nghiệm của phương trình trong khoảng  \\left ( { 0;\\pi } \\right )  bằng  \\frac { 3\\pi } { 2 } \nVới  x=\\frac { 11\\pi } { 12 };x=\\frac { 7\\pi } { 12 }\\Rightarrow \\frac { 11\\pi } { 12 }+\\frac { 7\\pi } { 12 }=\\frac { 18\\pi } { 12 }=\\frac { 3\\pi } { 2 } \n» Chọn ĐÚNG.\n(d) Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có nghiệm lớn nhất bằng  \\frac { 11\\pi } { 12 } \nVới  x=\\frac { 11\\pi } { 12 };x=\\frac { 7\\pi } { 12 }\\Rightarrow  nghiệm  x=\\frac { 11\\pi } { 12 }  là nghiệm lớn nhất trong khoảng  \\left ( { 0;\\pi } \\right ) \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Phương trình  \\left ( { * } \\right )  tương đương  sin2x=\\sin\\frac { \\pi } { 6 }",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có 3 nghiệm",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Tổng các nghiệm của phương trình trong khoảng  \\left ( { 0;\\pi } \\right )  bằng  \\frac { 3\\pi } { 2 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có nghiệm lớn nhất bằng  \\frac { 11\\pi } { 12 }",
          "correct": true
        }
      ]
    },
    {
      "id": 41,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình lượng giác  2cosx=\\sqrt[] { 3 }  , khi đó:",
      "explanation": "(a) Phương trình có nghiệm  x=\\pm \\frac { \\pi } { 3 }+k2\\pi(k\\in \\mathbb{Z}) \nTa có:  2cosx=\\sqrt[] { 3 }\\Leftrightarrow cosx=\\frac { \\sqrt[] { 3 } } { 2 }\\Leftrightarrow x=\\pm \\frac { \\pi } { 6 }+k2\\pi(k\\in \\mathbb{Z})  .\n» Chọn SAI.\n(b) Trong đoạn  \\left[ 0;\\frac { 5\\pi } { 2 } \\right]  phương trình có 4 nghiệm\nVì  x\\in \\left[ 0;\\frac { 5\\pi } { 2 } \\right]  nên  x\\in \\left \\{ \\begin{array}{l} \\frac { \\pi } { 6 };\\frac { 11\\pi } { 6 };\\frac { 13\\pi } { 6 } \\end{array} \\right \\}  .\n» Chọn SAI.\n(c) Tổng các nghiệm của phương trình trong đoạn  \\left[ 0;\\frac { 5\\pi } { 2 } \\right]  bằng  \\frac { 25\\pi } { 6 } \nVới  x\\in \\left \\{ \\begin{array}{l} \\frac { \\pi } { 6 };\\frac { 11\\pi } { 6 };\\frac { 13\\pi } { 6 } \\end{array} \\right \\}\\Rightarrow \\frac { \\pi } { 6 }+\\frac { 11\\pi } { 6 }+\\frac { 13\\pi } { 6 }=\\frac { 25\\pi } { 6 }  .\n» Chọn ĐÚNG.\n(d) Trong đoạn  \\left[ 0;\\frac { 5\\pi } { 2 } \\right]  phương trình có nghiệm lớn nhất bằng  \\frac { 13\\pi } { 6 } \nVới  x\\in \\left \\{ \\begin{array}{l} \\frac { \\pi } { 6 };\\frac { 11\\pi } { 6 };\\frac { 13\\pi } { 6 } \\end{array} \\right \\}\\Rightarrow  nghiệm lớn nhất là  x=\\frac { 13\\pi } { 6 } \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Phương trình có nghiệm  x=\\pm \\frac { \\pi } { 3 }+k2\\pi(k\\in \\mathbb{Z})",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Trong đoạn  \\left[ 0;\\frac { 5\\pi } { 2 } \\right]  phương trình có 4 nghiệm",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Tổng các nghiệm của phương trình trong đoạn  \\left[ 0;\\frac { 5\\pi } { 2 } \\right]  bằng  \\frac { 25\\pi } { 6 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Trong đoạn  \\left[ 0;\\frac { 5\\pi } { 2 } \\right]  phương trình có nghiệm lớn nhất bằng  \\frac { 13\\pi } { 6 }",
          "correct": true
        }
      ]
    },
    {
      "id": 42,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình  \\sin\\left ( { 2x-\\frac { \\pi } { 4 } } \\right )=\\sin\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )\\,\\,\\,\\left ( { * } \\right )  , vậy:",
      "explanation": "(a) Phương trình có nghiệm  \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z}){ . } \\right. \n» Chọn ĐÚNG.\nTa có:  \\sin\\left ( { 2x-\\frac { \\pi } { 4 } } \\right )=\\sin\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.  \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z}){ . } \\right. \n(b) Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có 2 nghiệm\n» Chọn ĐÚNG.\nVì  0 < x < \\pi\\Leftrightarrow 0 < \\pi+k2\\pi < \\pi\\Leftrightarrow -\\pi < k2\\pi < 0\\Leftrightarrow \\frac { -1 } { 2 } < k < 0 \nVì  0 < x < \\pi\\Leftrightarrow 0 < \\frac { \\pi } { 6 }+k\\frac { 2\\pi } { 3 } < \\pi\\Leftrightarrow -\\frac { \\pi } { 6 } < k\\frac { 2\\pi } { 3 } < \\frac { 5\\pi } { 6 }\\Leftrightarrow -\\frac { 1 } { 4 } < k < \\frac { 5 } { 4 } \nDo  k\\in \\mathbb{Z}  nên  k\\in \\left \\{ \\begin{array}{l} 0;1 \\end{array} \\right \\}  \\Rightarrow x\\in \\left \\{ \\begin{array}{l} \\frac { \\pi } { 6 };\\frac { 5\\pi } { 6 } \\end{array} \\right \\} \n(c) Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có 2 nghiệm âm.\nTrong khoảng  \\left ( { 0;\\pi } \\right )  phương trình không tồn tại nghiệm âm.\n» Chọn SAI.\n(d) Tổng các nghiệm của phương trình trong khoảng  \\left ( { 0;\\pi } \\right )  bằng  \\frac { 7\\pi } { 6 } \nVới  x\\in \\left \\{ \\begin{array}{l} \\frac { \\pi } { 6 };\\frac { 5\\pi } { 6 } \\end{array} \\right \\}\\Rightarrow \\frac { \\pi } { 6 }+\\frac { 5\\pi } { 6 }=\\pi \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Phương trình có nghiệm  \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z}){ . } \\right.",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có 2 nghiệm",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có 2 nghiệm âm",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Tổng các nghiệm của phương trình trong khoảng  \\left ( { 0;\\pi } \\right )  bằng  \\frac { 7\\pi } { 6 }",
          "correct": false
        }
      ]
    },
    {
      "id": 43,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình lượng giác  3-\\sqrt[] { 3 }\\tan\\left ( { 2x-\\frac { \\pi } { 3 } } \\right )=0  , khi đó:",
      "explanation": "(a) Phương trình có nghiệm  x=\\frac { \\pi } { 6 }+\\frac { k\\pi } { 2 },k\\in \\mathbb{Z}  .\nPhương trình tương đương với:  \\tan\\left ( { 2x-\\frac { \\pi } { 3 } } \\right )=\\sqrt[] { 3 }\\Leftrightarrow x=\\frac { \\pi } { 3 }+\\frac { k\\pi } { 2 },k\\in \\mathbb{Z}  .\n» Chọn SAI.\n(b) Khi  \\frac { -\\pi } { 4 } < x < \\frac { 2\\pi } { 3 }  thì phương trình có ba nghiệm\nVì  \\frac { -\\pi } { 4 } < x < \\frac { 2\\pi } { 3 }\\Leftrightarrow \\frac { -\\pi } { 4 } < \\frac { \\pi } { 3 }+\\frac { k\\pi } { 2 } < \\frac { 2\\pi } { 3 }\\Leftrightarrow \\frac { -7\\pi } { 12 } < \\frac { k\\pi } { 2 } < \\frac { \\pi } { 3 }\\Leftrightarrow \\frac { -7 } { 6 } < k < \\frac { 2 } { 3 } \nDo  k\\in \\mathbb{Z}  nên  k\\in \\left \\{ \\begin{array}{l} -1;0 \\end{array} \\right \\}  .\n» Chọn SAI.\n(c) Phương trình có nghiệm âm lớn nhất bằng  -\\frac { \\pi } { 3 } \nVới  k=-1  thì  x=\\frac { -\\pi } { 6 }  , với  k=0  thì  x=\\frac { \\pi } { 3 }  .\n» Chọn SAI.\n(d) Tổng các nghiệm của phương trình trong khoảng  \\left ( { \\frac { -\\pi } { 4 };\\frac { 2\\pi } { 3 } } \\right )  bằng  \\frac { \\pi } { 6 } \nVậy  \\frac { -\\pi } { 6 }+\\frac { \\pi } { 3 }=\\frac { \\pi } { 6 }  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Phương trình có nghiệm  x=\\frac { \\pi } { 6 }+\\frac { k\\pi } { 2 },k\\in \\mathbb{Z}  .",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Khi  \\frac { -\\pi } { 4 } < x < \\frac { 2\\pi } { 3 }  thì phương trình có ba nghiệm",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Phương trình có nghiệm âm lớn nhất bằng  -\\frac { \\pi } { 3 }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Tổng các nghiệm của phương trình trong khoảng  \\left ( { \\frac { -\\pi } { 4 };\\frac { 2\\pi } { 3 } } \\right )  bằng  \\frac { \\pi } { 6 }",
          "correct": true
        }
      ]
    },
    {
      "id": 44,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hai đồ thị hàm số  y=\\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )  và  y=sinx  , khi đó:",
      "explanation": "(a) Phương trình hoành độ giao điểm của hai đồ thị hàm số:  \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=sinx \nPhương trình hoành độ giao điểm của hai đồ thị hàm số:\n» Chọn ĐÚNG.\n(b) Hoành độ giao điểm của hai đồ thị là  x=\\frac { 3\\pi } { 8 }+k\\pi(k\\in \\mathbb{Z}) \n \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=sinx\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z})\\Leftrightarrow x=\\frac { 3\\pi } { 8 }+k\\pi(k\\in \\mathbb{Z}). \\right. \n» Chọn ĐÚNG.\n(c) Khi  x\\in \\left[ 0;2\\pi \\right]  thì hai đồ thị hàm số cắt nhau tại ba điểm\nVì  x\\in \\left[ 0;2\\pi \\right]\\Rightarrow x\\in \\left \\{ \\begin{array}{l} \\frac { 3\\pi } { 8 };\\frac { 11\\pi } { 8 } \\end{array} \\right \\}  .\n» Chọn SAI.\n(d) Khi  x\\in \\left[ 0;2\\pi \\right]  thì toạ độ giao điểm của hai đồ thị hàm số là:  \\left ( { \\frac { 5\\pi } { 8 };\\sin\\frac { 5\\pi } { 8 } } \\right ),\\left ( { \\frac { 7\\pi } { 8 };\\sin\\frac { 7\\pi } { 8 } } \\right )  .\nVới  x=\\frac { 3\\pi } { 8 }\\Rightarrow y=\\sin\\frac { 3\\pi } { 8 }\\approx 0,92  với  x=\\frac { 11\\pi } { 8 }\\Rightarrow y=\\sin\\frac { 11\\pi } { 8 }\\approx -0,92  .\nVậy toạ độ giao điểm của hai đồ thị hàm số là:  \\left ( { \\frac { 3\\pi } { 8 };\\sin\\frac { 3\\pi } { 8 } } \\right ),\\left ( { \\frac { 11\\pi } { 8 };\\sin\\frac { 11\\pi } { 8 } } \\right )  .\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Phương trình hoành độ giao điểm của hai đồ thị hàm số:  \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=sinx",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Hoành độ giao điểm của hai đồ thị là  x=\\frac { 3\\pi } { 8 }+k\\pi(k\\in \\mathbb{Z})",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Khi  x\\in \\left[ 0;2\\pi \\right]  thì hai đồ thị hàm số cắt nhau tại ba điểm",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Khi  x\\in \\left[ 0;2\\pi \\right]  thì toạ độ giao điểm của hai đồ thị hàm số là:  \\left ( { \\frac { 5\\pi } { 8 };\\sin\\frac { 5\\pi } { 8 } } \\right ),\\left ( { \\frac { 7\\pi } { 8 };\\sin\\frac { 7\\pi } { 8 } } \\right )  .",
          "correct": false
        }
      ]
    },
    {
      "id": 45,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình lượng giác  2sin\\left ( { x-\\frac { \\pi } { 12 } } \\right )+\\sqrt[] { 3 }=0  .",
      "explanation": "(a) Phương trình tương đương  \\sin\\left ( { x-\\frac { \\pi } { 12 } } \\right )=\\sin\\left ( { \\frac { \\pi } { 3 } } \\right )  .\nTa có  2sin\\left ( { x-\\frac { \\pi } { 12 } } \\right )+\\sqrt[] { 3 }=0\\Leftrightarrow \\sin\\left ( { x-\\frac { \\pi } { 12 } } \\right )=-\\frac { \\sqrt[] { 3 } } { 2 }\\Leftrightarrow \\sin\\left ( { x-\\frac { \\pi } { 12 } } \\right )=\\sin\\left ( { -\\frac { \\pi } { 3 } } \\right ) \n \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z})\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z}) \\right. \\right. \n» Chọn SAI.\n(b) Phương trình có nghiệm là:  x=\\frac { \\pi } { 4 }+k2\\pi;x=\\frac { 7\\pi } { 12 }+k2\\pi\\,\\,(k\\in \\mathbb{Z})  .\nVậy phương trình có nghiệm là:  x=-\\frac { \\pi } { 4 }+k2\\pi;x=\\frac { 17\\pi } { 12 }+k2\\pi(k\\in \\mathbb{Z})  .\n» Chọn SAI.\n(c) Phương trình có nghiệm âm lớn nhất bằng  -\\frac { \\pi } { 4 }  .\n+ Với  x=-\\frac { \\pi } { 4 }+k2\\pi  có nghiệm âm lớn nhất là  x=-\\frac { \\pi } { 4 } \n+ Với  x=\\frac { 17\\pi } { 12 }+k2\\pi  có nghiệm âm lớn nhất là  x=-\\frac { 7\\pi } { 12 } \nVậy phương trình có nghiệm âm lớn nhất bằng  -\\frac { \\pi } { 4 }  .\n» Chọn ĐÚNG.\n(d) Số nghiệm của phương trình trong khoảng  \\left ( { -\\pi;\\pi } \\right )  là hai nghiệm.\n+ Với  x=-\\frac { \\pi } { 4 }+k2\\pi  có  -\\pi < -\\frac { \\pi } { 4 }+k2\\pi < \\pi\\Leftrightarrow -\\frac { 3 } { 8 } < k < \\frac { 5 } { 8 }\\Rightarrow k=0\\Rightarrow x=-\\frac { \\pi } { 4 }  .\n+ Với  x=\\frac { 17\\pi } { 12 }+k2\\pi  có  -\\pi < \\frac { 17\\pi } { 12 }+k2\\pi < \\pi\\Leftrightarrow -\\frac { 29 } { 24 } < k < -\\frac { 5 } { 24 }\\Rightarrow k=-1\\Rightarrow x=-\\frac { 7\\pi } { 12 }  .\nSố nghiệm của phương trình trong khoảng  \\left ( { -\\pi;\\pi } \\right )  là hai nghiệm.\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Phương trình tương đương  \\sin\\left ( { x-\\frac { \\pi } { 12 } } \\right )=\\sin\\left ( { \\frac { \\pi } { 3 } } \\right )  .",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Phương trình có nghiệm là:  x=\\frac { \\pi } { 4 }+k2\\pi;x=\\frac { 7\\pi } { 12 }+k2\\pi\\,\\,(k\\in \\mathbb{Z})  .",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Phương trình có nghiệm âm lớn nhất bằng  -\\frac { \\pi } { 4 }  .",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Số nghiệm của phương trình trong khoảng  \\left ( { -\\pi;\\pi } \\right )  là hai nghiệm.",
          "correct": true
        }
      ]
    },
    {
      "id": 46,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình  \\left ( { 2cos\\,x-1 } \\right )\\left ( { \\sin\\,2x-m } \\right )=0 \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array}  .",
      "explanation": "Ta có  \\left ( { 2cos\\,x-1 } \\right )\\left ( { \\sin\\,2x-m } \\right )=0  \\Leftrightarrow \\left[ \\cos\\,x=\\frac { 1 } { 2 } \\\\ \\sin\\,2x=m \\right. \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\Leftrightarrow \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=-\\frac { \\pi } { 3 }+k2\\pi \\\\ \\sin\\,2x=m \\right. \n(a)  x=\\frac { 7\\pi } { 3 }  là một nghiệm của phương trình  \\left ( { 1 } \\right )  .\nThay  x=\\frac { 7\\pi } { 3 }  phương trình  \\left ( { 1 } \\right )  ta thấy thỏa mãn nên  x=\\frac { 7\\pi } { 3 }  là một nghiệm của phương trình  \\left ( { 1 } \\right )  .\n» Chọn ĐÚNG.\n(b) Khi  m=2  thì phương trình  \\left ( { 1 } \\right )\\Leftrightarrow \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=-\\frac { \\pi } { 3 }+k2\\pi \\\\ x=\\frac { \\pi } { 2 }+l2\\pi \\right. \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \nKhi  m=2  thì phương trình  \\left ( { 1 } \\right )\\Leftrightarrow \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=-\\frac { \\pi } { 3 }+k2\\pi \\right. \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \n» Chọn SAI.\n(c) Khi  m=1  thì tập nghiệm của phương trình  \\left ( { 1 } \\right )  có tất cả 4 điểm biểu diễn trên đường tròn lượng giác.\nKhi  m=1  phương trình  \\left ( { 1 } \\right )\\Leftrightarrow \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=-\\frac { \\pi } { 3 }+k2\\pi \\\\ \\sin\\,2x=1 \\right.\\Leftrightarrow \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=-\\frac { \\pi } { 3 }+k2\\pi \\\\ x=\\frac { \\pi } { 4 }+l\\pi \\right.  .\nDo đó tập nghiệm của phương trình  \\left ( { 1 } \\right )  có tất cả 4 điểm biểu diễn trên đường tròn lượng giác.\n» Chọn ĐÚNG.\n(d) Chỉ tìm được một giá trị của  m  để phương trình  \\left ( { 1 } \\right )  có đúng hai nghiệm thuộc  \\left ( { -\\frac { \\pi } { 4 };\\frac { 3\\pi } { 4 } } \\right ]  .\nDo phương trình  \\left ( { 2 } \\right )  có một nghiệm  x=\\frac { \\pi } { 3 }  thuộc  \\left ( { -\\frac { \\pi } { 4 };\\frac { 3\\pi } { 4 } } \\right ]  .\nDo đó để phương trình  \\left ( { 1 } \\right )  có đúng hai nghiệm thuộc  \\left ( { -\\frac { \\pi } { 4 };\\frac { 3\\pi } { 4 } } \\right ]  thì phương trình  \\sin\\,2x=m  có 1 nghiệm thuộc  \\left ( { -\\frac { \\pi } { 4 };\\frac { 3\\pi } { 4 } } \\right ]  khác  \\frac { \\pi } { 3 }  (*)\nTa có  x\\in \\left ( { -\\frac { \\pi } { 4 };\\frac { 3\\pi } { 4 } } \\right ]\\Rightarrow 2x\\in \\left ( { -\\frac { \\pi } { 2 };\\frac { 3\\pi } { 2 } } \\right ]  hay  2x\\in \\left[ 0;2\\pi \\right] \nTừ (*) suy ra  m=1  hoặc  m=-1 \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "x=\\frac { 7\\pi } { 3 }  là một nghiệm của phương trình  \\left ( { 1 } \\right )  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Khi  m=2  thì phương trình  \\left ( { 1 } \\right )\\Leftrightarrow \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=-\\frac { \\pi } { 3 }+k2\\pi \\\\ x=\\frac { \\pi } { 2 }+l2\\pi \\right. \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array}",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Khi  m=1  thì tập nghiệm của phương trình  \\left ( { 1 } \\right )  có tất cả 4 điểm biểu diễn trên đường tròn lượng giác.",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Chỉ tìm được một giá trị của  m  để phương trình  \\left ( { 1 } \\right )  có đúng hai nghiệm thuộc  \\left ( { -\\frac { \\pi } { 4 };\\frac { 3\\pi } { 4 } } \\right ]  .",
          "correct": false
        }
      ]
    },
    {
      "id": 47,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Hằng ngày, mực nước của con kênh lên xuống theo thủy triều. Độ sâu  h\\left ( { m } \\right )  của mực nước trong kênh tại thời điểm  t\\left ( { h } \\right )  (  0\\le t\\le 24  ) được cho bởi công thức  h=3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 3 } } \\right )+12  .",
      "explanation": "(a) Độ sâu của mực nước trong kênh nhỏ nhất bằng  9m  .\nĐộ sâu của mực nước trong kênh nhỏ nhất khi  \\cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 3 } } \\right )=-1\\Leftrightarrow \\frac { \\pit } { 6 }+\\frac { \\pi } { 3 }=\\left ( { 2k+1 } \\right )\\pi \nThử ta thấy tồn tại  t=4,...  thỏa mãn. Khi đó độ sâu là 9m.\n» Chọn ĐÚNG.\n(b) Độ sâu của mực nước trong kênh lớn nhất bằng  15m  .\nĐộ sâu của mực nước trong kênh nhỏ nhất khi\n \\cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 3 } } \\right )=1\\Leftrightarrow \\frac { \\pit } { 6 }+\\frac { \\pi } { 3 }=k2\\pi\\Leftrightarrow \\left[ t=10 \\\\ t=22 \\right. \nKhi đó độ sâu là 15m.\n» Chọn ĐÚNG.\n(c) Trong 1 ngày có đúng 3 thời điểm mà độ sâu của mực nước trong kênh đạt giá trị lớn nhất.\nĐộ sâu của mực nước trong kênh nhỏ nhất khi\n \\cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 3 } } \\right )=1\\Leftrightarrow \\frac { \\pit } { 6 }+\\frac { \\pi } { 3 }=k2\\pi\\Leftrightarrow \\left[ t=10 \\\\ t=22 \\right. \nVậy có hai thời điểm thỏa mãn độ sâu lớn nhất.\n» Chọn SAI.\n(d) Độ sâu của mực nước trong kênh tại thời điểm  12\\left ( { h } \\right )  bằng  13m. \nThay  t=12\\left ( { h } \\right )\\Rightarrow h=13,5m  .\n» Chọn SAI.\nC.Câu hỏi – Trả lời ngắn",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Độ sâu của mực nước trong kênh nhỏ nhất bằng  9m  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Độ sâu của mực nước trong kênh lớn nhất bằng  15m  .",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Trong 1 ngày có đúng 3 thời điểm mà độ sâu của mực nước trong kênh đạt giá trị lớn nhất.",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Độ sâu của mực nước trong kênh tại thời điểm  12\\left ( { h } \\right )  bằng  13m.",
          "correct": false
        }
      ]
    },
    {
      "id": 48,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Họ nghiệm phương trình lượng giác:  \\cos\\left ( { x+30 ^ { ^\\circ } } \\right )+1=0  có dạng  x=a ^ { ^\\circ } +k⋅b ^ { ^\\circ } \\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  , với  a;b  là các số nguyên. Tính giá trị  S=b-a",
      "explanation": "Ta có:  \\cos\\left ( { x+30 ^ { ^\\circ } } \\right )+1=0\\Leftrightarrow \\cos\\left ( { x+30 ^ { ^\\circ } } \\right )=-1 \n \\Leftrightarrow x+30 ^ { ^\\circ } =180 ^ { ^\\circ } +k360 ^ { ^\\circ } (k\\in \\mathbb{Z})\\Leftrightarrow x=150 ^ { ^\\circ } +k360 ^ { ^\\circ } (k\\in \\mathbb{Z}). \nVậy phương trình có nghiệm là:  x=150 ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow \\left \\{ \\begin{array}{l} a=150 \\\\ b=360 \\end{array} \\right.\\Rightarrow S=210  .",
      "diagram": null,
      "correctAnswer": "210"
    },
    {
      "id": 49,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Phương trình lượng giác:  \\tan\\left ( { 2x-\\frac { \\pi } { 6 } } \\right )=\\frac { \\sqrt[] { 3 } } { 3 }  có họ nghiệm dạng  x=\\frac { \\pi } { a }+k\\frac { \\pi } { b }\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  , với  a;b  là các số nguyên. Tính giá trị  T=a\\left ( { a+b } \\right )",
      "explanation": "Ta có:  \\tan\\left ( { 2x-\\frac { \\pi } { 6 } } \\right )=\\frac { \\sqrt[] { 3 } } { 3 }\\Leftrightarrow \\tan\\left ( { 2x-\\frac { \\pi } { 6 } } \\right )=\\tan\\frac { \\pi } { 6 } \n \\Leftrightarrow 2x-\\frac { \\pi } { 6 }=\\frac { \\pi } { 6 }+k\\pi\\Leftrightarrow x=\\frac { \\pi } { 6 }+k\\frac { \\pi } { 2 }\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow \\left \\{ \\begin{array}{l} a=6 \\\\ b=2 \\end{array} \\right.\\Rightarrow T=6\\left ( { 6+2 } \\right )=48",
      "diagram": null,
      "correctAnswer": "48"
    },
    {
      "id": 50,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Họ nghiệm phương trình lượng giác:  \\sqrt[] { 3 }\\tan\\frac { \\pix } { 2 }=3  có dạng  x=a ^ { ^\\circ } +k⋅b ^ { ^\\circ } \\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  , với  m;n  là các số nguyên và  \\frac { m } { n }  là phân số tối giản. Tính giá trị  P=m ^ { n }",
      "explanation": "Ta có:  \\sqrt[] { 3 }\\tan\\frac { \\pix } { 2 }=3\\Leftrightarrow \\tan\\frac { \\pix } { 2 }=\\sqrt[] { 3 }\\Leftrightarrow \\tan\\frac { \\pix } { 2 }=\\tan\\frac { \\pi } { 3 } \n \\Leftrightarrow \\frac { \\pix } { 2 }=\\frac { \\pi } { 3 }+k\\pi\\Leftrightarrow x=\\frac { 2 } { 3 }+2k\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow \\left \\{ \\begin{array}{l} m=2 \\\\ n=3 \\end{array} \\right.\\Rightarrow P=2 ^ { 3 } =8",
      "diagram": null,
      "correctAnswer": "8"
    },
    {
      "id": 51,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Phương trình  2sin\\left ( { x-\\frac { \\pi } { 6 } } \\right )+2=0  có bao nhiêu nghiệm trên khoảng  \\left ( { 0;2\\pi } \\right )",
      "explanation": "Ta có:  2sin\\left ( { x-\\frac { \\pi } { 6 } } \\right )+2=0  \\Leftrightarrow \\sin\\left ( { x-\\frac { \\pi } { 6 } } \\right )=-1  \\Leftrightarrow x=-\\frac { \\pi } { 3 }+k2\\pi,\\,\\,k\\in \\mathbb{Z} \nDo  x\\in \\left ( { 0;2\\pi } \\right )  nên  0 < -\\frac { \\pi } { 3 }+k2\\pi < 2\\pi  \\Leftrightarrow \\frac { 1 } { 6 } < k < \\frac { 7 } { 6 }  \\Leftrightarrow k=1  .\nVậy phương trình có một nghiệm  x=\\frac { 5\\pi } { 3 }  .",
      "diagram": null,
      "correctAnswer": "1"
    },
    {
      "id": 52,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho phương trình  \\cos\\left ( { 2x+\\frac { \\pi } { 3 } } \\right )=\\cos\\left ( { \\frac { \\pi } { 2 }-\\frac { x } { 2 } } \\right )  . Tìm số nghiệm thuộc khoảng  \\left ( { \\frac { \\pi } { 3 }\\,;\\,\\frac { 8\\pi } { 3 } } \\right )  của phương trình.",
      "explanation": "\\cos\\left ( { 2x+\\frac { \\pi } { 3 } } \\right )=\\cos\\left ( { \\frac { \\pi } { 2 }-\\frac { x } { 2 } } \\right )  \\Leftrightarrow \\left[ 2x+\\frac { \\pi } { 3 }=\\frac { \\pi } { 2 }-\\frac { x } { 2 }+k2\\pi \\\\ 2x+\\frac { \\pi } { 3 }=-\\left ( { \\frac { \\pi } { 2 }-\\frac { x } { 2 } } \\right )+k2\\pi \\right.,\\,k\\in \\mathbb{Z}\\Leftrightarrow \\left[ x=\\frac { \\pi } { 15 }+k\\frac { 4\\pi } { 5 } \\\\ x=-\\frac { 5\\pi } { 9 }+k\\frac { 4\\pi } { 3 } \\right.,{ }k\\in \\mathbb{Z}  .\n+ Với  x=\\frac { \\pi } { 15 }+k\\frac { 4\\pi } { 5 }  , ta có:  \\frac { \\pi } { 3 } < \\frac { \\pi } { 15 }+k\\frac { 4\\pi } { 5 } < \\frac { 8\\pi } { 3 }\\Leftrightarrow \\frac { 1 } { 3 } < k < \\frac { 13 } { 4 },{ }k\\in \\mathbb{Z}\\Leftrightarrow k\\in \\left \\{ \\begin{array}{l} 1;{ }2;{ }3 \\end{array} \\right \\}  .\nTrường hợp này có 3 nghiệm thỏa mãn là:  x=\\frac { 13\\pi } { 15 }  ,   x=\\frac { 5\\pi } { 3 }  ,  x=\\frac { 37\\pi } { 15 }  .\n+ Với  x=-\\frac { 5\\pi } { 9 }+k\\frac { 4\\pi } { 3 }  , tương tự ta có 2 nghiệm thỏa mãn là:  x=\\frac { 7\\pi } { 9 }  ,  { }x=\\frac { 19\\pi } { 9 }  .\nVậy phương trình đã cho có 5 nghiệm phân biệt thỏa mãn đề bài.",
      "diagram": null,
      "correctAnswer": "5"
    },
    {
      "id": 53,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho phương trình  cosx=sin3x  . Tính tổng các nghiệm thuộc khoảng  \\left ( { 0\\,;\\,{ 2 }\\pi } \\right )  của phương trình (làm tròn đến hàng phần chục).",
      "explanation": "cosx=sin3x\\Leftrightarrow cosx=\\cos\\left ( { \\frac { \\pi } { 2 }-3x } \\right )\\Leftrightarrow \\left[ x=\\frac { \\pi } { 2 }-3x+k2\\pi \\\\ x=-\\frac { \\pi } { 2 }+3x+k2\\pi \\right.\\Leftrightarrow \\left[ x=\\frac { \\pi } { 8 }+k\\frac { \\pi } { 2 } \\\\ x=\\frac { \\pi } { 4 }+k\\pi \\right.  ,  \\left ( { k\\in \\mathbb{Z} } \\right )  .\n+ Với  x=\\frac { \\pi } { 8 }+k\\frac { \\pi } { 2 }  , ta có:  0 < \\frac { \\pi } { 8 }+k\\frac { \\pi } { 2 } < 2\\pi\\Leftrightarrow -\\frac { 1 } { 4 } < k < \\frac { 15 } { 4 }  , vì  k\\in \\mathbb{Z}  nên  k\\in \\left \\{ \\begin{array}{l} 0;{ }1;{ }2;{ }3 \\end{array} \\right \\}  .\nKhi đó, các nghiệm thỏa mãn là:  x=\\frac { \\pi } { 8 }  ,  { }x=\\frac { 5\\pi } { 8 }  ,  { }x=\\frac { 9\\pi } { 8 }  ,  x=\\frac { 13\\pi } { 8 }  .\n+ Với  x=\\frac { \\pi } { 4 }+k\\pi  , tương tự ta có các nghiệm thỏa mãn là:  x=\\frac { \\pi } { 4 }  ,  x=\\frac { 5\\pi } { 4 }  .\nVậy tổng các nghiệm thuộc khoảng  \\left ( { 0\\,;\\,{ 2 }\\pi } \\right )  của phương trình đã cho là:\n \\frac { \\pi } { 8 }+\\frac { 5\\pi } { 8 }+\\frac { 9\\pi } { 8 }+\\frac { 13\\pi } { 8 }+\\frac { \\pi } { 4 }+\\frac { 5\\pi } { 4 }=5\\pi\\approx 15,7  .",
      "diagram": null,
      "correctAnswer": "15,7"
    },
    {
      "id": 54,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  m  để phương trình  cosx=m  có nghiệm?",
      "explanation": "cosx=m  có nghiệm  \\Leftrightarrow -1\\le m\\le 1  . Mà  m\\in \\mathbb{Z}\\Rightarrow m\\in \\left \\{ \\begin{array}{l} -1;0;1 \\end{array} \\right \\}",
      "diagram": null,
      "correctAnswer": "3"
    },
    {
      "id": 55,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  m  để phương trình  sinx-m=1  có nghiệm.",
      "explanation": "Ta có:  sinx-m=1\\Leftrightarrow sinx=m+1  .\nĐiều kiện để phương trình có nghiệm là:  -1\\le m+1\\le 1\\Leftrightarrow -2\\le m\\le 0  .\nVậy  -2\\le m\\le 0  thoả mãn đề bài. Có 3 giá trị nguyên của tham số m",
      "diagram": null,
      "correctAnswer": "3"
    },
    {
      "id": 56,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  m  để phương trình  3sin ^ { 2 } x+sin2x-mcos ^ { 2 } x=0  có nghiệm.",
      "explanation": "3sin ^ { 2 } x+sin2x-mcos ^ { 2 } x=0\\Leftrightarrow (m-1)cosx=3m+2  .\nTrường hợp 1:  m=1,cosx=2  (loại).\nTrường hợp 2:  m\\ne 1,cosx=\\frac { 3m+2 } { m-1 }  .\n \\left | { \\frac { 3m+2 } { m-1 } } \\right |\\le 1\\Leftrightarrow (3m-2) ^ { 2 } -(m-1) ^ { 2 } \\le 0\\Leftrightarrow \\frac { -3 } { 2 }\\le m\\le \\frac { -1 } { 4 }{ . }{ }  Có 1 giá trị nguyên.",
      "diagram": null,
      "correctAnswer": "1"
    },
    {
      "id": 57,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  m  trong đoạn  \\left[ -10;10 \\right]  mtanx+2=m  có nghiệm.",
      "explanation": "mtanx+2=m\\Leftrightarrow tanx=\\frac { m-2 } { m } \nĐiều kiện có nghiệm:  m\\ne 0  .\nKhi đó trong đoạn  \\left[ -10;10 \\right]  có 20 giá trị nguyên của tham số m",
      "diagram": null,
      "correctAnswer": "20"
    },
    {
      "id": 58,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Một vệ tinh bay quanh Trái Đất theo một quỹ đạo hình Elip (như hình vẽ): Độ cao  h  (tính bằng kilômet) của vệ tinh so với bề mặt Trái Đất được xác định bởi công thức  h=550+450⋅\\cos\\frac { \\pi } { 50 }t  . Trong đó  t  là thời gian tính bằng phút kể từ lúc vệ tinh bay vào quỹ đạo. Người ta cần thực hiện một thí nghiệm khoa học khi vệ tinh cách mặt đất  250 km  . Trong khoảng 60 phút đầu tiên kể từ lúc vệ tinh bay vào quỹ đạo, hãy tìm thời điểm  t  để có thể thực hiện thí nghiệm đó? (kết quả làm tròn đến chữ số thập phân thứ 1)",
      "explanation": "Ta có phương trình:  550+450⋅\\cos\\frac { \\pi } { 50 }t=250\\Leftrightarrow \\cos\\frac { \\pi } { 50 }t=-\\frac { 2 } { 3 } \n \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} ,k\\in \\mathbb{Z}. \\right. \\right. \nVậy trong khoảng 60 phút đầu tiên kể từ lúc vệ tinh bay vào quỹ đạo, tại thời điểm  t\\approx 36,6  (phút) thì ta có thể thực hiện thí nghiệm đó.",
      "diagram": "assets/diagrams/b5_q58.png",
      "correctAnswer": "36,6"
    },
    {
      "id": 59,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Mùa xuân ở Hội Lim (tỉnh Bắc Ninh) thường có trò chơi đu. Khi người chơi đu nhún đều, cây đu sẽ đưa người chơi đu dao động qua lại vị trí cân bằng. Nghiên cứu trò chơi này, người ta thấy khoảng cách  h  (mét) được tính từ vị trí chân người chơi đu đến vị trí cân bằng được biểu diễn bởi hệ thức  h=\\left | { d } \\right |  với  d=3cos\\left[ \\frac { \\pi } { 3 }\\left ( { 2t-1 } \\right ) \\right]  (  t\\ge 0  và được tính bằng giây), trong đó ta quy ước  d>0  khi vị trí cân bằng ở về phía sau lưng người chơi đu và  d < 0  trong trường hợp ngược lại. Hỏi trong 3 giây đầu tiên, có tất cả bao nhiêu lần người chơi đu ở cách vị trí cân bằng 1 mét?",
      "explanation": "Người chơi cách vị trí cân bằng 1 mét khi  3cos\\left[ \\frac { \\pi } { 3 }\\left ( { 2t-1 } \\right ) \\right]=\\pm 1 \n \\Leftrightarrow \\sin ^ { 2 } \\left[ \\frac { \\pi } { 3 }\\left ( { 2t-1 } \\right ) \\right]=\\frac { 8 } { 9 }  \\Leftrightarrow 1-\\cos\\left[ \\frac { 2\\pi } { 3 }\\left ( { 2t-1 } \\right ) \\right]=\\frac { 16 } { 9 }\\Leftrightarrow \\cos\\left[ \\frac { 2\\pi } { 3 }\\left ( { 2t-1 } \\right ) \\right]=-\\frac { 7 } { 9 } \n \\Leftrightarrow \\left[ \\frac { 2\\pi } { 3 }\\left ( { 2t-1 } \\right )=\\alpha+k2\\pi \\\\ \\frac { 2\\pi } { 3 }\\left ( { 2t-1 } \\right )=-\\alpha+k2\\pi \\right.\\,\\left ( { { v }{ í }{ i }{ }k\\in \\mathbb{Z}{ }{ v }{ µ }{ }{ c }{ o }{ s }\\alpha=-\\frac { 7 } { 9 } } \\right )\\Leftrightarrow \\left[ t=\\frac { 3\\alpha } { 4\\pi }+\\frac { 1 } { 2 }+\\frac { 3k } { 2 } \\\\ t=-\\frac { 3\\alpha } { 4\\pi }+\\frac { 1 } { 2 }+\\frac { 3k } { 2 } \\right.  .\nTrong 3 giây đầu tiên ứng với  0\\le t\\le 3  :\n+) Với  t=\\frac { 3\\alpha } { 4\\pi }+\\frac { 1 } { 2 }+\\frac { 3k } { 2 }  thì  0\\le \\frac { 3\\alpha } { 4\\pi }+\\frac { 1 } { 2 }+\\frac { 3k } { 2 }\\le 3\\Rightarrow -0,73\\le k\\le 1,27\\Rightarrow k\\in \\left \\{ \\begin{array}{l} 0\\,;\\,1 \\end{array} \\right \\}  .\n+) Với  t=-\\frac { 3\\alpha } { 4\\pi }+\\frac { 1 } { 2 }+\\frac { 3k } { 2 }  thì  0\\le -\\frac { 3\\alpha } { 4\\pi }+\\frac { 1 } { 2 }+\\frac { 3k } { 2 }\\le 3\\Rightarrow 0,06\\le k\\le 2,06\\Rightarrow k\\in \\left \\{ \\begin{array}{l} 1\\,;\\,2 \\end{array} \\right \\}  .\nVậy trong 3 giây đầu tiên, có 4 lần người chơi ở cách vị trí cân bằng 1 mét.",
      "diagram": null,
      "correctAnswer": "4"
    },
    {
      "id": 60,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Trong môn cầu lông, khi phát cầu, người chơi cần đánh cầu qua khỏi lưới sang phía sân đối phương và không được để cho cầu rơi ngoài biên. Trong mặt phẳng toạ độ  Oxy  , chọn điểm có tọa độ  \\left ( { O;y_{ 0 } } \\right )  là điểm xuất phát thì phương trình quỹ đạo của cầu lông khi rời khỏi mặt vợt là:  y=\\frac { -g⋅x ^ { 2 } } { 2⋅v_{ 0 } ^{ 2 }⋅\\cos ^ { 2 } \\alpha }+x⋅\\tan\\left ( { \\alpha } \\right )+y_{ 0 }  Trong đó: » g là gia tốc trọng trường (thường được chọn là  9,8 m/s ^ { 2 }  ); »  \\alpha  là góc phát cầu (so với phương ngang của mặt đất); »  v_{ 0 }  là vận tốc ban đầu của cầu; »  y_{ 0 }  là khoảng cách từ vị trí phát cầu đến mặt đất. Đây là một hàm số bậc hai nên quỹ đạo chuyển động của cầu lông là một parabol. Một người chơi cầu lông đang đứng khoảng cách từ vị trí người này đến vị trí cầu rơi chạm đất (tầm bay xa) là  6,68 m  . Quan sát hình bên dưới, hỏi người chơi đã phát cầu góc khoảng bao nhiêu độ so với mặt đất? Biết cầu rời mặt vợt ở độ cao  0,7 m  so với mặt đất; vận tốc xuất phát của cầu là  8 m/s  ; người chơi không phát cầu quá  50 ^ { 0 }  và bỏ qua sức cản của gió và xem quỹ đạo của cầu luôn nằm trong mặt phẳng phẳng đứng).",
      "explanation": "Với  g=9,8 m/s ^ { 2 }  , vận tốc ban đầu  v_{ 0 } =8 m/s  , phương trình quỹ đạo của cầu:\n y=\\frac { -g⋅x ^ { 2 } } { 2⋅v_{ 0 } ^{ 2 }⋅\\cos ^ { 2 } \\alpha }+\\tan(\\alpha)⋅x+y_{ 0 } \nKhoảng cách từ vị trí người này đến vị trí cầu rơi chạm đất (tầm bay xa) là  6,68 m  ; nghĩa là  x=6,68 m  .\nTa có  \\frac { -9,8⋅\\left ( { 6,68 } \\right ) ^ { 2 } } { 128⋅\\cos ^ { 2 } \\alpha }+\\tan\\left ( { \\alpha } \\right )⋅\\left ( { 6,68 } \\right )+0,7=0 \n \\Leftrightarrow \\frac { -9,8⋅\\left ( { 6,68 } \\right ) ^ { 2 } } { 128 }\\left ( { 1+\\tan ^ { 2 } \\alpha } \\right )+\\tan\\left ( { \\alpha } \\right )⋅\\left ( { 6,68 } \\right )+0,7=0 \n \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right. \\right. \nVậy người chơi đã phát cầu một góc gần  54 ^ { 0 }  hoặc gần  30 ^ { ^\\circ }  so với mặt đất.\n-------------------- Hết --------------------",
      "diagram": null,
      "correctAnswer": "30"
    }
  ],
  "exam": [
    {
      "id": 1,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Góc có số đo  \\frac { \\pi } { 24 }  đổi sang độ bằng",
      "explanation": "Ta có:  \\frac { \\pi } { 24 }=\\frac { 180^\\circ } { 24 }=7^\\circ30'.",
      "diagram": null,
      "options": [
        "A.  7^\\circ",
        "B.  7^\\circ30'",
        "C.  8^\\circ",
        "D.  8^\\circ30'"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 2,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một đường tròn có đường kính là  50\\left ( { { c }{ m } } \\right )  . Độ dài của cung tròn trên đường tròn có số đo là  \\frac { \\pi } { 4 }  bằng (làm tròn đến hàng đơn vị):",
      "explanation": "Độ dài của cung tròn  l=\\alpha.R=\\frac { \\pi } { 4 }.25=\\frac { 25 } { 4 }\\pi\\approx 20\\left ( { { c }{ m } } \\right )  .",
      "diagram": null,
      "options": [
        "A.  40\\left ( { { c }{ m } } \\right )",
        "B.  39\\left ( { { c }{ m } } \\right )",
        "C.  19\\left ( { { c }{ m } } \\right )",
        "D.  20\\left ( { { c }{ m } } \\right )"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 3,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Góc có số đo  108 ^ { 0 }  đổi ra rađian là:",
      "explanation": "Ta có:  108 ^ { 0 } =\\frac { 108 ^ { 0 } .\\pi } { 180 ^ { 0 } }=\\frac { 3\\pi } { 5 }.",
      "diagram": null,
      "options": [
        "A.  \\frac { 3\\pi } { 5 }",
        "B.  \\frac { \\pi } { 10 }",
        "C.  \\frac { 3\\pi } { 2 }",
        "D.  \\frac { \\pi } { 4 }"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 4,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\frac { \\pi } { 2 } < a < \\pi  . Kết quả đúng là",
      "explanation": "Vì  \\frac { \\pi } { 2 } < a < \\pi  \\Rightarrow sina>0  ,  cosa < 0  .",
      "diagram": null,
      "options": [
        "A.  sina>0  ,  cosa>0",
        "B.  sina < 0  ,  cosa < 0",
        "C.  sina>0  ,  cosa < 0",
        "D.  sina < 0  ,  cosa>0"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 5,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho biết  \\tan\\alpha=\\frac { 1 } { 2 }  . Tính  \\cot\\alpha",
      "explanation": "Ta có:  \\tan\\alpha.\\cot\\alpha=1  \\Rightarrow \\cot\\alpha=\\frac { 1 } { \\tan\\alpha }=\\frac { 1 } { \\frac { 1 } { 2 } }=2  .",
      "diagram": null,
      "options": [
        "A.  \\cot\\alpha=2",
        "B.  \\cot\\alpha=\\frac { 1 } { 4 }",
        "C.  \\cot\\alpha=\\frac { 1 } { 2 }",
        "D.  \\cot\\alpha=\\sqrt[] { 2 }"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 6,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Rút gọn biểu thức  P=\\sin\\left ( { a+\\frac { \\pi } { 4 } } \\right )\\sin\\left ( { a-\\frac { \\pi } { 4 } } \\right )  .",
      "explanation": "Ta có  P=\\sin\\left ( { a+\\frac { \\pi } { 4 } } \\right )\\sin\\left ( { a-\\frac { \\pi } { 4 } } \\right )\\,=\\,\\frac { 1 } { 2 }\\left ( { { c }{ o }{ s }\\frac { \\pi } { 2 }-cos2a } \\right )\\,=\\,\\frac { -1 } { 2 }cos2a  .",
      "diagram": null,
      "options": [
        "A.  -\\frac { 3 } { 2 }cos2a",
        "B.  \\frac { 1 } { 2 }cos2a",
        "C.  -\\frac { 2 } { 3 }cos2a",
        "D.  -\\frac { 1 } { 2 }cos2a"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 7,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Rút gọn biểu thức  M=cos2x.cosx+sin2x.sinx  ta được kết quả là:",
      "explanation": "Ta có:  M=cos2x.cosx+sin2x.sinx=\\cos\\left ( { 2x-x } \\right )=cosx  .",
      "diagram": null,
      "options": [
        "A.  M=cosx",
        "B.  M=cos3x",
        "C.  M=sinx",
        "D.  M=sin3x"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 8,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Đẳng thức nào không đúng với mọi  x  ?",
      "explanation": "Ta có  \\sin ^ { 2 } 2x=\\frac { 1-cos4x } { 2 }  .",
      "diagram": null,
      "options": [
        "A.  \\cos ^ { 2 } 3x=\\frac { 1+cos6x } { 2 }",
        "B.  cos2x=1-2sin ^ { 2 } x",
        "C.  sin2x=2sinxcosx",
        "D.  \\sin ^ { 2 } 2x=\\frac { 1+cos4x } { 2 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D"
    },
    {
      "id": 9,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập xác định của hàm số  y=tan2x  là",
      "explanation": "Điều kiện xác định của hàm số  y=tan2x  là  2x\\ne \\frac { \\pi } { 2 }+k\\pi\\Leftrightarrow x\\ne \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }(k\\in ℤ)  .\nVậy tập xác định của hàm số  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }∣k\\in ℤ \\end{array} \\right \\}  .",
      "diagram": null,
      "options": [
        "A.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }∣k\\in ℤ \\end{array} \\right \\}",
        "B.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }∣k\\in ℤ \\end{array} \\right \\}",
        "C.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k2\\pi∣k\\in ℤ \\end{array} \\right \\}",
        "D.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi∣k\\in ℤ \\end{array} \\right \\}"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 10,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập xác định của hàm số  y=\\frac { 1 } { sin2x+1 }  là",
      "explanation": "Điều kiện xác định của hàm số là  sin2x\\ne -1\\Leftrightarrow 2x\\ne -\\frac { \\pi } { 2 }+k2\\pi\\Leftrightarrow x\\ne -\\frac { \\pi } { 4 }+k\\pi,k\\in \\mathbb{Z}  .\nVậy TXĐ:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 4 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}  .",
      "diagram": null,
      "options": [
        "A.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "B.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 2 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "C.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 4 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "D.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 4 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}"
      ],
      "correctIndex": 2,
      "correctLetter": "C"
    },
    {
      "id": 11,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho hàm số  y=cosx  có đồ thị như hình vẽ. Nghiệm của phương trình  cosx=-1  trong khoảng  \\left ( { 0;2\\pi } \\right )  là:",
      "explanation": "Dựa vào đồ thị ta dễ thấy phương trình  cosx=-1  có một nghiệm trong khoảng  \\left ( { 0;2\\pi } \\right )  là  x=\\pi  .",
      "diagram": "assets/diagrams/b5_q1.png",
      "options": [
        "A.  x=0",
        "B.  x=\\pi",
        "C.  x=2\\pi",
        "D.  x=\\frac { \\pi } { 2 }"
      ],
      "correctIndex": 1,
      "correctLetter": "B"
    },
    {
      "id": 12,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  cosx=0  có nghiệm là:",
      "explanation": "Theo công thức nghiệm đặc biệt thì  cosx=0\\Leftrightarrow x=\\frac { \\pi } { 2 }+k\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  x=\\frac { \\pi } { 2 }+k\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  x=k2\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  x=\\frac { \\pi } { 2 }+k2\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  x=k\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 0,
      "correctLetter": "A"
    },
    {
      "id": 13,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Đổi số đo của các góc sang radian. Khi đó:",
      "explanation": "(a)  30 ^ { ^\\circ } =\\frac { \\pi } { 6 }  rad\n 30 ^ { ^\\circ } =\\frac { 30\\pi } { 180 }rad=\\frac { \\pi } { 6 }rad  .\n» Chọn ĐÚNG.\n(b)  \\left ( { \\frac { 15 } { \\pi } } \\right ) ^ { ^\\circ } =\\frac { 1 } { 12 }  rad\n \\left ( { \\frac { 15 } { \\pi } } \\right ) ^ { ^\\circ } =\\frac { \\frac { 15 } { \\pi }\\pi } { 180 }rad=\\frac { 1 } { 12 }rad  .\n» Chọn ĐÚNG.\n(c)  132 ^ { ^\\circ } =\\frac { 11\\pi } { 15 }  rad\n 132 ^ { ^\\circ } =\\frac { 132\\pi } { 180 }rad=\\frac { 11\\pi } { 15 }rad \n» Chọn ĐÚNG.\n(d)  -495 ^ { ^\\circ } =-\\frac { 13\\pi } { 4 }  rad\n -495 ^ { ^\\circ } =\\frac { -495\\pi } { 180 }rad=-\\frac { 11\\pi } { 4 }rad  .\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "30 ^ { ^\\circ } =\\frac { \\pi } { 6 }  rad",
          "correct": true
        },
        {
          "subId": "b",
          "text": "\\left ( { \\frac { 15 } { \\pi } } \\right ) ^ { ^\\circ } =\\frac { 1 } { 12 }  rad",
          "correct": true
        },
        {
          "subId": "c",
          "text": "132 ^ { ^\\circ } =\\frac { 11\\pi } { 15 }  rad",
          "correct": true
        },
        {
          "subId": "d",
          "text": "-495 ^ { ^\\circ } =-\\frac { 13\\pi } { 4 }  rad",
          "correct": false
        }
      ]
    },
    {
      "id": 14,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ }  . Xét được dấu của các biểu thức sau. Khi đó:",
      "explanation": "(a)  A=\\sin\\left ( { \\alpha+90 ^ { ^\\circ } } \\right )>0  ;\nTa có:  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ } \\Rightarrow 90 ^ { ^\\circ } < \\alpha+90 ^ { ^\\circ } < 180 ^ { ^\\circ } \n \\Rightarrow \\sin\\left ( { \\alpha+90 ^ { ^\\circ } } \\right )>0{ . }{ } \n» Chọn ĐÚNG.\n(b)  B=\\cos\\left ( { \\alpha-45 ^ { ^\\circ } } \\right )>0  ;\nTa có:  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ } \\Rightarrow -45 ^ { ^\\circ } < \\alpha-45 ^ { ^\\circ } < 45 ^ { ^\\circ } \n \\Rightarrow \\cos\\left ( { \\alpha-45 ^ { ^\\circ } } \\right )>0{ . }{ } \n» Chọn ĐÚNG.\n(c)  C=\\tan\\left ( { 270 ^ { ^\\circ } -\\alpha } \\right ) < 0  ;\nTa có:  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ } \\Rightarrow -90 ^ { ^\\circ } < -\\alpha < 0 ^ { ^\\circ } \n \\Rightarrow 270 ^ { ^\\circ } +\\left ( { -90 ^ { ^\\circ } } \\right ) < 270 ^ { ^\\circ } +(-\\alpha) < 270 ^ { ^\\circ } +0 ^ { ^\\circ } \n \\Rightarrow 180 ^ { ^\\circ } < 270 ^ { ^\\circ } -\\alpha < 270 ^ { ^\\circ } \\Rightarrow \\tan\\left ( { 270 ^ { ^\\circ } -\\alpha } \\right )>0 \n» Chọn SAI.\n(d)  D=\\cos\\left ( { 2\\alpha+90 ^ { ^\\circ } } \\right )>0  .\nTa có:  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ } \\Rightarrow 90 ^ { ^\\circ } < 2\\alpha+90 ^ { ^\\circ } < 270 ^ { ^\\circ } \n \\Rightarrow \\cos\\left ( { 2\\alpha+270 ^ { ^\\circ } } \\right ) < 0 \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "A=\\sin\\left ( { \\alpha+90 ^ { ^\\circ } } \\right )>0",
          "correct": true
        },
        {
          "subId": "b",
          "text": "B=\\cos\\left ( { \\alpha-45 ^ { ^\\circ } } \\right )>0",
          "correct": true
        },
        {
          "subId": "c",
          "text": "C=\\tan\\left ( { 270 ^ { ^\\circ } -\\alpha } \\right ) < 0",
          "correct": false
        },
        {
          "subId": "d",
          "text": "D=\\cos\\left ( { 2\\alpha+90 ^ { ^\\circ } } \\right )>0",
          "correct": false
        }
      ]
    },
    {
      "id": 15,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho biết  \\sin\\alpha=\\frac { 3 } { 5 },\\cos\\alpha=-\\frac { 4 } { 5 }  và các biểu thức  A=\\sin\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )+\\sin(\\pi+\\alpha)  ;  B=\\cos(\\pi-\\alpha)+\\cot\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )  . Khi đó",
      "explanation": "(a)  A=\\cos\\alpha-\\sin\\alpha  .\nTa có:  A=\\sin\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )+\\sin(\\pi+\\alpha)=\\cos\\alpha-\\sin\\alpha=-\\frac { 4 } { 5 }-\\frac { 3 } { 5 }=-\\frac { 7 } { 5 }  .\n» Chọn ĐÚNG.\n(b)  B=\\cos\\alpha+\\tan\\alpha  .\nTa có:  B=\\cos(\\pi-\\alpha)+\\cot\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )=-\\cos\\alpha+\\tan\\alpha  =-\\cos\\alpha+\\frac { \\sin\\alpha } { \\cos\\alpha }=\\frac { 4 } { 5 }+\\frac { \\frac { 3 } { 5 } } { -\\frac { 4 } { 5 } }=\\frac { 1 } { 20 }{ . }{ } \n» Chọn SAI.\n(c)  A+B=\\frac { 27 } { 20 }  .\nTa có  A+B=-\\frac { 27 } { 20 }  .\n» Chọn SAI.\n(d)  A-B=-\\frac { 29 } { 20 }  .\nTa có  A-B=-\\frac { 29 } { 20 }  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "A=\\cos\\alpha-\\sin\\alpha",
          "correct": true
        },
        {
          "subId": "b",
          "text": "B=\\cos\\alpha+\\tan\\alpha",
          "correct": false
        },
        {
          "subId": "c",
          "text": "A+B=\\frac { 27 } { 20 }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "A-B=-\\frac { 29 } { 20 }",
          "correct": true
        }
      ]
    },
    {
      "id": 16,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  y=3-\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )  , khi đó:",
      "explanation": "y=3-\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right ) \n(a) Hàm số có tập xác định  D=\\mathbb{R} \nTa có: hàm số có tập xác định  D=\\mathbb{R}  .\n -1\\le \\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )\\le 1\\Leftrightarrow 1\\ge -\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )\\ge -1\\Leftrightarrow 4\\ge 3-\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )\\ge 2\\Leftrightarrow 4\\ge y\\ge 2 \n» Chọn ĐÚNG.\n(b) Giá trị nhỏ nhất của hàm số bằng 2\nVậy giá trị nhỏ nhất của hàm số bằng  2  .\n» Chọn ĐÚNG.\n(c) Giá trị lớn nhất của hàm số bằng 4\nVậy giá trị lớn nhất của hàm số bằng  4  .\n» Chọn ĐÚNG.\n(d) Tập giá trị của hàm số là  T=\\left[ 2;4 \\right] \nDo đó tập giá trị của hàm số là  T=\\left[ 2;4 \\right]  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Hàm số có tập xác định  D=\\mathbb{R}",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Giá trị nhỏ nhất của hàm số bằng 2",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Giá trị lớn nhất của hàm số bằng 4",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Tập giá trị của hàm số là  T=\\left[ 2;4 \\right]",
          "correct": true
        }
      ]
    },
    {
      "id": 17,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Từ hình vẽ đường tròn lượng giác, công thức số đo tổng quát của góc lượng giác  \\left ( { OA,OM } \\right )  ;  \\left ( { OA,ON } \\right )  có dạng lần lượt là  n ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )  ;  m ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )  với  n;m  là các số nguyên. Tính giá trị  S=\\frac { 1 } { 4 }m ^ { 2 } -n",
      "explanation": "Ta có:  \\left ( { OA,OM } \\right )=225 ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow n=225  ;\n \\left ( { OA,ON } \\right )=-60 ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow m=-60  .\nVậy  S=\\frac { 1 } { 4 }\\left ( { -60 } \\right ) ^ { 2 } -225=675",
      "diagram": "assets/diagrams/b1_q30.png",
      "correctAnswer": "675"
    },
    {
      "id": 18,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  cosx=\\frac { 1 } { 2 }  . Tính giá trị biểu thức  P=3sin ^ { 2 } x+4cos ^ { 2 } x  .",
      "explanation": "Ta có:  cosx=\\frac { 1 } { 2 }\\Rightarrow \\sin ^ { 2 } x=1-\\cos ^ { 2 } x=1-\\frac { 1 } { 4 }=\\frac { 3 } { 4 }  .\nKhi đó:  P=3sin ^ { 2 } x+4cos ^ { 2 } x=3⋅\\frac { 3 } { 4 }+4⋅\\frac { 1 } { 4 }=\\frac { 13 } { 4 }  .",
      "diagram": null,
      "correctAnswer": "3,25"
    },
    {
      "id": 19,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho biểu thức  P=cos5x.cos3x-\\cos\\left ( { 5x+90^\\circ } \\right ).\\cos\\left ( { -3x-90^\\circ } \\right )  . Sau khi đơn giản hóa, ta được biểu thức  P=\\cos\\left ( { ax } \\right )  . Giá trị của  a  bằng",
      "explanation": "Biến đổi biểu thức  P  , ta có:\n P=cos5x.cos3x-\\cos\\left ( { 5x+90^\\circ } \\right ).\\cos\\left ( { -3x-90^\\circ } \\right ) \n =cos5x.cos3x+sin5x.\\cos\\left ( { 3x+90^\\circ } \\right )=cos5x.cos3x-sin5x.sin3x=\\cos\\left ( { 5x+3x } \\right )=\\cos\\left ( { 8x } \\right ) \n \\Rightarrow a=8  .",
      "diagram": null,
      "correctAnswer": "8"
    },
    {
      "id": 20,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Họ nghiệm phương trình lượng giác:  \\cos\\left ( { x+30 ^ { ^\\circ } } \\right )+1=0  có dạng  x=a ^ { ^\\circ } +k⋅b ^ { ^\\circ } \\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  , với  a;b  là các số nguyên. Tính giá trị  S=b-a",
      "explanation": "Ta có:  \\cos\\left ( { x+30 ^ { ^\\circ } } \\right )+1=0\\Leftrightarrow \\cos\\left ( { x+30 ^ { ^\\circ } } \\right )=-1 \n \\Leftrightarrow x+30 ^ { ^\\circ } =180 ^ { ^\\circ } +k360 ^ { ^\\circ } (k\\in \\mathbb{Z})\\Leftrightarrow x=150 ^ { ^\\circ } +k360 ^ { ^\\circ } (k\\in \\mathbb{Z}). \nVậy phương trình có nghiệm là:  x=150 ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow \\left \\{ \\begin{array}{l} a=150 \\\\ b=360 \\end{array} \\right.\\Rightarrow S=210  .",
      "diagram": null,
      "correctAnswer": "210"
    }
  ],
  "all": [
    {
      "id": 1,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Góc có số đo  \\frac { \\pi } { 24 }  đổi sang độ bằng",
      "explanation": "Ta có:  \\frac { \\pi } { 24 }=\\frac { 180^\\circ } { 24 }=7^\\circ30'.",
      "diagram": null,
      "options": [
        "A.  7^\\circ",
        "B.  7^\\circ30'",
        "C.  8^\\circ",
        "D.  8^\\circ30'"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 1
    },
    {
      "id": 2,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một đường tròn có đường kính là  50\\left ( { { c }{ m } } \\right )  . Độ dài của cung tròn trên đường tròn có số đo là  \\frac { \\pi } { 4 }  bằng (làm tròn đến hàng đơn vị):",
      "explanation": "Độ dài của cung tròn  l=\\alpha.R=\\frac { \\pi } { 4 }.25=\\frac { 25 } { 4 }\\pi\\approx 20\\left ( { { c }{ m } } \\right )  .",
      "diagram": null,
      "options": [
        "A.  40\\left ( { { c }{ m } } \\right )",
        "B.  39\\left ( { { c }{ m } } \\right )",
        "C.  19\\left ( { { c }{ m } } \\right )",
        "D.  20\\left ( { { c }{ m } } \\right )"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 2
    },
    {
      "id": 3,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Số đo theo đơn vị rađian của góc  315^\\circ  là",
      "explanation": "Ta có  315^\\circ=\\frac { 315 } { 180 }.\\pi=\\frac { 7\\pi } { 4 }  (rađian).",
      "diagram": null,
      "options": [
        "A.  \\frac { 7\\pi } { 2 }",
        "B.  \\frac { 7\\pi } { 4 }",
        "C.  \\frac { 2\\pi } { 7 }",
        "D.  \\frac { 4\\pi } { 7 }"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 3
    },
    {
      "id": 4,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cung tròn có số đo là  \\frac { 5\\pi } { 4 }  . Hãy chọn số đo độ của cung tròn đó trong các cung tròn sau đây.",
      "explanation": "Ta có:  a^\\circ=\\frac { \\alpha } { \\pi }.180^\\circ=\\frac { \\frac { 5\\pi } { 4 } } { \\pi }.180^\\circ=225^\\circ  .",
      "diagram": null,
      "options": [
        "A.  5^\\circ",
        "B.  15^\\circ",
        "C.  172^\\circ",
        "D.  225^\\circ"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 4
    },
    {
      "id": 5,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cung tròn có số đo là  \\pi  . Hãy chọn số đo độ của cung tròn đó trong các cung tròn sau đây.",
      "explanation": "Ta có:  a^\\circ=\\frac { \\alpha } { \\pi }.180^\\circ=180^\\circ  .",
      "diagram": null,
      "options": [
        "A.  30^\\circ",
        "B.  45^\\circ",
        "C.  90^\\circ",
        "D.  180^\\circ"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 5
    },
    {
      "id": 6,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Góc có số đo  \\frac { 2\\pi } { 5 }  đổi sang độ là:",
      "explanation": "Ta có:  \\frac { 2\\pi } { 5 }=\\frac { 2.180 ^ { 0 } } { 5 }=72 ^ { 0 } .",
      "diagram": null,
      "options": [
        "A.  135 ^ { 0 } .",
        "B.  72 ^ { 0 } .",
        "C.  270 ^ { 0 } .",
        "D.  240 ^ { 0 } ."
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 6
    },
    {
      "id": 7,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Góc có số đo  108 ^ { 0 }  đổi ra rađian là:",
      "explanation": "Ta có:  108 ^ { 0 } =\\frac { 108 ^ { 0 } .\\pi } { 180 ^ { 0 } }=\\frac { 3\\pi } { 5 }.",
      "diagram": null,
      "options": [
        "A.  \\frac { 3\\pi } { 5 }",
        "B.  \\frac { \\pi } { 10 }",
        "C.  \\frac { 3\\pi } { 2 }",
        "D.  \\frac { \\pi } { 4 }"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 7
    },
    {
      "id": 8,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một bánh xe có  72  răng. Số đo góc mà bánh xe đã quay được khi di chuyển  10  răng là:",
      "explanation": "+ 1 bánh răng tương ứng với  \\frac { 360 ^ { 0 } } { 72 }=5 ^ { 0 }  \\Rightarrow 10  bánh răng là  50 ^ { 0 }  .",
      "diagram": null,
      "options": [
        "A.  60 ^ { 0 }",
        "B.  30 ^ { 0 }",
        "C.  40 ^ { 0 }",
        "D.  50 ^ { 0 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 8
    },
    {
      "id": 9,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trên đường tròn với điểm gốc là  A  . Điểm  M  thuộc đường tròn sao cho cung lượng giác  AM  có số đo  60^\\circ  . Gọi  N  là điểm đối xứng với điểm  M  qua trục  Oy  , số đo cung  AN  là",
      "explanation": "Ta có:  \\widehat { AON }=60^\\circ  ,  \\widehat { MON }=60^\\circ  nên  \\widehat { AOM }=120^\\circ  . Khi đó số đo cung  AN  bằng  120^\\circ  .",
      "diagram": null,
      "options": [
        "A.  -120^\\circ  hoặc  240^\\circ",
        "B.  120^\\circ+k360^\\circ,k\\in \\mathbb{Z}",
        "C.  120^\\circ",
        "D.  -240^\\circ"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 9
    },
    {
      "id": 10,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trên đường tròn bán kính  r=15  , độ dài của cung có số đo  50 ^ { 0 }  là:",
      "explanation": "l=\\frac { \\pi.r.n ^ { 0 } } { 180 ^ { 0 } }=\\frac { \\pi15.50 } { 180 }  .",
      "diagram": null,
      "options": [
        "A.  l=15.\\frac { 180 } { \\pi }",
        "B.  l=\\frac { 15\\pi } { 180 }.",
        "C.  l=15.\\frac { 180 } { \\pi }.50",
        "D.  l=750"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 10
    },
    {
      "id": 11,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trên đường tròn bán kính  r=5  , độ dài của cung đo  \\frac { \\pi } { 8 }  là:",
      "explanation": "Độ dài cung AB có số đo cung AB bằng n độ:  l=r.n=5.\\frac { \\pi } { 8 }  .",
      "diagram": null,
      "options": [
        "A.  l=\\frac { \\pi } { 8 }",
        "B.  l=\\frac { 3\\pi } { 8 }",
        "C.  l=\\frac { 5\\pi } { 8 }",
        "D.  l=\\frac { 2\\pi } { 3 }"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 11
    },
    {
      "id": 12,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Số đo của cung tròn có độ dài  75\\left ( { { c }{ m } } \\right )  trên đường tròn có đường kính  30\\left ( { { c }{ m } } \\right )  (lấy  \\pi\\approx 3,14  và làm tròn đến phút) có dạng  a ^ { 0 } b'\\left ( { a,b\\in \\mathbb{Z} } \\right )  . Giá trị của biểu thức  P=2a-b  bằng:",
      "explanation": "Độ dài của cung tròn  l=\\frac { \\alpha } { 180 }.\\pi.R\\Rightarrow \\alpha=\\frac { l.180 } { \\pi.R }=\\frac { 75.180 } { 3,14.15 }\\approx 286 ^ { 0 } 37'  .\nVậy  P=2a-b=2.286-37=535  .",
      "diagram": null,
      "options": [
        "A.  533",
        "B.  535",
        "C.  267",
        "D.  266"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 12
    },
    {
      "id": 13,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trên hình vẽ hai điểm  M,N  biểu diễn các cung có số đo là:",
      "explanation": "",
      "diagram": "assets/diagrams/b1_q13.png",
      "options": [
        "A.  x=\\frac { \\pi } { 3 }+2k\\pi",
        "B.  x=-\\frac { \\pi } { 3 }+k\\pi",
        "C.  x=\\frac { \\pi } { 3 }+k\\pi",
        "D.  x=\\frac { \\pi } { 3 }+k\\frac { \\pi } { 2 }."
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 13
    },
    {
      "id": 14,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trên đường tròn lượng giác gốc A, cho điểm M xác định bởi sđ  \\mathop { AM } =\\frac { \\pi } { 3 }  . Gọi  M_{ 1 }  là điểm đối xứng của M qua trục  Ox  . Tìm số đo của cung lượng giác  \\mathop { AM_{ 1 } } .",
      "explanation": "Vì  M_{ 1 }  là điểm đối xứng của M qua trục  Ox  nên có 1 góc lượng giác  \\left ( { OA,OM_{ 1 } } \\right )=-\\frac { \\pi } { 3 } \n \\Rightarrow  sđ  \\mathop { AM_{ 1 } } =\\frac { -\\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}  .",
      "diagram": null,
      "options": [
        "A. sđ  \\mathop { AM_{ 1 } } =\\frac { -5\\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}",
        "B. sđ  \\mathop { AM_{ 1 } } =\\frac { \\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}",
        "C. sđ  \\mathop { AM_{ 1 } } =\\frac { -\\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}",
        "D. sđ  \\mathop { AM_{ 1 } } =\\frac { -\\pi } { 3 }+k\\pi,k\\in \\mathbb{Z}"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 14
    },
    {
      "id": 15,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Điểm  M  trong hình vẽ sau là điểm biểu diễn của góc  \\alpha  . Số đo của  \\alpha  là",
      "explanation": "Số đo của  \\alpha  là  \\alpha=-\\frac { 5\\pi } { 6 }+k2\\pi,k\\in \\mathbb{Z}  .",
      "diagram": "assets/diagrams/b1_q15.png",
      "options": [
        "A.  \\alpha=-\\frac { \\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}",
        "B.  \\alpha=-\\frac { 5\\pi } { 6 }+k\\pi,k\\in \\mathbb{Z}",
        "C.  \\alpha=\\frac { \\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}",
        "D.  \\alpha=-\\frac { 5\\pi } { 6 }+k2\\pi,k\\in \\mathbb{Z}"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 15
    },
    {
      "id": 16,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Khi biểu diễn cung lượng giác trên đường tròn lượng giác, khẳng định nào dưới đây sai?",
      "explanation": "Khẳng định B sai vì điểm biểu diễn cung  \\alpha  và cung  -\\alpha  đối xứng nhau qua trục hoành.",
      "diagram": null,
      "options": [
        "A. Điểm biểu diễn cung  \\alpha  và cung  \\pi-\\alpha  đối xứng nhau qua trục tung",
        "B. Điểm biểu diễn cung  \\alpha  và cung  -\\alpha  đối xứng nhau qua gốc tọa độ",
        "C. Mỗi cung lượng giác được biểu diễn bởi một điểm duy nhất",
        "D. Cung  \\alpha  và cung  \\alpha+k2\\pi\\,\\left ( { k\\in \\mathbb{Z} } \\right )  có cùng điểm biểu diễn"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 16
    },
    {
      "id": 17,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một đồng hồ treo tường, kim giờ dài  10,57\\text{cm}  và kim phút dài  13,34\\text{cm}  .Trong 30 phút mũi kim giờ vạch lên cung tròn có độ dài là",
      "explanation": "6 giờ thì kim giờ vạch lên 1 cung có số đo nên 30 phút kim giờ vạch lên 1 cung có số đo là  \\frac { 1 } { 12 }\\pi  , suy ra độ dài cung tròn mà nó vạch lên là  l=R\\alpha=10,57×\\frac { 3,14 } { 12 }\\approx 2,77",
      "diagram": null,
      "options": [
        "A.  2,78\\text{cm}",
        "B.  2,77\\text{cm}",
        "C.  2,76\\text{cm}",
        "D.  2,8\\text{cm}"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 17
    },
    {
      "id": 18,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong 20 giây bánh xe của xe gắn máy quay được 60 vòng.Tính độ dài quãng đường xe gắn máy đã đi được trong vòng 3 phút,biết rằng bán kính bánh xe gắn máy bằng  6,5\\text{cm}  (lấy  \\pi=3,1416  )",
      "explanation": "3 phút xe đi được  \\frac { 3×60 } { 20 }×60=540  vòng.\nĐộ dài 1 vòng bằng chu vi bánh xe là  2\\piR=2×3,1416×6,5=40,8408  .\nVậy quãng đường xe đi được là  540×40,8408=22054,032\\text{cm}",
      "diagram": null,
      "options": [
        "A.  22043\\text{cm}",
        "B.  22055\\text{cm}",
        "C.  22042\\text{cm}",
        "D.  22054\\text{cm}"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 18
    },
    {
      "id": 19,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một bánh xe đạp quay được 25 vòng trong 10 giây. Tính độ dài quãng đường mà người đi xe thực hiện được trong 2,35 phút, biết rằng bán kính bánh xe bằng  340 mm  . (Tính theo đơn vị mét, kết quả được làm tròn đến hàng phần trăm).",
      "explanation": "Sau 2,35 phút ( = 141 giây), số vòng mà bánh xe thực hiện được là:\n \\frac { 141.25 } { 10 }=352,5{ }{ v }{ ò }{ n }{ g }{ . }{ }  Bán kính bánh xe:  R=340 mm=0,34 m  .\nQuãng đường mà người đi xe đạp thực hiện được sau 2,35 phút là:\n 352,5⋅2\\piR=352,5⋅2\\pi⋅0,34=\\frac { 2397 } { 10 }\\pi\\approx 753,04( m){ . }{ }",
      "diagram": null,
      "options": [
        "A.  314,5( m)",
        "B.  753,04( m)",
        "C.  514,8\\left ( { m } \\right )",
        "D.  437,8\\left ( { m } \\right )"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 19
    },
    {
      "id": 20,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Từ một vị trí ban đầu trong không gian, vệ tinh  X  chuyển động theo quỹ đạo là một đường tròn quanh Trái Đất và luôn cách tâm Trái Đất một khoảng bằng  9200 km  . Sau 2 giờ thì vệ tinh  X  hoàn thành hết một vòng di chuyển. Quãng đường vệ tinh  X  chuyển động được sau 1 giờ là",
      "explanation": "Một vòng di chuyển của  X  chính là chu vi đường tròn:\n C=2\\piR=2\\pi.9200=18400\\pi(km){ . }{ } \nSau 1 giờ, vệ tinh di chuyển nửa đường tròn với quãng đường là:\n \\frac { 1 } { 2 }C=9200\\pi\\approx 28902,65( km){ . }{ }",
      "diagram": null,
      "options": [
        "A.  28902,65( km)",
        "B.  29802,65( km)",
        "C.  32102,65( km)",
        "D.  28905( km)"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 20
    },
    {
      "id": 21,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một chiếc đu quay có bán kính  75 m  , tâm của vòng quay ở độ cao  90 m  , thời gian thực hiện mỗi vòng quay của đu quay là 30 phút. Nếu một người vào cabin tại vị trí thấp nhất của vòng quay, thì sau 20 phút quay, người đó ở độ cao bao nhiêu mét?",
      "explanation": "Do tính đối xứng, dù đu quay chuyển động theo chiều kim đồng hồ hay ngược chiều kim đồng hồ, ta đều thấy rằng độ cao của người đó là như nhau sau cùng một khoảng thời gian.\nỞ đây ta xét đu quay chuyển động theo chiều kim đồng hồ.\nGắn đu quay có bán kính  75 m  , tâm của vòng quay ở độ cao  90 m  vào hệ trục tọa độ  Oxy  ta được hình bên:\nSau 20 phút quay cabin đi được một góc là  \\frac { 20 } { 30 }⋅360 ^ { ^\\circ } =240 ^ { ^\\circ }  tức là đến vị trí điểm  M'  .\nKhi đó góc  \\widehat { M'OH }=30 ^ { ^\\circ }  và  M'H=30 ^ { ^\\circ } .OM'=37,5\\,\\,\\left ( { m } \\right )  .\nVậy sau 20 phút quay, người đó ở độ cao  37,5+90=127,5( m)  .\nB.Câu hỏi – Trả lời Đúng/sai",
      "diagram": null,
      "options": [
        "A.  127,5( m)",
        "B.  154,3\\left ( { m } \\right )",
        "C.  87,7\\left ( { m } \\right )",
        "D.  157,5"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 21
    },
    {
      "id": 22,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Đổi số đo của các góc sang radian. Khi đó:",
      "explanation": "(a)  30 ^ { ^\\circ } =\\frac { \\pi } { 6 }  rad\n 30 ^ { ^\\circ } =\\frac { 30\\pi } { 180 }rad=\\frac { \\pi } { 6 }rad  .\n» Chọn ĐÚNG.\n(b)  \\left ( { \\frac { 15 } { \\pi } } \\right ) ^ { ^\\circ } =\\frac { 1 } { 12 }  rad\n \\left ( { \\frac { 15 } { \\pi } } \\right ) ^ { ^\\circ } =\\frac { \\frac { 15 } { \\pi }\\pi } { 180 }rad=\\frac { 1 } { 12 }rad  .\n» Chọn ĐÚNG.\n(c)  132 ^ { ^\\circ } =\\frac { 11\\pi } { 15 }  rad\n 132 ^ { ^\\circ } =\\frac { 132\\pi } { 180 }rad=\\frac { 11\\pi } { 15 }rad \n» Chọn ĐÚNG.\n(d)  -495 ^ { ^\\circ } =-\\frac { 13\\pi } { 4 }  rad\n -495 ^ { ^\\circ } =\\frac { -495\\pi } { 180 }rad=-\\frac { 11\\pi } { 4 }rad  .\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "30 ^ { ^\\circ } =\\frac { \\pi } { 6 }  rad",
          "correct": true
        },
        {
          "subId": "b",
          "text": "\\left ( { \\frac { 15 } { \\pi } } \\right ) ^ { ^\\circ } =\\frac { 1 } { 12 }  rad",
          "correct": true
        },
        {
          "subId": "c",
          "text": "132 ^ { ^\\circ } =\\frac { 11\\pi } { 15 }  rad",
          "correct": true
        },
        {
          "subId": "d",
          "text": "-495 ^ { ^\\circ } =-\\frac { 13\\pi } { 4 }  rad",
          "correct": false
        }
      ],
      "globalId": 22
    },
    {
      "id": 23,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Đổi số đo của các góc sang độ. Khi đó:",
      "explanation": "(a)  \\frac { 3\\pi } { 4 }rad=135 ^ { ^\\circ }  ;\n \\frac { 3\\pi } { 4 }rad=\\left ( { \\frac { 3\\pi } { 4 }⋅\\frac { 180 } { \\pi } } \\right ) ^ { ^\\circ } =135 ^ { ^\\circ } \n» Chọn ĐÚNG.\n(b)  -\\frac { \\pi } { 360 }rad=-0,5 ^ { ^\\circ }  ;\n -\\frac { \\pi } { 360 }rad=\\left ( { -\\frac { \\pi } { 360 }⋅\\frac { 180 } { \\pi } } \\right ) ^ { ^\\circ } =-0,5 ^ { ^\\circ }  .\n» Chọn ĐÚNG.\n(c)  \\frac { 31\\pi } { 2 }rad=27 ^ { ^\\circ }  ;\n \\frac { 31\\pi } { 2 }rad=\\left ( { \\frac { 31\\pi } { 2 }⋅\\frac { 180 } { \\pi } } \\right ) ^ { ^\\circ } =2790 ^ { ^\\circ }  .\n» Chọn SAI.\n(d)  -4\\text{ rad}\\approx -229,18 ^ { ^\\circ }  .\n -4\\text{ rad}=\\left ( { -4⋅\\frac { 180 } { \\pi } } \\right ) ^ { ^\\circ } =\\left ( { -\\frac { 720 } { \\pi } } \\right ) ^ { ^\\circ } \\approx -229,18 ^ { ^\\circ }  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\frac { 3\\pi } { 4 }rad=135 ^ { ^\\circ }",
          "correct": true
        },
        {
          "subId": "b",
          "text": "-\\frac { \\pi } { 360 }rad=-0,5 ^ { ^\\circ }",
          "correct": true
        },
        {
          "subId": "c",
          "text": "\\frac { 31\\pi } { 2 }rad=27 ^ { ^\\circ }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "-4\\text{ rad}\\approx -229,18 ^ { ^\\circ }",
          "correct": true
        }
      ],
      "globalId": 23
    },
    {
      "id": 24,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Biểu diễn góc lượng giác trên đường tròn lượng giác. Khi đó:",
      "explanation": "(a)  125 ^ { ^\\circ }  là điểm  M  thuộc góc phần tư thứ thứ II\nĐiểm biểu diễn của góc lượng giác có số đo  125 ^ { ^\\circ }  là điểm  M  thuộc góc phần tư thứ thứ II của đường tròn lượng giác thoả mãn  \\widehat { AOM }=125 ^ { ^\\circ }  (Hình 1).\nHình 1\n» Chọn ĐÚNG.\n(b)  405 ^ { ^\\circ }  là điểm  N  thuộc góc phần tư thứ III\nTa có:  405 ^ { ^\\circ } =45 ^ { ^\\circ } +360 ^ { ^\\circ }  . Vì vậy điểm biểu diễn của góc lượng giác  405 ^ { ^\\circ }  là điểm  N  thuộc góc phần tư thứ  I  của đường tròn lượng giác và thoả mãn  \\widehat { AON }=45 ^ { ^\\circ }  (Hình 2).\nHình 2\n» Chọn SAI.\n(c)  \\frac { 19\\pi } { 3 }  là điểm  P  thuộc góc phần tư thứ II\nTa có:  \\frac { 19\\pi } { 3 }=\\frac { 18\\pi+\\pi } { 3 }=\\frac { \\pi } { 3 }+3.2\\pi  .\nVì vậy điểm biểu diễn của góc lượng giác  \\frac { 19\\pi } { 3 }  là điểm  P  thuộc góc phần tư thứ  I  của đường tròn lượng giác và thoả mãn  \\widehat { AOP }=\\frac { \\pi } { 3 }  (Hình 3).\nHình 3\n» Chọn SAI.\n(d)  -\\frac { 13\\pi } { 6 }  là điểm  Q  thuộc góc phần tư thứ IV\nTa có:  -\\frac { 13\\pi } { 6 }=\\frac { -12\\pi-\\pi } { 6 }=-\\frac { \\pi } { 6 }-2\\pi  .\nVì vậy điểm biểu diễn của góc lượng giác  -\\frac { 13\\pi } { 6 }  là điểm  Q  thuộc góc phần tư thứ IV của đường tròn lượng giác và thoả mãn  \\widehat { AOQ }=\\frac { \\pi } { 6 }  (Hình 4).\nHình 4\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "125 ^ { ^\\circ }  là điểm  M  thuộc góc phần tư thứ thứ II",
          "correct": true
        },
        {
          "subId": "b",
          "text": "405 ^ { ^\\circ }  là điểm  N  thuộc góc phần tư thứ III",
          "correct": false
        },
        {
          "subId": "c",
          "text": "\\frac { 19\\pi } { 3 }  là điểm  P  thuộc góc phần tư thứ II",
          "correct": false
        },
        {
          "subId": "d",
          "text": "-\\frac { 13\\pi } { 6 }  là điểm  Q  thuộc góc phần tư thứ IV",
          "correct": true
        }
      ],
      "globalId": 24
    },
    {
      "id": 25,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Biểu diễn góc lượng giác trên đường tròn lượng giác. Khi đó:",
      "explanation": "(a)  36 ^ { ^\\circ } +k360 ^ { ^\\circ } ,k\\in \\mathbb{Z}  là điểm  M  thuộc góc phần tư thứ  II \nXét góc lượng giác  k360 ^ { ^\\circ }  , dù  k  là số chã̃n hay số lẻ thì góc này cũng có điểm biểu diễn là điểm  A  (điểm gốc trên đường tròn lượng giác).\nVì vậy, góc lượng giác  36 ^ { ^\\circ } +k360 ^ { ^\\circ }  có điểm biểu diễn là điểm  M  thuộc góc phần tư thứ  I  của đường tròn lượng giác và  \\widehat { AOM }=36 ^ { ^\\circ }  .\n» Chọn SAI.\n(b)  -60 ^ { ^\\circ } +k180 ^ { ^\\circ } ,k\\in \\mathbb{Z}  là các điểm  M_{ 1 } ,M_{ 2 }  thuộc góc phần tư thứ  II  và  IV \nXét góc lượng giác  k180 ^ { ^\\circ }  .\nNếu  k  chẵn thì góc này có điểm biểu diễn là  A\\left ( { 1;0 } \\right )  ,\nNếu  k  lẻ thì góc này có điểm biểu diễn là điểm  B\\left ( { -1;0 } \\right )  .\nVì vậy,  -60 ^ { ^\\circ } +k180 ^ { ^\\circ }  có các điểm biểu diễn là  M_{ 1 }  và  M_{ 2 }  như hình vẽ bên.\n» Chọn ĐÚNG.\n(c)  -\\frac { \\pi } { 4 }+k2\\pi,k\\in \\mathbb{Z}  là  M  thuộc góc phần tư thứ  III \nTa biết góc lượng giác  k2\\pi  luôn có điểm biểu diễn là  A\\left ( { 1;0 } \\right )  , vì vậy góc lượng giác  -\\frac { \\pi } { 4 }+k2\\pi  có điểm biểu diễn là  M  thuộc góc phần tư thứ IV và thoả mãn  \\widehat { AOM }=\\frac { \\pi } { 4 }  .\n» Chọn ĐÚNG.\n(d)  -\\frac { \\pi } { 6 }+k\\frac { \\pi } { 2 },k\\in \\mathbb{Z}  là bốn điểm  M,N,P,Q  thuộc góc phần tư thứ  I,II,III,IV \nXét góc lượng giác  k\\frac { \\pi } { 2 }  .\nKhi  k=0  thì  k\\frac { \\pi } { 2 }=0  , góc này có điểm biểu diễn là điểm  A\\left ( { 1;0 } \\right )  .\nKhi  k=1  thì  k\\frac { \\pi } { 2 }=\\frac { \\pi } { 2 }  , góc này có điểm biểu diễn là điểm  C\\left ( { 0;1 } \\right )  .\nKhi  k=2  thì  k\\frac { \\pi } { 2 }=\\pi  , góc này có điểm biểu diễn là điểm  B\\left ( { -1;0 } \\right )  .\nKhi  k=3  thì  k\\frac { \\pi } { 2 }=\\frac { 3\\pi } { 2 }  , góc này có điểm biểu diễn là điểm  D\\left ( { 0;-1 } \\right )  .\nNếu  k=4,5,6,…  thì ta thấy rằng các điểm biểu diễn có được vẫn là sự lặp lại của  A,B,C,D  .\nVì vậy điểm biểu diễn của  -\\frac { \\pi } { 6 }+k\\frac { \\pi } { 2 }  là bốn điểm  M,N,P,Q  trên đường tròn lượng giác (xem hình vẽ trên).\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "36 ^ { ^\\circ } +k360 ^ { ^\\circ } ,k\\in \\mathbb{Z}  là điểm  M  thuộc góc phần tư thứ  II",
          "correct": false
        },
        {
          "subId": "b",
          "text": "-60 ^ { ^\\circ } +k180 ^ { ^\\circ } ,k\\in \\mathbb{Z}  là các điểm  M_{ 1 } ,M_{ 2 }  thuộc góc phần tư thứ  II  và  IV",
          "correct": true
        },
        {
          "subId": "c",
          "text": "-\\frac { \\pi } { 4 }+k2\\pi,k\\in \\mathbb{Z}  là  M  thuộc góc phần tư thứ  III",
          "correct": true
        },
        {
          "subId": "d",
          "text": "-\\frac { \\pi } { 6 }+k\\frac { \\pi } { 2 },k\\in \\mathbb{Z}  là bốn điểm  M,N,P,Q  thuộc góc phần tư thứ  I,II,III,IV",
          "correct": true
        }
      ],
      "globalId": 25
    },
    {
      "id": 26,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Trong hình vẽ bên, ta xem hình ảnh đường tròn trên một bánh lái tàu thuỷ tương ứng với một đường tròn lượng giác.",
      "explanation": "(a) Công thức tổng quát biểu diễn góc lượng giác  \\left ( { OA,OB } \\right )  theo đơn vị radian:  \\left ( { OA,OB } \\right )=\\frac { \\pi } { 4 }+k2\\pi(k\\in \\mathbb{Z}); \nTa có:  \\left ( { OA,OB } \\right )=\\frac { \\pi } { 4 }+k2\\pi(k\\in \\mathbb{Z})  ;\n» Chọn ĐÚNG.\n(b) Công thức tổng quát chỉ ra góc lượng giác tương ứng với bốn điểm biểu diễn là  A,C,E,G  theo đơn vị radian là  k\\frac { \\pi } { 3 }(k\\in \\mathbb{Z}) \nTa thấy  A,C,E,G  lần lượt biểu diễn cho các góc lượng giác  0\\text{ rad},\\frac { \\pi } { 2 }rad,\\pirad,\\frac { 3\\pi } { 2 }rad,2\\pirad  ,  \\frac { 5\\pi } { 2 }rad,..  . Tất cả các góc này theo thứ tự chênh lệch nhau  \\frac { \\pi } { 2 }  rad.\nVì vậy công thức duy nhất biểu diễn cho các góc lượng giác ấy là  k\\frac { \\pi } { 2 }(k\\in \\mathbb{Z})  .\n» Chọn SAI.\n(c) Công thức tổng quát chỉ ra góc lượng giác tương ứng với hai điểm biểu diễn là  A,E  theo đơn vị độ là:  k180 ^ { ^\\circ } (k\\in \\mathbb{Z}) \nTa thấy hai điểm  A,E  lần lượt biểu diễn cho các góc lượng giác  0 ^ { ^\\circ } ,180 ^ { ^\\circ } ,360 ^ { ^\\circ } ,540 ^ { ^\\circ } ,… \nTất cả các góc này theo thứ tự chênh lệch nhau  180 ^ { ^\\circ }  .\nVì vậy công thức duy nhất biểu diễn cho các góc lượng giác ấy là  k180 ^ { ^\\circ } (k\\in \\mathbb{Z})  .\n» Chọn ĐÚNG.\n(d) Công thức tổng quát biểu diễn góc lượng giác  \\left ( { OA,OC } \\right )+\\left ( { OC,OH } \\right )  theo đơn vị radian:  \\frac { \\pi } { 4 }+k2\\pi(k\\in \\mathbb{Z}) \nTheo hệ thức Sa-lơ, ta có:\n \\left ( { OA,OB } \\right )+\\left ( { OB,OC } \\right )=\\left ( { OA,OC } \\right )=\\frac { \\pi } { 2 }+k2\\pi(k\\in \\mathbb{Z}) \n \\left ( { OA,OC } \\right )+\\left ( { OC,OH } \\right )=\\left ( { OA,OH } \\right )=-\\frac { \\pi } { 4 }+k2\\pi(k\\in \\mathbb{Z}) \n» Chọn ĐÚNG.",
      "diagram": "assets/diagrams/b1_q26.png",
      "items": [
        {
          "subId": "a",
          "text": "Công thức tổng quát biểu diễn góc lượng giác  \\left ( { OA,OB } \\right )  theo đơn vị radian:  \\left ( { OA,OB } \\right )=\\frac { \\pi } { 4 }+k2\\pi(k\\in \\mathbb{Z});",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Công thức tổng quát chỉ ra góc lượng giác tương ứng với bốn điểm biểu diễn là  A,C,E,G  theo đơn vị radian là  k\\frac { \\pi } { 3 }(k\\in \\mathbb{Z})",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Công thức tổng quát chỉ ra góc lượng giác tương ứng với hai điểm biểu diễn là  A,E  theo đơn vị độ là:  k180 ^ { ^\\circ } (k\\in \\mathbb{Z})",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Công thức tổng quát biểu diễn góc lượng giác  \\left ( { OA,OC } \\right )+\\left ( { OC,OH } \\right )  theo đơn vị radian:  \\frac { \\pi } { 4 }+k2\\pi(k\\in \\mathbb{Z})",
          "correct": true
        }
      ],
      "globalId": 26
    },
    {
      "id": 27,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Đường kính của một bánh xe máy là  60\\,\\,\\left ( { { c }{ m } } \\right )  . Trong mỗi ý ở mỗi câu, hãy chọn đúng hay sai",
      "explanation": "(a) Độ dài cung  40^\\circ  của một bánh xe gần bằng  20,9\\,(\\text{cm})  , kết quả làm tròn đến chữ số thập phân thứ 2.\nĐộ dài cung tròn có số đo  \\alpha\\,\\left ( { rad } \\right )  là  l=\\alpha.R=\\frac { \\pi.40 } { 180 }.R=\\frac { \\pi.40 } { 180 }.30\\simeq 20,94\\,(\\text{cm}) \n» Chọn ĐÚNG.\n(b) Mỗi bánh xe phải lăn một vòng thì người đi xe đi được quãng đường  94,2\\,\\left ( { { c }{ m } } \\right )  , kết quả làm tròn đến chữ số thập phân thứ 1.\nMỗi bánh xe phải lăn một vòng thì người đi xe đi được quãng đường  94,2\\,\\left ( { { c }{ m } } \\right ) \nTa có  R=30 \nChu vi bánh xe là:  l=\\alpha.R=2\\piR=60.\\pi=188,5\\,\\left ( { { c }{ m } } \\right )  .\n» Chọn SAI.\n(c) Để người đi xe đi được quãng đường  2\\,\\left ( { { k }{ m } } \\right )  thì mỗi bánh xe phải lăn  1000  vòng\nĐể người đi xe đi được quãng đường  2\\,\\left ( { { k }{ m } } \\right )  thì mỗi bánh xe phải lăn  1000  vòng\nĐổi:  2\\,\\left ( { { k }{ m } } \\right )=200000\\,\\left ( { { c }{ m } } \\right )  .\nSố vòng bánh xe cần lăn để đi được quãng đường dài  200000\\,\\left ( { { c }{ m } } \\right )  là  \\frac { 200000 } { 188,5 }\\simeq 1061  (vòng).\n» Chọn SAI.\n(d) Nếu xe chạy với vận tốc  50\\,\\left ( { km{ / }h } \\right )  thì trong  5  giây bánh xe quay được gần  36,9  vòng.\nNếu xe chạy với vận tốc  50(km/h)  thì trong  5  giây bánh xe quay được gần  36,9  vòng.\nTrong một phút bánh xe quay được:  \\left[ \\frac { 50.1000 } { 3600 }:(0,6.\\pi) \\right].5\\simeq 36,9  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Độ dài cung  40^\\circ  của một bánh xe gần bằng  20,94\\,(\\text{cm})  , kết quả làm tròn đến chữ số thập phân thứ 2.",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Mỗi bánh xe phải lăn một vòng thì người đi xe đi được quãng đường  94,2\\,\\left ( { { c }{ m } } \\right )  , kết quả làm tròn đến chữ số thập phân thứ 1.",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Để người đi xe đi được quãng đường  2\\,\\left ( { { k }{ m } } \\right )  thì mỗi bánh xe phải lăn  1000  vòng",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Nếu xe chạy với vận tốc  50\\,\\left ( { km{ / }h } \\right )  thì trong  5  giây bánh xe quay được gần  36,9  vòng.",
          "correct": true
        }
      ],
      "globalId": 27
    },
    {
      "id": 28,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Trên đường tròn lượng giác tâm  O  và hệ trục tọa độ  Oxy  cho điểm  M  sao cho  \\widehat { AOM }=\\frac { \\pi } { 5 }  .",
      "explanation": "(a) Số đo của góc lượng giác có tia đầu là  OA  tia cuối là  OM  bằng  \\frac { \\pi } { 5 }+k\\pi { k\\in () }  .\nSố đo của góc lượng giác có tia đầu là  OA  tia cuối là  OM  bằng  \\frac { \\pi } { 5 }+k2\\pi { k\\in () }  .\n» Chọn SAI.\n(b) Góc lượng giác có số đo  \\frac { 11\\pi } { 5 }  có cùng tia đầu và tia cuối với góc lượng giác  \\left ( { OA,OM } \\right )  .\nTa có  \\frac { 11\\pi } { 5 }=\\frac { \\pi } { 5 }+2\\pi\\Rightarrow  Góc lượng giác có số đo  \\frac { 11\\pi } { 5 }  có cùng tia đầu và tia cuối với góc lượng giác có sđ  \\left ( { OA,OM } \\right )=\\frac { \\pi } { 5 }+k2\\pi,\\,\\,k\\in  .\n» Chọn ĐÚNG.\n(c) Trên đường tròn lượng giác biểu diễn góc lượng giác có số đo  \\frac { \\pi } { 5 }+\\frac { k\\pi } { 3 },k\\in  ta được  6  điểm.\nTa có  \\frac { \\pi } { 5 }+\\frac { k\\pi } { 3 }=\\frac { \\pi } { 5 }+\\frac { k2\\pi } { 6 },k\\in  nên khi biểu diễn trên đường tròn lượng giác ta được  6  điểm.\n» Chọn ĐÚNG.\n(d) Khi biểu diễn góc  \\alpha=\\frac { \\pi } { 5 }+\\frac { k\\pi } { 2 },k\\in  lên đường tròn lượng giác ta được tập hợp điểm là một đa giác đều thì diện tích của đa giác đều đó bằng  4  .\nTa có tập hợp điểm biểu diễn của  \\alpha  là hình vuông có đường chéo bằng 2.\nDiện tích của đa giác biểu diễn là  S=\\frac { 1 } { 2 }.2 ^ { 2 } =2  (đvdt).\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Số đo của góc lượng giác có tia đầu là  OA  tia cuối là  OM  bằng  \\frac { \\pi } { 5 }+k\\pi { k\\in () }  .",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Góc lượng giác có số đo  \\frac { 11\\pi } { 5 }  có cùng tia đầu và tia cuối với góc lượng giác  \\left ( { OA,OM } \\right )  .",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Trên đường tròn lượng giác biểu diễn góc lượng giác có số đo  \\frac { \\pi } { 5 }+\\frac { k\\pi } { 3 },k\\in  ta được  6  điểm.",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Khi biểu diễn góc  \\alpha=\\frac { \\pi } { 5 }+\\frac { k\\pi } { 2 },k\\in  lên đường tròn lượng giác ta được tập hợp điểm là một đa giác đều thì diện tích của đa giác đều đó bằng  4  .",
          "correct": false
        }
      ],
      "globalId": 28
    },
    {
      "id": 29,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Từ một vị trí ban đầu trong không gian, vệ tinh  X  chuyển động theo quỹ đạo là một đường tròn quanh Trái Đất và luôn cách tâm Trái Đất một khoảng bằng  9200 km  . Sau 2 giờ thì vệ tinh  X  hoàn thành hết một vòng di chuyển.",
      "explanation": "(a) Quãng đường vệ tinh  X  chuyển động được sau 1 giờ là:  \\approx 28902,65\\,\\left ( { km } \\right )  , kết quả làm tròn đến chữ số thập phân thứ 2.\nMột vòng di chuyển của  X  chính là chu vi đường tròn:\n C=2\\piR=2\\pi.9200=18400\\pi(km){ . }{ } \nSau 1 giờ, vệ tinh di chuyển nửa đường tròn với quãng đường là:\n \\frac { 1 } { 2 }C=9200\\pi\\approx 28902,65( km){ . }{ } \n» Chọn ĐÚNG.\n(b) Quãng đường vệ tinh  X  chuyển động được sau 1,5 giờ là:  \\approx 43353,98\\,\\left ( { km } \\right )  , kết quả làm tròn đến chữ số thập phân thứ 2.\nSau 1,5 giờ, vệ tinh di chuyển được  \\frac { 1,5.1 } { 2 }  đường tròn (hay  \\frac { 3 } { 4 }  đường tròn), quãng đường là:  \\frac { 3 } { 4 }C=\\frac { 3 } { 4 }⋅18400\\pi=13800\\pi\\approx 43353,98( km)  .\n» Chọn ĐÚNG.\n(c) Sau khoảng 5,3 giờ thì  X  di chuyển được quãng đường  240000 \\,\\left ( { km } \\right ) \nSố giờ để vệ tinh  X  thực hiện quãng đường  240000 km  là:  \\frac { 240000 } { 9200\\pi }\\approx 8,3  (giờ).\n» Chọn SAI.\n(d) Giả sử vệ tinh di chuyển theo chiều dương của đường tròn, sau 4,5 giờ thì vệ tinh vẽ nên một góc  \\frac { 9\\pi } { 2 }  rad?\nSau 4,5 giờ thì số vòng tròn mà vệ tinh  X  di chuyển được là:  \\frac { 4,5 } { 2 }=\\frac { 9 } { 4 }  (vòng).\nSố đo góc lượng giác thu được là:  \\frac { 9 } { 4 }⋅2\\pi=\\frac { 9\\pi } { 2 }(rad)  .\n» Chọn ĐÚNG.\nC.Câu hỏi – Trả lời ngắn",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Quãng đường vệ tinh  X  chuyển động được sau 1 giờ là:  \\approx 28902,65\\,\\left ( { km } \\right )  , kết quả làm tròn đến chữ số thập phân thứ 2.",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Quãng đường vệ tinh  X  chuyển động được sau 1,5 giờ là:  \\approx 43353,98( km)  , kết quả làm tròn đến chữ số thập phân thứ 2.",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Sau khoảng 5,3 giờ thì  X  di chuyển được quãng đường  240000 \\,\\left ( { km } \\right )",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Giả sử vệ tinh di chuyển theo chiều dương của đường tròn, sau 4,5 giờ thì vệ tinh vẽ nên một góc  \\frac { 9\\pi } { 2 }  rad?",
          "correct": true
        }
      ],
      "globalId": 29
    },
    {
      "id": 30,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Từ hình vẽ đường tròn lượng giác, công thức số đo tổng quát của góc lượng giác  \\left ( { OA,OM } \\right )  ;  \\left ( { OA,ON } \\right )  có dạng lần lượt là  n ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )  ;  m ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )  với  n;m  là các số nguyên. Tính giá trị  S=\\frac { 1 } { 4 }m ^ { 2 } -n",
      "explanation": "Ta có:  \\left ( { OA,OM } \\right )=225 ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow n=225  ;\n \\left ( { OA,ON } \\right )=-60 ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow m=-60  .\nVậy  S=\\frac { 1 } { 4 }\\left ( { -60 } \\right ) ^ { 2 } -225=675",
      "diagram": "assets/diagrams/b1_q30.png",
      "correctAnswer": "675",
      "globalId": 30
    },
    {
      "id": 31,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Từ hình vẽ đường tròn lượng giác, công thức số đo tổng quát của góc lượng giác  \\left ( { OA,OM } \\right )  ;  \\left ( { OA,ON } \\right )  có dạng lần lượt là  \\frac { n } { m }\\pi+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  ;  -\\frac { p } { q }\\pi+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  với  m;n;p;q  là các số nguyên và  \\frac { n } { m };\\frac { p } { q }  là phân số tối giản. Tính giá trị  T=\\left ( { m+p } \\right )-\\left ( { n+q } \\right )",
      "explanation": "Ta có:  \\frac { 29\\pi } { 12 }=\\frac { 5\\pi+24\\pi } { 12 }=\\frac { 5\\pi } { 12 }+2\\pi  , vì vậy  \\left ( { OA,OM } \\right )=\\frac { 5\\pi } { 12 }+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow \\left \\{ \\begin{array}{l} n=5 \\\\ m=12 \\end{array} \\right.  .\n \\left ( { OA,ON } \\right )=-\\frac { 3\\pi } { 4 }+k2\\pi\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow \\left \\{ \\begin{array}{l} p=3 \\\\ q=4 \\end{array} \\right.  .\nVậy  T=\\left ( { m+p } \\right )-\\left ( { n+q } \\right )=\\left ( { 12+3 } \\right )-\\left ( { 5+4 } \\right )=6",
      "diagram": "assets/diagrams/b1_q31.png",
      "correctAnswer": "6",
      "globalId": 31
    },
    {
      "id": 32,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Một bánh xe có đường kính kể cả lốp xe là  55 \\text{cm}  . Nếu xe chạy với tốc độ  50 km/h  thì trong một giây bánh xe quay được bao nhiêu vòng? (Kết quả được làm tròn đến hàng phần trăm).",
      "explanation": "Tốc độ xe là:  50 km/h=\\frac { 50.100000 } { 3600 } \\text{cm}/s=\\frac { 12500 } { 9 } \\text{cm}/s  .\nMỗi vòng bánh  x  e có chiều dài:  2\\piR=2\\pi⋅\\frac { 55 } { 2 }=55\\pi(\\text{cm})  .\nVậy mỗi giây thì bánh xe lăn được số vòng là  \\frac { 12500 } { 9 }:(55\\pi)\\approx 8,04  (vòng).",
      "diagram": null,
      "correctAnswer": "8,04",
      "globalId": 32
    },
    {
      "id": 33,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Một bánh xe đạp quay được 25 vòng trong 10 giây. Tính độ dài quãng đường mà người đi xe thực hiện được trong 2,35 phút, biết rằng bán kính bánh xe bằng  340 mm  . (Tính theo đơn vị mét, kết quả được làm tròn đến hàng đơn vị).",
      "explanation": "Sau 2,35 phút (141 giây), số vòng mà bánh xe thực hiện được là:  \\frac { 41.25 } { 0 }=352,5  vòng.\nBán kính bánh xe:  R=340 mm=0,34 m  .\nQuãng đường mà người đi xe đạp thực hiện được sau 2,35 phút là:\n 352,5.2\\piR=352,5.2\\pi.0,34=\\frac { 2397 } { 10 }\\pi\\approx 753( m)  .",
      "diagram": null,
      "correctAnswer": "753",
      "globalId": 33
    },
    {
      "id": 34,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Một cái đồng hồ treo tường có đường kính bằng  60 \\text{cm}  , ta xem vành ngoài chiếc đồng hồ là một đường tròn với các điểm  A,B,C  lần lượt tương ứng với vị trí các số  2,9,4  . Tính tổng độ dài các cung nhỏ  AB  và  AC  (kết quả tính theo đơn vị centimét và làm tròn đến hàng phần trăm).",
      "explanation": "Bán kính đường tròn là  R=\\frac { 60 } { 2 }=30 \\text{cm}  .\nTa có:  \\widehat { AOB }=150 ^ { ^\\circ } =\\frac { 150\\pi } { 180 }rad=\\frac { 5\\pi } { 6 }rad  ; suy ra độ dài cung nhỏ  AB  là  l_{ \\overset ⌢ { AB } } =R⋅ \\widehat { AOB }=30⋅\\frac { 5\\pi } { 6 }=25\\pi  .\nTa có:  \\widehat { AOC }=60 ^ { ^\\circ } =\\frac { 60\\pi } { 180 }rad=\\frac { \\pi } { 3 }rad  ; suy ra độ dài cung nhỏ  AC  là\n l_{ \\overset ⌢ { AC } } =R⋅ \\widehat { AOC }=30⋅\\frac { \\pi } { 3 }=10\\pi \nKhi đó  l_{ \\overset ⌢ { AB } } +l_{ \\overset ⌢ { AC } } =25\\pi+10\\pi=35\\pi\\approx 109,96",
      "diagram": null,
      "correctAnswer": "109,96",
      "globalId": 34
    },
    {
      "id": 35,
      "lesson": "b1",
      "lessonTitle": "Bài 1. Góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Gọi  M,N,P  là các điểm trên đường tròn lượng giác sao cho số đo các góc lượng giác  \\left ( { OA,OM } \\right ),\\left ( { OA,ON } \\right ),  \\left ( { OA,OP } \\right )  lần lượt bằng  \\frac { \\pi } { 2 },\\frac { 7\\pi } { 6 },-\\frac { \\pi } { 6 }  và  MN=NP=2  . Tính diện tích tam giác  MNP  . Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "Theo hệ thức Sa-lơ, ta có:\n \\left ( { OA,OM } \\right )+\\left ( { OM,ON } \\right )=\\left ( { OA,ON } \\right )\\Leftrightarrow \\frac { \\pi } { 2 }+\\left ( { OM,ON } \\right )=\\frac { 7\\pi } { 6 }\\Leftrightarrow \\left ( { OM,ON } \\right )=\\frac { 2\\pi } { 3 }. \nTa có  \\widehat { MON }=120 ^ { ^\\circ } \\Rightarrow \\widehat { MPN }=60 ^ { ^\\circ }  (1) (số đo góc nội tiếp bằng nửa số đo góc ở tâm chắn cùng một cung).\nTa có:  \\left ( { OA,OP } \\right )=-\\frac { \\pi } { 6 }+2\\pi=\\frac { 11\\pi } { 6 }  .\nTheo hệ thức Sa-lơ:\n \\left ( { OA,ON } \\right )+\\left ( { ON,OP } \\right )=\\left ( { OA,OP } \\right )  \\Leftrightarrow \\frac { 7\\pi } { 6 }+\\left ( { ON,OP } \\right )=\\frac { 11\\pi } { 6 }\\Leftrightarrow \\left ( { ON,OP } \\right )=\\frac { 2\\pi } { 3 }  .\nTa có  \\widehat { NOP }=120 ^ { ^\\circ } \\Rightarrow \\widehat { NMP }=60 ^ { ^\\circ }  (2) (số đo góc nội tiếp bằng nửa số đo góc ở tâm chắn cùng một cung).\nTừ (1) và (2)  \\Rightarrow \\DeltaMNP  là tam giác đều.\nVậy  S_{ MNP } =MN.NP.\\sin\\left ( { \\widehat { MNP } } \\right )=2.2.\\sin\\left ( { 60^\\circ } \\right )=2\\sqrt[] { 3 }\\approx 3,46",
      "diagram": null,
      "correctAnswer": "3,46",
      "globalId": 35
    },
    {
      "id": 1,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\frac { \\pi } { 2 } < a < \\pi  . Kết quả đúng là",
      "explanation": "Vì  \\frac { \\pi } { 2 } < a < \\pi  \\Rightarrow sina>0  ,  cosa < 0  .",
      "diagram": null,
      "options": [
        "A.  sina>0  ,  cosa>0",
        "B.  sina < 0  ,  cosa < 0",
        "C.  sina>0  ,  cosa < 0",
        "D.  sina < 0  ,  cosa>0"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 36
    },
    {
      "id": 2,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các đẳng thức sau, đẳng thức nào đúng?",
      "explanation": "Theo công thức.",
      "diagram": null,
      "options": [
        "A.  \\sin\\left ( { 180 ^ { 0 } –a } \\right )=–cosa",
        "B.  \\sin\\left ( { 180 ^ { 0 } –a } \\right )=-sina",
        "C.  \\sin\\left ( { 180 ^ { 0 } –a } \\right )=sina",
        "D.  \\sin\\left ( { 180 ^ { 0 } –a } \\right )=cosa"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 37
    },
    {
      "id": 3,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Chọn đẳng thức sai trong các đẳng thức sau",
      "explanation": "",
      "diagram": null,
      "options": [
        "A.  \\sin\\left ( { \\frac { \\pi } { 2 }-x } \\right )=cosx",
        "B.  \\sin\\left ( { \\frac { \\pi } { 2 }+x } \\right )=cosx",
        "C.  \\tan\\left ( { \\frac { \\pi } { 2 }-x } \\right )=cotx",
        "D.  \\tan\\left ( { \\frac { \\pi } { 2 }+x } \\right )=cotx"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 38
    },
    {
      "id": 4,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho biết  \\tan\\alpha=\\frac { 1 } { 2 }  . Tính  \\cot\\alpha",
      "explanation": "Ta có:  \\tan\\alpha.\\cot\\alpha=1  \\Rightarrow \\cot\\alpha=\\frac { 1 } { \\tan\\alpha }=\\frac { 1 } { \\frac { 1 } { 2 } }=2  .",
      "diagram": null,
      "options": [
        "A.  \\cot\\alpha=2",
        "B.  \\cot\\alpha=\\frac { 1 } { 4 }",
        "C.  \\cot\\alpha=\\frac { 1 } { 2 }",
        "D.  \\cot\\alpha=\\sqrt[] { 2 }"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 39
    },
    {
      "id": 5,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\frac { \\pi } { 2 } < a < \\pi  . Khẳng định nào sau đây đúng ?",
      "explanation": "",
      "diagram": null,
      "options": [
        "A.  sina < 0",
        "B.  \\tan\\alpha>0",
        "C.  \\cot\\alpha>0",
        "D.  cosa < 0"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 40
    },
    {
      "id": 6,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Biết  \\tan\\alpha=2  và  \\pi < a < \\frac { 3\\pi } { 2 }  . Tính  \\sin\\alpha  .",
      "explanation": "Vì  \\tan\\alpha=2\\Rightarrow \\sin\\alpha=2cos\\alpha  .\nTa có  \\sin ^ { 2 } \\alpha+\\cos ^ { 2 } \\alpha=1\\Rightarrow 5cos ^ { 2 } \\alpha=1\\Leftrightarrow \\cos\\alpha=\\pm \\frac { 1 } { \\sqrt[] { 5 } }  .\nDo  \\pi < a < \\frac { 3\\pi } { 2 }\\Rightarrow \\cos\\alpha < 0\\Rightarrow \\cos\\alpha=-\\frac { 1 } { \\sqrt[] { 5 } }\\Rightarrow \\sin\\alpha=-\\frac { 2 } { \\sqrt[] { 5 } }  .",
      "diagram": null,
      "options": [
        "A.  -\\frac { 2\\sqrt[] { 5 } } { 5 }",
        "B.  \\frac { 2\\sqrt[] { 5 } } { 5 }",
        "C.  -\\frac { \\sqrt[] { 5 } } { 5 }",
        "D.  \\frac { \\sqrt[] { 5 } } { 5 }"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 41
    },
    {
      "id": 7,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Biết  \\tan\\alpha=-3  . Tính  \\tan\\left ( { \\alpha-\\frac { 7\\pi } { 2 } } \\right )  .",
      "explanation": "\\tan\\left ( { \\alpha-\\frac { 7\\pi } { 2 } } \\right )=\\tan\\left ( { \\alpha-\\frac { \\pi } { 2 }-3\\pi } \\right )=\\tan\\left ( { \\alpha-\\frac { \\pi } { 2 } } \\right )=-\\tan\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )=-\\cot\\alpha=-\\frac { 1 } { \\tan\\alpha }=\\frac { 1 } { 3 }  .",
      "diagram": null,
      "options": [
        "A.  -\\frac { 1 } { 3 }",
        "B.  \\frac { 1 } { 3 }",
        "C. 3",
        "D.  -3"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 42
    },
    {
      "id": 8,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các công thức sau, công thức nào sai?",
      "explanation": "D sai vì:  \\tan\\alpha.\\cot\\alpha=1\\,\\left ( { \\alpha\\ne \\frac { k\\pi } { 2 },\\,k\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  \\sin ^ { 2 } \\alpha+\\cos ^ { 2 } \\alpha=1",
        "B.  1+\\tan ^ { 2 } \\alpha=\\frac { 1 } { \\cos ^ { 2 } \\alpha }\\,\\left ( { \\alpha\\ne \\frac { \\pi } { 2 }+k\\pi,\\,k\\in \\mathbb{Z} } \\right )",
        "C.  1+\\cot ^ { 2 } \\alpha=\\frac { 1 } { \\sin ^ { 2 } \\alpha }\\ \\left ( { \\alpha\\ne k\\pi,\\,k\\in \\mathbb{Z} } \\right )",
        "D.  \\tan\\alpha+\\cot\\alpha=1\\,\\left ( { \\alpha\\ne \\frac { k\\pi } { 2 },\\,k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 43
    },
    {
      "id": 9,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\sin\\alpha=\\frac { 3 } { 5 }  và  \\frac { \\pi } { 2 } < \\alpha < \\pi  . Giá trị của  { c }{ o }{ s }\\alpha  là:",
      "explanation": "Ta có:  \\sin ^ { 2 } \\alpha+\\cos ^ { 2 } \\alpha=1  \\Rightarrow \\cos ^ { 2 } \\alpha{ = }{ 1 }-{ s }{ i }{ n } ^ { 2 } \\alpha=1-\\frac { 9 } { 25 }=\\frac { 16 } { 25 }  \\Leftrightarrow \\left[ \\cos\\alpha=\\frac { 4 } { 5 } \\\\ \\cos\\alpha=-\\frac { 4 } { 5 } \\right.  .\nVì  \\frac { \\pi } { 2 } < \\alpha < \\pi  \\Rightarrow { c }{ o }{ s }\\alpha=-\\frac { 4 } { 5 }  .",
      "diagram": null,
      "options": [
        "A.  \\frac { 4 } { 5 }",
        "B.  -\\frac { 4 } { 5 }",
        "C.  \\pm \\frac { 4 } { 5 }",
        "D.  \\frac { 16 } { 25 }"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 44
    },
    {
      "id": 10,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\cos\\alpha=\\frac { 4 } { 5 }  với  0 < \\alpha < \\frac { \\pi } { 2 }  . Tính  \\sin\\alpha  .",
      "explanation": "Ta có:  \\sin ^ { 2 } \\alpha=1-\\cos ^ { 2 } \\alpha=1-\\left ( { \\frac { 4 } { 5 } } \\right ) ^ { 2 } =\\frac { 9 } { 25 }  \\Rightarrow \\sin\\alpha=\\pm \\frac { 3 } { 5 }  .\nDo  0 < \\alpha < \\frac { \\pi } { 2 }  nên  \\sin\\alpha>0  . Suy ra,  \\sin\\alpha=\\frac { 3 } { 5 }  .",
      "diagram": null,
      "options": [
        "A.  \\sin\\alpha=\\frac { 1 } { 5 }",
        "B.  \\sin\\alpha=-\\frac { 1 } { 5 }",
        "C.  \\sin\\alpha=\\frac { 3 } { 5 }",
        "D.  \\sin\\alpha=\\pm \\frac { 3 } { 5 }"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 45
    },
    {
      "id": 11,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Rút gọn biểu thức  P=\\sin\\left ( { a+\\frac { \\pi } { 4 } } \\right )\\sin\\left ( { a-\\frac { \\pi } { 4 } } \\right )  .",
      "explanation": "Ta có  P=\\sin\\left ( { a+\\frac { \\pi } { 4 } } \\right )\\sin\\left ( { a-\\frac { \\pi } { 4 } } \\right )\\,=\\,\\frac { 1 } { 2 }\\left ( { { c }{ o }{ s }\\frac { \\pi } { 2 }-cos2a } \\right )\\,=\\,\\frac { -1 } { 2 }cos2a  .",
      "diagram": null,
      "options": [
        "A.  -\\frac { 3 } { 2 }cos2a",
        "B.  \\frac { 1 } { 2 }cos2a",
        "C.  -\\frac { 2 } { 3 }cos2a",
        "D.  -\\frac { 1 } { 2 }cos2a"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 46
    },
    {
      "id": 12,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Giá trị biểu thức  P=\\sin ^ { 2 } \\frac { \\pi } { 6 }+\\sin ^ { 2 } \\frac { \\pi } { 3 }+\\sin ^ { 2 } \\frac { \\pi } { 4 }+\\sin ^ { 2 } \\frac { 9\\pi } { 4 }+\\tan\\frac { \\pi } { 6 }\\cot\\frac { \\pi } { 6 }  bằng",
      "explanation": "Ta có  \\sin\\frac { \\pi } { 6 }=\\frac { 1 } { 2 }\\Rightarrow \\sin ^ { 2 } \\frac { \\pi } { 6 }=\\frac { 1 } { 4 }  ,  \\sin\\frac { \\pi } { 3 }=\\frac { \\sqrt[] { 3 } } { 2 }\\Rightarrow \\sin ^ { 2 } \\frac { \\pi } { 3 }=\\frac { 3 } { 4 }  ,  \\sin\\frac { \\pi } { 4 }=\\frac { \\sqrt[] { 2 } } { 2 }\\Rightarrow \\sin ^ { 2 } \\frac { \\pi } { 4 }=\\frac { 1 } { 2 }  ,\n \\sin\\frac { 9\\pi } { 4 }=\\sin\\left ( { \\frac { \\pi } { 4 }+2\\pi } \\right )=\\sin\\frac { \\pi } { 4 }=\\frac { \\sqrt[] { 2 } } { 2 }  \\Rightarrow \\sin ^ { 2 } \\frac { 9\\pi } { 4 }=\\frac { 1 } { 2 }  ,  \\tan\\frac { \\pi } { 6 }\\cot\\frac { \\pi } { 6 }=1  .\nSuy ra  P=\\frac { 1 } { 4 }+\\frac { 3 } { 4 }+\\frac { 1 } { 2 }+\\frac { 1 } { 2 }+1=3  .",
      "diagram": null,
      "options": [
        "A.  2",
        "B.  4",
        "C.  3",
        "D.  1"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 47
    },
    {
      "id": 13,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\sin\\alpha=\\frac { 3 } { 5 }  và  \\frac { \\pi } { 2 } < \\alpha < \\pi  . Giá trị của  { c }{ o }{ s }\\alpha  là:",
      "explanation": "Ta có:  \\sin ^ { 2 } \\alpha+\\cos ^ { 2 } \\alpha=1  \\Rightarrow \\cos ^ { 2 } \\alpha{ = }{ 1 }-{ s }{ i }{ n } ^ { 2 } \\alpha=1-\\frac { 9 } { 25 }=\\frac { 16 } { 25 }  \\Leftrightarrow \\left[ \\cos\\alpha=\\frac { 4 } { 5 } \\\\ \\cos\\alpha=-\\frac { 4 } { 5 } \\right.  .\nVì  \\frac { \\pi } { 2 } < \\alpha < \\pi  \\Rightarrow { c }{ o }{ s }\\alpha=-\\frac { 4 } { 5 }  .",
      "diagram": null,
      "options": [
        "A.  \\frac { 4 } { 5 }",
        "B.  -\\frac { 4 } { 5 }",
        "C.  \\pm \\frac { 4 } { 5 }",
        "D.  \\frac { 16 } { 25 }"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 48
    },
    {
      "id": 14,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\cos\\alpha=\\frac { 4 } { 5 }  với  0 < \\alpha < \\frac { \\pi } { 2 }  . Tính  \\sin\\alpha  .",
      "explanation": "Ta có:  \\sin ^ { 2 } \\alpha=1-\\cos ^ { 2 } \\alpha=1-\\left ( { \\frac { 4 } { 5 } } \\right ) ^ { 2 } =\\frac { 9 } { 25 }  \\Rightarrow \\sin\\alpha=\\pm \\frac { 3 } { 5 }  .\nDo  0 < \\alpha < \\frac { \\pi } { 2 }  nên  \\sin\\alpha>0  . Suy ra,  \\sin\\alpha=\\frac { 3 } { 5 }  .",
      "diagram": null,
      "options": [
        "A.  \\sin\\alpha=\\frac { 1 } { 5 }",
        "B.  \\sin\\alpha=-\\frac { 1 } { 5 }",
        "C.  \\sin\\alpha=\\frac { 3 } { 5 }",
        "D.  \\sin\\alpha=\\pm \\frac { 3 } { 5 }"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 49
    },
    {
      "id": 15,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\tan\\alpha=-\\frac { 4 } { 5 }  với  \\frac { { 3 }\\pi } { { 2 } } < \\alpha < 2\\pi  . Khi đó:",
      "explanation": "1+\\tan ^ { 2 } \\alpha=\\frac { 1 } { \\cos ^ { 2 } \\alpha }  \\Rightarrow 1+\\frac { 16 } { 25 }=\\frac { 1 } { \\cos ^ { 2 } \\alpha }  \\Rightarrow \\frac { 1 } { \\cos ^ { 2 } \\alpha }=\\frac { 41 } { 25 }  \\Rightarrow \\cos ^ { 2 } \\alpha=\\frac { 25 } { 41 }  \\Rightarrow \\cos\\alpha=\\pm \\frac { 5 } { \\sqrt[] { 41 } } \n \\sin ^ { 2 } \\alpha=1-\\cos ^ { 2 } \\alpha=1-\\frac { 25 } { 41 }=\\frac { 16 } { 41 }  \\to \\sin\\alpha=\\pm \\frac { 4 } { \\sqrt[] { 41 } } \n \\frac { 3\\pi } { 2 } < \\alpha < 2\\pi  \\Rightarrow \\left[ \\cos\\alpha>0\\to \\cos\\alpha=\\frac { 5 } { \\sqrt[] { 41 } } \\\\ \\sin\\alpha < 0\\to \\sin\\alpha=-\\frac { 4 } { \\sqrt[] { 41 } } \\right.  .",
      "diagram": null,
      "options": [
        "A.  \\sin\\alpha=-\\frac { 4 } { \\sqrt[] { 41 } }  ,  \\cos\\alpha=-\\frac { 5 } { \\sqrt[] { 41 } }",
        "B.  \\sin\\alpha=\\frac { 4 } { \\sqrt[] { 41 } }  ,  \\cos\\alpha=\\frac { 5 } { \\sqrt[] { 41 } }",
        "C.  \\sin\\alpha=-\\frac { 4 } { \\sqrt[] { 41 } }  \\cos\\alpha=\\frac { 5 } { \\sqrt[] { 41 } }",
        "D.  \\sin\\alpha=\\frac { 4 } { \\sqrt[] { 41 } }  ,  \\cos\\alpha=-\\frac { 5 } { \\sqrt[] { 41 } }"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 50
    },
    {
      "id": 16,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trên nửa đường tròn đơn vị cho góc  \\alpha  sao cho  \\sin\\alpha=\\frac { 2 } { 3 }  và  \\cos\\alpha < 0  . Tính  \\tan\\alpha  .",
      "explanation": "Có  \\cos ^ { 2 } \\alpha=1-\\sin ^ { 2 } \\alpha  , mà  \\sin\\alpha=\\frac { 2 } { 3 }  .\nSuy ra  \\cos ^ { 2 } \\alpha=\\frac { 5 } { 9 }  , có  \\cos\\alpha < 0  \\Leftrightarrow \\cos\\alpha=-\\frac { \\sqrt[] { 5 } } { 3 }  .\nCó  \\tan\\alpha=\\frac { \\sin\\alpha } { \\cos\\alpha }=-\\frac { 2\\sqrt[] { 5 } } { 5 }  .",
      "diagram": null,
      "options": [
        "A.  \\frac { -2\\sqrt[] { 5 } } { 5 }",
        "B.  \\frac { 2\\sqrt[] { 5 } } { 5 }",
        "C.  \\frac { -2 } { 5 }",
        "D.  1"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 51
    },
    {
      "id": 17,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  \\sin\\alpha=\\frac { 1 } { 3 }  và  \\frac { \\pi } { 2 } < \\alpha < \\pi  . Khi đó  \\cos\\alpha  có giá trị là.",
      "explanation": "Vì  \\frac { \\pi } { 2 } < \\alpha < \\pi  nên  \\cos\\alpha < 0  .\nTa có  \\sin ^ { 2 } \\alpha+{ c }{ o }{ s } ^ { 2 } \\alpha=1\\Rightarrow { c }{ o }{ s } ^ { 2 } \\alpha=1-\\sin ^ { 2 } \\alpha=\\frac { 8 } { 9 }  \\Rightarrow \\left[ \\cos\\alpha=\\sqrt[] { \\frac { 8 } { 9 } }=\\frac { 2\\sqrt[] { 2 } } { 3 }\\left ( { l } \\right ) \\\\ \\cos\\alpha=-\\sqrt[] { \\frac { 8 } { 9 } }=-\\frac { 2\\sqrt[] { 2 } } { 3 }\\left ( { tm } \\right ) \\right.",
      "diagram": null,
      "options": [
        "A.  \\cos\\alpha=-\\frac { 2 } { 3 }",
        "B.  \\cos\\alpha=\\frac { 2\\sqrt[] { 2 } } { 3 }",
        "C.  \\cos\\alpha=\\frac { 8 } { 9 }",
        "D.  \\cos\\alpha=-\\frac { 2\\sqrt[] { 2 } } { 3 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 52
    },
    {
      "id": 18,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  P=\\frac { 3sinx-cosx } { sinx+2cosx }  với  tanx=2  . Giá trị của  P  bằng",
      "explanation": "Ta có  P=\\frac { 3sinx-cosx } { sinx+2cosx }=\\frac { 3tanx-1 } { tanx+2 }=\\frac { 3.2-1 } { 2+2 }=\\frac { 5 } { 4 }  .",
      "diagram": null,
      "options": [
        "A.  \\frac { 8 } { 9 }",
        "B.  -\\frac { 2\\sqrt[] { 2 } } { 3 }",
        "C.  \\frac { \\sqrt[] { 8 } } { 9 }",
        "D.  \\frac { 5 } { 4 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 53
    },
    {
      "id": 19,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho  sinx=\\frac { 1 } { 2 }  và  cosx  nhận giá trị âm, giá trị của biểu thức  A=\\frac { sinx-cosx } { sinx+cosx }  bằng",
      "explanation": "Vì  cosx  nhận giá trị âm nên ta có  cosx=-\\sqrt[] { 1-\\sin ^ { 2 } x }=-\\sqrt[] { 1-\\frac { 1 } { 4 } }=-\\frac { \\sqrt[] { 3 } } { 2 } \nSuy ra:  A=\\frac { \\frac { 1 } { 2 }+\\frac { \\sqrt[] { 3 } } { 2 } } { \\frac { 1 } { 2 }-\\frac { \\sqrt[] { 3 } } { 2 } }=\\frac { 1+\\sqrt[] { 3 } } { 1-\\sqrt[] { 3 } }=-2-\\sqrt[] { 3 }  .",
      "diagram": null,
      "options": [
        "A.  -2-\\sqrt[] { 3 }",
        "B.  2+\\sqrt[] { 3 }",
        "C.  -2+\\sqrt[] { 3 }",
        "D.  2-\\sqrt[] { 3 }"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 54
    },
    {
      "id": 20,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Biểu thức  P=\\frac { 3 } { \\cos ^ { 4 } x }-2tan ^ { 4 } x  trên  \\left[ 0;\\frac { \\pi } { 3 } \\right]  đạt giá trị lớn nhất tại",
      "explanation": "Ta có  y=3\\left ( { 1+\\tan ^ { 2 } x } \\right ) ^ { 2 } -2tan ^ { 4 } x\\,\\,\\,\\,=\\tan ^ { 4 } x+6tan ^ { 2 } x+3 \nĐặt  \\tan ^ { 2 } x=u;\\,\\,u\\in \\left[ 0;3 \\right]  vì  x\\in \\left[ 0;\\frac { \\pi } { 3 } \\right] \nXét hàm số:  y=u ^ { 2 } +6u+3  trên  \\left[ 0;3 \\right]  .\nTa có bảng biến thiên\n \\mathop { max } \\limits_{ \\left[ 0;3 \\right] } f\\left ( { u } \\right )=30  và  \\,\\mathop { max } \\limits_{ \\left[ 0;\\frac { \\pi } { 3 } \\right] } y=30\\Leftrightarrow x=\\frac { \\pi } { 3 }  .",
      "diagram": null,
      "options": [
        "A.  x=0",
        "B.  x=\\frac { \\pi } { 3 }",
        "C.  x=\\frac { \\pi } { 6 }",
        "D.  x=\\frac { \\pi } { 12 }"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 55
    },
    {
      "id": 21,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một vật dao động điều hòa theo phương trình  x=1,25cos\\left ( { 2\\pit-\\frac { \\pi } { 12 } } \\right )\\,\\,(\\text{cm})\\,  (  t  đo bằng giây). Tính quãng đường vật đi được sau thời gian  t=2,5\\,s  kể từ lúc bắt đầu dao động.",
      "explanation": "Ta có:  x=1,25cos\\left ( { 2\\pit-\\frac { \\pi } { 12 } } \\right )\\,\\,(\\text{cm})\\, \nVới  t=2,5\\,\\,s\\Rightarrow \\left | { x } \\right |=\\left | { 1,25.\\cos\\left ( { 5\\pi-\\frac { \\pi } { 12 } } \\right ) } \\right |\\approx 1,21\\,(\\text{cm}). \nVậy quãng đường vật đi được gần bằng  1,21\\,(\\text{cm}).",
      "diagram": null,
      "options": [
        "A.  4,21\\left ( { \\text{cm} } \\right )",
        "B.  3,21\\left ( { \\text{cm} } \\right )",
        "C.  1,21\\left ( { \\text{cm} } \\right )",
        "D.  2,21\\left ( { \\text{cm} } \\right )  ."
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 56
    },
    {
      "id": 22,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Hằng ngày, mực nước của một con kênh lên xuống theo thủy triều. Độ sâu h(m) của con kênh tính theo thời gian  t  (giờ) trong một ngày được cho bởi công thức:  h=\\frac { 1 } { 2 }\\cos\\left ( { \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 } } \\right )+3,\\,\\,\\,0\\le \\,\\,\\,t\\,\\,\\le 24.  Hỏi tại thời nào trong ngày thì mực nước của con kênh cao nhất?",
      "explanation": "Ta có  h=\\frac { 1 } { 2 }\\cos\\left ( { \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 } } \\right )+3,\\,\\,\\,0\\le \\,\\,\\,t\\,\\,\\le 24. \nTa thấy  h  đạt giá trị lớn nhất khi  \\cos\\left ( { \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 } } \\right )=1 \n \\cos\\left ( { \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 } } \\right )=1\\Leftrightarrow \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 }=2k\\pi\\Leftrightarrow t=-2+16k \nDo  t>0  và  0\\le \\,\\,\\,t\\,\\,\\le 24  nên  t=14 \nVậy lúc 14h thì mực nước của con kênh cao nhất.\nB.Câu hỏi – Trả lời Đúng/sai",
      "diagram": null,
      "options": [
        "A.  10\\left ( { h } \\right )",
        "B.  12\\left ( { h } \\right )",
        "C.  14\\left ( { h } \\right )",
        "D.  15\\left ( { h } \\right )  ."
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 57
    },
    {
      "id": 23,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ }  . Xét được dấu của các biểu thức sau. Khi đó:",
      "explanation": "(a)  A=\\sin\\left ( { \\alpha+90 ^ { ^\\circ } } \\right )>0  ;\nTa có:  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ } \\Rightarrow 90 ^ { ^\\circ } < \\alpha+90 ^ { ^\\circ } < 180 ^ { ^\\circ } \n \\Rightarrow \\sin\\left ( { \\alpha+90 ^ { ^\\circ } } \\right )>0{ . }{ } \n» Chọn ĐÚNG.\n(b)  B=\\cos\\left ( { \\alpha-45 ^ { ^\\circ } } \\right )>0  ;\nTa có:  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ } \\Rightarrow -45 ^ { ^\\circ } < \\alpha-45 ^ { ^\\circ } < 45 ^ { ^\\circ } \n \\Rightarrow \\cos\\left ( { \\alpha-45 ^ { ^\\circ } } \\right )>0{ . }{ } \n» Chọn ĐÚNG.\n(c)  C=\\tan\\left ( { 270 ^ { ^\\circ } -\\alpha } \\right ) < 0  ;\nTa có:  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ } \\Rightarrow -90 ^ { ^\\circ } < -\\alpha < 0 ^ { ^\\circ } \n \\Rightarrow 270 ^ { ^\\circ } +\\left ( { -90 ^ { ^\\circ } } \\right ) < 270 ^ { ^\\circ } +(-\\alpha) < 270 ^ { ^\\circ } +0 ^ { ^\\circ } \n \\Rightarrow 180 ^ { ^\\circ } < 270 ^ { ^\\circ } -\\alpha < 270 ^ { ^\\circ } \\Rightarrow \\tan\\left ( { 270 ^ { ^\\circ } -\\alpha } \\right )>0 \n» Chọn SAI.\n(d)  D=\\cos\\left ( { 2\\alpha+90 ^ { ^\\circ } } \\right )>0  .\nTa có:  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ } \\Rightarrow 90 ^ { ^\\circ } < 2\\alpha+90 ^ { ^\\circ } < 270 ^ { ^\\circ } \n \\Rightarrow \\cos\\left ( { 2\\alpha+270 ^ { ^\\circ } } \\right ) < 0 \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "A=\\sin\\left ( { \\alpha+90 ^ { ^\\circ } } \\right )>0",
          "correct": true
        },
        {
          "subId": "b",
          "text": "B=\\cos\\left ( { \\alpha-45 ^ { ^\\circ } } \\right )>0",
          "correct": true
        },
        {
          "subId": "c",
          "text": "C=\\tan\\left ( { 270 ^ { ^\\circ } -\\alpha } \\right ) < 0",
          "correct": false
        },
        {
          "subId": "d",
          "text": "D=\\cos\\left ( { 2\\alpha+90 ^ { ^\\circ } } \\right )>0",
          "correct": false
        }
      ],
      "globalId": 58
    },
    {
      "id": 24,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho  tanx=-2  . Tính được các biểu thức  A_{ 1 } =\\frac { 5cotx+4tanx } { 5cotx-4tanx },A_{ 2 } =\\frac { 2sinx+cosx } { cosx-3sinx }  , khi đó:",
      "explanation": "(a)  cotx=-\\frac { 1 } { 2 } \nTa có:  tanx=-2\\Rightarrow cotx=-\\frac { 1 } { 2 } \n» Chọn ĐÚNG.\n(b) Vì  tanx=-2  nên  cosx=0 \nVì  tanx=-2  nên  cosx\\ne 0  .\n» Chọn SAI.\n(c)  A_{ 1 } =-\\frac { 21 } { 11 } \n \\Rightarrow A_{ 1 } =\\frac { -\\frac { 5 } { 2 }+4⋅\\left ( { -2 } \\right ) } { -\\frac { 5 } { 2 }-4⋅\\left ( { -2 } \\right ) }=-\\frac { 21 } { 11 }  .\n» Chọn ĐÚNG.\n(d)  A_{ 2 } =\\frac { 3 } { 7 } \nChia tử và mẫu của biểu thức  A_{ 2 }  cho  cosx  , ta được:\n A_{ 2 } =\\frac { \\frac { 2sinx } { cosx }+\\frac { cosx } { cosx } } { \\frac { cosx } { cosx }-\\frac { 3sinx } { cosx } }=\\frac { 2tanx+1 } { 1-3tanx }=\\frac { 2\\left ( { -2 } \\right )+1 } { 1-3\\left ( { -2 } \\right ) }=-\\frac { 3 } { 7 } \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "cotx=-\\frac { 1 } { 2 }",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Vì  tanx=-2  nên  cosx=0",
          "correct": false
        },
        {
          "subId": "c",
          "text": "A_{ 1 } =-\\frac { 21 } { 11 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "A_{ 2 } =\\frac { 3 } { 7 }",
          "correct": false
        }
      ],
      "globalId": 59
    },
    {
      "id": 25,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho  cotx=2  . Tính được các biểu thức  B_{ 1 } =\\frac { 2sinx+3cosx } { 3sinx-2cosx },B_{ 2 } =\\frac { 2 } { \\cos ^ { 2 } x-sinxcosx }  , khi đó:",
      "explanation": "(a) Vì  cotx=2  nên  sinx\\ne 0  .\nVì  cotx=2  nên  sinx\\ne 0  .\n» Chọn ĐÚNG.\n(b)  B_{ 1 } =-8 \nChia cả tử và mẫu của biểu thức  B_{ 1 }  cho  sinx  , ta được:\n B_{ 1 } =\\frac { 2\\frac { sinx } { sinx }+3\\frac { cosx } { sinx } } { 3\\frac { sinx } { sinx }-2\\frac { cosx } { sinx } }=\\frac { 2+3cotx } { 3-2cotx }=\\frac { 2+3⋅2 } { 3-2⋅2 }=-8 \n» Chọn ĐÚNG.\n(c)  B_{ 2 } =-5 \nChia cả tử và mẫu của biểu thức  B_{ 2 }  cho  \\sin ^ { 2 } x  , ta được:\n B_{ 2 } =\\frac { \\frac { 2 } { \\sin ^ { 2 } x } } { \\frac { \\cos ^ { 2 } x } { \\sin ^ { 2 } x }-\\frac { sinxcosx } { \\sin ^ { 2 } x } }=\\frac { 2\\left ( { 1+\\cot ^ { 2 } x } \\right ) } { \\cot ^ { 2 } x-cotx }=\\frac { 2\\left ( { 1+2 ^ { 2 } } \\right ) } { 2 ^ { 2 } -2 }=5 \n» Chọn SAI.\n(d)  B_{ 1 } +B_{ 2 } =-13 \n B_{ 1 } +B_{ 2 } =-8+5=-3 \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Vì  cotx=2  nên  sinx\\ne 0  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "B_{ 1 } =-8",
          "correct": true
        },
        {
          "subId": "c",
          "text": "B_{ 2 } =-5",
          "correct": false
        },
        {
          "subId": "d",
          "text": "B_{ 1 } +B_{ 2 } =-13",
          "correct": false
        }
      ],
      "globalId": 60
    },
    {
      "id": 26,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Từ một vị trí ban đầu trong không gian, vệ tinh  X  chuyển động theo quỹ đạo là một đường tròn quanh Trái Đất và luôn cách tâm Trái Đất một khoảng bằng  9200 km  . Sau 2 giờ thì vệ tinh  X  hoàn thành hết một vòng di chuyển.",
      "explanation": "(a) Quãng đường vệ tinh  X  chuyển động được sau 1 giờ là:  \\approx 28902,65( km){ . }{ } \nMột vòng di chuyển của  X  chính là chu vi đường tròn:\n C=2\\piR=2\\pi.9200=18400\\pi(km){ . }{ } \nSau 1 giờ, vệ tinh di chuyển nửa đường tròn với quãng đường là:\n \\frac { 1 } { 2 }C=9200\\pi\\approx 28902,65( km){ . }{ } \n» Chọn ĐÚNG.\n(b) Quãng đường vệ tinh  X  chuyển động được sau 1,5 giờ là:  \\approx 43353,98( km) \nSau 1,5 giờ, vệ tinh di chuyển được  \\frac { 1,5.1 } { 2 }  đường tròn (hay  \\frac { 3 } { 4 }  đường tròn), quãng đường là:  \\frac { 3 } { 4 }C=\\frac { 3 } { 4 }⋅18400\\pi=13800\\pi\\approx 43353,98( km)  .\n» Chọn ĐÚNG.\n(c) Sau khoảng 5,3 giờ thì  X  di chuyển được quãng đường  240000 km \nSố giờ để vệ tinh  X  thực hiện quãng đường  240000 km  là:  \\frac { 240000 } { 9200\\pi }\\approx 8,3  (giờ).\n» Chọn SAI.\n(d) Giả sử vệ tinh di chuyển theo chiều dương của đường tròn, sau 4,5 giờ thì vệ tinh vẽ nên một góc  \\frac { 9\\pi } { 2 }  rad\nSau 4,5 giờ thì số vòng tròn mà vệ tinh  X  di chuyển được là:  \\frac { 4,5 } { 2 }=\\frac { 9 } { 4 }  (vòng).\nSố đo góc lượng giác thu được là:  \\frac { 9 } { 4 }⋅2\\pi=\\frac { 9\\pi } { 2 }(rad)  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Quãng đường vệ tinh  X  chuyển động được sau 1 giờ là:  \\approx 28902,65( km){ . }{ }",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Quãng đường vệ tinh  X  chuyển động được sau 1,5 giờ là:  \\approx 43353,98( km)",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Sau khoảng 5,3 giờ thì  X  di chuyển được quãng đường  240000 km",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Giả sử vệ tinh di chuyển theo chiều dương của đường tròn, sau 4,5 giờ thì vệ tinh vẽ nên một góc  \\frac { 9\\pi } { 2 }  rad",
          "correct": true
        }
      ],
      "globalId": 61
    },
    {
      "id": 27,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho  0 < \\alpha < \\frac { \\pi } { 2 }  . Xét được dấu của các biểu thức sau. Khi đó:",
      "explanation": "(a)  A=\\cos\\left ( { \\alpha+\\pi } \\right ) < 0  ;\nVì  0 < \\alpha < \\frac { \\pi } { 2 }\\Rightarrow \\pi < \\alpha+\\pi < \\frac { 3\\pi } { 2 }\\Rightarrow \\cos(\\alpha+\\pi) < 0  .\n» Chọn ĐÚNG.\n(b)  B=\\tan\\left ( { \\alpha-\\pi } \\right )>0  ;\nVì  0 < \\alpha < \\frac { \\pi } { 2 }\\Rightarrow -\\pi < \\alpha-\\pi < -\\frac { \\pi } { 2 }\\Rightarrow \\tan(\\alpha-\\pi)>0  .\n» Chọn ĐÚNG.\n(c)  C=\\sin\\left ( { \\alpha+\\frac { 2\\pi } { 5 } } \\right ) < 0  ;\nVì  0 < \\alpha < \\frac { \\pi } { 2 }\\Rightarrow \\frac { 2\\pi } { 5 } < \\alpha+\\frac { 2\\pi } { 5 } < \\frac { 9\\pi } { 10 }\\Rightarrow \\sin\\left ( { \\alpha+\\frac { 2\\pi } { 5 } } \\right )>0  .\n» Chọn SAI.\n(d)  D=\\cos\\left ( { \\alpha-\\frac { 3\\pi } { 8 } } \\right ) < 0  .\nVì  0 < \\alpha < \\frac { \\pi } { 2 }\\Rightarrow -\\frac { 3\\pi } { 8 } < \\alpha-\\frac { 3\\pi } { 8 } < \\frac { \\pi } { 8 }\\Rightarrow \\cos\\left ( { \\alpha-\\frac { 3\\pi } { 8 } } \\right )>0  .\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "A=\\cos\\left ( { \\alpha+\\pi } \\right ) < 0",
          "correct": true
        },
        {
          "subId": "b",
          "text": "B=\\tan\\left ( { \\alpha-\\pi } \\right )>0",
          "correct": true
        },
        {
          "subId": "c",
          "text": "C=\\sin\\left ( { \\alpha+\\frac { 2\\pi } { 5 } } \\right ) < 0",
          "correct": false
        },
        {
          "subId": "d",
          "text": "D=\\cos\\left ( { \\alpha-\\frac { 3\\pi } { 8 } } \\right ) < 0",
          "correct": false
        }
      ],
      "globalId": 62
    },
    {
      "id": 28,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Tính được các giá trị lượng giác còn lại của góc  x  , biết:  tanx=\\frac { 1 } { 3 }  với  \\frac { \\pi } { 2 } < x < \\pi  , khi đó:",
      "explanation": "(a)  cosx < 0 \nVì  \\frac { \\pi } { 2 } < x < \\pi  nên  cosx < 0  .\n» Chọn ĐÚNG.\n(b)  cosx=-\\frac { \\sqrt[] { 10 } } { 10 } \nTa có:  \\frac { 1 } { \\cos ^ { 2 } x }=1+\\tan ^ { 2 } x=1+\\frac { 1 } { 9 }=\\frac { 10 } { 9 }\\Rightarrow \\cos ^ { 2 } x=\\frac { 9 } { 10 }\\Rightarrow cosx=-\\frac { 3\\sqrt[] { 10 } } { 10 }  ;\n» Chọn SAI.\n(c)  sinx=-\\frac { \\sqrt[] { 10 } } { 10 } \n sinx=cosxtanx=-\\frac { 3\\sqrt[] { 10 } } { 10 }⋅\\frac { 1 } { 3 }=-\\frac { \\sqrt[] { 10 } } { 10 } \n» Chọn ĐÚNG.\n(d)  sinx+cosx=-\\frac { \\sqrt[] { 10 } } { 5 } \n sinx+cosx=-\\frac { 2\\sqrt[] { 10 } } { 5 } \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "cosx < 0",
          "correct": true
        },
        {
          "subId": "b",
          "text": "cosx=-\\frac { \\sqrt[] { 10 } } { 10 }",
          "correct": false
        },
        {
          "subId": "c",
          "text": "sinx=-\\frac { \\sqrt[] { 10 } } { 10 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "sinx+cosx=-\\frac { \\sqrt[] { 10 } } { 5 }",
          "correct": false
        }
      ],
      "globalId": 63
    },
    {
      "id": 29,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Tính được các giá trị lượng giác của góc  \\alpha  , biết:  \\sin\\alpha=-\\frac { \\sqrt[] { 7 } } { 4 },-\\frac { \\pi } { 2 } < \\alpha < 0  . Khi đó:",
      "explanation": "(a)  \\cos ^ { 2 } \\alpha=\\frac { 9 } { 16 } \n \\sin\\alpha=\\frac { \\sqrt[] { 7 } } { 4 },-\\frac { \\pi } { 2 } < \\alpha < 0. \n \\sin ^ { 2 } \\alpha+\\cos ^ { 2 } \\alpha=1\\Rightarrow \\cos ^ { 2 } \\alpha=\\frac { 9 } { 16 } \n» Chọn ĐÚNG.\n(b)  \\cos\\alpha=-\\frac { 3 } { 4 } \nVì  -\\frac { \\pi } { 2 } < \\alpha < 0\\Rightarrow \\cos\\alpha>0\\Rightarrow \\cos\\alpha=\\frac { 3 } { 4 } \n» Chọn SAI.\n(c)  \\cot\\alpha=-\\frac { 3 } { \\sqrt[] { 7 } } \n \\tan\\alpha=\\frac { \\sin\\alpha } { \\cos\\alpha }=-\\frac { \\sqrt[] { 7 } } { 3 };\\cot\\alpha=-\\frac { 3 } { \\sqrt[] { 7 } } \n» Chọn ĐÚNG.\n(d)  \\tan\\alpha+\\cot\\alpha=-\\frac { 16\\sqrt[] { 7 } } { 23 } \n \\tan\\alpha+\\cot\\alpha=-\\frac { 16\\sqrt[] { 7 } } { 21 } \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\cos ^ { 2 } \\alpha=\\frac { 9 } { 16 }",
          "correct": true
        },
        {
          "subId": "b",
          "text": "\\cos\\alpha=-\\frac { 3 } { 4 }",
          "correct": false
        },
        {
          "subId": "c",
          "text": "\\cot\\alpha=-\\frac { 3 } { \\sqrt[] { 7 } }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "\\tan\\alpha+\\cot\\alpha=-\\frac { 16\\sqrt[] { 7 } } { 23 }",
          "correct": false
        }
      ],
      "globalId": 64
    },
    {
      "id": 30,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Tính được các giá trị lượng giác của góc  \\alpha  , biết:  \\tan\\alpha=2,0 < \\alpha < \\frac { \\pi } { 2 }  . Khi đó",
      "explanation": "(a)  \\cot\\alpha=\\frac { 1 } { 2 } \n \\tan\\alpha=2\\,\\,\\,\\left ( { 0 < \\alpha < \\frac { \\pi } { 2 } } \\right ) \nTa có:  \\cot\\alpha=\\frac { 1 } { \\tan\\alpha }=\\frac { 1 } { 2 } \n» Chọn ĐÚNG.\n(b)  \\cos ^ { 2 } \\alpha=\\frac { 1 } { 5 } \n 1+\\tan ^ { 2 } \\alpha=\\frac { 1 } { \\cos ^ { 2 } \\alpha }\\Rightarrow \\cos ^ { 2 } \\alpha=\\frac { 1 } { 5 }  ,\n» Chọn ĐÚNG.\n(c)  \\cos\\alpha=-\\frac { \\sqrt[] { 5 } } { 5 } \nVì  0 < \\alpha < \\frac { \\pi } { 2 }  nên  \\cos\\alpha=\\frac { \\sqrt[] { 5 } } { 5 }  .\n» Chọn SAI.\n(d)  \\sin\\alpha=\\frac { 2\\sqrt[] { 5 } } { 5 } \n \\tan\\alpha=\\frac { \\sin\\alpha } { \\cos\\alpha }\\Rightarrow \\sin\\alpha=\\frac { 2\\sqrt[] { 5 } } { 5 }  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\cot\\alpha=\\frac { 1 } { 2 }",
          "correct": true
        },
        {
          "subId": "b",
          "text": "\\cos ^ { 2 } \\alpha=\\frac { 1 } { 5 }",
          "correct": true
        },
        {
          "subId": "c",
          "text": "\\cos\\alpha=-\\frac { \\sqrt[] { 5 } } { 5 }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "\\sin\\alpha=\\frac { 2\\sqrt[] { 5 } } { 5 }",
          "correct": true
        }
      ],
      "globalId": 65
    },
    {
      "id": 31,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Tính được các giá trị lượng giác của góc  \\alpha  , biết:  \\sin\\alpha=\\frac { 2 } { 3 },\\frac { \\pi } { 2 } < \\alpha < \\pi  . Khi đó:",
      "explanation": "(a)  \\cos\\alpha < 0 \n \\frac { \\pi } { 2 } < \\alpha < \\pi\\Rightarrow \\cos\\alpha < 0 \n» Chọn ĐÚNG.\n(b)  \\cos\\alpha=\\frac { \\sqrt[] { 5 } } { 3 } \n \\cos\\alpha=-\\sqrt[] { 1-\\sin ^ { 2 } \\alpha }=\\sqrt[] { 1-\\frac { 4 } { 9 } }=-\\frac { \\sqrt[] { 5 } } { 3 }  ,\n» Chọn SAI.\n(c)  \\tan\\alpha=-\\frac { 2 } { \\sqrt[] { 5 } } \n \\tan\\alpha=\\frac { \\sin\\alpha } { \\cos\\alpha }=\\frac { \\frac { 2 } { 3 } } { -\\frac { \\sqrt[] { 5 } } { 3 } }=-\\frac { 2 } { \\sqrt[] { 5 } } \n» Chọn ĐÚNG.\n(d)  \\cot\\alpha=-\\frac { \\sqrt[] { 5 } } { 2 } \n \\cot\\alpha=\\frac { 1 } { \\tan\\alpha }=\\frac { 1 } { -\\frac { 2 } { \\sqrt[] { 5 } } }=-\\frac { \\sqrt[] { 5 } } { 2 } \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\cos\\alpha < 0",
          "correct": true
        },
        {
          "subId": "b",
          "text": "\\cos\\alpha=\\frac { \\sqrt[] { 5 } } { 3 }",
          "correct": false
        },
        {
          "subId": "c",
          "text": "\\tan\\alpha=-\\frac { 2 } { \\sqrt[] { 5 } }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "\\cot\\alpha=-\\frac { \\sqrt[] { 5 } } { 2 }",
          "correct": true
        }
      ],
      "globalId": 66
    },
    {
      "id": 32,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Tính được các giá trị lượng giác của góc  \\alpha  , biết:  \\cos\\alpha=-\\frac { 3 } { 4 },-\\frac { 3\\pi } { 2 } < \\alpha < -\\pi  . Khi đó:",
      "explanation": "(a)  \\sin\\alpha < 0 \n -\\frac { 3\\pi } { 2 } < \\alpha < -\\pi\\Rightarrow \\sin\\alpha>0 \n» Chọn SAI.\n(b)  \\sin\\alpha=-\\frac { \\sqrt[] { 7 } } { 4 } \n \\sin\\alpha=\\sqrt[] { 1-\\cos ^ { 2 } \\alpha }=\\sqrt[] { 1-\\frac { 9 } { 16 } }=\\frac { \\sqrt[] { 7 } } { 4 }  ;\n» Chọn SAI.\n(c)  \\tan\\alpha=\\frac { -\\sqrt[] { 7 } } { 3 } \n \\tan\\alpha=\\frac { \\sin\\alpha } { \\cos\\alpha }=\\frac { \\frac { \\sqrt[] { 7 } } { 4 } } { -\\frac { 3 } { 4 } }=\\frac { -\\sqrt[] { 7 } } { 3 } \n» Chọn ĐÚNG.\n(d)  \\cot\\alpha=-\\frac { 3 } { \\sqrt[] { 7 } }. \n \\cot\\alpha=\\frac { 1 } { \\tan\\alpha }=\\frac { 1 } { \\frac { -\\sqrt[] { 7 } } { 3 } }=-\\frac { 3 } { \\sqrt[] { 7 } } \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\sin\\alpha < 0",
          "correct": false
        },
        {
          "subId": "b",
          "text": "\\sin\\alpha=-\\frac { \\sqrt[] { 7 } } { 4 }",
          "correct": false
        },
        {
          "subId": "c",
          "text": "\\tan\\alpha=\\frac { -\\sqrt[] { 7 } } { 3 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "\\cot\\alpha=-\\frac { 3 } { \\sqrt[] { 7 } }.",
          "correct": true
        }
      ],
      "globalId": 67
    },
    {
      "id": 33,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Tính được các giá trị lượng giác của góc  \\alpha  , biết:  \\tan\\alpha=\\frac { 2\\sqrt[] { 10 } } { 9 },\\pi < \\alpha < \\frac { 3\\pi } { 2 }  . Khi đó:",
      "explanation": "(a)  \\cot\\alpha=\\frac { 9 } { 2\\sqrt[] { 10 } } \n \\cot\\alpha=\\frac { 9 } { 2\\sqrt[] { 10 } } \n» Chọn ĐÚNG.\n(b)  \\cos\\alpha=-\\frac { 9 } { 11 } \n \\cos\\alpha=-\\sqrt[] { \\frac { 1 } { \\tan ^ { 2 } \\alpha+1 } }=-\\sqrt[] { \\frac { 1 } { \\frac { 40 } { 81 }+1 } }=-\\frac { 9 } { 11 } \n» Chọn ĐÚNG.\n(c)  \\left \\{ \\begin{array}{l} \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\end{array} \\right. \n \\pi < \\alpha < \\frac { 3\\pi } { 2 }\\Rightarrow \\left \\{ \\begin{array}{l} \\cos\\alpha < 0 \\\\ \\sin\\alpha < 0 \\end{array} \\right. \n» Chọn ĐÚNG.\n(d)  \\sin\\alpha=-\\frac { 2\\sqrt[] { 10 } } { 11 } \n \\sin\\alpha=-\\sqrt[] { 1-\\cos ^ { 2 } \\alpha }=-\\sqrt[] { 1-\\frac { 81 } { 121 } }=\\frac { 2\\sqrt[] { 10 } } { 11 } \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\cot\\alpha=\\frac { 9 } { 2\\sqrt[] { 10 } }",
          "correct": true
        },
        {
          "subId": "b",
          "text": "\\cos\\alpha=-\\frac { 9 } { 11 }",
          "correct": true
        },
        {
          "subId": "c",
          "text": "\\left \\{ \\begin{array}{l} \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\end{array} \\right.",
          "correct": true
        },
        {
          "subId": "d",
          "text": "\\sin\\alpha=-\\frac { 2\\sqrt[] { 10 } } { 11 }",
          "correct": false
        }
      ],
      "globalId": 68
    },
    {
      "id": 34,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Tính được các giá trị lượng giác của góc  \\alpha  , biết:  \\cot\\alpha=\\sqrt[] { 2 }+1,0 < \\alpha < \\frac { \\pi } { 2 }  . Khi đó:",
      "explanation": "(a)  \\left \\{ \\begin{array}{l} \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\end{array} \\right. \n 0 < \\alpha < \\frac { \\pi } { 2 }\\Rightarrow \\left \\{ \\begin{array}{l} \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\end{array} \\right.  ;\n» Chọn ĐÚNG.\n(b)  \\tan\\alpha=\\sqrt[] { 2 }+1 \n \\tan\\alpha=\\frac { 1 } { \\sqrt[] { 2 }+1 }=\\sqrt[] { 2 }-1  ;\n» Chọn SAI.\n(c)  \\sin\\alpha=\\frac { \\sqrt[] { 2-\\sqrt[] { 2 } } } { 2 } \n \\sin\\alpha=\\sqrt[] { \\frac { 1 } { \\cot ^ { 2 } \\alpha+1 }=\\sqrt[] { \\frac { 1 } { \\left ( { \\sqrt[] { 2 }+1 } \\right ) ^ { 2 } +1 } }=\\frac { \\sqrt[] { 2-\\sqrt[] { 2 } } } { 2 } } \n» Chọn ĐÚNG.\n(d)  \\cos\\alpha=\\frac { \\sqrt[] { 2+\\sqrt[] { 2 } } } { 2 } \n \\cos\\alpha=\\sqrt[] { 1-\\left ( { \\frac { \\sqrt[] { 2-\\sqrt[] { 2 } } } { 2 } } \\right ) ^ { 2 } }=\\frac { \\sqrt[] { 2+\\sqrt[] { 2 } } } { 2 } \n» Chọn ĐÚNG.\nC.Câu hỏi – Trả lời ngắn",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\left \\{ \\begin{array}{l} \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\end{array} \\right.",
          "correct": true
        },
        {
          "subId": "b",
          "text": "\\tan\\alpha=\\sqrt[] { 2 }+1",
          "correct": false
        },
        {
          "subId": "c",
          "text": "\\sin\\alpha=\\frac { \\sqrt[] { 2-\\sqrt[] { 2 } } } { 2 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "\\cos\\alpha=\\frac { \\sqrt[] { 2+\\sqrt[] { 2 } } } { 2 }",
          "correct": true
        }
      ],
      "globalId": 69
    },
    {
      "id": 35,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  cosx=\\frac { 1 } { 2 }  . Tính giá trị biểu thức  P=3sin ^ { 2 } x+4cos ^ { 2 } x  .",
      "explanation": "Ta có:  cosx=\\frac { 1 } { 2 }\\Rightarrow \\sin ^ { 2 } x=1-\\cos ^ { 2 } x=1-\\frac { 1 } { 4 }=\\frac { 3 } { 4 }  .\nKhi đó:  P=3sin ^ { 2 } x+4cos ^ { 2 } x=3⋅\\frac { 3 } { 4 }+4⋅\\frac { 1 } { 4 }=\\frac { 13 } { 4 }  .",
      "diagram": null,
      "correctAnswer": "3,25",
      "globalId": 70
    },
    {
      "id": 36,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Biểu thức sau:  T=2sin\\left ( { \\frac { 9\\pi } { 2 }-x } \\right )+3cos\\left ( { 19\\pi-x } \\right )=kcosx  . Khi đó  k=?",
      "explanation": "Ta có:  T=2sin\\left ( { 4\\pi+\\frac { \\pi } { 2 }-x } \\right )+3cos\\left ( { 18\\pi+\\pi-x } \\right ) \n =2sin\\left ( { \\frac { \\pi } { 2 }-x } \\right )+3cos\\left ( { \\pi-x } \\right )=2cosx-3cosx=-cosx",
      "diagram": null,
      "correctAnswer": "-1",
      "globalId": 71
    },
    {
      "id": 37,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Biểu thức sau:  S=\\frac { \\sin\\left ( { \\frac { 15\\pi } { 2 }-x } \\right )-2cos\\left ( { x-\\pi } \\right ) } { \\cos\\left ( { \\frac { 5\\pi } { 2 }-x } \\right ) }=kcotx  . Khi đó  k=?",
      "explanation": "Ta có:  S=\\frac { \\sin\\left ( { 7\\pi+\\frac { \\pi } { 2 }-x } \\right )-2cos(\\pi-x) } { \\cos\\left ( { 2\\pi+\\frac { \\pi } { 2 }-x } \\right ) } \n =\\frac { \\sin\\left ( { \\pi+\\frac { \\pi } { 2 }-x } \\right )+2cosx } { \\cos\\left ( { \\frac { \\pi } { 2 }-x } \\right ) }=\\frac { -\\sin\\left ( { \\frac { \\pi } { 2 }-x } \\right )+2cosx } { sinx }=\\frac { -cosx+2cosx } { sinx }=\\frac { cosx } { sinx }=cotx",
      "diagram": null,
      "correctAnswer": "1",
      "globalId": 72
    },
    {
      "id": 38,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho tam giác  ABC  , khi đó biểu thức  \\frac { \\sin ^ { 3 } \\frac { \\widehat { B } } { 2 } } { \\cos\\left ( { \\frac { \\widehat { A }+ \\widehat { C } } { 2 } } \\right ) }+\\frac { \\cos ^ { 3 } \\frac { \\widehat { B } } { 2 } } { \\sin\\left ( { \\frac { \\widehat { A }+ \\widehat { C } } { 2 } } \\right ) }-\\frac { \\cos( \\widehat { A }+ \\widehat { C }) } { sinB }\\tan \\widehat { B }  bằng?",
      "explanation": "Vì  \\widehat { A }+ \\widehat { B }+ \\widehat { C }=180 ^ { ^\\circ }  nên  \\widehat { A }+ \\widehat { C }=180 ^ { ^\\circ } - \\widehat { B }  .\n { }{ V }{ T }{ }=\\frac { \\sin ^ { 3 } \\frac { \\widehat { B } } { 2 } } { \\cos\\left ( { \\frac { 180 ^ { ^\\circ } - \\widehat { B } } { 2 } } \\right ) }+\\frac { \\cos ^ { 3 } \\frac { \\widehat { B } } { 2 } } { \\sin\\left ( { \\frac { 180 ^ { ^\\circ } - \\widehat { B } } { 2 } } \\right ) }-\\frac { \\cos\\left ( { 180 ^ { ^\\circ } - \\widehat { B } } \\right ) } { \\sin \\widehat { B } }⋅\\tan \\widehat { B } \n =\\frac { \\sin ^ { 3 } \\frac { \\widehat { B } } { 2 } } { \\sin\\frac { \\widehat { B } } { 2 } }+\\frac { \\cos ^ { 3 } \\frac { \\widehat { B } } { 2 } } { \\cos\\frac { \\widehat { B } } { 2 } }-\\frac { -\\cos \\widehat { B } } { \\sin \\widehat { B } }⋅\\tan \\widehat { B }=\\sin ^ { 2 } \\frac { \\widehat { B } } { 2 }+\\cos ^ { 2 } \\frac { \\widehat { B } } { 2 }+\\cot \\widehat { B }⋅\\tan \\widehat { B }=1+1=2={ V }{ P }",
      "diagram": null,
      "correctAnswer": "2",
      "globalId": 73
    },
    {
      "id": 39,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Biểu thức  A=\\tan\\left ( { \\frac { 17\\pi } { 2 }-x } \\right )+2cot\\left ( { 5\\pi+x } \\right )=kcotx  , khi đó:  k=?",
      "explanation": "A=\\tan\\left ( { 8\\pi+\\frac { \\pi } { 2 }-x } \\right )+2cotx=\\tan\\left ( { \\frac { \\pi } { 2 }-x } \\right )+2cotx=cotx+2cotx=3cotx",
      "diagram": null,
      "correctAnswer": "3",
      "globalId": 74
    },
    {
      "id": 40,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Biểu thức  B=\\frac { 2sin(x-4\\pi)+\\cos\\left ( { x-\\frac { 5\\pi } { 2 } } \\right ) } { \\sin\\left ( { \\frac { 3\\pi } { 2 }-x } \\right ) }=ktanx  , khi đó:  k=?",
      "explanation": "B=\\frac { 2sinx+\\cos\\left ( { x-\\frac { \\pi } { 2 }-2\\pi } \\right ) } { \\sin\\left ( { \\pi+\\frac { \\pi } { 2 }-x } \\right ) }=\\frac { 2sinx+\\cos\\left ( { x-\\frac { \\pi } { 2 } } \\right ) } { -\\sin\\left ( { \\frac { \\pi } { 2 }-x } \\right ) }=\\frac { 2sinx+\\cos\\left ( { \\frac { \\pi } { 2 }-x } \\right ) } { -cosx } \n =\\frac { 2sinx+sinx } { -cosx }=-3tanx  .",
      "diagram": null,
      "correctAnswer": "-3",
      "globalId": 75
    },
    {
      "id": 41,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  \\cot\\alpha=\\frac { 1 } { 3 }  . Tính giá trị của biểu thức  A=\\frac { 3sin\\alpha+4cos\\alpha } { 2sin\\alpha-5cos\\alpha }  .",
      "explanation": "Vì  \\cot\\alpha=\\frac { 1 } { 3 }  nên  \\sin\\alpha\\ne 0  . Chia cả tử và mẫu của biểu thức  A  cho  \\sin\\alpha  , ta có:  A=\\frac { 3+4cot\\alpha } { 2-5cot\\alpha }=\\frac { 3+4⋅\\frac { 1 } { 3 } } { 2-5⋅\\frac { 1 } { 3 } }=13  .",
      "diagram": null,
      "correctAnswer": "13",
      "globalId": 76
    },
    {
      "id": 42,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  \\cos\\alpha=\\frac { 3 } { 4 }  . Tính giá trị của biểu thức  B=\\frac { \\tan\\alpha+3cot\\alpha } { \\tan\\alpha+\\cot\\alpha }  . Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "Ta có:  \\cos\\alpha=\\frac { 3 } { 4 }\\Rightarrow 1+\\tan ^ { 2 } \\alpha=\\frac { 1 } { \\cos ^ { 2 } \\alpha }=\\frac { 16 } { 9 }\\Rightarrow \\tan ^ { 2 } \\alpha=\\frac { 7 } { 9 }  .\nKhi đó:  B=\\frac { \\tan\\alpha+\\frac { 3 } { \\tan\\alpha } } { \\tan\\alpha+\\frac { 1 } { \\tan\\alpha } }=\\frac { \\tan ^ { 2 } \\alpha+3 } { \\tan ^ { 2 } \\alpha+1 }=\\frac { \\frac { 7 } { 9 }+3 } { \\frac { 7 } { 9 }+1 }=\\frac { 17 } { 8 }\\approx 2,13  .",
      "diagram": null,
      "correctAnswer": "2,13",
      "globalId": 77
    },
    {
      "id": 43,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  \\tan\\alpha=\\sqrt[] { 2 }  . Tính giá trị của biểu thức  C=\\frac { \\sin\\alpha-\\cos\\alpha } { \\sin ^ { 3 } \\alpha+3cos ^ { 3 } \\alpha+2sin\\alpha }  . Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "Vì  \\tan\\alpha=\\sqrt[] { 2 }  nên  \\cos\\alpha\\ne 0  . Chia cả tử và mẫu của biểu thức  C  cho  \\cos ^ { 3 } \\alpha  , ta được:\n C=\\frac { \\frac { \\sin\\alpha } { \\cos\\alpha }⋅\\frac { 1 } { \\cos ^ { 2 } \\alpha }-\\frac { 1 } { \\cos ^ { 2 } \\alpha } } { \\tan ^ { 3 } \\alpha+3+2⋅\\frac { \\sin\\alpha } { \\cos\\alpha }⋅\\frac { 1 } { \\cos ^ { 2 } \\alpha } }=\\frac { \\tan\\alpha\\left ( { 1+\\tan ^ { 2 } \\alpha } \\right )-\\left ( { 1+\\tan ^ { 2 } \\alpha } \\right ) } { \\tan ^ { 3 } \\alpha+3+2tan\\alpha\\left ( { 1+\\tan ^ { 2 } \\alpha } \\right ) } \n =\\frac { \\left ( { 1+\\tan ^ { 2 } \\alpha } \\right )\\left ( { \\tan\\alpha-1 } \\right ) } { 3tan ^ { 3 } \\alpha+2tan\\alpha+3 }=\\frac { \\left ( { 1+2 } \\right )\\left ( { \\sqrt[] { 2 }-1 } \\right ) } { 3⋅2\\sqrt[] { 2 }+2\\sqrt[] { 2 }+3 }=\\frac { 3(\\sqrt[] { 2 }-1) } { 8\\sqrt[] { 2 }+3 }",
      "diagram": null,
      "correctAnswer": "0,09",
      "globalId": 78
    },
    {
      "id": 44,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Biết  sina+cosa=\\sqrt[] { 2 }  . Tính giá trị của  \\sin ^ { 4 } a+\\cos ^ { 4 } a  .",
      "explanation": "Ta có:\n sina+cosa=\\sqrt[] { 2 } \n \\Rightarrow 2=\\left ( { sina+cosa } \\right ) ^ { 2 } =\\sin ^ { 2 } a+2sinacosa+\\cos ^ { 2 } a=1+2sinacosa\\Rightarrow sinacosa=\\frac { 1 } { 2 } \nKhi đó:  \\sin ^ { 4 } a+\\cos ^ { 4 } a=\\left ( { \\sin ^ { 2 } a+\\cos ^ { 2 } a } \\right ) ^ { 2 } -2sin ^ { 2 } acos ^ { 2 } a=1-2\\left ( { \\frac { 1 } { 2 } } \\right ) ^ { 2 } =\\frac { 1 } { 2 }  .",
      "diagram": null,
      "correctAnswer": "0,5",
      "globalId": 79
    },
    {
      "id": 45,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Đơn giản các biểu thức sau (giả sử mỗi biểu thức sau luôn có nghĩa):  C=\\frac { \\cos ^ { 2 } x-\\sin ^ { 2 } y } { \\sin ^ { 2 } xsin ^ { 2 } y }-\\cot ^ { 2 } xcot ^ { 2 } y  .",
      "explanation": "\\begin{array} {} \\begin{array} {} \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array}",
      "diagram": null,
      "correctAnswer": "-1",
      "globalId": 80
    },
    {
      "id": 46,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Trong tam giác  ABC  ta có:  \\cos \\widehat { A }+\\cos( \\widehat { B }+ \\widehat { C })+\\tan\\frac { \\widehat { A }+ \\widehat { B } } { 2 }=kcot\\frac { \\widehat { C } } { 2 }  . Khi đó:  k=?",
      "explanation": "Vì  \\widehat { A }+ \\widehat { B }+ \\widehat { C }=180 ^ { ^\\circ }  nên  \\widehat { B }+ \\widehat { C }=180 ^ { ^\\circ } - \\widehat { A }  và  \\frac { \\widehat { A }+ \\widehat { B } } { 2 }=\\frac { 180 ^ { ^\\circ } - \\widehat { C } } { 2 }  .\nDo đó:\n \\cos \\widehat { A }+\\cos( \\widehat { B }+ \\widehat { C })+\\tan\\frac { \\widehat { A }+ \\widehat { B } } { 2 }=\\cos \\widehat { A }+\\cos\\left ( { 180 ^ { ^\\circ } - \\widehat { A } } \\right )+\\tan\\frac { 180 ^ { ^\\circ } - \\widehat { C } } { 2 } \\\\ =\\cos \\widehat { A }-\\cos \\widehat { A }+\\tan\\left ( { 90 ^ { ^\\circ } -\\frac { \\widehat { C } } { 2 } } \\right )=\\cot\\frac { \\widehat { C } } { 2 }",
      "diagram": null,
      "correctAnswer": "1",
      "globalId": 81
    },
    {
      "id": 47,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho biểu thức  f\\left ( { x } \\right )=3\\left ( { \\sin ^ { 4 } x+\\cos ^ { 4 } x } \\right )-2\\left ( { \\sin ^ { 6 } x+\\cos ^ { 6 } x } \\right )  tính  f\\left ( { 1 } \\right )",
      "explanation": "Ta có:  \\sin ^ { 4 } x+\\cos ^ { 4 } x=1-2sin ^ { 2 } xcos ^ { 2 } x,\\sin ^ { 6 } x+\\cos ^ { 6 } x=1-3sin ^ { 2 } xcos ^ { 2 } x  .\nSuy ra:  f\\left ( { x } \\right )=3\\left ( { 1-2sin ^ { 2 } xcos ^ { 2 } x } \\right )-2\\left ( { 1-3sin ^ { 2 } xcos ^ { 2 } x } \\right )=1  .\nVậy biểu thức  f\\left ( { x } \\right )  không phụ thuộc vào  x  nên  f\\left ( { 1 } \\right )=1",
      "diagram": null,
      "correctAnswer": "1",
      "globalId": 82
    },
    {
      "id": 48,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho biểu thức  g\\left ( { x } \\right )=\\frac { -2cot ^ { 2 } x-\\cos ^ { 2 } x } { \\cot ^ { 2 } x }+\\frac { sinxcosx } { cotx }  với  x\\ne 0,x\\ne \\frac { \\pi } { 2 },x\\ne \\pi  . Tính  g\\left ( { \\frac { 2024\\pi } { 2023 } } \\right )",
      "explanation": "g\\left ( { x } \\right )=-2-\\frac { \\cos ^ { 2 } x } { \\cot ^ { 2 } x }+\\frac { sinxcosx } { \\frac { cosx } { sinx } }  =-2-\\frac { \\cos ^ { 2 } x } { \\frac { \\cos ^ { 2 } x } { \\sin ^ { 2 } x } }+\\sin ^ { 2 } x=-2-\\sin ^ { 2 } x+\\sin ^ { 2 } x=-2. \nVậy biểu thức  g\\left ( { x } \\right )  không phụ thuộc vào  x  nên  g\\left ( { \\frac { 2024\\pi } { 2023 } } \\right )=-2",
      "diagram": null,
      "correctAnswer": "-2",
      "globalId": 83
    },
    {
      "id": 49,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho hai góc nhọn  a  và  b  . Biết  cosa=\\frac { 1 } { 3 }  và  cosb=\\frac { 1 } { 4 }  . Tính giá trị của:  P=\\left ( { cosa⋅cosb } \\right ) ^ { 2 } -\\left ( { sina⋅sinb } \\right ) ^ { 2 } .  Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "Ta có:\n P==\\left ( { cosacosb } \\right ) ^ { 2 } -\\left ( { sinasinb } \\right ) ^ { 2 } =\\left ( { cosacosb } \\right ) ^ { 2 } -\\left ( { 1-\\cos ^ { 2 } a } \\right )\\left ( { 1-\\cos ^ { 2 } b } \\right )=\\left ( { \\frac { 1 } { 12 } } \\right ) ^ { 2 } -\\frac { 8 } { 9 }⋅\\frac { 15 } { 16 }=-\\frac { 119 } { 144 }",
      "diagram": null,
      "correctAnswer": "-0,83",
      "globalId": 84
    },
    {
      "id": 50,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  tanx=-\\frac { 4 } { 3 }  và  \\frac { \\pi } { 2 } < x < \\pi  . Tính giá trị của biểu thức  M=\\frac { \\sin ^ { 2 } x-cosx } { sinx-\\cos ^ { 2 } x }  . Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "Ta có:  tanx=-\\frac { 4 } { 3 }\\Rightarrow \\cos ^ { 2 } x=\\frac { 1 } { 1+\\tan ^ { 2 } x }=\\frac { 9 } { 25 }\\Rightarrow cosx=\\pm \\frac { 3 } { 5 }  .\nVì  \\frac { \\pi } { 2 } < x < \\pi\\Rightarrow cosx=-\\frac { 3 } { 5 }\\Rightarrow sinx=tanx⋅cosx=\\frac { 4 } { 5 }\\Rightarrow M=\\frac { \\sin ^ { 2 } x-cosx } { sinx-\\cos ^ { 2 } x }=\\frac { 31 } { 11 }  .",
      "diagram": null,
      "correctAnswer": "2,82",
      "globalId": 85
    },
    {
      "id": 51,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  3cos\\alpha-\\sin\\alpha=1,0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ }  . Tính giá trị của  \\tan\\alpha  . Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "Ta có  3cos\\alpha-\\sin\\alpha=1\\Leftrightarrow 3cos\\alpha=\\sin\\alpha+1\\to 9cos ^ { 2 } \\alpha=(\\sin\\alpha+1) ^ { 2 } \n \\Leftrightarrow 9cos ^ { 2 } \\alpha=\\sin ^ { 2 } \\alpha+2sin\\alpha+1\\Leftrightarrow 9\\left ( { 1-\\sin ^ { 2 } \\alpha } \\right )=\\sin ^ { 2 } \\alpha+2sin\\alpha+1 \n \\Leftrightarrow 10sin ^ { 2 } \\alpha+2sin\\alpha-8=0\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.  .\n-  \\sin\\alpha=-1  : không thỏa mãn vì  0 ^ { ^\\circ } < \\alpha < 90 ^ { ^\\circ }  .\n-  \\sin\\alpha=\\frac { 4 } { 5 }\\Rightarrow \\cos\\alpha=\\frac { 3 } { 5 }\\to \\tan\\alpha=\\frac { \\sin\\alpha } { \\cos\\alpha }=\\frac { 4 } { 3 }  .",
      "diagram": null,
      "correctAnswer": "1,33",
      "globalId": 86
    },
    {
      "id": 52,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho biểu thức  A=\\frac { \\left ( { 1-\\tan ^ { 2 } x } \\right ) ^ { 2 } } { 4tan ^ { 2 } x }-\\frac { 1 } { 4sin ^ { 2 } xcos ^ { 2 } x }  khi  x=\\frac { 2024\\pi } { 2023 }  thì  A  bằng bao nhiêu?",
      "explanation": "Ta có:\n A=\\frac { \\left ( { 1-\\frac { \\sin ^ { 2 } x } { \\cos ^ { 2 } x } } \\right ) ^ { 2 } } { 4tan ^ { 2 } x }-\\frac { 1 } { 4sin ^ { 2 } xcos ^ { 2 } x }=\\frac { \\left ( { \\cos ^ { 2 } x-\\sin ^ { 2 } x } \\right ) ^ { 2 } } { 4sin ^ { 2 } xcos ^ { 2 } x }-\\frac { 1 } { 4sin ^ { 2 } xcos ^ { 2 } x } \\\\ A=\\frac { \\left ( { \\cos ^ { 2 } x-\\sin ^ { 2 } x+1 } \\right )\\left ( { \\cos ^ { 2 } x-\\sin ^ { 2 } x-1 } \\right ) } { 4sin ^ { 2 } xcos ^ { 2 } x }=\\frac { 2cos ^ { 2 } x⋅\\left ( { -2sin ^ { 2 } x } \\right ) } { 4sin ^ { 2 } xcos ^ { 2 } x }=-1.",
      "diagram": null,
      "correctAnswer": "-1",
      "globalId": 87
    },
    {
      "id": 53,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho biểu thức  B=\\left[ \\sin\\left ( { \\frac { \\pi } { 2 }-x } \\right )+\\sin\\left ( { 10\\pi+x } \\right ) \\right] ^ { 2 } +\\left[ \\cos\\left ( { \\frac { 3\\pi } { 2 }-x } \\right )+\\cos\\left ( { 8\\pi-x } \\right ) \\right] ^ { 2 }  khi  x=\\frac { 2024\\pi } { 2023 }  thì  B  bằng bao nhiêu?",
      "explanation": "Ta có:  \\left \\{ \\begin{array}{l} \\sin\\left ( { \\frac { \\pi } { 2 }-x } \\right )=cosx \\\\ \\sin\\left ( { 10\\pi+x } \\right )=sinx \\\\ \\cos\\left ( { \\frac { 3\\pi } { 2 }-x } \\right )=-sinx \\\\ \\cos\\left ( { 8\\pi-x } \\right )=cosx \\end{array} \\right. \nThay vào  B=\\left[ \\sin\\left ( { \\frac { \\pi } { 2 }-x } \\right )+\\sin\\left ( { 10\\pi+x } \\right ) \\right] ^ { 2 } +\\left[ \\cos\\left ( { \\frac { 3\\pi } { 2 }-x } \\right )+\\cos\\left ( { 8\\pi-x } \\right ) \\right] ^ { 2 } \nTa có:  B=\\left ( { cosx+sinx } \\right ) ^ { 2 } +\\left ( { -sinx+cosx } \\right ) ^ { 2 } =2  .",
      "diagram": null,
      "correctAnswer": "2",
      "globalId": 88
    },
    {
      "id": 54,
      "lesson": "b2",
      "lessonTitle": "Bài 2. Giá trị lượng giác của một góc lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Tính  S=\\sin ^ { 2 } 5 ^ { ^\\circ } +\\sin ^ { 2 } 10 ^ { ^\\circ } +\\sin ^ { 2 } 15 ^ { ^\\circ } +…+\\sin ^ { 2 } 80 ^ { ^\\circ } +\\sin ^ { 2 } 85 ^ { ^\\circ }  .",
      "explanation": "Ta có\n \\sin ^ { 2 } 5 ^ { ^\\circ } +\\sin ^ { 2 } 85 ^ { ^\\circ } =\\cos ^ { 2 } 85 ^ { ^\\circ } +\\sin ^ { 2 } 85 ^ { ^\\circ } =1. \n \\sin ^ { 2 } 10 ^ { ^\\circ } +\\sin ^ { 2 } 80 ^ { ^\\circ } =\\cos ^ { 2 } 80 ^ { ^\\circ } +\\sin ^ { 2 } 80 ^ { ^\\circ } =1. \n … \n \\sin ^ { 2 } 40 ^ { ^\\circ } +\\sin ^ { 2 } 45 ^ { ^\\circ } =\\cos ^ { 2 } 45 ^ { ^\\circ } +\\sin ^ { 2 } 45 ^ { ^\\circ } =1. \nTổng số có 8 cặp dư ra  \\sin ^ { 2 } 45 ^ { ^\\circ }  nên  S=8+\\frac { 1 } { 2 }=\\frac { 17 } { 2 }  .",
      "diagram": null,
      "correctAnswer": "8,5",
      "globalId": 89
    },
    {
      "id": 1,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Rút gọn biểu thức  M=cos2x.cosx+sin2x.sinx  ta được kết quả là:",
      "explanation": "Ta có:  M=cos2x.cosx+sin2x.sinx=\\cos\\left ( { 2x-x } \\right )=cosx  .",
      "diagram": null,
      "options": [
        "A.  M=cosx",
        "B.  M=cos3x",
        "C.  M=sinx",
        "D.  M=sin3x"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 90
    },
    {
      "id": 2,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Rút gọn biểu thức  \\cos\\left ( { 120^\\circ–{ }x } \\right )+\\cos\\left ( { 120^\\circ+{ }x } \\right )–cosx  ta được kết quả là",
      "explanation": "\\cos\\left ( { 120^\\circ–{ }x } \\right )+\\cos\\left ( { 120^\\circ+{ }x } \\right )–cosx \n =cos120^\\circcosx+sin120^\\circ.sinx+cos120^\\circcosx-sin120^\\circ.sinx–cosx \n =cos120^\\circcosx+cos120^\\circcosx–cosx \n =2cos120^\\circcosx–cosx=2.\\left ( { -\\frac { 1 } { 2 } } \\right )cosx–cosx=-2cosx",
      "diagram": null,
      "options": [
        "A.  0",
        "B.  –cosx",
        "C.  –2cosx",
        "D.  sinx–cosx"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 91
    },
    {
      "id": 3,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Biết  sina=\\frac { 5 } { 13 }  ,  cosb=\\frac { 3 } { 5 }  ,  \\left ( { \\frac { \\pi } { 2 } < a < \\pi;\\,\\,0 < b < \\frac { \\pi } { 2 } } \\right )  . Kết quả của biểu thức  \\sin\\left ( { a+b } \\right )  bằng:",
      "explanation": "+ Ta có:  \\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 } < a < \\pi \\\\ sina=\\frac { 5 } { 13 } \\end{array} \\right.\\Rightarrow cosa=-\\frac { 12 } { 13 }  .\n \\left \\{ \\begin{array}{l} 0 < b < \\frac { \\pi } { 2 } \\\\ cosb=\\frac { 3 } { 5 } \\end{array} \\right.\\Rightarrow sinb=\\frac { 4 } { 5 }  .\nKhi đó  \\sin\\left ( { a+b } \\right )=sina.cosb+cosa.sinb=\\frac { 5 } { 13 }.\\frac { 3 } { 5 }+\\left ( { -\\frac { 12 } { 13 } } \\right ).\\frac { 4 } { 5 }=\\frac { -33 } { 65 }  .",
      "diagram": null,
      "options": [
        "A.  0",
        "B.  \\frac { 63 } { 65 }",
        "C.  \\frac { 56 } { 65 }",
        "D.  \\frac { -33 } { 65 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 92
    },
    {
      "id": 4,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các công thức sau, công thức nào sai ?",
      "explanation": "Ta có  cos6a=\\cos\\left ( { 2.3a } \\right )=\\cos ^ { 2 } 3a-\\sin ^ { 2 } 3a=2cos ^ { 2 } 3a-1=1-2sin ^ { 2 } 3a  nên đáp án C sai.",
      "diagram": null,
      "options": [
        "A.  cos6a=\\cos ^ { 2 } 3a-\\sin ^ { 2 } 3a",
        "B.  cos6a=1-2sin ^ { 2 } 3a",
        "C.  cos6a=1-6sin ^ { 2 } a",
        "D.  cos6a=2cos ^ { 2 } 3a-1"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 93
    },
    {
      "id": 5,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Đẳng thức nào không đúng với mọi  x  ?",
      "explanation": "Ta có  \\sin ^ { 2 } 2x=\\frac { 1-cos4x } { 2 }  .",
      "diagram": null,
      "options": [
        "A.  \\cos ^ { 2 } 3x=\\frac { 1+cos6x } { 2 }",
        "B.  cos2x=1-2sin ^ { 2 } x",
        "C.  sin2x=2sinxcosx",
        "D.  \\sin ^ { 2 } 2x=\\frac { 1+cos4x } { 2 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 94
    },
    {
      "id": 6,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Nếu  sinx+cosx=\\frac { 1 } { 2 }  thì  sin2x  bằng",
      "explanation": "Do  { s }{ i }{ n }\\,x+cosx=\\frac { 1 } { 2 }\\Rightarrow \\frac { 1 } { 4 }=\\left ( { { s }{ i }{ n }\\,x+{ c }{ o }{ s }\\,x } \\right ) ^ { 2 } \\,=\\,\\left ( { { s }{ i }{ n }\\,x } \\right ) ^ { 2 } +\\left ( { { c }{ o }{ s }\\,x } \\right ) ^ { 2 } +2sinx.{ c }{ o }{ s }x \n \\Rightarrow \\frac { 1 } { 4 }\\,=\\,1+sin2x\\Rightarrow sin2x\\,=\\frac { -3 } { 4 }  .",
      "diagram": null,
      "options": [
        "A.  \\frac { 3 } { 4 }",
        "B.  \\frac { 3 } { 8 }",
        "C.  \\frac { \\sqrt[] { 2 } } { 2 }",
        "D.  \\frac { -3 } { 4 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 95
    },
    {
      "id": 7,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Biết rằng  \\frac { 1 } { \\cos ^ { 2 } x-s\\,in ^ { 2 } x }+\\frac { 2.tanx } { 1-\\tan ^ { 2 } x }=\\frac { \\cos\\left ( { ax } \\right ) } { b-\\sin\\left ( { ax } \\right ) }\\,\\,\\left ( { a,\\,b\\in \\mathbb{R} } \\right )  . Tính giá trị của biểu thức  P=a+b  .",
      "explanation": "Ta có:  \\frac { 1 } { \\cos ^ { 2 } x-s\\,in ^ { 2 } x }+\\frac { 2.tanx } { 1-\\tan ^ { 2 } x }=\\,\\frac { 1 } { cos2x }+\\,tan2x  =\\,\\frac { 1 } { cos2x }+\\frac { sin2\\,x } { cos2x }=\\,\\frac { 1+sin2\\,x } { cos2x }=\\,\\frac { \\left ( { 1+sin2\\,x } \\right )cos2x } { \\cos ^ { 2 } 2x }  =\\frac { \\left ( { 1+sin2\\,x } \\right )cos2x } { 1-\\sin ^ { 2 } 2\\,x } \n =\\,\\frac { cos2x } { 1-sin2x }\\,  . Vậy  a=2,\\,b=1  . Suy ra  P=a+b=3  .",
      "diagram": null,
      "options": [
        "A.  P=4",
        "B.  P=1",
        "C.  P=2",
        "D.  P=3"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 96
    },
    {
      "id": 8,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Biết  \\sin\\left ( { \\alpha+\\frac { 3\\pi } { 2 } } \\right )+\\cos\\left ( { \\alpha+\\frac { 3\\pi } { 2 } } \\right )=\\sqrt[] { 2 }  . Tính  \\sin\\left ( { \\alpha+\\pi } \\right )-2cos\\left ( { \\alpha-\\pi } \\right )  .",
      "explanation": "Ta có  \\sin\\left ( { \\alpha+\\frac { 3\\pi } { 2 } } \\right )=\\sin\\left ( { \\alpha+2\\pi-\\frac { \\pi } { 2 } } \\right )=\\sin\\left ( { \\alpha-\\frac { \\pi } { 2 } } \\right )=-\\sin\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )=-\\cos\\alpha  .\n \\cos\\left ( { \\alpha+\\frac { 3\\pi } { 2 } } \\right )=\\cos\\left ( { \\alpha+2\\pi-\\frac { \\pi } { 2 } } \\right )=\\cos\\left ( { \\alpha-\\frac { \\pi } { 2 } } \\right )=\\cos\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )=\\sin\\alpha  .\nSuy ra  \\sin\\alpha-\\cos\\alpha=\\sqrt[] { 2 }\\Rightarrow \\sin\\alpha=\\cos\\alpha+\\sqrt[] { 2 }  .\nVì  \\sin ^ { 2 } \\alpha+\\cos ^ { 2 } \\alpha=1\\Rightarrow 2cos ^ { 2 } \\alpha+2\\sqrt[] { 2 }\\cos\\alpha+2=1 \n \\Leftrightarrow 2cos ^ { 2 } \\alpha+2\\sqrt[] { 2 }\\cos\\alpha+1=0\\Leftrightarrow \\cos\\alpha=-\\frac { 1 } { \\sqrt[] { 2 } }\\Rightarrow \\sin\\alpha=\\frac { 1 } { \\sqrt[] { 2 } }  .\nDo đó  \\sin\\left ( { \\alpha+\\pi } \\right )-2cos\\left ( { \\alpha-\\pi } \\right )=-\\sin\\alpha+2cos\\alpha=-\\frac { 3 } { \\sqrt[] { 2 } }  .",
      "diagram": null,
      "options": [
        "A.  \\frac { 3 } { \\sqrt[] { 2 } }",
        "B.  -\\frac { 3 } { \\sqrt[] { 2 } }",
        "C.  -\\frac { 1 } { \\sqrt[] { 2 } }",
        "D.  \\frac { 1 } { \\sqrt[] { 2 } }"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 97
    },
    {
      "id": 9,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Biết tam giác  ABC  có các góc thỏa mãn  sinA+sinB+sinC=acos\\frac { A } { b }\\cos\\frac { B } { b }\\cos\\frac { C } { b }  với a, b nguyên. Tính  a+b  .",
      "explanation": "VT=sinA+\\left ( { sinB+sinC } \\right )=sinA+2sin\\frac { B+C } { 2 }.\\cos\\frac { B-C } { 2 } \n =2sin\\frac { A } { 2 }.\\cos\\frac { A } { 2 }+2sin\\frac { B+C } { 2 }.\\cos\\frac { B-C } { 2 } \n =2sin\\frac { B+C } { 2 }.\\left ( { \\cos\\frac { B+C } { 2 }+\\cos\\frac { B-C } { 2 } } \\right )  (vì  A+B+C=\\pi  nên  \\frac { A } { 2 }=\\frac { \\pi } { 2 }-\\frac { B+C } { 2 }  )\n =4cos\\frac { A } { 2 }.\\cos\\frac { B } { 2 }.\\cos\\frac { C } { 2 }  . Suy ra  a=4;\\,b=2  . Vậy  a+b=4+2=6  .",
      "diagram": null,
      "options": [
        "A.  a+b=6",
        "B.  a+b=4",
        "C.  a+b=2",
        "D.  a+b=8"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 98
    },
    {
      "id": 10,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tìm giá trị lớn nhất của hàm số  y=\\sqrt[] { 2sinx+2 }  .",
      "explanation": "Ta có  ∀x\\in \\mathbb{R}:-1\\le sinx\\le 1\\Leftrightarrow  0\\le 2sinx+2\\le 4\\Rightarrow 0\\le y\\le 2  .\nVậy giá trị lớn nhất của hàm số bằng  2  đạt được khi  sinx=1\\Leftrightarrow x=\\frac { \\pi } { 2 }+k2\\pi  .\nGiá trị nhỏ nhất bằng  0  đạt được khi  x=-\\frac { \\pi } { 2 }+k2\\pi  .",
      "diagram": null,
      "options": [
        "A.  -1",
        "B.  1",
        "C.  2",
        "D.  0  ."
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 99
    },
    {
      "id": 11,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho tam giác  ABC  . Giá trị của biểu thức  P=\\sin ^ { 2 } A+\\sin ^ { 2 } B+\\sin ^ { 2 } C-2cosAcosBcosC  bằng",
      "explanation": "Ta có:\n+)  \\sin ^ { 2 } A+\\sin ^ { 2 } B+\\sin ^ { 2 } C=\\frac { 1-cos2A } { 2 }+\\frac { 1-cos2B } { 2 }+1-\\cos ^ { 2 } C \n =2-\\frac { cos2A+cos2B } { 2 }-\\cos ^ { 2 } C  =2-\\cos\\left ( { A+B } \\right )\\cos\\left ( { A-B } \\right )-\\cos ^ { 2 } C \n =2-\\cos\\left ( { \\pi-C } \\right )\\cos\\left ( { A-B } \\right )-\\cos ^ { 2 } C=2+cosCcos\\left ( { A-B } \\right )-\\cos ^ { 2 } C \n+)  2cosAcosBcosC=\\left ( { \\cos\\left ( { A+B } \\right )+\\cos\\left ( { A-B } \\right ) } \\right )cosC=\\left ( { -cosC+\\cos\\left ( { A-B } \\right ) } \\right )cosC \n =-\\cos ^ { 2 } C+\\cos\\left ( { A-B } \\right )cosC \n \\Rightarrow A=2+cosCcos\\left ( { A-B } \\right )-\\cos ^ { 2 } C+\\cos ^ { 2 } C-cosCcos\\left ( { A-B } \\right )=2  .",
      "diagram": null,
      "options": [
        "A.  1",
        "B.  3",
        "C.  2",
        "D.  0"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 100
    },
    {
      "id": 12,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho biểu thức  S=sinx+\\sin\\left ( { x+a } \\right )+\\sin\\left ( { x+2a } \\right )+\\sin\\left ( { x+3a } \\right )+\\sin\\left ( { x+4a } \\right )  . Nếu  0 < a < \\pi  thì  S  không phụ thuộc vào  x  khi  a  nhận giá trị nào?",
      "explanation": "Nhân 2 vế của  S  với  \\sin\\frac { a } { 2 }\\ne 0  ta được\n \\sin\\frac { a } { 2 }.S=\\sin\\frac { a } { 2 }sinx+\\sin\\frac { a } { 2 }\\sin\\left ( { x+a } \\right )+\\sin\\frac { a } { 2 }\\sin\\left ( { x+2a } \\right )+\\sin\\frac { a } { 2 }\\sin\\left ( { x+3a } \\right )+\\sin\\frac { a } { 2 }\\sin\\left ( { x+4a } \\right )  Ta có:\n+  \\sin\\frac { a } { 2 }sinx=\\frac { 1 } { 2 }\\left[ \\cos\\left ( { \\frac { a } { 2 }-x } \\right )-\\cos\\left ( { \\frac { a } { 2 }+x } \\right ) \\right] \n+  \\sin\\frac { a } { 2 }\\sin\\left ( { x+a } \\right )=\\frac { 1 } { 2 }\\left[ \\cos\\left ( { \\frac { a } { 2 }+x } \\right )-\\cos\\left ( { \\frac { 3a } { 2 }+x } \\right ) \\right] \n+  \\sin\\frac { a } { 2 }\\sin\\left ( { x+2a } \\right )=\\frac { 1 } { 2 }\\left[ \\cos\\left ( { \\frac { 3a } { 2 }+x } \\right )-\\cos\\left ( { \\frac { 5a } { 2 }+x } \\right ) \\right] \n+  \\sin\\frac { a } { 2 }\\sin\\left ( { x+3a } \\right )=\\frac { 1 } { 2 }\\left[ \\cos\\left ( { \\frac { 5a } { 2 }+x } \\right )-\\cos\\left ( { \\frac { 7a } { 2 }+x } \\right ) \\right] \n+  \\sin\\frac { a } { 2 }\\sin\\left ( { x+4a } \\right )=\\frac { 1 } { 2 }\\left[ \\cos\\left ( { \\frac { 7a } { 2 }+x } \\right )-\\cos\\left ( { \\frac { 9a } { 2 }+x } \\right ) \\right] \n \\Rightarrow \\sin\\frac { a } { 2 }S=\\frac { 1 } { 2 }\\left[ \\cos\\left ( { \\frac { a } { 2 }-x } \\right )-\\cos\\left ( { \\frac { 9a } { 2 }+x } \\right ) \\right]=\\sin\\frac { 5a } { 2 }\\sin\\left ( { x+2a } \\right ) \n \\Rightarrow S=\\frac { \\sin\\frac { 5a } { 2 }\\sin\\left ( { x+2a } \\right ) } { \\sin\\frac { a } { 2 } }  .\nĐể  S  không phụ thuộc vào  x  thì  \\sin\\frac { 5a } { 2 }=0  .\nDo  0 < a < \\pi  nên  a=\\frac { 2\\pi } { 5 }  hoặc  a=\\frac { 4\\pi } { 5 }  .\nB.Câu hỏi – Trả lời Đúng/sai",
      "diagram": null,
      "options": [
        "A.  a=\\frac { 2\\pi } { 5 }",
        "B.  a=\\frac { 2\\pi } { 5 }  hoặc  a=\\frac { 4\\pi } { 5 }",
        "C.  a=-\\frac { 2\\pi } { 5 }  hoặc  a=\\frac { 4\\pi } { 5 }",
        "D.  a=\\frac { 4\\pi } { 5 }"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 101
    },
    {
      "id": 13,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho biết  \\sin\\alpha=\\frac { 3 } { 5 },\\cos\\alpha=-\\frac { 4 } { 5 }  và các biểu thức  A=\\sin\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )+\\sin(\\pi+\\alpha)  ;  B=\\cos(\\pi-\\alpha)+\\cot\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )  . Khi đó",
      "explanation": "(a)  A=\\cos\\alpha-\\sin\\alpha  .\nTa có:  A=\\sin\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )+\\sin(\\pi+\\alpha)=\\cos\\alpha-\\sin\\alpha=-\\frac { 4 } { 5 }-\\frac { 3 } { 5 }=-\\frac { 7 } { 5 }  .\n» Chọn ĐÚNG.\n(b)  B=\\cos\\alpha+\\tan\\alpha  .\nTa có:  B=\\cos(\\pi-\\alpha)+\\cot\\left ( { \\frac { \\pi } { 2 }-\\alpha } \\right )=-\\cos\\alpha+\\tan\\alpha  =-\\cos\\alpha+\\frac { \\sin\\alpha } { \\cos\\alpha }=\\frac { 4 } { 5 }+\\frac { \\frac { 3 } { 5 } } { -\\frac { 4 } { 5 } }=\\frac { 1 } { 20 }{ . }{ } \n» Chọn SAI.\n(c)  A+B=\\frac { 27 } { 20 }  .\nTa có  A+B=-\\frac { 27 } { 20 }  .\n» Chọn SAI.\n(d)  A-B=-\\frac { 29 } { 20 }  .\nTa có  A-B=-\\frac { 29 } { 20 }  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "A=\\cos\\alpha-\\sin\\alpha",
          "correct": true
        },
        {
          "subId": "b",
          "text": "B=\\cos\\alpha+\\tan\\alpha",
          "correct": false
        },
        {
          "subId": "c",
          "text": "A+B=\\frac { 27 } { 20 }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "A-B=-\\frac { 29 } { 20 }",
          "correct": true
        }
      ],
      "globalId": 102
    },
    {
      "id": 14,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho  0 < a < \\frac { \\pi } { 2 };\\frac { \\pi } { 2 } < b < \\pi  và  tana=3;tanb=-2  .",
      "explanation": "(a)  \\tan\\left ( { a+\\pi } \\right )=-3  .\n \\tan\\left ( { a+\\pi } \\right )=tana=3  .\n» Chọn SAI.\n(b)  \\tan\\left ( { a+b } \\right )=-1  .\n \\tan\\left ( { a+b } \\right )=\\frac { tana+tanb } { 1-tana.tanb }=\\frac { 3+\\left ( { -2 } \\right ) } { 1-3.\\left ( { -2 } \\right ) }=\\frac { 1 } { 7 }  .\n» Chọn SAI.\n(c)  \\cot\\left ( { a-b } \\right )=1  .\n \\cot\\left ( { a-b } \\right )=\\frac { 1 } { \\tan\\left ( { a-b } \\right ) }=\\frac { 1 } { \\frac { tana-tanb } { 1+tana.tanb } }=-1  .\n» Chọn SAI.\n(d)  \\sin\\left ( { a-b } \\right )=-\\frac { \\sqrt[] { 2 } } { 2 }  .\nTa có:  0 < a < \\frac { \\pi } { 2 };  tana=3\\Rightarrow cosa>0  ;\n 1+\\tan ^ { 2 } a=\\frac { 1 } { \\cos ^ { 2 } a }\\Rightarrow cosa=\\frac { \\sqrt[] { 10 } } { 10 };sina=tana.cosa=\\frac { 3\\sqrt[] { 10 } } { 10 }  .\nTa có:  \\frac { \\pi } { 2 } < b < \\pi;  tanb=-2\\Rightarrow cosb < 0  ;\n 1+\\tan ^ { 2 } b=\\frac { 1 } { \\cos ^ { 2 } b }\\Rightarrow cosb=-\\frac { \\sqrt[] { 5 } } { 5 };sinb=tanb.cosb=\\frac { 2\\sqrt[] { 5 } } { 5 }  .\nVậy  \\sin\\left ( { a-b } \\right )=sina.cosb-cosa.sinb=\\frac { 3\\sqrt[] { 10 } } { 10 }.\\left ( { -\\frac { \\sqrt[] { 5 } } { 5 } } \\right )-\\frac { \\sqrt[] { 10 } } { 10 }.\\frac { 2\\sqrt[] { 5 } } { 5 }=-\\frac { \\sqrt[] { 2 } } { 2 } \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\tan\\left ( { a+\\pi } \\right )=-3",
          "correct": false
        },
        {
          "subId": "b",
          "text": "\\tan\\left ( { a+b } \\right )=-1",
          "correct": false
        },
        {
          "subId": "c",
          "text": "\\cot\\left ( { a-b } \\right )=1",
          "correct": false
        },
        {
          "subId": "d",
          "text": "\\sin\\left ( { a-b } \\right )=-\\frac { \\sqrt[] { 2 } } { 2 }",
          "correct": true
        }
      ],
      "globalId": 103
    },
    {
      "id": 15,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho  sinx=-\\frac { 4 } { 5 }  và  \\frac { 3\\pi } { 2 } < x < 2\\pi  .",
      "explanation": "(a)  cos2x=-\\frac { \\sqrt[] { 7 } } { 5 }  .\nCó  cos2x=1-2sin ^ { 2 } x=1-\\frac { 32 } { 25 }=-\\frac { 7 } { 25 }  .\n» Chọn SAI.\n(b)  \\sin\\frac { x } { 2 }=\\frac { \\sqrt[] { 5 } } { 5 }  .\nCó  \\cos ^ { 2 } x=1-\\sin ^ { 2 } x=1-\\frac { 16 } { 25 }=\\frac { 9 } { 5 }  . Do  \\frac { 3\\pi } { 2 } < x < 2\\pi  nên  cosx>0\\Rightarrow cosx=\\frac { 3 } { 5 }  .\nTa cũng có  \\sin ^ { 2 } \\frac { x } { 2 }=\\frac { 1-cosx } { 2 }=\\frac { 1 } { 5 }  mà  \\frac { 3\\pi } { 2 } < x < 2\\pi\\Leftrightarrow \\frac { 3\\pi } { 4 } < \\frac { x } { 2 } < \\pi\\Rightarrow \\sin\\frac { x } { 2 }>0  nên chọn  \\sin\\frac { x } { 2 }=\\frac { \\sqrt[] { 5 } } { 5 }  .\n» Chọn ĐÚNG.\n(c)  \\tan\\frac { x } { 2 }=\\frac { 1 } { 2 }  .\nTheo trên ta có  sinx=2sin\\frac { x } { 2 }.\\cos\\frac { x } { 2 }\\Rightarrow \\cos\\frac { x } { 2 }=\\frac { sinx } { 2sin\\frac { x } { 2 } }=\\frac { -2\\sqrt[] { 5 } } { 5 }  .\nVậy  \\tan\\frac { x } { 2 }=\\frac { \\sin\\frac { x } { 2 } } { \\cos\\frac { x } { 2 } }=-\\frac { 1 } { 2 }  .\n» Chọn SAI.\n(d)  C=\\frac { 2sin2x-cos2x } { tan2x+cos2x }=\\frac { -287 } { 551 }. \nCó  C=\\frac { 2sin2x-cos2x } { tan2x+cos2x }=\\frac { 4sinx.{ c }{ o }{ s }\\,x-\\left ( { 2cos ^ { 2 } x-1 } \\right ) } { \\frac { 2sinx.{ c }{ o }{ s }\\,x } { 2cos ^ { 2 } x-1 }+\\left ( { 2cos ^ { 2 } x-1 } \\right ) }=\\frac { -287 } { 551 }. \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "cos2x=-\\frac { \\sqrt[] { 7 } } { 5 }",
          "correct": false
        },
        {
          "subId": "b",
          "text": "\\sin\\frac { x } { 2 }=\\frac { \\sqrt[] { 5 } } { 5 }",
          "correct": true
        },
        {
          "subId": "c",
          "text": "\\tan\\frac { x } { 2 }=\\frac { 1 } { 2 }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "C=\\frac { 2sin2x-cos2x } { tan2x+cos2x }=\\frac { -287 } { 551 }.",
          "correct": true
        }
      ],
      "globalId": 104
    },
    {
      "id": 16,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Biết  sin2\\alpha=-\\frac { 4 } { 5 },\\frac { \\pi } { 2 } < \\alpha < \\frac { 3\\pi } { 4 }  . Các mệnh đề sau đây đúng hay sai?",
      "explanation": "(a)  A=cos2\\alpha=\\frac { 3 } { 5 } \nTa có  \\cos ^ { 2 } 2\\alpha=1-\\sin ^ { 2 } 2\\alpha=1-\\frac { 16 } { 25 }=\\frac { 9 } { 25 }  .\nVì  \\frac { \\pi } { 2 } < \\alpha < \\frac { 3\\pi } { 4 }\\Rightarrow \\pi < 2\\alpha < \\frac { 3\\pi } { 2 }\\Rightarrow cos2\\alpha < 0\\Rightarrow cos2\\alpha=\\frac { -3 } { 5 } \n» Chọn SAI.\n(b)  B=\\left ( { 1+3sin ^ { 2 } \\alpha } \\right )\\left ( { 1-4cos ^ { 2 } \\alpha } \\right )=\\frac { 17 } { 25 } \nTa có  B=\\left ( { 1+3.\\frac { 1-cos2\\alpha } { 2 } } \\right )\\left ( { 1-4.\\frac { 1+cos2\\alpha } { 2 } } \\right )=\\left ( { \\frac { 5 } { 2 }-\\frac { 3 } { 2 }cos2\\alpha } \\right )\\left ( { -1-2cos2\\alpha } \\right )  .\nThay  cos2\\alpha=-\\frac { 3 } { 5 }  vào  P  , ta được  P=\\left ( { \\frac { 5 } { 2 }-\\frac { 3 } { 2 }.\\left ( { \\frac { -3 } { 5 } } \\right ) } \\right )\\left ( { -1-2.\\left ( { \\frac { -3 } { 5 } } \\right ) } \\right )=\\frac { 17 } { 25 }  .\n» Chọn ĐÚNG.\n(c)  C=\\sin ^ { 4 } \\alpha+\\cos ^ { 4 } \\alpha=\\frac { 7 } { 25 } \nÁp dụng  a ^ { 4 } +b ^ { 4 } =\\left ( { a ^ { 2 } +b ^ { 2 } } \\right ) ^ { 2 } -2a ^ { 2 } b ^ { 2 }  .\nTa có  C=\\sin ^ { 4 } \\alpha+\\cos ^ { 4 } \\alpha=\\left ( { \\sin ^ { 2 } \\alpha+\\cos ^ { 2 } \\alpha } \\right ) ^ { 2 } -2sin ^ { 2 } \\alpha.\\cos ^ { 2 } \\alpha=1-\\frac { 1 } { 2 }\\sin ^ { 2 } 2\\alpha=\\frac { 17 } { 25 }  .\n» Chọn SAI.\n(d)  D=\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )=\\frac { -7\\sqrt[] { 2 } } { 10 } \nTa có  \\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )=sin2xcos\\frac { \\pi } { 4 }+cos2xsin\\frac { \\pi } { 4 }=\\left ( { \\frac { -4 } { 5 } } \\right ).\\frac { \\sqrt[] { 2 } } { 2 }+\\left ( { \\frac { -3 } { 5 } } \\right ).\\frac { \\sqrt[] { 2 } } { 2 }=\\frac { -7\\sqrt[] { 2 } } { 10 } \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "A=cos2\\alpha=\\frac { 3 } { 5 }",
          "correct": false
        },
        {
          "subId": "b",
          "text": "B=\\left ( { 1+3sin ^ { 2 } \\alpha } \\right )\\left ( { 1-4cos ^ { 2 } \\alpha } \\right )=\\frac { 17 } { 25 }",
          "correct": true
        },
        {
          "subId": "c",
          "text": "C=\\sin ^ { 4 } \\alpha+\\cos ^ { 4 } \\alpha=\\frac { 7 } { 25 }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "D=\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )=\\frac { -7\\sqrt[] { 2 } } { 10 }",
          "correct": true
        }
      ],
      "globalId": 105
    },
    {
      "id": 17,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho tam giác  ABC.",
      "explanation": "(a)  \\widehat { A }=180 ^ { 0 } -\\left ( { \\widehat { B }+ \\widehat { C } } \\right )  .\nĐúng vì :  A+B+C=180 ^ { 0 } \\Leftrightarrow A=180 ^ { 0 } -\\left ( { B+C } \\right ) \n» Chọn ĐÚNG.\n(b)  sinB+\\sin\\left ( { A+C } \\right )=0  .\n A+B+C=180 ^ { 0 } \n \\Leftrightarrow B=180 ^ { 0 } -\\left ( { A+C } \\right )\\Leftrightarrow sinB=\\sin\\left ( { 180 ^ { 0 } -\\left ( { A+C } \\right ) } \\right )=\\sin\\left ( { A+C } \\right ) \nSuy ra:  sinB-\\sin\\left ( { A+C } \\right )=0  .\n» Chọn SAI.\n(c)  sinA+sinB+sinC=4cos\\frac { A } { 2 }\\cos\\frac { B } { 2 }\\cos\\frac { C } { 2 } \n \\left ( { sinA+sinB } \\right )+sinC=2sin\\frac { A+B } { 2 }\\cos\\frac { A-B } { 2 }+2sin\\frac { C } { 2 }\\cos\\frac { C } { 2 }  (1)\nDo  \\frac { A+B } { 2 }=\\frac { 180 ^ { 0 } -C } { 2 }=90 ^ { 0 } -\\frac { C } { 2 }  nên  \\sin\\frac { A+B } { 2 }=\\cos\\frac { C } { 2 }  (2)\nTương tự:  \\sin\\frac { C } { 2 }=\\cos\\frac { A+B } { 2 }  (3)\nTừ (1),(2) và (3)  \\Rightarrow \\left ( { sinA+sinB } \\right )+sinC \n =2cos\\frac { C } { 2 }\\cos\\frac { A-B } { 2 }+2sin\\frac { C } { 2 }\\cos\\frac { C } { 2 } \n =2cos\\frac { C } { 2 }.\\left ( { \\cos\\frac { A-B } { 2 }+\\cos\\frac { A+B } { 2 } } \\right )=2cos\\frac { A } { 2 }.2cos\\frac { B } { 2 }.\\cos\\frac { C } { 2 }=4cos\\frac { A } { 2 }.\\cos\\frac { B } { 2 }.\\cos\\frac { C } { 2 } \n» Chọn ĐÚNG.\n(d)  \\DeltaABC  cân khi  sinA.sinC=cosA.cosC \n sinA.sinC=cosA.cosC\\Leftrightarrow cosA.cosC-sinA.sinC=0\\Leftrightarrow \\cos\\left ( { A+C } \\right )=0  \\Leftrightarrow -cosB=0\\Leftrightarrow cosB=0\\Leftrightarrow B=90 ^ { 0 }  .\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "\\widehat { A }=180 ^ { 0 } -\\left ( { \\widehat { B }+ \\widehat { C } } \\right )",
          "correct": true
        },
        {
          "subId": "b",
          "text": "sinB+\\sin\\left ( { A+C } \\right )=0",
          "correct": false
        },
        {
          "subId": "c",
          "text": "sinA+sinB+sinC=4cos\\frac { A } { 2 }\\cos\\frac { B } { 2 }\\cos\\frac { C } { 2 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "\\DeltaABC  cân khi  sinA.sinC=cosA.cosC",
          "correct": false
        }
      ],
      "globalId": 106
    },
    {
      "id": 18,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Biết  tanx=-\\frac { 1 } { 2 }  và  \\frac { \\pi } { 2 } < x < \\pi  . Các mệnh đề sau đúng hay sai?",
      "explanation": "(a)  cotx=-2  .\nVì  tanx=-\\frac { 1 } { 2 }  \\Rightarrow cotx=-2  nên mệnh đề ĐÚNG\n» Chọn ĐÚNG.\n(b)  cosx=\\frac { 2\\sqrt[] { 5 } } { 5 }  .\nCó  tanx=-\\frac { 1 } { 2 }  \\Rightarrow \\cos ^ { 2 } x=\\frac { 1 } { 1+\\tan ^ { 2 } x }=\\frac { 4 } { 5 }  .\nMà  \\frac { \\pi } { 2 } < x < \\pi  \\Rightarrow \\left \\{ \\begin{array}{l} sinx>0 \\\\ cosx < 0 \\end{array} \\right.  \\Rightarrow cosx=-\\frac { 2\\sqrt[] { 5 } } { 5 }  . Mệnh đề b) SAI.\n» Chọn SAI.\n(c)  sinx+cosx=-\\frac { \\sqrt[] { 5 } } { 5 }  .\n sinx=tanx.cosx=\\frac { \\sqrt[] { 5 } } { 5 }\\Rightarrow sinx+cosx=-\\frac { \\sqrt[] { 5 } } { 5 }  nên mệnh đề ĐÚNG.\n» Chọn ĐÚNG.\n(d)  M=\\frac { 2sin ^ { 2 } x+3sinx.cosx-4cos ^ { 2 } x } { 5cos ^ { 2 } x-\\sin ^ { 2 } x }=-\\frac { 8 } { 19 } \nChia cả tử và mẫu của  M  cho  \\cos ^ { 2 } x  ta có  M=\\frac { 2\\frac { \\sin ^ { 2 } x } { \\cos ^ { 2 } x }+3\\frac { sinx.cosx } { \\cos ^ { 2 } x }-4 } { 5-\\frac { \\sin ^ { 2 } x } { \\cos ^ { 2 } x } }=\\frac { 2.\\frac { 1 } { 4 }+3.\\left ( { -\\frac { 1 } { 2 } } \\right )-4 } { 5-\\frac { 1 } { 4 } }=-\\frac { 20 } { 19 }  nên mệnh đề SAI.\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "cotx=-2",
          "correct": true
        },
        {
          "subId": "b",
          "text": "cosx=\\frac { 2\\sqrt[] { 5 } } { 5 }",
          "correct": false
        },
        {
          "subId": "c",
          "text": "sinx+cosx=-\\frac { \\sqrt[] { 5 } } { 5 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "M=\\frac { 2sin ^ { 2 } x+3sinx.cosx-4cos ^ { 2 } x } { 5cos ^ { 2 } x-\\sin ^ { 2 } x }=-\\frac { 8 } { 19 }",
          "correct": false
        }
      ],
      "globalId": 107
    },
    {
      "id": 19,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Trong vật lý, phương trình tổng quát của một vật giao động điều hòa được cho bởi công thức  x(t)=Acos(ωt+\\varphi)  trong đó  t  là thời điểm (tính bằng giây), .  x\\left ( { t } \\right )  là li độ của vật tại thời điểm  t  ,  A  là biên độ dao động  (A>0)  . (Dùng cho ba ý a, b, c).",
      "explanation": "(a) Nếu một vật giao động theo phương trình  x\\left ( { t } \\right )=5cos\\left ( { 100\\pit+\\frac { \\pi } { 4 } } \\right )  thì li độ của vật ở thời điểm ban đầu là  5\\sqrt[] { 2 }  .\nTa có:  x\\left ( { t } \\right )=5sin\\left ( { 100\\pit+\\frac { \\pi } { 4 } } \\right )  thì li độ của vật ở thời điểm ban đầu (ứng với  t=0  ) là  x=5sin\\left ( { \\frac { \\pi } { 4 } } \\right )=\\frac { 5\\sqrt[] { 2 } } { 2 }  .\n» Chọn SAI.\n(b) Một vật giao động điều hòa theo phương trình  x\\left ( { t } \\right )=10sin\\left ( { 50\\pit } \\right ).\\cos\\left ( { 50\\pit } \\right )  thì biên độ của giao động là  5  .\nTa có:  x\\left ( { t } \\right )=10sin\\left ( { 50\\pit } \\right ).\\cos\\left ( { 50\\pit } \\right )=5.\\sin\\left ( { 100\\pit } \\right )=5.\\cos\\left ( { 100\\pit+\\frac { 3\\pi } { 2 } } \\right )  .\nKhi đó biên độ của giao động là  5  .\n» Chọn ĐÚNG.\n(c) Cho hai dao động điều hòa cùng phương có phương trình lần lượt là  x_{ 1 } =5cos\\left ( { 100\\pi{ t }+\\pi } \\right )  ({ c }{ m })  và  x_{ 2 } =5cos\\left ( { 100\\pi{ t }-\\frac { \\pi } { 2 } } \\right )  ({ c }{ m })  . Khi đó phương trình dao động tổng hợp của hai dao động trên là  x=5\\sqrt[] { 2 }\\cos\\left ( { 100\\pit+\\frac { \\pi } { 4 } } \\right )({ c }{ m })  .\nTa có:  x=x_{ 1 } +x_{ 2 } { }=5cos\\left ( { 100\\pi{ t }+\\pi } \\right )+5cos\\left ( { 100\\pi{ t }-\\frac { \\pi } { 2 } } \\right ){ }=5\\left[ \\cos\\left ( { 100\\pi{ t }+\\pi } \\right )+\\cos\\left ( { 100\\pi{ t }-\\frac { \\pi } { 2 } } \\right ) \\right]{ } \n =5.2cos\\left ( { 100\\pit+\\frac { \\pi } { 4 } } \\right )\\cos\\frac { 3\\pi } { 4 }{ }=-5\\sqrt[] { 2 }\\cos\\left ( { 100\\pit+\\frac { \\pi } { 4 } } \\right ){ }=5\\sqrt[] { 2 }\\cos\\left ( { 100\\pit-\\frac { 3\\pi } { 4 } } \\right ). \n» Chọn SAI.\n(d) Một sợi cáp  R  được gắn vào một cột thẳng đứng ở vị trí cách mặt đất  14 { m }  . Một sợi cáp  S  khác cũng được gắn vào cột đó ở vị trí cách mặt đất  12 { m }  . Biết rằng hai sợi cáp trên cùng được gắn với mặt đất tại một vị trí cách chân cột  15 { m }  (Hình vẽ bên dưới). Gọi  \\alpha  là góc giữa hai sợi cáp trên khi đó  \\tan\\alpha=\\frac { 10 } { 131 }. \nTa có  \\tan\\beta=\\frac { AH } { HO }=\\frac { 14 } { 15 };\\quad \\tan\\beta_{ 1 } =\\frac { BH } { HO }=\\frac { 12 } { 15 }. \nKhi đó  \\tan\\alpha=\\tan\\left ( { \\beta-\\beta_{ 1 } } \\right )=\\frac { \\tan\\beta-\\tan\\beta_{ 1 } } { 1+\\tan\\betatan\\beta_{ 1 } }=\\frac { 10 } { 131 }. \n» Chọn ĐÚNG.\nC.Câu hỏi – Trả lời ngắn",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Nếu một vật giao động theo phương trình  x\\left ( { t } \\right )=5cos\\left ( { 100\\pit+\\frac { \\pi } { 4 } } \\right )  thì li độ của vật ở thời điểm ban đầu là  5\\sqrt[] { 2 }  .",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Một vật giao động điều hòa theo phương trình  x\\left ( { t } \\right )=10sin\\left ( { 50\\pit } \\right ).\\cos\\left ( { 50\\pit } \\right )  thì biên độ của giao động là  5  .",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Cho hai dao động điều hòa cùng phương có phương trình lần lượt là  x_{ 1 } =5cos\\left ( { 100\\pi{ t }+\\pi } \\right )  ({ c }{ m })  và  x_{ 2 } =5cos\\left ( { 100\\pi{ t }-\\frac { \\pi } { 2 } } \\right )  ({ c }{ m })  . Khi đó phương trình dao động tổng hợp của hai dao động trên là  x=5\\sqrt[] { 2 }\\cos\\left ( { 100\\pit+\\frac { \\pi } { 4 } } \\right )({ c }{ m })  .",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Một sợi cáp  R  được gắn vào một cột thẳng đứng ở vị trí cách mặt đất  14 { m }  . Một sợi cáp  S  khác cũng được gắn vào cột đó ở vị trí cách mặt đất  12 { m }  . Biết rằng hai sợi cáp trên cùng được gắn với mặt đất tại một vị trí cách chân cột  15 { m }  (Hình vẽ bên dưới). Gọi  \\alpha  là góc giữa hai sợi cáp trên khi đó  \\tan\\alpha=\\frac { 10 } { 131 }.",
          "correct": true
        }
      ],
      "globalId": 108
    },
    {
      "id": 20,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho biểu thức  P=cos5x.cos3x-\\cos\\left ( { 5x+90^\\circ } \\right ).\\cos\\left ( { -3x-90^\\circ } \\right )  . Sau khi đơn giản hóa, ta được biểu thức  P=\\cos\\left ( { ax } \\right )  . Giá trị của  a  bằng",
      "explanation": "Biến đổi biểu thức  P  , ta có:\n P=cos5x.cos3x-\\cos\\left ( { 5x+90^\\circ } \\right ).\\cos\\left ( { -3x-90^\\circ } \\right ) \n =cos5x.cos3x+sin5x.\\cos\\left ( { 3x+90^\\circ } \\right )=cos5x.cos3x-sin5x.sin3x=\\cos\\left ( { 5x+3x } \\right )=\\cos\\left ( { 8x } \\right ) \n \\Rightarrow a=8  .",
      "diagram": null,
      "correctAnswer": "8",
      "globalId": 109
    },
    {
      "id": 21,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho góc  \\alpha  thỏa mãn  \\sin\\alpha=\\frac { 1 } { 5 }  . Khi đó giá trị biểu thức  P=\\cos ^ { 2 } 2x+\\cos ^ { 2 } x  bằng  \\frac { a } { b }  . Tính  a+b  . Biết rằng phân số  \\frac { a } { b }  là phân số tối giản.",
      "explanation": "Biến đổi biểu thức  P  rồi thay giá trị  \\sin\\alpha=\\frac { 1 } { 5 }  vào  P  , ta được:\n P=\\cos ^ { 2 } 2x+\\cos ^ { 2 } x \n =\\left ( { 1-2sin ^ { 2 } \\alpha } \\right ) ^ { 2 } +\\left ( { 1-\\sin ^ { 2 } \\alpha } \\right )=\\left ( { 1-2.\\left ( { \\frac { 1 } { 5 } } \\right ) ^ { 2 } } \\right ) ^ { 2 } +\\left ( { 1-\\left ( { \\frac { 1 } { 5 } } \\right ) ^ { 2 } } \\right )=\\frac { 1129 } { 625 } \n \\Rightarrow \\left \\{ \\begin{array}{l} a=1129 \\\\ b=625 \\end{array} \\right.\\Rightarrow a+b=1754",
      "diagram": null,
      "correctAnswer": "1754",
      "globalId": 110
    },
    {
      "id": 22,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Tính giá trị biểu thức:  A=\\frac { cos10x-cos9x-cos8x+cos7x } { sin10x-sin9x-sin8x+sin7x }  với  x=\\frac { \\pi } { 34 }  (kết quả làm tròn đến hàng phần trăm).",
      "explanation": "Ta có:  A=\\frac { \\left ( { cos10x+cos7x } \\right )-\\left ( { cos9x+cos8x } \\right ) } { \\left ( { sin10x+sin7x } \\right )-\\left ( { sin9x+sin8x } \\right ) } \n =\\frac { 2cos\\frac { 17x } { 2 }\\cos\\frac { 3x } { 2 }-2cos\\frac { 17x } { 2 }\\cos\\frac { x } { 2 } } { 2sin\\frac { 17x } { 2 }\\cos\\frac { 3x } { 2 }-2sin\\frac { 17x } { 2 }\\cos\\frac { x } { 2 } }  =\\frac { 2cos\\frac { 17x } { 2 }\\left ( { \\cos\\frac { 3x } { 2 }-\\cos\\frac { x } { 2 } } \\right ) } { 2sin\\frac { 17x } { 2 }\\left ( { \\cos\\frac { 3x } { 2 }-\\cos\\frac { x } { 2 } } \\right ) }  =\\cot\\frac { 17x } { 2 }  .\nVậy giá trị của biểu thức  A  tại  x=\\frac { \\pi } { 34 }  bằng  \\cot\\frac { 17.\\frac { \\pi } { 34 } } { 2 }=\\cot\\frac { \\pi } { 4 }=\\frac { \\sqrt[] { 2 } } { 2 }\\approx 0,71",
      "diagram": null,
      "correctAnswer": "0,71",
      "globalId": 111
    },
    {
      "id": 23,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  tana=2  và  a\\in \\left ( { 0;\\frac { \\pi } { 2 } } \\right )  . Tính  A=2\\sqrt[] { 2 }\\sin\\frac { a } { 2 }\\sin\\left ( { \\frac { a } { 2 }+\\frac { \\pi } { 4 } } \\right )  (kết quả làm tròn đến hàng phần trăm).",
      "explanation": "Ta có  \\frac { 1 } { \\cos ^ { 2 } a }=\\tan ^ { 2 } a+1\\Leftrightarrow \\cos ^ { 2 } a=\\frac { 1 } { \\tan ^ { 2 } a+1 }=\\frac { 1 } { 5 }\\Leftrightarrow cosa=\\pm \\frac { 1 } { \\sqrt[] { 5 } } \nMà  a\\in \\left ( { 0;\\frac { \\pi } { 2 } } \\right )  nên  cosa=\\frac { 1 } { \\sqrt[] { 5 } }  và  sina=tana.cosa=\\frac { 2 } { \\sqrt[] { 5 } }  .\nMặt khác  A=2\\sqrt[] { 2 }\\sin\\frac { a } { 2 }\\sin\\left ( { \\frac { a } { 2 }+\\frac { \\pi } { 4 } } \\right ) \n \\Leftrightarrow A=2\\sqrt[] { 2 }\\sin\\frac { a } { 2 }\\left ( { \\sin\\frac { a } { 2 }\\cos\\frac { \\pi } { 4 }+\\sin\\frac { \\pi } { 4 }\\cos\\frac { a } { 2 } } \\right )\\Leftrightarrow A=2\\sqrt[] { 2 }\\sin\\frac { a } { 2 }\\left ( { \\frac { \\sqrt[] { 2 } } { 2 }\\sin\\frac { a } { 2 }+\\frac { \\sqrt[] { 2 } } { 2 }\\cos\\frac { a } { 2 } } \\right ) \n \\Leftrightarrow A=2sin\\frac { a } { 2 }\\left ( { \\sin\\frac { a } { 2 }+\\cos\\frac { a } { 2 } } \\right )\\Leftrightarrow A=2sin ^ { 2 } \\frac { a } { 2 }+2sin\\frac { a } { 2 }\\cos\\frac { a } { 2 }\\Leftrightarrow A=2\\left ( { \\frac { 1-cosa } { 2 } } \\right )+sina \n \\Leftrightarrow A=sina-cosa+1\\Leftrightarrow A=\\frac { 2 } { \\sqrt[] { 5 } }-\\frac { 1 } { \\sqrt[] { 5 } }+1\\Leftrightarrow A=\\frac { 5+\\sqrt[] { 5 } } { 5 }\\approx 1,45  .",
      "diagram": null,
      "correctAnswer": "1,45",
      "globalId": 112
    },
    {
      "id": 24,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho  \\sin\\alpha=\\frac { 3 } { 5 }  và  \\frac { \\pi } { 2 } < \\alpha < \\pi  . Giá trị gần đúng của biểu thức  E=\\frac { 2tan\\alpha-\\cot\\alpha } { \\tan\\alpha+3cot\\alpha }  là bao nhiêu (làm tròn kết quả đến hàng trăm)?",
      "explanation": "Vì  \\frac { \\pi } { 2 } < \\alpha < \\pi\\Rightarrow c{ o }{ s }\\alpha < { 0 }  nên  c{ o }{ s }\\alpha=-\\sqrt[] { 1-\\sin ^ { 2 } \\alpha }=-\\sqrt[] { 1-\\frac { 9 } { 25 } }=-\\frac { 4 } { 5 }  .\n \\tan\\alpha=\\frac { \\sin\\alpha } { \\cos\\alpha }=-\\frac { 3 } { 4 }\\Rightarrow \\cot\\alpha=-\\frac { 4 } { 3 }  \\Rightarrow \\frac { 2tan\\alpha-\\cot\\alpha } { \\tan\\alpha+3cot\\alpha }=\\frac { 2 } { 57 }\\approx 0,04  .",
      "diagram": null,
      "correctAnswer": "0,04",
      "globalId": 113
    },
    {
      "id": 25,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho biểu thức lượng giác sau (giả sử các biểu thức đều có nghĩa):  A=\\cos(5\\pi-x)-\\sin\\left ( { \\frac { 3\\pi } { 2 }+x } \\right )+\\tan\\left ( { \\frac { 3\\pi } { 2 }-x } \\right )+\\cot\\left ( { 3\\pi-x } \\right )  . Khi đó giá trị của  10A  bằng bao nhiêu?",
      "explanation": "Ta có  \\cos\\left ( { 5\\pi-x } \\right )=\\cos\\left ( { \\pi-x+2.2\\pi } \\right )=\\cos\\left ( { \\pi-x } \\right )=-cosx  .\n \\sin\\left ( { \\frac { 3\\pi } { 2 }+x } \\right )=\\sin\\left ( { \\pi+\\frac { \\pi } { 2 }+x } \\right )=-\\sin\\left ( { \\frac { \\pi } { 2 }+x } \\right )=-cosx  .\n \\tan\\left ( { \\frac { 3\\pi } { 2 }-x } \\right )=\\tan\\left ( { \\pi+\\frac { \\pi } { 2 }-x } \\right )=\\tan\\left ( { \\frac { \\pi } { 2 }-x } \\right )=cotx  .\n \\cot\\left ( { 3\\pi-x } \\right )=\\cot\\left ( { -x } \\right )=-cotx  .\nSuy ra  A=-cosx-\\left ( { -cosx } \\right )+cotx+\\left ( { -cotx } \\right )=0\\Rightarrow 10A=0  .",
      "diagram": null,
      "correctAnswer": "0",
      "globalId": 114
    },
    {
      "id": 26,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Đơn giản biểu thức  P=\\left ( { \\frac { 1-\\cos\\alpha } { \\sin ^ { 2 } \\alpha }+\\frac { 1 } { 1+\\cos\\alpha } } \\right )\\sin ^ { 2 } \\alpha.",
      "explanation": "Ta có  \\frac { 1-\\cos\\alpha } { \\sin ^ { 2 } \\alpha }+\\frac { 1 } { 1-\\cos\\alpha }=\\frac { 1-\\cos\\alpha } { 1-\\cos ^ { 2 } \\alpha }+\\frac { 1 } { 1-\\cos\\alpha } \n =\\frac { 1-\\cos\\alpha } { \\left ( { 1-\\cos\\alpha } \\right )\\left ( { 1+\\cos\\alpha } \\right ) }+\\frac { 1 } { 1-\\cos\\alpha }=\\frac { 1 } { 1+\\cos\\alpha }+\\frac { 1 } { 1-\\cos\\alpha }=\\frac { 2 } { \\sin ^ { 2 } \\alpha }  .\n P=\\left[ \\frac { 1-\\cos\\alpha } { \\left ( { 1-\\cos\\alpha } \\right )\\left ( { 1+\\cos\\alpha } \\right ) }+\\frac { 1 } { 1-\\cos\\alpha } \\right]\\sin ^ { 2 } \\alpha=\\frac { 2 } { \\sin ^ { 2 } \\alpha }.\\sin ^ { 2 } \\alpha=2",
      "diagram": null,
      "correctAnswer": "2",
      "globalId": 115
    },
    {
      "id": 27,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Gọi  S  là tập hợp các giá trị của tham số  m  sao cho giá trị nhỏ nhất của hàm số  y=\\left | { \\cos ^ { 4 } x-cos2x+m } \\right |  bằng 3. Tính tổng các phần tử của tập  S  .",
      "explanation": "Ta có  y=\\left | { \\cos ^ { 4 } x-cos2x+m } \\right |=\\left | { \\cos ^ { 4 } x-\\left ( { \\cos ^ { 2 } x-\\sin ^ { 2 } x } \\right )\\left ( { \\cos ^ { 2 } x+\\sin ^ { 2 } x } \\right )+m } \\right |=\\left | { \\sin ^ { 4 } x+m } \\right | \nĐặt  t=\\sin ^ { 4 } x  ,  t\\in \\left[ 0;1 \\right]  .\nSuy ra  y=\\left | { t+m } \\right |  ,  t\\in \\left[ 0;1 \\right]  .\nXét hàm số  f\\left ( { t } \\right )=t+m  trên đoạn  \\left[ 0;1 \\right]  .\n \\mathop { max } \\limits_{ \\left[ 0;\\,1 \\right] } f\\left ( { t } \\right )=f\\left ( { 1 } \\right )=m+1  ,  \\mathop { min } \\limits_{ \\left[ 0;\\,1 \\right] } f\\left ( { t } \\right )=f\\left ( { 0 } \\right )=m  .\nTrường hợp 1: Xét  m\\ge 0  ta có  \\mathop { min } \\limits_{ t\\in \\left[ 0;1 \\right] } y=m\\Leftrightarrow m=3  (TM).\nTrường hợp 2:Xét  m\\le -1  . ta có  \\mathop { min } \\limits_{ t\\in \\left[ 0;1 \\right] } y=-m-1\\Rightarrow -m-1=3\\Leftrightarrow m=-4  (TM).\nTrường hợp 3: Xét  -1 < m < 0  ta có  \\mathop { min } \\limits_{ t\\in \\left[ 0;1 \\right] } y=0\\Rightarrow 0=3  (vô lý)\nVậy  S=\\left \\{ \\begin{array}{l} -4;3 \\end{array} \\right \\}\\Rightarrow -4+3=-1  .",
      "diagram": null,
      "correctAnswer": "-1",
      "globalId": 116
    },
    {
      "id": 28,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho tam giác  ABC  có độ dài ba cạnh  BC=a,AC=b,AB=c  thỏa mãn  a+c=4b  . Tính giá trị biểu thức  P=\\tan\\frac { A } { 2 }.\\tan\\frac { C } { 2 }  .",
      "explanation": "Áp dụng định lý \\sin, ta có:  a+c=4b \n \\Leftrightarrow 2RsinA+2RsinC=8RsinB\\Leftrightarrow sinA+sinC=4sinB \n \\Leftrightarrow 2sin\\frac { A+C } { 2 }\\cos\\frac { A-C } { 2 }=8sin\\frac { B } { 2 }\\cos\\frac { B } { 2 } \n \\Leftrightarrow \\cos\\frac { A-C } { 2 }=4sin\\frac { B } { 2 }  vì  \\sin\\frac { A+C } { 2 }=\\cos\\frac { B } { 2 }\\ne 0,{ }{ }\\frac { \\widehat { B } } { 2 }\\in \\left ( { 0;\\frac { \\pi } { 2 } } \\right ) \n \\Leftrightarrow \\cos\\frac { A-C } { 2 }=4cos\\frac { A+C } { 2 } \n \\Leftrightarrow \\cos\\frac { A } { 2 }\\cos\\frac { C } { 2 }+\\sin\\frac { A } { 2 }\\sin\\frac { C } { 2 }=4\\left ( { \\cos\\frac { A } { 2 }\\cos\\frac { C } { 2 }-\\sin\\frac { A } { 2 }\\sin\\frac { C } { 2 } } \\right ) \n \\Leftrightarrow 5sin\\frac { A } { 2 }\\sin\\frac { C } { 2 }=3cos\\frac { A } { 2 }\\cos\\frac { C } { 2 }  \\Leftrightarrow \\frac { \\sin\\frac { A } { 2 }\\sin\\frac { C } { 2 } } { \\cos\\frac { A } { 2 }\\cos\\frac { C } { 2 } }=\\frac { 3 } { 5 }  \\Leftrightarrow \\tan\\frac { A } { 2 }.\\tan\\frac { C } { 2 }=\\frac { 3 } { 5 }=0,6. \nVậy  P=0,6  .",
      "diagram": null,
      "correctAnswer": "0,6",
      "globalId": 117
    },
    {
      "id": 29,
      "lesson": "b3",
      "lessonTitle": "Bài 3. Công thức lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Trong Vật lí, phương trình tổng quát của một vật dao động điều hòa cho bởi công thức  x\\left ( { t } \\right )=Acos\\left ( { ωt+\\varphi } \\right )  , trong đó t là thời điểm (tính bằng giây),  x\\left ( { t } \\right )  là li độ của vật tại thời điểm t, A là biên độ dao động (  A>0  ) và  \\varphi\\in \\left[ -\\pi;\\pi \\right]  là pha ban đầu của dao động. Xét hai dao động điều hòa có phương trình:  x_{ 1 } \\left ( { t } \\right )=2cos\\left ( { \\frac { \\pi } { 3 }t+\\frac { \\pi } { 6 } } \\right )\\,\\,({ c }{ m }),  x_{ 2 } \\left ( { t } \\right )=2cos\\left ( { \\frac { \\pi } { 3 }t-\\frac { \\pi } { 3 } } \\right )\\,\\,({ c }{ m })  . Tìm pha ban đầu của dao động tổng hợp này. Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "Ta có  x\\left ( { t } \\right )=x_{ 1 } \\left ( { t } \\right )+x_{ 2 } \\left ( { t } \\right )=2cos\\left ( { \\frac { \\pi } { 3 }t+\\frac { \\pi } { 6 } } \\right )+2cos\\left ( { \\frac { \\pi } { 3 }t-\\frac { \\pi } { 3 } } \\right ) \n =2.2cos\\left ( { \\frac { \\pi } { 3 }t-\\frac { \\pi } { 12 } } \\right ).\\cos\\frac { \\pi } { 4 }=2\\sqrt[] { 2 }\\cos\\left ( { \\frac { \\pi } { 3 }t-\\frac { \\pi } { 12 } } \\right )  .\nVậy pha ban đầu bằng  -\\frac { \\pi } { 12 }\\approx -0,26  .",
      "diagram": null,
      "correctAnswer": "-0,26",
      "globalId": 118
    },
    {
      "id": 1,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập xác định của hàm số  y=tan2x  là",
      "explanation": "Điều kiện xác định của hàm số  y=tan2x  là  2x\\ne \\frac { \\pi } { 2 }+k\\pi\\Leftrightarrow x\\ne \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }(k\\in ℤ)  .\nVậy tập xác định của hàm số  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }∣k\\in ℤ \\end{array} \\right \\}  .",
      "diagram": null,
      "options": [
        "A.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }∣k\\in ℤ \\end{array} \\right \\}",
        "B.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }∣k\\in ℤ \\end{array} \\right \\}",
        "C.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k2\\pi∣k\\in ℤ \\end{array} \\right \\}",
        "D.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi∣k\\in ℤ \\end{array} \\right \\}"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 119
    },
    {
      "id": 2,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập xác định của hàm số  y=sinx  là",
      "explanation": "",
      "diagram": null,
      "options": [
        "A.  \\left[ -1;1 \\right]",
        "B.  \\left ( { -1;1 } \\right )",
        "C.  \\left ( { 0;+∞ } \\right )",
        "D.  \\mathbb{R}"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 120
    },
    {
      "id": 3,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập xác định của hàm số  y=\\frac { 1 } { sinx }  là",
      "explanation": "Hàm số  y=\\frac { 1 } { sinx }  xác định khi và chỉ khi  sinx\\ne 0  \\Leftrightarrow x\\ne k\\pi,k\\in \\mathbb{Z}.",
      "diagram": null,
      "options": [
        "A.  { D }=\\mathbb{R}\\\\left \\{ \\begin{array}{l} 0 \\end{array} \\right \\}.",
        "B.  { D }=\\mathbb{R}\\\\left \\{ \\begin{array}{l} k2\\pi,\\ k\\in \\mathbb{Z} \\end{array} \\right \\}.",
        "C.  { D }=\\mathbb{R}\\\\left \\{ \\begin{array}{l} k\\pi,\\ k\\in \\mathbb{Z} \\end{array} \\right \\}.",
        "D.  { D }=\\mathbb{R}\\\\left \\{ \\begin{array}{l} 0;\\pi \\end{array} \\right \\}."
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 121
    },
    {
      "id": 4,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập xác định của hàm số  y=\\frac { 1 } { sin2x+1 }  là",
      "explanation": "Điều kiện xác định của hàm số là  sin2x\\ne -1\\Leftrightarrow 2x\\ne -\\frac { \\pi } { 2 }+k2\\pi\\Leftrightarrow x\\ne -\\frac { \\pi } { 4 }+k\\pi,k\\in \\mathbb{Z}  .\nVậy TXĐ:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 4 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}  .",
      "diagram": null,
      "options": [
        "A.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "B.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 2 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "C.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 4 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "D.  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} -\\frac { \\pi } { 4 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 122
    },
    {
      "id": 5,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Hàm số  y=\\frac { cos2x } { 1+tanx }  không xác định trong khoảng nào trong các khoảng sau đây?",
      "explanation": "Hàm số xác định khi và chỉ khi  \\left \\{ \\begin{array}{l} tanx\\ne -1 \\\\ cosx\\ne 0 \\end{array} \\right.\\Leftrightarrow \\left \\{ \\begin{array}{l} x\\ne \\frac { -\\pi } { 4 }+k\\pi \\\\ x\\ne \\frac { \\pi } { 2 }+k\\pi \\end{array} \\right.,\\,k\\in \\mathbb{Z}  .\nTa chọn  k=0\\to \\left \\{ \\begin{array}{l} x\\ne -\\frac { \\pi } { 4 } \\\\ x\\ne \\frac { \\pi } { 2 } \\end{array} \\right.  nhưng điểm  -\\frac { \\pi } { 4 }  thuộc khoảng  \\left ( { -\\frac { \\pi } { 2 }+k2\\pi;\\frac { \\pi } { 2 }+k2\\pi } \\right )  .\nVậy hàm số không xác định trong khoảng  \\left ( { -\\frac { \\pi } { 2 }+k2\\pi;\\frac { \\pi } { 2 }+k2\\pi } \\right )  .",
      "diagram": null,
      "options": [
        "A.  \\left ( { \\frac { \\pi } { 2 }+k2\\pi;\\frac { 3\\pi } { 4 }+k2\\pi } \\right ),\\,k\\in \\mathbb{Z}",
        "B.  \\left ( { \\frac { 3\\pi } { 4 }+k2\\pi;\\frac { 3\\pi } { 2 }+k2\\pi } \\right )",
        "C.  \\left ( { \\pi+k2\\pi;\\frac { 3\\pi } { 2 }+k2\\pi } \\right ),\\,k\\in \\mathbb{Z}",
        "D.  \\left ( { \\frac { -\\pi } { 2 }+k2\\pi;\\frac { \\pi } { 2 }+k2\\pi } \\right ),\\,k\\in \\mathbb{Z}"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 123
    },
    {
      "id": 6,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập xác định của hàm số  y=cot2x-tanx  là:",
      "explanation": "Hàm số xác định khi  \\left \\begin{array}{l} n2x\\ne 0sx\\ne 0\\{\\Leftrightarrow \\left \\{ \\begin{array}{l} x\\ne k\\frac { \\pi } { 2 } \\\\ x\\ne \\frac { \\pi } { 2 }+k\\pi \\end{array} \\right.\\Leftrightarrow x\\ne k\\frac { \\pi } { 2 }\\left ( { k\\in \\mathbb{Z} } \\right ) \\end{array} \\right.  .",
      "diagram": null,
      "options": [
        "A.  \\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "B.  \\mathbb{R}\\\\left \\{ \\begin{array}{l} k\\pi,k\\in \\mathbb{Z}\\, \\end{array} \\right \\}",
        "C.  \\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 },k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "D.  \\mathbb{R}\\\\left \\{ \\begin{array}{l} k\\frac { \\pi } { 2 },k\\in \\mathbb{Z} \\end{array} \\right \\}"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 124
    },
    {
      "id": 7,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Chọn phát biểu đúng:",
      "explanation": "Hàm số  y=cosx  là hàm số chẵn, hàm số  y=sinx  ,  y=cotx  ,  y=tanx  là các hàm số lẻ.",
      "diagram": null,
      "options": [
        "A. Các hàm số  y=sinx  ,  y=cosx  ,  y=cotx  đều là hàm số chẵn",
        "B. Các hàm số  y=sinx  ,  y=cosx  ,  y=cotx  đều là hàm số lẻ",
        "C. Các hàm số  y=sinx  ,  y=cotx  ,  y=tanx  đều là hàm số chẵn",
        "D. Các hàm số  y=sinx  ,  y=cotx  ,  y=tanx  đều là hàm số lẻ"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 125
    },
    {
      "id": 8,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các hàm số sau đây, hàm số nào có đồ thị đối xứng qua trục tung?",
      "explanation": "Hàm số có đồ thị đối xứng qua trục tung là hàm số chẵn.\nVậy đáp án cần chọn là  y=cosx  .",
      "diagram": null,
      "options": [
        "A.  y=tanx",
        "B.  y=cosx",
        "C.  y=sinx",
        "D.  y=cotx"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 126
    },
    {
      "id": 9,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các hàm số sau, hàm số nào tuần hoàn với chu kì  2\\pi  ?",
      "explanation": "Hàm số  y=sinx  tuần hoàn với chu kì  2\\pi  .\nCác hàm số lượng giác còn lại  y=tanx  ,  y=cotx  ,  y=cos2x  tuần hoàn với chu kì  \\pi  .\nXét  y=cos2x  : ta có  y\\left ( { x+\\pi } \\right )=cos2\\left ( { x+\\pi } \\right )=\\cos\\left ( { 2x+2\\pi } \\right )=cos2x=y\\left ( { x } \\right )  nên  y=cos2x  tuần hoàn với chu kì  \\pi  .",
      "diagram": null,
      "options": [
        "A.  y=sinx",
        "B.  y=tanx",
        "C.  y=cotx",
        "D.  y=cos2x"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 127
    },
    {
      "id": 10,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Chu kì tuần hoàn của hàm số  tanx+\\sin ^ { 2 } x  là",
      "explanation": "Ta có:  tanx+\\sin ^ { 2 } x=tanx+\\frac { 1 } { 2 }\\left ( { 1-{ c }{ o }{ s }{ 2 }x } \\right )  .\n+)  tanx  có chu kì là  \\pi  .\n+)  { c }{ o }{ s }{ 2 }x  có chu kì là  \\pi  .\nVậy hàm số đã cho có chu kì là  \\pi  .",
      "diagram": null,
      "options": [
        "A.  k2\\pi",
        "B.  2\\pi",
        "C.  \\pi",
        "D.  4\\pi"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 128
    },
    {
      "id": 11,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Hàm số nào sau đây là hàm số lẻ?",
      "explanation": "Xét hàm số  y=f\\left ( { x } \\right )=\\frac { cosx } { x ^ { 3 } }  . Tập xác định  D=\\mathbb{R}\\{ \\{ }0\\}  là tập đối xứng.\n f\\left ( { -x } \\right )=\\frac { \\cos\\left ( { -x } \\right ) } { -x ^ { 3 } }=-\\frac { \\cos\\left ( { x } \\right ) } { x ^ { 3 } }=-f\\left ( { x } \\right ). \nDo đó hàm số  y=\\frac { cosx } { x ^ { 3 } }  là hàm số lẻ.",
      "diagram": null,
      "options": [
        "A.  y=2x+cosx",
        "B.  y=cos3x",
        "C.  y=x ^ { 2 } \\sin\\left ( { x+3 } \\right )",
        "D.  y=\\frac { cosx } { x ^ { 3 } }"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 129
    },
    {
      "id": 12,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các hàm số sau, hàm số nào có đồ thị đối xứng qua gốc tọa độ?",
      "explanation": "Hàm số lẻ có đồ thị đối xứng qua gốc tọa độ.\nTa kiểm tra được đáp án A là hàm số lẻ nên có đồ thị đối xứng qua gốc tọa độ.\nĐáp án B là hàm số không chẵn, không lẻ. Đáp án C và D là các hàm số chẵn.",
      "diagram": null,
      "options": [
        "A.  y=cot4x.",
        "B.  y=\\frac { sinx+1 } { cosx }.",
        "C.  y=\\tan ^ { 2 } x.",
        "D.  y=\\left | { cotx } \\right |."
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 130
    },
    {
      "id": 13,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho hai hàm số  f\\left ( { x } \\right )=\\frac { cos2x } { 1+\\sin ^ { 2 } 3x }  và  g\\left ( { x } \\right )=\\frac { \\left | { sin2x } \\right |-cos3x } { 2+\\tan ^ { 2 } x }  . Mệnh đề nào sau đây là đúng?",
      "explanation": "Xét hàm số  f\\left ( { x } \\right )=\\frac { cos2x } { 1+\\sin ^ { 2 } 3x }. \nTXĐ:  { D }=\\mathbb{R}  . Do đó  ∀x\\in { D }\\Rightarrow -x\\in { D }{ . } \nTa có  f\\left ( { -x } \\right )=\\frac { \\cos\\left ( { -2x } \\right ) } { 1+\\sin ^ { 2 } \\left ( { -3x } \\right ) }=\\frac { cos2x } { 1+\\sin ^ { 2 } 3x }=f\\left ( { x } \\right )  \\xrightarrow f\\left ( { x } \\right )  là hàm số chẵn.\nXét hàm số  g\\left ( { x } \\right )=\\frac { \\left | { sin2x } \\right |-cos3x } { 2+\\tan ^ { 2 } x }. \nTXĐ:  { D }=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right ) \\end{array} \\right \\}  . Do đó  ∀x\\in { D }\\Rightarrow -x\\in { D }{ . } \nTa có  g\\left ( { -x } \\right )=\\frac { \\left | { \\sin\\left ( { -2x } \\right ) } \\right |-\\cos\\left ( { -3x } \\right ) } { 2+\\tan ^ { 2 } \\left ( { -x } \\right ) }=\\frac { \\left | { sin2x } \\right |-cos3x } { 2+\\tan ^ { 2 } x }=g\\left ( { x } \\right )  \\xrightarrow g\\left ( { x } \\right )  là hàm số chẵn.\nVậy  f\\left ( { x } \\right )  và  g\\left ( { x } \\right )  chẵn.",
      "diagram": null,
      "options": [
        "A.  f\\left ( { x } \\right )  lẻ và  g\\left ( { x } \\right )  chẵn",
        "B.  f\\left ( { x } \\right )  và  g\\left ( { x } \\right )  chẵn",
        "C.  f\\left ( { x } \\right )  chẵn,  g\\left ( { x } \\right )  lẻ",
        "D.  f\\left ( { x } \\right )  và  g\\left ( { x } \\right )  lẻ"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 131
    },
    {
      "id": 14,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các hàm số sau, hàm số nào có đồ thị đối xứng qua gốc tọa độ?",
      "explanation": "Viết lại đáp án B là  y=\\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=\\frac { 1 } { \\sqrt[] { 2 } }\\left ( { sinx+cosx } \\right ). \nViết lại đáp án C là  y=\\sqrt[] { 2 }\\cos\\left ( { x-\\frac { \\pi } { 4 } } \\right )=sinx+cosx. \nKiểm tra được đáp án A là hàm số lẻ nên có đồ thị đối xứng qua gốc tọa độ.\nTa kiểm tra được đáp án B và C là các hàm số không chẵn, không lẻ.\nXét đáp án D.\nHàm số xác định  \\Leftrightarrow sin2x\\ge 0\\Leftrightarrow 2x\\in \\left[ k2\\pi;\\pi+k2\\pi \\right]\\Leftrightarrow x\\in \\left[ k\\pi;\\frac { \\pi } { 2 }+k\\pi \\right] \n \\xrightarrow D=\\left[ k\\pi;\\frac { \\pi } { 2 }+k\\pi \\right]{ }\\left ( { k\\in \\mathbb{Z} } \\right ). \nChọn  x=\\frac { \\pi } { 4 }\\in { D }  nhưng  -x=-\\frac { \\pi } { 4 }∉{ D }{ . }  Vậy  y=\\sqrt[] { sin2x }  không chẵn, không lẻ.",
      "diagram": null,
      "options": [
        "A.  y=\\frac { 1 } { \\sin ^ { 3 } x }.",
        "B.  y=\\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right ).",
        "C.  y=\\sqrt[] { 2 }\\cos\\left ( { x-\\frac { \\pi } { 4 } } \\right ).",
        "D.  y=\\sqrt[] { sin2x }."
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 132
    },
    {
      "id": 15,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Giá trị lớn nhất và giá trị nhỏ nhất của hàm số  y=3{ s }{ i }{ n }\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )-1  lần lượt là:",
      "explanation": "Tập xác định:  D=\\mathbb{R}  .\n+)  ∀x\\in \\mathbb{R}  ta có:  -1\\le { s }{ i }{ n }\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )\\le 1  \\Leftrightarrow -3\\le 3{ s }{ i }{ n }\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )\\le 3  \\Leftrightarrow -4\\le 3{ s }{ i }{ n }\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )-1\\le 2  \\Rightarrow -4\\le y\\le 2  .\nVậy giá trị lớn nhất của hàm số  y=3{ s }{ i }{ n }\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )-1  là  2  khi  x=-\\frac { \\pi } { 4 }  .\nGiá trị nhỏ nhất của hàm số  y=3{ s }{ i }{ n }\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )-1  là  -4  khi  x=\\frac { 3\\pi } { 4 }  .",
      "diagram": null,
      "options": [
        "A.  4;-2",
        "B.  2;\\,-4",
        "C.  1;-1",
        "D.  3;-3"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 133
    },
    {
      "id": 16,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Gọi  M,m  lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số  y=6cos2x-7  trên đoạn  \\left[ -\\frac { \\pi } { 3 }\\,;\\,\\frac { \\pi } { 6 } \\right]  . Tính  M+m.",
      "explanation": "Ta có:  -\\frac { \\pi } { 3 }\\le x\\le \\,\\,\\frac { \\pi } { 6 }  \\Leftrightarrow -\\frac { 2\\pi } { 3 }\\le 2x\\le \\,\\,\\frac { \\pi } { 3 }  \\Leftrightarrow -\\frac { 1 } { 2 }\\le cos2x\\le 1\\Leftrightarrow -10\\le 6cos2x-7\\le -1  .\nSuy ra  M=-1,\\,m=-10.  Vậy  M+m=-11.",
      "diagram": null,
      "options": [
        "A.  -14.",
        "B.  3.",
        "C.  -11.",
        "D.  -10."
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 134
    },
    {
      "id": 17,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tìm giá trị lớn nhất, giá trị nhỏ nhất của hàm số  y=2sin ^ { 2 } x+3sin2x-4cos ^ { 2 } x  .",
      "explanation": "Ta có:  y=1-cos2x+3sin2x-2(1+cos2x)  =3sin2x-3cos2x-1=3\\sqrt[] { 2 }\\sin\\left ( { 2x-\\frac { \\pi } { 4 } } \\right )-1  .\n \\Rightarrow -3\\sqrt[] { 2 }-1\\le y\\le 3\\sqrt[] { 2 }-1  ∀x\\in \\mathbb{R}  .\nVậy  miny=-3\\sqrt[] { 2 }-1;{ }maxy=3\\sqrt[] { 2 }-1  .",
      "diagram": null,
      "options": [
        "A.  miny=-3\\sqrt[] { 2 }-1;{ }maxy=3\\sqrt[] { 2 }+1.",
        "B.  miny=-3\\sqrt[] { 2 }-2;{ }maxy=3\\sqrt[] { 2 }-1.",
        "C.  miny=-3\\sqrt[] { 2 };{ }maxy=3\\sqrt[] { 2 }-1.",
        "D.  miny=-3\\sqrt[] { 2 }-1;{ }maxy=3\\sqrt[] { 2 }-1."
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 135
    },
    {
      "id": 18,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Xét sự biến thiên của hàm số  y=tan2x  trên một chu kì tuần hoàn. Trong các kết luận sau, kết luận nào đúng?",
      "explanation": "Tập xác định của hàm số đã cho là  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }\\|\\,k\\in \\mathbb{Z} \\end{array} \\right \\}. \nHàm số  y=tan2x  tuần hoàn với chu kì  \\frac { \\pi } { 2 },  dựa vào các phương án A; B; C; D thì ta sẽ xét tính đơn điệu của hàm số trên  \\left ( { 0;\\,\\frac { \\pi } { 2 } } \\right )\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 } \\end{array} \\right \\}. \nDựa theo kết quả khảo sát sự biến thiên của hàm số  y=tanx  , có thể suy ra với hàm số  y=tan2x  đồng biến trên khoảng  \\left ( { 0;\\,\\frac { \\pi } { 4 } } \\right )  và  \\left ( { \\frac { \\pi } { 4 };\\,\\frac { \\pi } { 2 } } \\right ).",
      "diagram": null,
      "options": [
        "A. Hàm số đã cho đồng biến trên khoảng  \\left ( { 0;\\,\\frac { \\pi } { 4 } } \\right )  và  \\left ( { \\frac { \\pi } { 4 };\\,\\frac { \\pi } { 2 } } \\right )",
        "B. Hàm số đã cho đồng biến trên khoảng  \\left ( { 0;\\,\\frac { \\pi } { 4 } } \\right )  và nghịch biến trên khoảng  \\left ( { \\frac { \\pi } { 4 };\\,\\frac { \\pi } { 2 } } \\right )",
        "C. Hàm số đã cho luôn đồng biến trên khoảng  \\,\\,\\left ( { 0;\\,\\frac { \\pi } { 2 } } \\right )",
        "D. Hàm số đã cho nghịch biến trên khoảng  \\left ( { 0;\\,\\frac { \\pi } { 4 } } \\right )  và đồng biến trên khoảng  \\left ( { \\frac { \\pi } { 4 };\\,\\frac { \\pi } { 2 } } \\right )"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 136
    },
    {
      "id": 19,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho đồ thị hàm số lượng giác  y=sinx  như hình vẽ dưới đây: Hàm số  y=\\left | { sinx } \\right |  có bao nhiêu lần đạt giá trị bằng 1 trong đoạn  \\left[ \\frac { -3\\pi } { 2 };\\frac { 5\\pi } { 2 } \\right]  ?",
      "explanation": "Đồ thị hàm số  y=\\left | { sinx } \\right | \nNhìn đồ thị ta thấy  y=\\left | { sinx } \\right |  có 5 lần đạt giá trị bằng 1 trong đoạn  \\left[ \\frac { -3\\pi } { 2 };\\frac { 5\\pi } { 2 } \\right]",
      "diagram": "assets/diagrams/b4_q19.png",
      "options": [
        "A.  5",
        "B.  1",
        "C.  3",
        "D.  7"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 137
    },
    {
      "id": 20,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Huyết áp là áp lực máu cần thiết tác động lên thành động mạch nhằm đưa máu đi nuôi dưỡng các mô trong cơ thể. Nhờ lực co bóp của tim và sức cản của động mạch mà huyết áp được tạo ra. Huyết áp tối đa và huyết áp tối thiểu tương ứng được gọi là huyết áp tâm thu và huyết áp tâm trương. Chỉ số huyết áp của chúng ta được tính bằng huyết áp tâm thu/huyết áp tâm trương. Giả sử huyết áp của người đó thay đổi theo thời gian được cho bởi công thức:  p\\left ( { t } \\right )=115{ }+{ }25sin\\left ( { 160\\pit } \\right )  trong đó p(t) là huyết áp tính theo đơn vị mmHg (milimet thủy ngân) và thời gian t tính theo đơn vị phút. Khi đó, chỉ số huyết áp bằng",
      "explanation": "Ta có  -1\\le sinx\\le 1\\,\\,\\,\\,∀x  nên  115-25.1\\le p\\left ( { t } \\right )=115{ }+{ }25sin\\left ( { 160\\pit } \\right )\\le 115+25.1  \\Leftrightarrow 90\\le p\\left ( { t } \\right )\\le 140 \nVậy chỉ số huyết áp là  \\frac { 140 } { 90 }",
      "diagram": null,
      "options": [
        "A.  \\frac { 115 } { 90 }",
        "B.  \\frac { 150 } { 60 }",
        "C.  \\frac { 120 } { 80 }",
        "D.  \\frac { 140 } { 90 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 138
    },
    {
      "id": 21,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một con lắc lò xo sau khi được kéo xuống dưới vị trí cân bằng  4\\,\\text{cm}  và thả ra thì nó dao động điều hòa với phương trình:  y=-4cos8t\\,\\left ( { \\text{cm} } \\right )  (tham khảo hình vẽ). Biên độ  A\\,\\text{cm}  và chu kỳ  \\,T  của dao động là",
      "explanation": "Biên độ của dao động là:  A=\\left | { -4 } \\right |=4\\,\\left ( { \\text{cm} } \\right ). \nChu kỳ của dao động là:  T=\\frac { 2\\pi } { \\left | { 8 } \\right | }=\\frac { \\pi } { 4 }.",
      "diagram": "assets/diagrams/b4_q21.png",
      "options": [
        "A.  A=4\\,\\text{cm};\\,\\,T=\\frac { \\pi } { 4 }",
        "B.  A=4\\,\\text{cm};\\,\\,T=\\frac { \\pi } { 2 }",
        "C.  A=8\\,\\text{cm};\\,\\,T=\\frac { \\pi } { 4 }",
        "D.  A=4\\,\\text{cm};\\,\\,T=2\\pi"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 139
    },
    {
      "id": 22,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Hằng ngày mực nước của con kênh lên xuống theo thủy triều. Độ sâu  h  (mét) của mực nước trong kênh được tính tại thời điểm  t  (giờ) trong một ngày bởi công thức  h=3cos\\left ( { \\frac { \\pit } { 7=8 }+\\frac { \\pi } { 4 } } \\right )+12  . Mực nước của kênh cao nhất khi:",
      "explanation": "Mực nước của kênh cao nhất khi  h  lớn nhất\n \\Leftrightarrow \\cos\\left ( { \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 } } \\right )=1\\Leftrightarrow \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 }=k2\\pi  với  0 < t\\le 24  và  k\\in \\mathbb{Z}  .\nLần lượt thay các đáp án, ta được đáp án B thỏa mãn.\nVì với  t=14  thì  \\frac { \\pit } { 8 }+\\frac { \\pi } { 4 }=2\\pi  (đúng với  k=1\\in \\mathbb{Z}  ).",
      "diagram": null,
      "options": [
        "A.  t=13  (giờ)",
        "B.  t=14  (giờ)",
        "C.  t=15  (giờ)",
        "D.  t=16  (giờ)"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 140
    },
    {
      "id": 23,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  thuộc đoạn  \\left[ -10;10 \\right]  để hàm số  y=\\sqrt[] { \\sin ^ { 2 } x-2sinx+m-1 }  xác định trên  \\mathbb{R}  .",
      "explanation": "Hàm số xác định trên  \\mathbb{R}  khi chỉ khi:  \\sin ^ { 2 } x-2sinx+m-1\\ge 0\\,\\,,\\,∀x\\in \\mathbb{R} \n \\Leftrightarrow m\\ge -\\sin ^ { 2 } x+2sinx+1=2-\\left ( { sinx-1 } \\right ) ^ { 2 } \\,,\\,∀x\\in \\mathbb{R} \n \\Leftrightarrow m\\ge \\mathop { max } \\limits_{ \\left ( { -∞\\,;\\,+∞ } \\right ) } \\left ( { -\\sin ^ { 2 } x+2sinx+1 } \\right )=2\\Leftrightarrow m\\ge 2  .\nMà  m\\in \\mathbb{Z}  ;m\\in \\left[ -10;10 \\right]\\Rightarrow m\\in \\left \\{ \\begin{array}{l} 2;3;4\\,;\\,5;\\,6\\,;\\,7\\,;\\,8\\,;\\,9\\,;\\,10\\, \\end{array} \\right \\}  .",
      "diagram": null,
      "options": [
        "A.  8",
        "B.  9",
        "C.  12",
        "D.  13"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 141
    },
    {
      "id": 24,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Số giờ có ánh sáng của một thành phố  A  trong ngày thứ  t  của năm  2021  được cho bởi một hàm số  y=4sin\\left | { \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) } \\right |+10  , với  t\\in Z  và  0 < t\\le 365  . Vào ngày nào trong năm thì thành phố  A  có nhiều giờ ánh sáng mặt trời nhất ?",
      "explanation": "Vì  \\sin\\left | { \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) } \\right |\\le 1\\Rightarrow y=4sin\\left | { \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) } \\right |+10\\le 14  .\nNgày có ánh nắng mặt trời chiếu nhiều nhất  \\Leftrightarrow y=14\\Leftrightarrow \\sin\\left | { \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) } \\right |=1\\Leftrightarrow \\frac { \\pi } { 178 }\\left ( { t-60 } \\right )=\\frac { \\pi } { 2 }+k2\\pi\\Leftrightarrow t=149+356k  .\nMà  0 < t\\le 365\\Leftrightarrow 0 < 149+356k\\le 365\\Leftrightarrow -\\frac { 149 } { 356 } < k\\le \\frac { 54 } { 89 }  .\nVì  k\\in \\mathbb{Z}  nên  k=0  .\nVới  k=0\\Rightarrow t=149  tức rơi vào ngày  29  tháng  5 \nVì ta đã biết tháng  1  và  3  có  31  ngày, tháng  4  có  30  ngày,\nRiêng đối với năm  2021  thì không phải năm nhuận nên tháng  2  có  28  ngày hoặc dựa vào dữ kiện  0 < t\\le 365  thì ta biết năm này tháng  2  chỉ có  28  ngày).\nB.Câu hỏi – Trả lời Đúng/sai",
      "diagram": null,
      "options": [
        "A.  28  tháng  5",
        "B.  29  tháng  5",
        "C.  30  tháng  5",
        "D.  31  tháng  5"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 142
    },
    {
      "id": 25,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  y=3-\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )  , khi đó:",
      "explanation": "y=3-\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right ) \n(a) Hàm số có tập xác định  D=\\mathbb{R} \nTa có: hàm số có tập xác định  D=\\mathbb{R}  .\n -1\\le \\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )\\le 1\\Leftrightarrow 1\\ge -\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )\\ge -1\\Leftrightarrow 4\\ge 3-\\sin\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )\\ge 2\\Leftrightarrow 4\\ge y\\ge 2 \n» Chọn ĐÚNG.\n(b) Giá trị nhỏ nhất của hàm số bằng 2\nVậy giá trị nhỏ nhất của hàm số bằng  2  .\n» Chọn ĐÚNG.\n(c) Giá trị lớn nhất của hàm số bằng 4\nVậy giá trị lớn nhất của hàm số bằng  4  .\n» Chọn ĐÚNG.\n(d) Tập giá trị của hàm số là  T=\\left[ 2;4 \\right] \nDo đó tập giá trị của hàm số là  T=\\left[ 2;4 \\right]  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Hàm số có tập xác định  D=\\mathbb{R}",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Giá trị nhỏ nhất của hàm số bằng 2",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Giá trị lớn nhất của hàm số bằng 4",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Tập giá trị của hàm số là  T=\\left[ 2;4 \\right]",
          "correct": true
        }
      ],
      "globalId": 143
    },
    {
      "id": 26,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  f\\left ( { x } \\right )=tan2x-1  . Khi đó:",
      "explanation": "(a) Giá trị của hàm số tại  x=\\frac { \\pi } { 8 }  bằng 0\nTa có:\n f\\left ( { \\frac { \\pi } { 8 } } \\right )=\\tan\\left ( { 2⋅\\frac { \\pi } { 8 } } \\right )-1=1-1=0 \n» Chọn ĐÚNG.\n(b) Giá trị của hàm số tại  x=\\frac { \\pi } { 3 }  bằng  -\\sqrt[] { 3 }-1 \n f\\left ( { \\frac { \\pi } { 3 } } \\right )=\\tan\\left ( { 2⋅\\frac { \\pi } { 3 } } \\right )-1=-\\sqrt[] { 3 }-1 \n» Chọn ĐÚNG.\n(c) Có ba giá trị  x  thuộc  \\left[ 0;\\pi \\right]  khi hàm số đạt giá trị bằng  -2  .\nTa có:  f\\left ( { x } \\right )=-2\\Leftrightarrow tan2x-1=-2\\Leftrightarrow tan2x=-1 \n \\Leftrightarrow 2x=-\\frac { \\pi } { 4 }+k\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )\\Leftrightarrow x=-\\frac { \\pi } { 8 }+k\\frac { \\pi } { 2 }\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right ) \nVì  x\\in \\left[ 0;\\pi \\right]  nên  x\\in \\left \\{ \\begin{array}{l} \\frac { 3\\pi } { 8 };\\frac { 7\\pi } { 8 } \\end{array} \\right \\}  (khi đó  k=1;k=2  ).\n» Chọn SAI.\n(d) Hàm số đã cho là hàm tuần hoàn.\nTập xác định hàm số là:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 }∣\\,k\\in \\mathbb{Z} \\end{array} \\right \\}  .\nVới mọi  x\\in D  , ta có:  x\\pm \\frac { \\pi } { 2 }\\in D  và\n f\\left ( { x+\\frac { \\pi } { 2 } } \\right )=tan2\\left ( { x+\\frac { \\pi } { 2 } } \\right )-1=\\tan\\left ( { 2x+\\pi } \\right )-1=tan2x-1=f\\left ( { x } \\right ) \nVậy hàm số đã cho là hàm tuần hoàn.\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Giá trị của hàm số tại  x=\\frac { \\pi } { 8 }  bằng 0",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Giá trị của hàm số tại  x=\\frac { \\pi } { 3 }  bằng  -\\sqrt[] { 3 }-1",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Có ba giá trị  x  thuộc  \\left[ 0;\\pi \\right]  khi hàm số đạt giá trị bằng  -2  .",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Hàm số đã cho là hàm tuần hoàn.",
          "correct": true
        }
      ],
      "globalId": 144
    },
    {
      "id": 27,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  f\\left ( { x } \\right )=\\left | { x } \\right |sinx  . Khi đó:",
      "explanation": "(a) Tập xác định của hàm số:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} 0 \\end{array} \\right \\}  .\nTập xác định của hàm số:  D=\\mathbb{R}  .\n» Chọn SAI.\n(b)  f\\left ( { -\\pi } \\right )=-f\\left ( { \\pi } \\right )  .\nTa có  f\\left ( { \\pi } \\right )=\\pisin\\pi  ;  f\\left ( { -\\pi } \\right )=\\left | { -\\pi } \\right |\\sin\\left ( { -\\pi } \\right )=-\\pisin\\left ( { \\pi } \\right )=-f\\left ( { \\pi } \\right ) \n» Chọn ĐÚNG.\n(c) Đồ thị hàm số đã cho đối xứng qua gốc tọa độ  O\\left ( { 0;0 } \\right )  .\nVới mọi  x\\in D  , ta có:  -x\\in D  và  f\\left ( { -x } \\right )=\\left | { -x } \\right |\\sin(-x)=-\\left | { x } \\right |sinx=-f\\left ( { x } \\right )  .\nVậy hàm số đã cho là hàm số lẻ\n» Chọn ĐÚNG.\n(d)  f\\left ( { -x } \\right )=-f\\left ( { x } \\right )  .\nTa có  f\\left ( { -x } \\right )=-f\\left ( { x } \\right )  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Tập xác định của hàm số:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} 0 \\end{array} \\right \\}  .",
          "correct": false
        },
        {
          "subId": "b",
          "text": "f\\left ( { -\\pi } \\right )=-f\\left ( { \\pi } \\right )  .",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Đồ thị hàm số đã cho đối xứng qua gốc tọa độ  O\\left ( { 0;0 } \\right )  .",
          "correct": true
        },
        {
          "subId": "d",
          "text": "f\\left ( { -x } \\right )=-f\\left ( { x } \\right )  .",
          "correct": true
        }
      ],
      "globalId": 145
    },
    {
      "id": 28,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Hàm số  y=f\\left ( { x } \\right )  có đồ thị như sau",
      "explanation": "(a) Hàm số có tập xác định  D=\\left[ -\\frac { 3\\pi } { 2 };\\frac { 3\\pi } { 2 } \\right]  .\nHàm số có dạng  f\\left ( { x } \\right )=sinx+1\\Rightarrow  hàm số có tập xác định  D=\\mathbb{R}  .\n» Chọn SAI.\n(b) Hàm số đồng biến trên khoảng  \\left ( { -\\pi;0 } \\right )  .\nDựa vào đồ thị ta có hàm số đồng biến trên  \\left ( { -\\frac { \\pi } { 2 };\\frac { \\pi } { 2 } } \\right )  .\n» Chọn SAI.\n(c) Hàm số nghịch biến trên khoảng  \\left ( { -\\pi;-\\frac { \\pi } { 2 } } \\right )  .\nDựa vào đồ thị ta có hàm số nghịch biến trên khoảng  \\left ( { -\\pi;-\\frac { \\pi } { 2 } } \\right )  .\n» Chọn ĐÚNG.\n(d) Tập giá trị của hàm số là  \\left[ 0;2 \\right]  .\nTập giá trị của hàm số là  \\left[ 0;2 \\right]  .\n» Chọn ĐÚNG.",
      "diagram": "assets/diagrams/b4_q28.png",
      "items": [
        {
          "subId": "a",
          "text": "Hàm số có tập xác định  D=\\left[ -\\frac { 3\\pi } { 2 };\\frac { 3\\pi } { 2 } \\right]  .",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Hàm số đồng biến trên khoảng  \\left ( { -\\pi;0 } \\right )  .",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Hàm số nghịch biến trên khoảng  \\left ( { -\\pi;-\\frac { \\pi } { 2 } } \\right )  .",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Tập giá trị của hàm số là  \\left[ 0;2 \\right]  .",
          "correct": true
        }
      ],
      "globalId": 146
    },
    {
      "id": 29,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  f\\left ( { x } \\right )=\\left | { tanx } \\right |+\\left | { x ^ { 3 } -3x } \\right |  . Khi đó:",
      "explanation": "(a) Tập xác định của hàm số:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}  .\nTập xác định của hàm số:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}  .\n» Chọn ĐÚNG.\n(b) Hàm số đã cho là hàm số chẵn.\n ∀x\\in D  , ta có:  -x\\in D  và  f\\left ( { -x } \\right )=\\left | { \\tan\\left ( { -x } \\right ) } \\right |+\\left | { \\left ( { -x } \\right ) ^ { 3 } -3\\left ( { -x } \\right ) } \\right |=\\|tanx\\|+\\left | { x ^ { 3 } -3x } \\right |=f\\left ( { x } \\right ) \nVậy hàm số đã cho là hàm số chẵn.\n» Chọn ĐÚNG.\n(c)  f\\left ( { -\\pi } \\right )=-f\\left ( { \\pi } \\right ) \nDo đó  f\\left ( { -\\pi } \\right )\\ne -f\\left ( { \\pi } \\right )  .\n» Chọn SAI.\n(d) Đồ thị hàm số đã cho đối xứng qua gốc tọa độ  O\\left ( { 0;0 } \\right ) \nDo hàm số đã cho là hàm số chẵn.\nNên hàm số không đối xứng qua gốc tọa độ.\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Tập xác định của hàm số:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Hàm số đã cho là hàm số chẵn.",
          "correct": true
        },
        {
          "subId": "c",
          "text": "f\\left ( { -\\pi } \\right )=-f\\left ( { \\pi } \\right )",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Đồ thị hàm số đã cho đối xứng qua gốc tọa độ  O\\left ( { 0;0 } \\right )",
          "correct": false
        }
      ],
      "globalId": 147
    },
    {
      "id": 30,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  f\\left ( { x } \\right )=2cosx+1  và  g\\left ( { x } \\right )=sinx+tanx  . Khi đó:",
      "explanation": "(a) Tập xác định hàm số  f\\left ( { x } \\right )  :  D=\\mathbb{R}  .\nTập xác định hàm số:  D=\\mathbb{R}  .\n» Chọn ĐÚNG.\n(b) Hàm số  f\\left ( { x } \\right )  là hàm tuần hoàn.\nVới mọi  x\\in D  thì  x\\pm 2\\pi\\in D  và  f\\left ( { x+2\\pi } \\right )=2cos\\left ( { x+2\\pi } \\right )+1=2cosx+1=f\\left ( { x } \\right )  .\nVậy hàm số đã cho là hàm tuần hoàn.\n» Chọn ĐÚNG.\n(c) Tập xác định hàm số  g\\left ( { x } \\right )  :  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 3 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .\nTập xác định hàm số:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .\n» Chọn SAI.\n(d) Hàm số  g\\left ( { x } \\right )  là hàm không tuần hoàn.\nVới mọi  x\\in D  thì  x\\pm 2\\pi\\in D  và  f\\left ( { x+2\\pi } \\right )=\\sin\\left ( { x+2\\pi } \\right )+\\tan\\left ( { x+2\\pi } \\right )=sinx+tanx=f\\left ( { x } \\right )  .\nVậy hàm số đã cho là hàm tuần hoàn.\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Tập xác định hàm số  f\\left ( { x } \\right )  :  D=\\mathbb{R}  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Hàm số  f\\left ( { x } \\right )  là hàm tuần hoàn.",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Tập xác định hàm số  g\\left ( { x } \\right )  :  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 3 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Hàm số  g\\left ( { x } \\right )  là hàm không tuần hoàn.",
          "correct": false
        }
      ],
      "globalId": 148
    },
    {
      "id": 31,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  f\\left ( { x } \\right )=tanx  và  g\\left ( { x } \\right )=\\cot ^ { 2 } x-\\frac { sin2x } { 2 }  . Khi đó:",
      "explanation": "(a) Tập xác định hàm số  f\\left ( { x } \\right )  :  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .\nTập xác định hàm số:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .\n» Chọn ĐÚNG.\n(b) Hàm số  f\\left ( { x } \\right )  là hàm không tuần hoàn.\nVới mọi  x\\in D  thì  x\\pm \\pi\\in D  và  f(x+\\pi)=\\tan(x+\\pi)=tanx=f(x)  .\nVậy hàm số đã cho là hàm tuần hoàn.\n» Chọn SAI.\n(c) Tập xác định hàm số  g\\left ( { x } \\right )  :  D=\\mathbb{R}\\\\{k\\pi\\left | { k\\in \\mathbb{Z} } \\right .\\}  .\nTập xác định hàm số:  D=\\mathbb{R}\\\\{k\\pi\\left | { k\\in \\mathbb{Z} } \\right .\\}  .\n» Chọn ĐÚNG.\n(d) Hàm số  g\\left ( { x } \\right )  là hàm tuần hoàn.\nVới mọi  x\\in D  thì  x\\pm \\pi\\in D  và\n f\\left ( { x+\\pi } \\right )=\\cot ^ { 2 } \\left ( { x+\\pi } \\right )-\\frac { sin2\\left ( { x+\\pi } \\right ) } { 2 }=\\cot ^ { 2 } x-\\frac { sin2x } { 2 }=f\\left ( { x } \\right ). \nVậy hàm số đã cho là hàm tuần hoàn.\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Tập xác định hàm số  f\\left ( { x } \\right )  :  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Hàm số  f\\left ( { x } \\right )  là hàm không tuần hoàn.",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Tập xác định hàm số  g\\left ( { x } \\right )  :  D=\\mathbb{R}\\\\{k\\pi\\left | { k\\in \\mathbb{Z} } \\right .\\}  .",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Hàm số  g\\left ( { x } \\right )  là hàm tuần hoàn.",
          "correct": true
        }
      ],
      "globalId": 149
    },
    {
      "id": 32,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hàm số  f\\left ( { x } \\right )=2+3cosx  và  g\\left ( { x } \\right )=sinx+cosx  . Khi đó:",
      "explanation": "(a) Giá trị lớn nhất của hàm số  f\\left ( { x } \\right )  bằng 5\nVới mọi  x\\in \\mathbb{R}  , ta có:  -1\\le cosx\\le 1\\Rightarrow -3\\le 3cosx\\le 3\\Rightarrow -1\\le 2+3cosx\\le 5  .\n» Chọn ĐÚNG.\n(b) Hàm số  f\\left ( { x } \\right )  đạt giá trị nhỏ nhất khi  x=\\pi+k2\\pi(k\\in \\mathbb{Z}) \nVậy giá trị lớn nhất của hàm số bằng 5 , khi đó  cosx=1\\Leftrightarrow x=k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right ) \nGiá trị nhỏ nhất của hàm số bằng  -1  , khi đó  cosx=-1\\Leftrightarrow x=\\pi+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  .\n» Chọn ĐÚNG.\n(c) Giá trị lớn nhất của hàm số  g\\left ( { x } \\right )  bằng  -\\sqrt[] { 2 } \nTa có:  sinx+cosx=\\sqrt[] { 2 }\\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )  .\n» Chọn SAI.\n(d) Hàm số  g\\left ( { x } \\right )  đạt giá trị nhỏ nhất khi  x=-\\frac { 3\\pi } { 4 }+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right ). \nVới mọi  x\\in \\mathbb{R}  , ta có:  -1\\le \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )\\le 1\\Leftrightarrow -\\sqrt[] { 2 }\\le \\sqrt[] { 2 }\\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )\\le \\sqrt[] { 2 }  .\nVậy giá trị lớn nhất của hàm số bằng  \\sqrt[] { 2 }  , khi đó  \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=1 \n \\Leftrightarrow x+\\frac { \\pi } { 4 }=\\frac { \\pi } { 2 }+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )\\Leftrightarrow x=\\frac { \\pi } { 4 }+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right ). \nGiá trị nhỏ nhất của hàm số bằng  -\\sqrt[] { 2 }  , khi đó  \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=-1 \n \\Leftrightarrow x+\\frac { \\pi } { 4 }=-\\frac { \\pi } { 2 }+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )\\Leftrightarrow x=-\\frac { 3\\pi } { 4 }+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right ). \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Giá trị lớn nhất của hàm số  f\\left ( { x } \\right )  bằng 5",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Hàm số  f\\left ( { x } \\right )  đạt giá trị nhỏ nhất khi  x=\\pi+k2\\pi\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Giá trị lớn nhất của hàm số  g\\left ( { x } \\right )  bằng  -\\sqrt[] { 2 }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Hàm số  g\\left ( { x } \\right )  đạt giá trị nhỏ nhất khi  x=-\\frac { 3\\pi } { 4 }+k2\\pi\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )",
          "correct": true
        }
      ],
      "globalId": 150
    },
    {
      "id": 33,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho các hàm số sau:  f\\left ( { x } \\right )=\\sqrt[] { 5-3sin ^ { 2 } x }  ;  g\\left ( { x } \\right )=tanx-xcosx  . Khi đó:",
      "explanation": "(a) Tập xác định hàm số  f\\left ( { x } \\right )  là:  D=\\mathbb{R}  .\nTập xác định hàm số là:  D=\\mathbb{R}  .\n» Chọn ĐÚNG.\n(b) Hàm số  f\\left ( { x } \\right )  đã cho là hàm số lẻ.\nVới mọi  x\\in D  thì  -x\\in D  và  f\\left ( { -x } \\right )=\\sqrt[] { 5-3sin ^ { 2 } \\left ( { -x } \\right ) }=\\sqrt[] { 5-3sin ^ { 2 } x }=f\\left ( { x } \\right ) \nVậy hàm số đã cho là hàm số chẵn.\n» Chọn SAI.\n(c) Tập xác định hàm số  g\\left ( { x } \\right )  là:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .\nTập xác định hàm số là:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .\n» Chọn ĐÚNG.\n(d) Hàm số  g\\left ( { x } \\right )  đã cho là hàm số lẻ.\nVới mọi  x\\in D  thì  -x\\in D  và  f\\left ( { -x } \\right )=\\tan\\left ( { -x } \\right )-\\left ( { -x } \\right )\\cos\\left ( { -x } \\right )=-tanx+xcosx=-f\\left ( { x } \\right )  .\nVậy hàm số đã cho là hàm số lẻ.\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Tập xác định hàm số  f\\left ( { x } \\right )  là:  D=\\mathbb{R}  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Hàm số  f\\left ( { x } \\right )  đã cho là hàm số lẻ.",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Tập xác định hàm số  g\\left ( { x } \\right )  là:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { \\pi } { 2 }+k\\pi\\left | { k\\in \\mathbb{Z} } \\right . \\end{array} \\right \\}  .",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Hàm số  g\\left ( { x } \\right )  đã cho là hàm số lẻ.",
          "correct": true
        }
      ],
      "globalId": 151
    },
    {
      "id": 34,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Hằng ngày mực nước của con kênh lên xuống theo thủy triều. Độ sâu  h  (mét) của mực nước trong kênh tính theo thời gian  t  (giờ) được cho bởi công thức  h\\left ( { t } \\right )=3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )+14  .",
      "explanation": "(a) Công thức tuần hoàn với chu kì  T=2\\pi  .\nCông thức có dạng  y=\\cos\\left ( { ax+b } \\right )  tuần hoàn với chu kì  T=\\frac { 2\\pi } { \\left | { a } \\right | }  nên chu kì cần tìm là  T=\\frac { 2\\pi } { \\left | { \\frac { \\pi } { 6 } } \\right | }=12  .\n» Chọn SAI.\n(b) Chiều sâu của mực nước thấp nhất là  11\\,{ m }  .\nTa có  ∀t:-1\\le \\cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )\\le 1  \\Leftrightarrow -3\\le 3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )\\le 3  \\Leftrightarrow 11\\le 3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )+14\\le 17  \\Leftrightarrow 11\\le h\\le 17  . Vậy chiều sâu của mực nước thấp nhất là  11\\,{ m }  .\n» Chọn ĐÚNG.\n(c) Chiều sâu của mực nước cao nhất là  14\\,{ m }  .\nTa có  ∀t:-1\\le \\cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )\\le 1  \\Leftrightarrow -3\\le 3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )\\le 3  \\Leftrightarrow 11\\le 3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )+14\\le 17  \\Leftrightarrow 11\\le h\\le 17  . Chiều sâu của mực nước cao nhất là  17\\,{ m }  .\n» Chọn SAI.\n(d) Thời gian để mực nước cao nhất là  t=9  .\nTa có  ∀t:-1\\le \\cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )\\le 1  \\Leftrightarrow -3\\le 3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )\\le 3  \\Leftrightarrow 11\\le 3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )+14\\le 17  \\Leftrightarrow 11\\le h\\le 17  . Chiều sâu của mực nước cao nhất là  17\\,{ m }  .\nMax  h=17  \\Leftrightarrow \\cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 } } \\right )=1  \\Leftrightarrow \\frac { \\pit } { 6 }+\\frac { \\pi } { 4 }=k2\\pi  \\Leftrightarrow t=-3+12k,k\\in \\mathbb{Z}  .\nVì thời gian không âm và  k\\in \\mathbb{Z}  nên ta chọn  t=1  .\nVậy thời gian ngắn nhất  t=-3+12=9  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Công thức tuần hoàn với chu kì  T=2\\pi  .",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Chiều sâu của mực nước thấp nhất là  11\\,{ m }  .",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Chiều sâu của mực nước cao nhất là  14\\,{ m }  .",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Thời gian để mực nước cao nhất là  t=9  .",
          "correct": true
        }
      ],
      "globalId": 152
    },
    {
      "id": 35,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Chiều cao so với mực nước biển trung bình tại thời điểm  t  (giây) của mỗi cơn sóng được cho bởi hàm số  h\\left ( { t } \\right )=75sin\\left ( { \\frac { \\pit } { 8 } } \\right )  , trong đó  h\\left ( { t } \\right )  được tính bằng centimét. (Tất cả kết quả được làm tròn đến hàng phần mười)",
      "explanation": "(a) Chiều cao của sóng tại các thời điểm 5 giây bằng  69,3\\,\\,\\left ( { \\text{cm} } \\right ) \nKhi  t=5  , ta có:  h\\left ( { 5 } \\right )=75sin\\left ( { \\frac { \\pi.5 } { 8 } } \\right )\\approx 69,3\\,\\,\\left ( { \\text{cm} } \\right )  .\n» Chọn ĐÚNG.\n(b) Chiều cao của sóng tại các thời điểm 20 giây bằng  75\\,\\,\\left ( { \\text{cm} } \\right ) \nKhi  t=20  , ta có:  h\\left ( { 20 } \\right )=75sin\\left ( { \\frac { \\pi⋅20 } { 8 } } \\right )=75\\,\\,\\left ( { \\text{cm} } \\right )  .\n» Chọn ĐÚNG.\n(c) Trong 30 giây đầu tiên (kể từ mốc  t=0  giây), thời điểm để sóng đạt chiều cao lớn nhất 6 giây\nTa có:  \\sin\\left ( { \\frac { \\pit } { 8 } } \\right )\\le 1\\Rightarrow 75sin\\left ( { \\frac { \\pit } { 8 } } \\right )\\le 75  hay  h(t)\\le 75  .\nGiá trị lớn nhất của  h\\left ( { t } \\right )  là 75, khi đó  \\sin\\left ( { \\frac { \\pit } { 8 } } \\right )=1\\Rightarrow \\frac { \\pit } { 8 }=\\frac { \\pi } { 2 }+k2\\pi(k\\in \\mathbb{Z})  \\Rightarrow t=4+16k\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  . Vì  t\\in \\left[ 0;30 \\right]\\Rightarrow t\\in \\left \\{ \\begin{array}{l} 4;20 \\end{array} \\right \\}  (ứng với  k  bằng 0 và 1).\n» Chọn SAI.\n(d) Trong 30 giây đầu tiên (kể từ mốc  t=0  giây), thời điểm để sóng đạt chiều cao lớn nhất 18 giây\nVậy tại các thời điểm 4 giây hoặc 20 giây (trong 30 giây đầu tiên) thì cơn sóng đạt chiều cao cực đại (là  75 \\text{cm}  ).\n» Chọn SAI.\nC.Câu hỏi – Trả lời ngắn",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Chiều cao của sóng tại các thời điểm 5 giây bằng  69,3\\,\\,\\left ( { \\text{cm} } \\right )",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Chiều cao của sóng tại các thời điểm 20 giây bằng  75\\,\\,\\left ( { \\text{cm} } \\right )",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Trong 30 giây đầu tiên (kể từ mốc  t=0  giây), thời điểm để sóng đạt chiều cao lớn nhất 6 giây",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Trong 30 giây đầu tiên (kể từ mốc  t=0  giây), thời điểm để sóng đạt chiều cao lớn nhất 18 giây",
          "correct": false
        }
      ],
      "globalId": 153
    },
    {
      "id": 36,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Tập giá trị của hàm số:  y=5+4sin2xcos2x  có dạng  \\left[ a;b \\right]  với  a;b  là các số nguyên. Tính giá trị  S=a ^ { 2 } -2ab",
      "explanation": "y=5+4sin2xcos2x  .\nHàm số có tập xác định  D=\\mathbb{R}  .\nTa có  y=5+4sin2xcos2x=5+2sin4x  .\nDo  -1\\le sin4x\\le 1\\Leftrightarrow -2\\le 2sin4x\\le 2\\Leftrightarrow 3\\le 5+2sin4x\\le 7\\Leftrightarrow 3\\le y\\le 7  .\nVậy giá trị của hàm số là  T=\\left[ 3;7 \\right]\\Rightarrow \\left \\{ \\begin{array}{l} a=3 \\\\ b=7 \\end{array} \\right.\\Rightarrow S=-33  .",
      "diagram": null,
      "correctAnswer": "-33",
      "globalId": 154
    },
    {
      "id": 37,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Tập giá trị của hàm số:  y=\\sin ^ { 6 } x+\\cos ^ { 6 } x  có dạng  \\left[ \\frac { a } { b };1 \\right]  với  a;b  là các số nguyên,  \\frac { a } { b }  là phân số tối giản. Tính giá trị  S=a+ab ^ { 2 }",
      "explanation": "y=\\sin ^ { 6 } x+\\cos ^ { 6 } x \nHàm số có tập xác định  D=\\mathbb{R}  .\nTa có:\n y=\\sin ^ { 6 } x+\\cos ^ { 6 } x=\\left ( { \\sin ^ { 2 } x+\\cos ^ { 2 } x } \\right ) ^ { 3 } -3sin ^ { 2 } xcos ^ { 2 } x\\left ( { \\sin ^ { 2 } x+\\cos ^ { 2 } x } \\right )=1-\\frac { 3 } { 4 }\\sin ^ { 2 } 2x  .\nDo  0\\le \\sin ^ { 2 } 2x\\le 1\\Leftrightarrow 0\\ge -\\frac { 3 } { 4 }\\sin ^ { 2 } 2x\\ge -\\frac { 3 } { 4 }\\Leftrightarrow 1\\ge 1-\\frac { 3 } { 4 }\\sin ^ { 2 } 2x\\ge \\frac { 1 } { 4 }\\Leftrightarrow 1\\ge y\\ge \\frac { 1 } { 4 }  .\nVậy giá trị của hàm số là  T=\\left[ \\frac { 1 } { 4 };1 \\right]\\Rightarrow \\left \\{ \\begin{array}{l} a=1 \\\\ b=4 \\end{array} \\right.\\Rightarrow S=17  .",
      "diagram": null,
      "correctAnswer": "17",
      "globalId": 155
    },
    {
      "id": 38,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  m  trong đoạn  \\left[ 0;10 \\right]  để hàm số  y=\\sqrt[] { m-2sinx }  xác định trên  \\mathbb{R}  .",
      "explanation": "Hàm số xác định  \\Leftrightarrow m-2sinx\\ge 0,∀x\\in \\mathbb{R}\\Leftrightarrow m\\ge 2sinx,∀x\\in \\mathbb{R}\\Leftrightarrow m\\ge 2  .\nVậy  m\\ge 2  .\nKhi đó trong đoạn  \\left[ 0;10 \\right]  có 9 giá trị thỏa mãn.",
      "diagram": null,
      "correctAnswer": "9",
      "globalId": 156
    },
    {
      "id": 39,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Số giờ có ánh sáng của thành phố  T  ở vĩ độ  40 ^ { ^\\circ }  bắc trong ngày thứ t của một năm không nhuận được cho bởi hàm số  d(t)=3⋅\\sin\\left[ \\frac { \\pi } { 182 }(t-80) \\right]+12  với  t\\in \\mathbb{Z}  và  0 < t\\le 365  . Bạn An muốn đi tham quan thành phố  T  nhưng lại không thích ánh sáng mặt trời, vậy bạn An nên chọn đi vào ngày nào trong năm để thành phố  T  có ít giờ có ánh sáng mặt trời nhất?",
      "explanation": "Do  \\sin\\left[ \\frac { \\pi } { 182 }(t-80) \\right]\\ge -1\\Rightarrow 3⋅\\sin\\left[ \\frac { \\pi } { 182 }(t-80) \\right]\\ge -3 \n \\Rightarrow 3⋅\\sin\\left[ \\frac { \\pi } { 182 }(t-80) \\right]+12\\ge 9\\Rightarrow d(t)\\ge 9  .\nVậy thành phố  T  có ít giờ có ánh sáng mặt trời nhất khi và chỉ khi:\n \\sin\\left[ \\frac { \\pi } { 182 }(t-80) \\right]=-1\\Leftrightarrow \\frac { \\pi } { 182 }(t-80)=-\\frac { \\pi } { 2 }+k2\\pi \n \\Leftrightarrow t-80=182\\left ( { -\\frac { 1 } { 2 }+2k } \\right )\\Leftrightarrow t=364k-11,k\\in \\mathbb{Z}  .\nMặt khác:  0\\le 364k-11\\le 365\\Leftrightarrow \\frac { 11 } { 364 }\\le k\\le \\frac { 376 } { 364 }\\Leftrightarrow k=1(  do  k\\in \\mathbb{Z}) \n \\Rightarrow t=364-11=353 \nVậy thành phố  T  có ít giờ ánh sáng Mặt Trời nhất là 9 giờ khi  t=353  , tức là vào ngày thứ 353 trong năm.",
      "diagram": null,
      "correctAnswer": "353",
      "globalId": 157
    },
    {
      "id": 40,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  m  trong đoạn  \\left[ -10;10 \\right]  để hàm số  y=\\frac { sinx-1 } { cosx+m }  có tập xác định  \\mathbb{R}  .",
      "explanation": "Điều kiện xác định:  cosx+m\\ne 0\\Leftrightarrow cosx\\ne -m \nHàm số xác định trên  \\mathbb{R}\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right. \\right.  .\nKhi đó trong đoạn  \\left[ -10;10 \\right]  có 9+9=18 giá trị thỏa mãn.",
      "diagram": null,
      "correctAnswer": "18",
      "globalId": 158
    },
    {
      "id": 41,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Tính tổng giá trị lớn nhất và giá trị nhỏ nhất (nếu có) của hàm số:  y=2cos\\left ( { x-\\frac { \\pi } { 3 } } \\right )-1  .",
      "explanation": "y=f\\left ( { x } \\right )=2cos\\left ( { x-\\frac { \\pi } { 3 } } \\right )-1  .\nTXD:  D=\\mathbb{R}  .\nTa có:  -1\\le \\cos\\left ( { x-\\frac { \\pi } { 3 } } \\right )\\le 1,∀x\\in \\mathbb{R} \n \\Leftrightarrow -2\\le 2cos\\left ( { x-\\frac { \\pi } { 3 } } \\right )\\le 2,∀x\\in \\mathbb{R}\\Leftrightarrow -3\\le 2cos\\left ( { x-\\frac { \\pi } { 3 } } \\right )-1\\le 1,∀x\\in \\mathbb{R} \n f_{ { M }{ a }{ x }{ } } \\left ( { x } \\right )=1\\Leftrightarrow \\cos\\left ( { x-\\frac { \\pi } { 3 } } \\right )=1\\Leftrightarrow x-\\frac { \\pi } { 3 }=k2\\pi\\Leftrightarrow x=\\frac { \\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}. \n f_{ { M }{ i }{ n }{ } } \\left ( { x } \\right )=-3\\Leftrightarrow \\cos\\left ( { x-\\frac { \\pi } { 3 } } \\right )=-1\\Leftrightarrow x-\\frac { \\pi } { 3 }=\\pi+k2\\pi\\Leftrightarrow x=\\frac { 4\\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z}. \nKhi đó tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số bằng  -2",
      "diagram": null,
      "correctAnswer": "-2",
      "globalId": 159
    },
    {
      "id": 42,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Tính tổng giá trị lớn nhất và giá trị nhỏ nhất (nếu có) của hàm số:  y=\\sqrt[] { 1+sinx }-3  . Kết quả làm tròn đến chữ số thập phân thứ 2.",
      "explanation": "y=f\\left ( { x } \\right )=\\sqrt[] { 1+sinx }-3  .\nDo  sinx\\ge -1,∀x\\in \\mathbb{R}  nên tập xác định của hàm số là  D=\\mathbb{R}  .\nTa có:  -1\\le sinx\\le 1,∀x\\in \\mathbb{R} \n \\Leftrightarrow 0\\le 1+sinx\\le 2,∀x\\in \\mathbb{R}\\Leftrightarrow -3\\le \\sqrt[] { 1+sinx }-3\\le \\sqrt[] { 2 }-3,∀x\\in \\mathbb{R}\\Leftrightarrow -3\\le f\\left ( { x } \\right )\\le \\sqrt[] { 2 }-3,∀x\\in \\mathbb{R} \n f_{ { M }{ i }{ n }{ } } \\left ( { x } \\right )=-3\\Leftrightarrow sinx=-1\\Leftrightarrow x=-\\frac { \\pi } { 2 }+k2\\pi,k\\in \\mathbb{Z}. \n f_{ { M }{ a }{ x }{ } } \\left ( { x } \\right )=\\sqrt[] { 2 }-3\\Leftrightarrow sinx=1\\Leftrightarrow x=\\frac { \\pi } { 2 }+k2\\pi,k\\in \\mathbb{Z}. \nKhi đó tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số bằng  -3+\\sqrt[] { 2 }-3=-6+\\sqrt[] { 2 }\\approx -4,59",
      "diagram": null,
      "correctAnswer": "-4,59",
      "globalId": 160
    },
    {
      "id": 43,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Hàm số  y=1-3\\sqrt[] { 1-\\cos ^ { 2 } x }  đạt giá trị nhỏ nhất tại điểm  x=\\frac { a } { b }\\pi+k\\pi,k\\in \\mathbb{Z}  , với  a;b  là các số nguyên,  \\frac { a } { b }  là phân số tối giản. Tính giá trị  S=a+ab ^ { 2 }",
      "explanation": "Ta có:  \\cos ^ { 2 } x\\ge 0\\Rightarrow -\\cos ^ { 2 } x\\le 0\\Leftrightarrow 1-\\cos ^ { 2 } x\\le 1 \n \\Rightarrow \\sqrt[] { 1-\\cos ^ { 2 } x }\\le 1\\Leftrightarrow -3\\sqrt[] { 1-\\cos ^ { 2 } x }\\ge -3\\Leftrightarrow 1-3\\sqrt[] { 1-\\cos ^ { 2 } x }\\ge -2\\Leftrightarrow y\\ge -2. \n(Dấu “=” xảy ra  \\Leftrightarrow 1-\\cos ^ { 2 } x=1\\Leftrightarrow \\cos ^ { 2 } x=0\\Leftrightarrow \\frac { 1+cos2x } { 2 }=0 \n \\left ) { \\Leftrightarrow cos2x=-1\\Leftrightarrow 2x=\\pi+k2\\pi,k\\in \\mathbb{Z}\\Leftrightarrow x=\\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z}. } \nVậy tại  x=\\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z}  thì  y  đạt giá trị nhỏ nhất bằng  -2  .\nKhi đó  a=1;b=2\\Rightarrow S=1+2 ^ { 2 } =5",
      "diagram": null,
      "correctAnswer": "5",
      "globalId": 161
    },
    {
      "id": 44,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  m  để hàm số  y=\\sqrt[] { \\frac { m-1 } { m }-2cos4x }  xác định trên  \\mathbb{R}  .",
      "explanation": "Để hàm số  y=\\sqrt[] { \\frac { m-1 } { m }-2cos4x }  xác định trên  \\mathbb{R} \n \\Leftrightarrow \\frac { m-1 } { m }-2cos4x\\ge 0,∀x\\in \\mathbb{R}\\Leftrightarrow \\frac { m-1 } { 2m }\\ge cos4x\\ge 1\\Leftrightarrow \\frac { m-1 } { 2m }\\ge 1\\Leftrightarrow -1\\le m\\le 0.",
      "diagram": null,
      "correctAnswer": "2",
      "globalId": 162
    },
    {
      "id": 45,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có tất cả bao nhiêu giá trị nguyên của tham số  m\\in \\left[ -2024;2024 \\right]  để hàm số  y=\\sqrt[] { \\sin ^ { 2 } x-2sinx+1-m }  xác định trên  \\mathbb{R}  ?",
      "explanation": "Hàm số xác định trên  \\mathbb{R}  khi và chỉ khi  \\sin ^ { 2 } x-2sinx+1-m\\ge 0,∀x\\in \\mathbb{R}  .\nĐặt  t=sinx  \\Rightarrow t\\in \\left[ -1;1 \\right] \nLúc này ta đi tìm điều kiện của  m  để  f\\left ( { t } \\right )=t ^ { 2 } -2t+1-m\\ge 0,∀t\\in \\left[ -1;1 \\right]\\,\\,(1) \nTa có  (1)\\Leftrightarrow \\mathop { \\mathop { min } \\limits_{ \\left[ -1;1 \\right] } f\\left ( { t } \\right )\\ge 0\\,\\,\\left ( { 2 } \\right ) } \nXét  f\\left ( { t } \\right )=t ^ { 2 } -2t+1-m,t\\in \\left[ -1;1 \\right]  , ta có bảng biến thiên\nDo đó (2)  \\Leftrightarrow -m\\ge 0\\Leftrightarrow m\\le 0  .\nVì  m\\in \\left[ -2024;2024 \\right]  và  m\\in \\mathbb{Z}  nên  m\\in \\left \\{ \\begin{array}{l} -2024;-2023;...;0 \\end{array} \\right \\}  nên có 2025 giá trị của tham số  m  .",
      "diagram": null,
      "correctAnswer": "2025",
      "globalId": 163
    },
    {
      "id": 46,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Gọi  M  và  m  lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số  y=sinx+\\sqrt[] { 3 }cosx+3  . Tính  M+m  .",
      "explanation": "Ta có  y=sinx+\\sqrt[] { 3 }cosx+3=2\\left ( { \\frac { 1 } { 2 }sinx+\\frac { \\sqrt[] { 3 } } { 2 }cosx } \\right )+3=2sin\\left ( { x+\\frac { \\pi } { 3 } } \\right )+3 \nDo  ∀x:-1\\le \\sin\\left ( { x+\\frac { \\pi } { 3 } } \\right )\\le 1  \\Leftrightarrow -2\\le 2sin\\left ( { x+\\frac { \\pi } { 3 } } \\right )\\le 2  \\Leftrightarrow 1\\le 2sin\\left ( { x+\\frac { \\pi } { 3 } } \\right )+3\\le 5  \\Leftrightarrow 1\\le y\\le 5  .\nVậy  m=\\mathop { min } \\limits_{ \\mathbb{R} } y=1{ }{ k }{ h }{ i }{ }x=-\\frac { 5\\pi } { 6 }+k2\\pi,(k\\in \\mathbb{Z})  và  M=\\mathop { max } \\limits_{ \\mathbb{R} } y=5  khi  x=\\frac { \\pi } { 6 }+k2\\pi,(k\\in \\mathbb{Z})  nên  M+m=6  .",
      "diagram": null,
      "correctAnswer": "6",
      "globalId": 164
    },
    {
      "id": 47,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Trong các hàm số  y=sin2x  ,  y=\\tan\\left | { x } \\right |  ,  y=tanx+cotx  ,  y=2sinx+3  có bao nhiêu hàm số lẻ?",
      "explanation": "» Xét hàm số  y=sin2x \nTXĐ:  D=\\mathbb{R}.  Suy ra  ∀x\\in D\\Rightarrow -x\\in D  .\nTa có:  f\\left ( { -x } \\right )=\\sin\\left ( { -2x } \\right )=-sin2x=-f\\left ( { x } \\right )  .\nDo đó hàm số đã cho là hàm số lẻ.\n» Xét hàm số  y=\\tan\\left | { x } \\right | \nTXĐ:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\pm \\frac { \\pi } { 2 }+k\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}.  Suy ra  ∀x\\in D\\Rightarrow -x\\in D  .\nTa có:  f\\left ( { -x } \\right )=\\tan\\left | { -x } \\right |=\\tan\\left | { x } \\right |=f\\left ( { x } \\right )  .\nDo đó hàm số đã cho là hàm số chẵn.\n» Xét hàm số  y=tanx+cotx \nTXĐ:  D=\\mathbb{R}\\\\left \\{ \\begin{array}{l} \\frac { k\\pi } { 2 },k\\in \\mathbb{Z} \\end{array} \\right \\}.  Suy ra  ∀x\\in D\\Rightarrow -x\\in D \nTa có:  f\\left ( { -x } \\right )=\\tan\\left ( { -x } \\right )+\\cot\\left ( { -x } \\right )=-tanx-cotx=-\\left ( { tanx+cotx } \\right )=-f\\left ( { x } \\right ) \nDo đó hàm số đã cho là hàm số lẻ.\n» Xét hàm số  y=2sinx+3 \nTXĐ:  D=\\mathbb{R}.  Suy ra  ∀x\\in D\\Rightarrow -x\\in D \nTa có:  f\\left ( { -\\frac { \\pi } { 2 } } \\right )=2sin\\left ( { \\frac { -\\pi } { 2 } } \\right )+3=1  ;  f\\left ( { \\frac { \\pi } { 2 } } \\right )=2sin\\left ( { \\frac { \\pi } { 2 } } \\right )+3=5 \nNhận thấy  \\left \\{ \\begin{array}{l} f\\left ( { -\\frac { \\pi } { 2 } } \\right )\\ne f\\left ( { \\frac { \\pi } { 2 } } \\right ) \\\\ f\\left ( { -\\frac { \\pi } { 2 } } \\right )\\ne -f\\left ( { \\frac { \\pi } { 2 } } \\right ) \\end{array} \\right. \nDo đó hàm số không chẵn không lẻ.",
      "diagram": null,
      "correctAnswer": "2",
      "globalId": 165
    },
    {
      "id": 48,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Tìm chu kì tuần hoàn của hàm số  f\\left ( { x } \\right )=tan2x  (kết quả được làm tròn đến hàng phần trăm).",
      "explanation": "Ta có :  f\\left ( { x+\\frac { \\pi } { 2 } } \\right )=f\\left ( { x } \\right ),\\,\\,\\,∀x\\in D  .\nGiả sử có số thực dương  T < \\frac { \\pi } { 2 }  thỏa  f\\left ( { x+T } \\right )=f\\left ( { x } \\right )\\Leftrightarrow \\tan\\left ( { 2x+2T } \\right )=tan2x\\,\\,\\,,\\,∀x\\in D\\,\\,\\,\\,(**) \nCho  x=0\\Rightarrow VT(**)=tan2T\\ne 0;\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,\\,VP(**)=0 \n \\Rightarrow (**)  không xảy ra với mọi  x\\in D  . Vậy hàm số đã cho tuần hoàn với chu kỳ  T_{ 0 } =\\frac { \\pi } { 2 }\\approx 1,57  .",
      "diagram": null,
      "correctAnswer": "1,57",
      "globalId": 166
    },
    {
      "id": 49,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho hàm số  y=ksin\\left ( { tx } \\right )  với  k,t\\in \\mathbb{R}  có đồ thị như hình vẽ. Hàm số có tập giá trị là  \\left[ a,b \\right]  . Tính  T=2a+6b  .",
      "explanation": "Vì hàm số đi qua các điểm  O\\left ( { 0,0 } \\right ),\\,\\,M\\left ( { \\frac { \\pi } { 3 },\\frac { \\sqrt[] { 3 } } { 4 } } \\right ),\\,A\\left ( { \\frac { \\pi } { 2 },0 } \\right )  nên ta tìm được hàm số đã cho là  y=\\frac { 1 } { 2 }\\sin\\left ( { 2x } \\right )  .\nVì  ∀x:-1\\le \\sin\\left ( { 2x } \\right )\\le 1  nên  -\\frac { 1 } { 2 }\\le \\frac { 1 } { 2 }\\sin\\left ( { 2x } \\right )\\le \\frac { 1 } { 2 }  .\nSuy ra tập giá trị của hàm số là  \\left[ -\\frac { 1 } { 2 },\\frac { 1 } { 2 } \\right]  .\nVậy  T=2.\\frac { -1 } { 2 }+6.\\frac { 1 } { 2 }=2  .",
      "diagram": "assets/diagrams/b4_q49.png",
      "correctAnswer": "2",
      "globalId": 167
    },
    {
      "id": 50,
      "lesson": "b4",
      "lessonTitle": "Bài 4. Hàm số lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Số giờ có ánh sáng của một thành phố  A  trong ngày thứ  t  của năm 2024 được cho bởi một hàm số  y=4sin\\left[ \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) \\right]+10  , với  t\\in \\mathbb{Z}  và  0 < t\\le 365  . Vào ngày nào trong tháng 5 năm 2024 thì thành phố  A  có số giờ ánh sáng mặt trời chiếu nhiều nhất?",
      "explanation": "Vì  \\sin\\left[ \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) \\right]\\le 1\\Leftrightarrow 4sin\\left[ \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) \\right]\\le 4\\Leftrightarrow 4sin\\left[ \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) \\right]+10\\le 14\\Leftrightarrow y\\le 14  .\nNgày có ánh nắng mặt trời chiếu nhiều nhất khi  y=14 \n \\Leftrightarrow \\sin\\left[ \\frac { \\pi } { 178 }\\left ( { t-60 } \\right ) \\right]=1 \n \\Leftrightarrow \\frac { \\pi } { 178 }\\left ( { t-60 } \\right )=\\frac { \\pi } { 2 }+2k\\pi,\\left ( { k\\in \\mathbb{Z} } \\right )\\Leftrightarrow t-60=89+356k\\Leftrightarrow t=149+356k \nMà  0 < t\\le 365\\Leftrightarrow 0 < 149+356k\\le 365 \n \\Leftrightarrow -149 < 356k\\le 216\\Leftrightarrow \\frac { -149 } { 356 } < k\\le \\frac { 54 } { 89 } \nVì  k\\in \\mathbb{Z}  nên  k=0  .\nVới  k=0  thì  t=149  .\nNăm 2024 là năm nhuận nên tháng 1, tháng 3 và tháng 5 có 31 ngày, tháng 2 có 29 ngày, tháng 4 có 30 ngày.\nVậy ngày thứ 149 trong năm 2024 rơi vào ngày 28 tháng 5 .\n-------------------- Hết --------------------",
      "diagram": null,
      "correctAnswer": "28",
      "globalId": 168
    },
    {
      "id": 1,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho hàm số  y=cosx  có đồ thị như hình vẽ. Nghiệm của phương trình  cosx=-1  trong khoảng  \\left ( { 0;2\\pi } \\right )  là:",
      "explanation": "Dựa vào đồ thị ta dễ thấy phương trình  cosx=-1  có một nghiệm trong khoảng  \\left ( { 0;2\\pi } \\right )  là  x=\\pi  .",
      "diagram": "assets/diagrams/b5_q1.png",
      "options": [
        "A.  x=0",
        "B.  x=\\pi",
        "C.  x=2\\pi",
        "D.  x=\\frac { \\pi } { 2 }"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 169
    },
    {
      "id": 2,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho hàm số  y=sinx  có đồ thị như hình vẽ. Nghiệm của phương trình  sinx=1  trong khoảng  \\left ( { 0;\\pi } \\right )  là:",
      "explanation": "Dựa vào đồ thị ta dễ thấy phương trình  sinx=1  có một nghiệm trong khoảng  \\left ( { 0;\\pi } \\right )  là  x=\\frac { \\pi } { 2 }  .",
      "diagram": "assets/diagrams/b5_q2.png",
      "options": [
        "A.  x=0",
        "B.  x=\\pi",
        "C.  x=-\\frac { \\pi } { 2 }",
        "D.  x=\\frac { \\pi } { 2 }"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 170
    },
    {
      "id": 3,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho hàm số  y=cosx  có đồ thị như hình vẽ. Tập nghiệm của phương trình  cosx=1  là?",
      "explanation": "Ta thấy đường thẳng  y=1  cắt đồ thị  y=cosx  tại các điểm có hoành độ  x=k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right ) \nNên tập nghiệm của phương trình  cosx=1  là  x=k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )  .",
      "diagram": "assets/diagrams/b5_q3.png",
      "options": [
        "A.  x=k\\pi\\,\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  x=\\pi+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  x=k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  x=\\frac { \\pi } { 2 }+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 171
    },
    {
      "id": 4,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  cosx=0  có nghiệm là:",
      "explanation": "Theo công thức nghiệm đặc biệt thì  cosx=0\\Leftrightarrow x=\\frac { \\pi } { 2 }+k\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  x=\\frac { \\pi } { 2 }+k\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  x=k2\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  x=\\frac { \\pi } { 2 }+k2\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  x=k\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 172
    },
    {
      "id": 5,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  2.sinx-1=0  có tập nghiệm là",
      "explanation": "Ta có:  2.sinx-1=0\\Leftrightarrow sinx=\\frac { 1 } { 2 }\\Leftrightarrow sinx=\\sin\\frac { \\pi } { 6 }\\Leftrightarrow \\left[ x=\\frac { \\pi } { 6 }+k2\\pi \\\\ x=\\frac { 5\\pi } { 6 }+k2\\pi \\right.\\,\\,\\, { k\\in () }",
      "diagram": null,
      "options": [
        "A.  S=\\left \\begin{array}{l} \\frac { \\pi } { 6 }+k2\\pi;\\frac { 5\\pi } { 6 }+k2\\pi,k\\in \\{\\} \\end{array} \\right.",
        "B.  S=\\left \\begin{array}{l} \\frac { \\pi } { 3 }+k2\\pi;-\\frac { 2\\pi } { 3 }+k2\\pi,k\\in \\{\\} \\end{array} \\right.",
        "C.  S=\\left \\begin{array}{l} \\frac { \\pi } { 6 }+k2\\pi;-\\frac { \\pi } { 6 }+k2\\pi,k\\in \\{\\} \\end{array} \\right.",
        "D.  S=\\left \\begin{array}{l} \\frac { 1 } { 6 }+k2\\pi,k\\in \\{\\} \\end{array} \\right."
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 173
    },
    {
      "id": 6,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  cosx=\\cos\\frac { \\pi } { 3 }  có tất cả các nghiệm là:",
      "explanation": "Phương trình  cosx=\\cos\\frac { \\pi } { 3 }\\Leftrightarrow x=\\pm \\frac { \\pi } { 3 }+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )",
      "diagram": null,
      "options": [
        "A.  x=\\frac { 2\\pi } { 3 }+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  x=\\pm \\frac { \\pi } { 3 }+k\\pi\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  x=\\pm \\frac { \\pi } { 3 }+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  x=\\frac { \\pi } { 3 }+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 174
    },
    {
      "id": 7,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tất cả các nghiệm của phương trình  sinx=\\sin\\frac { \\pi } { 3 }  là",
      "explanation": "Áp dụng công thức:  sinx=sina\\Leftrightarrow \\left[ x=a+k2\\pi \\\\ x=\\pi-a+k2\\pi \\right.\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=-\\frac { \\pi } { 3 }+k2\\pi \\right.\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=\\frac { 2\\pi } { 3 }+k2\\pi \\right.\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  x=\\frac { \\pi } { 3 }+k\\pi\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  \\left[ x=\\frac { \\pi } { 3 }+k\\pi \\\\ x=\\frac { 2\\pi } { 3 }+k\\pi \\right.\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 175
    },
    {
      "id": 8,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Nghiệm của phương trình  cosx=\\frac { 1 } { 2 }  là",
      "explanation": "Ta có  cosx=\\cos\\frac { \\pi } { 3 }\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.\\left ( { k\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  x=\\pm \\frac { \\pi } { 2 }+k2\\pi",
        "B.  x=\\pm \\frac { \\pi } { 3 }+k2\\pi",
        "C.  x=\\pm \\frac { \\pi } { 4 }+k2\\pi",
        "D.  x=\\pm \\frac { \\pi } { 6 }+k2\\pi"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 176
    },
    {
      "id": 9,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  cos2\\pix=\\frac { 2025 } { 2024 }  có bao nhiêu nghiệm trong  \\left ( { -\\pi;\\pi } \\right )",
      "explanation": "Ta có  \\frac { 2025 } { 2024 }>1  nên phương trình  cos2\\pix=\\frac { 2025 } { 2024 }  vô nghiệm.",
      "diagram": null,
      "options": [
        "A.  1",
        "B.  0",
        "C.  2",
        "D.  5"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 177
    },
    {
      "id": 10,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Nghiệm của phương trình  2cos\\left ( { x-15^\\circ } \\right )-1=0  là",
      "explanation": "2cos\\left ( { x-15^\\circ } \\right )-1=0\\Leftrightarrow \\cos\\left ( { x-15^\\circ } \\right )=\\frac { 1 } { 2 }\\Leftrightarrow \\cos\\left ( { x-15^\\circ } \\right )=cos60^\\circ \n \\Leftrightarrow \\left[ x-15^\\circ=60^\\circ+k360^\\circ \\\\ x-15^\\circ=-60^\\circ+k360^\\circ \\right.\\Leftrightarrow \\left[ x=75^\\circ+k360^\\circ \\\\ x=-45^\\circ+k360^\\circ \\right.  ,  k\\in \\mathbb{Z}  .",
      "diagram": null,
      "options": [
        "A.  \\left[ x=75^\\circ+k360^\\circ \\\\ x=135^\\circ+k360^\\circ \\right.  ,  k\\in \\mathbb{Z}",
        "B.  \\left[ x=60^\\circ+k360^\\circ \\\\ x=-60^\\circ+k360^\\circ \\right.  ,  k\\in \\mathbb{Z}",
        "C.  \\left[ x=45^\\circ+k360^\\circ \\\\ x=-45^\\circ+k360^\\circ \\right.  ,  k\\in \\mathbb{Z}",
        "D.  \\left[ x=75^\\circ+k360^\\circ \\\\ x=-45^\\circ+k360^\\circ \\right.  ,  k\\in \\mathbb{Z}"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 178
    },
    {
      "id": 11,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Giải phương trình  cosx=\\frac { \\sqrt[] { 3 } } { 2 }",
      "explanation": "Ta có:  cosx=\\frac { \\sqrt[] { 3 } } { 2 }\\Leftrightarrow cosx=\\cos\\frac { \\pi } { 6 }\\Leftrightarrow x=\\pm \\frac { \\pi } { 6 }+k2\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  x=\\pm \\frac { \\sqrt[] { 3 } } { 2 }+k2\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  x=\\pm \\frac { \\pi } { 6 }+k\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  x=\\pm \\frac { \\pi } { 6 }+k2\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  x=\\pm \\frac { \\pi } { 3 }+k2\\pi{ }\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 179
    },
    {
      "id": 12,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Nghiệm của phương trình  cosx=\\cos\\frac { \\pi } { 12 }  là",
      "explanation": "Ta có  cosx=\\cos\\frac { \\pi } { 12 }\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.\\left ( { k,l\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.\\left ( { k,l\\in \\mathbb{Z} } \\right )",
        "B.  \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.\\left ( { k,l\\in \\mathbb{Z} } \\right )",
        "C.  x=\\frac { \\pi } { 12 }+k2\\pi\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  x=\\frac { 11\\pi } { 12 }+k2\\pi\\,\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 180
    },
    {
      "id": 13,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  \\sin\\left ( { 2x-\\frac { \\pi } { 3 } } \\right )=0  có nghiệm là",
      "explanation": "Ta có  \\sin\\left ( { 2x-\\frac { \\pi } { 3 } } \\right )=0\\Leftrightarrow  2x-\\frac { \\pi } { 3 }=k\\pi,\\,k\\in \\mathbb{Z}  \\Leftrightarrow x=\\frac { \\pi } { 6 }+\\frac { k\\pi } { 2 },\\,k\\in \\mathbb{Z}  .",
      "diagram": null,
      "options": [
        "A.  x=k\\pi,\\,k\\in \\mathbb{Z}",
        "B.  x=\\frac { \\pi } { 6 }+\\frac { k\\pi } { 2 },\\,k\\in \\mathbb{Z}",
        "C.  x=\\frac { \\pi } { 2 }+k\\pi,\\,k\\in \\mathbb{Z}",
        "D.  x=\\frac { \\pi } { 3 }+k\\pi,\\,k\\in \\mathbb{Z}"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 181
    },
    {
      "id": 14,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Giải phương trình  cosx=1  .",
      "explanation": "Ta có  cosx=1  \\Leftrightarrow x=k2\\pi  ,  k\\in \\mathbb{Z}  .",
      "diagram": null,
      "options": [
        "A.  x=\\frac { k\\pi } { 2 }  ,  k\\in \\mathbb{Z}",
        "B.  x=k\\pi  ,  k\\in \\mathbb{Z}",
        "C.  x=\\frac { \\pi } { 2 }+k2\\pi  ,  k\\in \\mathbb{Z}",
        "D.  x=k2\\pi  ,  k\\in \\mathbb{Z}"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 182
    },
    {
      "id": 15,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  2sinx-\\sqrt[] { 3 }=0  có tập nghiệm là:",
      "explanation": "2sinx-\\sqrt[] { 3 }=0\\Leftrightarrow sinx=\\frac { \\sqrt[] { 3 } } { 2 }\\Leftrightarrow \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=\\frac { 2\\pi } { 3 }+k2\\pi \\right.\\left ( { k\\in \\mathbb{Z} } \\right ). \nVậy tập nghiệm của phương trình là:  S=\\left \\{ \\begin{array}{l} \\frac { \\pi } { 3 }+k2\\pi,\\frac { 2\\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
      "diagram": null,
      "options": [
        "A.  \\left \\{ \\begin{array}{l} \\pm \\frac { \\pi } { 6 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "B.  \\left \\{ \\begin{array}{l} \\pm \\frac { \\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "C.  \\left \\{ \\begin{array}{l} \\frac { \\pi } { 6 }+k2\\pi,\\frac { 5\\pi } { 6 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "D.  \\left \\{ \\begin{array}{l} \\frac { \\pi } { 3 }+k2\\pi,\\frac { 2\\pi } { 3 }+k2\\pi,k\\in \\mathbb{Z} \\end{array} \\right \\}"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 183
    },
    {
      "id": 16,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tổng các nghiệm của phương trình  2sin\\left ( { x+40^\\circ } \\right )=\\sqrt[] { 3 }  trên khoảng  \\left ( { -180^\\circ\\,;\\,180^\\circ } \\right )  là",
      "explanation": "Ta có:  2sin\\left ( { x+40^\\circ } \\right )=\\sqrt[] { 3 }  \\Leftrightarrow \\sin\\left ( { x+40^\\circ } \\right )=\\frac { \\sqrt[] { 3 } } { 2 } \n \\Leftrightarrow \\left[ x+40^\\circ=60^\\circ+k360^\\circ \\\\ x+40^\\circ=120^\\circ+k360^\\circ \\right.\\left ( { k\\in \\mathbb{Z} } \\right )  \\Leftrightarrow \\left[ x=20^\\circ+k360^\\circ \\\\ x=80^\\circ+k360^\\circ \\right.\\left ( { k\\in \\mathbb{Z} } \\right ) \nTheo đề bài:\n -180^\\circ < 20^\\circ+k360^\\circ < 180^\\circ\\Leftrightarrow -\\frac { 5 } { 9 } < k < \\frac { 4 } { 9 }\\Rightarrow k=0\\Rightarrow x=20^\\circ  .\n -180^\\circ < 80^\\circ+k360^\\circ < 180^\\circ\\Leftrightarrow -\\frac { 13 } { 18 } < k < \\frac { 5 } { 18 }\\Rightarrow k=0\\Rightarrow x=80^\\circ  .\nVậy tổng các nghiệm của phương trình là  20^\\circ+80^\\circ=100^\\circ  .",
      "diagram": null,
      "options": [
        "A.  20^\\circ",
        "B.  100^\\circ",
        "C.  80^\\circ",
        "D.  120^\\circ"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 184
    },
    {
      "id": 17,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tìm tổng các nghiệm của phương trình  \\cos\\left ( { 5x-\\frac { \\pi } { 6 } } \\right )=\\cos\\left ( { 2x-\\frac { \\pi } { 3 } } \\right )  trên  \\left[ 0\\,;\\pi \\right]  .",
      "explanation": "Ta có:\n \\cos\\left ( { 5x-\\frac { \\pi } { 6 } } \\right )=\\cos\\left ( { 2x-\\frac { \\pi } { 3 } } \\right )  \\Leftrightarrow \\left[ 5x-\\frac { \\pi } { 6 }=2x-\\frac { \\pi } { 3 }+k2\\pi \\\\ 5x-\\frac { \\pi } { 6 }=-2x+\\frac { \\pi } { 3 }+k2\\pi \\right.,k\\in  \\Leftrightarrow \\left[ x=-\\frac { \\pi } { 18 }+\\frac { k2\\pi } { 3 } \\\\ x=\\frac { \\pi } { 14 }+\\frac { k2\\pi } { 7 } \\right.,k\\in  .\nVì  x\\in \\left[ 0\\,;\\pi \\right]  nên ta có :\n+) Với  x=-\\frac { \\pi } { 18 }+\\frac { k2\\pi } { 3 }\\Rightarrow 0\\le -\\frac { \\pi } { 18 }+\\frac { k2\\pi } { 3 }\\le \\pi\\Leftrightarrow \\frac { 1 } { 12 }\\le k\\le \\frac { 19 } { 12 }  , do  k\\in  nên  x=\\frac { 11\\pi } { 18 }  .\n+) Với  x=\\frac { \\pi } { 14 }+\\frac { k2\\pi } { 7 }\\Rightarrow 0\\le \\frac { \\pi } { 14 }+\\frac { k2\\pi } { 7 }\\le \\pi\\Leftrightarrow \\frac { -1 } { 4 }\\le k\\le \\frac { 13 } { 4 }  , do  k\\in  nên  x\\in \\left \\{ \\begin{array}{l} \\frac { \\pi } { 14 };\\frac { 5\\pi } { 14 };\\frac { 9\\pi } { 14 };\\frac { 13\\pi } { 14 } \\end{array} \\right \\}  .\nTổng tất cả các nghiệm là:  \\frac { 11\\pi } { 18 }+\\frac { \\pi } { 14 }+\\frac { 5\\pi } { 14 }+\\frac { 9\\pi } { 14 }+\\frac { 13\\pi } { 14 }=\\frac { 47\\pi } { 18 }  .",
      "diagram": null,
      "options": [
        "A.  \\frac { 47\\pi } { 18 }",
        "B.  \\frac { 4\\pi } { 18 }",
        "C.  \\frac { 45\\pi } { 18 }",
        "D.  \\frac { 7\\pi } { 18 }"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 185
    },
    {
      "id": 18,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Số nghiệm phương trình  \\frac { sin3x } { cosx+1 }=0  thuộc đoạn  \\left[ 2\\pi;4\\pi \\right]  là",
      "explanation": "Điều kiện:  cosx+1\\ne 0\\Leftrightarrow x\\ne \\pi+k2\\pi  .\nTa có  \\frac { sin3x } { cosx+1 }=0\\Rightarrow sin3x=0\\Leftrightarrow x=\\frac { k\\pi } { 3 }\\left ( { k\\in \\mathbb{Z} } \\right ). \nSo với điều kiện nghiệm của phương trình là  x=\\frac { k\\pi } { 3 }  với  k\\in \\mathbb{Z},\\,\\,k\\ne 3\\left ( { 2l+1 } \\right ) \nVì  2\\pi\\le x\\le 4\\pi\\Leftrightarrow 2\\pi\\le \\frac { k\\pi } { 3 }\\le 4\\pi\\Leftrightarrow 6\\le k\\le 12  nên ta chọn  k\\in \\left \\{ \\begin{array}{l} 6,7,8,10,11,12 \\end{array} \\right \\}  .",
      "diagram": null,
      "options": [
        "A.  7",
        "B.  6",
        "C.  4",
        "D.  5"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 186
    },
    {
      "id": 19,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Với những giá trị nào của  x  thì giá trị của các hàm số  y=sin3x  và  y=sinx  bằng nhau?",
      "explanation": "Xét phương trình hoành độ giao điểm:\n sin3x=sinx  \\Leftrightarrow \\left[ 3x=x+k2\\pi \\\\ 3x=\\pi-x+k2\\pi \\right.\\Leftrightarrow \\left[ x=k\\pi \\\\ x=\\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 } \\right.{ }\\left ( { k\\in \\mathbb{Z} } \\right ).",
      "diagram": null,
      "options": [
        "A.  \\left[ x=k2\\pi \\\\ x=\\frac { \\pi } { 4 }+k2\\pi \\right.{ }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  x=k\\frac { \\pi } { 4 }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  x=k\\frac { \\pi } { 2 }\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  \\left[ x=k\\pi \\\\ x=\\frac { \\pi } { 4 }+k\\frac { \\pi } { 2 } \\right.{ }\\left ( { k\\in \\mathbb{Z} } \\right )."
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 187
    },
    {
      "id": 20,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Số nghiệm của phương trình  sinx=0  trên đoạn  \\left[ 0;\\pi \\right]  là",
      "explanation": "Ta có  sinx=0\\Leftrightarrow x=k\\pi  ,  k\\in \\mathbb{Z}  .\n x\\in \\left[ 0;\\pi \\right]\\Leftrightarrow 0\\le k\\pi\\le \\pi\\Leftrightarrow 0\\le k\\le 1  mà  k\\in \\mathbb{Z}  nên  k=0  ;  k=1  . Suy ra  x=0  ;  x=\\pi  .\nVậy phương trình  sinx=0  có 2 nghiệm trên đoạn  \\left[ 0;\\pi \\right]  .",
      "diagram": null,
      "options": [
        "A.  1",
        "B.  2",
        "C.  0",
        "D.  5"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 188
    },
    {
      "id": 21,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Nghiệm của phương trình  \\sin\\left ( { \\frac { \\pi } { 3 }-x } \\right )+1=0  là",
      "explanation": "\\sin\\left ( { \\frac { \\pi } { 3 }-x } \\right )+1=0\\Leftrightarrow \\sin\\left ( { \\frac { \\pi } { 3 }-x } \\right )=-1  \\Leftrightarrow \\frac { \\pi } { 3 }-x=-\\frac { \\pi } { 2 }+k2\\pi\\Leftrightarrow x=\\frac { 5\\pi } { 6 }-k2\\pi  ,  k\\in \\mathbb{Z}  .\nVới  k\\in \\mathbb{Z}  ,  x=\\frac { 5\\pi } { 6 }+k2\\pi  cũng là nghiệm của phương trình.",
      "diagram": null,
      "options": [
        "A.  x=\\frac { 7\\pi } { 6 }+k2\\pi  ,  k\\in \\mathbb{Z}",
        "B.  x=\\frac { 5\\pi } { 6 }+k\\pi  ,  k\\in \\mathbb{Z}",
        "C.  x=-\\frac { 7\\pi } { 6 }+k\\pi  ,  k\\in \\mathbb{Z}",
        "D.  x=\\frac { 5\\pi } { 6 }+k2\\pi  ,  k\\in \\mathbb{Z}"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 189
    },
    {
      "id": 22,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập nghiệm của phương trình  cos3x+\\sin\\frac { 2\\pi } { 3 }=0  là",
      "explanation": "Phương trình  cos3x+\\sin\\frac { 2\\pi } { 3 }=0,\\left ( { 1 } \\right )  có tập xác định  D=\\mathbb{R} \n \\left ( { 1 } \\right )\\Leftrightarrow cos3x=-\\sin\\frac { 2\\pi } { 3 }\\Leftrightarrow cos3x=\\cos\\frac { 5\\pi } { 6 } \n \\Leftrightarrow 3x=\\pm \\frac { 5\\pi } { 6 }+k.2\\pi,k\\in \\mathbb{Z} \n x=\\pm \\frac { 5\\pi } { 18 }+\\frac { k2\\pi } { 3 },k\\in \\mathbb{Z}  .",
      "diagram": null,
      "options": [
        "A.  \\left \\{ \\begin{array}{l} \\pm \\frac { 5\\pi } { 16 }+\\frac { k2\\pi } { 3 },k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "B.  \\left \\{ \\begin{array}{l} \\pm \\frac { 2\\pi } { 9 }+\\frac { k2\\pi } { 3 },k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "C.  \\left \\{ \\begin{array}{l} \\pm \\frac { 5\\pi } { 9 }+\\frac { k2\\pi } { 3 },k\\in \\mathbb{Z} \\end{array} \\right \\}",
        "D.  \\left \\{ \\begin{array}{l} \\pm \\frac { 5\\pi } { 12 }+\\frac { k2\\pi } { 3 },k\\in \\mathbb{Z} \\end{array} \\right \\}"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 190
    },
    {
      "id": 23,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Trong các phương trình sau, phương trình nào có nghiệm?",
      "explanation": "Phương trình lượng giác cơ bản dạng  sinu=\\alpha  ,  cosu=a  có nghiệm khi và chỉ khi  \\left | { a } \\right |\\le 1",
      "diagram": null,
      "options": [
        "A.  cosx=3",
        "B.  sin2x=-2",
        "C.  \\cos\\left ( { 2x-\\frac { \\pi } { 3 } } \\right )=-1",
        "D.  \\cos\\left ( { 2x-1 } \\right )=\\frac { \\sqrt[] { 7 } } { 2 }"
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 191
    },
    {
      "id": 24,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình nào sau đây có nghiệm?",
      "explanation": "Phương trình  sinx=a  và  cosx=a  có nghiệm khi và chỉ khi  \\left | { a } \\right |\\le 1  .\nĐối chiếu các đáp án ta thấy chỉ có đáp án D là phương trình có nghiệm.",
      "diagram": null,
      "options": [
        "A.  sin2021x-2=0",
        "B.  \\cos\\left ( { 2x+2021 } \\right )=3",
        "C.  \\sin ^ { 2 } x+1=0",
        "D.  \\cos\\left ( { 2x+2021 } \\right )=-1"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 192
    },
    {
      "id": 25,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  2sinx+\\sqrt[] { 3 }=0  có tổng nghiệm dương nhỏ nhất và nghiệm âm lớn nhất bằng",
      "explanation": "* Ta có:  2sinx+\\sqrt[] { 3 }=0\\Leftrightarrow sinx=-\\frac { \\sqrt[] { 3 } } { 2 }=\\sin\\left ( { -\\frac { \\pi } { 3 } } \\right )\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.\\,\\,\\,\\,\\,,k\\in \\mathbb{Z}  .\n* Xét  x=-\\frac { \\pi } { 3 }+k2\\pi  ,  k\\in \\mathbb{Z}  ta được nghiệm dương nhỏ nhất là  x_{ 1 } =\\frac { 5\\pi } { 3 }  và nghiệm âm lớn nhất là  x_{ 2 } =-\\frac { \\pi } { 3 }  .\n* Xét  x=\\frac { 4\\pi } { 3 }+k2\\pi  ,  k\\in \\mathbb{Z}  ta được nghiệm dương nhỏ nhất là  x_{ 3 } =\\frac { 4\\pi } { 3 }  và nghiệm âm lớn nhất là  x_{ 4 } =-\\frac { 2\\pi } { 3 }  .\n* So sánh  x_{ 1 }  và  x_{ 3 }  ta suy ra nghiệm dương nhỏ nhất của phương trình đã cho là  x_{ 3 } =\\frac { 4\\pi } { 3 }  .\nSo sánh  x_{ 2 }  và  x_{ 4 }  ta suy ra nghiệm âm lớn nhất của phương trình đã cho là  x_{ 2 } =-\\frac { \\pi } { 3 }  .\n* Ta có  x_{ 2 } +x_{ 3 } =-\\frac { \\pi } { 3 }+\\frac { 4\\pi } { 3 }=\\pi  .",
      "diagram": null,
      "options": [
        "A.  \\frac { 4\\pi } { 3 }",
        "B.  2\\pi",
        "C.  \\frac { \\pi } { 3 }",
        "D.  \\pi"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 193
    },
    {
      "id": 26,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Nghiệm của phương trình  \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=\\frac { \\sqrt[] { 2 } } { 2 }\\sin\\left ( { \\frac { \\pi } { 4 } } \\right )  là",
      "explanation": "Biến đổi và giải phương trình như sau:\n \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=\\frac { \\sqrt[] { 2 } } { 2 }\\sin\\left ( { \\frac { \\pi } { 4 } } \\right ) \n \\Leftrightarrow \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=\\frac { \\sqrt[] { 2 } } { 2 }.\\frac { \\sqrt[] { 2 } } { 2 }=\\frac { 1 } { 2 } \n \\Leftrightarrow \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=\\sin\\frac { \\pi } { 6 }\\Rightarrow \\left[ x+\\frac { \\pi } { 4 }=\\frac { \\pi } { 6 }+2k\\pi \\\\ x+\\frac { \\pi } { 4 }=\\pi-\\frac { \\pi } { 6 }+2k\\pi \\right.\\Leftrightarrow \\left[ x=-\\frac { \\pi } { 12 }+2k\\pi \\\\ x=\\frac { 7\\pi } { 12 }+2k\\pi \\right.  với  k\\in \\mathbb{Z}  .",
      "diagram": null,
      "options": [
        "A.  \\left[ x=\\frac { \\pi } { 12 }+2k\\pi \\\\ x=-\\frac { 7\\pi } { 12 }+2k\\pi \\right.",
        "B.  \\left[ x=-\\frac { \\pi } { 12 }+k\\pi \\\\ x=-\\frac { 7\\pi } { 12 }+k\\pi \\right.",
        "C.  \\left[ x=-\\frac { \\pi } { 12 }+2k\\pi \\\\ x=\\frac { 7\\pi } { 12 }+2k\\pi \\right.",
        "D.  \\left[ x=-\\frac { \\pi } { 12 }+k\\pi \\\\ x=\\frac { 7\\pi } { 12 }+k\\pi \\right."
      ],
      "correctIndex": 2,
      "correctLetter": "C",
      "globalId": 194
    },
    {
      "id": 27,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tập nghiệm của phương trình  \\sin ^ { 2 } x-2sinx+1=0  là?",
      "explanation": "Ta có:  \\sin ^ { 2 } x-2sinx+1=0\\Leftrightarrow \\left ( { sinx+1 } \\right ) ^ { 2 } =0  \\Leftrightarrow sinx=-1  \\Leftrightarrow x=-\\frac { \\pi } { 2 }+2k\\pi  với  k\\in \\mathbb{Z}  .\nHay  x=\\frac { 3\\pi } { 2 }+2k\\pi,k\\in \\mathbb{Z}  .",
      "diagram": null,
      "options": [
        "A.  x=-\\frac { 3\\pi } { 2 }+2k\\pi,k\\in \\mathbb{Z}",
        "B.  x=\\frac { 3\\pi } { 2 }+2k\\pi,k\\in \\mathbb{Z}",
        "C.  x=\\frac { \\pi } { 2 }+2k\\pi,k\\in \\mathbb{Z}",
        "D.  x=-\\frac { 3\\pi } { 2 }+k\\pi,k\\in \\mathbb{Z}"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 195
    },
    {
      "id": 28,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho phương trình  sinx=\\frac { \\sqrt[] { 2 } } { 2 }  . Số nghiệm của phương trình trên đoạn  \\left[ -\\frac { \\pi } { 2 };\\pi \\right]  là?",
      "explanation": "Ta có:  sinx=\\frac { \\sqrt[] { 2 } } { 2 }\\Leftrightarrow sinx=\\sin\\frac { \\pi } { 4 }\\Rightarrow \\left[ x=\\frac { \\pi } { 4 }+2k\\pi \\\\ x=\\frac { 3\\pi } { 4 }+2k\\pi \\right.,k\\in \\mathbb{Z}  .\nĐể tìm được số nghiệm của phương trình, ta có thể sử dụng phương pháp đại số hoặc phương pháp sử dụng vòng tròn lượng giác như sau:\nPP1: Phương pháp đại số. (tham số  k\\in \\mathbb{Z}  )\nVới nghiệm  x=\\frac { \\pi } { 4 }+2k\\pi  \\in \\left[ -\\frac { \\pi } { 2 };\\pi \\right]  \\Rightarrow -\\frac { \\pi } { 2 }\\le \\frac { \\pi } { 4 }+2k\\pi\\le \\pi\\Leftrightarrow -\\frac { 3 } { 8 }\\le k\\le \\frac { 3 } { 8 } \n \\Rightarrow k=0  tương ứng  x=\\frac { \\pi } { 4 }  là nghiệm duy nhất thuộc đoạn  \\left[ -\\frac { \\pi } { 2 };\\pi \\right]  .\nVới nghiệm  x=\\frac { 3\\pi } { 4 }+2k\\pi\\in \\left[ -\\frac { \\pi } { 2 };\\pi \\right]  \\Rightarrow -\\frac { \\pi } { 2 }\\le \\frac { 3\\pi } { 4 }+2k\\pi\\le \\pi\\Leftrightarrow -\\frac { 5 } { 8 }\\le k\\le \\frac { 1 } { 8 } \n \\Rightarrow k=0  tương ứng  x=\\frac { 3\\pi } { 4 }  là nghiệm duy nhất thuộc đoạn  \\left[ -\\frac { \\pi } { 2 };\\pi \\right]  .\nVậy phương trình  sinx=\\frac { \\sqrt[] { 2 } } { 2 }  có hai nghiệm thuộc đoạn  \\left[ -\\frac { \\pi } { 2 };\\pi \\right]  .\nPP2: Sử dụng vòng tròn lượng giác.\nTrên trục  \\sin  , ta xác định  \\frac { \\sqrt[] { 2 } } { 2 }  . Từ vị trí đó, kẻ đường thẳng vuông góc với trục  \\sin  .\nKhi đó, hai giao điểm được tạo thành là hai nghiệm cơ bản của phương trình.\nQuan sát thấy rằng, trong đoạn từ  \\left[ -\\frac { \\pi } { 2 };\\pi \\right]  chỉ có hai giao điểm tương ứng với hai nghiệm.",
      "diagram": null,
      "options": [
        "A.  2",
        "B.  3",
        "C.  4",
        "D.  1"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 196
    },
    {
      "id": 29,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  3cos ^ { 2 } x+7cosx-10=0  có nghiệm là?",
      "explanation": "Ta có:  3cos ^ { 2 } x+7cosx-10=0\\Leftrightarrow \\left[ cosx=1 \\\\ cosx=-\\frac { 10 } { 3 } \\right.  .\nVới  cosx=1\\Rightarrow x=2k\\pi  với  k\\in \\mathbb{Z}  .\nVới  cosx=-\\frac { 10 } { 3 }\\to  Loại vì tập giá trị của  cosx  là  \\left[ -1;1 \\right]  .",
      "diagram": null,
      "options": [
        "A.  x=\\frac { k\\pi } { 2 },k\\in \\mathbb{Z}",
        "B.  x=\\pi+2k\\pi,k\\in \\mathbb{Z}",
        "C.  x=k\\pi,k\\in \\mathbb{Z}",
        "D.  x=2k\\pi,k\\in \\mathbb{Z}"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 197
    },
    {
      "id": 30,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  \\cos\\left ( { 2x+30^\\circ } \\right )+sinx=0  có nghiệm là",
      "explanation": "\\cos\\left ( { 2x+30^\\circ } \\right )+sinx=0\\Leftrightarrow \\cos\\left ( { 2x+30^\\circ } \\right )=-sinx\\Leftrightarrow \\cos\\left ( { 2x+30^\\circ } \\right )=\\sin\\left ( { -x } \\right ) \n \\Leftrightarrow \\cos\\left ( { 2x+30^\\circ } \\right )=\\cos\\left ( { x+90^\\circ } \\right )\\Leftrightarrow \\left[ x=60^\\circ+k360^\\circ \\\\ x=-40^\\circ+k120^\\circ\\,\\,\\, \\right.\\left ( { k\\in \\mathbb{Z} } \\right )",
      "diagram": null,
      "options": [
        "A.  \\left[ x=60^\\circ+k180^\\circ \\\\ x=40^\\circ+k120^\\circ \\right.\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  \\left[ x=60^\\circ+k360^\\circ \\\\ x=-40^\\circ+k120 \\right.\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  \\left[ x=30^\\circ+k360^\\circ \\\\ x=15^\\circ+k180^\\circ \\right.\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  \\left[ x=\\frac { \\pi } { 3 }+\\frac { k2\\pi } { 3 } \\\\ x=k2\\pi \\right.\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 198
    },
    {
      "id": 31,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Cho hàm số  y=sinx  có đồ thị như hình vẽ. Hãy tìm tập tất cả các giá trị của  m  để phương trình  \\left | { sinx } \\right |=m  có nghiệm?",
      "explanation": "Đồ thị hàm số  y=\\left | { sinx } \\right |  được suy ra từ đồ thị  y=sinx  bằng:\n+ Giữ nguyên phần đồ thị bên trên trục  Ox  .\n+ Lấy đối xứng phần bên dưới qua trục  Ox  .\nTa được đồ thị như hình vẽ.\nDựa vào đồ thị ta thấy phương trình  \\left | { sinx } \\right |=m  có nghiệm khi  0\\le m\\le 1  .",
      "diagram": "assets/diagrams/b5_q31.png",
      "options": [
        "A.  -1\\le m\\le 1",
        "B.  -1\\le m\\le 0",
        "C.  -1 < m < 0",
        "D.  0\\le m\\le 1"
      ],
      "correctIndex": 3,
      "correctLetter": "D",
      "globalId": 199
    },
    {
      "id": 32,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Tìm tất cả các nghiệm của phương trình  sinx.\\sin\\frac { \\pi } { 3 }+cos2x.\\sin\\frac { \\pi } { 4 }=cosx.\\cos\\frac { \\pi } { 3 }+sin2x.\\cos\\frac { \\pi } { 4 }  .",
      "explanation": "⬥ Phương trình:  sinx.\\sin\\frac { \\pi } { 3 }+cos2x.\\sin\\frac { \\pi } { 4 }=cosx.\\cos\\frac { \\pi } { 3 }+sin2x.\\cos\\frac { \\pi } { 4 } \n \\Leftrightarrow cos2x.\\sin\\frac { \\pi } { 4 }-sin2x.\\cos\\frac { \\pi } { 4 }=cosx.\\cos\\frac { \\pi } { 3 }-sinx.\\sin\\frac { \\pi } { 3 } \n \\Leftrightarrow \\sin\\left ( { \\frac { \\pi } { 4 }-2x } \\right )=\\cos\\left ( { x+\\frac { \\pi } { 3 } } \\right ) \n \\Leftrightarrow \\cos\\left ( { 2x+\\frac { \\pi } { 4 } } \\right )=\\cos\\left ( { x+\\frac { \\pi } { 3 } } \\right ) \n \\Leftrightarrow \\left[ 2x+\\frac { \\pi } { 4 }=x+\\frac { \\pi } { 3 }+k2\\pi \\\\ 2x+\\frac { \\pi } { 4 }=-x-\\frac { \\pi } { 3 }+k2\\pi \\right.\\Leftrightarrow \\left[ x=\\frac { \\pi } { 12 }+k2\\pi \\\\ 3x=-\\frac { 7\\pi } { 12 }+k2\\pi \\right.  \\Leftrightarrow \\left[ x=\\frac { \\pi } { 12 }+k2\\pi \\\\ x=-\\frac { 7\\pi } { 36 }+k\\frac { 2\\pi } { 3 } \\right.{ }{ }\\left ( { k\\in \\mathbb{Z} } \\right ) \nVậy phương trình có nghiệm là  x=\\frac { \\pi } { 12 }+k2\\pi  ,  x=-\\frac { 7\\pi } { 36 }+k\\frac { 2\\pi } { 3 }  \\left ( { k\\in \\mathbb{Z} } \\right )  .",
      "diagram": null,
      "options": [
        "A.  \\left[ x=\\frac { \\pi } { 12 }+k2\\pi \\\\ x=-\\frac { 7\\pi } { 36 }+k\\frac { 2\\pi } { 3 } \\right.\\left ( { k\\in \\mathbb{Z} } \\right )",
        "B.  \\left[ x=-\\frac { 7\\pi } { 12 }+k2\\pi \\\\ x=\\frac { \\pi } { 36 }+k\\frac { 2\\pi } { 3 } \\right.\\left ( { k\\in \\mathbb{Z} } \\right )",
        "C.  \\left[ x=\\frac { 5\\pi } { 12 }+k2\\pi \\\\ x=-\\frac { \\pi } { 6 }+k\\frac { 2\\pi } { 3 } \\right.\\left ( { k\\in \\mathbb{Z} } \\right )",
        "D.  \\left[ x=\\frac { 7\\pi } { 12 }+k\\pi \\\\ x=-\\frac { \\pi } { 36 }+k2\\pi \\right.\\left ( { k\\in \\mathbb{Z} } \\right )"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 200
    },
    {
      "id": 33,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Phương trình  sin5x-sinx=0  có bao nhiêu nghiệm thuộc đoạn  \\left[ -2018\\pi;\\,2018\\pi \\right]  ?",
      "explanation": "Ta có  sin5x-sinx=0  \\Leftrightarrow sin5x=sinx  \\Leftrightarrow \\left[ x=\\frac { k{ \\pi } } { 2 } \\\\ x=\\frac { { \\pi } } { 6 }+\\frac { k{ \\pi } } { 3 } \\right.  , (  k  \\in \\mathbb{Z}  ).\nVì  x\\in \\left[ -2018{ \\pi };\\,2018{ \\pi } \\right]  nên\n+ Với  x=\\frac { k{ \\pi } } { 2 }  ta có  -2018{ \\pi }\\le \\frac { k{ \\pi } } { 2 }\\le 2018{ \\pi }  \\Leftrightarrow -4036\\le k\\le 4036  . Suy ra có  8073  nghiệm.\n+ Với  x=\\frac { { \\pi } } { 6 }+\\frac { k{ \\pi } } { 3 }  ta có  -2018{ \\pi }\\le \\frac { { \\pi } } { 6 }+\\frac { k{ \\pi } } { 3 }\\le 2018{ \\pi }  \\Leftrightarrow -\\frac { 12109 } { 2 }\\le k\\le \\frac { 12107 } { 2 }  . Suy ra có  12108  nghiệm.\nVậy có  8073+12108=20181  nghiệm thuộc đoạn  \\left[ -2018\\pi;\\,2018\\pi \\right]  .",
      "diagram": null,
      "options": [
        "A.  20179",
        "B.  20181",
        "C.  16144",
        "D.  16145"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 201
    },
    {
      "id": 34,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Nghiệm của phương trình  sin8x-cos6x=\\sqrt[] { 3 }\\left ( { sin6x+cos8x } \\right )  là",
      "explanation": "Ta có  sin8x-cos6x=\\sqrt[] { 3 }\\left ( { sin6x+cos8x } \\right )\\Leftrightarrow sin8x-\\sqrt[] { 3 }cos8x=\\sqrt[] { 3 }sin6x+cos6x \n \\Leftrightarrow \\sin\\left ( { 8x-\\frac { \\pi } { 3 } } \\right )=\\sin\\left ( { 6x+\\frac { \\pi } { 6 } } \\right )\\Leftrightarrow \\left[ 8x-\\frac { \\pi } { 3 }=6x+\\frac { \\pi } { 6 }+k2\\pi \\\\ 8x-\\frac { \\pi } { 3 }=\\frac { 5\\pi } { 6 }-6x+k2\\pi \\right.\\Leftrightarrow \\left[ x=\\frac { \\pi } { 4 }+k\\pi \\\\ x=\\frac { \\pi } { 12 }+\\frac { k\\pi } { 7 } \\right.\\,\\,(k\\in \\mathbb{Z})  .",
      "diagram": null,
      "options": [
        "A.  \\left[ x=\\frac { \\pi } { 4 }+k\\pi \\\\ x=\\frac { \\pi } { 12 }+k\\frac { \\pi } { 7 } \\right.\\,\\,(k\\in \\mathbb{Z})",
        "B.  \\left[ x=\\frac { \\pi } { 3 }+k\\pi \\\\ x=\\frac { \\pi } { 6 }+k\\frac { \\pi } { 2 } \\right.\\,\\,(k\\in \\mathbb{Z})",
        "C.  \\left[ x=\\frac { \\pi } { 5 }+k\\pi \\\\ x=\\frac { \\pi } { 7 }+k\\frac { \\pi } { 2 } \\right.\\,\\,(k\\in \\mathbb{Z})",
        "D.  \\left[ x=\\frac { \\pi } { 8 }+k\\pi \\\\ x=\\frac { \\pi } { 9 }+k\\frac { \\pi } { 3 } \\right.\\,\\,(k\\in \\mathbb{Z})"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 202
    },
    {
      "id": 35,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Số giờ có ánh sáng mặt trời của một thành phố A ở vĩ độ  40 ^ { { o } }  bắc trong ngày thứ t của một năm không nhuận được cho bởi hàm số  d\\left ( { t } \\right )=3sin\\left[ \\frac { \\pi } { 180 }\\left ( { t-80 } \\right ) \\right]+12  với  t\\in \\mathbb{Z}  và  0 < t\\le 365  . Vào ngày nào trong năm thì thành phố A có nhiều giờ có ánh sáng mặt trời nhất?",
      "explanation": "Ta có  d\\left ( { t } \\right )=3sin\\left[ \\frac { \\pi } { 180 }\\left ( { t-80 } \\right ) \\right]+12\\le 3.1+12=15  .\nVậy thành phố A có nhiều giờ có ánh sáng mặt trời nhất khi  \\sin\\left[ \\frac { \\pi } { 180 }\\left ( { t-80 } \\right ) \\right]=1\\Leftrightarrow \\frac { \\pi } { 180 }\\left ( { t-80 } \\right )=\\frac { \\pi } { 2 }+k2\\pi\\Leftrightarrow t=170+360k\\,(k\\in \\mathbb{Z})  .\nVì  0 < t\\le 365  nên  0 < 170+360k\\le 365\\Leftrightarrow -\\frac { 17 } { 36 } < k\\le \\frac { 39 } { 72 }\\Rightarrow k=0\\Rightarrow t=170  .\nVậy vào ngày thứ 170 trong năm thì thành phố A có nhiều giờ có ánh sáng mặt trời nhất.",
      "diagram": null,
      "options": [
        "A. 170",
        "B. 171",
        "C. 172",
        "D. 173"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 203
    },
    {
      "id": 36,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Một chiếc guồng nước có dạng hình tròn bán kính 2,5m; trục của nó đặt cách mặt nước 2m (hình vẽ). Khi guồng quay đều, khoảng cách h (mét) từ một chiếc gầu gắn tại điểm A của guồng đến mặt nước được tính theo công thức  h=\\left | { y } \\right |  trong đó  y=2+2,5sin\\left[ 2\\pi\\left ( { x-\\frac { 1 } { 4 } } \\right ) \\right]  với x là thời gian quay của guồng  (x\\ge 0)  , tính bằng phút (quy ước  y>0  khi gầu ở bên trên mặt nước và  y < 0  khi gầu ở dưới nước). Chiếc gầu cách mặt nước 2m lần đầu tiên khi nào?",
      "explanation": "Ta có  h=2\\Leftrightarrow \\left | { y } \\right |=2\\Leftrightarrow y=\\pm 2  . Thấy khi gầu dưới mặt nước thì khoảng cách từ gầu đến mặt nước lớn nhất là 0,5m.\n \\Rightarrow y=2\\Leftrightarrow 2+2,5sin\\left[ 2\\pi\\left ( { x-\\frac { 1 } { 4 } } \\right ) \\right]=2\\Leftrightarrow \\sin\\left[ 2\\pi\\left ( { x-\\frac { 1 } { 4 } } \\right ) \\right]=0\\Leftrightarrow 2\\pi\\left ( { x-\\frac { 1 } { 4 } } \\right )=k\\pi\\Leftrightarrow x=\\frac { 1 } { 4 }+\\frac { k } { 2 } \nMà  x\\ge 0\\Rightarrow \\frac { 1 } { 4 }+\\frac { k } { 2 }\\ge 0\\Leftrightarrow k\\ge -\\frac { 1 } { 2 }  . Do  k\\in \\mathbb{Z}\\Rightarrow k\\in \\left \\{ \\begin{array}{l} 0,1,2,... \\end{array} \\right \\}  . Vậy thời điểm gầu cách mặt nước 2m lần đầu tiên đạt được khi  k=0\\Rightarrow  x=\\frac { 1 } { 4 }  phút.",
      "diagram": "assets/diagrams/b5_q36.png",
      "options": [
        "A.  4  phút",
        "B.  \\frac { 1 } { 4 }  phút",
        "C.  2  phút",
        "D.  \\frac { 1 } { 2 }  phút"
      ],
      "correctIndex": 1,
      "correctLetter": "B",
      "globalId": 204
    },
    {
      "id": 37,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "A",
      "type": "multiple_choice",
      "prompt": "Guồng nước (hay còn gọi là con nước) không chỉ là công cụ phục vụ sản xuất nông nghiệp, mà đã trở thành hình ảnh quen thuộc của bản làng và là một nét văn hóa đặc trưng của đồng bào dân tộc miền núi phía Bắc. Một chiếc guồng nước có dạng hình tròn bán kính  3,5 m  ; trục của nó đặt cách mặt nước  3 m  . Khi guồng quay đều, khoảng cách  h\\,\\left ( { m } \\right )  từ một ống đựng nước gắn tại một điểm của guồng đến mặt nước được tính theo công thức  h=\\left | { y } \\right |  , trong đó  y=3,5sin\\left ( { 2\\pix-\\frac { \\pi } { 2 } } \\right )+3  , với  x  (phút) là thời gian quay của guồng  (x\\ge 0)  . Hãy chỉ ra giá trị của  x  nhỏ nhất để ống đựng nước cách mặt nước  3m  .",
      "explanation": "Để ống đựng nước cách mặt nước  3m  , ta có phương trình:\n \\left | { 3,5sin\\left ( { 2\\pix-\\frac { \\pi } { 2 } } \\right )+3 } \\right |=3\\Leftrightarrow \\left[ 3,5sin\\left ( { 2\\pix-\\frac { \\pi } { 2 } } \\right )+3=3 \\\\ 3,5sin\\left ( { 2\\pix-\\frac { \\pi } { 2 } } \\right )+3=-3 \\right.\\Leftrightarrow \\left[ \\sin\\left ( { 2\\pix-\\frac { \\pi } { 2 } } \\right )=0 \\\\ 3,5sin\\left ( { 2\\pix-\\frac { \\pi } { 2 } } \\right )=-\\frac { 6 } { 3,5 } < -1\\,\\,(VN) \\right. \\\\ \\Leftrightarrow 2\\pix-\\frac { \\pi } { 2 }=k\\pi\\Leftrightarrow x=\\frac { 2k+1 } { 4 };k\\in \\mathbb{Z} \nVì  x\\ge 0  nên một số giá trị của  x  là:  \\frac { 1 } { 4 };\\frac { 3 } { 4 };\\frac { 5 } { 4 };\\frac { 7 } { 4 };... \nVậy giá trị nhỏ nhất của  x  theo yêu cầu bài toán là  \\frac { 1 } { 4 } \nB.Câu hỏi – Trả lời Đúng/sai",
      "diagram": null,
      "options": [
        "A.  \\frac { 1 } { 4 }",
        "B.  \\frac { 5 } { 4 }",
        "C.  \\frac { 1 } { 8 }",
        "D.  \\frac { 7 } { 8 }"
      ],
      "correctIndex": 0,
      "correctLetter": "A",
      "globalId": 205
    },
    {
      "id": 38,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình  sinx=a  (1).",
      "explanation": "(a) Nếu  a>1  thì phương trình (1) vô nghiệm.\n» Chọn ĐÚNG.\n(b) Nếu  a=1  thì phương trình (1) có nghiệm  \\alpha=\\frac { \\pi } { 2 }+k\\pi,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  .\nNếu  a=1  \\Rightarrow \\sin\\alpha=1\\Leftrightarrow \\alpha=\\frac { \\pi } { 2 }+k2\\pi,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  .\n» Chọn SAI.\n(c) Nếu  -1\\le a\\le 1  thì phương trình (1) có nghiệm  \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\left ( { k\\in \\mathbb{Z} } \\right ) \\right.  với  a=\\sin\\alpha  .\n» Chọn ĐÚNG.\n(d) Phương trình (1) có hai điểm biểu diễn nghiệm trên đường tròn lượng giác.\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Nếu  a>1  thì phương trình (1) vô nghiệm.",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Nếu  a=1  thì phương trình (1) có nghiệm  \\alpha=\\frac { \\pi } { 2 }+k\\pi,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  .",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Nếu  -1\\le a\\le 1  thì phương trình (1) có nghiệm  \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\left ( { k\\in \\mathbb{Z} } \\right ) \\right.  với  a=\\sin\\alpha  .",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Phương trình (1) có hai điểm biểu diễn nghiệm trên đường tròn lượng giác.",
          "correct": false
        }
      ],
      "globalId": 206
    },
    {
      "id": 39,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình lượng giác  2sinx-\\sqrt[] { 2 }=0  . Khi đó:",
      "explanation": "(a) Phương trình tương đương với phương trình  sinx=\\sin\\frac { \\pi } { 4 }  .\n 2sinx-\\sqrt[] { 2 }=0  \\Leftrightarrow sinx=\\frac { \\sqrt[] { 2 } } { 2 }  \\Leftrightarrow sinx=\\sin\\frac { \\pi } { 4 }  .\n» Chọn ĐÚNG.\n(b) Phương trình có nghiệm là  x=\\frac { \\pi } { 4 }+k2\\pi;x=\\frac { 3\\pi } { 4 }+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )  .\n 2sinx-\\sqrt[] { 2 }=0  \\Leftrightarrow sinx=\\sin\\frac { \\pi } { 4 }\\Leftrightarrow \\left[ x=\\frac { \\pi } { 4 }+k2\\pi \\\\ x=\\frac { 3\\pi } { 4 }+k2\\pi \\right.\\left ( { k\\in \\mathbb{Z} } \\right ) \n» Chọn ĐÚNG.\n(c) Phương trình có nghiệm âm lớn nhất là  \\frac { \\pi } { 4 }  .\nDo  x  là nghiệm âm lớn nhất nên\nTrường hợp 1:  x=\\frac { \\pi } { 4 }+k2\\pi < 0\\Leftrightarrow k < \\frac { -1 } { 8 }\\Rightarrow k=-1\\Rightarrow x=\\frac { -7\\pi } { 4 }  .\nTrường hợp 2:  x=\\frac { 3\\pi } { 4 }+k2\\pi < 0\\Leftrightarrow k < \\frac { -3 } { 8 }\\Rightarrow k=-1\\Rightarrow x=\\frac { -5\\pi } { 4 } \nTrong hai nghiệm  \\frac { -7\\pi } { 4 }  và  \\frac { -5\\pi } { 4 }  thì nghiệm âm lớn nhất là  \\frac { -5\\pi } { 4 }  .\nPhương trình có nghiệm âm lớn nhất là  -\\frac { 5\\pi } { 4 }  .\n» Chọn SAI.\n(d) Số nghiệm của phương trình trong khoảng  \\left ( { -\\frac { \\pi } { 2 };\\frac { \\pi } { 2 } } \\right )  là hai nghiệm.\n x\\in \\left ( { -\\frac { \\pi } { 2 };\\frac { \\pi } { 2 } } \\right ) \n+)  x=\\frac { \\pi } { 4 }+k2\\pi  : Ta có  \\frac { -\\pi } { 2 } < \\frac { \\pi } { 4 }+k2\\pi < \\frac { \\pi } { 2 }\\Leftrightarrow \\frac { -3 } { 8 } < k < \\frac { 1 } { 8 }  .\nMà  k\\in \\mathbb{Z}  nên  k=0  :  x=\\frac { \\pi } { 4 } \n+)  x=\\frac { 3\\pi } { 4 }+k2\\pi  : Ta có  \\frac { -\\pi } { 2 } < \\frac { 3\\pi } { 4 }+k2\\pi < \\frac { \\pi } { 2 }\\Leftrightarrow \\frac { -5 } { 8 } < k < \\frac { -1 } { 8 }  .\nMà  k\\in \\mathbb{Z}  nên không có giá trị nào của  k  thỏa mãn.\nVậy số nghiệm của phương trình trong khoảng  \\left ( { -\\frac { \\pi } { 2 };\\frac { \\pi } { 2 } } \\right )  là một nghiệm.\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Phương trình tương đương với phương trình  sinx=\\sin\\frac { \\pi } { 4 }  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Phương trình có nghiệm là  x=\\frac { \\pi } { 4 }+k2\\pi;x=\\frac { 3\\pi } { 4 }+k2\\pi\\left ( { k\\in \\mathbb{Z} } \\right )  .",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Phương trình có nghiệm âm lớn nhất là  \\frac { \\pi } { 4 }  .",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Số nghiệm của phương trình trong khoảng  \\left ( { -\\frac { \\pi } { 2 };\\frac { \\pi } { 2 } } \\right )  là hai nghiệm.",
          "correct": false
        }
      ],
      "globalId": 207
    },
    {
      "id": 40,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình lượng giác  sin2x=-\\frac { 1 } { 2 }\\,\\,\\,\\left ( { * } \\right )  . Khi đó:",
      "explanation": "(a) Phương trình  \\left ( { * } \\right )  tương đương  sin2x=\\sin\\frac { \\pi } { 6 } \n sin2x=-\\frac { 1 } { 2 }\\Leftrightarrow sin2x=\\sin\\frac { -\\pi } { 6 }  \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z})\\Rightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z}) \\right. \\right. \n» Chọn SAI.\n(b) Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có 3 nghiệm\n 0 < x < \\pi\\Rightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z})\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right. \\right.  .\n» Chọn SAI.\n(c) Tổng các nghiệm của phương trình trong khoảng  \\left ( { 0;\\pi } \\right )  bằng  \\frac { 3\\pi } { 2 } \nVới  x=\\frac { 11\\pi } { 12 };x=\\frac { 7\\pi } { 12 }\\Rightarrow \\frac { 11\\pi } { 12 }+\\frac { 7\\pi } { 12 }=\\frac { 18\\pi } { 12 }=\\frac { 3\\pi } { 2 } \n» Chọn ĐÚNG.\n(d) Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có nghiệm lớn nhất bằng  \\frac { 11\\pi } { 12 } \nVới  x=\\frac { 11\\pi } { 12 };x=\\frac { 7\\pi } { 12 }\\Rightarrow  nghiệm  x=\\frac { 11\\pi } { 12 }  là nghiệm lớn nhất trong khoảng  \\left ( { 0;\\pi } \\right ) \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Phương trình  \\left ( { * } \\right )  tương đương  sin2x=\\sin\\frac { \\pi } { 6 }",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có 3 nghiệm",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Tổng các nghiệm của phương trình trong khoảng  \\left ( { 0;\\pi } \\right )  bằng  \\frac { 3\\pi } { 2 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có nghiệm lớn nhất bằng  \\frac { 11\\pi } { 12 }",
          "correct": true
        }
      ],
      "globalId": 208
    },
    {
      "id": 41,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình lượng giác  2cosx=\\sqrt[] { 3 }  , khi đó:",
      "explanation": "(a) Phương trình có nghiệm  x=\\pm \\frac { \\pi } { 3 }+k2\\pi(k\\in \\mathbb{Z}) \nTa có:  2cosx=\\sqrt[] { 3 }\\Leftrightarrow cosx=\\frac { \\sqrt[] { 3 } } { 2 }\\Leftrightarrow x=\\pm \\frac { \\pi } { 6 }+k2\\pi(k\\in \\mathbb{Z})  .\n» Chọn SAI.\n(b) Trong đoạn  \\left[ 0;\\frac { 5\\pi } { 2 } \\right]  phương trình có 4 nghiệm\nVì  x\\in \\left[ 0;\\frac { 5\\pi } { 2 } \\right]  nên  x\\in \\left \\{ \\begin{array}{l} \\frac { \\pi } { 6 };\\frac { 11\\pi } { 6 };\\frac { 13\\pi } { 6 } \\end{array} \\right \\}  .\n» Chọn SAI.\n(c) Tổng các nghiệm của phương trình trong đoạn  \\left[ 0;\\frac { 5\\pi } { 2 } \\right]  bằng  \\frac { 25\\pi } { 6 } \nVới  x\\in \\left \\{ \\begin{array}{l} \\frac { \\pi } { 6 };\\frac { 11\\pi } { 6 };\\frac { 13\\pi } { 6 } \\end{array} \\right \\}\\Rightarrow \\frac { \\pi } { 6 }+\\frac { 11\\pi } { 6 }+\\frac { 13\\pi } { 6 }=\\frac { 25\\pi } { 6 }  .\n» Chọn ĐÚNG.\n(d) Trong đoạn  \\left[ 0;\\frac { 5\\pi } { 2 } \\right]  phương trình có nghiệm lớn nhất bằng  \\frac { 13\\pi } { 6 } \nVới  x\\in \\left \\{ \\begin{array}{l} \\frac { \\pi } { 6 };\\frac { 11\\pi } { 6 };\\frac { 13\\pi } { 6 } \\end{array} \\right \\}\\Rightarrow  nghiệm lớn nhất là  x=\\frac { 13\\pi } { 6 } \n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Phương trình có nghiệm  x=\\pm \\frac { \\pi } { 3 }+k2\\pi(k\\in \\mathbb{Z})",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Trong đoạn  \\left[ 0;\\frac { 5\\pi } { 2 } \\right]  phương trình có 4 nghiệm",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Tổng các nghiệm của phương trình trong đoạn  \\left[ 0;\\frac { 5\\pi } { 2 } \\right]  bằng  \\frac { 25\\pi } { 6 }",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Trong đoạn  \\left[ 0;\\frac { 5\\pi } { 2 } \\right]  phương trình có nghiệm lớn nhất bằng  \\frac { 13\\pi } { 6 }",
          "correct": true
        }
      ],
      "globalId": 209
    },
    {
      "id": 42,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình  \\sin\\left ( { 2x-\\frac { \\pi } { 4 } } \\right )=\\sin\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )\\,\\,\\,\\left ( { * } \\right )  , vậy:",
      "explanation": "(a) Phương trình có nghiệm  \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z}){ . } \\right. \n» Chọn ĐÚNG.\nTa có:  \\sin\\left ( { 2x-\\frac { \\pi } { 4 } } \\right )=\\sin\\left ( { x+\\frac { 3\\pi } { 4 } } \\right )\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right.  \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z}){ . } \\right. \n(b) Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có 2 nghiệm\n» Chọn ĐÚNG.\nVì  0 < x < \\pi\\Leftrightarrow 0 < \\pi+k2\\pi < \\pi\\Leftrightarrow -\\pi < k2\\pi < 0\\Leftrightarrow \\frac { -1 } { 2 } < k < 0 \nVì  0 < x < \\pi\\Leftrightarrow 0 < \\frac { \\pi } { 6 }+k\\frac { 2\\pi } { 3 } < \\pi\\Leftrightarrow -\\frac { \\pi } { 6 } < k\\frac { 2\\pi } { 3 } < \\frac { 5\\pi } { 6 }\\Leftrightarrow -\\frac { 1 } { 4 } < k < \\frac { 5 } { 4 } \nDo  k\\in \\mathbb{Z}  nên  k\\in \\left \\{ \\begin{array}{l} 0;1 \\end{array} \\right \\}  \\Rightarrow x\\in \\left \\{ \\begin{array}{l} \\frac { \\pi } { 6 };\\frac { 5\\pi } { 6 } \\end{array} \\right \\} \n(c) Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có 2 nghiệm âm.\nTrong khoảng  \\left ( { 0;\\pi } \\right )  phương trình không tồn tại nghiệm âm.\n» Chọn SAI.\n(d) Tổng các nghiệm của phương trình trong khoảng  \\left ( { 0;\\pi } \\right )  bằng  \\frac { 7\\pi } { 6 } \nVới  x\\in \\left \\{ \\begin{array}{l} \\frac { \\pi } { 6 };\\frac { 5\\pi } { 6 } \\end{array} \\right \\}\\Rightarrow \\frac { \\pi } { 6 }+\\frac { 5\\pi } { 6 }=\\pi \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Phương trình có nghiệm  \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z}){ . } \\right.",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có 2 nghiệm",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Trong khoảng  \\left ( { 0;\\pi } \\right )  phương trình có 2 nghiệm âm",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Tổng các nghiệm của phương trình trong khoảng  \\left ( { 0;\\pi } \\right )  bằng  \\frac { 7\\pi } { 6 }",
          "correct": false
        }
      ],
      "globalId": 210
    },
    {
      "id": 43,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình lượng giác  3-\\sqrt[] { 3 }\\tan\\left ( { 2x-\\frac { \\pi } { 3 } } \\right )=0  , khi đó:",
      "explanation": "(a) Phương trình có nghiệm  x=\\frac { \\pi } { 6 }+\\frac { k\\pi } { 2 },k\\in \\mathbb{Z}  .\nPhương trình tương đương với:  \\tan\\left ( { 2x-\\frac { \\pi } { 3 } } \\right )=\\sqrt[] { 3 }\\Leftrightarrow x=\\frac { \\pi } { 3 }+\\frac { k\\pi } { 2 },k\\in \\mathbb{Z}  .\n» Chọn SAI.\n(b) Khi  \\frac { -\\pi } { 4 } < x < \\frac { 2\\pi } { 3 }  thì phương trình có ba nghiệm\nVì  \\frac { -\\pi } { 4 } < x < \\frac { 2\\pi } { 3 }\\Leftrightarrow \\frac { -\\pi } { 4 } < \\frac { \\pi } { 3 }+\\frac { k\\pi } { 2 } < \\frac { 2\\pi } { 3 }\\Leftrightarrow \\frac { -7\\pi } { 12 } < \\frac { k\\pi } { 2 } < \\frac { \\pi } { 3 }\\Leftrightarrow \\frac { -7 } { 6 } < k < \\frac { 2 } { 3 } \nDo  k\\in \\mathbb{Z}  nên  k\\in \\left \\{ \\begin{array}{l} -1;0 \\end{array} \\right \\}  .\n» Chọn SAI.\n(c) Phương trình có nghiệm âm lớn nhất bằng  -\\frac { \\pi } { 3 } \nVới  k=-1  thì  x=\\frac { -\\pi } { 6 }  , với  k=0  thì  x=\\frac { \\pi } { 3 }  .\n» Chọn SAI.\n(d) Tổng các nghiệm của phương trình trong khoảng  \\left ( { \\frac { -\\pi } { 4 };\\frac { 2\\pi } { 3 } } \\right )  bằng  \\frac { \\pi } { 6 } \nVậy  \\frac { -\\pi } { 6 }+\\frac { \\pi } { 3 }=\\frac { \\pi } { 6 }  .\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Phương trình có nghiệm  x=\\frac { \\pi } { 6 }+\\frac { k\\pi } { 2 },k\\in \\mathbb{Z}  .",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Khi  \\frac { -\\pi } { 4 } < x < \\frac { 2\\pi } { 3 }  thì phương trình có ba nghiệm",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Phương trình có nghiệm âm lớn nhất bằng  -\\frac { \\pi } { 3 }",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Tổng các nghiệm của phương trình trong khoảng  \\left ( { \\frac { -\\pi } { 4 };\\frac { 2\\pi } { 3 } } \\right )  bằng  \\frac { \\pi } { 6 }",
          "correct": true
        }
      ],
      "globalId": 211
    },
    {
      "id": 44,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho hai đồ thị hàm số  y=\\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )  và  y=sinx  , khi đó:",
      "explanation": "(a) Phương trình hoành độ giao điểm của hai đồ thị hàm số:  \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=sinx \nPhương trình hoành độ giao điểm của hai đồ thị hàm số:\n» Chọn ĐÚNG.\n(b) Hoành độ giao điểm của hai đồ thị là  x=\\frac { 3\\pi } { 8 }+k\\pi(k\\in \\mathbb{Z}) \n \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=sinx\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z})\\Leftrightarrow x=\\frac { 3\\pi } { 8 }+k\\pi(k\\in \\mathbb{Z}). \\right. \n» Chọn ĐÚNG.\n(c) Khi  x\\in \\left[ 0;2\\pi \\right]  thì hai đồ thị hàm số cắt nhau tại ba điểm\nVì  x\\in \\left[ 0;2\\pi \\right]\\Rightarrow x\\in \\left \\{ \\begin{array}{l} \\frac { 3\\pi } { 8 };\\frac { 11\\pi } { 8 } \\end{array} \\right \\}  .\n» Chọn SAI.\n(d) Khi  x\\in \\left[ 0;2\\pi \\right]  thì toạ độ giao điểm của hai đồ thị hàm số là:  \\left ( { \\frac { 5\\pi } { 8 };\\sin\\frac { 5\\pi } { 8 } } \\right ),\\left ( { \\frac { 7\\pi } { 8 };\\sin\\frac { 7\\pi } { 8 } } \\right )  .\nVới  x=\\frac { 3\\pi } { 8 }\\Rightarrow y=\\sin\\frac { 3\\pi } { 8 }\\approx 0,92  với  x=\\frac { 11\\pi } { 8 }\\Rightarrow y=\\sin\\frac { 11\\pi } { 8 }\\approx -0,92  .\nVậy toạ độ giao điểm của hai đồ thị hàm số là:  \\left ( { \\frac { 3\\pi } { 8 };\\sin\\frac { 3\\pi } { 8 } } \\right ),\\left ( { \\frac { 11\\pi } { 8 };\\sin\\frac { 11\\pi } { 8 } } \\right )  .\n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Phương trình hoành độ giao điểm của hai đồ thị hàm số:  \\sin\\left ( { x+\\frac { \\pi } { 4 } } \\right )=sinx",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Hoành độ giao điểm của hai đồ thị là  x=\\frac { 3\\pi } { 8 }+k\\pi(k\\in \\mathbb{Z})",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Khi  x\\in \\left[ 0;2\\pi \\right]  thì hai đồ thị hàm số cắt nhau tại ba điểm",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Khi  x\\in \\left[ 0;2\\pi \\right]  thì toạ độ giao điểm của hai đồ thị hàm số là:  \\left ( { \\frac { 5\\pi } { 8 };\\sin\\frac { 5\\pi } { 8 } } \\right ),\\left ( { \\frac { 7\\pi } { 8 };\\sin\\frac { 7\\pi } { 8 } } \\right )  .",
          "correct": false
        }
      ],
      "globalId": 212
    },
    {
      "id": 45,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình lượng giác  2sin\\left ( { x-\\frac { \\pi } { 12 } } \\right )+\\sqrt[] { 3 }=0  .",
      "explanation": "(a) Phương trình tương đương  \\sin\\left ( { x-\\frac { \\pi } { 12 } } \\right )=\\sin\\left ( { \\frac { \\pi } { 3 } } \\right )  .\nTa có  2sin\\left ( { x-\\frac { \\pi } { 12 } } \\right )+\\sqrt[] { 3 }=0\\Leftrightarrow \\sin\\left ( { x-\\frac { \\pi } { 12 } } \\right )=-\\frac { \\sqrt[] { 3 } } { 2 }\\Leftrightarrow \\sin\\left ( { x-\\frac { \\pi } { 12 } } \\right )=\\sin\\left ( { -\\frac { \\pi } { 3 } } \\right ) \n \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z})\\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} (k\\in \\mathbb{Z}) \\right. \\right. \n» Chọn SAI.\n(b) Phương trình có nghiệm là:  x=\\frac { \\pi } { 4 }+k2\\pi;x=\\frac { 7\\pi } { 12 }+k2\\pi\\,\\,(k\\in \\mathbb{Z})  .\nVậy phương trình có nghiệm là:  x=-\\frac { \\pi } { 4 }+k2\\pi;x=\\frac { 17\\pi } { 12 }+k2\\pi(k\\in \\mathbb{Z})  .\n» Chọn SAI.\n(c) Phương trình có nghiệm âm lớn nhất bằng  -\\frac { \\pi } { 4 }  .\n+ Với  x=-\\frac { \\pi } { 4 }+k2\\pi  có nghiệm âm lớn nhất là  x=-\\frac { \\pi } { 4 } \n+ Với  x=\\frac { 17\\pi } { 12 }+k2\\pi  có nghiệm âm lớn nhất là  x=-\\frac { 7\\pi } { 12 } \nVậy phương trình có nghiệm âm lớn nhất bằng  -\\frac { \\pi } { 4 }  .\n» Chọn ĐÚNG.\n(d) Số nghiệm của phương trình trong khoảng  \\left ( { -\\pi;\\pi } \\right )  là hai nghiệm.\n+ Với  x=-\\frac { \\pi } { 4 }+k2\\pi  có  -\\pi < -\\frac { \\pi } { 4 }+k2\\pi < \\pi\\Leftrightarrow -\\frac { 3 } { 8 } < k < \\frac { 5 } { 8 }\\Rightarrow k=0\\Rightarrow x=-\\frac { \\pi } { 4 }  .\n+ Với  x=\\frac { 17\\pi } { 12 }+k2\\pi  có  -\\pi < \\frac { 17\\pi } { 12 }+k2\\pi < \\pi\\Leftrightarrow -\\frac { 29 } { 24 } < k < -\\frac { 5 } { 24 }\\Rightarrow k=-1\\Rightarrow x=-\\frac { 7\\pi } { 12 }  .\nSố nghiệm của phương trình trong khoảng  \\left ( { -\\pi;\\pi } \\right )  là hai nghiệm.\n» Chọn ĐÚNG.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Phương trình tương đương  \\sin\\left ( { x-\\frac { \\pi } { 12 } } \\right )=\\sin\\left ( { \\frac { \\pi } { 3 } } \\right )  .",
          "correct": false
        },
        {
          "subId": "b",
          "text": "Phương trình có nghiệm là:  x=\\frac { \\pi } { 4 }+k2\\pi;x=\\frac { 7\\pi } { 12 }+k2\\pi\\,\\,(k\\in \\mathbb{Z})  .",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Phương trình có nghiệm âm lớn nhất bằng  -\\frac { \\pi } { 4 }  .",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Số nghiệm của phương trình trong khoảng  \\left ( { -\\pi;\\pi } \\right )  là hai nghiệm.",
          "correct": true
        }
      ],
      "globalId": 213
    },
    {
      "id": 46,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Cho phương trình  \\left ( { 2cos\\,x-1 } \\right )\\left ( { \\sin\\,2x-m } \\right )=0 \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array}  .",
      "explanation": "Ta có  \\left ( { 2cos\\,x-1 } \\right )\\left ( { \\sin\\,2x-m } \\right )=0  \\Leftrightarrow \\left[ \\cos\\,x=\\frac { 1 } { 2 } \\\\ \\sin\\,2x=m \\right. \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\Leftrightarrow \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=-\\frac { \\pi } { 3 }+k2\\pi \\\\ \\sin\\,2x=m \\right. \n(a)  x=\\frac { 7\\pi } { 3 }  là một nghiệm của phương trình  \\left ( { 1 } \\right )  .\nThay  x=\\frac { 7\\pi } { 3 }  phương trình  \\left ( { 1 } \\right )  ta thấy thỏa mãn nên  x=\\frac { 7\\pi } { 3 }  là một nghiệm của phương trình  \\left ( { 1 } \\right )  .\n» Chọn ĐÚNG.\n(b) Khi  m=2  thì phương trình  \\left ( { 1 } \\right )\\Leftrightarrow \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=-\\frac { \\pi } { 3 }+k2\\pi \\\\ x=\\frac { \\pi } { 2 }+l2\\pi \\right. \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \nKhi  m=2  thì phương trình  \\left ( { 1 } \\right )\\Leftrightarrow \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=-\\frac { \\pi } { 3 }+k2\\pi \\right. \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \n» Chọn SAI.\n(c) Khi  m=1  thì tập nghiệm của phương trình  \\left ( { 1 } \\right )  có tất cả 4 điểm biểu diễn trên đường tròn lượng giác.\nKhi  m=1  phương trình  \\left ( { 1 } \\right )\\Leftrightarrow \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=-\\frac { \\pi } { 3 }+k2\\pi \\\\ \\sin\\,2x=1 \\right.\\Leftrightarrow \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=-\\frac { \\pi } { 3 }+k2\\pi \\\\ x=\\frac { \\pi } { 4 }+l\\pi \\right.  .\nDo đó tập nghiệm của phương trình  \\left ( { 1 } \\right )  có tất cả 4 điểm biểu diễn trên đường tròn lượng giác.\n» Chọn ĐÚNG.\n(d) Chỉ tìm được một giá trị của  m  để phương trình  \\left ( { 1 } \\right )  có đúng hai nghiệm thuộc  \\left ( { -\\frac { \\pi } { 4 };\\frac { 3\\pi } { 4 } } \\right ]  .\nDo phương trình  \\left ( { 2 } \\right )  có một nghiệm  x=\\frac { \\pi } { 3 }  thuộc  \\left ( { -\\frac { \\pi } { 4 };\\frac { 3\\pi } { 4 } } \\right ]  .\nDo đó để phương trình  \\left ( { 1 } \\right )  có đúng hai nghiệm thuộc  \\left ( { -\\frac { \\pi } { 4 };\\frac { 3\\pi } { 4 } } \\right ]  thì phương trình  \\sin\\,2x=m  có 1 nghiệm thuộc  \\left ( { -\\frac { \\pi } { 4 };\\frac { 3\\pi } { 4 } } \\right ]  khác  \\frac { \\pi } { 3 }  (*)\nTa có  x\\in \\left ( { -\\frac { \\pi } { 4 };\\frac { 3\\pi } { 4 } } \\right ]\\Rightarrow 2x\\in \\left ( { -\\frac { \\pi } { 2 };\\frac { 3\\pi } { 2 } } \\right ]  hay  2x\\in \\left[ 0;2\\pi \\right] \nTừ (*) suy ra  m=1  hoặc  m=-1 \n» Chọn SAI.",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "x=\\frac { 7\\pi } { 3 }  là một nghiệm của phương trình  \\left ( { 1 } \\right )  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Khi  m=2  thì phương trình  \\left ( { 1 } \\right )\\Leftrightarrow \\left[ x=\\frac { \\pi } { 3 }+k2\\pi \\\\ x=-\\frac { \\pi } { 3 }+k2\\pi \\\\ x=\\frac { \\pi } { 2 }+l2\\pi \\right. \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array}",
          "correct": false
        },
        {
          "subId": "c",
          "text": "Khi  m=1  thì tập nghiệm của phương trình  \\left ( { 1 } \\right )  có tất cả 4 điểm biểu diễn trên đường tròn lượng giác.",
          "correct": true
        },
        {
          "subId": "d",
          "text": "Chỉ tìm được một giá trị của  m  để phương trình  \\left ( { 1 } \\right )  có đúng hai nghiệm thuộc  \\left ( { -\\frac { \\pi } { 4 };\\frac { 3\\pi } { 4 } } \\right ]  .",
          "correct": false
        }
      ],
      "globalId": 214
    },
    {
      "id": 47,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "B",
      "type": "true_false",
      "prompt": "Hằng ngày, mực nước của con kênh lên xuống theo thủy triều. Độ sâu  h\\left ( { m } \\right )  của mực nước trong kênh tại thời điểm  t\\left ( { h } \\right )  (  0\\le t\\le 24  ) được cho bởi công thức  h=3cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 3 } } \\right )+12  .",
      "explanation": "(a) Độ sâu của mực nước trong kênh nhỏ nhất bằng  9m  .\nĐộ sâu của mực nước trong kênh nhỏ nhất khi  \\cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 3 } } \\right )=-1\\Leftrightarrow \\frac { \\pit } { 6 }+\\frac { \\pi } { 3 }=\\left ( { 2k+1 } \\right )\\pi \nThử ta thấy tồn tại  t=4,...  thỏa mãn. Khi đó độ sâu là 9m.\n» Chọn ĐÚNG.\n(b) Độ sâu của mực nước trong kênh lớn nhất bằng  15m  .\nĐộ sâu của mực nước trong kênh nhỏ nhất khi\n \\cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 3 } } \\right )=1\\Leftrightarrow \\frac { \\pit } { 6 }+\\frac { \\pi } { 3 }=k2\\pi\\Leftrightarrow \\left[ t=10 \\\\ t=22 \\right. \nKhi đó độ sâu là 15m.\n» Chọn ĐÚNG.\n(c) Trong 1 ngày có đúng 3 thời điểm mà độ sâu của mực nước trong kênh đạt giá trị lớn nhất.\nĐộ sâu của mực nước trong kênh nhỏ nhất khi\n \\cos\\left ( { \\frac { \\pit } { 6 }+\\frac { \\pi } { 3 } } \\right )=1\\Leftrightarrow \\frac { \\pit } { 6 }+\\frac { \\pi } { 3 }=k2\\pi\\Leftrightarrow \\left[ t=10 \\\\ t=22 \\right. \nVậy có hai thời điểm thỏa mãn độ sâu lớn nhất.\n» Chọn SAI.\n(d) Độ sâu của mực nước trong kênh tại thời điểm  12\\left ( { h } \\right )  bằng  13m. \nThay  t=12\\left ( { h } \\right )\\Rightarrow h=13,5m  .\n» Chọn SAI.\nC.Câu hỏi – Trả lời ngắn",
      "diagram": null,
      "items": [
        {
          "subId": "a",
          "text": "Độ sâu của mực nước trong kênh nhỏ nhất bằng  9m  .",
          "correct": true
        },
        {
          "subId": "b",
          "text": "Độ sâu của mực nước trong kênh lớn nhất bằng  15m  .",
          "correct": true
        },
        {
          "subId": "c",
          "text": "Trong 1 ngày có đúng 3 thời điểm mà độ sâu của mực nước trong kênh đạt giá trị lớn nhất.",
          "correct": false
        },
        {
          "subId": "d",
          "text": "Độ sâu của mực nước trong kênh tại thời điểm  12\\left ( { h } \\right )  bằng  13m.",
          "correct": false
        }
      ],
      "globalId": 215
    },
    {
      "id": 48,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Họ nghiệm phương trình lượng giác:  \\cos\\left ( { x+30 ^ { ^\\circ } } \\right )+1=0  có dạng  x=a ^ { ^\\circ } +k⋅b ^ { ^\\circ } \\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  , với  a;b  là các số nguyên. Tính giá trị  S=b-a",
      "explanation": "Ta có:  \\cos\\left ( { x+30 ^ { ^\\circ } } \\right )+1=0\\Leftrightarrow \\cos\\left ( { x+30 ^ { ^\\circ } } \\right )=-1 \n \\Leftrightarrow x+30 ^ { ^\\circ } =180 ^ { ^\\circ } +k360 ^ { ^\\circ } (k\\in \\mathbb{Z})\\Leftrightarrow x=150 ^ { ^\\circ } +k360 ^ { ^\\circ } (k\\in \\mathbb{Z}). \nVậy phương trình có nghiệm là:  x=150 ^ { ^\\circ } +k360 ^ { ^\\circ } \\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow \\left \\{ \\begin{array}{l} a=150 \\\\ b=360 \\end{array} \\right.\\Rightarrow S=210  .",
      "diagram": null,
      "correctAnswer": "210",
      "globalId": 216
    },
    {
      "id": 49,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Phương trình lượng giác:  \\tan\\left ( { 2x-\\frac { \\pi } { 6 } } \\right )=\\frac { \\sqrt[] { 3 } } { 3 }  có họ nghiệm dạng  x=\\frac { \\pi } { a }+k\\frac { \\pi } { b }\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  , với  a;b  là các số nguyên. Tính giá trị  T=a\\left ( { a+b } \\right )",
      "explanation": "Ta có:  \\tan\\left ( { 2x-\\frac { \\pi } { 6 } } \\right )=\\frac { \\sqrt[] { 3 } } { 3 }\\Leftrightarrow \\tan\\left ( { 2x-\\frac { \\pi } { 6 } } \\right )=\\tan\\frac { \\pi } { 6 } \n \\Leftrightarrow 2x-\\frac { \\pi } { 6 }=\\frac { \\pi } { 6 }+k\\pi\\Leftrightarrow x=\\frac { \\pi } { 6 }+k\\frac { \\pi } { 2 }\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow \\left \\{ \\begin{array}{l} a=6 \\\\ b=2 \\end{array} \\right.\\Rightarrow T=6\\left ( { 6+2 } \\right )=48",
      "diagram": null,
      "correctAnswer": "48",
      "globalId": 217
    },
    {
      "id": 50,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Họ nghiệm phương trình lượng giác:  \\sqrt[] { 3 }\\tan\\frac { \\pix } { 2 }=3  có dạng  x=a ^ { ^\\circ } +k⋅b ^ { ^\\circ } \\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )  , với  m;n  là các số nguyên và  \\frac { m } { n }  là phân số tối giản. Tính giá trị  P=m ^ { n }",
      "explanation": "Ta có:  \\sqrt[] { 3 }\\tan\\frac { \\pix } { 2 }=3\\Leftrightarrow \\tan\\frac { \\pix } { 2 }=\\sqrt[] { 3 }\\Leftrightarrow \\tan\\frac { \\pix } { 2 }=\\tan\\frac { \\pi } { 3 } \n \\Leftrightarrow \\frac { \\pix } { 2 }=\\frac { \\pi } { 3 }+k\\pi\\Leftrightarrow x=\\frac { 2 } { 3 }+2k\\,\\,\\left ( { k\\in \\mathbb{Z} } \\right )\\Rightarrow \\left \\{ \\begin{array}{l} m=2 \\\\ n=3 \\end{array} \\right.\\Rightarrow P=2 ^ { 3 } =8",
      "diagram": null,
      "correctAnswer": "8",
      "globalId": 218
    },
    {
      "id": 51,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Phương trình  2sin\\left ( { x-\\frac { \\pi } { 6 } } \\right )+2=0  có bao nhiêu nghiệm trên khoảng  \\left ( { 0;2\\pi } \\right )",
      "explanation": "Ta có:  2sin\\left ( { x-\\frac { \\pi } { 6 } } \\right )+2=0  \\Leftrightarrow \\sin\\left ( { x-\\frac { \\pi } { 6 } } \\right )=-1  \\Leftrightarrow x=-\\frac { \\pi } { 3 }+k2\\pi,\\,\\,k\\in \\mathbb{Z} \nDo  x\\in \\left ( { 0;2\\pi } \\right )  nên  0 < -\\frac { \\pi } { 3 }+k2\\pi < 2\\pi  \\Leftrightarrow \\frac { 1 } { 6 } < k < \\frac { 7 } { 6 }  \\Leftrightarrow k=1  .\nVậy phương trình có một nghiệm  x=\\frac { 5\\pi } { 3 }  .",
      "diagram": null,
      "correctAnswer": "1",
      "globalId": 219
    },
    {
      "id": 52,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho phương trình  \\cos\\left ( { 2x+\\frac { \\pi } { 3 } } \\right )=\\cos\\left ( { \\frac { \\pi } { 2 }-\\frac { x } { 2 } } \\right )  . Tìm số nghiệm thuộc khoảng  \\left ( { \\frac { \\pi } { 3 }\\,;\\,\\frac { 8\\pi } { 3 } } \\right )  của phương trình.",
      "explanation": "\\cos\\left ( { 2x+\\frac { \\pi } { 3 } } \\right )=\\cos\\left ( { \\frac { \\pi } { 2 }-\\frac { x } { 2 } } \\right )  \\Leftrightarrow \\left[ 2x+\\frac { \\pi } { 3 }=\\frac { \\pi } { 2 }-\\frac { x } { 2 }+k2\\pi \\\\ 2x+\\frac { \\pi } { 3 }=-\\left ( { \\frac { \\pi } { 2 }-\\frac { x } { 2 } } \\right )+k2\\pi \\right.,\\,k\\in \\mathbb{Z}\\Leftrightarrow \\left[ x=\\frac { \\pi } { 15 }+k\\frac { 4\\pi } { 5 } \\\\ x=-\\frac { 5\\pi } { 9 }+k\\frac { 4\\pi } { 3 } \\right.,{ }k\\in \\mathbb{Z}  .\n+ Với  x=\\frac { \\pi } { 15 }+k\\frac { 4\\pi } { 5 }  , ta có:  \\frac { \\pi } { 3 } < \\frac { \\pi } { 15 }+k\\frac { 4\\pi } { 5 } < \\frac { 8\\pi } { 3 }\\Leftrightarrow \\frac { 1 } { 3 } < k < \\frac { 13 } { 4 },{ }k\\in \\mathbb{Z}\\Leftrightarrow k\\in \\left \\{ \\begin{array}{l} 1;{ }2;{ }3 \\end{array} \\right \\}  .\nTrường hợp này có 3 nghiệm thỏa mãn là:  x=\\frac { 13\\pi } { 15 }  ,   x=\\frac { 5\\pi } { 3 }  ,  x=\\frac { 37\\pi } { 15 }  .\n+ Với  x=-\\frac { 5\\pi } { 9 }+k\\frac { 4\\pi } { 3 }  , tương tự ta có 2 nghiệm thỏa mãn là:  x=\\frac { 7\\pi } { 9 }  ,  { }x=\\frac { 19\\pi } { 9 }  .\nVậy phương trình đã cho có 5 nghiệm phân biệt thỏa mãn đề bài.",
      "diagram": null,
      "correctAnswer": "5",
      "globalId": 220
    },
    {
      "id": 53,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Cho phương trình  cosx=sin3x  . Tính tổng các nghiệm thuộc khoảng  \\left ( { 0\\,;\\,{ 2 }\\pi } \\right )  của phương trình (làm tròn đến hàng phần chục).",
      "explanation": "cosx=sin3x\\Leftrightarrow cosx=\\cos\\left ( { \\frac { \\pi } { 2 }-3x } \\right )\\Leftrightarrow \\left[ x=\\frac { \\pi } { 2 }-3x+k2\\pi \\\\ x=-\\frac { \\pi } { 2 }+3x+k2\\pi \\right.\\Leftrightarrow \\left[ x=\\frac { \\pi } { 8 }+k\\frac { \\pi } { 2 } \\\\ x=\\frac { \\pi } { 4 }+k\\pi \\right.  ,  \\left ( { k\\in \\mathbb{Z} } \\right )  .\n+ Với  x=\\frac { \\pi } { 8 }+k\\frac { \\pi } { 2 }  , ta có:  0 < \\frac { \\pi } { 8 }+k\\frac { \\pi } { 2 } < 2\\pi\\Leftrightarrow -\\frac { 1 } { 4 } < k < \\frac { 15 } { 4 }  , vì  k\\in \\mathbb{Z}  nên  k\\in \\left \\{ \\begin{array}{l} 0;{ }1;{ }2;{ }3 \\end{array} \\right \\}  .\nKhi đó, các nghiệm thỏa mãn là:  x=\\frac { \\pi } { 8 }  ,  { }x=\\frac { 5\\pi } { 8 }  ,  { }x=\\frac { 9\\pi } { 8 }  ,  x=\\frac { 13\\pi } { 8 }  .\n+ Với  x=\\frac { \\pi } { 4 }+k\\pi  , tương tự ta có các nghiệm thỏa mãn là:  x=\\frac { \\pi } { 4 }  ,  x=\\frac { 5\\pi } { 4 }  .\nVậy tổng các nghiệm thuộc khoảng  \\left ( { 0\\,;\\,{ 2 }\\pi } \\right )  của phương trình đã cho là:\n \\frac { \\pi } { 8 }+\\frac { 5\\pi } { 8 }+\\frac { 9\\pi } { 8 }+\\frac { 13\\pi } { 8 }+\\frac { \\pi } { 4 }+\\frac { 5\\pi } { 4 }=5\\pi\\approx 15,7  .",
      "diagram": null,
      "correctAnswer": "15,7",
      "globalId": 221
    },
    {
      "id": 54,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  m  để phương trình  cosx=m  có nghiệm?",
      "explanation": "cosx=m  có nghiệm  \\Leftrightarrow -1\\le m\\le 1  . Mà  m\\in \\mathbb{Z}\\Rightarrow m\\in \\left \\{ \\begin{array}{l} -1;0;1 \\end{array} \\right \\}",
      "diagram": null,
      "correctAnswer": "3",
      "globalId": 222
    },
    {
      "id": 55,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  m  để phương trình  sinx-m=1  có nghiệm.",
      "explanation": "Ta có:  sinx-m=1\\Leftrightarrow sinx=m+1  .\nĐiều kiện để phương trình có nghiệm là:  -1\\le m+1\\le 1\\Leftrightarrow -2\\le m\\le 0  .\nVậy  -2\\le m\\le 0  thoả mãn đề bài. Có 3 giá trị nguyên của tham số m",
      "diagram": null,
      "correctAnswer": "3",
      "globalId": 223
    },
    {
      "id": 56,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  m  để phương trình  3sin ^ { 2 } x+sin2x-mcos ^ { 2 } x=0  có nghiệm.",
      "explanation": "3sin ^ { 2 } x+sin2x-mcos ^ { 2 } x=0\\Leftrightarrow (m-1)cosx=3m+2  .\nTrường hợp 1:  m=1,cosx=2  (loại).\nTrường hợp 2:  m\\ne 1,cosx=\\frac { 3m+2 } { m-1 }  .\n \\left | { \\frac { 3m+2 } { m-1 } } \\right |\\le 1\\Leftrightarrow (3m-2) ^ { 2 } -(m-1) ^ { 2 } \\le 0\\Leftrightarrow \\frac { -3 } { 2 }\\le m\\le \\frac { -1 } { 4 }{ . }{ }  Có 1 giá trị nguyên.",
      "diagram": null,
      "correctAnswer": "1",
      "globalId": 224
    },
    {
      "id": 57,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Có bao nhiêu giá trị nguyên của tham số  m  trong đoạn  \\left[ -10;10 \\right]  mtanx+2=m  có nghiệm.",
      "explanation": "mtanx+2=m\\Leftrightarrow tanx=\\frac { m-2 } { m } \nĐiều kiện có nghiệm:  m\\ne 0  .\nKhi đó trong đoạn  \\left[ -10;10 \\right]  có 20 giá trị nguyên của tham số m",
      "diagram": null,
      "correctAnswer": "20",
      "globalId": 225
    },
    {
      "id": 58,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Một vệ tinh bay quanh Trái Đất theo một quỹ đạo hình Elip (như hình vẽ): Độ cao  h  (tính bằng kilômet) của vệ tinh so với bề mặt Trái Đất được xác định bởi công thức  h=550+450⋅\\cos\\frac { \\pi } { 50 }t  . Trong đó  t  là thời gian tính bằng phút kể từ lúc vệ tinh bay vào quỹ đạo. Người ta cần thực hiện một thí nghiệm khoa học khi vệ tinh cách mặt đất  250 km  . Trong khoảng 60 phút đầu tiên kể từ lúc vệ tinh bay vào quỹ đạo, hãy tìm thời điểm  t  để có thể thực hiện thí nghiệm đó? (kết quả làm tròn đến chữ số thập phân thứ 1)",
      "explanation": "Ta có phương trình:  550+450⋅\\cos\\frac { \\pi } { 50 }t=250\\Leftrightarrow \\cos\\frac { \\pi } { 50 }t=-\\frac { 2 } { 3 } \n \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} ,k\\in \\mathbb{Z}. \\right. \\right. \nVậy trong khoảng 60 phút đầu tiên kể từ lúc vệ tinh bay vào quỹ đạo, tại thời điểm  t\\approx 36,6  (phút) thì ta có thể thực hiện thí nghiệm đó.",
      "diagram": "assets/diagrams/b5_q58.png",
      "correctAnswer": "36,6",
      "globalId": 226
    },
    {
      "id": 59,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Mùa xuân ở Hội Lim (tỉnh Bắc Ninh) thường có trò chơi đu. Khi người chơi đu nhún đều, cây đu sẽ đưa người chơi đu dao động qua lại vị trí cân bằng. Nghiên cứu trò chơi này, người ta thấy khoảng cách  h  (mét) được tính từ vị trí chân người chơi đu đến vị trí cân bằng được biểu diễn bởi hệ thức  h=\\left | { d } \\right |  với  d=3cos\\left[ \\frac { \\pi } { 3 }\\left ( { 2t-1 } \\right ) \\right]  (  t\\ge 0  và được tính bằng giây), trong đó ta quy ước  d>0  khi vị trí cân bằng ở về phía sau lưng người chơi đu và  d < 0  trong trường hợp ngược lại. Hỏi trong 3 giây đầu tiên, có tất cả bao nhiêu lần người chơi đu ở cách vị trí cân bằng 1 mét?",
      "explanation": "Người chơi cách vị trí cân bằng 1 mét khi  3cos\\left[ \\frac { \\pi } { 3 }\\left ( { 2t-1 } \\right ) \\right]=\\pm 1 \n \\Leftrightarrow \\sin ^ { 2 } \\left[ \\frac { \\pi } { 3 }\\left ( { 2t-1 } \\right ) \\right]=\\frac { 8 } { 9 }  \\Leftrightarrow 1-\\cos\\left[ \\frac { 2\\pi } { 3 }\\left ( { 2t-1 } \\right ) \\right]=\\frac { 16 } { 9 }\\Leftrightarrow \\cos\\left[ \\frac { 2\\pi } { 3 }\\left ( { 2t-1 } \\right ) \\right]=-\\frac { 7 } { 9 } \n \\Leftrightarrow \\left[ \\frac { 2\\pi } { 3 }\\left ( { 2t-1 } \\right )=\\alpha+k2\\pi \\\\ \\frac { 2\\pi } { 3 }\\left ( { 2t-1 } \\right )=-\\alpha+k2\\pi \\right.\\,\\left ( { { v }{ í }{ i }{ }k\\in \\mathbb{Z}{ }{ v }{ µ }{ }{ c }{ o }{ s }\\alpha=-\\frac { 7 } { 9 } } \\right )\\Leftrightarrow \\left[ t=\\frac { 3\\alpha } { 4\\pi }+\\frac { 1 } { 2 }+\\frac { 3k } { 2 } \\\\ t=-\\frac { 3\\alpha } { 4\\pi }+\\frac { 1 } { 2 }+\\frac { 3k } { 2 } \\right.  .\nTrong 3 giây đầu tiên ứng với  0\\le t\\le 3  :\n+) Với  t=\\frac { 3\\alpha } { 4\\pi }+\\frac { 1 } { 2 }+\\frac { 3k } { 2 }  thì  0\\le \\frac { 3\\alpha } { 4\\pi }+\\frac { 1 } { 2 }+\\frac { 3k } { 2 }\\le 3\\Rightarrow -0,73\\le k\\le 1,27\\Rightarrow k\\in \\left \\{ \\begin{array}{l} 0\\,;\\,1 \\end{array} \\right \\}  .\n+) Với  t=-\\frac { 3\\alpha } { 4\\pi }+\\frac { 1 } { 2 }+\\frac { 3k } { 2 }  thì  0\\le -\\frac { 3\\alpha } { 4\\pi }+\\frac { 1 } { 2 }+\\frac { 3k } { 2 }\\le 3\\Rightarrow 0,06\\le k\\le 2,06\\Rightarrow k\\in \\left \\{ \\begin{array}{l} 1\\,;\\,2 \\end{array} \\right \\}  .\nVậy trong 3 giây đầu tiên, có 4 lần người chơi ở cách vị trí cân bằng 1 mét.",
      "diagram": null,
      "correctAnswer": "4",
      "globalId": 227
    },
    {
      "id": 60,
      "lesson": "b5",
      "lessonTitle": "Bài 5. Phương trình lượng giác",
      "section": "C",
      "type": "short_answer",
      "prompt": "Trong môn cầu lông, khi phát cầu, người chơi cần đánh cầu qua khỏi lưới sang phía sân đối phương và không được để cho cầu rơi ngoài biên. Trong mặt phẳng toạ độ  Oxy  , chọn điểm có tọa độ  \\left ( { O;y_{ 0 } } \\right )  là điểm xuất phát thì phương trình quỹ đạo của cầu lông khi rời khỏi mặt vợt là:  y=\\frac { -g⋅x ^ { 2 } } { 2⋅v_{ 0 } ^{ 2 }⋅\\cos ^ { 2 } \\alpha }+x⋅\\tan\\left ( { \\alpha } \\right )+y_{ 0 }  Trong đó: » g là gia tốc trọng trường (thường được chọn là  9,8 m/s ^ { 2 }  ); »  \\alpha  là góc phát cầu (so với phương ngang của mặt đất); »  v_{ 0 }  là vận tốc ban đầu của cầu; »  y_{ 0 }  là khoảng cách từ vị trí phát cầu đến mặt đất. Đây là một hàm số bậc hai nên quỹ đạo chuyển động của cầu lông là một parabol. Một người chơi cầu lông đang đứng khoảng cách từ vị trí người này đến vị trí cầu rơi chạm đất (tầm bay xa) là  6,68 m  . Quan sát hình bên dưới, hỏi người chơi đã phát cầu góc khoảng bao nhiêu độ so với mặt đất? Biết cầu rời mặt vợt ở độ cao  0,7 m  so với mặt đất; vận tốc xuất phát của cầu là  8 m/s  ; người chơi không phát cầu quá  50 ^ { 0 }  và bỏ qua sức cản của gió và xem quỹ đạo của cầu luôn nằm trong mặt phẳng phẳng đứng).",
      "explanation": "Với  g=9,8 m/s ^ { 2 }  , vận tốc ban đầu  v_{ 0 } =8 m/s  , phương trình quỹ đạo của cầu:\n y=\\frac { -g⋅x ^ { 2 } } { 2⋅v_{ 0 } ^{ 2 }⋅\\cos ^ { 2 } \\alpha }+\\tan(\\alpha)⋅x+y_{ 0 } \nKhoảng cách từ vị trí người này đến vị trí cầu rơi chạm đất (tầm bay xa) là  6,68 m  ; nghĩa là  x=6,68 m  .\nTa có  \\frac { -9,8⋅\\left ( { 6,68 } \\right ) ^ { 2 } } { 128⋅\\cos ^ { 2 } \\alpha }+\\tan\\left ( { \\alpha } \\right )⋅\\left ( { 6,68 } \\right )+0,7=0 \n \\Leftrightarrow \\frac { -9,8⋅\\left ( { 6,68 } \\right ) ^ { 2 } } { 128 }\\left ( { 1+\\tan ^ { 2 } \\alpha } \\right )+\\tan\\left ( { \\alpha } \\right )⋅\\left ( { 6,68 } \\right )+0,7=0 \n \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\Leftrightarrow \\left[ \\begin{array} {} \\begin{array} {} \\begin{array} {} \\end{array} \\right. \\right. \nVậy người chơi đã phát cầu một góc gần  54 ^ { 0 }  hoặc gần  30 ^ { ^\\circ }  so với mặt đất.\n-------------------- Hết --------------------",
      "diagram": null,
      "correctAnswer": "30",
      "globalId": 228
    }
  ]
};
