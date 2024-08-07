import joplin from 'joplin-plugin-api'
import { IProtocol, onMessage } from './message'
import { defineExtensionMessaging } from 'jpl-vite/messaging'

joplin.plugins.register({
  onStart: async function () {
    await registerSettings()
    // 实现这个命令的功能，生成 markdown 文件并使用 git 推送到远端仓库
    await registerCommands()
    await registerMenus()
  },
})

async function registerCommands() {
  await joplin.commands.register({
    name: 'webviewTest',
    label: 'Webview Test',
    async execute() {
      const dialogs = joplin.views.dialogs
      const handler = await dialogs.create(new Date().toISOString())
      await dialogs.addScript(handler, '/webview/index.js')
      await dialogs.addScript(handler, '/webview/index.css')
      await dialogs.setButtons(handler, [
        {
          id: 'close',
          title: 'Close',
        },
      ])
      const { onMessage, sendMessage } = defineExtensionMessaging<IProtocol>(handler)
      let last = 0
      onMessage('add', (a, b) => {
        last = a + b
        return last
      })
      onMessage('value', () => last)
      await dialogs.open(handler)
    },
  })
}

async function registerMenus() {}

async function registerSettings() {}
