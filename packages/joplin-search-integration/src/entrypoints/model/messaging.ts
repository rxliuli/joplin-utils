import { defineExtensionMessaging } from '@webext-core/messaging'
import type { SearchNote } from '../content/plugins/plugin'

interface ProtocolMap {
  openNote(id: string): void
  openSettings(): void
  search(keyword: string): SearchNote[]
}

export const { sendMessage, onMessage, removeAllListeners } = defineExtensionMessaging<ProtocolMap>()
