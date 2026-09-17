# ADR-0004 — Student Development and Progressive Specialisation Architecture

| Field | Value |
|---|---|
| Document ID | `ADR-0004` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Date | `2026-09-13` |
| Approved | `2026-09-17` |
| Deciders | Human architectural review (Integrated Developmental Architecture review) |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `FND-003` APPROVED; `ADR-0001` APPROVED; `ADR-0002` APPROVED; `ADR-0003` APPROVED |
| Related gaps / claims | GAP-003, GAP-004, GAP-008, GAP-016 (Closed by ADR-0019), GAP-018, GAP-019, GAP-020 |
| Source documents | `FND-003` §§4, 7; Architecture Iteration 2 brief (2026-09-13); Integrated Human Review (2026-09-17) |

---

## Title

Student Development and Progressive Specialisation Architecture

## Status

`APPROVED`

## Revision history

| Version | Date | Notes |
|---|---|---|
| 0.1.0 | 2026-09-13 | Initial UNDER REVIEW draft |
| 1.0.0 | 2026-09-17 | APPROVED after Integrated Developmental Architecture human review; companion approvals ADR-0005 / 0006 / 0011 / 0017 / 0018 |

## Context

The approved Concept Constitution establishes the working progression **Explore → Discover → Choose → Deepen → Produce**, forbids premature permanent career labelling of young children, requires longitudinal pathway discovery under human oversight, and anticipates Major + Minor pathways within Six Worlds at suitable ages (TBD).

ADR-0002 establishes Lab-First / Mission-Based learning with progressive, age-appropriate intensity and no fixed Core percentage. ADR-0003 requires continued compatibility with applicable statutory or recognised curriculum, assessment and credentialing requirements. ADR-0001 requires country mapping to live in country/project profiles.

Without a Core architectural decision:

- stages risk being treated as slogans rather than operational development phases;
- early career labelling or irreversible tracking may re-enter design;
- Major + Minor timing may be invented prematurely for Malaysia;
- mission authenticity (GAP-018) may jump too early to external stakeholders or remain permanently simulated.

This ADR defines the **student-development architecture**. It does not draft curriculum content, set ages, grades, timetable percentages, Competency Graph schemas, or Malaysian Year mappings.

## Decision

Tarbiyat Core adopts the following student-development and progressive-specialisation architecture:

1. The five stages **Explore → Discover → Choose → Deepen → Produce** are the Core developmental progression.
2. Stages are defined **conceptually**. Exact age bands, school grades and Malaysian Year mappings remain open (`GAP-003`) and are later mapped as:  
   **Core Development Stage → Country Age/Year Structure → Country Curriculum/Recognition Requirements**.
3. Development precedes career labelling. Tarbiyat discovers interests and capabilities through repeated experience and longitudinal evidence; it does not permanently label young children as future professionals.
4. An **Exploration Floor** applies at all stages: as specialisation increases, student breadth never becomes zero (percentage TBD — `GAP-019`).
5. Pathway choice is **progressively committed but reasonably reversible**. Early preferences must not permanently trap a student (`GAP-020` for bridging detail).
6. **Major + Minor** is the preferred later-stage pathway architecture in principle; starting age, load and prerequisites remain open (`GAP-004`).
7. Mission authenticity should generally increase with developmental maturity (principle only; thresholds TBD — `GAP-018`).
8. Pathway discovery is **human-governed**; no single test, AI system, algorithm, teacher or parent may independently determine a pathway (aligns with FND-003 algorithmic-control rule).

## Definitions

| Term | Meaning |
|---|---|
| **Interest** | Emerging curiosity or attraction shown through engagement; provisional and exploratory. |
| **Preference** | Stated or evidenced leaning toward certain activities, Worlds or mission types; not yet a pathway commitment. |
| **Concentration** | Increased time and depth in selected areas while Exploration Floor continues; may precede formal Major/Minor. |
| **Major / Minor pathway** | Named later-stage pathway structure for depth (Major) plus complementary breadth or second focus (Minor). Terminology may adapt in country profiles. |
| **Career decision** | Permanent occupational identity or employment destination. **Not** made by Tarbiyat on behalf of a school-aged student. |
| **Exploration Floor** | Non-zero continuing breadth across human-development dimensions even during specialisation (see below). |
| **Pathway mobility** | Capacity to change concentration or Major/Minor with appropriate bridging, without permanent early lock-in. |

Tarbiyat supports interest → preference → concentration → Major/Minor **progressively**. It does not make a permanent career decision for a school-aged student.

---

## Five-stage progression

### 1. Explore

**Educational meaning:** Broad foundational learning and many forms of making, observation, investigation, communication, numeracy, reading, creativity, collaboration, movement/physical development, and ethical and civic formation.

**Operational meaning:** High breadth; low irreversible commitment. Students experience varied labs, Knowledge Studios and short missions. Capability evidence is formative and longitudinal.

**Not permitted:** Formal Major/Minor commitment; permanent career labelling.

### 2. Discover

**Educational meaning:** Structured exposure across the **Six Worlds**:

1. Engineering & Intelligent Systems  
2. Health & Life Sciences  
3. Enterprise & Economics  
4. Earth, Energy & Built Environment  
5. Creative, Media & Human Communication  
6. Society, Leadership & Public Systems  

**Operational meaning:** Rotations, comparative missions and guided reflection designed for **discovery through experience**, not career selection. World maps APPROVED in ADR-0011 (`GAP-008` Closed).

**Not permitted:** Treating Discover as irreversible streaming into a single profession.

### 3. Choose

**Educational meaning:** Students begin expressing meaningful pathway preferences.

**Operational meaning:** Choice is informed by student preference, repeated engagement, persistence, demonstrated capability, mission evidence, mentor observation, reflection, and parent/student dialogue where age-appropriate.

**Properties:** Choice is **not irreversible**. Formal ages for this stage are not set in this ADR.

### 4. Deepen

**Educational meaning:** Progressive concentration in selected areas with increasing technical/theoretical demand.

**Operational meaning:** May introduce Major and/or Minor pathways, interdisciplinary missions, longer-duration missions, and more authentic external problems. Exact timing remains open (`GAP-004`).

**Constraint:** Exploration Floor continues.

### 5. Produce

**Educational meaning:** Advanced work demonstrating accumulated capability through inspectable, discussable or demonstrable outcomes (consistent with ADR-0002 Production definition).

**Operational meaning:** Possible outputs include capstone missions, research, prototypes, software, experiments, designs, enterprise outputs, policy work, media/creative production, community interventions, and externally reviewed work. Where appropriate and lawful, work may connect to industry, government, university or community stakeholders.

**Constraint:** Production does **not** require every student to commercialise an idea. Formal Recognition Layer requirements (ADR-0003) remain binding where applicable.

---

## Exploration Floor

**Exploration Floor** means: even as specialisation increases, student breadth never becomes zero.

A student concentrating in one World must continue appropriate exposure to other dimensions of human development, including at least:

- communication;  
- ethics / civic responsibility;  
- physical development;  
- culture / cultural grounding as defined in the country profile;  
- broad academic foundations needed for recognition and coherence;  
- interdisciplinary work.

The Core **does not** specify a percentage or timetable share for the Exploration Floor in this ADR (`GAP-019`; also related to `GAP-016`).

---

## Pathway discovery process

Pathway discovery is a **human-governed conceptual sequence**, not necessarily a rigid single workflow:

**Exposure → Observation → Evidence → Reflection → Student Preference → Mentor / Family Dialogue → Recommendation → Student Choice**

Rules:

1. Longitudinal evidence outweighs one-off aptitude tests.
2. Recommendations may inform choice; they do not replace student participation appropriate to age.
3. **No automated or algorithmic system may independently assign, restrict or permanently determine a student's educational pathway.** Such systems may provide evidence or recommendations only; accountable human judgment and student participation remain mandatory (FND-003).
4. No single aptitude test, AI system, algorithm, teacher or parent independently determines the pathway.
5. The Core does not require AI to be used.

---

## Reversibility and mobility

1. Pathway choice is **progressively committed** (preferences may harden into concentrations and later Major/Minor) but **reasonably reversible**.
2. A student must not become permanently trapped by an early preference.
3. Later pathway changes may require prerequisite bridging or transition work (`GAP-020`); mobility remains a design requirement.
4. Distinguish interest / preference / concentration / Major-Minor from **career decision** (see Definitions).
5. Reversibility must not be used to evade Formal Recognition Layer requirements; bridging may include recognition-related catch-up where the country profile requires it (ADR-0003).

---

## Major + Minor principle

**Decision (in principle):** Major + Minor is the preferred later-stage pathway architecture over single-track early specialisation.

**Why preferred:**

- depth without complete narrowing;  
- interdisciplinary capability;  
- pathway mobility;  
- recognition of mixed interests.

**Still open:**

- final starting age / stage boundary (`GAP-004`);  
- exact minimum/maximum pathway load;  
- detailed prerequisites;  
- country-specific terminology adaptations.

Major + Minor operates within the Six Worlds and under the Exploration Floor.

---

## Relationship to Six Worlds

- Discover requires structured exposure across all Six Worlds.
- Deepen / Produce may concentrate within one or more Worlds via Major + Minor and interdisciplinary missions.
- World competency maps APPROVED in ADR-0011 (`GAP-008` Closed).
- Worlds are learning/professional domains for exploration and concentration—not permanent career labels for children.

---

## Mission-authenticity progression

Acknowledging `GAP-018` without fully resolving it: mission authenticity should **generally increase** with developmental maturity.

Conceptual progression:

| Maturity (conceptual) | Typical authenticity |
|---|---|
| Earlier stages | Teacher-designed / authentic-context activities |
| Developing | Realistic simulations and observed community problems |
| Intermediate | Limited external stakeholder work (safeguarded) |
| Advanced | Genuine industry / government / university / community missions where appropriate, safe and lawful |

**Constraints:**

- Not every mission depends on an external stakeholder.
- Safeguarding, consent, confidentiality and law apply (FND-003; ADR-0002).
- Authenticity must not override Formal Recognition Layer obligations.

Detailed thresholds, approval gates and stage mappings remain open (`GAP-018`).

---

## Human oversight / safeguarding

- Mentors, educators and governors remain accountable for pathway advice, wellbeing and integrity of evidence.
- Family dialogue is included where age-appropriate; it does not alone determine pathway.
- Physical, emotional and ethical safety bind all mission authenticity levels.
- Productive failure remains bounded as in FND-003 / ADR-0002 (not negligence, unsafe conduct, dishonesty or persistent non-engagement).

---

## Rationale

- Converts the Constitution’s progression into an operational architecture without inventing ages or Malaysian mappings.
- Protects children from premature career labelling while enabling later depth.
- Keeps Major + Minor as preferred structure without locking timing.
- Aligns specialisation with Exploration Floor, reversibility and dual-layer recognition.
- Gives a principled answer direction for GAP-018 without over-claiming.

## Consequences

**Positive**

- Clear brief for later `docs/02-student-journey/` and `docs/03-worlds-and-pathways/`.
- Constrains country profiles to map stages rather than invent incompatible early-tracking models.
- Supports dual attainment (ADR-0003) across stages without abolishing exploration.

**Risks / costs**

- Without later age decisions (GAP-003/004), implementation planning remains incomplete.
- Exploration Floor without a later operational minimum risks being ignored in practice (`GAP-019`).
- Bridging for pathway changes needs design (`GAP-020`) to avoid paper mobility only.

**Follow-on work**

- Age/stage research ADR or study package (GAP-003).
- Major/Minor timing decision (GAP-004; may be ADR-0005).
- Six Worlds briefs (ADR-0011 UNDER REVIEW / GAP-008).
- Mission authenticity standards (GAP-018).
- Malaysia mapping only after Core stage ratification: stage → MY Year → recognition requirements.

## Alternatives Considered

1. **Early single-track specialisation** — Rejected: premature labelling; weak mobility; conflicts with Constitution.
2. **No named stages** — Rejected: insufficient architectural control for later design.
3. **Fixed Core age bands in this ADR** — Rejected: insufficient evidence; would contaminate Core with premature specificity; Malaysia mapping belongs later (ADR-0001).
4. **Major-only later pathway** — Rejected as preferred default: weaker interdisciplinary capability and mixed-interest recognition than Major + Minor.
5. **External-stakeholder missions from the start** — Rejected: safeguarding and authenticity maturity; conflicts with progressive authenticity principle.
6. **Algorithmic pathway assignment** — Rejected: conflicts with FND-003.

## Country-Specific Implications

| Topic | Core (this ADR) | Country / Malaysia profile |
|---|---|---|
| Stage meanings | Defined conceptually | Map to local ages/Years later |
| Major/Minor names | Preferred architecture | Terminology may adapt |
| Recognition subjects | Must remain feasible (ADR-0003) | Exact boards/Years researched with citations |
| National/civic content within Exploration Floor | Required as formation dimension | Content defined in country profile |
| Residential effects on stage rhythm | Out of scope | Country/project decision (ADR-0001) |

Do not invent Malaysian ages, Years or regulatory mappings in this ADR.

## Related Documents

- `docs/00-foundation/CONCEPT_CONSTITUTION.md` (APPROVED) §§4, 7, 8, 10
- ADR-0001, ADR-0002, ADR-0003 (APPROVED)
- Future: `docs/02-student-journey/`, `docs/03-worlds-and-pathways/`, `docs/06-missions-and-production/`
- `GAP_REGISTER.md`

## Open Questions

1. Exact age bands / grade boundaries for each stage (`GAP-003`).
2. When Major + Minor formally begins (`GAP-004`).
3. Operationalisation of Exploration Floor without premature fixed percentages (`GAP-019`).
4. Bridging standards when changing Major/Minor (`GAP-020`).
5. Mission authenticity gates by stage (`GAP-018`).
6. Six Worlds competency depth maps (ADR-0011 APPROVED / `GAP-008` Closed).
7. How Choose-stage preferences are recorded in the longitudinal capability record without becoming permanent labels.

## Explicit Non-Claims

This ADR does not:

- set Malaysian ages, school Years or regulatory pathways;  
- set timetable or Exploration Floor percentages;  
- define Competency Graph or Proof of Capability schemas;  
- claim every student must commercialise production;  
- claim Major + Minor is legally required in any country;  
- authorise AI or any single adult to determine a student’s pathway;  
- alter ADR-0001, ADR-0002, ADR-0003 or FND-003.
