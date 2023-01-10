import browser from 'webextension-polyfill'
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
        <label for="searxUrls">SearxUrls</label>
        <textarea name="searxUrls" id="searxUrls"></textarea>
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
  const $searxUrls = document.querySelector('#searxUrls')! as HTMLSelectElement
  const c = await loadConfig()
  $baseUrl.value = c.baseUrl
  $token.value = c.token ?? ''
  ;($theme.querySelector(`[value="${c.theme}"]`) as HTMLOptionElement).selected = true
  $searxUrls.value = c.searxUrls.join('\n')
  setTheme(c.theme)
  const list = ['baseUrl', 'token', 'theme', 'searxUrls']
  const handle = async (k: string, value: string) => {
    await browser.storage.local.set({ [k]: value })
    if (k === 'theme') {
      setTheme(value as LocalConfig['theme'])
    }
  }
  const map: Record<string, (ev: Event) => any> = {
    searxUrls: (ev: Event) => (ev.target as HTMLInputElement).value.split('\n'),
    default: (ev: Event) => (ev.target as HTMLInputElement).value,
  }
  list.forEach((k) => {
    const el = document.getElementById(k)!
    el.addEventListener('input', (ev) => handle(k, (map[k] ?? map.default)(ev)))
  })
}

main()
