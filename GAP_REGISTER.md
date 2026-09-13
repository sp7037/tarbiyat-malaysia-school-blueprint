# Gap Register

| Field | Value |
|---|---|
| Document ID | `ROOT-GAP` |
| Version | `0.2.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-13` |
| Country scope | `CORE` + `MALAYSIA` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `MASTER_INDEX.md`, `docs/12-evidence/RESEARCH_GAPS.md`, `FND-003`, ADR-0001–0003 |
| Source documents | Pre-flight inventory (2026-09-13); Iteration 1 architecture drafts |

This register tracks information that still needs research or decisions. It is intentionally short and operational. Detailed research notes belong in `docs/12-evidence/RESEARCH_GAPS.md`.

| Gap ID | Topic | Why it matters | Needed action | Priority | Status |
|---|---|---|---|---|---|
| GAP-001 | Malaysian school licensing / establishment pathway | Malaysia profile cannot invent regulatory route | Legal/education-policy research with citations | High | Open |
| GAP-002 | National/board exam mapping for Malaysia | ADR-0003 requires compatibility; MY boards unset | Map Learning Engine to Malaysian recognition frameworks with citations | High | Open |
| GAP-003 | Age bands for Explore→Discover→Choose→Deepen→Produce | Pathway design depends on developmental stages | Decision + pedagogical rationale (future ADR-0004) | High | Open |
| GAP-004 | Major + Minor introduction age | Prevents premature specialisation vs pathway clarity | Decision after GAP-003 (future ADR-0005) | High | Open |
| GAP-005 | Day school vs residential model for Malaysia | MY Concept Note assumes residential; Core now non-mandate | Malaysia-profile decision after ADR-0001 ratification; do not treat boarding as Core | High | Open (Core clarified under review; MY undecided) |
| GAP-006 | Data residency / “sovereign” IT for Malaysia | MY note uses sovereign-data language; Core now non-automatic | Malaysia-profile decision; Core limited to lawful privacy-conscious governance (ADR-0001) | High | Open (Core clarified under review; MY undecided) |
| GAP-007 | Ownership / governance model for Malaysia | Concept note proposes Government-owned; not approved fact | Stakeholder decision in MY profile | High | Open |
| GAP-008 | Six worlds detailed competency maps | Worlds named in Constitution; depth undefined | Draft world briefs under `docs/03-worlds-and-pathways/` after foundation ratification | Medium | Open |
| GAP-009 | Competency Graph specification | Required by dual assessment model (ADR-0003) | Core schema + evidence rules under `docs/05-assessment/` | Medium | Open |
| GAP-010 | Proof of Capability Profile specification | Required by dual assessment model (ADR-0003) | Spec + verification/moderation rules | Medium | Open |
| GAP-011 | Student IP / micro-venture legal feasibility in Malaysia | Enterprise pathway depends on law | Legal research; no invented IP rules | Medium | Open |
| GAP-012 | Authoritative baseline among Oman versions | Internal Oman contradictions remain | Human designates reference hierarchy (not MY defaults) | Medium | Open |
| GAP-013 | Relationship of KIRA / Dehradun / Afghanistan artefacts | Related IP vs out-of-scope | Classify each as Core-relevant or archive-only | Low | Open |
| GAP-014 | Malaysia Concept Note file variants | Downloads copy ≠ School_Project copy | Human confirms canonical Malaysia concept source | High | Open |
| GAP-015 | Evidence for uniqueness claims | Multiple “world first” claims across sources | Claims Register + evidence or retire | High | Open |
| GAP-016 | Weekly time balance: missions vs Knowledge Studios vs exam prep | ADR-0002 leaves proportions open; overload risk | Timetable principles after ADR-0002 ratification | High | Open (new) |
| GAP-017 | Criteria for elevating a country feature into Core | ADR-0001 open question | Future governance ADR | Medium | Open (new) |
| GAP-018 | Mission authenticity threshold by stage | When simulation is acceptable vs live stakeholders | Missions standard in `docs/06` after foundation ratification | Medium | Open (new) |

## Closed / superseded design conflicts (not gaps)

| Item | Treatment |
|---|---|
| Exam abolition as Core direction | Superseded by ADR-0003 (`UNDER REVIEW`) — awaiting ratification |
| Lab-only / no direct teaching as Core direction | Superseded by ADR-0002 (`UNDER REVIEW`) |
| Boarding as universal Core mandate | Rejected as Core by ADR-0001 / Constitution (`UNDER REVIEW`); MY still GAP-005 |
| Sovereign DC as automatic Core mandate | Rejected as automatic Core by ADR-0001 / Constitution (`UNDER REVIEW`); MY still GAP-006 |

## How to close a gap

1. Add research notes or decision draft.
2. Link evidence IDs or ADR IDs.
3. Mark status `Closed` here and note the closing document in `CHANGELOG.md`.
4. Do not mark Core gaps Closed until related ADRs are **APPROVED** (UNDER REVIEW is insufficient).
