import path from 'path'
import { build as viteBuild, UserConfig, mergeConfig } from 'vite'
import { ResolvedPluginConfig } from '.'
import { omit } from 'lodash-es'
import { readFile, writeFile } from 'fs/promises'
import { pathExists } from 'fs-extra'

export function webview(config: ResolvedPluginConfig): UserConfig {
  const r: UserConfig = {
    root: path.resolve(config.root, 'src/webview/'),
    build: {
      outDir: path.resolve(config.root, 'dist/webview/'),
      rollupOptions: {
        output: {
          entryFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
          manualChunks: undefined,
        },
      },
      emptyOutDir: true,
    },
  }
  if (process.env.NODE_ENV === 'development') {
    r.build!.sourcemap = 'inline'
    r.build!.minify = false
  }
  return r
}

function main(config: ResolvedPluginConfig): UserConfig {
  const r: UserConfig = {
    build: {
      lib: {
        entry: path.resolve(config.root, 'src/index.ts'),
        formats: ['cjs'],
      },
      rollupOptions: {
        output: {
          entryFileNames: '[name].js',
        },
      },
      emptyOutDir: true,
    },
  }
  if (process.env.NODE_ENV === 'development') {
    r.build!.sourcemap = 'inline'
    r.build!.minify = false
  }
  return r
}

async function emitManifest(config: ResolvedPluginConfig) {
  const content = omit(config, 'vite')
  const pkg = JSON.parse(await readFile(path.resolve(config.root, 'package.json'), 'utf-8'))
  content.version = pkg.version
  await writeFile(path.resolve('dist/manifest.json'), JSON.stringify(content, null, 2))
}

export async function build(config: ResolvedPluginConfig) {
  const defaultConfig: UserConfig = {
    root: config.root,
  }
  await viteBuild(mergeConfig(main(config), defaultConfig))
  await emitManifest(config)
  if (await pathExists(path.resolve(config.root, 'src/webview/index.html'))) {
    let c = webview(config)
    if (config.vite) {
      c = mergeConfig(c, config.vite)
    }
    await viteBuild(c)
  }
}
