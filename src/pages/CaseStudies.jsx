import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Button from '../components/Button.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function CaseStudies() {
  usePageTitle('Case Studies')

  return (
    <>
      <PageHero
        title="Case Studies"
        description="A collection of academic case studies and practical analysis."
      />

      <section className="py-10">
        <SectionHeading title="Academic Case Studies" />

        <div className="grid md:grid-cols-2 gap-4">
          <article className="surface rounded-[var(--radius-card)] p-5 md:p-6">
            <p className="text-sm text-muted">
              Computer Organization and Architecture (COA)
            </p>

            <h3 className="text-lg font-semibold mt-2">
              Cache Memory Performance Analysis
            </h3>

            <p className="mt-3 text-secondary text-sm">
              A detailed analysis of cache hit ratio, miss ratio and average memory access time.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                href="/documents/COA%20Case%20Study.pdf"
                external
                variant="primary"
              >
                View Case Study
              </Button>

              <a
                href="/documents/COA%20Case%20Study.pdf"
                download="COA Case Study.pdf"
                className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium min-h-[44px] border border-[var(--border-strong)]"
              >
                Download PDF
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}