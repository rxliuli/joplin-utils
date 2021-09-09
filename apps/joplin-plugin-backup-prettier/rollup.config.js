import typescript from 'rollup-plugin-typescript2'
import externals from 'rollup-plugin-node-externals'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { defineConfig } from 'rollup'
import json from '@rollup/plugin-json'
import copy from 'rollup-plugin-copy'
import { tar } from '@liuli-util/rollup-plugin-tar'

export default defineConfig([
  {
    input: 'src/index.ts',
    output: { dir: 'dist', format: 'cjs', sourcemap: true },
    plugins: [
      copy({
        assets: [['src/manifest.json', 'manifest.json']],
      }),
      typescript(),
      nodeResolve({
        preferBuiltins: true,
      }),
      json(),
      commonjs(),
      externals(),
      ...(process.env.ROLLUP_WATCH
        ? []
        : [
            tar({
              sourceDir: 'dist',
              destPath: 'joplin-plugin-backup-prettier.jpl',
            }),
          ]),
    ],
  },
])
