export const services = [
  { title: 'AI agent teams', description: 'Specialized agents that coordinate, delegate tasks, and work toward a shared business outcome.', deliverable: 'Multi-agent architecture & orchestration' },
  { title: 'Workflows that do the work', description: 'Agent workflows that connect agents to your tools and automate complex business processes, with human checkpoints where needed.', deliverable: 'Tool integration & workflow automation' },
  { title: 'Software that holds it together', description: 'Full-stack apps that turn an agent workflow into a usable product, and fast landing pages built to be found on Google.', deliverable: 'Full-stack, landing pages, SEO & speed' },
];

export interface Experience {
  title: string;
  /** Company (and dates) or area, shown in the mono label line. */
  context: string;
  dates?: string;
  projects?: string;
  link?: { href: string; label: string };
  bullets: string[];
}

// Titles, companies and dates match the Upwork profile.
export const experience: Experience[] = [
  {
    title: 'Software Engineer Lead',
    context: 'Potenlab',
    dates: 'Nov 2025 – Present',
    link: { href: 'work/trina-ax/', label: 'See: Trina AX case study →' },
    bullets: [
      'Designed and developed agent workflows and agentic team systems to automate complex business processes.',
      'Built multi-agent architectures where specialized AI agents collaborate, delegate tasks, and execute workflows with minimal human intervention.',
      'Integrated tools and designed scalable orchestration to improve operational efficiency, streamline team collaboration, and accelerate business execution.',
    ],
  },
  {
    title: 'Software Engineer',
    context: 'Sovware Data Mandiri',
    dates: 'Nov 2023 – Aug 2025',
    bullets: [
      'Developed and maintained scalable solutions using Python and Java, and built reusable frontend libraries to improve product performance and user experience.',
      'Optimized codebases and software architecture to strengthen reliability and long-term maintainability.',
      'Accelerated feature delivery, expanded product capabilities, and streamlined client onboarding while aligning technical work with business objectives and product strategy.',
    ],
  },
  {
    title: 'Frontend Developer',
    context: 'AKASIA',
    dates: 'Oct 2023 – Aug 2024',
    projects: 'Projects: Kalbe Farma, Gaji Cermat & CPP',
    bullets: [
      'Led feature development and delivery across multiple projects, including interactive Polling, Applications, and Agenda modules.',
      'Maintained and optimized Gaji Cermat web and mobile applications for performance, reliability, and user experience.',
      'Developed HR management tools for CPP to simplify internal workflows, collaborating with cross-functional teams on intuitive interfaces and high-quality releases.',
    ],
  },
  {
    title: 'Frontend / GIS Software Engineer',
    context: 'Geographic Information Systems',
    bullets: [
      'Built responsive, interactive GIS interfaces with MapLibre, Next.js, TypeScript, Tailwind CSS, Material UI, and Axios.',
      'Optimized API requests, reduced loading times, and refactored codebases for scalability and maintainability.',
      'Collaborated with cross-functional teams to meet client requirements and deliver consistent, user-friendly experiences across devices.',
    ],
  },
];
