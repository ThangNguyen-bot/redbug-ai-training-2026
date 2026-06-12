# Redbug AI Training v1.0 — Facilitator Notes (Run of Show v1.5)
**CONFIDENTIAL — Dành riêng cho Thang Nguyen | KHÔNG chia sẻ với học viên**
Thứ Hai 16/06/2026 | 08:45–17:30 | VP Redbug Vietnam

---

## ĐỌC ĐÊM 15/06 TRƯỚC KHI NGỦ

---

## CHECKLIST TRƯỚC TRAINING DAY

### Ngày 13–14/06
- [ ] Xác nhận số lượng tham dự thực tế với Thiên Kim / Hạnh
- [ ] Confirm phòng họp: WiFi password, projector, HDMI cable, screen ok
- [ ] Confirm online participants (Zoom/Teams link nếu có) — gửi link trước 24h
- [ ] In 9 bản handout (1/người + 1 dự phòng) — dùng file `drive_ready/01_Participant_Handout_Google_Doc.md`
- [ ] Kiểm tra GoldBug US AI policy với Thiên Kim — nếu chưa có → tiến hành training, ghi note "pending"
- [ ] Xác nhận Kim Thoa đã chuẩn bị anonymized sample data cho WF3/WF5 thực hành

### Ngày 15/06
- [ ] Mở ChatGPT (hoặc Claude) — kiểm tra còn message limit (ChatGPT Free: ~40 msgs/3h)
- [ ] Copy sẵn tất cả data blocks vào Notepad (WF1, WF2, WF3, WF4, WF5, WF7) — từ `drive_ready/03_Demo_Data_Google_Sheet.csv`
- [ ] **Test toàn bộ 6 prompts WF5 một mình — ghi thời gian thực tế** (quan trọng nhất)
- [ ] Ghi lại output WF5 Prompt 4 (Quotation Comparison) để dùng làm reference nếu demo bị lỗi
- [ ] Charge laptop/phone 100%
- [ ] Kiểm tra Notepad có đủ 6 clipboard blocks chưa

### Sáng 16/06 (08:00–08:45)
- [ ] Setup projector — kiểm tra độ phân giải và góc nhìn từ cuối phòng
- [ ] Kết nối WiFi — test tốc độ
- [ ] Mở ChatGPT trên màn hình chính — đã login, session mới, window to full screen
- [ ] Mở Notepad (hoặc VS Code) với tất cả data blocks sẵn trong các tabs
- [ ] Đặt handout trên từng ghế trước khi người vào
- [ ] Viết lên bảng/flip chart: WiFi password + "Mở ChatGPT ngay bây giờ"
- [ ] Mở Zoom/Teams nếu có online participant

### Không được chiếu / chia sẻ với học viên
- [ ] Facilitator notes này
- [ ] Raw markdown source files (`content/` folder)
- [ ] Run-of-show internal timing notes
- [ ] Survey responses có tên cá nhân

---

## RUN OF SHOW — TIMELINE CHI TIẾT

### 08:45–09:00 | Pre-Opening (15 phút)
Nói khi người vào:
> "Chào [tên]! Lấy handout trên ghế. Khi ngồi xuống, mở ChatGPT hoặc Claude trên điện thoại / laptop. Mình bắt đầu đúng 09:00 nhé."

Kỳ vọng 08:45: tất cả đã có mặt hoặc đang đến.
**Dự phòng:** Nếu còn người chưa vào lúc 09:00 → bắt đầu, không đợi.

---

### 09:00–09:15 | Module 0 — Opening (15 phút) | Slides 1–2

**09:00 — Slide 1:**
> "Chào mừng. Hôm nay không phải ngồi nghe AI là gì — mà là mang về ít nhất 1 thứ áp dụng được ngay tuần sau."

**09:05 — Show-of-hands:**
> "Ai đang dùng ChatGPT? Giơ tay. Ai dùng Plus/Team? Ai dùng Claude hoặc Gemini? Ai chưa dùng gì?"
*(Ghi nhớ để điều chỉnh demo tool — nếu đa số dùng Free thì tránh dùng tính năng upload file)*

**09:08 — Slide 2:** Survey results (anonymous — không hiển thị tên)
> "Mình đã đọc khảo sát của 8 người. Đây là những gì team thật sự cần..."
*(Đọc top 5 pain points — để team thấy mình được nghe)*

---

### 09:15–09:50 | Module 1 — AI Security + Anonymization (35 phút) | Slides 3–7

**09:15 — Slide 3:** Câu hỏi bảo mật từ survey
> "Câu hỏi phổ biến nhất: 'AI có bảo mật không?' Giải quyết ngay, 10 phút."

**09:20 — Slide 4:** RED/YELLOW/GREEN table
*Để team đọc 30 giây im lặng → sau đó quiz nhanh*

**09:22 — Slide 5 (LIVE DEMO — quan trọng):** Ctrl+F Replace All
> "Mình demo live 90 giây."
*[Mở Notepad — paste email mẫu — Ctrl+F × 4 — hoàn thành]*
> "Đó. 90 giây. Chỉ cần làm đúng bước này mỗi lần."

**09:27 — Slide 6:** Quiz RED/YELLOW/GREEN
*[Đọc từng tình huống — team hô to — vui và nhanh — 5 phút]*

**09:32 — Slide 7:** Cam kết bảo mật
> "Quy tắc này để bảo vệ, không phải để cấm. Ẩn → Copy → Paste → Dùng."

**09:35–09:50 — Starter Prompt Practice (15 phút):**
> "Bây giờ mỗi người mở ChatGPT và điền Starter Prompt theo vai trò mình. Mình đọc chậm để mọi người gõ theo."
*[Đọc từ Handout Phần 5 — đi vòng quanh hỗ trợ người chưa xong]*

---

### 09:50–10:20 | Module 2 — Prompt Basics (30 phút) | Slides 8–9

**09:50 — Slide 8:** Prompt Formula: Role + Task + Context + Output + Constraints
*[So sánh live: "Viết email" vs full prompt → team thấy sự khác biệt output ngay]*

**10:05 — Slide 9:** 3 cách sửa khi AI trả lời chưa đúng
*[Demo live: chạy 1 prompt đơn → AI trả không đúng ý → sửa với constraint]*

**10:15–10:20:** Q&A tự do ngắn

---

### 10:20–10:30 | ☕ BREAK (10 phút)
*[Chuẩn bị WF1 data block trong clipboard — Notepad đã mở sẵn]*

---

### 10:30–12:00 | Module 3 — WF1 + WF2 + WF3 (90 phút) | Slides 10–12

**10:30–10:45 — WF1 Demo (15 phút):**
- 5 phút demo (Facilitator chạy Prompt WF1-2 với email thread WF1 từ demo data)
- 10 phút hands-on: mọi người tự chạy

**10:45–11:00 — WF2 Demo (15 phút):**
- 5 phút demo (Facilitator chạy Prompt WF2-1 với DCL data từ demo data)
- 10 phút hands-on: Hải Yến / Kim Thoa tự chạy

**11:00–11:25 — WF3 Demo (25 phút):**
- 5 phút demo
> "Lan Anh, Khánh Linh — demo này của 2 bạn. Tự chạy prompt, mình chiếu màn hình."
- 10 phút hands-on: Lan Anh + Khánh Linh tự chạy với WF3 data
- 5 phút debrief nhanh + safety reminder về AQL

**11:25–11:50 — FREE PRACTICE (25 phút):**
> "Ai có việc thật từ tuần này — đã anonymize — thử ngay bây giờ. Mình đi vòng quanh hỗ trợ."
*[Ưu tiên giúp người confidence thấp trước: Lan Anh, Khánh Linh, Sandra]*

---

### 12:00–13:15 | 🍱 LUNCH (75 phút)
*[Nếu được — ăn cùng team, lắng nghe informal feedback]*
*[Chuẩn bị WF4 + WF5 data blocks trong clipboard — test ChatGPT session còn limit không]*

---

### 13:15–14:05 | Module 4 — WF4 (50 phút) | Slides 13–15

**13:15–13:40 — WF4 Demo (25 phút):**
> "Xuân Trâm — demo này của bạn. Chạy prompt trên máy bạn, mình chiếu màn hình."
- Xuân Trâm chạy WF4 Prompt 1 với CAPA + trend data từ demo data
- 10 phút hands-on + 5 phút Q&A

**13:40–13:55 — Slide 14:** Q&A + mindset break
> "AI không thay thế bạn. AI làm bản nháp — bạn làm chuyên gia."

**13:55–14:05 — Slide 15:** Bridge sang WF5
> "WF1 tóm tắt email → WF3 viết report → WF4 theo dõi CAPA → WF5 tổng hợp thành dashboard tháng. Demo tiếp theo là lý do mình thiết kế training hôm nay."

---

### ⚠️ QUY TẮC CẮT
> **Nếu chưa xong WF4 (Slide 13) trước 14:00 → bỏ qua WF6 (Slide 21), đi thẳng vào WF5 lúc 14:05.**
> Thông báo lịch sự: "WF6 — mình gửi script qua Zalo cho bạn tự thử sau nhé."
> **Không bao giờ cắt WF0 hoặc WF5.**

---

### 14:05–15:00 | Module 5 — WF5 MAIN WOW DEMO ⭐ (55 phút) | Slides 16–20

> ⚠️ **QUAN TRỌNG:** Toàn bộ 6 prompts chạy trong CÙNG một ChatGPT session. Không đóng tab.

**14:05–14:15 — Slide 16:** Why this demo is different + giới thiệu data
> "Data này là dữ liệu giả lập nhưng đúng cấu trúc với data thật Redbug đang có."
> "Kim Thoa — bạn thử nhận ra không?" *(pause — đợi phản hồi)*

**14:15–14:30 — Prompts 1 + 2 (15 phút):**
- Prompt 1: Sample Priority Table — Facilitator chạy (5 phút)
- Prompt 2: Order Shipment Risk — Facilitator chạy (5 phút)
- *Dừng 1–2 phút để team đọc output*

**14:30–14:45 — Prompts 3 + 4 ⭐ (15 phút):**
- Prompt 3: Factory Risk Ranking — Xuân Trâm hoặc Facilitator (7 phút)
- Prompt 4: Quotation Comparison (**Kim Thoa tự chạy — đây là wow moment**)
  > "Kim Thoa — bảng so sánh báo giá này. Bạn tự chạy nhé."
  > **DỪNG — đợi phản hồi phòng trước khi tiếp tục.**
  > Hỏi: "Bình thường làm bảng này mất bao lâu?"

**14:45–14:55 — Prompt 5: Monthly Report (10 phút):**
- Facilitator chạy Prompt 5
- > ⚠️ **Nếu AI quên context trước Prompt 5 → paste lại toàn bộ WF5 data block trước khi chạy prompt này.**
- Đợi output → để team đọc → hỏi: "Output này có thể dùng làm nền cho báo cáo tháng thật không?"

**14:55–15:00 — Prompt 6 ⭐: Email GoldBug US (5 phút):**
- **Thiên Kim tự chạy**
  > "Thiên Kim — email gửi GoldBug US này, bạn tự chạy nhé."
- Debrief 3 câu:
  1. "Kim Thoa: tiết kiệm được bao nhiêu thời gian so với làm tay?"
  2. "Output có dùng làm nền cho báo cáo tháng 6 thật không?"
  3. "Để áp dụng ngay, bạn cần chuẩn bị gì?"

---

### 15:00–15:10 | ☕ BREAK (10 phút)

---

### 15:10–15:25 | Module 6 — WF6 Training Material (OPTIONAL — 15 phút) | Slide 21

> ⚠️ **Cắt nếu:** (1) chưa xong WF4 trước 14:00, hoặc (2) đã hơn 15:15 khi bắt đầu.

Demo 5 phút + Q&A 5 phút. Output: outline 6 slides + learning objectives.

---

### 15:25–15:40 | WF7 — Invoice Processing (OPTIONAL — 15 phút) | Slide A1

*Chỉ chạy nếu trước 15:25 và Hạnh muốn thử.*

> "Hạnh — demo ngắn này cho bạn. Mình setup cho bạn tự chạy."

**Điểm bảo mật phải nhấn mạnh trong demo WF7:**
> "Không cho AI quét toàn bộ inbox. Chỉ xử lý email hóa đơn mà Hạnh đã tự chọn và lọc thủ công trước."
*[Chiếu WF7-F security contrast từ demo data — 5-step safe workflow]*

**Nếu không có thời gian:**
> "Hạnh — mình gửi script WF7 riêng qua Zalo. Bạn thử với email hóa đơn thật, mình support qua Zalo."

---

### 15:40–16:50 | Module 7 — Free Practice + Group Work (70 phút)

**15:40–16:40 — Group Practice (60 phút):**

| Nhóm | Thành viên | Workflow |
|---|---|---|
| QC | Lan Anh, Khánh Linh, Nguyễn Thị Yến | WF3 |
| QA/DCL | Xuân Trâm | WF4 hoặc WF2 |
| PD | Hải Yến, Sandra | WF3 hoặc WF1 |
| Leadership | Thiên Kim, Kim Thoa | WF5 |
| Office Admin | Hạnh | WF7 (nếu chưa chạy) |

*[Đi vòng quanh từng nhóm — 8–10 phút/nhóm — ưu tiên nhóm QC trước]*

**16:40–16:50 — Gallery Share:**
> "2–3 nhóm chia sẻ output. 2 phút/nhóm. Không cần hoàn hảo — chia sẻ cả khi AI trả lời chưa đúng."

---

### 16:50–17:20 | Module 8 — Pilot Commitment (30 phút) | Slides 24–27

**16:50 — Slide 24:** Pilot Shortlist
*[Gọi tên từng người — họ thấy tên mình trong pilot đề xuất]*

**17:00 — Slide 25:** Điền pilot vào handout
> "Bây giờ mỗi người điền phần Cam Kết Pilot trong handout. **Không để ai về mà chưa chọn.**"
- 5 phút điền
- Thu lại hoặc chụp ảnh handout đã điền

Check-in lịch:
- **20/06 (Thứ 6):** Zalo ngắn — đã thử chưa? kết quả?
- **23/06 (Thứ 2):** Họp 15 phút chia sẻ kết quả đầu tiên
- **30/06 (Thứ 2):** Tổng kết 2 tuần pilot

**17:10 — Slides 26–27:** Recap + Closing
> "5 thứ mang về hôm nay: [đọc Slide 26]. Và điều cuối: AI không làm thay bạn. Nhưng AI + bạn sẽ nhanh hơn và tốt hơn bạn một mình."

---

### 17:20–17:30 | Post-Training (10 phút)
- Chụp ảnh nhóm (optional)
- Thu handout đã điền pilot (hoặc chụp ảnh)
- Trả lời câu hỏi cá nhân
- Gửi Zalo ngay tối: "Cảm ơn team. Lịch check-in đầu tiên: Thứ 6 20/06. Câu hỏi → nhắn Zalo."

---

## CONTINGENCY PLANS

| Tình huống | Giải pháp |
|---|---|
| WiFi chậm / ChatGPT không load | Dùng hotspot điện thoại; chuyển sang group discussion không cần màn hình |
| ChatGPT Free hết message limit | Chuyển sang Claude.ai (claude.ai/new) — prompt giống nhau |
| AI quên context trước WF5 Prompt 5 | Paste lại toàn bộ WF5 data block trước khi chạy Prompt 5 |
| Demo WF5 bị lỗi giữa chừng | Dùng output đã lưu từ test tối 15/06 để tiếp tục |
| Người tham dự ít hơn dự kiến | Ghép nhóm; ưu tiên WF3 + WF5 |
| GoldBug US AI policy chưa có | Tiến hành training; ghi note pending; Thiên Kim confirm sau |
| WF6/WF7 không có thời gian | Gửi script + data qua Zalo cho Hạnh và Thiên Kim tự thử |

---

## POST-TRAINING FOLLOW-UP (16–30/06)

| Ngày | Action |
|---|---|
| 16/06 (tối) | Gửi Zalo: link website + Drive folder link |
| 17/06 | Gửi individual pilot reminders qua Zalo (WF7 script riêng cho Hạnh) |
| 20/06 (Thứ 6) | Check-in Zalo: "Đã thử workflow chưa? Kết quả ngắn?" |
| 23/06 (Thứ 2) | Họp 15 phút: 2–3 người chia sẻ kết quả đầu tiên |
| 25/06 | Update Pilot Tracker (file 04) — ai đang làm tốt / cần support |
| 30/06 (Thứ 2) | Tổng kết 2 tuần: ai đã dùng, tiết kiệm được gì, khó khăn gì, quyết định Scale / Stop / Revise |

---

*Redbug AI Training v1.0 | Run of Show v1.5 | 16/06/2026 | Facilitator: Thang Nguyen | CONFIDENTIAL*
