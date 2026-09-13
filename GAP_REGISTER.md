# Gap Register

| Field | Value |
|---|---|
| Document ID | `ROOT-GAP` |
| Version | `0.3.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-13` |
| Country scope | `CORE` + `MALAYSIA` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `MASTER_INDEX.md`, `docs/12-evidence/RESEARCH_GAPS.md`, `FND-003`, ADR-0001–0003 |
| Source documents | Pre-flight inventory; Iteration 1; ratification amendments (2026-09-13) |

This register tracks information that still needs research or decisions. Detailed research notes belong in `docs/12-evidence/RESEARCH_GAPS.md`.

| Gap ID | Topic | Why it matters | Needed action | Priority | Status |
|---|---|---|---|---|---|
| GAP-001 | Malaysian school licensing / establishment pathway | Malaysia profile cannot invent regulatory route | Legal/education-policy research with citations | High | Open |
| GAP-002 | National/board exam mapping for Malaysia | ADR-0003 requires compatibility; MY boards unset | Map Learning Engine to Malaysian recognition frameworks with citations | High | Open |
| GAP-003 | Age bands for Explore→Discover→Choose→Deepen→Produce | Pathway design depends on developmental stages | Decision + pedagogical rationale (future ADR-0004) | High | Open |
| GAP-004 | Major + Minor introduction age | Prevents premature specialisation vs pathway clarity | Decision after GAP-003 (future ADR-0005) | High | Open |
| GAP-005 | Day school vs residential model for Malaysia | MY Concept Note assumes residential; Core non-mandate APPROVED | Malaysia/project implementation decision; evidence if claimed as legally required | High | Open (MY undecided; Core non-mandate closed by ADR-0001) |
| GAP-006 | Data residency / “sovereign” IT for Malaysia | MY note uses sovereign-data language; Core non-mandate APPROVED | Malaysia/project decision; Core = lawful privacy-conscious governance only | High | Open (MY undecided; Core non-mandate closed by ADR-0001) |
| GAP-007 | Ownership / governance model for Malaysia | Concept note proposes Government-owned; not approved fact | Stakeholder decision in MY profile | High | Open |
| GAP-008 | Six worlds detailed competency maps | Worlds named in Constitution; depth undefined | Draft world briefs under `docs/03-worlds-and-pathways/` | Medium | Open |
| GAP-009 | Competency Graph specification | Required by dual assessment model (ADR-0003) | Core schema + evidence rules under `docs/05-assessment/` | Medium | Open |
| GAP-010 | Proof of Capability Profile specification | Required by dual assessment model (ADR-0003) | Spec + verification/moderation rules | Medium | Open |
| GAP-011 | Student IP / micro-venture legal feasibility in Malaysia | Enterprise pathway depends on law | Legal research; no invented IP rules | Medium | Open |
| GAP-012 | Authoritative baseline among Oman versions | Internal Oman contradictions remain | Human designates reference hierarchy (not MY defaults) | Medium | Open |
| GAP-013 | Relationship of KIRA / Dehradun / Afghanistan artefacts | Related IP vs out-of-scope | Classify each as Core-relevant or archive-only | Low | Open |
| GAP-014 | Malaysia Concept Note file variants | Downloads copy ≠ School_Project copy | Human confirms canonical Malaysia concept source | High | Open |
| GAP-015 | Evidence for uniqueness claims | Multiple “world first” claims across sources | Claims Register + evidence or retire | High | Open |
| GAP-016 | Weekly time balance: missions vs Knowledge Studios vs exam prep | ADR-0002 APPROVED without fixed percentages | Timetable principles by stage (not a single Core %) | High | Open |
| GAP-017 | Criteria for elevating a country/project feature into Core | ADR-0001 open question | Future governance ADR | Medium | Open |
| GAP-018 | Mission authenticity threshold by stage | When simulation is acceptable vs live stakeholders | Missions standard in `docs/06` | Medium | Open |

## Closed (Core design conflicts only)

| Item | Closed by | Notes |
|---|---|---|
| Exam abolition / “NO exams” as Core direction | ADR-0003 APPROVED; SUP-001, SUP-002 | Recorded in SUPERSEDED_CONCEPTS |
| Competency Graph replacing statutory exams | ADR-0003 APPROVED; SUP-003 | Parallel layer only |
| Lab-only / no direct teaching / classroom abolition extremes | ADR-0002 APPROVED; SUP-004, SUP-005 | Lab-First, not Lab-Only |
| Boarding as universal Core mandate | ADR-0001 APPROVED; SUP-006 | MY residential still GAP-005 |
| Sovereign DC as automatic Core mandate | ADR-0001 APPROVED; SUP-007 | MY data still GAP-006 |

Malaysia implementation gaps are **not** closed by this ratification.

## How to close a gap

1. Add research notes or decision draft.
2. Link evidence IDs or ADR IDs.
3. Mark status `Closed` here and note the closing document in `CHANGELOG.md`.
4. Core design conflicts may be closed only when related ADRs are **APPROVED**.
