import { Link } from 'react-router-dom'

export default function PortalTile({ code, label, description, to, href, external }) {
  const className =
    'group surface rounded-[var(--radius-card)] p-5 md:p-6 flex flex-col gap-2 transition-transform hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-[var(--focus-ring)] h-full'

  const inner = (
    <>
      <span className="font-mono text-xs text-[var(--color-accent)]">{code}</span>
      <span className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
        {label}
      </span>
      {description && <span className="text-sm text-secondary leading-relaxed">{description}</span>}
      <span className="text-sm font-medium text-[var(--color-accent)] mt-auto pt-2">Open →</span>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link to={to} className={className}>
      {inner}
    </Link>
  )
}
