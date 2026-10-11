export default function Timeline({ items }) {
  return (
    <ol className="relative border-l border-[var(--border-strong)] ml-3 md:ml-4 space-y-8">
      {items.map((item) => (
        <li key={item.id} className="ml-6 md:ml-8">
          <span
            className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-accent)] bg-[var(--bg-surface)]"
            aria-hidden="true"
          />
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
          {item.institution && (
            <p className="text-sm font-medium text-[var(--color-accent)] mt-1">{item.institution}</p>
          )}
          {item.period && <p className="text-sm text-muted mt-0.5">{item.period}</p>}
          {item.detail && <p className="mt-2 text-secondary text-sm md:text-base">{item.detail}</p>}
        </li>
      ))}
    </ol>
  )
}
