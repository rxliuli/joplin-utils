export function convertManifest3To2(manifest: any) {
  const { background, action, manifest_version, host_permissions, permissions, options_page, ...other } = manifest
  const r = other as any
  r.manifest_version = 2
  if (background.service_worker) {
    r.background = {
      scripts: [background.service_worker],
    }
  }
  if (options_page) {
    r.options_ui = {
      page: options_page,
      browser_style: true,
    }
  }
  if (action) {
    r.browser_action = action
  }
  if (permissions) {
    r.permissions = [...permissions, ...(host_permissions ? [...host_permissions, '<all_urls>'] : [])]
  }
  return r
}
