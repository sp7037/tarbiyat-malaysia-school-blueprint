# Master Index

| Field | Value |
|---|---|
| Document ID | `ROOT-INDEX` |
| Version | `0.22.1` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-19` |
| Country scope | `UNIVERSAL` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | Entire repository tree |
| Source documents | Pre-flight; Iteration 1; ratification (2026-09-13); Iteration 2–13 ADR drafts; Core Architecture Phase 1 complete (2026-09-19); MIS-003 first APPROVED operating standard (2026-09-19) |

This is the single map of controlled documents. Update when adding, approving or superseding substantive files.

> **Core Architecture Phase 1 substantially complete: 15 decision ADRs approved.**  
> Remaining programme work: operating standards, country/legal implementation, pilot/evidence, templates/records, software/Tarbiyat OS, and business/economic model — not further UNDER REVIEW Core decision ADRs.
>
> **Operating-standard precedent:** Substantive operating standards (e.g. `MIS-003`) use the existing `PROJECT_RULES` lifecycle (DRAFT → UNDER REVIEW → APPROVED) and require human review. Approval of one operating standard does **not** approve companion MIS/PEO/POC/MY/IMP packs, templates, or country law.

---

## A. Root governance

| ID | Path | Status | Country scope | Notes |
|---|---|---|---|---|
| ROOT-README | `README.md` | DRAFT | CORE+MY | Repository entry point |
| ROOT-RULES | `PROJECT_RULES.md` | DRAFT | UNIVERSAL | Binding agent/human rules |
| ROOT-INDEX | `MASTER_INDEX.md` | DRAFT | UNIVERSAL | This file |
| ROOT-CHANGELOG | `CHANGELOG.md` | DRAFT | UNIVERSAL | Change history |
| ROOT-GAP | `GAP_REGISTER.md` | DRAFT | CORE+MY | Operational gaps |

---

## B. Foundation (`docs/00-foundation/`)

| ID | Path | Status | Country scope | Notes |
|---|---|---|---|---|
| FND-001 | `docs/00-foundation/PROJECT_CHARTER.md` | DRAFT | CORE+MY | Skeleton |
| FND-002 | `docs/00-foundation/VISION_MISSION_OBJECTIVES.md` | DRAFT | CORE | Skeleton |
| FND-003 | `docs/00-foundation/CONCEPT_CONSTITUTION.md` | APPROVED | CORE | v1.0.0 — ratified Core constitution |
| FND-004 | `docs/00-foundation/CORE_DIFFERENTIATORS.md` | DRAFT | CORE | Skeleton |
| FND-005 | `docs/00-foundation/DESIGN_PRINCIPLES.md` | DRAFT | CORE | Skeleton |
| FND-006 | `docs/00-foundation/GLOSSARY.md` | DRAFT | CORE | Skeleton |
| FND-007 | `docs/00-foundation/SECTION_README.md` | DRAFT | CORE | Section guide |

---

## C. Core architecture sections (skeletons)

Most sections contain only `SECTION_README.md` (DRAFT shell). Section **01** adds `LAR-001` learning-time overview. Section **05** adds `POC-001` PoC operating standard and `POC-FRM-*` forms. Section **06** adds `MIS-001`–`MIS-003` and Mission Operating Templates (`MIS-TPL-001` / `MIS-FRM-*`). Section **09** adds `CAM-001` campus/facilities overview. Section **11** adds `IMP-001` pilot commissioning architecture and `IMP-FRM-001`.

| Section | Path | Purpose | Status |
|---|---|---|---|
| 01 Learning architecture | `docs/01-learning-architecture/SECTION_README.md` | Lab-First, Mission-Based, Knowledge Studios; LAR-001 learning-time overview (ADR-0019 APPROVED; GAP-016 Closed; GAP-048 Open) | DRAFT |
| 02 Student journey | `docs/02-student-journey/SECTION_README.md` | Explore→Discover→Choose→Deepen→Produce (ADR-0004–0006 APPROVED); Discover exposure via ADR-0017; Discover→Choose preparation via ADR-0018 | DRAFT |
| 03 Worlds and pathways | `docs/03-worlds-and-pathways/SECTION_README.md` | Six Worlds (ADR-0011 APPROVED); Discover exposure (ADR-0017 APPROVED); Discover→Choose pathway preparation (ADR-0018 APPROVED); Major+Minor; GAP-009/047 remain | DRAFT |
| 04 Curriculum and recognition | `docs/04-curriculum-and-recognition/SECTION_README.md` | Theory-as-tool; exam compatibility (Core) | DRAFT |
| 05 Assessment | `docs/05-assessment/SECTION_README.md` | Competency Graph (GAP-009 Open); Proof of Capability (ADR-0016 APPROVED; GAP-010 Closed); POC-001 / POC-FRM-* DRAFT (GAP-038–044 proposed — not closed) | DRAFT |
| 06 Missions and production | `docs/06-missions-and-production/SECTION_README.md` | Real missions; MIS-001 partner governance; MIS-002 I-in-R; MIS-003 risk/safeguarding APPROVED (GAP-024 Closed); MIS-TPL-001 / MIS-FRM-* templates DRAFT | DRAFT |
| 07 Industry and enterprise | `docs/07-industry-and-enterprise/SECTION_README.md` | Industry-in-Residence narrative; IP; Mission-to-Market (ops cross-link to MIS-001/002) | DRAFT |
| 08 People and governance | `docs/08-people-and-governance/SECTION_README.md` | Roles, governance typology; ADR-0015 faculty architecture; PEO-001–005 authorisation / currency / development / Mission capacity / Mentor caseload | DRAFT |
| 09 Campus blueprint | `docs/09-campus-blueprint/SECTION_README.md` | Functional campus/facilities architecture; CAM-001 overview (ADR-0020 APPROVED; GAP-049 Closed; GAP-050 Open) | DRAFT |
| 11 Implementation | `docs/11-implementation/SECTION_README.md` | Pilot commissioning / readiness (IMP-001 DRAFT; GAP-051 proposed — not closed) | DRAFT |

| ID | Path | Status | Notes |
|---|---|---|---|
| LAR-001 | `docs/01-learning-architecture/LEARNING_TIME_ARCHITECTURE.md` | DRAFT | Learning-time overview companion — governing decision ADR-0019 (`APPROVED`); GAP-016 Closed; GAP-048 Open |
| CAM-001 | `docs/09-campus-blueprint/CAMPUS_AND_FACILITIES_FUNCTIONAL_ARCHITECTURE.md` | DRAFT | Campus/facilities overview companion — governing decision ADR-0020 (`APPROVED`); GAP-049 Closed; GAP-050 Open |
| POC-001 | `docs/05-assessment/PROOF_OF_CAPABILITY_OPERATING_STANDARD.md` | DRAFT | PoC operating standard — proposed GAP-038–042 / 044 resolution (not closed); GAP-043 Open; ADR-0016 APPROVED / GAP-010 Closed |
| POC-TPL-001 | `docs/05-assessment/POC_OPERATING_TEMPLATES.md` | DRAFT | PoC operating templates index |
| POC-FRM-001 | `docs/05-assessment/templates/POC-FRM-001-capability-claim-record.md` | DRAFT | Capability Claim Record (evidence + provenance) |
| POC-FRM-002 | `docs/05-assessment/templates/POC-FRM-002-contribution-record.md` | DRAFT | Contribution Record (PoC) |
| POC-FRM-003 | `docs/05-assessment/templates/POC-FRM-003-verification-record.md` | DRAFT | Verification Record |
| POC-FRM-004 | `docs/05-assessment/templates/POC-FRM-004-capability-defence-record.md` | DRAFT | Capability Defence Record (conditional) |
| POC-FRM-005 | `docs/05-assessment/templates/POC-FRM-005-claim-challenge-correction-record.md` | DRAFT | Claim Challenge / Correction Record |
| MIS-001 | `docs/06-missions-and-production/MISSION_PARTNER_GOVERNANCE.md` | DRAFT | Mission Partner Governance Standard — proposed GAP-022 resolution (not closed) |
| MIS-002 | `docs/06-missions-and-production/INSTITUTION_IN_RESIDENCE.md` | DRAFT | Institution / Industry-in-Residence Operating Standard — proposed GAP-023 resolution (not closed) |
| MIS-003 | `docs/06-missions-and-production/MISSION_RISK_AND_SAFEGUARDING.md` | APPROVED | Mission Risk and Safeguarding Classification — GAP-024 Closed; country overlays / templates remain open |
| MIS-TPL-001 | `docs/06-missions-and-production/MISSION_OPERATING_TEMPLATES.md` | DRAFT | Mission Operating Templates index — proposed GAP-031 resolution (not closed) |
| MIS-FRM-001 | `docs/06-missions-and-production/templates/MIS-FRM-001-unified-mission-partner-pack.md` | DRAFT | Unified Mission Partner Pack |
| MIS-FRM-002 | `docs/06-missions-and-production/templates/MIS-FRM-002-practitioner-onboarding-acknowledgement.md` | DRAFT | Practitioner Onboarding Acknowledgement |
| MIS-FRM-003 | `docs/06-missions-and-production/templates/MIS-FRM-003-expanded-mission-risk-record.md` | DRAFT | Expanded Mission Risk Record |
| MIS-FRM-004 | `docs/06-missions-and-production/templates/MIS-FRM-004-iinr-designation-record.md` | DRAFT | I-in-R Designation Record |
| MIS-FRM-005 | `docs/06-missions-and-production/templates/MIS-FRM-005-conditional-annexes.md` | DRAFT | Conditional annexes (IP / Data / Contribution / Conflict) |
| MIS-FRM-006 | `docs/06-missions-and-production/templates/MIS-FRM-006-deployment-and-exit.md` | DRAFT | Deployment Review + Suspension / Exit |
| MIS-FRM-007 | `docs/06-missions-and-production/templates/MIS-FRM-007-practitioner-authorisation-record.md` | DRAFT | Practitioner Authorisation Record (PEO-001 / GAP-033) |
| MIS-FRM-008 | `docs/06-missions-and-production/templates/MIS-FRM-008-practitioner-currency-review.md` | DRAFT | Practitioner Currency Review (PEO-002 / GAP-035) |
| PEO-001 | `docs/08-people-and-governance/PRACTITIONER_AUTHORISATION_AND_ONBOARDING.md` | DRAFT | Practitioner Authorisation and Onboarding Standard — proposed GAP-033 resolution (not closed) |
| PEO-002 | `docs/08-people-and-governance/PRACTITIONER_CURRENCY_AND_REAUTHORISATION.md` | DRAFT | Practitioner Currency and Re-authorisation Standard — proposed GAP-035 resolution (not closed) |
| PEO-003 | `docs/08-people-and-governance/FACULTY_AND_PRACTITIONER_DEVELOPMENT.md` | DRAFT | Faculty and Practitioner Development Standard — proposed GAP-036 resolution (not closed) |
| PEO-004 | `docs/08-people-and-governance/MISSION_TEAM_LOADING_AND_STAFFING_CAPACITY.md` | DRAFT | Mission Team Loading and Staffing Capacity Standard — proposed GAP-032 resolution (not closed) |
| PEO-005 | `docs/08-people-and-governance/MENTOR_CASELOAD_AND_HUMAN_GUIDANCE_CAPACITY.md` | DRAFT | Mentor Caseload and Human-Guidance Capacity Standard — proposed GAP-034 resolution (not closed) |
| PEO-FRM-001 | `docs/08-people-and-governance/templates/PEO-FRM-001-faculty-practitioner-development-plan.md` | DRAFT | Faculty / Practitioner Development Plan & Record (PEO-003 / GAP-036) |
| PEO-FRM-002 | `docs/08-people-and-governance/templates/PEO-FRM-002-mission-team-capacity-check.md` | DRAFT | Mission Team Capacity Check (PEO-004 / GAP-032) |
| PEO-FRM-003 | `docs/08-people-and-governance/templates/PEO-FRM-003-mentor-caseload-review.md` | DRAFT | Mentor Caseload Review (PEO-005 / GAP-034) |

---

## D. Malaysia implementation (`docs/10-malaysia/`)

| ID | Path | Status | Notes |
|---|---|---|---|
| MY-000 | `docs/10-malaysia/SECTION_README.md` | DRAFT | Profile boundary rules |
| MY-001 | `docs/10-malaysia/MALAYSIA_IMPLEMENTATION_PROFILE.md` | DRAFT | Skeleton profile — points to MY-003 Country Path |
| MY-002 | `docs/10-malaysia/MALAYSIA_REGULATED_PEOPLE_ROLE_MAPPING.md` | DRAFT | GAP-037 Malaysia regulated people/faculty mapping — proposed, not closed; category overlays after MY-003; not legal advice |
| MY-003 | `docs/10-malaysia/MALAYSIA_SCHOOL_ESTABLISHMENT_RECOGNITION_AND_GOVERNANCE_PATH.md` | DRAFT | GAP-001 / 002 / 007 Country Path research — Partial; category **not** selected; not legal advice / not MOE approval |

---

## E. Implementation, evidence, decisions

| ID | Path | Status | Notes |
|---|---|---|---|
| IMP-000 | `docs/11-implementation/SECTION_README.md` | DRAFT | Implementation section guide |
| IMP-001 | `docs/11-implementation/PILOT_COMMISSIONING_AND_READINESS_ARCHITECTURE.md` | DRAFT | First-pilot commissioning / readiness gates (`0.1.1` working baseline) — proposed GAP-051 (not closed) |
| IMP-FRM-001 | `docs/11-implementation/templates/IMP-FRM-001-pilot-readiness-record.md` | DRAFT | Pilot Readiness Record (`0.1.1`) |
| EVD-000 | `docs/12-evidence/SECTION_README.md` | DRAFT | Evidence discipline |
| EVD-001 | `docs/12-evidence/CLAIMS_REGISTER.md` | DRAFT | Claims inventory |
| EVD-002 | `docs/12-evidence/EVIDENCE_REGISTER.md` | DRAFT | Evidence inventory |
| EVD-003 | `docs/12-evidence/RESEARCH_GAPS.md` | DRAFT | Research detail companion to GAP_REGISTER |
| EVD-004 | `docs/12-evidence/SUPERSEDED_CONCEPTS.md` | APPROVED | Prevent restoration of superseded historical directions |
| EV-0001 | `docs/12-evidence/EV-0001-developmental-stage-boundaries.md` | DRAFT | GAP-021 evidence pack for ADR-0005 windows (ADR-0005 APPROVED; GAP-021 Closed) |
| DEC-000 | `docs/13-decisions/SECTION_README.md` | DRAFT | ADR process |
| DEC-001 | `docs/13-decisions/ADR_INDEX.md` | DRAFT | ADR index |
| DEC-TPL | `docs/13-decisions/adr/ADR-TEMPLATE.md` | DRAFT | Template |
| ADR-0001 | `docs/13-decisions/adr/ADR-0001-core-vs-country-implementation.md` | APPROVED | v1.0.0 — Core vs country separation |
| ADR-0002 | `docs/13-decisions/adr/ADR-0002-lab-first-mission-based.md` | APPROVED | v1.0.0 — Lab-First / Mission-Based (not lab-only) |
| ADR-0003 | `docs/13-decisions/adr/ADR-0003-formal-examination-recognition-safety-layer.md` | APPROVED | v1.0.0 — Recognition layer + parallel capability layer |
| ADR-0004 | `docs/13-decisions/adr/ADR-0004-student-development-progressive-specialisation.md` | APPROVED | Student development stages; Exploration Floor; Major+Minor in principle |
| ADR-0005 | `docs/13-decisions/adr/ADR-0005-developmental-stage-boundaries-and-major-minor-entry.md` | APPROVED | Typical stage windows; readiness; Major+Minor entry at Deepen; GAP-003/004/021 Closed |
| ADR-0006 | `docs/13-decisions/adr/ADR-0006-stage-transition-exploration-floor-and-pathway-mobility.md` | APPROVED | Stage transition; Exploration Floor as protected dimensions; pathway bridging; GAP-019/020 Closed |
| ADR-0007 | `docs/13-decisions/adr/ADR-0007-mission-ecosystem-authenticity-and-institution-in-residence.md` | APPROVED | Mission Ecosystem; authenticity A–F; Institution-in-Residence; GAP-018 Closed |
| ADR-0011 | `docs/13-decisions/adr/ADR-0011-six-worlds-capability-and-progressive-depth-architecture.md` | APPROVED | Six Worlds capability / progressive depth; GAP-008 Closed; GAP-047 Open |
| ADR-0014 | `docs/13-decisions/adr/ADR-0014-student-creator-rights-ip-innovation-micro-venture.md` | APPROVED | Student Creator Rights / IP / Micro-Venture; GAP-025 Closed |
| ADR-0015 | `docs/13-decisions/adr/ADR-0015-practitioner-educator-mentor-faculty-architecture.md` | APPROVED | Practitioner–Educator–Mentor faculty functions; teams; PEO-001–005 DRAFT companions; GAP-032–036 proposed (not closed); GAP-037 proposed via MY-002 DRAFT — not closed |
| ADR-0016 | `docs/13-decisions/adr/ADR-0016-proof-of-capability-and-capability-evidence.md` | APPROVED | Proof of Capability / capability evidence; GAP-010 Closed; GAP-038–044 remain open/proposed; POC-001 DRAFT ops companions |
| ADR-0017 | `docs/13-decisions/adr/ADR-0017-discover-meaningful-exposure-package.md` | APPROVED | Discover meaningful exposure package; GAP-045 Closed |
| ADR-0018 | `docs/13-decisions/adr/ADR-0018-discover-choose-pathway-preparation-architecture.md` | APPROVED | Discover→Choose pathway preparation; GAP-046 Closed |
| ADR-0019 | `docs/13-decisions/adr/ADR-0019-learning-time-architecture.md` | APPROVED | v1.0.0 — Learning-time architecture; closes GAP-016; GAP-048 remains Open |
| ADR-0020 | `docs/13-decisions/adr/ADR-0020-campus-and-facilities-functional-architecture.md` | APPROVED | v1.0.0 — Campus & facilities functional architecture; closes GAP-049; GAP-050 remains Open |

---

## F. References (`references/`)

Authoritative originals live here. Working text extracts are non-authoritative.

| Folder | Contents | Treatment |
|---|---|---|
| `references/malaysia/` | Malaysia Concept Note (docx/pdf from `Malaysia_Proposal`) | Primary MY source candidate |
| `references/variants/` | Alternate Downloads copy of Malaysia Concept Note | Variant — resolve GAP-014 |
| `references/oman/` | Oman proposal lineage v early–v5 + embassy pack + portal prototype | Reference only; not MY defaults |
| `references/conceptual-evolution/` | “180 Degree Different School” drafts | Early ideation; high claim risk |
| `references/related-afghanistan/` | Afghanistan drafts + misplaced Oman file | Related / misfile note |
| `references/related-kira-meeting/` | KIRA programme materials | Related programme, not Core by default |
| `references/related-labs-and-programmes/` | Lab equipment lists; Dehradun/Kalam materials | Operational reference fragments |
| `references/working-text-extracts/` | UTF-8 text extracts for search | Non-authoritative |
| `references/working-text-extracts/README.md` | Extract usage rules | DRAFT |

See `references/README.md` for file-level inventory.

---

## G. Outputs

| Path | Purpose | Status |
|---|---|---|
| `outputs/README.md` | Holding area for later compiled packs, decks, checklists | Placeholder |

---

## H. Documents intentionally not yet created

Full blueprint chapters (detailed pedagogy, Malaysia legal memoranda, financial models, partner MOUs, site plans, numeric lab schedules) are deferred until after foundation ratification. Functional campus architecture is APPROVED in ADR-0020; numeric inventories remain `GAP-050`.
