# ADR Index

| Field | Value |
|---|---|
| Document ID | `DEC-001` |
| Version | `1.17.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-19` |
| Country scope | `UNIVERSAL` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `DEC-TPL`; ADR body files under `docs/13-decisions/adr/` |
| Source documents | Ratification (2026-09-13); Iteration 2–13 ADR drafts; Integrated Developmental Architecture approvals; ADR-0007 APPROVED / GAP-018 Closed (2026-09-17); ADR-0015 APPROVED (2026-09-19) |

## Status key

`PROPOSED` · `DRAFT` · `UNDER REVIEW` · `APPROVED` · `SUPERSEDED` · `REJECTED`

---

## Approved ADRs

| ADR | Title | Status | Version | Path |
|---|---|---|---|---|
| ADR-0001 | Core Educational Model vs Country Implementation | `APPROVED` | `1.0.0` | `docs/13-decisions/adr/ADR-0001-core-vs-country-implementation.md` |
| ADR-0002 | Lab-First and Mission-Based Learning Architecture | `APPROVED` | `1.0.0` | `docs/13-decisions/adr/ADR-0002-lab-first-mission-based.md` |
| ADR-0003 | Formal Examination and Recognition Safety Layer | `APPROVED` | `1.0.0` | `docs/13-decisions/adr/ADR-0003-formal-examination-recognition-safety-layer.md` |
| ADR-0004 | Student Development and Progressive Specialisation Architecture | `APPROVED` | `1.0.0` | `docs/13-decisions/adr/ADR-0004-student-development-progressive-specialisation.md` |
| ADR-0005 | Developmental Stage Boundaries and Major-Minor Entry Architecture | `APPROVED` | `1.0.0` | `docs/13-decisions/adr/ADR-0005-developmental-stage-boundaries-and-major-minor-entry.md` |
| ADR-0006 | Stage Transition, Exploration Floor and Pathway Mobility Architecture | `APPROVED` | `1.0.0` | `docs/13-decisions/adr/ADR-0006-stage-transition-exploration-floor-and-pathway-mobility.md` |
| ADR-0007 | Mission Ecosystem, Authenticity and Institution-in-Residence Architecture | `APPROVED` | `1.0.0` | `docs/13-decisions/adr/ADR-0007-mission-ecosystem-authenticity-and-institution-in-residence.md` |
| ADR-0011 | Six Worlds Capability and Progressive Depth Architecture | `APPROVED` | `1.0.0` | `docs/13-decisions/adr/ADR-0011-six-worlds-capability-and-progressive-depth-architecture.md` |
| ADR-0015 | Practitioner–Educator–Mentor Faculty Architecture | `APPROVED` | `1.0.0` | `docs/13-decisions/adr/ADR-0015-practitioner-educator-mentor-faculty-architecture.md` |
| ADR-0016 | Proof of Capability and Capability Evidence Architecture | `APPROVED` | `1.0.0` | `docs/13-decisions/adr/ADR-0016-proof-of-capability-and-capability-evidence.md` |
| ADR-0017 | Discover Meaningful Exposure Package Architecture | `APPROVED` | `1.0.0` | `docs/13-decisions/adr/ADR-0017-discover-meaningful-exposure-package.md` |
| ADR-0018 | Discover → Choose Pathway Preparation Architecture | `APPROVED` | `1.0.0` | `docs/13-decisions/adr/ADR-0018-discover-choose-pathway-preparation-architecture.md` |
| ADR-0019 | Learning-Time Architecture | `APPROVED` | `1.0.0` | `docs/13-decisions/adr/ADR-0019-learning-time-architecture.md` |
| ADR-0020 | Campus and Facilities Functional Architecture | `APPROVED` | `1.0.0` | `docs/13-decisions/adr/ADR-0020-campus-and-facilities-functional-architecture.md` |

Companion approved foundation document: `docs/00-foundation/CONCEPT_CONSTITUTION.md` (`FND-003`, v1.0.0, `APPROVED`).

Historical directions that must not be restored: `docs/12-evidence/SUPERSEDED_CONCEPTS.md`.

---

## Under review

| ADR | Title | Status | Version | Path |
|---|---|---|---|---|
| ADR-0014 | Student Creator Rights, Intellectual Property, Innovation and Micro-Venture Architecture | `UNDER REVIEW` | `0.1.1` | `docs/13-decisions/adr/ADR-0014-student-creator-rights-ip-innovation-micro-venture.md` |

**ADR-0004** (`APPROVED` v1.0.0) defines Explore→Discover→Choose→Deepen→Produce operationally; Exploration Floor principle; reversibility; Major+Minor in principle; pathway discovery process. Does **not** set age bands (see ADR-0005).

**ADR-0005** (`APPROVED` v1.0.0) adopts typical developmental windows, overlapping transitions, readiness principle, and formal Major+Minor entry at Deepen (provisional concentration in Choose). Does **not** map Malaysian Years. Evidence pack: `EV-0001`. **Closes `GAP-003`, `GAP-004`, `GAP-021`.**

**ADR-0006** (`APPROVED` v1.0.0) adopts stage transition (window + readiness + student voice + human review); dominant-stage/overlap as Core; Exploration Floor as protected dimensions (no Core fixed %); pathway bridging and proportional mobility governance. Does **not** map Malaysian Years or set timetable percentages. **Closes `GAP-019`, `GAP-020`.**

**ADR-0007** (`APPROVED` v1.0.0) defines governed Mission Ecosystem; Mission vs Activity/Project; authenticity levels A–F; Strategic Capability Missions; Institution-in-Residence; Education-First / no exploitation; Mission Educationalisation and lifecycle; Campus Live Workflow; Deployment Boundary. Depends on FND-003 / ADR-0001–0006 / 0011 / 0016 / 0019 / 0020 (APPROVED); uses ADR-0014 as under-review context only; ADR-0015 now APPROVED. Does **not** invent Malaysian partnerships, IP ownership, PoC ops schemas or strategic-sector Core lists. **Closes `GAP-018`.** MIS-001–003 remain DRAFT (`GAP-022`–`024` not closed).

**ADR-0011** (`APPROVED` v1.0.0) defines Six Worlds as capability/mission domains (not career tracks or subject lists); World capability frames; Capability Depth Ladder (Encounter→Inquire→Apply→Integrate→Advance→Contribute) distinct from developmental stages; Discover meaningful exposure across all Worlds; provisional concentration; Major+Minor within/across Worlds; Cross-World Capabilities vs World-Specific; Cross-World Missions; no prestige hierarchy; Graph boundary kept at `GAP-009`. **Closes `GAP-008`.** Opened `GAP-045`–`GAP-047` (045/046 Closed by ADR-0017/0018; 047 remains Open).

**ADR-0014** proposes Student Creator Rights; educational recognition vs legal ownership; outcome classification; Contribution Records; Background/Mission/Joint IP; Surprise Innovation; Creator Rights Review; optional Micro-Venture; benefit-sharing principles without Core %. Depends on ADR-0007 (now APPROVED). Does **not** invent country IP law, ownership percentages, contracts or PoC schemas. **Not APPROVED.** Proposed resolution of `GAP-025` — not closed. Downstream: `GAP-026`–`GAP-031`; MY feasibility remains `GAP-011`.

**ADR-0015** (`APPROVED` v1.0.0) defines Practitioner–Educator–Mentor as peer faculty **functions** (not tiers) inside professional learning teams; Technical/Lab Professionals as supporting workforce (not a fourth faculty function); Specialist Services kept distinct from Mentor; proportional Mission Teams; Mission Educationalisation shared responsibility; multi-stream assessment; pathway non-monopoly; practitioner currency / educator development / practitioner onboarding / mentor preparation principles; Institution-in-Residence ≠ automatic faculty; authorisation asymmetry (Practitioner scoped PA ≠ Educator/Mentor Core PA ladders). Depends on FND-003 / ADR-0001–0007 / 0011 / 0016 / 0019 / 0020 (APPROVED); uses ADR-0014 as under-review context only. Does **not** set ratios, invent country registration law or close ops gaps. People operating standards `PEO-001`–`PEO-005` (DRAFT) remain proposed resolutions of `GAP-032`–`036` — **not closed**. `GAP-037` via `MY-002` DRAFT — **not closed**.

**ADR-0016** (`APPROVED` v1.0.0) defines evidence-backed human-governed Proof of Capability Profile; Capability Claims; Proof ≠ Participation; Direct/Supporting/Context evidence; Contribution Records; independence context (descriptive); productive failure; multi-source verification; Capability Defence (proportional); AI disclosure without banning AI; provenance; Sanitised Verified Evidence; longitudinal growth without permanent deficit labels; no universal composite score; AI non-certification; Competency Graph kept distinct (`GAP-009`); Six Worlds evidence parity; workload practicality. Depends on ADR-0003 (APPROVED) and ADR-0007 (APPROVED) / 0015 (APPROVED) / 0014 (still `UNDER REVIEW`); ADR-0004–0006 portability (APPROVED). Does **not** claim legal qualification status, invent Graph schemas or blockchain. **Closes `GAP-010`.** Operating companions `POC-001` / `POC-FRM-*` remain DRAFT; `GAP-038`–`GAP-044` proposed / Open / Partial — **not closed** (`GAP-043` research remains Open).

**ADR-0017** (`APPROVED` v1.0.0) defines Discover Meaningful Exposure Package; five-part Meaningful Exposure Test (Context; Active Engagement; World-Relevant Practice; Reflection; Trace); All-Six-Worlds Entitlement without equal-time/six-course mandates; Cross-World counting only where learner work is substantively World-relevant; stage ≠ capability depth; no early identity lock-in; Choose as provisional concentration; Exposure Evidence ≠ PoC Claims; Graph boundary at `GAP-009`; human-governed guidance; equal dignity and resource-feasible designs. **Closes `GAP-045`.** Preserves `GAP-009`, `GAP-047` open.

**ADR-0018** (`APPROVED` v1.0.0) defines Discover→Choose Pathway Preparation Architecture; guided developmental transition (not career pass/fail gate); provisional concentration without forced single World; multi-input human-governed guidance without one score; Interest ≠ Capability; Exposure ≠ pathway readiness; PoC informs but is not a universal Choose prerequisite; Provisional Concentration Plan as revisable orientation artefact (not credential/PoC); reversibility; breadth continuity without equal-time mandate; equity, equal dignity and safety/ethics; scenario tests A–N. **Closes `GAP-046`.** Preserves `GAP-009`, `GAP-047` open; fine Major/Minor catalogues deferred.

**ADR-0019** (`APPROVED` v1.0.0) defines Learning-Time Architecture: Learning-Time Modes; Integrated Programme Principle (anti-double-workload); Primary Organising Logic Test (anti-project-day); Knowledge Studio / Recognition Season safeguards; discipline integration vs focused-instruction rules; Six Worlds scheduling without six subjects; stage learning-time postures without Core %; capacity-coupled intensity; non-normative day examples. **Closes `GAP-016`.** `GAP-048` remains Open for stage-package exemplars / pilot planning ranges.

**ADR-0020** (`APPROVED` v1.0.0) defines Campus and Facilities Functional Architecture: campus as governed environment system (including external access); facility families; Essential/Shared/External/Expandable/Country classification; Six Worlds without six labs; Mission risk/authenticity facility implications; ADR-0019 spatial compatibility; capacity-coupled facilities; safeguarding/partner-access; Explore→Produce facility progression; Minimum Viable Tarbiyat Campus; anti-theatre rules; resource-constrained adaptation. **Closes `GAP-049`.** `GAP-050` remains Open for phased inventories / pilot schedules.

---

## Proposed ADRs (not yet drafted as body files)

| ADR | Title | Status | Notes |
|---|---|---|---|
| ADR-0008 | Residential/boarding model is country/project decision | PROPOSED | **Core non-mandate APPROVED via ADR-0001**; Malaysia/project choice still open (GAP-005) |
| ADR-0009 | Data-sovereignty architecture is country/project decision | PROPOSED | **Core non-mandate APPROVED via ADR-0001**; Malaysia/project choice still open (GAP-006) |
| ADR-0010 | (reserved) | PROPOSED | See prior index notes |
| ADR-0012 | Oman materials as reference only (no auto-import) | PROPOSED | Number reassigned from former ADR-0006 slot; largely reinforced by ADR-0001 APPROVED; body may be brief confirmation |
| ADR-0013 | (reserved) | PROPOSED | See prior index notes |
