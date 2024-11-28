import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://krew-smp.github.io',
  integrations: [mdx()],
})
