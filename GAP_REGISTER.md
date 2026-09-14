# Gap Register

| Field | Value |
|---|---|
| Document ID | `ROOT-GAP` |
| Version | `1.0.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-14` |
| Country scope | `CORE` + `MALAYSIA` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `MASTER_INDEX.md`, `docs/12-evidence/RESEARCH_GAPS.md`, `FND-003`, ADR-0001–0007, ADR-0014–0016 |
| Source documents | Pre-flight; Iteration 1 ratification; Iteration 2–8 ADR drafts (0004–0007, 0014–0016) |

This register tracks information that still needs research or decisions. Detailed research notes belong in `docs/12-evidence/RESEARCH_GAPS.md`.

| Gap ID | Topic | Why it matters | Needed action | Priority | Status |
|---|---|---|---|---|---|
| GAP-001 | Malaysian school licensing / establishment pathway | Malaysia profile cannot invent regulatory route | Legal/education-policy research with citations | High | Open |
| GAP-002 | National/board exam mapping for Malaysia | ADR-0003 requires compatibility; MY boards unset | Map Learning Engine to Malaysian recognition frameworks with citations | High | Open |
| GAP-003 | Age bands for Explore→Discover→Choose→Deepen→Produce | Stage meanings in ADR-0004; typical windows proposed in ADR-0005 | Human review of ADR-0005; close only after ADR-0005 APPROVED; then map MY Years | High | Proposed resolution via ADR-0005 (`UNDER REVIEW`) — not closed |
| GAP-004 | Major + Minor introduction age | Architecture preferred in ADR-0004; entry rule proposed in ADR-0005 (formal at Deepen; provisional concentration in Choose) | Human review of ADR-0005; close only after ADR-0005 APPROVED | High | Proposed resolution via ADR-0005 (`UNDER REVIEW`) — not closed |
| GAP-005 | Day school vs residential model for Malaysia | MY Concept Note assumes residential; Core non-mandate APPROVED | Malaysia/project implementation decision; evidence if claimed as legally required | High | Open (MY undecided; Core non-mandate closed by ADR-0001) |
| GAP-006 | Data residency / “sovereign” IT for Malaysia | MY note uses sovereign-data language; Core non-mandate APPROVED | Malaysia/project decision; Core = lawful privacy-conscious governance only | High | Open (MY undecided; Core non-mandate closed by ADR-0001) |
| GAP-007 | Ownership / governance model for Malaysia | Concept note proposes Government-owned; not approved fact | Stakeholder decision in MY profile | High | Open |
| GAP-008 | Six worlds detailed competency maps | Worlds named in Constitution; depth undefined | Draft world briefs under `docs/03-worlds-and-pathways/` (future ADR-0011 candidate) | Medium | Open |
| GAP-009 | Competency Graph specification | Required by dual assessment model (ADR-0003); distinct from PoC evidence (ADR-0016) | Core schema + evidence-link rules under `docs/05-assessment/`; keep compatible with ADR-0016 | Medium | Open |
| GAP-010 | Proof of Capability Profile specification | Required by dual assessment model (ADR-0003) | Human review of ADR-0016; close only after ADR-0016 APPROVED; ops via GAP-038–044 | Medium | Proposed resolution via ADR-0016 (`UNDER REVIEW`) — not closed |
| GAP-011 | Student IP / micro-venture legal feasibility in Malaysia | Enterprise pathway depends on law | Legal research; no invented IP rules | Medium | Open |
| GAP-012 | Authoritative baseline among Oman versions | Internal Oman contradictions remain | Human designates reference hierarchy (not MY defaults) | Medium | Open |
| GAP-013 | Relationship of KIRA / Dehradun / Afghanistan artefacts | Related IP vs out-of-scope | Classify each as Core-relevant or archive-only | Low | Open |
| GAP-014 | Malaysia Concept Note file variants | Downloads copy ≠ School_Project copy | Human confirms canonical Malaysia concept source | High | Open |
| GAP-015 | Evidence for uniqueness claims | Multiple “world first” claims across sources | Claims Register + evidence or retire | High | Open |
| GAP-016 | Weekly time balance: missions vs Knowledge Studios vs exam prep | ADR-0002 APPROVED without fixed percentages; ADR-0005 proposes stage windows; ADR-0006 requires protected breadth dimensions without a Core fixed Exploration Floor % | Timetable principles by stage expressing protected dimensions (not a single Core %) | High | Open |
| GAP-017 | Criteria for elevating a country/project feature into Core | ADR-0001 open question | Future governance ADR | Medium | Open |
| GAP-018 | Mission authenticity threshold by stage | ADR-0004/0005 state progressive authenticity; ADR-0007 proposes levels A–F + stage relationship + governance | Human review of ADR-0007; close only after ADR-0007 APPROVED; operating detail via GAP-022–024 and `docs/06` | Medium | Proposed resolution via ADR-0007 (`UNDER REVIEW`) — not closed |
| GAP-019 | Exploration Floor operationalisation | ADR-0004/0005 forbid zero breadth; ADR-0006 proposes protected breadth dimensions (no Core fixed %) | Human review of ADR-0006; close only after ADR-0006 APPROVED; stage/country timetable expression remains via GAP-016 | Medium | Proposed resolution via ADR-0006 (`UNDER REVIEW`) — not closed |
| GAP-020 | Pathway change bridging / transition standards | Reversibility requires more than policy language; ADR-0006 proposes capability recognition → gap ID → targeted bridging → supported transition → review | Human review of ADR-0006; close only after ADR-0006 APPROVED; detailed bridging curricula remain out of scope until later design | Medium | Proposed resolution via ADR-0006 (`UNDER REVIEW`) — not closed |
| GAP-021 | Cited evidence pack for ADR-0005 age/developmental windows | ADR-0005 windows needed lodged citations before approval | Evidence pack completed as `EV-0001`; ADR-0005 requires human re-review (no silent window changes); close only with/after ADR-0005 approval | Medium | Evidence pack completed — ADR-0005 requires human re-review (not closed) |
| GAP-022 | Partner governance detailed operating standard | ADR-0007 states principles and required mission controls; contracts/checklists unset | Draft partner-governance standard under `docs/06` (or dedicated ops ADR) after ADR-0007 human review | Medium | Open (opened by ADR-0007) |
| GAP-023 | Institution-in-Residence operating standard | ADR-0007 defines Core model and subtypes; presence patterns/quality unset | Draft I-in-R operating standard (roles, recurrence, safeguarding, campus fit) | Medium | Open (opened by ADR-0007) |
| GAP-024 | Mission risk classification | Authenticity levels need linked risk/safeguarding/data matrix | Draft risk classification linking authenticity level, safeguarding, data class and approval gates | Medium | Open (opened by ADR-0007) |
| GAP-025 | Student Creator Rights / IP / Micro-Venture Core architecture | ADR-0007 forbids automatic IP transfer; ownership rules unset | Human review of ADR-0014; close only after ADR-0014 APPROVED; country/ops detail via GAP-011 and GAP-026–031 | Medium | Proposed resolution via ADR-0014 (`UNDER REVIEW`) — not closed |
| GAP-026 | Country/project Creator Rights & IP legal mapping | Core principles are not enforceable title; inventorship, minors, employment-IP and contracts vary by law | Map ADR-0014 principles into country profiles; MY detail remains GAP-011 | Medium | Open (opened by ADR-0014) |
| GAP-027 | Benefit-sharing policy (country/project) | Fair-creator principle needs implementable rules without Core-fixed % | Draft benefit-sharing policy options under country/project law after ADR-0014 human review | Medium | Open (opened by ADR-0014) |
| GAP-028 | Micro-Venture operating standard | ADR-0014 defines optional educational pathway; workload, exit and supervision unset | Draft Micro-Venture ops standard (eligibility, safeguarding, stop/pivot criteria) | Medium | Open (opened by ADR-0014) |
| GAP-029 | External investment acceptance safeguards | Advanced ventures may attract capital; minors/capacity/conflict rules unset | Draft investment-acceptance checklist and independent-advice triggers | Medium | Open (opened by ADR-0014) |
| GAP-030 | Student Innovation & Mission Fund design | ADR-0014 allows architectural possibility only | Decide whether to establish fund; legal/fiscal design if yes (not Core-mandated) | Low | Open (opened by ADR-0014) |
| GAP-031 | Creator Rights Review procedures and IP-sensitive mission agreement templates | Review triggers and pre-mission IP expectations need operable forms | Draft SOPs and templates; integrate with partner governance (GAP-022) | Medium | Open (opened by ADR-0014) |
| GAP-032 | Staffing ratios / organisational loading for Mission Teams | Mission-based model is staff-intensive; Core must not invent ratios without evidence | Research comparable models; draft stage/mission-intensity loading principles after ADR-0015 human review | High | Open (opened by ADR-0015) |
| GAP-033 | Practitioner qualification / authorisation standard | Domain experts need clear school authorisation levels across Six Worlds | Draft Practitioner authorisation / onboarding standard; align with I-in-R statuses (GAP-023) | Medium | Open (opened by ADR-0015) |
| GAP-034 | Mentor caseload principles | Longitudinal mentoring fails if caseloads are unbounded | Research caseload bands; draft principles without premature Core-fixed numbers | Medium | Open (opened by ADR-0015) |
| GAP-035 | Practitioner currency standard | Authenticity depends on non-stale professional knowledge; dual full-time jobs not required | Draft currency evidence options and review cadence | Medium | Open (opened by ADR-0015) |
| GAP-036 | Faculty development programme (Educator / Practitioner / Mentor) | Tarbiyat requires additional operating capabilities beyond conventional roles | Design development pathways and residencies/fellowships after ADR-0015 human review | Medium | Open (opened by ADR-0015) |
| GAP-037 | Country regulated-role mapping for Core faculty architecture | Core functions cannot override statutory teacher registration, ratios or leadership quals | Map Core Role Architecture → legally recognised categories → required qualifications in country profiles | High | Open (opened by ADR-0015) |
| GAP-038 | PoC verification / moderation operating standard | ADR-0016 states multi-source verification principles; independence labels and moderation SOP unset | Draft verification SOP after ADR-0016 human review | High | Open (opened by ADR-0016) |
| GAP-039 | Student PoC challenge / correction process | Learners need proportional challenge rights without self-certification | Draft challenge/appeals procedure for claims, contribution and verification | Medium | Open (opened by ADR-0016) |
| GAP-040 | PoC Profile presentation modes by audience | Learner/parent/university/employer/public need different views under consent | Draft presentation packs and sharing constraints (no UI invention as Core law) | Medium | Open (opened by ADR-0016) |
| GAP-041 | Institutional PoC verifiability mechanism | Recipients need to confirm Tarbiyat verified a claim; no blockchain mandate | Evaluate signed records / audit trails / verification links after ADR-0016 review | Medium | Open (opened by ADR-0016) |
| GAP-042 | Faculty evidence workload / significance thresholds | Mission evidence volume can create administrative hell | Research selective-evidence thresholds and reusable artefact patterns | High | Open (opened by ADR-0016) |
| GAP-043 | External acceptance of Proof of Capability | Universities/employers/ministries may or may not value PoC; Core must not invent endorsements | Country/project acceptance research with citations; no fabricated recognition claims | Medium | Open (opened by ADR-0016) |
| GAP-044 | PoC retention, privacy and sanitised-evidence operating rules | Lifelong records risk over-collection; confidential missions need sanitisation | Draft retention/privacy/sanitisation SOP; align with country data law (MY still GAP-006 where relevant) | Medium | Open (opened by ADR-0016) |

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
