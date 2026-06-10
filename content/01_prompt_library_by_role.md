# Redbug AI Training v1.0 - Prompt Library theo Vai Trò

Tài liệu này cung cấp thư viện prompt thực tế dành cho các bộ phận tại Redbug Vietnam. Các prompt được thiết kế để xử lý công việc hằng ngày liên quan đến phát triển sản phẩm (baby & kids, footwear), QA/QC, CSR audit, và quản lý văn phòng.

---

## A. Hướng dẫn sử dụng AI an toàn (Quy tắc RED - YELLOW - GREEN)
Trước khi sử dụng bất kỳ prompt nào, hãy luôn nhớ:
- **RED (Tuyệt đối KHÔNG đưa vào AI):** PO thật, giá/margin, hợp đồng, dữ liệu sản phẩm chưa public, finding nhạy cảm, thông tin cá nhân.
- **YELLOW (Cần che/xóa trước khi dùng):** Tên nhà máy cụ thể, mã hàng thật, mã PO, tên khách hàng/đối tác. (Ví dụ: Thay "Nhà máy ABC" thành "Nhà máy X").
- **GREEN (Được phép sử dụng thoải mái):** Quy trình nội bộ (không nhạy cảm), template trống, email giao tiếp thông thường, nội dung đã anonymize.

---

## B. Công thức Prompt Chuẩn (Universal Prompt Formula)
Để AI trả về kết quả tốt nhất, hãy sử dụng cấu trúc:
**[Role] + [Task] + [Context] + [Output] + [Constraints]**
- **Role:** Đóng vai là ai? (Ví dụ: "Đóng vai một QA/QC Manager ngành may mặc trẻ em...")
- **Task:** Cần làm gì? (Ví dụ: "...hãy viết một email yêu cầu nhà máy làm CAPA.")
- **Context:** Ngữ cảnh/Dữ liệu đầu vào? (Ví dụ: "Dựa vào các lỗi A, B, C sau đây...")
- **Output:** Định dạng kết quả? (Ví dụ: "Trình bày dưới dạng bảng gồm 3 cột...")
- **Constraints:** Ràng buộc? (Ví dụ: "Viết bằng tiếng Anh chuyên nghiệp, ngắn gọn, tone điềm tĩnh.")

---

## E. Starter Prompt (Thiết lập Trợ lý AI cá nhân)
**Dành cho tất cả mọi người:** Dùng prompt này vào đầu mỗi phiên làm việc để AI hiểu rõ vai trò của bạn.

> **Prompt:** "Từ bây giờ, hãy đóng vai là trợ lý công việc cá nhân của tôi. Tôi là [Vai trò của bạn, VD: QC Inspector] tại Redbug Vietnam, chuyên làm việc với thương hiệu GoldBug (sản phẩm baby & kids). Công việc chính của tôi là [Liệt kê 2-3 công việc, VD: đi nhà máy kiểm hàng, viết report, theo dõi lỗi]. Khi tôi đưa ra yêu cầu, hãy ưu tiên đưa ra các giải pháp thực tế, bám sát quy trình ngành dệt may/giày da, dùng văn phong chuyên nghiệp và tiếng Anh chuyên ngành chuẩn xác khi cần. Nếu bạn đã hiểu, hãy trả lời 'Sẵn sàng hỗ trợ Redbug!' và tóm tắt lại vai trò của bạn bằng 1 câu."

---

## C & D. Thư viện Prompt theo Vai Trò

### 1. Country Manager – Thiên Kim
**1.1. Tóm tắt Weekly Redbug AI Briefing**
- **Khi nào dùng:** Cần tổng hợp email/báo cáo từ nhiều bộ phận thành 1 bản tin ngắn gọn.
- **Input needed:** Copy/paste (đã che tên nhạy cảm) các bullet point báo cáo tuần của Merch, QA, PD.
- **Prompt:** "Đóng vai Country Manager, hãy tóm tắt các điểm dữ liệu sau thành một bản Briefing tuần. Trình bày 3 phần: 1. Thành tựu/Tiến độ chính, 2. Rủi ro cần xử lý (Red Flags), 3. Action Items. Dùng bullet points ngắn gọn, tone executive."
- **Expected Output:** Bản tóm tắt chuyên nghiệp, làm nổi bật rủi ro.

**1.2. Nhận diện rủi ro/Action Dashboard**
- **Khi nào dùng:** Khi nhận được một chuỗi email dài về vấn đề chất lượng hoặc delay.
- **Prompt:** "Phân tích chuỗi email dưới đây và trích xuất ra một bảng Risk Dashboard gồm: Vấn đề, Mức độ nghiêm trọng (Cao/Trung bình/Thấp), Bên chịu trách nhiệm (Redbug/Nhà máy/US), và Đề xuất hành động tiếp theo."

**1.3. Tóm tắt Escalation cho GoldBug US**
- **Khi nào dùng:** Cần báo cáo sự cố khẩn cấp cho sếp hoặc đối tác ở Mỹ.
- **Prompt:** "Dựa trên sự cố [mô tả ngắn], hãy viết một email bằng tiếng Anh gửi GoldBug US. Cấu trúc email: Situation (Tình hình), Impact (Ảnh hưởng đến timeline/sản phẩm), Actions taken (Đã làm gì), và Next steps. Giữ tone điềm tĩnh, tập trung vào giải pháp."

**1.4. Lập Agenda cho Factory Meeting**
- **Khi nào dùng:** Chuẩn bị họp đánh giá hiệu suất nhà máy.
- **Prompt:** "Viết một agenda họp 60 phút với nhà máy X (đối tác sản xuất đồ em bé). Mục tiêu: Đánh giá tiến độ mẫu, giải quyết lỗi CAPA tháng trước, và Capacity cho mùa tới. Phân bổ thời gian hợp lý."

**1.5. Chuyển đổi Meeting Notes thành Action Tracker**
- **Khi nào dùng:** Sau khi họp.
- **Prompt:** "Từ ghi chú cuộc họp lộn xộn sau, hãy chuyển thành bảng Action Tracker: Task, Người phụ trách, Deadline, Trạng thái. Nếu task nào chưa rõ deadline, hãy bôi đậm để tôi hỏi lại."

---

### 2. Merchandiser – Sandra
**2.1. Nhắc nhở Seasonal Calendar**
- **Khi nào dùng:** Khi cần đôn đốc nhà máy kịp lịch trình.
- **Prompt:** "Đóng vai Merchandiser, viết một email nhắc nhở nhà máy Y về lịch submit mẫu mùa Spring. Họ đang trễ 3 ngày so với calendar. Giọng văn lịch sự nhưng kiên quyết, yêu cầu cung cấp ETA muộn nhất vào ngày mai."

**2.2. Theo dõi Sample Status**
- **Khi nào dùng:** Nhận được danh sách tình trạng mẫu lộn xộn từ nhà máy.
- **Prompt:** "Lọc các thông tin trạng thái mẫu này vào một bảng: Tên/Mã Mẫu, Trạng thái hiện tại, Ngày dự kiến hoàn thành, Vấn đề đang vướng (nếu có)."

**2.3. Clarify Data Pack cho nhà máy**
- **Khi nào dùng:** Nhà máy không hiểu Data Pack từ Mỹ.
- **Prompt:** "Dịch và giải thích các thuật ngữ sau trong Data Pack của túi bỉm (diaper bag) sang tiếng Việt đơn giản, dễ hiểu để tôi giải thích cho kỹ thuật viên nhà máy: [Paste đoạn tiếng Anh]."

**2.4. Soạn email thương lượng với US**
- **Khi nào dùng:** Cần xin lùi deadline do thiếu nguyên phụ liệu.
- **Prompt:** "Soạn email gửi team GoldBug US xin lùi deadline submit mẫu thêm 5 ngày. Lý do: Fabric A bị lỗi màu từ nhà cung cấp, đang phải nhuộm lại. Nêu rõ chúng ta đang push nhà máy chạy gấp để không ảnh hưởng lịch sản xuất đại trà. Tone: Trách nhiệm, minh bạch."

**2.5. Tóm tắt email dài**
- **Khi nào dùng:** Nhận được email từ khách hàng dài 5 đoạn.
- **Prompt:** "Tóm tắt email này thành 3 bullet points chính về những gì tôi (Merchandiser) cần làm ngay hôm nay."

---

### 3. Product Developer – Hải Yến, Trinh
**3.1. Theo dõi Sample Development Tracker**
- **Khi nào dùng:** Sắp xếp lại log mẫu.
- **Prompt:** "Sắp xếp dữ liệu sau thành bảng theo dõi: Mã Style, Version (Prototypes/Size Set), Ngày gửi, Comment của US, Trạng thái. Format thành Markdown table."

**3.2. Dịch & Tóm tắt Buyer Comment**
- **Khi nào dùng:** Nhận được comment mẫu cực dài bằng tiếng Anh.
- **Prompt:** "Dịch các comment duyệt mẫu giày baby này sang tiếng Việt chuyên ngành giày da. Sau đó, phân loại chúng thành 2 nhóm: 'Cần sửa rập/cấu trúc' và 'Cần sửa thẩm mỹ/chất liệu'."

**3.3. Review Tech Pack/Spec**
- **Khi nào dùng:** Kiểm tra chéo (Cross-check) Tech pack.
- **Prompt:** "Đóng vai Product Developer sản phẩm trẻ sơ sinh, đọc list BOM (Bill of Materials) và specs sau. Hãy chỉ ra nếu có chi tiết nào thiếu hợp lý về mặt an toàn cho trẻ (VD: dây kéo sắc, nút dễ rụng) hoặc thiếu thông tin kích thước."

**3.4. Soạn Follow-up Checklist gửi nhà máy**
- **Khi nào dùng:** Giao việc cho nhà máy sửa mẫu.
- **Prompt:** "Dựa trên buyer comments trên, tạo một checklist công việc rõ ràng bằng cả tiếng Anh và tiếng Việt để nhà máy tick vào khi họ sửa xong mẫu gửi lại."

**3.5. So sánh Tech Pack cũ và mới**
- **Khi nào dùng:** Có revision mới từ US.
- **Prompt:** "Đọc đoạn specs cũ và specs mới này. Liệt kê chính xác những thông số hoặc vật tư nào đã bị thay đổi để tôi làm highlight cho nhà máy."

---

### 4. Footwear Technologist / Quality Technician – Kim Thoa
**4.1. Phân tích Defect & Fitting giày**
- **Khi nào dùng:** Phân tích lỗi fitting.
- **Prompt:** "Tôi có mẫu giày em bé bị lỗi: 'Heel counter too soft, upper pattern wrinkling at vamp'. Hãy giải thích nguyên nhân kỹ thuật có thể gây ra lỗi này và đề xuất 3 cách khắc phục cho bộ phận rập và bộ phận gò."

**4.2. Tạo Sample Quality Checklist**
- **Khi nào dùng:** Lên checklist kiểm giày trước khi gửi đi.
- **Prompt:** "Tạo một checklist kiểm tra chất lượng (Quality Check) 10 bước cho một mẫu giày toddler (tập đi) chuẩn bị gửi sang US duyệt. Bao gồm kiểm tra cấu trúc, keo, mũi chỉ, độ an toàn."

**4.3. Viết Technical Comments bằng tiếng Anh**
- **Khi nào dùng:** Phản hồi với tech team ở US.
- **Prompt:** "Dịch những ghi chú kỹ thuật này sang tiếng Anh chuyên ngành giày da: 'Gót giày bị lệch 2mm, lót trong bị đùn keo, phần velcro quá cứng có thể làm xước da bé, cần đổi sang loại velcro mềm hơn'."

**4.4. Hướng dẫn sửa gót/đế giày**
- **Khi nào dùng:** Gửi hướng dẫn sửa chữa (CAPA) cho nhà máy.
- **Prompt:** "Viết một email bằng tiếng Việt, giải thích cho nhà máy lý do tại sao đế TPR của mẫu giày X bị bong tróc sau khi test, và yêu cầu họ kiểm tra lại nhiệt độ lò sấy và chất xử lý bề mặt."

**4.5. Review báo cáo test cơ lý**
- **Khi nào dùng:** Nhận kết quả lab test giày.
- **Prompt:** "Đọc các thông số lab test (Bonding strength, flex resistance) sau, so sánh với tiêu chuẩn giày trẻ em thông thường và cho tôi biết kết quả này là Pass, Marginal, hay Fail."

---

### 5. QA/QC Manager – Xuân Trâm
**5.1. Kế hoạch Inspection Schedule**
- **Khi nào dùng:** Sắp xếp lịch trình cho team QC.
- **Prompt:** "Dựa vào danh sách 5 đơn hàng sắp xuất trong tuần tới và thông tin địa điểm nhà máy, hãy giúp tôi phân bổ lịch kiểm hàng (FRI) hợp lý cho 3 QC (Lan Anh, Yến, Linh), tính cả thời gian di chuyển (Nhà máy A: Bình Dương, Nhà máy B: Đồng Nai)."

**5.2. Phân tích Trend Defect**
- **Khi nào dùng:** Họp chất lượng hàng tháng.
- **Prompt:** "Từ dữ liệu các lỗi sau (Broken needle: 5, Open seam: 12, Stains: 20, Measurement out of tolerance: 3), hãy phân tích xu hướng lỗi của nhà máy X. Viết 1 đoạn nhận xét và 2 giải pháp quản lý để tôi báo cáo với Country Manager."

**5.3. Theo dõi CAPA (Corrective and Preventive Action)**
- **Khi nào dùng:** Đánh giá báo cáo CAPA của nhà máy.
- **Prompt:** "Nhà máy gửi CAPA cho lỗi 'đứt chỉ' là 'sẽ nhắc nhở công nhân cẩn thận'. Hãy đóng vai QA Manager chuyên nghiệp, soạn email phản hồi bác bỏ CAPA này, yêu cầu họ làm rõ nguyên nhân gốc rễ (Root Cause) bằng 5 Whys và đưa ra hành động phòng ngừa thực tế (thay kim, chỉnh sức căng chỉ)."

**5.4. Review báo cáo Inline/FRI của team**
- **Khi nào dùng:** Kiểm duyệt báo cáo trước khi gửi US.
- **Prompt:** "Đọc báo cáo FRI thô này của QC. Hãy chuẩn hóa lại ngôn ngữ tiếng Anh chuyên nghiệp hơn, sửa lỗi ngữ pháp, và format lại thành cấu trúc: Tổng quan, Các lỗi chính phát hiện, Nhận định (Pass/Fail/Pending)."

**5.5. Tóm tắt hiệu suất nhà máy tháng**
- **Khi nào dùng:** Báo cáo cuối tháng.
- **Prompt:** "Tóm tắt các số liệu: Pass rate 85%, Fail rate 15%, Top defect: vết dơ dính dầu, thành một báo cáo 150 chữ gửi Ban giám đốc."

---

### 6. QC Inspectors – Lan Anh, Nguyễn Thị Yến, Khánh Linh
**6.1. Chuyển đổi Inspection Notes sang Report**
- **Khi nào dùng:** Vừa đi kiểm hàng về, có ghi chú tay lộn xộn.
- **Prompt:** "Từ ghi chú đi kiểm hàng của tôi (Ghi chú: PO 1234, may bị bỏ mũi 3 cái, dính dơ 5 cái, đo size bị hụt 1cm ở vòng ngực. Số lượng kiểm 125, rớt), hãy viết thành một đoạn tổng hợp bằng tiếng Anh chuyên nghiệp để tôi điền vào Report."

**6.2. Mô tả Defect tiếng Anh**
- **Khi nào dùng:** Gặp lỗi khó tả bằng tiếng Anh.
- **Prompt:** "Làm sao để mô tả lỗi 'chỉ may bị lỏng, đường may bị chun, vải bị rút ở nách áo' sang tiếng Anh chuyên ngành QC hàng may mặc?"

**6.3. Soạn email CAPA gửi nhà máy**
- **Khi nào dùng:** Thông báo kết quả rớt (Fail) và yêu cầu sửa.
- **Prompt:** "Soạn một email cho xưởng X (tiếng Việt), thông báo lô hàng hôm nay bị rớt FRI do lỗi an toàn (nút bấm không chặt). Yêu cầu họ 100% kiểm lại rà kim, tháo nút bấm thay mới, và phản hồi ngày có thể kiểm lại (Re-inspection)."

**6.4. Viết caption cho hình ảnh báo cáo**
- **Khi nào dùng:** Làm slide báo cáo lỗi.
- **Prompt:** "Gợi ý 5 cụm từ tiếng Anh ngắn gọn để ghi chú vào hình ảnh cho các lỗi: dính dầu máy, sọc vải không khớp, in bị lem màu, đường may gấu áo bị vặn."

**6.5. Checklist trước khi đi kiểm hàng**
- **Khi nào dùng:** Chuẩn bị đi audit đơn hàng mới.
- **Prompt:** "Tạo một checklist chuẩn bị dụng cụ và tài liệu cho QC trước khi đi kiểm FRI cho sản phẩm Địu em bé (Baby carrier)."

---

### 7. Senior CSR / Factory Audit / Chemical Compliance – Tú Anh / Anna
**7.1. Chuẩn bị Checklist CSR & Audit**
- **Khi nào dùng:** Trước khi đi nhà máy mới.
- **Prompt:** "Tạo một checklist 15 điểm đánh giá CSR (Trách nhiệm xã hội) và An toàn lao động cơ bản dựa trên tiêu chuẩn quốc tế để tôi dùng đi Vendor Onboarding đánh giá nhà máy may mới."

**7.2. Tóm tắt RSL/Chemical Compliance**
- **Khi nào dùng:** Giải thích quy định hóa chất cho xưởng.
- **Prompt:** "Tóm tắt các điểm chính yếu nhất của quy định RSL (Restricted Substances List) đối với sản phẩm cho trẻ sơ sinh (như cấm chì, phthlates, Azo dyes) thành ngôn ngữ tiếng Việt đơn giản để training cho tổ trưởng tổ cắt và in nhà máy."

**7.3. Phân loại Audit Finding**
- **Khi nào dùng:** Viết báo cáo sau khi đi Audit.
- **Prompt:** "Tôi phát hiện nhà máy có các vấn đề: 1. Bình chữa cháy bị đồ che khuất, 2. Công nhân không mang khẩu trang ở phòng pha hóa chất, 3. Thiếu giấy phép môi trường. Hãy phân loại chúng thành Critical, Major, Minor findings và giải thích ngắn gọn lý do."

**7.4. Lập kế hoạch CAPA & Factory Training**
- **Khi nào dùng:** Theo dõi nhà máy khắc phục lỗi CSR.
- **Prompt:** "Với finding 'Công nhân không hiểu rõ quy định phòng cháy chữa cháy', hãy lập một kế hoạch hành động 3 bước (CAPA plan) yêu cầu nhà máy thực hiện, bao gồm cả việc tổ chức một buổi training nội bộ."

**7.5. Email thông báo Lab Audit / Chemical Test**
- **Khi nào dùng:** Yêu cầu nhà máy gửi mẫu đi test.
- **Prompt:** "Soạn email tiếng Anh và tiếng Việt gửi nhà máy, yêu cầu họ phải gửi mẫu vải của PO X đến lab SGS để test hóa chất (Lead & Phthalates) trước ngày [Date]. Nhấn mạnh nếu test fail sẽ không được tiến hành sản xuất đại trà."

---

### 8. Office Admin / Office Manager – Hạnh
**8.1. Lập kế hoạch Business Travel**
- **Khi nào dùng:** Khách US sang thăm nhà máy.
- **Prompt:** "Đóng vai Office Manager, lên một lịch trình di chuyển chi tiết (Itinerary) 3 ngày cho team US (2 người) bay đến Tân Sơn Nhất, đi tham quan 2 nhà máy ở Bình Dương, bao gồm: giờ đón xe, check-in khách sạn, thời gian họp, và gợi ý 2 nhà hàng ăn tối ở Q1."

**8.2. Soạn email xin Hotel Corporate Rate**
- **Khi nào dùng:** Deal giá phòng khách sạn.
- **Prompt:** "Soạn email bằng tiếng Anh gửi Sales Manager của khách sạn X ở HCM, giới thiệu công ty Redbug (đối tác của GoldBug US), và yêu cầu cung cấp Corporate Rate cho năm 2026 với cam kết khoảng 50 room-nights/năm."

**8.3. Phân loại & Tổng hợp Expense Report**
- **Khi nào dùng:** Cuối tháng tính chi phí.
- **Prompt:** "Từ một danh sách lộn xộn các khoản chi (Taxi 500k, Mực in 1tr, Khách sạn 3tr, Tiếp khách 2tr), hãy phân loại chúng vào các hạng mục ngân sách chuẩn (Travel, Office Supplies, Entertainment) và tạo thành bảng Markdown."

**8.4. Checklist chuẩn bị Office Operations**
- **Khi nào dùng:** Rà soát văn phòng hàng tuần.
- **Prompt:** "Tạo một checklist Office Admin rà soát hàng tuần để đảm bảo văn phòng luôn hoạt động tốt (VD: kiểm tra máy in, văn phòng phẩm, nước uống, tình trạng máy lạnh, lịch dọn dẹp)."

**8.5. Soạn thông báo nội bộ**
- **Khi nào dùng:** Thông báo chính sách mới.
- **Prompt:** "Soạn một thông báo nội bộ ngắn gọn, ấm áp gửi toàn team Redbug Vietnam về việc áp dụng quy trình mới khi nộp Claim Expense (yêu cầu nộp kèm hóa đơn VAT đỏ) bắt đầu từ tháng 7."

---
*Ghi chú: Luôn review kết quả AI tạo ra trước khi sử dụng. Không có AI nào hoàn hảo 100%.*
