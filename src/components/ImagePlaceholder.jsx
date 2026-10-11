export default function ImagePlaceholder({ label = 'Image placeholder', aspect = 'video', className = '' }) {
  const aspectClass =
    aspect === 'square' ? 'aspect-square' : aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-video'

  return (
    <div
      className={`image-placeholder flex flex-col items-center justify-center rounded-[var(--radius-card)] border border-dashed border-[var(--border-strong)] bg-[var(--placeholder-bg)] text-[var(--placeholder-fg)] ${aspectClass} ${className}`}
      role="img"
      aria-label={label}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mb-2 opacity-70" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8.5" cy="10" r="1.5" fill="currentColor" />
        <path d="M3 16l5-5 4 4 3-3 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
      <span className="text-xs md:text-sm text-center px-4 max-w-[90%]">{label}</span>
    </div>
  )
}
