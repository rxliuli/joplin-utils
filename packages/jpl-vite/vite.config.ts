import { defineConfig } from 'vite'
import { node } from '@liuli-util/vite-plugin-node'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    node({ entry: ['src/index.ts', 'src/bin.ts', 'src/webview.ts', 'src/api.ts', 'src/messaging.ts'] }),
    dts({
      entryRoot: 'src',
      exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts', 'src/**/*.stories.ts', 'src/bin.ts'],
    }),
  ],
  build: {
    minify: false,
    sourcemap: true,
  },
})
