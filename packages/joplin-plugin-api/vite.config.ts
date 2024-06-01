import { defineConfig } from 'vite'
import { node } from '@liuli-util/vite-plugin-node'

export default defineConfig({
  plugins: [node({ dts: true, entry: ['src/index.ts', 'src/types.ts'] })],
})
