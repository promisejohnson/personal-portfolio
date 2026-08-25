
export const PROFILE = {
  name: 'Promise Woelorm Johnson',
  role: 'Software Developer & Product Designer',
  location: 'Accra, Ghana',
  tagline: "I build interfaces that perform under pressure—from emergency systems to storefronts and everything in between.",
  bio: "I'm a software developer and IT professional passionate about building practical, reliable, and user-focused digital solutions. My experience spans frontend and mobile development, backend technologies, databases, IT support, and cloud computing. I enjoy turning ideas and real-world business challenges into functional products that are simple to use, dependable, and built to solve meaningful problems. I'm also currently pursuing a BSc in Data Science & Analytics, expanding my skills in data analysis and using data to make better technology and business decisions.",
  email: 'promiseaddison14@gmail.com',
  resumeUrl: '#',
  social: {
    github: 'https://github.com/promisejohnson',
    linkedin: 'https://www.linkedin.com/in/promisewoelorm/',
    twitter: 'https://x.com/AgbogboPromise',
  },
  availableForWork: true,
};

export const SKILLS: { category: string; items: string[] }[] = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js','Tauri', 'CSS/Design systems', 'Accessibility'] },
  { category: 'Mobile', items: ['React Native', 'Expo', 'Offline-first architecture', 'Push notifications'] },
  { category: 'Backend & Cloud', items: ['PHP', 'Node.js','Express.js', 'REST APIs','AWS', 'Server Actions'] },
  { category: 'Database', items: ['SQL', 'MySQL','PosgreSQL', 'MongoDB', 'Database Design'] },
  { category: 'Skills & Technologies', items: ['Git','Database Design','Postman', 'Figma', 'Testing', 'Performance profiling'] },
];

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  description: string;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Software Developer',
    org: 'Zentro Tech Solutions',
    period: '2025 — Present',
    description: 'Build and enhance production software solutions, owning feature development from implementation through deployment. Work closely with product and engineering teams to resolve technical issues, improve performance, and deliver maintainable user-focused applications.',
  },
  {
    role: 'Junior Developer (Internship)',
    org: 'Awaal Ltd',
    period: '2023 — 2023',
    description: 'Assisted in building, testing, and maintaining application features under the guidance of senior developers. Contributed to bug fixes, code reviews, documentation, and quality assurance while developing hands-on experience in the software development lifecycle.',
  },
];
