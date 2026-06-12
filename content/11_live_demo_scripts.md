# Redbug AI Training v1.4 — Live Demo Scripts
> 16/06/2026 | Dành cho Facilitator | WF0–WF7 | Đọc trước khi chạy mỗi demo

**How to use this file:**
- Mỗi demo có: Objective, Setup, Screen, Prompt (copy/paste), Expected Result, What to Say, Mistakes, Backup, Timing
- Prompt trong code blocks: copy nguyên văn, paste vào AI, điền [chỗ trống] trước khi chạy
- Demo Data: `content/12_synthetic_demo_data.md`
- Personas: `content/10_persona_gem_pack.md`

---

## WF0 — AI Security + Anonymization Demo
**Timing: 5 phút | Slides 4–6 | 09:20–09:25**

**Objective:** Show the live Ctrl+F / Replace All process — demonstrate it takes under 2 minutes and is not hard.

**Setup:**
- Mở Notepad hoặc Google Docs trắng
- Có sẵn đoạn email mẫu (fictional, với tên nhà máy cụ thể) để demo Replace All
- Kết nối ChatGPT / Claude trên màn hình chiếu

**Sample email for live anonymization:**
```
Từ: qc@songliufactory.vn
Gửi: team@redbugvietnam.com
Chủ đề: Cập nhật lỗi đơn hàng RB-2026-447 (Style SLP-8801)

Team Redbug,
Tôi muốn cập nhật về tình trạng lô hàng Sleeping Bag theo đơn PO-RB2026-447 cho khách hàng GoldBug US.
Factory Song Liu đã xử lý 60% lô hàng...
```

**What to do on screen:**
1. Paste email mẫu vào Notepad
2. Ctrl+F → Replace All: "Song Liu" → "Factory A" → Enter → OK
3. Ctrl+F → Replace All: "RB-2026-447" → "PO-XXXX"
4. Ctrl+F → Replace All: "SLP-8801" → "Style-XXXX"
5. Ctrl+F → Replace All: "GoldBug US" → "Customer Y"
6. Kết quả: đoạn text sạch, safe to paste

**What to say:**
> "Xem — 4 thao tác Ctrl+F, không đến 90 giây. Đây là tất cả những gì bạn cần làm. Không cần học gì thêm. Chỉ cần nhớ: Copy → Replace → Paste."

**Common mistakes:**
- Quên Replace All, chỉ replace 1 lần → dùng Replace All button, không dùng Replace
- Paste vào document gốc thay vì document mới → luôn mở file mới trước

**Backup plan:** Nếu Notepad không chạy → dùng Google Docs hoặc ChatGPT "Check this for sensitive info: [paste]"

---

## WF1 — Long Email / Manual Summary Demo
**Timing: 10 phút | Slide 11 | 10:30–10:40**

**Objective:** Tóm tắt chuỗi email 5 tin nhắn thành action items trong dưới 30 giây.

**Setup:**
- Data: `content/12_synthetic_demo_data.md` → Section WF1
- Mở ChatGPT hoặc Claude
- Copy sẵn toàn bộ WF1 data block

**Prompt to run:**
```
Đây là chuỗi 5 email giữa Redbug QC và Factory A về vấn đề kỹ thuật trong đơn hàng Style-007.
Tất cả thông tin đã được ẩn danh hóa.

Hãy:
1. Tóm tắt vấn đề chính trong 2 câu.
2. Liệt kê chronology: chuyện gì xảy ra theo thứ tự thời gian?
3. Action items của Redbug ngay hôm nay là gì? (bullet points, theo ưu tiên)
4. Có cần báo cáo lên Manager không? Tại sao?

[Paste toàn bộ WF1 data block từ file 12]
```

**Expected Result:**
- 2-câu summary về USB-C/PCB/battery issue với Style-007
- Chronology 5 sự kiện
- 3–4 action items rõ ràng
- Recommendation về escalation

**What to say after demo:**
> "Cả chuỗi 5 email đó — bình thường mất bao lâu để đọc và tổng hợp? 10–15 phút? AI làm trong 10 giây. Output bạn còn cần review, nhưng bản nháp đã sẵn sàng."

**Hands-on instruction:**
> "Ai có email dài trong tuần này — đã anonymize — thử paste vào ngay. 5 phút."

**Common mistakes:**
- Paste email chưa anonymize → nhắc lại step Replace All
- Prompt quá ngắn ("tóm tắt email này") → thêm 3 điểm cụ thể muốn output

**Backup:** Nếu session AI chậm → dùng email mẫu đã chuẩn bị sẵn offline trong Notepad

---

## WF2 — Tech Pack / DCL Comparison Demo
**Timing: 10 phút | Slide 12 | 10:40–10:50**

**Objective:** Tìm tất cả thay đổi giữa DCL v1 và v2 trong dưới 30 giây.

**Setup:**
- Data: `content/12_synthetic_demo_data.md` → Section WF2
- Copy sẵn cả DCL v1 và v2 blocks

**Prompt to run:**
```
Dưới đây là 2 phiên bản của Dangerous Chemicals List (DCL) cho Style-004 Baby Sleeping Bag.
Phiên bản cũ là DCL v1 và phiên bản mới là DCL v2.
Tất cả thông tin đã được ẩn danh hóa.

Hãy:
1. Liệt kê tất cả thay đổi giữa v1 và v2 (không bỏ sót).
2. Tạo bảng: Thành phần | DCL v1 | DCL v2 | Mức độ ảnh hưởng (Cao/Trung/Thấp) | Cần thông báo nhà máy không?
3. Thay đổi nào có rủi ro cao nhất (liên quan đến hóa chất, an toàn sản phẩm, CA Prop 65)?
4. Tóm tắt 3 dòng gửi Factory A.

[Paste DCL v1 block]

[Paste DCL v2 block]
```

**Expected Result:**
- Bảng so sánh 5-6 dòng
- CA Prop 65 flagged as High Impact
- Recycled polyester noted as new
- Summary email draft

**What to say:**
> "DCL thường dài 3–5 trang. Tìm thay đổi thủ công mất 20–30 phút, và hay bị bỏ sót. Với AI — 30 giây và không bỏ sót."

**Common mistakes:**
- Paste 2 versions không có label rõ ràng → luôn label "DCL v1:" và "DCL v2:"
- AI đưa ra nhận xét compliance → nhắc team: "AI không thay thế lab. Chỉ dùng để tìm thay đổi cần follow up."

---

## WF3 — Inspection Report + Defect Description Demo
**Timing: 15 phút | Slide 14 | 13:15–13:30**

**Objective:** Biến ghi chú kiểm hàng lộn xộn thành Inspection Summary tiếng Anh + CAPA email trong 5 phút.

**Setup:**
- Data: `content/12_synthetic_demo_data.md` → Section WF3
- Suggested: Lan Anh hoặc Khánh Linh tự gõ prompt

**Prompt to run:**
```
Tôi là QC Inspector tại Redbug Vietnam. Dưới đây là ghi chú kiểm hàng từ chuyến kiểm FRI hôm nay (đã ẩn danh hóa).

Hãy:
1. Viết Inspection Summary tiếng Anh chuyên nghiệp: product, PO, factory, quantity, AQL standard, inspection result (Pass/Fail), major defects found.
2. Tạo Defect List dạng bảng: Defect Name | Description (English) | Major/Minor | Qty Found | Defect Rate (%)
3. Đánh giá AQL result: Số Major/Minor so với AQL 2.5 Level II cho 200 pcs (Accept ≤5 Major, ≤8 Minor).
4. Viết email ngắn tiếng Anh gửi Factory A: thông báo kết quả Fail, yêu cầu 100% sorting + CAPA trong 48h.

[Paste WF3 data block từ file 12]
```

**Expected Result:**
- Summary paragraph (3–4 câu tiếng Anh chuyên nghiệp)
- Defect table với 4–5 defects
- AQL verdict: FAIL (17 Major > 5 threshold)
- CAPA email draft

**What to say:**
> "Bình thường Lan Anh viết báo cáo này mất bao lâu? [pause for answer] Với AI — bản nháp xong trong 10 giây. Bạn review và sửa phần AI không biết — ví dụ: context thật của lô hàng đó."

**Hands-on (10 phút):**
> "Ai có ghi chú kiểm hàng tuần này? Anonymize rồi paste vào. Lan Anh và Khánh Linh — thử nhóm nhỏ."

**Common mistakes:**
- Không cung cấp AQL sample size → thêm "200 pcs" hoặc số cụ thể
- Mô tả defect bằng tiếng Việt trong ghi chú → OK, AI sẽ dịch sang tiếng Anh

---

## WF4 — CAPA / Root Cause / Factory Risk Demo
**Timing: 15 phút | Slide 15 | 13:30–13:45**

**Objective:** Đánh giá CAPA không đạt, soạn email phản hồi chuyên nghiệp, và chạy 5 Whys trong 5 phút.

**Setup:**
- Data: `content/12_synthetic_demo_data.md` → Section WF4
- Suggested: Xuân Trâm tự chạy

**Prompt to run:**
```
Tôi là QA Manager tại Redbug Vietnam. Factory A có lỗi open seam tăng dần trong 3 tháng: tháng 3: 3.2%, tháng 4: 3.8%, tháng 5: 5.5%.

Factory A gửi CAPA: "Chúng tôi đã nhắc nhở công nhân may cẩn thận hơn và kiểm tra kim may."

Hãy:
1. Giải thích tại sao CAPA này không đạt (3 lý do cụ thể). Sử dụng ngôn ngữ QA chuyên nghiệp.
2. Soạn email tiếng Anh bác bỏ CAPA, yêu cầu Factory A làm lại với 5 Whys analysis đầy đủ.
3. Gợi ý 4 Preventive Actions thực tế mà Factory A có thể thực hiện được.
4. Đánh giá Factory A Risk Level (Low/Medium/High) dựa trên trend 3 tháng này.

[Paste WF4 data block từ file 12]
```

**Expected Result:**
- 3 lý do CAPA không đạt (root cause vague, no timeline, no preventive action)
- Email phản hồi tiếng Anh chuyên nghiệp
- 4 preventive actions cụ thể (stitch tension setting, needle schedule, inline inspection, supervisor sign-off)
- Factory A: HIGH risk

**What to say:**
> "Nhận CAPA như thế này từ nhà máy — team thường tốn 20–30 phút để viết email phản hồi đúng tone và đúng nội dung. AI làm bản nháp trong 15 giây. Xuân Trâm review và điều chỉnh theo ngữ cảnh thật."

---

## WF5 ⭐ — Monthly Operations Dashboard Demo (MAIN WOW DEMO)
**Timing: 50–55 phút | Slides 17–22 | 14:15–15:10**

**Objective:** Biến raw monthly data thành full dashboard report với risk flags, factory ranking, quotation comparison, và email GoldBug US — trong một session AI.

**Setup:**
- Data: `content/12_synthetic_demo_data.md` → Section WF5 (ALL 4 tables)
- **Copy sẵn toàn bộ WF5 data block trước khi vào phòng**
- Suggested: Kim Thoa chạy Prompt 4 (quotation), Thiên Kim chạy Prompt 6 (email GoldBug)
- Lưu ý: Toàn bộ 7 prompts chạy trong CÙNG một session — đừng đóng tab

---

### Prompt 1 — Sample Progress Priority (3 phút)
```
Từ bảng Sample Tracker sau (đã ẩn danh hóa), hãy:
1. Tạo bảng ưu tiên: Overdue | At-Risk (≤5 ngày) | On-Track
2. Style nào cần gửi email nhắc nhà máy ngay hôm nay?
3. Tổng items: bao nhiêu Overdue / At-Risk / On-Track?

[Paste WF5 Sample Tracker table]
```

**Expected:** 3-column priority table + list of urgent items

---

### Prompt 2 — Order Progress + Shipment Risk (3 phút)
```
Từ bảng Order Progress sau, hãy:
1. Đánh giá Shipment Risk cho từng PO: On-Track / At-Risk / Critical
2. PO nào có nguy cơ bị delay shipment?
3. Gợi ý 3 actions cụ thể để giảm risk.

[Paste WF5 Order Progress table]
```

---

### Prompt 3 — Defect Trend + Factory Risk Ranking (5 phút)
```
Từ Defect Summary sau, hãy:
1. Xếp hạng 3 nhà máy theo Factory Quality Risk Level (Low/Medium/High).
2. Top 3 defects phổ biến nhất.
3. Viết 1 đoạn Factory Performance Summary tiếng Anh 100 từ.
4. Factory nào cần immediate action?

[Paste WF5 Defect Summary table]
```

**Expected:** Factory B = HIGH (5.2% fail + overdue CAPA)

---

### Prompt 4 ⭐ — Quotation Comparison (3 phút — KIM THOA CHẠY)
```
Từ bảng Quotation Comparison sau (giá đã ẩn danh với USD XXX), hãy:
1. Tạo bảng so sánh: Style | Factory A | Factory B | Factory C | Variance | Recommended Factory
2. Factory nào có giá tốt nhất tổng thể?
3. Factory nào có rủi ro chất lượng cao mà không nên chọn dù giá thấp?
4. Tóm tắt recommendation 3 dòng.

[Paste WF5 Quotation Comparison table]
```

**Expected:** Comparison table + recommendation not to use Factory B despite lower price

**What to say:**
> "Bảng so sánh báo giá này — Kim Thoa làm bảng tháng nào cũng mất bao lâu? AI làm trong 20 giây. Và có thêm risk recommendation luôn."

---

### Prompt 5 — Full Monthly Report (5 phút)
```
Dựa trên tất cả dữ liệu tháng 6 tôi đã chia sẻ trong session này (sample tracker, order progress, defect summary, quotation), hãy tổng hợp:

1. Executive Summary: 5 bullet points — what's on track, what's at risk, top action needed.
2. Monthly Report Outline: các section chính cần có trong báo cáo tháng 6.
3. Top 3 Risks cần báo cáo lên Management.
4. Recommended Actions: owner + deadline.
```

**Expected:** Full dashboard outline + executive summary

---

### Prompt 6 — Email to GoldBug US (5 phút — THIÊN KIM CHẠY)
```
Từ dữ liệu tháng 6 và Executive Summary vừa tạo, viết email tiếng Anh ~200 từ gửi GoldBug US:
- Subject line gợi ý
- Tóm tắt: on-track items, key risks, actions being taken
- Tone: professional, solution-focused, reassuring
- Kết thúc với: what GoldBug US cần review/approve
```

---

### Prompt 7 — Internal Summary Email (3 phút)
```
Từ executive summary vừa tạo, viết email nội bộ tiếng Việt ngắn gọn gửi team Redbug:
- Những gì đang tốt
- Những gì cần theo dõi tuần này
- Action items của từng người (Kim Thoa / Hải Yến / Lan Anh / Xuân Trâm)
```

---

### WF5 Debrief (5 phút)
1. "Kim Thoa: So với làm bảng báo cáo tháng thủ công — bao nhiêu thời gian tiết kiệm?"
2. "Output này có thể làm nền cho báo cáo tháng 6 thật không?"
3. "Để dùng với data thật: bước nào cần chuẩn bị?"

**Backup plan (nếu AI session hết/chậm):**
- Dùng fallback: "Từ 5 bullet points sau, viết Monthly Report outline và email GoldBug US: [paste summary bullets]"
- Không cần chạy lại toàn bộ — chỉ cần re-prompt Prompt 5

---

## WF6 — Training Material Presentation Demo
**Timing: 10 phút | Slide 23 | 15:15–15:25**

**Objective:** Tạo outline 6 slides training cho nhà máy về quy trình FRI mới trong 2 phút.

**Prompt to run:**
```
Tôi cần tạo slide training ngắn cho team nhà máy (QC supervisor và tổ trưởng) về quy trình nộp test request mới hiệu lực từ tháng 7/2026.

Nội dung dựa trên guideline sau (đã ẩn danh hóa):
[Paste WF6 data block từ file 12]

Hãy tạo:
1. Outline 6 slides với tiêu đề và 3–4 bullet points mỗi slide.
2. 3 Learning Objectives — đo lường được sau buổi training.
3. 1 câu hỏi quiz multiple choice kiểm tra hiểu bài.
Ngôn ngữ: tiếng Việt đơn giản, phù hợp tổ trưởng nhà máy.
```

**Expected Result:** 6-slide outline đầy đủ + objectives + quiz question

**What to say:**
> "Ai trong phòng có chủ đề training cần làm outline trong 2 tuần tới? Thử AI ngay chiều nay."

---

## WF7 — Office Admin Invoice Processing Demo (OPTIONAL — 10–15 phút)
**Timing: Optional | After WF5 or during afternoon hands-on | If time allows**

> ⚠️ **Security framing bắt buộc:** Mở đầu với "Tại sao không quét toàn inbox?" trước khi demo.

**Setup:**
- Data: `content/12_synthetic_demo_data.md` → Section WF7 (WF7-A through WF7-F)
- Dành cho Hạnh — ideally Hạnh tự chạy
- Copy sẵn WF7-A invoice email block

**Prompt 1 — Invoice Extraction:**
```
Đây là email hóa đơn từ nhà cung cấp văn phòng phẩm (tôi đã chọn email này thủ công từ inbox).

Hãy trích xuất:
1. Thông tin chính: vendor, số hóa đơn, ngày, ngày đến hạn, payment terms.
2. Bảng line items: Mô tả | Số lượng | Đơn giá (VND) | Thành tiền (VND).
3. Subtotal / VAT / Grand Total.

[Paste WF7-A invoice email block]
```

**Prompt 2 — Expense Entry:**
```
Từ hóa đơn vừa xử lý, tạo 1 dòng ghi nhận vào bảng expense tracking:
| Ngày | Nhà cung cấp | Số hóa đơn | Mô tả | Số tiền (VND) | Hạng mục | Trạng thái | Ghi chú |
Hạng mục phù hợp nhất là gì?
```

**Prompt 3 — File Name:**
```
Gợi ý tên file chuẩn theo format: YYYYMMDD_TenNhaCungCap_SoHoaDon_SoTien.pdf
```

**Security discussion (5 phút):**
1. Hỏi Hạnh: "Nếu paste toàn inbox — điều gì có thể xảy ra?"
2. Hiển thị 5-step staged workflow (WF7-F)
3. Key message: "Quyền kiểm soát thuộc về bạn — AI xử lý những gì bạn chọn paste."

**What to say:**
> "WF7 không phải là AI tự động quét inbox của Hạnh. Là Hạnh lọc thủ công, copy từng email hóa đơn, AI xử lý nhanh — và Hạnh vẫn review trước khi dùng. Tiết kiệm thời gian mà vẫn kiểm soát hoàn toàn."

**If cut for time:** Assign as individual pilot — Hạnh tự thử sau training với `content/01_prompt_library_by_role.md` WF7-1 to WF7-6.

---

## Emergency Backup Prompts

**Nếu AI cho kết quả không đúng:**
> "Thử lại, nhưng lần này: [thêm 1 constraint cụ thể — ngắn hơn / dạng bảng / bằng tiếng Anh / tone chuyên nghiệp hơn]"

**Nếu AI không hiểu context:**
> "Tôi là [vai trò] tại công ty sourcing sản phẩm baby & kids. [Nhắc lại yêu cầu ngắn gọn hơn]"

**Nếu AI session timeout:**
> Dùng Prompt 5 WF5 fallback: paste executive summary bullets → AI tạo report và email GoldBug

**Nếu projector/wifi lỗi:**
> Chuyển sang group exercise không cần màn hình: team thảo luận pain points + viết starter prompt trên giấy

---

*v1.4 | Live Demo Scripts WF0–WF7 | Facilitator Reference | 12/06/2026*
