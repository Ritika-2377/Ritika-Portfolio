import { achievements } from '../data/achievements.js'
import { certifications } from '../data/certifications.js'
import { education } from '../data/education.js'
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { skillSections } from '../data/skills.js'

export default function ResumeContent() {
  const flatSkills = skillSections.flatMap((section) =>
    section.skills.map((skill) =>
      skill.context ? `${skill.name} (${skill.context})` : skill.name,
    ),
  )

  return (
    <article className="resume-print surface rounded-[var(--radius-card)] p-8 md:p-10 text-sm leading-relaxed max-w-3xl mx-auto print:shadow-none print:border-0">
      <header className="border-b border-[var(--border-subtle)] pb-6">
        <h1 className="text-2xl font-semibold">{profile.fullName}</h1>
        <p className="text-secondary mt-1">{profile.headline}</p>
        <p className="mt-3 text-secondary">
          {profile.location} ·{' '}
          <a href={`mailto:${profile.email}`} className="text-[var(--color-accent)]">
            {profile.email}
          </a>
          · {profile.phone}
        </p>
      </header>

      <section className="mt-6">
        <h2 className="text-base font-semibold uppercase tracking-wide text-muted">Career objective</h2>
        <p className="mt-2 text-secondary">{profile.careerGoal}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-base font-semibold uppercase tracking-wide text-muted">Education</h2>
        <ul className="mt-2 space-y-2 text-secondary">
          <li>
            <strong className="text-[var(--text-primary)]">{education.degree}</strong>, {education.institution}{' '}
            ({education.session}) — {education.specialization}. First-year CGPA: {education.firstYearCgpa}.
          </li>
          <li>Class 12: {education.class12Percentage} ({education.timeline.find((t) => t.id === 'class12')?.period})</li>
          <li>Class 10: {education.class10Percentage} ({education.timeline.find((t) => t.id === 'class10')?.period})</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-base font-semibold uppercase tracking-wide text-muted">Technical skills</h2>
        <p className="mt-2 text-secondary">{flatSkills.join(' · ')}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-base font-semibold uppercase tracking-wide text-muted">Projects</h2>
        <ul className="mt-2 space-y-2 text-secondary">
          {projects.map((p) => (
            <li key={p.id}>
              <strong className="text-[var(--text-primary)]">{p.name}</strong> — {p.shortDescription}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-base font-semibold uppercase tracking-wide text-muted">Certifications</h2>
        <ul className="mt-2 space-y-1 text-secondary">
          {certifications.map((c) => (
            <li key={c.id}>{c.name} — {c.issuer}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-base font-semibold uppercase tracking-wide text-muted">Leadership & achievements</h2>
        <ul className="mt-2 list-disc pl-5 text-secondary space-y-1">
          {achievements.map((a) => (
            <li key={a.id}>{a.title}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-base font-semibold uppercase tracking-wide text-muted">Interests</h2>
        <p className="mt-2 text-secondary">{profile.interests.join(', ')}</p>
      </section>
    </article>
  )
}
