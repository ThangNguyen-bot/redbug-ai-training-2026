# Redbug AI Training v1.0 - Demo & Exercise Pack

Tài liệu này chứa các kịch bản thực hành (Hands-on Demos) dành cho buổi training. Mục tiêu: 70% thời gian là thực hành. Các học viên sẽ tận mắt thấy AI giải quyết các tình huống công việc quen thuộc tại Redbug.

---

## Demo 1: GoldBug Brand & Product Assistant
**Dành cho:** Tất cả (nhưng tập trung vào PD, Merch, Country Manager)

**1. Objective (Mục tiêu):**
Hiểu cách biến AI thành một chuyên gia nắm rõ định vị thương hiệu và dòng sản phẩm của GoldBug để lấy ý tưởng hoặc kiểm tra sự phù hợp của sản phẩm.

**2. Business Situation (Tình huống):**
GoldBug đang muốn mở rộng dòng sản phẩm "On-the-go travel gear" (Phụ kiện du lịch cho bé). Redbug Vietnam cần brainstorm 3 ý tưởng phụ kiện xe đẩy (stroller accessories) mới có thể sản xuất tại các nhà máy ở Việt Nam.

**3. Fictional Input Data:**
- Brand DNA: Safety, Mom-owned, On-the-go, Family well-being.
- Current products: Carrier covers, diaper bags, head supports, mirrors.
- Factory capabilities in VN: May mặc túi xách, ép nhựa cơ bản, lưới (mesh).

**4. Participant Task:**
Thiết lập AI đóng vai Giám đốc phát triển sản phẩm của GoldBug và yêu cầu đề xuất ý tưởng.

**5. Prompt Thực Hành:**
> "Đóng vai Giám đốc Phát triển Sản phẩm của GoldBug (thương hiệu chuyên về đồ an toàn và phụ kiện di chuyển cho em bé tại Mỹ). Dựa trên thế mạnh của các nhà máy tại Việt Nam (may túi xách, làm lưới, ép nhựa cơ bản), hãy đề xuất 3 ý tưởng phụ kiện xe đẩy (stroller accessories) mới. Đảm bảo ý tưởng thực tế, đề cao tính an toàn và tiện lợi cho mẹ bầu. Trình bày: Tên sản phẩm, Chức năng, và Chất liệu đề xuất."

**6. Debrief (Đánh giá sau Demo):**
- Ý tưởng AI đưa ra có khả thi với nhà máy VN không?
- Cần tinh chỉnh prompt thế nào để ý tưởng bớt chung chung?

---

## Demo 2: Merchandising / Sample Follow-up Assistant
**Dành cho:** Merchandiser (Sandra)

**1. Objective (Mục tiêu):**
Dùng AI để xử lý các email giải trình tiến độ dài dòng từ nhà máy, tóm tắt rủi ro và soạn email trả lời cho US.

**2. Business Situation (Tình huống):**
Nhà máy A gửi một email giải thích lý do giao mẫu (Diaper Bag) trễ. Cần báo cáo cho US.

**3. Fictional Input Data (Email từ nhà máy):**
*"Dear Sandra, We are sorry to inform that the diaper bag sample cannot be finished today. The fabric supplier delivered the wrong shade of navy blue for the lining. We had to reject the fabric and re-order. New fabric will arrive in 3 days. Also, the custom metal zipper puller is delayed at customs, expected tomorrow. We will try our best to finish the sample by next Tuesday. Please inform US."*

**4. Participant Task:**
Dùng AI tóm tắt nguyên nhân và soạn email trấn an, xin lùi lịch với GoldBug US.

**5. Prompt Thực Hành:**
> "Tôi là Merchandiser. Nhà máy vừa gửi thông báo trễ tiến độ mẫu túi Diaper Bag với nội dung: [Paste email nhà máy]. Hãy giúp tôi soạn 1 email bằng tiếng Anh chuyên nghiệp gửi team GoldBug US. Nội dung: Thông báo mẫu sẽ trễ đến thứ Ba tuần sau, tóm tắt rõ 2 nguyên nhân (sai màu vải lót, kẹt hải quan khóa kéo), và khẳng định chúng ta đang ép nhà máy ưu tiên làm gấp. Tone: Chuyên nghiệp, chịu trách nhiệm."

**6. Debrief & Safety Reminder:**
- Đã xóa tên thật của nhà máy chưa? (Safety - Yellow).
- Email AI viết có quá dài hoặc dùng từ ngữ quá cường điệu không?

---

## Demo 3: Product Development / Tech Pack Comment Assistant
**Dành cho:** Product Developer (Hải Yến, Trinh), Footwear Technologist (Kim Thoa)

**1. Objective (Mục tiêu):**
Sử dụng AI để dịch, phân loại, và tạo checklist công việc từ Buyer Comments chuyên ngành.

**2. Business Situation (Tình huống):**
Nhận được file Tech Pack / Comments mẫu Giày em bé từ Mỹ với ngôn ngữ chuyên ngành phức tạp.

**3. Fictional Input Data:**
*"1. Adjust heel counter pattern, it's hitting baby's ankle bone. 2. The velcro strap is 1cm too long, please shorten. 3. Lining mesh feels scratchy, change to softer tricot. 4. Outsole bonding line has excess cement visible."*

**4. Participant Task:**
Tạo một bảng action item bằng tiếng Việt và Anh để giao cho nhà máy sửa mẫu.

**5. Prompt Thực Hành:**
> "Tôi là Product Developer ngành giày dép trẻ em. Dưới đây là comment duyệt mẫu từ khách hàng Mỹ: [Paste input data]. Hãy dịch các lỗi này sang tiếng Việt chuyên ngành giày. Sau đó tạo một bảng gồm 3 cột: STT, Vấn đề (Anh - Việt), Yêu cầu sửa chữa gửi nhà máy."

---

## Demo 4: QA/QC Inspection Report + CAPA Assistant
**Dành cho:** QA/QC Manager (Xuân Trâm), QC Inspector (Lan Anh, Yến, Linh)

**1. Objective (Mục tiêu):**
Chuyển đổi ghi chú đi kiểm hàng lộn xộn thành báo cáo chuẩn và viết yêu cầu CAPA.

**2. Business Situation (Tình huống):**
QC vừa đi kiểm hàng mã chăn quấn bé (Swaddle Blanket), hàng rớt (Fail) do lỗi dơ và đo hụt size.

**3. Fictional Input Data (Ghi chú tay của QC):**
*"PO 9988, Swaddle. Số lượng kiểm: 200. Bị dơ dầu máy: 5 lỗi (Major). Bị đứt chỉ: 3 (Minor). Đo hụt chiều dài 2cm: 4 (Major). Tổng Major 9, Minor 3. Hàng rớt."*

**4. Participant Task:**
Yêu cầu AI viết 1 email bằng tiếng Anh báo cáo kết quả rớt này cho Manager và yêu cầu nhà máy làm báo cáo khắc phục (CAPA).

**5. Prompt Thực Hành:**
> "Tôi là QC. Hãy viết 1 email tiếng Anh gửi nhà máy (cc QA Manager). Thông báo lô hàng Swaddle Blanket PO 9988 bị FAIL. Tổng hợp các lỗi sau thành bullet points rõ ràng: [Paste ghi chú]. Yêu cầu nhà máy 100% phân loại lại hàng, làm vệ sinh vết dơ, và điền vào form CAPA (Corrective Action) gửi lại trong vòng 48h."

---

## Demo 5: CSR / Factory Audit / Chemical Compliance Assistant
**Dành cho:** Senior CSR / Audit (Tú Anh / Anna)

**1. Objective (Mục tiêu):**
Viết kế hoạch khắc phục an toàn lao động và compliance cho nhà máy may.

**2. Business Situation (Tình huống):**
Phát hiện xưởng may để hóa chất tẩy điểm (spot lifter) không dán nhãn mác (No MSDS) và để gần khu vực cắt vải.

**3. Fictional Input Data:**
Lỗi: "Spot lifter chemicals found without label and secondary containment, stored near cutting area."

**4. Participant Task:**
Lập kế hoạch yêu cầu nhà máy khắc phục ngay lập tức để đáp ứng tiêu chuẩn CSR.

**5. Prompt Thực Hành:**
> "Tôi là chuyên gia Đánh giá nhà máy (CSR/Audit). Tại xưởng may, tôi phát hiện lỗi: [Paste lỗi]. Hãy giúp tôi viết một CAPA (Corrective Action Plan) gồm 3 phần: Immediate Action (Khắc phục tức thời), Root Cause Analysis (Câu hỏi để tìm nguyên nhân gốc rễ), và Preventive Action (Hành động phòng ngừa lâu dài). Viết bằng tiếng Anh đơn giản để xưởng dễ hiểu."

---

## Demo 6: Office Admin / Travel & Expense Assistant
**Dành cho:** Office Manager (Hạnh)

**1. Objective (Mục tiêu):**
Tiết kiệm thời gian rà soát chi phí và sắp xếp lịch trình chuyến công tác.

**2. Business Situation (Tình huống):**
Chuẩn bị lịch trình cho chuyến công tác xuống 2 nhà máy ở Bình Dương.

**3. Fictional Input Data:**
- Team: 3 người (Thiên Kim, Sandra, Khách US).
- Khởi hành: 8:00 AM từ VP Quận 1.
- Điểm 1: Nhà máy X (Thuận An, Bình Dương). Họp 1.5 tiếng.
- Ăn trưa.
- Điểm 2: Nhà máy Y (Bến Cát, Bình Dương). Họp 2 tiếng.
- Về lại Q1 trước 5:00 PM.

**4. Participant Task:**
Lập lịch trình chi tiết (Itinerary) để gửi cho khách và tài xế.

**5. Prompt Thực Hành:**
> "Đóng vai Office Manager, hãy lên một lịch trình di chuyển chi tiết (Travel Itinerary) chuyên nghiệp cho chuyến đi thăm nhà máy với các dữ kiện sau: [Paste dữ liệu]. Hãy phân bổ thời gian hợp lý (tính toán thời gian di chuyển từ Q1 -> Thuận An khoảng 45p, Thuận An -> Bến Cát khoảng 40p). Cung cấp 2 phiên bản: 1 bản chi tiết gửi khách US (Tiếng Anh), 1 bản tóm tắt giờ giấc gửi tài xế (Tiếng Việt)."

---

---

## Workflow Demos v1.3 (Survey-driven)
> Cập nhật v1.3 | 12/06/2026 | Dựa trên 7 phản hồi khảo sát | Workflow-based framing
> Mỗi demo phục vụ nhiều vai trò cùng lúc thay vì chỉ 1 role

---

## Workflow Demo A: Long Technical Email Thread → Summary + Action Items
**Dành cho:** Tất cả — đặc biệt QC Inspector (Lan Anh, Khánh Linh), QA/QC Manager (Xuân Trâm), PD (Hải Yến, Sandra)

**1. Objective (Mục tiêu):**
Biến một chuỗi email dài, lộn xộn từ nhà máy hoặc vendor thành bản tóm tắt rõ ràng và danh sách action items trong dưới 3 phút.

**2. Fictional/Anonymized Input Data:**
*Email thread (đã anonymize):*

> **From:** Factory A – Production Manager | **Subject:** Re: Re: Re: Update on Style-XXXX Swaddle Blanket order
>
> Email 1 (3 ngày trước): "Dear Team, we have a fabric shortage issue. The knit supplier delivered wrong GSM (180g instead of 200g). We rejected and reordered. New delivery in 4 days."
>
> Email 2 (2 ngày trước): "Update: fabric arrived but color shade is slightly off. We are checking with lab. Meanwhile starting cutting for unaffected styles."
>
> Email 3 (hôm nay): "Lab result shows color within tolerance (+0.5 DE). We can proceed. However, sewing line capacity reduced this week — 2 workers on sick leave. New completion estimate: 3 days delay. We will compensate with weekend overtime."

**3. Copy/Paste Prompt:**
> "Đây là chuỗi email giữa tôi và Factory A về đơn hàng Style-XXXX. Hãy tóm tắt:
> 1. Vấn đề chính là gì? (1–2 câu)
> 2. Trạng thái hiện tại? (1 câu)
> 3. Action items tôi cần làm ngay hôm nay? (bullet points, ưu tiên theo mức độ quan trọng)
> 4. Rủi ro cần báo cáo lên Manager?
> [Paste email thread vào đây]"

**4. Expected Output (Kết quả mong đợi):**
- Đoạn tóm tắt 2–3 câu mô tả rõ vấn đề + trạng thái hiện tại
- Danh sách 3–5 action items có mức ưu tiên (Urgent / Normal)
- 1 câu risk note để báo cáo lên manager

**5. Safety Reminder:**
⚠️ Trước khi paste email thật: Replace tên nhà máy → Factory A, mã PO thật → PO-XXXX, tên style thật → Style-XXXX, tên người thật → Person A.

**6. Participant Hands-on Task:**
Mở AI tool. Dán fictional email thread trên. Chạy prompt. Đọc kết quả và trả lời: Action item nào AI đề xuất mà bạn có thể làm ngay hôm nay?

---

## Workflow Demo B: Tech Pack / Manual / DCL Comparison Assistant
**Dành cho:** Product Developer (Hải Yến, Sandra), Footwear Quality (Kim Thoa), QA/QC Manager (Xuân Trâm)

**1. Objective (Mục tiêu):**
Tìm nhanh những thay đổi giữa 2 version Tech Pack, DCL, hoặc Manual mà không cần đọc lại toàn bộ tài liệu. Tiết kiệm 30–60 phút đọc thủ công.

**2. Fictional/Anonymized Input Data:**
*Spec v1 (cũ):*
> Component: Outer fabric — 100% Polyester, 300D Oxford, 280 gsm, Navy Blue (Pantone 19-4024)
> Zipper: YKK #5 Nylon Coil, color: Black, Length: 45cm
> Lining: 100% Polyester taffeta, 70D, White
> Handle: 25mm polypropylene webbing, stitched both sides

*Spec v2 (mới từ Customer X):*
> Component: Outer fabric — 100% Recycled Polyester, 300D Oxford, 280 gsm, Navy Blue (Pantone 19-4024)
> Zipper: YKK #5 Nylon Coil, color: Navy Blue (must match outer), Length: 45cm
> Lining: 100% Polyester taffeta, 70D, Light Grey (new)
> Handle: 30mm polypropylene webbing, stitched both sides, Bar-tack reinforcement required

**3. Copy/Paste Prompt:**
> "Đọc Spec v1 (cũ) và Spec v2 (mới) sau đây. Liệt kê chính xác những thông số hoặc vật tư đã thay đổi. Tạo bảng gồm: Component | Spec v1 | Spec v2 | Mức độ ảnh hưởng (Cao/TB/Thấp) | Cần thông báo nhà máy ngay không?
> [Paste Spec v1]
> [Paste Spec v2]"

**4. Expected Output:**
Bảng 5 cột: Outer fabric (Recycled — Cao), Zipper color (Navy — Trung bình), Lining color (Light Grey — Trung bình), Handle width + bar-tack (Cao — ảnh hưởng pattern + cost).

**5. Safety Reminder:**
⚠️ Khi paste DCL hoặc Tech Pack thật: Ẩn số style → Style-XXXX, tên khách hàng → Customer X, xóa bất kỳ giá / cost nào trước khi paste.

**6. Participant Hands-on Task:**
Chạy prompt với fictional spec. Sau đó hỏi thêm: "Handle thay đổi từ 25mm lên 30mm + bar-tack sẽ ảnh hưởng như thế nào đến cost và quy trình sản xuất?" — xem AI trả lời gì.

---

## Workflow Demo C: Inspection Report + Defect Description Assistant
**Dành cho:** QC Inspector (Lan Anh, Khánh Linh), QA/QC Manager (Xuân Trâm), PD (Sandra)

**1. Objective (Mục tiêu):**
Chuyển ghi chú tay lộn xộn sau khi đi kiểm hàng thành Inspection Report tiếng Anh chuẩn + mô tả từng lỗi bằng thuật ngữ chuyên ngành trong 5–10 phút.

**2. Fictional/Anonymized Input Data (Ghi chú tay của QC):**
> PO-XXXX, Swaddle Blanket, Factory A.
> Số lượng kiểm: 200 pcs (AQL 2.5 Level II → accept ≤5 Major / ≤8 Minor).
> Lỗi phát hiện:
> - Dơ dầu máy: 5 cái (Major) — vết dầu to hơn 5mm ở góc chăn
> - Đứt chỉ đường viền: 3 cái (Minor) — chỉ bị đứt đoạn ~2–3cm
> - Hụt size chiều dài 2cm: 4 cái (Major) — đo 96cm thay vì 98cm theo spec
> - Label may lệch quá 1cm: 1 cái (Minor)
> Kết quả: FAIL (Major count 9 > AQL accept point 5)

**3. Copy/Paste Prompt:**
> "Tôi là QC Inspector. Từ ghi chú đi kiểm hàng sau, hãy giúp tôi:
> 1. Viết một đoạn Inspection Summary bằng tiếng Anh chuyên nghiệp (3–5 câu, gồm: product, quantity inspected, AQL standard, result, major defects found).
> 2. Tạo bảng Defect List: STT | Defect Name (English) | Defect Description (English technical) | Classification (Major/Minor) | Qty | % Defect Rate.
> 3. Viết email ngắn tiếng Anh gửi Factory A (cc QA Manager): thông báo FAIL, yêu cầu 100% sort + CAPA form trong 48h.
> [Paste ghi chú kiểm hàng vào đây]"

**4. Expected Output:**
- Đoạn Inspection Summary ~4 câu tiếng Anh chuyên nghiệp
- Bảng defect: "Machine oil stain (Major)", "Open seam / skipped stitch (Minor)", "Measurement out of tolerance — length (Major)", "Misaligned label (Minor)"
- Email tiếng Anh ~150–200 từ, tone chuyên nghiệp, deadline 48h

**5. Safety Reminder:**
⚠️ Đã dùng PO-XXXX và Factory A. Khi dùng data thật: Ctrl+F replace PO thật → PO-XXXX, tên nhà máy thật → Factory A trước khi paste.

**6. Participant Hands-on Task:**
Lan Anh / Khánh Linh: Chạy prompt với fictional notes. Sau đó thử thêm: "Mô tả lỗi 'vải bị chun ở đường may nách áo' bằng tiếng Anh chuyên ngành QC." — xem AI mô tả như thế nào.

---

## Workflow Demo D: CAPA / Root Cause / Factory Risk Assistant
**Dành cho:** QA/QC Manager (Xuân Trâm), Footwear Quality (Kim Thoa)

**1. Objective (Mục tiêu):**
Phân tích nguyên nhân gốc rễ (Root Cause) của lỗi sản xuất, viết phản hồi CAPA chuyên nghiệp, và đánh giá rủi ro nhà máy dựa trên trend dữ liệu.

**2. Fictional/Anonymized Input Data:**
*Lịch sử lỗi Factory A (3 tháng):*
> Tháng 4: Open seam — 15 pcs / 500 pcs kiểm → 3.0%
> Tháng 5: Open seam — 18 pcs / 480 pcs → 3.75%
> Tháng 6: Open seam — 22 pcs / 400 pcs → 5.5%
>
> CAPA nhà máy gửi: "We will remind workers to be more careful and check stitching before packing."

**3. Copy/Paste Prompt:**
> "Tôi là QA Manager tại Redbug. Factory A có lỗi open seam tăng dần 3 tháng qua: [paste trend data]. Họ gửi CAPA: '[paste CAPA nhà máy]'.
> Hãy:
> 1. Giải thích tại sao CAPA này không đạt (không có Root Cause thực sự).
> 2. Soạn email tiếng Anh bác bỏ CAPA hiện tại, yêu cầu phân tích 5 Whys cho lỗi open seam với trend tăng.
> 3. Gợi ý 4 Preventive Actions thực tế (không phải 'nhắc nhở công nhân').
> 4. Đánh giá Factory A Risk Level (Low/Medium/High) dựa trên trend và giải thích."

**4. Expected Output:**
- 2–3 câu giải thích tại sao "nhắc nhở" không phải Root Cause
- Email tiếng Anh chuyên nghiệp, nêu rõ trend, yêu cầu 5 Whys
- 4 Preventive Actions cụ thể: kiểm tra tension chỉ, calibrate máy, thêm inline check point, training kỹ thuật viên
- Risk Assessment: High (3-month upward trend, 5.5% > 3% threshold)

**5. Safety Reminder:**
⚠️ Tên nhà máy đã thay thành "Factory A". Khi dùng data thật: Replace tên nhà máy và mã PO trước khi paste trend data và CAPA.

**6. Participant Hands-on Task:**
Xuân Trâm: Chạy prompt với fictional data. Sau đó hỏi thêm: "Nếu Factory A tiếp tục không cải thiện sau CAPA lần 2, tôi cần thông báo cho GoldBug US như thế nào?" — xem AI gợi ý escalation path.

---

## Workflow Demo E: Monthly Operations / Quality / Sample Progress Dashboard Assistant
**Dành cho:** Kim Thoa (Footwear Quality), Thiên Kim (Country Manager), Xuân Trâm (QA/QC Manager)

> Xem chi tiết tại **content/07_demo_monthly_report_assistant.md** — demo này có 7 bước đầy đủ trong file riêng.

**1. Objective (Mục tiêu):**
Tổng hợp dữ liệu tháng (sample tracker, order progress, defect summary, quotation) thành monthly operations dashboard + email báo cáo gửi GoldBug US trong dưới 20 phút.

**2. Fictional/Anonymized Input Data:**
Xem data giả lập đầy đủ trong **07_demo_monthly_report_assistant.md**.

**3. Copy/Paste Prompts (7 bước tóm tắt):**
- Bước 1: Priority list + overdue items
- Bước 2: Order / sample progress summary
- Bước 3: Defect trend analysis + Factory Risk Ranking
- Bước 4: Quotation comparison (20 giây)
- Bước 5: Monthly report synthesis
- Bước 6: Email to GoldBug US (tiếng Anh ~200 từ)
- Bước 7: Email nội bộ (tiếng Việt)

**4. Expected Output:**
Monthly report outline đầy đủ + 2 email sẵn sàng gửi (EN + VI).

**5. Safety Reminder:**
⚠️ Toàn bộ data giả lập dùng Factory A/B/C, Style-XXXX, PO-XXXX. Khi áp dụng với data thật: Ctrl+F replace tất cả tên nhà máy, mã PO, mã style, giá trước khi paste.

**6. Participant Hands-on Task:**
Kim Thoa chạy Bước 4 (Quotation Comparison) live. Sau đó tự chạy Bước 1–3 trong nhóm hands-on buổi chiều.

---

## Workflow Demo F: Training Material Presentation Assistant
**Dành cho:** Thiên Kim (Country Manager), Hải Yến / Sandra (PD), Xuân Trâm (QA/QC Manager)

**1. Objective (Mục tiêu):**
Tạo nhanh outline và nội dung slide training nội bộ hoặc training cho nhà máy — tiết kiệm 1–2 giờ chuẩn bị tài liệu.

**2. Fictional/Anonymized Input Data:**
*Yêu cầu training:*
> Cần tạo slide training cho team QC nhà máy (10 người) về quy trình FRI (Final Random Inspection) mới của Redbug — áp dụng từ tháng 7. Nội dung: AQL standard Redbug áp dụng, cách điền inspection report form, top 5 lỗi thường gặp và cách nhận dạng, checklist trước khi báo Pass/Fail.

**3. Copy/Paste Prompt:**
> "Tôi cần tạo slide training cho team QC nhà máy về quy trình FRI mới. Yêu cầu: [paste yêu cầu training].
> Hãy tạo:
> 1. Outline 6 slides (Tiêu đề + 3–5 bullet points nội dung mỗi slide).
> 2. 3 Learning Objectives — những gì QC có thể làm được sau buổi training.
> 3. 1 câu hỏi quiz cuối buổi (multiple choice) để kiểm tra hiểu bài.
> Ngôn ngữ: tiếng Việt đơn giản, phù hợp với công nhân và tổ trưởng."

**4. Expected Output:**
- Outline 6 slides: Giới thiệu / AQL Standard / Inspection Process / Top 5 Defects / Cách điền Form / Checklist + Cam kết
- 3 learning objectives đo lường được
- 1 quiz question nhiều lựa chọn

**5. Safety Reminder:**
⚠️ Không đưa giá cả, cost, thông tin nhạy cảm về đơn hàng vào tài liệu training gửi nhà máy. Chỉ đưa quy trình + standard chung.

**6. Participant Hands-on Task:**
Chạy prompt với fictional training request. Sau đó thử thêm: "Chuyển slide 3 (Inspection Process) thành một flow diagram mô tả bằng text" — xem AI visualize quy trình như thế nào.

---

*v1.3 | Workflow Demos A–F thêm mới | 12/06/2026 | Survey-driven — 7 phản hồi*
