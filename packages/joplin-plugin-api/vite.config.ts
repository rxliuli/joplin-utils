import { defineConfig } from 'vite'
import { node } from '@liuli-util/vite-plugin-node'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    node({ dts: true, entry: ['src/index.ts', 'src/types.ts'] }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/**/*.d.ts',
          dest: '',
        },
      ],
    }),
  ],
})
