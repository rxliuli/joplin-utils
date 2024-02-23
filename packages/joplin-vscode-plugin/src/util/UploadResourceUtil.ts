import * as os from 'os'
import * as path from 'path'
import { exec, spawn } from 'child_process'
import { resourceApi } from 'joplin-api'
import { RootPath } from '../RootPath'
import which from 'which'
import { existsSync } from 'node:fs'
import { mkdir, readFile } from 'node:fs/promises'

export class UploadResourceUtil {
  static async uploadByPath(filePath: string, isImage: boolean) {
    const title = path.basename(filePath)
    console.log('uploadFromExplorer begin: ', filePath, title)
    const res = await resourceApi.create({
      title,
      data: new Blob([await readFile(filePath)]),
      filename: title,
    })
    console.log('uploadByPath', res)
    const markdownLink = `${isImage ? '!' : ''}[${title}](:/${res.id})`
    console.log('uploadFromExplorer end: ', markdownLink)
    return { res, markdownLink }
  }

  static getCurrentPlatform(): string {
    const platform = process.platform
    if (platform !== 'win32') {
      return platform
    } else {
      const currentOS = os.release().split('.')[0]
      if (currentOS === '10') {
        return 'win10'
      } else {
        return 'win32'
      }
    }
  }

  // Thanks to vs-picgo: https://github.com/Spades-S/vs-picgo/blob/master/src/extension.ts
  static async getClipboardImage(fileDir: string): Promise<string> {
    const baseDir = path.resolve(fileDir, 'ClipboardImage')
    await mkdir(baseDir, { recursive: true })
    const imagePath = path.resolve(baseDir, `${Date.now()}.png`)
    return await new Promise<string>(async (resolve, reject): Promise<void> => {
      const platform: string = UploadResourceUtil.getCurrentPlatform()
      let execution
      // for PicGo GUI
      const platformPaths: {
        [index: string]: string
      } = {
        darwin: 'mac.applescript',
        win32: 'windows.ps1',
        win10: 'windows10.ps1',
        linux: 'linux.sh',
      }
      const scriptPath = path.join(RootPath, 'resources/clipboard', platformPaths[platform])
      try {
        if (platform === 'darwin') {
          execution = spawn('osascript', [scriptPath, imagePath])
        } else if (platform === 'win32' || platform === 'win10') {
          execution = spawn('powershell', [
            '-noprofile',
            '-noninteractive',
            '-nologo',
            '-sta',
            '-executionpolicy',
            'unrestricted',
            // fix windows 10 native cmd crash bug when "picgo upload"
            // https://github.com/PicGo/PicGo-Core/issues/32
            // '-windowstyle','hidden',
            // '-noexit',
            '-file',
            scriptPath,
            imagePath,
          ])
        } else {
          if (!(await which('xclip', { nothrow: true }))) {
            reject(new Error('no xclip'))
            return
          }
          if (!(await which('wl-copy', { nothrow: true }))) {
            reject(new Error('no wl-clipboard'))
            return
          }
          await new Promise((resolve, reject) => {
            exec(`xclip -selection clipboard -t image/png -o > ${imagePath}`).on('error', reject).on('close', resolve)
          })
          execution = spawn('echo', [imagePath])
        }
      } catch (err) {
        reject(err)
        throw err
      }
      execution.on('error', reject)
      execution.stdout.on('data', (data: Buffer) => {
        const imgPath = data.toString().trim()
        if (!existsSync(imgPath)) {
          reject(new Error('no image'))
          return
        }
        resolve(imgPath)
      })
    })
  }
}
