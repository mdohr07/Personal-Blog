import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mdohr07.netlify.app',
  integrations: [
    sitemap({
      filter: (page) =>
        page !== 'https://mdohr07.netlify.app/2d' &&
        page !== 'https://mdohr07.netlify.app/3d' &&
        page !== 'https://mdohr07.netlify.app/ueber' &&
        page !== 'https://mdohr07.netlify.app/blog',
    }),
  ],
});