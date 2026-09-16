# ADR-0016 — Proof of Capability and Capability Evidence Architecture

| Field | Value |
|---|---|
| Document ID | `ADR-0016` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Date | `2026-09-14` |
| Approved | `2026-09-16` |
| Deciders | Human architectural review (approval hygiene checkpoint) |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `FND-003` APPROVED; `ADR-0001` APPROVED; `ADR-0002` APPROVED; `ADR-0003` APPROVED; `ADR-0015` UNDER REVIEW (multi-stream assessment); `ADR-0014` UNDER REVIEW (Contribution Records; sanitised evidence; AI disclosure); `ADR-0007` UNDER REVIEW (mission authenticity; stakeholder feedback ≠ Tarbiyat judgment); developmental portability context `ADR-0004`–`ADR-0006` UNDER REVIEW (not treated as approved) |
| Related gaps / claims | GAP-010 Closed by this ADR; GAP-009 remains Open; related GAP-002, GAP-008, GAP-016, GAP-018; opens GAP-038–GAP-044 (ops/research — not closed) |
| Source documents | `FND-003` §§5, 8, 10; ADR-0003 dual assessment; ADR-0002 productive failure; Architecture Iteration 8 brief (2026-09-14); approval hygiene checkpoint (2026-09-16) |

---

## Title

Proof of Capability and Capability Evidence Architecture

## Status

`APPROVED`

## Context

ADR-0003 (APPROVED) establishes a dual assessment architecture: a Formal Recognition Layer where required, plus a parallel Tarbiyat capability layer that may include mission portfolio, Competency Graph and **Proof of Capability Profile**. It forbids claiming legal equivalence of Proof of Capability to statutory credentials, and leaves schemas and moderation open (`GAP-009`, `GAP-010`).

Without Core Proof of Capability architecture:

- capability records risk becoming decorative scrapbooks, badge farms or marketing CVs;
- team success, AI output or external praise may be mistaken for individual competence;
- academic marks may be confused with demonstrated practical capability (and vice versa);
- confidential missions may leave learners with nothing portable to show;
- AI systems or single adults may silently determine “competence”;
- Exploration Floor and portable capability (ADR-0006 under review) may have nowhere to land as evidence;
- ministries and universities may be offered unsupported “dual credential” claims;
- faculty may drown in documentation if every action must be recorded.

**ID pre-flight:** `ADR_INDEX.md` reserves ADR-0008–0013 for other topics. **No reserved ADR ID exists for Proof of Capability.** ADR-0011 remains reserved for **Six Worlds depth / competency maps** (`GAP-008`) — adjacent to, but **not** identical with, Competency Graph schema (`GAP-009`) or Proof of Capability (`GAP-010`). **No renumbering conflict.** This body uses the next free ID **ADR-0016**.

**Dependency note:** This ADR assumes ADR-0003’s dual-layer rule as approved law. It uses ADR-0007 authenticity/stakeholder limits, ADR-0014 Contribution Records / sanitised evidence / AI disclosure, ADR-0015 multi-stream assessment, and ADR-0004–0006 portability/Exploration Floor language only as **under-review context**. Those ADRs remain `UNDER REVIEW` and are **not** treated as approved. If any is materially revised before approval, this ADR must be re-checked.

This ADR remains Core / country-neutral. It does **not** invent Malaysian exam equivalence, university recognition, employer acceptance, database schemas, blockchain credentials, composite employability scores or Competency Graph taxonomies.

## Decision

Tarbiyat Core adopts an **evidence-backed, human-governed Proof of Capability (PoC)** architecture so that a learner’s demonstrated capability is **trustworthy, inspectable and portable** — without reducing complex human capability to one score, replacing recognised examinations, or allowing AI or any single adult to determine competence.

1. **Dual attainment** remains: Recognised Academic Attainment (where applicable) **plus** Tarbiyat Proof of Capability. Prefer that phrasing over unsupported “dual credential” claims. PoC is **not** a legally recognised qualification unless a competent authority later recognises it.
2. A **Proof of Capability Profile** is a structured record of **evidence-backed Capability Claims**, not a CV, marksheet, scrapbook, unverified portfolio or participation-badge collection.
3. Core distinguishes: **taught** ≠ **submitted** ≠ **demonstrated** ≠ **externally useful**.
4. **Participation alone is not Proof of Capability.**
5. Evidence architecture uses **Direct**, **Supporting** and **Context** evidence; meaningful Direct evidence is preferred for significant claims.
6. Team work uses **Contribution Records** (ADR-0014 principles); team success does not auto-credit every member.
7. Claims preserve **independence/support context** descriptively — not arbitrary universal numeric levels.
8. **Productive failure** remains valid evidence; polished products without explainable contribution do not.
9. Mission authenticity context (ADR-0007 levels) may be recorded; external work is **not** automatically superior to excellent internal educational work.
10. **Multi-source verification** aligns with faculty functions (ADR-0015); no single source monopolises final determination.
11. Stakeholder praise or deployment **≠** capability certification.
12. Significant advanced claims may require proportional **Capability Defence**.
13. **AI may assist**; material AI assistance must be disclosed; unexplained AI output does not earn full capability credit.
14. **Provenance** is mandatory in principle; schemas deferred.
15. Confidential work may yield **Sanitised Verified Evidence**.
16. Profiles are **longitudinal**; later evidence may supersede earlier; early weakness must not permanently stigmatise.
17. **No permanent deficit labels** and **no universal composite capability score**.
18. Valid evidence should be **portable** across pathway change where educationally valid (ADR-0006 portable capability principle — under review); legal transferability across all systems is **not** promised.
19. Exploration Floor / breadth evidence may appear where appropriate and privacy-safe — without behavioural surveillance.
20. Ethics/professional responsibility evidence is permitted as **demonstrated conduct and reflection**, never as personality/belief scores.
21. **Data minimisation:** PoC is not the complete institutional file; counselling, health, safeguarding and sensitive family/disciplinary records are excluded or strongly protected outside PoC.
22. Learners may view, understand, reflect, flag errors and challenge under a defined process — **not** self-certify.
23. Claims may disclose **verification strength**; more badges ≠ better learning.
24. AI may organise/suggest for human review; AI may **not** award, deny, pathway-gate, rank potential or certify Profiles.
25. **Competency Graph** (relationships/prerequisites — `GAP-009`; World maps via proposed ADR-0011 / `GAP-008`) remains distinct from PoC (individual evidence — this ADR / `GAP-010`).
26. PoC works across **all Six Worlds** and may draw evidence from Missions, Labs, academic subjects, research, performances, examinations, community work and recognised coursework — not Missions alone.
27. Presentation is conceptual and audience-constrained; technology and UI remain open; **no blockchain requirement**.
28. Workload practicality is a Core constraint: selective, significant, reusable evidence — not administrative hell.

**Resolution of GAP-010:** this ADR supplies Core PoC architecture and verification principles. **GAP-010 is Closed** by this APPROVED ADR. Operating standards, digital systems and country acceptance remain follow-on (`GAP-038`–`GAP-044`). GAP-009 (Competency Graph) remains Open.

---

## Dual-Attainment Relationship

| Layer | What it shows | What it is not |
|---|---|---|
| **Recognised Academic Attainment** | Country-recognised / approved curriculum, examinations, certificates or qualifications as applicable | Not replaced by PoC |
| **Proof of Capability** | Verified evidence of what the learner has actually demonstrated | Not automatically a legal qualification or “dual credential” |

Preferred institutional language:

> recognised academic credential **+** Tarbiyat Proof of Capability

Integrity rule (ADR-0003): neither layer may be falsely marketed as eliminating the other.

### Four distinctions (Core)

| Concept | Meaning |
|---|---|
| **Taught** | Content/skills the programme exposed the learner to |
| **Submitted** | Artefacts or work the learner turned in |
| **Demonstrated** | What the learner can show, explain, perform or defend under verification |
| **Externally useful** | What a stakeholder found helpful or deployable |

These are **not identical**. PoC privileges **demonstrated** capability, informed by other streams without collapsing them.

---

## Definition of Proof of Capability

A **Proof of Capability Profile** is Tarbiyat’s longitudinal, structured record of **Capability Claims** that are:

- evidence-backed;
- contextualised;
- contribution-honest;
- verification-stated;
- provenance-aware;
- privacy-minimised;
- human-accountable.

It is **more than**: a CV; a marksheet; a scrapbook; an unverified portfolio; participation badges; AI-generated biography.

### Conceptual claim unit (refined)

Each significant Capability Claim should, proportionally, associate:

| Element | Purpose |
|---|---|
| **Capability Claim** | Clear statement of what can be demonstrated |
| **Evidence** | Direct and supporting artefacts / performances |
| **Context** | Mission/task constraints, tools, authenticity, team |
| **Independence / support** | How much guidance was present |
| **Verification** | Who verified what, at what strength |
| **Reflection / Defence** | Where significant claims require explanation |
| **Provenance** | Origin, assistance, versions, confidentiality flags |

Elements scale with significance. Ordinary formative work does not require full bureaucracy.

---

## Capability Claims

A **Capability Claim** states a scoped, inspectable demonstration — e.g.:

> “Can design and test a simple environmental sensing system under defined constraints.”

That differs from:

- “Completed Robotics Module 4” (completion/participation claim);
- “Scored 82%” (formal academic attainment signal).

**Claim quality rules:**

- understandable to an informed reader;
- evidence-backed;
- appropriately scoped (not over-general);
- not exaggerated;
- sufficiently specific to inspect or defend.

**This ADR does not create the full capability taxonomy.** Domain maps drafted in ADR-0011 (`UNDER REVIEW` / `GAP-008`); graph relationships remain `GAP-009`.

---

## Evidence Architecture

### Rule: Proof ≠ Participation

**Participation alone is not Proof of Capability.**

Attending a Mission, lab, internship, workshop, competition or project does **not** automatically prove competence. Evidence must show **meaningful student contribution**, especially for team projects, external missions, AI-assisted work, competitions, internships and group prototypes.

### Permissible evidence types (illustrative)

Physical artefacts; prototypes; experiments; research records; code; design files; calculations; writing; policy analysis; performances; creative work; presentations; oral defence; field observations; process logs; testing data; revision history; peer collaboration evidence; practitioner observations; educator assessment; stakeholder feedback; student reflection; Contribution Records.

Not every claim uses every type.

### Direct / Supporting / Context evidence

| Class | Meaning | Role |
|---|---|---|
| **Direct evidence** | Learner performs, builds, explains, creates, investigates or demonstrates | Preferred backbone of significant claims |
| **Supporting evidence** | Educator/practitioner observations, stakeholder comments, process records, assessments | Corroboration; not sole high-stakes basis when Direct is feasible |
| **Context evidence** | Mission scope, tools, constraints, team composition, difficulty, authenticity level | Prevents inflated comparison |

---

## Contribution Records

For substantial team or collaborative work, PoC **must not** copy team success to every member.

Apply ADR-0014 Contribution Record principles (under review) to capture, where appropriate:

- learner’s role;
- identifiable contribution;
- decisions made;
- work performed;
- ability to explain/defend contribution;
- collaboration contribution.

**Do not assume equal contribution.** Presence ≠ competence. Adult enablement does not erase genuine student contribution; nor does it invent it.

**Creator attribution ≠ competency assessment** and **commercial value ≠ educational capability** (ADR-0014).

---

## Independence / Support Context

Capability demonstrated under different support is not identical. PoC should record **descriptive independence/support context**, for example:

| Descriptive context (illustrative) | Meaning |
|---|---|
| Close guidance | Substantial step-by-step adult direction |
| Normal support | Typical teaching/facilitation for the stage |
| Mostly independent | Learner drives work with occasional critique |
| Independent | Learner completes under defined constraints with minimal direction |
| Leading / teaching others | Learner scaffolds peers while remaining accountable for own contribution |

These are **context descriptors**, not universal numeric levels or ranks. Core does **not** invent a mandatory 1–5 scale without evidence. Implementation may refine labels (`GAP-038`).

Tutorial-following, heavily supported practice, partially defined briefs and open-ended problems must remain distinguishable in context.

---

## Productive Failure

Carry forward ADR-0002 productive-failure architecture:

- A failed prototype may still evidence diagnosis, experimentation, analysis, iteration, ethics and documentation.
- A polished team product may evidence little individual capability if the learner cannot explain or defend their contribution.

**Product quality ≠ capability breadth.** **Failure ≠ absence of evidence.**

---

## Mission Authenticity Relationship

Where mission-derived, claims may record authenticity context consistent with ADR-0007 (under review), e.g. designed task; simulation; observed real problem; partner-informed; partner-connected; advanced contribution.

**External authenticity does not automatically outrank excellent internal educational work.** Safeguarding and educational purpose remain binding.

---

## Verification Model

Verification is multi-source and role-aligned (consistent with ADR-0015 under review):

| Contributor | May verify / contribute |
|---|---|
| **Educator** | Conceptual / disciplinary understanding; learning progression |
| **Practitioner** | Professional authenticity; technical/creative quality standards |
| **Mentor** | Reflection/development evidence where appropriate (not clinical diagnosis) |
| **Technical Professional** | Safety/process competence where relevant |
| **External stakeholder** | Usefulness, responsiveness, professional communication |
| **Student** | Self-reflection and contribution explanation |

**No single source automatically controls final capability determination.**

### Stakeholder feedback ≠ capability certification

“Great work,” internship praise or “we deployed the prototype” may strengthen the record. They **do not** certify every claimed student capability and cannot replace educational verification.

---

## Capability Defence

For **significant advanced** claims, Tarbiyat may require a proportional **Capability Defence** in which the learner explains:

what they did; why; how; evidence; limitations; failures; decisions; ethical issues; what they would improve.

Purposes: reduce plagiarism; AI ghost-production; unequal team attribution; superficial portfolio inflation.

**Proportionality:** not every small claim needs a formal viva. Defence intensity rises with claim significance, independence asserted and risk of misattribution.

---

## AI-Assisted Work

AI may assist learners. PoC must distinguish **AI-assisted production** from **student capability**.

Rules:

1. Disclose **material** AI assistance in provenance / Contribution Records.
2. Evidence should establish whether the student can **understand, evaluate, adapt, explain, test and verify** AI-generated work.
3. A student does **not** receive full capability credit for output they cannot meaningfully explain or defend.
4. AI is **not banned by default**.
5. Academic integrity and Creator Rights principles (ADR-0014 under review) remain applicable.

---

## Evidence Provenance

Provenance should, in principle, answer:

Who created this? When? Under what Mission/context? With which team? With what assistance? Who verified it? What version? Was AI materially involved? Was external confidential material involved?

**Database/schema design is out of scope** (`GAP-038` / later systems work).

---

## Confidential Evidence

Where partner confidentiality constrains disclosure, PoC permits **Sanitised Verified Evidence** (ADR-0014 principle):

> “Designed and tested a network-security analysis under restricted partner conditions; technical artefact confidential; capability verified by authorised assessors.”

Protected data must **not** be exposed merely to impress a portfolio audience.

---

## Longitudinal Development

PoC is longitudinal. Profiles should show **growth**, not only trophy accumulation.

Optional **descriptive claim status** (illustrative — not mandatory universal grades):

| Status | Meaning |
|---|---|
| Emerging | Early, fragile or highly supported demonstration |
| Developing | Repeated practice with incomplete consistency |
| Consistent | Reliable demonstration across relevant contexts |
| Advanced | High independence / complexity / transfer within scope |

Do **not** invent false precision or compulsory numeric progression. Fast-changing domains should retain **date/context** so evidence can age honestly without erasing history.

### Supersession / growth

Later stronger evidence may **supersede** earlier evidence for current claims while historical growth remains visible where useful. A younger learner’s failed attempt must **not** become a lifelong negative label.

### No permanent deficit labels

PoC documents demonstrated evidence. It must **not** become a permanent algorithmic label such as “poor leadership child” or “not suitable for science.” Align with student-development non-determinism (FND-003; ADR-0004 under review).

---

## Portability

Useful capability evidence should **travel with the learner** across concentration, Major/Minor, school phase and — where feasible — country implementation.

Relate to ADR-0006 portable vs pathway-specific capability (under review):

- portable evidence is not erased by pathway change;
- pathway-specific prerequisites may still gate advanced activities.

**Core does not promise legal transferability** between all education systems.

After graduation/transfer, learners should retain reasonable access to their verified records subject to confidentiality, safeguarding and country retention law (`GAP-044`).

---

## Exploration Floor Evidence

PoC must not record **only** Major specialisation. Where appropriate and privacy-safe, it may make visible continuing breadth such as:

communication; ethics/civic responsibility; interdisciplinary capability; collaboration; broad academic foundations; physical/wellbeing-related development **only where appropriate and privacy-safe**.

**Anti-surveillance rule:** PoC must not become intrusive behavioural monitoring of personality, friendships or private life.

---

## Ethics / Professional Responsibility Evidence

Sensitive. Permitted forms include:

- reflective analysis of an ethical dilemma in mission context;
- documented responsible handling of data/confidentiality;
- verified safe lab/workshop practice;
- refusal of an unsafe shortcut with accountable decision record.

**Forbidden:** simplistic scores such as “Integrity: 82/100”; permanent behavioural rankings; scoring internal beliefs or personality.

---

## Privacy / Data Minimisation

A lifelong capability record is dangerous if over-collected.

**PoC is not the student’s complete institutional file.**

Exclude or strongly protect outside PoC (and never treat as shareable Profile content by default):

- counselling notes;
- health data;
- safeguarding records;
- family difficulties;
- sensitive disciplinary details.

Employers, partners and public audiences must not receive these via PoC sharing modes.

Country data-protection and retention detail: `GAP-044` (and MY data architecture still `GAP-006` where relevant).

---

## Student Access / Challenge

Learners should be able to:

- see capability claims;
- understand supporting evidence (subject to confidentiality);
- contribute reflection;
- identify factual errors;
- request review/challenge under a defined process.

**Students may not unilaterally self-certify** high-stakes claims.

Challenge/correction applies to contribution attribution, capability wording, evidence interpretation and verification result. Records are **not** immutable merely because an educator entered them. Detailed appeals SOP: `GAP-039`.

---

## Verification Strength

Claims may disclose verification strength, for example:

| Strength (illustrative) | Meaning |
|---|---|
| Self-evidenced | Learner assertion / reflection only |
| Educator-verified | Educator verification |
| Practitioner-verified | Practitioner verification |
| Externally corroborated | Stakeholder/external corroboration present |
| Multi-source verified | Combined educational + professional (+ external as fit) |

Trust requires honesty about strength — **not gamification**. More badges ≠ better learning.

---

## No Universal Composite Score

**Core rule:**

> Tarbiyat does **not** collapse the learner’s entire capability into one universal score, rank or employability number.

Reasons: destroys context; encourages gaming; overclaims measurement; risks pathway determinism; makes AI scoring dangerous.

Specific assessments may use local scales. The full person must not become one number.

---

## Human / Algorithmic Boundary

**AI may:** organise evidence; detect missing provenance; suggest possible capability links; assist search; draft summaries for human review.

**AI may not independently:** award high-stakes capability status; deny capability; alter pathway eligibility; rank human potential; certify the Profile.

Human accountability remains mandatory (FND-003).

---

## Competency Graph Relationship

| System | Role |
|---|---|
| **Competency / Capability Graph** | Defines relationships among capabilities, prerequisites and domains (`GAP-009`; World depth maps `GAP-008` / proposed ADR-0011) |
| **Proof of Capability** | Holds evidence demonstrating what an **individual learner** has actually shown (this ADR / `GAP-010`) |

PoC claims should be **compatible** with future Graph nodes without requiring the Graph to exist first. This ADR does **not** design Graph schema.

---

## Six Worlds Applicability

PoC must work rigorously across all Six Worlds — not STEM-only.

| World | Illustrative evidence shapes |
|---|---|
| Engineering & Intelligent Systems | Prototype, calculations, testing, defence |
| Health & Life Sciences | Research design, biological investigation, health communication — **not** unlicensed clinical practice |
| Enterprise & Economics | Market research, financial reasoning, operations, enterprise experiment |
| Earth, Energy & Built Environment | Environmental investigation, built-environment design, energy analysis |
| Creative, Media & Human Communication | Film, design, writing, performance, audience/critical review |
| Society, Leadership & Public Systems | Policy analysis, civic research, public communication, community intervention |

---

## Formal Academic Learning Sources

Capability evidence may emerge from:

Missions; Labs; academic subjects; research; performances; examinations; community work; recognised coursework.

**Capability does not exist only in Missions.** Formal assessment artefacts may support claims when they demonstrate capability — without converting PoC into a second marksheet.

---

## Profile Presentation Principle

Conceptual human-readable sections (not UI design):

1. Learner Snapshot  
2. Major / Minor where applicable  
3. Demonstrated Capabilities  
4. Significant Missions / Productions  
5. Selected Evidence  
6. Contribution Roles  
7. Research / Creator Outputs  
8. External Validation (corroboration, not certification monopoly)  
9. Reflection / Defence (where present)  
10. Recognised Academic Attainment link/reference  

Final UI/UX deferred (`GAP-040`).

---

## Audience / Sharing Principle

Different audiences need different views, e.g.:

- learner / parent;
- university admissions;
- employer / internship;
- partner / research;
- public showcase.

Privacy, student consent (age-appropriate) and data-minimisation constrain sharing. **Not all evidence is public.**

---

## External Verifiability

A future recipient should be able to determine whether Tarbiyat **actually verified** a claim.

Architect **trust markers** without blockchain hype. Possible later mechanisms: signed institutional records; audit trails; verification links. Technology choice remains open (`GAP-041`). **Blockchain is not introduced** unless a real requirement later appears.

Do **not** claim universities/employers already recognise the Profile.

---

## Workload / Practicality

Mission-based learning already produces large evidence volume. PoC must not become administrative hell.

Architectural mitigations:

- **selective evidence** with significance thresholds;
- reusable mission artefacts as primary evidence sources;
- proportional verification (intensity follows claim significance);
- student participation in evidence curation;
- refuse participation-badge inflation.

Faculty evidence workload research: `GAP-042`.

---

## External Trust and Ministry Value

Trust factors (aspirational architecture, not claimed present recognition):

clear definitions; authentic artefacts; Contribution Records; multi-source verification; practitioner input; Capability Defence; provenance; Formal Recognition alongside PoC.

Possible later societal uses (non-promises): education-to-work transitions; admissions evidence; skills visibility; innovation pathways.

Core does **not** promise unemployment reduction, official national adoption or automatic external recognition (`GAP-043`).

---

## Rationale

- Makes ADR-0003’s capability layer operable without legal overclaim.
- Separates taught/submitted/demonstrated/useful.
- Protects against team free-riding, AI ghost-work and praise-as-certification.
- Preserves productive failure and authentic internal learning.
- Aligns verification with faculty functions and Mission Ecosystem limits.
- Keeps Graph taxonomy separate from individual evidence.
- Forces practicality so the system can survive real schools.

## Consequences

### Positive

- Inspectable, portable capability narrative beside recognised academics.
- Stronger integrity against inflation and misattribution.
- Six Worlds parity for creative/civic/enterprise evidence.
- Privacy boundary against institutional-file leakage.
- Clear AI and pathway non-automation rules.

### Risks / costs

- Documentation load if significance thresholds fail (`GAP-042`).
- Inconsistent claim wording without Graph/maps (`GAP-008`/`GAP-009`).
- External audiences may still demand a single score; Core refuses — communication burden.
- Dependency on under-review ADR-0007/0014/0015/0006 coherence.
- Country acceptance uncertain (`GAP-043`).

### Follow-on work

- GAP-010 Closed by this APPROVED ADR.
- Competency Graph schema (`GAP-009`); Six Worlds maps (ADR-0011 UNDER REVIEW / `GAP-008`).
- Verification / challenge / presentation / verifiability / workload / privacy operating detail remains `POC-001` / `POC-FRM-*` (`DRAFT` — GAP-038–044 proposed, not closed; not approved by this ADR).
- External acceptance research (`GAP-043`) remains Open.
- Country retention/consent overlays (`GAP-044` / `GAP-006`).
- Re-check PoC ops if ADR-0007 / 0014 / 0015 (or related under-review context) change materially.

## Alternatives Considered

1. **Exams only** — Rejected: collapses Tarbiyat Learning Engine (ADR-0002/0003).
2. **Unverified portfolio** — Rejected: untrustworthy; invites inflation.
3. **Badges for participation** — Rejected: Proof ≠ Participation.
4. **Universal numeric capability score / employability rank** — Rejected: destroys context; pathway risk; AI scoring danger.
5. **Employer-defined competency profile as Core** — Rejected: cedes educational judgment; Six Worlds distortion; Education-First conflict.
6. **Blockchain credential-first approach** — Rejected: tech hype without requirement; does not solve evidence quality.
7. **Evidence-backed human-governed Proof of Capability** — **Selected**.
8. **Claim PoC as dual legal credential now** — Rejected: unsupported; harmful if untrue (ADR-0003).

## Country-Specific Implications

Country / project profiles may later define:

- mapping of Recognised Academic Attainment frameworks (`GAP-002` for Malaysia);
- whether any authority will recognise PoC elements;
- data retention, consent and cross-border transfer rules;
- language/terminology adaptations preserving Core meaning;
- admissions or employer liaison practices without inventing endorsements.

**Core must not invent Malaysian (or other) legal equivalence or acceptance claims.**

## Related Documents

- `docs/00-foundation/CONCEPT_CONSTITUTION.md` (APPROVED) — §§5, 8, 10
- ADR-0001, ADR-0002, ADR-0003 (APPROVED)
- ADR-0007, ADR-0014, ADR-0015 (UNDER REVIEW)
- ADR-0004, ADR-0005, ADR-0006 (UNDER REVIEW — portability/Exploration Floor context)
- Proposed ADR-0011 / `GAP-008` — World maps; `GAP-009` — Competency Graph
- `docs/05-assessment/SECTION_README.md`
- `docs/05-assessment/PROOF_OF_CAPABILITY_OPERATING_STANDARD.md` (`POC-001` DRAFT)
- `docs/05-assessment/POC_OPERATING_TEMPLATES.md` (`POC-TPL-001` DRAFT)
- `GAP_REGISTER.md` — GAP-010; GAP-038–044

## Open Questions

1. Human acceptance of `POC-001` verification/moderation SOP and independence descriptors (`GAP-038`) — drafted, not closed.
2. Human acceptance of student challenge/appeals operating procedure (`GAP-039` / `POC-FRM-005`) — drafted, not closed.
3. Campus audience presentation packs under `POC-001` principles (`GAP-040`) — principles drafted; packs/UI open.
4. Signed-record / verification-link product choice without blockchain mandate (`GAP-041`) — Core trust properties drafted; mechanism evaluation open.
5. Pilot evidence for significance thresholds / faculty workload (`GAP-042`) — rules drafted; empirical load open.
6. Empirical external trust/acceptance studies (`GAP-043`) — remains Open.
7. Retention periods and PoC privacy DPIA-style rules by country (`GAP-044` / `GAP-006`).
8. Exact Graph↔PoC node binding once `GAP-009` exists.
9. Re-check PoC ops if ADR-0006/0007/0014/0015 change materially.

## Test Scenarios

| ID | Scenario | Architectural result |
|---|---|---|
| **A** | High marks, weak practical performance | Formal record stands; PoC must **not** fabricate practical capability |
| **B** | Modest exam score, strong engineering design capability | PoC can show strength; academic record remains separate |
| **C** | Team wins competition; one learner contributed little | No automatic equal capability credit; Contribution Record governs |
| **D** | Prototype fails; strong analysis/iteration | Valid productive-failure evidence remains |
| **E** | Sophisticated AI-generated code learner cannot explain | Full capability **not** verified |
| **F** | Company praises learner | Useful corroboration; **not** sole certification |
| **G** | Confidential work cannot be shown publicly | Sanitised Verified Evidence permitted |
| **H** | Pathway Engineering → Enterprise | Portable capabilities remain; pathway-specific gates still apply |
| **I** | Poor collaboration at 13; strong by 16 | Growth represented; no permanent stigma |
| **J** | Excellent documentary (Creative World) | Same rigor as engineering prototypes |
| **K** | Refuses unsafe shortcut delaying Mission | Responsible conduct evidence without personality score |
| **L** | Employer requests counselling/safeguarding records | PoC must **not** contain/share them |

## Explicit Non-Claims

This ADR does **not**:

- close GAP-009 (Competency Graph remains Open) or approve `POC-001` / `POC-FRM-*` / GAP-038–044;
- treat ADR-0004–0007, ADR-0014 or ADR-0015 as APPROVED;
- claim PoC is a legally recognised qualification or “dual credential”;
- claim universities, employers or ministries already accept the Profile;
- invent Malaysian recognition equivalence;
- design Competency Graph taxonomy or database schemas;
- require blockchain;
- create a universal composite capability score;
- permit AI or one adult to certify competence or assign pathways;
- mandate formal viva for every small claim;
- turn PoC into behavioural surveillance or a full student file;
- promise unemployment reduction or national adoption;
- guarantee zero faculty documentation load.
