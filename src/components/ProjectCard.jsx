import Button from './Button.jsx'
import MediaImage from './MediaImage.jsx'

export default function ProjectCard({ project, compact = false }) {
  const techList = project.technologies?.filter(Boolean) ?? []

  return (
    <article className="surface rounded-[var(--radius-card)] overflow-hidden flex flex-col h-full">
      {project.image?.available && project.image?.path ? (
        <MediaImage
          src={project.image.path}
          alt={project.image.alt || project.name}
          available
          className="rounded-none border-0 border-b border-[var(--border-subtle)]"
        />
      ) : null}
      <div className={`flex flex-col flex-1 ${compact ? 'p-4' : 'p-5 md:p-6'}`}>
        <p className="text-xs font-medium text-muted uppercase tracking-wide">
          Project {project.number}
        </p>
        <h3 className="mt-1 text-xl font-semibold text-[var(--text-primary)]">{project.name}</h3>
        <p className="mt-1 text-sm text-[var(--color-accent)]">{project.category}</p>
        <p className="mt-3 text-secondary text-sm leading-relaxed flex-1">{project.shortDescription}</p>
        {techList.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
            {techList.map((technology) => (
              <li
                key={technology}
                className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-subtle)] text-secondary"
              >
                {technology}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-5">
          <Button to={`/projects/${project.slug}`} variant="ghost">
            View details
          </Button>
        </div>
      </div>
    </article>
  )
}
