# Master Index

| Field | Value |
|---|---|
| Document ID | `ROOT-INDEX` |
| Version | `0.13.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-14` |
| Country scope | `UNIVERSAL` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | Entire repository tree |
| Source documents | Pre-flight; Iteration 1; ratification (2026-09-13); Iteration 2–10 ADR drafts |

This is the single map of controlled documents. Update when adding, approving or superseding substantive files.

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

Most sections contain only `SECTION_README.md` (DRAFT shell). Section **06** adds `MIS-001`–`MIS-003`.

| Section | Path | Purpose | Status |
|---|---|---|---|
| 01 Learning architecture | `docs/01-learning-architecture/SECTION_README.md` | Lab-First, Mission-Based, Knowledge Studios | DRAFT |
| 02 Student journey | `docs/02-student-journey/SECTION_README.md` | Explore→Discover→Choose→Deepen→Produce; Discover exposure via ADR-0017; Discover→Choose preparation via ADR-0018 (both UNDER REVIEW) | DRAFT |
| 03 Worlds and pathways | `docs/03-worlds-and-pathways/SECTION_README.md` | Six Worlds (ADR-0011); Discover exposure (ADR-0017); Discover→Choose pathway preparation (ADR-0018) — all UNDER REVIEW; Major+Minor | DRAFT |
| 04 Curriculum and recognition | `docs/04-curriculum-and-recognition/SECTION_README.md` | Theory-as-tool; exam compatibility (Core) | DRAFT |
| 05 Assessment | `docs/05-assessment/SECTION_README.md` | Competency Graph; Proof of Capability (ADR-0016 UNDER REVIEW); portfolio | DRAFT |
| 06 Missions and production | `docs/06-missions-and-production/SECTION_README.md` | Real missions; MIS-001 partner governance; MIS-002 I-in-R; MIS-003 risk/safeguarding | DRAFT |
| 07 Industry and enterprise | `docs/07-industry-and-enterprise/SECTION_README.md` | Industry-in-Residence narrative; IP; Mission-to-Market (ops cross-link to MIS-001/002) | DRAFT |
| 08 People and governance | `docs/08-people-and-governance/SECTION_README.md` | Roles, governance typology (non-country); faculty architecture via ADR-0015 UNDER REVIEW | DRAFT |
| 09 Campus blueprint | `docs/09-campus-blueprint/SECTION_README.md` | Generic campus typology | DRAFT |

| ID | Path | Status | Notes |
|---|---|---|---|
| MIS-001 | `docs/06-missions-and-production/MISSION_PARTNER_GOVERNANCE.md` | DRAFT | Mission Partner Governance Standard — proposed GAP-022 resolution (not closed) |
| MIS-002 | `docs/06-missions-and-production/INSTITUTION_IN_RESIDENCE.md` | DRAFT | Institution / Industry-in-Residence Operating Standard — proposed GAP-023 resolution (not closed) |
| MIS-003 | `docs/06-missions-and-production/MISSION_RISK_AND_SAFEGUARDING.md` | DRAFT | Mission Risk and Safeguarding Classification — proposed GAP-024 resolution (not closed) |

---

## D. Malaysia implementation (`docs/10-malaysia/`)

| ID | Path | Status | Notes |
|---|---|---|---|
| MY-000 | `docs/10-malaysia/SECTION_README.md` | DRAFT | Profile boundary rules |
| MY-001 | `docs/10-malaysia/MALAYSIA_IMPLEMENTATION_PROFILE.md` | DRAFT | Skeleton only — no invented regulations |

---

## E. Implementation, evidence, decisions

| ID | Path | Status | Notes |
|---|---|---|---|
| IMP-000 | `docs/11-implementation/SECTION_README.md` | DRAFT | Phasing / commissioning shells |
| EVD-000 | `docs/12-evidence/SECTION_README.md` | DRAFT | Evidence discipline |
| EVD-001 | `docs/12-evidence/CLAIMS_REGISTER.md` | DRAFT | Claims inventory |
| EVD-002 | `docs/12-evidence/EVIDENCE_REGISTER.md` | DRAFT | Evidence inventory |
| EVD-003 | `docs/12-evidence/RESEARCH_GAPS.md` | DRAFT | Research detail companion to GAP_REGISTER |
| EVD-004 | `docs/12-evidence/SUPERSEDED_CONCEPTS.md` | APPROVED | Prevent restoration of superseded historical directions |
| EV-0001 | `docs/12-evidence/EV-0001-developmental-stage-boundaries.md` | DRAFT | GAP-021 evidence pack for ADR-0005 windows (does not approve ADR) |
| DEC-000 | `docs/13-decisions/SECTION_README.md` | DRAFT | ADR process |
| DEC-001 | `docs/13-decisions/ADR_INDEX.md` | DRAFT | ADR index |
| DEC-TPL | `docs/13-decisions/adr/ADR-TEMPLATE.md` | DRAFT | Template |
| ADR-0001 | `docs/13-decisions/adr/ADR-0001-core-vs-country-implementation.md` | APPROVED | v1.0.0 — Core vs country separation |
| ADR-0002 | `docs/13-decisions/adr/ADR-0002-lab-first-mission-based.md` | APPROVED | v1.0.0 — Lab-First / Mission-Based (not lab-only) |
| ADR-0003 | `docs/13-decisions/adr/ADR-0003-formal-examination-recognition-safety-layer.md` | APPROVED | v1.0.0 — Recognition layer + parallel capability layer |
| ADR-0004 | `docs/13-decisions/adr/ADR-0004-student-development-progressive-specialisation.md` | UNDER REVIEW | Student development stages; Exploration Floor; Major+Minor in principle |
| ADR-0005 | `docs/13-decisions/adr/ADR-0005-developmental-stage-boundaries-and-major-minor-entry.md` | UNDER REVIEW | Typical stage windows; readiness; Major+Minor entry at Deepen |
| ADR-0006 | `docs/13-decisions/adr/ADR-0006-stage-transition-exploration-floor-and-pathway-mobility.md` | UNDER REVIEW | Stage transition; Exploration Floor as protected dimensions; pathway bridging/mobility |
| ADR-0007 | `docs/13-decisions/adr/ADR-0007-mission-ecosystem-authenticity-and-institution-in-residence.md` | UNDER REVIEW | Mission Ecosystem; authenticity A–F; Institution-in-Residence; GAP-018 proposed resolution |
| ADR-0011 | `docs/13-decisions/adr/ADR-0011-six-worlds-capability-and-progressive-depth-architecture.md` | UNDER REVIEW | Six Worlds capability / progressive depth; GAP-008 proposed resolution; GAP-045–047 opened |
| ADR-0014 | `docs/13-decisions/adr/ADR-0014-student-creator-rights-ip-innovation-micro-venture.md` | UNDER REVIEW | Student Creator Rights / IP / Micro-Venture; GAP-025 proposed resolution |
| ADR-0015 | `docs/13-decisions/adr/ADR-0015-practitioner-educator-mentor-faculty-architecture.md` | UNDER REVIEW | Practitioner–Educator–Mentor faculty functions; teams; GAP-032–037 opened |
| ADR-0016 | `docs/13-decisions/adr/ADR-0016-proof-of-capability-and-capability-evidence.md` | UNDER REVIEW | Proof of Capability / capability evidence; GAP-010 proposed resolution; GAP-038–044 opened |
| ADR-0017 | `docs/13-decisions/adr/ADR-0017-discover-meaningful-exposure-package.md` | UNDER REVIEW | Discover meaningful exposure package; GAP-045 proposed resolution |
| ADR-0018 | `docs/13-decisions/adr/ADR-0018-discover-choose-pathway-preparation-architecture.md` | UNDER REVIEW | Discover→Choose pathway preparation; GAP-046 proposed resolution |

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

Full blueprint chapters (detailed pedagogy, lab schedules, Malaysia legal memoranda, financial models, partner MOUs, site plans) are deferred until after foundation ratification.
