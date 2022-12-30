import { defineConfig } from 'vite'
import path from 'node:path'
import { chromeExtension } from 'vite-plugin-chrome-extension'

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
  plugins: [chromeExtension()] as any,
})
