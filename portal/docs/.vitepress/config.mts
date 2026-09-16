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

const blueprintSidebar = [
  {
    text: 'Blueprint',
    items: [
      { text: 'Blueprint hub', link: '/blueprint/' },
      { text: 'Progress', link: '/progress' },
      { text: 'Architecture roadmap', link: '/roadmap' },
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
    collapsed: true,
    items: [
      { text: 'Student Journey', link: '/areas/student-journey' },
      { text: 'Six Worlds & Pathways', link: '/areas/six-worlds' },
      { text: 'Missions & Production', link: '/areas/missions' },
      { text: 'Learning-Time Architecture (LAR-001)', link: '/areas/learning-time-architecture' },
      { text: 'Mission Partner Governance (MIS-001)', link: '/areas/mission-partner-governance' },
      { text: 'Institution-in-Residence (MIS-002)', link: '/areas/institution-in-residence' },
      { text: 'Mission Risk / Safeguarding (MIS-003)', link: '/areas/mission-risk-and-safeguarding' },
      { text: 'Mission Operating Templates (DRAFT)', link: '/areas/mission-operating-templates' },
      { text: 'People & Culture', link: '/areas/people-and-culture' },
      { text: 'Practitioner Authorisation (PEO-001)', link: '/areas/practitioner-authorisation' },
      { text: 'Practitioner Currency (PEO-002)', link: '/areas/practitioner-currency' },
      { text: 'Faculty Development (PEO-003)', link: '/areas/faculty-practitioner-development' },
      { text: 'Mission Team Capacity (PEO-004)', link: '/areas/mission-team-capacity' },
      { text: 'Mentor Caseload Capacity (PEO-005)', link: '/areas/mentor-caseload-capacity' },
      { text: 'Competency & Assessment', link: '/areas/competency-assessment' },
      { text: 'POC-001 PoC operating standard', link: '/areas/poc-operating-standard' },
      { text: 'POC templates / forms', link: '/areas/poc-operating-templates' },
      { text: 'Formal Recognition', link: '/areas/formal-recognition' },
      { text: 'Governance / Safety', link: '/areas/governance' },
      { text: 'Technology', link: '/areas/technology' },
      { text: 'Physical Campus', link: '/areas/campus' },
      { text: 'CAM-001 facilities overview', link: '/areas/campus-facilities' },
      { text: 'Implementation', link: '/areas/implementation' },
      { text: 'IMP-001 pilot commissioning', link: '/areas/pilot-commissioning' },
      { text: 'IMP-FRM-001 readiness record', link: '/areas/imp-frm-001' }
    ]
  },
  {
    text: 'Country Profiles',
    collapsed: true,
    items: [
      { text: 'Overview', link: '/country/' },
      { text: 'Malaysia (profile)', link: '/country/malaysia' },
      { text: 'MY-003 Country Path', link: '/country/malaysia-school-path' },
      { text: 'MY-002 people mapping', link: '/country/malaysia-regulated-people' }
    ]
  },
  {
    text: 'Evidence & registers',
    collapsed: true,
    items: [
      { text: 'Master Index', link: '/master-index' },
      { text: 'Changelog', link: '/changelog' },
      { text: 'Project Rules', link: '/project-rules' },
      { text: 'Superseded Concepts', link: '/evidence/superseded-concepts' },
      { text: 'Claims Register', link: '/evidence/claims-register' },
      { text: 'Evidence Register', link: '/evidence/evidence-register' },
      { text: 'Research Gaps', link: '/evidence/research-gaps' },
      { text: 'EV-0001 Evidence Pack', link: '/evidence/ev-0001-developmental-stage-boundaries' }
    ]
  }
]

const presentationSidebar = [
  {
    text: 'The school',
    items: [
      { text: 'Home', link: '/' },
      { text: 'The School Model', link: '/model' },
      { text: 'Student Journey', link: '/student-journey' },
      { text: 'Six Worlds', link: '/six-worlds' },
      { text: 'Missions', link: '/missions' },
      { text: 'Proof of Capability', link: '/proof-of-capability' },
      { text: 'People & Learning', link: '/people-learning' },
      { text: 'Malaysia', link: '/malaysia' }
    ]
  },
  {
    text: 'Deeper record',
    items: [{ text: 'Blueprint', link: '/blueprint/' }]
  }
]

export default withMermaid(
  defineConfig({
    title: 'Tarbiyat',
    description:
      'Tarbiyat / World\'s New School — Lab-First, Mission-Based educational architecture and architecture Blueprint',
    lang: 'en-GB',
    cleanUrls: true,
    ignoreDeadLinks: [
      /^https?:\/\/localhost/,
      // Proposed ADRs without body files yet (0008–0010, 0012–0013)
      /\/decisions\/adr-000[89]/,
      /\/decisions\/adr-0010$/,
      /\/decisions\/adr-001[23]$/
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
        { text: 'The School Model', link: '/model' },
        { text: 'Student Journey', link: '/student-journey' },
        { text: 'Six Worlds', link: '/six-worlds' },
        { text: 'Missions', link: '/missions' },
        { text: 'Proof of Capability', link: '/proof-of-capability' },
        { text: 'People & Learning', link: '/people-learning' },
        { text: 'Malaysia', link: '/malaysia' },
        {
          text: 'Blueprint',
          items: [
            { text: 'Blueprint hub', link: '/blueprint/' },
            { text: 'Foundation', link: '/foundation/' },
            { text: 'Decisions / ADRs', link: '/decisions/' },
            { text: 'Gaps', link: '/gaps' },
            { text: 'Progress', link: '/progress' },
            { text: 'Roadmap', link: '/roadmap' },
            { text: 'Evidence', link: '/evidence/evidence-register' },
            { text: 'Master Index', link: '/master-index' },
            { text: 'Changelog', link: '/changelog' },
            { text: 'Project Rules', link: '/project-rules' }
          ]
        }
      ],
      sidebar: {
        '/blueprint': blueprintSidebar,
        '/foundation': blueprintSidebar,
        '/decisions': blueprintSidebar,
        '/areas': blueprintSidebar,
        '/country': blueprintSidebar,
        '/evidence': blueprintSidebar,
        '/progress': blueprintSidebar,
        '/roadmap': blueprintSidebar,
        '/gaps': blueprintSidebar,
        '/master-index': blueprintSidebar,
        '/changelog': blueprintSidebar,
        '/project-rules': blueprintSidebar,
        '/model': presentationSidebar,
        '/student-journey': presentationSidebar,
        '/six-worlds': presentationSidebar,
        '/missions': presentationSidebar,
        '/proof-of-capability': presentationSidebar,
        '/people-learning': presentationSidebar,
        '/malaysia': presentationSidebar,
        '/': presentationSidebar
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
          'Presentation summarises repository architecture. Source Markdown and approved decisions remain authoritative. UNDER REVIEW content is not final.',
        copyright: 'Tarbiyat / World\'s New School'
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
