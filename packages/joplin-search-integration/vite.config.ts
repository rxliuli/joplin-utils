import { defineConfig } from 'vite'
import { firefox } from '@liuli-util/vite-plugin-firefox-dist'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

export default defineConfig({
  plugins: [
    crx({ manifest }),
    firefox({
      browser_specific_settings: {
        gecko: {
          id: 'joplin-search-integration@rxliuli.com',
          strict_min_version: '109.0',
        },
      },
    }),
  ] as any,
  base: './',
  build: {
    target: 'esnext',
    minify: false,
    cssMinify: false,
  },
})
