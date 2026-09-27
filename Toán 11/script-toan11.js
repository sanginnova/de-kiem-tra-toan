/**
 * HỆ THỐNG ÔN TẬP VÀ KIỂM TRA TRẮC NGHIỆM TOÁN 11 - TOÀN BỘ CHƯƠNG 1
 * Chương 1: Hàm Số và Phương Trình Lượng Giác (Trọn bộ 228 câu hỏi Bài 1 đến Bài 5)
 * Dữ liệu nguồn: chuong1_dataset_228_questions.json (trích xuất 100% từ DOCX/PDF bản gốc MathType)
 * Chuẩn GDPT 2018:
 * - Phần I: Câu hỏi trắc nghiệm nhiều phương án (4 lựa chọn A, B, C, D)
 * - Phần II: Câu hỏi trắc nghiệm Đúng / Sai (4 ý a, b, c, d)
 * - Phần III: Câu hỏi trắc nghiệm Trả lời ngắn
 * Tác giả: ThS. Nguyễn Văn Sang - Khoa Cơ bản - Trường Cao đẳng Nghề số 1 - BQP.
 */

// ==========================================
// 1. STATE & GLOBAL VARIABLES
// ==========================================
let currentLessonKey = "exam"; // 'exam', 'b1', 'b2', 'b3', 'b4', 'b5', 'all'
let currentSectionFilter = "ALL"; // 'ALL', 'A', 'B', 'C'
let currentMode = "exam"; // 'exam' (kiểm tra tính giờ) | 'practice' (tự luyện)

let currentQuestions = [];
let currentIndex = 0;
let userAnswers = {}; // { [q.id]: answerVal }
let flaggedQuestions = new Set();
let timerInterval = null;
let timeRemaining = 15 * 60; // seconds
let totalTime = 15 * 60;
let isSubmitted = false;

// ==========================================
// 2. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initFontZoom();
  initLessonSelector();
  initSectionFilter();
  initModeSwitch();
  initCardControls();
  initModalListeners();
  
  // Load initial bank ('exam' or URL hash / query)
  const urlSearch = (typeof window !== 'undefined' && window.location) ? window.location.search : "";
  const urlParams = new URLSearchParams(urlSearch);
  const paramLesson = urlParams.get("lesson") || "exam";
  const paramMode = urlParams.get("mode") || "exam";
  
  if (paramMode === "practice") {
    setMode("practice");
  } else {
    setMode("exam");
  }
  
  loadLesson(paramLesson);
});

// ==========================================
// 3. THEME & FONT RESIZING
// ==========================================
function initTheme() {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  const savedTheme = localStorage.getItem("toan11_quiz_theme") || "light";
  
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("toan11_quiz_theme", next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    themeIcon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon");
    if (window.lucide) lucide.createIcons();
  }
}

function initFontZoom() {
  const decBtn = document.getElementById("fontDecreaseBtn");
  const resetBtn = document.getElementById("fontResetBtn");
  const incBtn = document.getElementById("fontIncreaseBtn");
  const appRoot = document.documentElement;

  if (decBtn) {
    decBtn.addEventListener("click", () => {
      appRoot.setAttribute("data-font-size", "small");
      updateFontActiveBtn(decBtn);
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      appRoot.removeAttribute("data-font-size");
      updateFontActiveBtn(resetBtn);
    });
  }
  if (incBtn) {
    incBtn.addEventListener("click", () => {
      appRoot.setAttribute("data-font-size", "large");
      updateFontActiveBtn(incBtn);
    });
  }
}

function updateFontActiveBtn(activeBtn) {
  document.querySelectorAll(".font-zoom-btn").forEach(b => b.classList.remove("active"));
  if (activeBtn) activeBtn.classList.add("active");
}

// ==========================================
// 4. LESSON SELECTION & SECTION FILTERING
// ==========================================
function initLessonSelector() {
  const pills = document.querySelectorAll(".lesson-pill-btn");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      const lessonKey = pill.getAttribute("data-lesson");
      if (lessonKey && lessonKey !== currentLessonKey) {
        if (!isSubmitted && currentMode === "exam" && Object.keys(userAnswers).length > 0) {
          if (!confirm("Bạn đang làm bài kiểm tra. Chuyển sang bài học khác sẽ làm mới bài thi. Bạn có muốn tiếp tục?")) {
            return;
          }
        }
        loadLesson(lessonKey);
      }
    });
  });
}

function initSectionFilter() {
  const filterBtns = document.querySelectorAll(".section-pill-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const sec = btn.getAttribute("data-sec");
      if (sec) {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentSectionFilter = sec;
        applyFiltersAndRender(0);
      }
    });
  });
}

function initModeSwitch() {
  const examBtn = document.getElementById("modeExamBtn");
  const practiceBtn = document.getElementById("modePracticeBtn");

  if (examBtn) {
    examBtn.addEventListener("click", () => setMode("exam"));
  }
  if (practiceBtn) {
    practiceBtn.addEventListener("click", () => setMode("practice"));
  }
}

function setMode(mode) {
  currentMode = mode;
  const examBtn = document.getElementById("modeExamBtn");
  const practiceBtn = document.getElementById("modePracticeBtn");
  const timerBox = document.getElementById("timerContainer");

  if (examBtn && practiceBtn) {
    if (mode === "exam") {
      examBtn.classList.add("active");
      practiceBtn.classList.remove("active");
      if (timerBox) timerBox.style.display = "flex";
      startTimer();
    } else {
      practiceBtn.classList.add("active");
      examBtn.classList.remove("active");
      if (timerBox) timerBox.style.display = "none";
      clearInterval(timerInterval);
    }
  }
  renderCurrentQuestion();
}

function getFullData() {
  if (typeof window !== 'undefined' && window.CHUONG1_FULL_DATA) {
    return window.CHUONG1_FULL_DATA;
  }
  if (typeof CHUONG1_FULL_DATA !== 'undefined') {
    return CHUONG1_FULL_DATA;
  }
  return null;
}

function loadLesson(lessonKey) {
  const dataBank = getFullData();
  if (!dataBank || !dataBank[lessonKey]) {
    console.warn("Đang chờ nạp dữ liệu bài học:", lessonKey);
    setTimeout(() => {
      const retryBank = getFullData();
      if (retryBank && retryBank[lessonKey]) {
        loadLesson(lessonKey);
      } else {
        const promptEl = document.getElementById("questionPrompt");
        if (promptEl) {
          promptEl.innerHTML = "⚠️ Đang tải dữ liệu 228 câu hỏi... Vui lòng chờ vài giây hoặc nhấn <strong>Ctrl + F5</strong> để làm mới.";
        }
      }
    }, 200);
    return;
  }

  currentLessonKey = lessonKey;

  // Check if this lesson has already been submitted (Locked)
  const isAlreadySubmitted = sessionStorage.getItem("quiz_submitted_" + lessonKey) === "true";
  if (isAlreadySubmitted) {
    isSubmitted = true;
    userAnswers = {};
    flaggedQuestions.clear();

    const savedAns = sessionStorage.getItem("quiz_answers_" + lessonKey);
    if (savedAns) {
      try { userAnswers = JSON.parse(savedAns); } catch(e) {}
    }

    // Update Active Pill
    document.querySelectorAll(".lesson-pill-btn").forEach(p => {
      p.classList.toggle("active", p.getAttribute("data-lesson") === lessonKey);
    });

    // Update Header Title & Badge
    const lessonTitles = {
      exam: "Đề Kiểm Tra Tổng Ôn: Toàn Bộ 5 Bài Học Chương 1 (20 Câu)",
      b1: "Bài 1: Góc Lượng Giác & Đổi Đơn Vị (35 Câu)",
      b2: "Bài 2: Giá Trị Lượng Giác Của Một Góc Lượng Giác (54 Câu)",
      b3: "Bài 3: Công Thức Lượng Giác (29 Câu)",
      b4: "Bài 4: Hàm Số Lượng Giác (50 Câu)",
      b5: "Bài 5: Phương Trình Lượng Giác (60 Câu)",
      all: "Tổng Hợp Trọn Bộ Toàn Chương 1 (228 Câu Hỏi)"
    };
    const titleEl = document.querySelector(".quiz-title");
    if (titleEl) {
      titleEl.textContent = lessonTitles[lessonKey] || "Tự Luyện & Kiểm Tra Toán 11";
    }

    updateSectionCounts();
    applyFiltersAndRender(0);

    const savedRes = sessionStorage.getItem("quiz_results_" + lessonKey);
    if (savedRes) {
      try {
        const resData = JSON.parse(savedRes);
        displayQuizResults(resData);
        return;
      } catch(e) {}
    }
    return;
  }

  isSubmitted = false;
  userAnswers = {};
  flaggedQuestions.clear();

  // Reset Results Section & Quiz Body view
  const resSec = document.getElementById("resultsSection");
  if (resSec) resSec.style.display = "none";
  const qBody = document.getElementById("quizBody");
  if (qBody) qBody.style.display = "";
  const viewScoreBtn = document.getElementById("viewScoreBoardBtn");
  if (viewScoreBtn) viewScoreBtn.style.display = "none";

  const headerSubmitBtn = document.getElementById("headerSubmitBtn");
  if (headerSubmitBtn) {
    headerSubmitBtn.disabled = false;
    headerSubmitBtn.innerHTML = `<i data-lucide="send" class="btn-icon"></i><span>Nộp bài</span>`;
  }
  const submitQuizBtn = document.getElementById("submitQuizBtn");
  if (submitQuizBtn) {
    submitQuizBtn.disabled = false;
    submitQuizBtn.innerHTML = `<i data-lucide="check-circle-2" class="btn-icon"></i><span>NỘP BÀI THI</span>`;
  }
  if (window.lucide) lucide.createIcons();

  // Update Active Pill
  document.querySelectorAll(".lesson-pill-btn").forEach(p => {
    p.classList.toggle("active", p.getAttribute("data-lesson") === lessonKey);
  });

  // Update Header Title & Badge
  const lessonTitles = {
    exam: "Đề Kiểm Tra Tổng Ôn: Toàn Bộ 5 Bài Học Chương 1 (20 Câu)",
    b1: "Bài 1: Góc Lượng Giác & Đổi Đơn Vị (35 Câu)",
    b2: "Bài 2: Giá Trị Lượng Giác Của Một Góc Lượng Giác (54 Câu)",
    b3: "Bài 3: Công Thức Lượng Giác (29 Câu)",
    b4: "Bài 4: Hàm Số Lượng Giác (50 Câu)",
    b5: "Bài 5: Phương Trình Lượng Giác (60 Câu)",
    all: "Tổng Hợp Trọn Bộ Toàn Chương 1 (228 Câu Hỏi)"
  };

  const titleEl = document.querySelector(".quiz-title");
  if (titleEl) {
    titleEl.textContent = lessonTitles[lessonKey] || "Tự Luyện & Kiểm Tra Toán 11";
  }

  // Update Section Badges in Filter Bar
  updateSectionCounts();

  // Reset section filter to ALL
  currentSectionFilter = "ALL";
  document.querySelectorAll(".section-pill-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-sec") === "ALL");
  });

  // Set Timer based on lesson size
  const fullBank = (dataBank && dataBank[lessonKey]) ? dataBank[lessonKey] : [];
  const qCount = fullBank.length;
  if (lessonKey === "exam") {
    totalTime = 20 * 60; // 20 phút
  } else if (qCount <= 30) {
    totalTime = 25 * 60;
  } else if (qCount <= 45) {
    totalTime = 35 * 60;
  } else {
    totalTime = 45 * 60;
  }
  timeRemaining = totalTime;
  if (currentMode === "exam") {
    startTimer();
  }

  applyFiltersAndRender(0);
}

function updateSectionCounts() {
  const dataBank = getFullData();
  const rawList = (dataBank && dataBank[currentLessonKey]) ? dataBank[currentLessonKey] : [];
  const cAll = rawList.length;
  const cA = rawList.filter(q => q.section === "A").length;
  const cB = rawList.filter(q => q.section === "B").length;
  const cC = rawList.filter(q => q.section === "C").length;

  const bAll = document.getElementById("badgeSecAll");
  const bA = document.getElementById("badgeSecA");
  const bB = document.getElementById("badgeSecB");
  const bC = document.getElementById("badgeSecC");

  if (bAll) bAll.textContent = cAll;
  if (bA) bA.textContent = cA;
  if (bB) bB.textContent = cB;
  if (bC) bC.textContent = cC;
}

function applyFiltersAndRender(targetIndex = 0) {
  const dataBank = getFullData();
  const rawList = (dataBank && dataBank[currentLessonKey]) ? dataBank[currentLessonKey] : [];
  if (currentSectionFilter === "ALL") {
    currentQuestions = [...rawList];
  } else {
    currentQuestions = rawList.filter(q => q.section === currentSectionFilter);
  }

  // Update status indicators
  const totalEl = document.getElementById("totalQuestionCount");
  const totalTag = document.getElementById("totalQuestionTag");
  if (totalEl) totalEl.textContent = `${currentQuestions.length} câu hỏi`;
  if (totalTag) totalTag.textContent = currentQuestions.length;

  currentIndex = Math.max(0, Math.min(targetIndex, currentQuestions.length - 1));
  renderQuestionGrid();
  renderCurrentQuestion();
  updateProgressStats();
}

// ==========================================
// 5. TIMER ENGINE
// ==========================================
function startTimer() {
  clearInterval(timerInterval);
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      handleTimeOut();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerText = document.getElementById("timer");
  const timerRing = document.getElementById("timerRing");
  const timerContainer = document.getElementById("timerContainer");

  const m = Math.floor(timeRemaining / 60);
  const s = timeRemaining % 60;
  const str = `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;

  if (timerText) timerText.textContent = str;

  // Ring stroke
  if (timerRing && totalTime > 0) {
    const fraction = (timeRemaining / totalTime) * 100;
    timerRing.setAttribute("stroke-dasharray", `${fraction}, 100`);
  }

  // Critical warning pulse
  if (timerContainer) {
    if (timeRemaining <= 120 && timeRemaining > 0) {
      timerContainer.classList.add("warning");
    } else {
      timerContainer.classList.remove("warning");
    }
  }
}

function handleTimeOut() {
  alert("⏰ Đã hết thời gian làm bài kiểm tra! Hệ thống sẽ tự động nộp bài và chấm điểm.");
  submitQuiz(true);
}

// ==========================================
// 6. QUESTION RENDERING ENGINE (PARTS I, II, III)
// ==========================================
function renderCurrentQuestion() {
  if (currentQuestions.length === 0) {
    const promptEl = document.getElementById("questionPrompt");
    if (promptEl) promptEl.textContent = "Không có câu hỏi nào trong danh mục này.";
    return;
  }

  const q = currentQuestions[currentIndex];
  const qNum = currentIndex + 1;
  const totalQ = currentQuestions.length;

  // Level & Section Badge
  const levelTextEl = document.getElementById("questionLevelText");
  const levelBadgeEl = document.getElementById("questionLevel");
  const secName = q.section === "A" ? "Phần I: Trắc nghiệm 4 lựa chọn" : 
                  q.section === "B" ? "Phần II: Đúng / Sai (a,b,c,d)" : 
                  "Phần III: Trả lời ngắn";

  if (levelTextEl) {
    levelTextEl.innerHTML = `<strong>Câu ${q.id}</strong> (${secName}) • ${q.lessonTitle || ""}`;
  }

  // Flag Button State
  const flagBtn = document.getElementById("flagBtn");
  const flagText = document.getElementById("flagText");
  const isFlagged = flaggedQuestions.has(q.id);
  if (flagBtn) {
    flagBtn.classList.toggle("flagged", isFlagged);
    if (flagText) flagText.textContent = isFlagged ? "Bỏ cờ" : "Đặt cờ";
  }

  // Indicator
  const indicator = document.getElementById("questionIndexIndicator");
  if (indicator) indicator.textContent = `Câu ${qNum} / ${totalQ}`;

  // Question Prompt
  const promptEl = document.getElementById("questionPrompt");
  if (promptEl) {
    promptEl.innerHTML = formatMathText(q.prompt);
  }

  // Diagram Area (Either Image or SVG)
  const diagramWrapper = document.getElementById("diagramWrapper");
  const svgContainer = document.getElementById("svgContainer");
  const diagramCaption = document.getElementById("diagramCaptionText");

  if (diagramWrapper) {
    if (q.diagram) {
      diagramWrapper.style.display = "block";
      if (diagramCaption) diagramCaption.textContent = `Hình vẽ minh họa Câu ${q.id}`;
      svgContainer.innerHTML = `
        <div class="question-diagram-box">
          <img src="${q.diagram}" alt="Hình vẽ Câu ${q.id}" loading="lazy" />
        </div>
      `;
    } else if (q.svgType) {
      diagramWrapper.style.display = "block";
      if (diagramCaption) diagramCaption.textContent = `Hình vẽ minh họa Câu ${q.id}`;
      renderSvgDiagram(q.svgType, svgContainer);
    } else {
      diagramWrapper.style.display = "none";
      svgContainer.innerHTML = "";
    }
  }

  // Options / Input Container
  const container = document.getElementById("optionsContainer");
  if (!container) return;
  container.innerHTML = "";

  if (q.type === "multiple_choice") {
    renderMultipleChoice(q, container);
  } else if (q.type === "true_false") {
    renderTrueFalse(q, container);
  } else if (q.type === "short_answer") {
    renderShortAnswer(q, container);
  }

  // Nav buttons state
  const prevBtn = document.getElementById("prevQuestionBtn");
  const nextBtn = document.getElementById("nextQuestionBtn");
  if (prevBtn) prevBtn.disabled = currentIndex === 0;
  if (nextBtn) nextBtn.disabled = currentIndex === totalQ - 1;

  // Auto KaTeX Render
  triggerKaTeX();
  updateQuestionGridActive();
}

// ------------------------------------------
// 6.1 Render Type A: Trắc nghiệm 4 lựa chọn
// ------------------------------------------
function renderMultipleChoice(q, container) {
  const currentAnswer = userAnswers[q.id];
  const grid = document.createElement("div");
  grid.className = "options-container";

  const optLabels = ["A", "B", "C", "D"];
  q.options.forEach((optText, idx) => {
    const card = document.createElement("div");
    card.className = `option-item ${currentAnswer === idx ? "selected" : ""}`;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    // In Practice Mode (or after submit), show colors
    if (isSubmitted || currentMode === "practice") {
      if (currentAnswer !== undefined) {
        if (idx === q.correctIndex) {
          card.classList.add("correct");
        } else if (currentAnswer === idx) {
          card.classList.add("incorrect");
        }
      }
    }

    // Clean option text prefix if already has A. / B. / C. / D.
    let displayContent = optText;
    const prefixMatch = displayContent.match(/^[A-D]\.\s*(.*)/);
    if (prefixMatch) {
      displayContent = prefixMatch[1];
    }

    card.innerHTML = `
      <span class="option-key">${optLabels[idx]}</span>
      <span class="option-text">${formatMathText(displayContent)}</span>
    `;

    card.addEventListener("click", () => {
      if (isSubmitted) return;
      selectMultipleChoice(q.id, idx);
    });

    grid.appendChild(card);
  });

  container.appendChild(grid);

  // Practice Mode: Detailed Solution Box
  if (isSubmitted || currentMode === "practice") {
    renderSolutionToggleBox(q, container);
  }
}

function selectMultipleChoice(qid, idx) {
  if (isSubmitted) return;
  userAnswers[qid] = idx;
  renderCurrentQuestion();
  updateProgressStats();
  renderQuestionGrid();
}

// ------------------------------------------
// 6.2 Render Type B: Đúng / Sai (a, b, c, d)
// ------------------------------------------
function renderTrueFalse(q, container) {
  const tfAnswers = userAnswers[q.id] || {};
  const tfBox = document.createElement("div");
  tfBox.className = "tf-container";

  q.items.forEach(item => {
    const card = document.createElement("div");
    card.className = "tf-item-card";

    const subVal = tfAnswers[item.subId]; // true, false, or undefined

    // Practice mode color
    if (isSubmitted || currentMode === "practice") {
      if (subVal !== undefined) {
        if (subVal === item.correct) {
          card.classList.add("is-correct");
        } else {
          card.classList.add("is-incorrect");
        }
      }
    }

    card.innerHTML = `
      <div class="tf-item-left">
        <span class="tf-item-subid">${item.subId.toUpperCase()}</span>
        <div class="tf-item-text">${formatMathText(item.text)}</div>
      </div>
      <div class="tf-btn-group">
        <button class="tf-btn ${subVal === true ? 'selected-true' : ''}" data-val="true">
          <i data-lucide="check"></i> Đúng
        </button>
        <button class="tf-btn ${subVal === false ? 'selected-false' : ''}" data-val="false">
          <i data-lucide="x"></i> Sai
        </button>
      </div>
    `;

    const btnTrue = card.querySelector('[data-val="true"]');
    const btnFalse = card.querySelector('[data-val="false"]');

    if (!isSubmitted) {
      btnTrue.addEventListener("click", () => selectTrueFalse(q.id, item.subId, true));
      btnFalse.addEventListener("click", () => selectTrueFalse(q.id, item.subId, false));
    }

    tfBox.appendChild(card);
  });

  container.appendChild(tfBox);

  // Solution Box
  if (isSubmitted || currentMode === "practice") {
    renderSolutionToggleBox(q, container);
  }
}

function selectTrueFalse(qid, subId, val) {
  if (isSubmitted) return;
  if (!userAnswers[qid]) {
    userAnswers[qid] = {};
  }
  userAnswers[qid][subId] = val;
  renderCurrentQuestion();
  updateProgressStats();
  renderQuestionGrid();
}

// ------------------------------------------
// 6.3 Render Type C: Trả lời ngắn
// ------------------------------------------
function renderShortAnswer(q, container) {
  const currentVal = userAnswers[q.id] || "";
  const saBox = document.createElement("div");
  saBox.className = "short-answer-container";

  saBox.innerHTML = `
    <label class="short-answer-label">
      <i data-lucide="edit-3"></i> Nhập kết quả tính toán của bạn:
    </label>
    <div class="short-answer-input-row">
      <input type="text" class="short-answer-input" id="shortAnswerInput" 
             placeholder="Ví dụ: 675 hoặc 3,25..." value="${currentVal}" 
             ${isSubmitted ? 'disabled' : ''} />
      ${currentMode === 'practice' && !isSubmitted ? `
        <button class="short-answer-check-btn" id="checkShortAnsBtn">Kiểm tra</button>
      ` : ''}
    </div>
    <div class="short-answer-feedback" id="shortAnsFeedback"></div>
  `;

  container.appendChild(saBox);

  const inputEl = saBox.querySelector("#shortAnswerInput");
  if (inputEl) {
    inputEl.addEventListener("input", (e) => {
      userAnswers[q.id] = e.target.value.trim();
      updateProgressStats();
      renderQuestionGrid();
    });
  }

  const checkBtn = saBox.querySelector("#checkShortAnsBtn");
  const feedbackEl = saBox.querySelector("#shortAnsFeedback");
  if (checkBtn && feedbackEl) {
    checkBtn.addEventListener("click", () => {
      const val = (inputEl.value || "").trim();
      if (!val) {
        alert("Vui lòng nhập đáp án của bạn trước khi kiểm tra!");
        return;
      }
      const isCorrect = checkShortAnswerCorrectness(val, q.correctAnswer);
      if (isCorrect) {
        feedbackEl.className = "short-answer-feedback correct";
        feedbackEl.innerHTML = `✅ <strong>Chính xác!</strong> Đáp án đúng là: <code>${q.correctAnswer}</code>`;
      } else {
        feedbackEl.className = "short-answer-feedback incorrect";
        feedbackEl.innerHTML = `❌ <strong>Chưa chính xác.</strong> Đáp án của bạn: <code>${val}</code>. Đáp án đúng: <code>${q.correctAnswer}</code>`;
      }
      const solBox = container.querySelector(".practice-solution-box");
      if (solBox) solBox.classList.add("visible");
    });
  }

  // Solution Box
  if (isSubmitted || currentMode === "practice") {
    renderSolutionToggleBox(q, container);
  }
}

function checkShortAnswerCorrectness(userVal, correctVal) {
  if (!userVal || !correctVal) return false;
  // normalize decimal commas and dots
  const normUser = userVal.replace(/\s+/g, '').replace(',', '.').toLowerCase();
  const normCorrect = correctVal.replace(/\s+/g, '').replace(',', '.').toLowerCase();
  if (normUser === normCorrect) return true;

  // Float numeric check
  const numU = parseFloat(normUser);
  const numC = parseFloat(normCorrect);
  if (!isNaN(numU) && !isNaN(numC) && Math.abs(numU - numC) < 0.001) {
    return true;
  }
  return false;
}

// ------------------------------------------
// 6.4 Solution Toggle Box (Practice & Review)
// ------------------------------------------
function renderSolutionToggleBox(q, container) {
  const wrap = document.createElement("div");
  wrap.className = "practice-solution-toggle";

  const isVisibleByDefault = isSubmitted;

  wrap.innerHTML = `
    <button class="practice-sol-btn" id="toggleSolBtn">
      <i data-lucide="help-circle"></i>
      <span>${isVisibleByDefault ? 'Ẩn Lời Giải Chi Tiết' : 'Xem Lời Giải & Đáp Án'}</span>
    </button>
    <div class="practice-solution-box ${isVisibleByDefault ? 'visible' : ''}" id="solContentBox">
      <div style="font-weight:700; color:#1e3a8a; margin-bottom:8px;">
        💡 LỜI GIẢI CHI TIẾT (THẦY NGUYỄN VĂN SANG):
      </div>
      <div>${formatMathText(q.explanation || "Đang cập nhật lời giải...")}</div>
    </div>
  `;

  const btn = wrap.querySelector("#toggleSolBtn");
  const box = wrap.querySelector("#solContentBox");
  if (btn && box) {
    btn.addEventListener("click", () => {
      const isVis = box.classList.toggle("visible");
      btn.querySelector("span").textContent = isVis ? "Ẩn Lời Giải Chi Tiết" : "Xem Lời Giải & Đáp Án";
    });
  }

  container.appendChild(wrap);
}

// ==========================================
// 7. QUESTION GRID & SIDEBAR NAVIGATION
// ==========================================
function renderQuestionGrid() {
  const gridContainer = document.getElementById("navGrid") || document.getElementById("questionGrid");
  if (!gridContainer) return;
  gridContainer.innerHTML = "";

  currentQuestions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.className = "nav-item-btn";
    btn.id = `navBtn_${idx}`;
    btn.textContent = (idx + 1);
    btn.title = `Câu ${idx + 1} (${q.section === 'A' ? 'Trắc nghiệm 4 lựa chọn' : q.section === 'B' ? 'Đúng/Sai' : 'Trả lời ngắn'})`;

    // Status classes
    const ans = userAnswers[q.id];
    let isAnswered = false;
    if (q.type === "multiple_choice") {
      isAnswered = ans !== undefined && ans !== null;
    } else if (q.type === "true_false") {
      isAnswered = ans && Object.keys(ans).length === 4;
    } else if (q.type === "short_answer") {
      isAnswered = ans && typeof ans === "string" && ans.trim().length > 0;
    }

    if (isAnswered) btn.classList.add("answered");
    if (flaggedQuestions.has(q.id)) btn.classList.add("flagged");
    if (idx === currentIndex) btn.classList.add("active");

    // Submitted state (Green / Red)
    if (isSubmitted) {
      const isRight = evaluateQuestionCorrectness(q);
      btn.classList.add(isRight ? "correct" : "incorrect");
    }

    btn.addEventListener("click", () => {
      currentIndex = idx;
      renderCurrentQuestion();
      const card = document.getElementById("questionCard") || document.querySelector(".quiz-card");
      if (card && window.innerWidth < 1024) {
        card.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    gridContainer.appendChild(btn);
  });
}

function updateQuestionGridActive() {
  const btns = document.querySelectorAll(".nav-item-btn");
  btns.forEach((btn, idx) => {
    btn.classList.toggle("active", idx === currentIndex);
    if (currentQuestions[idx]) {
      const q = currentQuestions[idx];
      const ans = userAnswers[q.id];
      let isAnswered = false;
      if (q.type === "multiple_choice") {
        isAnswered = ans !== undefined && ans !== null;
      } else if (q.type === "true_false") {
        isAnswered = ans && Object.keys(ans).length === 4;
      } else if (q.type === "short_answer") {
        isAnswered = ans && typeof ans === "string" && ans.trim().length > 0;
      }
      btn.classList.toggle("answered", isAnswered);
      btn.classList.toggle("flagged", flaggedQuestions.has(q.id));
    }
  });
}

function updateProgressStats() {
  let answered = 0;
  currentQuestions.forEach(q => {
    const ans = userAnswers[q.id];
    if (q.type === "multiple_choice" && ans !== undefined) answered++;
    else if (q.type === "true_false" && ans && Object.keys(ans).length === 4) answered++;
    else if (q.type === "short_answer" && ans && ans.trim().length > 0) answered++;
  });

  const answeredEl = document.getElementById("answeredCount");
  const flaggedEl = document.getElementById("flaggedCount");
  const progressPercent = document.getElementById("progressPercent");
  const progressBar = document.getElementById("progressBar");

  if (answeredEl) answeredEl.textContent = answered;
  if (flaggedEl) flaggedEl.textContent = flaggedQuestions.size;

  if (currentQuestions.length > 0) {
    const pct = Math.round((answered / currentQuestions.length) * 100);
    if (progressPercent) progressPercent.textContent = `${pct}%`;
    if (progressBar) progressBar.style.width = `${pct}%`;
  }
}

function evaluateQuestionCorrectness(q) {
  const ans = userAnswers[q.id];
  if (ans === undefined) return false;

  if (q.type === "multiple_choice") {
    return ans === q.correctIndex;
  } else if (q.type === "true_false") {
    // Returns true if all 4 items correct
    if (!ans) return false;
    return q.items.every(it => ans[it.subId] === it.correct);
  } else if (q.type === "short_answer") {
    return checkShortAnswerCorrectness(ans, q.correctAnswer);
  }
  return false;
}

// ==========================================
// 8. CARD NAVIGATION & SHORTCUTS
// ==========================================
function initCardControls() {
  const prevBtn = document.getElementById("prevQuestionBtn");
  const nextBtn = document.getElementById("nextQuestionBtn");
  const flagBtn = document.getElementById("flagBtn");
  const clearBtn = document.getElementById("clearAnswerBtn");
  const submitBtn = document.getElementById("submitQuizBtn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        renderCurrentQuestion();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        renderCurrentQuestion();
      }
    });
  }

  if (flagBtn) {
    flagBtn.addEventListener("click", () => {
      const q = currentQuestions[currentIndex];
      if (!q || isSubmitted) return;
      if (flaggedQuestions.has(q.id)) {
        flaggedQuestions.delete(q.id);
      } else {
        flaggedQuestions.add(q.id);
      }
      renderCurrentQuestion();
      renderQuestionGrid();
      updateProgressStats();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      const q = currentQuestions[currentIndex];
      if (!q || isSubmitted) return;
      delete userAnswers[q.id];
      renderCurrentQuestion();
      renderQuestionGrid();
      updateProgressStats();
    });
  }

  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      submitQuiz(false);
    });
  }

  const headerSubmitBtn = document.getElementById("headerSubmitBtn");
  if (headerSubmitBtn) {
    headerSubmitBtn.addEventListener("click", () => {
      submitQuiz(false);
    });
  }

  // Keyboard Shortcuts: ArrowLeft, ArrowRight, 1-4 for A-D
  window.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

    if (e.key === "ArrowLeft" && currentIndex > 0) {
      currentIndex--;
      renderCurrentQuestion();
    } else if (e.key === "ArrowRight" && currentIndex < currentQuestions.length - 1) {
      currentIndex++;
      renderCurrentQuestion();
    } else if (["1", "2", "3", "4"].includes(e.key)) {
      const q = currentQuestions[currentIndex];
      if (q && q.type === "multiple_choice" && !isSubmitted) {
        selectMultipleChoice(q.id, parseInt(e.key) - 1);
      }
    }
  });
}

// ==========================================
// 9. SUBMISSION & GRADING (GDPT 2018 STANDARD)
// ==========================================
function submitQuiz(force = false) {
  if (isSubmitted) return;

  let unanswered = 0;
  currentQuestions.forEach(q => {
    const ans = userAnswers[q.id];
    if (q.type === "multiple_choice" && ans === undefined) unanswered++;
    else if (q.type === "true_false" && (!ans || Object.keys(ans).length < 4)) unanswered++;
    else if (q.type === "short_answer" && (!ans || ans.trim().length === 0)) unanswered++;
  });

  if (!force && unanswered > 0) {
    const confirmSubmit = confirm(`Bạn còn ${unanswered} câu chưa hoàn thành. Bạn có chắc chắn muốn nộp bài ngay bây giờ?`);
    if (!confirmSubmit) return;
  }

  clearInterval(timerInterval);
  isSubmitted = true;

  // Calculate Score according to GDPT 2018 standard:
  // Phần I (Trắc nghiệm 4 lựa chọn): 1đ / câu
  // Phần II (Đúng/Sai): 1 ý đúng = 0.1, 2 ý đúng = 0.25, 3 ý đúng = 0.5, 4 ý đúng = 1.0
  // Phần III (Trả lời ngắn): 1đ / câu
  let rawScore = 0;
  let maxPossibleRaw = 0;
  let correctPartA = 0, totalPartA = 0;
  let correctPartB_items = 0, totalPartB_items = 0;
  let correctPartC = 0, totalPartC = 0;
  let fullyCorrectCount = 0;

  currentQuestions.forEach(q => {
    const ans = userAnswers[q.id];
    const isFullyCorrect = evaluateQuestionCorrectness(q);
    if (isFullyCorrect) fullyCorrectCount++;

    if (q.type === "multiple_choice") {
      totalPartA++;
      maxPossibleRaw += 1.0;
      if (ans === q.correctIndex) {
        rawScore += 1.0;
        correctPartA++;
      }
    } else if (q.type === "true_false") {
      maxPossibleRaw += 1.0;
      totalPartB_items += 4;
      if (ans) {
        let subCorrect = 0;
        q.items.forEach(it => {
          if (ans[it.subId] === it.correct) {
            subCorrect++;
            correctPartB_items++;
          }
        });
        if (subCorrect === 1) rawScore += 0.1;
        else if (subCorrect === 2) rawScore += 0.25;
        else if (subCorrect === 3) rawScore += 0.5;
        else if (subCorrect === 4) rawScore += 1.0;
      }
    } else if (q.type === "short_answer") {
      totalPartC++;
      maxPossibleRaw += 1.0;
      if (ans && checkShortAnswerCorrectness(ans, q.correctAnswer)) {
        rawScore += 1.0;
        correctPartC++;
      }
    }
  });

  const finalScore10 = maxPossibleRaw > 0 ? (rawScore / maxPossibleRaw) * 10 : 0;
  const timeTakenSec = totalTime - timeRemaining;
  const accuracy = currentQuestions.length > 0 ? Math.round((fullyCorrectCount / currentQuestions.length) * 100) : 0;

  let rank = "Khá";
  let feedback = "Cố gắng rèn luyện thêm";
  if (finalScore10 >= 9.0) {
    rank = "Xuất sắc";
    feedback = "🌟 Hoàn hảo! Em làm chủ toàn diện từ lý thuyết đến bài tập vận dụng cao!";
  } else if (finalScore10 >= 8.0) {
    rank = "Giỏi";
    feedback = "👏 Rất tốt! Kỹ năng tính toán và tư duy lượng giác rất chuẩn xác.";
  } else if (finalScore10 >= 6.5) {
    rank = "Khá";
    feedback = "👍 Khá tốt. Hãy cẩn thận hơn ở phần Đúng/Sai và Trả lời ngắn nhé.";
  } else if (finalScore10 >= 5.0) {
    rank = "Trung bình";
    feedback = "⚠️ Đạt mức cơ bản. Hãy xem kỹ lời giải chi tiết bên dưới để ôn tập.";
  } else {
    rank = "Cần cố gắng";
    feedback = "⚠️ Chưa đạt yêu cầu. Em hãy bấm 'Làm lại bài' hoặc chọn từng bài để luyện tập.";
  }

  const studentInput = document.getElementById("studentNameInput");
  const studentName = studentInput && studentInput.value.trim() ? studentInput.value.trim() : "Học sinh Toán 11";

  const resultData = {
    score10: finalScore10.toFixed(2),
    rawScore: rawScore.toFixed(2),
    maxPossibleRaw: maxPossibleRaw.toFixed(2),
    timeTaken: formatDuration(timeTakenSec),
    totalQ: currentQuestions.length,
    fullyCorrectCount,
    accuracy,
    rank,
    feedback,
    studentName,
    correctPartA, totalPartA,
    correctPartB_items, totalPartB_items,
    correctPartC, totalPartC
  };

  // Lock submission permanently in sessionStorage (Cannot retake once submitted)
  sessionStorage.setItem("quiz_submitted_" + currentLessonKey, "true");
  sessionStorage.setItem("quiz_answers_" + currentLessonKey, JSON.stringify(userAnswers));
  sessionStorage.setItem("quiz_results_" + currentLessonKey, JSON.stringify(resultData));

  displayQuizResults(resultData);

  renderCurrentQuestion();
  renderQuestionGrid();
}

function formatDuration(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

function displayQuizResults(data) {
  const resultsSec = document.getElementById("resultsSection");
  if (!resultsSec) return;

  // 1. Show results section and hide quiz body
  const quizBody = document.getElementById("quizBody");
  if (quizBody) quizBody.style.display = "none";
  resultsSec.style.display = "block";

  // 2. Populate Metrics
  const finalScoreEl = document.getElementById("finalScore");
  const correctCountEl = document.getElementById("correctCount");
  const accuracyRateEl = document.getElementById("accuracyRate");
  const timeSpentEl = document.getElementById("timeSpent");
  const rankCategoryEl = document.getElementById("rankCategory");
  const rankFeedbackEl = document.getElementById("rankFeedback");
  const studentNameEl = document.getElementById("resultStudentName");

  if (finalScoreEl) finalScoreEl.textContent = data.score10;
  if (correctCountEl) correctCountEl.textContent = `${data.fullyCorrectCount} / ${data.totalQ}`;
  if (accuracyRateEl) accuracyRateEl.textContent = `Tỉ lệ: ${data.accuracy}%`;
  if (timeSpentEl) timeSpentEl.textContent = data.timeTaken;
  if (rankCategoryEl) rankCategoryEl.textContent = data.rank;
  if (rankFeedbackEl) rankFeedbackEl.textContent = data.feedback;
  if (studentNameEl) studentNameEl.textContent = data.studentName;

  // Show "Xem Bảng Điểm" button in question card header if student returns to quiz body
  const viewScoreBtn = document.getElementById("viewScoreBoardBtn");
  if (viewScoreBtn) viewScoreBtn.style.display = "inline-flex";

  // Disable submit buttons
  const headerSubmitBtn = document.getElementById("headerSubmitBtn");
  if (headerSubmitBtn) {
    headerSubmitBtn.disabled = true;
    headerSubmitBtn.innerHTML = `<i data-lucide="check-circle" class="btn-icon"></i><span>Đã nộp bài</span>`;
  }
  const submitQuizBtn = document.getElementById("submitQuizBtn");
  if (submitQuizBtn) {
    submitQuizBtn.disabled = true;
    submitQuizBtn.innerHTML = `<i data-lucide="check-circle" class="btn-icon"></i><span>Đã nộp bài</span>`;
  }

  // 3. Render Detailed Solutions List
  renderDetailedSolutionsList();

  // 4. Smooth scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (window.lucide) lucide.createIcons();
}

function renderDetailedSolutionsList() {
  const listEl = document.getElementById("solutionList");
  if (!listEl) return;
  listEl.innerHTML = "";

  const letters = ["A", "B", "C", "D"];
  let wrongCount = 0;
  let correctCount = 0;

  currentQuestions.forEach((q, idx) => {
    const isCorrect = evaluateQuestionCorrectness(q);
    if (isCorrect) correctCount++; else wrongCount++;

    const card = document.createElement("div");
    card.className = `solution-card ${isCorrect ? "correct" : "wrong"}`;
    card.setAttribute("data-status", isCorrect ? "correct" : "wrong");

    const sectionLabel = q.section === "A" ? "Trắc nghiệm 4 lựa chọn" : q.section === "B" ? "Trắc nghiệm Đúng / Sai" : "Trả lời ngắn";
    const levelLabel = q.level === "NB" ? "Nhận biết" : q.level === "TH" ? "Thông hiểu" : q.level === "VD" ? "Vận dụng" : "Vận dụng cao";

    let answerHtml = "";

    if (q.type === "multiple_choice") {
      const userChoice = userAnswers[q.id];
      const userChoiceText = userChoice !== undefined ? letters[userChoice] : "Chưa chọn";
      const correctChoiceText = letters[q.correctIndex];

      answerHtml = `
        <div class="sol-options-grid" style="display:grid; grid-template-columns:1fr; gap:8px; margin:12px 0;">
          ${q.options.map((opt, oIdx) => {
            let optClass = "sol-opt";
            if (oIdx === q.correctIndex) optClass += " correct-answer";
            if (oIdx === userChoice && !isCorrect) optClass += " student-wrong";
            let optClean = opt.replace(/^[A-D]\.\s*/, "");
            return `
              <div class="${optClass}" style="display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:8px; border:1px solid #e2e8f0;">
                <strong style="min-width:24px;">${letters[oIdx]}.</strong>
                <div style="flex:1;">${formatMathText(optClean)}</div>
                ${oIdx === q.correctIndex ? '<span style="color:#059669; font-weight:700;">✓ Đáp án đúng</span>' : ""}
                ${oIdx === userChoice && !isCorrect ? '<span style="color:#dc2626; font-weight:700;">✗ Lựa chọn của bạn</span>' : ""}
              </div>
            `;
          }).join("")}
        </div>
        <div class="sol-user-summary" style="margin:10px 0; font-size:0.95rem;">
          <span>Lựa chọn của bạn: <strong>${userChoiceText}</strong></span> • 
          <span>Đáp án đúng: <strong style="color:#059669;">${correctChoiceText}</strong></span>
        </div>
      `;
    } else if (q.type === "true_false") {
      const tfAns = userAnswers[q.id] || {};
      answerHtml = `
        <div class="sol-tf-table" style="margin:12px 0; border:1px solid #e2e8f0; border-radius:8px; overflow:hidden;">
          <table style="width:100%; border-collapse:collapse; font-size:0.92rem;">
            <thead>
              <tr style="background:#f1f5f9; text-align:left;">
                <th style="padding:8px 12px;">Ý mệnh đề</th>
                <th style="padding:8px 12px; width:120px; text-align:center;">Bạn chọn</th>
                <th style="padding:8px 12px; width:120px; text-align:center;">Đáp án đúng</th>
                <th style="padding:8px 12px; width:80px; text-align:center;">Kết quả</th>
              </tr>
            </thead>
            <tbody>
              ${q.items.map(it => {
                const uVal = tfAns[it.subId];
                const uStr = uVal === true ? "Đúng" : uVal === false ? "Sai" : "Chưa chọn";
                const cStr = it.correct ? "Đúng" : "Sai";
                const isSubRight = uVal === it.correct;
                return `
                  <tr style="border-top:1px solid #e2e8f0; background:${isSubRight ? '#f0fdf4' : '#fef2f2'};">
                    <td style="padding:8px 12px;"><strong>${it.subId})</strong> ${formatMathText(it.content)}</td>
                    <td style="padding:8px 12px; text-align:center;">${uStr}</td>
                    <td style="padding:8px 12px; text-align:center; font-weight:700; color:#059669;">${cStr}</td>
                    <td style="padding:8px 12px; text-align:center;">${isSubRight ? '✅' : '❌'}</td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      `;
    } else if (q.type === "short_answer") {
      const userText = (userAnswers[q.id] || "").trim();
      answerHtml = `
        <div class="sol-user-summary" style="margin:12px 0; padding:12px; background:#f8fafc; border-radius:8px; font-size:0.95rem;">
          <div style="margin-bottom:6px;">Câu trả lời của bạn: <strong>${userText || "(Chưa trả lời)"}</strong></div>
          <div>Đáp án chính xác: <strong style="color:#059669;">${q.correctAnswer}</strong></div>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="sol-card-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-weight:800; font-size:1.1rem; color:#1e293b;">Câu ${idx + 1}</span>
          <span style="background:#e0e7ff; color:#3730a3; padding:2px 8px; border-radius:6px; font-size:0.8rem; font-weight:700;">${sectionLabel}</span>
          <span style="background:#f1f5f9; color:#475569; padding:2px 8px; border-radius:6px; font-size:0.8rem; font-weight:600;">${levelLabel}</span>
        </div>
        <div class="sol-status-badge ${isCorrect ? 'correct' : 'wrong'}" style="display:inline-flex; align-items:center; gap:6px; padding:4px 12px; border-radius:999px; font-weight:700; font-size:0.85rem; background:${isCorrect ? '#dcfce7; color:#15803d;' : '#fee2e2; color:#b91c1c;'}">
          <i data-lucide="${isCorrect ? 'check-circle' : 'x-circle'}" style="width:16px; height:16px;"></i>
          <span>${isCorrect ? 'Chính xác' : 'Chưa đúng'}</span>
        </div>
      </div>

      <div class="sol-prompt" style="font-size:1.05rem; line-height:1.6; color:#1e293b;">
        <p><strong>Đề bài:</strong> ${formatMathText(q.prompt)}</p>
        ${q.diagram ? `<div style="text-align:center; margin:10px 0;"><img src="${q.diagram}" style="max-height:220px; border-radius:8px; border:1px solid #e2e8f0;" /></div>` : ""}
      </div>

      ${answerHtml}

      <div class="sol-explanation-box" style="margin-top:14px; background:#f8fafc; border-left:4px solid #3b82f6; border-radius:0 8px 8px 0; padding:14px;">
        <div style="display:flex; align-items:center; gap:6px; font-weight:700; color:#1d4ed8; margin-bottom:6px;">
          <i data-lucide="lightbulb" style="width:18px; height:18px;"></i>
          <span>Hướng dẫn giải chi tiết (ThS. Nguyễn Văn Sang):</span>
        </div>
        <div style="font-size:0.95rem; line-height:1.7; color:#334155;">${formatMathText(q.explanation)}</div>
      </div>
    `;

    listEl.appendChild(card);
  });

  const filterWrongEl = document.getElementById("filterWrongCount");
  const filterCorrectEl = document.getElementById("filterCorrectCount");
  if (filterWrongEl) filterWrongEl.textContent = wrongCount;
  if (filterCorrectEl) filterCorrectEl.textContent = correctCount;

  // Trigger KaTeX rendering on solution list
  if (window.renderMathInElement) {
    renderMathInElement(listEl, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      throwOnError: false
    });
  }
}

function initModalListeners() {
  // Retake Quiz button (Strictly forbidden upon submission)
  const retakeBtn = document.getElementById("retakeQuizBtn");
  if (retakeBtn) {
    retakeBtn.addEventListener("click", () => {
      alert("⚠️ Quy chế phòng thi: Bài kiểm tra đã nộp thành công và đã được khóa bảo mật. Học sinh không được phép làm lại bài thi!");
    });
  }

  // Back to Quiz card view
  const backToQuizBtn = document.getElementById("backToQuizBtn");
  if (backToQuizBtn) {
    backToQuizBtn.addEventListener("click", () => {
      const resSec = document.getElementById("resultsSection");
      const quizBody = document.getElementById("quizBody");
      if (resSec) resSec.style.display = "none";
      if (quizBody) quizBody.style.display = "";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // View Score Board button from quiz card
  const viewScoreBtn = document.getElementById("viewScoreBoardBtn");
  if (viewScoreBtn) {
    viewScoreBtn.addEventListener("click", () => {
      const resSec = document.getElementById("resultsSection");
      const quizBody = document.getElementById("quizBody");
      if (quizBody) quizBody.style.display = "none";
      if (resSec) resSec.style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Scroll to review solutions button
  const scrollToReviewBtn = document.getElementById("scrollToReviewBtn");
  if (scrollToReviewBtn) {
    scrollToReviewBtn.addEventListener("click", () => {
      const container = document.getElementById("solutionsContainer");
      if (container) container.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Solution Filter chips
  const filterChips = document.querySelectorAll(".filter-chip");
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      const filter = chip.getAttribute("data-filter");
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
    });
  });

  // Lesson Hub Modal
  const openHubBtn = document.getElementById("openLessonHubBtn");
  const lessonModal = document.getElementById("lessonHubModal") || document.getElementById("lessonSelectModal");
  const closeLessonModal = document.getElementById("closeLessonHubBtn") || document.getElementById("closeLessonModal");

  if (openHubBtn && lessonModal) {
    openHubBtn.addEventListener("click", () => {
      lessonModal.style.display = "flex";
      lessonModal.classList.add("active", "show");
    });
  }
  if (closeLessonModal && lessonModal) {
    closeLessonModal.addEventListener("click", () => {
      lessonModal.style.display = "none";
      lessonModal.classList.remove("active", "show");
    });
  }
}

// ==========================================
// 10. MATH & KATEX RENDERING HELPER
// ==========================================
function formatMathText(text) {
  if (!text) return "";
  // Ensure line breaks
  let formatted = text.replace(/\n/g, "<br>");
  return formatted;
}

function triggerKaTeX() {
  if (window.renderMathInElement) {
    renderMathInElement(document.getElementById("quizBody"), {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      throwOnError: false
    });
  }
}

// ==========================================
// 11. SVG DIAGRAM RENDERING (Unit Circle 5pi/6)
// ==========================================
function renderSvgDiagram(type, container) {
  if (type === "unit_circle_5pi_6") {
    container.innerHTML = `
      <svg viewBox="0 0 340 340" class="trig-svg" style="max-width:280px; margin:0 auto; display:block;">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
          </marker>
        </defs>
        <!-- Axes -->
        <line x1="20" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)"/>
        <line x1="170" y1="320" x2="170" y2="20" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow)"/>
        <text x="325" y="174" font-size="12" fill="#64748b" font-weight="700">x</text>
        <text x="174" y="18" font-size="12" fill="#64748b" font-weight="700">y</text>
        <!-- Origin -->
        <text x="156" y="186" font-size="12" fill="#64748b">O</text>
        <!-- Unit Circle R = 110 -->
        <circle cx="170" cy="170" r="110" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <!-- Point A(1; 0) -->
        <circle cx="280" cy="170" r="4" fill="#ef4444"/>
        <text x="286" y="166" font-size="13" font-weight="700" fill="#ef4444">A(1;0)</text>
        <!-- Point M for 5pi/6: angle 150 deg -> x = 170 - 110*cos(30) = 170 - 95.26 = 74.7, y = 170 - 110*sin(30) = 115 -->
        <line x1="170" y1="170" x2="74.7" y2="115" stroke="#ef4444" stroke-width="2"/>
        <circle cx="74.7" cy="115" r="5" fill="#ef4444"/>
        <text x="56" y="110" font-size="14" font-weight="800" fill="#ef4444">M</text>
        <!-- Angle Arc from 0 to 150 deg -->
        <path d="M 205 170 A 35 35 0 0 0 139.7 152.5" fill="none" stroke="#f59e0b" stroke-width="2"/>
        <text x="195" y="150" font-size="11" font-weight="700" fill="#d97706">5π/6</text>
      </svg>
    `;
  }
}
