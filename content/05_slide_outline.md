# Redbug AI Training v1.3 – Slide Outline (Workflow-Based)
> Ngày 16/06/2026 | Tổng **29 slides chính** + 5 slides Appendix | 08:45 – 17:30
> v1.3 changes: Role-based → workflow-based; Thêm Slide Anonymization Protocol; WF1–WF6 demos; Office Admin → Appendix A1; GoldBug Brand → Appendix A2

---

## Module 0 – Opening (Slides 1–2) | 09:00 – 09:15

**Slide 1 – Title + Agenda**
> Redbug AI Training 2026
> "AI trong Quy trình Công việc Thực tế của Redbug Vietnam"
> 16/06/2026

Agenda trong ngày:
- Buổi sáng: Security + Anonymization + Prompt Basics + WF1 + WF2 Demos
- Buổi chiều: WF3 + WF4 Demos + WF5 Monthly Dashboard ⭐ + WF6 Training Material
- Thực hành nhóm + Chốt Pilot
- Cam kết: Ra về với ít nhất 1 pilot thực tế

**Slide 2 – Những gì team muốn giải quyết (từ 7 phản hồi khảo sát)**
> *(anonymous — không hiển thị tên cá nhân hay điểm số)*

Top nhu cầu nổi lên từ khảo sát:
- Tự động hóa báo cáo kiểm hàng (Inspection Report / FRI)
- Mô tả lỗi bằng tiếng Anh chuyên nghiệp
- Tóm tắt email dài, trích xuất action items
- Đối chiếu Tech Pack / DCL / Manual nhanh hơn
- Phân tích nguyên nhân lỗi và theo dõi CAPA
- Báo cáo tháng, dashboard hiệu suất nhà máy
- **Câu hỏi chung nhất: "AI có bảo mật không?"** → Giải quyết ngay hôm nay.

---

## Module 1 – AI Security + Anonymization (Slides 3–7) | 09:15 – 09:50

**Slide 3 – Câu hỏi team đang thắc mắc (từ khảo sát)**
> *"AI có bảo mật cho những gì tôi chia sẻ không?"*
> *"Tech pack, giá cả, dữ liệu nhà máy có an toàn không?"*

3 điều cần biết — hiển thị lớn, rõ:
1. AI không biết bạn là ai, trừ khi bạn tự nói ra.
2. AI không chia sẻ conversation của bạn với GoldBug US, nhà máy, vendor, hay người dùng khác.
3. Mỗi cuộc trò chuyện mới là một tờ giấy trắng — AI không nhớ session trước.

→ **Dùng Quy tắc RED/YELLOW/GREEN + ẩn danh hóa trước khi paste, bạn làm việc an toàn.**

**Slide 4 – Quy tắc RED / YELLOW / GREEN của Redbug**
> [Bảng màu lớn, font to, dễ nhìn từ cuối phòng]

| 🔴 RED – Không bao giờ | 🟡 YELLOW – Ẩn trước | 🟢 GREEN – Thoải mái |
|---|---|---|
| PO thật, giá FOB/margin/cost sheet, hợp đồng, audit finding nhạy cảm, thông tin cá nhân (email/phone) | Tên nhà máy → "Factory A" / Mã hàng → "Style-XXXX" / Tên khách hàng → "Customer X" / PO thật → "PO-XXXX" / Giá/cost → "[PRICE REMOVED]" | Quy trình chung, template trống, email thông thường đã anonymize, hỏi về kỹ thuật/chuyên môn không có dữ liệu nhạy cảm |

**Slide 5 – Bước Ẩn Danh Hóa Tài Liệu Trước Khi Dùng AI** *(Slide mới v1.3)*
> "Trước khi paste bất kỳ file / email / report nào vào AI — làm theo 3 bước này:"

**Bước 1:** Copy nội dung vào một document mới (KHÔNG sửa file gốc)

**Bước 2:** Dùng Ctrl+F → Replace All để thay thế:
- Tên nhà máy → **Factory A** (Factory B, Factory C nếu có nhiều)
- Tên vendor → **Vendor B**
- Tên khách hàng → **Customer X**
- Số PO thật → **PO-XXXX**
- Mã style thật → **Style-XXXX**
- Giá / cost / margin → **USD XXX** hoặc **[PRICE REMOVED]**
- Tên người thật / email / SĐT → **Person A** / **Email removed** / **Phone removed**

**Bước 3:** Kiểm tra nhanh — không còn thông tin nhạy cảm → Paste vào AI.

*[Facilitator: Demo live 2 phút — mở Notepad, paste email mẫu, Replace All ngay trên màn hình]*

**Slide 6 – Quiz tương tác: RED / YELLOW / GREEN?**
> Facilitator đọc từng tình huống — team giơ tay hoặc hô to đáp án

1. "Paste email nhà máy (có tên nhà máy) để AI tóm tắt" → **YELLOW** (ẩn tên trước)
2. "Paste cost sheet có giá FOB thật của PO-001" → **RED**
3. "Dùng AI viết email nhắc lịch submit mẫu" → **GREEN**
4. "Paste tech pack có logo GoldBug và số style thật" → **YELLOW** (ẩn logo, style number, customer name)
5. "Hỏi AI cách viết CAPA bằng tiếng Anh — không paste dữ liệu thật" → **GREEN**

**Slide 7 – Cam kết bảo mật + chuyển sang thực hành**
> "Quy tắc này không phải để cấm. Là để bảo vệ bạn và Redbug."
> "Ẩn → Copy → Paste → Dùng thoải mái."

*(Facilitator note: Nếu được hỏi về ChatGPT Free vs Plus → xem Appendix A3)*

---

## Module 2 – Prompt Basics (Slides 8–10) | 09:50 – 10:20

**Slide 8 – AI không đọc được suy nghĩ của bạn**
- Kết quả tốt = Input tốt
- [So sánh trực quan: Prompt mơ hồ → output chung chung | Prompt rõ → output Redbug-specific]
- Ví dụ: "Viết email" vs "Đóng vai QC, viết email tiếng Anh yêu cầu Factory A làm CAPA cho lỗi đứt chỉ, tone chuyên nghiệp, dưới 150 từ."

**Slide 9 – Công thức Prompt Chuẩn + Starter Prompt**
> **Role + Task + Context + Output + Constraints**

Bảng ví dụ 1 dòng cho mỗi thành phần (dùng tình huống QC hoặc QA thật của Redbug):
- Role: "Tôi là QC Inspector tại Redbug Vietnam..."
- Task: "...hãy viết email báo cáo kết quả FRI"
- Context: "...cho lô hàng Style-XXXX, số lượng kiểm 200, phát hiện 9 lỗi Major"
- Output: "...dưới dạng bullet points rõ ràng"
- Constraints: "...bằng tiếng Anh, ngắn gọn, tone chuyên nghiệp"

**→ Thực hành ngay (5 phút): Mỗi người tự điền Starter Prompt theo vai trò.**
> "Từ bây giờ, tôi là [Vai trò] tại Redbug Vietnam..."

**Slide 10 – Khi AI trả lời chưa đúng ý: 3 cách sửa nhanh**
1. Thêm Constraint: "Viết ngắn hơn / bằng tiếng Anh / dạng bảng / tone chuyên nghiệp"
2. Cho ví dụ: "Ví dụ output tôi muốn: [dán mẫu]"
3. Yêu cầu lại: "Thử lại nhưng ngắn hơn 50% và thêm cột Deadline"

---

## Module 3 – Workflow Demos Buổi Sáng (Slides 11–13) | 10:30 – 12:00

**Slide 11 – Workflow Demo 1: Long Email / Manual / Tech Pack Summary Assistant**
*Dành cho: Tất cả — đặc biệt QC Inspector, QA/QC Manager, PD, Merchandiser*

- **Tình huống:** Chuỗi email 8 tin nhắn từ nhà máy về trễ tiến độ + thay đổi nguyên liệu. Cần tóm tắt ngay trong 2 phút.
- **Input:** Fictional email thread (đã anonymize — dán trực tiếp lên slide)
- **Prompt thực hành:** "Đây là chuỗi email với Factory A. Tóm tắt: 1. Vấn đề chính? 2. Trạng thái hiện tại? 3. Action items tôi cần làm ngay? 4. Rủi ro cần báo cáo Manager?"
- **Expected output:** Bullet-point summary + 3–5 action items có ưu tiên
- **Hands-on:** Mỗi người tự chạy với email thread giả lập
- **Safety reminder:** ⚠️ Ẩn tên nhà máy, vendor, mã PO trước khi paste

**Slide 12 – Workflow Demo 2: Tech Pack / Data Pack / DCL Comparison Assistant**
*Dành cho: PD (Hải Yến, Sandra), Footwear Quality (Kim Thoa), QA/QC (Xuân Trâm)*

- **Tình huống:** Nhận Tech Pack revision mới từ US. Cần tìm nhanh những gì thay đổi mà không đọc lại toàn bộ file.
- **Input:** Fictional spec cũ vs spec mới (10–15 dòng text)
- **Prompt thực hành:** "Đọc Spec v1 và Spec v2. Liệt kê những thông số, vật tư, yêu cầu đã thay đổi. Tạo bảng: Component | v1 | v2 | Mức độ ưu tiên | Cần thông báo nhà máy ngay không?"
- **Expected output:** Bảng 5 cột so sánh rõ ràng
- **Hands-on:** Hải Yến / Kim Thoa / Xuân Trâm tự chạy
- **Safety reminder:** ⚠️ Ẩn style number, customer name, PO trước khi paste DCL/Tech Pack thật

**Slide 13 – Break mindset + Q&A sáng**
> "AI không thay thế bạn. AI làm bản nháp — bạn làm chuyên gia."
- 5 phút hỏi đáp tự do
- *(Facilitator: Nếu hỏi upload PDF → xem Appendix A4)*

---

## Module 4 – Workflow Demos Buổi Chiều (Slides 14–16) | 13:15 – 14:15

**Slide 14 – Workflow Demo 3: Inspection Report + Defect Description Assistant**
*Dành cho: QC Inspector (Lan Anh, Khánh Linh), QA/QC Manager (Xuân Trâm), PD (Sandra)*

- **Tình huống:** Vừa đi kiểm hàng về, có ghi chú tay lộn xộn. Cần viết Inspection Report tiếng Anh chuẩn + mô tả defect chính xác trong 10 phút.
- **Input:** Fictional QC notes — "PO-XXXX, Swaddle, Factory A. Kiểm 200. Dơ dầu máy: 5 (Major). Đứt chỉ: 3 (Minor). Hụt size 2cm: 4 (Major). Total Major 9 > AQL. Fail."
- **Prompt thực hành:**
  > "Tôi là QC Inspector. Từ ghi chú sau [paste ghi chú], hãy: 1. Viết Inspection Summary tiếng Anh chuyên nghiệp (Pass/Fail, số lượng, lỗi chính). 2. Tạo bảng Defect List: Defect Name | Description (English) | Major/Minor | Qty | % Rate. 3. Viết email ngắn tiếng Anh gửi Factory A: thông báo Fail, yêu cầu 100% sort + CAPA trong 48h."
- **Expected output:** Summary paragraph + Defect bảng + Email tiếng Anh
- **Hands-on:** Lan Anh / Khánh Linh tự chạy
- **Safety reminder:** ⚠️ PO-XXXX và Factory A đã thay thế. Khi dùng data thật: Ctrl+F replace trước khi paste.

**Slide 15 – Workflow Demo 4: CAPA / Root Cause / Factory Risk Assistant**
*Dành cho: QA/QC Manager (Xuân Trâm), Footwear Quality (Kim Thoa)*

- **Tình huống:** Factory A gửi CAPA cho lỗi đứt chỉ tăng 3 tháng liên tiếp với nội dung: "Sẽ nhắc công nhân cẩn thận hơn."
- **Input:** Fictional CAPA + trend data (3%, 3.75%, 5.5% — 3 tháng)
- **Prompt thực hành:**
  > "Tôi là QA Manager. Factory A có lỗi open seam tăng dần 3 tháng: [paste trend]. Họ gửi CAPA: '[paste CAPA]'. Hãy: 1. Giải thích tại sao CAPA này không đạt. 2. Soạn email bác bỏ, yêu cầu 5 Whys analysis. 3. Gợi ý 4 Preventive Actions thực tế. 4. Đánh giá Factory A Risk Level (Low/Medium/High)."
- **Expected output:** Email phản hồi chuyên nghiệp + 5 Whys template + Preventive actions + Risk assessment
- **Hands-on:** Xuân Trâm tự chạy với CAPA đã anonymize
- **Safety reminder:** ⚠️ Ẩn tên nhà máy → Factory A, mã PO → PO-XXXX

**Slide 16 – Kết nối các Workflow Demos**
> "WF1 tóm tắt email → WF3 viết report → WF4 theo dõi CAPA → WF5 tổng hợp thành dashboard tháng."

[Sơ đồ luồng: Email → Summary (WF1) → Inspection Report (WF3) → CAPA (WF4) → Monthly Dashboard (WF5)]

---

## Module 5 – Workflow Demo 5 ⭐ Monthly Dashboard (Slides 17–22) | 14:15 – 15:15

**Slide 17 – WF5: Tại sao demo này khác?**
> "Demo này được thiết kế từ nhu cầu thật của 5/7 người khảo sát — không phải ví dụ chung chung."

Bảng pain point → giải pháp (từ survey):
- Báo cáo tháng tốn 2–3h thủ công → WF5 Bước 5: 5 phút
- Sample tracker lộn xộn → WF5 Bước 1+2
- Bảng so sánh báo giá → WF5 Bước 4: 20 giây
- Email tóm tắt gửi GoldBug US → WF5 Bước 6

**Slide 18 – Dữ liệu giả lập (anonymized) tháng 6**
> "Đây là loại data bạn đang có mỗi tháng — hôm nay dùng bản giả lập."

[Hiển thị tóm tắt 4 bảng: Sample Tracker / Order Progress / Defect Summary / Quotation]
- Tất cả tên nhà máy → Factory A/B/C
- Tất cả tên style → Style-XXXX
- Tất cả giá → [PRICE REMOVED]

**Slide 19 – Bước 1+2: Sample Priority + Order Progress Summary**
- Prompt 1 live (Facilitator demo trên màn hình)
- Kết quả: Bảng Priority / Overdue / At-Risk
- Prompt 2 live → Order Risk Level + shipping timeline

**Slide 20 – Bước 3: Defect Trend + Factory Risk Ranking**
- Prompt 3 live — **Kim Thoa hoặc Xuân Trâm tự chạy**
- Kết quả: Factory Risk Ranking + Top defects + nhận xét 100 từ tiếng Anh

**Slide 21 – Bước 4+5: Quotation Comparison ⭐ + Monthly Report**
> "Bình thường bảng so sánh báo giá mất bao lâu? AI làm trong 20 giây."

- Prompt 4 live — **Kim Thoa tự chạy**
- Prompt 5 live → Monthly report outline đầy đủ
- ⚠️ Nhắc: Dùng cùng session, không đóng tab. Nếu mất session → dùng Prompt 5 Fallback.

**Slide 22 – Bước 6+7: Email to GoldBug US + Email nội bộ + Debrief**
- Prompt 6 live → Email tiếng Anh ~200 từ gửi GoldBug US
- Prompt 7 live → Email nội bộ tiếng Việt
- **Debrief 3 câu:**
  1. "Kim Thoa: Bạn tiết kiệm được bao nhiêu thời gian so với làm tay?"
  2. "Output có dùng làm nền cho báo cáo tháng 6 thật không?"
  3. "Để áp dụng ngay, bạn cần chuẩn bị gì?"

---

## Module 6 – Workflow Demo 6: Training Material (Slide 23) | 15:15 – 15:35

**Slide 23 – Workflow Demo 6: Training Material Presentation Assistant**
*Dành cho: Thiên Kim, PD, QA/QC Manager — nếu cần tạo nội dung đào tạo nội bộ hoặc cho nhà máy*

- **Tình huống:** Cần tạo slide training ngắn cho team nhà máy về quy trình FRI mới (5–7 slides).
- **Input:** Fictional process description (đã anonymize)
- **Prompt thực hành:**
  > "Tôi cần tạo slide training cho team nhà máy về quy trình FRI mới. Nội dung: [mô tả]. Hãy tạo outline 6 slides: Mục tiêu, Quy trình từng bước, Top 5 lỗi thường gặp, Checklist Pass/Fail, Cam kết. Thêm: 3 Learning Objectives và 1 quiz question cuối. Ngôn ngữ: tiếng Việt đơn giản."
- **Expected output:** Outline 6 slides đầy đủ + learning objectives + quiz question
- **Hands-on:** 10 phút tự thử — ai muốn chạy thì chạy ngay
- **Safety reminder:** ⚠️ Không đưa giá cả, thông tin nhạy cảm vào tài liệu training gửi nhà máy

---

## Module 7 – Thực hành + Chốt Pilot (Slides 24–29) | 15:35 – 17:30

**Slide 24 – Thực hành Tự do theo Nhóm (50 phút)**

| Nhóm | Thành viên | Workflow tập trung |
|---|---|---|
| Nhóm 1 – QC | Lan Anh, Khánh Linh | WF3: Inspection Report + Defect Description |
| Nhóm 2 – QA/DCL | Xuân Trâm | WF4: CAPA + Factory Risk / WF2: DCL Comparison |
| Nhóm 3 – PD | Hải Yến, Sandra | WF3: Inspection Report / WF1: Long Email Summary |
| Nhóm 4 – Leadership | Thiên Kim, Kim Thoa | WF5: Dashboard / WF6: Training Material |

Hướng dẫn:
- Chọn 1 việc thật từ tuần này (đã ẩn thông tin nhạy cảm trước)
- Dùng 1 prompt từ Workflow Prompt Starters hoặc Prompt Library
- Sẵn sàng chia sẻ kết quả sau 45 phút

**Slide 25 – Gallery Share: 2–3 nhóm chia sẻ output**
- Mỗi nhóm 2 phút: Output gì? AI làm tốt điểm nào? Cần sửa gì?
- Không cần hoàn hảo — chia sẻ cả khi AI trả lời chưa đúng

**Slide 26 – Pilot Shortlist v1.3: Chọn pilot của bạn**

| Pilot | Người phụ trách | Workflow | Timeline |
|---|---|---|---|
| Monthly Operations / Quality / Sample Dashboard | Kim Thoa | WF5 | Áp dụng báo cáo tháng 6 |
| PO Master + Inspection Timing + Shipment Risk | Thiên Kim | WF5 | Tuần 25–26 |
| Final Inspection Report + Defect Description | Hải Yến, Sandra | WF3 | Lần kiểm hàng tiếp theo |
| Long Technical Email / Manual Summary | Lan Anh + QC team | WF1 | Ngay tuần sau |
| DCL Comparison + CAPA / Factory Risk | Xuân Trâm | WF2, WF4 | Khi nhận DCL mới |
| Office Admin Assistant | Hạnh | WF7 | **Pending — sau khi nhận survey response** |

**Slide 27 – Cam kết Pilot**
- Mỗi người chọn ít nhất 1 pilot — ghi vào tracker ngay
- Lịch check-in: 20/06 (Zalo/Slack), 23/06 (họp 15p), 30/06 (tổng kết)
- "Không để ai về mà chưa chọn."

**Slide 28 – Recap: 5 điều mang về hôm nay**
1. Quy tắc RED/YELLOW/GREEN + Anonymization Protocol — làm việc với AI an toàn
2. Prompt Formula — ra lệnh cho AI hiệu quả
3. 6 Workflow Demos phù hợp công việc thực tế Redbug
4. Pilot cam kết trong 2 tuần
5. Workflow Prompt Starters + Demo guides để tham khảo bất cứ lúc nào

**Slide 29 – Closing**
> "AI không làm thay bạn. Nhưng AI + bạn sẽ nhanh hơn và tốt hơn bạn một mình."

- Website training: https://redbug-ai-training-2026.vercel.app/
- Câu hỏi sau training → Zalo / [channel nội bộ]
- Check-in đầu tiên: **Thứ Sáu 20/06**

---

## Appendix – Slides dự phòng (không trình chiếu trừ khi có câu hỏi hoặc còn thời gian)

**Slide A1 – Office Admin Assistant (Mini-Demo)**
*Dành cho Hạnh — nếu còn thời gian hoặc Hạnh đã gửi survey response*

- Tình huống: Lịch trình 1 ngày thăm 2 nhà máy Bình Dương
- Prompt: "Đóng vai Office Manager, lên lịch trình di chuyển chi tiết cho chuyến đi..."
- 2 phiên bản: tiếng Anh cho khách US, tiếng Việt cho tài xế
- *(Pilot WF7 cho Hạnh sẽ khởi động sau khi nhận survey response)*

**Slide A2 – GoldBug Brand & Product Assistant (Mini-Demo)**
*Nếu còn thời gian — cho PD, Merch, Country Manager*

- Tình huống: Brainstorm stroller accessories mới có thể sản xuất tại VN
- Prompt: "Đóng vai Giám đốc PD của GoldBug, đề xuất 3 ý tưởng phụ kiện xe đẩy mới..."
- Debrief: Ý tưởng AI có khả thi với nhà máy VN không?

**Slide A3 – ChatGPT vs Claude vs Gemini: Tool nào phù hợp?**
- So sánh ngắn + khuyến nghị cho Redbug
- [Điền sau khi xác nhận team đang dùng tool gì — show-of-hands đầu buổi]

**Slide A4 – Làm việc với file PDF Tech Pack**
- Cách copy text từ PDF vào AI (không cần upload file)
- Lưu ý bảo mật: không paste tech pack có giá / PO thật

**Slide A5 – Advanced Prompting + AI đọc hình ảnh defect**
- Chain prompting: output Prompt 1 làm input Prompt 2
- Upload ảnh defect → AI mô tả lỗi bằng tiếng Anh (cần tài khoản Plus/Pro)

---

*v1.3 | Workflow-based revision | 29 slides chính + 5 Appendix | Cập nhật 12/06/2026*
*Key changes: role-based → workflow-based framing; Slide 5 Anonymization Protocol mới; WF1–WF6 demos; Office Admin → Appendix A1; GoldBug Brand → Appendix A2*
