import * as vscode from 'vscode'

export class AppConfig {
  token?: string
  programPath?: string

  /**
   * reload joplin for vscode config
   */
  loadConfig() {
    const config = vscode.workspace.getConfiguration('joplin')
    this.token = config.token
    this.programPath = config.programPath
    console.log('loadConfig: ', this.token, this.programPath)
  }

  constructor() {
    this.loadConfig()
    vscode.workspace.onDidChangeConfiguration(this.loadConfig.bind(this))
  }
}

export const appConfig = new AppConfig()
