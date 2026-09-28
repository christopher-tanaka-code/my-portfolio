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

export const experienceData: readonly ExperienceItem[] = [
  {
    company: 'ProductNow',
    title: 'Senior Software Engineer',
    period: 'Oct 2025 - Present',
    location: '',
    description:
      'AI-native operating system for product and engineering teams, connecting strategy, planning, and execution in real time.',
    logoName: 'productnow',
    bullets: [
      'Build an AI-native operating system for product and engineering teams that connects strategy, requirements, planning, and execution in a shared intelligence layer updated in real time.',
      'Design and ship agentic AI teammates that integrate with existing workflows to reduce coordination overhead across alignment, planning, handoffs, and status reporting.',
      'Own end-to-end feature delivery in a TypeScript monorepo using Next.js and NestJS, with an emphasis on clear UX, responsive performance, reliability, and maintainable architecture.',
      'Strengthen enterprise readiness through Auth0 identity and SSO, Vanta security monitoring, auditability, and access controls supporting SOC 2 Type II readiness.',
      'Partner with product and design to translate ambiguous strategy into practical workflow primitives spanning roadmaps, sprint planning, and delivery.',
      'Balance rapid product iteration with maintainable architecture, responsive performance, and production reliability in a fast-moving startup environment.',
      'Develop reusable frontend and backend patterns within the shared monorepo to improve consistency across AI-assisted workflows and service integrations.',
      'Apply iterative prototyping and hands-on technical collaboration to turn new product concepts into testable, production-ready capabilities.',
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
      'Next.js and TypeScript dashboards for AI-powered property intelligence, multimodal search, and subscription billing.',
    logoName: 'foxyai',
    bullets: [
      'Built and maintained Next.js and TypeScript dashboards for AI-powered property intelligence, including condition and quality scoring, damage detection, renovation forecasting, and 360-degree valuations.',
      'Led migration from the Next.js Pages Router to the App Router, streamlining routing and data fetching while improving responsiveness and the overall user experience.',
      'Integrated multimodal, LLM-powered search using retrieval-augmented generation, enabling image and text queries across large property datasets with more relevant, context-aware results.',
      'Developed full-stack data flows from image ingestion and AI inference through user-facing visualization, prioritizing speed, reliability, and product alignment.',
      'Implemented subscription billing with Stripe Checkout and a customer portal for plan management, invoices, and payments.',
      'Worked across frontend, backend, and AI workflows to translate complex property data and model outputs into clear, practical user experiences.',
      'Created reusable interface patterns for complex AI results across property condition, damage, renovation, and valuation workflows.',
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
      'Platform engineering for product reliability, scalability, observability, and developer velocity.',
    logoName: 'figma',
    bullets: [
      'Built and maintained platform engineering systems that supported product reliability, scalability, observability, and developer velocity in a large-scale collaborative SaaS environment.',
      'Delivered full-stack features and internal tooling across React and TypeScript interfaces and backend services, giving product teams safer, reusable platform capabilities.',
      'Improved data flow, service reliability, performance, and system observability while supporting high-traffic product areas and resolving production issues.',
      'Partnered across product, design, and engineering to improve shared infrastructure and internal workflows used to monitor systems and operate the platform.',
      'Built React and TypeScript interfaces and backend integrations that helped internal teams manage workflows, monitor systems, and improve engineering operations.',
      'Developed reusable platform patterns that reduced duplication and gave product teams more consistent foundations for shipping and operating features.',
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
      'Client-facing and internal applications across healthcare, data analytics, and enterprise workflow automation.',
    logoName: 'electrifai',
    bullets: [
      'Delivered client-facing and internal applications across healthcare, data analytics, and enterprise workflow automation.',
      'Developed React and TypeScript frontend applications, including healthcare interfaces supporting electronic medical record workflows and operational visibility.',
      'Built backend integrations and data-processing features connecting application interfaces with structured healthcare and business data sources.',
      'Translated complex stakeholder requirements into usable web applications in partnership with product managers, data teams, and client stakeholders.',
      'Improved performance, maintainability, and reliability by refactoring legacy UI components, strengthening API integrations, and resolving production issues.',
      'Supported delivery across requirements analysis, implementation, integration troubleshooting, and production support for client-facing applications.',
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
      'Joined as a Software Engineering Intern and delivered production feature work under mentorship during a six-month internship.',
      'Converted to a full-time Software Engineer role after demonstrating strong ownership and delivering high-impact features early in the engagement.',
      'Developed internal web tools and A/B experimentation infrastructure using AngularJS and Java for high-volume advertiser platforms.',
      'Collaborated with product and analytics teams to build scalable UI components and experimentation frameworks that improved engineering velocity.',
      'Built reusable AngularJS interface components and Java-backed integrations for internal advertiser tooling and experimentation workflows.',
    ],
    gradient: 'from-red-500 to-orange-600',
    iconName: 'star',
  },
];

export const educationData: readonly EducationItem[] = [
  {
    degree: "Master's Degree in Computer Science",
    institution: 'The University of Tokyo',
    period: 'Apr 2011 - Mar 2013',
    location: 'Tokyo, Japan',
    logoName: 'university-of-tokyo',
    description: "Master's Degree in Computer Science from The University of Tokyo.",
    achievements: [],
    gradient: 'from-blue-500 to-cyan-500',
    iconName: 'school',
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: 'The University of Tokyo',
    period: 'Apr 2007 - Mar 2011',
    location: 'Tokyo, Japan',
    logoName: 'university-of-tokyo',
    description: "Bachelor's Degree in Computer Science from The University of Tokyo.",
    achievements: [],
    gradient: 'from-purple-500 to-pink-500',
    iconName: 'book',
  },
] as const;

export { skillCategories as aboutSkillCategories } from '@/lib/data/skills';
