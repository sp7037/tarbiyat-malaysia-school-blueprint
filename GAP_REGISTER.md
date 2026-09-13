# Gap Register

| Field | Value |
|---|---|
| Document ID | `ROOT-GAP` |
| Version | `0.1.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-13` |
| Country scope | `CORE` + `MALAYSIA` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `MASTER_INDEX.md`, `docs/12-evidence/RESEARCH_GAPS.md` |
| Source documents | Pre-flight inventory (2026-09-13); user brief |

This register tracks information that still needs research or decisions. It is intentionally short and operational. Detailed research notes belong in `docs/12-evidence/RESEARCH_GAPS.md`.

| Gap ID | Topic | Why it matters | Needed action | Priority | Status |
|---|---|---|---|---|---|
| GAP-001 | Malaysian school licensing / establishment pathway | Malaysia profile cannot invent regulatory route | Legal/education-policy research with citations | High | Open |
| GAP-002 | National/board exam mapping for Malaysia | Core requires exam compatibility; subject map missing | Map Core missions to Malaysian recognition frameworks (TBD which boards) | High | Open |
| GAP-003 | Age bands for Explore→Discover→Choose→Deepen→Produce | Pathway design depends on developmental stages | Decision + pedagogical rationale ADR | High | Open |
| GAP-004 | Major + Minor introduction age | Prevents premature specialisation vs pathway clarity | Decision after GAP-003 | High | Open |
| GAP-005 | Day school vs residential model for Malaysia | Malaysia concept note assumes residential/24h; Core brief does not mandate it | Explicit Core vs Malaysia ADR; do not import Oman boarding by default | High | Open |
| GAP-006 | Data residency / “sovereign” IT architecture for Malaysia | Malaysia concept note uses sovereign-data language; may be Oman carry-over | Separate optional Core principle from Malaysia security profile | High | Open |
| GAP-007 | Ownership / governance model for Malaysia | Concept note proposes Government-owned; not approved fact | Record as proposal only until stakeholder decision | High | Open |
| GAP-008 | Six worlds detailed competency maps | Worlds named; depth undefined | Draft world briefs under `docs/03-worlds-and-pathways/` | Medium | Open |
| GAP-009 | Competency Graph specification | Named in brief and Oman drafts; no Core schema | Spec skeleton + non-country naming | Medium | Open |
| GAP-010 | Proof of Capability Profile specification | Central differentiator; format undefined | Spec + evidence rules | Medium | Open |
| GAP-011 | Student IP / micro-venture legal feasibility in Malaysia | Enterprise pathway depends on law | Legal research; no invented IP rules | Medium | Open |
| GAP-012 | Authoritative baseline among Oman versions | v early / v2 / v3 / v4 / v5 conflict on scale, exams, investment | Human designates reference hierarchy (not Malaysia defaults) | Medium | Open |
| GAP-013 | Relationship of KIRA / Dehradun / Afghanistan artefacts | Related IP vs out-of-scope | Classify each as Core-relevant or archive-only | Low | Open |
| GAP-014 | Malaysia Concept Note file variants | Downloads copy ≠ School_Project copy (different hashes/sizes) | Human confirms canonical Malaysia concept source | High | Open |
| GAP-015 | Evidence for uniqueness claims | Multiple “world first” claims across sources | Every claim enters Claims Register with evidence or is retired | High | Open |

## How to close a gap

1. Add research notes or decision draft.
2. Link evidence IDs or ADR IDs.
3. Mark status `Closed` here and note the closing document in `CHANGELOG.md`.
