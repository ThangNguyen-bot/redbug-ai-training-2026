# Redbug AI Training — Participant Handout
> 16/06/2026 | Giữ lại sau buổi training — dùng hàng ngày như reference card

---

## 1. Quy tắc Bảo mật AI — RED / YELLOW / GREEN

| 🔴 RED — Không bao giờ paste vào AI | 🟡 YELLOW — Ẩn trước khi paste | 🟢 GREEN — Thoải mái |
|---|---|---|
| Giá FOB / cost / margin thật | Tên nhà máy → Factory A/B/C | Quy trình chung không nhạy cảm |
| Số PO thật | Tên vendor → Vendor X/Y | Email đã anonymize |
| Hợp đồng, audit finding nhạy cảm | Tên khách hàng → Customer X/Y | Template trống |
| Thông tin cá nhân (email, SĐT) | Mã style thật → Style-XXXX | Câu hỏi kỹ thuật không có data |
| Cost sheet, margin breakdown | Mã PO thật → PO-XXXX | Prompt thực hành |

---

## 2. Checklist Ẩn Danh Hóa Trước Khi Dùng AI (Ctrl+F / Replace All)

Mỗi lần muốn paste tài liệu thật vào AI, làm 3 bước này trước:

**Bước 1:** Mở file gốc → **Copy nội dung** → **Paste vào document mới** (KHÔNG sửa file gốc)

**Bước 2:** Dùng **Ctrl+F → Replace All** để thay thế:

```
Tên nhà máy          → Factory A  (Factory B, Factory C nếu nhiều)
Tên vendor           → Vendor X
Tên khách hàng/brand → Customer Y
Số PO thật           → PO-XXXX
Mã style thật        → Style-XXXX
Giá / cost / margin  → USD XXX  hoặc  [PRICE REMOVED]
Tên người thật       → Person A
Email thật           → Email removed
Số điện thoại        → Phone removed
```

**Bước 3:** Đọc lại nhanh — không còn thông tin nhạy cảm → ✅ Paste vào AI

---

## 3. Workflow Map WF0–WF7

| Workflow | Tên | Dùng khi nào |
|---|---|---|
| WF0 | AI Security + Anonymization | Trước khi dùng AI lần đầu trong ngày |
| WF1 | Long Email / Manual / Tech Pack Summary | Nhận email dài / chuỗi email / manual nhiều trang |
| WF2 | Tech Pack / DCL / Manual Comparison | Nhận tech pack revision hoặc DCL version mới |
| WF3 | Inspection Report + Defect Description | Vừa đi kiểm hàng về, có ghi chú tay |
| WF4 | CAPA / Root Cause / Factory Risk | Nhận CAPA từ nhà máy / lỗi lặp lại nhiều lần |
| WF5 ⭐ | Monthly Dashboard | Cuối tháng tổng hợp báo cáo |
| WF6 | Training Material Presentation | Cần tạo slide training cho team / nhà máy |
| WF7 | Office Admin Invoice / Expense Assistant | Email hóa đơn đã chọn → trích xuất fields → đổi tên file → ghi expense tracker → tổng hợp tháng. *Chỉ dùng email đã lọc thủ công — không quét toàn inbox.* |

> **Persona/Gem templates:** Hướng dẫn tạo AI assistant cá nhân hóa cho từng workflow có trong `content/10_persona_gem_pack.md`. Ưu tiên setup **Persona 4** (Inspection Report) và **Persona 6** (Monthly Dashboard) ngay sau training — các persona còn lại setup khi cần.

---

## 4. Công thức Prompt: Role + Task + Context + Output + Constraints

```
"Đóng vai [Vai trò của bạn] tại Redbug Vietnam.
Hãy [làm gì].
Dựa trên [context / dữ liệu đầu vào — đã anonymize].
Trình bày kết quả [định dạng: bảng / bullet points / email / report].
Viết bằng [tiếng Anh / tiếng Việt], tone [chuyên nghiệp / đơn giản], dưới [X từ / X slides]."
```

---

## 5. Starter Prompt (Điền 1 lần đầu ngày)

```
Từ bây giờ, hãy đóng vai là trợ lý công việc cá nhân của tôi.
Tôi là [Vai trò của bạn] tại Redbug Vietnam, làm việc với các sản phẩm baby & kids.
Công việc chính của tôi: [liệt kê 2–3 việc].
Khi tôi yêu cầu, hãy ưu tiên câu trả lời thực tế, dùng tiếng Anh chuyên ngành chuẩn xác
và luôn nhắc tôi nếu tôi quên ẩn danh hóa thông tin.
Trả lời: "Sẵn sàng hỗ trợ!" để xác nhận.
```

---

## 6. 10 Beginner Prompt Templates

**WF1-A — Tóm tắt email dài:**
> "Tóm tắt email sau thành: 1. Vấn đề chính 2. Trạng thái hiện tại 3. Action items của tôi: [paste email đã anonymize]"

**WF1-B — Tóm tắt chuỗi email:**
> "Đây là chuỗi [N] email với Factory A. Tóm tắt theo thứ tự thời gian và liệt kê 3–5 action items của tôi ngay hôm nay: [paste thread]"

**WF2-A — So sánh 2 version spec:**
> "Liệt kê tất cả thay đổi giữa Spec v1 và Spec v2 sau. Tạo bảng: Component | v1 | v2 | Mức ảnh hưởng: [paste 2 specs]"

**WF3-A — Viết Inspection Summary:**
> "Từ ghi chú kiểm hàng sau, viết 1 đoạn Inspection Summary tiếng Anh chuyên nghiệp (Pass/Fail, số lượng, defects chính): [paste ghi chú]"

**WF3-B — Mô tả defect bằng tiếng Anh:**
> "Mô tả các lỗi sau bằng tiếng Anh chuyên ngành QC: [liệt kê lỗi tiếng Việt]"

**WF3-C — Email CAPA gửi nhà máy:**
> "Viết email tiếng Anh ngắn gọn gửi Factory A thông báo FRI kết quả FAIL với lỗi sau và yêu cầu CAPA trong 48h: [paste defect list]"

**WF4-A — Phản hồi CAPA không đạt:**
> "CAPA từ nhà máy: '[paste CAPA]'. Giải thích tại sao CAPA này không đạt và soạn email phản hồi yêu cầu phân tích 5 Whys."

**WF4-B — Đánh giá rủi ro nhà máy:**
> "Từ data lỗi 3 tháng sau, đánh giá Factory A Risk Level (Low/Medium/High) và đề xuất hành động: [paste trend data]"

**WF5-A — Tóm tắt monthly data:**
> "Từ dữ liệu tháng 6 sau, tổng hợp: 1. Items overdue/at-risk 2. Factory performance 3. Monthly summary tiếng Anh 150 từ: [paste data]"

**WF6-A — Tạo outline training slides:**
> "Tạo outline [N] slides training về [chủ đề] cho [đối tượng]. Thêm 3 Learning Objectives và 1 quiz question cuối. Tiếng Việt đơn giản: [paste yêu cầu]"

---

## 6.5 WF5 Quick Reference — Monthly Dashboard (4 Prompts Cốt Lõi)

Dùng khi: cuối tháng tổng hợp báo cáo. Copy data từ tracker (đã anonymize) → paste vào AI → chạy lần lượt trong cùng 1 session.

**Prompt A — Priority List (Sample Tracker):**
> "Từ bảng Sample Tracker tháng [X] sau (đã ẩn danh hóa), tạo bảng ưu tiên: Overdue | At-Risk (≤5 ngày) | On-Track. Style nào cần gửi email nhắc nhà máy ngay hôm nay? [paste data]"

**Prompt B — Shipment Risk (Order Progress):**
> "Từ bảng Order Progress sau, đánh giá Shipment Risk từng PO: On-Track / At-Risk / Critical. PO nào có nguy cơ delay? Gợi ý 3 actions. [paste data]"

**Prompt C — Quotation Comparison:**
> "Từ bảng Quotation Comparison sau (giá đã ẩn danh), tạo bảng: Style | Factory A | Factory B | Factory C | Variance | Recommended Factory. Factory nào không nên chọn dù giá thấp vì rủi ro chất lượng? [paste data]"

**Prompt D — GoldBug US Update Email:**
> "Từ dữ liệu tháng [X] và summary vừa tạo, viết email tiếng Anh ~200 từ gửi GoldBug US. Subject line, tóm tắt on-track items và key risks, tone professional solution-focused. Kết thúc: GoldBug US cần review/approve gì."

> **Lưu ý khi dùng data thật:** Anonymize trước — nhà máy thật → Factory A/B/C, PO thật → PO-XXXX, giá thật → USD-A/B/C. Xem checklist Section 2 của handout này.

---

## 7. AI Trả Lời Không Đúng? 3 Cách Sửa Nhanh

1. **Thêm ràng buộc:** "Thử lại, nhưng ngắn hơn / bằng tiếng Anh / dạng bảng / tone chuyên nghiệp hơn"
2. **Cho ví dụ:** "Ví dụ output tôi muốn: [dán 1–3 dòng mẫu] — hãy theo format này"
3. **Hỏi lại:** "Tại sao bạn đề xuất điều này? Có cách nào đơn giản hơn không?"

---

## 8. Cam Kết Pilot 2 Tuần (Điền ngay hôm nay)

**Tên:** ___________________________

**Workflow tôi sẽ áp dụng (chọn 1):**
- [ ] WF1 — Long Email / Manual Summary
- [ ] WF2 — Tech Pack / DCL Comparison
- [ ] WF3 — Inspection Report + Defect Description
- [ ] WF4 — CAPA / Root Cause / Factory Risk
- [ ] WF5 — Monthly Dashboard
- [ ] WF6 — Training Material
- [ ] Khác: _________________

**Tôi sẽ áp dụng AI vào công việc cụ thể này:**
> _______________________________________________

**Lần đầu tiên tôi sẽ thử vào ngày:** ___/06/2026

**Check-in lịch:**
- 20/06 — Báo cáo ngắn qua Zalo: đã thử chưa? kết quả?
- 23/06 — Họp 15 phút: chia sẻ kết quả
- 30/06 — Tổng kết 2 tuần pilot

**Tài liệu tham khảo sau training:**
- Website: https://redbug-ai-training-2026.vercel.app/
- Prompt Library: `content/01_prompt_library_by_role.md`
- Demo data để tự luyện: `content/12_synthetic_demo_data.md`
- Persona/Gem templates: `content/10_persona_gem_pack.md`

---

*Redbug AI Training v1.4 | 16/06/2026 | Handout dành cho học viên*
