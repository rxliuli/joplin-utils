import { defineConfig } from 'tsup'
import alias from 'esbuild-plugin-alias'
import path from 'path'

export default defineConfig({
  entry: ['src/extension.ts'],
  format: ['cjs'],
  sourcemap: true,
  clean: true,
  shims: true,
  external: ['vscode', 'web-streams-polyfill'],
  splitting: true,
  esbuildPlugins: [
    alias({
      'node-fetch': path.resolve(__dirname, './src/polyfill/node-fetch.js'),
      'readable-stream': path.resolve(__dirname, './src/polyfill/readable-stream.js'),
    }) as any,
  ],
})
