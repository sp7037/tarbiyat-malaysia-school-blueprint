---
title: Architecture Roadmap
description: Decision relationships and future architecture work
---

::: tip Portal notice
This portal is a human-readable view of the Tarbiyat architecture repository. Source Markdown documents and approved architectural decisions remain authoritative.
:::

# Architecture roadmap

Relationships below follow documented dependencies — not a claim that every ADR is strictly sequential.

## Decision dependency map

```mermaid
flowchart TD
  CC["FND-003 Concept Constitution<br/>APPROVED v1.0.0"]

  A1["ADR-0001<br/>Core vs Country Implementation<br/>APPROVED"]
  A2["ADR-0002<br/>Lab-First / Mission-Based<br/>APPROVED"]
  A3["ADR-0003<br/>Formal Recognition Safety Layer<br/>APPROVED"]
  A4["ADR-0004<br/>Student Development / Progressive Specialisation<br/>APPROVED"]
  A5["ADR-0005<br/>Stage Boundaries / Major-Minor Entry<br/>APPROVED"]
  A6["ADR-0006<br/>Transition / Exploration Floor / Mobility<br/>APPROVED"]
  A7["ADR-0007<br/>Mission Ecosystem / Institution-in-Residence<br/>APPROVED"]
  A11["ADR-0011<br/>Six Worlds Capability / Progressive Depth<br/>APPROVED"]
  A14["ADR-0014<br/>Student Creator Rights<br/>UNDER REVIEW"]
  A15["ADR-0015<br/>Practitioner–Educator–Mentor Faculty<br/>APPROVED"]
  A16["ADR-0016<br/>Proof of Capability / Evidence<br/>APPROVED"]
  A17["ADR-0017<br/>Discover Meaningful Exposure<br/>APPROVED"]
  A18["ADR-0018<br/>Discover→Choose Pathway Preparation<br/>APPROVED"]

  FUT["Future architecture work<br/>Competency Graph · Faculty · Creator Rights ·<br/>MY mapping · …"]

  CC --> A1
  CC --> A2
  CC --> A3
  A1 --> A4
  A2 --> A4
  A3 --> A4
  A4 --> A5
  A4 --> A6
  A5 --> A6
  A4 --> A11
  A11 --> A17
  A17 --> A18
  A2 --> A7
  A4 --> A7
  A5 --> A7
  A6 --> A7
  A7 -.-> A14
  A2 --> A15
  A7 -.-> A15
  A14 -.-> A15
  A3 --> A16
  A7 -.-> A16
  A14 -.-> A16
  A15 -.-> A16
  A1 --> FUT
  A2 --> FUT
  A3 --> FUT
  A11 --> FUT
  A15 --> FUT
  A16 --> FUT

  classDef approved fill:#e5f4eb,stroke:#1b6b45,color:#143
  classDef review fill:#f8ecda,stroke:#8a5a12,color:#432
  classDef future fill:#eceff3,stroke:#5a6270,color:#333
  class CC,A1,A2,A3,A4,A5,A6,A7,A11,A16,A17,A18 approved
  class A14,A15 review
  class FUT future
```

## How to read this

| Link | Meaning |
|---|---|
| Solid arrows into ADR-0001–0003 | Founding ADRs depend on the Concept Constitution and ratify Core architecture |
| Solid arrows into ADR-0004–0007 / 0011 / 0017 / 0018 | Developmental / Worlds / pathway / Mission cluster APPROVED |
| Solid arrow ADR-0003 → ADR-0016 | Proof of Capability elaborates the APPROVED parallel capability layer |
| Dashed arrows into UNDER REVIEW ADRs | Later drafts assume earlier constraints; if a dependency changes before approval, dependents must be re-checked |
| Future work | Not yet decided as ADRs; includes proposed ADR-0008–0013 and open GAPs |

## Chronology vs dependency

Ratification order was roughly: Constitution + ADR-0001/0002/0003 → developmental/Worlds drafts → PoC / learning-time / campus approvals → Integrated Developmental Architecture approvals → ADR-0007 Mission Ecosystem approval (2026-09-17) → ADR-0015 Faculty Architecture approval (2026-09-19).  
ADR-0001, ADR-0002 and ADR-0003 are **sibling founding decisions** under the Constitution, not a strict 0001→0002→0003 dependency chain.

## Open next design areas (from repository evidence)

- Complete human review of [ADR-0014](/decisions/adr-0014) (Creator Rights); ADR-0015 APPROVED — PEO-001–005 / GAP-032–037 remain open
- [GAP-022](/gaps#gap-022) → [GAP-023](/gaps#gap-023) → [GAP-024](/gaps#gap-024): [MIS-001](/areas/mission-partner-governance) → [MIS-002](/areas/institution-in-residence) → [MIS-003](/areas/mission-risk-and-safeguarding) (all DRAFT proposed resolutions — not closed); [Mission Operating Templates](/areas/mission-operating-templates) propose [GAP-031](/gaps#gap-031) resolution — not closed
- [GAP-008](/gaps#gap-008) Closed by [ADR-0011](/decisions/adr-0011) APPROVED; curricula / Graph follow-ons remain
- [GAP-045](/gaps#gap-045) Closed by [ADR-0017](/decisions/adr-0017) APPROVED
- [GAP-046](/gaps#gap-046) Closed by [ADR-0018](/decisions/adr-0018) APPROVED
- [GAP-018](/gaps#gap-018) Closed by [ADR-0007](/decisions/adr-0007) APPROVED
- [GAP-047](/gaps#gap-047) Mission World-tagging significance thresholds (remain open)
- [GAP-009](/gaps#gap-009) Competency Graph schema (kept distinct from PoC)
- [GAP-010](/gaps#gap-010) Closed by [ADR-0016](/decisions/adr-0016) APPROVED; [GAP-038](/gaps#gap-038)–[GAP-044](/gaps#gap-044) PoC operating follow-ons ([POC-001](/areas/poc-operating-standard) DRAFT — proposed, not closed; [GAP-043](/gaps#gap-043) research remains Open)
- [GAP-032](/gaps#gap-032)–[GAP-037](/gaps#gap-037) Faculty ops / country mapping (governing ADR-0015 APPROVED; gaps not closed); [GAP-032](/gaps#gap-032) via [PEO-004](/areas/mission-team-capacity); [GAP-033](/gaps#gap-033) via [PEO-001](/areas/practitioner-authorisation); [GAP-034](/gaps#gap-034) via [PEO-005](/areas/mentor-caseload-capacity); [GAP-035](/gaps#gap-035) via [PEO-002](/areas/practitioner-currency); [GAP-036](/gaps#gap-036) via [PEO-003](/areas/faculty-practitioner-development) — proposed, not closed; [GAP-037](/gaps#gap-037) proposed via [MY-002](/country/malaysia-regulated-people) — not closed
- [GAP-049](/gaps#gap-049) Campus & facilities functional architecture ([ADR-0020](/decisions/adr-0020) APPROVED — Closed); [GAP-050](/gaps#gap-050) facility inventories / phased programmes remain Open; overview [CAM-001](/areas/campus-facilities)
- [GAP-051](/gaps#gap-051) First-pilot commissioning / readiness ([IMP-001](/areas/pilot-commissioning) DRAFT — proposed, not closed)
- [GAP-002](/gaps#gap-002) Malaysia recognition/exam mapping — **Partial** via [MY-003](/country/malaysia-school-path) (package not selected)
- Malaysia profile research gaps ([GAP-001](/gaps#gap-001) Partial via [MY-003](/country/malaysia-school-path), [GAP-005](/gaps#gap-005)–[GAP-007](/gaps#gap-007) with [GAP-007](/gaps#gap-007) Partial, [GAP-014](/gaps#gap-014))

See also: [Project progress](/progress) · [ADR index](/decisions/) · [Gap register](/gaps) · [Proof of Capability](/areas/competency-assessment) · [People & Culture](/areas/people-and-culture) · [Implementation](/areas/implementation)
