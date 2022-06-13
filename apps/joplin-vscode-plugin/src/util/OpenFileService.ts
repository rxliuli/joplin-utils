import * as vscode from 'vscode'
import { Uri } from 'vscode'
import * as path from 'path'
import { logger } from '../constants/logger'

interface ExtInfo {
  id: string
  exts: string[]
}

const extList: ExtInfo[] = [
  {
    id: 'hediet.vscode-drawio',
    exts: ['.drawio', '.drawio.svg'],
  },
  {
    id: 'eighthundreds.vscode-mindmap',
    exts: ['.km', '.km.svg'],
  },
  {
    id: 'pomdtr.excalidraw-editor',
    exts: ['.excalidraw', '.excalidraw.json', '.excalidraw.svg', 'excalidraw.png'],
  },
]

export class OpenFileService {
  async openByVSCode(filePath: string) {
    const fileName = path.basename(filePath)
    const findExt = extList.find((item) => item.exts.some((ext) => fileName.endsWith(ext)))
    logger.info(`OpenFileService.openByVSCode fileName: ${fileName}, findExt: ${JSON.stringify(findExt)}`)
    if (findExt) {
      await vscode.commands.executeCommand('vscode.open', Uri.file(filePath))
    } else {
      const res = await vscode.env.openExternal(Uri.file(filePath))
      logger.info('OpenFileService.openByVSCode openExternal ' + res)
    }
  }
}
