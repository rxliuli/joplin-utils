import browser from 'webextension-polyfill'
import { loadConfig } from '../options/utils/loadConfig'

window.addEventListener('load', async () => {
  const $baseUrl = document.querySelector('#baseUrl')! as HTMLInputElement
  const $token = document.querySelector('#token')! as HTMLInputElement
  const $theme = document.querySelector('#theme')! as HTMLSelectElement
  const c = await loadConfig()
  $baseUrl.value = c.baseUrl
  $token.value = c.token ?? ''
  ;($theme.querySelector(`[value="${c.theme}"]`) as HTMLOptionElement).selected = true
  const list = ['baseUrl', 'token', 'theme']
  list.forEach((k) => {
    document.getElementById(k)!.addEventListener('change', async (ev) => {
      await browser.storage.local.set({ [k]: (ev.target as HTMLInputElement).value })
    })
  })
})
