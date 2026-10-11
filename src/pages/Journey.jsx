import AchievementCard from '../components/AchievementCard.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import {
  academicMilestones,
  journeyIntro,
  leadershipHighlights,
  projectJourney,
} from '../data/journey.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function Journey() {
  usePageTitle('Experience & Journey')

  return (
    <>
      <PageHero title="Experience & journey" description={journeyIntro} />

      <section className="py-10">
        <SectionHeading
          title="Leadership & involvement"
          description="Roles and activities from your academic and school journey."
        />
        <div className="space-y-4">
          {leadershipHighlights.map((item) => (
            <AchievementCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="py-10 border-t border-[var(--border-subtle)]">
        <SectionHeading title="Academic milestones" />
        <div className="space-y-4">
          {academicMilestones.map((item) => (
            <AchievementCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="py-10 border-t border-[var(--border-subtle)]">
        <SectionHeading
          title="Project journey"
          description="Connect your projects to what you are learning — no fictional internships."
        />
        <p className="text-secondary leading-relaxed max-w-3xl">
          {projectJourney.text}
        </p>
      </section>
    </>
  )
}
