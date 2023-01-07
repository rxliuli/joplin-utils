import { defineUserConfig } from 'vuepress-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

/**
 * @type import('vuepress-vite').AppConfig
 */
export default defineUserConfig({
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  locales: {
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Joplin Utils',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Joplin Utils',
    },
  },
  /**
   * @type import('@vuepress/theme-default').DefaultThemeData
   */
  theme: defaultTheme({
    locales: {
      '/': {
        navbar: [
          { text: 'Home', link: '/' },
          {
            text: 'Tools',
            children: [
              {
                text: 'joplin-vscode-plugin',
                link: '/joplin-vscode-plugin/',
              },
              {
                text: 'joplin-search-integration',
                link: '/joplin-search-integration/',
              },
              {
                text: 'joplin-batch-web',
                link: '/joplin-batch-web/',
              },
            ],
          },
          {
            text: 'Developer',
            children: [
              {
                text: 'joplin-api',
                link: '/joplin-api/',
              },
              {
                text: 'joplin-plugin-api',
                link: '/zh/joplin-plugin-api/',
              },
            ],
          },
          {
            text: 'Contribute',
            children: [
              {
                text: 'Getting involved',
                link: '/dev/',
              },
            ],
          },
        ],
        sidebar: {
          '/joplin-vscode-plugin/': [
            {
              text: 'Guide',
              children: [
                '/joplin-vscode-plugin/',
                '/joplin-vscode-plugin/guide/faq',
                '/joplin-vscode-plugin/guide/feature',
                '/joplin-vscode-plugin/guide/recommended-extension',
                '/joplin-vscode-plugin/guide/limitations',
              ],
            },
            {
              text: 'Other',
              children: [
                '/joplin-vscode-plugin/other/',
                '/joplin-vscode-plugin/other/roadmap',
                {
                  text: 'Joplin Forum',
                  link: 'https://discourse.joplinapp.org/',
                },
                {
                  text: 'VSCode',
                  children: [
                    {
                      text: 'VSCode Official Document',
                      link: 'https://code.visualstudio.com/docs',
                    },
                  ],
                },
                {
                  text: 'Markdown',
                  children: [
                    {
                      text: 'Markdown Guide (English)',
                      link: 'https://www.markdownguide.org/',
                    },
                  ],
                },
                {
                  text: 'VSCode + Markdown',
                  children: [
                    {
                      text: 'VSCode Markdown Official Document',
                      link: 'https://code.visualstudio.com/docs/languages/markdown',
                    },
                  ],
                },
              ],
            },
          ],
          '/joplin-search-integration/': [
            {
              text: 'Introduction',
              link: '/joplin-search-integration/',
            },
            {
              text: 'Chrome Store',
              link: 'https://chrome.google.com/webstore/detail/joplin-search-integration/mcjkdcifkhjenpfjacnbhpdcnjknjkhj',
            },
            {
              text: 'Firefox Add-ONS',
              link: 'https://addons.mozilla.org/firefox/addon/joplin-search-integration/',
            },
          ],
          '/joplin-batch-web/': [
            {
              text: 'Introduction',
              link: '/joplin-batch-web/',
            },
            {
              text: 'Other functions',
              link: '/joplin-batch-web/feature',
            },
            {
              text: 'Online site',
              link: 'https://joplin-utils.rxliuli.com/web/joplin-batch-web/',
            },
          ],
          '/joplin-api/': [
            { text: 'Introduction', link: '' },
            {
              text: 'API Doc',
              link: 'https://joplin-utils.rxliuli.com/api/joplin-api/',
            },
          ],
          '/dev/': [{ text: 'Introduction', link: '/dev/' }, '/dev/doc', '/dev/dev', '/dev/require'],
        },
        repo: 'https://github.com/rxliuli/joplin-utils',
        docsBranch: 'master',
        docsDir: '/website/docs',
        editLinkText: 'Edit this page on GitHub',
        lastUpdatedText: 'Last Updated',
        contributorsText: 'Contributors',
      },
      '/zh/': {
        navbar: [
          { text: '首页', link: '/zh/' },
          {
            text: '工具',
            children: [
              {
                text: 'joplin-vscode-plugin',
                link: '/zh/joplin-vscode-plugin/',
              },
              {
                text: 'joplin-search-integration',
                link: '/zh/joplin-search-integration/',
              },
              {
                text: 'joplin-batch-web',
                link: '/zh/joplin-batch-web/',
              },
            ],
          },
          {
            text: '开发者',
            children: [
              {
                text: 'joplin-api',
                link: '/zh/joplin-api/',
              },
              {
                text: 'joplin-plugin-cli',
                link: '/zh/joplin-plugin-cli/',
              },
              {
                text: 'joplin-plugin-api',
                link: '/zh/joplin-plugin-api/',
              },
            ],
          },
          {
            text: '贡献',
            children: [
              {
                text: '参与项目',
                link: '/zh/dev/',
              },
              {
                text: 'Joplin 论坛',
                link: 'https://discourse.joplinapp.org/',
              },
            ],
          },
        ],
        sidebar: {
          '/zh/joplin-vscode-plugin/': [
            {
              text: '指南',
              children: [
                '/zh/joplin-vscode-plugin/',
                '/zh/joplin-vscode-plugin/guide/faq',
                '/zh/joplin-vscode-plugin/guide/feature',
                '/zh/joplin-vscode-plugin/guide/recommended-extension',
                '/zh/joplin-vscode-plugin/guide/limitations',
              ],
            },
            {
              text: '其他',
              children: [
                '/zh/joplin-vscode-plugin/other/',
                '/zh/joplin-vscode-plugin/other/dev',
                '/zh/joplin-vscode-plugin/other/roadmap',
                {
                  text: 'VSCode',
                  children: [
                    {
                      text: 'VSCode 官方文档',
                      link: 'https://code.visualstudio.com/docs',
                    },
                    {
                      text: 'VSCode 中文翻译文档',
                      link: 'https://jeasonstudio.gitbooks.io/vscode-cn-doc/',
                    },
                  ],
                },
                {
                  text: 'Markdown',
                  children: [
                    {
                      text: 'Markdown 指南（英文）',
                      link: 'https://www.markdownguide.org/',
                    },
                    {
                      text: 'Markdown 指南（翻译）',
                      link: 'https://www.markdown.xyz/',
                    },
                  ],
                },
                {
                  text: 'VSCode + Markdown',
                  children: [
                    {
                      text: 'VSCode Markdown 官方文档',
                      link: 'https://code.visualstudio.com/docs/languages/markdown',
                    },
                  ],
                },
              ],
            },
          ],
          '/zh/joplin-search-integration/': [
            {
              text: '简介',
              link: '/zh/joplin-search-integration/',
            },
            {
              text: 'Chrome 商店',
              link: 'https://chrome.google.com/webstore/detail/joplin-search-integration/mcjkdcifkhjenpfjacnbhpdcnjknjkhj',
            },
            {
              text: 'Firefox 商店',
              link: 'https://addons.mozilla.org/firefox/addon/joplin-search-integration/',
            },
          ],
          '/zh/joplin-batch-web/': [
            {
              text: '简介',
              link: '/zh/joplin-batch-web/',
            },
            {
              text: '其他功能',
              link: '/zh/joplin-batch-web/feature',
            },
            {
              text: '在线网站',
              link: 'https://joplin-utils.rxliuli.com/web/joplin-batch-web/',
            },
          ],
          '/zh/joplin-api/': [
            { text: '简介', link: '/zh/joplin-api/' },
            {
              text: 'NPM',
              link: 'https://www.npmjs.com/package/joplin-api',
            },
            {
              text: 'API 文档',
              link: 'https://joplin-utils.rxliuli.com/api/joplin-api/',
            },
          ],
          '/zh/dev/': [{ text: '简介', link: '/zh/dev/' }, '/zh/dev/doc', '/zh/dev/dev', '/zh/dev/require'],
        },
        repo: 'https://github.com/rxliuli/joplin-utils',
        docsBranch: 'master',
        docsDir: '/website/docs',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
      },
    },
  }),
  plugins: [
    searchPlugin(),
    googleAnalyticsPlugin({
      id: 'G-9V6G332LX9',
    }),
  ],
})
