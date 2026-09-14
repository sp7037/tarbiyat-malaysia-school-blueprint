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

<div class="progress-section progress-section--approved">

## Completed / Approved

Only formally **APPROVED** governing work:

| Item | Version | Evidence |
|---|---|---|
| [Concept Constitution (FND-003)](/foundation/concept-constitution) | 1.0.0 | `APPROVED` 2026-09-13 |
| [ADR-0001 — Core vs Country Implementation](/decisions/adr-0001) | 1.0.0 | `APPROVED` |
| [ADR-0002 — Lab-First / Mission-Based](/decisions/adr-0002) | 1.0.0 | `APPROVED` |
| [ADR-0003 — Formal Recognition Safety Layer](/decisions/adr-0003) | 1.0.0 | `APPROVED` |
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
| [ADR-0014 — Student Creator Rights](/decisions/adr-0014) | `UNDER REVIEW` | Creator Rights / IP / Micro-Venture |
| [ADR-0015 — Faculty Architecture](/decisions/adr-0015) | `UNDER REVIEW` | Practitioner–Educator–Mentor; professional teams |
| [ADR-0016 — Proof of Capability](/decisions/adr-0016) | `UNDER REVIEW` | Capability claims, evidence, verification; GAP-010 |
| [Malaysia Implementation Profile](/country/malaysia) | `DRAFT` skeleton | No invented regulations; research gaps open |
| Most foundation companions (Charter, Vision, Glossary, …) | `DRAFT` | Skeletons / incomplete companions |
| Repository indexes (Master Index, Gap Register, Changelog) | `DRAFT` | Operational documents |

</div>

<div class="progress-section progress-section--pending">

## Pending

Known work not yet completed (documentation evidence):

| Area | Why pending | Related |
|---|---|---|
| Six Worlds competency maps | Architecture drafted in ADR-0011; not approved; ops packages open | [GAP-008](/gaps#gap-008), [ADR-0011](/decisions/adr-0011), [GAP-045](/gaps#gap-045)–[GAP-047](/gaps#gap-047) |
| Competency Graph specification | Required by dual assessment model | [GAP-009](/gaps#gap-009) |
| Proof of Capability Profile | Required by dual assessment model | [GAP-010](/gaps#gap-010) |
| Exploration Floor operationalisation | Principle exists; package TBD | [GAP-019](/gaps#gap-019) |
| Mission authenticity thresholds | Principle exists; gates unset | [GAP-018](/gaps#gap-018) |
| Pathway change bridging standards | Reversibility needs operational detail | [GAP-020](/gaps#gap-020) |
| Weekly time-balance principles by stage | No fixed Core %; stage windows proposed | [GAP-016](/gaps#gap-016) |
| Detailed section specs (01–09, 11) | `SECTION_README` shells only | [Master Index §C](/master-index) |
| Proposed ADRs 0008–0010, 0012–0013 | Indexed; body files not drafted | [ADR Index](/decisions/) |
| Competency Graph specification | Required by dual assessment; distinct from PoC | [GAP-009](/gaps#gap-009) |
| Proof of Capability operating detail | Architecture drafted; verification/workload/acceptance open | [GAP-010](/gaps#gap-010), [GAP-038](/gaps#gap-038)–[GAP-044](/gaps#gap-044), [ADR-0016](/decisions/adr-0016) |
| Faculty staffing ratios / country role mapping | Architecture drafted; evidence and mapping open | [GAP-032](/gaps#gap-032)–[GAP-037](/gaps#gap-037), [ADR-0015](/decisions/adr-0015) |
| Malaysia licensing / exam / governance research | Must be cited, not invented | [GAP-001](/gaps#gap-001), [GAP-002](/gaps#gap-002), [GAP-007](/gaps#gap-007), … |

</div>

<div class="progress-section progress-section--deferred">

## Deferred

Intentionally postponed or country-specific:

| Item | Notes |
|---|---|
| Full blueprint chapters (lab schedules, financial models, partner MOUs, site plans) | Deferred until after foundation ratification — [Master Index §H](/master-index) |
| Malaysian Year mapping of developmental stages | Explicitly out of scope for ADR-0005 until Core approval; then country profile |
| Residential / boarding model for Malaysia | Core non-mandate APPROVED; MY choice still open ([GAP-005](/gaps#gap-005)) |
| Data-sovereignty architecture for Malaysia | Core non-mandate APPROVED; MY choice still open ([GAP-006](/gaps#gap-006)) |
| Treating Oman materials as Malaysia defaults | Forbidden by ADR-0001; Oman remains reference only |

</div>

## What should be designed next?

Based on current repository state (not a new architectural decision):

1. Human review of **ADR-0004**, **ADR-0005** and **ADR-0011**
2. After Core student-development / Worlds ratification: Competency Graph (`GAP-009`), Discover exposure package (`GAP-045`), mission/assessment ops
3. Parallel Malaysia research with citations (licensing, recognition mapping, canonical Concept Note)

Continue in: [Roadmap](/roadmap) · [Gaps](/gaps) · [Changelog](/changelog)
