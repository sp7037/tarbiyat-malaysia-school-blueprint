# Changelog

| Field | Value |
|---|---|
| Document ID | `ROOT-CHANGELOG` |
| Version | `0.1.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-13` |
| Country scope | `UNIVERSAL` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `MASTER_INDEX.md` |
| Source documents | Repository history |

All notable repository and documentation changes are recorded here.

Format: Keep entries concise. Record **why** a change matters, not only file lists.

---

## [Unreleased]

### ADR-0019 APPROVED — Learning-Time Architecture (2026-09-15)

- Human-approval hygiene checkpoint passed (Substitution Rule; Recognition Season Rule; Primary Organising Logic Test; Produce-stage preservation). No substantive architecture rewrite.
- `ADR-0019` promoted `0.1.0` / `UNDER REVIEW` → `1.0.0` / `APPROVED`.
- `GAP-016` Closed — resolved by APPROVED ADR-0019. `GAP-048` remains Open (exemplars / pilot planning ranges).
- Updated `ADR_INDEX`, `MASTER_INDEX`, `GAP_REGISTER`, `LAR-001` / `SEC-01`, glossary, portal presentation/traceability; regenerated portal content.
- No changes to ADR-0004–0007, 0011, 0014–0018 or PEO-001–005 statuses. No invented hours, percentages, ages or staffing ratios.

### GAP-016 — Learning-Time Architecture (2026-09-15)

- Added `ADR-0019` (`docs/13-decisions/adr/ADR-0019-learning-time-architecture.md`, initially `UNDER REVIEW`): Learning-Time Modes; Integrated Programme Principle (anti-double-workload); Primary Organising Logic Test; Recognition Season Rule; discipline integration vs focused instruction; Six Worlds scheduling without six subjects; stage postures without Core %; capacity-coupled intensity; non-normative day examples; scenarios A–O.
- Added `LAR-001` overview companion under `docs/01-learning-architecture/`; updated `SEC-01`.
- Updated `ADR_INDEX`, `MASTER_INDEX`, `GAP_REGISTER` (GAP-016 proposed via ADR-0019 — later Closed on approval; opened `GAP-048`); glossary.
- Portal: progress/model/journey traceability; prepare-content workstream notes. No inventing of hours, percentages, age bands or staffing ratios.

### ADR-0015 editorial alignment with People Operating Architecture (2026-09-15)

- ADR-0015 bumped to `0.1.2` (`UNDER REVIEW` unchanged): traceability to `PEO-001`–`PEO-005` DRAFT companions; Open Questions / Follow-on / Related Docs no longer treat `docs/08` as an empty shell; authorisation asymmetry clarified (Practitioner PA bands ≠ Educator/Mentor Core PA ladders); dependency wording for ADR-0007 / ADR-0014 kept accurate.
- Stakeholder portal `people-learning` synced to the high-level function → authorisation → currency → development → Mission capacity → Mentor capacity model (detail remains on People & Culture).
- No ADR approval; no GAP-032–036 closures; GAP-037 untouched; no ratios or country licensing invented.

### GAP-034 — Mentor Caseload and Human-Guidance Capacity (2026-09-15)

- Added `PEO-005` (`docs/08-people-and-governance/MENTOR_CASELOAD_AND_HUMAN_GUIDANCE_CAPACITY.md`, DRAFT): assigned learners ≠ meaningfully mentored; capacity = relationship depth + available Mentor time; stage/transition-sensitive; Mentor ≠ clinician/safeguarding lead/pathway decider; no universal Core ratio; caseload states; scenarios A–O; links to PEO-004 and ADR-0018.
- Added `PEO-FRM-003` Mentor Caseload Review under `docs/08-people-and-governance/templates/`.
- Updated `SEC-08`; `MASTER_INDEX`; `GAP_REGISTER` (GAP-034 proposed via PEO-005 — **not closed**; GAP-037 remains Open); glossary; PEO-004 Mentor handoff.
- Portal: `/areas/mentor-caseload-capacity`; FRM-003 via People page; People chain PEO-004 → PEO-005. No new ADR; no ADR approvals or GAP closures.

### GAP-032 — Mission Team Loading and Staffing Capacity (2026-09-15)

- Added `PEO-004` (`docs/08-people-and-governance/MISSION_TEAM_LOADING_AND_STAFFING_CAPACITY.md`, DRAFT): capacity ≠ headcount; Mission capacity follows authorised/current/available competence; risk/function/concurrency/peak-load/resilience; capacity states; resource-poor school principle; scenarios A–O; Mentor detail handed to GAP-034.
- Added `PEO-FRM-002` Mission Team Capacity Check under `docs/08-people-and-governance/templates/`.
- Updated `SEC-08`; `MASTER_INDEX`; `GAP_REGISTER` (GAP-032 proposed via PEO-004 — **not closed**; GAP-034 / 037 remain Open); glossary; light PEO-003 / MIS-TPL cross-links.
- Portal: `/areas/mission-team-capacity`; FRM-002 via People page; People chain PEO-001↔002↔003 → PEO-004. No new ADR; no ADR approvals or GAP closures.

### Portal maintenance — status classification and proposed ADR links (2026-09-15)

- Fixed portal GAP status classification so wording containing **not closed** is never treated as closed/resolved (GAP-021 badge).
- Portal ADR link generation now checks for ADR body files; proposed/reserved IDs (0008–0010, 0012–0013) render as non-clickable text.
- Corrected stale changelog phrasing “no commit in task scope” → “no ADR approvals or GAP closures”.

### GAP-036 — Faculty and Practitioner Development (2026-09-15)

- Added `PEO-003` (`docs/08-people-and-governance/FACULTY_AND_PRACTITIONER_DEVELOPMENT.md`, DRAFT): deliberate adult development; development ≠ authorisation ≠ currency; function-specific pathways; common orientation; practice-based modes; Layers 1–5 architecture; Six Worlds parity; ethical/AI principles; scenarios A–N.
- Added `PEO-FRM-001` development plan/record under `docs/08-people-and-governance/templates/` (not forced into MIS-FRM series).
- Updated `PEO-001` / `PEO-002` / `SEC-08`; `MASTER_INDEX`; `GAP_REGISTER` (GAP-036 proposed via PEO-003 — **not closed**); glossary.
- Portal: `/areas/faculty-practitioner-development`; FRM-001 via People page; People & Culture chain PEO-001↔PEO-002↔PEO-003. No new ADR; no ADR approvals or GAP closures.

### GAP-035 — Practitioner Currency and Re-authorisation (2026-09-15)

- Added `PEO-002` (`docs/08-people-and-governance/PRACTITIONER_CURRENCY_AND_REAUTHORISATION.md`, DRAFT): currency ≠ initial authorisation; proportional evidence; risk-sensitive recency; inactivity/change/incident triggers; licence boundary; tool-specific currency; currency states; renew≠expand; scenarios A–N.
- Added `MIS-FRM-008` Currency Review; pointer fields on `MIS-FRM-007`; linked from `MIS-TPL-001`.
- Updated `PEO-001` / `SEC-08`; `MASTER_INDEX`; `GAP_REGISTER` (GAP-035 proposed via PEO-002 — **not closed**); glossary.
- Portal: `/areas/practitioner-currency`; FRM-008 via templates index; People & Culture chain PEO-001→PEO-002→GAP-036. No new ADR; no ADR approvals or GAP closures.

### GAP-033 — Practitioner Authorisation and Onboarding (2026-09-15)

- Added `PEO-001` (`docs/08-people-and-governance/PRACTITIONER_AUTHORISATION_AND_ONBOARDING.md`, DRAFT): function-specific authorisation; credential ≠ authority; PA-0–PA-4 bands as permission scope; permission dimensions; onboarding; safeguarding separation; MIS-003 risk ceilings; tool/lab principle; I-in-R non-inheritance; Mission Lead boundary; scenarios A–N.
- Added `MIS-FRM-007` Practitioner Authorisation Record; linked from `MIS-TPL-001` and `MIS-FRM-002`.
- Updated `SEC-08`, MIS-002 handoff, `MASTER_INDEX`, `GAP_REGISTER` (GAP-033 proposed via PEO-001 — **not closed**); glossary.
- Portal: `/areas/practitioner-authorisation`; FRM-007 via templates index; People & Culture / Missions / roadmap / governance. No new ADR; no ADR approvals or GAP closures.

### GAP-031 — Mission Operating Templates (2026-09-15)

- Added `MIS-TPL-001` (`docs/06-missions-and-production/MISSION_OPERATING_TEMPLATES.md`, DRAFT) and consolidated `MIS-FRM-001`–`006` under `templates/`: Unified Partner Pack; Practitioner Onboarding; Expanded Risk; I-in-R Designation; conditional IP/Data/Contribution/Conflict annexes; Deployment + Suspension/Exit.
- Corrected stale MIS-001 §7 `GAP-023` cross-reference → `MIS-002`; updated MIS-002 / MIS-003 template handoffs; `SEC-06`; `MASTER_INDEX`; `GAP_REGISTER` (GAP-031 proposed resolution via template pack — **not closed**); glossary.
- Portal: `/areas/mission-operating-templates` (+ generated FRM pages); Blueprint sidebar index only; Missions / roadmap / governance. No new ADR; 13 ADR count unchanged; no ADR approvals or GAP closures.

### GAP-024 — Mission Risk / Safeguarding Classification (2026-09-14)

- Added `MIS-003` (`docs/06-missions-and-production/MISSION_RISK_AND_SAFEGUARDING.md`, DRAFT): proportional R0–R4 classification; risk domains; authenticity≠risk; activity-level controls; stop-work; partner/I-in-R non-bypass; deployment re-review; scenarios A–P.
- Updated `MIS-001` / `MIS-002` handoffs; `SEC-06`; `MASTER_INDEX`; `GAP_REGISTER` (GAP-024 proposed resolution via MIS-003 — **not closed**); glossary.
- Portal: `/areas/mission-risk-and-safeguarding`; Blueprint sidebar; Missions / roadmap / governance. No new ADR; GAP-031 unchanged Open; no ADR approvals or GAP closures.

### GAP-023 — Institution / Industry-in-Residence operating standard (2026-09-14)

- Added `MIS-002` (`docs/06-missions-and-production/INSTITUTION_IN_RESIDENCE.md`, DRAFT): sustained embedding definition; participation ladder; MIS-001 prerequisites; presence/recurrence; practitioner continuity; Campus Live Workflow link; faculty boundary; access/space/portfolio/Six Worlds; review/exit; scenarios A–N; handoffs to GAP-024 / GAP-031.
- Updated `MIS-001` §18 relationship to MIS-002; `SEC-06` / `SEC-07` READMEs; `MASTER_INDEX`; `GAP_REGISTER` (GAP-023 proposed resolution via MIS-002 — **not closed**); glossary I-in-R terms.
- Portal: prepare-content include → `/areas/institution-in-residence`; Blueprint sidebar; Missions area / presentation / roadmap / governance. No new ADR; GAP-024 unchanged Open; no ADR approvals or GAP closures.

### GAP-022 — Mission Partner Governance standard (2026-09-14)

- Added `MIS-001` (`docs/06-missions-and-production/MISSION_PARTNER_GOVERNANCE.md`, DRAFT): Core operational partner governance derived from ADR-0007 / ADR-0014 / ADR-0015 (UNDER REVIEW); scenario tests A–N; handoffs to GAP-023 / GAP-024.
- Updated `SEC-06` section README, `MASTER_INDEX`, `GAP_REGISTER` (GAP-022 proposed resolution via MIS-001 — **not closed**).
- Portal: prepare-content include → `/areas/mission-partner-governance`; Blueprint sidebar + Missions area / presentation / roadmap / governance discoverability. No new ADR; no GAP-023/024 closure; no ADR approvals or GAP closures.

### Productive institution architecture review — ADR-0007 / 0014 / 0015 hardening (2026-09-14)

- ADR-0007 (`UNDER REVIEW` v0.1.1): Campus Live Workflow / educational production environments with Education-First guardrails; graded Deployment Boundary; Test Scenarios A–J (including previously referenced F/G).
- ADR-0015 (`UNDER REVIEW` v0.1.1): Mission Lead as coordination function within Mission Teams.
- ADR-0014 (`UNDER REVIEW` v0.1.1): enterprise/production context distinctions (simulation vs campus unit vs learner venture vs partnership).
- Review only — no ADR approvals or GAP closures.

### Iteration 11 — ADR-0018 Discover → Choose Pathway Preparation (2026-09-14)

- Drafted ADR-0018 (`UNDER REVIEW`): guided developmental transition from Discover to Choose (not career pass/fail gate); provisional concentration without forced single World; multi-input human-governed guidance without one score; Interest ≠ Capability; Exposure ≠ pathway readiness; PoC may inform but is not a universal Choose prerequisite; Provisional Concentration Plan as revisable orientation artefact (not credential/ranking/PoC); reversibility; breadth continuity without equal-time mandate; equity, equal dignity and safety/ethics; scenario tests A–N.
- ID pre-flight: no reserved Discover→Choose pathway-preparation ADR; ADR-0008–0010 / 0012–0013 remain proposed for other topics; assigned next free ID ADR-0018 without renumbering.
- Updated ADR_INDEX, MASTER_INDEX, GAP_REGISTER (GAP-046 proposed resolution via ADR-0018 — not closed; GAP-009 / 045 / 047 remain open), section 02/03/05 notes, glossary, portal Student Journey / Six Worlds / progress / roadmap cross-links, and portal prepare-content area cards for ADR-0018.
- Light cross-link on ADR-0017 Follow-on / Open Questions for GAP-046 → ADR-0018 without changing ADR-0017 status or decisions.
- Depends on FND-003 / ADR-0001–0003 (APPROVED); uses ADR-0017 / 0011 / 0004–0006 / 0015 / 0016 as under-review context only. Did not treat under-review ADRs as approved. Did not alter APPROVED FND-003 or ADR-0001–0003. No ages, scores, pathway catalogues, Graph schemas, algorithms or commit.

### Iteration 10 — ADR-0017 Discover Meaningful Exposure Package (2026-09-14)

- Drafted ADR-0017 (`UNDER REVIEW`): Meaningful Exposure Test (Context; Active Engagement; World-Relevant Practice; Reflection; Trace); Discover Exposure Package as cumulative learner experience; All-Six-Worlds Entitlement without equal-time/six-course mandates; Cross-World counting only with substantive learner work per claimed World; stage ≠ capability depth; no early identity lock-in; Choose as provisional concentration; Exposure Evidence ≠ PoC Claims; Graph boundary at GAP-009; human guidance; equal dignity; resource-feasible designs; scenario tests A–N.
- ID pre-flight: no reserved Discover-exposure ADR; ADR-0008–0010 / 0012–0013 remain proposed for other topics; assigned next free ID ADR-0017 without renumbering.
- Updated ADR_INDEX, MASTER_INDEX, GAP_REGISTER (GAP-045 proposed resolution via ADR-0017 — not closed; GAP-009 / 046 / 047 remain open with cross-refs), section 02/03/05 notes, glossary, portal Six Worlds / Student Journey / progress / roadmap cross-links.
- Light cross-link on ADR-0011 Follow-on / Open Questions for GAP-045 → ADR-0017 without changing ADR-0011 status or decisions.
- Depends on FND-003 / ADR-0001–0003 (APPROVED); uses ADR-0011 / 0004–0007 / 0015 / 0016 as under-review context only. Did not treat under-review ADRs as approved. Did not alter APPROVED FND-003 or ADR-0001–0003. No hours, Year maps, Graph schemas, Major/Minor catalogues, pathway algorithms or commit.

### Iteration 9 — ADR-0011 Six Worlds Capability / Progressive Depth (2026-09-14)

- Drafted ADR-0011 (`UNDER REVIEW`): Six Worlds as capability/mission domains (not career tracks, houses or subject lists); per-World capability frames; Capability Depth Ladder (Encounter→Inquire→Apply→Integrate→Advance→Contribute) distinct from developmental stages; Discover meaningful exposure across all Worlds; provisional concentration; Major+Minor within/across Worlds; Cross-World vs World-Specific capabilities; Cross-World Missions; faculty/PoC/Graph boundaries; no prestige hierarchy; future-proofing without seventh AI World.
- ID pre-flight: used reserved ADR-0011 for GAP-008; no renumbering conflict.
- Updated ADR_INDEX, MASTER_INDEX, GAP_REGISTER (GAP-008 proposed resolution via ADR-0011 — not closed; GAP-009 remains open; opened GAP-045–047), section 03 note, glossary, portal Six Worlds reader page.
- Depends on FND-003 / ADR-0001–0003 (APPROVED); uses ADR-0004–0007 / 0015 / 0016 as under-review context only. Did not treat under-review ADRs as approved. Did not alter APPROVED FND-003 or ADR-0001–0003. No curriculum catalogues, Graph schemas, Year maps, employment claims or commit.

### Portal milestone — full ADR rendering + static build (2026-09-14)

- Completed VitePress portal milestone: all canonical ADR body files (ADR-0001–0007, ADR-0014–0016) generate full readable pages (not index-only summaries).
- Production static build output directory: `portal/docs/.vitepress/dist/`.
- Documented server-side HTTPS + Basic Auth / edge-access deployment in `portal/README.md` (no client-side JS password gates).
- Did not change any ADR status. Presentation layer only.

### Iteration 8 — ADR-0016 Proof of Capability / Capability Evidence (2026-09-14)

- Drafted ADR-0016 (`UNDER REVIEW`): dual attainment (recognised academics + PoC, not unsupported dual credential); Capability Claims; Proof ≠ Participation; Direct/Supporting/Context evidence; Contribution Records; descriptive independence context; productive failure; multi-source verification; Capability Defence (proportional); AI-assisted work disclosure; provenance; Sanitised Verified Evidence; longitudinal growth without permanent deficit labels; no universal composite score; human/AI boundary; Competency Graph kept distinct; Six Worlds evidence parity; privacy/data minimisation; student access/challenge; workload practicality.
- ID pre-flight: no reserved PoC ADR; ADR-0011 remains Six Worlds maps only; assigned next free ID ADR-0016 without renumbering.
- Updated ADR_INDEX, MASTER_INDEX, GAP_REGISTER (GAP-010 proposed resolution via ADR-0016 — not closed; GAP-009 remains open; opened GAP-038–044), section 05 note, glossary, portal Competency & Assessment reader page.
- Depends on ADR-0003 (APPROVED) and ADR-0007 / 0014 / 0015 (still `UNDER REVIEW`); ADR-0004–0006 used as portability context only. Did not treat under-review ADRs as approved. Did not alter APPROVED FND-003 or ADR-0001–0003. No Graph schema, blockchain, composite scores, legal equivalence claims or commit.

### Iteration 7 — ADR-0015 Practitioner–Educator–Mentor Faculty Architecture (2026-09-14)

- Drafted ADR-0015 (`UNDER REVIEW`): Educator / Practitioner / Mentor as peer faculty functions (not tiers); Technical/Lab Professionals as supporting workforce with independent safety authority; Specialist Services kept distinct from Mentor; role combinations without assumed triple overload; separation of responsibilities; professional learning teams; proportional Mission Teams; Mission Educationalisation shared duties; multi-stream assessment; pathway non-monopoly; practitioner currency; educator development; practitioner onboarding; mentor preparation; Institution-in-Residence ≠ automatic faculty; safeguarding principles without inventing country vetting law; developmental-stage staffing intensity; Six Worlds coverage; country recognition mapping boundary; talent pipeline as architecture not guarantee.
- Updated ADR_INDEX, MASTER_INDEX, GAP_REGISTER (opened GAP-032–037), section 08 note, glossary terms, portal People & Culture reader page.
- Depends on ADR-0002 (APPROVED) and ADR-0007 / ADR-0014 (still `UNDER REVIEW`); ADR-0004–0006 used as developmental context only. Did not treat under-review ADRs as approved. Did not alter APPROVED FND-003 or ADR-0001–0003. No staffing ratios, Malaysian registration law, org-chart mandate or automatic approval. No commit.

### Iteration 6 — ADR-0014 Student Creator Rights / IP / Micro-Venture (2026-09-14)

- Drafted ADR-0014 (`UNDER REVIEW`): Student Creator Rights; educational recognition vs legal ownership; outcome classification; Contribution Records; Background/Mission/Joint IP; partner-sponsored mission principles; Surprise Innovation; Creator Rights Review; conflict of interest; post-creation pathways; optional Micro-Venture; benefit-sharing without Core %; Student Innovation Fund as architectural possibility only; AI-assisted creation and academic integrity; sanitised capability records; leaving-school continuity; Six Worlds Creator Rights coverage.
- Updated ADR_INDEX (ADR-0014 body moved from proposed to under review), MASTER_INDEX, GAP_REGISTER (GAP-025 proposed resolution via ADR-0014 — not closed; opened GAP-026–031).
- Cross-linked ADR-0007 IP dependency to ADR-0014 draft without changing ADR-0007 status or decisions.
- Depends on ADR-0002 (APPROVED) and ADR-0007 (still `UNDER REVIEW`); ADR-0004–0006 used only as contextual stage labels. Did not treat under-review ADRs as approved. Did not alter APPROVED FND-003 or ADR-0001–0003. No country IP law invention, ownership percentages, contracts, PoC schemas or exaggerated economic claims. No commit.

### Iteration 5 — ADR-0007 Mission Ecosystem / authenticity / Institution-in-Residence (2026-09-14)

- Drafted ADR-0007 (`UNDER REVIEW`): governed Mission Ecosystem; Mission vs Activity/Project; authenticity levels A–F; stage relationship; Six Worlds coverage; Strategic Capability Missions (country-defined priorities); Institution-in-Residence; Education-First / no exploitation; Mission Educationalisation and lifecycle; partner governance principles; productive failure; deployment boundary; PoC and IP dependencies.
- Updated ADR_INDEX (ADR-0007 body; former Claims/Evidence proposal renumbered to proposed ADR-0013; added proposed ADR-0014 for Creator Rights/IP), MASTER_INDEX, GAP_REGISTER (GAP-018 proposed resolution via ADR-0007 — not closed; opened GAP-022–025).
- Depends on ADR-0002 (APPROVED) and ADR-0004–0006 (still `UNDER REVIEW`); did not treat under-review ADRs as approved. Did not alter APPROVED FND-003 or ADR-0001–0003. No Malaysian partnerships, IP ownership policy, PoC schemas, timetable percentages or exaggerated national/economic claims. No commit.

### Iteration 4 — ADR-0006 stage transition / Exploration Floor / pathway mobility (2026-09-14)

- Drafted ADR-0006 (`UNDER REVIEW`): stage transition via Developmental Window + Readiness Evidence + Student Voice + Human Review; dominant-stage/overlap as Core; Exploration Floor as protected breadth dimensions (no Core fixed %); pathway bridging and proportional mobility governance; portable vs pathway-specific capability.
- Updated ADR_INDEX (ADR-0006 body; former Oman-reference proposal renumbered to proposed ADR-0012), MASTER_INDEX, GAP_REGISTER (GAP-019/020 proposed resolution via ADR-0006 — not closed).
- Depends on ADR-0004 and ADR-0005 (both still `UNDER REVIEW`); did not treat them as approved. Did not alter APPROVED FND-003 or ADR-0001–0003. No Malaysian Year mapping, timetable percentages, Competency Graph schemas or AI scoring. No commit.

### Documentation portal (presentation layer only)

- Added VitePress documentation portal under `portal/` to render/navigate existing Markdown, ADRs and GAP Register in the browser.
- Does not approve ADRs, close gaps, or change educational architecture. Source Markdown remains authoritative.

### Research — GAP-021 evidence pack EV-0001 (2026-09-14)

- Created `docs/12-evidence/EV-0001-developmental-stage-boundaries.md`: cited developmental and comparative-education pack for ADR-0005 windows.
- Verdict: approximate windows and Choose provisional concentration → Deepen formal Major/Minor reasonably supported; exact-age cut-offs and early formal tracking challenged; Produce distinct-stage vs late-Deepen overlay remains open for human decision.
- Updated EVIDENCE_REGISTER, RESEARCH_GAPS (RP-B), GAP_REGISTER (GAP-021 not closed), MASTER_INDEX.
- Did not alter ADR-0004/0005 text or approve either ADR. No Malaysian Year mapping. No commit.

### Iteration 3 — ADR-0005 developmental stage boundaries (2026-09-14)

- Drafted ADR-0005 (`UNDER REVIEW`): typical overlapping developmental windows for Explore→Discover→Choose→Deepen→Produce; readiness principle; provisional concentration in Choose; formal Major+Minor entry at Deepen.
- Updated ADR_INDEX (retitled ADR-0005; deferred Six Worlds maps to proposed ADR-0011 / GAP-008), MASTER_INDEX, GAP_REGISTER (GAP-003/004 proposed resolution via ADR-0005; added GAP-021 evidence pack).
- Did not alter APPROVED FND-003 or ADR-0001–0003. ADR-0004 remains `UNDER REVIEW`. No Malaysian Year mapping. No commit.

### Iteration 2 — ADR-0004 student development architecture (2026-09-13)

- Drafted ADR-0004 (`UNDER REVIEW`): Explore→Discover→Choose→Deepen→Produce; Exploration Floor; reversibility; Major+Minor in principle; human-governed pathway discovery; mission-authenticity progression principle.
- Updated ADR_INDEX, MASTER_INDEX, GAP_REGISTER (narrowed GAP-003/004/018; added GAP-019/020).
- Did not alter APPROVED FND-003 or ADR-0001–0003. No Malaysian ages/regulation. No commit.

### Ratification — FND-003 + ADR-0001/0002/0003 APPROVED (2026-09-13)

- Applied controlled human-review amendments to Concept Constitution and ADR-0001–0003.
- Promoted FND-003 and ADR-0001–0003 to `APPROVED` v1.0.0.
- Created `docs/12-evidence/SUPERSEDED_CONCEPTS.md` (SUP-001–SUP-007).
- Updated ADR_INDEX, MASTER_INDEX, GAP_REGISTER, CLAIMS_REGISTER.
- Closed Core design conflicts only; Malaysia implementation gaps remain open.
- No new pedagogy sections; no commit in this step.

### Iteration 1 — Concept Constitution + founding ADRs (2026-09-13)

- Drafted `docs/00-foundation/CONCEPT_CONSTITUTION.md` v0.2.0 as `UNDER REVIEW` (dual-layer architecture; Lab-First/not Lab-Only; exploration before specialisation; Core vs country).
- Drafted ADR-0001, ADR-0002, ADR-0003 as `UNDER REVIEW` (Core vs country; Lab-First/Mission-Based; formal examination safety layer + parallel capability assessment).
- Updated `ADR_INDEX.md`, `MASTER_INDEX.md`, and `GAP_REGISTER.md` (clarified Core non-mandates for boarding/data; added GAP-016–018; recorded superseded exam-abolition direction).
- No other blueprint sections drafted. No documents marked APPROVED. No commit in this iteration.

### Iteration 0 — Documentation framework bootstrap (2026-09-13)

- Established empty blueprint repository at `D:\School_Project\tarbiyat-malaysia-school-blueprint` as the controlled documentation home.
- Initialised local Git repository (no commits yet).
- Created root governance files: `README.md`, `PROJECT_RULES.md`, `MASTER_INDEX.md`, `CHANGELOG.md`, `GAP_REGISTER.md`.
- Created `docs/00-foundation` through `docs/13-decisions` skeletons, ADR template and proposed ADR index.
- Created `references/` inventory and copied original source materials from sibling `D:\School_Project` folders without renaming originals.
- Created `outputs/` placeholder for later generated deliverables.
- Documented pre-flight findings: Oman version drift, Malaysia residential/sovereignty language vs Core brief, duplicate/misfiled files, and major research gaps.

### Notes

- No educational blueprint content beyond skeletons and governance.
- No claim of Malaysian regulatory compliance or government endorsement.

---

## Versioning note

Until the first approved baseline, treat documentation versions as `0.x.y` DRAFT. First approved Core baseline should become `1.0.0`.
