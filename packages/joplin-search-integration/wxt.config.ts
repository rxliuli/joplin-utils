import { defineConfig } from 'wxt'
import path from 'node:path'

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-svelte'],
  manifest: {
    name: 'Joplin Search Integration',
    description: 'When using search, related Joplin notes are also displayed in the search results.',
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
