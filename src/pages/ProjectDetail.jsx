import { Link, useParams } from 'react-router-dom'
import Button from '../components/Button.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { getProjectBySlug } from '../data/projects.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  usePageTitle(project ? project.name : 'Project')

  if (!project) {
    return (
      <EmptyState
        title="Project not found"
        message="This project is not listed in the portfolio data."
        action={<Button to="/projects">Back to projects</Button>}
      />
    )
  }

  const technologies = project.technologies?.filter(Boolean) ?? []

  return (
    <>
      <nav className="text-sm text-muted pt-4" aria-label="Breadcrumb">
        <Link to="/projects" className="text-[var(--color-accent)] hover:underline">
          Projects
        </Link>
        <span className="mx-2">/</span>
        <span className="text-secondary">{project.name}</span>
      </nav>

      <article className="surface rounded-[var(--radius-card)] p-6 md:p-10 my-8">
        <p className="text-sm text-muted">Project {project.number}</p>
        <h1 className="text-3xl md:text-4xl font-semibold mt-2">{project.name}</h1>
        <p className="text-[var(--color-accent)] mt-2">{project.category}</p>
        <p className="mt-5 text-secondary leading-relaxed max-w-3xl">
          {project.detail?.overview || project.shortDescription}
        </p>
        {technologies.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
            {technologies.map((technology) => (
              <li
                key={technology}
                className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-elevated)] border border-[var(--border-subtle)]"
              >
                {technology}
              </li>
            ))}
          </ul>
        ) : null}
        <Button to="/projects" variant="secondary" className="mt-8">
          All projects
        </Button>
      </article>
    </>
  )
}
