# Redbug AI Training v1.2 – Survey Insight Summary
> Điền sau khi đóng survey | Dùng để điều chỉnh nội dung training trước ngày 16/06/2026
> Template này được điền thủ công từ kết quả Google Form

---

## 1. Tổng quan phản hồi

| Chỉ số | Giá trị |
|---|---|
| Tổng số phản hồi nhận được | __ / 11 người |
| Ngày đóng survey | __ /06/2026 |
| Số người chưa phản hồi | __ người |
| Người chưa phản hồi (ghi tên để follow up) | |

---

## 2. Vai trò đã phản hồi

| Vai trò | Số người | Tên |
|---|---|---|
| Country Manager | | |
| Merchandiser | | |
| Product Developer | | |
| Footwear Technical / Quality | | |
| QA/QC Manager | | |
| QC Inspector | | |
| Senior CSR / Audit / Chemical Compliance | | |
| Office Admin | | |

---

## 3. AI Tools hiện đang dùng

| Tool | Số người dùng | Ghi chú |
|---|---|---|
| ChatGPT (Free) | | |
| ChatGPT Plus / Team | | |
| Gemini | | |
| Claude | | |
| Canva AI | | |
| Copilot / Microsoft AI | | |
| Chưa dùng tool nào | | |
| Khác | | |

**Nhận xét nhanh:**
> *(Điền sau: VD: "80% đang dùng ChatGPT Free → cần lưu ý tắt training data trong Settings")*

---

## 4. Mức độ tự tin trung bình (Confidence Level)

| Điểm | Số người | % |
|---|---|---|
| 1 / 5 – Chưa biết gì | | |
| 2 / 5 – Đã thử vài lần | | |
| 3 / 5 – Dùng được cơ bản | | |
| 4 / 5 – Dùng thành thạo | | |
| 5 / 5 – Rất tự tin | | |
| **Trung bình** | **__ / 5** | |

**Gợi ý điều chỉnh training dựa trên confidence trung bình:**
- Nếu ≤ 2.5 → Dành thêm 10 phút cho Starter Prompt, bỏ bớt demo phụ
- Nếu 2.5 – 3.5 → Giữ nguyên kế hoạch v1.2
- Nếu ≥ 3.5 → Có thể rút ngắn Module 2 (Prompt Basics), thêm thời gian cho Demo 7

---

## 5. Top 5 Pain Points (Vấn đề muốn giải quyết bằng AI)

> Ghi lại theo tần suất đề cập — pain point nào nhiều người nhắc nhất xếp trên

| # | Pain Point | Số người đề cập | Vai trò chính |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

**So sánh với survey Kim Thoa (đã có):**
- Bảng so sánh báo giá thủ công ✓
- Nhắc việc ưu tiên theo ngày/tuần ✓
- Báo cáo trực quan hàng tháng ✓
- Theo dõi tiến độ mẫu/đơn hàng ✓
- Tự động hóa dữ liệu ✓

**Pain points mới xuất hiện chưa cover trong v1.2:**
> *(Điền sau)*

---

## 6. Top Use Cases được yêu cầu

| Use Case | Số người đề cập | Đã có trong v1.2? |
|---|---|---|
| Viết/dịch email | | ✅ |
| Tổng hợp báo cáo tháng | | ✅ Demo 7 |
| Bảng so sánh báo giá | | ✅ Demo 7 Bước 4 |
| Priority list / nhắc việc | | ✅ Demo 7 Bước 1 |
| Theo dõi tiến độ mẫu | | ✅ Demo 7 Bước 2 |
| Phân tích defect trend | | ✅ Demo 7 Bước 3 |
| Dịch tech pack / comment | | ✅ Demo 3 |
| CAPA plan | | ✅ Demo 4+5 |
| Lịch trình công tác | | ✅ Demo 6 |
| Chemical/RSL/Higg/ZDHC | | ✅ Prompt 7.6–7.7 |
| Upload ảnh defect → mô tả | | ⚠️ Appendix A3 |
| Đọc/phân tích file PDF | | ⚠️ Appendix A2 |
| Use case mới #1 | | ❓ |
| Use case mới #2 | | ❓ |

---

## 7. Loại tài liệu thường xử lý

| Loại tài liệu | Số người đề cập |
|---|---|
| Email | |
| Excel / Google Sheet | |
| PDF | |
| Tech Pack / Data Pack | |
| Inspection Report | |
| Sample Comments | |
| Meeting Notes | |
| Hình ảnh sản phẩm / defect | |
| SDS / Lab Report | |
| Audit Report | |
| Khác | |

**Ghi chú cho training:**
> *(Điền sau: VD: "5/11 người làm việc với PDF thường xuyên → cần thêm demo Appendix A2 nếu có thời gian")*

---

## 8. Các bên giao tiếp bên ngoài / nội bộ

| Bên liên quan | Số người làm việc cùng | Ngôn ngữ chính |
|---|---|---|
| GoldBug US | | Tiếng Anh |
| Nhà máy / Factory | | Tiếng Việt |
| Vendor / Nhà cung cấp | | Tiếng Việt / Anh |
| Lab (SGS, Intertek...) | | Tiếng Anh |
| Nội bộ Redbug Vietnam | | Tiếng Việt |
| Khác | | |

**Ghi chú:** Xác nhận tỷ lệ email tiếng Anh vs tiếng Việt của từng vai trò để điều chỉnh prompt constraints.

---

## 9. Câu hỏi và Lo ngại Bảo mật

| Câu hỏi / Lo ngại | Số người đề cập | Đã giải quyết trong v1.2? |
|---|---|---|
| "AI có bảo mật thông tin tôi chia sẻ không?" | 1 (Kim Thoa) | ✅ File 01 + Slide 3 |
| "Công ty có policy AI chưa?" | | ✅ Trả lời trong Facilitator Notes |
| "Dùng AI có vi phạm hợp đồng với GoldBug US không?" | | ❓ Chưa có |
| "AI có lưu dữ liệu công ty không?" | | ✅ Slide 3 |
| Lo ngại khác | | |

**Action items bảo mật cần giải quyết trước training:**
> *(Điền sau — VD: nếu nhiều người lo ngại về hợp đồng với GoldBug, cần confirm với Thiên Kim trước ngày 16/06)*

---

## 10. Insight theo Vai trò

### Country Manager
- Confidence: __ / 5
- Pain points nổi bật:
- Use cases ưu tiên:
- Điều chỉnh cần thiết cho Demo 1:

### Merchandiser
- Confidence: __ / 5
- Pain points nổi bật:
- Use cases ưu tiên:
- Điều chỉnh cần thiết cho Demo 2:

### Product Developer
- Confidence: __ / 5
- Pain points nổi bật:
- Use cases ưu tiên:
- Điều chỉnh cần thiết cho Demo 3:

### Footwear Technical / Quality (Kim Thoa)
- Confidence: 2 / 5 *(đã có từ survey đầu tiên)*
- Pain points: Bảng so sánh báo giá, báo cáo tháng, priority list, sample tracking
- Use cases ưu tiên: Demo 7 toàn bộ
- Điều chỉnh: Không cần — Demo 7 được thiết kế trực tiếp từ survey này

### QA/QC Manager + QC Inspectors
- Confidence: __ / 5
- Pain points nổi bật:
- Use cases ưu tiên:
- Điều chỉnh cần thiết cho Demo 4:

### Senior CSR / Audit / Chemical Compliance
- Confidence: __ / 5
- Pain points nổi bật:
- Use cases ưu tiên:
- Điều chỉnh cần thiết cho Demo 5:

### Office Admin
- Confidence: __ / 5
- Pain points nổi bật:
- Use cases ưu tiên:
- Điều chỉnh cần thiết cho Demo 6:

---

## 11. Điều chỉnh Training cần thiết sau Survey

> Điền sau khi đọc xong tất cả responses. Đây là phần quan trọng nhất của file này.

### Điều chỉnh PHẢI làm (blockers):

| # | Điều chỉnh | File bị ảnh hưởng | Mức độ | Người thực hiện |
|---|---|---|---|---|
| 1 | | | 🔴 Cao | |
| 2 | | | 🔴 Cao | |

### Điều chỉnh NÊN làm (nếu có thời gian trước 16/06):

| # | Điều chỉnh | File bị ảnh hưởng | Mức độ |
|---|---|---|---|
| 1 | | | 🟡 Trung bình |
| 2 | | | 🟡 Trung bình |

### Điều chỉnh để sau training (v1.3+):

| # | Điều chỉnh | Lý do hoãn |
|---|---|---|
| 1 | | |
| 2 | | |

---

## 12. Thứ tự ưu tiên Demo (cập nhật sau survey)

> Sắp xếp lại nếu survey cho thấy nhu cầu khác với giả định ban đầu

| Thứ tự | Demo | Lý do ưu tiên | Thay đổi so với v1.2? |
|---|---|---|---|
| 1 | Demo 7 – Monthly Report | Pain point phổ biến nhất, nhiều vai trò liên quan | Giữ nguyên |
| 2 | Demo 4 – QA/QC + CAPA | | |
| 3 | Demo 2 – Merchandising | | |
| 4 | Demo 3 – Tech Pack Comment | | |
| 5 | Demo 5 – CSR/Compliance | | |
| 6 | Demo 1 – Brand/Product | | |
| 7 | Demo 6 – Office Admin | | |

**Demo nào có thể cắt ngắn nếu trễ giờ:** *(Điền sau)*

---

## 13. Pilots được khuyến nghị cuối cùng (Final)

> So sánh với Pilot Shortlist trong File 03. Điều chỉnh nếu survey cho thấy owner khác.

| Pilot | Owner xác nhận | Data họ có sẵn không? | Ghi chú |
|---|---|---|---|
| Monthly Tech/Quality/Sample Report | Kim Thoa | ❓ | Cần hỏi Kim Thoa trước ngày training |
| Inspection Report + CAPA | Xuân Trâm + QC | ❓ | |
| Sample Follow-up Email | Sandra | ❓ | |
| CSR/Audit CAPA | Tú Anh / Anna | ❓ | |
| Travel/Expense/Admin | Hạnh | ✅ Thường xuyên có | |

---

## 14. Câu hỏi còn mở trước ngày training

> Danh sách câu hỏi cần trả lời hoặc quyết định trước 16/06. Xóa khi đã giải quyết.

| # | Câu hỏi | Người cần trả lời | Deadline | Trạng thái |
|---|---|---|---|---|
| 1 | Kim Thoa có thể chuẩn bị data mẫu giả lập (sample tracker + defect data tháng 6) trước ngày training không? | Kim Thoa | 14/06 | ❓ Chưa hỏi |
| 2 | Team đang dùng ChatGPT Free hay Plus? Có account nào dùng chung không? | Thiên Kim | 13/06 | ❓ Chưa hỏi |
| 3 | Phòng training có WiFi ổn định không? Tốc độ khoảng bao nhiêu? | Hạnh / Office | 14/06 | ❓ Chưa kiểm tra |
| 4 | Có màn hình chiếu và HDMI không? Cần mang laptop cá nhân không? | Hạnh / Office | 14/06 | ❓ Chưa kiểm tra |
| 5 | Có ai tham gia online không? (Zoom/Teams setup cần không?) | Thiên Kim | 13/06 | ❓ Chưa xác nhận |
| 6 | Policy của GoldBug US về việc dùng AI có ảnh hưởng gì đến Redbug không? | Thiên Kim | 13/06 | ❓ Cần confirm |
| 7 | *(Thêm câu hỏi từ survey)* | | | |

---

*v1.2 | Template tạo sẵn — điền sau khi đóng survey | Không chứa dữ liệu cá nhân nhạy cảm*
