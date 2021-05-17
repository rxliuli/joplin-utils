import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: './dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: './dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript(),
      // terser(), // minifies generated bundles
    ],
  },
  {
    input: './src/bin.ts',
    output: [
      {
        file: './dist/bin.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            declarationMap: false,
          },
        },
      }),
      json(),
      // terser(), // minifies generated bundles
    ],
  },
]
