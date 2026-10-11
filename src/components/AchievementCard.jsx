export default function AchievementCard({ item }) {
  return (
    <article className="surface rounded-[var(--radius-card)] p-5 md:p-6">
      <h3 className="text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
      {item.date ? <p className="text-sm text-muted mt-1">{item.date}</p> : null}
      <p className="mt-3 text-secondary text-sm leading-relaxed">{item.description}</p>
      {item.additionalDetails ? (
        <p className="mt-2 text-sm text-secondary">{item.additionalDetails}</p>
      ) : null}
    </article>
  )
}
