# Mission Operating Templates

| Field | Value |
|---|---|
| Document ID | `MIS-TPL-001` |
| Version | `0.1.2` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-15` |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `MIS-001`–`MIS-002` DRAFT; `MIS-003` APPROVED; `ADR-0007` / `ADR-0014` / `ADR-0015` APPROVED; `FND-003` APPROVED |
| Related gaps | GAP-031 (this pack); GAP-022–024; GAP-033 (`PEO-001` / `MIS-FRM-007`); GAP-035 (`PEO-002` / `MIS-FRM-008`); GAP-026 (country IP mapping remains open) |
| Source documents | MIS-001 / MIS-002 / MIS-003; ADR-0007 Deployment Boundary; ADR-0014 Creator Rights; Human-Readiness Review of Mission Operating System (2026-09) |

> **Authority note:** These are **operational educational records / templates**. They implement architecture already stated in MIS-001–003 and related ADRs. `MIS-003` is **APPROVED**; `MIS-001` / `MIS-002` remain **DRAFT**. Templates are **not** legal contracts and do **not** replace country-required safeguarding, privacy, IP, labour, clinical, insurance or contracting documents.

---

## 1. Purpose

Make MIS-001 (partner governance), MIS-002 (Institution / Industry-in-Residence) and MIS-003 (Mission risk / safeguarding) **usable in practice** with **minimum control + maximum clarity**.

This pack proposes resolution of **GAP-031**. It does **not** invent new educational architecture, ownership rules, age thresholds, staffing ratios, revenue percentages or approval authorities.

---

## 2. Design principle

| Prefer | Avoid |
|---|---|
| One Unified Partner Pack for normal external Missions | One form per architectural concept |
| Conditional annexes only when triggered | Mandatory IP/data/conflict paperwork for every trivial Mission |
| Fields that implement existing MIS/ADR decisions | Silent new policy inside forms |
| Educational records | Legal boilerplate |

**Clinical / prohibited activities cannot be waived by completing a form** (MIS-003).

---

## 3. Template ID convention

Section 06 standards use `MIS-00N`. This pack extends that namespace:

| Pattern | Use |
|---|---|
| `MIS-TPL-001` | This index / operating guide |
| `MIS-FRM-00N` | Individual operational records / templates |

No prior `MIS-FRM` series existed; numbering starts at 001.

---

## 4. Pack structure (smallest usable set)

### Core / default (use as needed)

| ID | Template | Classification | Path |
|---|---|---|---|
| **MIS-FRM-001** | Unified Mission Partner Pack | **MANDATORY CORE RECORD** for significant external Missions | [`templates/MIS-FRM-001-unified-mission-partner-pack.md`](templates/MIS-FRM-001-unified-mission-partner-pack.md) |
| **MIS-FRM-002** | Practitioner Onboarding Acknowledgement | **MANDATORY CORE RECORD** when external adults have regular/direct learner engagement | [`templates/MIS-FRM-002-practitioner-onboarding-acknowledgement.md`](templates/MIS-FRM-002-practitioner-onboarding-acknowledgement.md) |
| **MIS-FRM-003** | Expanded Mission Risk Record | **CONDITIONAL RECORD** for elevated risk (typically R2+) or when basic R0/R1 screen triggers expansion | [`templates/MIS-FRM-003-expanded-mission-risk-record.md`](templates/MIS-FRM-003-expanded-mission-risk-record.md) |
| **MIS-FRM-004** | I-in-R Designation Record | **CONDITIONAL RECORD** only when seeking Institution / Industry-in-Residence status | [`templates/MIS-FRM-004-iinr-designation-record.md`](templates/MIS-FRM-004-iinr-designation-record.md) |

### Conditional annex pack (one controlled collection)

| ID | Template | Classification | Path |
|---|---|---|---|
| **MIS-FRM-005** | Conditional Annex Pack — IP / Data / Contribution / Conflict | **CONDITIONAL RECORD** — complete only triggered sections | [`templates/MIS-FRM-005-conditional-annexes.md`](templates/MIS-FRM-005-conditional-annexes.md) |

Internal annex labels: **005-A** IP / Creator Rights · **005-B** Data / Access · **005-C** Contribution · **005-D** Conflict Disclosure.

### Escalation / post-Mission pack

| ID | Template | Classification | Path |
|---|---|---|---|
| **MIS-FRM-006** | Escalation Records — Deployment Review + Suspension / Exit + Stop-Work / Incident / Restart | **CONDITIONAL RECORD** | [`templates/MIS-FRM-006-deployment-and-exit.md`](templates/MIS-FRM-006-deployment-and-exit.md) |

Internal labels: **006-A** Deployment Review · **006-B** Suspension / Exit · **006-C** Stop-Work / Incident / Restart.

### Practitioner authorisation (GAP-033)

| ID | Template | Classification | Path |
|---|---|---|---|
| **MIS-FRM-007** | Practitioner Authorisation Record | **CONDITIONAL / CORE OPERATING RECORD** — scoped permissions beyond one-off Guest presence; pairs with FRM-002 | [`templates/MIS-FRM-007-practitioner-authorisation-record.md`](templates/MIS-FRM-007-practitioner-authorisation-record.md) |
| **MIS-FRM-008** | Practitioner Currency Review | **CONDITIONAL RECORD** — scheduled / change / inactivity / incident reviews (`PEO-002`) | [`templates/MIS-FRM-008-practitioner-currency-review.md`](templates/MIS-FRM-008-practitioner-currency-review.md) |

Architecture: `PEO-001` / `PEO-002` (`docs/08-people-and-governance/`). Faculty/practitioner **development** plans live under `PEO-003` / `PEO-FRM-001` (not MIS-FRM). Mission Team **capacity checks** live under `PEO-004` / `PEO-FRM-002`.

### Country / implementation

| Class | Examples |
|---|---|
| **COUNTRY / IMPLEMENTATION RECORD** | Statutory background checks; privacy notices; contracts; insurance certificates; clinical licences; minor-consent instruments under national law |

Core templates leave space for these; they do **not** invent them.

---

## 5. When to use what (quick map)

| Situation | Likely records |
|---|---|
| Low-risk external brief (e.g. local designer poster Mission) | FRM-001 (+ basic R0/R1 inside it); FRM-002 if recurring direct contact |
| Elevated equipment / field / partner / data risk | FRM-001 + FRM-003 (+ FRM-002 if needed) |
| Restricted data / credentials / sensitive datasets | FRM-001 + FRM-005-B (+ often FRM-003) |
| Partner Background IP / foreseeable learner IP / confidentiality | FRM-001 + FRM-005-A (+ Contribution 005-C if multi-contributor) |
| Material conflict | FRM-005-D |
| Seeking I-in-R | FRM-004 (after MIS-001 compliance) |
| Moving beyond educational prototype | FRM-006-A |
| Practitioner scoped permissions / regular learner work | FRM-002 + FRM-007 (`PEO-001`) |
| Currency / re-authorisation review | FRM-008 (`PEO-002`); renew ≠ expand |
| Partner pause / downgrade / breach | FRM-006-B |
| Stop-work / incident / near miss / restart | FRM-006-C |

---

## 6. Simple Mission path (smoke test)

**Example:** Local designer gives Creative learners a real poster / visual-communication brief.

| Record | Needed? |
|---|---|
| MIS-FRM-001 | Yes |
| Basic R0/R1 inside FRM-001 | Yes (usually R0–R1) |
| MIS-FRM-002 | Only if regular/direct learner engagement |
| MIS-FRM-003 | No (unless elevated) |
| MIS-FRM-004 | No |
| MIS-FRM-005 | Usually no (unless special rights / identifiable media issues) |
| MIS-FRM-006 | No if output stays ordinary educational / normally governed publication |

---

## 7. Complex Mission path (smoke test)

**Example:** Water-technology company + live campus sensor network.

Likely: FRM-001 · FRM-002 · FRM-003 · FRM-005-B · possibly FRM-005-A · FRM-006-A before live deployment · FRM-004 **only** if sustained relationship seeks I-in-R.

---

## 8. Health Mission path (smoke test)

**Example:** Public-health community survey (non-clinical).

Likely: FRM-001 · FRM-003 if privacy/field risk elevated · FRM-005-B · FRM-002 if external adults engage learners regularly.

**Clinical practice remains prohibited / restricted per MIS-003.** No template field waives this.

---

## 9. Creative / media path (smoke test)

**Example:** Documentary with identifiable minors.

Likely: FRM-001 · risk controls (FRM-001 screen and/or FRM-003) · FRM-005-B (consent/media/privacy implementation hooks) · FRM-005-A where Creator Rights material · FRM-006-A before public deployment / publication beyond ordinary educational use.

Do **not** treat copyright as blanket school ownership (ADR-0014).

---

## 10. Document-control fields (common)

Each template carries light metadata:

- template ID / version / status (`DRAFT`)
- related Mission / partner identifiers
- date
- owner / reviewer
- review or update note where useful

Avoid bureaucratic metadata overload.

---

## 11. Related documents

- `MIS-001` Mission Partner Governance
- `MIS-002` Institution / Industry-in-Residence
- `MIS-003` Mission Risk and Safeguarding
- ADR-0007, ADR-0014, ADR-0015 (UNDER REVIEW)
- `GAP_REGISTER.md` — GAP-031

---

## 12. Explicit non-claims

This pack does **not**:

- approve governing ADRs or close GAP-022–025;
- close GAP-031 until human review and governing-ADR path justify closure;
- substitute for country legal contracts;
- invent ownership outcomes, fixed revenue shares or new risk classes;
- authorise unlicensed clinical, offensive cyber or exploitative commercial work.
