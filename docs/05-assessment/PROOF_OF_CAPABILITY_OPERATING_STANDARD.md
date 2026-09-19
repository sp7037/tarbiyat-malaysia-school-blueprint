# Proof of Capability Operating Standard

| Field | Value |
|---|---|
| Document ID | `POC-001` |
| Version | `0.1.0` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-16` |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `FND-003` APPROVED; `ADR-0003` APPROVED; `ADR-0019` APPROVED; governing architecture `ADR-0016` APPROVED; contribution/sanitised-evidence context `ADR-0014` APPROVED; faculty multi-stream context `ADR-0015` APPROVED with `PEO-001` APPROVED (GAP-033 Closed) and `PEO-002`–`PEO-005` DRAFT; mission authenticity context `ADR-0007` APPROVED; `MIS-001`–`MIS-003` APPROVED |
| Related gaps | GAP-038–044 (this pack — proposed, not closed); GAP-010 Closed by ADR-0016; GAP-009 (Competency Graph remains Open); GAP-006 (MY data where relevant) |
| Source documents | ADR-0016; ADR-0003; Architecture brief GAP-038–044 cluster (2026-09-16) |

> **Authority:** Governing architecture is `ADR-0016` (`APPROVED`). This standard operationalises PoC without inventing universal scores, badge farms or legal equivalence. If this file and ADR-0016 conflict, ADR-0016 prevails. This pack remains `DRAFT` — not approved; GAP-038–044 are **not closed**. Under-review ADRs and DRAFT PEO/MIS artefacts are **context only**, not approved law.

---

## 1. Purpose

Make Tarbiyat Proof of Capability **credible, auditable and usable** in a real school: trustworthy Capability Claims with honest contribution, support context, verification, defence where needed, challenge/correction, privacy and proportional workload.

This pack proposes operational resolution of **GAP-038**, **GAP-039**, **GAP-040** (presentation principles), **GAP-041** (institutional trust-marker principles), **GAP-042** (significance / workload rules) and **GAP-044** (retention / privacy / sanitisation principles). **GAP-043** (external acceptance research) remains Open. Gaps are **not closed** by drafting this document.

---

## 2. Scope and non-claims

**In scope:** claim lifecycle; claim unit fields; evidence families; independence/support descriptors; contribution; verification; Capability Defence; proportionality; provenance; AI-assisted work; challenge/correction; anti-inflation; privacy; visibility; retention/currency; Formal Recognition relationship; learning-time and capacity tests.

**Out of scope / non-claims:**

- approving this operating pack or closing GAP-038–044 / GAP-009;
- inventing universal scores, grades, percentages, algorithms or badge ladders;
- claiming universities/employers/ministries already accept PoC (`GAP-043`);
- inventing Malaysian (or other) data-retention periods, DPIA templates or exam equivalence;
- designing Competency Graph schema (`GAP-009`) or software database schemas;
- requiring blockchain or AI detectors;
- turning Mentors into PoC certifiers or PoC into a second report card.

---

## 3. Capability Claim lifecycle

A trustworthy claim moves through:

| Stage | Meaning | Typical artefact |
|---|---|---|
| Learning / Mission | Work occurs inside Integrated Programme (ADR-0019) | Mission / Studio / fieldwork |
| Evidence created | Learner produces artefacts, performances, records | Direct artefacts |
| Evidence captured | Selective capture — not every activity | Claim / evidence fields (`POC-FRM-001`) |
| Contribution attributed | Team / AI / adult roles recorded honestly | `POC-FRM-002` (or MIS-FRM-005-C link) |
| Claim proposed | Scoped Capability Claim drafted | `POC-FRM-001` |
| Context recorded | Constraints, tools, authenticity, stage | Claim context |
| Independence / support recorded | Descriptive support context | Claim support field |
| Verification | Authorised humans verify at proportional strength | `POC-FRM-003` |
| Defence / reflection | Where significance requires | `POC-FRM-004` |
| Decision | Verified / partial / insufficient / contested / withdrawn | Claim status |
| Profile visibility | Audience-constrained views | Visibility class |
| Challenge / correction | Humane review without self-certification | `POC-FRM-005` |
| Retention / archival / withdrawal | History preserved where accountability requires | Retention rules |

**Selectivity rule:** ordinary learning does not automatically enter the Profile. Claims enter only when educationally significant enough to curate.

---

## 4. Capability Claim unit (operational)

Aligned with ADR-0016 conceptual claim unit. Operational meanings:

| Element | Operational meaning |
|---|---|
| **Capability Claim** | Scoped statement of what the learner can demonstrate (inspectable; not completion or mark language) |
| **Evidence** | Direct / Supporting / Context artefacts or performances linked to the claim |
| **Context** | Mission/task, constraints, tools, authenticity, team, stage, date window |
| **Learner contribution** | What this learner did (Contribution Record when collaborative) |
| **Independence / support** | Descriptive support context — not a numeric score |
| **Verification** | Who verified what, at what strength, with what competence/authority |
| **Reflection / Defence** | Learner explanation where required by significance |
| **Provenance** | Origin, versions, assistance, confidentiality flags, audit trail |

A serious claim should answer: What can the learner do? What evidence? Under what conditions? With what assistance? What did the learner contribute? Who verified? When? Against what expectation? Can evidence be traced? Has the learner explained/defended where appropriate?

**No universal capability scale** is authorised. Optional descriptive statuses (Emerging / Developing / Consistent / Advanced) remain illustrative per ADR-0016 — not compulsory Core grades.

---

## 5. Evidence taxonomy

### 5.1 Classes (ADR-0016)

| Class | Role |
|---|---|
| **Direct** | Learner performs, builds, explains, creates, investigates | Preferred backbone for significant claims |
| **Supporting** | Observations, stakeholder comments, process records | Corroboration; not sole high-stakes basis when Direct is feasible |
| **Context** | Scope, tools, team, difficulty, authenticity | Prevents inflated comparison |

### 5.2 Evidence families

| Family | Valid when | Provenance | Direct observation? | Alone enough for significant claim? | Privacy / IP |
|---|---|---|---|---|---|
| Physical artefact | Learner can explain design/build/test | Maker, date, Mission, versions | Often needed for high-stakes | Usually with explanation | Photo may sanitise |
| Digital artefact / code / model / design | Learner can explain, adapt, test | Authorship, commits/versions, AI disclosure | Defence often substitutes | Rarely without explanation | Confidential code → sanitise |
| Investigation / experiment record | Method, data, analysis attributable | Lab log, controls, dates | Supervisor for elevated risk | Conditional | Hazardous methods not public |
| Performance / presentation | Observed or recorded with contribution clarity | Event, audience, role | Often yes | Conditional | Consent for recordings |
| Oral defence / critique | Learner explains ownership and reasoning | Panel notes, date | Yes (is the event) | Strong Direct when linked to artefact | Not humiliation theatre |
| Observation (Educator / Practitioner) | Competent observer; contemporaneous | Observer ID, authorisation | Is observation | Supporting primarily | No clinical notes |
| Fieldwork | Lawful, supervised, attributable | Site plan, risk class | Usually | Conditional | Location privacy |
| Partner feedback | Usefulness corroboration only | Partner ID, conflict check | No | **Never alone** | Partner data rules |
| Process / revision history | Shows iteration and decisions | Version trail | No | Supporting | May reveal sensitive drafts |
| Peer collaboration evidence | Contribution-honest | Peer roles via Contribution Record | Optional | Supporting | Anti-status capture |
| Reflection | Linked to Direct evidence | Dated learner reflection | No | **Never alone** for significant claims | Not counselling notes |
| Formal Recognition artefact | Demonstrates capability (not mark as claim) | Exam/course ID | Per Formal layer | May support; does not replace Formal transcript | Country exam rules |

### 5.3 Rejected as Proof alone

Attendance; participation; unsupported teacher praise; self-asserted capability; decorative certificates; LMS completion auto-claims; AI-generated artefacts with unclear learner contribution; partner-branded badges; marketing quotes without verification.

---

## 6. Independence / support architecture

Support is **context**, not humiliation and not failure.

| Descriptor | Meaning | Claim effect |
|---|---|---|
| **Observed / assisted practice only** | Learner practised under close adult direction; demonstration not yet claimable as independent capability | Do **not** advance as significant independent claim |
| **Close / substantial guidance** | Step-by-step adult direction for material portions | Claim must state substantial guidance; independence language forbidden |
| **Ordinary scaffolding** | Typical teaching/facilitation for stage (briefing, critique, templates) | Normal claim language; not “independent” |
| **Mostly independent** | Learner drives work; occasional critique | May claim mostly independent within scope |
| **Independent (defined constraints)** | Minimal direction after constraints set | Highest independence language — requires stronger verification/defence when significant |
| **Leading / teaching others** | Learner scaffolds peers while accountable for own contribution | Own contribution still must be attributable; leadership ≠ whole-team credit |
| **Team contribution** | Capability shown as part of collaborative work | Requires Contribution Record; no whole-product claim |

**Material limit rule:** if support level is Close/substantial or Observed-only, the claim **must not** assert independent professional-ready capability. Templates, peer help, family help, AI and practitioner guidance are all recordable support — none automatically invalidate learning, but all constrain wording.

**No numeric support percentages.**

---

## 7. Contribution architecture

For substantial collaborative Missions, record (`POC-FRM-002`; may reference MIS-FRM-005-C):

- roles (leadership, specialist, peer, partner, adult);
- identifiable individual work;
- joint work (shared without false sole authorship);
- material AI/tool contribution;
- ability to explain/defend own part.

**Prevent:** one learner claiming whole team output; status absorption of credit; quiet contributors vanishing; partners claiming learner work; marketing exaggerating authorship.

**Coordinate with ADR-0014:** Creator attribution ≠ competency assessment; commercial value ≠ educational capability. This standard does **not** determine legal IP ownership.

---

## 8. Verification architecture

### 8.1 Verifier classes

| Class | May contribute | Limits |
|---|---|---|
| **Educator** | Conceptual/disciplinary understanding; progression | Not automatic sole high-stakes authority |
| **Authorised Practitioner** | Professional/technical authenticity within authorised domain/currency | Title ≠ universal PoC authority; needs authorisation/currency (PEO-001/002 context) |
| **Mission Lead** | Mission-context verification; process integrity | Conflict if sole beneficiary of praise narrative |
| **Technical / Lab Professional** | Safety/process competence where relevant | Not full capability monopoly |
| **External specialist / partner** | Corroboration of usefulness/quality | **Never sole certification**; conflict-of-interest screen |
| **Panel** | Significant/high-stakes claims | Proportional — not for ordinary claims |
| **Mentor** | Reflection quality input | **Not** PoC certifier |
| **Learner** | Reflection / contribution explanation | **Input only — never self-certify** high-stakes claims |
| **Family / parent** | May supply context or raise challenge | **Not** verifier of capability |

### 8.2 When one verifier is enough

Ordinary developmental / meaningful claims with clear Direct evidence, ordinary scaffolding, low public consequence — typically Educator **or** authorised Practitioner within domain.

### 8.3 When multi-source is required

Significant/high-stakes; strong independence asserted; safety relevance; external visibility/reliance; material AI or team risk; conflict of interest on primary verifier; professional-depth claims.

### 8.4 Conflicts and competence

- Commercial interest, partnership incentives, family relation → disclose; escalate or add independent review.
- Verifier must have **domain competence** and, for Practitioners, authorisation/currency as required by PEO context.
- Senior job title alone does **not** grant universal PoC verification authority.
- Stakeholder praise ≠ certification (ADR-0016).

---

## 9. Capability Defence

**Purpose:** test ownership, understanding, reasoning, contribution and transfer — reduce plagiarism, AI ghost-production and team misattribution.

**When appropriate:** significant / high-stakes claims; strong independence asserted; unclear contribution; material AI; external visibility; safety-sensitive capability.

**Participants (proportional):** learner; Educator and/or authorised Practitioner; optional second adult or small panel. Mentors may observe for development — not certify.

**Learner should explain:** what they did; why; how; evidence; limits; failures; decisions; ethics; improvements.

**If learner cannot explain material work:** claim fails or is narrowed — beautiful artefact alone is insufficient.

**Must not become:** another exam; intimidation; public humiliation; ceremonial theatre. No universal defence duration. Age/stage affects length and formality — campus policy within Core proportionality.

---

## 10. Proportionality / claim significance

| Band (conceptual — not numeric tiers) | Typical treatment |
|---|---|
| **Ordinary developmental evidence** | May stay Mission-local; optional light capture; no panel |
| **Meaningful Capability Claim** | Claim record + evidence + proportionate verification |
| **Significant / high-stakes claim** | Multi-source verification; Contribution Record if team; Defence often required |
| **Externally visible / relied-upon claim** | Highest rigor + consent + sanitisation + institutional trust markers |

**Factors increasing rigor:** consequence; public visibility; safety relevance; professional significance; independence claimed; rarity/complexity; external reliance.

**Workload rule (GAP-042):** refuse claim-per-lesson and auto-LMS claims. Prefer fewer defensible claims over a huge Profile.

---

## 11. Provenance (minimum)

For serious claims, provenance should answer:

learner; Mission/learning context; date/time window; evidence source/location; verifier(s); version/history; support conditions; contribution record link; material AI disclosure; confidentiality/sanitisation flags; relevant approvals.

**Prevent** silent editing and post-hoc inflation: material changes create audit history; supersession does not erase history needed for accountability.

**No blockchain mandate.** Technology choice for signed records / verification links remains open (`GAP-041`) — Core requires the **trust property**, not a product.

---

## 12. AI-assisted work

AI may assist research, ideation, coding, writing, translation, analysis, design, media, debugging.

| Rule | Effect |
|---|---|
| Disclose **material** AI assistance | Provenance / Contribution Record |
| Distinguish learner capability from tool capability | Defence/explain/adapt/test/verify |
| Cannot explain material AI output | Full credit **not** verified |
| AI not banned by default | Ordinary tool use with disclosure is legitimate |
| No AI-detector requirement | Detector scores are **not** proof |
| AI may organise evidence for humans | AI may **not** award/deny/certify/pathway-gate (ADR-0016) |

---

## 13. Challenge / correction architecture

### Who may raise

Learner; Educator; Mentor (factual/developmental concern); verifier; school governance; parent/guardian where age-appropriate and campus policy allows.

### What may be challenged

Wrong contribution attribution; wrong support classification; missing/mislinked evidence; verifier error; misleading claim wording; outdated currency presentation; privacy exposure; conflicted verification.

### Outcomes

| Outcome | Meaning |
|---|---|
| **Correction** | Factual fix; audit note |
| **Supersession** | Later stronger evidence becomes current; history retained |
| **Withdrawal** | Claim removed from active/shareable views; audit retained |
| **Contested** | Temporary status pending review |
| **Upheld** | Challenge rejected with reasons |

Learners **may not** self-certify. Records are **not** immutable merely because an adult entered them. Do **not** silently delete history where accountability requires preservation (`POC-FRM-005`).

---

## 14. Anti-inflation / anti-badge-farm rules

Reject: hundreds of trivial claims; claim-per-lesson; attendance badges; teacher favouritism as sole basis; partner-branded badges; paid verification; automatic LMS completion claims; self-certification; marketing-driven inflation; every artefact as capability.

**Prefer** a smaller number of defensible claims. Verification strength must be honest (ADR-0016 illustrative strengths) — more badges ≠ better learning.

---

## 15. Privacy / data minimisation

**PoC is not the complete institutional file.**

**Must not enter Profile by default:** health records; counselling notes; family circumstances; safeguarding records; disability/medical information (unless separately consented educational adjustment evidence — never default shareable); disciplinary details; raw psychological data; private Mentor notes; sensitive partner data.

Separate: **(A)** evidence needed to support a capability claim vs **(B)** sensitive internal records.

Use **Sanitised Verified Evidence** for confidential Missions (ADR-0014 / ADR-0016). Country data-law detail: `GAP-044` / `GAP-006` — not invented here.

---

## 16. Visibility / sharing

| Class | Meaning |
|---|---|
| **Learner-private** | Learner (+ authorised school adults) |
| **School-internal** | Faculty/governance need-to-know |
| **Family-visible** | Age-appropriate parent/guardian view |
| **Externally shareable** | Explicit consent/authority; minimised pack |
| **Public showcase** | Only explicitly approved sanitised items |

Employers, universities and partners do **not** automatically receive full Profiles. Partners must not demand all-student access (`MIS-001` Education-First).

---

## 17. Retention / currency

| Concept | Meaning |
|---|---|
| Historical evidence | Past demonstration retained for growth narrative |
| Current claim | Presentationally active |
| Superseded | Replaced by later evidence for “current” views |
| Time-sensitive / safety-sensitive | May require currency review before reliance |
| Durable capability | Longer-lived where educationally valid |

Do **not** invent universal expiry periods. Professional/safety numeric currency periods defer to country/professional rules with citations. Early weakness must not permanently stigmatise (ADR-0016).

---

## 18. Formal Recognition relationship (ADR-0003)

PoC is **additional** to Formal Recognition — not a substitute legal credential.

- Exam/recognised-assessment artefacts may **support** a Capability Claim when they demonstrate capability.
- PoC does **not** duplicate the exam transcript.
- Layers may complement; **no legal equivalence** unless a competent authority establishes it.
- Prefer language: recognised academic credential **+** Tarbiyat Proof of Capability.

---

## 19. Learning-time / workload test (ADR-0019)

Evidence capture should be **embedded** in Mission/Studio cycles where possible.

Reject: portfolio homework factory; recreating evidence after Missions as default; duplicating Formal Recognition records into PoC unnecessarily; every Mission producing maximal documentation.

PoC operations must fit the **Integrated Programme** (anti-double-workload).

---

## 20. People / capacity test

Verification intensity ≤ staffable intensity (PEO-004 / PEO-005 context).

- Multi-assessor panels are **not** required for ordinary claims.
- Mentors do not certify.
- Practitioners verify only within authorisation/currency.
- Under-resourced campuses reduce concurrent significant claims rather than rubber-stamp.

---

## 21. Edge-case results

| ID | Scenario | Result |
|---|---|---|
| **A** | Beautiful project; learner cannot explain | **Insufficient evidence** for full claim; narrow or fail |
| **B** | Team of five; one claims entire product | **Prohibited** without Contribution Record supporting sole claim; **requires review** |
| **C** | Practitioner endorses; commercial interest | **Conditional** — disclose conflict; add independent review; praise ≠ sole cert |
| **D** | Parent produced large parts | **Conditional** — record family support; independence claim limited; may be insufficient for independent claim |
| **E** | Generative AI produced most digital artefact | **Conditional** — disclose; if unexplained → **insufficient** for full credit |
| **F** | Teacher and learner disagree on contribution | **Requires review** (challenge process); contested status |
| **G** | Learner improves after weak earlier claim | **Permitted** — supersession; history retained without stigma |
| **H** | Evidence contains confidential partner material | **Conditional** — sanitise; do not publish raw; capability may still verify internally |
| **I** | Learner wants externally shared evidence removed | **Conditional** — withdraw from shareable views where lawful; audit retained as required |
| **J** | Old claim no longer current | **Permitted** — mark historical/superseded; no eternal currency pretence |
| **K** | High-stakes safety capability from one observation | **Insufficient** alone — multi-source / repeated demonstration / defence as fit |
| **L** | Partner wants all student profiles | **Prohibited** |
| **M** | Strong capability; weak written reflection | **Conditional** — oral defence / performance evidence may suffice; reflection not sole gate |
| **N** | Excellent reflection; weak actual evidence | **Insufficient** for significant claim |
| **O** | Transfer-in with prior external evidence | **Conditional** — re-verify under Tarbiyat rules; prior certificates ≠ automatic PoC |

---

## 22. Institutional verifiability principles (GAP-041)

A recipient should be able to tell whether Tarbiyat **actually verified** a claim.

**Core trust properties:** named verifier(s); dated decision; verification strength; institutional audit trail; optional verification reference for externally shareable packs.

**Open:** signed-record technology, verification-link products, third-party platforms — evaluate later without blockchain mandate. No fabricated external endorsements (`GAP-043`).

---

## 23. Profile presentation principles (GAP-040)

Conceptual sections follow ADR-0016. Audience packs are **minimised views**, not UI law.

Campus may define pack templates (learner; family; admissions; employer; partner; public) under consent and data minimisation. **No UI/UX invention as Core doctrine.**

---

## 24. Core vs Country vs Campus vs Software

| Decision | Class |
|---|---|
| Claim lifecycle; Proof≠Participation; Direct/Supporting/Context; support descriptors; Contribution honesty; multi-source verification; Defence proportionality; anti-inflation; AI disclosure; privacy exclusions; visibility classes; no universal score; Formal Recognition coexistence | **A. Core PoC invariant** |
| Retention periods; consent ages; cross-border transfer; exam mapping; professional currency periods; legal equivalence | **B. Country/legal overlay** |
| Exact pack templates; defence formats; who chairs panels; local claim curation calendars | **C. Campus operating policy** |
| Significance volume targets; pilot workload metrics; label refinements | **D. Pilot/evidence-dependent** |
| DB schemas; apps; signed-link products; UI | **E. Future software detail** |

---

## 25. Software-readiness (no coding)

A future platform should be able to represent: learner; claim; evidence; provenance; contribution; support; verifier; verification decision; defence; challenge/correction; visibility; currency/status.

**Remaining ambiguities (intentionally open):** Graph↔claim node binding (`GAP-009`); exact signed-verification mechanism (`GAP-041`); country retention clocks (`GAP-044`); external acceptance (`GAP-043`).

---

## 26. Senior-stakeholder answers (plain language)

1. **Inflation?** Selective significant claims, multi-source verification, defence, anti-badge rules, honest support/contribution.
2. **Company badge?** No — partner praise corroborates; school retains verification; paid/partner badges rejected.
3. **Student actually did it?** Contribution Records + Direct evidence + explanation/defence.
4. **AI did most?** Disclose; unexplained AI output does not get full credit.
5. **Teamwork?** Individual contribution recorded; team win ≠ every member’s claim.
6. **Who verifies the verifier?** Authorisation/currency, conflict screens, multi-source for high-stakes, challenge process.
7. **Parents challenge?** Yes, where appropriate — correction/challenge process; not parental certification.
8. **Universities/employers understand?** Clear claims + evidence + verification strength; acceptance not claimed yet (`GAP-043`).
9. **Another exam?** No — parallel capability layer beside Formal Recognition; not a marksheet.
10. **Teacher paperwork?** Embedded evidence, significance thresholds, no claim-per-lesson, panels only when needed.

---

## 27. Related documents

- ADR-0016 (APPROVED) — governing architecture; GAP-010 Closed
- ADR-0003 (APPROVED) — dual assessment
- ADR-0019 (APPROVED) — learning-time / Integrated Programme
- ADR-0014 / ADR-0015 / ADR-0007 (UNDER REVIEW) — context
- `POC-TPL-001` / `POC-FRM-001`–`005` (DRAFT)
- `GAP_REGISTER.md` — GAP-038–044 (proposed/Open/Partial), GAP-010 Closed, GAP-009 Open

## Revision history

| Version | Date | Notes |
|---|---|---|
| 0.1.0 | 2026-09-16 | Initial DRAFT — proposes GAP-038–042 / 044 operational resolution; GAP-043 remains research-open |
