export const projectFilterCategories = [

  'All Projects',

  'AI / Machine Learning',

  'Cybersecurity',

  'Programming',

  'Academic Projects',

]



export const projects = [

  {
    id: '01',
    slug: 'ai-study-planner',
    number: '01',
    name: 'AI Study Planner',
    shortDescription:
      'A study-planning project designed to help students organize their learning activities using predefined logic.',
    category: 'AI / Machine Learning',
    filterTags: ['AI / Machine Learning', 'Academic Projects'],
    technologies: [],
    detail: {
      overview:
        'A study-planning project designed to help students organize their learning activities using predefined logic.',
    },
  },

  {
    id: '02',
    slug: 'house-price-prediction',
    number: '02',
    name: 'Azure ML House Price Prediction',
    shortDescription:
      'An academic machine-learning project exploring house price prediction using property-related factors.',
    category: 'AI / Machine Learning',
    filterTags: ['AI / Machine Learning', 'Academic Projects'],
    technologies: ['Microsoft Azure Machine Learning'],
    detail: {
      overview:
        'An academic machine-learning project exploring house price prediction using property-related factors.',
    },
  },

  {
    id: '03',
    slug: 'cybersecurity-website',
    number: '03',
    name: 'Cybersecurity Website',
    shortDescription:
      'An academic project involving RSA/ECC encryption and decryption concepts, key matching, and interactive firewall and antivirus quizzes.',
    category: 'Cybersecurity',
    filterTags: ['Cybersecurity', 'Academic Projects'],
    technologies: [],
    detail: {
      overview:
        'An academic project involving RSA/ECC encryption and decryption concepts, key matching, and interactive firewall and antivirus quizzes.',
    },
  },

  {
    id: '04',
    slug: 'atm-simulation',
    number: '04',
    name: 'ATM Simulation in C',
    shortDescription: 'A C programming project simulating basic ATM operations.',
    category: 'Programming',
    filterTags: ['Programming', 'Academic Projects'],
    technologies: ['C'],
    detail: {
      overview: 'A C programming project simulating basic ATM operations.',
    },
  },

]



export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}

/** @deprecated use projectFilterCategories */
export const projectCategories = projectFilterCategories

