# Concept Constitution

| Field | Value |
|---|---|
| Document ID | `FND-003` |
| Version | `1.0.0` |
| Status | `APPROVED` |
| Last reviewed | `2026-09-13` |
| Approved | `2026-09-13` |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead |
| Dependencies | `PROJECT_RULES.md`; `ADR-0001`; `ADR-0002`; `ADR-0003`; `FND-005`; `FND-006` |
| Source documents | Architecture brief (2026-09-13); founding principles in `PROJECT_RULES.md`; historical references under `references/` (source only); human architectural ratification (2026-09-13) |

> **Document status:** `APPROVED` Core constitution (v1.0.0). Material change requires an ADR and human approval.

---

## 1. Purpose of the Constitution

This Concept Constitution states the founding educational architecture of Tarbiyat: the principles that define the model, the boundaries that protect it from silent alteration, and the distinctions that keep country implementation from contaminating universal Core design.

It exists so that subsequent curriculum, campus, assessment, industry and Malaysia-profile work can proceed from a shared baseline. Where this document conflicts with earlier ideation in historical proposals, this Constitution and its companion Architecture Decision Records prevail for current design direction. Historical directions that must not be restored are recorded in `docs/12-evidence/SUPERSEDED_CONCEPTS.md`.

---

## 2. Definition of Tarbiyat

Tarbiyat is a **Lab-First, Mission-Based educational architecture** in which students learn substantially through investigation, design, production, experimentation and real missions, while remaining compatible with the applicable statutory or recognised curriculum, assessment and credentialing requirements of the country of implementation.

Tarbiyat is intended as a **distinct organising architecture for schooling**, not merely an upgrade of conventional classroom schooling by the addition of better equipment. The student’s educational experience is progressively organised around missions, laboratories, studios, workshops, field and community environments, and demonstrated capability. Applicable statutory or recognised curriculum, assessment and credentialing requirements remain in place as the Formal Recognition Layer where required. Tarbiyat does not abolish applicable statutory or recognised examinations where they are required.

The word *Tarbiyat* here denotes character-informed formation alongside capability: ethics, responsibility, physical development and civic formation are treated as integral to the model. Tarbiyat develops ethical responsibility, cultural grounding, civic responsibility and respect for the national context of the country in which it operates. The content and expression of national identity are determined in the Country Implementation Profile.

---

## 3. What Tarbiyat Is Not

Tarbiyat is **not**:

1. A conventional subject-and-period school with laboratories used mainly for confirmation practicals.
2. A lab-only model that abolishes books, theory, languages, mathematics practice, seminars or examination preparation.
3. An examination-abolition project. Historic phrases such as “NO exams” or “abolish exams” in early source drafts are **superseded** (see `SUPERSEDED_CONCEPTS.md`).
4. A system that permanently labels young children as future doctors, engineers, entrepreneurs or similar.
5. A universal boarding or residential mandate. Residential, day-school or hybrid formats are country/project implementation choices.
6. A universal requirement for sovereign or on-premise data centres. Safe, lawful, privacy-conscious information governance is required; country-specific data-sovereignty architecture belongs in the country/project implementation profile.
7. A Malaysia-hard-coded model. Malaysia is the first current implementation focus; Malaysian statutes, boards, languages, identity content and industry priorities belong under `docs/10-malaysia/`.
8. A claim of proven uniqueness, government endorsement or completed regulatory approval. Such claims require evidence and remain outside this Constitution.

---

## 4. Foundational Educational Principles

The following principles define approved Core direction:

1. **Lab-First, not lab-only** — laboratories and related production environments are primary organising spaces; direct instruction remains wherever pedagogically appropriate. Intensity is progressive and age-appropriate; Core does not prescribe one fixed mission/laboratory percentage for every age or stage.
2. **Mission-Based learning** — sustained missions with real or realistically scoped problems organise substantial learning effort.
3. **Production over demonstration** — practical work should generally produce inspectable, discussable or demonstrable outcomes of serious student work, not only confirm a known result.
4. **Disciplines as knowledge tools** — curriculum disciplines increasingly serve mission accomplishment, while systematic subject learning is preserved where required for coherence and recognition.
5. **Exploration before strong specialisation** — broad exposure precedes Major/Minor pathway commitment.
6. **Longitudinal pathway discovery** — preference, engagement, persistence, aptitude, mentor observation, portfolio evidence and parent/student dialogue inform pathway choices. No automated or algorithmic system may independently assign, restrict or permanently determine a student's educational pathway; such systems may provide evidence or recommendations only.
7. **Productive experimental failure** — responsible experimentation from which evidence, reflection and improvement arise is legitimate learning. Negligence, unsafe conduct, academic dishonesty or persistent non-engagement are not productive failure.
8. **Dual recognition of attainment** — formally recognised academic evidence and Tarbiyat capability records are complementary; the capability layer does not replace applicable statutory or recognised requirements.
9. **Real-world connection** — government, community and industry missions, Industry-in-Residence and supervised enterprise pathways are Core-enabled features, executed under law and safeguarding.
10. **Ethics, safety and human oversight** — capability without responsibility is incomplete; accountable human judgment and student participation remain mandatory for pathway decisions.

---

## 5. Formal Recognition vs Tarbiyat Learning Engine

Tarbiyat operates through a **dual-layer principle**:

### A. Formal Recognition Layer

The applicable statutory or recognised curriculum, assessment and credentialing requirements remain in place where required by the country of implementation. This layer protects academic portability, compliance and student life-chances that depend on recognised credentials.

**Tarbiyat does not abolish applicable statutory or recognised examinations where they are required.**

Country authorities, boards and exact examination or credentialing frameworks are **not** defined here. They are specified in the Country Implementation Profile after lawful research and citation. When an implementation feature is represented as legally or regulatorily required, that claim must be supported by authoritative evidence in the Country Implementation Profile.

### B. Tarbiyat Learning Engine

The student’s lived educational experience is progressively organised around missions, laboratories, studios, workshops, investigation, design, production, real-world problems and demonstrated capability.

### Relationship between the layers

| Layer | Primary function | Does not |
|---|---|---|
| Formal Recognition Layer | Applicable statutory/recognised curriculum, assessment and credentialing | Replace Tarbiyat pedagogy as the organising experience |
| Tarbiyat Learning Engine | Capability formation through mission and production | Replace or abolish applicable statutory or recognised examination requirements |

Neither layer may be falsely presented as eliminating the other. See **ADR-0003**.

---

## 6. Lab-First / Mission-Based Principle

### Lab-First

“Lab” in Tarbiyat is broader than an expensive scientific laboratory. It includes any supervised environment designed for investigation and production, including (non-exhaustively):

- mission studio  
- fabrication workshop  
- health / life-science environment  
- enterprise studio  
- media studio  
- field environment  
- design studio  
- simulation environment  
- research space  
- community project environment  

Classrooms, where retained, function primarily as **Knowledge Studios / seminar / briefing** spaces for theory, critique, language work, mathematics practice and examination preparation—not as the exclusive centre of school life.

Direct instruction, books, reading, theory, languages, mathematics practice, seminars and examination preparation remain wherever they are pedagogically appropriate. Tarbiyat is **Lab-First, not Lab-Only**. See **ADR-0002**.

**The intensity of Lab-First and Mission-Based learning is progressive and age-appropriate. The Core does not prescribe one fixed mission/laboratory percentage for every age or progression stage.**

### Production

**Production** means the creation of an inspectable, discussable or demonstrable outcome of serious student work. It need not be a physical manufactured object.

Examples may include, without becoming exhaustive: artefact, prototype, system, experiment, dataset, research finding, analysis, software, design, performance, documentary, business model, policy proposal, service or community intervention.

### Mission-Based production cycle

Where age, safety and project type permit, productive work should generally progress through:

**Investigate → Design → Build/Create → Test → Fail/Learn → Improve → Document → Present**

Later stages may include, under supervision and law:

**Deploy → IP protection → venture / licensing / technology transfer / social implementation**

Not every mission reaches every later stage. Premature commercialisation or unsafe deployment is not required for educational validity.

### Productive failure

**Productive failure** means responsible experimentation from which evidence, reflection and improvement arise. Negligence, unsafe conduct, academic dishonesty or persistent non-engagement are not classified as productive failure.

---

## 7. Student Development Principle

Student development follows the working progression:

**Explore → Discover → Choose → Deepen → Produce**

Age bands for each stage, and the age at which Major and Minor pathways begin, are **not yet decided** (see Open Questions and `GAP_REGISTER.md`).

Until decided otherwise:

- young children must not receive premature permanent career labels;
- early years emphasise breadth across learning worlds rather than irreversible tracking;
- pathway discovery uses longitudinal evidence: student preference, repeated voluntary engagement, persistence, demonstrated aptitude, mentor observation, portfolio evidence, and parent/student dialogue;
- **No automated or algorithmic system may independently assign, restrict or permanently determine a student's educational pathway. Such systems may provide evidence or recommendations only; accountable human judgment and student participation remain mandatory.** The Core does not require that AI or algorithmic systems be used.

At suitable ages (TBD), students may pursue **Major + Minor** pathways within six broad professional/learning worlds:

1. Engineering & Intelligent Systems  
2. Health & Life Sciences  
3. Enterprise & Economics  
4. Earth, Energy & Built Environment  
5. Creative, Media & Human Communication  
6. Society, Leadership & Public Systems  

World definitions and competency maps remain to be detailed under `docs/03-worlds-and-pathways/`.

---

## 8. Capability and Assessment Principle

At major completion or exit stages, a Tarbiyat student should possess **both**:

1. **Applicable formally recognised academic evidence** required by the Formal Recognition Layer; and  
2. A **Tarbiyat longitudinal capability record** that may include:

- mission portfolio  
- Competency Graph  
- Proof of Capability Profile  
- Major pathway record  
- Minor pathway record  
- research / prototype record  
- teamwork evidence  
- communication evidence  
- ethical / responsibility evidence  
- industry / community exposure  

The Competency Graph, portfolio and Proof of Capability Profile constitute the **Tarbiyat capability layer**. They complement applicable statutory or recognised assessment and credentialing requirements; they do not replace them and are not claimed to be legally equivalent. Detailed schemas remain open (`GAP-009`, `GAP-010`).

---

## 9. Real-World Mission Principle

Tarbiyat prefers missions connected to real government, community or industry problems where safeguarding, consent, confidentiality and law allow. Where fully authentic missions are not yet available, realistically scoped simulated missions may be used without pretending they are live deployments.

Core-enabled (not automatically implemented in every country) features include:

- Industry-in-Residence  
- student intellectual property pathways  
- Mission-to-Market and supervised micro-venture possibilities  

Legal ownership, IP assignment, child employment rules, procurement and commercialisation constraints are **country/project implementation matters** and must not be invented in Core documents.

---

## 10. Ethics, Safety and Human Oversight

Character, ethics, physical development and responsibility are integral to Tarbiyat. Technology and production skill without ethical formation is incomplete.

Human educators, mentors and governors remain accountable for:

- student safeguarding and wellbeing;  
- safety in labs, workshops and field environments;  
- integrity of assessment evidence;  
- pathway advice and decisions affecting a student’s future options.

Automated systems may assist analysis; they do not displace human accountability. No automated or algorithmic system may independently assign, restrict or permanently determine a student's educational pathway.

Tarbiyat develops ethical responsibility, cultural grounding, civic responsibility and respect for the national context of the country in which it operates. The content and expression of national identity are determined in the Country Implementation Profile.

---

## 11. Universal Core vs Country Adaptation

| Layer | Contains | Must not contain |
|---|---|---|
| **Tarbiyat Core Educational Model** | Universal pedagogy, learning architecture, pathway logic, assessment philosophy, mission/production model, generic roles and campus typology | Country statutes; named local ministries as Core rules; Malaysia-only curriculum boards; Oman-specific partners or mandates |
| **Country Implementation Profile** | Curriculum/exam mapping, regulation, languages, values/national identity content, child protection detail, data requirements, industry/government priorities, residential model, accreditation pathway | Silent rewrites of Core principles |

**Malaysia** is the first current implementation focus. Malaysia-specific curriculum, examination framework, languages, values/national identity, laws/regulations, accreditation, child protection, data requirements, industry and government priorities, and residential model belong under `docs/10-malaysia/`.

Historical Oman and other country materials under `references/` are source documents only. They do not automatically become Core or Malaysia requirements. See **ADR-0001**.

**Boarding** is not a universal Core requirement; residential, day-school or hybrid formats are country/project implementation decisions.  
**Sovereign / on-premise data architecture** is not automatically a universal Core requirement; Core requires safe, lawful, privacy-conscious information governance.

When an implementation feature is represented as legally or regulatorily required, that claim must be supported by authoritative evidence in the Country Implementation Profile.

---

## 12. Principles Requiring ADR Approval to Change

Material change to any of the following requires an Architecture Decision Record and human approval before the Constitution is amended:

1. Dual-layer architecture (Formal Recognition Layer + Tarbiyat Learning Engine)  
2. Lab-First / not Lab-Only stance, including progressive age-appropriate intensity without a fixed Core percentage  
3. Retention of applicable statutory or recognised examinations where required  
4. Explore → Discover → Choose → Deepen → Produce as the working progression  
5. Prohibition on premature permanent career labelling of young children  
6. Complementary capability layer (Competency Graph / portfolio / Proof of Capability) without claimed legal equivalence to statutory credentials  
7. Separation of Core from country/project implementation profiles  
8. Non-mandate of boarding as a Core universal  
9. Non-automatic elevation of country data-sovereignty architectures into Core  
10. Human oversight of pathway decisions (algorithms may recommend only; may not independently determine pathways)

---

## 13. Open Questions Explicitly Not Yet Decided

The following remain open and must not be filled by invention in this Constitution:

1. Age bands for Explore → Discover → Choose → Deepen → Produce (`GAP-003`)  
2. Age and rules for introducing Major + Minor (`GAP-004`)  
3. Detailed Competency Graph schema (`GAP-009`)  
4. Proof of Capability Profile format and verification rules (`GAP-010`)  
5. Timetable proportions between mission work, Knowledge Studios and examination preparation (`GAP-016`)  
6. Which mission authenticity threshold is required at each stage (`GAP-018`)  
7. Malaysia-specific regulatory, curriculum-board, residential and data decisions (`GAP-001`, `GAP-002`, `GAP-005`, `GAP-006`, and related)  
8. Ownership/governance model for any particular national campus (`GAP-007`)  
9. Six-world competency maps and cross-world mission rules (`GAP-008`)  
10. Legal design of student IP and micro-ventures in any given jurisdiction (`GAP-011`)

---

## Related decisions (APPROVED)

| ADR | Subject | Status |
|---|---|---|
| `ADR-0001` | Core Educational Model vs Country Implementation | `APPROVED` |
| `ADR-0002` | Lab-First and Mission-Based Learning Architecture | `APPROVED` |
| `ADR-0003` | Formal Examination and Recognition Safety Layer | `APPROVED` |

## Explicit non-claims

This Constitution does **not** claim government approval, regulatory compliance, partnership agreements, completed curriculum maps, legal equivalence of capability records to statutory credentials, or proven comparative superiority over other school models.
