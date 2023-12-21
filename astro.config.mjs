import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://festack-astro-template.netlify.app',
  integrations: [vue(), tailwind(), react(), preact()]
});