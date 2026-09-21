/**
 * Hệ Thống Bài Tập Dạng Viết Tay - 40 Chuyên Đề Ôn Thi TN 2026 (Tập 1: 1 - 21)
 * Khoa Cơ Bản - Trường Cao Đẳng Nghề Số 1 - BQP & THPT GDPT 2018
 * GV: ThS. Nguyễn Văn Sang
 */

// ==========================================
// 1. TRẠNG THÁI HỆ THỐNG (STATE)
// ==========================================
const AppState = {
  currentTopicId: 1,
  activeCategory: "all",
  searchQuery: "",
  studentName: "Học sinh Ôn thi TN 2026",
  savedNotes: {} // Lưu theo key: `topic_${id}_q_${qid}` hoặc `topic_${id}_theory`
};

// ==========================================
// 2. KHỞI TẠO VÀ SỰ KIỆN GIAO DIỆN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initIcons();
  loadSavedTheme();
  loadSavedFontSize();
  loadStoredNotes();
  bindGlobalEvents();
  renderTopicList();
  renderCurrentTopic();
});

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function bindGlobalEvents() {
  // Theme Toggle
  const themeBtn = document.getElementById("themeToggleBtn");
  themeBtn?.addEventListener("click", toggleTheme);

  // Cỡ chữ
  document.getElementById("fontDecreaseBtn")?.addEventListener("click", () => setFontSize("normal"));
  document.getElementById("fontResetBtn")?.addEventListener("click", () => setFontSize("normal"));
  document.getElementById("fontIncreaseBtn")?.addEventListener("click", () => setFontSize("large"));

  // Tên học sinh
  const nameInput = document.getElementById("studentNameInput");
  nameInput?.addEventListener("input", (e) => {
    AppState.studentName = e.target.value.trim() || "Học sinh Ôn thi TN 2026";
    localStorage.setItem("handwriting_student_name", AppState.studentName);
  });

  // Tìm kiếm
  const searchInput = document.getElementById("searchTopicInput");
  searchInput?.addEventListener("input", (e) => {
    AppState.searchQuery = e.target.value.trim().toLowerCase();
    renderTopicList();
  });

  // Lọc phân môn
  const filterBtns = document.querySelectorAll(".cat-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      AppState.activeCategory = btn.getAttribute("data-category");
      renderTopicList();
    });
  });

  // Chuyển chuyên đề bằng selector
  const topicSelect = document.getElementById("topicSelectDropdown");
  topicSelect?.addEventListener("change", (e) => {
    switchTopic(parseInt(e.target.value, 10));
  });

  // Next / Prev topic buttons
  document.getElementById("prevTopicBtn")?.addEventListener("click", () => {
    if (AppState.currentTopicId > 1) {
      switchTopic(AppState.currentTopicId - 1);
    }
  });

  document.getElementById("nextTopicBtn")?.addEventListener("click", () => {
    if (AppState.currentTopicId < TOPICS_DATA.length) {
      switchTopic(AppState.currentTopicId + 1);
    }
  });

  // In / Xuất PDF
  document.getElementById("headerPrintBtn")?.addEventListener("click", () => window.print());
  document.getElementById("printTopicBtn")?.addEventListener("click", () => window.print());
}

// ==========================================
// 3. RENDER DANH SÁCH 21 CHUYÊN ĐỀ
// ==========================================
function renderTopicList() {
  const container = document.getElementById("topicNavCards");
  const topicSelect = document.getElementById("topicSelectDropdown");
  if (!container) return;

  container.innerHTML = "";
  if (topicSelect) topicSelect.innerHTML = "";

  const filteredTopics = TOPICS_DATA.filter(t => {
    const matchCat = (AppState.activeCategory === "all" || t.category === AppState.activeCategory);
    const matchQuery = (
      t.title.toLowerCase().includes(AppState.searchQuery) ||
      t.summary.toLowerCase().includes(AppState.searchQuery) ||
      t.code.toLowerCase().includes(AppState.searchQuery)
    );
    return matchCat && matchQuery;
  });

  document.getElementById("totalTopicsCount").textContent = `${filteredTopics.length} / ${TOPICS_DATA.length} Chuyên đề`;

  filteredTopics.forEach(t => {
    // Thẻ trong danh sách Drawer
    const card = document.createElement("div");
    card.className = `topic-nav-item ${t.id === AppState.currentTopicId ? "active" : ""}`;
    card.setAttribute("data-topic-id", t.id);

    card.innerHTML = `
      <div class="topic-nav-badge" style="background:${t.badgeColor}20; color:${t.badgeColor}; border:1px solid ${t.badgeColor}40;">
        ${t.code}
      </div>
      <div class="topic-nav-info">
        <h4 class="topic-nav-title">${t.title}</h4>
        <span class="topic-nav-cat">${t.categoryName} • ${t.grade}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      switchTopic(t.id);
    });

    container.appendChild(card);

    // Option trong Dropdown
    if (topicSelect) {
      const opt = document.createElement("option");
      opt.value = t.id;
      opt.textContent = `${t.code}: ${t.title.replace(/Chuyên đề \d+: /, '')}`;
      if (t.id === AppState.currentTopicId) opt.selected = true;
      topicSelect.appendChild(opt);
    }
  });

  initIcons();
}

function switchTopic(topicId) {
  if (topicId < 1 || topicId > TOPICS_DATA.length) return;
  AppState.currentTopicId = topicId;

  // Cập nhật giao diện danh sách
  document.querySelectorAll(".topic-nav-item").forEach(el => {
    if (parseInt(el.getAttribute("data-topic-id"), 10) === topicId) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });

  const topicSelect = document.getElementById("topicSelectDropdown");
  if (topicSelect) topicSelect.value = topicId;

  // Cập nhật nút Prev / Next
  const prevBtn = document.getElementById("prevTopicBtn");
  const nextBtn = document.getElementById("nextTopicBtn");
  if (prevBtn) prevBtn.disabled = (topicId === 1);
  if (nextBtn) nextBtn.disabled = (topicId === TOPICS_DATA.length);

  renderCurrentTopic();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================
// 4. RENDER NỘI DUNG CHUYÊN ĐỀ HIỆN TẠI
// ==========================================
function renderCurrentTopic() {
  const topic = TOPICS_DATA.find(t => t.id === AppState.currentTopicId) || TOPICS_DATA[0];
  const container = document.getElementById("topicContentContainer");
  if (!container) return;

  // Tiêu đề & Thông tin
  document.getElementById("sheetTopicCode").textContent = topic.code;
  document.getElementById("sheetTopicTitle").textContent = topic.title;
  document.getElementById("sheetCategoryName").textContent = `${topic.categoryName} • ${topic.grade}`;

  // Khung Lý Thuyết
  const theoryContainer = document.getElementById("theoryContentArea");
  theoryContainer.innerHTML = topic.theoryHtml;

  // Dòng kẻ ghi chú Lý thuyết (10 dòng chuẩn 14pt line-height 1.5)
  const theoryLinesContainer = document.getElementById("theoryHandwritingLines");
  theoryLinesContainer.innerHTML = renderHandwritingBox(`topic_${topic.id}_theory`, 8, "Ghi chú công thức mở rộng & ví dụ minh họa của Thầy/Cô...");

  // Danh sách Bài tập rèn luyện
  const exercisesContainer = document.getElementById("exercisesListArea");
  exercisesContainer.innerHTML = "";

  topic.exercises.forEach((ex, exIdx) => {
    const exCard = document.createElement("div");
    exCard.className = "exercise-card";

    let optionsHtml = "";
    if (ex.type === "multiple_choice" && ex.options) {
      const letters = ["A", "B", "C", "D"];
      optionsHtml = `
        <div class="ex-options-grid">
          ${ex.options.map((opt, oIdx) => `
            <div class="ex-opt-item">
              <strong>${letters[oIdx]}.</strong>
              <span>${opt}</span>
            </div>
          `).join("")}
        </div>
      `;
    }

    const storageKey = `topic_${topic.id}_q_${ex.id}`;

    exCard.innerHTML = `
      <div class="ex-card-header">
        <div class="ex-num-badge">
          <i data-lucide="edit-3" class="ex-icon"></i>
          <span>Bài ${exIdx + 1} (${ex.type === 'essay' ? 'Tự luận' : (ex.type === 'short_answer' ? 'Trả lời ngắn' : 'Trắc nghiệm')})</span>
        </div>
        <button class="toggle-hint-btn" onclick="toggleHint('hint_${ex.id}')">
          <i data-lucide="eye" class="hint-icon"></i>
          <span>Xem gợi ý / Lời giải</span>
        </button>
      </div>

      <div class="ex-prompt">
        ${ex.prompt}
      </div>

      ${optionsHtml}

      <!-- Khung dòng kẻ viết tay 14pt line-height 1.5 -->
      <div class="handwriting-workspace">
        <div class="handwriting-title-bar">
          <i data-lucide="pen-tool" class="hw-icon"></i>
          <span>Phần trình bày lời giải của học sinh (Font 14pt • Giãn dòng 1.5 • Dòng kẻ chấm):</span>
        </div>
        ${renderHandwritingBox(storageKey, ex.lines || 8, "Nhấp vào đây để ghi lời giải hoặc in ra viết tay...")}
      </div>

      <!-- Khung gợi ý / đáp án ẩn -->
      <div class="ex-hint-box" id="hint_${ex.id}" style="display:none;">
        <div class="hint-title">
          <i data-lucide="check-circle" class="hint-title-icon"></i>
          <span>Hướng dẫn giải chi tiết & Đáp số: <strong>${ex.correct}</strong></span>
        </div>
        <div class="hint-body">
          ${ex.hint}
        </div>
      </div>
    `;

    exercisesContainer.appendChild(exCard);
  });

  // KaTeX render & Icons
  renderMathInElementSafely(container);
  initIcons();
  attachTextareaAutoSave();
}

// ==========================================
// 5. KHUNG DÒNG KẺ VIẾT TAY (14pt, Line-height 1.5)
// ==========================================
function renderHandwritingBox(storageKey, lineCount, placeholder) {
  const savedText = AppState.savedNotes[storageKey] || "";
  let dottedLinesHtml = "";
  for (let i = 0; i < lineCount; i++) {
    dottedLinesHtml += `<div class="hw-dotted-line"></div>`;
  }

  return `
    <div class="hw-box-wrapper grid-bg">
      <div class="hw-lines-background">
        ${dottedLinesHtml}
      </div>
      <textarea 
        class="hw-interactive-textarea" 
        data-storage-key="${storageKey}" 
        rows="${lineCount}" 
        placeholder="${placeholder}">${savedText}</textarea>
    </div>
  `;
}

function attachTextareaAutoSave() {
  const textareas = document.querySelectorAll(".hw-interactive-textarea");
  textareas.forEach(ta => {
    ta.addEventListener("input", (e) => {
      const key = e.target.getAttribute("data-storage-key");
      const val = e.target.value;
      AppState.savedNotes[key] = val;
      localStorage.setItem("handwriting_all_notes", JSON.stringify(AppState.savedNotes));
    });
  });
}

function loadStoredNotes() {
  try {
    const raw = localStorage.getItem("handwriting_all_notes");
    if (raw) {
      AppState.savedNotes = JSON.parse(raw);
    }
    const name = localStorage.getItem("handwriting_student_name");
    if (name) {
      AppState.studentName = name;
      const nameInput = document.getElementById("studentNameInput");
      if (nameInput) nameInput.value = name;
    }
  } catch (e) {
    console.warn("Could not load stored notes:", e);
  }
}

window.toggleHint = function(hintId) {
  const hintEl = document.getElementById(hintId);
  if (!hintEl) return;
  if (hintEl.style.display === "none") {
    hintEl.style.display = "block";
  } else {
    hintEl.style.display = "none";
  }
};

// ==========================================
// 6. TIỆN ÍCH KATEX & CỠ CHỮ & THEME
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

function setFontSize(size) {
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
  localStorage.setItem("handwriting_font_size", size);
}

function loadSavedFontSize() {
  const saved = localStorage.getItem("handwriting_font_size") || "normal";
  setFontSize(saved);
}
