import manifest3 from '../manifest.json'

export function convertManifest3To2(manifest: typeof manifest3) {
  const { background, action, manifest_version, host_permissions, permissions, options_page, ...other } = manifest
  return {
    ...other,
    background: {
      scripts: [background.service_worker],
    },
    browser_action: action,
    manifest_version: 2,
    permissions: [...permissions, ...(host_permissions ? [...host_permissions, '<all_urls>'] : [])],
    options_ui: {
      page: options_page,
      browser_style: true,
    },
  }
}
