# ADR-0011 — Six Worlds Capability and Progressive Depth Architecture

| Field | Value |
|---|---|
| Document ID | `ADR-0011` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Date | `2026-09-14` |
| Approved | `2026-09-17` |
| Deciders | Human architectural review (Integrated Developmental Architecture review) |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `FND-003` APPROVED; `ADR-0001` APPROVED; `ADR-0002` APPROVED; `ADR-0003` APPROVED; `ADR-0004`–`ADR-0006` APPROVED; `ADR-0016` APPROVED; mission context `ADR-0007` UNDER REVIEW; faculty context `ADR-0015` UNDER REVIEW (not treated as approved) |
| Related gaps / claims | GAP-008 (Closed by this ADR); GAP-009 Open; GAP-010 Closed by ADR-0016; GAP-016 Closed by ADR-0019; GAP-019 Closed by ADR-0006; GAP-020 Closed by ADR-0006; related GAP-018, GAP-032–037; PoC ops GAP-038–044; GAP-045 Closed by ADR-0017; GAP-046 Closed by ADR-0018; GAP-047 Open |
| Source documents | `FND-003` §7; ADR-0004–0006 APPROVED; ADR-0016 APPROVED; ADR-0007 / 0015 under-review context; Architecture Iteration brief for Six Worlds / GAP-008 (2026-09-14); Integrated Human Review (2026-09-17) |

---

## Title

Six Worlds Capability and Progressive Depth Architecture

## Status

`APPROVED`

## Revision history

| Version | Date | Notes |
|---|---|---|
| 0.1.0 | 2026-09-14 | Initial UNDER REVIEW draft; opens GAP-045–047 |
| 1.0.0 | 2026-09-17 | APPROVED after Integrated Developmental Architecture human review; closes GAP-008; companion approvals ADR-0004–0006 / 0017 / 0018; GAP-009 and GAP-047 remain Open |

## Context

The Concept Constitution (`FND-003`, APPROVED) names six broad professional/learning worlds and anticipates Major + Minor pathways at suitable ages, while leaving World definitions and competency maps open under `docs/03-worlds-and-pathways/`.

Without Core Six Worlds architecture:

- Worlds risk collapsing into six rigid career tracks, school houses or early vocational streams;
- Discover “exposure” may become career-day superficiality;
- Engineering/technology may quietly become the prestige World;
- creative, civic, enterprise and earth/health domains may be treated as soft extras;
- Missions and faculty may lack a shared vocabulary for capability depth;
- Proof of Capability claims (ADR-0016 APPROVED) may lack domain meaning;
- Competency Graph work (`GAP-009`) may invent taxonomy without educational semantics;
- country profiles may invent incompatible World systems.

**ID pre-flight:** `ADR_INDEX.md` already reserves **ADR-0011** for **Six Worlds depth / competency maps** (`GAP-008`). No conflicting body file exists. **No renumbering.** This body uses the reserved ID **ADR-0011**.

**Dependency note:** This ADR treats FND-003, ADR-0001–0006 and ADR-0016 as approved law. It uses ADR-0007 and ADR-0015 only as **under-review context**. Those ADRs remain `UNDER REVIEW` and are **not** treated as approved.

This ADR remains Core / country-neutral. It does **not** define detailed curriculum, map Malaysian Years or CBSE/IB subjects, invent Competency Graph schemas, set timetable percentages, create Major/Minor catalogues, occupation lists for children, employment guarantees or regulatory recognition claims.

## Decision

Tarbiyat Core adopts a **Six Worlds Capability and Progressive Depth Architecture** so that Worlds organise exploration, concentration, interdisciplinary Missions and advanced production — **without** becoming six permanent career labels or replacing academic disciplines.

1. The **Six Worlds** are developmental learning/professional **domains**: lenses for exploration and concentration; sources of Missions; organising structures for later Major + Minor; contexts for capability development.
2. Worlds are **not** permanent career labels, school houses, six compulsory vocational streams, legal professions or replacements for academic subjects.
3. Worlds organise **capability and mission context**; subjects may support Worlds but Worlds are **not** conventional subject lists in disguise.
4. Core retains the six Constitution names unless a later ADR formally renames them (see World Names).
5. Each World has a **capability frame**: purpose; ways of thinking; ways of doing; foundational capabilities; advanced directions; ethical/public considerations; interdisciplinary links — architecture, not exhaustive curriculum.
6. Core adopts a shared **Capability Depth Ladder** independent of whole-student developmental stage: **Encounter → Inquire → Apply → Integrate → Advance → Contribute**.
7. **Developmental stage ≠ capability level.** Stage labels must not be used as automatic competency levels.
8. **Explore** uses Worlds mainly as adult curriculum-design tools; no Major/Minor; no permanent World identity for young learners.
9. **Discover** requires **meaningful exposure across all Six Worlds** — more than assemblies, career talks or worksheets.
10. **Choose** supports **provisional concentration** without lock-in.
11. **Deepen** enables **Major + Minor**, which may sit within or across Worlds; Major/Minor need not equal an entire World.
12. **Produce** enables advanced authentic contribution across Worlds and Cross-World work.
13. Core distinguishes **Cross-World Capabilities** from **World-Specific Capabilities**.
14. Pathway change remains possible: portable capabilities transfer; World-specific gaps may require bridging (ADR-0006 principles — under review).
15. **Cross-World Missions** intentionally integrate multiple Worlds; not every Mission must span all six.
16. Six Worlds help organise Practitioner expertise without creating six isolated faculty silos (ADR-0015 context — under review).
17. **World Capability Architecture** provides meaning for claims; **individual Proof of Capability** records evidence (ADR-0016 context — under review). They must not be collapsed.
18. This ADR prepares semantic content for a future Competency Graph (`GAP-009`) but does **not** design graph technology, node IDs, schemas or algorithms.
19. No prestige hierarchy among Worlds. No early “Engineering child / Creative child” labelling.
20. Emerging technologies normally fit inside or across existing Worlds; a seventh World is not created merely because a technology appears.
21. Country profiles may adapt terminology, priority subdomains and examples — but must not silently remove whole Worlds without a formal architectural decision.
22. Designers use **significance thresholds**: classify significant Missions/programmes by World; do not tag every five-minute classroom activity.

**Resolution of GAP-008:** this ADR supplies Core World meanings, capability frames, shared depth architecture, stage relationships, Major/Minor World relationship, Cross-World Mission model and reference matrix. Detailed curricula, within-World pathway catalogues and Graph schemas remain follow-on. Discover exposure and Discover→Choose preparation are resolved by companion APPROVED ADR-0017 / ADR-0018. GAP-009 and GAP-047 remain open.

---

## What a World Is

A **World** is a Core architectural domain that:

- frames kinds of human problems, knowledge and creation;
- provides lenses for exploration and later concentration;
- generates Mission contexts and Practitioner networks;
- organises capability development at increasing depth;
- supports Major + Minor combinations without forcing rigid career tracking.

The Six Worlds (Constitution names retained):

1. **Engineering & Intelligent Systems**
2. **Health & Life Sciences**
3. **Enterprise & Economics**
4. **Earth, Energy & Built Environment**
5. **Creative, Media & Human Communication**
6. **Society, Leadership & Public Systems**

---

## What a World Is Not

| Not this | Why |
|---|---|
| Permanent career label | Identity must remain broader than pathway; early labelling forbidden |
| School house / tribe | Worlds are learning domains, not social sorting systems |
| Six compulsory vocational streams | Discover is breadth; streaming is rejected |
| Legal profession / licensed practice | School learning ≠ unlicensed professional practice |
| Replacement for academic subjects | Formal Recognition (ADR-0003) remains binding |
| Prestige ranking | No World is automatically superior |
| Exhaustive subject list | Worlds organise capability/mission context, not timetable subjects |

Preferred identity language (by stage appropriateness):

> “currently concentrating in…” / “Major / Minor…”

Not:

> “Engineering child” / “Health child” / “Creative child”

---

## Relationship to Academic Disciplines

**Worlds ≠ subjects.**

Example: Engineering & Intelligent Systems is **not** merely Physics + Coding + Robotics. It centres capabilities such as systems thinking, designing, modelling, building, testing, computational reasoning, optimisation and responsible technology use.

Language, mathematics, sciences, humanities and other formal academic disciplines required for recognition:

- may operate **across Worlds**;
- may run through Knowledge Studios;
- may appear inside Missions;
- may operate independently where needed.

**ADR-0003 Formal Recognition remains binding.** Six Worlds do not replace recognised academic foundations.

---

## Shared Depth Architecture

### Capability Depth Ladder (Core)

Developmental stages already use **Explore → Discover → Choose → Deepen → Produce**. Reusing “Explore” and “Produce” as capability levels would create ambiguity. Core therefore adopts a distinct ladder:

| Depth | Meaning |
|---|---|
| **Encounter** | Learner experiences and recognises the domain |
| **Inquire** | Learner performs guided inquiry, making or investigation |
| **Apply** | Learner applies knowledge/capability to bounded problems |
| **Integrate** | Learner combines capabilities and handles increasing complexity |
| **Advance** | Learner works with substantial independence toward authentic standards |
| **Contribute** | Learner generates defensible advanced output or contribution |

This ladder is **architecture**, not a grading scale, percentage system or age-locked proficiency table.

### Alignment without collapse

| Architecture | Role |
|---|---|
| Developmental stages (ADR-0004–0006 context) | Whole-learner progression and pathway timing |
| Capability Depth Ladder (this ADR) | Domain/capability depth within or across Worlds |
| Mission authenticity (ADR-0007 context) | Realism/partner context of work |
| Proof of Capability (ADR-0016 context) | Individual evidence of demonstrated capability |

These must **not** be collapsed into a single scale.

### Development stage ≠ capability level

A learner may be Choose-stage overall yet unusually advanced in Creative production; or Deepen-stage overall yet still developing an Engineering prerequisite. Stage labels are **not** automatic competency levels. Capability depth may advance without forcing whole-person stage advancement.

### Typical stage × depth relationship (illustrative, not lock-step)

| Development stage | Typical depth experience |
|---|---|
| Explore | Encounter (and light Inquire) |
| Discover | Inquire across Worlds; early Apply samples |
| Choose | Apply with emerging Integrate; provisional concentration |
| Deepen | Integrate → Advance in Major/Minor contexts |
| Produce | Advance → Contribute; often Cross-World |

Individuals may deviate; bridging and readiness remain human-governed (ADR-0006 context — under review).

---

## Six Worlds Reference Matrix

Concise design reference (illustrative, not curriculum):

| World | Core question | Ways of thinking | Ways of doing | Illustrative outputs |
|---|---|---|---|---|
| Engineering & Intelligent Systems | How do we design, build and govern working systems safely? | Systems, model-based, computational, diagnostic | Design, prototype, test, iterate, optimise | Prototypes, control systems, software, assistive devices |
| Health & Life Sciences | How do living systems and health conditions work, and how can wellbeing improve lawfully? | Biological, epidemiological, evidence-based, care-ethical | Investigate, measure, analyse, communicate, design non-clinical interventions | Studies, health communication, simulations, public-health analyses |
| Enterprise & Economics | How is value created, exchanged and organised responsibly? | Economic, organisational, opportunity, resource | Research needs, model value, organise, negotiate, operate | Venture models, operations plans, market analyses, social enterprises |
| Earth, Energy & Built Environment | How do we inhabit, power and shape places sustainably? | Ecological, spatial, material, resilience | Observe environments, design places/systems, assess impact | Energy/water studies, designs, resilience plans, land-use analyses |
| Creative, Media & Human Communication | How do we interpret experience and move others with meaning? | Interpretive, aesthetic, rhetorical, audience-aware | Observe, create, critique, revise, publish/perform | Films, writing, design, journalism, performances, campaigns |
| Society, Leadership & Public Systems | How do institutions and communities govern shared life justly? | Civic, institutional, ethical, perspective-taking | Analyse, deliberate, propose, negotiate, evaluate | Policy briefs, civic analyses, public-service interventions |

---

## World 1 — Engineering & Intelligent Systems

### Purpose

Addresses human problems of designing, building, operating and governing socio-technical systems — from devices and software to automation, intelligent systems and human–machine interaction.

### Core ways of thinking

Systems thinking; model-based reasoning; computational reasoning; constraints and trade-offs; diagnostic/debugging mindset; optimisation under limits; safety and failure-mode awareness.

### Core ways of doing

Understand systems → model → design → build → test → diagnose → iterate → optimise → govern responsibly.

### Foundational capabilities (illustrative)

Engineering design habits; measurement and modelling; basic computing/software reasoning; physical/digital making; testing and evidence from trials; documentation; responsible tool use.

### Advanced capability directions (Deepen/Produce)

Control systems; robotics/automation; AI-assisted systems under disclosure/ethics; electronics and fabrication at authentic standards; cybersecurity where educationally appropriate; human–machine interaction; system optimisation and governance.

### Ethical / public considerations

Safety; privacy; reliability; environmental and social impact of technology; dual-use awareness; honesty about limits of automation and AI.

### Interdisciplinary links

Enterprise (productisation/ops); Earth (sensing, energy systems, infrastructure); Health (assistive/med-tech design — non-clinical); Creative (interaction/UX/media tech); Society (technology policy, public systems).

### Boundary

Not a gadget catalogue. Technology topics serve underlying capability patterns.

---

## World 2 — Health & Life Sciences

### Purpose

Addresses living systems, human and environmental health, and the knowledge practices that improve wellbeing — through investigation, evidence, design and communication.

### Core ways of thinking

Biological systems reasoning; evidence evaluation; uncertainty and risk; population vs individual framing; prevention and systems of health; dignity-centred ethics.

### Core ways of doing

Observe → hypothesise → investigate → measure/analyse → interpret → communicate → propose lawful interventions (often non-clinical).

### Foundational capabilities (illustrative)

Life-science literacy; experimental/observational habits; health data reading; nutrition/environment–health links at exploratory level; health communication; research hygiene.

### Advanced capability directions

Biotechnology concepts; neuroscience literacy; public-health analysis; environmental health; simulation and research Missions; health-system improvement design; rigorous science communication.

### Ethical / public considerations

Human dignity; consent; confidentiality; evidence honesty; avoiding harm; clear limits of school-based work.

### Interdisciplinary links

Creative (health communication); Society (health policy/systems); Engineering (devices/data tools); Earth (environmental health); Enterprise (health services/organisation — non-exploitative).

### Hard boundary

**School students are not unlicensed clinicians.** Advanced Missions may involve research, simulation, public-health analysis, non-clinical investigation, design, data and communication. **Actual clinical practice remains regulated** by country law.

---

## World 3 — Enterprise & Economics

### Purpose

Addresses how people create and exchange value, organise productive activity, allocate resources and build responsible enterprises — commercial, social and public-facing.

### Core ways of thinking

Needs and incentives; markets and institutions; value creation vs extraction; scarcity and trade-offs; organisational reasoning; ethical commerce.

### Core ways of doing

Understand needs → analyse systems → design offerings/organisations → model resources → negotiate → operate → evaluate impact.

### Foundational capabilities (illustrative)

Economic literacy; needs research; basic financial reasoning; operations awareness; collaboration and negotiation; responsible commerce habits; productivity and resource allocation.

### Advanced capability directions

Entrepreneurship and social enterprise; finance and investment literacy; supply chains; organisational design; trade and productivity analysis; Micro-Venture pathways where educationally governed (ADR-0014 context — under review).

### Ethical / public considerations

Fairness; labour and environmental impact; truthful claims; conflicts of interest; responsible finance; refusal of exploitation of students or communities.

### Interdisciplinary links

Engineering (build → venture); Creative (branding/story as serious craft); Society (regulation, public value); Earth (resource economics, green enterprise); Health (service models).

### Boundary

**Not “startups only.”** Includes creating enterprise **and** understanding economic systems.

---

## World 4 — Earth, Energy & Built Environment

### Purpose

Addresses environmental systems, energy, materials, land use, infrastructure and the making/adaptation of built places — with resilience and sustainability as standing concerns.

### Core ways of thinking

Ecological systems; spatial and material reasoning; climate and resource constraints; resilience and risk; life-cycle thinking; place-based analysis.

### Core ways of doing

Observe environments → measure/model → design interventions/places → assess impacts → iterate with community/public constraints.

### Foundational capabilities (illustrative)

Environmental literacy; geography/place sense; water/energy/materials awareness; basic design-for-place; impact observation; stewardship habits.

### Advanced capability directions

Climate and ecology analysis; agriculture/food systems where appropriate; water and energy systems; architecture and construction literacy; transport and urban systems; infrastructure and resilience planning.

### Ethical / public considerations

Sustainability; public consequences of land/energy/water decisions; justice across communities; long-term stewardship.

### Interdisciplinary links

Engineering (sensors, energy tech, construction systems); Society (planning/governance); Enterprise (implementation economics); Health (environmental health); Creative (public communication of place/impact).

### Boundary

Capable of addressing real local/national issues (water, pollution, energy, cities, transport, land use, resilience) **without** embedding country-specific policy priorities into Core.

---

## World 5 — Creative, Media & Human Communication

### Purpose

Addresses interpretation, imagination, craft and communication — how humans make meaning, persuade, document, design and engage audiences with intellectual seriousness.

### Core ways of thinking

Observation and interpretation; aesthetic and rhetorical judgment; audience awareness; narrative structure; cultural context; critique as learning.

### Core ways of doing

Observe → interpret → imagine → create → communicate → critique → revise → engage an audience.

### Foundational capabilities (illustrative)

Writing and languages/communication; visual storytelling; design basics; performance/media literacy; listening and dialogue; constructive critique.

### Advanced capability directions

Film/photography/music/performance at authentic standards; journalism and documentary practice; graphic/industrial design; communication technology; cultural expression with rigorous craft; audience-tested campaigns.

### Ethical / public considerations

Truthfulness; representation and dignity; attribution and Creator Rights (ADR-0014 context); consent; media harm; refusal to treat creativity as decoration.

### Interdisciplinary links

Enterprise (creative economy, product narrative); Health (health communication); Society (civic media, public rhetoric); Engineering (creative tech, interactive systems); Earth (place storytelling, advocacy with evidence).

### Boundary

Creativity is **not** extracurricular ornament. Advanced creative contribution can meet Proof of Capability standards as rigorously as engineering prototypes (ADR-0016 context).

---

## World 6 — Society, Leadership & Public Systems

### Purpose

Addresses how societies organise shared life — institutions, governance, public policy, civic systems, leadership and community development — through evidence and ethical judgment.

### Core ways of thinking

Institutional analysis; evidence-based civic reasoning; perspective-taking; power and rights awareness; ethical judgment; pluralistic deliberation.

### Core ways of doing

Investigate → analyse institutions/problems → deliberate → design proposals → negotiate → communicate publicly → evaluate consequences.

### Foundational capabilities (illustrative)

Civic literacy; applied historical/social context; collaboration and facilitation; public communication; basic policy reading; ethical reflection.

### Advanced capability directions

Public policy design; law/civic systems literacy (educational, not legal practice); diplomacy/international relations literacy; public administration analysis; social research; community development interventions; leadership under accountability.

### Ethical / public considerations

Power; rights; evidence honesty; pluralism; refusal of political indoctrination; responsible use of student voice in public settings.

### Interdisciplinary links

Earth (environmental governance); Health (health systems/policy); Enterprise (public–private value); Creative (public communication); Engineering (digital public systems).

### Boundary

Avoids indoctrination. Develops civic capability, not party allegiance.

---

## Cross-World Capabilities

**Cross-World Capabilities** are competencies that recur across domains and may later become shared nodes in the Competency Graph (`GAP-009`).

Illustrative set (non-exhaustive; not duplicated blindly inside every World frame):

- communication;
- quantitative reasoning;
- research and inquiry;
- systems thinking;
- ethics and responsibility;
- collaboration;
- digital fluency;
- evidence evaluation;
- creativity and imagination;
- project management / execution;
- reflection and metacognition.

These transfer across pathway change more readily than specialised techniques (supports ADR-0006 mobility context).

---

## World-Specific Capabilities

**World-Specific Capabilities** are specialised competencies whose primary home is one World (they may still appear in Cross-World Missions).

Illustrative distinctions:

| Capability | Likely class |
|---|---|
| Communication | Cross-World |
| Control-system design | Engineering-specific |
| Epidemiological reasoning | Health-specific |
| Financial modelling | Enterprise-specific |
| Urban systems analysis | Earth/Built Environment-specific |
| Documentary craft | Creative-specific |
| Policy design | Society-specific |

This distinction prepares `GAP-009` and must not invent node schemas here.

---

## Explore / Discover / Choose / Deepen / Produce Relationship

### Explore

- Broad human experiences: observing, making, storytelling, experimenting, building, discussing, measuring, caring, imagining, cooperating.
- World labels are primarily an **adult curriculum-design tool**, not a child’s identity.
- No Major/Minor; no permanent pathway label.
- Typical depth: Encounter → light Inquire.

### Discover

- **Meaningful exposure across all Six Worlds** is required.
- Meaningful means experience-based discovery: rotations, comparative Missions, short Labs, practitioner exposure, guided reflection — **not** one assembly, one career talk or one worksheet.
- Goal: informed preference formation through doing, not premature streaming.
- Typical depth: Inquire; early Apply samples.
- Operational package: ADR-0017 (`APPROVED`; `GAP-045` Closed).

### Choose

- Introduces **Provisional Concentration**: more depth in selected Worlds without formal lock-in.
- Supports emerging preference, continued cross-World exploration and provisional combinations.
- Must not become permanent streaming.
- Typical depth: Apply → emerging Integrate.

### Deepen

- Formal **Major + Minor** (ADR-0004/0005 APPROVED).
- Sustained technical/conceptual depth; authentic standards rise.
- Typical depth: Integrate → Advance.

### Produce

- Advanced capability demonstration and contribution.
- Outputs may be commercial, public, research, civic, creative or interdisciplinary — production need **not** be commercial.
- Typical depth: Advance → Contribute.

---

## Major + Minor

### Conceptual relationship to Worlds

- Major and Minor are pathway structures that **draw on** Worlds.
- They **need not equal** an entire World.
- Later implementation may create pathways **within or across** Worlds (`GAP-046`).
- No approved programme catalogue in this ADR.

### Illustrative combinations (examples only)

| Major (illustrative) | Minor (illustrative) |
|---|---|
| Engineering & Intelligent Systems | Enterprise & Economics |
| Health & Life Sciences | Creative, Media & Human Communication |
| Earth, Energy & Built Environment | Society, Leadership & Public Systems |
| Creative, Media & Human Communication | Enterprise & Economics |
| Society, Leadership & Public Systems | Engineering & Intelligent Systems (data/public systems) |
| Health & Life Sciences | Enterprise & Economics |

Synergy is encouraged where educationally coherent; predefined forced pairs are rejected.

### World balance

Engineering is not automatically “more real” than Creative or Society. All six represent different kinds of human capability with equal architectural dignity.

---

## Cross-World Missions

A **Cross-World Mission** is a Mission that intentionally integrates capabilities from **more than one** World.

Rules:

- Powerful default for many authentic problems.
- Does **not** require all six Worlds in every Mission.
- Primary World(s) should be identifiable at design time using significance thresholds.
- Contribution and capability claims remain attributable to individuals (ADR-0014/0016 context).

### Illustrative pattern (not country policy)

Urban air pollution might involve:

- Engineering — sensing/prototyping;
- Health — health-impact analysis;
- Earth — environmental systems;
- Enterprise — implementation economics;
- Creative — public communication;
- Society — policy/governance.

A given Mission may use a subset of these.

---

## Strategic Capability Missions

ADR-0007 (under review) establishes Strategic Capability Missions. Six Worlds provide a method for assembling interdisciplinary teams around community/national problems.

Core:

- remains capable of supporting future country-level mission portfolios;
- does **not** define Malaysia/India priority lists;
- keeps Education-First constraints.

Country profiles may later map strategic portfolios onto Worlds without rewriting Core World architecture.

---

## Pathway Mobility

Consistent with ADR-0006 (under review):

- Six Worlds must allow pathway change (e.g. Engineering concentration → Earth/Energy).
- **Portable / Cross-World capabilities** transfer where educationally valid.
- **World-specific prerequisites** may require bridging.
- Full bridging curricula are **out of scope** here (`GAP-020` remains the mobility ops gap; this ADR supplies World semantics).

---

## Faculty Relationship

ADR-0015 (under review) establishes Practitioner–Educator–Mentor functions.

Worlds help organise expertise via:

- World-aware Practitioner networks;
- visiting specialists;
- Cross-World Mission teams.

Core **rejects** six isolated faculty departments as the required organising form. Coverage across all Worlds is mandatory; silos are not.

---

## Proof of Capability Relationship

| Architecture | Answers |
|---|---|
| **World Capability Architecture** (this ADR) | What domains/capabilities mean; what depth looks like conceptually |
| **Individual Proof of Capability** (ADR-0016 APPROVED) | What *this learner* has demonstrated with evidence |

This ADR does **not** create individual scores, profiles or claim templates. Creative/civic/enterprise/earth/health evidence must be eligible for rigorous PoC treatment equal to engineering evidence.

---

## Future Competency Graph Boundary

This ADR prepares **semantic content** for a later Graph:

- capabilities;
- prerequisites (conceptual);
- progression (Depth Ladder);
- cross-world links;
- evidence relationships (conceptual only).

This ADR does **not** design:

- node schema;
- database;
- IDs;
- algorithms;
- graph technology.

Those belong to **GAP-009**. GAP-009 remains **open**. Closing GAP-008 does not close GAP-009.

---

## Ethics

Each World carries ethical responsibilities. Ethics appear as demonstrated judgment and conduct — **not** moral-scoring systems or belief inventories.

| World | Illustrative ethical focus |
|---|---|
| Engineering | Safety, privacy, technology impact |
| Health | Dignity, evidence, confidentiality |
| Enterprise | Fairness, responsible finance, labour/environment impact |
| Earth | Sustainability, public consequences |
| Creative | Truth, representation, attribution |
| Society | Power, rights, evidence, pluralism |

---

## Country Adaptation

Core defines Worlds.

Country / project profiles may adapt:

- terminology;
- priority subdomains;
- examples;
- national content;
- industry emphasis;
- cultural grounding.

Country profiles must **not** silently remove whole Worlds without a formal architectural decision (ADR process).

Agriculture (illustrative): may be expressed across Earth, Enterprise, Engineering, Health and Society without inventing a seventh Core World.

---

## World Names

Core **retains** the six Constitution names.

Optional human-review notes (not renames):

- Names are long but distinctive; casual shortening in ops docs is acceptable if meaning is preserved.
- No substantial conceptual confusion found that forces a rename in this draft.
- Any rename requires a later ADR and Constitution alignment — not silent wording drift.

---

## Future-Proofing

- Do **not** create a seventh World merely because a technology appears (AI, quantum, biotech, space, etc.).
- Fit emerging domains inside existing Worlds or treat them as interdisciplinary.
- Architecture should remain durable across technological fashion cycles.

---

## Practicality Test

Future curriculum designers should be able to answer, for significant work:

1. Which World(s) does this Mission primarily engage?
2. What depth is appropriate?
3. What capabilities are being developed?
4. What prerequisites matter?
5. What Cross-World capabilities are involved?

They should **not** need to classify every brief classroom activity. Use **significance thresholds** (`GAP-047`).

### Ministry-facing value (non-marketing)

Architecture preserves a clear bridge narrative:

> The Six Worlds organise learning around the kinds of systems, professions and public challenges young people will encounter in real life while preserving recognised academic foundations.

This supports ministry understanding of school → university → economy → public challenges **without** claiming guaranteed employment outcomes.

---

## Scenario Tests

| ID | Scenario | Architectural result |
|---|---|---|
| A | 8-year-old loves robots | Explore allows making/robotics encounters; no permanent Engineering label |
| B | 12-year-old rotates all Six Worlds | Discover requires substantive exposure, not career-day superficiality |
| C | 14-year-old prefers Creative + Enterprise | Valued equally with Engineering; provisional concentration allowed |
| D | 15-year-old Engineering → Earth/Energy | Portable capabilities transfer; World-specific gaps bridged |
| E | 17-year-old Health Major + Creative Minor public-health campaign | Cross-World contribution recognised; PoC can evidence both domains |
| F | City pollution Mission spans four Worlds | Cross-World Mission supported without six separate classes |
| G | AI becomes dramatically more important | Fits Engineering + Cross-World practice; no automatic seventh AI World |
| H | Technical capability exceeds typical stage | Capability depth may Advance/Contribute without forcing whole-stage jump |
| I | Exceptional filmmaker | Creative Advance/Contribute treated rigorously under PoC — not “talent show” |
| J | Country emphasises agriculture | Expressed across Earth/Enterprise/Engineering/Health/Society without redesigning Core Worlds |

---

## Rationale

- Gives educational meaning to Constitution-named Worlds without vocational streaming.
- Separates Worlds from subjects while preserving Formal Recognition.
- Provides a depth model that does not collide with stage names or become an age-locked grade scale.
- Protects Six Worlds parity and interdisciplinary authenticity.
- Supplies semantic fuel for Missions, faculty coverage, PoC claims and a future Graph — without over-specifying curriculum or software.

## Consequences

### Positive

- Clear architecture for exploration → concentration → production across all Worlds.
- Stronger defence against STEM prestige capture and creative/civic downgrading.
- Shared language for Cross-World Missions and Strategic Capability portfolios.
- Cleaner boundary between World maps, individual PoC and Competency Graph.
- Practical designer questions without micro-classification burden.

### Risks / costs

- “Meaningful Discover exposure” needs operational criteria (`GAP-045`) or it drifts back to tokenism — proposed package now drafted in ADR-0017 (`UNDER REVIEW`; not closed).
- Within-World pathways may proliferate into hidden streaming (`GAP-046`).
- Without Graph work (`GAP-009`), claim wording may remain inconsistent.
- Dependency on still under-review ADR-0004–0007 / 0015 / 0016 coherence.
- Significance thresholds may be ignored, recreating bureaucratic tagging (`GAP-047`).

### Follow-on work

- Human review of this ADR; close GAP-008 only if APPROVED.
- Discover exposure package — ADR-0017 (`UNDER REVIEW`; proposed resolution of `GAP-045` — not closed).
- Discover→Choose pathway preparation — ADR-0018 (`UNDER REVIEW`; proposed resolution of `GAP-046` — not closed).
- Mission World-tagging significance thresholds (`GAP-047`).
- Competency Graph specification (`GAP-009`) using this semantics.
- PoC claim libraries aligned to Worlds after ADR-0016 direction.
- Populate `docs/03-worlds-and-pathways/` after review direction is clear.

## Alternatives Considered

1. **Conventional subjects only** — Rejected: loses mission/capability organising power of Worlds; contradicts Constitution direction.
2. **Career streams beginning early** — Rejected: Constitution and ADR-0004 forbid premature permanent labelling.
3. **Technology/STEM-centric Worlds** — Rejected: prestige hierarchy; fails Six Worlds parity.
4. **Six isolated faculty silos** — Rejected: blocks Cross-World Missions; conflicts with team faculty model.
5. **Unlimited number of Worlds** — Rejected: unstable architecture; fashion-driven fragmentation.
6. **Six Worlds + Cross-World capabilities + later Major/Minor** — **Selected**.
7. **Rigid proficiency levels tied to age** — Rejected: confuses stage with capability; harms mobility and gifted/late cases.
8. **Capability depth independent from whole-student stage** — **Selected** as companion to (6); depth ladder remains distinct from developmental stages.

## Country-Specific Implications

Country / project profiles may later:

- emphasise subdomains (e.g. agriculture, water, creative economy, digital public services);
- localise examples and partner ecosystems;
- map Worlds to national skills/education language **without** deleting Worlds;
- define Strategic Capability Mission portfolios using World combinations.

**Core must not embed Indian or Malaysian priority policy into World definitions.**

## Open Questions

1. Exact operational criteria for Discover “meaningful exposure” across all six Worlds — proposed in ADR-0017 (`UNDER REVIEW`; `GAP-045` — not closed).
2. How finely within-World pathways should be named before Deepen without recreating streaming — pathway preparation proposed in ADR-0018 (`UNDER REVIEW`; `GAP-046` — not closed); fine catalogues remain deferred.
3. Whether Produce is always a distinct stage or sometimes a late-Deepen overlay (inherited open question from ADR-0005 / EV-0001).
4. Minimum Cross-World Capability set to seed `GAP-009`.
5. How Exploration Floor breadth dimensions (ADR-0006) express World exposure without fixed Core percentages (`GAP-016`/`GAP-019`).
6. Whether any World name should be shortened in Constitution text after human review (optional only).

## Explicit Non-Claims

This ADR does **not**:

- close GAP-009 or design the Competency Graph;
- define detailed curriculum or lesson plans;
- map Malaysian Years or CBSE/IB subject grids;
- set timetable percentages;
- create a complete Major/Minor catalogue;
- create occupation lists for children;
- claim regulatory recognition or employment outcomes;
- invent individual student scores;
- treat ADR-0007 or ADR-0015 as approved;
- establish a prestige hierarchy among Worlds.

## Related documents

- `FND-003` Concept Constitution §7
- ADR-0002, ADR-0003, ADR-0004–0006, ADR-0016 (APPROVED)
- ADR-0007, ADR-0014–0015 (`UNDER REVIEW` — context only)
- `GAP_REGISTER.md` — GAP-008 Closed; GAP-009 open; GAP-045 Closed via ADR-0017; GAP-046 Closed via ADR-0018; GAP-047 open
- `docs/03-worlds-and-pathways/SECTION_README.md`
- ADR-0017 (`APPROVED` — Discover Meaningful Exposure Package; GAP-045 Closed)
- ADR-0018 (`APPROVED` — Discover→Choose pathway preparation; GAP-046 Closed)
