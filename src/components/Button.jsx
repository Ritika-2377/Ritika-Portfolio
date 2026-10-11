import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors min-h-[44px] min-w-[44px] disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary:
    'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] border border-transparent',
  secondary:
    'bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-strong)] hover:bg-[var(--bg-surface)]',
  ghost: 'text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] border border-transparent',
  link: 'text-[var(--color-accent)] hover:underline p-0 min-h-0 min-w-0 border-0 bg-transparent',
}

export default function Button({
  variant = 'primary',
  to,
  href,
  external,
  className = '',
  children,
  disabled,
  type = 'button',
  ...rest
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    const rel = external ? 'noopener noreferrer' : undefined
    const target = external ? '_blank' : undefined
    return (
      <a href={href} className={classes} rel={rel} target={target} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  )
}
