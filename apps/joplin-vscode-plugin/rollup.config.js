import typescript from 'rollup-plugin-typescript2'
import externals from 'rollup-plugin-node-externals'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/extension.ts',
  output: [
    {
      file: 'dist/extension.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: ['vscode'],
  plugins: [
    typescript(),
    nodeResolve({
      preferBuiltins: true,
    }),
    commonjs(),
    externals(),
    json(),
  ],
}
