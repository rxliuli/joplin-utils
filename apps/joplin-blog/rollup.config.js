import { defineConfig, RollupOptions } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import { workerThreadsSuffix } from 'rollup-plugin-worker-threads'
import shebang from 'rollup-plugin-add-shebang'
import json from '@rollup/plugin-json'
import externals from 'rollup-plugin-node-externals'
import autoExternal from 'rollup-plugin-auto-external'

const plugins = [
  typescript(),
  json(),
  autoExternal(),
  externals(),
  workerThreadsSuffix(),
]
export default defineConfig([
  {
    input: 'src/bin.ts',
    output: { dir: 'dist/cjs', format: 'cjs', sourcemap: true },
    plugins: [...plugins, shebang()],
  },
  {
    input: 'src/index.ts',
    output: [
      { dir: 'dist/cjs', format: 'cjs', sourcemap: true },
      { dir: 'dist/esm', format: 'esm', sourcemap: true },
    ],
    plugins,
  },
])
