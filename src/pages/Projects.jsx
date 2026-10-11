import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projectFilterCategories, projects } from '../data/projects.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function ProjectsPage() {
  usePageTitle('Projects')
  const [filter, setFilter] = useState('All Projects')

  const filtered = useMemo(() => {
    if (filter === 'All Projects') return projects
    return projects.filter((p) => p.filterTags?.includes(filter))
  }, [filter])

  return (
    <>
      <PageHero
        title="Projects"
        description="Academic and learning projects. Filters help you browse by theme — details live on each project page."
      />

      <div className="flex flex-wrap gap-2 py-8" role="group" aria-label="Project categories">
        {projectFilterCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={filter === cat}
            onClick={() => setFilter(cat)}
            className={`project-filter px-4 py-2 rounded-lg text-sm font-medium min-h-[44px] border transition-colors ${
              filter === cat
                ? 'bg-[var(--color-accent)] text-white border-transparent'
                : 'bg-[var(--bg-surface)] border-[var(--border-strong)] text-secondary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 pb-12">
        {filtered.length === 0 ? (
          <p className="text-secondary col-span-full">No projects in this category.</p>
        ) : (
          filtered.map((p) => <ProjectCard key={p.id} project={p} />)
        )}
      </div>
    </>
  )
}
