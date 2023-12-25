import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import preact from '@astrojs/preact'

import { remarkReadingTime } from './src/scripts/remark-reading-time.mjs'
import { remarkModifiedTime } from './src/scripts/remark-modified-time.mjs'

// https://astro.build/config
export default defineConfig({
	site: 'https://festack-astro-template.netlify.app',
	integrations: [vue(), tailwind(), react(), preact()],
	markdown: {
		remarkPlugins: [remarkReadingTime, remarkModifiedTime]
	}
})
