import { Settings } from '../../pages/options/model/Settings'

export async function getSettings(): Promise<Settings | undefined> {
  return (await browser.storage.local.get('settings')).settings
}
