import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mdohr07.netlify.app',
  integrations: [sitemap()],
});