import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import preact from '@astrojs/preact'
import { remarkReadingTime } from './src/scripts/remark-reading-time.mjs'
import { remarkModifiedTime } from './src/scripts/remark-modified-time.mjs'
import mdx from '@astrojs/mdx'

import markdoc from '@astrojs/markdoc'

// https://astro.build/config
export default defineConfig({
	site: 'https://festack-astro-template.netlify.app',
	integrations: [
		vue(),
		tailwind(),
		react(),
		preact(),
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: { theme: 'dracula' },
			// remarkPlugins: [remarkToc],
			// rehypePlugins: [rehypeMinifyHtml],
			remarkRehype: { footnoteLabel: 'Footnotes' },
			gfm: false
		}),
		markdoc()
	],
	markdown: {
		remarkPlugins: [remarkReadingTime, remarkModifiedTime]
	},
	vite: {
		// 示例：直接在 Astro 项目中添加自定义 Vite 插件
		plugins: []
	}
})
