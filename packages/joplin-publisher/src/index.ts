import { joplin, SettingItemType } from 'jpl-vite/api'
import { publish } from './publish'
import { initLogger } from './logger'
import path from 'path'

joplin.plugins.register({
  onStart: async function () {
    initLogger(path.resolve(await joplin.plugins.dataDir(), 'logs'))
    // 声明一些插件设置，例如 github token、username、repo 等
    await registerSettings()
    // 实现这个命令的功能，生成 markdown 文件并使用 git 推送到远端仓库
    await registerCommands()
    await registerMenus()
  },
})

async function registerCommands() {
  let isRunning = false
  await joplin.commands.register({
    name: 'joplin-publisher.publish',
    label: 'Publish to GitHub',
    execute: async () => {
      if (isRunning) {
        await joplin.views.dialogs.showMessageBox('The previous task is still running, please wait')
        return
      }
      try {
        isRunning = true
        const config = {
          token: await joplin.settings.value('token'),
          username: await joplin.settings.value('username'),
          repo: await joplin.settings.value('repo'),
          ssg: await joplin.settings.value('ssg'),
          tag: await joplin.settings.value('tag'),
        }
        if (!config.token || !config.username || !config.repo) {
          await joplin.views.dialogs.showMessageBox('Please set the GitHub token, username, and repo in the settings')
          return
        }
        const dataDir = await joplin.plugins.dataDir()
        await publish({ ...config, dir: path.resolve(dataDir, `repos/${config.username}/${config.repo}`) })
      } finally {
        isRunning = false
      }
    },
  })
}

async function registerMenus() {
  joplin.views.menuItems.create('joplin-publisher.publish', 'joplin-publisher.publish')
}

async function registerSettings() {
  await joplin.settings.registerSection('PublisherSection', {
    label: 'Publisher',
    iconName: 'fas fa-cloud-upload-alt',
  })
  await joplin.settings.registerSettings({
    token: {
      value: 'YOUR_GITHUB_TOKEN',
      section: 'PublisherSection',
      type: SettingItemType.String,
      secure: true,
      label: 'GitHub Token',
      public: true,
    },
    username: {
      value: '',
      section: 'PublisherSection',
      type: SettingItemType.String,
      label: 'GitHub Username',
      public: true,
    },
    repo: {
      value: '',
      section: 'PublisherSection',
      type: SettingItemType.String,
      label: 'GitHub Repo',
      public: true,
    },
    ssg: {
      value: 'hexo',
      section: 'PublisherSection',
      type: SettingItemType.String,
      label: 'Static Site Generator',
      public: true,
      isEnum: true,
      options: {
        hexo: 'Hexo',
        hugo: 'Hugo',
      },
    },
    tag: {
      value: 'blog',
      section: 'PublisherSection',
      type: SettingItemType.String,
      label: 'Publish notes with tag',
      public: false,
    },
  })
}
