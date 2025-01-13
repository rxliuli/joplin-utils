import { mount, unmount } from 'svelte'
import App from './App.svelte'
import type { SearchPlugin } from './plugins/plugin'
import './app.css'
import { baidu } from './plugins/baidu'
import { bing } from './plugins/bing'
import { brave } from './plugins/brave'
import { duckduckgo } from './plugins/duckduckgo'
import { google } from './plugins/google'
import { searx } from './plugins/searx'
import type { ShadowRootContentScriptUi } from 'wxt/client'

export default defineContentScript({
  matches: ['<all_urls>'],
  cssInjectionMode: 'ui',
  async main(ctx) {
    let ui: ShadowRootContentScriptUi<void>
    async function render() {
      if (ui) {
        ui.remove()
      }
      const plugins: SearchPlugin[] = [google(), bing(), baidu(), duckduckgo(), searx(), brave()]
      const p = plugins.find((it) => it.match(new URL(location.href)))
      if (!p) {
        return
      }
      p.observe?.(render)
      ui = await createShadowRootUi(ctx, {
        name: 'joplin-search-plugin',
        position: 'inline',
        anchor() {
          const root = p.createRenderRoot()
          root.id = 'joplin-search-integration'
          return root
        },
        onMount: (container) => {
          mount(App, {
            target: container,
            props: {
              plugin: p,
            },
          })
        },
        onRemove() {
          unmount(App)
        },
      })
      ui.mount()
    }

    render()
  },
})
