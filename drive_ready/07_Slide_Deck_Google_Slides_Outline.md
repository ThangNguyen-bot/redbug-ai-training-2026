# Redbug AI Training v1.0 — Slide Deck Outline for Google Slides
**27 slides chính + 4 Appendix | 16/06/2026 | 08:45–17:30**
**Màu sắc:** Nền trắng | Navy `#003366` | Gold `#C8960C` | Red `#CC0000`
**Font:** Outfit hoặc Roboto | Heading: Bold, 32–40pt | Body: Regular, 18–22pt

---

## HƯỚNG DẪN THIẾT KẾ CHUNG

- Nền trắng, tiêu đề navy `#003366`, điểm nhấn gold `#C8960C`
- Cảnh báo bảo mật và điểm cắt: màu đỏ `#CC0000`
- Tối đa 4 bullets/slide — ngắn gọn, font to
- Bảng: header navy nền, chữ trắng; hàng dữ liệu xen kẽ trắng / xám nhạt
- Mỗi demo slide: gợi ý "Prompt Box" — khung code/quote riêng biệt, phông chữ đơn cách

---

## MODULE 0 — OPENING | Slides 1–2 | 09:00–09:15

---

### Slide 1 — Trang Tiêu Đề + Agenda
**Key message:** Hôm nay không phải lý thuyết — ra về với ít nhất 1 pilot thực tế.

**Nội dung:**
- Tiêu đề lớn: **Redbug AI Training 2026**
- Phụ đề: *"AI trong Quy trình Công việc Thực tế của Redbug Vietnam"*
- Ngày: 16/06/2026 | Logo GoldBug góc trên phải
- Agenda trong ngày (4 dòng):
  - Buổi sáng: Security + Prompt Basics + WF1/WF2/WF3 Demos
  - Buổi chiều: WF4 + WF5 Monthly Dashboard ⭐ + WF6 Training Material
  - Thực hành nhóm + Chốt Pilot
  - **Cam kết: Ra về với ít nhất 1 pilot thực tế**

**Gợi ý hình ảnh:** GoldBug logo + background nhạt navy gradient
**Ghi chú thuyết trình:** Nói ngắn. Không đọc lại agenda — nhấn vào cam kết cuối ngày.

---

### Slide 2 — Những Gì Team Muốn Giải Quyết
**Key message:** Training hôm nay xuất phát từ những gì team thật sự cần — không phải AI chung chung.

**Nội dung:**
- Tiêu đề: *"Những gì 8 người trong team muốn giải quyết"* (anonymous)
- Top 6 nhu cầu từ khảo sát (bullet points):
  - Tự động hóa Inspection Report / FRI
  - Mô tả defect tiếng Anh chuyên nghiệp
  - Tóm tắt email dài — trích xuất action items
  - Đối chiếu Tech Pack / DCL / Manual nhanh hơn
  - Phân tích nguyên nhân lỗi và theo dõi CAPA
  - Báo cáo tháng, dashboard hiệu suất nhà máy
- Highlight đỏ: **"Câu hỏi chung nhất: 'AI có bảo mật không?' → Giải quyết ngay!"**

**Gợi ý hình ảnh:** Word cloud hoặc danh sách với checkmarks — không tên cá nhân
**Ghi chú thuyết trình:** Đọc chậm — để team thấy mình được nghe. Nói: "Mình đọc hết 8 phản hồi khảo sát."

---

## MODULE 1 — AI SECURITY + ANONYMIZATION | Slides 3–7 | 09:15–09:50

---

### Slide 3 — Câu Hỏi Team Đang Thắc Mắc
**Key message:** Có 3 điều cần biết để làm việc với AI an toàn — không cần lo lắng thêm nữa.

**Nội dung:**
- Quote lớn (màu navy): *"AI có bảo mật cho những gì tôi chia sẻ không?"*
- 3 sự thật cần biết (đánh số lớn):
  1. AI không biết bạn là ai, trừ khi bạn tự nói ra.
  2. AI không chia sẻ conversation với GoldBug US, nhà máy, hay người dùng khác.
  3. Mỗi cuộc trò chuyện mới là tờ giấy trắng — AI không nhớ session trước.
- Kết luận: **"Dùng Quy tắc RED/YELLOW/GREEN + ẩn danh hóa → làm việc an toàn."**

**Gợi ý hình ảnh:** Lock icon hoặc shield — đơn giản, không dọa
**Ghi chú thuyết trình:** Dừng sau điểm 3 — để team thấy nhẹ nhõm trước khi chuyển sang quy tắc.

---

### Slide 4 — Quy Tắc RED / YELLOW / GREEN của Redbug
**Key message:** 3 màu — biết ngay cái gì được paste và cái gì không.

**Nội dung:** Bảng 3 cột (font to — đọc được từ cuối phòng)

| 🔴 RED — Không bao giờ | 🟡 YELLOW — Ẩn trước | 🟢 GREEN — Thoải mái |
|---|---|---|
| PO thật, giá FOB / margin / cost sheet | Tên nhà máy → "Factory A" | Quy trình chung, template trống |
| Hợp đồng, audit finding nhạy cảm | Mã hàng → "Style-XXXX" | Email đã anonymize |
| Thông tin cá nhân (email, phone) | Tên khách hàng → "Customer X" | Hỏi kỹ thuật / chuyên môn |
| | PO thật → "PO-XXXX" | (không có dữ liệu thật) |
| | Giá / cost → "[PRICE REMOVED]" | |

**Gợi ý hình ảnh:** Bảng màu đậm — RED đỏ, YELLOW vàng, GREEN xanh lá — dễ nhớ
**Ghi chú thuyết trình:** Dừng 30 giây im lặng — để team đọc tự. Sau đó sang Slide 5 để demo live.

---

### Slide 5 — 3 Bước Ẩn Danh Hóa Trước Khi Dùng AI
**Key message:** 90 giây để ẩn danh — làm 1 lần trở thành thói quen.

**Nội dung:**
- **Bước 1:** Copy nội dung vào document mới — KHÔNG sửa file gốc
- **Bước 2:** Ctrl+F → Replace All:
  - Tên nhà máy → **Factory A**
  - Tên vendor → **Vendor B**
  - Tên khách hàng → **Customer X**
  - Số PO thật → **PO-XXXX**
  - Giá / cost / margin → **[PRICE REMOVED]**
- **Bước 3:** Kiểm tra nhanh → Paste vào AI

- Ghi chú nhỏ phía dưới: *[Facilitator: Demo live ngay bây giờ — 90 giây trên màn hình]*

**Gợi ý hình ảnh:** 3 bước với số to, mũi tên flow đơn giản
**Ghi chú thuyết trình:** Demo live — mở Notepad, paste email mẫu, Ctrl+F × 4, xong. Nhấn mạnh: "90 giây."

---

### Slide 6 — Quiz Tương Tác: RED / YELLOW / GREEN?
**Key message:** Ứng dụng ngay — 5 tình huống thực tế Redbug.

**Nội dung:** 5 tình huống — Facilitator đọc, team hô đáp án
1. Paste email nhà máy (có tên nhà máy) để AI tóm tắt → **YELLOW** *(ẩn tên trước)*
2. Paste cost sheet có giá FOB thật của PO-001 → **RED**
3. Dùng AI viết email nhắc lịch submit mẫu → **GREEN**
4. Paste tech pack có logo GoldBug và số style thật → **YELLOW** *(ẩn logo, style, customer name)*
5. Hỏi AI cách viết CAPA bằng tiếng Anh — không paste dữ liệu thật → **GREEN**

**Gợi ý hình ảnh:** 5 thẻ câu hỏi — reveal từng cái; màu đáp án hiện sau khi team hô
**Ghi chú thuyết trình:** Vui và nhanh — không giải thích dài. Nếu ai trả lời sai → giải thích 1 câu rồi tiếp.

---

### Slide 7 — Cam Kết Bảo Mật + Chuyển Sang Thực Hành
**Key message:** Quy tắc này để bảo vệ, không phải để cấm.

**Nội dung:**
- Quote lớn navy: *"Ẩn → Copy → Paste → Dùng thoải mái."*
- 3 nhắc nhở ngắn:
  - Không chia sẻ password / tài khoản AI với người khác
  - Không dùng kết quả AI mà không đọc lại và kiểm tra
  - Luôn là bạn — người dùng cuối — chịu trách nhiệm về output
- ➡️ **Bây giờ: Mở ChatGPT → điền Starter Prompt theo vai trò của bạn**

**Gợi ý hình ảnh:** Shield + checkmark — màu gold
**Ghi chú thuyết trình:** Ngắn gọn. Phát Handout nếu chưa có. Đọc Starter Prompt chậm để team gõ theo.

---

## MODULE 2 — PROMPT BASICS | Slides 8–9 | 09:50–10:20

---

### Slide 8 — Công Thức Prompt + Starter Prompt
**Key message:** AI không đọc suy nghĩ — prompt rõ thì output tốt.

**Nội dung:**
- So sánh 2 cột:
  - ❌ "Viết email" → output chung chung
  - ✅ "Đóng vai QC, viết email tiếng Anh yêu cầu Factory A làm CAPA..." → output Redbug-specific
- Công thức: **Role + Task + Context + Output + Constraints**
- Bảng ví dụ 5 dòng (tình huống QC Redbug):
  - Role: "Tôi là QC Inspector tại Redbug Vietnam..."
  - Task: "...hãy viết email báo cáo kết quả FRI"
  - Context: "...Style-XXXX, kiểm 200, 9 lỗi Major"
  - Output: "...dạng bullet points rõ ràng"
  - Constraints: "...tiếng Anh, ngắn gọn, tone chuyên nghiệp"
- **Thực hành ngay (5 phút):** Mỗi người tự điền Starter Prompt theo vai trò

**Gợi ý hình ảnh:** Split-screen before/after hoặc 5-block formula diagram
**Ghi chú thuyết trình:** Cho team 5 phút tự điền — đi vòng quanh hỗ trợ người chưa gõ xong.

---

### Slide 9 — Khi AI Trả Lời Chưa Đúng Ý: 3 Cách Sửa Nhanh
**Key message:** AI không hoàn hảo ngay lần đầu — nhưng sửa rất dễ.

**Nội dung:** 3 cách sửa (với ví dụ thực tế):
1. **Thêm Constraint:** "Viết ngắn hơn / bằng tiếng Anh / dạng bảng / tone chuyên nghiệp"
2. **Cho ví dụ:** "Ví dụ output tôi muốn: [dán mẫu — 2–3 dòng]"
3. **Yêu cầu lại:** "Thử lại nhưng ngắn hơn 50% và thêm cột Deadline"

Demo live (2 phút): Chạy 1 prompt đơn → AI trả không đúng ý → sửa bằng constraint → thấy output tốt hơn

**Gợi ý hình ảnh:** 3 numbered steps; chat bubble showing before/after
**Ghi chú thuyết trình:** Demo trực tiếp — đừng giải thích quá, để team thấy thật.

---

## MODULE 3 — WORKFLOW DEMOS BUỔI SÁNG | Slides 10–12 | 10:30–12:00

---

### Slide 10 — WF1: Email / Manual / Tech Pack Summary Assistant
**Key message:** Email 8 tin nhắn tóm tắt xong trong 2 phút — không đọc lại từng dòng.

**Nội dung:**
- Ai dùng: Tất cả — đặc biệt QC Inspector, QA/QC Manager, PD, Merchandiser
- Tình huống: Chuỗi email 8 tin nhắn từ nhà máy về trễ tiến độ + thay đổi nguyên liệu
- **Prompt Box:**
  ```
  Đây là chuỗi email với Factory A. Tóm tắt:
  1. Vấn đề chính?
  2. Trạng thái hiện tại?
  3. Action items tôi cần làm ngay?
  4. Rủi ro cần báo cáo Manager?
  ```
- Output mong đợi: Bullet-point summary + 3–5 action items có ưu tiên
- ⚠️ **Safety:** Ẩn tên nhà máy, vendor, mã PO trước khi paste

**Gợi ý hình ảnh:** Email thread → arrow → clean bullet summary
**Ghi chú thuyết trình:** Demo 5 phút → Hands-on 10 phút. Nhắc safety reminder trước khi hands-on.

---

### Slide 11 — WF2: Tech Pack / DCL Comparison Assistant
**Key message:** Tìm thay đổi giữa 2 phiên bản Tech Pack trong 3 phút — không đọc lại toàn bộ.

**Nội dung:**
- Ai dùng: PD (Hải Yến, Sandra), Footwear Quality (Kim Thoa), QA/QC (Xuân Trâm)
- Tình huống: Nhận Tech Pack revision mới từ US — cần tìm nhanh những gì thay đổi
- **Prompt Box:**
  ```
  Đọc Spec v1 và Spec v2.
  Liệt kê những thông số, vật tư, yêu cầu đã thay đổi.
  Tạo bảng: Component | v1 | v2 | Mức độ ưu tiên | Cần báo nhà máy ngay không?
  ```
- Output mong đợi: Bảng 5 cột so sánh rõ ràng
- ⚠️ **Safety:** Ẩn style number, customer name, PO trước khi paste DCL / Tech Pack thật

**Gợi ý hình ảnh:** Two-column doc comparison → bảng kết quả
**Ghi chú thuyết trình:** Hải Yến / Kim Thoa tự chạy. Demo 5 phút → Hands-on 10 phút.

---

### Slide 12 — WF3: Inspection Report + Defect Description Assistant
**Key message:** Ghi chú tay sau FRI → report tiếng Anh chuẩn trong 10 phút.

**Nội dung:**
- Ai dùng: QC Inspector (Lan Anh, Khánh Linh), QA/QC Manager (Xuân Trâm), PD (Sandra)
- Tình huống: Vừa đi kiểm hàng về, có ghi chú tay lộn xộn — cần report tiếng Anh
- Input mẫu: *"PO-XXXX, Swaddle, Factory A. Kiểm 200. Dơ dầu máy: 5 (Major). Đứt chỉ: 3 (Minor). Hụt size 2cm: 4 (Major). Total Major 9 > AQL. Fail."*
- **Prompt Box:**
  ```
  Tôi là QC Inspector. Từ ghi chú sau [paste]:
  1. Viết Inspection Summary tiếng Anh (Pass/Fail, qty, lỗi chính)
  2. Bảng Defect List: Defect Name | Description (EN) | Major/Minor | Qty | % Rate
  3. Email ngắn tiếng Anh gửi Factory A: thông báo Fail,
     yêu cầu 100% sort + CAPA trong 48h
  ```
- Output mong đợi: Summary paragraph + Defect bảng + Email tiếng Anh
- ⚠️ **Safety:** PO-XXXX + Factory A đã thay thế — khi dùng data thật: Ctrl+F trước

**Gợi ý hình ảnh:** Handwritten note → polished English report
**Ghi chú thuyết trình:** Lan Anh + Khánh Linh tự chạy. Ưu tiên demo ví dụ đầu để team không bị ngợp.

---

## MODULE 4 — WORKFLOW DEMOS BUỔI CHIỀU | Slides 13–15 | 13:15–14:05

---

### Slide 13 — WF4: CAPA / Root Cause / Factory Risk Assistant
**Key message:** CAPA "nhắc công nhân cẩn thận hơn" không đủ — AI giúp phân tích đúng tầng.

**Nội dung:**
- Ai dùng: QA/QC Manager (Xuân Trâm), Footwear Quality (Kim Thoa)
- Tình huống: Factory A gửi CAPA cho lỗi đứt chỉ tăng 3 tháng liên tiếp — nội dung: "Sẽ nhắc công nhân cẩn thận hơn."
- **Prompt Box:**
  ```
  Tôi là QA Manager. Factory A có lỗi open seam tăng dần 3 tháng:
  [paste trend]. Họ gửi CAPA: [paste CAPA].
  Hãy:
  1. Giải thích tại sao CAPA này không đạt
  2. Soạn email bác bỏ, yêu cầu 5 Whys analysis
  3. Gợi ý 4 Preventive Actions thực tế
  4. Đánh giá Factory A Risk Level (Low/Medium/High)
  ```
- Output mong đợi: Email phản hồi chuyên nghiệp + 5 Whys template + Risk assessment
- ⚠️ **Safety:** Ẩn tên nhà máy → Factory A, mã PO → PO-XXXX

**Gợi ý hình ảnh:** Factory risk level chart + CAPA flow diagram
**Ghi chú thuyết trình:** Xuân Trâm tự chạy prompt trên máy — chiếu lên màn hình chính.

---

### Slide 14 — Mindset Break + Q&A
**Key message:** AI không thay thế chuyên môn — AI làm bản nháp, bạn làm chuyên gia.

**Nội dung:**
- Quote lớn: *"AI không thay thế bạn. AI làm bản nháp — bạn làm chuyên gia."*
- 3 điều AI làm tốt: tóm tắt, cấu trúc, bản nháp đầu tiên
- 3 điều bạn làm tốt hơn AI: phán đoán thực tế, kinh nghiệm nhà máy, mối quan hệ
- Câu hỏi mở: "Điều gì bạn lo ngại nhất khi dùng AI trong công việc hàng ngày?"
- *(Nếu hỏi upload PDF → xem Appendix A3)*

**Gợi ý hình ảnh:** Human + AI collaboration — not replacement
**Ghi chú thuyết trình:** 5 phút Q&A tự do. Không cần chuẩn bị — lắng nghe thật sự.

---

### Slide 15 — Kết Nối Workflows + Bridge Sang WF5
**Key message:** WF1–WF4 là những mảnh ghép — WF5 là lúc ghép tất cả lại thành dashboard tháng.

**Nội dung:**
- Sơ đồ luồng (nằm ngang):
  `Email (WF1)` → `Report (WF3)` → `CAPA (WF4)` → `Monthly Dashboard (WF5) ⭐`
- Recap: "Hôm nay sáng mình đã làm được: [4 checkmarks]"
- Preview WF5: "Demo tiếp theo là lý do mình thiết kế training hôm nay."
- Thời gian: Bridge 8–10 phút — bắt đầu WF5 đúng 14:05

**Gợi ý hình ảnh:** Workflow flow diagram với arrows, star on WF5
**Ghi chú thuyết trình:** Nói ngắn — giữ năng lượng cho WF5. Không kéo dài bridge quá 14:05.

---

## MODULE 5 — WF5 MONTHLY DASHBOARD ⭐ | Slides 16–20 | 14:05–15:00

---

### Slide 16 — WF5: Tại Sao Demo Này Khác + Giới Thiệu Dữ Liệu
**Key message:** Demo này xuất phát từ pain points thật của 5/8 người trong team — không phải ví dụ AI chung chung.

**Nội dung:**
- Bảng pain point → giải pháp:
  | Pain Point (từ survey) | WF5 giải quyết |
  |---|---|
  | Báo cáo tháng tốn 2–3h | Bước 5: 5 phút |
  | Sample tracker lộn xộn | Bước 1+2 |
  | Bảng so sánh báo giá | Bước 4: 20 giây |
  | Email tóm tắt cho GoldBug US | Bước 6 |
- Preview 4 bảng dữ liệu: Sample Tracker / Order Progress / Defect Summary / Quotation
- Nhắc: Tên nhà máy → Factory A/B/C | Mã hàng → Style-XXXX | Giá → [PRICE REMOVED]
- ⚠️ **Lưu ý kỹ thuật:** Toàn bộ 6 prompts chạy trong CÙNG một ChatGPT session — không đóng tab

**Gợi ý hình ảnh:** 2×2 grid của 4 data table previews
**Ghi chú thuyết trình:** Hỏi Kim Thoa: "Bạn thử nhận ra không?" Dừng chờ phản hồi.

---

### Slide 17 — WF5 Bước 1+2: Sample Priority + Order Shipment Risk
**Key message:** Từ tracker lộn xộn → bảng priority rõ ràng trong 5 phút.

**Nội dung:**
- **Prompt 1 — Sample Priority Table:** Facilitator demo live (5 phút)
  - Input: Sample Tracker data (6 styles, Factory A/B/C)
  - Output: Bảng priority — Overdue / At-Risk / On-Track
- **Prompt 2 — Order Shipment Risk:** Facilitator demo live (5 phút)
  - Input: Order Tracker data (PO-1001 → PO-1005)
  - Output: Risk level + shipping timeline + blocking issues
- Dừng 1–2 phút để team đọc output trên màn hình

**Gợi ý hình ảnh:** Sample tracker table → priority-sorted output
**Ghi chú thuyết trình:** Chạy nhanh — không giải thích từng dòng output. Để team tự đọc và nhận xét.

---

### Slide 18 — WF5 Bước 3: Defect Trend + Factory Risk Ranking
**Key message:** Factory A đang HIGH risk — AI phát hiện ngay từ trend 3 tháng.

**Nội dung:**
- **Prompt 3 — Factory Risk Ranking:** Xuân Trâm hoặc Facilitator chạy (7 phút)
  - Input: Defect Summary data (Factory A/B/C — 3 months trend)
  - Output: Factory Risk Ranking + Top defects + Nhận xét 100 từ tiếng Anh
- Kết quả mong đợi (hiển thị trên slide):
  - Factory A: HIGH — open seam tăng liên tiếp 3 tháng
  - Factory B: LOW — improving
  - Factory C: MEDIUM — new issue detected
- Hỏi team: "Với data thật của Redbug, kết quả này có match với gì bạn đang thấy không?"

**Gợi ý hình ảnh:** Risk ranking table với màu RED/YELLOW/GREEN
**Ghi chú thuyết trình:** Dừng chờ phản hồi trước khi tiếp — đây là moment kết nối thực tế.

---

### Slide 19 — WF5 Bước 4+5 ⭐: Quotation Comparison + Monthly Report
**Key message:** Bảng so sánh báo giá — thường mất 2–3 giờ — AI làm trong 20 giây.

**Nội dung:**
- **Prompt 4 — Quotation Comparison ⭐ WOW MOMENT:**
  - **Kim Thoa tự chạy** — hiển thị trên màn hình chính
  - Input: Quotation data (Factory B vs Factory D vs Factory E — price/lead time/MOQ/track record)
  - Output: Bảng so sánh đầy đủ + recommendation
  - ⭐ **DỪNG — đợi phản hồi phòng trước khi tiếp tục**
  - Hỏi: "Bình thường làm bảng này mất bao lâu?"
- **Prompt 5 — Monthly Report Outline:**
  - Facilitator chạy (5 phút)
  - ⚠️ *Nếu AI quên context trước Prompt 5 → paste lại toàn bộ WF5 data block trước khi chạy*
  - Output: Monthly Operations Report outline đầy đủ + Executive Summary

**Gợi ý hình ảnh:** Quotation comparison table với recommendation highlighted; star badge WOW MOMENT
**Ghi chú thuyết trình:** DỪNG sau Prompt 4. Để yên cho phòng phản ứng. Không chen vào quá nhanh.

---

### Slide 20 — WF5 Bước 6+7: Email GoldBug US + Debrief
**Key message:** Dashboard xong, báo cáo tháng xong, email US xong — toàn bộ trong 1 session.

**Nội dung:**
- **Prompt 6 — Email tiếng Anh gửi GoldBug US:**
  - **Thiên Kim tự chạy**
  - Output: Email ~200 từ chuyên nghiệp — tóm tắt tháng, risk highlights, action items
- **Prompt 7 *(optional — cắt nếu > 15:00)*:** Email nội bộ tiếng Việt
- **Debrief 3 câu (bắt buộc):**
  1. "Kim Thoa: tiết kiệm được bao nhiêu thời gian so với làm tay?"
  2. "Output có dùng làm nền cho báo cáo tháng 6 thật không?"
  3. "Để áp dụng ngay, bạn cần chuẩn bị gì?"

**Gợi ý hình ảnh:** Email preview + time-saved counter
**Ghi chú thuyết trình:** Debrief 3 câu này quan trọng — đây là "landing" sau wow moment. Không bỏ qua.

---

## MODULE 6 — WF6 TRAINING MATERIAL | Slide 21 | 15:10–15:25

---

### Slide 21 — WF6: Training Material Presentation Assistant *(Optional)*
**Key message:** Tạo outline slide training cho nhà máy trong 5 phút — không cần bắt đầu từ trang trắng.

**Nội dung:**
- ⚠️ **Cắt nếu:** chưa xong WF4 trước 14:00 HOẶC đang > 15:15
- Ai dùng: Thiên Kim, PD, QA/QC Manager
- Tình huống: Cần tạo slide training cho team nhà máy về quy trình FRI mới (5–7 slides)
- **Prompt Box:**
  ```
  Tôi cần tạo slide training cho team nhà máy về quy trình FRI mới.
  Nội dung: [mô tả ngắn].
  Hãy tạo outline 6 slides: Mục tiêu, Quy trình từng bước,
  Top 5 lỗi thường gặp, Checklist Pass/Fail, Cam kết.
  Thêm: 3 Learning Objectives và 1 quiz question cuối.
  Ngôn ngữ: tiếng Việt đơn giản.
  ```
- Output mong đợi: Outline 6 slides + learning objectives + quiz question
- ⚠️ **Safety:** Không đưa giá cả, thông tin nhạy cảm vào tài liệu training gửi nhà máy

**Gợi ý hình ảnh:** Slide outline wireframe
**Ghi chú thuyết trình:** Demo 5 phút + Q&A 5 phút. Ai muốn thử thì thử ngay. Nếu không có thời gian → gửi script qua Zalo.

---

## MODULE 7 — THỰC HÀNH + CHỐT PILOT | Slides 22–27 | 15:30–17:30

---

### Slide 22 — Thực Hành Tự Do Theo Nhóm
**Key message:** Bây giờ dùng việc thật — đã ẩn tên — để thực hành với AI.

**Nội dung:**
- Bảng nhóm (hiển thị rõ):
  | Nhóm | Thành viên | Workflow |
  |---|---|---|
  | QC | Lan Anh, Khánh Linh, Nguyễn Thị Yến | WF3: Inspection Report |
  | QA/DCL | Xuân Trâm | WF4/WF2 |
  | PD | Hải Yến, Sandra | WF3/WF1 |
  | Leadership | Thiên Kim, Kim Thoa | WF5 |
  | Office Admin | Hạnh | WF7 *(nếu chưa chạy)* |
- Hướng dẫn:
  - Chọn 1 việc thật từ tuần này (đã ẩn trước)
  - Dùng 1 prompt từ Handout Phần 4
  - Sẵn sàng chia sẻ sau 20 phút

**Gợi ý hình ảnh:** Group icons + clock countdown
**Ghi chú thuyết trình:** Đi vòng quanh — ưu tiên nhóm QC và Office Admin trước.

---

### Slide 23 — Gallery Share: 2–3 Nhóm Chia Sẻ Output
**Key message:** Không cần hoàn hảo — chia sẻ cả khi AI trả lời chưa đúng.

**Nội dung:**
- Format: 2 phút/nhóm — 3 câu hỏi:
  1. Output gì?
  2. AI làm tốt điểm nào?
  3. Cần sửa gì?
- Nhắc: "Đây là safe space — không ai bị đánh giá vì AI trả lời sai."

**Gợi ý hình ảnh:** Gallery wall with sticky notes — diverse outputs
**Ghi chú thuyết trình:** Chọn 2–3 nhóm có output thú vị hoặc có lỗi hay để học.

---

### Slide 24 — Pilot Shortlist v1.4: Chọn Pilot Của Bạn
**Key message:** Không phải đề nghị — đây là cam kết 2 tuần.

**Nội dung:**
- Bảng pilot (gọi tên từng người — họ thấy mình trong đó):
  | Người phụ trách | Workflow | Pilot Use Case | Timeline |
  |---|---|---|---|
  | Kim Thoa | WF5 | Monthly Dashboard + Quotation | Tháng 6 |
  | Thiên Kim | WF5 | PO Master + Shipment Risk | Tuần 25–26 |
  | Hải Yến, Sandra | WF3 | FRI Report + Defect Description | Lần kiểm tiếp |
  | Lan Anh, Khánh Linh | WF1+WF3 | Email Summary + Defect | Tuần sau |
  | Xuân Trâm | WF2+WF4 | DCL Comparison + CAPA | Khi nhận DCL mới |
  | Hạnh | WF7 | Invoice Email Extraction | Ngay sau training ✅ |

**Gợi ý hình ảnh:** Pilot assignment cards với tên rõ ràng
**Ghi chú thuyết trình:** Gọi tên từng người — không nói chung chung. "Kim Thoa — pilot của bạn là WF5."

---

### Slide 25 — Cam Kết Pilot + Lịch Check-in
**Key message:** Không để ai ra về mà chưa chọn pilot.

**Nội dung:**
- Hướng dẫn điền handout ngay (5 phút): Workflow + Use Case + First Test Date + Success Measure
- Lịch check-in:
  - **📅 20/06 (Thứ 6):** Zalo ngắn — đã thử chưa? kết quả 1 câu?
  - **📅 23/06 (Thứ 2):** Họp 15 phút — chia sẻ kết quả đầu tiên
  - **📅 30/06 (Thứ 2):** Tổng kết 2 tuần — Scale / Stop / Revise
- Support: Câu hỏi → Zalo Thang bất cứ lúc nào

**Gợi ý hình ảnh:** Calendar timeline 20/23/30 với milestones
**Ghi chú thuyết trình:** Thu handout đã điền hoặc chụp ảnh trước khi giải tán.

---

### Slide 26 — Recap: 5 Điều Mang Về Hôm Nay
**Key message:** 5 thứ — không cần nhớ tất cả, nhưng hãy làm ít nhất 1 trong 7 ngày tới.

**Nội dung:** 5 điểm (đánh số lớn, font to):
1. Quy tắc RED/YELLOW/GREEN + Anonymization — làm việc với AI an toàn
2. Prompt Formula: Role + Task + Context + Output + Constraints
3. 7 Workflows phù hợp công việc Redbug (WF0–WF6, WF7 Appendix)
4. Pilot cam kết 2 tuần — mỗi người 1 use case thật
5. Handout + Prompt Library → tham khảo bất cứ lúc nào

**Gợi ý hình ảnh:** 5 icon summary — shield, formula, workflow, calendar, book
**Ghi chú thuyết trình:** Đọc chậm — đây là moment team nhìn lại một ngày. Không vội.

---

### Slide 27 — Closing
**Key message:** AI không làm thay bạn — nhưng AI + bạn sẽ nhanh hơn và tốt hơn bạn một mình.

**Nội dung:**
- Quote lớn (navy): *"AI không làm thay bạn. Nhưng AI + bạn sẽ nhanh hơn và tốt hơn bạn một mình."*
- Website: https://redbug-ai-training-2026.vercel.app/
- Câu hỏi sau training → Zalo Thang
- Check-in đầu tiên: **Thứ Sáu 20/06**
- Logo GoldBug + Redbug AI Training v1.0

**Gợi ý hình ảnh:** Clean closing slide — quote to, navy nền, logo
**Ghi chú thuyết trình:** Chụp ảnh nhóm. Thu handout đã điền. Cảm ơn ngắn gọn và chân thành.

---

## APPENDIX — Slides A1–A4 (chỉ chiếu nếu có câu hỏi hoặc còn thời gian)

---

### Slide A1 — WF7: Office Admin Invoice Processing *(Optional — 10 phút)*

**Nội dung:**
- ⚠️ **BẢO MẬT — Phải nhấn mạnh:**
  > *"Không cho AI quét toàn bộ inbox. Chỉ xử lý email hóa đơn mà Hạnh đã tự chọn và lọc thủ công trước."*
- Ai dùng: Hạnh (Office Admin)
- Tình huống: Nhận email hóa đơn từ Vendor X — cần trích xuất + ghi nhận + đặt tên file
- **Prompt Box:**
  ```
  Đây là email hóa đơn từ nhà cung cấp
  (tôi đã chọn email này thủ công).
  Hãy trích xuất: Nhà cung cấp, Số hóa đơn, Ngày, Tổng tiền, Hạn thanh toán.
  Tạo 1 dòng bảng expense record.
  Gợi ý tên file: YYYYMMDD_VendorX_InvoiceNo_Amount.pdf
  ```
- Output mong đợi: Trích xuất hóa đơn + 1 dòng expense + tên file chuẩn
- 5-step safe workflow: Chọn thủ công → Ẩn danh → Paste → Xác nhận output → Lưu

**Ghi chú thuyết trình:** Chiếu WF7-F security contrast để giải thích tại sao không paste toàn inbox.

---

### Slide A2 — ChatGPT vs Claude vs Gemini: Tool Nào Phù Hợp?

**Nội dung:**
- So sánh 3 tool (điền sau show-of-hands đầu buổi):
  | Tool | Free | Plus/Pro | Phù hợp cho Redbug |
  |---|---|---|---|
  | ChatGPT | Custom Instructions miễn phí | Custom GPT cần Plus/Team | WF1–WF6 |
  | Claude | Claude.ai miễn phí | Pro = more messages | WF3/WF5 |
  | Gemini | Google Workspace integration | - | WF6/docs |
- ChatGPT Free workaround: Paste persona prompt đầu mỗi chat session
- Khuyến nghị: Bắt đầu với ChatGPT Free → upgrade nếu cần sau 2 tuần pilot

---

### Slide A3 — Làm Việc Với File PDF Tech Pack

**Nội dung:**
- Cách đúng: Copy text từ PDF → paste vào chat (không upload file gốc)
- Cách dùng OCR nếu PDF scan: Google Drive viewer → copy text
- ⚠️ **Không paste tech pack có giá / PO thật — ẩn trước**
- Mẹo: Nếu PDF nhiều trang, chỉ copy trang liên quan (không paste toàn bộ)

---

### Slide A4 — Advanced Prompting + AI Đọc Ảnh Defect

**Nội dung:**
- Chain prompting: Output Prompt 1 làm input Prompt 2 (demo: WF3 → WF4)
- Upload ảnh defect → AI mô tả lỗi bằng tiếng Anh (cần ChatGPT Plus / Claude Pro)
- Template chain: `Inspection Notes → WF3 Report → WF4 CAPA → WF5 Dashboard`
- Khi nào nên chain: khi output cần nhiều bước xử lý

---

*Redbug AI Training v1.0 | Slide Deck Outline v1.5 | 27 slides chính + 4 Appendix | 12/06/2026*
*Màu sắc: Navy #003366 | Gold #C8960C | Red #CC0000 | Nền trắng*
