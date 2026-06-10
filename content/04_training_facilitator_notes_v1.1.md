# Redbug AI Training v1.2 - Facilitator Notes
> Ngày 16/06/2026 | VP Redbug Vietnam | 08:45 – 17:30

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

## Lịch trình Ngày Training (Revised v1.2)

| Thời gian | Nội dung | Ghi chú Facilitator |
|---|---|---|
| 08:45 – 09:00 | Check-in, setup thiết bị | Kiểm tra WiFi, tất cả mở sẵn ChatGPT/Claude |
| 09:00 – 09:15 | Opening: Tại sao AI training lúc này? | Ngắn gọn, không thuyết giáo – show 1 ví dụ thực tế ngay |
| 09:15 – 09:45 | **AI Security Q&A + Quy tắc RED/YELLOW/GREEN** | Xem phần xử lý câu hỏi bảo mật phía dưới |
| 09:45 – 10:15 | Prompt Formula + Starter Prompt | Mọi người tự thiết lập AI theo vai trò của mình |
| 10:15 – 10:30 | Break | |
| 10:30 – 11:15 | **Demo 1 + Demo 2** (Facilitator làm mẫu) | Học viên làm theo trên laptop |
| 11:15 – 12:00 | **Demo 3** + Q&A sáng | Tập trung PD + Kim Thoa |
| 12:00 – 13:15 | Nghỉ trưa | |
| 13:15 – 14:00 | **Demo 4 + Demo 5** – QA/QC + CSR (45 phút) | Nhóm QA/QC + CSR; Thang làm mẫu cả 2 demo liên tiếp |
| 14:00 – 14:20 | **Demo 6** – Office Admin (20 phút, quick demo) | Facilitator làm mẫu nhanh; không cần học viên làm theo ngay |
| 14:20 – 15:15 | **Demo 7 ⭐** – Monthly Tech/Quality/Sample Report (55 phút) | Xem hướng dẫn riêng Demo 7 phía dưới; đây là highlight của ngày |
| 15:15 – 15:30 | Break | |
| 15:30 – 16:30 | **Thực hành tự do theo nhóm** (60 phút) | Thang đi từng nhóm; xem phân nhóm phía dưới |
| 16:30 – 17:00 | **Chốt Pilot** | Dùng bảng Pilot Shortlist trong file 03_2week_pilot_tracker_v1.2.md |
| 17:00 – 17:30 | Wrap-up + Q&A cuối ngày | |

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

## Hướng dẫn riêng: Demo 7 – Monthly Tech/Quality/Sample Progress Report

### Tại sao Demo 7 quan trọng?

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

### Cách chạy Demo 7 (55 phút)

**Bước 1–2 (15 phút):** Thang làm mẫu Prompt 1 (Priority List) và Prompt 2 (Order Summary). Học viên theo dõi màn hình chiếu.

**Bước 3 (10 phút):** Kim Thoa hoặc Xuân Trâm tự chạy Prompt 3 (Defect Trend) trên laptop của họ. Thang đứng cạnh hỗ trợ nếu cần.

**Bước 4 (10 phút):** Kim Thoa tự chạy Prompt 4 (Quotation Comparison). Đây là pain point trực tiếp – để cô ấy thao tác và tự thấy kết quả.

**Bước 5–6 (15 phút):** Thang làm mẫu Prompt 5 (Report Outline) và Prompt 6 (Email to US). **Lưu ý:** nhắc học viên phải dùng cùng session với Bước 1–4, không đóng tab.

**Bước 7 + Debrief (5 phút):** Thang chạy nhanh Prompt 7 (email nội bộ). Hỏi debrief 2–3 câu, không kéo dài.

### Điểm cần nhấn mạnh trong Demo 7

- "Kim Thoa, bình thường làm bảng so sánh báo giá này mất bao lâu? AI vừa làm trong 30 giây."
- "Output cần review trước khi gửi – AI không biết context nội bộ của bạn."
- "Đây là template – sau training Kim Thoa có thể tự làm với data thật của tháng 6."

---

## Hướng dẫn Thực hành Nhóm (15:30 – 16:30)

> **Lưu ý về facilitator:** Thang là facilitator chính và duy nhất được đảm bảo có mặt. Nếu Lam hoặc Thu Anh có thể hỗ trợ ngày hôm đó, họ có thể giúp đứng cạnh 1–2 nhóm trong phần tự do này — nhưng đây là optional, không phải điều kiện bắt buộc để chạy được buổi training. Thang nên chuẩn bị kịch bản chạy một mình.

### Phân nhóm (Thang tự điều phối)

| Nhóm | Thành viên | Demo tập trung | Người hỗ trợ |
|---|---|---|---|
| Nhóm Tech/QA | Kim Thoa, Xuân Trâm, Lan Anh, Yến, Linh | Tiếp tục Demo 7 với data thật của tuần này (đã ẩn) | Thang ưu tiên nhóm này |
| Nhóm PD/Merch | Hải Yến, Trinh, Sandra | Demo 3 nâng cao + Prompt tùy chỉnh | Lam (nếu có mặt) hoặc tự thực hành |
| Nhóm CSR/Admin | Tú Anh/Anna, Hạnh | Demo 5 + Demo 6 tự thực hành | Thu Anh (nếu có mặt) hoặc tự thực hành |
| Nhóm Leadership | Thiên Kim | Demo 1 nâng cao + Briefing workflow | Thang (ghé qua sau nhóm Tech/QA) |

> **Nếu chỉ có Thang:** Ưu tiên đứng với Nhóm Tech/QA trong 30 phút đầu, sau đó ghé qua các nhóm còn lại. Các nhóm PD/Merch và CSR/Admin có thể tự thực hành với Prompt Library – nội dung đủ rõ để không cần người hướng dẫn liên tục.

### Gợi ý bài tập tự do cho từng nhóm

**Nhóm Tech/QA:**
> "Mỗi người tự chuẩn bị 1 ví dụ thật (đã ẩn thông tin nhạy cảm) từ công việc tuần này và dùng AI xử lý. Ví dụ: Kim Thoa paste danh sách mẫu đang theo dõi, dùng prompt Priority List từ thư viện."

**Nhóm PD/Merch:**
> "Lấy 1 email hoặc comment mẫu thật (đã ẩn tên nhà máy/style) và thử dùng AI dịch + tạo action table."

**Nhóm CSR/Admin:**
> "Tú Anh thử Prompt 7.6 (giải thích ZDHC/Higg cho nhà máy). Hạnh thử Prompt 8.1 (lịch trình công tác) với dữ liệu chuyến đi tuần tới."

---

## Chốt Pilot (16:30 – 17:00)

### Quy trình chốt

1. **Mở file** `03_2week_pilot_tracker_v1.1.md` trên màn hình chiếu
2. **Đi từng người:** "Bạn chọn pilot nào sẽ thử trong 2 tuần tới?" – ghi vào tracker ngay
3. **Không để ai về mà chưa chọn** ít nhất 1 pilot
4. **Nhắc lịch check-in:** 20/06 (Slack poll), 23/06 (họp nhanh 15p), 30/06 (tổng kết)

### Ưu tiên thuyết phục Kim Thoa chọn Pilot #7 hoặc #8

> "Kim Thoa, tháng 6 đang kết thúc. Bạn có data về mẫu đang chạy không? Nếu có, sau training về dùng quy trình Demo 7 để làm báo cáo tháng 6 thật. Tôi sẵn sàng hỗ trợ 30 phút qua Zalo nếu bị stuck."

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

*v1.2 | Structural fixes: Sửa lịch chiều (Demo 6/7 tách riêng), điều chỉnh Demo 7 lên 55 phút, cập nhật phân nhóm thực hành cho 1 facilitator chính*
