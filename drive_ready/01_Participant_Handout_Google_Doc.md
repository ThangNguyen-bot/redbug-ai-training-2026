# Redbug AI Training v1.0 — Tài Liệu Học Viên
**Ngày 16/06/2026 | Giữ lại để dùng hàng ngày**
Website tham khảo: https://redbug-ai-training-2026.vercel.app/

---

## PHẦN 1 — Quy Tắc Bảo Mật AI (RED / YELLOW / GREEN)

> Đọc phần này trước khi dùng AI lần đầu. Áp dụng mỗi ngày.

| 🔴 RED — KHÔNG BAO GIỜ paste vào AI | 🟡 YELLOW — Ẩn danh hóa trước khi paste | 🟢 GREEN — Thoải mái |
|---|---|---|
| Giá FOB / cost sheet / margin thật | Tên nhà máy → **Factory A / B / C** | Quy trình chung, không có data nhạy cảm |
| Số PO thật | Tên vendor → **Vendor X / Y** | Email đã anonymize xong |
| Hợp đồng, audit finding nhạy cảm | Tên khách hàng → **Customer Y** | Template trống, blank form |
| Thông tin cá nhân (email, SĐT thật) | Mã PO thật → **PO-XXXX** | Câu hỏi kỹ thuật không kèm data thật |
| Cost breakdown, margin thật | Mã style thật → **Style-XXXX** | Tiêu chuẩn public (ASTM, OEKO-TEX…) |
| Toàn bộ nội dung inbox email | Giá thật → **USD XXX** hoặc **[PRICE REMOVED]** | Fictional demo data từ Drive |

### ⚠️ Lưu ý đặc biệt cho WF7 (Office Admin)
> **Không cho AI quyền quét hoặc kết nối toàn bộ inbox email.**
> Chỉ xử lý email hóa đơn / PDF mà **bạn đã tự chọn và lọc thủ công** trước.
> Copy từng email một vào chat — không dùng plugin tự động quét hộp thư.

---

## PHẦN 2 — Checklist Ẩn Danh Hóa (3 Bước — Ctrl+F)

Mỗi lần muốn paste tài liệu thật vào AI, thực hiện 3 bước này:

**Bước 1:** Copy nội dung → Paste vào document mới (KHÔNG sửa file gốc)

**Bước 2:** Ctrl+F → Replace All — thay thế từng mục:

```
Tên nhà máy          → Factory A  (B, C nếu nhiều)
Tên vendor           → Vendor X
Tên khách hàng/brand → Customer Y
Số PO thật           → PO-XXXX
Mã style thật        → Style-XXXX
Giá / cost / margin  → USD XXX  hoặc  [PRICE REMOVED]
Tên người thật       → Person A
Email thật           → Email removed
Số điện thoại        → Phone removed
```

**Bước 3:** Đọc lướt nhanh — không còn thông tin nhạy cảm → ✅ Paste vào AI

---

## PHẦN 3 — Sơ Đồ 8 Workflow (WF0–WF7)

| Workflow | Tên | Dùng khi nào | Ai nên dùng |
|---|---|---|---|
| **WF0** | AI Security + Anonymization | Trước khi dùng AI lần đầu trong ngày | Tất cả |
| **WF1** | Long Email / Manual / Tech Pack Summary | Nhận email dài, chuỗi email, manual nhiều trang | Tất cả |
| **WF2** | Tech Pack / DCL / Manual Comparison | Nhận tech pack revision hoặc DCL version mới | PD, QA/QC, Footwear |
| **WF3** | Inspection Report + Defect Description | Vừa đi kiểm hàng về, có ghi chú tay | QC Inspector, QA/QC |
| **WF4** | CAPA / Root Cause / Factory Risk | Nhận CAPA từ nhà máy, lỗi lặp lại nhiều lần | QA/QC Manager |
| **WF5 ⭐** | Monthly Operations Dashboard | Cuối tháng tổng hợp báo cáo | Thiên Kim, Kim Thoa |
| **WF6** | Training Material Presentation | Cần tạo slide training cho team / nhà máy | Thiên Kim, PD |
| **WF7** | Office Admin Invoice & Expense | Email hóa đơn đã lọc thủ công → trích xuất + expense tracker | Hạnh |

---

## PHẦN 4 — Công Thức Prompt Chuẩn

```
Role    : "Đóng vai [Vai trò của bạn] tại Redbug Vietnam."
Task    : "Hãy [làm gì — cụ thể]."
Context : "Dựa trên [dữ liệu / tài liệu — đã anonymize]."
Output  : "Trình bày kết quả dạng [bảng / bullet / email / report]."
Constraints: "Viết bằng [tiếng Anh/Việt], tone [chuyên nghiệp], dưới [X từ]."
```

**Ví dụ thực tế:**
> "Đóng vai QC Inspector tại Redbug Vietnam. Từ ghi chú kiểm hàng sau (đã anonymize), viết Inspection Summary tiếng Anh chuyên nghiệp và email CAPA gửi Factory A. Dạng: 1 đoạn Summary + bảng Defect List + email ngắn. Dưới 200 từ tổng cộng."

---

## PHẦN 5 — Starter Prompt (Điền 1 lần đầu mỗi session)

Copy đoạn này → Paste vào ChatGPT / Claude / Gemini → Điền thông tin của bạn:

```
Từ bây giờ, hãy đóng vai là trợ lý công việc cá nhân của tôi.
Tôi là [Vai trò của bạn] tại Redbug Vietnam, làm việc với sản phẩm baby & kids cho GoldBug US.
Công việc chính của tôi: [liệt kê 2–3 việc cụ thể].
Hãy ưu tiên câu trả lời thực tế, dùng tiếng Anh chuyên ngành chuẩn xác,
và nhắc tôi nếu tôi quên ẩn danh hóa thông tin trước khi paste.
Trả lời: "Sẵn sàng hỗ trợ!" để xác nhận.
```

---

## PHẦN 6 — 10 Starter Prompt Copy-Paste

### WF1 — Tóm tắt email / tài liệu

**WF1-A: Tóm tắt email đơn:**
```
Tóm tắt email sau thành:
1. Vấn đề chính (1–2 câu)
2. Trạng thái hiện tại
3. Action items tôi cần làm ngay (bullet, có ưu tiên)

[PASTE EMAIL ĐÃ ANONYMIZE VÀO ĐÂY]
```

**WF1-B: Tóm tắt chuỗi email:**
```
Đây là chuỗi email với Factory A.
Tóm tắt theo thứ tự thời gian và liệt kê 3–5 action items cần làm ngay hôm nay.

[PASTE THREAD ĐÃ ANONYMIZE VÀO ĐÂY]
```

### WF2 — So sánh Spec / DCL

**WF2-A: So sánh 2 version:**
```
Liệt kê tất cả thay đổi giữa Spec v1 và Spec v2 sau.
Tạo bảng: Component | v1 | v2 | Mức ảnh hưởng | Cần thông báo nhà máy ngay không?

[PASTE SPEC V1 VÀO ĐÂY]
[PASTE SPEC V2 VÀO ĐÂY]
```

### WF3 — Inspection Report

**WF3-A: Viết Inspection Summary:**
```
Tôi là QC Inspector. Từ ghi chú kiểm hàng sau (đã anonymize), hãy:
1. Viết Inspection Summary tiếng Anh chuyên nghiệp (Pass/Fail, số lượng, defects chính)
2. Tạo bảng: Defect Name | Description (EN) | Major/Minor | Qty | % Rate
3. Viết email ngắn tiếng Anh gửi Factory A: thông báo kết quả, yêu cầu 100% sort + CAPA trong 48h

[PASTE GHI CHÚ KIỂM HÀNG ĐÃ ANONYMIZE VÀO ĐÂY]
```

**WF3-B: Mô tả defect tiếng Anh:**
```
Mô tả các lỗi sau bằng tiếng Anh chuyên ngành QC:
[LIỆT KÊ LỖI TIẾNG VIỆT VÀO ĐÂY]
```

### WF4 — CAPA / Factory Risk

**WF4-A: Phân tích CAPA không đạt:**
```
CAPA từ Factory A: "[PASTE CAPA VÀO ĐÂY]"
Defect trend 3 tháng: [PASTE TREND DATA VÀO ĐÂY]

Hãy:
1. Giải thích tại sao CAPA này không đạt
2. Soạn email phản hồi tiếng Anh yêu cầu 5 Whys analysis
3. Gợi ý 4 Preventive Actions thực tế
4. Đánh giá Factory A Risk Level (Low / Medium / High)
```

### WF5 — Monthly Dashboard (Chạy trong cùng 1 session)

**WF5-A: Sample Priority:**
```
Từ bảng Sample Tracker tháng [X] sau (đã anonymize), tạo bảng ưu tiên:
Overdue | At-Risk (≤5 ngày) | On-Track
Style nào cần gửi email nhắc nhà máy ngay hôm nay?

[PASTE SAMPLE TRACKER VÀO ĐÂY]
```

**WF5-B: Shipment Risk:**
```
Từ bảng Order Progress sau, đánh giá Shipment Risk từng PO:
On-Track / At-Risk / Critical
PO nào có nguy cơ delay? Gợi ý 3 actions.

[PASTE ORDER TRACKER VÀO ĐÂY]
```

**WF5-C: Quotation Comparison:**
```
Từ bảng Quotation Comparison sau (giá đã anonymize), tạo bảng:
Style | Factory A | Factory B | Factory C | Variance | Recommended Factory
Factory nào không nên chọn dù giá thấp vì rủi ro chất lượng?

[PASTE QUOTATION DATA VÀO ĐÂY]
```

**WF5-D: Email GoldBug US:**
```
Từ dữ liệu tháng [X] và summary vừa tạo, viết email tiếng Anh ~200 từ gửi GoldBug US.
Subject line + tóm tắt on-track items + key risks, tone professional solution-focused.
Kết thúc: GoldBug US cần review / approve gì.
```

### WF6 — Training Material

**WF6-A: Tạo outline slides:**
```
Tôi cần tạo slide training về [CHỦ ĐỀ] cho [ĐỐI TƯỢNG].
Thời lượng: [X phút]. Hãy tạo outline [N] slides với tiêu đề + 3–5 bullets mỗi slide.
Thêm: 3 Learning Objectives và 1 quiz question cuối.
Ngôn ngữ: [tiếng Việt / tiếng Anh].
```

---

## PHẦN 7 — Khi AI Trả Lời Không Đúng? 3 Cách Sửa Nhanh

1. **Thêm ràng buộc:** "Thử lại, nhưng ngắn hơn / bằng tiếng Anh / dạng bảng / tone chuyên nghiệp hơn"
2. **Cho ví dụ mẫu:** "Ví dụ output tôi muốn: [dán 1–3 dòng mẫu] — hãy theo format này"
3. **Hỏi lại:** "Tại sao bạn đề xuất điều này? Có cách nào đơn giản hơn không?"

---

## PHẦN 8 — Thực Hành Tại Buổi Training

**Bài tập 1 — WF0: Ẩn danh hóa**
Lấy 1 email / tài liệu thật từ tuần này → Thực hiện 3 bước ẩn danh hóa → Kiểm tra lại.

**Bài tập 2 — Starter Prompt**
Điền Starter Prompt (Phần 5) theo vai trò của bạn → Gửi vào ChatGPT → Nhận xác nhận.

**Bài tập 3 — Chọn workflow của bạn**
Chọn 1 workflow từ WF1–WF7 phù hợp nhất với công việc hàng ngày → Chạy thử với dữ liệu từ Drive.

---

## PHẦN 9 — Cam Kết Pilot 2 Tuần

> Điền ngay tại buổi training — không để về mà chưa chọn.

**Tên:** ___________________________________

**Workflow tôi sẽ áp dụng (chọn 1):**
- [ ] WF1 — Long Email / Manual Summary
- [ ] WF2 — Tech Pack / DCL Comparison
- [ ] WF3 — Inspection Report + Defect Description
- [ ] WF4 — CAPA / Root Cause / Factory Risk
- [ ] WF5 — Monthly Dashboard
- [ ] WF6 — Training Material
- [ ] WF7 — Office Admin Invoice (chỉ email đã lọc thủ công)
- [ ] Khác: _________________________

**Tôi sẽ áp dụng AI vào công việc cụ thể này:**
> _______________________________________________

**Lần đầu tiên tôi sẽ thử vào ngày:** _____ / 06 / 2026

**Thước đo thành công (điền 1 trong 2):**
- [ ] Tiết kiệm được _____ phút so với làm tay
- [ ] Chất lượng output (email / report / bảng) tốt hơn trước

**Lịch check-in:**
- 20/06 (Thứ 6) — Zalo ngắn: đã thử chưa? kết quả?
- 23/06 (Thứ 2) — Họp 15 phút: chia sẻ kết quả
- 30/06 (Thứ 2) — Tổng kết 2 tuần pilot

---

## Tài Liệu Tham Khảo Sau Training

- 🌐 Website: https://redbug-ai-training-2026.vercel.app/
- 📋 Prompt Library: tải từ Google Drive (link trong email sau training)
- 📊 Demo Data: tải từ Google Drive — dùng để luyện thêm
- 🤖 Persona / Gem Templates: tải từ Google Drive

---

*Redbug AI Training v1.0 | 16/06/2026 | Dành cho học viên | Không phân phối ra bên ngoài*
