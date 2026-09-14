# ADR-0007 — Mission Ecosystem, Authenticity and Institution-in-Residence Architecture

| Field | Value |
|---|---|
| Document ID | `ADR-0007` |
| Version | `0.1.0` |
| Status | `UNDER REVIEW` |
| Date | `2026-09-14` |
| Deciders | Human lead (TBD) |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `FND-003` APPROVED; `ADR-0001` APPROVED; `ADR-0002` APPROVED; `ADR-0003` APPROVED; `ADR-0004` UNDER REVIEW; `ADR-0005` UNDER REVIEW; `ADR-0006` UNDER REVIEW |
| Related gaps / claims | GAP-008, GAP-010, GAP-011, GAP-016, GAP-018, GAP-019, GAP-020, GAP-021; GAP-022–GAP-025; GAP-026–GAP-031 (via ADR-0014) |
| Source documents | `FND-003` §§2–4, 9, 10; ADR-0002; ADR-0004 mission-authenticity principle; Architecture Iteration 5 brief (2026-09-14) |

---

## Title

Mission Ecosystem, Authenticity and Institution-in-Residence Architecture

## Status

`UNDER REVIEW` — not APPROVED.

## Context

ADR-0002 (APPROVED) establishes Lab-First, Mission-Based learning with progressive intensity, a production cycle, productive failure, and a broad family of labs. FND-003 (APPROVED) requires real-world connection under law and safeguarding, and names Industry-in-Residence as a Core-enabled feature without specifying how authenticity scales or how partners are governed.

ADR-0004 (UNDER REVIEW) states that mission authenticity should generally increase with developmental maturity, but leaves thresholds, gates and operational architecture open (`GAP-018`). ADR-0005 and ADR-0006 (both UNDER REVIEW) supply stage windows, readiness, Exploration Floor as protected dimensions, and pathway mobility — but do not define how Tarbiyat sources, educationalises, governs and delivers missions across stages.

Without a Core mission-ecosystem architecture:

- Tarbiyat risks collapsing into classroom projects, STEM clubs, hackathons, career days, token internships or one-off workshops;
- authenticity may jump too early to external stakeholders, or remain permanently simulated;
- partners may gain unsupervised influence over learning, assessment, IP or student labour;
- engineering/technology missions may crowd out the Six Worlds;
- “Industry-in-Residence” may become marketing language without sustained operating meaning;
- national/strategic capability ambitions may either be absent or hard-coded as Malaysia-specific Core rules.

**Dependency note:** This ADR assumes ADR-0004’s stage meanings and progressive-authenticity principle, ADR-0005’s readiness and windows, and ADR-0006’s Exploration Floor / mobility constraints. Those ADRs remain `UNDER REVIEW`. If any is materially revised before approval, this ADR must be re-checked. This ADR does **not** silently treat ADR-0004–0006 as approved.

This ADR remains Core / country-neutral. It does not invent Malaysian partnerships, ministry agreements, strategic-sector lists as Core law, IP ownership rules, venture equity, Proof of Capability schemas, software workflows, timetable percentages or Malaysian Year mappings.

## Decision

Tarbiyat Core adopts a **governed Mission Ecosystem** as the continuous architecture through which age-appropriate real-world and realistically scoped problems are sourced, screened, educationalised, executed, reviewed and captured as capability evidence.

1. **Mission** is an architectural category distinct from Activity and Project (definitions below). Not every learning task is a Mission.
2. External organisations may provide **problems, expertise, context and review**. They do **not** control the student’s education, assessment, safeguarding or pathway.
3. Mission authenticity **increases progressively** with learner maturity and readiness. **Safeguarding and educational purpose never decrease** as authenticity rises.
4. Authenticity progression uses **levels A–F** (Designed Context → Advanced Contribution) as Core guidance, not birthday cut-offs or rigid one-to-one stage locks.
5. Missions are sourced from a multi-channel **Mission Source Ecosystem** (internal, community, university/research, industry, public, strategic institutions) — as architecture, not as a claim that named partners already exist.
6. **Strategic Capability Missions** are a Core class for country/project-priority domains. Core does **not** decide any country’s priorities. Country profiles may later define national priority classes (including optional Strategic Localisation Missions).
7. **Institution-in-Residence** is the Core sustained-partner model. Industry-in-Residence is one subtype among others (university, research, public institution, creative practitioner, community specialist).
8. Every significant external mission requires defined educational purpose, scope, responsible adults, safeguarding level, data classification, IP expectations, partner interaction limits, assessment/review role and exit conditions.
9. **Education-First / No Student Exploitation:** the learner is not a low-cost worker; the Mission Lab is not an outsourcing centre.
10. Real problems must undergo **Mission Educationalisation** before student delivery.
11. Student-generated missions are legitimate and enter the same governance process.
12. External stakeholder review informs usefulness feedback; it does **not** replace Tarbiyat educational capability judgment.
13. Productive mission failure remains educationally valid; commercial deployment is not the primary success metric.
14. Real deployment into regulated, safety-critical or licensed domains requires professional/legal authority beyond student status.
15. Mission evidence may feed future Proof of Capability architecture (`GAP-010`); schemas are not defined here.
16. IP / creator rights / micro-venture rules are addressed in ADR-0014 (`UNDER REVIEW`); no automatic transfer of student work to school or partner.
17. Mission work coexists with Formal Recognition Layer obligations (ADR-0003); partners cannot displace mandatory curriculum or recognition requirements.
18. Learners should hold a **balanced mission portfolio**; no learner’s mission time should be dominated by external corporate priorities. Core does not set portfolio percentages.

---

## Definition of Mission

A **Mission** is a bounded educational challenge that:

- pursues a **meaningful purpose** (inquiry, improvement, creation, service, investigation or strategic capability development);
- operates under **defined constraints** (time, scope, safety, data, resources, ethics);
- requires **disciplinary and/or interdisciplinary substance**;
- generates **inspectable evidence of capability**;
- includes **critique, iteration and reflection**;
- may be connected to a **genuine external need or stakeholder**, but need not be commercial or external.

A **Strategic Capability Mission** is a Mission aimed at developing learner capability in a domain of institutional, community or national strategic importance as defined later by the applicable country/project profile — while remaining educationally governed by Tarbiyat.

Missions are **not** defined as Project-Based Learning or Problem-Based Learning alone. Those pedagogies may appear inside missions; Mission is the architectural unit of the Tarbiyat Learning Engine’s production and investigation work (ADR-0002).

---

## Mission vs Activity vs Project

| Category | Meaning | Typical use |
|---|---|---|
| **Activity** | Short learning task; practice, drill, demonstration or micro-exercise | Skill practice, Knowledge Studio exercises, safety drills |
| **Project** | Structured piece of work producing an outcome; may lack authentic purpose, external stake or full evidence/reflection cycle | Display projects, limited studio briefs, exam coursework artefacts where required |
| **Mission** | Bounded educational challenge with purpose, constraints, capability evidence, critique/iteration and reflection; optionally linked to genuine external need | Core Learning Engine production unit |
| **Strategic Capability Mission** | Advanced or priority-framed Mission in a strategic domain (country/project-defined later) | Later Deepen/Produce; not required for every learner |

**Protection of the term:** Ordinary worksheets, decorative displays, unscoped “fun days” and one-off enrichment events are **not** Missions. Calling something a Mission without meeting the Mission Quality Standard dilutes the architecture.

---

## Mission Authenticity Progression

Authenticity increases progressively. Safeguarding intensity and educational purpose **do not decrease** as authenticity rises — they remain binding and may increase with risk.

### Levels (Core guidance)

| Level | Name | Meaning |
|---|---|---|
| **A** | Designed Context | Teacher/mentor-designed authentic-context challenge; no real external dependency |
| **B** | Realistic Simulation | Real standards, data patterns or constraints without an external client depending on the result |
| **C** | Observed Real Problem | Investigation of an actual school, community, environmental or institutional problem under supervision |
| **D** | Partner-Informed | Approved external partner contributes problem framing, expertise or feedback; Tarbiyat retains educational control |
| **E** | Partner-Connected | Genuine external problem with structured partner interaction under safeguards |
| **F** | Advanced Contribution | Advanced work that may support research contribution, public implementation, industrial testing, deployment pathways, IP protection or commercialisation — only where lawful, educationally appropriate and professionally supervised |

Levels are **not** birthday gates. Readiness, safeguarding classification, mission risk and human review govern access (consistent with ADR-0005 readiness principle and ADR-0006 human review).

**Not every Mission is commercial or external.** Levels A–C remain first-class architecture, not “lesser” placeholders.

**Proposed resolution of GAP-018:** this progression, stage relationship and governance controls constitute the Core authenticity architecture. Detailed operating standards, risk matrices and campus procedures remain follow-on work. GAP-018 is **not closed** until this ADR is APPROVED.

---

## Relationship to Developmental Stages

Mapping is **conceptual and progressive**, not a rigid one-to-one lock.

| Dominant stage (ADR-0004; UNDER REVIEW) | Typical authenticity emphasis |
|---|---|
| **Explore** | Mostly Levels A–B; carefully educationalised Level C (e.g. school-site problems) |
| **Discover** | Levels B–C across Six Worlds; early safeguarded Level D where readiness supports comparative experience |
| **Choose** | Increasing Levels C–D; meaningful responsibility without premature corporate dependency |
| **Deepen** | Substantial Levels D–E appropriate to pathway concentration; Exploration Floor remains (ADR-0006) |
| **Produce** | Levels E–F where lawful and educationally appropriate; external review possible; deployment still bounded |

**Binding constraints:**

- Learner readiness, safeguarding and mission risk can restrict authenticity below the typical stage emphasis.
- Advanced authenticity does not excuse unsafe, exploitative or recognition-displacing work.
- Exploration Floor and pathway mobility (ADR-0006) continue to apply during partner-connected work.

---

## Mission Source Ecosystem

Tarbiyat operates a multi-channel source ecosystem. Architecture describes the **model**; country/project implementation must later secure actual partnerships. No named partner, ministry or company is claimed here.

### Source channels

| Channel | Illustrative contributors |
|---|---|
| **Internal** | Teachers; Mission Lab teams; student-generated questions; campus operations |
| **Community** | Local communities; NGOs; cultural institutions; environmental and civic organisations |
| **University / research** | Universities; research centres; laboratories; academics; postgraduate researchers |
| **Industry** | Businesses; engineering, technology, manufacturing, finance, creative and professional firms; healthcare organisations where lawful |
| **Public institutions** | Government departments; local authorities; public agencies; public-sector organisations |
| **Strategic institutions** | National laboratories; utilities; infrastructure providers; development agencies; approved national programmes |

Sources supply problems, expertise, context and review. **Educational governance remains with Tarbiyat.**

---

## Strategic Capability Missions

### Core concept

**Strategic Capability Missions** develop learner capability in domains considered strategically important by the applicable **country/project profile**.

Core enables the class. Core does **not** enumerate Malaysia’s (or any country’s) priorities.

### Illustrative country-level categories (not Core mandates)

Food resilience; public health; energy; climate; advanced manufacturing; AI; cybersecurity; transport; agriculture; creative industries; public services; community wellbeing — examples only.

### Related Core subtypes (optional framing for country profiles)

| Term | Intent |
|---|---|
| **Strategic Capability Mission** | Primary Core term for priority-domain missions |
| **Domestic Capability Mission** | Build local capability in a priority domain |
| **Adaptation Mission** | Adapt systems, services or technologies to local conditions |
| **Localisation Mission** | Study how imported technologies/services/systems might be adapted, redesigned, improved or locally developed |

Country profiles may later define **Strategic Localisation Missions**. Core does **not** assume that replacing imports is always desirable or economically valid. **Educational learning remains the first objective.**

“Import substitution” is **not** adopted as the universal Core term.

---

## Six Worlds Coverage

Mission architecture must support **all Six Worlds**, not only engineering, AI or robotics:

1. Engineering & Intelligent Systems  
2. Health & Life Sciences  
3. Enterprise & Economics  
4. Earth, Energy & Built Environment  
5. Creative, Media & Human Communication  
6. Society, Leadership & Public Systems  

### Conceptual mission examples (not curriculum)

| World | Illustrative mission shape |
|---|---|
| Engineering & Intelligent Systems | Prototype an assistive device under safety constraints |
| Health & Life Sciences | Investigate public-health communication or non-clinical health-system improvement (no unlawful clinical practice) |
| Enterprise & Economics | Design a viable social-enterprise model with evidence and ethics review |
| Earth, Energy & Built Environment | Study local energy, water or built-environment challenges |
| Creative, Media & Human Communication | Produce communication, media or design work for a real audience under consent rules |
| Society, Leadership & Public Systems | Analyse a civic/public-service problem and propose an evidence-based intervention |

Detailed World competency maps remain open (`GAP-008`; proposed ADR-0011).

---

## Institution-in-Residence Architecture

### Decision

Core adopts **Institution-in-Residence** as the sustained external-contributor model.

“In Residence” means **sustained operating involvement** in the Mission Ecosystem — not necessarily living on campus, and not a guest-speaker brand label.

### Subtypes (non-mandatory set)

| Subtype | Focus |
|---|---|
| Industry-in-Residence | Industry professionals / firms (Constitution-named subtype) |
| University-in-Residence | Faculty and academic programmes |
| Research-in-Residence | Researchers / research centres |
| Public Institution-in-Residence | Public-sector practitioners and agencies |
| Creative Practitioner-in-Residence | Designers, artists, media practitioners |
| Community Specialist-in-Residence | Community / NGO / civic specialists |

Not every campus must host every subtype. Presence is implementation-dependent.

Operating standards for Institution-in-Residence remain follow-on work (`GAP-023`).

---

## Partner Roles

| Role | Meaning |
|---|---|
| **Guest speaker** | Occasional visit; minimal ongoing operating role |
| **Visiting expert** | Limited expertise input on defined topics or critiques |
| **Mission partner** | Supports one or more Missions under scoped agreements |
| **Institution-in-Residence** | Sustained, governed presence or recurring professional involvement in the Mission Ecosystem |

Escalation of role does **not** escalate partner control over education, assessment or student IP.

---

## Partner Governance

External authenticity creates risk. Core partner-governance principles:

Partners must **not**:

- obtain unsupervised control over students;
- use children as unpaid labour;
- assign unsafe work;
- circumvent safeguarding;
- determine assessment alone;
- take student IP automatically;
- use student personal data without lawful authority;
- impose commercial deadlines that override educational needs;
- convert the campus into a corporate outsourcing facility.

Every **significant external mission** must define, before student delivery:

| Control | Required |
|---|---|
| Educational purpose | Yes |
| Approved scope | Yes |
| Responsible adults | Yes |
| Safeguarding level | Yes |
| Confidentiality / data classification | Yes |
| IP expectations | Yes (no automatic transfer) |
| Permitted partner interaction | Yes |
| Assessment / review role | Yes (non-displacing of Tarbiyat judgment) |
| Exit / termination conditions | Yes |

Detailed legal contracts and operating checklists are not created here (`GAP-022`).

---

## Education-First / No Student Exploitation Principle

**Core rule:**

> The learner is not a low-cost worker and the Mission Lab is not an outsourcing centre.

- Educational value takes priority over partner commercial value.
- A Mission may create real economic, civic or research value.
- Economic value must **not** become a reason to exploit student labour or compromise learning, safeguarding or recognition obligations.
- Repetitive commercial production work offered because students are cheaper than staff is **architecturally rejected** (see Scenario F).

---

## Mission Educationalisation

**Mission Educationalisation** is a formal Core architecture concept:

A real corporate, government, community or research problem is **not** handed directly to children. Tarbiyat converts it into an educational Mission by adjusting:

- scope and complexity;
- prerequisites;
- information access;
- time horizon;
- safety;
- confidentiality;
- developmental appropriateness;
- assessment and evidence opportunities;
- partner interaction intensity.

Educationalisation is human-governed. It is a precondition for Levels D–F and for many Level C missions involving external environments.

---

## Mission Lifecycle

Conceptual lifecycle (human-governed; not a software workflow):

`Source`  
→ `Screen`  
→ `Educationalise`  
→ `Risk / Safeguarding / Data / IP Review`  
→ `Mission Brief`  
→ `Learner / Team Matching`  
→ `Research & Preparation`  
→ `Build / Investigate / Create`  
→ `Test / Critique / Iterate`  
→ `Defend / Present`  
→ `Evidence Capture`  
→ `Reflection`  
→ `Optional Deployment / Research / IP / Venture Pathway`

Notes:

- Aligns with ADR-0002 production cycle where age, safety and mission type permit.
- Not every Mission reaches optional later stages.
- Lifecycle stages may iterate; failure may return work to critique/iterate without educational invalidity.

Detailed mission-risk classification remains follow-on work (`GAP-024`).

---

## Student-Generated Missions

Learners — especially in later stages — may propose:

- problems and research questions;
- inventions and designs;
- community challenges;
- entrepreneurial opportunities;
- artistic productions;
- policy questions.

Proposals enter the **same** screening, educationalisation, safeguarding, data/IP and brief process as externally sourced missions. This preserves student agency without bypassing governance.

---

## Mission Teaming

Missions may include combinations of:

- individual work;
- same-stage teams;
- interdisciplinary / cross-World teams;
- supervised mixed-age teams;
- student + practitioner teams.

Mixed-age and external teaming are **permitted where appropriate**, not mandatory. Safeguarding and developmental appropriateness remain binding.

---

## External Review

Advanced Missions may be presented to or reviewed by domain professionals, universities, community stakeholders, public bodies, industry partners or expert panels.

Distinguish:

| Feedback type | Meaning |
|---|---|
| **Stakeholder usefulness feedback** | Whether the outcome helps a real need, audience or partner |
| **Educational capability judgment** | Whether the learner demonstrated required capability, process, ethics and reflection |

External review **does not replace** Tarbiyat educational assessment. Both may inform the evidence record for future Proof of Capability architecture.

---

## Productive Failure

### Productive mission failure

A prototype fails; a hypothesis is disproven; a design needs revision; a solution is rejected; a business model is unviable; a stakeholder does not deploy the outcome — yet process, reasoning, capability, ethics, iteration, evidence and reflection are strong.

Such outcomes remain educationally valuable.

### Not productive failure

Negligence, unsafe conduct, academic dishonesty or persistent non-engagement (FND-003; ADR-0002).

**Mission quality is not measured solely by commercial deployment or partner satisfaction.**

---

## Deployment Boundary

Distinguish:

| Mode | Meaning |
|---|---|
| **Student demonstration** | Inspectable outcome within educational safeguards |
| **Real deployment** | Use in live operational, public, commercial or regulated environments |

Deployment into healthcare, infrastructure, public systems, financial systems, safety-critical environments or commercial environments may require professional and regulatory approval.

- Students must **never** be represented as licensed professionals where they are not.
- Tarbiyat work may support or prototype professional work.
- Country law controls actual regulated deployment.
- Level F does not automatically authorise live deployment.

---

## Safeguarding

Mission authenticity **never overrides** safeguarding.

Conceptual coverage (detailed policies are future implementation work):

- minor/adult boundaries and supervision;
- physical and emotional safety;
- appropriate communication channels (including digital contact);
- fieldwork and travel;
- confidentiality and sensitive data;
- partner access to campus and learners;
- hazardous equipment and restricted environments.

Partner interaction must be supervised according to the mission’s safeguarding level. Unsupervised partner control is prohibited.

---

## Data / Confidentiality

Conceptual data classifications for Missions:

| Class | Meaning |
|---|---|
| **Open** | Public or freely shareable educational material |
| **Educational Internal** | Shared within Tarbiyat educational governance |
| **Partner Restricted** | Partner-sensitive; limited access under controls |
| **Highly Restricted** | Not appropriate for student access (e.g. identifiable patient records, classified material) |

A Mission may only expose information appropriate to learner age, role and clearance. Partners offering Highly Restricted data must anonymise/redact to an approved class or the Mission must reject that access (see Scenario G).

This ADR does not define security software architecture.

---

## Relationship to Proof of Capability

Missions generate evidence such as artefacts, prototypes, research, designs, code, presentations, observations, testing results, stakeholder feedback, mentor evaluation and reflective analysis.

Mission evidence **may feed** the future Proof of Capability architecture (`GAP-010`). This ADR does **not** design the Proof of Capability schema, verification rules or database.

---

## Relationship to Formal Recognition

Mission work must coexist with recognised academic requirements (ADR-0003).

- External partners cannot displace mandatory curriculum or recognition obligations.
- Mission design should integrate academic concepts where educationally appropriate.
- Examination preparation and Knowledge Studio learning remain legitimate (ADR-0002).
- Timetable balance remains open (`GAP-016`).

---

## Future IP / Creator Rights Dependency

Advanced Mission outcomes may have intellectual-property, research, licensing, venture or public-service potential.

**This ADR does not decide IP ownership.**

Dependency: **ADR-0014** — Student Creator Rights, Intellectual Property, Innovation and Micro-Venture Architecture (`UNDER REVIEW`; proposed resolution of `GAP-025`; related Malaysia feasibility `GAP-011`; downstream `GAP-026`–`GAP-031`).

**No student work automatically becomes school or partner property.**

ADR-0014 remains `UNDER REVIEW` and is **not** treated as approved by this ADR.

---

## Mission Quality Standard

A meaningful Mission should have **most or all** of:

1. Genuine purpose  
2. Defined outcome or question  
3. Developmental appropriateness  
4. Disciplinary (or interdisciplinary) substance  
5. Capability challenge  
6. Ethical / safety boundaries  
7. Evidence-generation opportunity  
8. Critique and iteration  
9. Reflection  
10. Appropriate audience or stakeholder (internal or external)

Work missing most of these should be classified as Activity or Project, not Mission.

---

## Mission Portfolio Balance

No learner should spend all mission time serving external corporate priorities.

The architecture allows a balanced portfolio across types such as:

- personal / student-generated;
- academic / inquiry;
- community;
- strategic capability;
- interdisciplinary;
- external partner Missions.

Core does **not** set portfolio percentages. Balance is a governance expectation for mentors and programme design, consistent with the Exploration Floor (ADR-0006).

---

## Rationale

- Operationalises FND-003 real-world connection and ADR-0002 Mission-Based learning as a continuous ecosystem rather than enrichment events.
- Resolves GAP-018’s architectural gap (authenticity progression + stage relationship + governance) without birthday rigidity or Malaysia-specific partner claims.
- Protects children and educational purpose while enabling genuine external authenticity at maturity.
- Broadens Industry-in-Residence into Institution-in-Residence so all Six Worlds and public/civic partners fit the model.
- Separates educational judgment from stakeholder usefulness and commercial success.
- Keeps Core free of national priority lists while enabling country profiles to define Strategic Capability Missions later.
- Preserves Formal Recognition Layer coexistence and defers IP/PoC schemas to dedicated work.

## Consequences

### Positive

- Clear Core identity for `docs/06-missions-and-production/` and later partner operating standards.
- Progressive authenticity without forcing unsafe early external dependency.
- Six Worlds parity against technology-only capture.
- Explicit rejection of student-labour and outsourcing misuse.
- Pathway for national “youth capability engine” propositions as a **possible architectural consequence**, not a guaranteed economic outcome.

### Risks / costs

- Partner governance requires real operating capacity; under-specified practice until `GAP-022`/`GAP-023`/`GAP-024` are addressed.
- Authenticity levels may be misused as marketing labels without educationalisation.
- External pressure may still attempt to override Education-First without strong campus enforcement.
- Timetable tension with Knowledge Studios and exam prep remains (`GAP-016`).
- Dependency on UNDER REVIEW ADR-0004–0006: material changes there require re-check of this ADR.

### Follow-on work

- Human review of this ADR; close GAP-018 only if APPROVED.
- Partner governance detailed standard (`GAP-022`).
- Institution-in-Residence operating standard (`GAP-023`).
- Mission risk classification (`GAP-024`).
- Student Creator Rights / IP / Micro-Venture ADR-0014 (`UNDER REVIEW`; `GAP-025` proposed resolution — not closed; MY feasibility `GAP-011`; downstream `GAP-026`–`GAP-031`).
- Proof of Capability schema (`GAP-010`) consuming mission evidence.
- Missions section population under `docs/06-missions-and-production/`.
- Six Worlds depth maps (`GAP-008`).
- Country profiles: priority mission classes, localisation framing, deployment law, local safeguarding.

## Alternatives Considered

1. **Classroom projects only** — Rejected: collapses Tarbiyat into conventional schooling with enrichment labels; fails FND-003 / ADR-0002.
2. **External missions only for older students** — Partially absorbed: advanced partner-connected work concentrates later, but Levels A–C authenticity and carefully educationalised real problems remain valid earlier; hard “no real problems until Deepen” rejected.
3. **External real missions at every age** — Rejected: safeguarding and developmental risk; conflicts with progressive authenticity.
4. **Industry-only partnerships** — Rejected: excludes community, university, public and creative Worlds; technology capture risk.
5. **Broader Institution-in-Residence model** — **Selected**: sustained multi-sector contribution with Industry-in-Residence as a subtype.
6. **Uncontrolled partner access** — Rejected: unsafe; education-capture risk.
7. **Commercial-output success as main mission metric** — Rejected: destroys productive failure; invites exploitation; mismeasures learning.
8. **Balanced educational mission portfolio** — **Selected**: multi-source portfolio with Education-First and no corporate domination; no Core percentages.

## Country-Specific Implications

Country / project profiles may later define:

- national priority mission classes and Strategic Capability Mission catalogues;
- public-sector and industrial partner strategies;
- regulatory deployment requirements and licensed-practice boundaries;
- locally appropriate safeguarding and data-protection rules;
- strategic localisation / adaptation priorities (if used);
- terminology adaptations that preserve Core meaning.

**Core must not define Malaysia’s priorities, partnerships or ministry agreements in this ADR.**

Malaysia IP / micro-venture legal feasibility remains `GAP-011` and is not decided here.

## Related Documents

- `docs/00-foundation/CONCEPT_CONSTITUTION.md` (APPROVED) — especially §§2–4, 9, 10
- ADR-0001, ADR-0002, ADR-0003 (APPROVED)
- ADR-0004, ADR-0005, ADR-0006 (UNDER REVIEW — not treated as approved)
- Future: `docs/06-missions-and-production/`; Proof of Capability (`GAP-010`); ADR-0014 Student Creator Rights (`UNDER REVIEW`; `GAP-025`)
- `GAP_REGISTER.md`

## Open Questions

1. Detailed partner-governance operating standard and agreement templates (`GAP-022`).
2. Institution-in-Residence staffing, presence patterns and quality expectations (`GAP-023`).
3. Mission risk classification matrix linking authenticity level, safeguarding and data class (`GAP-024`).
4. Student Creator Rights / IP / Micro-Venture — ADR-0014 (`UNDER REVIEW`; `GAP-025` not closed; MY `GAP-011`; `GAP-026`–`GAP-031`).
5. How mission evidence maps into Proof of Capability verification (`GAP-010`).
6. Stage/country timetable expression of mission intensity vs Knowledge Studios / exam prep (`GAP-016`).
7. Minimum Discover World-exposure package before Deepen concentration (related `GAP-008`; ADR-0005/0006 open questions).
8. Whether Produce remains a distinct dominant stage or late-Deepen overlay (ADR-0005 / EV-0001 open point) — authenticity Level F must remain coherent either way.
9. How Exploration Floor protected dimensions are evidenced during intensive partner-connected Deepen/Produce missions (ADR-0006).

## Explicit Non-Claims

This ADR does **not**:

- approve itself or close GAP-018;
- treat ADR-0004, ADR-0005 or ADR-0006 as APPROVED;
- invent Malaysian government, university or industry partnerships or claim any have agreed;
- define Malaysia’s strategic sectors as Core law;
- adopt “import substitution” as the universal Core term;
- decide IP ownership, licensing splits or venture equity;
- build Proof of Capability database schemas or software mission workflows;
- set timetable or portfolio percentages;
- map Malaysian school Years or licensing claims;
- create procurement promises or claim commercial/national savings;
- guarantee that a school becomes a national capability engine or produces macroeconomic outcomes;
- authorise students to practise as licensed professionals;
- claim uniqueness, government endorsement or regulatory approval.
