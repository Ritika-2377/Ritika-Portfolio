import Button from '../components/Button.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import SkillGroup from '../components/SkillGroup.jsx'
import { achievements } from '../data/achievements.js'
import { certifications } from '../data/certifications.js'
import { education } from '../data/education.js'
import { getIntroduction, profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { skillSections } from '../data/skills.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function Home() {
  usePageTitle('Home')

  const skillPreview = skillSections.filter((s) =>
    ['programming', 'current-learning', 'ai-cloud', 'tools'].includes(s.id),
  )

  return (
    <>
      <section className="home-hero">
        <div>
          <p className="eyebrow">CSE · GENERATIVE AI · CHANDIGARH UNIVERSITY</p>
          <h1 className="home-title">Ritika <span>Garg</span></h1>
          <p className="home-role">{profile.headline}</p>
          <p className="home-description">
            {getIntroduction()}
          </p>
          <div className="home-meta" aria-label="Profile facts">
            <span className="meta-chip">B.E. · 2025–2029</span>
            <span className="meta-chip">First-year CGPA · {education.firstYearCgpa}</span>
            <span className="meta-chip">2 Microsoft Azure certifications</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/projects">View projects</Button>
            <Button to="/contact" variant="secondary">
              Contact me
            </Button>
            {profile.resume.available ? (
              <Button href={profile.resume.path} download={profile.resume.fileName} variant="ghost">
                Download resume
              </Button>
            ) : (
              <Button to="/resume" variant="ghost" title="Add resume PDF first">
                Resume (PDF pending)
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="content-section" aria-labelledby="quick-stats">
        <SectionHeading id="quick-stats" eyebrow="Highlights" title="Quick statistics" />
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="surface rounded-lg p-4">
            <dt className="text-xs text-muted">First-year CGPA</dt>
            <dd className="text-2xl font-semibold mt-1">{education.firstYearCgpa}</dd>
          </div>
          <div className="surface rounded-lg p-4">
            <dt className="text-xs text-muted">Class 12</dt>
            <dd className="text-2xl font-semibold mt-1">{education.class12Percentage}</dd>
          </div>
          <div className="surface rounded-lg p-4">
            <dt className="text-xs text-muted">Class 10</dt>
            <dd className="text-2xl font-semibold mt-1">{education.class10Percentage}</dd>
          </div>
          <div className="surface rounded-lg p-4 col-span-2 md:col-span-1">
            <dt className="text-xs text-muted">Leadership</dt>
            <dd className="text-sm font-medium mt-2 text-secondary">Class Representative since first semester</dd>
          </div>
        </dl>
      </section>

      <section className="content-section">
        <SectionHeading eyebrow="About" title="About preview" />
        <p className="text-secondary max-w-2xl leading-relaxed">{getIntroduction()}</p>
        <Button to="/about" variant="link" className="mt-4">
          Read full about page →
        </Button>
      </section>

      <section className="content-section" aria-labelledby="featured-projects">
        <SectionHeading
          id="featured-projects"
          eyebrow="Portfolio"
          title="Featured projects"
          description="Four academic and learning projects."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} compact />
          ))}
        </div>
      </section>

      <section className="content-section" aria-labelledby="skills-overview">
        <SectionHeading
          id="skills-overview"
          eyebrow="Skills"
          title="Skills preview"
          description="Honest labels — no fake percentage bars."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillPreview.map((section) => (
            <SkillGroup key={section.id} title={section.title} skills={section.skills} />
          ))}
        </div>
        <Button to="/skills" variant="link" className="mt-8">
          Explore full skills page →
        </Button>
      </section>

      <section className="content-section grid md:grid-cols-2 gap-10">
        <div>
          <SectionHeading eyebrow="Education" title="Education preview" />
          <ul className="space-y-3 text-secondary text-sm md:text-base">
            <li>
              <strong className="text-[var(--text-primary)]">Degree:</strong> {education.degree} · {education.session}
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">University:</strong> {education.institution}
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Specialization:</strong> {education.specialization}
            </li>
          </ul>
          <Button to="/education" variant="link" className="mt-4">
            Education timeline →
          </Button>
        </div>
        <div>
          <SectionHeading eyebrow="Certifications" title="Certifications preview" />
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.id} className="surface rounded-lg px-4 py-3 text-sm">
                <span className="font-medium text-[var(--text-primary)]">{c.name}</span>
              </li>
            ))}
          </ul>
          <Button to="/certifications" variant="link" className="mt-4">
            Certifications →
          </Button>
        </div>
      </section>

      <section className="content-section">
        <SectionHeading eyebrow="Leadership" title="Achievements preview" />
        <ul className="grid sm:grid-cols-2 gap-3">
          {achievements.slice(0, 4).map((a) => (
            <li key={a.id} className="surface rounded-lg px-4 py-3 text-sm">
              <span className="font-medium">{a.title}</span>
            </li>
          ))}
        </ul>
        <Button to="/achievements" variant="link" className="mt-4">
          All achievements →
        </Button>
      </section>

      <section className="content-section">
        <div className="surface rounded-[var(--radius-card)] p-8 md:p-10 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)]">Get in touch</h2>
          <p className="mt-3 text-secondary">
            Based in {profile.location}. Open to learning conversations about AI and software development.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href={`mailto:${profile.email}`}>Email me</Button>
            <Button to="/contact" variant="secondary">
              Contact page
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
