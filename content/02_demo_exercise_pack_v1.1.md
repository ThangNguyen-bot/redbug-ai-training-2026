# Redbug AI Training v1.3 - Demo & Exercise Pack
> Cập nhật: 12/06/2026 | v1.3: Chuyển sang Workflow-Based Framework (WF0–WF6) dựa trên survey 7/11 phản hồi

**Format chung mỗi Demo:** Objective → Business Situation → Input Data (giả lập) → Participant Task → Prompt Thực hành → Debrief

---

## Demo 1: GoldBug Brand & Product Assistant
**Dành cho:** Tất cả (tập trung PD, Merch, Country Manager)

**Objective:** Biến AI thành chuyên gia nắm định vị thương hiệu GoldBug để brainstorm ý tưởng sản phẩm.

**Business Situation:** GoldBug muốn mở rộng dòng "On-the-go travel gear". Redbug VN cần brainstorm 3 ý tưởng stroller accessories có thể sản xuất tại VN.

**Fictional Input Data:**
- Brand DNA: Safety, Mom-owned, On-the-go, Family well-being
- Current products: Carrier covers, diaper bags, head supports, mirrors
- Factory capabilities in VN: Túi xách may mặc, lưới (mesh), ép nhựa cơ bản

**Prompt Thực hành:**
> "Đóng vai Giám đốc Phát triển Sản phẩm của GoldBug (thương hiệu phụ kiện an toàn cho em bé tại Mỹ). Dựa trên thế mạnh nhà máy VN (may túi xách, lưới, ép nhựa cơ bản), đề xuất 3 ý tưởng stroller accessories mới. Đảm bảo thực tế, ưu tiên safety và tiện lợi cho mẹ. Trình bày: Tên sản phẩm | Chức năng | Chất liệu đề xuất."

**Debrief:**
- Ý tưởng AI có khả thi với nhà máy VN không?
- Cần thêm Constraint gì để bớt chung chung?

---

## Demo 2: Merchandising / Sample Follow-up Assistant
**Dành cho:** Merchandiser (Sandra)

**Objective:** Xử lý email giải trình trễ tiến độ từ nhà máy, soạn phản hồi chuyên nghiệp cho US.

**Business Situation:** Nhà máy A báo trễ mẫu Diaper Bag. Cần báo US ngay.

**Fictional Input Email từ Nhà máy:**
> *"Dear Sandra, We are sorry to inform that the diaper bag sample cannot be finished today. The fabric supplier delivered the wrong shade of navy blue for the lining. We had to reject the fabric and re-order. New fabric will arrive in 3 days. Also, the custom metal zipper puller is delayed at customs, expected tomorrow. We will try our best to finish the sample by next Tuesday. Please inform US."*

**Prompt Thực hành:**
> "Tôi là Merchandiser. Nhà máy vừa báo trễ mẫu Diaper Bag: [Paste email]. Soạn 1 email tiếng Anh gửi GoldBug US: thông báo trễ đến thứ Ba, tóm tắt 2 nguyên nhân (sai màu vải, kẹt hải quan khóa kéo), khẳng định đang ép nhà máy ưu tiên. Tone: chuyên nghiệp, chịu trách nhiệm."

**Debrief & Safety Reminder:**
- Đã ẩn tên nhà máy thật chưa? (Yellow rule)
- Email AI viết có dùng từ cường điệu quá không?

---

## Demo 3: Product Development / Tech Pack Comment Assistant
**Dành cho:** PD (Hải Yến, Trinh), Footwear Technologist (Kim Thoa)

**Objective:** Dịch, phân loại buyer comments chuyên ngành và tạo bảng action item cho nhà máy.

**Business Situation:** Nhận comments mẫu giày em bé từ Mỹ, cần action plan gửi nhà máy sửa.

**Fictional Input Data:**
> *"1. Adjust heel counter pattern, it's hitting baby's ankle bone. 2. The velcro strap is 1cm too long, please shorten. 3. Lining mesh feels scratchy, change to softer tricot. 4. Outsole bonding line has excess cement visible."*

**Prompt Thực hành:**
> "Tôi là Product Developer giày dép trẻ em. Comments duyệt mẫu từ khách hàng Mỹ: [Paste input]. Dịch sang tiếng Việt chuyên ngành giày. Tạo bảng 3 cột: STT | Vấn đề (Anh – Việt) | Yêu cầu sửa gửi nhà máy."

**Debrief:** Comment nào AI dịch chưa chính xác về mặt kỹ thuật? Team tự điều chỉnh.

---

## Demo 4: QA/QC Inspection Report + CAPA Assistant
**Dành cho:** QA/QC Manager (Xuân Trâm), QC Inspector (Lan Anh, Yến, Linh)

**Objective:** Chuyển ghi chú kiểm hàng lộn xộn → báo cáo chuẩn + yêu cầu CAPA.

**Business Situation:** QC vừa kiểm hàng Swaddle Blanket, hàng Fail.

**Fictional Input (Ghi chú tay của QC):**
> *"PO 9988, Swaddle. Số lượng kiểm: 200. Bị dơ dầu máy: 5 lỗi (Major). Bị đứt chỉ: 3 (Minor). Đo hụt chiều dài 2cm: 4 (Major). Tổng Major 9, Minor 3. Hàng rớt."*

**Prompt Thực hành:**
> "Tôi là QC. Viết 1 email tiếng Anh gửi nhà máy (cc QA Manager). Thông báo Swaddle Blanket PO 9988 FAIL. Tổng hợp lỗi thành bullet points: [Paste ghi chú]. Yêu cầu: 100% phân loại lại, vệ sinh vết dơ, điền form CAPA gửi lại trong 48h."

---

## Demo 5: CSR / Factory Audit / Chemical Compliance Assistant
**Dành cho:** Senior CSR / Audit (Tú Anh / Anna)

**Objective:** Lập CAPA plan an toàn lao động và compliance chuẩn cho nhà máy may.

**Business Situation:** Phát hiện hóa chất tẩy điểm không nhãn mác, để gần khu cắt vải.

**Fictional Input:**
> *"Spot lifter chemicals found without label and secondary containment, stored near cutting area."*

**Prompt Thực hành:**
> "Tôi là chuyên gia CSR/Audit. Phát hiện lỗi tại xưởng: [Paste lỗi]. Viết CAPA gồm 3 phần: Immediate Action / Root Cause Analysis (câu hỏi 5 Whys) / Preventive Action. Tiếng Anh đơn giản để xưởng dễ hiểu."

---

## Demo 6: Office Admin / Travel & Expense Assistant
**Dành cho:** Office Manager (Hạnh)

**Objective:** Tiết kiệm thời gian sắp lịch công tác và tổng hợp chi phí.

**Business Situation:** Chuẩn bị lịch trình thăm 2 nhà máy Bình Dương.

**Fictional Input:**
- Team: 3 người (Thiên Kim, Sandra, Khách US)
- Xuất phát: 8:00 AM từ VP Q1
- Điểm 1: Nhà máy X – Thuận An. Họp 1.5h
- Ăn trưa
- Điểm 2: Nhà máy Y – Bến Cát. Họp 2h
- Về lại Q1 trước 5:00 PM

**Prompt Thực hành:**
> "Đóng vai Office Manager, lên Travel Itinerary cho chuyến đi nhà máy: [Paste dữ liệu]. Phân bổ thời gian hợp lý (Q1→Thuận An ~45p, Thuận An→Bến Cát ~40p). Cung cấp 2 phiên bản: bản chi tiết tiếng Anh cho khách US, bản tóm tắt giờ tiếng Việt cho tài xế."

---

## Demo 7: Monthly Technical / Quality / Sample Progress Report Assistant ⭐ MỚI
**Dành cho:** Kim Thoa (Footwear Technical/Quality), Xuân Trâm (QA/QC Manager), Thiên Kim (Country Manager)
**Thời gian demo:** 45 phút (nhóm nhỏ 4-5 người)
**Thiết bị cần:** Laptop + file Excel giả lập (đã chuẩn bị sẵn)

---

### Objective
Dùng AI để biến dữ liệu từ Excel/Google Sheet giả lập thành:
1. Priority list (việc cần làm gấp)
2. Overdue action list (việc trễ deadline)
3. Sample / Order progress summary
4. Quotation comparison table
5. Defect / factory risk trend
6. Monthly management report outline
7. Email summary gửi GoldBug US hoặc internal team

---

### Business Situation
Kim Thoa đang quản lý 5 styles giày đang phát triển, theo dõi 3 đơn hàng, và vừa nhận báo giá từ 3 vendor cho đế TPR. Cuối tháng 6, cần nộp Monthly Technical & Quality Report cho Country Manager và gửi tóm tắt cho GoldBug US.

---

### Fictional Input Data – Dùng cho Demo

#### Bảng 1: Sample Development Tracker (giả lập)

| Style | Phiên bản | Ngày Submit | Deadline | Trạng thái | Ghi chú |
|---|---|---|---|---|---|
| Baby Sneaker A01 | Proto 2 gửi | 15/05 | 30/05 | ⚠️ Overdue +11 ngày | Heel counter issue chưa xử lý |
| Toddler Boot B02 | Approved | 01/06 | 05/06 | ✅ Done | - |
| Infant Shoe C03 | Proto 1 review | 08/06 | 10/06 | ⚠️ At Risk | Velcro feedback còn chờ |
| Sandal D04 | Chưa bắt đầu | - | 20/06 | 🔴 Risk | Còn 10 ngày phải submit |
| Trainer E05 | Fit Sample gửi | 28/05 | 05/06 | ⚠️ Overdue +5 ngày | Cần size set |

#### Bảng 2: Order Progress (giả lập)

| PO | Sản phẩm | Nhà máy | SL | Ship Date | Trạng thái | Rủi ro |
|---|---|---|---|---|---|---|
| PO-001 | Swaddle Set | Factory A | 5,000 | 15/07 | In Production | On track |
| PO-002 | Diaper Bag | Factory B | 2,000 | 01/07 | Quality Hold | FRI Fail – đang sửa |
| PO-003 | Baby Sneaker | Factory C | 3,000 | 01/08 | Sample Pending | At Risk |

#### Bảng 3: Defect Summary – Tháng 5/2026 (giả lập)

| Loại lỗi | Factory A | Factory B | Factory C | Tổng |
|---|---|---|---|---|
| Stain/Dơ | 15 | 8 | 3 | 26 |
| Open Seam | 8 | 5 | 4 | 17 |
| Bonding issue | 2 | 12 | 1 | 15 |
| Velcro problem | 0 | 20 | 0 | 20 |
| Measurement OOT | 5 | 3 | 7 | 15 |

#### Bảng 4: Quotation Comparison – Đế TPR giày toddler (giả lập)

| | Vendor X | Vendor Y | Vendor Z |
|---|---|---|---|
| Giá | $2.50/đôi | $2.20/đôi | $2.80/đôi |
| MOQ | 1,000 đôi | 2,000 đôi | 500 đôi |
| Lead time | 30 ngày | 45 ngày | 20 ngày |
| REACH | ✅ | ✅ | ✅ |
| CPSC | ✅ | ❌ | ✅ |
| OEKO-TEX | ❌ | ❌ | ✅ |

---

### Quy trình Demo (7 bước – Facilitator làm mẫu từng bước)

---

#### Bước 1 – Tạo Priority List + Overdue Alert

**Mục đích:** Từ Bảng 1, AI tự động phân loại việc cần làm ngay vs việc có thể lên lịch.

**Prompt:**
> "Tôi là Footwear Technical/Quality tại Redbug Vietnam. Dưới đây là bảng theo dõi tiến độ phát triển mẫu tháng 6 (dữ liệu giả lập, không có thông tin thật):
>
> [Paste Bảng 1 - Sample Development Tracker]
>
> Hãy:
> 1. Liệt kê danh sách Priority List: việc cần làm trong 48h tới (sắp xếp theo mức độ khẩn)
> 2. Liệt kê Overdue Action List: style nào trễ deadline, trễ bao nhiêu ngày, cần làm gì
> 3. Identify Risk Items: style nào có nguy cơ trễ nếu không hành động ngay
> Trình bày dưới dạng 3 bảng riêng biệt."

---

#### Bước 2 – Order Progress Summary

**Mục đích:** Tóm tắt tình trạng đơn hàng để báo cáo nhanh trong meeting.

**Prompt:**
> "Dựa trên bảng theo dõi đơn hàng sau (giả lập):
> [Paste Bảng 2 - Order Progress]
>
> Viết một đoạn Order Status Summary ngắn gọn (5-6 dòng, tiếng Anh) để tôi đọc nhanh trong cuộc họp sáng thứ Hai với Country Manager. Nêu rõ đơn nào on track, đơn nào có rủi ro và lý do."

---

#### Bước 3 – Defect Trend Analysis

**Mục đích:** Phân tích xu hướng lỗi và xác định nhà máy có risk cao nhất.

**Prompt:**
> "Đây là dữ liệu lỗi tháng 5/2026 từ 3 nhà máy (dữ liệu giả lập):
> [Paste Bảng 3 - Defect Summary]
>
> Hãy:
> 1. Tính tỷ lệ % đóng góp của từng nhà máy vào tổng lỗi
> 2. Xác định nhà máy có risk cao nhất và giải thích tại sao
> 3. Xác định Top 2 loại lỗi cần ưu tiên xử lý
> 4. Đề xuất 1 hành động kiểm soát cụ thể cho lỗi phổ biến nhất của Factory B
> Trình bày dưới dạng bảng + đoạn nhận xét ngắn."

---

#### Bước 4 – Quotation Comparison Table

**Mục đích:** So sánh báo giá vendor, ra quyết định dựa trên data thay vì cảm tính.

**Prompt:**
> "Tôi nhận báo giá đế TPR giày toddler từ 3 vendor (dữ liệu giả lập):
> [Paste Bảng 4 - Quotation Comparison]
>
> Hãy:
> 1. Tạo bảng so sánh đầy đủ với điểm mạnh/yếu của từng vendor
> 2. Đưa ra khuyến nghị cho 2 trường hợp:
>    - Trường hợp A: ưu tiên giá rẻ nhất và giao hàng nhanh
>    - Trường hợp B: ưu tiên compliance đầy đủ (CPSC + OEKO-TEX bắt buộc)
> Giải thích ngắn gọn lý do chọn."

---

#### Bước 5 – Monthly Management Report Outline

**Mục đích:** Tạo khung báo cáo tháng 1 trang để nộp cho Country Manager.

**Prompt:**
> "Dựa trên toàn bộ dữ liệu giả lập tháng 5-6/2026 tôi vừa cung cấp (sample tracker, order status, defect data), hãy tạo khung (outline) của Monthly Technical & Quality Report 1 trang theo cấu trúc:
>
> 1. Executive Summary (3 dòng)
> 2. Sample Development Status (bảng tóm tắt)
> 3. Order / Production Status
> 4. Quality Highlights – Top defects & factory risk
> 5. Risk Items cần attention từ Management
> 6. Action Plan tháng tới (3 bullet points)
>
> Viết bằng tiếng Anh chuyên nghiệp. Điền nội dung thật từ data đã cho, không để trống."

---

#### Bước 6 – Email Summary gửi GoldBug US

**Mục đích:** Viết email tóm tắt tháng cho đối tác US nhanh và chuyên nghiệp.

**Prompt:**
> "Dựa trên Monthly Report outline vừa tạo ở trên, soạn một email tiếng Anh tóm tắt (khoảng 200 từ) gửi GoldBug US team với:
> - Subject line gợi ý
> - Greeting
> - Paragraph 1: Sample development highlights tháng này
> - Paragraph 2: Quality concerns và action đang thực hiện
> - Paragraph 3: Các items cần feedback/approval từ US
> - Professional sign-off
>
> Tone: professional, concise, solution-focused. Không liệt kê quá nhiều detail kỹ thuật."

---

#### Bước 7 – Email Summary gửi Internal Redbug Team

**Mục đích:** Phiên bản internal – thẳng thắn hơn, tiếng Việt.

**Prompt:**
> "Soạn email nội bộ tiếng Việt tóm tắt tình hình tuần tới cho team Redbug (Country Manager + Merch + QA). Dựa trên dữ liệu tôi đã cung cấp:
> - Subject: Redbug Weekly Tech & Quality Update – Tuần [ngày]
> - Tone: thẳng thắn, rõ ràng, không cần polished quá
> - Nhấn mạnh: việc nào cần quyết định ngay từ Country Manager, việc nào cần Merch/PD vào xử lý
> - Kết thúc bằng: 3 Action Items với người phụ trách cụ thể"

---

### Debrief Demo 7 (5-7 phút)

1. **So sánh thời gian:** Bình thường Kim Thoa làm bảng này mất bao lâu? AI rút ngắn được bao nhiêu %?
2. **Chất lượng output:** Email gửi GoldBug US AI viết có dùng được ngay không? Cần sửa gì?
3. **Safety check:** Trong demo này, dữ liệu giả lập - nhưng nếu dùng thật thì cần ẩn/xóa thông tin nào?
4. **Next step:** Kim Thoa có thể áp dụng quy trình này vào cuối tháng 6 không? Ai trong team có thể hỗ trợ chuẩn bị data?

---

---

# PHẦN 2 – Workflow-Based Demos (v1.3)

> Các demo dưới đây được th