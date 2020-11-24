import { existsSync } from 'fs-extra'
import * as open from 'open'
import * as vscode from 'vscode'
import { Uri } from 'vscode'

// noinspection JSUnusedLocalSymbols
const extList = [
  'plaintext',
  'Log',
  'log',
  'scminput',
  'bat',
  'clojure',
  'coffeescript',
  'jsonc',
  'c',
  'cpp',
  'csharp',
  'css',
  'dockerfile',
  'ignore',
  'fsharp',
  'git-commit',
  'git-rebase',
  'diff',
  'go',
  'groovy',
  'handlebars',
  'hlsl',
  'html',
  'ini',
  'properties',
  'java',
  'javascriptreact',
  'javascript',
  'jsx-tags',
  'json',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objective-c',
  'objective-cpp',
  'perl',
  'perl6',
  'php',
  'powershell',
  'jade',
  'python',
  'r',
  'razor',
  'ruby',
  'rust',
  'scss',
  'search-result',
  'shaderlab',
  'shellscript',
  'sql',
  'swift',
  'typescript',
  'typescriptreact',
  'vb',
  'xml',
  'xsl',
  'yaml',
  'graphql',
  'vue',
  'drawio',
  'svg',
  'km',
  'xmind',
  'wallaby-output',
  'wallaby-timeline',
]

export class OpenFileService {
  async openByVSCode(filePath: string) {
    if (!existsSync(filePath)) {
      return
    }
    vscode.env.openExternal(Uri.file(filePath))
    // const fileName = path.basename(filePath)
    // const languages = await vscode.languages.getLanguages()
    // if (languages.includes('drawio')) {
    //   languages.push('drawio.svg')
    // }
    // if (languages.some((ext) => fileName.endsWith(`.${ext}`))) {
    //
    // }
    // console.log('path.extname(filePath): ', extname, languages)
  }

  async openFileByOS(filePath: string) {
    if (!existsSync(filePath)) {
      return
    }
    await open(filePath)
  }
}
