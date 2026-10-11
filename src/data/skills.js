export const skillSections = [

  {

    id: 'programming',

    title: 'Programming',

    skills: [

      { name: 'C' },

      { name: 'C++' },

      { name: 'Python' },

      { name: 'Java', context: 'Currently learning' },

    ],

  },

  {

    id: 'current-learning',

    title: 'Currently Learning',

    skills: [

      { name: 'Data Structures and Algorithms' },

      { name: 'Object-Oriented Programming' },

      { name: 'SQL' },

    ],

  },

  {

    id: 'ai-cloud',

    title: 'AI and Cloud',

    skills: [

      { name: 'Artificial Intelligence' },

      { name: 'Machine Learning' },

      { name: 'Microsoft Azure' },

    ],

  },

  {

    id: 'tools',

    title: 'Tools',

    skills: [

      { name: 'Visual Studio Code' },

      { name: 'Cursor' },

      { name: 'GitHub' },

    ],

  },

]

export const currentlyLearning = skillSections.find((section) => section.id === 'current-learning').skills

