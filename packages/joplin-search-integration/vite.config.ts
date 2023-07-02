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
          id: '{77acd154-9528-47d8-b340-dbd61729064d}',
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
