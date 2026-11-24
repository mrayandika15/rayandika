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
  /** Company product (built at an employer) rather than client work. Set together with `client` for the hand-written page. */
  company?: boolean;
  /** Internal tool built for the freelancer's own company (OpenCraft). Set together with `client` for the hand-written page. */
  internal?: boolean;
  /** Real screenshot shown in the card frame (used when visual is 'shot'). */
  shot?: { src: string; alt: string; label: string };
  /** Problem → solution headline shown instead of the name on cards and the case-study header. */
  hook?: { problem: string; solution: string };
  /** Client brand mark, taped onto the card picture as a sticker. */
  logo?: { src: string; alt: string; width: number; height: number };
}

// Personal projects link to public repositories and use concept illustrations.
// Client projects use real screenshots and have a dedicated case-study page.
export const projects: Project[] = [
  {
    number: '01', slug: 'kiyoo', category: 'Client: Kiyoo.id · online shop', name: 'Kiyoo.id',
    description: 'Bank emails, Shopee orders and tailor logs, turned into one AI-powered back office. Net ROAS 4.82 across 1,083 orders.',
    hook: {
      problem: 'Shopee ads looked profitable. Nobody could prove it.',
      solution: 'AI agents now track real profit on every order.',
    },
    logo: { src: 'images/kiyoo/kiyoo-mascot.webp', alt: 'Kiyoo’s koala mascot', width: 501, height: 520 },
    tags: ['Next.js', 'Supabase', 'Gmail API', 'Cloudinary'],
    url: 'https://kiyoo.id',
    visual: 'shot', color: 'pink', client: true,
    shot: {
      src: 'images/kiyoo/01-marketing-overview.webp',
      alt: 'Kiyoo admin Marketing dashboard showing money in, clean orders, net ROAS and profit across all orders.',
      label: 'kiyoo / marketing · all orders',
    },
    idea: 'Back office for an online shop: AI agents log every payment from Gmail, compute real ROAS from Shopee data, and track tailor production.',
    focus: ['A finance tracker that fills itself.', 'Real ROAS instead of Shopee’s ROAS.', 'Tailor (vendor) tracking.'],
  },
  {
    number: '02', slug: 'trina-ax', category: 'Company product · Potenlab', name: 'Trina AX',
    description: 'Self-hosted Claude Code and Codex for a whole company: shared files, team skills, MCP tools and shared AI sessions, with per-person folder permissions. Open source, 445 GitHub stars.',
    hook: {
      problem: 'Only the person who set up Claude knew the company. Everyone else’s AI started from an empty folder.',
      solution: 'One shared AI for the whole team, each with their own access.',
    },
    logo: { src: 'images/trina-ax/trina-mark.webp', alt: 'Trina logo mark', width: 436, height: 390 },
    tags: ['TypeScript', 'Bun', 'Go', 'MCP'],
    url: 'https://ax.trina.app',
    visual: 'shot', color: 'blue', client: true, company: true,
    shot: {
      src: 'images/trina-ax/02-site-one-server.webp',
      alt: 'Trina AX product site, How it works: Mina, Alex and Sam each ask their own AI, all connected to one Trina server with each person’s own access.',
      label: 'trina / one server · whole team',
    },
    idea: 'Self-hosted Claude Code and Codex for a whole company, with shared files, team skills and per-person access.',
    focus: ['One server, the whole team’s AI.', 'Team skills and shared files.', 'Per-person access, checked on every file.', 'Work together with AI.'],
  },
  {
    number: '03', slug: 'opencraft-docs', category: 'Internal tool · OpenCraft', name: 'OpenCraft document agent',
    description: 'A RAG document agent: type “/opencraft-document” in chat, and it pulls prices, company data and the next document number, writes a branded SPH or MoU PDF and files it in Google Drive.',
    hook: {
      problem: 'Every price quote and MoU was rebuilt by hand. Prices, numbering and branding drifted between documents.',
      solution: 'An AI agent now writes them from the company’s own price list, in one chat message.',
    },
    logo: { src: 'images/opencraft-docs/opencraft-mark.webp', alt: 'OpenCraft logo: three hands forming a triangle', width: 500, height: 420 },
    tags: ['Next.js', 'Supabase', 'Claude Code', 'Google Drive API', 'react-pdf'],
    url: '',
    visual: 'shot', color: 'blue', client: true, internal: true,
    shot: {
      src: 'images/opencraft-docs/03-drive-sph.webp',
      alt: 'OpenCraft’s internal Document page, SPH folder: three generated price-offer PDFs, synced with Google Drive.',
      label: 'opencraft / documents · SPH',
    },
    idea: 'A RAG document agent that writes OpenCraft’s price offers and MoUs from the company’s own price list and files them in Google Drive.',
    focus: ['Ask in chat with a skill.', 'Retrieval before writing.', 'A real document, filed automatically.'],
  },
  {
    number: '04', slug: 'harness-agent-canvas', category: 'Agent tooling', name: 'Harness Agent Canvas',
    description: 'An exploration of visual tooling for agent workflows. Bringing the pieces of an AI system into one canvas.',
    tags: ['Next.js', 'TypeScript', 'React Flow'],
    url: 'https://github.com/mrayandika15/harness-agent-canvas',
    visual: 'agents', color: 'sage',
    idea: 'AI workflows can be hard to follow when their tools, settings, and conversations live in different places. This project explores a canvas for bringing those pieces together.',
    focus: ['A visual workspace for an agent’s skills and connections.', 'Separate places for agent settings, integrations, and conversations.', 'A Next.js interface with React Flow for the canvas.'],
  },
  {
    number: '05', slug: 'korean-halal-map', category: 'Location & discovery', name: 'Korean Halal Map',
    description: 'A map-based web project exploring halal discovery in Korea. A practical idea, built around finding your way.',
    tags: ['TypeScript', 'Next.js', 'Maps'],
    url: 'https://github.com/mrayandika15/korean-halal-map',
    visual: 'map', color: 'blue',
    idea: 'Finding a place to eat is a simple, very human problem. This personal project explores halal discovery in Korea through a map-based interface.',
    focus: ['Location discovery as the central interface.', 'A web experience built with Next.js and TypeScript.', 'A practical exploration of a specific everyday need.'],
  },
  {
    number: '06', slug: 'a-little-less-to-do', category: 'Everyday productivity', name: 'A little less to-do.',
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
