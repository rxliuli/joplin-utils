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
  port!: number
  programProfilePath?: string
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
    this.port = config.port
    this.programProfilePath = config.programProfilePath
    this.deleteConfirm = config.deleteConfirm
    this.sortNotes = config.sortNotes
    this.sortNotesType = config.sortNotesType
    this.sortOrder = config.sortOrder
    if (process.env.DEBUG) {
      console.log(
        'loadConfig: ',
        '\ntoken: ',
        this.token,
        '\nport: ',
        this.port,
        '\ndeleteConfirm: ',
        this.deleteConfirm,
        '\nprogramProfilePath: ',
        this.programProfilePath,
        '\nto Sort Notes: ',
        this.sortNotes,
        '\nsort Notes Type: ',
        this.sortNotesType,
        '\nsort Order: ',
        this.sortOrder,
      )
      this.programProfilePath = process.env.JOPLIN_PROGRAM_PROFILE_PATH
    }
  }

  constructor() {
    this.loadConfig()
    vscode.workspace.onDidChangeConfiguration(this.loadConfig.bind(this))
  }
}

export const appConfig = new AppConfig()
