import { defineConfig } from 'wxt'
import path from 'node:path'

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-svelte'],
  manifest: {
    name: 'Joplin Search Integration',
    description:
      'This browser extension displays relevant Joplin notes alongside search results on popular engines like Google, Bing, and Baidu. It seamlessly integrates personal notes with web searches, enhancing information retrieval and productivity for Joplin users.',
    host_permissions: ['http://localhost:27583/*', 'http://localhost:41184/*'],
    permissions: ['storage', 'tabs'],
  },
  vite() {
    return {
      resolve: {
        alias: {
          $lib: path.resolve('./src/lib'),
        },
      },
    }
  },
})
