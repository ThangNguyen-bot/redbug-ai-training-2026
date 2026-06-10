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
