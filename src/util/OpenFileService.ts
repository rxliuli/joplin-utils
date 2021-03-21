import { existsSync } from 'fs-extra'
import * as open from 'open'
import * as vscode from 'vscode'
import { Uri } from 'vscode'
import * as path from 'path'

export class OpenFileService {
  async openByVSCode(filePath: string) {
    const fileName = path.basename(filePath)
    if (
      (fileName.endsWith('drawio') &&
        vscode.extensions.getExtension('hediet.vscode-drawio')) ||
      (fileName.endsWith('km') &&
        vscode.extensions.getExtension('eighthundreds.vscode-mindmap'))
    ) {
      await vscode.commands.executeCommand(
        'vscode.open',
        Uri.file(path.resolve(filePath)),
      )
      return
    }

    if (!existsSync(filePath)) {
      return
    }
    vscode.env.openExternal(Uri.file(path.resolve(filePath)))
  }

  async openFileByOS(filePath: string) {
    if (!existsSync(filePath)) {
      return
    }
    await open(filePath)
  }
}
