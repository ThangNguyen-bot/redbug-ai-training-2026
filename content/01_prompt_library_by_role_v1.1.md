# Redbug AI Training v1.2 - Prompt Library theo Vai Trò
> Cập nhật: Tháng 6/2026 | Dựa trên survey feedback từ team

---

## A. Hướng dẫn Sử dụng AI An Toàn (Quy tắc RED - YELLOW - GREEN)

---

> **3 điều cần biết về bảo mật AI (đọc trước khi dùng):**
>
> 1. **AI không biết bạn là ai** — trừ khi bạn tự nói ra trong chat.
> 2. **AI không chia sẻ conversation của bạn** với GoldBug US, nhà máy, vendor, hay người dùng khác. Mỗi người có session hoàn toàn riêng biệt.
> 3. **Mỗi cuộc trò chuyện mới là một tờ giấy trắng** — AI không tự nhớ session trước.
>
> → Dùng Quy tắc RED/YELLOW/GREEN bên dưới để làm việc an toàn.

---

Trước khi dùng bất kỳ prompt nào, hãy luôn kiểm tra:

| Màu | Mức độ | Ví dụ cụ thể tại Redbug |
|---|---|---|
| 🔴 **RED – Tuyệt đối KHÔNG** | Không bao giờ paste vào AI | PO số thật, giá FOB/margin, hợp đồng, dữ liệu khách hàng chưa public, audit finding nhạy cảm, thông tin cá nhân nhân viên |
| 🟡 **YELLOW – Cần ẩn trước** | Thay bằng placeholder trước khi dùng | Tên nhà máy thật → "Factory A"; Mã hàng thật → "Style X"; Tên khách hàng → "Brand US"; Tên vendor hóa chất → "Vendor Y" |
| 🟢 **GREEN – Thoải mái dùng** | Không cần chỉnh sửa | Quy trình nội bộ chung, template trống, email giao tiếp thông thường, dữ liệu đã anonymize hoàn toàn |

### ❓ Giải thích thêm về bảo mật AI (dành cho Facilitator / đọc thêm)

> **"AI có bảo mật cho những gì tôi hỏi và thông tin chia sẻ không?"**

ChatGPT (miễn phí) mặc định có thể dùng dữ liệu bạn nhập để cải thiện model. Tuy nhiên:
1. **ChatGPT Team/Plus** có thể tắt "Improve model for everyone" trong Settings → không dùng data bạn nhập.
2. **Claude.ai** (Anthropic) tuyên bố không dùng conversation của khách hàng trả phí để train model.
3. **Nguyên tắc thực hành tốt nhất:** Bất kể AI nào, **không bao giờ paste thông tin nhạy cảm** (giá, PO thật, hợp đồng). Dùng Quy tắc RED/YELLOW/GREEN ở trên.
4. **AI không biết bạn là ai** trừ khi bạn tự nói ra. Mỗi cuộc trò chuyện mới là một slate trắng.
5. **Redbug nên quy định:** Chỉ dùng AI cho template, quy trình, dịch thuật, viết lại — không paste dữ liệu sản xuất thật.

---

## B. Công thức Prompt Chuẩn (Universal Prompt Formula)

**[Role] + [Task] + [Context] + [Output] + [Constraints]**

| Thành phần | Ý nghĩa | Ví dụ |
|---|---|---|
| **Role** | AI đóng vai ai? | "Đóng vai QA/QC Manager ngành may mặc trẻ em..." |
| **Task** | Cần làm gì? | "...viết email yêu cầu nhà máy làm CAPA." |
| **Context** | Dữ liệu đầu vào | "Dựa vào các lỗi A, B, C sau..." |
| **Output** | Định dạng kết quả | "Trình bày dưới dạng bảng 3 cột: Lỗi / Nguyên nhân / Hành động" |
| **Constraints** | Ràng buộc | "Tiếng Anh, ngắn gọn, tone chuyên nghiệp" |

---

## E. Starter Prompt – Thiết lập Trợ lý AI Cá nhân (Dùng đầu mỗi phiên)

> "Từ bây giờ, hãy đóng vai là trợ lý công việc cá nhân của tôi. Tôi là [Vai trò] tại Redbug Vietnam, làm việc chính với thương hiệu GoldBug (sản phẩm baby & kids). Công việc chính: [Liệt kê 2-3 công việc]. Khi tôi đưa ra yêu cầu, hãy ưu tiên giải pháp thực tế, bám sát ngành dệt may/giày da, dùng văn phong chuyên nghiệp. Nếu đã hiểu, hãy trả lời 'Sẵn sàng hỗ trợ Redbug!' và tóm tắt vai trò của bạn bằng 1 câu."

---

## 1. Country Manager – Thiên Kim

**1.1. Tóm tắt Weekly Redbug AI Briefing**
- **Input:** Bullet points báo cáo tuần của Merch, QA, PD (đã ẩn tên nhạy cảm)
- **Prompt:** "Đóng vai Country Manager, tóm tắt các điểm sau thành Briefing tuần: 1. Thành tựu/Tiến độ, 2. Rủi ro / Red Flags, 3. Action Items. Bullet points ngắn, tone executive."

**1.2. Nhận diện Rủi ro từ Email dài**
- **Prompt:** "Phân tích chuỗi email sau và trích xuất bảng Risk Dashboard: Vấn đề | Mức độ (Cao/TB/Thấp) | Bên chịu trách nhiệm | Đề xuất hành động tiếp theo."

**1.3. Tóm tắt Escalation cho GoldBug US**
- **Prompt:** "Dựa trên sự cố [mô tả], viết email tiếng Anh gửi GoldBug US theo cấu trúc: Situation / Impact / Actions Taken / Next Steps. Tone điềm tĩnh, focus on solution."

**1.4. Factory Meeting Agenda**
- **Prompt:** "Viết agenda họp 60 phút với nhà máy X. Mục tiêu: đánh giá tiến độ mẫu, giải quyết CAPA tháng trước, capacity mùa tới. Phân bổ thời gian hợp lý."

**1.5. Meeting Notes → Action Tracker**
- **Prompt:** "Từ ghi chú họp lộn xộn sau, tạo bảng Action Tracker: Task | Người phụ trách | Deadline | Trạng thái. Bôi đậm các task chưa rõ deadline."

---

## 2. Merchandiser – Sandra

**2.1. Nhắc nhở Seasonal Calendar**
- **Prompt:** "Đóng vai Merchandiser, viết email nhắc nhà máy Y trễ 3 ngày lịch submit mẫu Spring. Lịch sự nhưng kiên quyết, yêu cầu ETA muộn nhất ngày mai."

**2.2. Tóm tắt Sample Status**
- **Prompt:** "Lọc thông tin trạng thái mẫu này vào bảng: Tên Mẫu | Trạng thái | Ngày dự kiến xong | Vướng mắc."

**2.3. Clarify Data Pack cho nhà máy**
- **Prompt:** "Dịch và giải thích các thuật ngữ trong Data Pack (diaper bag) sang tiếng Việt đơn giản cho kỹ thuật viên nhà máy: [Paste đoạn tiếng Anh]."

**2.4. Email xin lùi Deadline với US**
- **Prompt:** "Soạn email gửi GoldBug US xin lùi submit mẫu 5 ngày. Lý do: Fabric A bị lỗi màu, đang nhuộm lại. Nêu Redbug đang push nhà máy gấp. Tone: trách nhiệm, minh bạch."

**2.5. Tóm tắt Email dài**
- **Prompt:** "Tóm tắt email sau thành 3 bullet points: những gì tôi (Merchandiser) cần làm ngay hôm nay."

---

## 3. Product Developer – Hải Yến, Trinh

**3.1. Sample Development Tracker**
- **Prompt:** "Sắp xếp dữ liệu sau thành bảng theo dõi Markdown: Mã Style | Version (Proto/Size Set) | Ngày gửi | Comment US | Trạng thái."

**3.2. Dịch & Phân loại Buyer Comment**
- **Prompt:** "Dịch comment mẫu giày baby sang tiếng Việt chuyên ngành. Phân loại thành 2 nhóm: 'Sửa rập/cấu trúc' và 'Sửa thẩm mỹ/chất liệu'."

**3.3. Kiểm tra An toàn trong BOM / Spec**
- **Prompt:** "Đóng vai Product Developer sản phẩm sơ sinh, đọc BOM và specs sau. Chỉ ra chi tiết thiếu an toàn (dây kéo sắc, nút dễ rụng) hoặc thiếu thông tin kích thước."

**3.4. Follow-up Checklist gửi nhà máy**
- **Prompt:** "Dựa trên buyer comments trên, tạo checklist công việc song ngữ (Anh - Việt) để nhà máy tick khi sửa xong mẫu."

**3.5. So sánh Tech Pack cũ / mới**
- **Prompt:** "Đọc specs cũ và mới. Liệt kê chính xác thông số/vật tư nào đã thay đổi để tôi highlight cho nhà máy."

---

## 4. Footwear Technologist / Quality Technician – Kim Thoa
> **v1.1 Update:** Mở rộng đáng kể dựa trên survey feedback của Kim Thoa

**4.1. Phân tích Defect & Fitting giày**
- **Prompt:** "Tôi có mẫu giày em bé bị lỗi: [mô tả lỗi]. Giải thích nguyên nhân kỹ thuật có thể gây ra lỗi này và đề xuất 3 cách khắc phục cho bộ phận rập và gò."

**4.2. Sample Quality Checklist**
- **Prompt:** "Tạo checklist kiểm tra chất lượng 10 bước cho mẫu giày toddler chuẩn bị gửi US. Bao gồm: cấu trúc, keo, mũi chỉ, độ an toàn."

**4.3. Dịch Technical Comments sang tiếng Anh**
- **Prompt:** "Dịch ghi chú kỹ thuật này sang tiếng Anh chuyên ngành giày da: [Paste ghi chú tiếng Việt]."

**4.4. CAPA Email cho nhà máy (về đế/gót)**
- **Prompt:** "Viết email tiếng Việt giải thích nguyên nhân đế TPR bị bong tróc sau test, yêu cầu nhà máy kiểm tra lại nhiệt độ lò sấy và chất xử lý bề mặt."

**4.5. Review Lab Test Results**
- **Prompt:** "Đọc thông số lab test (Bonding strength, Flex resistance) sau, so sánh với tiêu chuẩn giày trẻ em thông thường và cho biết: Pass, Marginal, hay Fail."

**4.6. [MỚI] Tạo Bảng So sánh Báo giá (Quotation Comparison Table)**
- **Khi nào dùng:** Nhận báo giá nguyên liệu (đế, lót, velcro...) từ nhiều vendor, cần so sánh nhanh.
- **Input cần chuẩn bị:** Paste thông tin từ email hoặc bảng báo giá (đã ẩn tên vendor thật nếu cần).
- **Prompt:**
  > "Tôi có báo giá từ 3 vendor cho vật liệu [tên vật liệu, VD: đế TPR giày toddler]. Dữ liệu như sau:
  > - Vendor A: Giá [X] USD/đôi, MOQ [số lượng], Lead time [ngày], Chứng nhận: [danh sách]
  > - Vendor B: [tương tự]
  > - Vendor C: [tương tự]
  >
  > Hãy tạo một bảng so sánh Markdown gồm các tiêu chí: Giá, MOQ, Lead time, Chứng nhận compliance (REACH/CPSC/OEKO-TEX), Điểm mạnh, Điểm yếu. Sau đó đưa ra khuyến nghị ngắn (2-3 dòng) cho trường hợp ưu tiên giá rẻ và trường hợp ưu tiên compliance đầy đủ."

**4.7. [MỚI] Tạo Priority List từ Danh sách Công việc Hàng tuần**
- **Khi nào dùng:** Đầu tuần, khi có nhiều style đang chạy song song.
- **Prompt:**
  > "Tôi là Footwear Technician, đang theo dõi [số lượng] style. Dưới đây là danh sách công việc và deadline của tôi tuần này:
  > [Paste danh sách công việc - đã ẩn thông tin nhạy cảm]
  >
  > Hãy sắp xếp lại theo mức độ ưu tiên (Urgent-Important Matrix: Làm ngay / Lên lịch / Giao người khác / Xem lại). Trình bày thành bảng: Task | Deadline | Mức ưu tiên | Lý do."

**4.8. [MỚI] Theo dõi Tiến độ Phát triển Mẫu (Sample Progress Tracker)**
- **Khi nào dùng:** Cập nhật bảng theo dõi mẫu từ nhiều nguồn email lộn xộn.
- **Prompt:**
  > "Tôi có thông tin cập nhật tiến độ mẫu từ các email tuần này (đã ẩn tên thật). Hãy tổng hợp vào bảng theo dõi:
  > Style | Phiên bản hiện tại | Ngày submit | Deadline | Trạng thái (On Track / At Risk / Overdue) | Action cần làm
  >
  > Sau đó viết 3 bullet points tóm tắt tình hình chung để tôi báo cáo nhanh trong họp sáng thứ Hai."

**4.9. [MỚI] Phân tích Defect Trend Hàng Tháng**
- **Khi nào dùng:** Cuối tháng, tổng hợp dữ liệu lỗi từ các lần kiểm.
- **Prompt:**
  > "Đây là dữ liệu lỗi tháng [tháng] từ các lần kiểm của nhà máy [ẩn tên]:
  > [Paste dữ liệu: loại lỗi, số lượng]
  >
  > Hãy:
  > 1. Tính tỷ lệ % từng loại lỗi
  > 2. Xác định Top 3 lỗi phổ biến nhất
  > 3. Nhận xét xu hướng (tháng này tệ hơn/tốt hơn tháng trước về lỗi nào?)
  > 4. Đề xuất 2 giải pháp cụ thể cho lỗi #1
  > Trình bày dưới dạng bảng + đoạn nhận xét 100 từ (tiếng Anh, để báo cáo GoldBug US)."

**4.10. [MỚI] Tạo khung Monthly Technical Report**
- **Khi nào dùng:** Đầu tháng mới, cần viết báo cáo tháng trước.
- **Prompt:**
  > "Đóng vai Footwear Quality Technician, dựa trên các dữ liệu sau (đã ẩn thông tin nhạy cảm):
  > - Số lượng mẫu đang phát triển: [X]
  > - Tình trạng: [Y approved / Z overdue / W at risk]
  > - Top defect tháng: [danh sách]
  > - Vấn đề tồn đọng: [liệt kê]
  >
  > Hãy tạo khung (outline) của một Monthly Technical & Quality Report 1 trang, gồm: Summary / Sample Development Status / Quality Highlights / Risk Items / Next Month Actions. Viết bằng tiếng Anh chuyên nghiệp."

---

## 5. QA/QC Manager – Xuân Trâm

**5.1. Kế hoạch Inspection Schedule**
- **Prompt:** "Dựa vào 5 đơn hàng sắp xuất và địa điểm nhà máy, phân bổ lịch kiểm hàng (FRI) cho 3 QC (Lan Anh, Yến, Linh) tính cả thời gian di chuyển."

**5.2. Phân tích Trend Defect**
- **Prompt:** "Từ dữ liệu lỗi tháng này (Broken needle: X, Open seam: Y...), phân tích xu hướng lỗi nhà máy. Viết 1 đoạn nhận xét + 2 giải pháp quản lý để báo cáo Country Manager."

**5.3. Review & Reject CAPA không đủ chất lượng**
- **Prompt:** "CAPA của nhà máy cho lỗi 'đứt chỉ' là 'nhắc nhở công nhân cẩn thận'. Soạn email phản hồi bác bỏ CAPA, yêu cầu Root Cause bằng 5 Whys và hành động phòng ngừa thực tế."

**5.4. Chuẩn hóa Báo cáo FRI**
- **Prompt:** "Chuẩn hóa báo cáo FRI thô sau: tiếng Anh chuyên nghiệp, sửa ngữ pháp, format: Overview / Major Defects / Assessment (Pass/Fail/Pending)."

**5.5. Báo cáo Hiệu suất Nhà máy Cuối tháng**
- **Prompt:** "Tóm tắt Pass rate X%, Fail rate Y%, Top defect: [tên lỗi] thành báo cáo 150 chữ gửi Ban giám đốc."

**5.6. [MỚI] Factory Risk Assessment**
- **Khi nào dùng:** Đánh giá mức độ rủi ro tổng thể của một nhà máy trước mùa sản xuất mới.
- **Prompt:**
  > "Đây là hồ sơ tóm tắt về nhà máy [ẩn tên] (đã ẩn thông tin nhạy cảm):
  > - Pass rate 3 tháng gần nhất: [X%]
  > - Top defects: [liệt kê]
  > - CAPA tồn đọng chưa xử lý: [số lượng]
  > - Capacity hiện tại: [X%]
  > - Audit finding cuối: [tóm tắt]
  >
  > Hãy đánh giá Factory Risk Level (High / Medium / Low) với lý do cụ thể và đề xuất 3 hành động giám sát trước khi đặt PO mới vào nhà máy này."

---

## 6. QC Inspectors – Lan Anh, Nguyễn Thị Yến, Khánh Linh

**6.1. Ghi chú tay → Báo cáo tiếng Anh**
- **Prompt:** "Từ ghi chú kiểm hàng: [Paste ghi chú], viết đoạn tổng hợp tiếng Anh chuyên nghiệp để điền vào Report."

**6.2. Mô tả Defect tiếng Anh**
- **Prompt:** "Làm sao mô tả lỗi '[mô tả tiếng Việt]' sang tiếng Anh chuyên ngành QC hàng may mặc?"

**6.3. Email CAPA Fail**
- **Prompt:** "Soạn email tiếng Việt báo nhà máy lô hàng bị FAIL FRI do [lỗi]. Yêu cầu 100% kiểm lại, sửa, và phản hồi ngày re-inspection."

**6.4. Caption hình ảnh báo cáo**
- **Prompt:** "Gợi ý 5 cụm từ tiếng Anh ngắn để ghi chú vào hình ảnh lỗi: [liệt kê lỗi]."

**6.5. Checklist chuẩn bị đi kiểm hàng**
- **Prompt:** "Tạo checklist chuẩn bị dụng cụ và tài liệu cho QC trước khi đi FRI sản phẩm [tên sản phẩm]."

---

## 7. Senior CSR / Factory Audit / Chemical Compliance – Tú Anh / Anna

**7.1. Checklist CSR & Audit**
- **Prompt:** "Tạo checklist 15 điểm đánh giá CSR và an toàn lao động theo tiêu chuẩn quốc tế cho Vendor Onboarding nhà máy may mới."

**7.2. Tóm tắt RSL / Chemical Compliance**
- **Prompt:** "Tóm tắt điểm chính RSL đối với sản phẩm sơ sinh (cấm chì, phthalates, Azo dyes) sang tiếng Việt đơn giản để training tổ trưởng nhà máy."

**7.3. Phân loại Audit Finding**
- **Prompt:** "Phân loại các finding sau thành Critical / Major / Minor và giải thích ngắn lý do: [liệt kê finding]."

**7.4. CAPA Plan cho Finding CSR**
- **Prompt:** "Với finding '[tên finding]', lập CAPA plan 3 bước (Immediate / Root Cause / Preventive) yêu cầu nhà máy thực hiện, bao gồm cả buổi training nội bộ."

**7.5. Email yêu cầu Lab Test / Chemical Test**
- **Prompt:** "Soạn email song ngữ (Anh - Việt) yêu cầu nhà máy gửi mẫu vải PO X đến SGS test hóa chất (Lead & Phthalates) trước [date]. Nhấn mạnh fail → không sản xuất đại trà."

**7.6. [MỚI] Giải thích Tiêu chuẩn Higg / ZDHC / MRSL / SDS**
- **Khi nào dùng:** Cần giải thích tiêu chuẩn hóa chất phức tạp cho nhà máy hoặc vendor.
- **Prompt:**
  > "Giải thích các tiêu chuẩn sau bằng tiếng Việt đơn giản, mỗi cái 3-5 dòng, dành cho tổ trưởng nhà máy may không có background hóa chất:
  > - ZDHC MRSL (Manufacturing Restricted Substances List)
  > - Higg Index (FEM / FSLM)
  > - SDS (Safety Data Sheet) - cách đọc và dùng
  > Sau đó giải thích tại sao GoldBug US yêu cầu nhà máy phải tuân thủ các tiêu chuẩn này."

**7.7. [MỚI] Đánh giá SDS của Hóa chất từ Nhà máy**
- **Khi nào dùng:** Nhà máy nộp SDS cho hóa chất dùng trong sản xuất.
- **Prompt:**
  > "Tôi có SDS (Safety Data Sheet) của hóa chất [tên chung, ẩn tên thương mại] dùng trong quy trình [làm sạch / nhuộm / xử lý vải]. Thông tin SDS như sau:
  > [Paste thông tin từ SDS - Section 2 (Hazards), Section 3 (Composition), Section 8 (Exposure controls)]
  >
  > Hãy:
  > 1. Tóm tắt các rủi ro chính với công nhân
  > 2. Kiểm tra xem thành phần có chứa chất nào trong ZDHC MRSL Level 1 không
  > 3. Đề xuất PPE (thiết bị bảo hộ) phù hợp
  > Trình bày bằng tiếng Việt, ngắn gọn."

---

## 8. Office Admin / Office Manager – Hạnh

**8.1. Business Travel Itinerary**
- **Prompt:** "Lên lịch trình di chuyển 3 ngày cho team US (2 người) từ Tân Sơn Nhất → 2 nhà máy Bình Dương, bao gồm check-in khách sạn, thời gian họp, và 2 gợi ý nhà hàng ăn tối Q1."

**8.2. Email xin Corporate Rate khách sạn**
- **Prompt:** "Soạn email tiếng Anh gửi Sales Manager khách sạn X, giới thiệu Redbug/GoldBug, xin Corporate Rate 2026 với cam kết ~50 room-nights/năm."

**8.3. Phân loại Expense Report**
- **Prompt:** "Phân loại danh sách chi phí [liệt kê] vào hạng mục Travel / Office Supplies / Entertainment. Tạo bảng Markdown."

**8.4. Weekly Office Checklist**
- **Prompt:** "Tạo checklist Office Admin rà soát hàng tuần (máy in, văn phòng phẩm, nước uống, máy lạnh, dọn dẹp)."

**8.5. Thông báo Nội bộ**
- **Prompt:** "Soạn thông báo nội bộ ấm áp gửi toàn team về quy trình mới [tên quy trình] bắt đầu từ [ngày]."

---

*v1.2 | Structural fixes: Thêm security box 3 điểm ở đầu section A, chuyển phần giải thích dài thành secondary/đọc thêm | Luôn review kết quả AI trước khi dùng.*
