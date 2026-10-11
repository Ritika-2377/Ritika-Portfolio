import PageHero from '../components/PageHero.jsx'
import SkillGroup from '../components/SkillGroup.jsx'
import { skillSections } from '../data/skills.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function Skills() {
  usePageTitle('Skills')

  return (
    <>
      <PageHero
        title="Skills"
        description="Programming, current learning, AI and cloud, and tools — without unsupported proficiency ratings."
      />

      <section className="py-10">
        <div className="grid md:grid-cols-2 gap-6">
          {skillSections.map((section) => (
            <SkillGroup key={section.id} title={section.title} skills={section.skills} />
          ))}
        </div>
      </section>

    </>
  )
}
