import { useRef, useState } from 'react'
import MediaImage from './MediaImage.jsx'
import EmptyState from './EmptyState.jsx'
import ImageLightbox from './ImageLightbox.jsx'

export default function GalleryGrid({ items, categories }) {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const triggerRef = useRef(null)
  const visible = items.filter((item) => item.image?.available)

  const filtered =
    filter === 'All' ? visible : visible.filter((item) => item.category === filter)

  if (visible.length === 0) {
    return (
      <EmptyState
        title="No gallery photos have been added yet"
        message="No photos are being shared here yet. Check back for updates."
      />
    )
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Gallery categories">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={filter === cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-2 rounded-lg text-sm font-medium min-h-[44px] border transition-colors ${
              filter === cat
                ? 'bg-[var(--color-accent)] text-white border-transparent'
                : 'bg-[var(--bg-surface)] border-[var(--border-strong)] text-secondary hover:bg-[var(--bg-elevated)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-secondary text-center py-12">No images in this category yet.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <li key={item.id}>
              <figure className="surface rounded-[var(--radius-card)] overflow-hidden">
                <button
                  type="button"
                  className="block w-full text-left"
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget
                    setSelected(item)
                  }}
                  aria-label={`Preview image: ${item.title}`}
                >
                  <MediaImage
                    src={item.image.path}
                    alt={item.image.alt}
                    available={item.image.available}
                    placeholderLabel={item.title}
                  />
                </button>
                <figcaption className="p-4">
                  <p className="font-medium text-[var(--text-primary)]">{item.title}</p>
                  {item.caption && <p className="text-sm text-muted mt-1">{item.caption}</p>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      )}
      {selected ? (
        <ImageLightbox
          item={selected}
          openerRef={triggerRef}
          onClose={() => setSelected(null)}
        />
      ) : null}
    </div>
  )
}
