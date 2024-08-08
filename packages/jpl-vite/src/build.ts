import path from 'path'
import { build as viteBuild, UserConfig, mergeConfig, loadEnv } from 'vite'
import { ResolvedPluginConfig } from '.'
import { omit } from 'lodash-es'
import { readFile, writeFile } from 'fs/promises'
import { mkdirp, pathExists } from 'fs-extra/esm'
import { bundleRequire } from 'bundle-require'

function devMode(config: UserConfig) {
  if (process.env.NODE_ENV !== 'development') {
    return config
  }
  return mergeConfig(config, {
    build: {
      sourcemap: 'inline',
      minify: false,
      watch: {},
    },
  })
}

export function defineEnv(config: ResolvedPluginConfig) {
  const env = loadEnv(process.env.NODE_ENV ?? 'development', config.root)
  return Object.entries(env).reduce((acc, [key, value]) => {
    acc[`import.meta.env.${key}`] = JSON.stringify(value)
    return acc
  }, {} as Record<string, string>)
}

export function webview(config: ResolvedPluginConfig): UserConfig {
  return devMode({
    root: path.resolve(config.root, 'src/webview/'),
    build: {
      outDir: path.resolve(config.root, 'dist/webview/'),
      rollupOptions: {
        output: {
          entryFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
          manualChunks: undefined,
          format: 'iife',
        },
      },
      emptyOutDir: true,
      cssCodeSplit: false,
    },
    define: defineEnv(config),
  })
}

function main(config: ResolvedPluginConfig): UserConfig {
  return devMode({
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
    define: defineEnv(config),
    plugins: [
      {
        name: 'emitManifest',
        async buildEnd(error) {
          if (error) {
            return
          }
          await emitManifest(config)
        },
        async closeBundle() {
          await emitManifest(config)
        },
      },
    ],
  })
}

async function emitManifest(config: ResolvedPluginConfig) {
  const content = omit(config, 'vite')
  const pkg = JSON.parse(await readFile(path.resolve(config.root, 'package.json'), 'utf-8'))
  content.version = pkg.version
  await mkdirp(path.resolve(config.root, 'dist'))
  await writeFile(path.resolve(config.root, 'dist/manifest.json'), JSON.stringify(content, null, 2))
}

export async function build(config: ResolvedPluginConfig) {
  const defaultConfig: UserConfig = {
    root: config.root,
  }
  await viteBuild(mergeConfig(main(config), defaultConfig))
  if (await pathExists(path.resolve(config.root, 'src/webview/index.html'))) {
    let c = webview(config)
    if (config.vite) {
      c = mergeConfig(c, config.vite)
    }
    await viteBuild(c)
  }
}

export async function parseConfig(): Promise<ResolvedPluginConfig> {
  const { mod } = await bundleRequire({
    filepath: 'jpl.config.ts',
  })
  if (typeof mod.default !== 'object') {
    throw new Error('The configuration file must export a function or an array.')
  }
  const config = mod.default as ResolvedPluginConfig
  config.root = path.resolve()
  return config as ResolvedPluginConfig
}
