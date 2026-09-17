# -*- coding: utf-8 -*-
"""
Script tạo trang web Bản Viết Tay cho Bài 2: Hệ bất phương trình bậc nhất hai ẩn (Toán 10)
Bao gồm:
  - PHẦN I: TÓM TẮT LÝ THUYẾT TRỌNG TÂM
      + Mục 1: Định nghĩa Hệ bất phương trình bậc nhất hai ẩn & Nghiệm -> 10 dòng trống viết tay / ghi chú ví dụ
      + Mục 2: Phương pháp biểu diễn hình học miền nghiệm của Hệ BPT (Bảng quy trình 2 bước kèm 2 hình vẽ trực quan) -> 10 dòng trống viết tay / ghi chú ví dụ
      + Mục 3: Bài toán tối ưu & Giá trị lớn nhất - nhỏ nhất trên miền đa giác (Quy hoạch tuyến tính) -> 10 dòng trống viết tay / ghi chú ví dụ
  - PHẦN II: BÀI TẬP RÈN LUYỆN (37 câu hỏi chia làm 4 dạng chuẩn GDPT 2018):
      + Dạng 1: Câu hỏi trắc nghiệm nhiều phương án lựa chọn (Câu 1 -> 16)
      + Dạng 2: Câu hỏi trắc nghiệm đúng sai (Câu 17 -> 21)
      + Dạng 3: Câu hỏi trắc nghiệm trả lời ngắn (Câu 22 -> 30)
      + Dạng 4: Bài tập tự luận SGK và SBT (Câu 31 -> 37)

Yêu cầu định dạng đặc biệt từ người dùng:
  - Phần tự luận dòng kẻ:
      + line-height: 1.5
      + font-size: 14pt (cho chữ viết / text input / ô dòng kẻ)
      + Dòng kẻ rõ ràng, chuẩn in ấn A4 và hỗ trợ làm bài trực tiếp trên máy hoặc in ra viết tay.
  - Mỗi mục lý thuyết để 10 dòng trống để giáo viên/học sinh tự thêm ví dụ minh họa vào.
"""

import os
import re

html_template_head = """<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bản Viết Tay: Bài 2 - Hệ Bất Phương Trình Bậc Nhất Hai Ẩn (Toán 10)</title>
  <meta name="description" content="Bản viết tay tự luận chuẩn sư phạm môn Toán 10 Bài 2: Hệ bất phương trình bậc nhất hai ẩn, đầy đủ lý thuyết và 37 bài tập, phần tự luận dòng kẻ giãn dòng 1.5, font size 14pt.">
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&family=Caveat:wght@600&display=swap" rel="stylesheet">
  
  <!-- KaTeX for crisp Math rendering -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>

  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    :root {
      --font-scale: 1;
      --bg-page: #f0f4f8;
      --bg-surface: #ffffff;
      --border-box: #e11d48;
      --text-primary: #0f172a;
      --text-secondary: #334155;
      --text-muted: #64748b;
      --primary: #4f46e5;
      --primary-light: #eef2ff;
      --grid-line: rgba(59, 130, 246, 0.15);
      --dotted-line: #cbd5e1;
      --write-font-size: 14pt;
      --write-line-height: 1.5;
      /* Row height = 14pt * 1.5 + padding/border allowance ~= 34px */
      --write-row-height: 34px;
    }

    [data-theme="dark"] {
      --bg-page: #090d16;
      --bg-surface: #111827;
      --border-box: #fb7185;
      --text-primary: #f8fafc;
      --text-secondary: #cbd5e1;
      --text-muted: #94a3b8;
      --primary: #6366f1;
      --primary-light: rgba(99, 102, 241, 0.18);
      --grid-line: rgba(59, 130, 246, 0.08);
      --dotted-line: #334155;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: var(--bg-page);
      color: var(--text-primary);
      line-height: 1.6;
      font-size: calc(15px * var(--font-scale));
      min-height: 100vh;
      transition: background-color 0.2s, color 0.2s;
    }

    /* Math Squared Grid Background (Giấy kẻ ô ly caro vuông) */
    .grid-bg {
      background-size: 24px 24px;
      background-image: 
        linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
        linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px);
    }

    .katex {
      font-size: 1.15em !important;
    }

    .container {
      max-width: 980px;
      margin: 0 auto;
      padding: 20px 24px 60px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    /* Top Sticky Control Bar */
    .top-actions-bar {
      position: sticky;
      top: 14px;
      z-index: 100;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(226, 232, 240, 0.9);
      border-radius: 12px;
      padding: 10px 20px;
      margin: 14px auto 0;
      max-width: 980px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }

    [data-theme="dark"] .top-actions-bar {
      background: rgba(17, 24, 39, 0.92);
      border-color: rgba(55, 65, 81, 0.9);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
    }

    .bar-left {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      font-size: 0.98rem;
      color: #e11d48;
    }

    .bar-right {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .action-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px;
      border-radius: 8px;
      border: 1px solid #cbd5e1;
      background: var(--bg-surface);
      color: var(--text-secondary);
      font-weight: 600;
      font-size: 0.85rem;
      cursor: pointer;
      transition: all 0.2s;
    }

    .action-btn:hover {
      background: var(--primary-light);
      border-color: var(--primary);
      color: var(--primary);
      transform: translateY(-1px);
    }

    .action-btn.primary {
      background: linear-gradient(135deg, #e11d48, #be123c);
      color: #ffffff;
      border-color: transparent;
      box-shadow: 0 4px 12px rgba(225, 29, 72, 0.3);
    }

    .action-btn.primary:hover {
      box-shadow: 0 6px 16px rgba(225, 29, 72, 0.45);
      transform: translateY(-1px);
    }

    /* Sheet Header Card */
    .sheet-header-card {
      background: var(--bg-surface);
      border: 2px solid var(--border-box);
      border-radius: 12px;
      padding: 20px 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
    }

    .sheet-top-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1.5px dashed #cbd5e1;
      padding-bottom: 14px;
    }

    .school-info h4 {
      font-size: 0.95rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .school-info p {
      font-size: 0.85rem;
      color: var(--text-secondary);
      font-style: italic;
    }

    .exam-title-box {
      text-align: right;
    }

    .exam-title-box h1 {
      font-size: 1.25rem;
      font-weight: 800;
      color: #e11d48;
      text-transform: uppercase;
    }

    .exam-title-box p {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--text-secondary);
    }

    .student-fields-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.2fr;
      gap: 12px;
      font-size: 0.95rem;
      font-weight: 600;
    }

    .field-item {
      display: flex;
      align-items: center;
      gap: 6px;
      border-bottom: 1px dotted #64748b;
      padding-bottom: 4px;
    }

    .field-input {
      border: none;
      background: transparent;
      outline: none;
      font-family: inherit;
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--text-primary);
      width: 100%;
    }

    /* Section Banner */
    .section-banner {
      background: linear-gradient(135deg, #e11d48, #be123c);
      color: #ffffff;
      padding: 12px 20px;
      border-radius: 10px;
      font-size: 1.08rem;
      font-weight: 800;
      letter-spacing: 0.02em;
      box-shadow: 0 4px 10px rgba(225, 29, 72, 0.25);
      margin-top: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-banner.theory {
      background: linear-gradient(135deg, #0d9488, #0f766e);
      box-shadow: 0 4px 10px rgba(13, 148, 136, 0.25);
    }

    /* Theory Block */
    .theory-block {
      background: var(--bg-surface);
      border: 1.8px solid #0d9488;
      border-radius: 10px;
      padding: 20px 24px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .theory-header {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: calc(1.1rem * var(--font-scale));
      font-weight: 800;
      color: #0f766e;
      border-bottom: 1px dashed #99f6e4;
      padding-bottom: 8px;
    }

    [data-theme="dark"] .theory-header {
      color: #2dd4bf;
      border-color: #115e59;
    }

    .theory-content {
      font-size: calc(1.02rem * var(--font-scale));
      line-height: 1.7;
      color: var(--text-primary);
    }

    /* Theory Steps Table */
    .theory-table {
      width: 100%;
      border-collapse: collapse;
      margin: 10px 0;
      background: rgba(240, 253, 250, 0.5);
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #ccfbf1;
    }

    [data-theme="dark"] .theory-table {
      background: rgba(19, 78, 74, 0.2);
      border-color: #115e59;
    }

    .theory-table th, .theory-table td {
      border: 1px solid #cbd5e1;
      padding: 10px 14px;
      text-align: left;
      vertical-align: middle;
    }

    [data-theme="dark"] .theory-table th, [data-theme="dark"] .theory-table td {
      border-color: #334155;
    }

    .theory-table th {
      background: #0d9488;
      color: #ffffff;
      font-weight: 700;
      font-size: 0.95rem;
    }

    .theory-diagram-cell {
      text-align: center;
      min-width: 220px;
    }

    .theory-diagram-cell img {
      max-width: 260px;
      height: auto;
      border-radius: 6px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }

    /* Question Box */
    .question-block {
      background: var(--bg-surface);
      border: 1.8px solid var(--border-box);
      border-radius: 10px;
      padding: 18px 22px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .question-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
    }

    .question-title {
      font-size: calc(1.08rem * var(--font-scale));
      font-weight: 800;
      color: #e11d48;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .question-text {
      font-size: calc(1.05rem * var(--font-scale));
      font-weight: 500;
      color: var(--text-primary);
      line-height: 1.7;
    }

    /* Options Grid (A, B, C, D) */
    .options-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px 24px;
      margin-top: 4px;
      font-size: calc(1rem * var(--font-scale));
    }

    .options-grid.four-cols {
      grid-template-columns: repeat(4, 1fr);
    }

    .options-grid.one-col {
      grid-template-columns: 1fr;
    }

    .option-cell {
      display: flex;
      align-items: baseline;
      gap: 8px;
      line-height: 1.5;
    }

    .option-label {
      font-weight: 800;
      color: #e11d48;
    }

    /* True/False Statements Grid */
    .tf-grid {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 6px;
    }

    .tf-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      border-radius: 6px;
      background: rgba(241, 245, 249, 0.6);
      border: 1px solid #e2e8f0;
      font-size: calc(1rem * var(--font-scale));
    }

    [data-theme="dark"] .tf-row {
      background: rgba(30, 41, 59, 0.6);
      border-color: #334155;
    }

    .tf-text {
      flex-grow: 1;
      line-height: 1.5;
    }

    .tf-badge-group {
      display: flex;
      gap: 8px;
      font-weight: 700;
      font-size: 0.85rem;
    }

    .tf-badge {
      padding: 3px 8px;
      border-radius: 4px;
      border: 1.2px solid #cbd5e1;
      background: var(--bg-surface);
      color: var(--text-secondary);
      user-select: none;
    }

    /* Short Answer Box */
    .short-ans-box {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      font-size: 1.02rem;
      color: #e11d48;
      padding: 10px 14px;
      background: #fdf2f8;
      border: 1px dashed #f43f5e;
      border-radius: 8px;
      width: fit-content;
    }

    [data-theme="dark"] .short-ans-box {
      background: rgba(225, 29, 72, 0.1);
      border-color: #fb7185;
    }

    /* Question Diagrams / Images */
    .question-diagram-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
      padding: 12px;
      background: #fdf2f8;
      border: 1px dashed #f43f5e;
      border-radius: 8px;
    }

    [data-theme="dark"] .question-diagram-box {
      background: rgba(225, 29, 72, 0.1);
      border-color: #fb7185;
    }

    .question-diagram-box img {
      max-width: 440px;
      max-height: 320px;
      width: auto;
      height: auto;
      border-radius: 6px;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));
    }

    .diagram-options-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin: 10px 0;
    }

    .diagram-option-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 8px;
      background: #ffffff;
    }

    .diagram-option-card img {
      max-width: 100%;
      height: auto;
      max-height: 180px;
    }

    /* HANDWRITING SECTION: Giãn dòng 1.5 & Font Size 14pt */
    .handwriting-section {
      margin-top: 10px;
      border-top: 1.5px dashed #cbd5e1;
      padding-top: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .handwriting-section.theory-note {
      border-top: 1.5px dashed #5eead4;
    }

    .handwriting-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.92rem;
      font-weight: 700;
      color: #e11d48;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      margin-bottom: 4px;
    }

    .handwriting-header.theory-note {
      color: #0f766e;
    }

    [data-theme="dark"] .handwriting-header.theory-note {
      color: #2dd4bf;
    }

    .lines-container {
      display: flex;
      flex-direction: column;
      border: 1px solid rgba(59, 130, 246, 0.25);
      border-radius: 8px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.75);
    }

    [data-theme="dark"] .lines-container {
      background: rgba(17, 24, 39, 0.75);
      border-color: rgba(99, 102, 241, 0.25);
    }

    .lines-container.theory-lines {
      border-color: rgba(13, 148, 136, 0.35);
      background: rgba(240, 253, 250, 0.6);
    }

    [data-theme="dark"] .lines-container.theory-lines {
      background: rgba(15, 118, 110, 0.15);
      border-color: rgba(45, 212, 191, 0.3);
    }

    /* Từng dòng kẻ tự luận: font-size 14pt, line-height 1.5 */
    .write-row {
      height: var(--write-row-height);
      border-bottom: 1px dotted var(--dotted-line);
      display: flex;
      align-items: center;
      padding: 0 12px;
      position: relative;
      font-size: var(--write-font-size);
      line-height: var(--write-line-height);
    }

    .write-row:last-child {
      border-bottom: none;
    }

    .write-row .line-num {
      width: 26px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.82rem;
      color: #94a3b8;
      user-select: none;
      flex-shrink: 0;
    }

    .write-row-input {
      flex-grow: 1;
      height: 100%;
      border: none;
      background: transparent;
      outline: none;
      font-family: 'Caveat', 'Segoe Print', cursive, sans-serif;
      font-size: var(--write-font-size);
      line-height: var(--write-line-height);
      color: var(--text-primary);
      padding: 0 6px;
    }

    .write-row-input::placeholder {
      font-family: 'Inter', sans-serif;
      font-size: 0.85rem;
      color: #94a3b8;
      opacity: 0.5;
    }

    /* Print Formatting (A4 Portrait) */
    @media print {
      @page {
        size: A4 portrait;
        margin: 12mm 15mm 12mm 15mm;
      }

      body {
        background: #ffffff !important;
        color: #000000 !important;
        font-size: 11pt !important;
      }

      .top-actions-bar {
        display: none !important;
      }

      .container {
        max-width: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
        gap: 12px !important;
      }

      .sheet-header-card {
        border: 1.5px solid #000 !important;
        box-shadow: none !important;
        padding: 12px 16px !important;
        margin-bottom: 10px !important;
      }

      .section-banner {
        background: #000000 !important;
        color: #ffffff !important;
        box-shadow: none !important;
        padding: 6px 12px !important;
        font-size: 10pt !important;
        break-after: avoid;
      }

      .theory-block, .question-block {
        border: 1.2px solid #000000 !important;
        box-shadow: none !important;
        padding: 12px 16px !important;
        margin-bottom: 14px !important;
        break-inside: avoid;
        page-break-inside: avoid;
      }

      .theory-header, .question-title, .option-label, .handwriting-header {
        color: #000000 !important;
      }

      .lines-container {
        border: 1px solid #000000 !important;
        background: #ffffff !important;
      }

      .write-row {
        border-bottom: 1px dotted #888888 !important;
        height: 32px !important;
        font-size: 14pt !important;
        line-height: 1.5 !important;
      }

      .write-row .line-num {
        color: #666666 !important;
        font-size: 9pt !important;
      }
    }
  </style>
</head>
<body class="grid-bg">

  <!-- Top Sticky Actions Bar -->
  <div class="top-actions-bar">
    <div class="bar-left">
      <i data-lucide="book-open"></i>
      <span>BẢN VIẾT TAY: BÀI 2 - HỆ BPT BẬC NHẤT HAI ẨN (LÝ THUYẾT + 37 BÀI)</span>
    </div>
    <div class="bar-right">
      <a href="index.html" class="action-btn" title="Chuyển sang Đề thi trắc nghiệm 15 phút" style="text-decoration:none;">
        <i data-lucide="timer"></i>
        <span>Đề trắc nghiệm 15p</span>
      </a>
      <a href="ban-viet-tay.html" class="action-btn" title="Mở Bản viết tay Bài 1" style="text-decoration:none;">
        <i data-lucide="file-text"></i>
        <span>Bản VT Bài 1</span>
      </a>
      <button id="toggleGridBtn" class="action-btn" title="Bật / Tắt giấy kẻ ô ly caro">
        <i data-lucide="grid"></i>
        <span>Lưới ô ly</span>
      </button>
      <button id="themeToggleBtn" class="action-btn" title="Đổi giao diện Sáng / Tối">
        <i data-lucide="moon" id="themeIcon"></i>
      </button>
      <button onclick="window.print()" class="action-btn primary" title="In ra giấy hoặc xuất file PDF">
        <i data-lucide="printer"></i>
        <span>In / Xuất PDF</span>
      </button>
    </div>
  </div>

  <div class="container">
    
    <!-- Sheet Header -->
    <div class="sheet-header-card">
      <div class="sheet-top-title">
        <div class="school-info">
          <h4>SỞ GD&ĐT • TRƯỜNG THPT: ....................................................</h4>
          <p>Tổ chuyên môn: Toán - Tin học • Năm học 2026</p>
        </div>
        <div class="exam-title-box">
          <h1>BẢN VIẾT TAY TỰ LUẬN MÔN TOÁN 10</h1>
          <p>Bài 2: Hệ bất phương trình bậc nhất hai ẩn (Lý thuyết & Bài tập)</p>
        </div>
      </div>

      <div class="student-fields-grid">
        <div class="field-item">
          <span>Họ tên:</span>
          <input type="text" class="field-input" placeholder="Nhập tên học sinh...">
        </div>
        <div class="field-item">
          <span>Lớp:</span>
          <input type="text" class="field-input" placeholder="10A...">
        </div>
        <div class="field-item">
          <span>Điểm số:</span>
          <input type="text" class="field-input" placeholder="... / 10">
        </div>
        <div class="field-item">
          <span>Lời phê:</span>
          <input type="text" class="field-input" placeholder="................................">
        </div>
      </div>
    </div>
"""

def generate_lines(prefix_id, line_count=10, is_theory=False):
    container_class = "lines-container theory-lines" if is_theory else "lines-container"
    lines_html = f'<div class="{container_class}">'
    for l in range(1, line_count + 1):
        lines_html += f'''
          <div class="write-row">
            <span class="line-num">{l:02d}</span>
            <input type="text" class="write-row-input" placeholder="...">
          </div>'''
    lines_html += '</div>'
    return lines_html

# PHẦN I: TÓM TẮT LÝ THUYẾT VỚI 10 DÒNG KẺ MỖI MỤC
html_theory = """
    <!-- ============================== -->
    <!-- PHẦN I: TÓM TẮT LÝ THUYẾT TRỌNG TÂM -->
    <!-- ============================== -->
    <div class="section-banner theory">
      <i data-lucide="bookmark-check"></i>
      <span>PHẦN I: TÓM TẮT LÝ THUYẾT TRỌNG TÂM (MỖI MỤC 10 DÒNG GHI CHÚ VÍ DỤ)</span>
    </div>

    <!-- Mục 1: Khái niệm hệ bất phương trình bậc nhất hai ẩn -->
    <div class="theory-block" id="ly-thuyet-1">
      <div class="theory-header">
        <i data-lucide="sparkles" style="width:20px;height:20px;"></i>
        <span>1. Khái niệm Hệ bất phương trình bậc nhất hai ẩn</span>
      </div>
      <div class="theory-content">
        <p>• <b>Hệ bất phương trình bậc nhất hai ẩn</b> $x, y$ là một hệ gồm hai hay nhiều bất phương trình bậc nhất hai ẩn $x, y$.</p>
        <p>• <b>Dạng tổng quát:</b></p>
        <p style="text-align:center; margin:8px 0; font-size:1.08rem;">
          $\\left\\{ \\begin{array}{l} a_1 x + b_1 y \\le c_1 \\\\ a_2 x + b_2 y \\le c_2 \\\\ \\dots \\\\ a_k x + b_k y \\le c_k \\end{array} \\right.$ &nbsp;&nbsp;(dấu $\\le$ có thể thay bởi $<$, $\\ge$, $>$)
        </p>
        <p>• <b>Nghiệm của hệ:</b> Mỗi cặp số $(x_0; y_0)$ đồng thời là nghiệm của <i>tất cả</i> các bất phương trình trong hệ được gọi là một <b>nghiệm</b> của hệ bất phương trình đó.</p>
        <p>• <b>Miền nghiệm của hệ:</b> Là tập hợp các điểm $M(x_0; y_0)$ trong mặt phẳng toạ độ $Oxy$ sao cho $(x_0; y_0)$ là nghiệm của hệ bất phương trình. Miền nghiệm của hệ chính là <i>phần giao</i> các miền nghiệm của các bất phương trình trong hệ.</p>
      </div>
      <div class="handwriting-section theory-note">
        <div class="handwriting-header theory-note">
          <span>✍️ Không gian tự thêm ví dụ mẫu / Ghi chú Mục 1 (Cỡ chữ 14pt &bull; Giãn dòng 1.5 &bull; Đúng 10 dòng):</span>
        </div>
        """ + generate_lines("theory_1", 10, is_theory=True) + """
      </div>
    </div>

    <!-- Mục 2: Biểu diễn hình học miền nghiệm của hệ -->
    <div class="theory-block" id="ly-thuyet-2">
      <div class="theory-header">
        <i data-lucide="layers" style="width:20px;height:20px;"></i>
        <span>2. Biểu diễn hình học miền nghiệm của Hệ bất phương trình bậc nhất hai ẩn</span>
      </div>
      <div class="theory-content">
        <p>Để biểu diễn miền nghiệm của hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng toạ độ $Oxy$, ta thực hiện theo 2 bước quy chuẩn sau:</p>
        <table class="theory-table">
          <thead>
            <tr>
              <th style="width:18%;">Thứ tự</th>
              <th style="width:47%;">Nội dung thực hiện</th>
              <th style="width:35%; text-align:center;">Hình vẽ minh hoạ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>Bước 1</b></td>
              <td>
                Vẽ các đường thẳng bờ tương ứng trên cùng một hệ trục toạ độ $Oxy$:<br>
                • $d_1: a_1 x + b_1 y = c_1$<br>
                • $d_2: a_2 x + b_2 y = c_2$<br>
                • $d_3: a_3 x + b_3 y = c_3$
              </td>
              <td class="theory-diagram-cell">
                <img src="images_b2/theory_step1.png" alt="Bước 1: Vẽ các đường thẳng bờ">
              </td>
            </tr>
            <tr>
              <td><b>Bước 2</b></td>
              <td>
                Biểu diễn miền nghiệm của từng bất phương trình bằng cách <b>gạch bỏ</b> nửa mặt phẳng không thuộc miền nghiệm của nó.<br>
                <i>(Xác định bằng cách lấy điểm thử thông thường là gốc toạ độ $O(0; 0)$ nếu đường thẳng không đi qua $O$).</i><br><br>
                <b>Kết luận:</b> Phần mặt phẳng <b>không bị gạch</b> (kể cả bờ hoặc không kể bờ tuỳ theo dấu của hệ) chính là miền nghiệm cần tìm.
              </td>
              <td class="theory-diagram-cell">
                <img src="images_b2/theory_step2.png" alt="Bước 2: Gạch bỏ phần không thuộc miền nghiệm">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="handwriting-section theory-note">
        <div class="handwriting-header theory-note">
          <span>✍️ Không gian tự thêm ví dụ mẫu / Ghi chú Mục 2 (Cỡ chữ 14pt &bull; Giãn dòng 1.5 &bull; Đúng 10 dòng):</span>
        </div>
        """ + generate_lines("theory_2", 10, is_theory=True) + """
      </div>
    </div>

    <!-- Mục 3: Ứng dụng giải bài toán tối ưu (Quy hoạch tuyến tính) -->
    <div class="theory-block" id="ly-thuyet-3">
      <div class="theory-header">
        <i data-lucide="trending-up" style="width:20px;height:20px;"></i>
        <span>3. Ứng dụng tìm Giá trị lớn nhất / Giá trị nhỏ nhất (Bài toán tối ưu)</span>
      </div>
      <div class="theory-content">
        <p>• <b>Định lý cơ bản về cực trị quy hoạch tuyến tính:</b> Biểu thức bậc nhất $F(x; y) = ax + by$ ($a, b$ là các hằng số không đồng thời bằng 0) đạt giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) trên một miền đa giác $A_1 A_2 \\dots A_n$ (kể cả biên) tại <b>một trong các đỉnh</b> của đa giác đó.</p>
        <p>• <b>Thuật toán 3 bước tìm GTLN / GTNN của $F(x; y)$:</b></p>
        <p style="padding-left:14px;">
          <b>Bước 1:</b> Xác định miền đa giác nghiệm $S$ của hệ bất phương trình điều kiện.<br>
          <b>Bước 2:</b> Tìm toạ độ tất cả các đỉnh $A_1, A_2, \\dots, A_n$ của đa giác $S$ (bằng cách giải hệ phương trình hai đường thẳng giao nhau).<br>
          <b>Bước 3:</b> Tính các giá trị $F(A_1), F(A_2), \\dots, F(A_n)$. Số lớn nhất trong các giá trị này là GTLN của $F$, số nhỏ nhất là GTNN của $F$.
        </p>
      </div>
      <div class="handwriting-section theory-note">
        <div class="handwriting-header theory-note">
          <span>✍️ Không gian tự thêm ví dụ mẫu / Ghi chú Mục 3 (Cỡ chữ 14pt &bull; Giãn dòng 1.5 &bull; Đúng 10 dòng):</span>
        </div>
        """ + generate_lines("theory_3", 10, is_theory=True) + """
      </div>
    </div>
"""

# Construct 37 questions data
questions_b2 = [
    # ==============================
    # DẠNG 1: CÂU 1 -> 16 (TRẮC NGHIỆM NHIỀU LỰA CHỌN)
    # ==============================
    {
        "type": "dang1",
        "num": 1,
        "prompt": "Cặp số $(x; y)$ nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases} 2x - y \\ge 4 \\\\ x - y + 1 < 0 \\end{cases}$?",
        "options": [
            ("A", "$(5; 6)$"),
            ("B", "$(6; 8)$"),
            ("C", "$(1; 4)$"),
            ("D", "$(-3; 1)$")
        ],
        "four_cols": True,
        "img": None,
        "line_count": 8
    },
    {
        "type": "dang1",
        "num": 2,
        "prompt": "Hệ bất phương trình nào là hệ bất phương trình bậc nhất hai ẩn?",
        "options": [
            ("A", "$\\begin{cases} x^2 + y^2 > 4 \\\\ 4x + y \\le 10 \\end{cases}$"),
            ("B", "$\\begin{cases} x + 7y \\ge 9 \\\\ \\dfrac{2}{x} - y \\le 5 \\end{cases}$"),
            ("C", "$\\begin{cases} x + y^2 > 4 \\\\ 3x + 2y \\le 6 \\end{cases}$"),
            ("D", "$\\begin{cases} 3x + 7y \\le 11 \\\\ 5x - y < 5 \\end{cases}$")
        ],
        "four_cols": False,
        "img": None,
        "line_count": 8
    },
    {
        "type": "dang1",
        "num": 3,
        "prompt": "Hệ bất phương trình bậc nhất hai ẩn $x, y$ là",
        "options": [
            ("A", "$\\begin{cases} 3x - y^2 + 5 < 0 \\\\ 2x - y + 3 \\ge 0 \\end{cases}$"),
            ("B", "$\\begin{cases} 4x - 3y - 1 \\ge 0 \\\\ 2x - y + 4 < 0 \\end{cases}$"),
            ("C", "$\\begin{cases} xz + 3y - 6 < 0 \\\\ 2xy + yz^3 + 4 > 0 \\end{cases}$"),
            ("D", "$\\begin{cases} x + 3xy - 5 < 0 \\\\ 2x + y - 3 < 0 \\end{cases}$")
        ],
        "four_cols": False,
        "img": None,
        "line_count": 8
    },
    {
        "type": "dang1_q4",
        "num": 4,
        "prompt": "Biểu diễn hình học miền nghiệm hệ bất phương trình $\\begin{cases} 2x - y + 2 \\le 0 \\\\ 2x + 3y - 6 \\le 0 \\end{cases}$ là (phần không bị gạch):",
        "diagrams": [
            ("A", "images_b2/xref_33.png", "Hình 1"),
            ("B", "images_b2/xref_40.png", "Hình 2"),
            ("C", "images_b2/xref_29.png", "Hình 3"),
            ("D", "images_b2/xref_36.png", "Hình 4")
        ],
        "line_count": 8
    },
    {
        "type": "dang1",
        "num": 5,
        "prompt": "Cặp số nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases} 2x + 3y + 4 > 0 \\\\ x - 2y + 3 \\le 0 \\end{cases}$?",
        "options": [
            ("A", "$(1; 1)$"),
            ("B", "$(3; 1)$"),
            ("C", "$(-2; -1)$"),
            ("D", "$(-2; 1)$")
        ],
        "four_cols": True,
        "img": None,
        "line_count": 8
    },
    {
        "type": "dang1",
        "num": 6,
        "prompt": "Cặp số nào sau đây là nghiệm của hệ bất phương trình $\\begin{cases} -4x + y - 4 < 0 \\\\ 3x - 2y - 2 > 0 \\\\ x + 3y + 3 < 0 \\end{cases}$?",
        "options": [
            ("A", "$(1; 2)$"),
            ("B", "$(4; -4)$"),
            ("C", "$(3; -7)$"),
            ("D", "$(2; 1)$")
        ],
        "four_cols": True,
        "img": None,
        "line_count": 8
    },
    {
        "type": "dang1",
        "num": 7,
        "prompt": "Phần không được tô màu trong hình vẽ sau đây là miền nghiệm của hệ bất phương trình nào?",
        "options": [
            ("A", "$\\begin{cases} 2x - y + 1 < 0 \\\\ 3x + y - 6 > 0 \\end{cases}$"),
            ("B", "$\\begin{cases} 2x - y + 1 > 0 \\\\ 3x + y - 6 \\ge 0 \\end{cases}$"),
            ("C", "$\\begin{cases} 2x - y + 1 < 0 \\\\ 3x + y - 6 < 0 \\end{cases}$"),
            ("D", "$\\begin{cases} 2x - y + 1 > 0 \\\\ 3x + y - 6 < 0 \\end{cases}$")
        ],
        "four_cols": False,
        "img": "images_b2/xref_47.png",
        "line_count": 8
    },
    {
        "type": "dang1",
        "num": 8,
        "prompt": "Miền không bị gạch chéo là miền nghiệm của hệ bất phương trình nào dưới đây?",
        "options": [
            ("A", "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x - y \\le 4 \\end{cases}$"),
            ("B", "$\\begin{cases} x \\le 0 \\\\ y \\ge 0 \\\\ 2x + y \\le 4 \\end{cases}$"),
            ("C", "$\\begin{cases} x \\ge 0 \\\\ y \\le 0 \\\\ 2x - y \\le 4 \\end{cases}$"),
            ("D", "$\\begin{cases} x \\ge 0 \\\\ y \\ge 0 \\\\ 2x + y \\le 4 \\end{cases}$")
        ],
        "four_cols": False,
        "img": "images_b2/xref_52.png",
        "line_count": 8
    },
    {
        "type": "dang1",
        "num": 9,
        "prompt": "Một hộ nông dân dự định trồng cà phê và tiêu trên diện tích $8\\text{ ha}$. Nếu trồng cà phê thì cần $20$ công và thu $120$ triệu đồng trên mỗi ha, nếu trồng tiêu thì cần $30$ công và thu $170$ triệu đồng trên mỗi ha. Hỏi cần trồng mỗi loại cây trên với diện tích là bao nhiêu để thu về số tiền lớn nhất, biết rằng tổng số công không quá $180$?",
        "options": [
            ("A", "$8\\text{ ha}$ cà phê"),
            ("B", "$6\\text{ ha}$ cà phê và $2\\text{ ha}$ tiêu"),
            ("C", "$7\\text{ ha}$ cà phê và $1\\text{ ha}$ tiêu"),
            ("D", "$4\\text{ ha}$ cà phê và $3\\text{ ha}$ tiêu")
        ],
        "four_cols": False,
        "img": "images_b2/xref_59.png",
        "line_count": 10
    },
    {
        "type": "dang1",
        "num": 10,
        "prompt": "Biểu diễn miền nghiệm của hệ bất phương trình $\\begin{cases} 2x + 3y - 6 \\le 0 \\\\ x \\ge 0 \\\\ 2x - 3y - 1 \\le 0 \\end{cases}$ thu được một đa giác. Tính diện tích đa giác đó.",
        "options": [
            ("A", "$2$"),
            ("B", "$\\dfrac{49}{24}$"),
            ("C", "$\\dfrac{25}{12}$"),
            ("D", "$3$")
        ],
        "four_cols": True,
        "img": None,
        "line_count": 10
    },
    {
        "type": "dang1",
        "num": 11,
        "prompt": "Một hộ nông dân dự định trồng đậu và cà trên diện tích $8\\text{ ha}$. Nếu trồng đậu thì cần $20$ công và thu $3$ triệu đồng trên diện tích mỗi ha, nếu trồng cà thì cần $30$ công và thu $4$ triệu đồng trên diện tích mỗi ha. Hỏi cần trồng mỗi loại cây trên với diện tích là bao nhiêu để thu về được nhiều tiền nhất, biết rằng tổng số công không quá $180$?",
        "options": [
            ("A", "$8\\text{ ha}$ đậu, $0\\text{ ha}$ cà"),
            ("B", "$8\\text{ ha}$ cà, $0\\text{ ha}$ đậu"),
            ("C", "$2\\text{ ha}$ đậu và $6\\text{ ha}$ cà"),
            ("D", "$6\\text{ ha}$ đậu và $2\\text{ ha}$ cà")
        ],
        "four_cols": False,
        "img": None,
        "line_count": 10
    },
    {
        "type": "dang1",
        "num": 12,
        "prompt": "Một gia đình cần ít nhất $900$ đơn vị protein và $400$ đơn vị lipit trong thức ăn mỗi ngày. Mỗi kg thịt bò chứa $800$ đơn vị protein và $200$ đơn vị lipit. Mỗi kg thịt lợn chứa $600$ đơn vị protein và $400$ đơn vị lipit. Biết rằng mỗi ngày gia đình này chỉ mua tối đa $1{,}5\\text{ kg}$ thịt bò và $1\\text{ kg}$ thịt lợn, giá tiền $1\\text{ kg}$ thịt bò là $200$ nghìn đồng, $1\\text{ kg}$ thịt lợn là $100$ nghìn đồng. Hỏi gia đình đó phải mua bao nhiêu kg thịt mỗi loại để số tiền bỏ ra là ít nhất?",
        "options": [
            ("A", "$\\dfrac{3}{4}\\text{ kg}$ bò và $1\\text{ kg}$ lợn"),
            ("B", "$\\dfrac{3}{8}\\text{ kg}$ bò và $1{,}2\\text{ kg}$ lợn"),
            ("C", "$\\dfrac{3}{8}\\text{ kg}$ bò và $1\\text{ kg}$ lợn"),
            ("D", "$\\dfrac{3}{4}\\text{ kg}$ bò và $1{,}2\\text{ kg}$ lợn")
        ],
        "four_cols": False,
        "img": None,
        "line_count": 10
    },
    {
        "type": "dang1",
        "num": 13,
        "prompt": "Cho hệ bất phương trình $\\begin{cases} 4x - 5y < 4 & (1) \\\\ 2x - \\dfrac{5}{2}y < 3 & (2) \\end{cases}$. Gọi $S_1$ là tập nghiệm của bất phương trình (1), $S_2$ là tập nghiệm của bất phương trình (2) và $S$ là tập nghiệm của hệ bất phương trình trên. Khẳng định nào sau đây là khẳng định đúng?",
        "options": [
            ("A", "$S_1 \\subset S_2$"),
            ("B", "$S_2 \\subset S_1$"),
            ("C", "$S = S_2$"),
            ("D", "$S \\subset S_2$")
        ],
        "four_cols": True,
        "img": None,
        "line_count": 8
    },
    {
        "type": "dang1",
        "num": 14,
        "prompt": "Một nhà khoa học nghiên cứu về tác động phối hợp của vitamin A và vitamin B đối với cơ thể con người. Kết quả như sau:<br>"
                "i) Một người có thể tiếp nhận được mỗi ngày không quá $600$ đơn vị vitamin A và không quá $500$ đơn vị vitamin B.<br>"
                "ii) Một người mỗi ngày cần từ $400$ đến $1000$ đơn vị vitamin cả A lẫn B.<br>"
                "iii) Do tác động phối hợp của hai loại vitamin, mỗi ngày số đơn vị vitamin B phải nhiều hơn $\\dfrac{1}{2}$ số đơn vị vitamin A nhưng không nhiều hơn ba lần số đơn vị vitamin A. Biết giá một đơn vị vitamin A là $9$ đồng và giá một đơn vị vitamin B là $7{,}5$ đồng.<br>"
                "Gọi số đơn vị vitamin A cần dùng mỗi ngày là $x$; số đơn vị vitamin B cần dùng mỗi ngày là $y$. Em hãy đưa ra hệ bất phương trình bậc nhất hai ẩn $(x; y)$ mô hình cho bài toán trên:",
        "options": [
            ("A", "$\\begin{cases} 0 \\le x \\le 600 \\\\ 0 \\le y \\le 500 \\\\ 400 \\le x + y \\le 1000 \\\\ \\dfrac{1}{2}x < y < 3x \\end{cases}$"),
            ("B", "$\\begin{cases} 0 \\le x \\le 500 \\\\ 0 \\le y \\le 600 \\\\ 400 \\le x + y \\le 1000 \\\\ \\dfrac{1}{2}x \\le y \\le 3x \\end{cases}$"),
            ("C", "$\\begin{cases} 0 \\le x \\le 600 \\\\ 0 \\le y \\le 500 \\\\ 400 \\le x + y \\le 1000 \\\\ y \\le 3x \\end{cases}$"),
            ("D", "$\\begin{cases} 0 \\le x \\le 600 \\\\ 0 \\le y \\le 500 \\\\ 400 \\le x + y \\le 1000 \\\\ \\dfrac{1}{2}x \\le y \\le 3x \\end{cases}$")
        ],
        "four_cols": False,
        "img": None,
        "line_count": 10
    },
    {
        "type": "dang1",
        "num": 15,
        "prompt": "Trong một cuộc thi gói bánh trong dịp tết Nguyên Đán tại một trường, mỗi lớp được sử dụng tối đa $10\\text{ kg}$ gạo nếp, $1\\text{ kg}$ thịt, $2{,}5\\text{ kg}$ đậu xanh để gói bánh chưng và bánh tét. Để gói $1$ cái bánh chưng cần $0{,}4\\text{ kg}$ gạo nếp, $0{,}05\\text{ kg}$ thịt và $0{,}1\\text{ kg}$ đậu xanh. Để gói $1$ cái bánh tét cần $0{,}6\\text{ kg}$ gạo nếp, $0{,}075\\text{ kg}$ thịt và $0{,}15\\text{ kg}$ đậu xanh. Mỗi bánh chưng được $6$ điểm thưởng, mỗi bánh tét được $8$ điểm thưởng. Tổng số điểm thưởng cao nhất có thể đạt được của mỗi lớp là",
        "options": [
            ("A", "$180$"),
            ("B", "$120$"),
            ("C", "$140$"),
            ("D", "$160$")
        ],
        "four_cols": True,
        "img": "images_b2/xref_85.png",
        "line_count": 10
    },
    {
        "type": "dang1",
        "num": 16,
        "prompt": "Một công ty TNHH trong một đợt quảng cáo và bán khuyến mãi hàng hoá (1 sản phẩm mới của công ty) cần thuê xe để chở trên $140$ người và trên $9$ tấn hàng. Nơi thuê chỉ có hai loại xe $A$ và $B$. Trong đó xe loại $A$ có $10$ chiếc, xe loại $B$ có $9$ chiếc. Một chiếc xe loại $A$ cho thuê với giá $4$ triệu, loại $B$ giá $3$ triệu. Hỏi phải thuê bao nhiêu xe mỗi loại để chi phí vận chuyển là thấp nhất. Biết rằng xe $A$ chỉ chở tối đa $20$ người và $0{,}6$ tấn hàng. Xe $B$ chở tối đa $10$ người và $1{,}5$ tấn hàng.",
        "options": [
            ("A", "$4\\text{ xe } A \\text{ và } 5\\text{ xe } B$"),
            ("B", "$5\\text{ xe } A \\text{ và } 3\\text{ xe } B$"),
            ("C", "$4\\text{ xe } A \\text{ và } 4\\text{ xe } B$"),
            ("D", "$5\\text{ xe } A \\text{ và } 4\\text{ xe } B$")
        ],
        "four_cols": False,
        "img": None,
        "line_count": 10
    },

    # ==============================
    # DẠNG 2: CÂU 17 -> 21 (TRẮC NGHIỆM ĐÚNG / SAI)
    # ==============================
    {
        "type": "dang2",
        "num": 17,
        "prompt": "Cho hệ bất phương trình $\\begin{cases} x \\ge 0 & (1) \\\\ -2x + 3y \\ge -6 & (2) \\\\ x + y \\le 3 & (3) \\end{cases}$. Các mệnh đề sau đúng hay sai?",
        "statements": [
            ("a", "Bất phương trình (3) là bất phương trình bậc nhất hai ẩn."),
            ("b", "Hệ trên là một hệ bất phương trình bậc nhất hai ẩn."),
            ("c", "Điểm $O(0; 0)$ thuộc miền nghiệm của hệ bất phương trình trên."),
            ("d", "Điểm $M(3; 1)$ thuộc miền nghiệm của hệ bất phương trình trên.")
        ],
        "img": None,
        "line_count": 10
    },
    {
        "type": "dang2",
        "num": 18,
        "prompt": "Cho hệ bất phương trình: $\\begin{cases} 2x + 3y \\ge 6 \\\\ x - 2y \\le 3 \\\\ x + y \\le 6 \\\\ x \\ge 1 \\end{cases}$ $(I)$. Khi đó:",
        "statements": [
            ("a", "Hệ bất phương trình $(I)$ là hệ bất phương trình bậc nhất hai ẩn $x; y$."),
            ("b", "Cặp số $(x; y) = (4; 3)$ là một nghiệm của hệ bất phương trình trên."),
            ("c", "Miền nghiệm của hệ bất phương trình $(I)$ là miền tam giác."),
            ("d", "Nếu $x = x_0; y = y_0$ là nghiệm của hệ bất phương trình sao cho $F = 4x - 5y$ đạt giá trị nhỏ nhất thì $x_0^2 + y_0^2 = 26$.")
        ],
        "img": None,
        "line_count": 10
    },
    {
        "type": "dang2",
        "num": 19,
        "prompt": "Một người thợ may cần may một số áo và quần thể thao. Để may xong một cái áo người thợ mất $2$ giờ và để may xong một cái quần mất $3$ giờ. Người thợ may phải hoàn thành công việc trong thời gian không quá $72$ giờ. Tổng số lượng áo và quần mà người thợ cần may ít nhất là $12$ cái và số lượng áo không vượt quá một nửa số lượng quần. Biết tiền công may một cái áo là $200$ nghìn đồng, một cái quần là $250$ nghìn đồng. Gọi $x$ và $y$ ($x, y \\in \\mathbb{N}$) lần lượt là số áo và số quần mà người thợ may làm được. Khi đó:",
        "statements": [
            ("a", "Số tiền công người thợ may thu được là $T(x; y) = 200x + 250y$ nghìn đồng."),
            ("b", "$x + y \\ge 12$."),
            ("c", "$3x + 2y \\le 72$."),
            ("d", "Để thu được tiền công lớn nhất thì người thợ phải may $9$ cái áo và $18$ cái quần.")
        ],
        "img": "images_b2/xref_103.png",
        "line_count": 12
    },
    {
        "type": "dang2",
        "num": 20,
        "prompt": "Một công ty cần thuê xe để chở $280$ người và $9$ tấn hàng. Nơi thuê chỉ có hai loại xe I và II. Trong đó xe loại I có $8$ chiếc, xe loại II có $9$ chiếc. Một chiếc xe loại I cho thuê với giá $8$ triệu đồng, loại II giá $4$ triệu đồng. Biết rằng một chiếc xe loại I chỉ chở được tối đa $40$ người và $0{,}6$ tấn hàng; một chiếc xe loại II chở được tối đa $20$ người và $1{,}5$ tấn hàng. Gọi $x, y$ ($x, y \\in \\mathbb{N}$) lần lượt là số xe loại I và loại II mà công ty thuê. Khi đó:",
        "statements": [
            ("a", "Số tiền thuê xe là $T(x; y) = 8x + 4y$ triệu đồng."),
            ("b", "$0 \\le x \\le 9$ và $0 \\le y \\le 8$."),
            ("c", "$2x + y \\ge 14$."),
            ("d", "Để tốn ít chi phí thuê xe nhất thì công ty cần thuê $5$ chiếc xe loại I và $4$ chiếc xe loại II.")
        ],
        "img": None,
        "line_count": 12
    },
    {
        "type": "dang2",
        "num": 21,
        "prompt": "Bà Lan được tư vấn bổ sung chế độ ăn kiêng đặc biệt bằng cách sử dụng hai loại thực phẩm khác nhau là $X$ và $Y$. Mỗi gói thực phẩm $X$ chứa $20$ đơn vị canxi, $20$ đơn vị sắt và $10$ đơn vị vitamin B. Mỗi gói thực phẩm $Y$ chứa $20$ đơn vị canxi, $10$ đơn vị sắt và $20$ đơn vị vitamin B. Yêu cầu hàng ngày tối thiểu trong chế độ ăn uống là $240$ đơn vị canxi, $160$ đơn vị sắt và $140$ đơn vị vitamin B. Mỗi ngày không được dùng quá $12$ gói mỗi loại. Các mệnh đề sau đúng hay sai?",
        "statements": [
            ("a", "Hệ bất phương trình mô tả số gói thực phẩm $X$ và thực phẩm $Y$ mà bà Lan cần dùng mỗi ngày trong chế độ ăn kiêng để đáp ứng đủ nhu cầu cần thiết đối với canxi, sắt, vitamin B là $\\begin{cases} x + y \\ge 12 \\\\ 2x + y \\ge 16 \\\\ x + 2y \\ge 14 \\\\ 0 \\le x \\le 12 \\\\ 0 \\le y \\le 12 \\end{cases}$."),
            ("b", "Miền nghiệm của hệ bất phương trình mô tả số gói thực phẩm $X$ và thực phẩm $Y$ mà bà Lan cần dùng mỗi ngày trong chế độ ăn kiêng là một ngũ giác."),
            ("c", "Biết 1 gói thực phẩm loại $X$ giá $20\\,000$ đồng, 1 gói thực phẩm loại $Y$ giá $25\\,000$ đồng. Bà Lan cần dùng $10$ gói loại $X$ và $2$ gói loại $Y$ để chi phí mua là ít nhất."),
            ("d", "Điểm $(10; 8)$ không thuộc miền nghiệm của hệ bất phương trình mô tả số gói thực phẩm $X$ và thực phẩm $Y$ mà bà Lan cần dùng mỗi ngày.")
        ],
        "img": None,
        "line_count": 12
    },

    # ==============================
    # DẠNG 3: CÂU 22 -> 30 (TRẮC NGHIỆM ĐIỀN ĐÁP ÁN NGẮN)
    # ==============================
    {
        "type": "dang3",
        "num": 22,
        "prompt": "Cho hệ bất phương trình $\\begin{cases} \\dfrac{x}{2} - \\dfrac{y}{5} \\ge 1 \\\\ 2x - y - 3 \\le 0 \\end{cases}$ và các điểm $A(2; -5)$, $B(-2; 0)$, $C(0; 5)$, $D(2024; 2025)$. Trong các điểm trên, có bao nhiêu điểm thuộc miền nghiệm của hệ bất phương trình đã cho?",
        "ans": "0",
        "img": None,
        "line_count": 10
    },
    {
        "type": "dang3",
        "num": 23,
        "prompt": "Cho hệ bất phương trình bậc nhất hai ẩn: $\\begin{cases} \\dfrac{x}{3} + \\dfrac{y}{4} \\le 1 \\\\ x - y + 1 \\ge 0 \\\\ x + 2y + 3 \\ge 0 \\\\ y + 2 \\ge 0 \\end{cases}$. Miền nghiệm của hệ bất phương trình là một hình đa giác. Số các cạnh của đa giác đó là:",
        "ans": "4",
        "img": None,
        "line_count": 10
    },
    {
        "type": "dang3",
        "num": 24,
        "prompt": "Các số $x$ và $y$ thỏa mãn hệ bất phương trình $\\begin{cases} 0 \\le y \\le 4 \\\\ x \\ge 0 \\\\ x - y - 1 \\le 0 \\\\ x + 2y - 10 \\le 0 \\end{cases}$. Miền nghiệm của hệ bất phương trình là hình phẳng có diện tích bằng bao nhiêu?",
        "ans": "10.5",
        "img": None,
        "line_count": 10
    },
    {
        "type": "dang3",
        "num": 25,
        "prompt": "Một công ty trong một đợt quảng cáo và bán hàng, cần thuê xe để chở $70$ người và $30$ tấn hàng. Nơi cho thuê xe chỉ có hai loại xe: xe loại A và xe loại B. Trong đó xe loại A có $10$ chiếc, xe loại B có $9$ chiếc. Một chiếc xe loại A cho thuê với giá $4$ triệu và một chiếc xe loại B cho thuê với giá $3$ triệu. Biết rằng mỗi xe loại A chỉ chở tối đa $10$ người và $2$ tấn hàng; mỗi xe loại B chỉ chở tối đa $5$ người và $5$ tấn hàng. Tính số tiền (đơn vị: triệu đồng) ít nhất công ty cần bỏ ra thuê xe để thực hiện đợt quảng cáo và bán hàng.",
        "ans": "26",
        "img": "images_b2/xref_113.png",
        "line_count": 10
    },
    {
        "type": "dang3",
        "num": 26,
        "prompt": "Công ty TNHH $A$ dự định sản xuất ít nhất $80\\text{ kg}$ đường vàng và $20\\text{ kg}$ đường trắng từ hai nguyên liệu là mía và củ cải. Từ một tạ mía giá $600$ ngàn đồng có thể sản xuất $40\\text{ kg}$ đường vàng và $5\\text{ kg}$ đường trắng. Từ một tạ củ cải giá $300$ ngàn đồng có thể sản xuất $8\\text{ kg}$ đường vàng và $4\\text{ kg}$ đường trắng. Nhưng nhà cung cấp nguyên liệu cho công ty chỉ còn $8$ tạ mía và $12$ tạ củ cải. Hỏi chi phí mua nguyên liệu của công ty ít nhất là bao nhiêu ngàn đồng?",
        "ans": "1800",
        "img": None,
        "line_count": 10
    },
    {
        "type": "dang3",
        "num": 27,
        "prompt": "Bạn Hoa dự định làm thiệp chúc Tết handmade bán trong hội Xuân Ất Tỵ 2025 để gây quỹ từ thiện. Biết rằng Hoa cần $1$ giờ để làm một tấm thiệp loại nhỏ và sẽ bán với giá $20$ nghìn đồng, $180$ phút để làm một tấm thiệp loại lớn và sẽ bán với giá $30$ nghìn đồng. Hoa chỉ thu xếp được $20$ giờ nghỉ để làm thiệp và ban tổ chức yêu cầu phải làm ít nhất là $10$ tấm thiệp. Hãy cho biết bạn Hoa cần phải làm bao nhiêu tấm thiệp loại nhỏ để số tiền ủng hộ quỹ từ thiện được nhiều nhất?",
        "ans": "20",
        "img": "images_b2/xref_114.png",
        "line_count": 10
    },
    {
        "type": "dang3",
        "num": 28,
        "prompt": "Một nhà máy sản xuất hai loại thức ăn gia súc: loại A và loại B. Để sản xuất $1$ tấn thức ăn loại A cần $3$ tấn nguyên liệu $X$, $2$ tấn nguyên liệu $Y$ và $1$ tấn phụ gia. Để sản xuất $1$ tấn thức ăn loại B cần $2$ tấn nguyên liệu $X$, $4$ tấn nguyên liệu $Y$ và $3$ tấn phụ gia. Nhà máy có tối đa $120$ tấn nguyên liệu $X$, $160$ tấn nguyên liệu $Y$ và $80$ tấn phụ gia. Biết rằng lợi nhuận thu được từ mỗi tấn thức ăn loại A là $20$ triệu đồng và từ loại B là $30$ triệu đồng. Lợi nhuận (đơn vị: triệu đồng) nhà máy thu được lớn nhất là bao nhiêu? (kết quả làm tròn đến hàng đơn vị).",
        "ans": "1300",
        "img": "images_b2/xref_119.png",
        "line_count": 10
    },
    {
        "type": "dang3",
        "num": 29,
        "prompt": "Trong một cuộc thi pha chế, mỗi đội chơi được sử dụng tối đa $24\\text{ gam}$ hương liệu, $9\\text{ lít}$ nước và $210\\text{ gam}$ đường để pha chế nước ngọt loại I và nước ngọt loại II. Để pha chế $1\\text{ lít}$ nước ngọt loại I cần $10\\text{ gam}$ đường, $1\\text{ lít}$ nước và $4\\text{ gam}$ hương liệu. Để pha chế $1\\text{ lít}$ nước ngọt loại II cần $30\\text{ gam}$ đường, $1\\text{ lít}$ nước và $1\\text{ gam}$ hương liệu. Mỗi lít nước ngọt loại I được $80$ điểm thưởng, mỗi lít nước ngọt loại II được $60$ điểm thưởng. Hỏi số điểm thưởng cao nhất có thể của mỗi đội trong cuộc thi là bao nhiêu?",
        "ans": "640",
        "img": "images_b2/xref_116.png",
        "line_count": 10
    },
    {
        "type": "dang3",
        "num": 30,
        "prompt": "Để tổ chức cho đoàn viên ưu tú khối 12 đi thực tế, Đoàn trường THPT Đào Duy Từ đã thuê xe để đưa $180$ đoàn viên và $8$ tấn hành lý đi thực tế. Nơi thuê xe có hai loại xe $A$ và $B$, trong đó xe $A$ có $10$ chiếc, xe $B$ có $9$ chiếc. Một xe loại $A$ cho thuê với giá $5$ triệu, một xe loại $B$ cho thuê với giá $4$ triệu. Một xe loại $A$ có thể chở tối đa $30$ người và $0{,}8$ tấn hàng, mỗi xe loại $B$ có thể chở tối đa $20$ người và $1{,}6$ tấn hàng. Tìm tổng số xe cần thuê cả hai loại xe $A$ và $B$ sao cho chi phí thuê xe là thấp nhất?",
        "ans": "8",
        "img": "images_b2/xref_117.png",
        "line_count": 10
    },

    # ==============================
    # DẠNG 4: CÂU 31 -> 37 (BÀI TẬP TỰ LUẬN SGK VÀ SBT)
    # ==============================
    {
        "type": "dang4",
        "num": 31,
        "prompt": "Một phân xưởng sản xuất hai kiểu mũ. Thời gian để làm ra một chiếc mũ kiểu thứ nhất nhiều gấp hai lần thời gian làm ra một chiếc mũ kiểu thứ hai. Nếu chỉ sản xuất toàn kiểu mũ thứ hai thì trong $1$ giờ phân xưởng làm được $60$ chiếc. Phân xưởng làm việc $8$ tiếng mỗi ngày và thị trường tiêu thụ tối đa trong một ngày là $200$ chiếc mũ kiểu thứ nhất và $240$ chiếc mũ kiểu thứ hai. Tiền lãi khi bán một chiếc mũ kiểu thứ nhất là $24$ nghìn đồng, một chiếc mũ kiểu thứ hai là $15$ nghìn đồng. Tính số lượng mũ kiểu thứ nhất và kiểu thứ hai trong một ngày mà phân xưởng cần sản xuất để tiền lãi thu được là cao nhất.",
        "img": "images_b2/xref_122.png",
        "line_count": 12
    },
    {
        "type": "dang4",
        "num": 32,
        "prompt": "Nhu cầu canxi tối thiểu cho một người đang độ tuổi trưởng thành trong một ngày là $1300\\text{ mg}$. Trong $1$ lạng đậu nành có $165\\text{ mg}$ canxi, $1$ lạng thịt có $15\\text{ mg}$ canxi.<br>"
                "<i>(Nguồn: https://hongngochospital.vn)</i><br>"
                "Gọi $x, y$ lần lượt là số lạng đậu nành và số lạng thịt mà một người đang độ tuổi trưởng thành ăn trong một ngày (với $x > 0, y > 0$).<br>"
                "<b>a)</b> Viết bất phương trình bậc nhất hai ẩn $x, y$ để biểu diễn lượng canxi cần thiết trong một ngày của một người trong độ tuổi trưởng thành.<br>"
                "<b>b)</b> Chỉ ra một nghiệm $(x_0; y_0)$ với $x_0, y_0 \\in \\mathbb{N}$ của bất phương trình đó.",
        "img": None,
        "line_count": 12
    },
    {
        "type": "dang4",
        "num": 33,
        "prompt": "Bác Ngọc thực hiện chế độ ăn kiêng qua thức uống với yêu cầu tối thiểu hằng ngày là $300$ calo, $36$ đơn vị vitamin A và $90$ đơn vị vitamin C. Một cốc đồ uống ăn kiêng thứ nhất cung cấp $60$ calo, $12$ đơn vị vitamin A và $10$ đơn vị vitamin C. Một cốc đồ uống ăn kiêng thứ hai cung cấp $60$ calo, $6$ đơn vị vitamin A và $30$ đơn vị vitamin C.<br>"
                "<b>a)</b> Viết hệ bất phương trình mô tả số lượng cốc cho đồ uống thứ nhất và thứ hai mà bác Ngọc nên uống mỗi ngày để đáp ứng nhu cầu cần thiết đối với số calo và số đơn vị vitamin hấp thụ.<br>"
                "<b>b)</b> Chỉ ra hai phương án mà bác Ngọc có thể chọn lựa số lượng cốc cho đồ uống thứ nhất và thứ hai nhằm đáp ứng nhu cầu cần thiết đối với số calo và số đơn vị vitamin hấp thụ.",
        "img": None,
        "line_count": 12
    },
    {
        "type": "dang4",
        "num": 34,
        "prompt": "Một chuỗi nhà hàng ăn nhanh bán đồ ăn từ $10\\text{h}00$ sáng đến $22\\text{h}00$ mỗi ngày. Nhân viên phục vụ của nhà hàng làm việc theo hai ca, mỗi ca $8$ tiếng, ca I từ $10\\text{h}00$ đến $18\\text{h}00$ và ca II từ $14\\text{h}00$ đến $22\\text{h}00$.<br>"
                "Tiền lương của nhân viên được tính theo giờ:<br>"
                "&bull; $10\\text{h}00 - 18\\text{h}00$: $20\\,000\\text{ đồng/giờ}$.<br>"
                "&bull; $14\\text{h}00 - 22\\text{h}00$: $22\\,000\\text{ đồng/giờ}$.<br>"
                "Để mỗi nhà hàng hoạt động được thì cần tối thiểu $6$ nhân viên trong khoảng $10\\text{h}00 - 18\\text{h}00$, tối thiểu $24$ nhân viên trong thời gian cao điểm $14\\text{h}00 - 18\\text{h}00$ và không quá $20$ nhân viên trong khoảng $18\\text{h}00 - 22\\text{h}00$. Do lượng khách trong khoảng $14\\text{h}00 - 22\\text{h}00$ thường đông hơn nên nhà hàng cần số nhân viên ca II ít nhất phải gấp đôi số nhân viên ca I. Em hãy giúp chủ chuỗi nhà hàng chỉ ra cách huy động số lượng nhân viên cho mỗi ca sao cho chi phí tiền lương mỗi ngày là ít nhất.",
        "img": "images_b2/xref_129.png",
        "line_count": 14
    },
    {
        "type": "dang4",
        "num": 35,
        "prompt": "Anh Trung có kế hoạch đầu tư $400$ triệu đồng vào hai khoản X và Y. Để đạt được lợi nhuận thì khoản X phải đầu tư ít nhất $100$ triệu đồng và số tiền đầu tư cho khoản Y không nhỏ hơn số tiền cho khoản X. Viết hệ bất phương trình bậc nhất hai ẩn để mô tả hai khoản đầu tư đó và biểu diễn miền nghiệm của hệ bất phương trình vừa tìm được.",
        "img": None,
        "line_count": 12
    },
    {
        "type": "dang4",
        "num": 36,
        "prompt": "Một phân xưởng may áo vest và quần âu để chuẩn bị cho dịp cuối năm. Biết may $1$ áo vest hết $2\\text{ m}$ vải và cần $20$ giờ; $1$ quần âu hết $1{,}5\\text{ m}$ vải và cần $5$ giờ. Xí nghiệp được giao sử dụng không quá $900\\text{ m}$ vải và số giờ công không vượt quá $6000$ giờ. Theo khảo sát thị trường, số lượng quần bán ra không nhỏ hơn số lượng áo và không vượt quá $2$ lần số lượng áo. Khi xuất ra thị trường, $1$ chiếc áo lãi $350$ nghìn đồng, $1$ chiếc quần lãi $100$ nghìn đồng. Phân xưởng cần may bao nhiêu áo vest và quần âu để thu được tiền lãi cao nhất (biết thị trường tiêu thụ luôn đón nhận sản phẩm của xí nghiệp)?",
        "img": "images_b2/xref_130.png",
        "line_count": 14
    },
    {
        "type": "dang4",
        "num": 37,
        "prompt": "Hình bên mô tả sơ đồ một sân khấu gắn với hệ trục tọa độ $Oxy$ (đơn vị trên các trục tọa độ là $1\\text{ mét}$). Phần thính phòng giới hạn bởi hai đường thẳng $d_1, d_2$ là vị trí ngồi của khán giả có thể nhìn thấy dàn hợp xướng. Gọi $(x; y)$ là toạ độ ngồi của khán giả ở thính phòng. Viết hệ bất phương trình bậc nhất hai ẩn $x, y$ mà khán giả có thể nhìn thấy dàn hợp xướng.",
        "img": "images_b2/xref_128.png",
        "line_count": 12
    }
]

html_exercises = """
    <!-- ============================== -->
    <!-- PHẦN II: BÀI TẬP RÈN LUYỆN (37 CÂU) -->
    <!-- ============================== -->
    <div class="section-banner" style="margin-top:28px;">
      <i data-lucide="edit-3"></i>
      <span>PHẦN II: BÀI TẬP RÈN LUYỆN THEO 4 DẠNG (CÂU 1 ĐẾN CÂU 37)</span>
    </div>
"""

for q in questions_b2:
    q_num = q["num"]
    # Check section change
    if q_num == 1:
        html_exercises += '''
    <div class="section-banner" style="background: linear-gradient(135deg, #f43f5e, #e11d48); font-size: 1rem; margin-top: 14px;">
      <span>DẠNG 1: CÂU HỎI TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (CÂU 1 - 16)</span>
    </div>'''
    elif q_num == 17:
        html_exercises += '''
    <div class="section-banner" style="background: linear-gradient(135deg, #f43f5e, #e11d48); font-size: 1rem; margin-top: 24px;">
      <span>DẠNG 2: CÂU HỎI TRẮC NGHIỆM ĐÚNG / SAI (CÂU 17 - 21)</span>
    </div>'''
    elif q_num == 22:
        html_exercises += '''
    <div class="section-banner" style="background: linear-gradient(135deg, #f43f5e, #e11d48); font-size: 1rem; margin-top: 24px;">
      <span>DẠNG 3: CÂU HỎI TRẮC NGHIỆM ĐIỀN ĐÁP ÁN NGẮN (CÂU 22 - 30)</span>
    </div>'''
    elif q_num == 31:
        html_exercises += '''
    <div class="section-banner" style="background: linear-gradient(135deg, #f43f5e, #e11d48); font-size: 1rem; margin-top: 24px;">
      <span>DẠNG 4: BÀI TẬP TỰ LUẬN SGK VÀ SBT (CÂU 31 - 37)</span>
    </div>'''

    # Build Question Block
    html_exercises += f'''
    <!-- Question {q_num} -->
    <div class="question-block" id="cau-{q_num}">
      <div class="question-header">
        <span class="question-title"><i data-lucide="help-circle" style="width:18px;height:18px;"></i> Câu {q_num}.</span>
      </div>
      <div class="question-text">{q["prompt"]}</div>'''

    # Question 4 special diagram grid
    if q.get("type") == "dang1_q4":
        html_exercises += '<div class="diagram-options-grid">'
        for opt_lbl, d_src, d_caption in q["diagrams"]:
            html_exercises += f'''
              <div class="diagram-option-card">
                <img src="{d_src}" alt="{d_caption}">
                <div class="option-cell">
                  <span class="option-label">{opt_lbl}.</span>
                  <span>{d_caption}</span>
                </div>
              </div>'''
        html_exercises += '</div>'

    # Single Diagram/Image if present
    elif q.get("img"):
        html_exercises += f'''
      <div class="question-diagram-box">
        <img src="{q["img"]}" alt="Hình vẽ minh hoạ Câu {q_num}">
      </div>'''

    # Dạng 1 Options
    if q.get("type") == "dang1":
        grid_class = "options-grid four-cols" if q.get("four_cols") else "options-grid"
        html_exercises += f'<div class="{grid_class}">'
        for opt_lbl, opt_text in q["options"]:
            html_exercises += f'''
              <div class="option-cell">
                <span class="option-label">{opt_lbl}.</span>
                <span>{opt_text}</span>
              </div>'''
        html_exercises += '</div>'

    # Dạng 2 Statements
    elif q.get("type") == "dang2":
        html_exercises += '<div class="tf-grid">'
        for st_lbl, st_text in q["statements"]:
            html_exercises += f'''
              <div class="tf-row">
                <div class="tf-text"><b>{st_lbl})</b> {st_text}</div>
                <div class="tf-badge-group">
                  <span class="tf-badge">[ Đúng ]</span>
                  <span class="tf-badge">[ Sai ]</span>
                </div>
              </div>'''
        html_exercises += '</div>'

    # Dạng 3 Short Answer
    elif q.get("type") == "dang3":
        html_exercises += '''
      <div class="short-ans-box">
        <i data-lucide="check-square" style="width:18px;height:18px;"></i>
        <span>Đáp số: ............................................................</span>
      </div>'''

    # Handwriting Section (giãn dòng 1.5, font-size 14pt)
    line_count = q.get("line_count", 10)
    lines_html = generate_lines(f"q_{q_num}", line_count, is_theory=False)
    html_exercises += f'''
      <div class="handwriting-section">
        <div class="handwriting-header">
          <span>✍️ Bài làm tự luận / Trình bày lời giải (Cỡ chữ 14pt &bull; Giãn dòng 1.5):</span>
        </div>
        {lines_html}
      </div>
    </div>'''

html_template_foot = """
  </div>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      if (window.lucide) {
        window.lucide.createIcons();
      }

      // Render math
      if (window.renderMathInElement) {
        window.renderMathInElement(document.body, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\\\(", right: "\\\\)", display: false },
            { left: "\\\\[", right: "\\\\]", display: true }
          ],
          throwOnError: false
        });
      }

      // Toggle grid
      const gridBtn = document.getElementById("toggleGridBtn");
      gridBtn?.addEventListener("click", () => {
        document.body.classList.toggle("grid-bg");
      });

      // Toggle theme
      const themeBtn = document.getElementById("themeToggleBtn");
      themeBtn?.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme") || "light";
        const next = (cur === "dark") ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        document.getElementById("themeIcon")?.setAttribute("data-lucide", next === "dark" ? "sun" : "moon");
        if (window.lucide) window.lucide.createIcons();
      });
    });
  </script>
</body>
</html>
"""

full_html = html_template_head + html_theory + html_exercises + html_template_foot

out_path = "d:/TOAN/SOẠN TÀI LIỆU DẠY THÊM/HTML/ban-viet-tay-b2.html"
with open(out_path, "w", encoding="utf-8") as f:
    f.write(full_html)

# Also write the updater script
print("Done writing HTML file!")
