const sidebar = require('./sidebar.json')

module.exports = {
  base: '/wiki/vuepress/',
  title: 'joplin-vuepress',
  description: 'joplin-blog generate',
  themeConfig: {
    sidebar: [...sidebar],
  },
}
