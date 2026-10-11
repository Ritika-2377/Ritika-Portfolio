import { useState } from 'react'
import EmptyState from './EmptyState.jsx'
import ImageLightbox from './ImageLightbox.jsx'
import { galleryCategories, galleryItems } from '../data/gallery.js'

export default function VisualJournalGrid() {
  const [filter, setFilter] = useState('All')
  const [lightboxItem, setLightboxItem] = useState(null)
  const availableItems = galleryItems.filter((item) => item.image?.available && item.image?.path)
  const filtered =
    filter === 'All' ? availableItems : availableItems.filter((item) => item.category === filter)

  if (availableItems.length === 0) {
    return <EmptyState title="No gallery photos have been added yet" message="No photos are being shared here yet. Check back for updates." />
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Journal categories">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
            className={`px-3 py-2 rounded-lg text-sm font-medium min-h-[44px] border transition-colors ${
              filter === category
                ? 'bg-[var(--color-accent)] text-white border-transparent'
                : 'bg-[var(--bg-surface)] border-[var(--border-strong)] text-secondary hover:bg-[var(--bg-elevated)]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {filtered.map((item) => (
          <figure key={item.id} className="surface rounded-[var(--radius-card)] overflow-hidden">
            <button
              type="button"
              className="w-full block cursor-zoom-in"
              onClick={() => setLightboxItem(item)}
              aria-label={`Preview image: ${item.title}`}
            >
              <img src={item.image.path} alt={item.image.alt || item.title} loading="lazy" className="w-full object-cover" />
            </button>
            <figcaption className="p-4 border-t border-[var(--border-subtle)]">
              <p className="text-xs uppercase tracking-wide text-muted">{item.category}</p>
              <p className="font-medium text-[var(--text-primary)] mt-1">{item.title}</p>
              {item.caption ? <p className="text-sm text-secondary mt-1">{item.caption}</p> : null}
            </figcaption>
          </figure>
        ))}
      </div>

      {lightboxItem ? <ImageLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} /> : null}
    </>
  )
}
