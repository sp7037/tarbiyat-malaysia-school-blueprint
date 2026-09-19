# Mission Operating Templates

| Field | Value |
|---|---|
| Document ID | `MIS-TPL-001` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Date | `2026-09-15` |
| Approved | `2026-09-19` |
| Last reviewed | `2026-09-19` |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `MIS-001` APPROVED; `MIS-002` APPROVED; `MIS-003` APPROVED; `ADR-0007` / `ADR-0014` / `ADR-0015` / `ADR-0016` APPROVED; `FND-003` APPROVED; `PEO-001` / `PEO-002` DRAFT (do not close GAP-033 / 035); `POC-001` DRAFT; country overlays DRAFT (`GAP-026` / MY) |
| Related gaps | Closes GAP-031 for Core Mission operating records; GAP-033 / 035 remain open (`MIS-FRM-007` / `008` stay DRAFT with PEO); GAP-026 country IP mapping remains open |
| Source documents | MIS-001 / MIS-002 / MIS-003; ADR-0007 Deployment Boundary; ADR-0014 Creator Rights; Phase 2 Mission Operating Templates human review (2026-09-19) |

> **Authority note:** This is an **APPROVED Core operating-tool index**. Forms `MIS-FRM-001`–`006` are APPROVED educational operating records implementing APPROVED MIS-001 / MIS-002 / MIS-003. Forms `MIS-FRM-007`–`008` remain **DRAFT** because they implement DRAFT PEO-001 / PEO-002. Templates are **not** legal contracts and do **not** replace country-required safeguarding, privacy, IP, labour, clinical, insurance or contracting documents. Completing a form cannot waive R4 prohibitions, create partner Practitioner status, grant PoC certification authority, or transfer learner IP.

## Revision history

| Version | Date | Notes |
|---|---|---|
| 0.1.0–0.1.2 | 2026-09-14–15 | Initial DRAFT pack; MIS-001–003 alignment |
| 0.1.2 | 2026-09-19 | Entered Phase 2 human review (constitutes `UNDER REVIEW` under `PROJECT_RULES` §6) |
| 1.0.0 | 2026-09-19 | APPROVED after Phase 2 human review; closes GAP-031 for Core Mission records; substantive operating corrections (workflow map, change control, completion/closure, anti-theatre / media / recruitment / facilities screens); FRM-007/008 remain DRAFT with PEO |

---

## 1. Purpose

Make APPROVED MIS-001 / MIS-002 / MIS-003 **usable in practice** with **minimum control + maximum clarity**.

An operator should be able to take a proposed Mission / Mission Partner / I-in-R relationship through:

proposal → screening → educational-value determination → role/scoping → risk review → data/IP decisions → approval → operating brief → delivery → change/escalation → evidence/PoC interaction → closure/exit → record retention

without inventing missing policy, weakening approved policy, or granting partners rights not present in MIS-001/002/003.

This pack resolves **GAP-031** for Core Mission operating / Creator Rights expectation records. It does **not** invent ownership rules, age thresholds, staffing ratios, revenue percentages or approval authorities.

---

## 2. Design principle

| Prefer | Avoid |
|---|---|
| One Unified Partner Pack for significant external Missions | One form per architectural concept |
| Conditional annexes only when triggered | Mandatory IP/data/conflict paperwork for every trivial Mission |
| Fields that implement existing MIS/ADR decisions | Silent new policy inside forms |
| Educational records | Legal boilerplate |
| Progressive disclosure by depth/risk | Universal heavy bureaucracy |

**Clinical / prohibited activities cannot be waived by completing a form** (MIS-003).

---

## 3. Template ID convention

| Pattern | Use |
|---|---|
| `MIS-TPL-001` | This index / operating guide |
| `MIS-FRM-00N` | Individual operational records / templates |

---

## 4. Pack structure and statuses

### APPROVED Mission operating records

| ID | Template | Classification | Path |
|---|---|---|---|
| **MIS-FRM-001** | Unified Mission Partner Pack | **MANDATORY** for significant external Missions; lighter path for Guest/Visiting Expert | [`templates/MIS-FRM-001-unified-mission-partner-pack.md`](templates/MIS-FRM-001-unified-mission-partner-pack.md) |
| **MIS-FRM-002** | Practitioner Onboarding Acknowledgement | **MANDATORY** when external adults have regular/direct learner engagement | [`templates/MIS-FRM-002-practitioner-onboarding-acknowledgement.md`](templates/MIS-FRM-002-practitioner-onboarding-acknowledgement.md) |
| **MIS-FRM-003** | Expanded Mission Risk Record | **CONDITIONAL** — elevated risk (typically R2+) or FRM-001 trigger | [`templates/MIS-FRM-003-expanded-mission-risk-record.md`](templates/MIS-FRM-003-expanded-mission-risk-record.md) |
| **MIS-FRM-004** | I-in-R Designation Record | **CONDITIONAL** — only when seeking I-in-R | [`templates/MIS-FRM-004-iinr-designation-record.md`](templates/MIS-FRM-004-iinr-designation-record.md) |
| **MIS-FRM-005** | Conditional Annex Pack — IP / Data / Contribution / Conflict | **CONDITIONAL** — triggered sections only | [`templates/MIS-FRM-005-conditional-annexes.md`](templates/MIS-FRM-005-conditional-annexes.md) |
| **MIS-FRM-006** | Escalation Records — Deployment + Exit + Stop-Work + Completion | **CONDITIONAL** | [`templates/MIS-FRM-006-deployment-and-exit.md`](templates/MIS-FRM-006-deployment-and-exit.md) |

Internal annexes: **005-A** IP · **005-B** Data · **005-C** Contribution · **005-D** Conflict · **006-A** Deployment · **006-B** Suspension/Exit · **006-C** Stop-Work/Incident/Restart · **006-D** Completion/Closure.

### DRAFT People-linked records (not approved by this pack)

| ID | Template | Classification | Path |
|---|---|---|---|
| **MIS-FRM-007** | Practitioner Authorisation Record | **DRAFT** — implements DRAFT `PEO-001` (GAP-033) | [`templates/MIS-FRM-007-practitioner-authorisation-record.md`](templates/MIS-FRM-007-practitioner-authorisation-record.md) |
| **MIS-FRM-008** | Practitioner Currency Review | **DRAFT** — implements DRAFT `PEO-002` (GAP-035) | [`templates/MIS-FRM-008-practitioner-currency-review.md`](templates/MIS-FRM-008-practitioner-currency-review.md) |

**Organisation approval ≠ individual adult authorisation.** Use FRM-002 for educational onboarding acknowledgement now. Scoped PA bands / currency remain PEO DRAFT — do not treat FRM-007/008 as approved policy.

### Country / implementation

Statutory background checks; privacy notices; contracts; insurance; clinical licences; minor-consent instruments — **COUNTRY / IMPLEMENTATION**. Core templates leave space; they do not invent them.

---

## 5. End-to-end workflow (operator map)

| Step | Question | Record |
|---|---|---|
| 1 Start | External organisation / significant external Mission proposed? | Open **MIS-FRM-001** |
| 1b Internal Mission | No external partner / only visitor talk? | School Mission brief / visitor controls; FRM-001 **not** mandatory |
| 2 Screen partner | Educational value, conflicts, commercial motive, role? | FRM-001 A–D (+ 005-D if conflict) |
| 3 Anti-theatre | Why partner / why not guest only? Prestige≠value? | FRM-001 C |
| 4 Risk | MIS-003 class / controls? | FRM-001 G; elevate → **FRM-003** |
| 5 Data / IP / media | Sensitive data, IP, photography, branding, recruitment? | FRM-001 E–F + triggers → **FRM-005** / conditions |
| 6 Adults | Regular/direct learner engagement? | **FRM-002**; scoped permissions → FRM-007 (**DRAFT**/PEO) |
| 7 I-in-R | Sustained embedding sought? | **FRM-004** after MIS-001 compliance |
| 8 Approve | Who decides Proceed / Conditions / Defer / Reject? | FRM-001 H (school educational approval) |
| 9 Operate | Working brief during delivery? | Approved FRM-001 (+ annexes) **is** the operating brief |
| 10 Change | Scope / site / people / data / IP / media change? | FRM-001 **I** change control → FRM-003 / 005 / 006 as flagged |
| 11 Incident | Stop-work / safeguarding / breach? | **FRM-006-C** (+ MIS-003) |
| 12 Deploy | Beyond educational prototype? | **FRM-006-A** |
| 13 Exit / fail | Partner pause / I-in-R downgrade / breach? | **FRM-006-B** |
| 14 Complete | Mission finished successfully / closed? | **FRM-006-D** |
| 15 Evidence | Partner feedback vs certification? | FRM-001 D / FRM-002 — critique ≠ PoC certification (ADR-0016) |

---

## 6. When to use what (quick map)

| Situation | Likely records |
|---|---|
| Guest talk / one-off Visiting Expert (low depth) | Visitor controls; optional light FRM-001 fields; FRM-002 usually no |
| Low-risk significant external Mission | FRM-001 (+ basic R0/R1); FRM-002 if recurring direct contact |
| Elevated equipment / field / partner / data risk | FRM-001 + FRM-003 (+ FRM-002 if needed) |
| Restricted data / credentials / media of minors | FRM-001 + FRM-005-B (+ often FRM-003) |
| Partner Background IP / foreseeable learner IP | FRM-001 + FRM-005-A (+ 005-C if multi-contributor) |
| Material conflict | FRM-005-D |
| Seeking I-in-R | FRM-004 (after MIS-001 compliance) |
| Moving beyond educational prototype | FRM-006-A |
| Material change after approval | FRM-001 I → FRM-003 / 005 / 006 as needed |
| Stop-work / incident / near miss / restart | FRM-006-C |
| Partner pause / downgrade / breach | FRM-006-B |
| Successful completion / formal closure | FRM-006-D |
| Practitioner scoped permissions (beyond Guest) | FRM-002 + FRM-007 (**DRAFT** / `PEO-001`) |
| Currency / re-authorisation | FRM-008 (**DRAFT** / `PEO-002`) |

---

## 7. Smoke tests

### Simple (local designer poster brief)
FRM-001 + basic R0/R1. FRM-002 only if regular direct contact. Usually no FRM-003/004/005/006.

### Complex (water-tech + live campus sensors)
FRM-001 · FRM-002 · FRM-003 · FRM-005-B · possibly 005-A · FRM-006-A before live deployment · FRM-004 only if seeking I-in-R.

### Health (non-clinical community survey)
FRM-001 · FRM-003 if privacy/field elevated · FRM-005-B · FRM-002 if external adults engage regularly. **Clinical practice remains prohibited** (MIS-003).

### Creative / media (documentary with identifiable minors)
FRM-001 · risk screen/FRM-003 · FRM-005-B · FRM-005-A where Creator Rights material · FRM-006-A before public deployment beyond ordinary educational use.

---

## 8. Partner ≠ Practitioner

| Track | Record | Status |
|---|---|---|
| Organisation / partner / I-in-R | FRM-001 / FRM-004 | APPROVED |
| Individual educational onboarding | FRM-002 | APPROVED |
| Scoped Practitioner authorisation bands | FRM-007 | **DRAFT** (PEO-001) |
| Currency / re-authorisation | FRM-008 | **DRAFT** (PEO-002) |

Approved I-in-R does **not** authorise all employees. Unapproved employees sent by an approved organisation must not receive learner access until onboarded / authorised.

---

## 9. Related documents

- `MIS-001` / `MIS-002` / `MIS-003` (APPROVED)
- ADR-0007, ADR-0014, ADR-0015, ADR-0016 (APPROVED)
- `PEO-001` / `PEO-002` (DRAFT)
- `GAP_REGISTER.md` — GAP-031 Closed by this pack for Core Mission records; GAP-033 / 035 / 026 remain open

---

## 10. Explicit non-claims

This pack does **not**:

- rewrite APPROVED MIS-001 / MIS-002 / MIS-003;
- approve `PEO-*`, `POC-*`, `MY-*` or `IMP-001`;
- close GAP-033 / 035 / 026;
- substitute for country legal contracts;
- invent ownership outcomes, fixed revenue shares or new risk classes;
- authorise unlicensed clinical, offensive cyber or exploitative commercial work;
- make a partner a Practitioner, PoC certifier, or automatic IP owner.
