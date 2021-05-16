import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'

/** @type {import('rollup').RollupOptions} */
export default [
  {
    // 入口文件
    input: './src/index.ts',
    output: [
      {
        // 打包名称
        file: './dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        // 打包名称
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
    // 入口文件
    input: './src/bin.ts',
    output: [
      {
        // 打包名称
        file: './dist/bin.js',
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.bin.json',
      }),
      json(),
      // terser(), // minifies generated bundles
    ],
  },
]
