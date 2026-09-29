# -*- coding: utf-8 -*-
"""
update_exam_with_score_display.py
Adds full, rich, prominent on-page score display after submission:
  - Top on-page Score Result Card with big score circle, grade breakdown, and ranking
  - Header score pill (Score: X / 10)
  - Sidebar score card
  - Auto-scroll to score board
  - Score modal popup
"""

import sys

# 1. Update HTML
html_path = "d:/TOAN/SOẠN TÀI LIỆU DẠY THÊM/HTML/de-kiem-tra-60p-b2.html"

with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

# Add CSS for result banner if not already present
result_css = """
    /* Exam Result Banner */
    .exam-result-banner {
      background: linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(6, 182, 212, 0.08));
      border: 2px solid var(--primary);
      border-radius: var(--radius-lg);
      padding: 24px 28px;
      display: flex;
      flex-direction: column;
      gap: 18px;
      box-shadow: 0 8px 24px rgba(79, 70, 229, 0.15);
      margin-bottom: 24px;
      animation: fadeIn 0.4s ease;
    }

    [data-theme="dark"] .exam-result-banner {
      background: linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(6, 182, 212, 0.12));
      border-color: #818cf8;
    }

    .result-banner-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      border-bottom: 1.5px dashed var(--border-color);
      padding-bottom: 12px;
    }

    .result-banner-body {
      display: flex;
      align-items: center;
      gap: 28px;
      flex-wrap: wrap;
    }

    .score-circle-prominent {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: linear-gradient(135deg, #4f46e5, #06b6d4);
      color: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 24px rgba(79, 70, 229, 0.35);
      flex-shrink: 0;
    }

    .score-circle-prominent .score-num-big {
      font-size: 2.6rem;
      font-weight: 800;
      line-height: 1;
    }

    .score-circle-prominent .score-scale {
      font-size: 0.8rem;
      font-weight: 700;
      opacity: 0.9;
    }

    .result-summary-col {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 260px;
    }

    .result-rank-title {
      font-size: 1.3rem;
      font-weight: 800;
      color: var(--primary);
    }

    .result-rank-desc {
      font-size: 0.95rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }

    .result-score-chips {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 10px;
      margin-top: 6px;
    }

    .score-chip {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      padding: 8px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.88rem;
    }

    .score-chip strong {
      font-size: 1rem;
      color: var(--primary);
    }

    .result-banner-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 4px;
    }

    /* Header Score Badge Pill */
    .header-score-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #ecfdf5;
      color: #047857;
      border: 1.5px solid #10b981;
      padding: 6px 16px;
      border-radius: 20px;
      font-weight: 800;
      font-size: 0.98rem;
      box-shadow: 0 2px 8px rgba(16, 185, 129, 0.2);
    }

    [data-theme="dark"] .header-score-pill {
      background: rgba(16, 185, 129, 0.2);
      color: #34d399;
      border-color: #34d399;
    }

    /* Sidebar Score Card */
    .sidebar-score-card {
      background: linear-gradient(135deg, rgba(79, 70, 229, 0.12), rgba(6, 182, 212, 0.1));
      border: 1.5px solid var(--primary);
      border-radius: 12px;
      padding: 14px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
"""

if "/* Exam Result Banner */" not in html:
    html = html.replace("/* Print Stylesheet */", result_css + "\n    /* Print Stylesheet */")

# Add Header Score Placeholder if not present
if 'id="headerScoreWrap"' not in html:
    header_btn_old = """        <!-- Submit Button in Header -->
        <button id="headerSubmitBtn" class="btn btn-primary submit-action-btn" style="background:linear-gradient(135deg, #e11d48, #be123c); border-color:transparent;">
          <i data-lucide="send" class="btn-icon"></i>
          <span>Nộp bài thi</span>
        </button>"""
    header_btn_new = """        <!-- Header Score Badge (Visible after submission) -->
        <div id="headerScoreWrap" style="display:none;">
          <div class="header-score-pill" title="Điểm số đạt được">
            <i data-lucide="award"></i>
            <span>ĐIỂM: <strong id="headerScoreVal">0.0</strong>/10</span>
          </div>
        </div>

        <!-- Submit Button in Header -->
        <button id="headerSubmitBtn" class="btn btn-primary submit-action-btn" style="background:linear-gradient(135deg, #e11d48, #be123c); border-color:transparent;">
          <i data-lucide="send" class="btn-icon"></i>
          <span>Nộp bài thi</span>
        </button>"""
    html = html.replace(header_btn_old, header_btn_new)

# Add Result Banner inside #examMainContent
if 'id="examResultBanner"' not in html:
    main_content_old = """      <!-- Left Column: All Questions & Content -->
      <main class="exam-main-content" id="examMainContent">"""
    
    main_content_new = """      <!-- Left Column: All Questions & Content -->
      <main class="exam-main-content" id="examMainContent">
        
        <!-- On-Page Score Result Banner (Visible after submission) -->
        <div class="exam-result-banner" id="examResultBanner" style="display:none;">
          <div class="result-banner-top">
            <div style="display:flex; align-items:center; gap:8px; font-weight:800; font-size:1.1rem; color:#10b981;">
              <i data-lucide="check-circle"></i>
              <span>KẾT QUẢ BÀI KIỂM TRA ĐÃ NỘP & CHẤM ĐIỂM HOÀN TẤT</span>
            </div>
            <span style="font-size:0.85rem; color:var(--text-muted); font-weight:600;" id="bannerSubmitTime">Thời gian nộp: 29/09/2026</span>
          </div>

          <div class="result-banner-body">
            <div class="score-circle-prominent">
              <span class="score-num-big" id="bannerScoreNum">0.0</span>
              <span class="score-scale">/ 10 ĐIỂM</span>
            </div>

            <div class="result-summary-col">
              <h3 class="result-rank-title" id="bannerRankTitle">Xếp loại: Xuất sắc</h3>
              <p class="result-rank-desc" id="bannerRankDesc">Học sinh nắm vững toàn bộ kiến thức hệ bất phương trình bậc nhất hai ẩn và các bài toán thực tế tối ưu hóa.</p>
              
              <div class="result-score-chips">
                <div class="score-chip">
                  <span>Phần I (4 lựa chọn):</span>
                  <strong id="bannerPart1">0 / 4.0 đ</strong>
                </div>
                <div class="score-chip">
                  <span>Phần II (Đúng/Sai):</span>
                  <strong id="bannerPart2">0 / 3.0 đ</strong>
                </div>
                <div class="score-chip">
                  <span>Phần III (Trả lời ngắn):</span>
                  <strong id="bannerPart3">0 / 2.0 đ</strong>
                </div>
                <div class="score-chip">
                  <span>Phần IV (Tự luận):</span>
                  <strong id="bannerPart4">1.0 / 1.0 đ</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="result-banner-actions">
            <button type="button" class="btn btn-primary" onclick="showScoreModalAgain()">
              <i data-lucide="bar-chart-2"></i> Xem phân tích chi tiết
            </button>
            <button type="button" class="btn btn-secondary" onclick="window.print()">
              <i data-lucide="printer"></i> In đề kèm lời giải
            </button>
            <button type="button" class="btn btn-secondary" onclick="resetExam()">
              <i data-lucide="rotate-ccw"></i> Làm lại đề thi
            </button>
          </div>
        </div>"""
    html = html.replace(main_content_old, main_content_new)

# Add Sidebar Score Card placeholder
if 'id="sidebarScoreArea"' not in html:
    palette_head_old = """      <!-- Right Column: Sticky Question Navigator -->
      <aside class="sticky-navigator">
        <div class="nav-head">"""
    palette_head_new = """      <!-- Right Column: Sticky Question Navigator -->
      <aside class="sticky-navigator">
        
        <!-- Sidebar Score Card (Visible after submission) -->
        <div class="sidebar-score-card" id="sidebarScoreArea" style="display:none;">
          <div style="font-size:0.8rem; font-weight:800; color:var(--primary); text-transform:uppercase;">Tổng kết điểm thi</div>
          <div style="font-size:2.2rem; font-weight:800; color:var(--primary); line-height:1;" id="sidebarScoreVal">0.0</div>
          <div style="font-size:0.8rem; font-weight:700; color:#10b981;" id="sidebarRankVal">Xếp loại: Giỏi</div>
        </div>

        <div class="nav-head">"""
    html = html.replace(palette_head_old, palette_head_new)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html)

print("Updated de-kiem-tra-60p-b2.html successfully!")
