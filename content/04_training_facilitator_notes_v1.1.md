# Redbug AI Training v1.3 - Facilitator Notes
> Ngày 16/06/2026 | VP Redbug Vietnam | 08:45 – 17:30
> v1.3: Cập nhật lịch sang workflow-based (WF0–WF6), phân nhóm tay chân theo workflow, WF5 = spotlight demo

---

## Thông tin chung

| | |
|---|---|
| Thời gian | 08:45 – 17:30 |
| Địa điểm | VP Redbug Vietnam |
| Học viên | ~11 người (team Redbug Vietnam) |
| Phong cách | 70% hands-on / 30% concept |
| Thiết bị cần | Màn hình chiếu lớn, WiFi ổn định, mỗi người 1 laptop/điện thoại |

---

## Lịch trình Ngày Training (v1.3 – Workflow-Based)

| Thời gian | Nội dung | Ghi chú Facilitator |
|---|---|---|
| 08:45 – 09:00 | Check-in, setup thiết bị | Kiểm tra WiFi, tất cả mở sẵn ChatGPT/Claude |
| 09:00 – 09:15 | Opening: Tại sao AI training lúc này? | Ngắn gọn, show survey insight anonymized — đừng thuyết giáo |
| 09:15 – 09:50 | **WF0 – AI Security + Anonymization Protocol** (35 phút) | Bao gồm Slide 5 mới: ẩn danh hóa Ctrl+F + Quiz RED/YELLOW/GREEN |
| 09:50 – 10:20 | Prompt Formula: Role + Task + Context + Output + Constraints | Mọi người tự điền Starter Prompt — 5 phút practice ngay |
| 10:20 – 10:30 | Break | |
| 10:30 – 11:00 | **WF1 – Email / Manual / Tech Pack Summary** (30 phút) | Tất cả vai trò; Thang demo 10p + mọi người tự thử 15p |
| 11:00 – 11:40 | **WF3 – Inspection Report + Defect Description** (40 phút) | Focus Lan Anh, Khánh Linh, Sandra, Xuân Trâm |
| 11:40 – 12:00 | **WF2 – Tech Pack / DCL Comparison** (20 phút, quick) | Hải Yến, Kim Thoa, Xuân Trâm — có thể cắt bớt nếu WF3 trễ |
| 12:00 – 13:15 | Nghỉ trưa | Dùng thời gian này chuẩn bị data WF5 vào Notepad |
| 13:15 – 14:00 | **WF4 – CAPA / Root Cause / Factory Risk** (45 phút) | Focus Xuân Trâm + Kim Thoa; Thang demo 15p + tự thử 25p |
| 14:00 – 14:15 | **WF6 – Training Material** (15 phút, quick) | Thiên Kim tự chạy — cắt nếu WF4 trễ quá 14:05 |
| 14:15 – 15:15 | **WF5 ⭐ – Monthly Operations Dashboard** (60 phút) | Xem hướng dẫn riêng WF5 phía dưới; highlight của ngày |
| 15:15 – 15:30 | Break | Không cắt break này — WF5 dài, team cần nghỉ |
| 15:30 – 16:30 | **Thực hành tự do theo nhóm workflow** (60 phút) | Thang đi từng nhóm; xem phân nhóm phía dưới |
| 16:30 – 17:00 | **Chốt Pilot** | Dùng Pilot Shortlist 5 pilots — file `03_2week_pilot_tracker_v1.2.md` |
| 17:00 – 17:30 | Wrap-up + Q&A cuối ngày | Nhắc lịch check-in 20/06, 23/06, 30/06 |

> **Quy tắc cắt nếu trễ giờ:** WF2 (có thể cắt xuống 10 phút) → WF6 (cắt hoàn toàn nếu cần) → Không bao giờ cắt WF0, WF5, và Break chiều.

---

## Phần quan trọng: AI Security Q&A (09:15 – 09:45)

### Tại sao dành 30 phút cho phần này?

Survey feedback cho thấy team có lo ngại thực sự về bảo mật. Nếu không giải quyết thẳng thắn ngay từ đầu, học viên sẽ ngại dùng AI trong công việc thật.

### Script xử lý câu hỏi bảo mật

**Câu hỏi thường gặp 1:** *"AI có bảo mật cho những gì tôi hỏi không?"*

> **Trả lời (nói tự nhiên, không đọc):**
> "Câu hỏi này rất thực tế. Câu trả lời ngắn gọn: AI không tự động bảo mật 100% – nó phụ thuộc vào tool bạn dùng và cách bạn dùng.
>
> ChatGPT miễn phí: mặc định có thể dùng conversation của bạn để cải thiện model. ChatGPT Plus/Team: bạn có thể tắt tính năng này trong Settings.
>
> Claude (Anthropic): tuyên bố không dùng conversation của trả phí để train model.
>
> NHƯNG – và đây là điều quan trọng nhất – dù dùng tool nào, quy tắc bảo mật Redbug vẫn áp dụng. Không paste giá FOB, PO thật, tên nhà máy thật, hợp đồng. Đó không phải vì AI mất bảo mật – mà vì đó là best practice cho mọi tool kỹ thuật số."

**Câu hỏi thường gặp 2:** *"Nếu tôi hỏi AI về quy trình nội bộ Redbug, AI có 'nhớ' và đưa cho người khác không?"*

> **Trả lời:**
> "Không. Mỗi cuộc trò chuyện mới là một slate trắng – AI không 'nhớ' giữa các session. Người khác dùng AI hoàn toàn không thấy được conversation của bạn. Tuy nhiên, trong cùng một session, AI nhớ những gì bạn nói trong cuộc trò chuyện đó – nên hãy cẩn thận nếu bạn để laptop mở."

**Câu hỏi thường gặp 3:** *"Công ty có quy định chính thức về AI chưa?"*

> **Trả lời:**
> "Chưa có policy chính thức – đó là lý do chúng ta đang xây dựng ngay hôm nay. Quy tắc RED/YELLOW/GREEN này là policy tạm thời của Redbug. Thiên Kim sẽ quyết định sau training xem có cần formalize thành văn bản không."

### Hoạt động tương tác: Test kiến thức bảo mật (3 phút)

Facilitator đọc tình huống, team trả lời: RED / YELLOW / GREEN?

1. "Tôi paste email từ nhà máy vào AI để tóm tắt" → **YELLOW** (cần ẩn tên nhà máy)
2. "Tôi paste giá FOB thật của PO-001 vào AI" → **RED** (không bao giờ)
3. "Tôi dùng AI viết email nhắc lịch submit mẫu" → **GREEN**
4. "Tôi paste audit finding về nhà máy X vào AI" → **YELLOW/RED** (tùy mức độ nhạy cảm)
5. "Tôi dùng AI dịch tech pack comment sang tiếng Việt" → **GREEN**

---

## Hướng dẫn riêng: WF5 ⭐ – Monthly Operations Dashboard

### Tại sao WF5 quan trọng?

Đây là demo trực tiếp giải quyết pain point thật của Kim Thoa (và có thể cả Xuân Trâm):
- Làm bảng so sánh báo giá thủ công → mất nhiều thời gian
- Tổng hợp tiến độ mẫu từ nhiều nguồn email lộn xộn
- Muốn tạo báo cáo trực quan hàng tháng
- Muốn nhắc việc ưu tiên theo ngày/tuần/tháng

### Setup trước Demo 7

1. Chuẩn bị file `sample_data_demo7.xlsx` trên laptop của Facilitator (dữ liệu giả lập từ Demo Exercise Pack)
2. Mở sẵn tab ChatGPT/Claude
3. Copy sẵn 4 bảng dữ liệu giả lập vào clipboard hoặc Notepad
4. Nhóm nhỏ: Kim Thoa, Xuân Trâm, và 2-3 người khác có liên quan

### Cách chạy WF5 (60 phút – từ 14:15)

> **Setup trước 14:15:** Mở sẵn Notepad với 4 Data Sets của Demo WF5 (từ file `07_demo_monthly_report_assistant.md`). Mở tab ChatGPT hoặc Claude sẵn sàng.

**Bước 1–2 (15 phút):** Thang demo Prompt 1 (Sample Priority List) và Prompt 2 (Order Progress Summary). Học viên theo dõi màn hình chiếu. Giải thích từng phần output.

**Bước 3 (10 phút):** Kim Thoa hoặc Xuân Trâm tự chạy Prompt 3 (Defect Trend + Factory Risk) trên laptop của họ. Thang đứng cạnh hỗ trợ.

**Bước 4 (10 phút) ⭐ MOMENT CHÍNH:** Kim Thoa tự chạy Prompt 4 (Quotation Comparison). Đây là pain point trực tiếp — để cô ấy thao tác và tự thấy kết quả. Hỏi ngay: *"Bình thường làm bảng này mất bao lâu?"*

**Bước 5–6 (15 phút):** Thang làm mẫu Prompt 5 (Report Outline tổng hợp) và Prompt 6 (Email to GoldBug US). **⚠️ Nhắc:** phải dùng cùng session với Bước 1–4. Nếu mất session → dùng Prompt 5 Fallback (có trong file `07_demo_monthly_report_assistant.md`).

**Bước 7 + Debrief (10 phút):** Thang chạy Prompt 7 (email nội bộ tiếng Việt) nếu còn thời gian. Hỏi 3 câu debrief, không kéo dài quá 5 phút.

> **3 câu debrief WF5:**
> 1. "Kim Thoa: Bạn tiết kiệm được bao nhiêu thời gian so với làm tay?"
> 2. "Output này có dùng làm nền cho báo cáo tháng 6 thật không?"
> 3. "Để áp dụng ngay, bạn cần chuẩn bị gì?"

### Điểm cần nhấn mạnh trong WF5

- "Kim Thoa, bình thường làm bảng so sánh báo giá này mất bao lâu? AI vừa làm trong 30 giây."
- "Output cần review trước khi gửi – AI không biết context nội bộ của bạn."
- "Đây là template — sau training Kim Thoa có thể tự làm với data thật của tháng 6."
- **Kết nối workflow:** "WF1 → tóm tắt email đầu vào → WF3 → viết report → WF4 → CAPA → WF5 → tổng hợp thành dashboard tháng."

---

## Hướng dẫn Thực hành Nhóm theo Workflow (15:30 – 16:30)

> **Lưu ý về facilitator:** Thang là facilitator chính và duy nhất được đảm bảo có mặt. Lam / Thu Anh là optional — chuẩn bị kịch bản chạy một mình.

### Phân nhóm theo Workflow (v1.3)

| Nhóm | Thành viên | Workflow tập trung | Bài tập gợi ý |
|---|---|---|---|
| Nhóm 1 – QC | Lan Anh, Khánh Linh | **WF3** Inspection Report + Defect | Lấy ghi chú tay lần kiểm hàng gần nhất (ẩn tên nhà máy) → chạy WF3 |
| Nhóm 2 – QA/DCL | Xuân Trâm | **WF4** CAPA / **WF2** DCL Comparison | Anonymize 1 CAPA thật từ nhà máy, chạy WF4; hoặc so sánh DCL tháng 5 vs tháng 6 |
| Nhóm 3 – PD/Merch | Hải Yến, Trinh, Sandra | **WF3** Inspection / **WF1** Email Summary | Paste 1 email từ nhà máy (đã ẩn) → tóm tắt action items; hoặc thử WF3 với data mẫu |
| Nhóm 4 – Leadership | Thiên Kim, Kim Thoa | **WF5** Dashboard / **WF6** Training Material | Tiếp tục WF5 với data thật đã ẩn, hoặc thử WF6 để tạo outline training cho nhà máy |

> **Nếu chỉ có Thang:** Ưu tiên đứng với Nhóm 1+2 (QC/QA) trong 30 phút đầu — đây là nhóm có confidence thấp nhất. Nhóm 3+4 tự thực hành được với Prompt Library.

### Hướng dẫn chung cho học viên khi thực hành tự do

1. **Chọn 1 việc thật từ tuần này** — đã ẩn thông tin nhạy cảm trước khi paste
2. **Dùng 1 Workflow Prompt** từ Prompt Library hoặc Slide outline
3. **Nhớ Ctrl+F Replace All** trước khi paste bất kỳ file hoặc email thật nào
4. **Sẵn sàng chia sẻ kết quả** sau 20 phút trong phần Gallery Share

---

## Chốt Pilot (16:30 – 17:00)

### Quy trình chốt

1. **Mở file** `03_2week_pilot_tracker_v1.1.md` trên màn hình chiếu
2. **Đi từng người:** "Bạn chọn pilot nào sẽ thử trong 2 tuần tới?" – ghi vào tracker ngay
3. **Không để ai về mà chưa chọn** ít nhất 1 pilot
4. **Nhắc lịch check-in:** 20/06 (Slack poll), 23/06 (họp nhanh 15p), 30/06 (tổng kết)

### Ưu tiên thuyết phục Kim Thoa chọn Pilot WF5 (Monthly Dashboard)

> "Kim Thoa, tháng 6 đang kết thúc. Bạn có data mẫu đang chạy không? Sau training về dùng quy trình WF5 để làm báo cáo tháng 6 thật. Tôi sẵn sàng hỗ trợ 30 phút qua Zalo nếu bị stuck."

---

## Xử lý Tình huống Thường gặp

| Tình huống | Cách xử lý |
|---|---|
| "AI viết dài quá, không phải văn phong của tôi" | Thêm Constraint: "Viết ngắn gọn tối đa 3 bullet points, tone [X]" |
| "Làm sao upload file PDF Tech Pack?" | Hướng dẫn copy text phần quan trọng. Nhắc lại: không paste tài liệu mật |
| "AI trả lời sai về kỹ thuật giày" | Bình thường – AI không phải chuyên gia. Dùng AI để draft, bạn review và điều chỉnh |
| "WiFi chậm, AI load lâu" | Dùng ChatGPT thay Claude hoặc ngược lại. Chuẩn bị offline demo nếu cần |
| "Tôi không biết paste data từ Excel vào AI như thế nào" | Demo live: copy paste trực tiếp text từ Excel vào chat, hoặc type lại dưới dạng bảng |
| "Tôi lo công ty sẽ phạt nếu dùng AI sai" | Nhắc lại: Quy tắc RED/YELLOW/GREEN là để bảo vệ, không phải cấm. Dùng đúng cách là được |

---

## Ghi chú quan trọng cho Facilitator

- **Không thuyết giáo về AI.** Show kết quả cụ thể trước, giải thích sau.
- **Dùng tên thật của người trong team** khi demo (Starter Prompt: "Tôi là Kim Thoa, Footwear Technician tại Redbug Vietnam...") – cá nhân hóa ngay.
- **Nếu AI trả lời sai hoặc hallucinate** trong lúc demo → cơ hội vàng để giải thích "Đây là lý do bạn phải review trước khi dùng."
- **Demo 7 là highlight của ngày** – đây là nơi team thấy AI không chỉ để viết email mà để xử lý data thật.

---

*v1.3 | Workflow-based update: Lịch đổi sang WF0–WF6, phân nhóm thực hành theo workflow (không theo vai trò), WF5 mở rộng lên 60 phút, WF2 + WF6 có thể cắt nếu trễ giờ*
