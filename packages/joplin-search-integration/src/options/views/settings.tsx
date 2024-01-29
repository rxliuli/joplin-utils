import browser from 'webextension-polyfill'
import { getDefault, loadConfig, LocalConfig } from '../utils/loadConfig'
import { useSignal } from '@preact/signals'
import { useMount } from 'react-use'
import { setTheme } from '../utils/theme'

function SettingsView() {
  const config = useSignal<LocalConfig>(getDefault())
  useMount(async () => {
    config.value = await loadConfig()
  })
  async function onChange(k: string, value: string) {
    await browser.storage.local.set({ [k]: value })
    config.value = { ...config.value, [k]: value }
  }
  return (
    <div className="container mx-auto p-4 max-w-md">
      <form>
        <div className="mb-4">
          <label htmlFor="baseUrl" className="block text-sm font-bold mb-2">
            BaseUrl
          </label>
          <input
            type="url"
            name="baseUrl"
            id="baseUrl"
            value={config.value.baseUrl}
            onChange={(ev) => onChange('baseUrl', ev.currentTarget.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="token" className="block text-sm font-bold mb-2">
            Token
          </label>
          <input
            type="password"
            name="token"
            id="token"
            value={config.value.token}
            onChange={(ev) => onChange('token', ev.currentTarget.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="theme" className="block text-sm font-bold mb-2">
            Theme
          </label>
          <select
            name="theme"
            id="theme"
            value={config.value.theme}
            onChange={async (ev) => {
              const value = ev.currentTarget.value
              await onChange('theme', value)
              setTheme(value as LocalConfig['theme'])
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default SettingsView
