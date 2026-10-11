import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Timeline from '../components/Timeline.jsx'
import { education } from '../data/education.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function EducationPage() {
  usePageTitle('Education')

  return (
    <>
      <PageHero
        title="Education"
        description="Academic program, session, and results."
      />

      <section className="py-10 grid md:grid-cols-2 gap-6">
        <div className="surface rounded-[var(--radius-card)] p-6">
          <h2 className="text-xl font-semibold">{education.degree}</h2>
          <p className="text-[var(--color-accent)] mt-2">{education.institution}</p>
          <dl className="mt-6 space-y-3 text-sm">
            <div>
              <dt className="text-muted">Specialization</dt>
              <dd className="font-medium">{education.specialization}</dd>
            </div>
            <div>
              <dt className="text-muted">Academic session</dt>
              <dd className="font-medium">{education.session}</dd>
            </div>
            <div>
              <dt className="text-muted">First-year CGPA</dt>
              <dd className="font-medium">{education.firstYearCgpa}</dd>
            </div>
          </dl>
        </div>

        <div>
          <SectionHeading title="Academic history" />
          <Timeline items={education.timeline} />
        </div>
      </section>
    </>
  )
}
