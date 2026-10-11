import Button from '../components/Button.jsx'
import PageHero from '../components/PageHero.jsx'
import ResumeContent from '../components/ResumeContent.jsx'
import ResumeViewer from '../components/ResumeViewer.jsx'
import { profile } from '../data/profile.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function ResumePage() {
  usePageTitle('Resume')

  return (
    <>
      <PageHero
        title="Resume"
        description="View or download my resume as a PDF."
      />
      <div className="flex flex-wrap gap-3 pb-6">
        <Button type="button" variant="secondary" onClick={() => window.print()}>
          Print this page
        </Button>
      </div>
      <section className="py-6">
        <ResumeContent />
      </section>
      <section className="py-10 border-t border-[var(--border-subtle)]">
        <h2 className="text-lg font-semibold mb-4">Resume PDF</h2>
        <ResumeViewer resume={profile.resume} />
      </section>
    </>
  )
}
