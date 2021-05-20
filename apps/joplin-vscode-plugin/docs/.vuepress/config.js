module.exports = {
  base: '/joplin-vscode-plugin/',
  locales: {
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Joplin Vscode Plugin',
      description:
        'joplin-vscode-plugin offers editing and management of Joplin notes with the power and flexibility of VSCode.',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Joplin VSCode 插件',
      description:
        'joplin-vscode-plugin 提供在 vscode 中管理 joplin 笔记的功能，包括常见的查看、编辑笔记，管理笔记的标签，添加、修改附件，内部链接、搜索等功能。',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'Other', link: '/other/' },
          {
            text: 'GitHub',
            link: 'https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-vscode-plugin',
          },
        ],
        sidebar: {
          '/guide/': [
            '',
            'faq',
            'configuration',
            'recommended-extension',
            'limitations',
          ],
          '/other/': [
            '',
            'roadmap',
            {
              title: 'Joplin Forum',
              path: 'https://discourse.joplinapp.org/',
            },
            {
              title: 'VSCode',
              collapsable: false,
              children: [
                {
                  title: 'VSCode Official Document',
                  path: 'https://code.visualstudio.com/docs',
                },
              ],
            },
            {
              title: 'Markdown',
              collapsable: false,
              children: [
                {
                  title: 'Markdown Guide (English)',
                  path: 'https://www.markdownguide.org/',
                },
              ],
            },
            {
              title: 'VSCode + Markdown',
              collapsable: false,
              children: [
                {
                  title: 'VSCode Markdown Official Document',
                  path: 'https://code.visualstudio.com/docs/languages/markdown',
                },
              ],
            },
          ],
        },
      },
      '/zh/': {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/' },
          { text: '其他', link: '/zh/other/' },
          {
            text: 'GitHub',
            link: 'https://github.com/rxliuli/joplin-utils/tree/master/apps/joplin-vscode-plugin',
          },
        ],
        sidebar: {
          '/zh/guide/': [
            '',
            'faq',
            'configuration',
            'recommended-extension',
            'limitations',
          ],
          '/zh/other/': [
            '',
            'dev',
            'roadmap',
            {
              title: 'Joplin 论坛',
              path: 'https://discourse.joplinapp.org/',
            },
            {
              title: 'VSCode',
              collapsable: false,
              children: [
                {
                  title: 'VSCode 官方文档',
                  path: 'https://code.visualstudio.com/docs',
                },
                {
                  title: 'VSCode 中文翻译文档',
                  path: 'https://jeasonstudio.gitbooks.io/vscode-cn-doc/',
                },
              ],
            },
            {
              title: 'Markdown',
              collapsable: false,
              children: [
                {
                  title: 'Markdown 指南（英文）',
                  path: 'https://www.markdownguide.org/',
                },
                {
                  title: 'Markdown 指南（翻译）',
                  path: 'https://www.markdown.xyz/',
                },
              ],
            },
            {
              title: 'VSCode + Markdown',
              collapsable: false,
              children: [
                {
                  title: 'VSCode Markdown 官方文档',
                  path: 'https://code.visualstudio.com/docs/languages/markdown',
                },
                {
                  title: 'VSCode 搭建 markdown 写作环境',
                  path: 'https://blog.rxliuli.com/p/43851eb5/',
                },
                {
                  title: 'Markdown Extension Pack(吾辈发布的)',
                  path: 'https://marketplace.visualstudio.com/items?itemName=rxliuli.markdown-extension-pack',
                },
              ],
            },
          ],
        },
      },
    },
  },
}
