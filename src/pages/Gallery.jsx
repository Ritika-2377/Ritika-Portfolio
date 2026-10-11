import GalleryGrid from '../components/GalleryGrid.jsx'
import PageHero from '../components/PageHero.jsx'
import { galleryCategories, galleryItems } from '../data/gallery.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function Gallery() {
  usePageTitle('Gallery')

  return (
    <>
      <PageHero
        title="Gallery"
        description="A visual journal of academic milestones, workshops, and projects."
      />
      <section className="py-10">
        <GalleryGrid items={galleryItems} categories={galleryCategories} />
      </section>
    </>
  )
}
