import { config } from 'joplin-api'
import * as vscode from 'vscode'

export enum SortNotesTypeEnum {
  Alphabetical = 'alphabetical',
  Default = 'default',
}

export enum SortOrderEnum {
  Asc = 'asc',
  Desc = 'desc',
}

export class AppConfig {
  token?: string
  baseUrl!: string
  deleteConfirm?: boolean
  sortNotes?: boolean
  sortNotesType?: SortNotesTypeEnum
  sortOrder?: SortOrderEnum

  /**
   * reload joplin for vscode config
   */
  loadConfig() {
    const c = vscode.workspace.getConfiguration('joplin')
    this.token = c.token
    this.baseUrl = c.baseUrl
    this.deleteConfirm = c.deleteConfirm
    this.sortNotes = c.sortNotes
    this.sortNotesType = c.sortNotesType
    this.sortOrder = c.sortOrder
    config.baseUrl = this.baseUrl
    config.token = this.token!
    if (process.env.DEBUG) {
      console.log(
        'loadConfig: ',
        '\ntoken: ',
        this.token,
        '\nbaseUrl: ',
        this.baseUrl,
        '\ndeleteConfirm: ',
        this.deleteConfirm,
        '\nto Sort Notes: ',
        this.sortNotes,
        '\nsort Notes Type: ',
        this.sortNotesType,
        '\nsort Order: ',
        this.sortOrder,
      )
    }
  }
}

export const appConfig = new AppConfig()
