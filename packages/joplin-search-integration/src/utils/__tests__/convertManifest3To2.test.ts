import { expect, it } from 'vitest'
import { convertManifest3To2 } from '../convertManifest3To2'

const v3 = {
  name: 'Joplin Search Integration',
  version: '0.2.1',
  description: 'When using search, related Joplin notes are also displayed in the search results.',
  manifest_version: 3,
  background: {
    service_worker: 'background.js',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['content-scripts/main.js'],
    },
  ],
  action: {
    default_popup: 'popup/index.html',
  },
  host_permissions: ['http://localhost:27583/*', 'http://localhost:41184/*'],
  permissions: ['storage'],
  icons: {
    '16': 'assets/icon-16.png',
    '32': 'assets/icon-32.png',
    '48': 'assets/icon-48.png',
    '128': 'assets/icon-128.png',
  },
  options_page: 'options/index.html',
}

const v2 = {
  name: 'Joplin Search Integration',
  version: '0.2.1',
  description: 'When using search, related Joplin notes are also displayed in the search results.',
  manifest_version: 2,
  background: {
    scripts: ['background.js'],
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['content-scripts/main.js'],
    },
  ],
  browser_action: {
    default_popup: 'popup/index.html',
  },
  permissions: ['storage', 'http://localhost:27583/*', 'http://localhost:41184/*', '<all_urls>'],
  icons: {
    '16': 'assets/icon-16.png',
    '32': 'assets/icon-32.png',
    '48': 'assets/icon-48.png',
    '128': 'assets/icon-128.png',
  },
  options_ui: {
    page: 'options/index.html',
    browser_style: true,
  },
}

it('convertManifestChromeToFirefox', () => {
  expect(convertManifest3To2(v3)).deep.eq(v2)
})
