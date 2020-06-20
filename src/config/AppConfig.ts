import * as vscode from 'vscode'

export class AppConfig {
  token?: string
  port!: number

  /**
   * reload joplin for vscode config
   */
  loadConfig() {
    const config = vscode.workspace.getConfiguration('joplin')
    this.token = config.token
    this.port = config.port
    console.log('loadConfig: ', this.token, config.port)
  }

  constructor() {
    this.loadConfig()
    vscode.workspace.onDidChangeConfiguration(this.loadConfig.bind(this))
  }
}

export const appConfig = new AppConfig()
