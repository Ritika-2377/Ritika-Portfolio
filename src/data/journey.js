import { achievements } from './achievements.js'

export const journeyIntro =
  'This page highlights leadership, academic milestones, and project work. Formal internships and employment entries will appear here when you add them — nothing is listed until you provide the details.'

export const leadershipHighlights = achievements.filter((a) =>
  ['class-rep', 'head-girl', 'bytexl-anchor'].includes(a.id),
)

export const academicMilestones = achievements.filter((a) =>
  ['cgpa-83', 'iit-session'].includes(a.id),
)

export const projectJourney = {
  text: 'My current project experience comes from coursework and learning projects, including introductory C programming, cybersecurity concepts, and AI/ML topics. Formal internships or employment are not listed here.',
}
