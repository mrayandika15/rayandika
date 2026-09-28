import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import config from '../astro.config.mjs';

const output = new URL('../dist/', import.meta.url);
const origin = new URL(config.site).origin;
const base = config.base.replace(/\/$/, '');
const failures = [];
let linkCount = 0;

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map(entry => {
    const location = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directory);
    return entry.isDirectory() ? filesIn(location) : [location];
  }));
  return groups.flat();
}

const pages = (await filesIn(output)).filter(file => file.pathname.endsWith('.html'));
assert.ok(pages.length > 0, 'No built pages found. Run npm run build first.');

for (const file of pages) {
  const html = await readFile(file, 'utf8');
  const relativePath = path.relative(output.pathname, file.pathname).replace(/index\.html$/, '');
  const pageUrl = new URL(`${base}/${relativePath}`, origin);
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  assert.equal((markup.match(/<h1(?:\s|>)/g) || []).length, 1, `${relativePath}: expected one h1`);

  for (const [, attribute] of markup.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const link = new URL(attribute.replaceAll('&amp;', '&'), pageUrl);
    if (link.origin !== origin) continue;
    linkCount++;
    if (base && link.pathname !== base && !link.pathname.startsWith(`${base}/`)) {
      failures.push(`${relativePath}: missing repository base in ${attribute}`);
      continue;
    }
    const local = decodeURIComponent(link.pathname.slice(base.length)).replace(/^\//, '');
    let target = new URL(local, output);
    try {
      if ((await stat(target)).isDirectory()) target = new URL('index.html', target.href.replace(/\/?$/, '/'));
      await stat(target);
      if (link.hash && target.pathname.endsWith('.html')) {
        const destination = await readFile(target, 'utf8');
        const id = decodeURIComponent(link.hash.slice(1));
        if (!destination.includes(`id="${id}"`)) failures.push(`${relativePath}: missing anchor ${attribute}`);
      }
    } catch {
      failures.push(`${relativePath}: missing static destination ${attribute}`);
    }
  }
}

assert.deepEqual(failures, [], failures.join('\n'));
console.log(`Static checks passed: ${pages.length} pages, ${linkCount} local links/assets, correct repository base, one h1 per page.`);
