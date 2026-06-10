# Demo 7 – Monthly Technical / Quality / Sample Progress Report Assistant
## Tài liệu chi tiết độc lập cho Facilitator và Học viên (v1.2)

> **Đối tượng chính:** Kim Thoa (Footwear Technical/Quality), Xuân Trâm (QA/QC Manager), Thiên Kim (Country Manager)
> **Thời gian:** 45 phút | **Thiết bị:** Laptop + ChatGPT hoặc Claude
> **Nguồn gốc:** Demo được thiết kế dựa trực tiếp trên survey feedback từ Kim Thoa (06/2026)

---

## Vấn đề Demo này giải quyết

Từ survey của Kim Thoa:

| Pain Point | Demo 7 giải quyết bằng cách nào |
|---|---|
| Làm bảng so sánh báo giá thủ công mất thời gian | Bước 4: Quotation Comparison prompt → bảng so sánh trong 20 giây |
| Muốn nhắc việc ưu tiên theo ngày/tuần | Bước 1: Priority List từ danh sách mẫu đang chạy |
| Muốn báo cáo trực quan chuyên nghiệp hàng tháng | Bước 5: Monthly Report outline đầy đủ |
| Theo dõi tiến độ phát triển mẫu từ nhiều nguồn | Bước 2: Order + Sample summary từ data paste vào |
| Defect trend / factory risk | Bước 3: Phân tích xu hướng lỗi và xác định nhà máy rủi ro |
| Email summary gửi GoldBug US hoặc internal | Bước 6 + 7: 2 phiên bản email |

---

## Dữ liệu Giả lập – Copy & Paste trực tiếp vào AI

> **Lưu ý:** Toàn bộ dữ liệu sau là hoàn toàn giả lập. Không có thông tin thật của Redbug, GoldBug, hoặc bất kỳ nhà máy nào.

---

### DATA SET 1 – Sample Development Tracker

```
SAMPLE DEVELOPMENT STATUS – JUNE 2026 (Simulated Data)

Style         | Version          | Submitted  | Deadline   | Status          | Notes
Baby Sneaker A01 | Proto 2 sent  | 15-May     | 30-May     | OVERDUE +11 days | Heel counter issue unresolved, awaiting feedback from US
Toddler Boot B02 | Approved      | 01-Jun     | 05-Jun     | COMPLETED        | -
Infant Shoe C03  | Proto 1 review| 08-Jun     | 10-Jun     | AT RISK          | Velcro comment pending from US team
Sandal D04      | Not started    | -          | 20-Jun     | RISK             | Only 10 days remaining to submit
Trainer E05     | Fit sample sent| 28-May     | 05-Jun     | OVERDUE +5 days  | Size set required before approval
```

---

### DATA SET 2 – Order / Production Progress

```
ORDER PROGRESS TRACKER – JUNE 2026 (Simulated Data)

PO       | Product      | Factory   | Qty   | Ship Date | Status           | Risk Note
PO-001   | Swaddle Set  | Factory A | 5,000 | 15-Jul    | In Production    | On track
PO-002   | Diaper Bag   | Factory B | 2,000 | 01-Jul    | Quality Hold     | FRI FAIL – rework in progress, 3 days delay expected
PO-003   | Baby Sneaker | Factory C | 3,000 | 01-Aug    | Sample Pending   | At risk if sample not approved by 20-Jun
```

---

### DATA SET 3 – Defect Summary May 2026

```
DEFECT SUMMARY – MAY 2026 (Simulated Data)
Total inspections: 8 lots across 3 factories

Defect Type | Factory A | Factory B | Factory C | TOTAL
Stain / Soiling | 15 | 8 | 3 | 26
Open Seam | 8 | 5 | 4 | 17
Bonding Issue | 2 | 12 | 1 | 15
Velcro Problem | 0 | 20 | 0 | 20
Measurement OOT | 5 | 3 | 7 | 15
Missing Label | 1 | 3 | 0 | 4
TOTAL per factory | 31 | 51 | 15 | 97

Pass Rate: Factory A 87% | Factory B 71% | Factory C 92%
```

---

### DATA SET 4 – Quotation Comparison: TPR Outsole (Toddler Shoe)

```
VENDOR QUOTATION – TPR OUTSOLE FOR TODDLER SHOE (Simulated Data)
Material: TPR Outsole, size range EU 18–25

               | Vendor X        | Vendor Y        | Vendor Z
Unit Price     | $2.50/pair      | $2.20/pair      | $2.80/pair
MOQ            | 1,000 pairs     | 2,000 pairs     | 500 pairs
Lead Time      | 30 days         | 45 days         | 20 days
REACH cert     | YES             | YES             | YES
CPSC cert      | YES             | NO              | YES
OEKO-TEX cert  | NO              | NO              | YES
Color range    | 8 colors        | 5 colors        | 12 colors
Sample cost    | Free            | $50             | Free
Payment term   | 30% deposit     | 50% deposit     | 30% deposit
Previous exp.  | Worked with us  | New vendor      | New vendor
```

---

## 7 Prompts Hoàn chỉnh – Copy & Paste Trực tiếp

---

### PROMPT 1 – Priority List + Overdue Alert

```
Tôi là Footwear Technical/Quality tại một công ty xuất khẩu giày dép trẻ em. 
Dưới đây là bảng theo dõi tiến độ phát triển mẫu tháng 6 (dữ liệu giả lập, không chứa thông tin thật):

[PASTE DATA SET 1 vào đây]

Hãy tạo 3 bảng riêng biệt:

BẢNG 1 – PRIORITY LIST (Việc cần làm trong 48h tới):
Sắp xếp theo mức độ khẩn cấp. Với mỗi item ghi rõ: Style | Việc cần làm cụ thể | Lý do khẩn

BẢNG 2 – OVERDUE ALERT:
Style | Trễ bao nhiêu ngày | Root cause (nếu biết) | Action ngay bây giờ

BẢNG 3 – RISK WATCH (Có nguy cơ trễ nếu không hành động):
Style | Deadline còn lại | Rủi ro cụ thể | Khuyến nghị

Sau 3 bảng, viết 1 đoạn tóm tắt 50 từ để tôi đọc trong meeting sáng thứ Hai.
```

---

### PROMPT 2 – Order Progress Summary

```
Tôi là Quality/Technical lead theo dõi tiến độ sản xuất và mẫu.
Dưới đây là bảng theo dõi đơn hàng (dữ liệu giả lập):

[PASTE DATA SET 2 vào đây]

Hãy viết:
1. Một đoạn Order Status Summary bằng tiếng Anh (5-6 câu) để tôi báo cáo trong meeting với Country Manager. Nêu rõ đơn nào on track, đơn nào có rủi ro và mức độ rủi ro.

2. Một bảng Risk Level cho từng PO: PO | Ship Date | Risk Level (High/Medium/Low) | Action Required

Tone: chuyên nghiệp, facts-based, không dùng từ cảm xúc.
```

---

### PROMPT 3 – Defect Trend Analysis

```
Tôi là Quality Manager cần phân tích defect trend hàng tháng.
Đây là dữ liệu lỗi tháng 5/2026 từ 3 nhà máy (dữ liệu giả lập):

[PASTE DATA SET 3 vào đây]

Hãy thực hiện phân tích sau:

1. FACTORY RISK RANKING: Tính tỷ lệ % đóng góp lỗi của từng nhà máy vào tổng. Xếp hạng Factory Risk Level (High/Medium/Low) với giải thích ngắn.

2. TOP DEFECT ANALYSIS: Xác định Top 3 loại lỗi toàn hệ thống. Với lỗi #1 (nhiều nhất), đề xuất 2 corrective action cụ thể.

3. FACTORY B DEEP DIVE: Factory B có pass rate thấp nhất (71%). Phân tích pattern lỗi của Factory B và đề xuất 1 immediate action và 1 preventive action.

4. NHẬN XÉT 100 TỪ (tiếng Anh): Viết đoạn nhận xét Quality Summary tháng 5 để tôi dùng trong Monthly Report gửi GoldBug US.

Trình bày mỗi phần rõ ràng có đánh số.
```

---

### PROMPT 4 – Quotation Comparison Table

```
Tôi cần so sánh báo giá đế TPR giày toddler từ 3 vendor (dữ liệu giả lập):

[PASTE DATA SET 4 vào đây]

Hãy thực hiện:

1. BẢNG SO SÁNH ĐẦY ĐỦ (Markdown table):
Tiêu chí: Giá | MOQ | Lead time | REACH | CPSC | OEKO-TEX | Màu sắc | Chi phí mẫu | Điểm mạnh | Điểm yếu

2. KHUYẾN NGHỊ cho 2 trường hợp:
   - CASE A: Ưu tiên giá thấp nhất + lead time ngắn nhất
   - CASE B: Ưu tiên compliance đầy đủ (CPSC + OEKO-TEX là bắt buộc vì product là giày trẻ em xuất sang Mỹ)

3. TỔNG HỢP CUỐI: Nếu tôi phải chọn 1 vendor cho đơn hàng 1,500 đôi, giao trong 35 ngày, compliance đầy đủ, bạn khuyến nghị vendor nào và tại sao?

Viết ngắn gọn, có số liệu cụ thể, không dùng từ ngữ mơ hồ.
```

---

### PROMPT 5 – Monthly Management Report Outline

> ⚠️ **LƯU Ý TRƯỚC KHI DÙNG PROMPT NÀY:**
> Prompt 5 chỉ hoạt động tốt nếu bạn đã chạy Prompt 1–4 **trong cùng một chat session** và **chưa đóng tab**.
> Nếu bạn mở tab mới, refresh trang, hoặc mất session → AI không còn nhớ data bạn đã paste.
> Trong trường hợp đó, hãy dùng **Prompt 5 Fallback** ở phía dưới thay thế.

**Prompt 5 – Phiên bản dùng khi còn cùng session (đã chạy Prompt 1–4):**

```
Tôi là Footwear Technical/Quality tại Redbug Vietnam. Cuối tháng 6, tôi cần viết Monthly Technical & Quality Report gửi Country Manager.

Dựa trên toàn bộ dữ liệu tôi đã chia sẻ trong cuộc trò chuyện này (sample tracker, order status, defect analysis tháng 5, quotation comparison), hãy tạo nội dung đầy đủ cho Monthly Report theo cấu trúc sau:

---
REDBUG VIETNAM – MONTHLY TECHNICAL & QUALITY REPORT
Month: June 2026 | Prepared by: [Tên]

1. EXECUTIVE SUMMARY (3-4 dòng)
[Điền nội dung từ data đã cho – không để trống]

2. SAMPLE DEVELOPMENT STATUS
[Bảng tóm tắt: X styles in progress, Y approved, Z overdue]
[Key highlights và concerns]

3. ORDER / PRODUCTION STATUS
[Tóm tắt 3 PO với risk level]

4. QUALITY HIGHLIGHTS – MAY 2026
[Top defects, factory performance summary]

5. RISK ITEMS – ATTENTION REQUIRED
[Bullet points: những gì cần quyết định từ Management]

6. ACTION PLAN – JUNE REMAINING
[3-5 action items với owner và deadline]
---

Viết bằng tiếng Anh chuyên nghiệp. Điền thông tin thực từ data đã có.
```

---

**Prompt 5 Fallback – Phiên bản tự chứa (dùng khi mở session mới hoặc tab bị đóng):**

> Paste toàn bộ Data Set 1, 2, và 3 vào prompt bên dưới trước khi gửi.

```
Tôi là Footwear Technical/Quality tại Redbug Vietnam. Cuối tháng 6, tôi cần viết Monthly Technical & Quality Report gửi Country Manager.

Dưới đây là toàn bộ dữ liệu tháng này (giả lập / đã ẩn thông tin nhạy cảm):

--- SAMPLE DEVELOPMENT STATUS ---
[PASTE DATA SET 1 vào đây]

--- ORDER PROGRESS ---
[PASTE DATA SET 2 vào đây]

--- DEFECT SUMMARY ---
[PASTE DATA SET 3 vào đây]

Dựa trên các dữ liệu trên, hãy tạo nội dung đầy đủ cho Monthly Report theo cấu trúc sau:

---
REDBUG VIETNAM – MONTHLY TECHNICAL & QUALITY REPORT
Month: June 2026 | Prepared by: [Tên]

1. EXECUTIVE SUMMARY (3-4 dòng)
2. SAMPLE DEVELOPMENT STATUS – bảng tóm tắt + key highlights
3. ORDER / PRODUCTION STATUS – tóm tắt từng PO với risk level
4. QUALITY HIGHLIGHTS – top defects, factory performance
5. RISK ITEMS – những gì cần quyết định từ Management
6. ACTION PLAN – 3-5 action items với owner và deadline
---

Viết bằng tiếng Anh chuyên nghiệp. Điền thông tin thực từ data đã cho, không để trống.
```

---

### PROMPT 6 – Email Summary gửi GoldBug US

```
Dựa trên Monthly Report outline vừa tạo ở trên, soạn email tiếng Anh gửi GoldBug US team:

Yêu cầu:
- Subject line: gợi ý 2 options
- Độ dài: khoảng 200 từ (không quá dài)
- Cấu trúc:
  * Paragraph 1: Sample development highlights và status tháng này
  * Paragraph 2: Quality update – concerns và actions đang thực hiện
  * Paragraph 3: Items cần feedback hoặc approval từ US (nếu có)
  * Professional sign-off

Tone: Professional, solution-focused, confident (không apologetic nếu không cần thiết). GoldBug US team là đối tác lâu năm, không cần formal quá mức.

Đặt [TEN_NGUOI_GUI] và [TEN_NGUOI_NHAN] làm placeholder.
```

---

### PROMPT 7 – Email Nội bộ Gửi Team Redbug

> ⚠️ **LƯU Ý:** Prompt 7 cũng phụ thuộc vào cùng session với các Prompt trước. Nếu mất session, paste lại tóm tắt kết quả từ Prompt 5 vào đầu prompt này trước khi gửi.

```
Soạn email nội bộ tiếng Việt tóm tắt tình hình cho team Redbug (Country Manager + Merch + QA).

Dựa trên data và analysis tôi đã chia sẻ trong session này (nếu mất session, dán tóm tắt từ Prompt 5 vào đây).

Yêu cầu:
- Subject: Redbug Weekly Tech & Quality Update – Tuần [ngày tháng]
- Tone: Thẳng thắn, rõ ràng, không cần polished quá – đây là email nội bộ
- Cấu trúc:
  1. Tình hình mẫu: highlight 2-3 điểm quan trọng nhất
  2. Tình hình đơn hàng: đơn nào đang có vấn đề?
  3. Cần quyết định từ Thiên Kim (Country Manager): [liệt kê cụ thể]
  4. Cần Merch/PD vào xử lý: [liệt kê cụ thể]
  5. ACTION ITEMS tuần tới: Bảng | Task | Người phụ trách | Deadline

Viết tự nhiên như email nội bộ thật sự, không phải văn bản báo cáo cứng nhắc.
```

---

## Hướng dẫn Facilitator – Chạy Demo này

### Chuẩn bị trước buổi (5 phút)
1. Copy 4 Data Sets vào 1 file Notepad mở sẵn trên laptop
2. Mở ChatGPT hoặc Claude trên trình duyệt
3. In 1 bản tài liệu này cho Kim Thoa và Xuân Trâm tham khảo

### Trong Demo (45 phút)
- **Bước 1-2 (15p):** Facilitator làm mẫu Prompt 1 và Prompt 2, giải thích từng phần
- **Bước 3 (5p):** Kim Thoa hoặc Xuân Trâm tự chạy Prompt 3 (Defect Trend)
- **Bước 4 (5p):** Kim Thoa tự chạy Prompt 4 (Quotation) – đây là pain point của cô ấy
- **Bước 5-6 (10p):** Facilitator làm mẫu Report Outline + Email US
- **Bước 7 + Debrief (10p):** Email nội bộ + thảo luận

### Câu hỏi Debrief
1. Bình thường Kim Thoa mất bao lâu để làm bảng so sánh báo giá? AI làm trong bao lâu?
2. Output Report Outline có dùng được làm nền cho báo cáo thật không?
3. Email gửi GoldBug US cần sửa gì trước khi gửi thật?
4. Để dùng quy trình này vào cuối tháng 6 thật, Kim Thoa cần chuẩn bị gì?

---

## Checklist "Làm sẵn để dùng thật" – Dành cho Kim Thoa

Sau training, để áp dụng Demo 7 vào công việc thật cuối tháng 6:

- [ ] Chuẩn bị bảng Sample Tracker thật (trong Google Sheet / Excel) – ẩn tên nhà máy, thay bằng "Factory A", "Factory B"
- [ ] Chuẩn bị bảng Defect Summary từ data inspection tháng 6
- [ ] Nếu có báo giá vendor thật → ẩn tên vendor thật, thay bằng "Vendor X/Y/Z"
- [ ] Copy dữ liệu đã ẩn vào AI theo từng prompt
- [ ] Review output AI trước khi dùng – điều chỉnh nếu cần
- [ ] Gửi Monthly Report cho Thiên Kim trước ngày 3/7

---

*v1.2 | Structural fixes: Sửa format Data Set 3 (pipe table), thêm cảnh báo session dependency cho Prompt 5, thêm Prompt 5 Fallback tự chứa*
