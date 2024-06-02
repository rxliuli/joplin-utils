import { defineConfig } from 'vitest/config'
import { node } from '@liuli-util/vite-plugin-node'
import path from 'path'

export default defineConfig({
  test: {
    setupFiles: [path.resolve(__dirname, './src/setupTest.ts')],
    maxConcurrency: 1,
    threads: false,
  },
  plugins: [node({ dts: true })] as any,
})
