# Redbug AI Training v1.4 – Synthetic Demo Data
> Fully fictional and anonymized | Safe to use with any AI tool
> All names, POs, prices, style codes, factories, and dates are invented
> v1.4 | Created 12/06/2026

---

## Overview: How to Use This File

Each section below contains demo-ready data for one workflow.
To run a demo, copy the data block from that section and paste it directly into your AI tool with the corresponding prompt from `11_live_demo_scripts.md`.

**Anonymization key used throughout:**
- Real factories → Factory A / Factory B / Factory C
- Real vendors → Vendor X / Vendor Y
- Real brand → Customer Y
- Real PO numbers → PO-1001, PO-1002, etc.
- Real style codes → Style-001 through Style-007
- Real prices → USD-A (higher), USD-B (lower), USD-C (lowest) — no actual numbers
- Real dates → June 2026 with fictional day numbers

---

## WF1 — Long Email Thread: Electric Baby Night Light Sample Development

**Product:** Style-007 "Baby Rechargeable Night Light" (touch control, 3 light modes, USB-C charging)
**Context:** Product Development + Footwear/Technical cross-team reviewing sample progress from Factory A

---

**Copy this entire block as demo input for WF1:**

```
--- EMAIL THREAD: Style-007 Baby Night Light — Sample Status Update ---
Participants: Person A (Redbug PD), Person B (Factory A Production Manager)
Subject: Re: Re: Re: Style-007 Baby Night Light – Sample Progress Update

=== Email 1 — Date 02/06 | From: Person B (Factory A) ===
Dear Person A,

We encountered a problem with the USB-C charging board. Vendor X supplied the wrong IC chip version (Chip Rev B instead of Rev C as required by CE certification). We rejected the batch and re-ordered Rev C chips. New delivery expected in 4 business days.

Meanwhile, we completed the silicone body moulding and touch-sensor placement. Both passed our internal check.

We estimate the charging board issue will delay the full prototype by 5–7 days.

Best regards, Person B

=== Email 2 — Date 04/06 | From: Person A (Redbug PD) ===
Person B — understood, thank you for the update.
Can you clarify: does this chip revision affect the CE/FCC certification documents we already submitted? Customer Y needs confirmation that the final product will still be covered under the existing test report.
Please check with your electronics compliance team and revert by EOD 06/06.

Person A

=== Email 3 — Date 06/06 | From: Person B (Factory A) ===
Dear Person A,

Update on 2 issues:

1. CE/FCC impact: Our compliance team confirmed Rev C chip is compatible with the existing CE test report (report number: [REPORT REMOVED]). No re-test needed. I will send you the confirmation letter separately.

2. New issue discovered: During assembly test, the LED driver circuit is causing a 0.3V voltage fluctuation under full-load condition (all 3 modes active). This may cause flickering visible to the human eye. We are redesigning the PCB trace routing to fix this. New PCB prototype needed from Vendor X, estimated 3 days.

Good news: Battery runtime test reached 9.2 hours (spec is 10 hours). We are close but not there yet.

Best regards, Person B

=== Email 4 — Date 08/06 | From: Person B (Factory A) ===
Person A,

New PCB arrived today. Voltage fluctuation is resolved — stable at 3.3V across all modes. No flickering observed.

However, during 1-meter drop test (concrete surface), the USB-C port plastic housing cracked on 2 out of 3 units tested. We are adding a reinforced rubber bumper around the charging port area. This will add 1.5mm to the bottom thickness (currently 18mm, will become 19.5mm). Please advise if this dimension change needs US approval.

Battery update: Still 9.2 hours with current cell (Model: [CELL INFO REMOVED]). Vendor X is sourcing an alternative cell with 10% higher capacity. Testing next week.

Regards, Person B

=== Email 5 — Date 10/06 | From: Person B (Factory A) ===
Person A,

Final update before prototype submission:

✅ Resolved: Voltage flickering (PCB redesign)
✅ Resolved: Drop test failure (rubber bumper added — thickness is now 19.5mm, please confirm OK with US)
✅ CE/FCC certification: not affected by chip change
⚠️ Pending: Battery runtime — alternative cell from Vendor X arrives 12/06, testing 13/06
⚠️ Pending: US approval for 1.5mm thickness increase

We propose to ship the prototype on 14/06 regardless, with a note that battery test result and dimension approval are still pending. This avoids further delay on the overall PO-1006 timeline.

Please advise. We can ship as-is or hold until full sign-off.

Best regards, Person B
```

---

## WF2 — DCL Comparison: Baby Sleeping Bag (Style-004)

**Context:** Customer Y issued a new DCL (Declaration of Compliance requirements) in June 2026. Team needs to identify what changed vs. the previous version before briefing Factory A.

---

**Copy this entire block as demo input for WF2:**

```
--- DCL COMPARISON: Style-004 Baby Sleeping Bag ---
Compare: DCL v1 (March 2026) vs DCL v2 (June 2026) — issued by Customer Y

=== DCL VERSION 1 — March 2026 ===

Component List and Requirements:

1. Outer Shell Fabric
   Material: 100% Polyester, woven, 200 gsm
   Requirements: Formaldehyde ≤ 75 ppm | pH 4.0–7.5
   Test standard: OEKO-TEX Standard 100 or equivalent

2. Inner Lining Fabric
   Material: 100% Polyester fleece, 280 gsm
   Requirements: Formaldehyde ≤ 75 ppm | pH 4.0–7.5
   Test standard: OEKO-TEX Standard 100 or equivalent

3. Filling / Wadding
   Material: 100% Polyester hollow fibre, 200 g/m²
   Requirements: No restriction beyond general REACH compliance
   Test standard: REACH SVHC list (Dec 2022)

4. Zipper Tape + Slider
   Material: Nylon tape + Zinc alloy slider
   Requirements: Heavy metals (Ni, Cr, Co) ≤ standard limits | No ABS-containing slider allowed
   Test standard: EN 71-3 Toy Safety (migration)

5. Trim / Binding Tape
   Material: 100% Polyester
   Requirements: Formaldehyde ≤ 75 ppm
   Test standard: OEKO-TEX Standard 100

6. Label
   Material: Woven polyester
   Requirements: No restriction

Safety / Compliance Standards:
- EN 71-1: Mechanical and Physical Safety
- EN 71-2: Flammability
- REACH SVHC (Dec 2022 list — 223 substances)
- California Prop 65 compliance: Not required for this product

=== DCL VERSION 2 — June 2026 ===

Component List and Requirements:

1. Outer Shell Fabric
   Material: 100% Recycled Polyester (GRS certified), woven, 200 gsm   ← MATERIAL CHANGE
   Requirements: Formaldehyde ≤ 20 ppm (STRICTER) | pH 4.0–7.5 | Azo Dyes ≤ 20 ppm (NEW)
   Test standard: OEKO-TEX Standard 100 + GRS certification required

2. Inner Lining Fabric
   Material: 100% Polyester fleece, 280 gsm (unchanged)
   Requirements: Formaldehyde ≤ 20 ppm (STRICTER) | pH 4.0–7.5 | Phthalates total ≤ 0.1% (NEW)
   Test standard: OEKO-TEX Standard 100

3. Filling / Wadding
   Material: 100% Recycled Polyester hollow fibre (GRS certified), 200 g/m²   ← MATERIAL CHANGE
   Requirements: No phthalates detectable (NEW) | REACH SVHC compliance
   Test standard: REACH SVHC list (Jan 2026 — updated to 240 substances)   ← UPDATED LIST

4. Zipper Tape + Slider
   Material: Recycled Nylon tape + Zinc alloy slider   ← MATERIAL CHANGE
   Requirements: Heavy metals ≤ standard limits | No ABS slider | Recycled content certificate required (NEW)
   Test standard: EN 71-3 + supplier certificate

5. Trim / Binding Tape
   Material: Organic Cotton (100%)   ← FULL MATERIAL CHANGE from Polyester
   Requirements: Formaldehyde ≤ 20 ppm (STRICTER) | GOTS certification required (NEW)
   Test standard: OEKO-TEX Standard 100 + GOTS cert

6. Label
   Material: Woven recycled polyester (NEW — must be recycled)   ← MATERIAL CHANGE
   Requirements: Recycled content certificate required (NEW)

Safety / Compliance Standards:
- EN 71-1: Mechanical and Physical Safety (same)
- EN 71-2: Flammability (same)
- EN 71-9: Chemical Toys — NOW REQUIRED   ← NEW STANDARD ADDED
- REACH SVHC (Jan 2026 list — 240 substances)   ← UPDATED
- California Prop 65: NOW REQUIRED for all US-bound products   ← NEW REQUIREMENT
```

---

## WF3 — Final Inspection Report: Baby Sleeping Bag (PO-1002)

**Context:** QC Inspector (Person C) completed FRI (Final Random Inspection) on 10/06/2026 at Factory A. These are her raw field notes — need to convert to professional Inspection Report.

---

**Copy this entire block as demo input for WF3:**

```
--- QC FIELD NOTES: FRI on 10/06/2026 ---
Product: Baby Sleeping Bag (Style-004)
Factory: Factory A
PO: PO-1002
Order Qty: 1,000 pcs
Inspected: 200 pcs (AQL 2.5 Level II)
Accept: ≤5 Major / ≤8 Minor
QC Inspector: Person C

--- DEFECTS FOUND ---

1. Đứt chỉ cổ ngủ (back neckline open seam): 6 cái — MAJOR
   Mô tả: Đường may cổ phía sau hở 2-3cm, có thể thấy lớp lót bên trong

2. Pilling trên mặt vải ngoài: 4 cái — MAJOR
   Mô tả: Vải bên ngoài bị xù lông vùng ngực và bụng, lỗi ngoại quan rõ ràng

3. Khóa kéo kẹt/trơn không đều: 3 cái — MINOR
   Mô tả: Kéo khóa cần dùng lực nhiều hơn bình thường, không trơn tru

4. Label may lệch: 4 cái — MAJOR
   Mô tả: Care label bị lệch ra khỏi vị trí quy định >10mm về phía trái

5. Đo hụt chiều dài thân: 2 cái — MAJOR
   Mô tả: Chiều dài thân đo được 68cm, spec yêu cầu 70cm (hụt 2cm, vượt dung sai ±1cm)

6. Bông không đều vùng ngực: 1 cái — MAJOR
   Mô tả: Vùng ngực bên phải mỏng hơn bên trái rõ ràng khi cầm vào

TỔNG: Major = 17 (>5 — FAIL), Minor = 3 (<8)

--- ĐÓNG GÓI / PACKAGING ---
Checked 20 carton boxes randomly:
- 8/20 thùng: Thiếu số lot trên nhãn thùng (missing lot number on box label)
- 20/20 thùng: Poly bag bên trong KHÔNG CÓ cảnh báo ngạt thở (NO suffocation warning on inner poly bag) — SAFETY CRITICAL
- 12/20 thùng: Không có hang tag bên trong (missing hang tag)

KẾT QUẢ: FAIL
Lý do: Major defect count 17 > AQL accept point 5
Vấn đề critical: Thiếu suffocation warning trên poly bag (safety requirement)
```

---

## WF4 — CAPA / Root Cause / Factory Risk: Factory A Open Seam Trend

**Context:** QA Manager (Person D) reviewing Factory A's performance after 3 consecutive months of rising open seam defect rate. Factory just submitted a weak CAPA.

---

**Copy this entire block as demo input for WF4:**

```
--- FACTORY A: OPEN SEAM DEFECT TREND — JUNE REVIEW ---

Factory: Factory A
Products affected: Baby Sleeping Bag (Style-004), Baby Carrier Cover (Style-001)
Period reviewed: April – June 2026

DEFECT TREND DATA:
Month    | Product       | Qty Inspected | Open Seam Defects | Defect Rate
April    | Style-001     | 600 pcs       | 8 pcs             | 1.3%
May      | Style-001     | 580 pcs       | 14 pcs            | 2.4%
June     | Style-004     | 200 pcs       | 17 pcs            | 8.5% ← FRI FAIL

Risk trigger: 3 consecutive months increasing. June rate 8.5% >> Redbug threshold of 3.0%.

---

CAPA SUBMITTED BY FACTORY A (received 11/06/2026):

"We acknowledge the open seam defect on PO-1002 Style-004 inspection.
Root Cause: Workers were not careful enough when sewing the neckline area.
Corrective Action: We have reminded all sewing workers to be more careful and check their work before sending to next station.
Preventive Action: We will add a QC check before the packing station.
Timeline: Immediate."

---

QA MANAGER ASSESSMENT:
This CAPA is insufficient. "Workers not careful" is not a Root Cause — it is a symptom.
The real root cause has not been investigated.
Rate has tripled over 3 months, which indicates a systemic issue, not individual error.
Factory needs to conduct 5 Whys analysis and provide evidence-based preventive actions.
```

---

## WF5 — Monthly Operations Dashboard Data: June 2026

**Context:** Kim Thoa / Country Manager preparing the end-of-month operations report. Data covers sample tracking, order progress, factory quality performance, and quotation comparison.

---

**Copy this entire block as demo input for WF5:**

```
--- REDBUG OPERATIONS DATA — JUNE 2026 ---
(Fully anonymized — all factory names, style codes, and prices are fictional)

=== SECTION 1: SAMPLE TRACKER ===

Style    | Product               | Factory   | Sample Type      | Due Date  | Status           | Notes
Style-001| Baby Carrier Cover    | Factory A | Prototype        | 05/06     | OVERDUE (7 days) | Fabric supplier delay — new fabric ETA 14/06
Style-002| Swaddle Blanket       | Factory A | Size Set         | 08/06     | OVERDUE (4 days) | PP comment seam issue unresolved
Style-003| Toddler Backpack      | Factory B | Prototype        | 10/06     | Submitted ✅     | Awaiting Customer Y review
Style-004| Baby Sleeping Bag     | Factory A | Fit Sample       | 12/06     | FRI FAIL ⚠️      | See inspection report PO-1002
Style-005| Diaper Bag            | Factory C | Pre-Production   | 14/06     | Not Started ❌   | Factory waiting for fabric from Vendor Y
Style-006| Nursing Cover         | Factory B | Fit Sample       | 15/06     | Submitted ✅     | Customer Y: minor comments, revision needed

=== SECTION 2: ORDER / PRODUCTION TRACKER ===

PO      | Product            | Factory   | Order Qty | Production Status  | Ship Date  | Risk
PO-1001 | Baby Carrier Cover | Factory A | 2,000 pcs | 60% complete       | 25/06      | HIGH — sample overdue, production may pause
PO-1002 | Swaddle Blanket    | Factory A | 5,000 pcs | Pre-production hold| 30/06      | MEDIUM — size set approval pending
PO-1003 | Toddler Backpack   | Factory B | 1,500 pcs | Fabric cutting 80% | 28/06      | LOW
PO-1004 | Nursing Cover      | Factory B | 3,000 pcs | Sewing 40%         | 22/06      | LOW — on track
PO-1005 | Diaper Bag         | Factory C | 2,500 pcs | Not started        | 05/07      | MEDIUM — fabric not arrived

=== SECTION 3: DEFECT SUMMARY — MAY TO JUNE 2026 ===

Factory   | Product            | Main Defect Type     | Defect Rate | 3-Month Trend
Factory A | Baby Carrier Cover | Open seam            | 8.5%        | ↑↑ Rising fast (was 1.3% in April)
Factory A | Swaddle Blanket    | Machine oil stain    | 3.2%        | → Stable
Factory A | Baby Sleeping Bag  | Open seam (same root)| 8.5%        | ↑ New product, same issue
Factory B | Nursing Cover      | Measurement variance | 1.8%        | ↓ Improving (was 3.1% in April)
Factory B | Toddler Backpack   | Zipper misalignment  | 2.5%        | → Stable
Factory C | Diaper Bag         | Fabric pilling       | 4.1%        | ↑ New issue — first detected this month

Factory Risk Summary:
- Factory A: HIGH — open seam defect rate 8.5%, CAPA pending, 2 overdue samples
- Factory B: LOW — improving trend, no critical issues
- Factory C: MEDIUM — pilling new issue, production not started yet

=== SECTION 4: QUOTATION COMPARISON — Style-003 Toddler Backpack (1,500 pcs) ===

Supplier       | Unit Price  | Lead Time | MOQ        | Redbug Track Record       | Recommendation
Factory B      | USD-A       | 45 days   | 500 pcs    | 12 POs, 96% pass rate     | ✅ RECOMMENDED (current)
Factory D (new)| USD-B       | 50 days   | 1,000 pcs  | No history with Redbug    | Consider with caution
Factory E (quote only) | USD-C | 40 days | 2,000 pcs  | No history with Redbug    | Too high MOQ, not viable

Notes:
- Factory D is 8% cheaper than Factory B (USD-B vs USD-A) but no track record
- Factory B: reliable quality, proven relationship, flexible MOQ
- Recommendation: Stay with Factory B for current season; run Factory D trial with small order Q3 if needed
```

---

## WF6 — Testing Request Form Guideline: Convert to Training Slides

**Context:** Customer Y issued a new testing request process guideline effective July 2026. Redbug needs to train Factory A and Factory B production managers on the new requirements before the next production cycle.

---

**Copy this entire block as demo input for WF6:**

```
--- CUSTOMER Y: NEW TESTING REQUEST PROCESS GUIDELINE — Effective July 2026 ---
Document type: Process guideline for supplier factories
Purpose: Standardize how factories submit test requests to certified labs

SECTION 1: WHO MUST COMPLY
All factories producing goods for Customer Y under any active purchase order.
Applicable from: 01/07/2026

SECTION 2: WHEN TO SUBMIT
- For chemical tests (RSL/REACH/Prop 65): No later than 21 days before FRI date
- For mechanical/safety tests (EN71, ASTM): No later than 14 days before FRI date
- For re-tests after failure: Within 5 business days of receiving Fail result

SECTION 3: HOW TO SUBMIT
Step 1: Complete the official Test Request Form (Form TR-2026, attached separately)
Step 2: On the form, clearly indicate:
   - Style code (as per Customer Y tech pack)
   - Purchase Order number
   - Production lot number (or expected lot range)
   - List of materials (component name + material composition + supplier name)
   - Applicable test standards required (refer to DCL for your product)
   - Intended end user age range (e.g., 0–12 months, 3–6 years)
Step 3: Factory Quality Manager must sign the Declaration of Compliance section
Step 4: Submit to Customer Y's designated lab partner (lab list in Appendix B of this guideline)
Step 5: CC your Redbug QA contact on all test request submissions

SECTION 4: WHAT HAPPENS AFTER SUBMISSION
- Lab will confirm receipt within 2 business days
- Test turnaround: 5–7 business days for standard tests; 10–14 days for chemical tests
- Results sent to factory and CC'd to Redbug QA
- If Pass: FRI can proceed as scheduled
- If Fail: Factory must submit re-test plan within 5 days; FRI date will be postponed

SECTION 5: CONSEQUENCES OF NON-COMPLIANCE
- Missing the submission deadline = automatic FRI postponement
- Submitting incomplete forms = re-submission required (counts as a delay)
- 2 consecutive late submissions = factory quality review by Redbug QA team

Training objective: Factory production managers and QC supervisors must understand and follow this process independently from July 2026.
```

---

---

## WF7 — Office Admin Invoice Processing: Synthetic Demo Data

**Context:** Hạnh (Office Admin) wants to use AI to extract invoice data from supplier emails and record expenses. The demo uses a fictional invoice email and shows the 5-step staged workflow — no full inbox scanning.

---

### WF7-A: Fictional Invoice Email (paste as demo input for WF7-1)

**Copy this entire block:**

```
--- DEMO INPUT: INVOICE EMAIL — WF7 ---
From: billing@vendorx.vn
To: hanh.office@redbugvietnam.vn
Date: 10/06/2026
Subject: [INVOICE] INV2026-061 – Office Supplies – June 2026

Dear Ms. Hanh,

Please find below the invoice details for your June 2026 office supplies order.

INVOICE DETAILS:
  Invoice Number: INV2026-061
  Invoice Date: 10/06/2026
  Due Date: 25/06/2026
  Payment Terms: Net 15 days

BILL TO:
  Redbug Vietnam Co., Ltd
  Office Admin Department

LINE ITEMS:
  1. A4 Paper (80gsm) – 10 reams × 85,000 VND = 850,000 VND
  2. Ballpoint Pens (box of 12) – 5 boxes × 35,000 VND = 175,000 VND
  3. Printer Ink Cartridge (Black) – 2 units × 280,000 VND = 560,000 VND
  4. Sticky Notes Assorted – 3 packs × 45,000 VND = 135,000 VND
  5. Stapler + 1000 Staples – 1 set × 95,000 VND = 95,000 VND

SUBTOTAL: 1,815,000 VND
VAT (10%): 181,500 VND
GRAND TOTAL: 1,996,500 VND

Payment: Please transfer to Vendor X bank account [account details removed]
Reference: INV2026-061

For any queries, contact: billing@vendorx.vn

Thank you for your business.
Vendor X Office Supplies
```

---

### WF7-B: Expected Extracted Output (what AI should produce after WF7-1)

| Field | Value |
|---|---|
| Vendor / Nhà cung cấp | Vendor X Office Supplies |
| Invoice Number / Số hóa đơn | INV2026-061 |
| Invoice Date / Ngày hóa đơn | 10/06/2026 |
| Due Date / Ngày đến hạn | 25/06/2026 |
| Payment Terms | Net 15 days |

**Line Items:**

| # | Mô tả | Số lượng | Đơn giá (VND) | Thành tiền (VND) |
|---|---|---|---|---|
| 1 | A4 Paper 80gsm | 10 ream | 85,000 | 850,000 |
| 2 | Ballpoint Pens (hộp 12) | 5 hộp | 35,000 | 175,000 |
| 3 | Printer Ink Cartridge Black | 2 cái | 280,000 | 560,000 |
| 4 | Sticky Notes Assorted | 3 gói | 45,000 | 135,000 |
| 5 | Stapler + 1000 Staples | 1 bộ | 95,000 | 95,000 |

| | Subtotal | | | 1,815,000 |
| | VAT 10% | | | 181,500 |
| | **GRAND TOTAL** | | | **1,996,500** |

---

### WF7-C: Expected Expense Recording Entry (WF7-2 output)

| Ngày | Nhà cung cấp | Số hóa đơn | Mô tả | Số tiền (VND) | Hạng mục | Trạng thái | Ghi chú |
|---|---|---|---|---|---|---|---|
| 10/06/2026 | Vendor X | INV2026-061 | Văn phòng phẩm tháng 6 | 1,996,500 | Văn phòng phẩm | Chờ thanh toán | Đến hạn 25/06 |

---

### WF7-D: Suggested File Name (WF7-3 output)

```
20260610_VendorX_INV2026-061_1996500VND.pdf
```

---

### WF7-E: Monthly Expense Summary Table (WF7-5 reference)

> Fictional monthly expense data for demo — all vendors anonymized

| Ngày | Nhà cung cấp | Số hóa đơn | Mô tả | Số tiền (VND) | Hạng mục | Trạng thái |
|---|---|---|---|---|---|---|
| 02/06/2026 | Vendor Y | INV2026-058 | Hóa đơn điện tháng 6 | 3,250,000 | Điện nước | Đã thanh toán |
| 05/06/2026 | Vendor Z | INV2026-059 | Dịch vụ internet tháng 6 | 850,000 | Điện nước | Đã thanh toán |
| 08/06/2026 | Vendor W | INV2026-060 | Sửa máy in văn phòng | 1,200,000 | Sửa chữa | Đã thanh toán |
| 10/06/2026 | Vendor X | INV2026-061 | Văn phòng phẩm tháng 6 | 1,996,500 | Văn phòng phẩm | Chờ thanh toán |
| 12/06/2026 | Vendor Y | INV2026-062 | Tiếp khách đối tác | 2,800,000 | Tiếp khách | Chờ thanh toán |
| **TỔNG** | | | | **10,096,500** | | |

**Breakdown by category:**
- Điện nước: 4,100,000 VND (40.6%)
- Tiếp khách: 2,800,000 VND (27.7%)
- Văn phòng phẩm: 1,996,500 VND (19.8%)
- Sửa chữa: 1,200,000 VND (11.9%)

**Chưa thanh toán (Pending):** 4,796,500 VND (INV2026-061, INV2026-062)

---

### WF7-F: Security Demo Script (for facilitator — show the "what NOT to do" contrast)

**Scenario for security discussion:**
> "Hạnh muốn tiết kiệm thời gian: đưa cho AI toàn bộ inbox để AI tự tìm email hóa đơn."
> "Vấn đề: inbox cũng chứa thông tin lương, email HR, thư từ GoldBug US."

**5-step safe workflow (show on screen):**
1. Hạnh mở inbox → lọc thủ công theo sender: Vendor X, Vendor Y, Vendor Z
2. Mở từng email hóa đơn → copy chỉ nội dung email đó
3. Kiểm tra: có thông tin HR hay nội dung không liên quan không? Xóa nếu có.
4. Paste vào AI → AI xử lý
5. Review kết quả trước khi nhập vào accounting system

**Key message:** "AI xử lý document bạn paste — không phải document bạn không paste. Quyền kiểm soát thuộc về bạn."

---

*v1.4 | Synthetic Demo Data | All data is fictional and anonymized | Safe for AI demo use | 12/06/2026*
