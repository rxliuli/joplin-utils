import path from 'path'
import { defineConfig } from '../jpl-vite/dist'
import react from '@vitejs/plugin-react'

export default defineConfig({
  id: 'rxliuli.joplin-batch',
  manifest_version: 1,
  app_min_version: '2.13',
  name: 'Joplin Batch',
  description:
    'Handle some bulk operations that Joplin itself does not support and present them in a visual interface.',
  author: 'rxliuli',
  homepage_url: 'https://joplin-utils.rxliuli.com/en-US/joplin-batch-web/',
  repository_url: 'https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-batch',
  keywords: ['Batch'],
  categories: ['productivity'],
  icons: {},
  vite: {
    plugins: [react() as any],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/webview'),
      },
    },
  },
})
