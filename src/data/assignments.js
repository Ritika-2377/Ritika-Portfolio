/**
 * Place assignment PDFs under public/assignments/<subject-folder>/
 * Set fileAvailable: true only after the file exists at filePath.
 */
export const assignmentSubjects = [
  {
    id: 'coa',
    name: 'Computer Organization and Architecture (COA)',
    folder: 'coa',
    assignments: [
      {
        id: 'coa-assignment-1',
        title: 'Computer Organization and Architecture (COA)',
        number: '1',
        filePath: '/assignments/coa/Assignment 1.pdf',
        fileName: 'Assignment 1.pdf',
        fileAvailable: false,
      },
    ],
  },
  {
    id: 'dsa',
    name: 'Data Structures and Algorithms (DSA)',
    folder: 'dsa',
    assignments: [],
  },
  {
    id: 'java',
    name: 'Java / Object-Oriented Programming',
    folder: 'java',
    assignments: [],
  },
  {
    id: 'os',
    name: 'Operating Systems',
    folder: 'os',
    assignments: [],
  },
  {
    id: 'other',
    name: 'Other Subjects',
    folder: 'other',
    assignments: [],
  },
]

/**
 * Example assignment entry (copy into a subject's assignments array):
 * {
 *   id: 'coa-a1',
 *   title: 'Assignment title',
 *   number: '1',
 *   description: 'Brief description',
 *   date: null,
 *   filePath: '/assignments/coa/your-file-name.pdf',
 *   fileAvailable: false,
 * }
 */
