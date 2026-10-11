export default function SectionBand({ number, title, description, children, id, className = '' }) {
  return (
    <section
      id={id}
      className={`py-14 md:py-18 border-t border-[var(--border-subtle)] ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-6 mb-8 md:mb-10">
        {number && (
          <span
            className="font-mono text-xs md:text-sm tracking-widest text-[var(--color-accent)] shrink-0"
            aria-hidden="true"
          >
            {number}
          </span>
        )}
        <div className="flex-1">
          <h2
            id={id ? `${id}-heading` : undefined}
            className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--text-primary)]"
          >
            {title}
          </h2>
          {description && <p className="mt-2 text-secondary max-w-2xl">{description}</p>}
        </div>
      </div>
      {children}
    </section>
  )
}
