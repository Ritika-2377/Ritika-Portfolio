export default function PageHero({ title, description, children }) {
  return (
    <section className="page-hero">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-secondary leading-relaxed">{description}</p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  )
}
