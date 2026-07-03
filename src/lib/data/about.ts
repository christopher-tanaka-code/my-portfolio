import type { BrandName, IconName } from '@/lib/icons';

type ExperienceItem = {
  company: string;
  title: string;
  period: string;
  location: string;
  description: string;
  logoName: BrandName;
  bullets: readonly string[];
  gradient: string;
  iconName: IconName;
};

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  logoName: BrandName;
  description: string;
  achievements: readonly string[];
  gradient: string;
  iconName: IconName;
};

type SkillCategory = {
  iconName: IconName;
  title: string;
  gradient: string;
  skills: readonly string[];
};

export const experienceData: readonly ExperienceItem[] = [
  {
    company: 'ProductNow',
    title: 'Senior Software Engineer',
    period: 'Oct 2025 - Present',
    location: '',
    description:
      'Building an AI-native operating system for product & engineering teams, connecting plans, requirements, and execution into a shared intelligence layer.',
    logoName: 'productnow',
    bullets: [
      'Built an AI-native operating system for product & engineering teams, connecting plans, requirements, and execution into a shared intelligence layer that stays current in real time.',
      'Developed agentic "AI teammates" that plug into existing workflows to reduce coordination overhead (alignment, planning, handoffs, status updates).',
      'Shipped end-to-end features in a TypeScript monorepo stack (Next.js/NestJS), with a strong focus on UX clarity, performance, and reliability.',
      'Contributed to enterprise readiness: identity/SSO via Auth0, continuous security posture monitoring via Vanta, and auditability/access controls supporting SOC 2 Type II readiness.',
      'Partnered closely with product and design to translate messy strategy into crisp workflow primitives (strategy → roadmap → sprint planning → delivery).',
    ],
    gradient: 'from-emerald-500 to-teal-600',
    iconName: 'flash',
  },
  {
    company: 'FoxyAI',
    title: 'Senior Software Engineer',
    period: 'Dec 2023 - Sep 2025',
    location: '',
    description:
      'Built and maintained Next.js/TypeScript dashboards for AI-powered property intelligence with multimodal search and subscription billing.',
    logoName: 'foxyai',
    bullets: [
      'Built and maintained Next.js/TypeScript dashboards to visualize AI-powered property intelligence (condition/quality scores, damage detection, renovation forecasts, and 360° valuations).',
      'Led frontend modernization and performance optimization by upgrading from Next.js Page Router to the App Router, streamlining routing and data fetching, and significantly improving responsiveness and user experience.',
      'Integrated a multimodal, LLM-powered advanced search using a Retrieval-Augmented Generation (RAG) system, enabling intuitive image-and-text queries across large-scale property datasets and delivering more accurate, context-aware results.',
      'Developed full-stack data flows from image ingestion through AI inference to visual output, ensuring speed, reliability, and alignment with product goals.',
      'Implemented a subscription and billing system using Stripe Checkout and a customer portal for plan management, invoices, and payments.',
    ],
    gradient: 'from-indigo-500 to-purple-600',
    iconName: 'work',
  },
  {
    company: 'Figma',
    title: 'Senior Full-Stack Engineer',
    period: 'May 2019 - Dec 2023',
    location: '',
    description:
      "Worked on Figma's platform engineering team, building and maintaining internal systems that supported product reliability, scalability, and developer velocity.",
    logoName: 'figma',
    bullets: [
      "Worked on Figma's platform engineering team, building and maintaining internal systems that supported product reliability, scalability, and developer velocity.",
      'Developed full-stack features and internal tooling across frontend and backend services, helping product teams ship faster with safer, reusable platform capabilities.',
      'Contributed to platform improvements around data flow, service reliability, performance, and system observability in a large-scale collaborative SaaS environment.',
      'Partnered with cross-functional teams to support high-traffic product areas, debug production issues, and improve the stability of shared infrastructure.',
      'Built and maintained React/TypeScript interfaces and backend integrations used by internal teams to manage workflows, monitor systems, and improve engineering operations.',
    ],
    gradient: 'from-purple-500 to-pink-600',
    iconName: 'star',
  },
  {
    company: 'ElectrifAi',
    title: 'Software Engineer',
    period: 'Dec 2016 - Apr 2019',
    location: '',
    description:
      'Worked on multiple client-facing and internal software projects across healthcare, data analytics, and enterprise workflow automation.',
    logoName: 'electrifai',
    bullets: [
      'Worked on multiple client-facing and internal software projects across healthcare, data analytics, and enterprise workflow automation.',
      'Developed React and TypeScript frontend applications, including healthcare-related interfaces used to support EMR workflows and operational visibility.',
      'Built backend integrations and data-processing features to connect application interfaces with structured business and healthcare data sources.',
      'Collaborated with product managers, data teams, and client stakeholders to translate complex requirements into usable web applications.',
      'Improved application performance, maintainability, and reliability by refactoring legacy UI components, strengthening API integrations, and supporting production issue resolution.',
    ],
    gradient: 'from-pink-500 to-red-600',
    iconName: 'work',
  },
  {
    company: 'Google',
    title: 'Software Developer',
    period: 'Dec 2013 - Nov 2016',
    location: '',
    description:
      'Built internal web tools and A/B experimentation infrastructure for high-volume advertiser platforms.',
    logoName: 'google',
    bullets: [
      'Joined as a Software Engineering Intern, collaborating on production projects and delivering feature work under mentorship over a 6-month period.',
      'Transitioned to a full-time Software Engineer after internship conversion, demonstrating strong ownership and delivering high-impact features early on.',
      'Developed internal web tools and A/B experimentation infrastructure using AngularJS and Java to support high-volume advertiser platforms.',
      'Collaborated across product and analytics teams to build scalable UI components and experimentation frameworks, accelerating engineering velocity.',
    ],
    gradient: 'from-red-500 to-orange-600',
    iconName: 'star',
  },
];

export const educationData: readonly EducationItem[] = [
  {
    degree: "Master's degree in CS",
    institution: 'The University of Tokyo',
    period: 'Apr 2011 - Mar 2013',
    location: 'Tokyo, Japan',
    logoName: 'university-of-tokyo',
    description: "Master's degree in Computer Science from The University of Tokyo.",
    achievements: [],
    gradient: 'from-blue-500 to-cyan-500',
    iconName: 'school',
  },
  {
    degree: "Bachelor's degree in CS",
    institution: 'The University of Tokyo',
    period: 'Apr 2007 - Mar 2011',
    location: 'Tokyo, Japan',
    logoName: 'university-of-tokyo',
    description: "Bachelor's degree in Computer Science from The University of Tokyo.",
    achievements: [],
    gradient: 'from-purple-500 to-pink-500',
    iconName: 'book',
  },
] as const;

export const aboutSkillCategories: readonly SkillCategory[] = [
  {
    iconName: 'code',
    title: 'Languages & Frameworks',
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      'JavaScript/TypeScript',
      'Python',
      'Java',
      'SQL',
      'React.js',
      'Next.js (Page & App Router)',
      'Vue.js',
      'Angular.js',
      'Node.js',
      'ExpressJS',
      'NestJS',
      'GraphQL',
      'REST APIs',
      'Websocket APIs',
      'PHP',
    ],
  },
  {
    iconName: 'storage',
    title: 'Frontend Development',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      'UI Performance Optimization',
      'Rendering & Reconciliation',
      'Redux',
      'React Query',
      'Zustand',
      'TailwindCSS',
      'Styled Components',
      'CSS-in-JS',
      'Material UI',
      'Bootstrap',
      'Figma Dev Mode',
      'Code Connect',
      'Simple Design System',
      'Accessibility (WCAG)',
      'Responsive Development',
      'Cross-Browser Development',
    ],
  },
  {
    iconName: 'psychology',
    title: 'Backend & Databases',
    gradient: 'from-green-500 to-emerald-500',
    skills: [
      'Postgres',
      'MySQL',
      'MongoDB',
      'Supabase',
      'Firebase',
      'LiveGraph',
      'GraphQL Subscriptions',
      'Data Pipelines',
      'RabbitMQ',
      'Kafka',
      'Event-Driven Architecture',
      'OAuth2',
      'JWT',
      'SSO',
    ],
  },
  {
    iconName: 'cloud',
    title: 'Cloud & DevOps',
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
    iconName: 'flash',
    title: 'AI/LLM & Advanced Systems',
    gradient: 'from-indigo-500 to-purple-500',
    skills: [
      'RAG',
      'Multimodal systems',
      'AI Inference Pipelines',
      'OpenAI Integration',
      'LangChain',
      'LangGraph',
      'Pinecone',
      'FAISS',
      'Cursor',
    ],
  },
  {
    iconName: 'rocket',
    title: 'Collaboration & Leadership',
    gradient: 'from-pink-500 to-rose-500',
    skills: [
      'Agile',
      'Scrum',
      'Kanban',
      'Cross-Functional Collaboration',
      'Mentorship',
      'Technical Leadership',
      'Rapid Prototyping',
      'Startup Environment',
      'Pair-programming',
    ],
  },
] as const;
