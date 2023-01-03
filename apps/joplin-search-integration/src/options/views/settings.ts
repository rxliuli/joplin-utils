import browser, { theme } from 'webextension-polyfill'
import { loadConfig, LocalConfig } from '../utils/loadConfig'

function render() {
  document.querySelector('#app')!.innerHTML = `
  <form class="settings">
      <div>
        <label for="baseUrl">BaseUrl</label>
        <input type="url" name="baseUrl" id="baseUrl" />
      </div>
      <div>
        <label for="token">Token</label>
        <input type="password" name="token" id="token" />
      </div>
      <div>
        <label for="theme">Theme</label>
        <select name="theme" id="theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </form>
  `
}

function setTheme(theme: LocalConfig['theme']) {
  document.documentElement.dataset.theme = theme
}

async function main() {
  render()

  const $baseUrl = document.querySelector('#baseUrl')! as HTMLInputElement
  const $token = document.querySelector('#token')! as HTMLInputElement
  const $theme = document.querySelector('#theme')! as HTMLSelectElement
  const c = await loadConfig()
  $baseUrl.value = c.baseUrl
  $token.value = c.token ?? ''
  ;($theme.querySelector(`[value="${c.theme}"]`) as HTMLOptionElement).selected = true
  setTheme(c.theme)
  const list = ['baseUrl', 'token', 'theme']
  list.forEach((k) => {
    document.getElementById(k)!.addEventListener('change', async (ev) => {
      const el = ev.target as HTMLInputElement
      await browser.storage.local.set({ [k]: el.value })
      if (el.name === 'theme') {
        setTheme(el.value as LocalConfig['theme'])
      }
    })
  })
}

main()
