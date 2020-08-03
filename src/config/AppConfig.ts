import * as vscode from 'vscode'

export class AppConfig {
  token?: string
  port!: number
  sortNotes?: boolean
  sortNotesType?: string
  sortOrder?: string

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
    if (process.env.DEBUG) {
      console.log('loadConfig: ', 
      '\nToken: ', this.token, 
      '\nPort: ', this.port,
      '\nTo Sort Notes: ', this.sortNotes,
      '\nSort Notes Type: ', this.sortNotesType,
      '\nSort Order: ', this.sortOrder
      );
    }
  }

  constructor() {
    this.loadConfig()
    vscode.workspace.onDidChangeConfiguration(this.loadConfig.bind(this))
  }
}

export const appConfig = new AppConfig()
