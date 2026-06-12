# README — Drive Upload Instructions
**Redbug AI Training v1.0 | Google Drive Setup Guide**
Dành cho: Thang Nguyen (Facilitator)
Cập nhật: 12/06/2026

---

## CẤU TRÚC THƯ MỤC GOOGLE DRIVE

Tạo 1 folder chính trên Google Drive: **`Redbug AI Training 2026`**
Bên trong, tạo các subfolder sau:

```
📁 Redbug AI Training 2026/
├── 📁 01_Slide_Deck/
├── 📁 02_Participant_Handout/
├── 📁 03_Prompt_Library/
├── 📁 04_Demo_Data/
├── 📁 05_Pilot_Tracker/
├── 📁 06_Persona_Gem_Templates/
├── 📁 07_Facilitator_Notes/
└── 📁 99_Source_Backup/
```

---

## HƯỚNG DẪN UPLOAD TỪNG FILE

### 1. File nào upload vào thư mục nào

| File trong `drive_ready/` | Upload vào Folder | Định dạng trên Drive |
|---|---|---|
| `07_Slide_Deck_Google_Slides_Outline.md` | `01_Slide_Deck/` | Google Slides (tạo từ outline) |
| `01_Participant_Handout_Google_Doc.md` | `02_Participant_Handout/` | Google Docs |
| `02_Prompt_Library_Google_Doc.md` | `03_Prompt_Library/` | Google Docs |
| `03_Demo_Data_Google_Sheet.csv` | `04_Demo_Data/` | Google Sheets |
| `04_2Week_Pilot_Tracker_Google_Sheet.csv` | `05_Pilot_Tracker/` | Google Sheets |
| `05_Persona_Gem_Templates_Google_Doc.md` | `06_Persona_Gem_Templates/` | Google Docs |
| `06_Facilitator_Notes_Google_Doc.md` | `07_Facilitator_Notes/` | Google Docs |
| Tất cả file `.md` và `.csv` gốc | `99_Source_Backup/` | Giữ nguyên định dạng |

---

### 2. Cách upload file Markdown → Google Docs

**Bước 1:** Mở file `.md` bằng text editor (Notepad, VS Code, hoặc bất kỳ app nào)
**Bước 2:** Chọn tất cả (Ctrl+A) → Copy (Ctrl+C)
**Bước 3:** Trên Google Drive, trong folder đúng, nhấn **+ New → Google Docs**
**Bước 4:** Paste nội dung vào Google Doc
**Bước 5:** Dùng Format > Paragraph styles để áp dụng Heading 1/2/3 theo đúng cấu trúc
**Bước 6:** Đặt tên file theo tên folder (ví dụ: "Participant Handout — Redbug AI Training v1.0")

---

### 3. Cách upload file CSV → Google Sheets

**Bước 1:** Trên Google Drive, trong folder đúng, nhấn **+ New → File upload**
**Bước 2:** Chọn file `.csv`
**Bước 3:** Sau khi upload xong, right-click file → **Open with Google Sheets**
**Bước 4:** Google Sheets sẽ import CSV tự động
**Bước 5:** Đối với `03_Demo_Data_Google_Sheet.csv`: Cột "Sheet" là tên tab → tạo tab riêng bằng tay cho từng nhóm row và format headers

---

### 4. Cách tạo Slide Deck từ file Outline

**Bước 1:** Mở file `07_Slide_Deck_Google_Slides_Outline.md` để đọc nội dung
**Bước 2:** Trên Google Drive, nhấn **+ New → Google Slides**
**Bước 3:** Tạo từng slide theo outline — tiêu đề, nội dung, ghi chú thuyết trình
**Bước 4:** Áp dụng màu sắc: Nền trắng | Tiêu đề navy `#003366` | Điểm nhấn gold `#C8960C` | Cảnh báo đỏ `#CC0000`
**Bước 5:** Ghi chú thuyết trình của mỗi slide → Speaker Notes (phía dưới slide)

---

## CÀI ĐẶT CHIA SẺ (SHARING SETTINGS)

### Tài liệu dành cho học viên (participant-facing)
**Files:** Participant Handout, Prompt Library, Demo Data, Persona Gem Templates, Slide Deck

**Setting:** `Anyone with the link → Viewer`
- Cách làm: Mở file trên Drive → Share → Change to "Anyone with the link" → Viewer → Copy link
- Học viên chỉ xem và tải về — không chỉnh sửa

### Pilot Tracker
**File:** `04_2Week_Pilot_Tracker_Google_Sheet.csv` (sau khi import vào Sheets)

**Setting:** `Anyone with the link → Commenter`
- Học viên có thể comment nhưng không chỉnh sửa trực tiếp
- Thang giữ quyền edit và cập nhật kết quả check-in

### Facilitator Notes
**File:** `06_Facilitator_Notes_Google_Doc.md`

**Setting:** `Restricted — chỉ Thang Nguyen`
- KHÔNG chia sẻ link này với học viên
- Nếu cần chia sẻ với co-facilitator, thêm email cụ thể thay vì "Anyone with link"

---

## SAU KHI UPLOAD XONG

1. **Lấy links Google Drive** cho từng tài liệu học viên
2. **Cập nhật website** tại `https://redbug-ai-training-2026.vercel.app/`:
   - Thay các placeholder hrefs (`#drive-folder`, `#slide-deck`, v.v.) bằng link Google Drive thật
   - Chỉnh sửa `index.html` → commit → push → Vercel auto-deploy
3. **Test tất cả links** trước ngày training (13 hoặc 15/06)
4. **Gửi link cho học viên** qua Zalo tối 15/06:
   > "Mọi người có thể xem trước Handout tại [link]. Sáng mai mang điện thoại / laptop."

---

## KHÔNG UPLOAD LÊN DRIVE CÔNG KHAI

- File có dữ liệu thật của công ty (PO, giá, contract, audit report)
- File có thông tin cá nhân (email, số điện thoại, đánh giá hiệu suất cá nhân)
- Facilitator Notes (chỉ Thang giữ)
- Survey responses có tên cá nhân

---

## CHECKLIST HOÀN THÀNH UPLOAD

- [ ] Tạo folder `Redbug AI Training 2026` trên Google Drive
- [ ] Tạo 8 subfolder theo cấu trúc trên
- [ ] Upload và convert 5 file Google Docs
- [ ] Upload và convert 2 file Google Sheets (format headers, tab nếu cần)
- [ ] Tạo Google Slides từ outline (27 slides + 4 Appendix)
- [ ] Set sharing: Participant docs = Anyone with link / Viewer
- [ ] Set sharing: Pilot Tracker = Anyone with link / Commenter
- [ ] Set sharing: Facilitator Notes = Restricted
- [ ] Copy tất cả Drive links
- [ ] Cập nhật links trong `index.html` (commit + push sau khi có links thật)
- [ ] Test tất cả links trước 15/06
- [ ] Gửi link Handout qua Zalo cho học viên tối 15/06

---

*Redbug AI Training v1.0 | Drive Upload Instructions | 12/06/2026 | Thang Nguyen*
