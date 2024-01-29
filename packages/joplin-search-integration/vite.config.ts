import { defineConfig } from 'vite'
import { firefox } from '@liuli-util/vite-plugin-firefox-dist'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import preact from '@preact/preset-vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    preact(),
    crx({ manifest }) as any,
    firefox({
      browser_specific_settings: {
        gecko: {
          id: '{77acd154-9528-47d8-b340-dbd61729064d}',
          strict_min_version: '109.0',
        },
      },
    }),
    svgr(),
  ],
  base: './',
  build: {
    target: 'esnext',
    minify: false,
    cssMinify: false,
  },
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      port: 5173,
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
})
