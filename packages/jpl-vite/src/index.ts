import { UserConfig } from 'vite'

type Platform = 'desktop' | 'mobile'

type Category =
  | 'appearance'
  | 'developer tools'
  | 'editor'
  | 'files'
  | 'integrations'
  | 'personal knowledge management'
  | 'productivity'
  | 'search'
  | 'tags'
  | 'themes'
  | 'viewer'

interface Image {
  src: string
  label: string
}

interface Icons {
  16?: string
  32?: string
  48?: string
  128?: string
}

interface PluginManifest {
  id: string
  manifest_version: 1
  name: string
  app_min_version: string
  app_min_version_mobile?: string
  version?: string
  platforms?: Platform[]
  description?: string
  author?: string
  keywords?: string[]
  homepage_url?: string
  repository_url?: string
  categories?: Category[]
  screenshots?: Image[]
  icons?: Icons
  promo_tile?: Image
}

export interface PluginConfig extends PluginManifest {
  vite?: UserConfig
}

export interface ResolvedPluginConfig extends PluginConfig {
  root: string
}

export function defineConfig(config: PluginConfig) {
  return config
}
