import { defineConfig } from 'vite'
import { node } from '@liuli-util/vite-plugin-node'
import * as path from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { last } from 'lodash-es'

export default defineConfig({
  plugins: [
    node({ formats: ['cjs'] }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/manifest.json',
          dest: '',
          async transform(content: string) {
            const r = await JSON.parse(content)
            r.version = process.env.npm_package_version
            const s = JSON.stringify(r, null, 2)
            return s
          },
        },
      ],
    }) as any,
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
      },
    },
    sourcemap: last([...process.argv.values()]) === '--watch' ? 'inline' : false,
  },
  resolve: {
    alias: {
      'api/types': path.resolve(__dirname, 'api/types.ts'),
      api: path.resolve(__dirname, 'api/index.ts'),
    },
  },
})
