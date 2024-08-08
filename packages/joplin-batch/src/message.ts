import { defineExtensionMessaging } from 'jpl-vite/messaging'
import { VersionInfo } from 'jpl-vite/api'

export interface StorageValues {
  selectedFontId: string
  disabledList: string[]
}

export interface IProtocol {
  getVersionInfo(): VersionInfo

  invokeDataApi(method: string, ...args: any[]): any
}

export const { sendMessage, onMessage } = defineExtensionMessaging<IProtocol>('joplin-batch')
