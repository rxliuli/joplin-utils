import App from './App.svelte'
import './app.css'
import { baidu } from './plugins/baidu'
import { bing } from './plugins/bing'
import { brave } from './plugins/brave'
import { duckduckgo } from './plugins/duckduckgo'
import { google } from './plugins/google'
import { metagar } from './plugins/metagar'
import { SearchPlugin } from './plugins/plugin'
import { searx } from './plugins/searx'
import { you } from './plugins/you'
import { mount } from 'svelte'

export default defineContentScript({
  matches: ['<all_urls>'],
  cssInjectionMode: 'ui',
  async main(ctx) {
    const plugins: SearchPlugin[] = [google(), bing(), baidu(), duckduckgo(), searx(), metagar(), you(), brave()]
    console.log('Hello content.')

    const findPlugin = plugins.find((it) => it.match(new URL(location.href)))
    if (!findPlugin) {
      return
    }
    console.log('load plugin', findPlugin.name)

    const ui = await createShadowRootUi(ctx, {
      name: 'joplin-search-plugin',
      position: 'inline',
      anchor() {
        return findPlugin.createRenderRoot()
      },
      onMount: (container) => {
        const app = mount(App, {
          target: container,
          props: {
            plugin: findPlugin,
          },
        })
        return app
      },
      onRemove(root) {
        // Unmount the root when the UI is removed
        root?.unmount()
      },
    })
    ui.mount()
  },
})
