import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: served from https://mrayandika15.github.io/rayandika/.
// `site` is the origin and `base` the repository path; sitemap URLs include both.
export default defineConfig({
  site: 'https://mrayandika15.github.io',
  base: '/rayandika',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: page => !/\/404\/?$/.test(page) })],
});
