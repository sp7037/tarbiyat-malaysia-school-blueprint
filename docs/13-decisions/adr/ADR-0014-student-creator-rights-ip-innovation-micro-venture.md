# ADR-0014 — Student Creator Rights, Intellectual Property, Innovation and Micro-Venture Architecture

| Field | Value |
|---|---|
| Document ID | `ADR-0014` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Date | `2026-09-14` |
| Approved | `2026-09-19` |
| Deciders | Human architectural review (Creator Rights / Attribution / IP & Learner Venture / ADR-0014 review) |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `FND-003` APPROVED; `ADR-0001` APPROVED; `ADR-0002` APPROVED; `ADR-0003` APPROVED; `ADR-0004`–`ADR-0006` APPROVED; `ADR-0007` APPROVED; `ADR-0011` APPROVED; `ADR-0015` APPROVED; `ADR-0016` APPROVED; `ADR-0019` APPROVED; `ADR-0020` APPROVED; operating companions `MIS-001`–`003` / `MIS-TPL-001` / `POC-001` DRAFT (do not close GAP-022–024 / 031 / 038–044); country overlays `MY-002` / `MY-003` DRAFT (`GAP-011` / `GAP-026` remain open) |
| Related gaps / claims | Closes GAP-025; related GAP-010 Closed (ADR-0016); opens / preserves GAP-011, GAP-026–GAP-031; related GAP-022–024 |
| Source documents | `FND-003` §§6, 9, 10; ADR-0002 production cycle; ADR-0007 Education-First and IP dependency; Architecture Iteration 6 brief (2026-09-14); Creator Rights human review (2026-09-19) |

---

## Title

Student Creator Rights, Intellectual Property, Innovation and Micro-Venture Architecture

## Status

`APPROVED`

## Revision history

| Version | Date | Notes |
|---|---|---|
| 0.1.0 | 2026-09-14 | Initial UNDER REVIEW draft |
| 0.1.1 | 2026-09-14 | Editorial alignment with Mission / PoC companion language |
| 1.0.0 | 2026-09-19 | APPROVED after Creator Rights human review; closes GAP-025; dependency hygiene for APPROVED ADR-0004–0007 / 0011 / 0015 / 0016 / 0019 / 0020; GAP-011 / 026–031 and MIS/POC DRAFT companions remain open |

## Context

ADR-0002 (APPROVED) includes a production cycle that may culminate in deploy, IP protection, venture, licensing, technology transfer or social implementation. FND-003 (APPROVED) permits Mission-to-Market and supervised micro-venture possibilities while stating that legal ownership, IP assignment, child-employment rules and commercialisation constraints are **country/project implementation matters**.

ADR-0007 (APPROVED) establishes a governed Mission Ecosystem, Education-First / no student exploitation, Mission Educationalisation, and an explicit rule that **no student work automatically becomes school or partner property**. It deferred Creator Rights, IP and micro-venture architecture to this ADR (`GAP-025`; Malaysia legal feasibility `GAP-011`).

Without Core Creator Rights architecture:

- valuable student outputs risk silent appropriation by schools, partners or adults;
- ordinary schoolwork may be buried under IP bureaucracy;
- patents and startups may become false measures of innovation;
- collaborative and partner-sponsored work may erase or invent contribution;
- children may be pressured into commercialisation, disclosure or unpaid labour;
- Proof of Capability may confuse commercial success with educational capability;
- public-good and creative outputs may be treated as second-class relative to patents.

**Dependency note:** This ADR assumes ADR-0007’s Education-First rule, Mission Educationalisation, partner non-control of education/assessment/safeguarding, productive failure, and progressive authenticity constraints (APPROVED). Developmental stage architecture from ADR-0004–0006 is APPROVED context. Proof of Capability architecture is defined in ADR-0016 (`APPROVED`; `GAP-010` Closed; ops remain GAP-038–044). Faculty conflict / adult role context is consistent with ADR-0015 (`APPROVED`). Operating templates and country IP overlays remain DRAFT and do **not** close GAP-011 / 022–024 / 026–031 / 038–044 by existing.

This ADR remains Core / country-neutral. It does **not** invent Malaysian or Indian IP law, set ownership percentages, draft contracts, promise patents or investment, design Proof of Capability schemas, or build software.

---

## Decision

Tarbiyat Core adopts a **Student Creator Rights** architecture for recognising creators, classifying significant outputs, recording contribution, governing IP-sensitive and partner-sponsored missions, reviewing surprise or conflicted value, and enabling optional research, protection, deployment, licensing, public-good release or micro-venture pathways — **without** turning learners into commercial assets.

1. **Creator recognition is Core.** Participation in Tarbiyat education does **not**, by itself, transfer student-created intellectual property to the school, an external mission partner or another institution. Educational recognition of creators is mandatory; **legal ownership** is determined under applicable country law and lawful agreements (see Educational Recognition vs Legal Ownership).
2. **Education-First** (ADR-0007) applies to innovation: learning, capability, creativity, inquiry, public/community value and authentic production come before commercialisation. Commercialisation is **optional**.
3. Outcomes are **classified proportionally** (Ordinary Educational Work → Significant Creative Work → Potentially Protectable / Deployment / Research / Venture Candidate). Ordinary schoolwork does not trigger IP bureaucracy.
4. Substantial collaborative work maintains a **Contribution Record**. Presence is not equal inventorship; adult supervision does not erase student contribution.
5. **Background IP**, **Mission-Created IP** and **Jointly Developed IP** must be distinguishable before high-level external missions begin.
6. Partner-sponsored missions require pre-understood IP/confidentiality/attribution expectations. Hidden automatic transfer of all student-created work is forbidden.
7. **Surprise Innovation Rule:** absence of a pre-existing commercial agreement must not permit a later rush to appropriate student work.
8. **Student Creator Rights Review** applies only to sufficiently significant cases, with proportional governance and student-protective conflict handling.
9. Post-creation pathways include Archive, Open Contribution, Research, Protect, Deploy, License, Venture and Public-Good Release. A valuable outcome does **not** automatically become a startup.
10. **IP is one form of value**, not the measure of innovation. Creator Rights apply across all **Six Worlds**.
11. A **Micro-Venture** is an optional, supervised educational pathway — not a mandate that every child become a founder.
12. Benefit-sharing, where meaningful economic value arises, follows fair-creator and transparency principles **without Core-fixed percentages**.
13. A future **Student Innovation & Mission Fund** is an architectural possibility, not a mandated financial structure.
14. Leaving school must not permanently hold a learner hostage to institutional control of their creator recognition and lawful continuing interests.
15. Country law governs contracts, minors’ capacity, IP species, employment, companies, tax and securities. Core establishes governance values and architecture, not universal legal conclusions.
16. Creator contribution records may feed Proof of Capability (ADR-0016 `APPROVED`; `GAP-010` Closed; ops GAP-038–044), but **creator attribution ≠ competency assessment** and **commercial value ≠ educational capability**.

---

## Student Creator Rights

At architectural (governance) level, Tarbiyat recognises **Student Creator Rights** as principles that programme design, mission governance and adult decision-making must respect. These are **not** a substitute for country-specific statutory rights.

Student Creator Rights include consideration of:

1. **Creator attribution** — recognised creators are named accurately for educational and portfolio purposes.
2. **Accurate contribution records** — who did what, at what level of materiality, for substantial work.
3. **Right to understand** — age-appropriate explanation of how work may be used, shared, published, protected or commercialised.
4. **Protection against automatic appropriation** — no silent default that school/partner ownership follows from attendance, lab use or mission participation alone.
5. **Age-appropriate participation** in decisions affecting their work.
6. **Protection from coercive commercialisation** — no pressure to patent, license, incorporate, sell, disclose or continue a venture solely because work may have financial value.
7. **Educational credit** — appropriate recognition in assessment, portfolios and recommendations.
8. **Transparent benefit-sharing** where meaningful economic value is realised and creators are relevant beneficiaries (country/project structures later).
9. **Privacy and confidentiality** consistent with safeguarding and lawful mission constraints.
10. **Protection of unpublished ideas** where appropriate (especially before public disclosure or filing decisions).
11. **Right to decline optional commercialisation** where legally and operationally feasible.
12. **Access to appropriate adult / legal guidance** for high-value or conflicted cases.

These rights do **not** protect plagiarism, misattribution, unsafe disclosure of third-party secrets, or unlawful use of others’ IP.

---

## Educational Recognition vs Legal Ownership

Core **must distinguish**:

| Concept | Meaning in Core |
|---|---|
| **Educational recognition of creators** | Tarbiyat’s institutional acknowledgement of who created or materially contributed to work; used for credit, portfolios, Contribution Records and Proof of Capability linkage |
| **Legal authorship** | Who the applicable legal system treats as author/inventor/designer (or equivalent), which may differ by IP species and jurisdiction |
| **Contribution** | Material work done by a person or tool (including AI); recorded educationally; not automatically equal to ownership |
| **Legal ownership** | Who holds enforceable proprietary rights; may be authors, assignees, employers, joint owners, or others under law and contract |
| **Possession** | Physical or digital custody of an artefact (e.g. school-held file, lab prototype); custody is **not** ownership and does not erase creator recognition |
| **Licence / use permission** | Permission to use work under defined terms without necessarily transferring ownership |
| **Publication** | Making work visible beyond the original learning context (portfolio, website, exhibition, journal, social media); requires proportionate permission, attribution, privacy and safeguarding |
| **Commercial rights** | Rights to license, sell, assign, incorporate or otherwise exploit work for value; never automatic from Mission participation |
| **Team-created work** | Multiple contributors with possibly unequal material contributions; not automatic equal ownership |
| **Pre-existing / Background IP** | Rights and materials that existed before the mission and remain with their prior holders unless lawfully licensed |
| **Country-specific law** | The binding rules of copyright, patent, design, trade secret, contract, minors, employment, company and related law |

**Material contribution must not disappear** merely because the school supplied equipment, a partner funded the Mission, a Practitioner advised, a teacher supervised, or the school hosted the work.

### Core principle (refined)

> A learner remains a **recognised creator** of their work. Participation in Tarbiyat education does **not**, by itself, transfer student-created intellectual property to the school, an external mission partner or another institution.

This is a **governance and educational principle**. It does **not** pretend to determine legal ownership where applicable national law says otherwise (for example employment-related invention rules, commissioned-work doctrines, moral-rights regimes, or contractual assignments lawfully entered with capacity and safeguards).

Where law or a safeguarded agreement allocates ownership differently, Tarbiyat must still:

- preserve accurate creator recognition and Contribution Records;
- avoid surprise claims;
- apply Education-First and conflict review;
- ensure age-appropriate student voice and guardian involvement where required.

---

## Outcome Classification

Not every prototype belongs on an IP pathway. Classification is **proportional**.

| Class | Meaning | Typical governance |
|---|---|---|
| **Ordinary Educational Work** | Normal assignments, drafts, exercises, routine mission outputs | Creator recognition as appropriate; **no** Creator Rights Review or IP bureaucracy |
| **Significant Creative Work** | Substantial original design, research, code, creative work, prototype or system | Contribution Record; clearer attribution; optional pathway discussion |
| **Potentially Protectable Work** | May warrant copyright, patent, design, trade-secret or other protection depending on jurisdiction | Confidentiality care; expert triage; possible Creator Rights Review |
| **Deployment Candidate** | Potentially suitable for real implementation or institutional use | Deployment governance (ADR-0007 professional/legal authority boundaries) |
| **Research Candidate** | Suitable for supervised research, publication or external validation | Research integrity, authorship and disclosure planning |
| **Venture Candidate** | Credible potential for enterprise or licensing pathway | Optional Micro-Venture / licensing pathway; never automatic |

Escalation to higher classes requires human judgment. Metrics such as “looks cool,” partner enthusiasm or fundraising curiosity do **not** alone justify treating Ordinary Educational Work as Potentially Protectable or Venture Candidate.

---

## Contribution Records

For **substantial** collaborative work, Tarbiyat maintains a **Contribution Record** concept.

A Contribution Record should capture, at architectural level:

- who participated;
- nature of contribution (concept, design, implementation, data, critique, inventive step, creative authorship, facilitation, background materials, etc.);
- relative materiality where reasonably knowable;
- dates / mission context;
- disclosure of material external or AI assistance;
- Background IP used;
- disagreements noted (without forcing false consensus).

Possible contributors include: individual students; student teams; educators; practitioners; external researchers; mission partners; school technical staff.

### Contribution principles

- Do **not** treat every team member as an equal legal inventor merely because they were present.
- Do **not** erase meaningful student contribution merely because an adult supervised, mentored or enabled the work.
- Do **not** award creator evidence for work the learner did not meaningfully create.
- Contribution Records support educational credit and later lawful review; they are **not** themselves a Competency Graph score or automatic ownership percentage.

**Schema deferred** — database design is out of scope (ADR-0016 APPROVED; PoC ops `GAP-038`–`044` / `POC-FRM-002` DRAFT).

---

## Individual and Team Creation

Significant Tarbiyat outputs may involve one student, multiple students (including across Worlds), practitioners, universities and partner background technology.

### Principles

1. **Acknowledgement** — all material contributors are recorded; non-material presence is not inflated.
2. **Attribution** — public and educational credit tracks Contribution Records, not marketing convenience.
3. **Disagreement** — team disagreement about commercialisation, publication or pathway does not authorise one party to erase others’ recognised contribution.
4. **Continuing use** — continuing educational use of team work (portfolio evidence, teaching examples with consent/sanitisation) should respect creator recognition and confidentiality constraints. **Enrolment alone is not unlimited promotional consent** for website, social-media or marketing use; display, archiving, learning examples, publication and marketing require proportionate permission, attribution, privacy, safeguarding and country-law compliance.
5. **Departure** — a team member leaving school or the mission does not erase their recorded contribution; ongoing commercial or research use requires lawful handling of continuing interests (country/agreement detail later).
6. **Later commercial opportunity** — later value does not rewrite history; Surprise Innovation and Creator Rights Review apply.

Core does **not** invent universal legal ownership percentages for teams. Those require case-specific facts and country law (`GAP-026`, `GAP-027`).

---

## Background / Mission-Created / Joint IP

Before high-level external missions begin, participants should be able to distinguish:

### Background IP

Technology, software, designs, data, processes, creative materials or know-how that existed **before** the mission and belong to a student, school, partner or other party.

### Mission-Created IP

New work created through the mission (including Significant Creative Work and higher classes).

### Jointly Developed IP

Potentially protectable work resulting from **material contributions of multiple parties**.

### Rules

- External partners must **not** obtain ownership of unrelated student/school work merely by participating in a mission.
- Partner Background IP remains the partner’s unless lawfully licensed for educational use.
- Student/school Background IP remains theirs unless lawfully licensed.
- Joint development requires transparent contribution analysis before ownership or licence claims are asserted.
- Ordinary educational reuse of Background IP under licence (e.g. open-source tools, partner datasets under terms) does not convert all student outputs into partner property.

---

## Partner-Sponsored Missions

For industry, university, government or other partner-sponsored missions that are IP-sensitive or confidentiality-sensitive, participants should understand **before significant work begins**:

1. whether the mission uses partner Background IP;
2. confidentiality limits;
3. what students are allowed to publish or show;
4. anticipated treatment of new / Mission-Created IP;
5. attribution expectations;
6. permitted partner use of student outputs (licence vs ownership claims);
7. student educational rights (including sanitised capability evidence);
8. what happens if something unexpectedly valuable is invented (Surprise Innovation Rule).

### Forbidden pattern

Hidden terms that **automatically transfer all student-created work** to the partner or school, without transparent pre-mission understanding and student-protective governance, are incompatible with this ADR and with ADR-0007’s Education-First / non-exploitation principles.

Detailed agreement templates remain open (`GAP-031`; partner ops `GAP-022`).

---

## Surprise Innovation

Real learning can produce something valuable unexpectedly.

### Surprise Innovation Rule

> The absence of a pre-existing commercial agreement must not permit a later rush to appropriate student work.

When potentially significant value unexpectedly appears:

1. **Pause** commercial exploitation and aggressive disclosure that would prejudice creators’ options;
2. **Preserve** evidence and Contribution Records;
3. **Protect** confidentiality where appropriate;
4. Conduct **human review** (Creator Rights Review if significance warrants);
5. Involve **guardians / independent advice** where relevant (age, value, conflict);
6. Determine **legal position** under applicable law (country advisers; not invented Core law);
7. Choose an appropriate **post-creation pathway** with Education-First and student voice.

Routine Ordinary Educational Work is not “surprise innovation.” The rule is for material unexpected value.

---

## Creator Rights Review

### Student Creator Rights Review

A proportional governance process triggered only for **sufficiently significant** cases (e.g. Potentially Protectable, Deployment, Research or Venture Candidates with material stakes, conflicts, partner claims or surprise value).

**Not required** for Ordinary Educational Work.

### Possible participants (as relevant)

- learner;
- parent/guardian where legally or developmentally appropriate;
- Tarbiyat representative;
- relevant technical/domain expert;
- appropriate IP/legal adviser where necessary;
- **independent student-interest representative** for high-value or conflicted cases.

### Control principle

External commercial partners do **not** have unilateral control over the review. School commercial interest does not unilaterally decide against student educational interests without conflict handling.

Operating procedures and forms: `GAP-031`.

---

## Conflict of Interest

Material conflict situations include (non-exhaustive):

- school may receive revenue from the work;
- partner may receive commercial benefit;
- teacher/practitioner is also a company founder or equity holder related to the work;
- parent/guardian has a commercial interest that may diverge from the learner’s educational interest;
- external investor wants access;
- Foundation/operator may benefit financially.

### Requirements

1. **Disclosure** of material conflicts.
2. **Independent / student-protective review** where material (Creator Rights Review).
3. A student’s educational adviser must **not** secretly negotiate against the student’s interests.
4. Commercial pressure from any conflicted party does not override Education-First, safeguarding or Formal Recognition obligations (ADR-0003).

---

## Post-Creation Pathways

A valuable outcome does **not** automatically become a startup.

| Pathway | Meaning | Learner participation |
|---|---|---|
| **Archive** | Retain as educational evidence / Proof of Capability material | Creator credit; portfolio evidence |
| **Open Contribution** | Publish openly where learner, law and mission conditions permit | Consent / voice; licence choice where applicable |
| **Research** | Continue through supervised research | Authorship norms; supervision |
| **Protect** | Seek appropriate IP protection where justified | Age-appropriate involvement; no patent promise |
| **Deploy** | Transfer into a properly governed implementation environment | Educational role limits per ADR-0007 |
| **License** | Permit third-party use under appropriate agreement | Benefit-sharing principles; lawful capacity |
| **Venture** | Create or join an enterprise pathway (optional Micro-Venture) | Voluntary; workload/safeguarding limits |
| **Public-Good Release** | Make work available to community/public institution under appropriate terms | Creator recognition preserved |

Multiple pathways may combine (e.g. research then open release; protect then license). **Stopping** is a legitimate outcome.

---

## Protection / Publication / Open Release

### Patent / Protection Gate

IP filing is **not** automatic. Factors include:

- genuine novelty / protectability likelihood (jurisdiction-dependent);
- learner interest and Educational-First fit;
- likely usefulness;
- cost and opportunity cost;
- disclosure timing (publication vs filing);
- partner obligations;
- country law;
- public-good alternatives;
- whether protection would interfere with learning, publication or community benefit.

Tarbiyat does **not** promise patents to students or ministries.

### Open / public-good preference

Some high-value outputs should deliberately remain open. Open-source, public licence, government/public-interest licence, controlled release and research dissemination are first-class options — especially for Strategic Capability and community missions — while preserving creator recognition.

---

## Student Innovation Fund Principle

Core recognises the architectural possibility of a future **Student Innovation & Mission Fund**.

Possible purposes (illustrative):

- prototype development;
- patent/legal review;
- research continuation;
- pilot deployment;
- student ventures;
- scholarships;
- future mission teams.

It **might** be replenished partly through appropriate returns from successful innovations under country/project fiscal rules.

Core does **not** mandate a financial structure, endowment, corporate vehicle or revenue-share formula. Design is deferred (`GAP-030`).

---

## Micro-Venture Pathway

### Enterprise and production context (distinctions)

| Context | Meaning | Creator / IP posture (architectural) |
|---|---|---|
| **Classroom or Mission simulation** | Learning exercise without external operational dependency | Ordinary Educational Work unless significance warrants escalation |
| **Learning enterprise exercise** | Supervised practice of enterprise concepts (models, ethics, costing) without live commercial entity | Educational; typically no venture entity |
| **Campus Live Workflow / educational production unit** | Sustained supervised real workflow on campus (ADR-0007); may serve internal or partner needs under Education-First guardrails | School-operated educational environment; learner participation voluntary where feasible; IP via Contribution Records — not automatic school/partner capture |
| **Learner Micro-Venture** | Optional advanced pathway toward real enterprise learning | Voluntary; governed Micro-Venture standard (`GAP-028`) |
| **Joint venture / spin-out** | Separate entity or licence pathway after Creator Rights Review | Lawful agreements; minors and conflicts explicitly handled |
| **External company partnership** | Partner-sponsored Mission or I-in-R collaboration | Background/Mission/Joint IP distinguished; no hidden transfer |

A **Micro-Venture** is an **optional, supervised educational pathway** through which suitable advanced student work can learn about:

- customer/user need;
- feasibility;
- ethics;
- costing;
- business model;
- regulation;
- product development;
- market testing;
- teamwork;
- responsible finance.

It does **not** mean “make every child a startup founder.”

### Possible outcomes

Stop · pivot · licence · social enterprise · cooperative · startup · public-interest deployment.

**Failure to commercialise is not educational failure** (consistent with ADR-0007 productive failure).

Operating policy deferred (`GAP-028`).

---

## Benefit Sharing

If student-created work produces **meaningful economic value**, relevant creators should not be excluded from fair benefit solely because they were school students.

Potential beneficiaries may include:

- creators;
- team members with material contribution;
- programme/school innovation support;
- future student innovation funds;
- public/community beneficiaries depending on mission.

### Principles (no Core percentages)

- transparency;
- proportionality;
- student benefit;
- no surprise claims;
- reinvestment into the innovation ecosystem where institutional participation is justified;
- independent review for material value and conflicts.

Exact legal and financial structures are country/project decisions (`GAP-027`; MY `GAP-011`).

---

## External Investment Safeguards

Advanced learner ventures may eventually attract grants, competitions, accelerators, public innovation funding, companies or investors. Core does **not** promise such funding.

Before external investment is accepted, safeguards should address:

- legal capacity of minors;
- guardian involvement where required;
- independent advice for material deals;
- valuation and conflict risk;
- equity dilution and control;
- pressure and disclosure;
- student’s ability to exit;
- Education-First and workload limits.

Country implementation handles corporate and securities law (`GAP-029`).

---

## Age / Guardian / Student Voice

Student participation in IP/commercial decisions must be **age-appropriate**. Core does **not** set rigid birthday thresholds; country law defines contractual/legal capacity. A learner’s signature alone must **not** be treated as automatically meaningful legal consent where capacity, guardianship or power imbalance requires more.

| Stage context (labels from ADR-0004 APPROVED) | Architectural expectation |
|---|---|
| **Earlier stages** (Explore / Discover and early Choose) | Creator recognition and protection; adults carry most legal/governance responsibilities |
| **Choose / Deepen** | Increasing learner understanding and participation in pathway choices |
| **Produce** | Advanced learners may participate substantially in research, IP strategy, licensing or venture decisions, still subject to applicable law and safeguarding |

### Family / guardian role

Family involvement may be necessary for minors. Architecture must avoid:

- guardian appropriation of student work;
- coercive monetisation;
- family pressure overriding education;
- treating guardians as automatic sole decision-makers where student voice should matter.

Balance **lawful guardian authority** with **meaningful student participation**.

---

## School and Foundation Role

Tarbiyat may provide labs, equipment, staff time, mentors, industry access, legal/IP support and incubation resources.

This does **not** automatically mean Tarbiyat owns everything created using its resources.

An entirely free-use model may be financially unsustainable. Fair institutional participation may be justified under transparent country/project rules, subject to:

- no surprise claims;
- proportionality;
- student benefit;
- reinvestment into the innovation ecosystem;
- independent review for material value;
- conflict disclosure.

Core does **not** set a revenue-share percentage.

---

## Public-Good and Strategic Missions

Some Strategic Capability Missions (ADR-0007) serve communities, public agencies, national priorities or NGOs. Commercial IP may not be the best path.

Options include: public licence; open-source; government/public-interest licence; controlled release; research dissemination.

**Student creator recognition is still preserved.** Community value without commercial value remains a first-class valuable output.

---

## AI-Assisted Creation

Principles for work created with AI assistance:

1. **Disclose** material AI assistance in Contribution Records / provenance.
2. Preserve evidence of the student’s **real contribution** (problem framing, selection, critique, integration, testing, original design judgment, etc.).
3. Avoid **false authorship** and inflated creator claims.
4. Respect licences and tool/training-data constraints **where relevant and knowable**.
5. Distinguish generated output from demonstrated student capability for Proof of Capability purposes.

Core does **not** resolve global AI copyright law. Country/legal interpretation remains external (`GAP-026`). Tarbiyat must not award creator evidence for work the learner did not meaningfully create.

---

## Academic Integrity

Creator Rights do **not** protect plagiarism.

Required:

- provenance;
- Contribution Records for substantial work;
- attribution;
- lawful / source-aware reuse;
- disclosure of external and AI assistance where material.

Proof of Capability must represent the learner’s **actual** capability.

---

## Confidential Work / Portfolio Evidence

External mission confidentiality may conflict with a learner’s need to show their work.

### Sanitised Capability Record principle

Missions should, wherever practical, allow a learner to retain a **sanitised capability record** even when commercial details, secret data or partner code cannot be disclosed.

Example: a learner may not reveal secret source code but can retain verified evidence that they performed specified capability work under defined constraints.

This supports Proof of Capability portability (ADR-0016 `APPROVED`; ops GAP-038–044) without breaching lawful confidentiality.

---

## Leaving School / Continuity

If a student graduates or leaves Tarbiyat while an innovation continues:

1. **Continued creator recognition** remains;
2. Reasonable **access to their documentation** and Contribution Records (subject to confidentiality and safeguarding);
3. Ongoing IP/commercial rights remain subject to **lawful agreements** and country law — not arbitrary school privilege revocation;
4. Venture/research participation may **transition** (alumni support possible; not unlimited free lab access);
5. Institutional licences, if any, must have been transparent and non-hostage.

Significant creator interests are **not** temporary school privileges that vanish arbitrarily on exit.

### Death / incapacity / withdrawal

At architectural level, significant long-running creator interests require appropriate continuity arrangements under country law. Core does **not** write inheritance law; it requires that architecture not erase creator interests by administrative convenience alone (`GAP-026`).

---

## Relationship to Mission Ecosystem

This ADR preserves and depends on ADR-0007 (`APPROVED`):

- Mission Educationalisation;
- Education-First;
- external partner governance (partners do not control education, assessment or safeguarding);
- student non-exploitation;
- productive failure;
- stage-appropriate authenticity.

Commercial attractiveness must **not** weaken those protections. Partner IP terms are part of mission governance, not a parallel capture system. Foreseeable IP, confidentiality, publication, data and partner-use conditions should be identified **before** substantial learner work begins.

---

## Relationship to Proof of Capability

Contribution Records and sanitised capability evidence align with Proof of Capability architecture (ADR-0016 `APPROVED`; `GAP-010` Closed; ops via `POC-001` / `POC-FRM-*` DRAFT — GAP-038–044 not closed).

But:

- **creator attribution ≠ competency assessment**;
- **commercial value ≠ educational capability**;
- **capability evidence ≠ legal ownership evidence**.

A learner may prove capability using an artefact they do not exclusively own. Owning an artefact does not prove capability. A commercially unsuccessful invention can demonstrate outstanding capability. A financially successful product does not automatically prove every claimed competency.

PoC operating schemas remain in ADR-0016 / POC DRAFT companions — not redesigned here.

---

## Country-Law Boundary

Legal treatment of copyright, patents, designs, trade secrets, contracts, minors, employment, company ownership, taxation, securities and licensing **must** be implemented under applicable country law.

| Core decides | Country / project decides |
|---|---|
| Creator Rights governance principles | Enforceable ownership and inventorship conclusions |
| Education-First / anti-appropriation norms | Contract templates and capacity rules for minors |
| Outcome classification and review triggers | Filing strategy and fee structures |
| Contribution Record concept | Corporate, securities and tax structures |
| Pathway menu and Micro-Venture as educational option | Actual venture entities and investment instruments |
| Benefit-sharing principles without % | Benefit-sharing percentages and vehicles |
| Conflict and Surprise Innovation process | Local court/regulatory procedures |

Malaysia/India (and other) implementation profiles will map these rules separately (`GAP-011`, `GAP-026`).

---

## Safeguarding / Workload

### Student enterprise ≠ child labour

Educational entrepreneurship is distinct from commercial exploitation.

Protect:

- study time;
- wellbeing;
- rest;
- academic recognition obligations (ADR-0003);
- safeguarding;
- voluntary participation;
- reasonable workload.

Commercial deadlines must **not** dominate a child’s education. Additional commercial hours must not be coerced because work may have financial value.

---

## Six Worlds Coverage

Creator Rights are **not** technology-only. They apply across the Six Worlds, including (illustrative):

- software/code and engineering design;
- health research;
- enterprise models;
- architecture/environmental designs;
- photography, film, music, visual art;
- journalism and writing;
- policy work;
- educational content;
- community and social innovations.

Core terminology therefore uses **Creator Rights**, with **IP as one component**.

---

## Rationale

- Closes the Core architectural hole left by ADR-0007’s IP deferral (`GAP-025`) without inventing country law.
- Protects children from appropriation and coercive commercialisation while enabling authentic research, public problem-solving and optional entrepreneurship.
- Separates ordinary schoolwork from significant cases to avoid administrative overload.
- Makes contribution, Background/Mission/Joint IP and Surprise Innovation operable before partner capture occurs.
- Keeps patents/startups as optional tools, not innovation metrics.
- Aligns with FND-003’s country-bound legal ownership boundary and ADR-0002’s production possibilities.
- Preserves Education-First so commercial attractiveness cannot rewrite the Mission Ecosystem.

## Consequences

### Positive

- Clear Core language for ministries and partners: innovation without sacrificing child rights or academic recognition (as architectural consequence, not guaranteed economic outcome).
- Proportionate governance: posters stay posters; breakthroughs get review.
- Six Worlds creative and public-good outputs treated as first-class.
- Contribution honesty (including adult and AI contribution).
- Pathway plurality beyond “file a patent / found a startup.”
- Continuity of creator recognition beyond enrolment.

### Risks / costs

- Partner negotiations become more demanding; weak campuses may under-implement.
- Contribution Records require adult discipline; poor records create later disputes.
- Conflicted schools may still pressure commercialisation without strong enforcement.
- Country-law mapping remains essential; Core principles alone do not create enforceable title (`GAP-011`, `GAP-026`).
- Operating templates and country overlays must still be human-reviewed (MIS / POC / MY DRAFT).

### Follow-on work

- Country IP/creator-rights legal mapping (`GAP-026`; MY detail `GAP-011`).
- Benefit-sharing policy (`GAP-027`).
- Micro-Venture operating standard (`GAP-028`).
- External investment safeguards (`GAP-029`).
- Student Innovation & Mission Fund design (`GAP-030`).
- Creator Rights Review procedures and agreement templates (`GAP-031`).
- Partner governance / I-in-R / mission risk standards (`GAP-022`–`024`) incorporating Creator Rights controls.
- Proof of Capability operating linkage (`GAP-038`–`044` / POC-001 DRAFT; ADR-0016 APPROVED).

## Alternatives Considered

1. **School automatically owns all student work** — Rejected: conflicts with Creator Rights, Education-First and non-appropriation; turns education into asset extraction.
2. **Student automatically owns everything regardless of partner contribution** — Rejected as absolute rule: ignores Background IP, joint development and lawful partner rights; Core still forbids automatic student→partner transfer and requires contribution honesty.
3. **Partner owns anything created under a sponsored mission** — Rejected: hidden capture; incompatible with ADR-0007 and this ADR’s partner principles.
4. **No IP/commercial pathway at school age** — Rejected as absolute ban: would forbid legitimate research protection, public licensing and supervised learning about enterprise; optional pathways retained.
5. **Patents/startups as the default innovation measure** — Rejected: distorts learning; excludes creative/public-good value; invites false promises.
6. **Student Creator Rights + proportional review** — **Selected**: recognition, classification, contribution, surprise/conflict governance, optional pathways.
7. **Forced Core revenue sharing** — Rejected: invents percentages; ignores country fiscal/legal variance; transparency and fair-benefit principles retained without fixed %.
8. **Optional country-specific benefit-sharing rules** — **Selected** as implementation path (`GAP-027`), constrained by Core fairness principles.
9. **Venture-first model** — Rejected: commercialises childhood; conflicts with Education-First and productive failure.
10. **Education-first optional venture model** — **Selected**: Micro-Venture as optional supervised learning pathway; stop/pivot/public-good are valid outcomes.

## Country-Specific Implications

Country / project profiles may later define:

- mapping of Creator Rights principles to national IP, contract and minors law;
- agreement templates and capacity procedures;
- benefit-sharing vehicles and any institutional participation rules;
- Micro-Venture and investment acceptance procedures;
- public-interest licence preferences for strategic missions;
- Student Innovation Fund legal/fiscal design if adopted;
- terminology adaptations that preserve Core meaning.

**Core must not invent Malaysian or Indian ownership percentages, patentability conclusions or securities structures in this ADR.**

Malaysia legal feasibility remains `GAP-011`. Cross-country mapping process: `GAP-026`.

## Related Documents

- `docs/00-foundation/CONCEPT_CONSTITUTION.md` (APPROVED) — especially §§6, 9, 10
- ADR-0001, ADR-0002, ADR-0003 (APPROVED)
- ADR-0007 (APPROVED — Mission Ecosystem; Education-First; no automatic IP transfer)
- ADR-0004, ADR-0005, ADR-0006 (APPROVED — stage/mobility context)
- ADR-0011, ADR-0015, ADR-0016, ADR-0019, ADR-0020 (APPROVED)
- `POC-001` / `POC-FRM-*` (DRAFT — PoC ops; GAP-038–044 not closed)
- `MIS-001`–`003` / `MIS-TPL-001` (DRAFT — Mission ops / Creator Rights templates; GAP-022–024 / 031 not closed)
- `GAP_REGISTER.md` — GAP-025 Closed by this ADR; GAP-011; GAP-026–031

## Open Questions

1. Country-by-country legal mapping of ownership, inventorship, minors’ capacity and employment-related IP doctrines (`GAP-026`; MY `GAP-011`).
2. Benefit-sharing policy detail without Core-fixed percentages (`GAP-027`).
3. Micro-Venture operating standard, workload caps and exit criteria (`GAP-028`).
4. External investment acceptance checklist and independent-advice triggers (`GAP-029`).
5. Whether/when to establish a Student Innovation & Mission Fund and its governance (`GAP-030`).
6. Creator Rights Review SOP and mission IP expectation templates (`GAP-031`).
7. How Contribution Records and sanitised capability evidence operate inside Proof of Capability verification (`GAP-038`–`044`; ADR-0016 APPROVED; POC-001 DRAFT).
8. Integration of Creator Rights controls into partner governance and mission risk classification (`GAP-022`, `GAP-024`).

## Test Scenarios

| ID | Scenario | Architectural result |
|---|---|---|
| **A** | 9-year-old draws a poster (Ordinary Educational Work) | Creator recognition appropriate; **no** Creator Rights Review or IP bureaucracy |
| **B** | 15-year-old invents useful irrigation component during a Mission | School does **not** automatically own it; classification may rise; Contribution Record; Education-First; pathway optional |
| **C** | Company provides equipment + challenge; team creates valuable improvement | Partner Background IP and Mission-Created / joint contribution remain distinguishable; no automatic all-to-partner transfer |
| **D** | Three learners disagree about commercialisation | No party may erase others’ contribution; Creator Rights Review / disagreement handling; pathway not forced |
| **E** | Engineer provides the key inventive step | Contribution Record attributes inventive step accurately; no false all-to-students credit |
| **F** | Routine-seeming mission yields unexpected breakthrough | Surprise Innovation Rule: pause exploitation; preserve evidence; human review; guardians/advice as relevant |
| **G** | School wants licensing income; learner prefers publication | Conflict disclosure + student-protective review; school interest not unilateral |
| **H** | 17-year-old offered investment | Independent/legal/guardian safeguards; school cannot pressure acceptance; capacity under country law |
| **I** | Team wants open-source release | Permitted where lawful and mission conditions allow; not forced into patent/licensing |
| **J** | Public-interest environmental solution with little commercial value | Treated as valuable (Public-Good / Archive / Deploy as fit); creator recognition preserved |
| **K** | Learner uses AI for most code and cannot explain it | Creator attribution and capability evidence reflect actual contribution; no false authorship |
| **L** | Confidential mission blocks disclosure of partner data | Sanitised verified capability evidence still possible for portfolio/applications |

## Explicit Non-Claims

This ADR does **not**:

- close GAP-011 or GAP-026–031 (country / ops remain open);
- approve `MIS-001`–`003`, `MIS-TPL-001`, `POC-001` or MY documents;
- promise students patents, startups, investment or GDP/employment outcomes;
- guarantee ownership percentages or invent universal revenue shares;
- invent Malaysian or Indian IP, contract, employment or securities law;
- draft patent filings, investment term sheets or corporate constitutions;
- claim minors can sign contracts independently of country law;
- make commercial success a graduation requirement;
- design Proof of Capability database schemas or Contribution Record software;
- mandate a Student Innovation Fund financial structure;
- authorise child labour or override safeguarding / Formal Recognition obligations;
- weaken ADR-0007 Education-First to increase commercial attractiveness.
