import { defineConfig } from 'rollup'
import autoExternal from 'rollup-plugin-auto-external'
import typescript from 'rollup-plugin-typescript2'
import externals from 'rollup-plugin-node-externals'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      exports: 'named',
      name: 'joplin',
      file: 'dist/index.js',
      sourcemap: true,
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      sourcemap: true,
      format: 'esm',
    },
  ],
  plugins: [
    typescript(),
    externals(),
    autoExternal(),
    copy({
      targets: [{ src: 'src/api/*.d.ts', dest: 'dist/api' }],
    }),
  ],
})
