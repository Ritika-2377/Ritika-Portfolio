import Button from './Button.jsx'

export default function CertificationCard({ cert }) {
  return (
    <article className="surface rounded-[var(--radius-card)] p-5 md:p-6 h-full flex flex-col">
      <div className="flex-1">
        <p className="text-xs uppercase tracking-wide text-muted">Certification</p>
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mt-2">{cert.name}</h3>
        <p className="text-sm text-[var(--color-accent)] mt-1">Issued by {cert.issuer}</p>
      </div>
      {cert.filePath ? (
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={cert.filePath} external variant="primary">
            View Certificate
          </Button>
          <a
            href={cert.filePath}
            download={cert.fileName}
            className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium min-h-[44px] border border-[var(--border-strong)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] transition-colors"
          >
            Download Certificate
          </a>
        </div>
      ) : (
        <p className="mt-6 text-sm text-muted">Certificate PDF not available.</p>
      )}
    </article>
  )
}
