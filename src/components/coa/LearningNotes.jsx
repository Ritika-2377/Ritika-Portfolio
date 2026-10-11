import { coaResources } from '../../data/coaResources.js'
import EmptyState from '../EmptyState.jsx'

export default function LearningNotes() {
  const topicNotes = Object.entries(coaResources.notesByTopic || {}).filter(
    ([, content]) => typeof content === 'string' && content.trim(),
  )
  const hasNotes = topicNotes.length > 0 || coaResources.notes?.items?.length > 0

  return (
    <div className="surface rounded-[var(--radius-card)] p-6 md:p-8">
      <h3 className="text-lg font-semibold">Learning notes</h3>
      <p className="mt-2 text-sm text-secondary">{coaResources.intro}</p>
      {hasNotes ? (
        <div className="mt-8 space-y-6">
          {topicNotes.map(([topic, content]) => (
            <article key={topic} className="border-t border-[var(--border-subtle)] pt-6 first:border-0 first:pt-0">
              <h4 className="font-semibold">{coaResources.topics.find((item) => item.id === topic)?.title || topic}</h4>
              <p className="mt-2 text-sm text-secondary whitespace-pre-line">{content}</p>
            </article>
          ))}
          {coaResources.notes?.items?.length > 0 && (
            <ul className="space-y-3">
              {coaResources.notes.items.map((item) => (
                <li key={item.title} className="text-sm text-secondary">
                  <strong>{item.title}</strong> — {item.body}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div className="mt-6">
          <EmptyState
            title="No personal COA notes published yet"
            message="The conversion, expression, and CPU-cycle tools above are ready to explore. This section will show notes when they are added."
          />
        </div>
      )}
    </div>
  )
}
