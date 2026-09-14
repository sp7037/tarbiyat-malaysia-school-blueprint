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
    .replace(/\b(ADR-(\d{4}))\b/g, '<a href="/decisions/adr-$2">$1</a>')
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
    [/docs\/10-malaysia\/MALAYSIA_IMPLEMENTATION_PROFILE\.md/g, '/country/malaysia'],
    [/docs\/10-malaysia\/SECTION_README\.md/g, '/country/']
  ]
  for (const [re, to] of map) out = out.replace(re, to)

  out = out.replace(
    /(?:\.\.\/)*docs\/13-decisions\/adr\/(ADR-\d+)[^)\s]*\.md/gi,
    (_m, id) => `/decisions/${String(id).toLowerCase()}`
  )

  // Link bare ADR / GAP refs outside existing markdown links
  out = out.replace(/(?<!\(|\/|\[)(ADR-(\d{4}))(?![\]\w/-])/g, '[$1](/decisions/adr-$2)')
  out = out.replace(/(?<!\(|\/|\[|#)(GAP-(\d{3}))(?![\]\w/-])/g, '[$1](/gaps#gap-$2)')

  return restore(out)
}

function statusClass(status) {
  const s = (status || '').toUpperCase()
  if (s.includes('APPROVED')) return 'approved'
  if (s.includes('UNDER REVIEW')) return 'under-review'
  if (s.includes('IN PROGRESS') || s.includes('DRAFT')) return 'in-progress'
  if (s.includes('PROPOSED') || s.includes('PLANNED')) return 'planned'
  if (s.includes('OPEN')) return 'open'
  if (s.includes('DEFERRED') || s.includes('SUPERSEDED') || s.includes('REJECTED')) return 'deferred'
  if (s.includes('CLOSED') || s.includes('RESOLVED') || s.includes('ADDRESSED')) return 'resolved'
  return 'unknown'
}

function statusBadge(status) {
  const cls = statusClass(status)
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
  const s = status.toLowerCase()
  if (s.includes('proposed resolution') || s.includes('under review')) return 'proposed-resolution'
  if (s.includes('under research')) return 'under-research'
  if (s.startsWith('open')) return 'open'
  if (s.includes('deferred')) return 'deferred'
  if (s.includes('closed') || s.includes('resolved')) return 'resolved'
  if (s.includes('addressed')) return 'addressed'
  return 'open'
}

function generateGapsPage(gapData) {
  const rows = gapData.gaps
    .map((g) => {
      const anchor = g.id.toLowerCase()
      const adrLink =
        g.relatedAdr && g.relatedAdr !== '—'
          ? `[${g.relatedAdr}](/decisions/${g.relatedAdr.toLowerCase()})`
          : '—'
      return `| <a id="${anchor}"></a>[${g.id}](#${anchor}) | ${g.topic} | ${statusBadge(g.status)} | ${adrLink} | ${g.area} |`
    })
    .join('\n')

  const closedRows = gapData.closed
    .map((c) => `| ${c.item} | ${c.closedBy} | ${c.notes} |`)
    .join('\n')

  const counts = {
    open: gapData.gaps.filter((g) => g.statusClass === 'open').length,
    proposed: gapData.gaps.filter((g) => g.statusClass === 'proposed-resolution').length,
    other: gapData.gaps.filter((g) => !['open', 'proposed-resolution'].includes(g.statusClass)).length,
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
| Other active statuses | ${counts.other} |
| Closed Core design conflicts | ${counts.closedCore} |

## Status key

| Portal reading | Meaning |
|---|---|
| Open | Still needs research or a decision |
| Proposed resolution via ADR (UNDER REVIEW) | A draft ADR addresses the question; gap is **not closed** until that ADR is APPROVED |
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
      detail: 'Founding dual-layer, Lab-First, and recognition-layer decisions APPROVED via FND-003 + ADR-0001–0003.',
      evidence: 'ADR-0001, ADR-0002, ADR-0003',
      href: '/decisions/'
    },
    {
      id: 'student-dev',
      name: 'Student Development',
      status: 'UNDER REVIEW',
      detail: 'ADR-0004 and ADR-0005 drafted; not APPROVED.',
      evidence: 'ADR-0004, ADR-0005',
      href: '/decisions/adr-0004'
    },
    {
      id: 'six-worlds',
      name: 'Six Worlds & Pathways',
      status: 'UNDER REVIEW',
      detail: 'ADR-0011 proposes Six Worlds capability frames and progressive depth (UNDER REVIEW). ADR-0017 proposes Discover meaningful-exposure package (UNDER REVIEW). ADR-0018 proposes Discover→Choose pathway preparation (UNDER REVIEW). GAP-008, GAP-045 and GAP-046 proposed resolution — not closed. Graph schema remains GAP-009. docs/03 still a shell for detailed briefs.',
      evidence: 'ADR-0011; ADR-0017; ADR-0018; GAP-008; GAP-045–047; docs/03 SECTION_README',
      href: '/areas/six-worlds'
    },
    {
      id: 'missions',
      name: 'Missions & Production',
      status: 'UNDER REVIEW',
      detail: 'ADR-0007 proposes Mission Ecosystem / authenticity A–F / Campus Live Workflow / Institution-in-Residence (UNDER REVIEW). ADR-0014 proposes Student Creator Rights (UNDER REVIEW). MIS-001 drafts Mission Partner Governance (GAP-022 proposed resolution — not closed). GAP-018 and GAP-025 proposed resolution — not closed. GAP-023 / GAP-024 remain open.',
      evidence: 'ADR-0002; ADR-0007; ADR-0014; MIS-001; docs/06; GAP-018; GAP-022–025',
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
      status: 'UNDER REVIEW',
      detail: 'Parallel capability layer APPROVED in principle (ADR-0003). ADR-0016 proposes Proof of Capability architecture (UNDER REVIEW). GAP-010 proposed resolution — not closed. Ops gaps GAP-038–044 open.',
      evidence: 'ADR-0003; ADR-0016; GAP-010; GAP-038–044',
      href: '/areas/competency-assessment'
    },
    {
      id: 'recognition',
      name: 'Formal Recognition',
      status: 'APPROVED',
      detail: 'Recognition safety layer architecture APPROVED (ADR-0003). Country exam mapping remains open (GAP-002).',
      evidence: 'ADR-0003; GAP-002',
      href: '/areas/formal-recognition'
    },
    {
      id: 'journey',
      name: 'Student Journey',
      status: 'UNDER REVIEW',
      detail: 'Stage architecture proposed in ADR-0004/0005. Discover exposure package proposed in ADR-0017. Discover→Choose pathway preparation proposed in ADR-0018 (UNDER REVIEW; GAP-046 not closed). Dedicated journey specification not yet written.',
      evidence: 'ADR-0004, ADR-0005; ADR-0017; ADR-0018; docs/02 SECTION_README',
      href: '/areas/student-journey'
    },
    {
      id: 'operating',
      name: 'School Operating Model',
      status: 'UNDER REVIEW',
      detail: 'ADR-0015 proposes Practitioner–Educator–Mentor faculty architecture and professional learning teams (UNDER REVIEW). Staffing ratios and country role mapping open (GAP-032–037). docs/08 still a shell for ops detail.',
      evidence: 'ADR-0015; docs/08 SECTION_README; GAP-032–037',
      href: '/areas/people-and-culture'
    },
    {
      id: 'safety',
      name: 'Safeguarding / Governance',
      status: 'STATUS NOT YET FORMALISED',
      detail: 'Required by Core principles; ADR-0015 states safeguarding/vetting principles without country law invention. No dedicated approved safeguarding architecture document yet.',
      evidence: 'FND-003 principle 10; ADR-0015; docs/08 shell',
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
      detail: 'Skeleton profile only — no invented regulations. Multiple MY gaps remain Open.',
      evidence: 'MY-001 DRAFT; GAP-001/002/005/006/007/014',
      href: '/country/malaysia'
    },
    {
      id: 'campus',
      name: 'Physical Campus',
      status: 'PLANNED',
      detail: 'Generic campus typology section is a DRAFT shell.',
      evidence: 'docs/09 SECTION_README',
      href: '/areas/campus'
    },
    {
      id: 'implementation',
      name: 'Implementation Blueprint',
      status: 'PLANNED',
      detail: 'Implementation section is a DRAFT shell. Detailed blueprint deferred until after foundation ratification (ongoing).',
      evidence: 'docs/11 SECTION_README; MASTER_INDEX §H',
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

From \`ADR_INDEX.md\` — listed for navigation awareness only:

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
    outRel: 'areas/mission-partner-governance.md',
    title: 'Mission Partner Governance (MIS-001)',
    sourceRel: 'docs/06-missions-and-production/MISSION_PARTNER_GOVERNANCE.md',
    description:
      'MIS-001 DRAFT — proposed operational resolution of GAP-022 (not closed). Governing ADRs 0007 / 0014 / 0015 remain UNDER REVIEW.'
  }
]

for (const item of includes) generateIncludePage(item)

console.log(`Prepared portal content: ${adrs.length} ADRs, ${gaps.gaps.length} active gaps.`)
