import Button from '../components/Button.jsx'
import CertificationCard from '../components/CertificationCard.jsx'
import PortalTile from '../components/PortalTile.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { achievements } from '../data/achievements.js'
import { certifications } from '../data/certifications.js'
import { education } from '../data/education.js'
import { getIntroduction, profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

const portalLinks = [
  { to: '/home', label: 'Portfolio home', description: 'Hero, stats, and section previews' },
  { to: '/about', label: 'About me', description: 'Background, goals, and interests' },
  { to: '/projects', label: 'Projects', description: 'Four learning projects with detail pages' },
  { to: '/coa', label: 'COA Learning Lab', description: 'Converters and CPU cycle tools' },
  { to: '/contact', label: 'Contact', description: 'Email, GitHub, and LinkedIn' },
]

export default function Welcome() {
  usePageTitle('Welcome')

  const featuredCerts = certifications.slice(0, 2)
  const featuredAchievements = achievements.slice(0, 4)

  return (
    <div className="pb-8">
      <section className="portal-hero">
        <div className="portal-copy">
          <p className="portal-kicker">CSE · Generative AI · Chandigarh University · Class of 2029</p>
          <h1 className="portal-title">Ritika <span>Garg</span></h1>
          <p className="portal-role">{profile.headline}</p>
          <p className="portal-description">{getIntroduction()}</p>
          <div className="portal-stats" aria-label="Academic highlights">
            <span className="portal-stat">✦ {education.firstYearCgpa} first-year CGPA</span>
            <span className="portal-stat">Microsoft Azure · AZ-900 + AI-900</span>
            <span className="portal-stat">B.E. · 2025–2029</span>
          </div>
          <div className="portal-actions">
            <Button to="/home">Launch full portfolio <span aria-hidden="true">→</span></Button>
            <Button to="/projects" variant="secondary">Explore projects</Button>
          </div>
        </div>
      </section>

      <section className="portal-section">
        <h2 className="text-2xl font-semibold">Academic background</h2>
        <p className="mt-2 text-secondary max-w-2xl">
          {education.degree} at {education.institution}. The program focuses on{' '}
          {education.specialization}. Session {education.session}.
        </p>
        <Button to="/education" variant="link" className="mt-4">
          Full education timeline →
        </Button>
      </section>

      <section className="portal-section">
        <h2 className="text-2xl font-semibold">Featured projects</h2>
        <p className="mt-2 text-secondary text-sm">Selected academic and learning projects.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} compact />
          ))}
        </div>
      </section>

      <section className="portal-section grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold">Certifications</h2>
          <div className="mt-6 space-y-4">
            {featuredCerts.map((c) => (
              <CertificationCard key={c.id} cert={c} />
            ))}
          </div>
          <Button to="/certifications" variant="link" className="mt-4">
            All certifications →
          </Button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Achievements</h2>
          <ul className="mt-6 space-y-3">
            {featuredAchievements.map((a) => (
              <li key={a.id} className="surface rounded-lg px-4 py-3 text-sm">
                <span className="font-medium">{a.title}</span>
                {a.description && <p className="text-secondary mt-1">{a.description}</p>}
              </li>
            ))}
          </ul>
          <Button to="/achievements" variant="link" className="mt-4">
            All achievements →
          </Button>
        </div>
      </section>

      <section className="portal-section">
        <h2 className="text-2xl font-semibold">Explore sections</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portalLinks.map((link) => (
            <PortalTile key={link.to} to={link.to} label={link.label} description={link.description} />
          ))}
        </div>
      </section>
    </div>
  )
}
