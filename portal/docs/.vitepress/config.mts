import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, 'data', 'adr-nav.json')

function loadAdrNav() {
  if (!fs.existsSync(dataPath)) return []
  try {
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'))
  } catch {
    return []
  }
}

const adrItems = loadAdrNav().map((a) => ({
  text: `${a.text}${a.status === 'APPROVED' ? '' : a.status === 'UNDER REVIEW' ? ' ◌' : ''}`,
  link: a.link
}))

export default withMermaid(
  defineConfig({
    title: 'Tarbiyat Architecture',
    description:
      'Human-readable documentation portal for the Tarbiyat / World\'s New School architecture repository',
    lang: 'en-GB',
    cleanUrls: true,
    ignoreDeadLinks: [
      /^https?:\/\/localhost/,
      // Proposed ADRs (0008–0013) have no body files yet
      /\/decisions\/adr-000[89]/,
      /\/decisions\/adr-001[0-3]/
    ],
    // Generated pages live under docs/_generated and are rewrites to clean URLs
    rewrites: {
      '_generated/:path*': ':path*'
    },
    head: [
      [
        'link',
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,650&family=Source+Sans+3:wght@400;500;600;700&display=swap'
        }
      ]
    ],
    themeConfig: {
      siteTitle: 'Tarbiyat',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Foundation', link: '/foundation/' },
        {
          text: 'Decisions',
          items: [
            { text: 'ADR Index', link: '/decisions/' },
            ...adrItems
          ]
        },
        { text: 'Progress', link: '/progress' },
        { text: 'Gaps', link: '/gaps' },
        {
          text: 'Repository',
          items: [
            { text: 'Master Index', link: '/master-index' },
            { text: 'Changelog', link: '/changelog' },
            { text: 'Project Rules', link: '/project-rules' }
          ]
        }
      ],
      sidebar: {
        '/': [
          {
            text: 'Portal',
            items: [
              { text: 'Home', link: '/' },
              { text: 'Architecture roadmap', link: '/roadmap' },
              { text: 'Project progress', link: '/progress' },
              { text: 'Gap register', link: '/gaps' }
            ]
          },
          {
            text: 'Foundation',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/foundation/' },
              { text: 'Concept Constitution', link: '/foundation/concept-constitution' },
              { text: 'Project Charter', link: '/foundation/project-charter' },
              { text: 'Vision & Mission', link: '/foundation/vision-mission-objectives' },
              { text: 'Core Differentiators', link: '/foundation/core-differentiators' },
              { text: 'Design Principles', link: '/foundation/design-principles' },
              { text: 'Glossary', link: '/foundation/glossary' }
            ]
          },
          {
            text: 'Architecture Decisions',
            collapsed: false,
            items: [{ text: 'ADR Index', link: '/decisions/' }, ...adrItems]
          },
          {
            text: 'Architecture areas',
            collapsed: false,
            items: [
              { text: 'Student Journey', link: '/areas/student-journey' },
              { text: 'Six Worlds & Pathways', link: '/areas/six-worlds' },
              { text: 'Missions & Production', link: '/areas/missions' },
              { text: 'People & Culture', link: '/areas/people-and-culture' },
              { text: 'Competency & Assessment', link: '/areas/competency-assessment' },
              { text: 'Formal Recognition', link: '/areas/formal-recognition' },
              { text: 'Governance / Safety', link: '/areas/governance' },
              { text: 'Technology', link: '/areas/technology' },
              { text: 'Physical Campus', link: '/areas/campus' },
              { text: 'Implementation', link: '/areas/implementation' }
            ]
          },
          {
            text: 'Country Profiles',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/country/' },
              { text: 'Malaysia', link: '/country/malaysia' }
            ]
          },
          {
            text: 'Evidence & registers',
            collapsed: true,
            items: [
              { text: 'Master Index', link: '/master-index' },
              { text: 'Changelog', link: '/changelog' },
              { text: 'Superseded Concepts', link: '/evidence/superseded-concepts' },
              { text: 'Claims Register', link: '/evidence/claims-register' },
              { text: 'Evidence Register', link: '/evidence/evidence-register' },
              { text: 'Research Gaps', link: '/evidence/research-gaps' },
              { text: 'EV-0001 Evidence Pack', link: '/evidence/ev-0001-developmental-stage-boundaries' }
            ]
          }
        ]
      },
      search: {
        provider: 'local'
      },
      outline: {
        level: [2, 3]
      },
      socialLinks: [],
      footer: {
        message:
          'Presentation layer only — Markdown repository remains authoritative. UNDER REVIEW content is not final.',
        copyright: 'Tarbiyat / World\'s New School architecture documentation'
      }
    },
    mermaid: {
      theme: 'neutral'
    },
    vite: {
      server: {
        fs: {
          allow: [path.resolve(__dirname, '../..'), path.resolve(__dirname, '..')]
        }
      }
    }
  })
)
