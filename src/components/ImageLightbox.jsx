import { useEffect, useRef } from 'react'

export default function ImageLightbox({ item, onClose, openerRef }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const opener = openerRef?.current
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      opener?.focus()
    }
  }, [onClose, openerRef])

  if (!item) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/70"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-lightbox-title"
      onClick={onClose}
      onKeyDown={(event) => {
        if (event.key === 'Tab') {
          event.preventDefault()
          closeRef.current?.focus()
        }
      }}
    >
      <div
        className="relative max-w-4xl w-full surface rounded-[var(--radius-card)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 rounded-lg border border-[var(--border-strong)] bg-[var(--bg-surface)] px-3 py-2 text-sm min-h-[44px]"
        >
          Close
        </button>
        <img src={item.image.path} alt={item.image.alt} className="w-full max-h-[70vh] object-contain bg-black/5" />
        <div className="p-4 md:p-5">
          <p id="gallery-lightbox-title" className="font-semibold">{item.title}</p>
          {item.caption && <p className="text-sm text-secondary mt-1">{item.caption}</p>}
        </div>
      </div>
    </div>
  )
}
