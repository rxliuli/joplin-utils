import { defineConfig } from 'vitest/config'
import { node } from '@liuli-util/vite-plugin-node'
import path from 'path'

export default defineConfig({
  test: {
    setupFiles: [path.resolve(__dirname, './src/setupTest.ts')],
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
  },
  plugins: [node({ dts: true })] as any,
})
