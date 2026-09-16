# Malaysia School Establishment, Recognition & Governance Path

| Field | Value |
|---|---|
| Document ID | `MY-003` |
| Version | `0.1.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-16` |
| Access date for sources | `2026-09-16` |
| Country scope | `MALAYSIA` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `ADR-0001` APPROVED; `ADR-0003` APPROVED; `IMP-001` DRAFT; `MY-000` / `MY-001` / `MY-002` DRAFT |
| Related gaps | GAP-001 / GAP-002 / GAP-007 (primary); GAP-037 re-check; related GAP-005 / 006 / 014 / 051 |
| Source documents | Evidence catalogue (§19); Concept Note treated as **proposal only** |

> **Authority note:** This is a **Malaysia Country Profile research pack**, not Core architecture, **not** a legal opinion, and **not** Ministry approval. It does **not** select a school category, invent licences, or close GAP-001 / 002 / 007. Where evidence is incomplete, findings are **UNRESOLVED**. English readings of Act 550 are from published compilations; BM MOE PDF is the hosted primary Act text — verify against Laws of Malaysia / Gazette before relying in counsel work.

---

## 1. Purpose

Answer, with citations:

> What legally recognisable school are we actually proposing to establish in Malaysia, under what establishment/operator path, and through what recognised academic route?

This pack supplies an **option matrix and Hard-Blocker map** for IMP-001 Country Path readiness. It deliberately does **not** recommend a “best” path.

---

## 2. Pre-flight: existing Malaysia claims audit

| Claim (repository / Concept Note) | Classification | Notes |
|---|---|---|
| Malaysia is first country implementation focus | **PROPOSAL / PROJECT CHOICE** | ADR-0001 allows country profiles; not a licence |
| Institution should be **Government-owned** | **PROPOSAL / UNVERIFIED CLAIM** | Concept Note + CLM-004; GAP-007 Partial — model still **not** decided; **not** current authority |
| Tarbiyat Sociotech Foundation as architect/partner **without owning** the school | **PROPOSAL** | Concept Note descriptive summary in MY-001 |
| Residential / 24h culture | **PROPOSAL** | GAP-005 Open; not Core mandate (ADR-0001) |
| Malaysian-controlled / “sovereign” sensitive data | **PROPOSAL / ASSUMPTION** | GAP-006 Open; Core non-mandate |
| Mission Labs / PoC alongside exams | **PROPOSAL** aligned with APPROVED Core ADR-0002 / 0003 / 0016 | Pedagogical; does not create MY legal category |
| “PPP” as school form | **UNVERIFIED** as Act 550 category | No statutory “PPP school” category located in Act 550 |
| Ministry has approved / will approve Tarbiyat | **NOT SUPPORTED** | Portal already disclaims; must remain disclaimed |
| International school / private school as decided form | **ASSUMPTION / UNRESOLVED** | Discussed as options below; **not selected** |

**Rule:** Concept Note language must not silently become current Country Path authority.

---

## 3. Governing instruments reviewed (primary / official)

| ID | Instrument | Authority | URL / locus | Access | Confidence |
|---|---|---|---|---|---|
| MY-LAW-550-BM | Akta Pendidikan 1996 (Akta 550) PDF | MOE / Laws of Malaysia | https://www.moe.gov.my/storage/files/shares/Dasar/Kurikulum%20Kebangsaan/Akta%20550%20-%20Akta%20Pendidikan%201996.pdf | 2026-09-16 | **HIGH** (primary host) |
| MY-LAW-550-EN | Education Act 1996 English compilation | CommonLII / other compilations | https://www.commonlii.org/my/legis/consol_act/ea1996104/ | 2026-09-16 | **HIGH** reading aid — verify Gazette for litigation |
| MY-GUIDE-IPS-FAQ | MOE / BPS FAQ — IPS penubuhan & pendaftaran | KPM Bahagian Pendidikan Swasta | https://www.moe.gov.my/bpswasta-lazim ; https://www.moe.gov.my/institut-pendidikan-swasta | 2026-09-16 | **HIGH** official guidance |
| MY-GUIDE-IS-A3 | GP A3 Penubuhan Sekolah Antarabangsa (04.02.2021) | KPM BPS | https://www.moe.gov.my/storage/files/shares/Bahagian%20dan%20Unit/Bahagian%20Pendidikan%20Swasta/sekolah/garis-panduan-4/GP%20A3%20Penubuhan%20Sekolah%20Antarabangsa%2004022021.pdf | 2026-09-16 | **HIGH** official guideline |
| MY-SVC-IPS-REG | malaysia.gov.my — Registration for Establishing a Private Educational Institution | MyGovernment service listing | https://www.malaysia.gov.my/en/digital-services/registration-for-establishing-a-private-educational-institution | 2026-09-16 | **MEDIUM** (service card; process detail in MOE systems) |
| MY-MITI-IS | MITI services note — International Schools | MITI | https://www.miti.gov.my/miti/resources/Services%20Sector/International_Schools.pdf | 2026-09-16 | **MEDIUM** secondary official summary of MOE role |
| MY-NEWS-2026-BM | Media report — PM statements on BM/History/SPM across streams | The Star (20 Jan 2026) | https://www.thestar.com.my/news/nation/2026/01/20/international-religious-schools-and-uec-stream-must-offer-bm-history-as-subjects-in-spm-says-pm-anwar | 2026-09-16 | **LOW–MEDIUM** — policy signalling; **not** substitute for Gazette/circular |

Secondary commentaries (espact analyses) used only to locate Act structure — **not** treated as statute.

---

## 4. Act 550 architecture (facts)

### 4.1 National Education System categories (s.16)

Three NES categories:

1. **Government** educational institutions  
2. **Government-aided** educational institutions  
3. **Private** educational institutions  

Definitions (Act 550):

- **Government school / institution** — established and **fully maintained by the Minister** under Part IV.  
- **Government-aided** — in receipt of capital grant and full grant-in-aid.  
- **Private school / private educational institution** — a school or educational institution that is **not** government or government-aided.

### 4.2 Expatriate / international schools and the NES (s.15)

The National Education System comprises pre-school through higher education **but shall not include education in expatriate schools or international schools**.

**Implication:** international/expatriate education sits **outside the NES definition**, yet such places remain **educational institutions** generally subject to registration (s.79) and other applicable Act provisions unless expressly exempted. Detailed operating rules for **international schools** appear in MOE guideline GP A3.

### 4.3 Registration (ss.79–86, 102)

- Every educational institution shall be registered (s.79).  
- Application to Registrar General; provisional certificate possible (s.81); registration certificate (s.82).  
- Advertising an unregistered institution is restricted (s.86); unregistered institutions may be closed (s.102).  
- **IMP-001 Hard Blocker:** no enrolment marketing before lawful registration / provisional registration.

### 4.4 National language & National Curriculum (ss.17–19, 74)

- National language (Malay) is main medium in NES institutions except national-type schools / Ministerial exemption (s.17); where another medium is used, national language is a **compulsory subject**.  
- National Curriculum prescribed for schools in the NES (s.18); for **private schools**, compliance is deemed if **core subjects** of the National Curriculum (Schedule) are taught (s.18(3)).  
- Schools prepare pupils for prescribed examinations unless exempted (s.19).  
- Private primary/secondary educational institutions **shall** comply with National Curriculum requirements and prepare pupils for prescribed examinations (s.74).

**Ambiguity to counsel:** exact interaction of s.15 (international/expatriate outside NES) with s.74 (private PEI National Curriculum duty) is **UNRESOLVED** as a pure statutory reading and is practically mediated by MOE international-school guidelines (GP A3) for that subtype. Do **not** invent a universal exemption.

### 4.5 Governance instruments (ss.53–54)

Every educational institution shall have an **instrument of government** providing for a **board of governors** with a chairman (s.53), subject to regulations (s.54).

---

## 5. School-category option map

| Category | Legal basis | Who establishes / operates | Recognition / curriculum posture (evidence) | Tarbiyat compatibility (principle) | Classification |
|---|---|---|---|---|---|
| **A. Government school** | Act 550 Part IV; Minister establishes & fully maintains (ss.27–31, definitions) | **Minister / Government** — not a private founder self-path | Full NES: National Curriculum; prescribed exams; national language rules | Pedagogically possible **if** Government designs/authorises Lab-First delivery **inside** NES constraints — **UNRESOLVED** as to discretion | **PLAUSIBLE WITH MATERIAL CONDITIONS** — requires **Government decision** to establish; not available as private IPS registration alone |
| **B. Government-aided school** | Act 550 definitions + grant architecture | Aided institution receiving capital grant + full grant-in-aid | NES curriculum/exam architecture | Same as A regarding pedagogy vs prescribed outcomes | **PLAUSIBLE WITH MATERIAL CONDITIONS** — aid/status is Government decision; path **UNRESOLVED** for a new Tarbiyat design |
| **C. Private educational institution (national-curriculum private school)** | Act 550 Part VII–VIII; s.73 saving; s.74 NC + exams; MOE IPS penubuhan→pendaftaran | Private company / business / society/organisation per MOE IPS FAQ; establishment approval then registration via JPN / BPS | Must teach NC **core subjects** and prepare for **prescribed examinations** (ss.18(3), 74) | Lab-First / Missions may be compatible as **delivery method** if NC core + exam preparation still met — **HOW vs WHAT** distinction is **partly** supported (outcomes prescribed; delivery method not exhaustively prescribed in Act text) but **UNRESOLVED** without MOE confirmation on Mission intensity | **PLAUSIBLE WITH MATERIAL CONDITIONS** |
| **D. International school (MOE GP A3 subtype of private/international)** | Act 550 s.15 (outside NES definition) + registration; GP A3 | Malaysian-citizen applicant; Malaysian Sdn Bhd; min paid-up capital RM1,000,000; 100% foreign equity stated as allowed under autonomous liberalisation from 31 Mar 2012 (GP A3) | Approved foreign curricula (British / American / Australian / Canadian / IB DP; others need Registrar General approval); accreditation within 5 years; for **Malaysian citizens**: BM, Pendidikan Islam/Moral, Sejarah Malaysia in official timetable (GP A3) | Tarbiyat pedagogy may sit beside approved international curriculum **if** Registrar General accepts programme design — Tarbiyat-as-curriculum is **not** on the approved list → **Registrar General approval required** for non-listed curriculum | **PLAUSIBLE WITH MATERIAL CONDITIONS** |
| **E. Expatriate school** | Named in Act 550 s.15 exclusion with international schools | **UNRESOLVED** detailed current establishment guideline equivalent to GP A3 not lodged in this pack | **UNRESOLVED** | Possibly narrower pupil eligibility historically — **do not assume** without official guideline | **UNRESOLVED** |
| **F. Bespoke “government pilot / PPP / special statute” school** | Not found as a named Act 550 category | Would require **bespoke Government/legislative action** | Unknown until instrument exists | Could be designed to fit Tarbiyat — **not evidenced as available off-the-shelf** | **POSSIBLE SUBJECT TO GOVERNMENT DECISION** / **NOT SUPPORTED** as existing automatic path |
| **G. Unregistered / “innovation campus” without Act 550 registration** | Contradicts s.79 / s.86 / s.102 | N/A | N/A | Incompatible with lawful school operation | **UNLIKELY / INCOMPATIBLE BASED ON CURRENT EVIDENCE** |

**No preferred path is selected.**

---

## 6. Establishment / licensing findings (GAP-001)

### 6.1 Private IPS path (official MOE guidance)

MOE BPS / FAQ (HIGH):

1. **Kelulusan penubuhan** (establishment approval) first — upload via MOE automation (idMe/MOEIS) and State Education Department (JPN).  
2. After establishment approval, **pendaftaran** (registration) with JPN / BPS process.  
3. Owner must be a company under Companies Act / business registration / organisation under Societies Act (wording in MOE FAQ references legacy Acts; current company law is Companies Act 2016 — **counsel to confirm form language**).  
4. Financial capacity evidence required.  
5. Registration requires: establishment approval; premises approvals (local authority, Fire & Rescue, Health); names of governors, teachers, employees; course/subject and facility conditions; prescribed fee.

malaysia.gov.my lists a digital service for private educational institution registration (process duration stated on service card) — treat as **service pointer**, not complete legal procedure.

### 6.2 International school path (GP A3)

Additional material conditions include (non-exhaustive): Malaysian-citizen applicant; Sdn Bhd; RM1m paid-up capital; premises size/classroom minima (numeric in guideline — **country/campus requirement, not Core**); Board of Governors rules; Instrument of Government; curriculum approvals; teacher permits; foreign-teacher EP support letters; non-citizen pupil Home Affairs pathway with MOE support.

### 6.3 Government / government-aided path

Establishment is a **Ministerial / Government function**, not a private registration product. A Concept Note “government-owned school” remains a **proposal** until Government decides to establish/maintain (or aid) such an institution.

### 6.4 GAP-001 status consequence

Research now supplies a **category map + official procedures**. **Category selection and licence grant remain open.** Status → **Partial** (research lodged; pathway not chosen; no licence obtained).

---

## 7. Curriculum & Formal Recognition findings (GAP-002)

Preserve **ADR-0003**: PoC is **additional**; not a substitute legal credential.

| Path | Formal Recognition posture | Key constraints | Unresolved |
|---|---|---|---|
| **Private NC school (C)** | Prepare pupils for **prescribed examinations**; teach NC **core subjects** | National exam architecture applies; transcript/certification follows Malaysian prescribed system | Exact board/subject mapping for Tarbiyat stage design; whether Mission-heavy timetables satisfy “prepare for prescribed examinations” in practice |
| **International (D)** | External curriculum + awarding body (e.g. Cambridge/IB) **if approved**; Malaysian citizens must receive BM, Islamic/Moral, Malaysian History in official timetable (GP A3) | Non-listed curriculum needs Registrar General approval; 5-year international accreditation requirement | Whether a **Tarbiyat-branded curriculum** can be approved; university recognition of chosen awards (do **not** invent); interaction with any later national BM/History/SPM policy beyond GP A3 |
| **Government / aided (A/B)** | NES National Curriculum + prescribed examinations | Full NES language/curriculum architecture | Whether Government would authorise Tarbiyat delivery inside a government school |

**PoC / dual attainment:** legally, Tarbiyat Proof of Capability does **not** appear in Act 550 as a recognised qualification. It may operate as an **additional institutional evidence layer** only if the chosen Formal Recognition route remains intact (ADR-0003).

**Media policy signals (2026)** about wider BM/History/SPM obligations: record as **secondary**; confirm binding instrument before treating as Hard Blocker beyond GP A3.

GAP-002 status → **Partial** (framework mapped by category; no board/exam package selected).

---

## 8. Ownership / operator / governance (GAP-007)

### 8.1 Concept Note “Government-owned”

**Classification:** **PROPOSAL / UNVERIFIED as decided path.**  
**Legal reading:** Government ownership/operation of a **government school** is a Ministerial establishment path, not proven by the Concept Note.  
**PPP:** not located as a statutory school category in Act 550 → **NOT SUPPORTED** as off-the-shelf form; any PPP would be **POSSIBLE SUBJECT TO GOVERNMENT DECISION**.

### 8.2 Private / international operator facts (official guidance)

| Role | Evidence-backed notes |
|---|---|
| **Legal owner** | For IPS/international: company/organisation per MOE rules; international: Sdn Bhd; GP A3 states 100% foreign equity allowed under stated liberalisation policy (confirm current investment policy with counsel/MIDA as needed) |
| **Applicant / liaison** | International: applicant must be Malaysian citizen (may be appointed by owner) |
| **Board of Governors** | Required via instrument of government (Act 550); GP A3: ≥5 odd number incl. Chair; ≥1 Malaysian citizen; principal is Secretary not governor; PDRM screening; permits |
| **Principal / head** | Curriculum administration responsibility (GP A3); teaching permit if teaching |
| **Teachers** | Teaching permits; Islamic Education teachers need State Religious Authority approval where applicable (GP A3) |
| **Tarbiyat Core / IP steward** | **Not** a Malaysian statutory role — Tarbiyat operating design only; must not be confused with proprietor/governors |
| **Mission / partner authority** | Tarbiyat ops (MIS DRAFT context) — subordinate to Malaysian safeguarding/education law |
| **Safeguarding authority** | Country law + school designation — see MY-002 / Child Act overlays |

GAP-007 status → **Partial** (legal role distinctions and private/international constraints mapped; ownership model **not decided**).

---

## 9. Foreign / international participation

| Topic | Finding | Confidence |
|---|---|---|
| Foreign equity in international school company | GP A3 states 100% foreign equity allowed from 31 Mar 2012 under autonomous liberalisation for education services | HIGH for guideline text; confirm current policy with counsel |
| Foreign teachers | Teaching permit + EP support letter via MOE; age/qualification/salary bands in GP A3 | HIGH (guideline) |
| Foreign pupils | MOE support + Home Affairs / Immigration passes (GP A3) | HIGH (guideline) |
| Foreign curriculum providers | Allowed list + Registrar General approval for others; support letter from certification body | HIGH |
| Tarbiyat overseas IP licensor | Corporate/IP design **not** researched here — **UNRESOLVED** counsel item |

---

## 10. National / cultural content

| Requirement | Where evidenced | Scope note |
|---|---|---|
| Bahasa Melayu as main medium or compulsory subject | Act 550 s.17 (NES) | Category-dependent |
| National Curriculum core subjects | Act 550 ss.18, 74 (private primary/secondary) | Private NC path |
| BM + Pendidikan Islam/Moral + Sejarah Malaysia for Malaysian citizens | GP A3 (international schools) | International path |
| Islamic education if ≥5 Muslim pupils | GP A3 (≥2 hours/week in normal hours) | International path |
| Broader SPM BM/History mandates across streams | Media report 2026 | **UNRESOLVED** pending official circular/Gazette confirmation |

Do **not** generalise international-school subject rules to government schools or vice versa.

---

## 11. Tarbiyat learning-model compatibility

| Core feature | Private NC (C) | International (D) | Government (A/B) |
|---|---|---|---|
| Lab-First / Mission-Based | Possible as delivery **if** NC core + exam prep preserved | Possible **if** approved curriculum + GP A3 national subjects for MY citizens preserved | Possible only inside NES + Ministerial operational rules |
| Knowledge Studios | Likely compatible as room/timetable method | Same | Same |
| ADR-0019 Integrated Programme | Compatible in principle; Recognition Season maps to prescribed exam prep | Compatible if external exam calendars respected | Compatible if NES calendar respected |
| Six Worlds / Explore→Produce | Not prohibited by Act text as labels; **must not displace** compulsory subjects/exams | Must fit approved curriculum frame | NES constraints |
| PoC additional layer | Compatible with ADR-0003; not a statutory substitute | Same | Same |
| External Missions / partners | Subject to safeguarding, child-work, premises, and any MOE collaboration approvals (e.g. s.77 joint courses — relevance **UNRESOLVED** for school Missions) | Same + GP A3 visitor/security expectations | Government partnering rules **UNRESOLVED** |

**Distinction supported in part:** Act prescribes **curriculum outcomes / exams / language**, not a minute-by-minute pedagogy ban on laboratories or projects. **Do not infer** unlimited freedom for Mission intensity without MOE confirmation.

---

## 12. GAP-037 re-check (MY-002)

| Question | Result |
|---|---|
| Does MY-002 still fit? | **Yes as general Act 550 people mapping**, with explicit category caveat already present |
| Category overlays needed? | **Yes — add** private-NC vs international overlays (permits, EP, Islamic teacher State approval, governor rules from GP A3) |
| Close GAP-037? | **No** — campus category still unset; human Malaysian legal review still required |
| Status | Remains **Proposed via MY-002 DRAFT — not closed**; strengthen dependency on MY-003 category choice |

---

## 13. IMP-001 Hard-Blocker mapping

| Item | Class |
|---|---|
| Act 550 registration / provisional registration before advertise/enrol | **HARD BLOCKER BEFORE ENROLMENT** |
| Chosen category establishment approval (IPS penubuhan or GP A3 / Ministerial establishment) | **HARD BLOCKER / CATEGORY-DEPENDENT BLOCKER** |
| Formal Recognition route selected & operable (prescribed exams **or** approved international awards + MY citizen subject rules) | **HARD BLOCKER BEFORE ENROLMENT** |
| Lawful teaching permits / teacher registration for teaching staff | **HARD BLOCKER** (see MY-002) |
| Premises approvals (PBT, Bomba, Health) | **HARD BLOCKER** |
| Safeguarding / child-protection capability | **HARD BLOCKER** (IMP-001 + MY law) |
| Operator / governors / instrument of government | **HARD BLOCKER** for private/international; government path uses Ministerial instruments |
| Foreign staff EP (if used) | **CATEGORY-DEPENDENT BLOCKER** before those staff teach |
| Compulsory BM / History / Islamic-Moral elements applicable to category | **CATEGORY-DEPENDENT BLOCKER** |
| Long-term ownership model (GAP-007 residual) | **CONDITIONAL** only if interim lawful operator exists (IMP-001) |
| Exact exam-board packaging detail | **CATEGORY-DEPENDENT** then **CONDITIONAL IMPLEMENTATION** once category chosen |
| PoC external acceptance | **POST-LAUNCH / RESEARCH** (GAP-043) |
| Facility m² minima in GP A3 | **CATEGORY-DEPENDENT** campus requirement if international path chosen — **not Core** |

No IMP-001 architectural rewrite required; Country Path Brief should cite **MY-003**.

---

## 14. Senior-stakeholder option matrix (non-advocacy)

| Category | Legal basis | Operator / ownership | Recognition route | Curriculum constraints | Tarbiyat compatibility | Government action required | Key unresolved | Confidence |
|---|---|---|---|---|---|---|---|---|
| Government school | Act 550 Part IV | Minister establishes/maintains | NES exams/NC | Full NES | Pedagogy possible only if authorised inside NES | **Decide to establish** | Will Government create/operate Tarbiyat? | HIGH statute; LOW project feasibility |
| Government-aided | Act 550 definitions | Aid + governance rules | NES | NES | Same | Grant/aid decision | Availability for new design | MEDIUM |
| Private NC IPS | Act 550 + MOE IPS process | MY company/org; penubuhan→daftar | Prescribed exams + NC core | ss.18(3), 74 | Delivery flexibility **conditional** on exam/NC compliance | Standard MOE approvals (not special statute) | Mission intensity vs exam duty | HIGH process; MEDIUM pedagogy fit |
| International school | Act 550 + GP A3 | Sdn Bhd; MY applicant; foreign equity per guideline | Approved foreign awards + MY subjects for citizens | GP A3 list / RG approval | Fit if curriculum approved; Tarbiyat not pre-listed | MOE establishment/registration under GP A3 | RG acceptance of Tarbiyat programme | HIGH guideline; MEDIUM approval risk |
| Bespoke pilot/PPP/special Act | Not in Act 550 menu | Bespoke | Bespoke | Bespoke | Designable | **High** — new Government instrument | No off-the-shelf path found | LOW as available path |

---

## 15. “Ministry meeting tomorrow” answers

1. **What legal form?** **UNRESOLVED — not selected.** Plausible forms: government school; government-aided; private NC school; international school (GP A3).  
2. **Which Ministry approval?** MOE Registrar General / BPS / JPN for private/international registration; **Ministerial establishment** if government school.  
3. **Which curriculum/qualification?** **UNRESOLVED** until category chosen: Malaysian prescribed exams **or** approved international curriculum + awards.  
4. **Recognised certificates?** Only via the chosen Formal Recognition route — **not** via PoC alone (ADR-0003).  
5. **Exemption from Malaysian curriculum law?** **Not evidenced** as available off-the-shelf; international path uses different approved curricula under MOE guideline, still with MY-citizen subject duties.  
6. **Who owns/operates?** **UNRESOLVED.** Concept Note government-owned = **proposal only**. Private/international paths use company/governors per MOE rules.  
7. **Could government own/partner?** Government school path = Government establishes; PPP/special arrangements = **possible only by Government decision**, not shown as automatic Act 550 product.  
8. **Foreign experts?** Possible under teaching-permit + Employment Pass processes (esp. GP A3 / MY-002) — **not** unrestricted.  
9. **What remains unresolved?** Category choice; ownership model; exact exam/curriculum package; RG treatment of Tarbiyat pedagogy; any bespoke pilot instrument; binding status of later BM/History policy beyond GP A3.  
10. **What must Government decide vs merely approve?** **Decide:** whether to establish a government/aided Tarbiyat school or only regulate a private/international applicant. **Approve/register:** establishment & registration if private/international path pursued. **Do not ask Government to “endorse Tarbiyat Core” as a substitute for registration.**

---

## 16. Legal-review question pack

### Already answered at primary-authority level (still verify current reprints)

- Act 550 NES categories; private PEI existence; mandatory registration; NC core + prescribed exams for private primary/secondary; international/expatriate outside NES definition; instrument of government / governors.  
- MOE IPS penubuhan→pendaftaran outline.  
- GP A3 international school conditions (capital, equity statement, curricula list, MY-citizen subjects, governors, teachers, foreign staff).

### Requires interpretation / counsel

- Precise interaction of s.15 vs s.74 for international schools.  
- Whether intensive Mission-Based timetables satisfy “prepare pupils for prescribed examinations” for private NC schools.  
- Whether Tarbiyat programme can be approved as “other curriculum” under GP A3.  
- Relevance of s.77 (joint courses with external institutions) to Mission partners.  
- Legacy Act citations in MOE FAQ vs Companies Act 2016 forms.

### Requires Ministry confirmation

- Acceptable category for a Lab-First / Mission-Based Tarbiyat pilot.  
- Any experimental/pilot administrative pathway.  
- Current binding circulars on BM/History/SPM for international-school Malaysian citizens beyond GP A3.  
- Facility minima waivers (if any) — do not assume.

### Requires corporate / investment advice

- Optimal vehicle (Sdn Bhd / society / foundation / GLC).  
- Foreign equity/control for non-international IPS (if different from GP A3).  
- IP licensing from overseas Tarbiyat Core entity.

### Depends on final school category

- Exact teacher-registration overlays (MY-002).  
- Exam board package.  
- Residential licensing overlays (GAP-005).  
- Data residency (GAP-006).

---

## 17. Software / ERP impact (no build)

Future Tarbiyat OS should be able to record, without hard-coding a false category:

- institution type / legal category  
- legal operator / governors  
- programme / qualification route  
- regulatory approval / registration IDs  
- teacher legal status / permits  
- compulsory curriculum obligations by pupil citizenship  

---

## 18. Explicit non-claims

This document does **not**:

- obtain or imply MOE approval;  
- select government / private / international as the Tarbiyat path;  
- treat Concept Note ownership language as fact;  
- claim PPP exists as an Act 550 school type;  
- claim PoC is a Malaysian recognised credential;  
- invent fee, tax, land, or immigration permissions beyond cited guidelines.

---

## 19. Evidence catalogue (lodged)

| Evidence ID | Type | Citation | Supports |
|---|---|---|---|
| EV-MY-001-01 | Statute | Act 550 BM MOE PDF | Categories; registration; NC; private PEI |
| EV-MY-001-02 | Statute compilation | Act 550 English CommonLII | English reading of ss.15–19, 73–74, 79–82 |
| EV-MY-001-03 | Official guidance | MOE BPS FAQ / institut pendidikan swasta pages | IPS penubuhan & pendaftaran conditions |
| EV-MY-001-04 | Official guideline | GP A3 International School (04.02.2021) | International path constraints |
| EV-MY-001-05 | Official service card | malaysia.gov.my IPS registration service | Process pointer |
| EV-MY-001-06 | Official summary | MITI International Schools note | MOE as regulator pointer |
| EV-MY-001-07 | Secondary media | The Star 20 Jan 2026 BM/History/SPM remarks | Policy signal only — not Hard Blocker alone |

---

## Revision history

| Version | Date | Notes |
|---|---|---|
| 0.1.0 | 2026-09-16 | Initial DRAFT Country Path research for GAP-001/002/007; GAP-037 re-check; no category selected |
