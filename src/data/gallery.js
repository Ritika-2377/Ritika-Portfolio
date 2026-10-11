/**
 * Add only real photo files from public/ folders here. Gallery images are rendered
 * only for entries listed below; do not add PDFs as image sources.
 */
export const galleryCategories = [
  'All',
  'Certificates',
  'Academic achievements',
  'Workshops and events',
  'Projects',
]

export const galleryItems = []

export function getVisibleGalleryItems() {
  return galleryItems.filter((item) => item.image?.available && item.image?.path)
}
