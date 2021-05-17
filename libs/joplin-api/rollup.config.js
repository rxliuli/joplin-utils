import { resolve } from 'path'
import { name } from './package.json'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: resolve(__dirname, 'src/index.ts'),
  external: ['axios', 'query-string', 'form-data', 'node-fetch'],
  output: [
    {
      name: name,
      exports: 'named',
      sourcemap: true,
      globals: {
        axios: 'axios',
        'form-data': 'FormData',
        'node-fetch': 'fetch',
        'query-string': 'queryString',
      },
      file: resolve(__dirname, `dist/index.js`),
      format: 'umd',
    },
    {
      name: name,
      exports: 'named',
      sourcemap: true,
      globals: {
        axios: 'axios',
        'form-data': 'FormData',
        'node-fetch': 'fetch',
        'query-string': 'queryString',
      },
      file: resolve(__dirname, `dist/index.es.js`),
      format: 'es',
    },
  ],
  plugins: [
    typescript({
      exclude: ['./dist', './test'],
    }),
  ],
}

