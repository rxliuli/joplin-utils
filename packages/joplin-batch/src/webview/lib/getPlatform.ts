import { VersionInfo } from 'jpl-vite/api'

export function getPlatform(): VersionInfo['platform'] {
  return (
    (document.querySelector('meta[name="platform"]')?.getAttribute('content') as VersionInfo['platform']) ?? 'desktop'
  )
}
