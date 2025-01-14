import { defineConfig, UserConfig, DefaultTheme } from 'vitepress'
import typedocSidebar from '../en-US/api/typedoc-sidebar.json'
import { readFile } from 'fs/promises'
import path from 'path'
import { twitterMeta } from 'vitepress-plugin-twitter-card'

export default defineConfig({
  title: 'Joplin Utils',
  locales: {
    'en-US': {
      lang: 'en-US',
      label: 'English',
      themeConfig: {
        logoLink: '/',
        sidebar: [
          {
            text: 'Joplin VSCode Plugin',
            link: '/en-US/joplin-vscode-plugin/',
            items: [
              {
                text: '',
                link: '/en-US/joplin-vscode-plugin/',
              },
              {
                text: 'FAQ',
                link: '/en-US/joplin-vscode-plugin/faq',
              },
              {
                text: 'Features',
                link: '/en-US/joplin-vscode-plugin/feature',
              },
              {
                text: 'Recommended Extensions',
                link: '/en-US/joplin-vscode-plugin/recommended',
              },
              {
                text: 'Limitations',
                link: '/en-US/joplin-vscode-plugin/limitations',
              },
            ],
          },
          {
            text: 'Joplin Search Integration',
            link: '/en-US/joplin-search-integration/',
            items: [
              {
                text: 'Privacy Policy',
                link: 'https://rxliuli.com/webstore/privacy',
              },
            ],
          },
          {
            text: 'Joplin Publisher',
            link: '/en-US/joplin-publisher/',
          },
          {
            text: 'Joplin Batch',
            link: '/en-US/joplin-batch/',
          },
          {
            text: 'API',
            items: typedocSidebar,
          },
        ],
      },
    },
    'zh-CN': {
      lang: 'zh-CN',
      label: '中文简体',
      themeConfig: {
        sidebar: [
          {
            text: 'Joplin VSCode Plugin',
            link: '/zh-CN/joplin-vscode-plugin/',
            items: [
              {
                text: '',
                link: '/zh-CN/joplin-vscode-plugin/',
              },
              {
                text: '常问问题',
                link: '/zh-CN/joplin-vscode-plugin/faq',
              },
              {
                text: '功能',
                link: '/zh-CN/joplin-vscode-plugin/feature',
              },
              {
                text: '推荐扩展',
                link: '/zh-CN/joplin-vscode-plugin/recommended',
              },
              {
                text: '限制',
                link: '/zh-CN/joplin-vscode-plugin/limitations',
              },
            ],
          },
          {
            text: 'Joplin Search Integration',
            link: '/zh-CN/joplin-search-integration/',
            items: [
              {
                text: '隐私政策',
                link: 'https://rxliuli.com/webstore/privacy',
              },
            ],
          },
          {
            text: 'Joplin Publisher',
            link: '/zh-CN/joplin-publisher/',
          },
          {
            text: 'Joplin Batch',
            link: '/zh-CN/joplin-batch/',
          },
          {
            text: 'API',
            items: typedocSidebar,
          },
        ],
      },
    },
  },
  themeConfig: {
    search: { provider: 'local' },
    logo: '/images/logo.svg',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present rxliuli',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/rxliuli/joplin-utils',
      },
      {
        icon: 'twitter',
        link: 'https://x.com/moeruri',
      },
    ],
  },
  head: [
    ['link', { rel: 'icon', href: '/images/logo.svg' }],
    ['script', { async: '', src: `https://www.googletagmanager.com/gtag/js?id=G-9V6G332LX9` }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9V6G332LX9');`,
    ],
  ],
  ignoreDeadLinks: 'localhostLinks',
  extends() {
    return twitterMeta({
      site: 'rxliuli',
      image: 'https://joplin-utils.rxliuli.com/images/logo.png',
    })
  },
})
