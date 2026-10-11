/** Editable COA Learning Lab resources — update as you add notes and links */
export const coaResources = {
  intro:
    'Interactive tools for Computer Organization and Architecture. These are educational models for learning — not industrial simulators.',
  notes: {
    placeholder: 'Add your COA notes, summaries, or exam tips here (edit src/data/coaResources.js).',
    items: [],
  },
  /** Optional per-topic notes keyed by topic id (see LearningNotes.jsx) */
  notesByTopic: {},
  topics: [
    {
      id: 'number-systems',
      title: 'Number systems',
      description: 'Binary, decimal, octal, and hexadecimal conversions with step-by-step reasoning.',
    },
    {
      id: 'addressing',
      title: 'Addressing modes & instruction formats',
      description: 'Use the expression simulator to compare zero-, one-, two-, and three-address code.',
    },
    {
      id: 'cpu-cycle',
      title: 'Instruction cycle',
      description: 'Walk through fetch, decode, execute, and store phases on a simplified CPU model.',
    },
  ],
  assignmentLinks: {
    placeholder: 'Link COA assignments from the Assignments page or add URLs here when ready.',
    items: [],
  },
  externalResources: {
    placeholder: 'Add favourite textbooks, playlists, or documentation links.',
    items: [],
  },
}
