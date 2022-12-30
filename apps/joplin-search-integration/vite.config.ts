import { defineConfig, Plugin } from 'vite'
import path from 'node:path'
import { chromeExtension } from 'vite-plugin-chrome-extension'
import { firefoxOutput } from '@liuli-util/vite-plugin-chrome-extension-dist-firefox'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: 'src/manifest.json',
    },
    minify: false,
    assetsInlineLimit: 10096,
  },
  plugins: [chromeExtension() as any, firefoxOutput()],
})
