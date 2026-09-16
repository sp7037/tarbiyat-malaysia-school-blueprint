# Pilot Commissioning and Readiness Architecture

| Field | Value |
|---|---|
| Document ID | `IMP-001` |
| Version | `0.1.1` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-16` |
| Country scope | `CORE` (country overlays via Country Profile; Malaysia first focus) |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `FND-003` APPROVED; `ADR-0001`–`0003` APPROVED; `ADR-0016` APPROVED; `ADR-0019` APPROVED; `ADR-0020` APPROVED; developmental/Mission/Worlds/faculty/creator context `ADR-0004`–`0007` / `0011` / `0014`–`0015` / `0017`–`0018` UNDER REVIEW (not treated as approved); `PEO-001`–`005` DRAFT; `MIS-001`–`003` / Mission templates DRAFT; `POC-001` / `POC-FRM-*` DRAFT; `CAM-001` DRAFT companion; `MY-001` / `MY-002` DRAFT |
| Related gaps | GAP-051 (this pack — proposed, not closed); related GAP-001 / 002 / 005 / 006 / 007 / 037; GAP-022–024 / 031–036; GAP-038–044; GAP-048; GAP-050 |
| Source documents | Approved Core ADRs above; Government + Investor Presentation Readiness Stress Test pattern (2026-09-15/16); Architecture brief — Pilot Commissioning (2026-09-16) |

> **Authority:** This is **implementation architecture**, not a Core ADR and not country law. It applies APPROVED Core decisions to first-pilot commissioning. UNDER REVIEW ADRs and DRAFT PEO/MIS/POC/MY artefacts are **context only**. If this file conflicts with an APPROVED ADR, the ADR prevails. Do **not** invent enrolment numbers, ratios, m², fees, launch dates, salaries or Malaysian approvals.

---

## 1. Purpose

Answer, before the first pilot learners arrive:

> **What must be demonstrably ready before Tarbiyat is allowed to receive its first pilot learners?**

This pack defines **institutional readiness architecture** — coordinated capability across governance, law, programme, people, safeguarding, Missions, facilities, recognition, PoC, data, families, partners, operations and evaluation.

It is **not** a business plan, construction schedule, ERP build, financial model, Gantt chart, licence application or fixed headcount plan.

---

## 2. Commissioning principle

### Tarbiyat launches capabilities, not merely facilities

A building, hired teachers, marketed enrolments, purchased equipment, government meetings or a website do **not** by themselves make a Tarbiyat school ready.

A campus may physically exist and still be **NOT READY** if:

- staff are not lawfully authorised and educationally prepared for their Tarbiyat functions;
- Missions are not governed (risk, educationalisation, ownership);
- safeguarding and stop-work routes are incomplete;
- Formal Recognition route for enrolled learners is unresolved where required;
- learning-time package is incoherent (double workload / project-day theatre / permanent exam capture);
- facility access is unsafe or functionally missing;
- PoC / assessment operations cannot run at minimum integrity;
- country legal requirements for operating a school with those learners are unresolved;
- parent/learner expectations are misleading.

Conversely, a **modest** campus may be ready if required **functions** are genuinely available through safe internal and/or governed external capability (ADR-0020 Minimum Viable Tarbiyat Campus — functional, not flagship).

### No-sunk-cost rule (implementation)

**Capital already spent does not justify opening an unsafe, unlawful or educationally unready school.**

This is an implementation discipline consistent with Education-First / safeguarding / Formal Recognition coexistence — not a new Core ADR.

---

## 3. Scope and non-claims

**In scope:** commissioning lifecycle; readiness gates; blocker classification; Go / Conditional Go / No-Go; pilot scope control; authenticity test; dry-run; contingency; evaluation domains; readiness record; Core vs Country vs Campus vs Pilot vs Software classification.

**Out of scope / non-claims:**

- inventing student numbers, staff/Mentor ratios, weekly %, m², CAPEX/OPEX, fees, salaries, launch dates or KPI targets;
- inventing Malaysian licensing, curriculum-board or ministry approvals (`GAP-001`, `GAP-002`, `GAP-007`);
- approving UNDER REVIEW ADRs or DRAFT PEO/MIS/POC packs;
- closing GAP-038–044, GAP-009, GAP-048, GAP-050 or related gaps;
- designing Tarbiyat OS / database schemas;
- claiming external PoC acceptance (`GAP-043`).

---

## 4. Commissioning lifecycle (minimal)

| Phase | Meaning | Typical exit evidence |
|---|---|---|
| **1. Architecture Ready** | Approved Core + relevant DRAFT ops known; pilot pack exists | This document accepted for use as **DRAFT working commissioning baseline** for the project |
| **2. Country Path Clarified** | Legal establishment / recognition / people / safeguarding duties mapped for the intended school category | Country Path Brief (citations); unresolved items classified as Hard Blocker or Conditional |
| **3. Pilot Scope Defined** | Stages, Mission intensity, partner dependency and risk envelope stated without Core dilution | Pilot Scope Statement |
| **4. Capability Pack Ready** | Gates A–I evidence assembled | Pilot Readiness Record (`IMP-FRM-001`) populated |
| **5. Dry Run** | Controlled rehearsal without full live learner cohort (or with tightly controlled limited rehearsal if lawfully allowed) | Dry-Run Report |
| **6. Readiness Review** | Independent-enough review of evidence, blockers, residual risk | Readiness Review minutes |
| **7. Launch Decision** | Go / Conditional Go / No-Go | Signed Launch Decision Record |
| **8. Controlled Launch** | First learners under monitored conditions and residual-condition tracking | Launch conditions log |
| **9. Stabilisation** | Intensive monitoring; rapid stop/substitute authority | Stabilisation review notes |
| **10. Pilot Evaluation** | Planned learning domains produce evidence | Pilot Evaluation Report |
| **11. Revision** | Ops/architecture adjustments from evidence | Change log / gap updates |
| **12. Expansion Decision** | Whether/how to widen stages, intensity, sites | Expansion Decision Record |

Phases may overlap slightly. **Launch Decision (Go or Conditional Go) must not precede Dry Run + Readiness Review.** Residual Conditional Go items may remain *after* those reviews only if they are **not** Hard Blockers (see §20–§21).

---

## 5. Readiness gates

Gates are **families**, not hundreds of checklist micro-items. Evidence depth scales with pilot risk and country category.

For every gate: **purpose · minimum evidence · decision owner · launch blockers · may remain provisional · may defer · dependencies · records · stop/go/escalation**.

### Gate A — Governance & Authority Ready

| Element | Content |
|---|---|
| **Purpose** | Ensure lawful operator identity and clear decision rights before learners are entrusted |
| **Minimum evidence** | Named operator/legal entity (or documented path to create it before enrolment); educational authority map; school leadership authority; safeguarding lead authority; Mission approval authority; stop-work authority; partner authority limits; incident escalation route; PoC verification governance owner; complaints/challenge routes (school + PoC) |
| **Decision owner** | Project/operator governing body + designated school leader (titles as country/project defines — **do not invent board composition**) |
| **Blocks launch** | No identifiable operator; no stop-work authority; no safeguarding lead; no Mission approval owner; decision rights conflicting/unclear for safety-critical acts |
| **Provisional OK** | Detailed org charts; full committee manuals; long-term governance evolution (`GAP-007` ownership model may remain open **only if** interim operator authority is lawful and documented) |
| **Defer** | Mature multi-campus governance; full Institution-in-Residence portfolio |
| **Dependencies** | Country Path (Gate B); ADR-0001 Core vs country |
| **Records** | Authority Map; escalation chart; Launch Decision signatories |
| **Stop/go** | **No-Go** if Hard Blockers open; escalate to operator authority |

### Gate B — Country / Legal Path Ready

| Element | Content |
|---|---|
| **Purpose** | Separate must-resolve legal duties from research-in-progress |
| **Minimum evidence** | Country Path Brief covering: school establishment/licensing pathway; curriculum/recognition route for pilot learners; teaching/employment authority; safeguarding duties; facilities/building obligations applicable to chosen category; data/privacy duties; foreign-staff permissions if used; professional regulation boundaries; child-work / Mission-production boundaries |
| **Decision owner** | Operator with competent legal/education-policy advice (citations required) |
| **Blocks launch** | Unresolved **must-resolve** items for the chosen school category (see §6) |
| **Provisional OK** | Long-term expansion category undecided if pilot category is clear; MY-002 used as DRAFT mapping aid only |
| **Defer** | Non-pilot pathways; optional boarding if not used (`GAP-005`); sovereign-DC preference language (`GAP-006`) if lawful privacy-conscious alternative documented |
| **Dependencies** | `GAP-001`, `GAP-002`, `GAP-007`, `GAP-037` / `MY-002` DRAFT; country building rules |
| **Records** | Country Path Brief; unresolved legal register |
| **Stop/go** | Unresolved Class A / Hard Blocker legal items → **No-Go**. Conditional Go **cannot** waive Hard Blockers. Residual Conditional items may only be Class B/C items that remain lawful under an interim cited basis, with owner, mitigation and review date |

### Gate C — Educational Programme & Learning-Time Ready

| Element | Content |
|---|---|
| **Purpose** | Ensure learners experience Tarbiyat, not branded conventional schooling |
| **Minimum evidence** | Pilot Scope Statement (stages served); programme outline covering Mission-Based learning + Knowledge Studios + Formal Recognition coexistence (ADR-0002 / 0003 / 0019); Six Worlds exposure logic appropriate to pilot stages (ADR-0011/0017 context); pathway discovery / Exploration Floor posture for those stages (ADR-0004–0006 / 0018 context); **Learning-Time Package** demonstrating Integrated Programme (Mission Mode, Studio support, Recognition preparation, Mentoring, embedded evidence/reflection) without double workload, project-day theatre or permanent exam capture |
| **Decision owner** | Educational leadership (Educator-led programme design with Practitioner/Mentor input as functions) |
| **Blocks launch** | No Mission-Based learning plan; no Formal Recognition coexistence plan where required; Learning-Time Package fails ADR-0019 Primary Organising Logic / Integrated Programme tests; pilot authenticity test fails (§23) |
| **Provisional OK** | Full Produce-stage depth; complete Major/Minor catalogues; Graph schema (`GAP-009`); numeric stage clocks (`GAP-048` remains Open) |
| **Defer** | Non-served stages; advanced Cross-World catalogues |
| **Dependencies** | ADR-0019 APPROVED; ADR-0002/0003; under-review stage/Worlds ADRs as context |
| **Records** | Pilot Scope Statement; Learning-Time Package; authenticity checklist |
| **Stop/go** | Authenticity or Learning-Time failure → **No-Go** or redesign scope |

### Gate D — People Ready

| Element | Content |
|---|---|
| **Purpose** | Hired ≠ ready; functions must be authorised, onboarded and capacity-reviewed |
| **Minimum evidence** | Role clarity for Educator / Practitioner / Mentor / Mission Lead / leadership / safeguarding / technical authority / external adults (ADR-0015 + PEO context); lawful teaching/employment authority for intended acts; Practitioner authorisation/currency where used (PEO-001/002 context); Mentor capacity review for pilot load (PEO-005 context); Mission Team capacity review (PEO-004 context); onboarding/induction complete for launch cohort staff; absence/succession cover for critical roles |
| **Decision owner** | School leader + people/faculty lead; Practitioner authorisation owner as designated |
| **Blocks launch** | Critical roles vacant without cover; staff lacking lawful authority for intended teaching/Mission acts; no safeguarding lead; Mission intensity exceeds reviewed capacity with no mitigation |
| **Provisional OK** | Universal Core ratios (none exist); full Six Worlds specialist depth; complete PEO pack human acceptance (`GAP-032`–`036` not closed) |
| **Defer** | Full faculty development programme maturity (`GAP-036`); long-term succession academies |
| **Dependencies** | Gate B; `MY-002` DRAFT for MY; PEO DRAFT context |
| **Records** | Staffing readiness matrix; authorisation register; capacity reviews |
| **Stop/go** | Capacity/lawful-authority Hard Blockers → **No-Go** |

### Gate E — Safeguarding & Risk Ready

| Element | Content |
|---|---|
| **Purpose** | School-wide safety capability before any Mission authenticity claims |
| **Minimum evidence** | Safeguarding policy; reporting routes; visitor/external-adult access control; learner supervision rules; stop-work procedure; Mission risk review method (MIS-003 context); off-site activity rules; data protection basics; emergency response; incident recording; prohibited-activities list |
| **Decision owner** | Safeguarding lead + school leader; Mission risk approvals per MIS method |
| **Blocks launch** | No reporting route; no stop-work; no incident recording; external adults can access learners without control; no Mission risk method |
| **Provisional OK** | High-authenticity / high-risk Mission classes not in pilot envelope |
| **Defer** | Advanced partner Campus Live Workflows beyond pilot scope |
| **Dependencies** | Gate A/B/D; MIS-003 DRAFT context |
| **Records** | Safeguarding pack; emergency plan; risk method adoption note |
| **Stop/go** | Any Hard Blocker → **No-Go**; distinguish school-wide readiness from per-Mission approval |

### Gate F — Campus / Capability Access Ready

| Element | Content |
|---|---|
| **Purpose** | Functional MVC capability (ADR-0020), not flagship capital |
| **Minimum evidence** | Demonstrable access to: Knowledge capability; Mission capability; mentoring/critique; basic production/support; safeguarding/control; formation access; specialist access internal and/or governed external; external network reliability for planned activities; storage/logistics sufficient for pilot Missions; facility↔staff compatibility (no theatre equipment without authorised people) |
| **Decision owner** | School leader + facilities/operations lead |
| **Blocks launch** | Essential **functions** missing with no safe substitute; unsafe access; specialist equipment without authorised supervision |
| **Provisional OK** | Flagship labs; complete inventories (`GAP-050` Open); boarding estate if day model |
| **Defer** | Expandable facility families not needed by Pilot Scope |
| **Dependencies** | ADR-0020; Gate D/E; GAP-050 supplies later inventory method — **not** invented here |
| **Records** | Capability Access Map (internal/external); safety clearances as country requires |
| **Stop/go** | Essential **function** unavailable or unsafe → **No-Go**. If the function is met via named governed external access (ADR-0020 Class C), that is satisfaction of the requirement — not a waiver. Conditional Go may only track residual non-Hard access logistics with owners/monitoring |

### Gate G — Mission & Partner Ready

| Element | Content |
|---|---|
| **Purpose** | Starter Mission capability exists; partners are optional unless design depends on them |
| **Minimum evidence** | Starter Mission portfolio of **functional sufficiency** (briefs + educationalisation + risk class + staff ownership + facility match + evidence strategy + fallback options + Recognition-season compatibility); partner due diligence **only for partners actually used**; Education-First / no exploitation controls (MIS-001 context); continuity plan if partner withdraws |
| **Decision owner** | Mission Lead / educational leadership; partner governance owner |
| **Blocks launch** | No usable starter Missions; planned authenticity exceeds risk/staff/facility readiness; sole-dependency on one partner with no fallback |
| **Provisional OK** | Institution-in-Residence; large partner roster; Strategic Capability Missions |
| **Defer** | High-risk Mission classes; commercial Micro-Ventures |
| **Dependencies** | Gates C–F; ADR-0007 / MIS DRAFT context; ADR-0014 context for IP-sensitive Missions |
| **Records** | Starter Mission Pack; partner register (if any); fallback matrix |
| **Stop/go** | Insufficient Mission readiness → **No-Go**; partners usually **not** Hard Blockers unless scope requires them |

### Gate H — Formal Recognition & PoC / Assessment Ready

| Element | Content |
|---|---|
| **Purpose** | Dual attainment operable at minimum integrity (ADR-0003 + ADR-0016) |
| **Minimum evidence** | **Formal Recognition:** clear route for pilot learners (board/curriculum/exam participation as applicable); coverage plan; parent communication; transcript/certification responsibility; timetable implications; transfer implications. **PoC minimum:** claim drafting; evidence capture; contribution attribution for team work; support disclosure; human verification; provenance basics; challenge/correction route; privacy exclusions; visibility/consent basics; explicit separation from Formal Recognition marks |
| **Decision owner** | Recognition lead + PoC governance owner |
| **Blocks launch** | Formal Recognition route unresolved for enrolled learners where country requires it (`GAP-002` likely Hard Blocker for MY until mapped); PoC cannot run without self-certification or participation-badge collapse; counselling/safeguarding data would enter PoC by default |
| **Provisional OK** | Full POC-001 human acceptance (`GAP-038`–`044` not closed); external PoC acceptance (`GAP-043` Open — **not** a launch blocker); Graph binding (`GAP-009`); signed-link products (`GAP-041`) |
| **Defer** | Employer marketing of PoC; blockchain; universal claim taxonomies |
| **Dependencies** | ADR-0003/0016 APPROVED; POC-001 DRAFT; Gate C |
| **Records** | Recognition Route Brief; PoC Minimum Operating Pack; parent recognition explainer |
| **Stop/go** | Recognition Hard Blocker → **No-Go**; PoC integrity failure → **No-Go** |

### Gate I — Data / Records & Learner–Family Ready

| Element | Content |
|---|---|
| **Purpose** | Safe records + honest onboarding before enrolment |
| **Minimum evidence** | Records capability for: learner identity; guardian; enrolment; safeguarding; staff authority; practitioner authorisation; Mission approval; facility risk; attendance where required; assessment; PoC claims/evidence; incidents; partner access; consent; Formal Recognition; audit trail. Parent/learner information covering model, Formal Recognition, Missions, partners, fieldwork, PoC, AI/tool use, workload, safeguarding, IP/contribution, visibility, pathway flexibility, complaint/challenge rights. Marketing claims screened against non-promises |
| **Decision owner** | School leader + data/privacy owner + admissions owner |
| **Blocks launch** | No safeguarding/incident records capability; no consent for planned data uses; misleading marketing promises (university/employment/leadership guarantees; invented PoC acceptance) |
| **Provisional OK** | Full digital platform; Tarbiyat OS; long retention schedules (`GAP-044` / `GAP-006`) |
| **Defer** | Advanced analytics; public showcase profiles |
| **Dependencies** | Gates A/B/E/H; ADR-0016 privacy rules |
| **Records** | Records Minimum List (manual/digital classed); Parent–Learner Information Pack; claims screen log |
| **Stop/go** | Misleading promises or missing critical records → **No-Go** |

### Gate J — Dry Run / Operational Rehearsal Ready

| Element | Content |
|---|---|
| **Purpose** | Demonstrate operational capability before full live launch |
| **Minimum evidence** | Dry-Run Report covering proportionate rehearsals from §18; defects logged with owners; Critical defects closed or mitigated |
| **Decision owner** | School leader + readiness reviewer |
| **Blocks launch** | Critical dry-run failures (safeguarding route, stop-work, Mission risk, Recognition-season clash with no mitigation, sole partner collapse with no fallback) |
| **Provisional OK** | Non-critical polish items |
| **Defer** | Full production theatre |
| **Dependencies** | Gates A–I |
| **Records** | Dry-Run Report; defect log |
| **Stop/go** | Critical defects open → **No-Go** or Conditional Go with explicit conditions |

### Gate K — Pilot Evaluation Ready

| Element | Content |
|---|---|
| **Purpose** | Know what the pilot must learn before expansion rhetoric |
| **Minimum evidence** | Pilot Evaluation Plan covering domains in §21; data collection methods that do not invent numeric targets; linkage to evidence-hungry gaps (e.g. GAP-042, 048, 050, PEO capacity) |
| **Decision owner** | Educational leadership + evaluation owner |
| **Blocks launch** | No evaluation plan (pilot would learn nothing structured) |
| **Provisional OK** | Full research design; external publication plan |
| **Defer** | Multi-year longitudinal studies |
| **Dependencies** | All prior gates |
| **Records** | Pilot Evaluation Plan |
| **Stop/go** | Missing plan → Conditional Go at best |

### Gate L — Launch Decision

| Element | Content |
|---|---|
| **Purpose** | Institutional Go / Conditional Go / No-Go — not founder intuition alone |
| **Minimum evidence** | Completed `IMP-FRM-001`; Dry-Run Report; Readiness Review; residual condition register; named veto/stop authorities |
| **Decision owner** | Operator governing authority + school leader; safeguarding lead holds safety veto; legal advisor flags legal Hard Blockers |
| **Blocks launch** | Any Hard Blocker open; refusal of named veto holders |
| **Provisional OK** | Recorded Conditional Go items with owners, dates, monitoring |
| **Defer** | Expansion decisions |
| **Dependencies** | Gates A–K |
| **Records** | Launch Decision Record |
| **Stop/go** | See §20 |

---

## 6. Country / regulatory readiness classes

| Class | Meaning | Examples (illustrative — country must cite) |
|---|---|---|
| **A. Must resolve before any launch** | Legal/duty prerequisites for receiving learners in the chosen school category | Establishment/licensing pathway; mandatory safeguarding duties; lawful teaching authority for staff acts; recognition route for enrolled learners if statutory; building occupancy/safety clearances required for use |
| **B. May remain under development** | Important research not blocking lawful pilot category | Long-term ownership model options (`GAP-007`); optional boarding (`GAP-005`); preferred data-residency branding (`GAP-006`) if lawful alternative exists; full Six Worlds specialist licensing maps beyond pilot roles |
| **C. Depends on final school category** | Requirements change with private/international/national/etc. category | Exact teacher registration pathways; foreign EP routes; lab codes; curriculum board mapping (`GAP-001`/`002`/`037`) |

**MY-002** is DRAFT evidence for people-mapping research — **not** legal advice and **not** approval of GAP-037.

---

## 7. Educational programme readiness (detail)

Pilot must present actual Tarbiyat characteristics for **served stages**:

| Required posture | Notes |
|---|---|
| Lab-First / Mission-Based learning | ADR-0002 |
| Knowledge Studios retained | Not abolished |
| Formal Recognition coexistence | ADR-0003 |
| Learning-Time Integrated Programme | ADR-0019 |
| Six Worlds exposure logic | Intensity scaled to pilot stages; Discover exposure principles if Discover served (ADR-0017 context) |
| Pathway discovery / Exploration Floor | As applicable to stages (under-review context) |
| Formation / physical / civic dimensions | Where Pilot Scope includes them — privacy-safe |

**Not required:** all future stages fully built; complete Graph; full Produce ecosystem.

---

## 8. Learning-time package (ADR-0019)

Before launch, campus demonstrates planning artefacts showing:

- one integrated programme (anti-double-workload);
- Mission Mode present as organising logic (anti-project-day);
- Knowledge Studio support;
- Formal Recognition preparation without permanent capture of the week;
- Mentoring time;
- embedded evidence/reflection (not portfolio homework factory);
- capacity-coupled intensity (PEO context).

**Do not invent universal percentages.** `GAP-048` remains Open for exemplars / pilot-informed ranges.

---

## 9. People readiness (detail)

| Test | Fail condition |
|---|---|
| Recruitment complete enough? | Critical functions uncovered |
| Role clarity? | Educator/Practitioner/Mentor/Mission Lead confused with status tiers or clinical roles |
| Lawful authority? | Staff would perform regulated acts without required authority |
| Authorisation / currency? | Practitioners used beyond authorised domain/currency |
| Onboarding? | Launch staff not inducted on safeguarding, Mission risk, PoC integrity, Education-First |
| Supervision? | Novice Practitioners/Mentors unsupported |
| Mentor / Mission capacity? | Reviewed load exceeds safe capacity with no mitigation |
| Absence cover? | Single-point failure on safeguarding or Mission Lead with no deputy |

Do **not** approve ADR-0015 or PEO-001–005 in this pack.

---

## 10. Safeguarding & risk (detail)

| Layer | Ready means |
|---|---|
| **School-wide** | Policy, reporting, visitors, supervision, stop-work, emergencies, incidents, data basics |
| **Mission-specific** | Each Mission risk-reviewed and approved before learner delivery (MIS-003 context) |

Pilot must not launch Missions until **school-wide** layer exists. High-authenticity Missions remain gated individually.

---

## 11. Facility readiness (ADR-0020)

Use **functional MVC**. `GAP-050` must eventually supply evidence-dependent inventories/phasing methods — **this pack does not invent them**.

Pre-launch evidence: Capability Access Map proving Essential functions for Pilot Scope, including governed external substitutes where used.

Anti-theatre: no specialist theatre without authorised people and learning purpose.

---

## 12. Mission readiness — functional sufficiency

Launch requires a **starter Mission portfolio** sufficient for the Pilot Scope period — not “we will invent Missions later.”

Functional sufficiency means each starter Mission has: brief; educationalisation; risk class; owner; facility/people match; evidence strategy; fallback; Recognition-season compatibility note.

**Do not invent Mission counts.** Sufficiency is judged against Pilot Scope intensity and calendar, not a universal number.

---

## 13. Partner readiness

| Rule | Effect |
|---|---|
| Partners are **valuable, not automatic launch dependencies** | Unless Pilot Scope requires them |
| Due diligence before child access | Identity, role, safeguarding, data, IP, funding-influence limits, exit |
| Continuity | Pilot must not collapse if one sponsor leaves |
| Education-First | Partners do not buy educational control (MIS-001 context) |

---

## 14. Formal Recognition readiness (ADR-0003)

Before enrolment, Recognition Route Brief must state what parents can rely on. If Malaysia mapping remains unresolved (`GAP-002`), treat as **likely Hard Blocker** for any pilot that enrols learners needing that recognition — until a cited route exists for the chosen category.

Do **not** claim recognition not established.

---

## 15. PoC / assessment readiness (ADR-0016 + POC-001 DRAFT)

| Item | Pilot posture |
|---|---|
| GAP-038 verification/moderation SOP | **Conditional / Must Mitigate** — minimum human verification method required; full SOP acceptance may remain pilot-learning |
| GAP-039 challenge/correction | **Conditional** — basic route required |
| GAP-040 presentation packs | **Pilot-learning / Post-launch** — privacy-safe views required; polished packs deferrable |
| GAP-041 verifiability mechanism | **Pilot-learning** — institutional accountability required; product choice open |
| GAP-042 workload thresholds | **Pilot-learning** — significance selectivity required; empirical load from pilot |
| GAP-043 external acceptance | **Post-launch / research** — **not** a launch blocker |
| GAP-044 retention/privacy overlays | **Conditional** — Core exclusions + lawful consent minimum; country retention citations may trail if interim lawful basis exists |

Do **not** close these gaps by drafting this pack.

---

## 16. Data / records readiness

| Class | Meaning |
|---|---|
| **A. Must exist (digital or manual)** | Safeguarding/incidents; enrolment/identity; staff authority; Mission approval; critical consents; Formal Recognition records; PoC claim/evidence/verification for claims actually made |
| **B. May exist manually** | Many operational logs; early PoC files; capacity reviews |
| **C. Future software optimisation** | Dashboards; signed verification links; cross-campus analytics |

**Tarbiyat OS is not a launch prerequisite** if safe operations can run with governed manual/digital hybrids.

---

## 17. Parent / learner readiness

Parents/learners must understand (age-appropriate): Tarbiyat model; Formal Recognition; Missions; partners; fieldwork; PoC; AI/tool use; workload; safeguarding; IP/contribution; data/profile visibility; pathway flexibility; complaint/challenge rights.

**Forbidden marketing promises:** guaranteed university admission; guaranteed entrepreneurship; guaranteed leadership; guaranteed employment; guaranteed external PoC acceptance.

---

## 18. Dry-run / simulation architecture

Before full live launch, run a **proportionate** non-learner or controlled rehearsal set. Do **not** invent a universal rehearsal count.

Rehearse as applicable to Pilot Scope:

| Scenario | Why |
|---|---|
| One Mission lifecycle | Educationalisation → delivery → evidence |
| Mission risk review | Gate E/G |
| Practitioner authorisation | Gate D |
| Mentor allocation | Capacity honesty |
| Room/facility conflict | Gate F + ADR-0019 modes |
| External partner arrival | Visitor control |
| Incident / stop-work | Gate E |
| PoC evidence capture | Gate H |
| Contribution dispute | Integrity |
| Parent query | Gate I |
| Recognition-season pressure | ADR-0019 coexistence |
| Staff absence | Continuity |
| Partner cancellation | Fallback |
| Confidential data handling | Privacy |

Critical failures block launch until closed or Conditionally mitigated.

---

## 19. Failure / contingency matrix

| Scenario | Default posture |
|---|---|
| A. Practitioner fails to arrive | Substitute authorised Practitioner / degrade Mission authenticity / postpone Mission — do not improvise with unauthorised adults |
| B. Mission partner withdraws | Activate fallback Mission / internal authentic task — do not cancel Tarbiyat character |
| C. Facility unavailable | Relocate to approved alternate / external governed access / postpone — no unsafe workarounds |
| D. Safeguarding concern | Stop affected activity; escalate; protect learners — launch/activity pause as required |
| E. Exam schedule intensifies | Apply Recognition Season Rule (ADR-0019); protect Mission Mode from permanent capture |
| F. Learner cannot safely join Mission | Alternative learning path; no coercion into unsafe authenticity |
| G. Mentor caseload overload | Reduce intensity / add Mentor capacity / pause non-critical guidance load — do not pretend coverage |
| H. PoC verification backlog | Raise significance threshold; pause new high-stakes claims; do not auto-verify |
| I. Technology platform fails | Fall back to manual records; do not halt safeguarding/recognition critical paths |
| J. Key staff leaves | Activate succession cover; reduce Pilot Scope intensity if needed |
| K. Regulatory approval delayed | **No-Go / delay launch** — do not enrol into unlawful operation |
| L. Unexpected IP / commercial value | Creator Rights Review path (ADR-0014 context); pause public claims |
| M. Serious incident | Stop activity; emergency plan; operator review before restart |

Actions: **continue · degrade safely · substitute · suspend · escalate · stop launch/activity**.

---

## 20. Launch-blocker classification

| Class | Meaning |
|---|---|
| **HARD BLOCKER** | Launch unlawful, unsafe or educationally non-Tarbiyat until resolved |
| **CONDITIONAL / MUST MITIGATE** | Launch only if named mitigation, owner and review date exist |
| **PILOT-LEARNING ITEM** | Intentionally studied during pilot; must not be silently pretended complete |
| **POST-LAUNCH IMPROVEMENT** | Quality/scale upgrade after stabilisation |

### Classification guidance (repository-aligned)

| Item | Typical class |
|---|---|
| School licence / establishment unresolved for category | HARD BLOCKER |
| Formal Recognition route unresolved for enrolled learners | HARD BLOCKER (where required) |
| Safeguarding reporting / stop-work absent | HARD BLOCKER |
| Critical staff lacking lawful authority | HARD BLOCKER |
| Essential MVC function missing with no substitute | HARD BLOCKER |
| Learning-Time Package fails authenticity / ADR-0019 tests | HARD BLOCKER |
| Misleading parent marketing | HARD BLOCKER until corrected |
| Flagship fabrication lab not built | Usually NOT blocker if governed specialist access exists |
| Universal Mentor ratio unknown | NOT blocker if actual capacity reviewed |
| External employer PoC acceptance unknown | NOT blocker (`GAP-043`) |
| Full POC-001 acceptance incomplete | CONDITIONAL if minimum integrity pack exists |
| GAP-048 numeric ranges absent | PILOT-LEARNING |
| GAP-050 inventories absent | PILOT-LEARNING / POST-LAUNCH (functional access still required) |
| GAP-007 long-term ownership model | Often CONDITIONAL if interim operator lawful |

---

## 21. Go / Conditional Go / No-Go

| Decision | Meaning |
|---|---|
| **Go** | No Hard Blockers; Conditional items none or fully closed; Dry Run + Readiness Review complete; dry-run critical defects closed |
| **Conditional Go** | No Hard Blockers; Dry Run + Readiness Review complete; only residual Conditional items remain, each with owner, mitigation, monitoring cadence and expiry; safeguarding and legal veto holders consent |
| **No-Go** | Any Hard Blocker open; Dry Run skipped or critical dry-run failure; authenticity failure; veto exercised |

### Hard Blockers are never Conditional

**Conditional Go must not be read as permission to open despite unresolved Hard Blockers.** Legal permission to operate, required recognition route, safeguarding capability, lawful teaching authority, essential facility safety, emergency/incident capability and material child-protection duties **cannot** be waived, deferred-into-Conditional, or overridden by marketing, investor pressure or sunk cost.

Conditional Go is limited to residual matters that:

- do **not** make operation unlawful;
- do **not** make operation unsafe;
- do **not** destroy Core authenticity;
- have explicit mitigation, owner and review point;
- can realistically be monitored after launch.

It is **not** a managerial loophole for “we will fix it later.”

**Process:** evidence owners complete `IMP-FRM-001` → Dry Run → readiness review → Launch Decision Record. **Who can stop launch (including late):** designated operator authority; school leader; safeguarding lead (safety veto); legal advisor flag on legal Hard Blockers. Marketing, partners or investors do **not** control the launch decision. Exact board composition remains country/project decision (`GAP-007`).

Conditional Go items are monitored in Stabilisation; breach → suspend affected activity or revert to No-Go for expansion. A **No-Go** remains available even after substantial capital spend (no-sunk-cost rule, §2).

---

## 22. Pilot scope control

| Allowed scope reduction | Forbidden Core dilution |
|---|---|
| Fewer stages served | Abolish Missions / Lab-First for a conventional timetable |
| Lower Mission concurrency / risk envelope | Replace Missions with occasional project days |
| Fewer external partners | Pretend partners are optional while design depends on one sponsor |
| Lower facility intensity / more external access | Theatre labs without people/purpose |
| Narrower specialist depth | Fake Six Worlds as career-day tokens if Discover is claimed |
| Smaller PoC claim volume | Participation badges / self-certification |

**Rule:** smaller complexity is legitimate; **fake Tarbiyat is not.**

---

## 23. Pilot authenticity test

A pilot may **not** call itself Tarbiyat if it is effectively:

> conventional timetable + occasional project day + branded innovation lab + guest speakers + digital badges.

**Minimum features that must be present** (no percentages):

1. Mission-Based learning as primary organising logic for served programme (ADR-0002 / 0019).
2. Knowledge Studios / disciplined teaching retained — not abolished.
3. Formal Recognition coexistence where required (ADR-0003) — not replaced by PoC.
4. Human-governed capability evidence path (ADR-0016) — Proof ≠ Participation.
5. Practitioner–Educator–Mentor functional intent (even if thin at pilot) — not teacher-only theatre.
6. Safeguarding + Mission risk governance before authenticity claims.
7. Functional MVC access (ADR-0020) — capabilities, not flagship cosmetics.
8. Honest parent communication — no invented external endorsements.

---

## 24. Pilot evaluation architecture

Before launch, define learning domains **without inventing target numbers**:

| Domain family | Examples |
|---|---|
| **A. Educational outcome** | Engagement; capability growth; Formal Recognition performance; Six Worlds exposure quality; pathway clarity |
| **B. Operating** | Workload; Mentor/Mission capacity; PoC verification load; facility utilisation; partner quality; staff sustainability |
| **C. Safety / compliance** | Incidents; near-misses; safeguarding responsiveness; legal condition tracking |
| **D. Economic (non-doctrinal)** | Operating-cost implications for future planning — not Core fee-setting |

Pilot should generate evidence useful to `GAP-042`, `GAP-048`, `GAP-050` and PEO capacity ranges — **without pretending evidence already exists**.

---

## 25. Leadership decision domains (dashboard concept)

No software; no invented RAG thresholds. Leadership must be able to see:

- Mission load vs capacity
- Mentor load
- staff absence / authorisation gaps
- safety issues / open incidents
- Formal Recognition pressure
- PoC backlog
- learner exposure / participation risks
- facility conflicts
- partner dependencies
- unresolved Conditional Go items

These are **decision domains** for future Tarbiyat OS — not numeric KPIs.

---

## 26. Pilot Readiness Record

Use `IMP-FRM-001` as the single coherent commissioning record:

gate · requirement · evidence · owner · status · unresolved dependency · mitigation · blocker class · approval/review · next review.

Prefer **one** readiness record over dozens of redundant forms. Attach specialised packs (Mission, safeguarding, Recognition, PoC minimum) by reference.

---

## 27. Core vs Country vs Campus vs Pilot vs Software

| Class | Examples |
|---|---|
| **A. Core institutional invariant** | Launch capabilities not facilities; dual attainment; ADR-0019 Integrated Programme; MVC functional essentiality; Proof ≠ Participation; authenticity test (APPROVED Core applied) |
| **B. Country / legal requirement** | Licensing; recognition boards; teacher registration; building occupancy; mandatory safeguarding statutes (`GAP-001/002/037`) |
| **C. Campus operating requirement** | Local Learning-Time Package; facility access map; starter Missions; staff rosters; emergency plans; **no-sunk-cost commissioning discipline** (implementation governance — not a new Core ADR) |
| **D. Pilot-specific configuration** | Stages served; risk envelope; partner use; claim volume; dry-run design |
| **E. Evidence-dependent planning range** | GAP-048 clocks; GAP-050 inventories; PEO capacity ranges; GAP-042 workload |
| **F. Future software** | Dashboards; signed links; automated provenance; Tarbiyat OS workflows |

Do **not** elevate D/E/F into universal Core doctrine without ADR.

---

## 28. “Pilot tomorrow” senior-stakeholder answer

If government says today: *“We support the concept. What must happen before first students?”*

**Tarbiyat answers in stages:**

1. **Clarify country path** — lawful school category, recognition route, staffing authority, safeguarding duties (citations).
2. **Define pilot scope** — which stages and intensity, without diluting Core character.
3. **Assemble capability pack** — people authorised; Learning-Time Package; functional campus access; starter Missions; Formal Recognition + minimum PoC; records; honest family information.
4. **Safeguard and risk-enable** — school-wide safeguarding + Mission risk method.
5. **Dry-run** — rehearse Mission, safety, recognition pressure, absence, partner loss.
6. **Readiness review & launch decision** — Go / Conditional Go / No-Go with named vetoes.
7. **Controlled launch + evaluation** — learn for expansion; do not expand on sunk cost.

No invented dates or budgets in Core architecture.

---

## 29. Investor / government stress-test answers

1. **What are we commissioning?** Institutional capability to run authentic Tarbiyat for a defined Pilot Scope — not a building alone.
2. **Why not just hire teachers and start?** Teachers without Mission governance, recognition coexistence, safeguarding, Learning-Time integrity and PoC honesty produce branded conventional schooling.
3. **What absolutely blocks opening?** Unlawful category; unresolved recognition route where required; missing safeguarding/stop-work; unauthorised critical staff; missing Essential functions; authenticity failure; misleading marketing.
4. **What can be learned in pilot?** Workload, capacity ranges, facility inventories method, PoC operating friction, partner quality, timetable exemplars (`GAP-042/048/050`, PEO ranges).
5. **Start before flagship campus?** Yes, if functional MVC capability exists (including governed external access).
6. **If industry partners not ready?** Use internal authentic Missions / fallbacks; partners are not automatic Hard Blockers.
7. **How know it is Tarbiyat?** Authenticity test (§23) + Learning-Time Package + Mission evidence + dual attainment.
8. **Who can stop launch?** Operator authority, school leader, safeguarding lead (safety), legal Hard Blocker flag.
9. **Evidence before expansion?** Pilot Evaluation Report across educational/operating/safety/(non-doctrinal) economic domains.
10. **Refuse to open after money spent?** Yes — no-sunk-cost rule; unsafe/unlawful/unready schools must not open.

---

## 30. Software-readiness (no coding)

Later Tarbiyat OS could represent: readiness gate; requirement; evidence; owner; dependency; blocker class; mitigation; approval; review date; launch condition; incident; pilot learning item.

**Ambiguities to resolve later:** who is system-of-record for legal advice; how Conditional Go expiry is enforced; linkage between Mission risk records and launch gates; manual vs digital evidence equivalence.

No database schema in this pack.

---

## 31. Related documents

- APPROVED: FND-003; ADR-0001–0003; ADR-0016; ADR-0019; ADR-0020
- UNDER REVIEW context: ADR-0004–0007; 0011; 0014–0015; 0017–0018
- DRAFT ops: PEO-001–005; MIS-001–003; POC-001 / POC-FRM-*; CAM-001; MY-001/002
- `IMP-FRM-001` Pilot Readiness Record
- `GAP_REGISTER.md` — GAP-051; related gaps listed in header

## Revision history

| Version | Date | Notes |
|---|---|---|
| 0.1.0 | 2026-09-16 | Initial DRAFT commissioning architecture; opens GAP-051 |
| 0.1.1 | 2026-09-16 | Human-review hygiene: Hard Blockers never Conditional; Dry Run mandatory before Go/Conditional Go; no-sunk-cost kept as implementation governance; authority wording tightened |
