import { defineConfig } from 'tsup'
import alias from 'esbuild-plugin-alias'
import { copy } from 'esbuild-plugin-copy'
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
    copy({
      // this is equal to process.cwd(), which means we use cwd path as base path to resolve `to` path
      // if not specified, this plugin uses ESBuild.build outdir/outfile options as base path.
      resolveFrom: 'cwd',
      assets: {
        from: ['./node_modules/jieba-wasm/pkg/nodejs/jieba_rs_wasm_bg.wasm'],
        to: ['./dist'],
      },
      watch: true,
    }),
  ],
})
