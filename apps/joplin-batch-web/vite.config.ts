import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { i18nextDtsGen } from '@liuli-util/rollup-plugin-i18next-dts-gen'
import checker from 'vite-plugin-checker'
import { version } from '@liuli-util/vite-plugin-version-info'

export default defineConfig({
  base: './',
  plugins: [reactRefresh(), i18nextDtsGen({ dirs: ['src/i18n'] }), checker({ typescript: true }), version()] as any,
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
  },
})
