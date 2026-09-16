---
title: Project Progress
description: Completed, under review, pending and deferred architecture work
---

::: tip Portal notice
This portal is a human-readable view of the Tarbiyat architecture repository. Source Markdown documents and approved architectural decisions remain authoritative.
:::

# Project progress

This page separates **document exists** from **decision approved**.  
Statuses are derived from `MASTER_INDEX.md`, ADR metadata, `ADR_INDEX.md`, `GAP_REGISTER.md` and `CHANGELOG.md`.

::: warning Distinction
A section folder or `SECTION_README.md` skeleton does **not** mean the architecture area is complete or approved.
:::

## Workstream board

Documentation evidence by architecture area (not a marketing dashboard):

<WorkstreamBoard />


<div class="progress-section progress-section--approved">

## Completed / Approved

Only formally **APPROVED** governing work:

| Item | Version | Evidence |
|---|---|---|
| [Concept Constitution (FND-003)](/foundation/concept-constitution) | 1.0.0 | `APPROVED` 2026-09-13 |
| [ADR-0001 — Core vs Country Implementation](/decisions/adr-0001) | 1.0.0 | `APPROVED` |
| [ADR-0002 — Lab-First / Mission-Based](/decisions/adr-0002) | 1.0.0 | `APPROVED` |
| [ADR-0003 — Formal Recognition Safety Layer](/decisions/adr-0003) | 1.0.0 | `APPROVED` |
| [ADR-0016 — Proof of Capability](/decisions/adr-0016) | 1.0.0 | `APPROVED` (GAP-010 Closed; GAP-038–044 Open/Proposed) |
| [ADR-0019 — Learning-Time Architecture](/decisions/adr-0019) | 1.0.0 | `APPROVED` (GAP-016 Closed; GAP-048 Open) |
| [ADR-0020 — Campus & Facilities Functional Architecture](/decisions/adr-0020) | 1.0.0 | `APPROVED` (GAP-049 Closed; GAP-050 Open) |
| [Superseded Concepts register](/evidence/superseded-concepts) | — | `APPROVED` (prevents restoration of superseded directions) |

**Closed Core design conflicts** (not Malaysia gaps): exam abolition as Core direction; Competency Graph replacing statutory exams; lab-only extremes; boarding as universal Core mandate; sovereign DC as automatic Core mandate — see [Gap Register — Closed](/gaps).

</div>

<div class="progress-section progress-section--review">

## Under Review / In Progress

| Item | Status | Notes |
|---|---|---|
| [ADR-0004 — Student Development](/decisions/adr-0004) | `UNDER REVIEW` | Stage architecture; Exploration Floor; Major+Minor in principle |
| [ADR-0005 — Stage Boundaries & Major-Minor Entry](/decisions/adr-0005) | `UNDER REVIEW` | Typical windows; formal Major+Minor at Deepen |
| [ADR-0006 — Stage Transition / Exploration Floor / Mobility](/decisions/adr-0006) | `UNDER REVIEW` | Transition rule; protected breadth dimensions; bridging |
| [ADR-0007 — Mission Ecosystem](/decisions/adr-0007) | `UNDER REVIEW` | Authenticity A–F; Institution-in-Residence; Educationalisation |
| [ADR-0011 — Six Worlds Capability / Progressive Depth](/decisions/adr-0011) | `UNDER REVIEW` | World domains; depth ladder; GAP-008 proposed resolution — not closed |
| [ADR-0014 — Student Creator Rights](/decisions/adr-0014) | `UNDER REVIEW` | Creator Rights / IP / Micro-Venture |
| [ADR-0015 — Faculty Architecture](/decisions/adr-0015) | `UNDER REVIEW` | Practitioner–Educator–Mentor; professional teams |
| [ADR-0017 — Discover Meaningful Exposure](/decisions/adr-0017) | `UNDER REVIEW` | Meaningful Exposure Test; All-Six Entitlement; GAP-045 |
| [ADR-0018 — Discover→Choose Pathway Preparation](/decisions/adr-0018) | `UNDER REVIEW` | Guided transition; Provisional Concentration Plan; GAP-046 |
| [Malaysia Implementation Profile](/country/malaysia) | `DRAFT` skeleton | No invented regulations; research gaps open |
| Most foundation companions (Charter, Vision, Glossary, …) | `DRAFT` | Skeletons / incomplete companions |
| Repository indexes (Master Index, Gap Register, Changelog) | `DRAFT` | Operational documents |

</div>

<div class="progress-section progress-section--pending">

## Pending

Known work not yet completed (documentation evidence):

| Area | Why pending | Related |
|---|---|---|
| Six Worlds competency maps | Architecture drafted in ADR-0011; not approved; Discover exposure drafted in ADR-0017; Discover→Choose preparation drafted in ADR-0018 | [GAP-008](/gaps#gap-008), [ADR-0011](/decisions/adr-0011), [ADR-0017](/decisions/adr-0017), [ADR-0018](/decisions/adr-0018), [GAP-045](/gaps#gap-045)–[GAP-047](/gaps#gap-047) |
| Competency Graph specification | Required by dual assessment model | [GAP-009](/gaps#gap-009) |
| Proof of Capability operating detail | POC-001 / POC-FRM-* DRAFT; ADR-0016 APPROVED / GAP-010 Closed; GAP-038–044 proposed (not closed); GAP-043 research Open | [GAP-038](/gaps#gap-038)–[GAP-044](/gaps#gap-044), [ADR-0016](/decisions/adr-0016), [POC-001](/areas/poc-operating-standard) |
| Exploration Floor operationalisation | Principle exists; package TBD | [GAP-019](/gaps#gap-019) |
| Mission authenticity thresholds | Principle exists; gates unset | [GAP-018](/gaps#gap-018) |
| Pathway change bridging standards | Reversibility needs operational detail | [GAP-020](/gaps#gap-020) |
| Weekly time-balance / learning-time architecture | ADR-0019 APPROVED; GAP-016 Closed; campus exemplars / pilot ranges remain open | [ADR-0019](/decisions/adr-0019), [GAP-016](/gaps#gap-016), [GAP-048](/gaps#gap-048), [LAR-001](/areas/learning-time-architecture) |
| Campus & facilities functional architecture | ADR-0020 APPROVED; GAP-049 Closed; numeric inventories / phased programmes remain open | [ADR-0020](/decisions/adr-0020), [CAM-001](/areas/campus-facilities), [GAP-049](/gaps#gap-049), [GAP-050](/gaps#gap-050), [Physical Campus](/areas/campus) |
| First-pilot commissioning / readiness | IMP-001 / IMP-FRM-001 DRAFT; GAP-051 proposed — not closed | [IMP-001](/areas/pilot-commissioning), [GAP-051](/gaps#gap-051), [Implementation](/areas/implementation) |
| Detailed section specs (01–09) | Many still `SECTION_README` shells; §05/06/08/09/11 have operating companions | [Master Index §C](/master-index) |
| Proposed ADRs 0008–0010, 0012–0013 | Indexed; body files not drafted | [ADR Index](/decisions/) |
| Faculty staffing / Mission capacity / Mentor caseload / country role mapping | Architecture + PEO-001–005 drafted; MY-002 Malaysia mapping DRAFT (GAP-037 proposed — not closed) | [GAP-032](/gaps#gap-032)–[GAP-037](/gaps#gap-037), [ADR-0015](/decisions/adr-0015), [PEO-001](/areas/practitioner-authorisation)–[PEO-005](/areas/mentor-caseload-capacity), [MY-002](/country/malaysia-regulated-people) |
| Malaysia licensing / exam / governance research | Must be cited, not invented | [GAP-001](/gaps#gap-001), [GAP-002](/gaps#gap-002), [GAP-007](/gaps#gap-007), … |

</div>

<div class="progress-section progress-section--deferred">

## Deferred

Intentionally postponed or country-specific:

| Item | Notes |
|---|---|
| Full blueprint chapters (lab schedules, financial models, partner MOUs, site plans) | Deferred until after foundation ratification — numeric facility inventories via [GAP-050](/gaps#gap-050); functional campus rules APPROVED in [ADR-0020](/decisions/adr-0020) — [Master Index §H](/master-index) |
| Malaysian Year mapping of developmental stages | Explicitly out of scope for ADR-0005 until Core approval; then country profile |
| Residential / boarding model for Malaysia | Core non-mandate APPROVED; MY choice still open ([GAP-005](/gaps#gap-005)) |
| Data-sovereignty architecture for Malaysia | Core non-mandate APPROVED; MY choice still open ([GAP-006](/gaps#gap-006)) |
| Treating Oman materials as Malaysia defaults | Forbidden by ADR-0001; Oman remains reference only |

</div>

## What should be designed next?

Based on current repository state (not a new architectural decision):

1. Human review of **ADR-0004**, **ADR-0005**, **ADR-0011**, **ADR-0017** and **ADR-0018**
2. Human review of **IMP-001** pilot commissioning pack (`GAP-051`) and parallel Malaysia research with citations (licensing, recognition mapping)
3. After Core student-development / Worlds ratification: Competency Graph (`GAP-009`), Mission tagging (`GAP-047`), mission/assessment ops; close GAP-045/046 only when related ADRs are APPROVED

Continue in: [Roadmap](/roadmap) · [Gaps](/gaps) · [Changelog](/changelog)
