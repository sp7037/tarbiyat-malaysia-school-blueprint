# ADR-0015 — Practitioner–Educator–Mentor Faculty Architecture

| Field | Value |
|---|---|
| Document ID | `ADR-0015` |
| Version | `0.1.1` |
| Status | `UNDER REVIEW` |
| Date | `2026-09-14` |
| Deciders | Human lead (TBD) |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `FND-003` APPROVED; `ADR-0001` APPROVED; `ADR-0002` APPROVED; `ADR-0003` APPROVED; `ADR-0007` UNDER REVIEW (Mission Ecosystem / Educationalisation / Institution-in-Residence); `ADR-0014` UNDER REVIEW (Creator Rights / conflict of interest); developmental context `ADR-0004`–`ADR-0006` UNDER REVIEW (not treated as approved) |
| Related gaps / claims | GAP-005, GAP-008, GAP-010, GAP-016, GAP-022, GAP-023; opens GAP-032–GAP-037 |
| Source documents | `FND-003` §§4, 6–10; ADR-0002 staff-development consequence; ADR-0007 Mission Educationalisation and partner roles; Architecture Iteration 7 brief (2026-09-14) |

---

## Title

Practitioner–Educator–Mentor Faculty Architecture

## Status

`UNDER REVIEW` — not APPROVED.

## Context

Approved Core architecture requires more than conventional classroom teaching:

- **ADR-0002** organises substantial learning around labs, missions and production, and notes staff development for coaching, safety and critique—not only content delivery.
- **ADR-0003** requires Formal Recognition Layer compatibility alongside Tarbiyat capability evidence.
- **FND-003** names educators, mentors and governors as accountable humans; requires longitudinal pathway discovery under human oversight; enables Industry-in-Residence and real-world connection under law and safeguarding.
- **ADR-0007** (`UNDER REVIEW`) introduces Mission Educationalisation, Institution-in-Residence and Education-First partner limits — but does not define the adult workforce that can operate those controls.
- **ADR-0014** (`UNDER REVIEW`) requires Creator Rights, contribution honesty and conflict-of-interest handling involving educators, practitioners and partners.
- **ADR-0004–0006** (`UNDER REVIEW`) describe progressive stages, Exploration Floor and pathway mobility — implying adult roles that change intensity by stage, without defining those roles.

`docs/08-people-and-governance/` remains a section shell. No Core staffing ADR exists. Historical proposals mention coaches, mentors and academic staff without an operable faculty architecture.

Without a Core faculty architecture:

- Tarbiyat risks defaulting to a **teacher-only** model that cannot sustain Mission Labs, authentic critique, pathway mentoring and Formal Recognition simultaneously;
- industry experts may be placed alone with children as if professional skill equals pedagogy;
- mentoring may collapse into administrative “homeroom”;
- technical safety may be informal or dumped onto overloaded teachers;
- Institution-in-Residence personnel may be treated as automatic faculty;
- commercial partner pressure may capture assessment or pathways;
- specialist services (safeguarding, counselling, SEN) may be wrongly absorbed into “Mentor”;
- Six Worlds coverage may become tech-engineer-heavy.

**Dependency note:** This ADR assumes ADR-0007’s Mission Educationalisation, Education-First and Institution-in-Residence boundary language, and ADR-0014’s Creator Rights / conflict principles where relevant. Those ADRs remain `UNDER REVIEW`. Developmental stage labels from ADR-0004–0006 are used as contextual architecture, **not** as approved law. This ADR does **not** silently treat ADR-0004–0007 or ADR-0014 as approved. If any dependency is materially revised before approval, this ADR must be re-checked.

This ADR remains Core / country-neutral. It does **not** invent Malaysian teacher-registration law, staffing ratios, salary bands, org charts as binding templates, or claim that hybrid professionals already exist at scale.

## Decision

Tarbiyat Core adopts a **Practitioner–Educator–Mentor faculty architecture** organised as **professional functions inside professional learning teams**, capable of supporting:

`Recognised Academic Learning`
+
`Mission-Based Capability Development`
+
`Student Development / Mentoring`
+
`Professional / External Authenticity`

1. **Educator**, **Practitioner** and **Mentor** are Core **faculty functions**, not hierarchical tiers and not necessarily three permanently separate employees.
2. One person may be authorised for **one or more** functions when suitably prepared; multi-capability is valued; **role overload is not assumed**.
3. Terminology such as “Tier-1 engineer / Tier-2 mentor” is **rejected** unless a future ADR demonstrates a compelling, non-hierarchical reason — which this ADR does not.
4. **Technical / Lab Professionals** are a **supporting professional workforce class** outside the three faculty functions (Decision B below), with **independent technical-safety authority** where relevant — not a fourth peer faculty function, and not optional decoration.
5. **Specialist Professional Services** (counselling, safeguarding leads, nursing, SEN, library/information, residential house staff where applicable, career/transition, legal/IP, data/security) remain distinct professions and **must not** be collapsed into Mentor.
6. Substantial Missions are staffed by **proportional Mission Teams**, not by a single heroic classroom teacher.
7. **Mission Educationalisation** is a collaborative adult responsibility (educator + practitioner + safeguarding/technical as needed + mentor where developmental context matters). External organisations do not write Tarbiyat curriculum by default.
8. **Assessment** uses multi-stream professional judgment; no single adult role monopolises final capability judgment. Proof of Capability architecture is drafted in ADR-0016 (`UNDER REVIEW`; proposed resolution of `GAP-010` — not closed).
9. **Pathway decisions** remain human-governed and collective: no Educator, Practitioner, Mentor, parent or AI system independently assigns or prohibits a pathway (FND-003; consistent with ADR-0004–0006 constraints still under review).
10. **Practitioner currency**, **Educator development**, **Practitioner onboarding** and **Mentor preparation** are Core architectural expectations — detailed programmes remain follow-on work.
11. Institution-in-Residence personnel are **not** automatic faculty; access escalates through defined statuses with increasing vetting and supervision.
12. All adults interacting with children are governed by Core safeguarding/vetting principles; country law fills concrete requirements.
13. Faculty intensity **scales with developmental stage**: earlier stages emphasise continuity of Educators and Mentors; later Deepen/Produce may intensify specialist Practitioner involvement.
14. The model must work for **day**, **residential** and **mixed** schools; residential house staffing is a separate operating standard where residential models exist (not a Core boarding mandate — ADR-0001 / GAP-005).
15. Country law may require registered teachers, ratios and leadership qualifications; Core innovation **cannot override** statute. Country profiles map Core functions → legally recognised categories → required qualifications (`GAP-037`).
16. Tarbiyat may act as a **professional bridge** among school, university, industry, community and public institutions as a possible consequence — not a guaranteed economic outcome.

**Major operating principle:**

> Tarbiyat is designed around **professional learning teams** rather than expecting one heroic classroom teacher to supply every kind of expertise.

---

## Faculty Functions

Functions describe **professional responsibility**, not pay rank or prestige.

### Educator

The **Educator** holds professional responsibility for teaching and learning design so that learners can acquire, understand, sequence and demonstrate knowledge and skills under pedagogically sound conditions.

Educators protect Tarbiyat from the error that domain experts automatically know how to teach children and adolescents.

**Typical responsibilities (illustrative, not exhaustive):**

- disciplinary teaching and conceptual foundations;
- literacy and numeracy where relevant;
- direct instruction, seminars and workshops;
- curriculum sequencing and misconception diagnosis;
- learning design and educational differentiation;
- formative assessment and Formal Recognition Layer contribution (ADR-0003);
- learning accessibility;
- contribution to **Mission Educationalisation** (pedagogical transformation of real problems);
- collaboration with Practitioners and Mentors without surrendering educational control to partners.

Educators need not be the sole source of authentic professional technique; they remain accountable for educational coherence.

### Practitioner

The **Practitioner** brings **current or recent authentic domain expertise** into Mission Labs and pathway guidance. Practitioner is **broad**, not limited to technology engineers.

**Illustrative practitioner domains (non-exhaustive):** engineers; scientists; researchers; clinicians in lawful non-clinical educational roles; entrepreneurs; designers; architects; artists; filmmakers; journalists; economists; environmental professionals; craftspeople; policy professionals; public servants; technologists; other domain experts consistent with the Six Worlds and law.

**Typical responsibilities (illustrative):**

- professional standards, techniques and tools;
- Mission Lab practice and authentic critique of prototypes/research/designs;
- mission design input and industry/research/public context;
- professional ethics in the domain;
- external professional networks (under school governance);
- advanced pathway guidance as **evidence and advice**, not unilateral pathway assignment.

A Practitioner without pedagogical preparation does **not** automatically replace an Educator (see Practitioner Onboarding).

### Mentor

The **Mentor** is a serious professional function for **longitudinal student development**, not a residual homeroom administrative duty.

**Typical responsibilities (illustrative):**

- sustained relationship with the learner over time;
- reflective dialogue and character/ethical reflection appropriate to the school’s formation model;
- developmental-stage observation and Exploration Floor awareness (contextual to ADR-0004–0006);
- pathway discussion and Major/Minor guidance as **one input** among others;
- mission debrief support;
- wellbeing observation and early identification of disengagement or overload;
- family communication where age-appropriate and authorised;
- referral to Specialist Professional Services when needed.

**Hard boundary:** Mentors must **not** pretend to be psychologists, physicians, clinical counsellors or designated safeguarding leads unless separately qualified and authorised for those roles. Observation and referral ≠ diagnosis or clinical treatment.

---

## Technical and Specialist Professional Workforce

### Technical / Lab Professional — explicit decision

**Question:** Is Technical / Lab Professional a fourth faculty function, or supporting professional workforce outside the three faculty functions?

**Decision B (selected):** Technical / Lab Professionals are a **Core supporting professional workforce class**, **outside** the Educator–Practitioner–Mentor faculty-function triad.

**Examples:** laboratory technicians; workshop / fabrication specialists; IT and security operators; equipment safety specialists; research technicians; other production-environment professionals.

**Why not a fourth faculty function:**

- The triad names distinct dimensions of **student formation** (teaching design, authentic practice, longitudinal development).
- Technical roles primarily secure **safe, competent operation of production environments** and equipment systems.
- Treating technicians as “faculty tier-four” would either invent a false hierarchy or dilute the triad’s meaning.

**Why not dump this onto Educators/Practitioners alone:**

- Mission Labs with hazardous equipment, complex tooling or regulated environments need explicit technical authority.
- Technical safety standards must **not** be overridden by mentor preference, commercial deadline or educator convenience (see Separation of Responsibilities).

**Mission participation:** Technical Professionals join Mission Teams **by proportionality** whenever equipment, environment or safety complexity requires it. They are first-class adults in the workforce architecture, not invisible support.

### Specialist Professional Services

Distinct from Mentor and from the three faculty functions. Required as appropriate to campus model and law:

- counsellors / psychologists;
- designated safeguarding personnel;
- nurses / medical staff;
- SEN / additional-learning specialists;
- librarians / information specialists;
- residential house staff (where residential models exist);
- career / transition specialists;
- legal / IP specialists for advanced work (linking ADR-0014);
- data / security professionals.

These professions retain their own standards, referral pathways and authority. **Mentor ≠ therapist.** **Educator ≠ safeguarding lead by default.**

---

## Role Combinations

Legitimate combinations (when preparation, authorisation and workload allow):

| Combination | Meaning | Caution |
|---|---|---|
| **Educator + Practitioner** | Domain expert also qualified/skilled in teaching | Valuable hybrid; still needs safeguarding and school onboarding |
| **Educator + Mentor** | Teacher holding advisory responsibility | Common; protect against caseload overload |
| **Practitioner + Mentor** | Domain expert also holding longitudinal mentoring | Only where trained and appropriate; not automatic |
| **Educator + Practitioner + Mentor** | Triple-capable adult | Possible; **must not be assumed** as the default staffing unit |
| **Faculty function + Technical role** | e.g. Practitioner who is also lab safety-authorised | Clear which hat is worn for each decision |
| **Faculty function + Specialist service** | Only if separately qualified (e.g. Educator who is also a registered counsellor) | Dual qualification required; roles still distinguishable |

Architecture values multi-capable adults and rejects the fantasy that every adult must fulfil all three faculty functions at once.

---

## Separation of Responsibilities

Some responsibilities must **not** merge for staffing convenience:

| Boundary | Rule |
|---|---|
| Technical safety vs mentoring | Mentor authority does **not** override technical safety standards |
| Technical authority vs safeguarding | Equipment competence ≠ designated safeguarding authority |
| Practitioner commercial interest vs assessment | Partner/employer commercial goals do **not** determine Tarbiyat assessment (Education-First; ADR-0007) |
| Educator vs pathway monopoly | Educator does **not** independently assign or prohibit pathways |
| Practitioner vs pathway monopoly | Practitioner advice is evidence, not decree |
| Mentor vs pathway monopoly | Mentor cannot unilaterally abandon/force a World or Major/Minor |
| Parent vs pathway monopoly | Family dialogue contributes; does not unilaterally decide |
| AI vs pathway monopoly | Recommendations only (FND-003) |
| External partner vs faculty | Partners are not unsupervised school faculty |
| Mentor vs clinical care | Mentor observes/refers; does not diagnose clinical conditions without qualification |
| Practitioner IP interest vs Creator Rights | Conflict-of-interest and Creator Rights safeguards apply (ADR-0014 under review) |
| Assessment streams | No single feedback stream automatically equals final capability judgment |

---

## Professional Learning Teams

**Principle (selected and refined):** Tarbiyat operates through **professional learning teams**, not heroic lone teachers.

Teams may be organised (non-exclusively) as:

| Structure | Focus |
|---|---|
| **Learning Teams** | Developmental cohorts / stage groups |
| **World Faculties** | Six Worlds disciplinary and professional coverage |
| **Mission Teams** | Active Missions (time-bounded) |
| **Mentor Houses / advisory groups** | Longitudinal mentoring relationships |

A professional may belong to more than one structure. This ADR does **not** prescribe a fixed org chart, reporting hierarchy or headcount. Detailed organisation remains implementation design after evidence (`GAP-032`).

---

## Mission Team Architecture

A substantial Mission may draw adults proportionally from:

`Educator`
+
`Practitioner`
+
`Mentor`
+
`Technical Professional`
+
`External Expert` (where appropriate)

**Not every Mission requires every role.** Proportionality governs:

- early/simple Missions may run primarily with Educator (+ Mentor continuity);
- advanced production Missions may intensify Practitioner and Technical Professional presence;
- External Experts remain governed visitors/partners, not automatic faculty (see Institution-in-Residence Boundary).

Mission Teams implement ADR-0007 controls: educational purpose, scope, responsible adults, safeguarding, data/IP expectations, partner interaction limits and exit conditions (detailed ops still `GAP-022`–`024`).

### Mission Lead (coordination function)

A substantial Mission or Campus Live Workflow cycle may designate a **Mission Lead** — a **coordination function**, not a fourth faculty tier.

- Typically held by an authorised **Educator** or **Practitioner** (sometimes both in co-lead) for the mission’s duration.
- Coordinates lifecycle, briefing, reviews, evidence capture and adult coverage; does **not** monopolise assessment, pathway decisions or Creator Rights outcomes.
- External partners and Institution-in-Residence personnel do **not** become Mission Lead by default.
- One adult may be Mission Lead while another holds Mentor continuity for affected learners.

---

## Mission Educationalisation Responsibilities

Per ADR-0007 (`UNDER REVIEW`), a real external problem is transformed educationally before student delivery.

**Typical collaborative responsibility:**

| Role | Contribution to Educationalisation |
|---|---|
| **Educator** | Developmental fit, sequencing, assessment opportunities, misconception risk, Formal Recognition coexistence |
| **Practitioner** | Authentic constraints, professional standards, realistic scope of practice |
| **Technical Professional** | Equipment/environment feasibility and safety controls |
| **Safeguarding / specialist** | Risk, consent, data and wellbeing constraints as needed |
| **Mentor** | Learner readiness, workload, Exploration Floor and wellbeing context where relevant |
| **External partner** | Problem context and usefulness criteria — **not** unsupervised curriculum authorship |

The external company or agency must **not** simply write the curriculum.

---

## Assessment Responsibilities

Avoid single-person assessment monopoly. Streams inform; none alone equals final capability judgment (PoC architecture later — `GAP-010`).

| Role | May judge / contribute |
|---|---|
| **Practitioner** | Professional quality, authenticity, technical standards |
| **Educator** | Conceptual understanding, learning progression, disciplinary competence; Formal Recognition requirements |
| **Mentor** | Evidence on reflection, collaboration, responsibility, development (not clinical diagnosis) |
| **External stakeholder** | Usefulness, responsiveness, professional communication (non-displacing Tarbiyat judgment — ADR-0007) |
| **Technical Professional** | Safe/competent use of environments and equipment where relevant |

Detailed Proof of Capability moderation/verification is addressed in ADR-0016 (`UNDER REVIEW`); this ADR does not redefine that architecture.

---

## Student Pathway Governance

Preserve prior human-governed pathway rules (FND-003; ADR-0004–0006 still under review):

- Faculty contribute **evidence and advice**.
- No individual Educator, Practitioner, Mentor, parent or AI system may independently assign or prohibit a pathway.
- Advanced prerequisites or safety constraints may limit **immediate access to specific activities** without permanently labelling a child’s future; bridging and mobility principles remain those of the developmental ADRs once approved.
- Specialist / pathway staff may join reviews when advanced prerequisites or safety are involved.

---

## Practitioner Currency

Authentic professional knowledge must not become permanently stale.

**Core expectation (principle):** Practitioners maintain **professional currency** through one or more of:

- active practice;
- professional projects;
- research;
- industry / institutional rotation;
- continuing professional development;
- participation in professional communities.

**Not required:** that every Practitioner hold a simultaneous full-time outside job.

Exact currency standards, review cycles and evidence forms are follow-on work (`GAP-035`).

---

## Educator Development

Existing qualified educators are **not** declared inadequate. Tarbiyat requires **additional operating capabilities** beyond conventional instruction alone.

**Possible preparation areas:**

- Mission-Based learning;
- interdisciplinary planning;
- facilitation of critique and productive failure;
- authentic assessment alongside Formal Recognition duties;
- working with Practitioners and Technical Professionals;
- AI-supported learning under human accountability;
- safeguarding within external missions;
- capability evidence literacy;
- Collaboration inside professional learning teams.

Programme design is follow-on (`GAP-036`).

---

## Practitioner Onboarding

**Hard rule:** Industry or domain experts cannot automatically be placed alone in front of children.

Until suitably prepared and authorised, Practitioners **work with Educators** rather than replace them.

**Possible onboarding areas:**

- child and adolescent development (age-appropriate practice);
- pedagogy and communication with learners;
- safeguarding and professional boundaries;
- inclusive learning;
- assessment literacy (what Practitioners may and may not decide);
- Creator Rights / conflict-of-interest awareness (ADR-0014 context);
- school conduct and digital contact rules.

Authorisation levels should align with Institution-in-Residence statuses where external practitioners are involved (`GAP-023`, `GAP-033`).

---

## Mentor Preparation

Mentors require defined preparation. Possible areas:

- developmental stages and reflective dialogue;
- student agency and pathway advising (non-unilateral);
- family engagement where appropriate;
- wellbeing observation and referral boundaries;
- safeguarding;
- ethical guidance consistent with Tarbiyat formation;
- documentation discipline without bureaucratic overload;
- Exploration Floor monitoring as adult awareness (not a fixed % timetable invention).

Again: **Mentor ≠ therapist** unless separately qualified.

Caseload standards remain open (`GAP-034`).

---

## Institution-in-Residence Boundary

External Institution-in-Residence personnel are **NOT** automatically faculty (extends ADR-0007 partner roles).

**Illustrative escalating statuses:**

| Status | Meaning | Typical controls |
|---|---|---|
| **Visitor** | Occasional presence | High supervision; limited access |
| **External Expert** | Defined critique/expertise input | Scoped interaction; vetted as required by law |
| **Mission Partner Professional** | Supports one or more Missions under agreement | Mission controls; no assessment monopoly |
| **Practitioner-in-Residence** | Sustained practitioner contribution | Stronger vetting, induction, supervision |
| **Authorised Faculty Practitioner** | Recognised to hold Practitioner (and possibly other) faculty function(s) | Full onboarding, authorisation and accountability |

Escalation increases vetting, safeguarding preparation, supervision and access permissions. Escalation does **not** increase partner control over education, assessment, safeguarding, IP or pathways.

---

## Safeguarding / Vetting

Core principles for all adults interacting with children:

- background / vetting requirements **according to country law**;
- professional conduct standards;
- one-to-one interaction boundaries;
- authorised communication channels;
- digital contact rules;
- photography / media consent;
- lab and site access control;
- mandatory reporting obligations as applicable;
- conflict-of-interest disclosure (including commercial interest in student IP).

**Core does not invent specific Malaysian (or other country) vetting statutes.** Country Implementation Profiles supply lawful detail (`GAP-037` mapping; safeguarding ops may extend `GAP-022`/`024`).

---

## Workload

Mission-based schooling can become staff-intensive. Architecture must guard against:

- continuous evening / weekend work as a silent norm;
- permanent mission-preparation overload;
- unsustainable Practitioner dependency;
- excessive documentation;
- Mentor caseload overload;
- Educator burnout from acting as heroic sole expert.

**Core does not set numeric staffing ratios or caseloads without evidence.** Those questions are opened as gaps (`GAP-032`, `GAP-034`).

Mitigation patterns (principles only): proportional Mission Teams; shared Educationalisation; protected planning time as an implementation expectation; refuse Education-First violations that turn schools into unpaid outsourcing centres.

---

## Developmental-Stage Relationship

Align adult-specialisation intensity with developmental progression (contextual to ADR-0004–0006):

| Stage emphasis (contextual) | Faculty pattern |
|---|---|
| **Explore / early Discover** | Greater continuity with skilled **Educators** and **Mentors**; carefully introduced Practitioner exposure; avoid surrounding young children with unnecessary specialist crowds |
| **Choose** | Increasing Practitioner contact for preference testing; Mentors support reflection; Educators keep coherence and Formal Recognition track |
| **Deepen / Produce** | Substantially more specialist **Practitioner** (and Technical Professional) intensity where missions require; Mentors remain longitudinal anchors; Educators remain essential for learning design and recognition |

Young children do **not** require a parade of specialists for every task. Advanced adolescent production teams may involve intensive specialist practice under safeguards.

---

## Six Worlds Coverage

Faculty architecture must work across **all Six Worlds**. It must **not** become a tech-only staffing model.

| World | Illustrative practitioner coverage |
|---|---|
| Engineering & Intelligent Systems | Engineers, designers, software/systems practitioners |
| Health & Life Sciences | Life scientists, public-health and research professionals (lawful non-clinical educational roles unless separately licensed) |
| Enterprise & Economics | Entrepreneurs, economists, finance/operations practitioners |
| Earth, Energy & Built Environment | Environmental, energy, built-environment practitioners |
| Creative, Media & Human Communication | Artists, designers, media, writers, communication professionals |
| Society, Leadership & Public Systems | Policy, legal, civic, social-science, public-system practitioners |

Actual regulated professional practice remains subject to country law. World competency maps drafted in ADR-0011 (`UNDER REVIEW`; `GAP-008` proposed resolution — not closed).

---

## Country Recognition Boundary

Country law may require teacher qualifications, registration, specific staffing categories, ratios and school leadership qualifications.

| Core decides | Country / project decides |
|---|---|
| Faculty functions and supporting workforce classes | Legally recognised staff categories and titles |
| Team and Mission Team principles | Binding ratios, contracts and industrial relations |
| Onboarding / currency / preparation expectations (principles) | Mandatory registration and accredited programmes |
| Day / residential / mixed compatibility | Whether residential models exist and house-staff rules |
| Safeguarding principles | Statutory vetting and child-protection procedures |

**Mapping required in country profiles:**

`Core Role Architecture`
→
`Legally recognised staff categories`
→
`Required qualifications / registration`

(`GAP-037`). This ADR does **not** research Malaysia staffing law.

---

## Talent Pipeline

Shortages of hybrid professionals are expected. Architectural workforce-development pathways may include:

- teacher → Mission-Educator development;
- practitioner → school-practitioner onboarding;
- university fellowships;
- industry / public-institution rotations;
- practitioner residencies (aligned to Institution-in-Residence);
- alumni pipeline;
- mentor development programmes.

Supply is **not** guaranteed. National capability bridging (school ↔ university ↔ industry ↔ community ↔ public institutions) is a **possible consequence**, not a promised labour-market outcome.

---

## Residential Model Boundary

Core faculty architecture must work in:

- day schools;
- residential schools;
- mixed models.

Where residential implementation exists, residential mentors / house staff require **separate operating standards**. Residential schooling is **not** a universal Core mandate (ADR-0001; Malaysia choice remains `GAP-005`).

---

## Rationale

- Makes operable the adult side of Lab-First / Mission-Based learning, Formal Recognition coexistence, Mission Ecosystem authenticity and Creator Rights governance.
- Separates teaching skill, authentic practice and longitudinal formation without inventing a prestige hierarchy.
- Prevents practitioner-alone teaching of children and teacher-alone authenticity theatre.
- Keeps technical safety and specialist services from being euphemised as “mentoring.”
- Scales adult specialisation with developmental stage and mission risk.
- Preserves country-law supremacy on qualifications while allowing Core role innovation.
- Reduces heroic-teacher failure mode through professional learning teams.

## Consequences

### Positive

- Clear language for hiring, partnering and ministry dialogue: functions, teams and boundaries.
- Better Mission Educationalisation quality and safer labs.
- Mentoring elevated without clinical impersonation.
- Six Worlds staffing legitimacy beyond STEM.
- Pathway and assessment integrity protected from single-role capture.
- Institution-in-Residence personnel gated into faculty status deliberately.

### Risks / costs

- Higher coordination cost than single-teacher classrooms.
- Hybrid talent scarcity until pipelines mature (`GAP-036`).
- Risk of documentation and meeting overload if teams are poorly designed (`GAP-032`).
- Dependency on ADR-0007 / ADR-0014 remaining coherent through approval.
- Country mapping still required before operational hiring (`GAP-037`).

### Follow-on work

- Human review of this ADR.
- Staffing ratio / organisational research (`GAP-032`).
- Practitioner qualification / authorisation standard (`GAP-033`).
- Mentor caseload principles (`GAP-034`).
- Practitioner currency standard (`GAP-035`).
- Faculty development programmes (`GAP-036`).
- Country regulated-role mapping (`GAP-037`).
- Integrate with Institution-in-Residence ops (`GAP-023`) and partner governance (`GAP-022`).
- Populate `docs/08-people-and-governance/` after approval direction is clear.
- Proof of Capability multi-assessor rules (`GAP-010`).

## Alternatives Considered

1. **Teacher-only workforce** — Rejected: insufficient for Mission Labs, authentic critique, external partnerships and production environments.
2. **Practitioner-led replacement of teachers** — Rejected: confuses domain expertise with pedagogy; unsafe for children; weakens Formal Recognition teaching.
3. **Tier-1 / Tier-2 hierarchy** — Rejected: invents prestige ranking among essential functions; harms collaboration and Six Worlds parity.
4. **Three-function Practitioner–Educator–Mentor architecture** — **Selected** as the faculty-function core.
5. **Everyone expected to fulfil all three functions** — Rejected as default: unrealistic overload; multi-capability remains optional and valued.
6. **Professional team model** — **Selected** as the operating principle: Learning Teams, World Faculties, Mission Teams and Mentor structures in combination, without a premature binding org chart.
7. **Technical / Lab Professional as fourth faculty function** — Rejected: mixes formation functions with operational safety roles; selected instead as supporting professional workforce with independent safety authority.
8. **Collapse specialists into Mentor** — Rejected: endangers clinical, safeguarding and SEN integrity.

## Country-Specific Implications

Country / project profiles may later define:

- mapping of Educator / Practitioner / Mentor / Technical / Specialist classes to national employment and registration categories;
- mandatory teacher qualifications and leadership licences;
- lawful vetting and ratio rules;
- residential house-staff standards if boarding/hybrid is chosen;
- industrial relations and contracting models for Practitioners-in-Residence;
- terminology adaptations that preserve Core functional meaning.

**Core must not invent Malaysian staffing ratios, registration lists or salary structures in this ADR.**

## Related Documents

- `docs/00-foundation/CONCEPT_CONSTITUTION.md` (APPROVED) — especially §§4, 7, 9, 10
- ADR-0001, ADR-0002, ADR-0003 (APPROVED)
- ADR-0007 (UNDER REVIEW — Mission Ecosystem; Educationalisation; Institution-in-Residence)
- ADR-0014 (UNDER REVIEW — Creator Rights; conflict of interest)
- ADR-0004, ADR-0005, ADR-0006 (UNDER REVIEW — stage/mobility context only; not treated as approved)
- `docs/08-people-and-governance/SECTION_README.md` (shell)
- `GAP_REGISTER.md` — GAP-032–037 (opened); related GAP-005, GAP-008, GAP-010, GAP-022, GAP-023

## Open Questions

1. Evidence-based staffing and caseload bands by stage and mission intensity (`GAP-032`, `GAP-034`).
2. Practitioner authorisation standard and equivalence across Worlds (`GAP-033`).
3. Practitioner currency evidence expectations without forcing dual full-time employment (`GAP-035`).
4. Faculty development programme design for Educators, Practitioners and Mentors (`GAP-036`).
5. Country-by-country regulated role mapping (`GAP-037`).
6. How Mission Team composition interacts with mission risk classification once `GAP-024` is drafted.
7. Whether residential Mentor House models should share Core patterns beyond “separate operating standard.”
8. How multi-assessor streams formalise inside Proof of Capability (`GAP-010`).
9. Re-check if ADR-0007 / ADR-0014 / ADR-0004–0006 change materially before approval.

## Test Scenarios

| ID | Scenario | Architectural result |
|---|---|---|
| **A** | Brilliant engineer has no experience teaching 11-year-olds | Must **not** automatically replace an Educator; onboarding + work-with-Educator required |
| **B** | Qualified teacher lacks advanced robotics expertise | Practitioner collaboration strengthens the Educator; does not displace educational responsibility |
| **C** | Mentor believes student should abandon Engineering; Educator/Practitioner evidence differs | Mentor **cannot** independently decide pathway; collective human review |
| **D** | Partner-employed Practitioner pushes company deadline over learning | **Education-First** overrides commercial pressure |
| **E** | 9-year-olds on a simple water mission | Do **not** surround with unnecessary specialists; Educator + Mentor continuity primary |
| **F** | 17-year-olds on sophisticated engineering prototype | Specialist Practitioner (and Technical Professional) intensity may be high under safeguards |
| **G** | Student discloses serious mental-health concern to Mentor | Mentor supports and **refers** per protocol; does not impersonate a clinician |
| **H** | Lab has hazardous equipment | Technical safety authority is explicit; not overridden by convenience |
| **I** | Professional artist leads advanced Creative World mission | Practitioner expertise recognised outside STEM |
| **J** | Practitioner becomes commercially interested in student-created IP | Conflict-of-interest / Creator Rights safeguards apply (ADR-0014 context) |

## Explicit Non-Claims

This ADR does **not**:

- approve itself or close any GAP;
- treat ADR-0004, ADR-0005, ADR-0006, ADR-0007 or ADR-0014 as APPROVED;
- set numeric staffing ratios, caseloads, salaries or binding org charts;
- invent Malaysian (or other country) teacher-registration, vetting or ratio law;
- declare existing qualified teachers inadequate;
- claim Practitioners must hold simultaneous full-time outside jobs;
- collapse Technical Professionals or Specialist Services into Mentor;
- authorise unsupervised partner personnel as faculty;
- allow any single adult role or AI system to assign pathways;
- design Proof of Capability schemas or HR software;
- mandate residential schooling;
- guarantee hybrid-talent supply or national workforce outcomes;
- create Tier-1 / Tier-2 prestige rankings among functions.
