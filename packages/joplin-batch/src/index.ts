import { MenuItemLocation, ViewHandle, joplin } from 'jpl-vite/api'
import { IProtocol } from './message'
import { defineExtensionMessaging } from 'jpl-vite/messaging'
import { joplinDataApi } from 'joplin-api'
import { get } from 'lodash-es'

joplin.plugins.register({
  onStart: async function () {
    // 实现这个命令的功能，生成 markdown 文件并使用 git 推送到远端仓库
    await registerCommands()
    await registerMenus()
  },
})

async function registerCommands() {
  const dataApi = joplinDataApi({ type: 'plugin' })

  let handler: ViewHandle
  await joplin.commands.register({
    name: 'joplin-batch.visible',
    label: 'Joplin Batch',
    async execute() {
      const panels = joplin.views.panels
      if (handler) {
        const isVisible = await panels.visible(handler)
        await panels.show(handler, !isVisible)
        return
      }
      handler = await panels.create('Batch Utils')
      await panels.setHtml(handler, `<meta name="platform" content="${(await joplin.versionInfo()).platform}"`)
      await panels.addScript(handler, '/webview/index.js')
      await panels.addScript(handler, '/webview/style.css')
      const { onMessage } = defineExtensionMessaging<IProtocol>(handler)
      let last = 0
      onMessage('add', (a, b) => {
        last = a + b
        return last
      })
      onMessage('value', () => last)
      onMessage('invokeDataApi', (method, ...args) => {
        const f = deepGet(dataApi, method)
        if (!f) {
          throw new Error(`Method ${method} not found`)
        }
        return f(...args)
      })
      await panels.visible(handler)
    },
  })
}

async function registerMenus() {
  await joplin.views.menuItems.create('joplin-batch.visible', 'joplin-batch.visible', MenuItemLocation.Tools)
}

function deepGet(obj: any, path: string): Function | undefined {
  let result = get(obj, path)

  // 如果结果是一个函数，我们需要绑定 this
  if (typeof result === 'function') {
    // 获取父对象
    const parentPath = path.split('.').slice(0, -1).join('.')
    const parent = parentPath ? get(obj, parentPath) : obj

    // 绑定函数到父对象
    result = result.bind(parent)
  }

  return result
}
