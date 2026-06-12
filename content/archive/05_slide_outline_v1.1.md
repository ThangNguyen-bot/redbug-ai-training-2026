# Redbug AI Training v1.2 - Slide Outline
> Ngày 16/06/2026 | Tổng **29 slides chính** + 5 slides Appendix | 08:45 – 17:30
> v1.2 changes: Rút từ 42 → 29 slides; gộp demo slides; Slide 4 ẩn danh; chuyển tool comparison / ZDHC bonus / advanced tips vào Appendix

---

## Module 0 – Opening (Slides 1–2) | 09:00 – 09:15

**Slide 1 – Title + Agenda**
> Redbug AI Training 2026
> "AI trong Công việc Thực tế của Redbug Vietnam"
> 16/06/2026

Agenda trong ngày:
- Buổi sáng: Security + Prompt basics + Demos 1–3
- Buổi chiều: Demos 4–7 + Thực hành nhóm + Chốt Pilot
- Cam kết: Ra về với ít nhất 1 pilot thực tế

**Slide 2 – Tại sao hôm nay? (Show, don't tell)**
- Không phải: Học để biết AI là gì
- Mà là: Dùng AI tiết kiệm 30–60 phút/ngày ngay tuần tới
- [Live demo ngắn 30 giây: paste → kết quả ngay trên màn hình]
- "Top nhu cầu nổi lên từ khảo sát team:" *(anonymous, không hiển thị tên cá nhân hay điểm số)*
  - Tự động hóa dữ liệu và báo cáo hàng tháng
  - Nhắc việc ưu tiên theo ngày / tuần
  - Theo dõi tiến độ mẫu và đơn hàng
  - Bảng so sánh báo giá nhanh
  - Phân tích defect trend và factory risk
  - Câu hỏi bảo mật: AI có an toàn không?

---

## Module 1 – AI Security (Slides 3–6) | 09:15 – 09:45

**Slide 3 – Câu hỏi mọi người đang thắc mắc**
> *"AI có bảo mật cho những gì tôi hỏi và thông tin chia sẻ không?"*

3 điều cần biết — hiển thị lớn, rõ:
1. AI không biết bạn là ai, trừ khi bạn tự nói ra.
2. AI không chia sẻ conversation của bạn với GoldBug US, nhà máy, vendor, hay người dùng khác.
3. Mỗi cuộc trò chuyện mới là một tờ giấy trắng — AI không nhớ session trước.

→ **Dùng Quy tắc RED/YELLOW/GREEN, bạn làm việc an toàn.**

*(Ghi chú facilitator: Nếu được hỏi về ChatGPT Free vs Plus — xem Appendix A1)*

**Slide 4 – Quy tắc RED / YELLOW / GREEN của Redbug**
> [Bảng màu lớn, font to, dễ nhìn từ cuối phòng]

| 🔴 RED – Không bao giờ | 🟡 YELLOW – Ẩn trước | 🟢 GREEN – Thoải mái |
|---|---|---|
| PO thật, giá FOB, hợp đồng, audit finding nhạy cảm | Tên nhà máy → "Factory A" / Mã hàng → "Style X" / Tên khách hàng → "Brand US" | Quy trình chung, template trống, email thông thường, data đã anonymize |

**Slide 5 – Quiz tương tác: RED / YELLOW / GREEN?**
> Facilitator đọc từng tình huống — team giơ tay hoặc hô to đáp án

1. "Paste email từ nhà máy để AI tóm tắt" → **YELLOW**
2. "Paste giá FOB thật của PO-001" → **RED**
3. "Dùng AI viết email nhắc lịch submit mẫu" → **GREEN**
4. "Paste audit finding nhà máy X" → **YELLOW/RED** (tùy nội dung)
5. "Dịch tech pack comment sang tiếng Việt" → **GREEN**

**Slide 6 – Cam kết bảo mật + chuyển sang thực hành**
> "Quy tắc này không phải để cấm. Là để bảo vệ bạn và Redbug."
> "Ẩn thông tin nhạy cảm xong → dùng thoải mái."

---

## Module 2 – Prompt Basics (Slides 7–9) | 09:45 – 10:15

**Slide 7 – AI không đọc được suy nghĩ của bạn**
- Kết quả tốt = Input tốt
- [So sánh trực quan: Prompt mơ hồ → output chung chung | Prompt rõ → output Redbug-specific]

**Slide 8 – Công thức Prompt Chuẩn + Starter Prompt**
> **Role + Task + Context + Output + Constraints**

Bảng ví dụ 1 dòng cho mỗi thành phần (dùng tình huống QC hoặc Merch thật của Redbug).

**→ Thực hành ngay (5 phút): Mỗi người tự điền Starter Prompt theo vai trò của mình.**
> "Từ bây giờ, tôi là [Vai trò] tại Redbug Vietnam..."

**Slide 9 – Khi AI trả lời chưa đúng ý: 3 cách sửa nhanh**
1. Thêm Constraint: "Viết ngắn hơn / bằng tiếng Anh / tone chuyên nghiệp"
2. Cho ví dụ: "Ví dụ output tôi muốn: [dán mẫu]"
3. Yêu cầu lại: "Thử lại nhưng ngắn hơn 50%"

---

## Module 3 – Demos Buổi Sáng (Slides 10–14) | 10:30 – 12:00

**Slide 10 – Demo 1: GoldBug Brand & Product Assistant**
*Dành cho: PD, Merch, Country Manager*

- Situation: Brainstorm stroller accessories mới có thể sản xuất tại VN
- Input data tóm tắt (Brand DNA + Factory capabilities)
- Prompt thực hành + [QR / text để copy]
- Debrief: Ý tưởng AI có khả thi không? Cần Constraint gì để bớt generic?

**Slide 11 – Demo 2: Merchandising / Sample Follow-up Assistant**
*Dành cho: Merchandiser (Sandra)*

- Situation: Email trễ tiến độ từ nhà máy → cần báo US ngay
- Input: fictional factory email (dán trực tiếp lên slide)
- Prompt thực hành
- Debrief + Safety check: "Đã ẩn tên nhà máy chưa?"

**Slide 12 – Demo 3: Tech Pack Comment Assistant**
*Dành cho: PD (Hải Yến, Trinh), Footwear (Kim Thoa)*

- Situation: Comments mẫu giày baby từ Mỹ, cần action plan cho nhà máy
- Input: 4 fictional comments (dán trực tiếp)
- Prompt: Dịch + tạo bảng 3 cột
- Debrief: Có từ kỹ thuật nào AI dịch sai không? Team tự điều chỉnh.

**Slide 13 – Break mindset + Q&A sáng**
> "AI không thay thế bạn. AI làm bản nháp — bạn làm chuyên gia."
- 5 phút hỏi đáp tự do

*(Ghi chú facilitator: Nếu ai hỏi về upload PDF — xem Appendix A2)*

---

## Module 4 – Demos Chuyên sâu Buổi Chiều (Slides 14–18) | 13:15 – 14:20

**Slide 14 – Demo 4: QA/QC Inspection Report + CAPA**
*Dành cho: Xuân Trâm, Lan Anh, Yến, Linh*

- Situation: Ghi chú tay lộn xộn sau khi đi kiểm hàng Swaddle Blanket (Fail)
- Input: fictional QC notes (dán trực tiếp)
- Prompt: Ghi chú → Email CAPA tiếng Anh
- Debrief: Email có đủ chuyên nghiệp để gửi nhà máy không?

**Slide 15 – Demo 5: CSR / Factory Audit / Chemical Compliance**
*Dành cho: Tú Anh / Anna*

- Situation: Finding hóa chất spot lifter không nhãn mác, gần khu cắt vải
- Input: fictional finding (1 câu tiếng Anh + giải thích ngắn tiếng Việt)
- Prompt: CAPA plan 3 phần (Immediate / Root Cause / Preventive)
- Debrief: Phần nào AI làm tốt? Phần nào cần bổ sung kiến thức chuyên môn?

**Slide 16 – Demo 6: Office Admin / Travel & Expense (Quick Demo)**
*Dành cho: Hạnh — 20 phút, facilitator làm mẫu nhanh*

- Situation: Lịch trình 1 ngày thăm 2 nhà máy Bình Dương
- Input: fictional itinerary data (dán trực tiếp)
- Prompt: 2 phiên bản (tiếng Anh cho khách US, tiếng Việt cho tài xế)
- Không cần debrief dài — chốt nhanh: "Hạnh, bạn muốn thử ngay không?"

---

## Module 5 – Demo 7 ⭐ Monthly Report Assistant (Slides 17–23) | 14:20 – 15:15

**Slide 17 – Demo 7: Tại sao demo này khác?**
> "Demo này được thiết kế từ nhu cầu thật của Redbug — không phải ví dụ chung chung."

Bảng pain point → giải pháp (từ file 07):
- Bảng so sánh báo giá thủ công → Bước 4: 20 giây
- Tổng hợp tiến độ mẫu lộn xộn → Bước 1+2
- Báo cáo tháng chuyên nghiệp → Bước 5
- Email tóm tắt gửi GoldBug US → Bước 6

**Slide 18 – Dữ liệu giả lập tháng 6**
> "Đây là loại data bạn đang có mỗi tháng. Hôm nay dùng bản giả lập."

[Hiển thị tóm tắt 4 bảng: Sample Tracker / Order Progress / Defect Summary / Quotation]

**Slide 19 – Bước 1+2: Priority List + Order Summary**
- Prompt 1 live (Thang demo trên màn hình)
- Kết quả: 3 bảng Priority / Overdue / Risk
- Prompt 2 live → Order Risk Level table

**Slide 20 – Bước 3: Defect Trend Analysis**
- Prompt 3 live — **Kim Thoa hoặc Xuân Trâm tự chạy**
- Kết quả: Factory Risk Ranking + Top defects + nhận xét 100 từ tiếng Anh

**Slide 21 – Bước 4: Quotation Comparison ⭐**
> "Bình thường mất bao lâu? AI làm trong 20 giây."

- Prompt 4 live — **Kim Thoa tự chạy**
- Kết quả: Bảng so sánh đầy đủ + khuyến nghị Case A / Case B

**Slide 22 – Bước 5+6: Monthly Report + Email to GoldBug US**
- ⚠️ Nhắc: Dùng cùng session, không đóng tab. Nếu mất session → dùng Prompt 5 Fallback.
- Prompt 5 live → Report outline đầy đủ
- Prompt 6 live → Email tiếng Anh ~200 từ

**Slide 23 – Bước 7 + Debrief Demo 7**
- Prompt 7: Email nội bộ tiếng Việt (Thang chạy nhanh)
- Debrief 3 câu:
  1. "Kim Thoa: Bạn tiết kiệm được bao nhiêu thời gian so với làm tay?"
  2. "Output Report có dùng làm nền cho báo cáo tháng 6 thật không?"
  3. "Để áp dụng ngay cuối tháng 6, bạn cần chuẩn bị gì?"

---

## Module 6 – Thực hành + Chốt Pilot (Slides 24–29) | 15:30 – 17:30

**Slide 24 – Thực hành Tự do theo Nhóm (60 phút)**
> [Bảng phân nhóm 4 nhóm — tên người, demo tập trung]

Hướng dẫn:
- Chọn 1 việc thật từ tuần này (đã ẩn thông tin nhạy cảm)
- Dùng 1 prompt từ Prompt Library
- Sẵn sàng chia sẻ kết quả sau 45 phút

**Slide 25 – Gallery Share: 2–3 nhóm chia sẻ output**
- Mỗi nhóm 2 phút: Output gì? AI làm tốt điểm nào? Cần sửa gì?
- Không cần hoàn hảo — chia sẻ cả khi AI trả lời chưa đúng

**Slide 26 – Pilot Shortlist: Chọn pilot của bạn**
> [Bảng 5 pilots ưu tiên từ file 03]

| Pilot | Người phụ trách | Pain Point chính |
|---|---|---|
| Monthly Tech/Quality/Sample Report | Kim Thoa | Báo cáo tháng + báo giá |
| Inspection Report + CAPA | Xuân Trâm + QC team | Ghi chú → báo cáo chuẩn |
| Sample Follow-up + Factory Email | Sandra | Email trễ tiến độ |
| CSR/Chemical/Audit CAPA | Tú Anh / Anna | Finding → CAPA plan |
| Travel / Expense / Admin | Hạnh | Lịch trình + chi phí |

**Slide 27 – Cam kết Pilot**
- Mỗi người chọn ít nhất 1 pilot — ghi vào tracker ngay
- Lịch check-in: 20/06 (Zalo/Slack), 23/06 (họp 15p), 30/06 (tổng kết)
- "Không để ai về mà chưa chọn."

**Slide 28 – Recap: 5 điều mang về hôm nay**
1. Quy tắc RED/YELLOW/GREEN — làm việc với AI an toàn
2. Prompt Formula — ra lệnh cho AI hiệu quả
3. 7 Demos phù hợp vai trò của bạn
4. Pilot cam kết trong 2 tuần
5. Prompt Library + Demo 7 guide để tham khảo bất cứ lúc nào

**Slide 29 – Closing**
> "AI không làm thay bạn. Nhưng AI + bạn sẽ nhanh hơn và tốt hơn bạn một mình."

- Website training: https://redbug-ai-training-2026.vercel.app/
- Câu hỏi sau training → Zalo / [channel nội bộ]
- Check-in đầu tiên: **Thứ Sáu 20/06**

---

## Appendix – Slides dự phòng (không trình chiếu trừ khi có câu hỏi)

**Slide A1 – ChatGPT vs Claude vs Gemini: Tool nào phù hợp?**
- So sánh ngắn: ChatGPT Free / Plus / Team | Claude.ai | Gemini
- Khuyến nghị cho Redbug: [điền sau khi biết team đang dùng tool gì]
- Lý do chuyển vào Appendix: câu trả lời tốt nhất phụ thuộc vào tool team đang có → trả lời trực tiếp khi được hỏi

**Slide A2 – Làm việc với file PDF Tech Pack**
- Cách copy text từ PDF vào AI (không cần upload file)
- Lưu ý bảo mật: không paste tech pack có thông tin giá / PO thật
- Nếu ChatGPT/Claude hỗ trợ upload → hướng dẫn bật tính năng

**Slide A3 – AI đọc hình ảnh defect**
- Claude và ChatGPT Plus có thể đọc ảnh
- Demo concept: upload ảnh defect → AI mô tả lỗi bằng tiếng Anh
- Áp dụng cho: Kim Thoa, QC Inspectors
- Lý do chuyển vào Appendix: cần tài khoản Plus/Pro; không muốn confuse người dùng Free ngay ngày đầu

**Slide A4 – Giải thích ZDHC / Higg / MRSL / SDS cho Nhà máy**
- Prompt giải thích tiêu chuẩn hóa chất phức tạp thành ngôn ngữ đơn giản
- Dành riêng cho Tú Anh / Anna
- Lý do chuyển vào Appendix: nội dung chuyên sâu, chỉ relevant cho 1–2 người

**Slide A5 – Advanced Prompting Tips**
- Iterative prompting: không hoàn hảo lần đầu → sửa tiếp
- Chain prompting: output của Prompt 1 làm input Prompt 2
- Few-shot example: cho AI 1 ví dụ mẫu để học tone
- Lý do chuyển vào Appendix: người mới chưa cần ngày 1

---

*v1.2 | Structural fix: Rút từ 42 → 29 slides chính + 5 Appendix | Gộp demo slides, Slide 2 dùng anonymous survey themes, chuyển tool comparison / ZDHC bonus / advanced tips vào Appendix*
