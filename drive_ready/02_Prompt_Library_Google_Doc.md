# Redbug AI Training v1.0 — Thư Viện Prompt (WF0–WF7)
**Dành cho học viên | Cập nhật 16/06/2026**
Tất cả prompt dùng placeholder hư cấu: Factory A / Vendor X / Customer Y / PO-XXXX / Style-XXXX / USD XXX

---

## ⚠️ Nhắc Nhở Bảo Mật — ĐỌC TRƯỚC KHI DÙNG

**Trước mỗi lần paste tài liệu thật vào AI:**
1. Copy nội dung → Paste vào document mới (KHÔNG sửa file gốc)
2. Ctrl+F → Replace All: tên nhà máy → Factory A | PO thật → PO-XXXX | giá thật → USD XXX | tên người → Person A
3. Kiểm tra lần cuối → Paste vào AI

**RED (không bao giờ paste):** giá FOB / cost sheet / hợp đồng / thông tin cá nhân / toàn bộ inbox
**YELLOW (ẩn trước):** tên nhà máy / vendor / PO / style code / khách hàng / giá
**GREEN (thoải mái):** template trống / quy trình chung / email đã anonymize / demo data từ Drive

---

## WF0 — AI Security & Anonymization

**Mục đích:** Kiểm tra tài liệu có an toàn để paste vào AI không, hoặc hỏi AI cách ẩn danh hóa.

### Prompt WF0-1: Kiểm tra an toàn trước khi paste
```
Hãy đọc đoạn text sau và liệt kê những thông tin nào tôi nên ẩn danh hóa
(tên nhà máy, vendor, PO, style code, giá) trước khi dùng với AI:

[PASTE ĐOẠN TEXT VÀO ĐÂY]
```
*Cách adapt:* Thay đoạn text bằng bất kỳ tài liệu nào cần kiểm tra — email, report, tech pack.

### Prompt WF0-2: Hỏi quy tắc anonymization
```
Tôi đang chuẩn bị paste [loại tài liệu: email / tech pack / inspection report] vào AI.
Những loại thông tin nào tôi cần ẩn danh hóa trước? Tôi làm trong ngành sản xuất baby & kids.
```

---

## WF1 — Long Email / Manual / Tech Pack Summary

**Mục đích:** Tóm tắt email dài, chuỗi email, manual nhiều trang thành action items rõ ràng.

### Prompt WF1-1: Tóm tắt email đơn
```
Đây là email từ Factory A (đã anonymize).
Hãy tóm tắt thành:
1. Vấn đề / nội dung chính (1–2 câu)
2. Trạng thái hiện tại hoặc kết quả chính
3. Action items tôi cần làm ngay (bullet points, theo mức độ ưu tiên)
4. Có rủi ro nào cần báo Manager không?

[PASTE EMAIL ĐÃ ANONYMIZE VÀO ĐÂY]
```
*Cách adapt:* Thay "Factory A" bằng bất kỳ nguồn nào. Thêm yêu cầu "dịch sang tiếng Anh" nếu cần.

### Prompt WF1-2: Tóm tắt chuỗi email
```
Đây là chuỗi [N] email giữa Redbug và Factory A về [chủ đề — đã anonymize].
Tóm tắt theo thứ tự thời gian:
1. Vấn đề ban đầu là gì?
2. Các bên đã làm gì để giải quyết?
3. Trạng thái hiện tại?
4. Action items tôi cần làm ngay hôm nay (3–5 items, có deadline nếu đề cập)?

[PASTE THREAD ĐÃ ANONYMIZE VÀO ĐÂY]
```

### Prompt WF1-3: Tóm tắt manual / tech doc dài
```
Đây là section [tên] từ manual / tech doc [đã anonymize].
Tóm tắt thành:
- Điểm chính (3–5 bullets)
- Những gì nhà máy cần làm theo
- Những gì QC / PD cần kiểm tra

[PASTE SECTION VÀO ĐÂY]
```

### Prompt WF1-4: Soạn email phản hồi từ tóm tắt
```
Dựa trên tóm tắt email vừa rồi, soạn email phản hồi tiếng Anh gửi Factory A.
Nội dung: [yêu cầu cụ thể — ví dụ: xác nhận ETA mới, yêu cầu update timeline].
Tone: chuyên nghiệp, rõ ràng, ngắn gọn dưới 150 từ.
```

---

## WF2 — Tech Pack / DCL / Manual Comparison

**Mục đích:** Tìm nhanh các thay đổi giữa 2 version tài liệu mà không phải đọc lại toàn bộ.

### Prompt WF2-1: So sánh Tech Pack 2 version
```
Đọc Spec v1 và Spec v2 sau (đã anonymize — style code: Style-XXXX, khách hàng: Customer Y).
Liệt kê chính xác tất cả thông số, vật tư, yêu cầu đã thay đổi.
Tạo bảng:

Component | Version cũ (v1) | Version mới (v2) | Mức độ ảnh hưởng (Cao/Trung/Thấp) | Cần thông báo nhà máy ngay không?

[PASTE SPEC V1 VÀO ĐÂY]

[PASTE SPEC V2 VÀO ĐÂY]
```
*Cách adapt:* Dùng cho DCL, BOM, data pack, manual — cùng cấu trúc, chỉ đổi tên document.

### Prompt WF2-2: So sánh DCL (Dangerous Chemicals List)
```
So sánh DCL v1 (tháng [X]) và DCL v2 (tháng [Y]) cho Style-XXXX / Customer Y (đã anonymize).
Tập trung vào:
1. Thay đổi về giới hạn hóa chất (ppm / %)
2. Tiêu chuẩn test mới được thêm vào
3. Vật liệu / component nào bị ảnh hưởng nhiều nhất
4. Action: nhà máy cần làm gì trước khi tiếp tục sản xuất?

[PASTE DCL V1]

[PASTE DCL V2]
```

### Prompt WF2-3: Giải thích thuật ngữ kỹ thuật
```
Giải thích các thuật ngữ kỹ thuật sau trong Tech Pack / DCL sang tiếng Việt đơn giản
để tôi có thể giải thích cho team nhà máy:

[PASTE THUẬT NGỮ / ĐOẠN TEXT VÀO ĐÂY]
```

---

## WF3 — Inspection Report + Defect Description

**Mục đích:** Biến ghi chú tay sau kiểm hàng thành báo cáo tiếng Anh chuyên nghiệp trong < 10 phút.

### Prompt WF3-1: Full Inspection Report (ghi chú → report hoàn chỉnh)
```
Tôi là QC Inspector tại Redbug Vietnam.
Từ ghi chú kiểm hàng sau (Factory A, PO-XXXX, Style-XXXX — đã anonymize), hãy:

1. Viết Inspection Summary tiếng Anh chuyên nghiệp:
   - Product, factory, PO (anonymized), inspection date
   - Quantity inspected, AQL standard (2.5 Level II)
   - Major defects found (count + type), Minor defects found
   - Result: PASS hoặc FAIL với lý do ngắn gọn

2. Tạo bảng Defect List:
   Defect Name | Description (English QC terms) | Major / Minor | Qty Found | Defect Rate %

3. Viết email ngắn tiếng Anh gửi Factory A:
   - Thông báo kết quả Pass / Fail
   - Yêu cầu 100% sort (nếu Fail) + CAPA trong 48h
   - Tone chuyên nghiệp, rõ ràng

[PASTE GHI CHÚ KIỂM HÀNG (ĐÃ ANONYMIZE) VÀO ĐÂY]
```

### Prompt WF3-2: Mô tả defect bằng tiếng Anh
```
Mô tả các lỗi sau bằng tiếng Anh chuyên ngành QC (ngành may mặc / giày da baby & kids):

[LIỆT KÊ LỖI TIẾNG VIỆT — VÍ DỤ: đứt chỉ, dính dầu máy, khóa kéo kẹt, vải nhăn]

Cung cấp: tên lỗi tiếng Anh chuẩn + mô tả 1 câu + Major hay Minor thông thường.
```
*Cách adapt:* Thêm chi tiết sản phẩm (baby apparel / toddler shoes / diaper bag) để AI dùng đúng thuật ngữ.

### Prompt WF3-3: Email CAPA gửi nhà máy
```
Viết email tiếng Anh ngắn gọn (dưới 150 từ) gửi Factory A:
- Thông báo FRI kết quả FAIL
- Lỗi chính: [liệt kê 2–3 lỗi tiếng Anh]
- Yêu cầu: 100% sort trong [X] ngày + CAPA formal response trong 48h
Tone: chuyên nghiệp, kiên quyết nhưng constructive.
```

---

## WF4 — CAPA / Root Cause / Factory Risk

**Mục đích:** Phân tích và phản hồi CAPA không đạt, chạy 5 Whys, đánh giá rủi ro nhà máy.

### Prompt WF4-1: Đánh giá CAPA + yêu cầu 5 Whys
```
Tôi là QA Manager tại Redbug Vietnam.
Factory A gửi CAPA cho lỗi [tên lỗi]:
"[PASTE CAPA CỦA NHÀ MÁY VÀO ĐÂY]"

Defect trend 3 tháng: [tháng 1: X%, tháng 2: Y%, tháng 3: Z%]

Hãy:
1. Giải thích tại sao CAPA này không đạt (cụ thể, không chung chung)
2. Soạn email phản hồi tiếng Anh bác bỏ CAPA, yêu cầu 5 Whys analysis
3. Gợi ý 4 Preventive Actions thực tế (không phải "nhắc nhở công nhân")
4. Đánh giá Factory A Risk Level: Low / Medium / High — với lý do
```

### Prompt WF4-2: Tự chạy 5 Whys
```
Lỗi quan sát được tại Factory A: [tên lỗi] — tỷ lệ [X]% tháng [Y].
Hãy thực hiện 5 Whys analysis và đề xuất:
- Corrective Action (xử lý ngay)
- Preventive Action (ngăn tái phát hệ thống)
- Responsible party + timeline

Format:
Why 1: [symptom] → vì...
Why 2: [process failure] → vì...
Why 3: [systemic cause] → vì...
Why 4: [root system gap] → vì...
Why 5: Root Cause xác nhận
Corrective Action:
Preventive Action:
```
*Cách adapt:* Điền lỗi thật đã anonymize. Thêm context: loại sản phẩm, quy trình sản xuất nếu có.

### Prompt WF4-3: Đánh giá rủi ro nhà máy từ trend data
```
Từ data lỗi 3 tháng sau (đã anonymize), đánh giá Factory A Risk Level (Low / Medium / High):
[PASTE TREND DATA VÀO ĐÂY]

Gợi ý 3 actions Redbug nên làm dựa trên risk level.
```

---

## WF5 — Monthly Operations Dashboard

**Mục đích:** Tạo dashboard tháng từ data thô trong < 10 phút. Chạy 6 prompts trong cùng 1 session — không đóng tab.

### Prompt WF5-1: Sample Priority Table
```
Từ bảng Sample Tracker tháng [X] sau (đã anonymize — Factory A/B/C, Style-001 v.v.), tạo bảng ưu tiên:
- Overdue (đã trễ)
- At-Risk (còn ≤ 5 ngày)
- On-Track

Style nào cần gửi email nhắc nhà máy ngay hôm nay?

[PASTE SAMPLE TRACKER VÀO ĐÂY]
```

### Prompt WF5-2: Order Shipment Risk
```
Từ bảng Order Progress sau (đã anonymize), đánh giá Shipment Risk từng PO:
On-Track / At-Risk / Critical

PO nào có nguy cơ delay? Nguyên nhân chính là gì? Gợi ý 3 actions cụ thể.

[PASTE ORDER TRACKER VÀO ĐÂY]
```

### Prompt WF5-3: Factory Risk Ranking
```
Từ Defect Summary 3 tháng sau (đã anonymize), tạo:
1. Factory Risk Ranking: Factory A / B / C — risk level + lý do 1 câu
2. Top 3 defect types toàn bộ tháng
3. Đoạn nhận xét tiếng Anh 100 từ về factory performance tổng thể

[PASTE DEFECT SUMMARY VÀO ĐÂY]
```

### Prompt WF5-4: Quotation Comparison ⭐ (Main Wow Moment)
```
Từ bảng Quotation Comparison sau (giá đã anonymize thành USD-A / USD-B / USD-C), tạo bảng:
Item | Factory A | Factory B | Factory C | Variance | Recommended Factory | Lý do

Factory nào KHÔNG nên chọn dù giá thấp vì rủi ro chất lượng hoặc track record kém?

[PASTE QUOTATION DATA VÀO ĐÂY]
```

### Prompt WF5-5: Monthly Report đầy đủ
```
Từ tất cả data tháng [X] vừa phân tích (sample tracker, order progress, defect summary, quotation), viết:
1. Executive Summary tiếng Anh 150–200 từ gửi Management:
   - On track: ...
   - At risk / issues: ...
   - Recommended actions: ...
2. Bảng Action Items: Action | Owner | Deadline | Priority
```
*Lưu ý:* Nếu AI "quên" data từ các prompt trước → paste lại toàn bộ data block WF5 + câu này.

### Prompt WF5-6: Email GoldBug US Update
```
Từ Monthly Summary vừa tạo, viết email tiếng Anh ~200 từ gửi GoldBug US.
- Subject line rõ ràng (ví dụ: "Redbug Monthly Update — June 2026")
- Tóm tắt on-track items
- Highlight 2–3 key risks cần GoldBug US biết
- Tone: professional, solution-focused
- Kết thúc: GoldBug US cần review / approve gì (nếu có)
```

---

## WF6 — Training Material Presentation

**Mục đích:** Tạo outline slide training cho team nội bộ hoặc cho nhà máy.

### Prompt WF6-1: Tạo outline slides training
```
Tôi cần tạo slide training về [CHỦ ĐỀ].
Đối tượng: [team nội bộ Redbug / team nhà máy / team QC mới].
Thời lượng: [X phút]. Ngôn ngữ: [tiếng Việt / tiếng Anh / song ngữ].

Hãy tạo:
1. Outline [N] slides:
   - Slide [số]: [Tiêu đề] — 3–5 bullet points
2. 3 Learning Objectives ("Sau buổi này, bạn sẽ...")
3. 1 quiz question cuối buổi để kiểm tra hiểu bài
```
*Cách adapt:* Thêm "Không đưa giá cả, tên nhà máy thật, hay thông tin confidential vào tài liệu training gửi nhà máy."

### Prompt WF6-2: Tạo SOP từ quy trình mô tả
```
Từ mô tả quy trình sau (đã anonymize), viết SOP ngắn gọn:
Purpose → Scope → Step-by-step (numbered) → Responsible parties → Exceptions

Ngôn ngữ: [tiếng Anh đơn giản / tiếng Việt].

[PASTE MÔ TẢ QUY TRÌNH VÀO ĐÂY]
```

---

## WF7 — Office Admin Invoice & Expense Assistant

**Mục đích:** Trích xuất data hóa đơn từ email đã lọc thủ công → tạo expense record → đặt tên file.

> ⚠️ **Quy tắc bảo mật WF7:** Không cho AI quét toàn bộ inbox. Chỉ xử lý email hóa đơn bạn đã tự chọn và lọc thủ công trước. Copy từng email một — không dùng plugin tự động.

### Prompt WF7-1: Trích xuất thông tin hóa đơn
```
Đây là email hóa đơn từ nhà cung cấp (tôi đã chọn email này thủ công từ inbox).
Hãy:
1. Trích xuất đầy đủ thông tin hóa đơn (vendor, invoice number, date, due date, line items, total)
2. Tạo 1 dòng bảng ghi nhận chi phí:
   | Ngày | Nhà cung cấp | Số hóa đơn | Mô tả | Số tiền | Hạng mục | Trạng thái | Ghi chú |
3. Gợi ý tên file theo format: YYYYMMDD_VendorX_InvoiceNo_AmountVND.pdf

[PASTE NỘI DUNG EMAIL HÓA ĐƠN ĐÃ LỌC THỦ CÔNG VÀO ĐÂY]
```
*Cách adapt:* Hạng mục gợi ý: Văn phòng phẩm / Điện nước / Sửa chữa / Tiếp khách / Courier / Phần mềm / Khác.

### Prompt WF7-2: Tổng hợp expense summary tháng
```
Từ bảng expense tháng [X] sau, tạo:
1. Tổng chi phí theo hạng mục (bảng: Hạng mục | Số tiền | % tổng)
2. Danh sách hóa đơn chưa thanh toán (Pending)
3. 1 đoạn tóm tắt tiếng Việt ngắn (~50 từ) để báo cáo

[PASTE BẢNG EXPENSE VÀO ĐÂY]
```

---

## Bonus — Prompt Khởi Động Session

**Paste vào đầu mỗi phiên làm việc để AI nhớ context:**
```
Từ bây giờ, hãy đóng vai là trợ lý công việc của tôi.
Tôi là [vai trò] tại Redbug Vietnam, làm việc với sản phẩm baby & kids cho GoldBug US.
Công việc hôm nay: [mô tả ngắn task cần làm].
Luôn dùng Factory A / Vendor X / PO-XXXX thay tên thật, và nhắc tôi nếu tôi quên anonymize.
```

---

*Redbug AI Training v1.0 | 16/06/2026 | Thư viện Prompt dành cho học viên | Cập nhật khi có workflow mới*
