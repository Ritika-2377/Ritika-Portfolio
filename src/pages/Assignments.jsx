import AssignmentCard from '../components/AssignmentCard.jsx'
import EmptyState from '../components/EmptyState.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { assignmentSubjects } from '../data/assignments.js'
import { usePageTitle } from '../hooks/usePageTitle.js'

export default function Assignments() {
  usePageTitle('Assignments')

  const totalAssignments = assignmentSubjects.reduce(
    (sum, s) => sum + (s.assignments?.length || 0),
    0,
  )

  return (
    <>
      <PageHero
        title="Assignments"
        description="A small collection of coursework organized by subject."
      />

      {totalAssignments === 0 ? (
        <section className="py-10">
          <EmptyState
            title="No assignments listed yet"
            message="No assignment files are listed yet. Check back as coursework is added."
          />
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {assignmentSubjects.map((subject) => (
              <div key={subject.id} className="surface rounded-lg p-5">
                <h3 className="font-semibold">{subject.name}</h3>
                <p className="text-sm text-muted mt-2">No files listed yet.</p>
              </div>
            ))}
          </div>
        </section>
      ) : (
        assignmentSubjects.filter((subject) => subject.assignments.length > 0).map((subject) => (
          <section key={subject.id} className="py-10 border-t border-[var(--border-subtle)] first:border-0">
            <SectionHeading title={subject.name} />
            {subject.assignments.length === 0 ? (
              <p className="text-muted italic text-sm">No assignments for this subject yet.</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {subject.assignments.map((a) => (
                  <AssignmentCard key={a.id} assignment={a} />
                ))}
              </div>
            )}
          </section>
        ))
      )}

    </>
  )
}
