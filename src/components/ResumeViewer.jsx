import Button from './Button.jsx'
import EmptyState from './EmptyState.jsx'

export default function ResumeViewer({ resume }) {
  if (!resume.available) {
    return (
      <EmptyState
        title="Resume PDF not available"
        message={
          <>
            The resume file is currently unavailable. Check the PDF path and availability setting in{' '}
            <code className="text-sm">src/data/profile.js</code>.
          </>
        }
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        <Button href={resume.path} external variant="primary">
          View Resume
        </Button>
        <a
          href={resume.path}
          download={resume.fileName}
          className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium min-h-[44px] border border-[var(--border-strong)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] transition-colors"
        >
            Download Resume
        </a>
      </div>
      <div className="surface rounded-[var(--radius-card)] overflow-hidden">
        <iframe
          title="Resume preview"
          src={resume.path}
          className="w-full min-h-[70vh] border-0 bg-white"
        />
      </div>
    </div>
  )
}
