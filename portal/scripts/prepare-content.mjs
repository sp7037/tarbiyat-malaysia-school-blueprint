/**
 * prepare-content.mjs
 *
 * Derives portal pages from repository Markdown (source of truth).
 * Does not invent architectural decisions or alter source documents.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PORTAL_ROOT = path.resolve(__dirname, '..')
const REPO_ROOT = path.resolve(PORTAL_ROOT, '..')
const DOCS_OUT = path.join(PORTAL_ROOT, 'docs')
const GEN_DIR = path.join(DOCS_OUT, '_generated')
const DATA_DIR = path.join(DOCS_OUT, '.vitepress', 'data')

/** Populated at run start from ADR body files — used to avoid links to nonexistent routes. */
let ADR_BODY_SLUGS = new Set()

function setAdrBodySlugs(adrs) {
  ADR_BODY_SLUGS = new Set(adrs.map((a) => String(a.slug || '').toLowerCase()))
}

function hasAdrBody(adrRef) {
  const m = String(adrRef || '').match(/ADR-(\d{4})/i)
  if (!m) return false
  return ADR_BODY_SLUGS.has(`adr-${m[1]}`)
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true })
}

function read(rel) {
  return fs.readFileSync(path.join(REPO_ROOT, rel), 'utf8')
}

function write(abs, content) {
  ensureDir(path.dirname(abs))
  fs.writeFileSync(abs, content, 'utf8')
}

function parseMetadataTable(md) {
  const meta = {}
  const lines = md.split(/\r?\n/)
  let inTable = false
  for (const line of lines) {
    if (/^\| Field \| Value \|/i.test(line)) {
      inTable = true
      continue
    }
    if (inTable) {
      if (!line.startsWith('|')) break
      if (/^\|\s*-+/.test(line)) continue
      const cells = line.split('|').map((c) => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1)
      if (cells.length >= 2) {
        const key = cells[0].replace(/`/g, '').trim()
        const value = cells[1].replace(/`/g, '').trim()
        meta[key] = value
      }
    }
  }
  return meta
}

function extractTitle(md, fallback) {
  const h1 = md.match(/^#\s+(.+)$/m)
  if (h1) return h1[1].replace(/^ADR-\d+\s*[—–-]\s*/, '').trim()
  return fallback
}

function listAdrFiles() {
  const dir = path.join(REPO_ROOT, 'docs/13-decisions/adr')
  return fs
    .readdirSync(dir)
    .filter((f) => /^ADR-\d+.*\.md$/i.test(f) && !/TEMPLATE/i.test(f))
    .sort((a, b) => {
      const na = Number(a.match(/ADR-(\d+)/i)?.[1] || 0)
      const nb = Number(b.match(/ADR-(\d+)/i)?.[1] || 0)
      return na - nb
    })
    .map((file) => {
      const rel = `docs/13-decisions/adr/${file}`
      const md = read(rel)
      const meta = parseMetadataTable(md)
      const id = meta['Document ID'] || file.match(/ADR-\d+/i)?.[0] || file
      const num = Number(id.match(/(\d+)/)?.[1] || 0)
      return {
        file,
        rel,
        id,
        num,
        title: extractTitle(md, meta['Document ID'] || file),
        status: (meta.Status || 'STATUS NOT YET FORMALISED').replace(/\s*—.*$/, '').trim(),
        version: meta.Version || '—',
        date: meta.Date || meta['Last reviewed'] || '—',
        scope: meta['Country scope'] || '—',
        dependencies: meta.Dependencies || '—',
        relatedGaps: meta['Related gaps / claims'] || '—',
        slug: id.toLowerCase()
      }
    })
}

function toHtmlInlineLinks(text) {
  return String(text)
    .replace(/PROJECT_RULES\.md/g, '<a href="/project-rules">PROJECT_RULES.md</a>')
    .replace(/\b(FND-003)\b/g, '<a href="/foundation/concept-constitution">$1</a>')
    .replace(/\b(ADR-(\d{4}))\b/g, (_m, id, num) =>
      ADR_BODY_SLUGS.has(`adr-${num}`)
        ? `<a href="/decisions/adr-${num}">${id}</a>`
        : `<span class="adr-reserved" title="Proposed / reserved — no ADR body file yet">${id}</span>`
    )
    .replace(/\b(GAP-(\d{3}))\b/g, '<a href="/gaps#gap-$2">$1</a>')
}

function rewriteRepoLinks(md) {
  // Protect fenced code and inline code from rewriting
  const vault = []
  const protect = (text) =>
    text
      .replace(/```[\s\S]*?```/g, (m) => {
        vault.push(m)
        return `\u0000VAULT${vault.length - 1}\u0000`
      })
      .replace(/`[^`\n]+`/g, (m) => {
        vault.push(m)
        return `\u0000VAULT${vault.length - 1}\u0000`
      })

  const restore = (text) =>
    text.replace(/\u0000VAULT(\d+)\u0000/g, (_, i) => vault[Number(i)])

  let out = protect(md)

  const map = [
    [/GAP_REGISTER\.md/g, '/gaps'],
    [/MASTER_INDEX\.md/g, '/master-index'],
    [/CHANGELOG\.md/g, '/changelog'],
    [/PROJECT_RULES\.md/g, '/project-rules'],
    [/docs\/00-foundation\/CONCEPT_CONSTITUTION\.md/g, '/foundation/concept-constitution'],
    [/docs\/00-foundation\/PROJECT_CHARTER\.md/g, '/foundation/project-charter'],
    [/docs\/00-foundation\/VISION_MISSION_OBJECTIVES\.md/g, '/foundation/vision-mission-objectives'],
    [/docs\/00-foundation\/CORE_DIFFERENTIATORS\.md/g, '/foundation/core-differentiators'],
    [/docs\/00-foundation\/DESIGN_PRINCIPLES\.md/g, '/foundation/design-principles'],
    [/docs\/00-foundation\/GLOSSARY\.md/g, '/foundation/glossary'],
    [/docs\/00-foundation\/SECTION_README\.md/g, '/foundation/'],
    [/docs\/13-decisions\/ADR_INDEX\.md/g, '/decisions/'],
    [/docs\/12-evidence\/SUPERSEDED_CONCEPTS\.md/g, '/evidence/superseded-concepts'],
    [/docs\/12-evidence\/CLAIMS_REGISTER\.md/g, '/evidence/claims-register'],
    [/docs\/12-evidence\/EVIDENCE_REGISTER\.md/g, '/evidence/evidence-register'],
    [/docs\/12-evidence\/RESEARCH_GAPS\.md/g, '/evidence/research-gaps'],
    [/docs\/10-malaysia\/MALAYSIA_SCHOOL_ESTABLISHMENT_RECOGNITION_AND_GOVERNANCE_PATH\.md/g, '/country/malaysia-school-path'],
    [/docs\/10-malaysia\/MALAYSIA_REGULATED_PEOPLE_ROLE_MAPPING\.md/g, '/country/malaysia-regulated-people'],
    [/docs\/10-malaysia\/MALAYSIA_IMPLEMENTATION_PROFILE\.md/g, '/country/malaysia'],
    [/docs\/10-malaysia\/SECTION_README\.md/g, '/country/'],
    [/docs\/06-missions-and-production\/MISSION_PARTNER_GOVERNANCE\.md/g, '/areas/mission-partner-governance'],
    [/docs\/06-missions-and-production\/INSTITUTION_IN_RESIDENCE\.md/g, '/areas/institution-in-residence'],
    [/docs\/06-missions-and-production\/MISSION_RISK_AND_SAFEGUARDING\.md/g, '/areas/mission-risk-and-safeguarding'],
    [/docs\/06-missions-and-production\/MISSION_OPERATING_TEMPLATES\.md/g, '/areas/mission-operating-templates'],
    [/docs\/06-missions-and-production\/templates\/MIS-FRM-001-unified-mission-partner-pack\.md/g, '/areas/mis-frm-001'],
    [/docs\/06-missions-and-production\/templates\/MIS-FRM-002-practitioner-onboarding-acknowledgement\.md/g, '/areas/mis-frm-002'],
    [/docs\/06-missions-and-production\/templates\/MIS-FRM-003-expanded-mission-risk-record\.md/g, '/areas/mis-frm-003'],
    [/docs\/06-missions-and-production\/templates\/MIS-FRM-004-iinr-designation-record\.md/g, '/areas/mis-frm-004'],
    [/docs\/06-missions-and-production\/templates\/MIS-FRM-005-conditional-annexes\.md/g, '/areas/mis-frm-005'],
    [/docs\/06-missions-and-production\/templates\/MIS-FRM-006-deployment-and-exit\.md/g, '/areas/mis-frm-006'],
    [/docs\/06-missions-and-production\/templates\/MIS-FRM-007-practitioner-authorisation-record\.md/g, '/areas/mis-frm-007'],
    [/docs\/08-people-and-governance\/PRACTITIONER_AUTHORISATION_AND_ONBOARDING\.md/g, '/areas/practitioner-authorisation'],
    [/docs\/08-people-and-governance\/PRACTITIONER_CURRENCY_AND_REAUTHORISATION\.md/g, '/areas/practitioner-currency'],
    [/docs\/08-people-and-governance\/FACULTY_AND_PRACTITIONER_DEVELOPMENT\.md/g, '/areas/faculty-practitioner-development'],
    [/docs\/08-people-and-governance\/MISSION_TEAM_LOADING_AND_STAFFING_CAPACITY\.md/g, '/areas/mission-team-capacity'],
    [/docs\/08-people-and-governance\/MENTOR_CASELOAD_AND_HUMAN_GUIDANCE_CAPACITY\.md/g, '/areas/mentor-caseload-capacity'],
    [/docs\/08-people-and-governance\/templates\/PEO-FRM-001-faculty-practitioner-development-plan\.md/g, '/areas/peo-frm-001'],
    [/docs\/08-people-and-governance\/templates\/PEO-FRM-002-mission-team-capacity-check\.md/g, '/areas/peo-frm-002'],
    [/docs\/08-people-and-governance\/templates\/PEO-FRM-003-mentor-caseload-review\.md/g, '/areas/peo-frm-003'],
    [/docs\/06-missions-and-production\/templates\/MIS-FRM-008-practitioner-currency-review\.md/g, '/areas/mis-frm-008'],
    [/docs\/01-learning-architecture\/LEARNING_TIME_ARCHITECTURE\.md/g, '/areas/learning-time-architecture'],
    [/docs\/09-campus-blueprint\/CAMPUS_AND_FACILITIES_FUNCTIONAL_ARCHITECTURE\.md/g, '/areas/campus-facilities'],
    [/docs\/09-campus-blueprint\/SECTION_README\.md/g, '/areas/campus'],
    [/docs\/05-assessment\/PROOF_OF_CAPABILITY_OPERATING_STANDARD\.md/g, '/areas/poc-operating-standard'],
    [/docs\/05-assessment\/POC_OPERATING_TEMPLATES\.md/g, '/areas/poc-operating-templates'],
    [/docs\/05-assessment\/templates\/POC-FRM-001-capability-claim-record\.md/g, '/areas/poc-frm-001'],
    [/docs\/05-assessment\/templates\/POC-FRM-002-contribution-record\.md/g, '/areas/poc-frm-002'],
    [/docs\/05-assessment\/templates\/POC-FRM-003-verification-record\.md/g, '/areas/poc-frm-003'],
    [/docs\/05-assessment\/templates\/POC-FRM-004-capability-defence-record\.md/g, '/areas/poc-frm-004'],
    [/docs\/05-assessment\/templates\/POC-FRM-005-claim-challenge-correction-record\.md/g, '/areas/poc-frm-005'],
    [/docs\/11-implementation\/PILOT_COMMISSIONING_AND_READINESS_ARCHITECTURE\.md/g, '/areas/pilot-commissioning'],
    [/docs\/11-implementation\/templates\/IMP-FRM-001-pilot-readiness-record\.md/g, '/areas/imp-frm-001'],
    [/docs\/11-implementation\/SECTION_README\.md/g, '/areas/implementation'],
    [/templates\/MIS-FRM-001-unified-mission-partner-pack\.md/g, '/areas/mis-frm-001'],
    [/templates\/MIS-FRM-002-practitioner-onboarding-acknowledgement\.md/g, '/areas/mis-frm-002'],
    [/templates\/MIS-FRM-003-expanded-mission-risk-record\.md/g, '/areas/mis-frm-003'],
    [/templates\/MIS-FRM-004-iinr-designation-record\.md/g, '/areas/mis-frm-004'],
    [/templates\/MIS-FRM-005-conditional-annexes\.md/g, '/areas/mis-frm-005'],
    [/templates\/MIS-FRM-006-deployment-and-exit\.md/g, '/areas/mis-frm-006'],
    [/templates\/MIS-FRM-007-practitioner-authorisation-record\.md/g, '/areas/mis-frm-007'],
    [/templates\/MIS-FRM-008-practitioner-currency-review\.md/g, '/areas/mis-frm-008'],
    [/templates\/PEO-FRM-001-faculty-practitioner-development-plan\.md/g, '/areas/peo-frm-001'],
    [/templates\/PEO-FRM-002-mission-team-capacity-check\.md/g, '/areas/peo-frm-002'],
    [/templates\/PEO-FRM-003-mentor-caseload-review\.md/g, '/areas/peo-frm-003'],
    [/templates\/POC-FRM-001-capability-claim-record\.md/g, '/areas/poc-frm-001'],
    [/templates\/POC-FRM-002-contribution-record\.md/g, '/areas/poc-frm-002'],
    [/templates\/POC-FRM-003-verification-record\.md/g, '/areas/poc-frm-003'],
    [/templates\/POC-FRM-004-capability-defence-record\.md/g, '/areas/poc-frm-004'],
    [/templates\/POC-FRM-005-claim-challenge-correction-record\.md/g, '/areas/poc-frm-005'],
    [/templates\/IMP-FRM-001-pilot-readiness-record\.md/g, '/areas/imp-frm-001']
  ]
  for (const [re, to] of map) out = out.replace(re, to)

  out = out.replace(
    /(?:\.\.\/)*docs\/13-decisions\/adr\/(ADR-\d+)[^)\s]*\.md/gi,
    (_m, id) => `/decisions/${String(id).toLowerCase()}`
  )

  // Link bare ADR / GAP refs outside existing markdown links — only when ADR body exists
  out = out.replace(/(?<!\(|\/|\[)(ADR-(\d{4}))(?![\]\w/-])/g, (_m, id, num) =>
    ADR_BODY_SLUGS.has(`adr-${num}`) ? `[${id}](/decisions/adr-${num})` : id
  )
  out = out.replace(/(?<!\(|\/|\[|#)(GAP-(\d{3}))(?![\]\w/-])/g, '[$1](/gaps#gap-$2)')

  return restore(out)
}

function statusClass(status) {
  const raw = String(status || '')
  const s = raw.toUpperCase()
  // Order-aware: "not closed" must never classify as closed/resolved
  const notClosed = /\bNOT\s+CLOSED\b/.test(s)

  if (/\bAPPROVED\b/.test(s) && !/\bNOT\s+APPROVED\b/.test(s)) return 'approved'
  if (s.includes('UNDER REVIEW')) return 'under-review'
  if (s.includes('IN PROGRESS') || s.includes('DRAFT')) return 'in-progress'
  if (s.includes('PROPOSED') || s.includes('PLANNED')) return 'planned'
  if (/^OPEN\b/.test(s.trim()) || s.startsWith('OPEN (')) return 'open'
  if (s.includes('DEFERRED') || s.includes('SUPERSEDED') || s.includes('REJECTED')) return 'deferred'
  if (
    !notClosed &&
    (/\bCLOSED\b/.test(s) || /\bRESOLVED\b/.test(s) || /\bADDRESSED\b/.test(s))
  ) {
    return 'resolved'
  }
  if (notClosed || /EVIDENCE PACK COMPLETED/i.test(raw)) return 'evidence-awaiting-review'
  return 'unknown'
}

function statusBadge(status, classOverride) {
  const cls = classOverride || statusClass(status)
  return `<span class="status-badge status-${cls}">${status}</span>`
}

function noticeBlock() {
  return `::: tip Portal notice
This portal is a human-readable view of the Tarbiyat architecture repository. Source Markdown documents and approved architectural decisions remain authoritative.
:::
`
}

function generateAdrPages(adrs) {
  const outDir = path.join(GEN_DIR, 'decisions')
  ensureDir(outDir)

  adrs.forEach((adr, i) => {
    const prev = adrs[i - 1]
    const next = adrs[i + 1]
    const raw = read(adr.rel)
    // Drop source H1 — portal chrome already shows title
    const withoutH1 = raw.replace(/^#\s+[^\n\r]+(?:\r?\n)+/, '')
    const source = rewriteRepoLinks(withoutH1)
    const navTop = [
      prev
        ? `<a href="/decisions/${prev.slug}">← Previous: ${prev.id}</a>`
        : '<span>← Previous ADR</span>',
      `<a href="/decisions/">ADR Index</a>`,
      next
        ? `<a href="/decisions/${next.slug}">Next: ${next.id} →</a>`
        : '<span>Next ADR →</span>'
    ].join(' · ')

    const header = `---
title: ${adr.id} — ${adr.title}
description: ${adr.id} (${adr.status})
---

${noticeBlock()}
<div class="adr-chrome">
  <div class="adr-chrome__id">${adr.id}</div>
  <h1 class="adr-chrome__title">${adr.title}</h1>
  <div class="adr-meta-grid">
    <div><span class="meta-label">Status</span>${statusBadge(adr.status)}</div>
    <div><span class="meta-label">Version</span><strong>${adr.version}</strong></div>
    <div><span class="meta-label">Date</span>${adr.date}</div>
    <div><span class="meta-label">Country scope</span>${adr.scope}</div>
    <div class="span-2"><span class="meta-label">Dependencies</span>${toHtmlInlineLinks(adr.dependencies)}</div>
    <div class="span-2"><span class="meta-label">Related GAPs / claims</span>${toHtmlInlineLinks(adr.relatedGaps)}</div>
  </div>
  <p class="adr-nav">${navTop}</p>
  <p class="source-path">Source: <code>${adr.rel}</code></p>
</div>

`

    const footer = `\n\n---\n\n<p class="adr-nav">${navTop}</p>\n`

    write(path.join(outDir, `${adr.slug}.md`), header + source + footer)
  })
}

function generateIncludePage({ outRel, title, sourceRel, description }) {
  const source = rewriteRepoLinks(read(sourceRel))
  const content = `---
title: ${title}
description: ${description || title}
---

${noticeBlock()}
<p class="source-path">Source: <code>${sourceRel}</code></p>

${source}
`
  write(path.join(GEN_DIR, outRel), content)
}

function parseGaps() {
  const md = read('GAP_REGISTER.md')
  const gaps = []
  const lines = md.split(/\r?\n/)
  let inOpen = false
  for (const line of lines) {
    if (line.startsWith('| Gap ID |')) {
      inOpen = true
      continue
    }
    if (inOpen) {
      if (!line.startsWith('|')) {
        inOpen = false
        continue
      }
      if (/^\|\s*-+/.test(line)) continue
      const cells = line.split('|').map((c) => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1)
      if (cells.length >= 6 && cells[0].startsWith('GAP-')) {
        const id = cells[0]
        const status = cells[5]
        let area = 'Core / cross-cutting'
        if (/Malaysia|MY\b/i.test(cells[1] + cells[5])) area = 'Malaysia'
        if (/Oman|KIRA|Afghanistan/i.test(cells[1])) area = 'References / related'
        gaps.push({
          id,
          topic: cells[1],
          why: cells[2],
          action: cells[3],
          priority: cells[4],
          status,
          relatedAdr: (status.match(/ADR-\d+/i) || cells[3].match(/ADR-\d+/i) || ['—'])[0],
          area,
          statusClass: classifyGapStatus(status)
        })
      }
    }
  }

  // Closed table
  const closed = []
  let inClosed = false
  for (const line of lines) {
    if (line.includes('## Closed')) {
      inClosed = true
      continue
    }
    if (inClosed && line.startsWith('## ')) break
    if (inClosed && line.startsWith('|') && !line.includes('Item |') && !/^\|\s*-+/.test(line)) {
      const cells = line.split('|').map((c) => c.trim()).filter((_, i, arr) => i > 0 && i < arr.length - 1)
      if (cells.length >= 2) {
        closed.push({
          item: cells[0],
          closedBy: cells[1],
          notes: cells[2] || ''
        })
      }
    }
  }

  return { gaps, closed }
}

function classifyGapStatus(status) {
  const s = String(status || '').toLowerCase()
  // Order-aware: never treat "not closed" as closed/resolved
  const notClosed = /\bnot\s+closed\b/.test(s)

  if (s.includes('proposed resolution')) return 'proposed-resolution'
  if (
    s.includes('evidence pack completed') ||
    (s.includes('requires human re-review') && notClosed)
  ) {
    return 'evidence-awaiting-review'
  }
  // "under review" alone (without proposed resolution) — keep as proposed-resolution when ADR-framed
  if (s.includes('under review') && s.includes('adr-')) return 'proposed-resolution'
  if (s.includes('under research')) return 'under-research'
  if (s.startsWith('open')) return 'open'
  if (s.includes('deferred')) return 'deferred'
  if (!notClosed && (/\bclosed\b/.test(s) || /\bresolved\b/.test(s))) return 'resolved'
  if (!notClosed && s.includes('addressed')) return 'addressed'
  if (notClosed) return 'open'
  return 'open'
}

function generateGapsPage(gapData) {
  const rows = gapData.gaps
    .map((g) => {
      const anchor = g.id.toLowerCase()
      let adrLink = '—'
      if (g.relatedAdr && g.relatedAdr !== '—') {
        adrLink = hasAdrBody(g.relatedAdr)
          ? `[${g.relatedAdr}](/decisions/${g.relatedAdr.toLowerCase()})`
          : g.relatedAdr
      }
      return `| <a id="${anchor}"></a>[${g.id}](#${anchor}) | ${g.topic} | ${statusBadge(g.status, g.statusClass)} | ${adrLink} | ${g.area} |`
    })
    .join('\n')

  const closedRows = gapData.closed
    .map((c) => `| ${c.item} | ${c.closedBy} | ${c.notes} |`)
    .join('\n')

  const counts = {
    open: gapData.gaps.filter((g) => g.statusClass === 'open').length,
    proposed: gapData.gaps.filter((g) => g.statusClass === 'proposed-resolution').length,
    evidenceAwaiting: gapData.gaps.filter((g) => g.statusClass === 'evidence-awaiting-review')
      .length,
    other: gapData.gaps.filter(
      (g) => !['open', 'proposed-resolution', 'evidence-awaiting-review'].includes(g.statusClass)
    ).length,
    closedCore: gapData.closed.length
  }

  const content = `---
title: Gap Register
description: Open and closed architectural information gaps
---

${noticeBlock()}

# Gap Register

Human-readable view of \`GAP_REGISTER.md\`. **No gaps are closed or altered by this portal.**

<p class="source-path">Source: <code>GAP_REGISTER.md</code></p>

## At a glance

| Category | Count |
|---|---|
| Open (incl. MY undecided notes) | ${counts.open} |
| Proposed resolution / ADR under review | ${counts.proposed} |
| Evidence completed / awaiting review (not closed) | ${counts.evidenceAwaiting} |
| Other active statuses | ${counts.other} |
| Closed Core design conflicts | ${counts.closedCore} |

## Status key

| Portal reading | Meaning |
|---|---|
| Open | Still needs research or a decision |
| Proposed resolution via ADR (UNDER REVIEW) | A draft ADR addresses the question; gap is **not closed** until that ADR is APPROVED |
| Evidence completed / awaiting review | Supporting evidence lodged; gap remains **not closed** pending human ADR review |
| Closed (Core conflicts) | Historical Core design conflicts closed by APPROVED ADRs only |

## Active gaps

| GAP | Question | Status | Related ADR | Area |
| --- | -------- | ------ | ----------- | ---- |
${rows}

## Closed (Core design conflicts only)

| Item | Closed by | Notes |
| --- | --- | --- |
${closedRows}

Malaysia implementation gaps are **not** closed by Core ratification.

## Full source document

The authoritative register with actions and priorities:

${rewriteRepoLinks(read('GAP_REGISTER.md')).replace(/^# Gap Register\n+/, '')}
`

  write(path.join(GEN_DIR, 'gaps.md'), content)
}

function buildWorkstreams(adrs) {
  const byId = Object.fromEntries(adrs.map((a) => [a.id, a]))
  const approved = ['ADR-0001', 'ADR-0002', 'ADR-0003'].every((id) => byId[id]?.status === 'APPROVED')

  return [
    {
      id: 'foundation',
      name: 'Foundation',
      status: 'APPROVED (partial)',
      detail: 'FND-003 Concept Constitution APPROVED v1.0.0. Other foundation files remain DRAFT skeletons.',
      evidence: 'MASTER_INDEX §B; FND-003',
      href: '/foundation/'
    },
    {
      id: 'core',
      name: 'Core Architecture',
      status: approved ? 'APPROVED' : 'UNDER REVIEW',
      detail: 'Core Architecture Phase 1 substantially complete: 15 decision ADRs approved (ADR-0001–0007 / 0011 / 0014–0020). Founding dual-layer, Lab-First, recognition layer, learning-time, campus, missions, faculty, Creator Rights and PoC Core decisions APPROVED. Remaining work is operating standards, country/legal, pilot evidence, templates, software and business model — not further UNDER REVIEW Core ADRs.',
      evidence: 'ADR-0001–0007; ADR-0011; ADR-0014–0020; FND-003; GAP closed Core design conflicts',
      href: '/decisions/'
    },
    {
      id: 'student-dev',
      name: 'Student Development',
      status: 'APPROVED',
      detail: 'ADR-0004–0006 APPROVED: stage architecture, typical windows + readiness, Exploration Floor as protected dimensions, pathway bridging. GAP-003/004/019/020/021 Closed. Fine Major/Minor catalogues deferred.',
      evidence: 'ADR-0004, ADR-0005, ADR-0006',
      href: '/decisions/adr-0004'
    },
    {
      id: 'six-worlds',
      name: 'Six Worlds & Pathways',
      status: 'APPROVED',
      detail: 'ADR-0011 APPROVED (GAP-008 Closed). ADR-0017 Discover meaningful-exposure package APPROVED (GAP-045 Closed). ADR-0018 Discover→Choose pathway preparation APPROVED (GAP-046 Closed). Graph schema remains GAP-009; Mission tagging GAP-047 Open. docs/03 still a shell for detailed briefs.',
      evidence: 'ADR-0011; ADR-0017; ADR-0018; GAP-008; GAP-045–047; docs/03 SECTION_README',
      href: '/areas/six-worlds'
    },
    {
      id: 'missions',
      name: 'Missions & Production',
      status: 'APPROVED',
      detail: 'ADR-0007 APPROVED (GAP-018 Closed): Mission Ecosystem; authenticity A–F; Education-First; Educationalisation; lifecycle; Institution-in-Residence. ADR-0014 APPROVED (GAP-025 Closed): Creator Rights / no automatic IP transfer. MIS-003 APPROVED (GAP-024 Closed): Mission risk R0–R4 / stop-work / safeguarding operating method. MIS-001 / MIS-002 remain DRAFT (GAP-022–023 not closed). MIS-TPL-001 / MIS-FRM-* DRAFT (GAP-031 not closed). GAP-011 / 026–030 remain open.',
      evidence: 'ADR-0002; ADR-0007; ADR-0014; MIS-001; MIS-002; MIS-003; MIS-TPL-001; docs/06; GAP-018; GAP-022–025; GAP-011; GAP-026–031',
      href: '/areas/missions'
    },
    {
      id: 'competency',
      name: 'Competency Architecture',
      status: 'OPEN',
      detail: 'Competency Graph schema still open (GAP-009). Distinct from Proof of Capability evidence architecture in ADR-0016.',
      evidence: 'GAP-009; ADR-0016; docs/05 SECTION_README',
      href: '/areas/competency-assessment'
    },
    {
      id: 'assessment',
      name: 'Assessment / Proof of Capability',
      status: 'APPROVED',
      detail: 'Parallel capability layer APPROVED (ADR-0003). ADR-0016 APPROVED defines Proof of Capability architecture (GAP-010 Closed). POC-001 / POC-FRM-* DRAFT propose GAP-038–044 ops — not closed; GAP-043 research Open. GAP-009 Open.',
      evidence: 'ADR-0003; ADR-0016; POC-001; GAP-010; GAP-038–044',
      href: '/areas/competency-assessment'
    },
    {
      id: 'recognition',
      name: 'Formal Recognition',
      status: 'APPROVED',
      detail: 'Recognition safety layer architecture APPROVED (ADR-0003). Learning-time coexistence / anti-exam-crowding constraints APPROVED (ADR-0019; GAP-016 Closed). Country exam mapping remains open (GAP-002).',
      evidence: 'ADR-0003; ADR-0019; GAP-002; GAP-016',
      href: '/areas/formal-recognition'
    },
    {
      id: 'journey',
      name: 'Student Journey',
      status: 'APPROVED',
      detail: 'Stage architecture APPROVED in ADR-0004–0006. Discover exposure APPROVED in ADR-0017. Discover→Choose pathway preparation APPROVED in ADR-0018. Learning-time stage postures APPROVED in ADR-0019 (GAP-016 Closed; GAP-048 Open). Dedicated journey specification chapter not yet written.',
      evidence: 'ADR-0004–0006; ADR-0017; ADR-0018; ADR-0019; docs/02 SECTION_README',
      href: '/areas/student-journey'
    },
    {
      id: 'operating',
      name: 'School Operating Model',
      status: 'APPROVED',
      detail: 'ADR-0015 APPROVED: Educator + Practitioner + Mentor peer faculty functions; professional learning teams; scoped Practitioner authorisation; Mentor longitudinal capacity; Mission capacity coupling. PEO-001–005 remain DRAFT (GAP-032–036 not closed). MY-002 DRAFT (GAP-037 not closed). ADR-0014 Creator Rights APPROVED (GAP-025 Closed).',
      evidence: 'ADR-0015; ADR-0014; PEO-001–PEO-005; MY-002; docs/08 SECTION_README; GAP-032–037; GAP-025',
      href: '/areas/people-and-culture'
    },
    {
      id: 'safety',
      name: 'Safeguarding / Governance',
      status: 'STATUS NOT YET FORMALISED',
      detail: 'Required by Core principles; ADR-0015 states safeguarding/vetting principles without country law invention. No dedicated approved safeguarding architecture document yet.',
      evidence: 'FND-003 principle 10; ADR-0015; docs/08 SEC-08',
      href: '/areas/governance'
    },
    {
      id: 'tech',
      name: 'Technology Architecture',
      status: 'STATUS NOT YET FORMALISED',
      detail: 'No Core technology architecture ADR. Sovereign DC is not a Core mandate (ADR-0001). MY data still GAP-006.',
      evidence: 'ADR-0001; GAP-006',
      href: '/areas/technology'
    },
    {
      id: 'country',
      name: 'Country Profiles',
      status: 'PLANNED',
      detail: 'Profile boundary exists; no second-country profile drafted.',
      evidence: 'ADR-0001; docs/10 SECTION_README',
      href: '/country/'
    },
    {
      id: 'malaysia',
      name: 'Malaysia Profile',
      status: 'IN PROGRESS',
      detail: 'MY-003 Country Path DRAFT maps Act 550 / MOE IPS / GP A3 options (GAP-001/002/007 Partial — category not selected). MY-002 people mapping DRAFT (GAP-037 proposed — not closed). Residential/data gaps remain Open. No MOE approval claimed.',
      evidence: 'MY-001; MY-002 DRAFT; MY-003 DRAFT; GAP-001/002/005/006/007/014/037',
      href: '/country/malaysia'
    },
    {
      id: 'campus',
      name: 'Physical Campus',
      status: 'APPROVED',
      detail: 'ADR-0020 Campus & Facilities Functional Architecture APPROVED (GAP-049 Closed). CAM-001 overview DRAFT. GAP-050 Open for numeric inventories. No m²/costs invented.',
      evidence: 'ADR-0020; CAM-001; GAP-049 Closed; GAP-050; docs/09 SECTION_README',
      href: '/areas/campus'
    },
    {
      id: 'implementation',
      name: 'Implementation Blueprint',
      status: 'DRAFT',
      detail: 'IMP-001 DRAFT working commissioning baseline (GAP-051 proposed — not closed). Capabilities ≠ facilities; Hard Blockers cannot be waived; Dry Run before Go. No invented enrolments, ratios, m², fees, launch dates or Malaysian pilot approval claims.',
      evidence: 'IMP-001; IMP-FRM-001; GAP-051; docs/11 SECTION_README; MASTER_INDEX §H',
      href: '/areas/implementation'
    }
  ]
}

function writeDataFiles(adrs, gaps, workstreams) {
  ensureDir(DATA_DIR)
  write(
    path.join(DATA_DIR, 'portal-data.json'),
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        adrs,
        gaps: gaps.gaps,
        closedGaps: gaps.closed,
        workstreams,
        proposedAdrs: [
          { id: 'ADR-0008', title: 'Residential/boarding model is country/project decision', status: 'PROPOSED' },
          { id: 'ADR-0009', title: 'Data-sovereignty architecture is country/project decision', status: 'PROPOSED' },
          { id: 'ADR-0010', title: 'Designate canonical Malaysia Concept Note file', status: 'PROPOSED' },
          { id: 'ADR-0012', title: 'Oman materials as reference only (no auto-import)', status: 'PROPOSED' },
          { id: 'ADR-0013', title: 'Claims + Evidence registers for uniqueness/approval language', status: 'PROPOSED' }
        ]
      },
      null,
      2
    )
  )

  const sidebarAdrs = adrs.map((a) => ({
    text: `${a.id}`,
    link: `/decisions/${a.slug}`,
    status: a.status
  }))
  write(path.join(DATA_DIR, 'adr-nav.json'), JSON.stringify(sidebarAdrs, null, 2))
}

function generateAdrIndex(adrs) {
  const rows = adrs
    .map(
      (a) =>
        `| [${a.id}](/decisions/${a.slug}) | ${a.title} | ${statusBadge(a.status)} | ${a.version} | ${a.scope} |`
    )
    .join('\n')

  const content = `---
title: Architecture Decision Records
description: ADR index derived from repository ADR files and ADR_INDEX.md
---

${noticeBlock()}

# Architecture Decision Records

Status is taken from each ADR’s metadata table and from \`docs/13-decisions/ADR_INDEX.md\`.

<p class="source-path">Sources: <code>docs/13-decisions/ADR_INDEX.md</code> · ADR body files under <code>docs/13-decisions/adr/</code></p>

## ADR index

| ADR | Title | Status | Version | Scope |
| --- | ----- | ------ | ------- | ----- |
${rows}

## Proposed ADRs (not yet drafted as body files)

From \`ADR_INDEX.md\` — reserved / proposed IDs only. **No body files exist; these are not clickable routes.**

| ADR | Title | Status |
|---|---|---|
| ADR-0008 | Residential/boarding model is country/project decision | PROPOSED |
| ADR-0009 | Data-sovereignty architecture is country/project decision | PROPOSED |
| ADR-0010 | Designate canonical Malaysia Concept Note file | PROPOSED |
| ADR-0012 | Oman materials as reference only (no auto-import) | PROPOSED |
| ADR-0013 | Claims + Evidence registers for uniqueness/approval language | PROPOSED |

## Full ADR index source

${rewriteRepoLinks(read('docs/13-decisions/ADR_INDEX.md')).replace(/^# ADR Index\n+/, '')}
`

  write(path.join(GEN_DIR, 'decisions', 'index.md'), content)
}

// --- run ---
ensureDir(GEN_DIR)
ensureDir(DATA_DIR)

const adrs = listAdrFiles()
setAdrBodySlugs(adrs)
const gaps = parseGaps()
const workstreams = buildWorkstreams(adrs)

generateAdrPages(adrs)
generateAdrIndex(adrs)
generateGapsPage(gaps)
writeDataFiles(adrs, gaps, workstreams)

const includes = [
  { outRel: 'master-index.md', title: 'Master Index', sourceRel: 'MASTER_INDEX.md' },
  { outRel: 'changelog.md', title: 'Changelog', sourceRel: 'CHANGELOG.md' },
  { outRel: 'project-rules.md', title: 'Project Rules', sourceRel: 'PROJECT_RULES.md' },
  {
    outRel: 'foundation/concept-constitution.md',
    title: 'Concept Constitution',
    sourceRel: 'docs/00-foundation/CONCEPT_CONSTITUTION.md'
  },
  {
    outRel: 'foundation/project-charter.md',
    title: 'Project Charter',
    sourceRel: 'docs/00-foundation/PROJECT_CHARTER.md'
  },
  {
    outRel: 'foundation/vision-mission-objectives.md',
    title: 'Vision, Mission & Objectives',
    sourceRel: 'docs/00-foundation/VISION_MISSION_OBJECTIVES.md'
  },
  {
    outRel: 'foundation/core-differentiators.md',
    title: 'Core Differentiators',
    sourceRel: 'docs/00-foundation/CORE_DIFFERENTIATORS.md'
  },
  {
    outRel: 'foundation/design-principles.md',
    title: 'Design Principles',
    sourceRel: 'docs/00-foundation/DESIGN_PRINCIPLES.md'
  },
  {
    outRel: 'foundation/glossary.md',
    title: 'Glossary',
    sourceRel: 'docs/00-foundation/GLOSSARY.md'
  },
  {
    outRel: 'foundation/section-readme.md',
    title: 'Foundation section guide',
    sourceRel: 'docs/00-foundation/SECTION_README.md'
  },
  {
    outRel: 'evidence/superseded-concepts.md',
    title: 'Superseded Concepts',
    sourceRel: 'docs/12-evidence/SUPERSEDED_CONCEPTS.md'
  },
  {
    outRel: 'evidence/claims-register.md',
    title: 'Claims Register',
    sourceRel: 'docs/12-evidence/CLAIMS_REGISTER.md'
  },
  {
    outRel: 'evidence/evidence-register.md',
    title: 'Evidence Register',
    sourceRel: 'docs/12-evidence/EVIDENCE_REGISTER.md'
  },
  {
    outRel: 'evidence/research-gaps.md',
    title: 'Research Gaps',
    sourceRel: 'docs/12-evidence/RESEARCH_GAPS.md'
  },
  {
    outRel: 'evidence/ev-0001-developmental-stage-boundaries.md',
    title: 'EV-0001 Developmental Stage Boundaries Evidence Pack',
    sourceRel: 'docs/12-evidence/EV-0001-developmental-stage-boundaries.md'
  },
  {
    outRel: 'country/malaysia-profile.md',
    title: 'Malaysia Implementation Profile',
    sourceRel: 'docs/10-malaysia/MALAYSIA_IMPLEMENTATION_PROFILE.md'
  },
  {
    outRel: 'country/malaysia-section.md',
    title: 'Malaysia section guide',
    sourceRel: 'docs/10-malaysia/SECTION_README.md'
  },
  {
    outRel: 'country/malaysia-regulated-people.md',
    title: 'Malaysia Regulated People / Faculty Role Mapping (MY-002)',
    sourceRel: 'docs/10-malaysia/MALAYSIA_REGULATED_PEOPLE_ROLE_MAPPING.md',
    description:
      'MY-002 DRAFT — proposed regulatory mapping for GAP-037 (not closed). Not legal advice; does not approve ADR-0015 or PEO-001–005.'
  },
  {
    outRel: 'country/malaysia-school-path.md',
    title: 'Malaysia School Establishment, Recognition & Governance Path (MY-003)',
    sourceRel: 'docs/10-malaysia/MALAYSIA_SCHOOL_ESTABLISHMENT_RECOGNITION_AND_GOVERNANCE_PATH.md',
    description:
      'MY-003 DRAFT — Country Path research for GAP-001 / 002 / 007 (Partial, not closed). Option matrix only; no preferred path; not MOE approval or legal advice.'
  },
  {
    outRel: 'areas/mission-partner-governance.md',
    title: 'Mission Partner Governance (MIS-001)',
    sourceRel: 'docs/06-missions-and-production/MISSION_PARTNER_GOVERNANCE.md',
    description:
      'MIS-001 DRAFT — proposed operational resolution of GAP-022 (not closed). ADR-0007 / ADR-0014 / ADR-0015 APPROVED; MIS-003 APPROVED.'
  },
  {
    outRel: 'areas/institution-in-residence.md',
    title: 'Institution / Industry-in-Residence (MIS-002)',
    sourceRel: 'docs/06-missions-and-production/INSTITUTION_IN_RESIDENCE.md',
    description:
      'MIS-002 DRAFT — proposed operational resolution of GAP-023 (not closed). Inherits MIS-001. ADR-0007 / ADR-0014 / ADR-0015 APPROVED; MIS-003 APPROVED.'
  },
  {
    outRel: 'areas/mission-risk-and-safeguarding.md',
    title: 'Mission Risk and Safeguarding (MIS-003)',
    sourceRel: 'docs/06-missions-and-production/MISSION_RISK_AND_SAFEGUARDING.md',
    description:
      'MIS-003 APPROVED — Core Mission risk / safeguarding / stop-work operating standard (GAP-024 Closed). Country overlays remain; templates remain DRAFT (GAP-031).'
  },
  {
    outRel: 'areas/mission-operating-templates.md',
    title: 'Mission Operating Templates (MIS-TPL-001)',
    sourceRel: 'docs/06-missions-and-production/MISSION_OPERATING_TEMPLATES.md',
    description:
      'MIS-TPL-001 DRAFT — proposed resolution of GAP-031 (not closed). Minimum viable partner / risk / I-in-R / Creator Rights / stop-work records. MIS-003 APPROVED; templates remain DRAFT.'
  },
  {
    outRel: 'areas/mis-frm-001.md',
    title: 'MIS-FRM-001 Unified Mission Partner Pack',
    sourceRel: 'docs/06-missions-and-production/templates/MIS-FRM-001-unified-mission-partner-pack.md',
    description: 'DRAFT operational educational record — not a legal contract.'
  },
  {
    outRel: 'areas/mis-frm-002.md',
    title: 'MIS-FRM-002 Practitioner Onboarding Acknowledgement',
    sourceRel: 'docs/06-missions-and-production/templates/MIS-FRM-002-practitioner-onboarding-acknowledgement.md',
    description: 'DRAFT operational educational record — does not replace country vetting.'
  },
  {
    outRel: 'areas/mis-frm-003.md',
    title: 'MIS-FRM-003 Expanded Mission Risk Record',
    sourceRel: 'docs/06-missions-and-production/templates/MIS-FRM-003-expanded-mission-risk-record.md',
    description: 'DRAFT conditional elevated-risk record aligning with MIS-003.'
  },
  {
    outRel: 'areas/mis-frm-004.md',
    title: 'MIS-FRM-004 I-in-R Designation Record',
    sourceRel: 'docs/06-missions-and-production/templates/MIS-FRM-004-iinr-designation-record.md',
    description: 'DRAFT conditional Institution / Industry-in-Residence designation record.'
  },
  {
    outRel: 'areas/mis-frm-005.md',
    title: 'MIS-FRM-005 Conditional Annex Pack',
    sourceRel: 'docs/06-missions-and-production/templates/MIS-FRM-005-conditional-annexes.md',
    description: 'DRAFT conditional IP / Data / Contribution / Conflict annexes.'
  },
  {
    outRel: 'areas/mis-frm-006.md',
    title: 'MIS-FRM-006 Escalation Records',
    sourceRel: 'docs/06-missions-and-production/templates/MIS-FRM-006-deployment-and-exit.md',
    description: 'DRAFT conditional Deployment Review and Suspension / Exit records.'
  },
  {
    outRel: 'areas/mis-frm-007.md',
    title: 'MIS-FRM-007 Practitioner Authorisation Record',
    sourceRel: 'docs/06-missions-and-production/templates/MIS-FRM-007-practitioner-authorisation-record.md',
    description: 'DRAFT scoped practitioner authorisation record implementing PEO-001 / GAP-033.'
  },
  {
    outRel: 'areas/practitioner-authorisation.md',
    title: 'Practitioner Authorisation and Onboarding (PEO-001)',
    sourceRel: 'docs/08-people-and-governance/PRACTITIONER_AUTHORISATION_AND_ONBOARDING.md',
    description:
      'PEO-001 DRAFT — proposed operational resolution of GAP-033 (not closed). Professional title ≠ Tarbiyat authorisation. ADR-0015 APPROVED; this PEO remains DRAFT / gap not closed.'
  },
  {
    outRel: 'areas/practitioner-currency.md',
    title: 'Practitioner Currency and Re-authorisation (PEO-002)',
    sourceRel: 'docs/08-people-and-governance/PRACTITIONER_CURRENCY_AND_REAUTHORISATION.md',
    description:
      'PEO-002 DRAFT — proposed operational resolution of GAP-035 (not closed). Authorised once ≠ authorised forever. ADR-0015 APPROVED; this PEO remains DRAFT / gap not closed.'
  },
  {
    outRel: 'areas/mis-frm-008.md',
    title: 'MIS-FRM-008 Practitioner Currency Review',
    sourceRel: 'docs/06-missions-and-production/templates/MIS-FRM-008-practitioner-currency-review.md',
    description: 'DRAFT currency / re-authorisation review record implementing PEO-002 / GAP-035.'
  },
  {
    outRel: 'areas/faculty-practitioner-development.md',
    title: 'Faculty and Practitioner Development (PEO-003)',
    sourceRel: 'docs/08-people-and-governance/FACULTY_AND_PRACTITIONER_DEVELOPMENT.md',
    description:
      'PEO-003 DRAFT — proposed operational resolution of GAP-036 (not closed). Development ≠ authorisation ≠ currency. ADR-0015 APPROVED; this PEO remains DRAFT / gap not closed.'
  },
  {
    outRel: 'areas/peo-frm-001.md',
    title: 'PEO-FRM-001 Faculty / Practitioner Development Plan',
    sourceRel: 'docs/08-people-and-governance/templates/PEO-FRM-001-faculty-practitioner-development-plan.md',
    description: 'DRAFT lightweight development plan/record implementing PEO-003 / GAP-036 — not a MIS form.'
  },
  {
    outRel: 'areas/mission-team-capacity.md',
    title: 'Mission Team Loading and Staffing Capacity (PEO-004)',
    sourceRel: 'docs/08-people-and-governance/MISSION_TEAM_LOADING_AND_STAFFING_CAPACITY.md',
    description:
      'PEO-004 DRAFT — proposed operational resolution of GAP-032 (not closed). Staff count ≠ Mission capacity. ADR-0015 APPROVED; this PEO remains DRAFT / gap not closed.'
  },
  {
    outRel: 'areas/peo-frm-002.md',
    title: 'PEO-FRM-002 Mission Team Capacity Check',
    sourceRel: 'docs/08-people-and-governance/templates/PEO-FRM-002-mission-team-capacity-check.md',
    description: 'DRAFT Mission capacity check implementing PEO-004 / GAP-032 — not a statutory staffing return.'
  },
  {
    outRel: 'areas/mentor-caseload-capacity.md',
    title: 'Mentor Caseload and Human-Guidance Capacity (PEO-005)',
    sourceRel: 'docs/08-people-and-governance/MENTOR_CASELOAD_AND_HUMAN_GUIDANCE_CAPACITY.md',
    description:
      'PEO-005 DRAFT — proposed operational resolution of GAP-034 (not closed). Assigned learners ≠ meaningfully mentored. ADR-0015 APPROVED; this PEO remains DRAFT / gap not closed.'
  },
  {
    outRel: 'areas/peo-frm-003.md',
    title: 'PEO-FRM-003 Mentor Caseload Review',
    sourceRel: 'docs/08-people-and-governance/templates/PEO-FRM-003-mentor-caseload-review.md',
    description: 'DRAFT Mentor caseload review implementing PEO-005 / GAP-034 — not a clinical learner file.'
  },
  {
    outRel: 'areas/learning-time-architecture.md',
    title: 'Learning-Time Architecture (LAR-001)',
    sourceRel: 'docs/01-learning-architecture/LEARNING_TIME_ARCHITECTURE.md',
    description:
      'LAR-001 DRAFT overview — governing decision ADR-0019 APPROVED. GAP-016 Closed. GAP-048 Open for exemplars / pilot ranges. No Core hours or percentages.'
  },
  {
    outRel: 'areas/campus-facilities.md',
    title: 'Campus and Facilities Functional Architecture (CAM-001)',
    sourceRel: 'docs/09-campus-blueprint/CAMPUS_AND_FACILITIES_FUNCTIONAL_ARCHITECTURE.md',
    description:
      'CAM-001 DRAFT overview — governing decision ADR-0020 APPROVED. GAP-049 Closed. GAP-050 Open. No m², room counts or costs.'
  },
  {
    outRel: 'areas/poc-operating-standard.md',
    title: 'Proof of Capability Operating Standard (POC-001)',
    sourceRel: 'docs/05-assessment/PROOF_OF_CAPABILITY_OPERATING_STANDARD.md',
    description:
      'POC-001 DRAFT — proposed operational resolution of GAP-038–042 / 044 (not closed). GAP-043 Open. ADR-0016 APPROVED / GAP-010 Closed.'
  },
  {
    outRel: 'areas/poc-operating-templates.md',
    title: 'PoC Operating Templates (POC-TPL-001)',
    sourceRel: 'docs/05-assessment/POC_OPERATING_TEMPLATES.md',
    description: 'DRAFT PoC forms index — POC-FRM-001–005. Not credentials or software schemas.'
  },
  {
    outRel: 'areas/poc-frm-001.md',
    title: 'POC-FRM-001 Capability Claim Record',
    sourceRel: 'docs/05-assessment/templates/POC-FRM-001-capability-claim-record.md',
    description: 'DRAFT Capability Claim Record (evidence + provenance) implementing POC-001.'
  },
  {
    outRel: 'areas/poc-frm-002.md',
    title: 'POC-FRM-002 Contribution Record',
    sourceRel: 'docs/05-assessment/templates/POC-FRM-002-contribution-record.md',
    description: 'DRAFT PoC Contribution Record — not legal IP ownership.'
  },
  {
    outRel: 'areas/poc-frm-003.md',
    title: 'POC-FRM-003 Verification Record',
    sourceRel: 'docs/05-assessment/templates/POC-FRM-003-verification-record.md',
    description: 'DRAFT Verification Record implementing POC-001 / GAP-038.'
  },
  {
    outRel: 'areas/poc-frm-004.md',
    title: 'POC-FRM-004 Capability Defence Record',
    sourceRel: 'docs/05-assessment/templates/POC-FRM-004-capability-defence-record.md',
    description: 'DRAFT conditional Capability Defence Record — not an exam.'
  },
  {
    outRel: 'areas/poc-frm-005.md',
    title: 'POC-FRM-005 Claim Challenge / Correction',
    sourceRel: 'docs/05-assessment/templates/POC-FRM-005-claim-challenge-correction-record.md',
    description: 'DRAFT challenge/correction record implementing POC-001 / GAP-039.'
  },
  {
    outRel: 'areas/pilot-commissioning.md',
    title: 'Pilot Commissioning and Readiness Architecture (IMP-001)',
    sourceRel: 'docs/11-implementation/PILOT_COMMISSIONING_AND_READINESS_ARCHITECTURE.md',
    description:
      'IMP-001 DRAFT working commissioning baseline — proposed GAP-051 (not closed). Capabilities ≠ facilities; Hard Blockers cannot be waived. No invented enrolments, ratios, m², fees, launch dates or Malaysian pilot approval claims.'
  },
  {
    outRel: 'areas/imp-frm-001.md',
    title: 'IMP-FRM-001 Pilot Readiness Record',
    sourceRel: 'docs/11-implementation/templates/IMP-FRM-001-pilot-readiness-record.md',
    description: 'DRAFT Pilot Readiness Record implementing IMP-001 / GAP-051 — not a launch approval by itself.'
  }
]

for (const item of includes) generateIncludePage(item)

console.log(`Prepared portal content: ${adrs.length} ADRs, ${gaps.gaps.length} active gaps.`)
