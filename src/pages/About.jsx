import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { getBiography, profile } from '../data/profile.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function About() {
  usePageTitle('About')

  return (
    <>
      <PageHero
        title="About me"
        description="Student developer learning AI and software engineering through coursework, certifications, and hands-on projects."
      />

      <div className="py-12 max-w-4xl">
        <div className="space-y-10">
          <section aria-labelledby="intro">
            <SectionHeading id="intro" title="Introduction" />
            <p className="text-secondary leading-relaxed whitespace-pre-line">{getBiography()}</p>
          </section>

          <section aria-labelledby="academic">
            <SectionHeading id="academic" title="Academic background" />
            <dl className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="surface rounded-lg p-4">
                <dt className="text-muted">Degree</dt>
                <dd className="font-medium mt-1">B.E. {profile.field}</dd>
              </div>
              <div className="surface rounded-lg p-4">
                <dt className="text-muted">University</dt>
                <dd className="font-medium mt-1">{profile.institution}</dd>
              </div>
              <div className="surface rounded-lg p-4 sm:col-span-2">
                <dt className="text-muted">Specialization</dt>
                <dd className="font-medium mt-1">{profile.specialization}</dd>
              </div>
              <div className="surface rounded-lg p-4">
                <dt className="text-muted">Academic session</dt>
                <dd className="font-medium mt-1">2025–2029</dd>
              </div>
              <div className="surface rounded-lg p-4">
                <dt className="text-muted">First-year CGPA</dt>
                <dd className="font-medium mt-1">8.3</dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="interests-tech">
            <SectionHeading id="interests-tech" title="Technical interests" />
            <ul className="list-disc pl-5 space-y-2 text-secondary">
              {profile.currentFocus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="career">
            <SectionHeading id="career" title="Career interests & goals" />
            <p className="text-secondary leading-relaxed">{profile.careerGoal}</p>
          </section>

          <section aria-labelledby="beyond">
            <SectionHeading
              id="beyond"
              title="Beyond academics"
              description="A little about me outside coursework."
            />
            <ul className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <li
                  key={interest}
                  className="px-3 py-1.5 rounded-full text-sm bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-secondary"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}
