const sidebar = require('./sidebar.json')

module.exports = {
  base: '/joplin-blog/wiki/vuepress/',
  title: 'joplin-vuepress',
  description: 'joplin-blog generate',
  themeConfig: {
    sidebar: [{ title: 'Home', path: '/' }, ...sidebar],
  },
}
