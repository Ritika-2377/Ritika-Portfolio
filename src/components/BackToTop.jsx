import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 rounded-full border border-[var(--border-strong)] bg-[var(--bg-surface)] px-4 py-3 text-sm font-medium shadow-[var(--shadow-soft)] hover:bg-[var(--bg-elevated)] min-h-[44px]"
      aria-label="Back to top"
    >
      ↑ Top
    </button>
  )
}
