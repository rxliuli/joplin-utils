import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
  },
  plugins: [
    {
      name: 'vscode',
      resolveId(id) {
        if (id === 'vscode') return id
      },
      load(id) {
        if (id === 'vscode') return ''
      },
    },
  ],
})
