import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://helpobot247.github.io',
  integrations: [tailwind()],
});
