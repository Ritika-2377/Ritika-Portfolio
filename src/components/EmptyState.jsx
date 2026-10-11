export default function EmptyState({ title, message, action }) {
  return (
    <div className="surface rounded-[var(--radius-card)] p-8 md:p-10 text-center max-w-lg mx-auto">
      <h3 className="text-lg font-semibold text-[var(--text-primary)]">{title}</h3>
      {message && <p className="mt-2 text-secondary text-sm md:text-base">{message}</p>}
      {action && <div className="mt-6 flex justify-center">{action}</div>}
    </div>
  )
}
