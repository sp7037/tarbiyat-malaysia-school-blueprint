# ADR-0007 — Mission Ecosystem, Authenticity and Institution-in-Residence Architecture

| Field | Value |
|---|---|
| Document ID | `ADR-0007` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Date | `2026-09-14` |
| Approved | `2026-09-17` |
| Deciders | Human architectural review (Mission Authenticity / GAP-018 review) |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `FND-003` APPROVED; `ADR-0001` APPROVED; `ADR-0002` APPROVED; `ADR-0003` APPROVED; `ADR-0004`–`ADR-0006` APPROVED; `ADR-0011` APPROVED; `ADR-0016` APPROVED; `ADR-0019` APPROVED; `ADR-0020` APPROVED; creator-rights context `ADR-0014` UNDER REVIEW; faculty context `ADR-0015` UNDER REVIEW (not treated as approved) |
| Related gaps / claims | GAP-018 (Closed by this ADR); GAP-022 Closed by MIS-001 APPROVED; GAP-023 Closed by MIS-002 APPROVED; GAP-024 Closed by MIS-003 APPROVED; GAP-025 Closed by ADR-0014; GAP-011; GAP-026–GAP-031 |
| Source documents | `FND-003` §§2–4, 9, 10; ADR-0002; ADR-0004 mission-authenticity principle; Architecture Iteration 5 brief (2026-09-14); Integrated Mission Authenticity human review (2026-09-17) |

---

## Title

Mission Ecosystem, Authenticity and Institution-in-Residence Architecture

## Status

`APPROVED`

## Revision history

| Version | Date | Notes |
|---|---|---|
| 0.1.0 | 2026-09-14 | Initial UNDER REVIEW draft |
| 0.1.1 | 2026-09-14 | Editorial iteration (Campus Live Workflow; Deployment Boundary; Scenario F/H/I/J) |
| 1.0.0 | 2026-09-17 | APPROVED after Mission Authenticity / GAP-018 human review; closes GAP-018; dependency hygiene for APPROVED ADR-0004–0006 / 0011 / 0016 / 0019 / 0020; ADR-0014 / 0015 remain UNDER REVIEW; MIS-001–003 remain DRAFT |

## Context

ADR-0002 (APPROVED) establishes Lab-First, Mission-Based learning with progressive intensity, a production cycle, productive failure, and a broad family of labs. FND-003 (APPROVED) requires real-world connection under law and safeguarding, and names Industry-in-Residence as a Core-enabled feature without specifying how authenticity scales or how partners are governed.

ADR-0004 (APPROVED) states that mission authenticity should generally increase with developmental maturity, and left thresholds, gates and operational architecture open (`GAP-018`). ADR-0005 and ADR-0006 (APPROVED) supply stage windows, readiness, Exploration Floor as protected dimensions, and pathway mobility — but do not alone define how Tarbiyat sources, educationalises, governs and delivers missions across stages.

Without a Core mission-ecosystem architecture:

- Tarbiyat risks collapsing into classroom projects, STEM clubs, hackathons, career days, token internships or one-off workshops;
- authenticity may jump too early to external stakeholders, or remain permanently simulated;
- partners may gain unsupervised influence over learning, assessment, IP or student labour;
- engineering/technology missions may crowd out the Six Worlds;
- “Industry-in-Residence” may become marketing language without sustained operating meaning;
- national/strategic capability ambitions may either be absent or hard-coded as Malaysia-specific Core rules.

**Dependency note:** This ADR assumes ADR-0004’s stage meanings and progressive-authenticity principle, ADR-0005’s readiness and windows, and ADR-0006’s Exploration Floor / mobility constraints (all now APPROVED). It uses ADR-0014 and ADR-0015 only as **under-review context**. Those ADRs remain `UNDER REVIEW` and are **not** treated as approved.

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
15. Mission evidence may feed Proof of Capability architecture (**ADR-0016** APPROVED; `GAP-010` Closed); operating PoC detail remains `GAP-038`–`GAP-044`.
16. IP / creator rights / micro-venture rules are addressed in ADR-0014 (`UNDER REVIEW`); no automatic transfer of student work to school or partner.
17. Mission work coexists with Formal Recognition Layer obligations (ADR-0003); partners cannot displace mandatory curriculum or recognition requirements.
18. Learners should hold a **balanced mission portfolio**; no learner’s mission time should be dominated by external corporate priorities. Core does not set portfolio percentages.

---

## Definition of Mission

A **Mission** is a bounded educational challenge that:

- pursues a **meaningful purpose** (inquiry, improvement, creation, service, investigation or strategic capability development);
- operates under **defined constraints** (time, scope, safety, data, resources, ethics);
- requires **meaningful learner agency** appropriate to developmental stage (not mere execution of adult instructions);
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

**Resolution of GAP-018:** this progression, stage relationship and governance controls constitute the Core authenticity architecture. Detailed operating standards and campus procedures remain follow-on work under `GAP-023` / `GAP-031` where still open; partner governance and Mission risk method are now APPROVED via MIS-001 / MIS-003.

---

## Relationship to Developmental Stages

Mapping is **conceptual and progressive**, not a rigid one-to-one lock.

| Dominant stage (ADR-0004 APPROVED) | Typical authenticity emphasis |
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

## Campus Live Workflow and Educational Production Environments

A Tarbiyat campus **may** operate supervised **Campus Live Workflow** environments — sometimes called educational production, research, service or innovation units — in which learners encounter **sustained real workflows**, not only one-off Missions.

**Defining feature:** **real workflow** (specifications, stakeholders, quality standards, deadlines, documentation, practitioner supervision, inspectable outcomes). **Not** a requirement for commercial revenue or mandatory Core facilities.

Illustrative forms (examples only; **not** Core-mandated units): fabrication/prototyping; software/digital production; media/design studio; research/service laboratory; sustainability/energy/water unit; enterprise/service studio; community systems lab.

Campus Live Workflow environments:

- source **internal** Missions and recurring production learning;
- may serve campus, community or partner needs under **Mission Educationalisation** and Education-First rules;
- remain **educational institutions**, not factories, outsourcing centres or disguised employment programmes.

### Architectural guardrails

Campus Live Workflow participation must respect:

1. **Education-First** — learning and capability development precede commercial output.
2. **Voluntary / developmentally appropriate participation** — learners may decline roles that are not appropriate; mixed-age and intensity rules apply.
3. **Supervision** — Educator, Practitioner, Technical Professional and safeguarding oversight as proportionality requires (ADR-0015 UNDER REVIEW context — not approved by this ADR).
4. **Safeguarding** — unchanged or increased with authenticity and risk.
5. **Safety / licensing** — no unlicensed professional practice; regulated deployment stays bounded (Deployment Boundary below).
6. **Workload / time protection** — production rhythm must not consume Formal Recognition obligations or rest (ADR-0019 APPROVED; campus clocks via `GAP-048`).
7. **Authorship / IP protection** — ADR-0014 context (UNDER REVIEW); no automatic appropriation.
8. **Quality assurance** — professional standards apply as **learning standards**, not production quotas.
9. **Customer / stakeholder boundary** — stakeholders inform usefulness; they do not control assessment, pathways or curriculum.
10. **Commercial / revenue separation** — revenue, if any, is governed transparently; education is not profit-first schooling.
11. **Learner exit / right to decline** — where lawful and operationally feasible.
12. **No production target determining academic progression** — output volume or commercial success is not a graduation gate.

**Rejected patterns:** child labour; disguised employment; production quotas; profit-first schooling; unsafe professional practice; forced commercial activity; uncompensated appropriation of learner work; repetitive commercial work because students are cheaper than staff (Scenario F).

Detailed campus typology, equipment lists and unit operating procedures belong in `docs/06-missions-and-production/`, `docs/09-campus-blueprint/` (ADR-0020 APPROVED functional campus rules) and country profiles — not as Core law here.

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

Detailed World competency maps are APPROVED in ADR-0011 (`GAP-008` Closed). Mission World-tagging significance thresholds remain follow-on (`GAP-047`).

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

Operating standards for Institution-in-Residence: `MIS-002` APPROVED (`GAP-023` Closed).

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

Deployment is **graded**, not binary. Higher modes require stronger governance; lower modes remain first-class educational outcomes.

| Mode | Meaning | Typical governance |
|---|---|---|
| **Educational prototype** | Inspectable build for learning, critique and iteration within Mission safeguards | Mission Team; no external operational dependency |
| **Validated prototype / output** | Tested outcome meeting defined educational quality criteria; may be suitable for limited next use | Documented test/critique; risk review as needed |
| **Internal campus use** | Used inside Tarbiyat operations (e.g. campus tool, display, internal service pilot) under school governance | Safeguarding, data class, IP expectations clear |
| **Supervised real-world use** | Used with real users/stakeholders under tight adult and legal bounds (not full public/commercial rollout) | Enhanced safeguarding, consent, professional supervision |
| **Public deployment** | Broader non-commercial or community release where lawful and appropriate | Publication/consent; may exclude minors from unsupervised public roles |
| **Commercial deployment** | Revenue, licensing or market use | Professional/legal authority; Creator Rights Review where relevant (ADR-0014); never automatic from Level F |

Earlier modes do **not** require later deployment for educational validity.

Deployment into healthcare, infrastructure, public systems, financial systems, safety-critical environments or commercial environments may require professional and regulatory approval beyond student status.

- Students must **never** be represented as licensed professionals where they are not.
- Tarbiyat work may support or prototype professional work.
- Country law controls actual regulated deployment.
- Authenticity Level F does **not** automatically authorise live, public or commercial deployment.

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

Mission evidence **may feed** Proof of Capability (**ADR-0016** APPROVED). This ADR does **not** design PoC operating procedures (`GAP-038`–`GAP-044`). **Proof ≠ Participation:** Mission participation alone does not create a Capability Claim; artefacts alone do not prove capability; contribution must be attributable under ADR-0016.

---

## Relationship to Formal Recognition

Mission work must coexist with recognised academic requirements (ADR-0003).

- External partners cannot displace mandatory curriculum or recognition obligations.
- Mission design should integrate academic concepts where educationally appropriate.
- Examination preparation and Knowledge Studio learning remain legitimate (ADR-0002; ADR-0019 Learning-Time Architecture APPROVED).
- Campus clocks / numeric planning ranges remain open (`GAP-048`).

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
4. Meaningful learner agency appropriate to stage  
5. Disciplinary (or interdisciplinary) substance  
6. Capability challenge  
7. Ethical / safety boundaries  
8. Evidence-generation opportunity  
9. Critique and iteration  
10. Reflection  
11. Appropriate audience or stakeholder (internal or external)

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

- Partner governance requires real operating capacity; under-specified practice until campus enforces APPROVED MIS-001 / MIS-003 and closes remaining I-in-R / template gaps.
- Authenticity levels may be misused as marketing labels without educationalisation.
- External pressure may still attempt to override Education-First without strong campus enforcement.
- Timetable tension with Knowledge Studios and exam prep is constrained by ADR-0019; campus exemplars remain `GAP-048`.
- I-in-R / template operating detail: I-in-R now APPROVED via MIS-002; templates remain DRAFT until `GAP-031` closed.

### Follow-on work

- Partner governance detailed standard (`GAP-022`; MIS-001 APPROVED — Closed).
- Institution-in-Residence operating standard (`GAP-023`; MIS-002 APPROVED — Closed).
- Mission risk classification (`GAP-024`; MIS-003 APPROVED — Closed).
- Student Creator Rights / IP / Micro-Venture ADR-0014 (`APPROVED`; `GAP-025` Closed; MY feasibility `GAP-011`; downstream `GAP-026`–`GAP-031`).
- Faculty / Mission Team capacity ADR-0015 (`APPROVED`; PEO DRAFT companions — not closed).
- Proof of Capability operating detail (`GAP-038`–`GAP-044`; POC-001 DRAFT — not closed).
- Mission World-tagging significance (`GAP-047`).
- Country profiles: priority mission classes, localisation framing, deployment law, local safeguarding.
- Mission Operating Templates (`GAP-031`; MIS-TPL-001 / MIS-FRM-* DRAFT — not closed).

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
- ADR-0001, ADR-0002, ADR-0003, ADR-0004–0006, ADR-0011, ADR-0016, ADR-0019, ADR-0020 (APPROVED)
- ADR-0014, ADR-0015 (`UNDER REVIEW` — context only; not approved by this ADR)
- `docs/06-missions-and-production/` — MIS-001 / MIS-002 / MIS-003 (`APPROVED`; GAP-022 / 023 / 024 Closed); MIS-TPL-* (`DRAFT`; GAP-031 — not closed)
- `GAP_REGISTER.md` — GAP-018 Closed by this ADR

## Open Questions

1. Detailed partner-governance operating standard and agreement templates (`GAP-022`).
2. Institution-in-Residence staffing, presence patterns and quality expectations (`GAP-023` Closed by MIS-002 APPROVED; PEO individual authorisation remains GAP-033).
3. Mission risk classification matrix linking authenticity level, safeguarding and data class (`GAP-024`).
4. Student Creator Rights / IP / Micro-Venture — ADR-0014 (`UNDER REVIEW`; `GAP-025` not closed; MY `GAP-011`; `GAP-026`–`GAP-031`).
5. How mission evidence maps into PoC operating verification (`GAP-038`–`GAP-044`; ADR-0016 APPROVED).
6. Campus clocks / stage-package exemplars for Mission intensity (`GAP-048`; ADR-0019 APPROVED constraints).
7. Mission World-tagging significance thresholds (`GAP-047`).
8. Faculty / Mission Team capacity ratios and Mentor caseload (ADR-0015 UNDER REVIEW; GAP-032–036).
9. Campus Live Workflow unit operating standards beyond ADR-0020 functional campus rules.
10. Country-profile Strategic Capability Mission catalogues and deployment law.

## Test Scenarios

| ID | Scenario | Architectural result |
|---|---|---|
| **A** | Teacher re-labels a worksheet as a “Mission” | Fails Mission Quality Standard; classify as Activity |
| **B** | Year 7 team runs Level A designed-context engineering Mission | Valid Mission; no external partner required |
| **C** | Company offers a live production line task to save labour costs | Rejected — Education-First; not outsourcing (Scenario F) |
| **D** | NGO provides a real community problem; school educationalises before delivery | Valid Level C–D pathway with partner governance controls |
| **E** | Advanced team seeks public deployment of a health-related tool | Requires Deployment Boundary escalation; no unlicensed clinical practice |
| **F** | Partner proposes repetitive commercial assembly because students are cheaper | Architecturally rejected; Mission Educationalisation or refusal |
| **G** | Partner offers identifiable patient records for a “real data” Mission | Highly Restricted — anonymise/redact or reject access |
| **H** | Campus fabrication unit runs recurring internal jobs with rotating learner teams | Permitted as Campus Live Workflow if guardrails 1–12 hold; not mandatory |
| **I** | Industry-in-Residence engineer visits twice per year only | Guest/Visiting Expert at best — not Institution-in-Residence |
| **J** | Learner declines participation in a commercial-leaning production unit | Decline respected where lawful/feasible; no academic penalty for refusal |

## Explicit Non-Claims

This ADR does **not**:

- approve ADR-0014, ADR-0015, MIS-001–003, PEO standards or POC-001;
- invent Malaysian government, university or industry partnerships or claim any have agreed;
- define Malaysia’s strategic sectors as Core law;
- adopt “import substitution” as the universal Core term;
- decide IP ownership, licensing splits or venture equity;
- build Proof of Capability operating schemas or software mission workflows;
- set timetable or portfolio percentages;
- map Malaysian school Years or licensing claims;
- create procurement promises or claim commercial/national savings;
- guarantee that a school becomes a national capability engine or produces macroeconomic outcomes;
- authorise students to practise as licensed professionals;
- claim uniqueness, government endorsement or regulatory approval.
