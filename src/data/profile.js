export const profile = {
  fullName: 'Ritika Garg',
  displayName: 'Ritika Garg',
  role: 'Computer Science and Engineering Student',
  headline: 'B.E. Computer Science and Engineering | Aspiring AI Engineer',
  field: 'Computer Science and Engineering',
  specialization: 'Generative AI in collaboration with Microsoft',
  institution: 'Chandigarh University',
  location: 'Chandigarh, India',
  email: 'ritigarg23@gmail.com',
  phone: '62833 83618',
  careerGoal: 'My goal is to become an AI Engineer and continue expanding my knowledge of technology.',
  introduction: {
    text: 'I am pursuing a B.E. in Computer Science and Engineering, specializing in Generative AI in collaboration with Microsoft at Chandigarh University. I am building my technical foundation while learning about AI and software development.',
  },
  biography: {
    text: 'My name is Ritika Garg, and I am pursuing a B.E. in Computer Science and Engineering with a specialization in Generative AI in collaboration with Microsoft at Chandigarh University.\n\nMy goal is to become an AI Engineer and continuously expand my knowledge of technology. I am currently learning Data Structures and Algorithms, Object-Oriented Programming, and SQL while exploring artificial intelligence and software development.\n\nI want to strengthen my technical foundation, build meaningful projects, and continue learning about emerging technologies.',
  },
  currentFocus: [
    'Data Structures and Algorithms',
    'Object-Oriented Programming',
    'SQL',
    'Artificial Intelligence',
    'Machine Learning',
  ],
  interests: ['Badminton', 'Basketball', 'Reading psychology', 'Travelling'],
  social: {
    github: 'https://github.com/Ritika-2377',
    linkedin: 'https://www.linkedin.com/in/ritika-garg-68392537',
  },
  resume: {
    path: '/resume/Resume.pdf',
    available: true,
    fileName: 'Resume.pdf',
  },
}

export function getIntroduction() {
  return profile.introduction.text
}

export function getBiography() {
  return profile.biography.text
}

export function getSocialLinks() {
  return [
    { id: 'github', label: 'GitHub', href: profile.social.github, external: true },
    { id: 'linkedin', label: 'LinkedIn', href: profile.social.linkedin, external: true },
    { id: 'email', label: 'Email', href: `mailto:${profile.email}`, external: false },
  ]
}

