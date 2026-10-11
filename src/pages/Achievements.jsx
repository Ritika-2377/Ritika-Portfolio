import AchievementCard from '../components/AchievementCard.jsx'
import Button from '../components/Button.jsx'
import PageHero from '../components/PageHero.jsx'
import { achievements } from '../data/achievements.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function AchievementsPage() {
  usePageTitle('Achievements')

  return (
    <>
      <PageHero
        title="Achievements & leadership"
        description="Academic milestones and leadership roles — only verified highlights, no invented rankings or awards."
      />

      <div className="space-y-4 pb-12">
        {achievements.map((item) => (
          <AchievementCard key={item.id} item={item} />
        ))}
      </div>

      <div className="pb-10 text-center">
        <Button to="/certifications" variant="secondary">
          View certifications
        </Button>
      </div>
    </>
  )
}
