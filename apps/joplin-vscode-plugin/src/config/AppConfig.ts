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
    const config = vscode.workspace.getConfiguration('joplin')
    this.token = config.token
    this.baseUrl = config.baseUrl
    this.deleteConfirm = config.deleteConfirm
    this.sortNotes = config.sortNotes
    this.sortNotesType = config.sortNotesType
    this.sortOrder = config.sortOrder
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
