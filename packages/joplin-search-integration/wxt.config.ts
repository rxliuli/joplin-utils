import { defineConfig } from 'wxt'
import path from 'node:path'

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-svelte'],
  manifest: {
    name: 'Joplin Search Integration',
    host_permissions: ['http://localhost:27583/*', 'http://localhost:41184/*'],
    permissions: ['storage'],
    omnibox: {
      keyword: '@joplin',
    },
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
  runner: {
    disabled: true,
  },
})
