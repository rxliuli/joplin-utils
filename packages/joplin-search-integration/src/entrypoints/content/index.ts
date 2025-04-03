import { mount, unmount } from 'svelte'
import App from './App.svelte'
import type { SearchPlugin } from './plugins/plugin'
import './app.css'
import { baidu } from './plugins/baidu'
import { bing } from './plugins/bing'
import { brave } from './plugins/brave'
import { duckduckgo } from './plugins/duckduckgo'
import { google } from './plugins/google'
import type { ShadowRootContentScriptUi } from 'wxt/client'

export default defineContentScript({
  matches: [
    'https://www.baidu.com/*',
    'https://www.bing.com/*',
    'https://cn.bing.com/*',
    'https://search.brave.com/*',
    'https://duckduckgo.com/*',
    'https://www.google.com/*',
    'https://www.google.com.hk/*',
    'https://www.google.co.jp/*',
    'https://www.google.co.uk/*',
    'https://www.google.com.au/*',
    'https://www.google.de/*',
    'https://www.google.fr/*',
    'https://www.google.it/*',
    'https://www.google.es/*',
    'https://www.google.ru/*',
    'https://www.google.cn/*',
  ],
  cssInjectionMode: 'ui',
  async main(ctx) {
    let ui: ShadowRootContentScriptUi<void>
    async function render() {
      if (ui) {
        ui.remove()
      }
      const plugins: SearchPlugin[] = [google(), bing(), baidu(), duckduckgo(), brave()]
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
