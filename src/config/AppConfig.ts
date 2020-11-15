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
  sortNotes?: boolean
  sortNotesType?: SortNotesTypeEnum
  sortOrder?: SortOrderEnum
  programProfilePath?: string

  /**
   * reload joplin for vscode config
   */
  loadConfig() {
    const config = vscode.workspace.getConfiguration('joplin')
    this.token = config.token
    this.port = config.port
    this.sortNotes = config.sortNotes
    this.sortNotesType = config.sortNotesType
    this.sortOrder = config.sortOrder
    this.programProfilePath = config.programProfilePath
    if (process.env.DEBUG) {
      console.log(
        'loadConfig: ',
        '\nToken: ',
        this.token,
        '\nPort: ',
        this.port,
        '\nTo Sort Notes: ',
        this.sortNotes,
        '\nSort Notes Type: ',
        this.sortNotesType,
        '\nSort Order: ',
        this.sortOrder,
      )
    }
  }

  constructor() {
    this.loadConfig()
    vscode.workspace.onDidChangeConfiguration(this.loadConfig.bind(this))
  }
}

export const appConfig = new AppConfig()
