import type { IconName } from '@/lib/icons';

type SkillCategory = {
  iconName: IconName;
  title: string;
  gradient: string;
  skills: readonly string[];
};

export const skillCategories: readonly SkillCategory[] = [
  {
    iconName: 'code',
    title: 'Languages',
    gradient: 'from-blue-500 to-cyan-500',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'PHP'],
  },
  {
    iconName: 'star',
    title: 'Frontend',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      'React',
      'Next.js (Pages and App Router)',
      'Vue.js',
      'AngularJS',
      'Redux',
      'React Query',
      'Zustand',
      'Tailwind CSS',
      'Material UI',
      'styled-components',
      'Responsive design',
      'WCAG accessibility',
    ],
  },
  {
    iconName: 'work',
    title: 'Backend and APIs',
    gradient: 'from-green-500 to-emerald-500',
    skills: [
      'Node.js',
      'Express.js',
      'NestJS',
      'GraphQL',
      'REST APIs',
      'WebSocket APIs',
      'OAuth 2.0',
      'JWT',
      'SSO',
    ],
  },
  {
    iconName: 'storage',
    title: 'Data and Messaging',
    gradient: 'from-teal-500 to-cyan-500',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Supabase',
      'Firebase',
      'LiveGraph',
      'RabbitMQ',
      'Kafka',
      'Data pipelines',
      'Event-driven architecture',
      'GraphQL subscriptions',
    ],
  },
  {
    iconName: 'flash',
    title: 'AI and LLM Systems',
    gradient: 'from-indigo-500 to-purple-500',
    skills: [
      'RAG',
      'Multimodal systems',
      'AI inference pipelines',
      'OpenAI integrations',
      'LangChain',
      'LangGraph',
      'Pinecone',
      'FAISS',
    ],
  },
  {
    iconName: 'cloud',
    title: 'Cloud and DevOps',
    gradient: 'from-orange-500 to-red-500',
    skills: [
      'AWS',
      'GCP',
      'Azure',
      'Docker',
      'Kubernetes',
      'Terraform',
      'GitHub Actions',
      'Jenkins',
      'Grafana',
    ],
  },
  {
    iconName: 'psychology',
    title: 'UI Engineering',
    gradient: 'from-sky-500 to-blue-500',
    skills: [
      'UI performance optimization',
      'Rendering and reconciliation',
      'Responsive development',
      'Cross-browser compatibility',
      'Design systems',
      'Figma Dev Mode',
      'Code Connect',
      'CSS-in-JS',
      'Bootstrap',
    ],
  },
  {
    iconName: 'rocket',
    title: 'Leadership and Delivery',
    gradient: 'from-pink-500 to-rose-500',
    skills: [
      'Technical leadership',
      'Mentorship',
      'Cross-functional collaboration',
      'Agile',
      'Scrum',
      'Kanban',
      'Rapid prototyping',
      'Pair programming',
    ],
  },
];

export const proficiencyLevels = [
  { name: 'Frontend', level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'Backend', level: 85, color: 'from-purple-500 to-pink-500' },
  { name: 'AI/ML', level: 80, color: 'from-green-500 to-emerald-500' },
  { name: 'DevOps', level: 75, color: 'from-orange-500 to-red-500' },
] as const;
