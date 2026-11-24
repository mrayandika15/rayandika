export interface Project {
  number: string;
  slug: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
  visual: 'agents' | 'map' | 'tasks' | 'shot';
  color: 'sage' | 'blue' | 'sand' | 'pink';
  idea: string;
  focus: string[];
  /** Client work with its own hand-written page in src/pages/work/<slug>.astro. */
  client?: boolean;
  /** Real screenshot shown in the card frame (used when visual is 'shot'). */
  shot?: { src: string; alt: string; label: string };
}

// Personal projects link to public repositories and use concept illustrations.
// Client projects use real screenshots and have a dedicated case-study page.
export const projects: Project[] = [
  {
    number: '01', slug: 'kiyoo', category: 'AI agents · E-commerce ops', name: 'Kiyoo.id',
    description: 'An AI-powered back office for an online shop: payments logged from email, real ROAS on Shopee, and tailor production tracked daily.',
    tags: ['Next.js', 'Supabase', 'Gmail API', 'Cloudinary'],
    url: 'https://kiyoo.id',
    visual: 'shot', color: 'pink', client: true,
    shot: {
      src: 'images/kiyoo/01-marketing-overview.webp',
      alt: 'Kiyoo admin Marketing dashboard showing money in, clean orders, net ROAS and profit for the last 30 days.',
      label: 'kiyoo / marketing · 30 days',
    },
    idea: 'Back office for an online shop: AI agents log every payment from Gmail, compute real ROAS from Shopee data, and track tailor production.',
    focus: ['A finance tracker that fills itself.', 'Real ROAS instead of Shopee’s ROAS.', 'Tailor (vendor) tracking.'],
  },
  {
    number: '02', slug: 'harness-agent-canvas', category: 'Agent tooling', name: 'Harness Agent Canvas',
    description: 'An exploration of visual tooling for agent workflows. Bringing the pieces of an AI system into one canvas.',
    tags: ['Next.js', 'TypeScript', 'React Flow'],
    url: 'https://github.com/mrayandika15/harness-agent-canvas',
    visual: 'agents', color: 'sage',
    idea: 'AI workflows can be hard to follow when their tools, settings, and conversations live in different places. This project explores a canvas for bringing those pieces together.',
    focus: ['A visual workspace for an agent’s skills and connections.', 'Separate places for agent settings, integrations, and conversations.', 'A Next.js interface with React Flow for the canvas.'],
  },
  {
    number: '03', slug: 'korean-halal-map', category: 'Location & discovery', name: 'Korean Halal Map',
    description: 'A map-based web project exploring halal discovery in Korea. A practical idea, built around finding your way.',
    tags: ['TypeScript', 'Next.js', 'Maps'],
    url: 'https://github.com/mrayandika15/korean-halal-map',
    visual: 'map', color: 'blue',
    idea: 'Finding a place to eat is a simple, very human problem. This personal project explores halal discovery in Korea through a map-based interface.',
    focus: ['Location discovery as the central interface.', 'A web experience built with Next.js and TypeScript.', 'A practical exploration of a specific everyday need.'],
  },
  {
    number: '04', slug: 'a-little-less-to-do', category: 'Everyday productivity', name: 'A little less to-do.',
    description: 'A task-list application built with Next.js and TypeScript. An exercise in making everyday interactions feel straightforward.',
    tags: ['Next.js', 'TypeScript', 'UI development'],
    url: 'https://github.com/mrayandika15/todo-list-knitto',
    visual: 'tasks', color: 'sand',
    idea: 'Small interfaces are a good place to practice careful engineering. This task-list project is an exploration of everyday productivity with Next.js and TypeScript.',
    focus: ['A focused task-list experience.', 'Small, understandable interface interactions.', 'Frontend implementation with Next.js and TypeScript.'],
  },
];

/** The project after `slug`, looping back to the first one. */
export function nextProject(slug: string): Project {
  const index = projects.findIndex(project => project.slug === slug);
  return projects[(index + 1) % projects.length] ?? projects[0];
}
