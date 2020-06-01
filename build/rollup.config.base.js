import { name } from '../package.json'
import { resolve } from 'path'
import typescript from 'rollup-plugin-typescript2'

export default {
  // 入口文件
  input: resolve(__dirname, '../src/index.ts'),
  output: {
    // 打包名称
    name: name,
    exports: 'named',
    // 启用代码映射，便于调试之用
    sourcemap: true,
  },
  plugins: [
    typescript({
      exclude: ['./dist', './src/**/*.test.ts'],
    }),
  ],
}
