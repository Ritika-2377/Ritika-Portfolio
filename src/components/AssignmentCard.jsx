import Button from './Button.jsx'

export default function AssignmentCard({ assignment }) {
  const ready = assignment.fileAvailable && assignment.filePath

  return (
    <article className="surface rounded-[var(--radius-card)] p-5 md:p-6">
      <h3 className="text-lg font-semibold text-[var(--text-primary)]">
        Assignment {assignment.number || '—'} — {assignment.title}
      </h3>
      {assignment.description ? (
        <p className="mt-3 text-secondary text-sm">{assignment.description}</p>
      ) : null}
      {ready ? (
        <div className="mt-5 flex flex-wrap gap-3">
          <Button href={assignment.filePath} external variant="primary">
            View Assignment
          </Button>
          <a
            href={assignment.filePath}
            download={assignment.fileName || undefined}
            className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium min-h-[44px] border border-[var(--border-strong)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] transition-colors"
          >
            Download Assignment
          </a>
        </div>
      ) : (
        <p className="mt-5 text-sm text-muted">Assignment file not available.</p>
      )}
    </article>
  )
}
