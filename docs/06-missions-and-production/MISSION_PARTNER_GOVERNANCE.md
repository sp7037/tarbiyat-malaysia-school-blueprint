# Mission Partner Governance Standard

| Field | Value |
|---|---|
| Document ID | `MIS-001` |
| Version | `0.1.3` |
| Status | `DRAFT` |
| Last reviewed | `2026-09-15` |
| Country scope | `CORE` |
| Owner / reviewer | Documentation Architect / Human lead (TBD) |
| Dependencies | `FND-003` APPROVED; `ADR-0001`–`ADR-0003` APPROVED; `ADR-0007` v0.1.1 UNDER REVIEW; `ADR-0014` v0.1.1 UNDER REVIEW; `ADR-0015` v0.1.1 UNDER REVIEW; contextual `ADR-0016`, `ADR-0011`, `ADR-0017`, `ADR-0018` UNDER REVIEW |
| Related gaps | GAP-022 (this document); GAP-023, GAP-024 (handoffs); GAP-025–031 (Creator Rights ops); GAP-031 (templates) |
| Source documents | ADR-0007 Mission Ecosystem / Partner Governance / Mission Educationalisation; ADR-0014 partner-sponsored missions; ADR-0015 Mission Teams / I-in-R boundary; GAP-022 resolution brief (2026-09-14) |

> **Authority note:** This standard **operationalises** architecture already stated in ADR-0007, ADR-0014 and ADR-0015. Those ADRs remain **`UNDER REVIEW`** and are **not** treated as approved law. Approved baseline: FND-003 and ADR-0001–0003. Country profiles and implementation teams supply lawful contracts, forms and due-diligence detail (`GAP-026`, `GAP-031`, `GAP-037`).

---

## 1. Purpose

Define how Tarbiyat schools **govern external Mission partners** so learners gain authentic capability without:

- partner-controlled curriculum;
- learner exploitation or disguised child labour;
- advertising disguised as education;
- automatic IP capture;
- unsafe or unsupervised access to minors;
- inappropriate data access;
- commercial pressure overriding educational value;
- exclusive recruitment pipelines;
- political or ideological capture;
- unreviewed deployment.

This document is the **Core operational partner-governance standard** proposed to resolve **GAP-022**. It is **not** a legal contract pack, Institution-in-Residence operating manual (`GAP-023`), or mission risk matrix (`GAP-024`).

---

## 2. Education-First governing principle

**Education-First:** external partners participate because they improve learner development, authenticity and capability.

Learners do **not** exist to supply free labour, cheap production, market research, corporate content, recruitment leads, political messaging, uncompensated IP, personal data, or publicity.

A partner may receive legitimate value from collaboration (feedback, prototypes, community benefit, research insight). **Educational value and learner protection remain governing priorities.**

Aligns with ADR-0007 Education-First / no student exploitation and Campus Live Workflow guardrails.

---

## 3. Partner role taxonomy

Roles describe **involvement in a Mission or programme**, not permanent status of an organisation. One organisation may hold different roles in different Missions.

| Role | Typical involvement | Not equivalent to |
|---|---|---|
| **Guest / Speaker** | Occasional talk, demonstration or inspiration; minimal ongoing operating role | Institution-in-Residence |
| **Visiting Expert** | Scoped critique, masterclass or technical input on defined topics | Mission Partner for full lifecycle |
| **Mission Contributor** | Supplies context, data (within classification), materials or one-off review without co-owning the Mission | Sustained pipeline partner |
| **Mission Partner** | Supports one or more Missions under an approved Mission Partner Brief; problem framing, expertise, structured feedback | Curriculum author or assessor |
| **Institution / Industry-in-Residence** | Sustained, governed presence or recurring professional involvement in the Mission Ecosystem (`MIS-002` defines presence patterns) | Guest visits twice per year |
| **Deployment / Implementation Partner** | Hosts or receives outputs for supervised real-world use or deployment (within Deployment Boundary — ADR-0007) | Automatic commercial deployer |
| **Research / Innovation Partner** | University, lab or R&D organisation co-designing inquiry, publication or innovation pathways under research integrity rules | Owner of all Mission-created IP |

**Escalation of role does not escalate partner control** over education, assessment, safeguarding, pathways or IP (ADR-0007).

Map to ADR-0007 partner roles: Guest speaker → Visiting expert → Mission partner → Institution-in-Residence. This standard adds **Mission Contributor**, **Deployment / Implementation Partner**, and **Research / Innovation Partner** for operational clarity.

---

## 4. Partner eligibility principles

Before a **Mission Partner** (or higher-involvement role) engages learners, the school applies **minimum eligibility principles** (implementation checklists deferred to country/project):

| Area | Principle |
|---|---|
| Identity | Lawful organisation or identifiable professional; scope of engagement is transparent |
| Mission relevance | Problem or contribution fits educational purpose and Six Worlds capability development |
| Safeguarding suitability | No history or pattern incompatible with safe work with minors (as known and lawfully checkable) |
| Conflicts of interest | Material conflicts disclosed and managed (§16) |
| Integrity | No deceptive, discriminatory or exploitative conditions imposed on learners |
| Safety competence | Where hazardous domains apply, partner instructions must not require unsafe learner practice |
| Minors | Partner accepts supervised access rules and child-appropriate communication |
| Creator Rights | Partner accepts no automatic ownership of learner work (ADR-0014) |
| Data / confidentiality | Partner accepts minimum-necessary data and classification rules (§11) |
| Hidden agenda | No undisclosed primary goal of recruitment, product sales, political campaigning or IP harvesting |

**Country/project adds:** registrations, background checks, insurance, licences, statutory checks — not invented in Core.

---

## 5. Mission intake and educationalisation

A partner’s **raw** industry, government or community problem is **not** automatically a student Mission.

### 5.1 Conceptual flow

```text
Partner need / problem
        ↓
Mission intake (register source, role, sponsor)
        ↓
Educational review (Educator + Practitioner [+ Mentor readiness context])
        ↓
Safeguarding / risk screen (link to GAP-024 dimensions)
        ↓
Scope / age suitability
        ↓
World / capability relevance (Six Worlds; GAP-047 later)
        ↓
IP / data classification
        ↓
Approved Mission Partner Brief
        ↓
Learner participation (voluntary where applicable)
```

### 5.2 School authority

Tarbiyat retains authority to **simplify, reshape, anonymise, narrow, simulate components, remove commercial urgency, reject unsafe elements, or reject the entire Mission**.

**Partner urgency does not override educational pacing** or Formal Recognition obligations (ADR-0003).

Mission Educationalisation (ADR-0007) is a **precondition** for Levels D–F and for many external Level C missions.

### 5.3 Intake outcomes

| Outcome | Meaning |
|---|---|
| **Proceed** | Brief approved; Mission Team assigned |
| **Proceed with conditions** | e.g. authenticity lowered, data anonymised, deployment excluded |
| **Defer** | Pending partner clarification, IP/data terms, or staffing |
| **Reject** | Incompatible with Education-First, safeguarding, or capability fit |

---

## 6. Mission Partner Brief (minimum contents)

Conceptual contents of an approved brief for **significant external missions** (operational record: `MIS-FRM-001`; not a legal contract — `GAP-031`):

| Element | Required for significant external mission |
|---|---|
| Problem / need (educationalised) | Yes |
| Educational purpose | Yes |
| Intended learner stage / readiness | Yes |
| Mission scope and boundaries | Yes |
| Expected outputs (evidence types) | Yes |
| Authenticity level (A–F guidance) | Yes |
| Deployment expectation, if any | Yes (or explicit “none”) |
| Partner role (taxonomy §3) | Yes |
| Practitioner / Educator / Mission Lead responsibilities | Yes |
| Learner role and voluntariness | Yes |
| Supervision and permitted external contact | Yes |
| Data classification | Yes |
| IP / Background IP expectations | Yes |
| Confidentiality / publication | Yes |
| Safety constraints | Yes |
| Time / workload constraints | Yes |
| Evidence / review role (partner vs school) | Yes |
| Exit / suspension conditions | Yes |

Ordinary internal Missions may use a lighter brief consistent with the same principles.

---

## 7. Access to learners

External partners must **not** automatically receive:

- direct **unsupervised** access to minors;
- learner personal contact information;
- private messaging rights with learners;
- behavioural, safeguarding or full academic records;
- Proof of Capability profiles or Capability Claims as a bulk feed;
- pathway / Major–Minor decisions;
- family information.

### 7.1 Access rules

| Rule | Requirement |
|---|---|
| Purpose limitation | Access only for defined Mission or I-in-R educational purpose |
| Supervision | Partner–learner interaction supervised per safeguarding level (ADR-0015; country law) |
| Proportionality | Minimum people, minimum data, minimum duration |
| Developmental fit | Authenticity and contact intensity match readiness (ADR-0004–0006 context) |
| Auditability | Schools should be able to account for scheduled partner contact (implementation SOP) |
| Communication channels | School-authorised channels preferred; no informal social media by default |

Institution-in-Residence **does not** imply unrestricted campus or learner access (`MIS-002`).

---

## 8. Partner role in assessment and evidence

Partners may contribute **authentic critique**. They must **not** have unilateral power over grades, progression, pathway assignment, PoC certification, learner discipline, or permanent identity labels.

| Partner may provide | School / human governance retains |
|---|---|
| Technical feedback | Interpretation for Formal Recognition (ADR-0003) |
| Standards-based critique | Final capability judgment (ADR-0016; ADR-0015 multi-stream) |
| User / stakeholder usefulness feedback | Whether usefulness equals competence |
| Observations for evidence record | Verification and Capability Claims |

**Stakeholder praise ≠ capability certification** (ADR-0016).

---

## 9. IP and Creator Rights integration

Operationalise ADR-0014 **before significant learner work begins** where reasonably possible:

| Topic | Brief must clarify |
|---|---|
| Partner Background IP | What pre-exists; licence for educational use only |
| School Background IP | Tools, platforms, facilities — no surprise claims |
| Learner pre-existing work | Not absorbed by partner |
| Expected Mission-created work | Classification path (Ordinary → Significant → Protectable, etc.) |
| Confidentiality | What cannot be published |
| Publication / portfolio | Including sanitised capability evidence |
| Use rights | Licence vs ownership claims |
| Contribution recording | Contribution Record expectations |
| Commercial interest | Disclosure; Creator Rights Review triggers |

**Forbidden defaults:**

- “Everything students make belongs to the sponsor.”
- “Everything touched by a learner is learner-owned regardless of joint development or Background IP.”

Surprise Innovation and Creator Rights Review apply per ADR-0014 (procedures/templates: `MIS-TPL-001` / `MIS-FRM-005` — `GAP-031` proposed resolution, not closed).

---

## 10. Data governance

Align with ADR-0007 data classes; operational labels for partner Missions:

| Class | Partner access |
|---|---|
| **Open / public** | May be shared when appropriate |
| **School-internal (educational)** | Shared only under Mission governance |
| **Partner-confidential** | Minimum necessary; learner sees only approved subset |
| **Learner-sensitive** | Not shared with partner without lawful basis and safeguards |
| **Restricted / safety-sensitive** | Partner must not expose learners (e.g. raw identifiable health records, classified material) |

Partners receive **minimum necessary** information. Real-world authenticity does **not** justify exposing student personal data, health information, private academic records, family data, or unnecessary identity information.

Country privacy law implementation: deferred (`GAP-006` where relevant; country profiles).

---

## 11. Commercial boundary

| Category | Examples |
|---|---|
| **Generally acceptable** | Real specifications (educationalised); authentic quality standards; prototype feedback; supervised testing; stakeholder review; real-world problem context |
| **Higher scrutiny** | Production for sale; customer delivery; revenue-linked outputs; repeated operational work; partner deadline dependence; commercial deployment |
| **Reject** | Production quotas; replacing paid workers with learners; repetitive low-learning tasks; learner output mainly for partner profit; sales targets on learners |

Connect to ADR-0007 Campus Live Workflow guardrails and Scenario F (repetitive commercial assembly).

---

## 12. Recruitment and marketing boundary

Partners must **not** use school access primarily to:

- recruit minors;
- build exclusive talent pipelines;
- collect marketing leads;
- promote products or services to learners/families;
- extract endorsements or testimonials without consent governance.

**Permitted:** career exposure, standards insight, authentic professional context — proportionate and Education-First.

Mission participation must **not** become a disguised employment funnel. Lawful later-stage recruitment may exist under **separate** school/country policy, not as hidden Mission terms.

---

## 13. Political and ideological boundary

Missions may study **real public problems** (Society / Public Systems World) with evidence and age-appropriate ethics.

**Prohibited as Mission design:** partisan campaigning, electoral mobilisation, ideological indoctrination, or political promotion on behalf of a partner.

NGOs, government and advocacy bodies remain eligible as **Mission Partners** when the educationalised brief is inquiry, service design, evidence-based analysis, or civic capability — not advocacy operations.

Respect FND-003 character formation and country profile expression of civic/national identity.

---

## 14. Partner influence and capture

Prevent a single powerful partner from dominating:

- Mission pipeline;
- curriculum emphasis;
- one World to the exclusion of Exploration Floor;
- learner pathways;
- staff priorities;
- campus branding;
- IP agenda.

**Portfolio diversity principle:** multi-source Mission ecosystem (ADR-0007); no learner spends all mission time on one corporate priority. Core sets **no fixed percentages**; human governance (Mentor / programme leadership) monitors balance.

**Final educational authority rests with Tarbiyat**, not partners.

---

## 15. Conflicts of interest

Material conflicts require **disclosure** and **human review** (Creator Rights Review or partner governance review as appropriate):

- staff or family financial interest in partner or venture;
- partner investment in learner work;
- staff-owned companies sponsoring Missions;
- parent-owned company Missions;
- procurement or sponsorship tied to curriculum favours;
- licensing revenue from learner output;
- assessor who is also partner representative;
- mentor/practitioner equity in learner Micro-Venture (ADR-0014).

Educational advisers must **not** secretly negotiate against learner interests. Detailed procurement law: country implementation.

---

## 16. Fees, sponsorship and funding

Partner funding may support Mission materials, equipment, practitioner time, research, facilities, or lawful programme support.

Funding must **not** purchase:

- curriculum control;
- unsupervised learner access;
- favourable assessment;
- automatic IP assignment;
- exclusive recruitment rights;
- guaranteed deployment or commercial outcomes.

Core does **not** set fee percentages or sponsorship tiers.

---

## 17. Suspension and exit

The school may **pause or end** a partner relationship or Mission when:

- safeguarding concern arises;
- exploitation or boundary breach (including commercial or data);
- undisclosed conflict;
- data misuse or IP misconduct;
- inappropriate learner contact;
- unsafe instructions;
- political/commercial capture of Mission purpose;
- repeated failure to meet supervision or brief commitments.

**Learners must not be academically punished** because a partner relationship ends; Mission may pivot, simulate remaining work, or substitute alternative authentic experience.

---

## 18. Relationship to Institution / Industry-in-Residence (`MIS-002`)

Partner behaviour, eligibility, access, IP/data, conflicts, funding limits and exit rules in this standard (**MIS-001**) are **prerequisites** for Institution / Industry-in-Residence recognition.

**Sustained embedding, presence/recurrence, practitioner continuity, space models, relationship review and I-in-R designation rules** are defined in:

`docs/06-missions-and-production/INSTITUTION_IN_RESIDENCE.md` (`MIS-002`, DRAFT) — proposed resolution of **GAP-023** (not closed).

Typical path: successful Mission Partner engagement (or equivalent onboarding review) **before** I-in-R designation.

---

## 19. Relationship to Mission Risk / Safeguarding (`MIS-003`)

Partner briefs must record a **risk-screen outcome** linking authenticity, data class and controls.

Detailed Mission risk domains, R0–R4 classification, stop-work authority, deployment re-review and scenario tests are defined in:

`docs/06-missions-and-production/MISSION_RISK_AND_SAFEGUARDING.md` (`MIS-003`, DRAFT) — proposed resolution of **GAP-024** (not closed).

Partner Missions **must not bypass** MIS-003. Partner urgency does not lower controls.

---

## 20. Scenario tests

| ID | Scenario | Result | Rationale |
|---|---|---|---|
| **A** | Robotics company offers real warehouse automation problem | **Acceptable with controls** | Educationalise scope; authenticity D–E; brief + IP/data; supervised contact |
| **B** | Company wants ownership of all student inventions | **Prohibited** as default term | ADR-0014 / ADR-0007; may negotiate case-by-case with Creator Rights Review — never blanket pre-mission capture |
| **C** | University researcher wants student field data collection | **Acceptable with controls** | Research Partner role; ethics/consent; data class; age suitability; Contribution Records |
| **D** | Hospital wants learners observing sensitive clinical work | **Prohibited** or **requires escalation** | No unlawful clinical exposure; Highly Restricted data; typically reject direct clinical observation — non-clinical health Mission only |
| **E** | NGO proposes political advocacy campaign as Society Mission | **Prohibited** | §13; civic analysis allowed, campaigning not |
| **F** | Manufacturer wants 200 identical items by learners | **Prohibited** | Repetitive commercial production / Scenario F; not Education-First |
| **G** | Software company wants prototypes + direct contact with “top” learners | **Acceptable with controls** for prototypes; **Prohibited** for unsupervised direct contact / PoC mining | Brief limits contact; no recruitment pipeline; supervised channels only |
| **H** | Government department challenge with confidential internal data | **Acceptable with controls** or **Defer** | Anonymise/redact to approved class; reject Highly Restricted raw access |
| **I** | Startup mentor later wants to invest in learner venture | **Requires escalation** | ADR-0014 investment safeguards; conflict review; voluntary learner pathway |
| **J** | Partner repeatedly misses supervision commitments | **Suspension / exit** | §17; learner protection over partner convenience |
| **K** | Parent-owned company proposes Mission | **Requires escalation** | Conflict disclosure (§15); may proceed with independent review and clear IP/assessment separation |
| **L** | Major funding for exclusive branding + curriculum influence | **Prohibited** | §16; educational authority not for sale |
| **M** | Partner wants student photos/work in marketing | **Requires escalation** | Consent, Creator Rights, age-appropriate governance; not automatic |
| **N** | I-in-R partner wants permanent access to student capability profiles | **Prohibited** | §7; PoC is not partner analytics feed; purpose-limited evidence only |

---

## 21. Core vs country vs implementation

| Layer | This standard includes |
|---|---|
| **Core** | Education-First; educationalisation; partner taxonomy; eligibility principles; brief contents; learner access; assessment non-monopoly; IP/data principles; commercial/recruitment/political boundaries; conflicts; funding limits; suspension/exit; scenario logic |
| **Country** | Safeguarding law; privacy law; contracting; IP law; labour law; licensing; statutory checks; minors’ capacity |
| **Implementation** | Forms; contracts; approval workflows; committees; SLA formats; due-diligence checklists; CRM for partners; audit logs |

Do not treat this DRAFT as substitute for country legal review (`GAP-011`, `GAP-026`).

---

## 22. Related documents

- `docs/00-foundation/CONCEPT_CONSTITUTION.md` (FND-003, APPROVED)
- ADR-0001, ADR-0002, ADR-0003 (APPROVED)
- ADR-0007 Mission Ecosystem (UNDER REVIEW v0.1.1)
- ADR-0014 Student Creator Rights (UNDER REVIEW v0.1.1)
- ADR-0015 Faculty architecture (UNDER REVIEW v0.1.1)
- ADR-0016 Proof of Capability (UNDER REVIEW) — evidence boundaries
- `MIS-002` Institution-in-Residence; `MIS-003` Mission Risk / Safeguarding
- `GAP_REGISTER.md` — GAP-022, GAP-023, GAP-024, GAP-025–031

---

## 23. Explicit non-claims

This standard does **not**:

- approve ADR-0007, ADR-0014 or ADR-0015;
- close GAP-022 (proposed resolution only until human review and governing ADR approval path);
- close GAP-023 or GAP-024 (proposed via MIS-002 / MIS-003);
- provide country legal contracts (Core templates under `MIS-TPL-001` / `MIS-FRM-*` remain educational records — `GAP-031`);
- invent Malaysian or other national law;
- set staffing ratios (`GAP-032`);
- guarantee any partner relationship or economic outcome.
