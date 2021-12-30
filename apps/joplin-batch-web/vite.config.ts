import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vitePluginImp from 'vite-plugin-imp'
import { i18nextDtsGen } from '@liuli-util/rollup-plugin-i18next-dts-gen'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          //参考：http://article.docway.net/details?id=606bf9250a6c642cafe256e6
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
    i18nextDtsGen({
      dirs: ['src/i18n'],
    }),
    checker({ typescript: true }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
})
