// Update this file to personalize the site. Contact goes through Upwork: no email, phone, form or chat links.
export const profile = {
  name: 'Muhammad Rayandika',
  shortName: 'mrayandika',
  initials: 'MR',
  role: 'AI Agent Engineer | Multi-Agent Systems & Workflow Automation',
  location: 'Bandung, Indonesia',
  github: 'https://github.com/mrayandika15',
  upwork: 'https://www.upwork.com/freelancers/~013f1d1af195891734',
  portrait: 'images/rayandika.webp',
  description: 'AI Agent Engineer in Bandung, Indonesia. I build multi-agent systems, RAG document agents and AI back offices for real businesses: net ROAS 4.82 on 1,083 orders for an online shop, and a team AI platform with 445★ on GitHub.',
  // AI tools used in the case studies first, then the core stack.
  tools: ['Claude Code', 'Claude API', 'OpenAI Agents SDK', 'MCP', 'RAG', 'Supabase', 'Gmail API', 'Google Drive API', 'TypeScript', 'Next.js', 'React', 'Node.js', 'Bun', 'Python', 'Tailwind CSS', 'SEO', 'Google Search Console', 'Docker', 'Git'],
};

// One-line proof for each case study: used on the about and 404 pages, and in the home hero unless `hero` is false.
export const recentWork: { slug: string; label: string; hook: string; hero?: boolean }[] = [
  { slug: 'kiyoo', label: 'AI back office · net ROAS 4.82 on 1,083 orders', hook: 'An AI back office for an online shop: payments logged from Gmail, real profit on every Shopee order.' },
  { slug: 'landing-pages', label: 'Landing pages · page one on Google', hook: 'Landing pages for ZELKA Labs (page one on Google, avg position 7.3) and YVYLORA (premium brand page), both PageSpeed 98.', hero: false },
  { slug: 'opencraft-docs', label: 'RAG document agent', hook: 'A RAG document agent that writes price quotes and MoUs from the company’s own price list and files them in Google Drive.' },
  { slug: 'trina-ax', label: 'Team AI platform · 445★ on GitHub', hook: 'Self-hosted Claude Code and Codex for a whole company, with per-person access. Open source, 445★ on GitHub.' },
];
