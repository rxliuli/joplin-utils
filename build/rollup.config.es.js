import { name } from '../package.json'
import base from './rollup.config.base'
import { resolve } from 'path'

export default {
  ...base,
  output: {
    ...base.output,
    // 打包的文件
    file: resolve(__dirname, `../dist/${name}-es.js`),
    // 打包的格式，umd 支持 commonjs/amd/life 三种方式
    format: 'es',
  },
}
