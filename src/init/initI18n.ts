import * as nls from 'vscode-nls'

export function initI18n() {
  nls.config({
    messageFormat: nls.MessageFormat.bundle,
    bundleFormat: nls.BundleFormat.standalone,
  })()
}
