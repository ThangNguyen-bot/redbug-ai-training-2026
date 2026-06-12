# Redbug AI Training v1.4 — Final Run of Show
> Ngày: Thứ Hai 16/06/2026 | 08:30 – 17:30 | Facilitator: Thang Nguyen
> Tài liệu này là script hoàn chỉnh cho ngày training. Đọc đêm 15/06 trước khi ngủ.

---

## Checklist Chuẩn Bị (Hoàn thành trước 15/06)

### Ngày 13–14/06 — Xác nhận logistics
- [ ] Xác nhận số lượng tham dự thực tế với Thiên Kim / Hạnh
- [ ] Confirm phòng họp: WiFi, projector, HDMI cable, screen
- [ ] Confirm online participants (Zoom/Teams link nếu có) — gửi link trước 24h
- [ ] In 8 bản `content/09_participant_handout.md` (1 bản/người)
- [ ] Kiểm tra GoldBug US AI policy với Thiên Kim (nếu chưa có trả lời — tiến hành training, ghi note pending)

### Ngày 15/06 — Chuẩn bị file và session
- [ ] Mở ChatGPT (hoặc Claude) — kiểm tra còn message limit không (ChatGPT Free: ~40 msgs/3h)
- [ ] Copy sẵn tất cả data blocks từ `content/12_synthetic_demo_data.md` vào Notepad/clipboard
- [ ] Test toàn bộ 7 prompts WF5 một mình — ghi thời gian thực tế
- [ ] Mở `content/11_live_demo_scripts.md` trong 1 tab riêng để tham khảo
- [ ] Mở `content/05_slide_outline.md` để nhớ cấu trúc slides
- [ ] Chuẩn bị Pilot Tracker spreadsheet (hoặc bảng tay) để điền tên người trong Slide 26
- [ ] Charge laptop/phone 100%

### Sáng 16/06 — Chuẩn bị phòng (08:00–08:45)
- [ ] Setup projector + màn hình — kiểm tra độ phân giải và góc nhìn từ cuối phòng
- [ ] Kết nối WiFi — test tốc độ
- [ ] Mở ChatGPT trên màn hình chính — đã login, session mới, window to full screen
- [ ] Mở Notepad với 4 clipboard blocks sẵn: WF1 / WF3 / WF4 / WF5 data
- [ ] Đặt handout (`content/09_participant_handout.md`) trên từng ghế
- [ ] Viết lên bảng/flip chart: WiFi password + "Mở ChatGPT ngay bây giờ"
- [ ] Kiểm tra: Zoom/Teams mở nếu có online participant

---

## Run of Show — Timeline Chi Tiết

### 08:45–09:00 | Pre-Opening (15 phút)
**Action:** Greeting participants, giúp mọi người vào phòng, login ChatGPT

Nói khi người vào:
> "Chào [tên]! Lấy handout trên ghế đó. Khi ngồi xuống, mở ChatGPT (hoặc Claude) trên điện thoại/laptop. Mình bắt đầu đúng giờ nhé."

**Kỳ vọng 08:45:** Tất cả 8 người đã có mặt hoặc đang đến
**Dự phòng:** Nếu còn người chưa vào lúc 09:00 — bắt đầu, không đợi

---

### 09:00–09:15 | Module 0 — Opening (15 phút)
**Slides 1–2**

**09:00 — Slide 1:** Title + Agenda
> "Chào mừng. Hôm nay không phải ngồi nghe AI là gì — mà là mang về ít nhất 1 thứ áp dụng được ngay tuần sau. Agenda nhanh thôi..."

**09:05 — Show-of-hands:**
> "Ai đang dùng ChatGPT? — Giơ tay. Ai dùng ChatGPT Plus/Team? Ai dùng Gemini hoặc Claude? Ai chưa dùng AI tool nào?"
*[Ghi nhớ hoặc ghi nhanh vào handout của mình — để điều chỉnh demo tool]*

**09:08 — Slide 2:** Survey results (anonymous)
> "Trước buổi này, mình đã đọc qua khảo sát của 8 người. Không hiển thị tên. Nhưng đây là những gì team đang thật sự cần..."
*[Đọc top 5 pain points — để team thấy mình "được nghe"]*

---

### 09:15–09:50 | Module 1 — AI Security + Anonymization (35 phút)
**Slides 3–7**

**09:15 — Slide 3:** Câu hỏi bảo mật từ survey
> "Câu hỏi phổ biến nhất từ khảo sát: 'AI có bảo mật không?' Giải quyết ngay bây giờ, 10 phút."

**09:20 — Slide 4:** RED/YELLOW/GREEN table
*Để team đọc 30 giây im lặng — sau đó quiz*

**09:22 — Slide 5 (LIVE DEMO — quan trọng):** Ctrl+F Replace All
> "Mình sẽ demo live trong 90 giây."
*[Mở Notepad — paste email mẫu — Ctrl+F × 4 — hoàn thành]*
> "Đó. 90 giây. Không cần học thêm kỹ năng mới. Chỉ cần làm đúng bước này mỗi lần."

**09:27 — Slide 6:** Quiz RED/YELLOW/GREEN
*[Đọc từng tình huống — team hô to đáp án — vui và nhanh]*
*Dự kiến: 5 phút*

**09:32 — Slide 7:** Cam kết bảo mật
> "Quy tắc này không để cấm. Là để bảo vệ. Ẩn → Copy → Paste → Dùng."

**09:35–09:50 — STARTER PROMPT PRACTICE (15 phút)**
> "Bây giờ mỗi người mở ChatGPT và điền Starter Prompt này theo vai trò của mình. Mình đọc chậm để mọi người gõ theo. Ai xong trước — giơ tay."
*[Đọc Starter Prompt từ Slide 9 / `content/09_participant_handout.md` Section 5]*
*[Đi vòng quanh phòng — giúp người chưa xong]*

---

### 09:50–10:20 | Module 2 — Prompt Basics (30 phút)
**Slides 8–10**

**09:50 — Slide 8:** AI không đọc suy nghĩ
*[So sánh live: gõ "Viết email" vs gõ full prompt — để team thấy sự khác biệt output]*

**09:57 — Slide 9:** Prompt Formula
> "Công thức này là thứ duy nhất bạn cần nhớ hôm nay: Role + Task + Context + Output + Constraints."

**10:05 — Slide 10:** 3 cách sửa khi AI trả lời chưa đúng
*[Demo live: chạy 1 prompt đơn giản → AI trả lời không đúng ý → sửa lại với constraint]*

**10:15–10:20:** Q&A tự do sáng

---

### 10:20–10:30 | ☕ BREAK (10 phút)
> "10 phút break. Ai có câu hỏi riêng — gặp mình ngay bây giờ."
*[Chuẩn bị WF1 data block trong clipboard]*

---

### 10:30–12:00 | Module 3 — WF1 + WF2 + WF3 Demos Buổi Sáng (90 phút)
**Slides 10–12**

**10:30–10:45 — WF1 Demo (15 phút):**
*[Slide 10 — xem `content/11_live_demo_scripts.md` WF1 script]*
*[5 phút demo — 10 phút hands-on]*

**10:45–11:00 — WF2 Demo (15 phút):**
*[Slide 11 — xem `content/11_live_demo_scripts.md` WF2 script]*
*[5 phút demo — 10 phút hands-on]*

**11:00–11:25 — WF3 Demo (25 phút):**
*[Slide 12 — xem `content/11_live_demo_scripts.md` WF3 script]*
> "Lan Anh, Khánh Linh — tới demo này mình muốn 2 bạn tự chạy prompt nhé. Mình chiếu lên màn hình."
*[10 phút demo + 10 phút hands-on + 5 phút debrief nhanh]*

**11:25–11:50 — FREE PRACTICE (20–25 phút):**
> "Thời gian thực hành tự do. Ai có việc gì đang cần làm tuần này — đã anonymize — thử ngay bây giờ. Mình đi vòng quanh hỗ trợ."
*[Ưu tiên giúp người confidence thấp (Lan Anh, Khánh Linh, Sandra)]*

---

### 12:00–13:15 | 🍽️ LUNCH BREAK (75 phút)
*[Nếu được, ăn cùng team và lắng nghe informal feedback]*
*[Chuẩn bị WF3, WF4, WF5 data blocks trong clipboard]*
*[Test ChatGPT session — đảm bảo còn message limit cho buổi chiều]*

---

### 13:15–14:05 | Module 4 — WF4 Demo Buổi Chiều (50 phút)
**Slides 13–15**

**13:15–13:40 — WF4 Demo (25 phút):**
*[Slide 13 — xem `content/11_live_demo_scripts.md` WF4 script]*
> "Xuân Trâm — demo này của bạn. Chạy prompt trên máy bạn, mình chiếu màn hình."
*[10 phút demo + 10 phút hands-on + 5 phút Q&A]*

**13:40–13:55 — Slide 14:** Q&A + Break mindset (15 phút)
> "AI không thay thế bạn. AI làm bản nháp — bạn làm chuyên gia. Câu hỏi?"
*(Facilitator: Nếu hỏi upload PDF → Appendix A3)*

**13:55–14:05 — Slide 15 + Bridge (8–10 phút):**
> "WF1 tóm tắt email → WF3 viết report → WF4 theo dõi CAPA → và bây giờ: WF5 tổng hợp thành dashboard tháng. Demo này là lý do mình thiết kế training hôm nay."

> ⚠️ **QUY TẮC CẮT:** Nếu chưa xong WF4 (Slide 13) trước 14:00 → bỏ qua WF6 (Slide 21), đi thẳng vào WF5 lúc 14:05.

---

### 14:05–15:00 | Module 5 — WF5 MAIN WOW DEMO ⭐ (55 phút)
**Slides 16–20**

> ⚠️ **Quan trọng:** Toàn bộ 7 prompts chạy trong CÙNG một ChatGPT session. Không đóng tab.

**14:05–14:15 — Slide 16:** Why this demo is different + Giới thiệu demo data
*[Đọc pain points từ survey — link với từng prompt sắp chạy]*
> "Data này là dữ liệu giả lập nhưng đúng cấu trúc với data thật Redbug đang có. Kim Thoa — bạn thử nhận ra không?"

**14:15–14:45 — Live Prompts 1–4 (30 phút):**
*[Xem `content/11_live_demo_scripts.md` WF5 Prompts 1–4]*
- **Prompt 1:** Sample Priority Table (Facilitator chạy — 5 phút)
- **Prompt 2:** Order Shipment Risk (Facilitator chạy — 5 phút)
- **Prompt 3:** Factory Risk Ranking (Xuân Trâm hoặc Facilitator — 8 phút)
- **Prompt 4 ⭐:** Quotation Comparison (**Kim Thoa tự chạy** — 7 phút)
  > "Kim Thoa — bảng so sánh báo giá này. Bạn tự chạy nhé. Mình chiếu màn hình lên."
  > **DỪNG — đợi phản hồi phòng trước khi tiếp tục.**

**14:45–14:55 — Prompts 5+6 liên tiếp (~10 phút):**
- **Prompt 5:** Full Monthly Report *(nếu AI mất context → paste lại WF5 data block)*
- **Prompt 6 ⭐:** Email GoldBug US (**Thiên Kim tự chạy**)

**14:55–15:00 — Prompt 7 (optional) + Debrief (5 phút):**
- **Prompt 7 (optional — cắt nếu hơn 15:00):** Email nội bộ tiếng Việt
- **Debrief:** 3 câu hỏi (xem `content/11_live_demo_scripts.md` WF5 Debrief)

---

### 15:00–15:10 | ☕ BREAK (10 phút)
*[Chuẩn bị WF6 data block trong clipboard]*
*[Nếu muốn chạy WF7 — chuẩn bị WF7-A data block]*

---

### 15:10–15:25 | Module 6 — WF6 Training Material Demo *(OPTIONAL — 15 phút)*
**Slide 21**

> ⚠️ **OPTIONAL:** Cắt WF6 và đi thẳng sang Module 7 nếu: (1) chưa xong WF4 trước 14:00, hoặc (2) đã hơn 15:15 khi bắt đầu. Thông báo lịch sự: "WF6 — mình gửi script qua Zalo cho bạn tự thử."

*[Xem `content/11_live_demo_scripts.md` WF6 script]*
> "Demo cuối trước thực hành. 10 phút. Ai cần tạo training material cho nhà máy hoặc internal — demo này cho bạn."
*[5 phút demo + 5 phút Q&A + 5 phút transition]*

**[OPTIONAL — nếu chạy WF7]**
### 15:25–15:40 | Appendix A1 — WF7 Invoice Processing Demo (15 phút — nếu còn thời gian)
**Slide A1 | Dành cho Hạnh**

*[Chỉ chạy nếu trước 15:25 và Hạnh muốn thử]*
*[Xem `content/11_live_demo_scripts.md` WF7 script]*
> "Hạnh — demo ngắn này cho bạn. Mình setup cho bạn tự chạy."

**Nếu không có thời gian:**
> "Hạnh — demo WF7 mình gửi cho bạn script riêng sau buổi này. Bạn thử với email hóa đơn thật, mình support qua Zalo."

---

### 15:40–16:50 | Module 7 — Free Practice + Group Work (70 phút)
**Slides 22–23**

**15:40–16:40 — Group Practice (60 phút):**
> "50 phút thực hành theo nhóm. Mỗi nhóm chọn 1 việc thật từ tuần này. Dùng prompt từ handout. Sẵn sàng chia sẻ kết quả sau 45 phút."

| Nhóm | Người | Workflow |
|---|---|---|
| QC | Lan Anh, Khánh Linh | WF3 |
| QA/DCL | Xuân Trâm | WF4 hoặc WF2 |
| PD | Hải Yến, Sandra | WF3 hoặc WF1 |
| Leadership | Thiên Kim, Kim Thoa | WF5 |
| Office Admin | Hạnh | WF7 (nếu chưa chạy) |

*[Đi vòng quanh từng nhóm, 8–10 phút/nhóm]*

**16:40–16:50 — Slide 23:** Gallery Share
> "2–3 nhóm chia sẻ output. 2 phút/nhóm. Không cần hoàn hảo — chia sẻ cả khi AI trả lời chưa đúng."

---

### 16:50–17:20 | Module 8 — Pilot Commitment (30 phút)
**Slides 24–27**

**16:50–17:00 — Slide 24:** Pilot Shortlist v1.4
*[Hiển thị table 6 pilots — gọi tên từng người]*
> "Mình đã chuẩn bị sẵn pilot cho mỗi người dựa trên survey. Xem tên mình ở đây — đây là pilot mình đề xuất cho bạn."

**17:00–17:10 — Slide 25:** Pilot Commitment + Lịch Check-in
> "Bây giờ mỗi người điền phần 'Cam Kết Pilot' trong handout. **Không để ai về mà chưa chọn.**"
*[Thời gian điền — 5 phút]*
*[Thu lại hoặc chụp ảnh handout đã điền]*

Check-in lịch (nhắc lại):
- **20/06 (Thứ 6):** Báo cáo ngắn qua Zalo
- **23/06 (Thứ 2):** Họp 15 phút chia sẻ kết quả đầu tiên
- **30/06 (Thứ 2):** Tổng kết 2 tuần pilot

**17:10–17:20 — Slides 26–27:** Recap + Closing
> "5 thứ mang về hôm nay: [đọc Slide 28]. Và điều cuối: AI không làm thay bạn. Nhưng AI + bạn sẽ nhanh hơn và tốt hơn bạn một mình."

Website: https://redbug-ai-training-2026.vercel.app/

---

### 17:20–17:30 | Post-Training (10 phút)
- Chụp ảnh nhóm (optional)
- Thu handout đã điền (hoặc chụp ảnh)
- Trả lời câu hỏi cá nhân
- Gửi Zalo: "Cảm ơn team. Lịch check-in đầu tiên: Thứ 6 20/06. Bất kỳ câu hỏi — nhắn Zalo."

---

## Post-Training Follow-up (17–30/06)

| Ngày | Action |
|---|---|
| 16/06 (tối) | Gửi Zalo với link website + file `09_participant_handout.md` |
| 17/06 | Gửi individual pilot reminders (WF7 script riêng cho Hạnh) |
| 20/06 (Thứ 6) | Check-in Zalo: "Đã thử workflow chưa? Kết quả?" |
| 23/06 (Thứ 2) | Họp 15 phút: 2–3 người chia sẻ kết quả đầu tiên |
| 25/06 | Theo dõi pilot tracker — update `content/03_2week_pilot_tracker.md` |
| 30/06 (Thứ 2) | Tổng kết 2 tuần: ai đã dùng, tiết kiệm được gì, khó khăn gì |

---

## Contingency Plans

| Tình huống | Giải pháp |
|---|---|
| WiFi chậm / ChatGPT không load | Dùng điện thoại cá nhân hotspot; chuyển sang group discussion không cần màn hình |
| ChatGPT Free hết message limit | Chuyển sang Claude.ai (claude.ai/new); có sẵn prompt fallback trong `11_live_demo_scripts.md` |
| Người tham dự ít hơn dự kiến | Ghép nhóm; ưu tiên WF3 + WF5 |
| Demo WF5 bị lỗi giữa chừng | Paste Executive Summary bullets + chạy Prompt 5+6 riêng lẻ |
| GoldBug US AI policy chưa có | Proceed with training; ghi chú pending; Thiên Kim confirm sau |
| WF7 không có thời gian | Send Hạnh: `content/11_live_demo_scripts.md` WF7 script + data WF7-A qua Zalo |
| Online participant bị lag | Gửi handout + data blocks qua chat trước; họ chạy parallel trên máy riêng |

---

## Files Cần Có Mở Sẵn (16/06)

| File | Dùng khi nào |
|---|---|
| `content/11_live_demo_scripts.md` | Reference trong suốt ngày |
| `content/12_synthetic_demo_data.md` | Data source — copy/paste vào AI |
| `content/05_slide_outline.md` | Nhắc cấu trúc slides |
| `content/01_prompt_library_by_role.md` | Khi ai hỏi "prompt nào phù hợp với tôi?" |
| Notepad với 5 data blocks sẵn | WF1 / WF2 / WF3 / WF4 / WF5 / WF7 |
| ChatGPT (hoặc Claude) | AI tool chính cho demo |

---

*v1.4 | Final Run of Show | 16/06/2026 | Facilitator: Thang Nguyen | Cập nhật 12/06/2026*
