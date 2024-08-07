import { defineExtensionMessaging } from 'jpl-vite/messaging'

export interface StorageValues {
  selectedFontId: string
  disabledList: string[]
}

export interface IProtocol {
  add(a: number, b: number): number
  value(): number

  invokeDataApi(method: string, ...args: any[]): any
}

export const { sendMessage, onMessage } = defineExtensionMessaging<IProtocol>('joplin-batch')
