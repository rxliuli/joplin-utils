import typescript from 'rollup-plugin-typescript2'
import externals from 'rollup-plugin-node-externals'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import { defineConfig } from 'rollup'
import { i18nextDtsGen } from '@liuli-util/rollup-plugin-i18next-dts-gen'

export default defineConfig({
  input: 'src/extension.ts',
  output: {
    dir: 'dist/',
    format: 'cjs',
    sourcemap: true,
  },
  external: ['vscode'],
  plugins: [
    copy({
      targets: [{ src: 'src/util/clipboard', dest: 'dist' }],
    }),
    typescript(),
    nodeResolve({
      preferBuiltins: true,
    }),
    commonjs(),
    externals(),
    json(),
    i18nextDtsGen({
      dirs: ['src/i18n'],
    }),
  ],
})
