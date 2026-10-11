export default function SkillGroup({ title, skills, variant = 'default' }) {
  if (!skills?.length) return null

  return (
    <article className="surface rounded-[var(--radius-card)] p-5 md:p-6 h-full">
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-[var(--border-subtle)] last:border-0 pb-3 last:pb-0"
          >
            <span className="font-medium text-[var(--text-primary)]">{skill.name}</span>
            {skill.level || skill.note || skill.context ? (
              <span
                className={`text-sm ${variant === 'future' ? 'text-muted italic' : 'text-secondary'}`}
              >
                {skill.level || skill.note || skill.context}
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </article>
  )
}
