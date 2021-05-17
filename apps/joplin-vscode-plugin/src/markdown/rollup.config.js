import sucrase from '@rollup/plugin-sucrase'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { resolve } from 'path'

function gen(name) {
  return {
    input: resolve(__dirname, `./${name}.ts`),
    output: {
      file: resolve(__dirname, `../../out/markdown/${name}.js`),
      format: 'iife',
    },
    plugins: [
      nodeResolve(),
      sucrase({
        exclude: ['node_modules/**'],
        transforms: ['typescript'],
      }),
    ],
  }
}

export default ['tag-preview'].map(gen)
