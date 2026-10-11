export default function SectionHeading({ eyebrow, title, description, align = 'left', id }) {
  const alignClass = align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'

  return (
    <header className={`section-heading mb-8 md:mb-10 ${alignClass}`}>
      {eyebrow && (
        <p className="eyebrow text-sm font-medium text-[var(--color-accent)] mb-2">{eyebrow}</p>
      )}
      <h2 id={id} className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {description && <p className="mt-3 text-secondary text-base md:text-lg">{description}</p>}
    </header>
  )
}
