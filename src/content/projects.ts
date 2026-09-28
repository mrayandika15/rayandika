export interface Project {
  number: string;
  slug: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  url: string;
  visual: 'agents' | 'map' | 'tasks';
  color: 'sage' | 'blue' | 'sand';
  idea: string;
  focus: string[];
}

// Public repositories. Illustrations are conceptual, not product screenshots.
export const projects: Project[] = [
  {
    number: '01', slug: 'harness-agent-canvas', category: 'Agent tooling', name: 'Harness Agent Canvas',
    description: 'An exploration of visual tooling for agent workflows. Bringing the pieces of an AI system into one canvas.',
    tags: ['Next.js', 'TypeScript', 'React Flow'],
    url: 'https://github.com/mrayandika15/harness-agent-canvas',
    visual: 'agents', color: 'sage',
    idea: 'AI workflows can be hard to follow when their tools, settings, and conversations live in different places. This project explores a canvas for bringing those pieces together.',
    focus: ['A visual workspace for an agent’s skills and connections.', 'Separate places for agent settings, integrations, and conversations.', 'A Next.js interface with React Flow for the canvas.'],
  },
  {
    number: '02', slug: 'korean-halal-map', category: 'Location & discovery', name: 'Korean Halal Map',
    description: 'A map-based web project exploring halal discovery in Korea. A practical idea, built around finding your way.',
    tags: ['TypeScript', 'Next.js', 'Maps'],
    url: 'https://github.com/mrayandika15/korean-halal-map',
    visual: 'map', color: 'blue',
    idea: 'Finding a place to eat is a simple, very human problem. This personal project explores halal discovery in Korea through a map-based interface.',
    focus: ['Location discovery as the central interface.', 'A web experience built with Next.js and TypeScript.', 'A practical exploration of a specific everyday need.'],
  },
  {
    number: '03', slug: 'a-little-less-to-do', category: 'Everyday productivity', name: 'A little less to-do.',
    description: 'A task-list application built with Next.js and TypeScript. An exercise in making everyday interactions feel straightforward.',
    tags: ['Next.js', 'TypeScript', 'UI development'],
    url: 'https://github.com/mrayandika15/todo-list-knitto',
    visual: 'tasks', color: 'sand',
    idea: 'Small interfaces are a good place to practice careful engineering. This task-list project is an exploration of everyday productivity with Next.js and TypeScript.',
    focus: ['A focused task-list experience.', 'Small, understandable interface interactions.', 'Frontend implementation with Next.js and TypeScript.'],
  },
];
