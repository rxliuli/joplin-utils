import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    setupFiles: [path.resolve(__dirname, './src/setupTest.ts')],
    maxConcurrency: 1,
    threads: false,
  },
})
