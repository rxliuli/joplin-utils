module.exports = {
  bundler: '@vuepress/vite',
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
  themeConfig: {
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
            text: 'GitHub',
            link: 'https://github.com/rxliuli/joplin-utils',
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
                '/joplin-vscode-plugin/other/roadmap.md',
                {
                  text: 'Joplin Forum',
                  link: 'https://discourse.joplinapp.org/',
                },
                {
                  text: 'VSCode',
                  collapsable: false,
                  children: [
                    {
                      text: 'VSCode Official Document',
                      link: 'https://code.visualstudio.com/docs',
                    },
                  ],
                },
                {
                  text: 'Markdown',
                  collapsable: false,
                  children: [
                    {
                      text: 'Markdown Guide (English)',
                      link: 'https://www.markdownguide.org/',
                    },
                  ],
                },
                {
                  text: 'VSCode + Markdown',
                  collapsable: false,
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
          '/joplin-api/': [
            { text: 'Introduction', link: '' },
            {
              text: 'API Doc',
              link: 'https://joplin-utils.rxliuli.com/joplin-api/',
            },
          ],
        },
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
                text: 'joplin-blog',
                link: '/zh/joplin-blog/',
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
                text: 'joplin-plugin-api',
                link: '/zh/joplin-plugin-api/',
              },
            ],
          },
          {
            text: 'GitHub',
            link: 'https://github.com/rxliuli/joplin-utils',
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
                '/zh/joplin-vscode-plugin/other/dev.md',
                '/zh/joplin-vscode-plugin/other/README.md',
                '/zh/joplin-vscode-plugin/other/roadmap.md',
                {
                  text: 'Joplin 论坛',
                  link: 'https://discourse.joplinapp.org/',
                },
                {
                  text: 'VSCode',
                  collapsable: false,
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
                  collapsable: false,
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
                  collapsable: false,
                  children: [
                    {
                      text: 'VSCode Markdown 官方文档',
                      link: 'https://code.visualstudio.com/docs/languages/markdown',
                    },
                    {
                      text: 'VSCode 搭建 markdown 写作环境',
                      link: 'https://blog.rxliuli.com/p/43851eb5/',
                    },
                    {
                      text: 'Markdown Extension Pack(吾辈发布的)',
                      link: 'https://marketplace.visualstudio.com/items?itemName=rxliuli.markdown-extension-pack',
                    },
                  ],
                },
              ],
            },
          ],
          '/zh/joplin-blog/': [
            { text: '简介', link: '/zh/joplin-blog/' },
            { text: '安装指南', link: '/zh/joplin-blog/guide' },
            {
              text: 'NPM',
              link: 'https://www.npmjs.com/package/joplin-blog',
            },
            {
              text: 'blog 示例',
              children: [
                {
                  text: 'hexo',
                  link: 'https://joplin-utils.rxliuli.com/blog/hexo/',
                },
                {
                  text: 'vuepress',
                  link: 'https://joplin-utils.rxliuli.com/blog/vuepress/',
                },
              ],
            },
            {
              text: 'wiki 示例',
              children: [
                {
                  text: 'vuepress',
                  link: 'https://joplin-utils.rxliuli.com/wiki/vuepress/',
                },
                {
                  text: 'docsify',
                  link: 'https://joplin-utils.rxliuli.com/wiki/docsify/',
                },
              ],
            },
          ],
          '/zh/joplin-api/': [
            { text: '简介', link: '' },
            {
              text: 'API 文档',
              link: 'https://joplin-utils.rxliuli.com/joplin-api/',
            },
          ],
          '/zh/joplin-plugin-api/': [
            { text: '简介', link: '' },
            {
              text: 'API 文档',
              link: 'https://joplin-utils.rxliuli.com/joplin-plugin-api/',
            },
          ],
        },
      },
    },
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ],
}
