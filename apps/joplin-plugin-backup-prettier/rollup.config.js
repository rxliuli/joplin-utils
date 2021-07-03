import typescript from 'rollup-plugin-typescript2'
import externals from 'rollup-plugin-node-externals'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import copy from 'rollup-plugin-copy'
import { defineConfig } from 'rollup'

export default defineConfig([
  {
    input: 'src/index.ts',
    output: { file: 'dist/index.js', format: 'cjs', sourcemap: true },
    plugins: [
      copy({
        targets: [{ src: 'src/manifest.json', dest: 'dist' }],
      }),
      typescript(),
      nodeResolve({
        preferBuiltins: true,
      }),
      commonjs(),
      externals(),
    ],
  },
])
