# Redbug AI Training v1.3 – Survey Insight Summary
> Cập nhật: 12/06/2026 | **7 / 11 phản hồi** | Hạnh / Office Admin — chưa phản hồi
> Đủ dữ liệu để cập nhật v1.3 — **không chờ Hạnh cho nội dung chính**

---

## 1. Tổng quan phản hồi

| Chỉ số | Giá trị |
|---|---|
| Tổng số phản hồi nhận được | **7 / 11 người** |
| Ngày cập nhật tài liệu | 12/06/2026 |
| Số người chưa phản hồi | 4 người |
| Người cần follow up chính | **Hạnh (Office Admin)** + 3 người khác |
| Trạng thái | ✅ Đủ để cập nhật v1.3 — Hạnh giữ như appendix/pending |

---

## 2. Vai trò đã phản hồi

| Vai trò | Số người | Tên |
|---|---|---|
| Country Manager / Leadership | 1 | Thiên Kim |
| Product Developer | 2 | Hải Yến, Sandra |
| Footwear Technical / Quality | 1 | Kim Thoa |
| QA/QC Manager | 1 | Xuân Trâm |
| QC Inspector | 2 | Lan Anh, Khánh Linh |
| **Office Admin** | **0** | **Hạnh — chưa phản hồi** |

**Ghi chú:** Office Admin (Hạnh) là gap duy nhất trong shortlist pilot. Nội dung Office Admin được giữ như appendix / mini-demo ngắn.

---

## 3. AI Tools hiện đang dùng

> Dữ liệu chi tiết tool chưa thu thập qua survey này — sẽ confirm bằng show-of-hands đầu buổi training.

**Câu hỏi show-of-hands đầu buổi:**
- "Ai đang dùng ChatGPT Free?" → Giơ tay
- "Ai đang dùng ChatGPT Plus hoặc Team?" → Giơ tay
- "Ai chưa dùng AI tool nào?" → Giơ tay

**Action item:** Xác nhận với Thiên Kim team đang có account gì để điều chỉnh Appendix A3 (tool comparison).

---

## 4. Mức độ tự tin trung bình (Confidence Level)

| Điểm | Số người | % | Tên |
|---|---|---|---|
| 1 / 5 – Chưa biết gì | 0 | 0% | |
| 2 / 5 – Đã thử vài lần | 4 | 57% | Kim Thoa, Lan Anh, Khánh Linh, Sandra |
| 3 / 5 – Dùng được cơ bản | 3 | 43% | Hải Yến, Thiên Kim, Xuân Trâm |
| 4 / 5 – Dùng thành thạo | 0 | 0% | |
| 5 / 5 – Rất tự tin | 0 | 0% | |
| **Trung bình** | **2.4 / 5** | | |

**→ Điều chỉnh training (Confidence ≤ 2.5):**
- Dành thêm 10 phút cho Starter Prompt practice
- Ưu tiên 3 workflow demos cốt lõi: Long Email Summary (WF1), Inspection Report (WF3), CAPA (WF4)
- Demo WF6 (Training Material) rút ngắn thành 10 phút nếu trễ giờ
- Không cắt Module Security — lo ngại bảo mật xuất hiện nhiều trong survey

---

## 5. Top 10 Nhu cầu / Pain Points

| # | Nhu cầu / Pain Point | Vai trò chính |
|---|---|---|
| 1 | Báo cáo kiểm hàng (Inspection Report / FRI) tự động hóa | QC Inspector, QA/QC Manager |
| 2 | Mô tả lỗi (Defect Description) bằng tiếng Anh chuyên nghiệp | QC Inspector, Footwear Quality |
| 3 | Phân tích nguyên nhân gốc rễ (Root Cause) và theo dõi CAPA | QA/QC Manager, QC Inspector |
| 4 | Đọc / đối chiếu Tech Pack, Data Pack, Manual, DCL | PD, Footwear Tech, QA/QC |
| 5 | Tóm tắt email dài và trích xuất action items | Tất cả vai trò |
| 6 | Theo dõi mẫu / đơn hàng, seasonal calendar, QC weekly log | Merchandiser, PD, QA/QC |
| 7 | Báo cáo tháng / dashboard / hiệu suất nhà máy | Country Manager, QA/QC Manager, Footwear Quality |
| 8 | Bảng so sánh báo giá / chi phí | Footwear Quality, Leadership |
| 9 | Tài liệu training / presentation | Country Manager, PD |
| 10 | **Lo ngại bảo mật: tech pack, giá, dữ liệu khách hàng / nhà máy** | Tất cả vai trò |

**→ Nhận xét quan trọng:**
- Top 4 pain points (báo cáo, defect description, CAPA, tech pack) tập trung vào QC/QA/PD workflow → xác nhận hướng **workflow-based** thay vì role-based.
- Lo ngại bảo mật (mục #10) cần giải quyết **trước khi vào bất kỳ demo nào** → tăng thời lượng Module Security + thêm slide Anonymization Protocol.

---

## 6. Hướng thay đổi Training: Role-based → Workflow-based

> **Insight quan trọng nhất từ survey này:**
> Nhiều thành viên team đảm nhận vai trò chồng chéo (VD: Kim Thoa vừa là Footwear Quality, vừa làm inspection report, vừa làm monthly report). Sandra và Hải Yến đều là PD nhưng workflow khác nhau.
>
> **→ Quyết định v1.3:** Chuyển từ framing theo vai trò (role-based) sang framing theo quy trình công việc (workflow-based). Mỗi Workflow Demo phục vụ nhiều vai trò cùng lúc.

**8 Core Workflows cho training:**

| # | Workflow | Vai trò chính |
|---|---|---|
| WF0 | AI Security + Anonymization (trước mọi thứ) | Tất cả |
| WF1 | Long Email / Manual / Tech Pack Summary Assistant | Tất cả |
| WF2 | Tech Pack / Data Pack / DCL Comparison Assistant | PD, Footwear Quality, QA/QC |
| WF3 | Inspection Report + Defect Description Assistant | QC Inspector, QA/QC Manager |
| WF4 | CAPA / Root Cause / Factory Risk Assistant | QA/QC Manager, Footwear Quality |
| WF5 ⭐ | Monthly Operations / Quality / Sample Progress Dashboard | Country Manager, QA/QC, Footwear Quality |
| WF6 | Training Material Presentation Assistant | Country Manager, PD |
| WF7 | Office Admin Assistant — **pending Hạnh response** | Office Admin |

---

## 7. Lo ngại Bảo mật (Security Concerns)

| Lo ngại / Câu hỏi | Đã giải quyết trong v1.3? |
|---|---|
| "AI có bảo mật thông tin tôi chia sẻ không?" | ✅ Slide 3 Security Module — 3 điều cần biết |
| Lo ngại về tech pack, cost, customer/factory data | ✅ Slide 5 mới: Anonymization Protocol (Ctrl+F / Replace All) |
| "AI có lưu dữ liệu công ty không?" | ✅ Slide 3 |
| "Dùng AI có vi phạm hợp đồng với GoldBug US không?" | ❓ Cần confirm với Thiên Kim trước 16/06 |
| Lo ngại chia sẻ giá / cost / margin | ✅ RED rule — không bao giờ paste giá thật |
| Lo ngại tên nhà máy / vendor bị lộ | ✅ Anonymization Protocol — Ctrl+F Replace All trước khi paste |

**→ Hành động cụ thể từ v1.3:**
1. Thêm Slide 5 mới: "Bước-từng-bước ẩn danh hóa tài liệu trước khi dùng AI"
2. Nhắc nhở anonymization ở mỗi demo, không chỉ slide security đầu ngày
3. Confirm với Thiên Kim về policy GoldBug US trước ngày 16/06

---

## 8. Insight theo Vai trò

### Thiên Kim — Country Manager / Leadership
- Confidence: **3 / 5**
- Nhu cầu: Monthly report / dashboard, factory performance, training material, risk escalation
- Workflow phù hợp: WF5 (Dashboard), WF6 (Training Material)
- Lưu ý: Có thể đóng vai "early adopter" để inspire team trong buổi training

### Kim Thoa — Footwear Technical / Quality
- Confidence: **2 / 5**
- Nhu cầu: Báo cáo tháng, bảng so sánh báo giá, tech pack reading, inspection report, defect description
- Workflow phù hợp: WF2, WF3, WF5 (toàn bộ dashboard)
- Lưu ý: Key user cho Demo WF5 — cần confirm có data mẫu giả lập không (deadline 14/06)

### Hải Yến — Product Development
- Confidence: **3 / 5**
- Nhu cầu: Tech pack / DCL comparison, sample tracking, defect report, long email summary
- Workflow phù hợp: WF1, WF2, WF3

### Sandra — Product Development
- Confidence: **2 / 5**
- Nhu cầu: Final inspection report, defect description, sample/order tracking
- Workflow phù hợp: WF3, WF1
- Lưu ý: Confidence thấp → cần thêm thời gian hands-on, ưu tiên nhóm nhỏ có người hỗ trợ

### Lan Anh — QC Inspector
- Confidence: **2 / 5**
- Nhu cầu: Inspection report, defect description bằng tiếng Anh, CAPA email, manual / tech pack reading
- Workflow phù hợp: WF1, WF3, WF4
- Lưu ý: Ghép nhóm với Khánh Linh trong hands-on — cùng workflow WF3

### Khánh Linh — QC Inspector
- Confidence: **2 / 5**
- Nhu cầu: Inspection report, defect description, root cause, email summary
- Workflow phù hợp: WF1, WF3, WF4
- Lưu ý: Tương tự Lan Anh — nên cùng nhóm để hỗ trợ nhau

### Xuân Trâm — QA/QC Management
- Confidence: **3 / 5**
- Nhu cầu: DCL comparison, CAPA follow-up, factory risk, monthly quality report
- Workflow phù hợp: WF2, WF4, WF5
- Lưu ý: Có thể chạy demo WF4 (CAPA) với real data đã anonymize trong phần hands-on

### Hạnh — Office Admin
- Confidence: **Chưa có** (survey chưa nhận được)
- Workflow dự kiến: WF7 (Office Admin — travel, expense, admin tasks)
- Lưu ý: Giữ WF7 như Appendix A1. Nếu Hạnh gửi response trước 15/06, cập nhật thêm.

---

## 9. Thứ tự ưu tiên Demo / Workflow (v1.3)

| Thứ tự | Workflow Demo | Lý do ưu tiên | Thay đổi so với v1.2? |
|---|---|---|---|
| 1 | WF0 – AI Security + Anonymization | Lo ngại bảo mật từ nhiều người — phải giải quyết đầu tiên | **Mở rộng: thêm Slide Anonymization Protocol** |
| 2 | WF3 – Inspection Report + Defect | 4+ người cần trực tiếp (Lan Anh, Khánh Linh, Sandra, Xuân Trâm) | **Mới — thay Demo 4 cũ** |
| 3 | WF1 – Long Email / Manual Summary | Tất cả vai trò có nhu cầu — demo nhanh nhất để thuyết phục | **Mới thêm vào** |
| 4 | WF4 – CAPA / Root Cause / Factory Risk | QA/QC + Footwear Quality | **Mở rộng từ Demo 4+5 cũ** |
| 5 | WF5 – Monthly Dashboard ⭐ | Pain point phổ biến nhất, demo ấn tượng nhất | Giữ nguyên ưu tiên cao |
| 6 | WF2 – Tech Pack / DCL Comparison | PD + QA/QC — nhu cầu thực tế cao | **Mới thêm vào** |
| 7 | WF6 – Training Material | Thiên Kim + PD — cần nhưng không khẩn cấp | **Mới — mini-demo ngắn** |
| 8 | WF7 – Office Admin | **Pending Hạnh** | Appendix A1 |

**Demo có thể cắt ngắn nếu trễ giờ:** WF6 (Training Material), WF2 (Tech Pack/DCL).

---

## 10. Điều chỉnh Training cần thiết sau Survey (v1.3)

### Điều chỉnh PHẢI làm:

| # | Điều chỉnh | File bị ảnh hưởng | Mức độ |
|---|---|---|---|
| 1 | Chuyển slide outline sang workflow-based | 05_slide_outline.md | 🔴 Cao |
| 2 | Thêm slide Anonymization Protocol (Ctrl+F / Replace All step-by-step) | 05_slide_outline.md | 🔴 Cao |
| 3 | Thêm 6 Workflow Demos mới vào Demo Pack | 02_demo_exercise_pack.md | 🔴 Cao |
| 4 | Cập nhật Pilot Tracker theo workflow-based assignments | 03_2week_pilot_tracker.md | 🔴 Cao |
| 5 | Thêm "Workflow-based Prompt Starters" vào Prompt Library | 01_prompt_library_by_role.md | 🔴 Cao |

### Điều chỉnh NÊN làm (nếu có thời gian trước 16/06):

| # | Điều chỉnh | Mức độ |
|---|---|---|
| 1 | Confirm với Thiên Kim về GoldBug US AI policy | 🟡 Trung bình |
| 2 | Confirm Kim Thoa có sẵn data giả lập cho WF5 Dashboard không | 🟡 Trung bình |
| 3 | Chuẩn bị phân nhóm hands-on: nhóm QC (Lan Anh + Khánh Linh) cùng nhau | 🟡 Trung bình |

### Điều chỉnh sau training (v1.4+):

| # | Điều chỉnh | Lý do hoãn |
|---|---|---|
| 1 | WF7 Office Admin — hoàn thiện sau khi nhận survey từ Hạnh | Pending response |
| 2 | AI tool comparison chi tiết (ChatGPT vs Claude vs Gemini) | Cần biết team đang dùng gì trước |

---

## 11. Pilots được khuyến nghị cuối cùng (v1.3)

| Pilot | Owner | Workflow | Data sẵn sàng? |
|---|---|---|---|
| Monthly Operations / Quality / Sample Progress Dashboard | Kim Thoa | WF5 | ❓ Cần confirm trước 14/06 |
| PO Master + Inspection Timing + Shipment Risk Dashboard | Thiên Kim | WF5 | ❓ |
| Final Inspection Report + Defect Description | Hải Yến, Sandra | WF3 | ✅ Thường xuyên có |
| Long Technical Email / Manual Summary | Lan Anh + QC team | WF1 | ✅ Thường xuyên có |
| DCL Comparison + CAPA / Factory Risk | Xuân Trâm | WF2, WF4 | ❓ Cần confirm |
| Office Admin Assistant | Hạnh | WF7 | **Pending survey response** |

---

## 12. Câu hỏi còn mở trước ngày training

| # | Câu hỏi | Người cần trả lời | Deadline | Trạng thái |
|---|---|---|---|---|
| 1 | Hạnh có gửi survey response không? | Hạnh | 15/06 | ❓ Chờ |
| 2 | Kim Thoa có thể chuẩn bị data mẫu giả lập (sample tracker + defect tháng 6) không? | Kim Thoa | 14/06 | ❓ Chưa hỏi |
| 3 | GoldBug US có policy về việc dùng AI — ảnh hưởng gì đến Redbug không? | Thiên Kim | 13/06 | ❓ Cần confirm |
| 4 | Team đang dùng ChatGPT Free hay Plus? Có account nào dùng chung không? | Thiên Kim | 13/06 | ❓ Chưa hỏi |
| 5 | Phòng training có WiFi ổn định không? | Hạnh / Office | 14/06 | ❓ Chưa kiểm tra |
| 6 | Có màn hình chiếu và HDMI không? | Hạnh / Office | 14/06 | ❓ Chưa kiểm tra |
| 7 | Có ai tham gia online không? (Zoom/Teams setup cần không?) | Thiên Kim | 13/06 | ❓ Chưa xác nhận |

---

*v1.3 | Cập nhật 12/06/2026 | 7 / 11 phản hồi | Chuyển hướng workflow-based | Hạnh / Office Admin — pending appendix*
