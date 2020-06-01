import { terser } from 'rollup-plugin-terser'
import { name } from '../package.json'
import base from './rollup.config.base'
import { resolve } from 'path'

export default {
  ...base,
  output: {
    ...base.output,
    // 打包的文件
    file: resolve(__dirname, `../dist/${name}.min.js`),
    // 打包的格式，umd 支持 commonjs/amd/life 三种方式
    format: 'umd',
  },
  plugins: [
    ...base.plugins,
    // js 压缩插件
    terser(),
  ],
}
