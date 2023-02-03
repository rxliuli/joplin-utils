import * as os from 'os'
import * as path from 'path'
import { existsSync, mkdirpSync, readFile } from '@liuli-util/fs-extra'
import { spawn } from 'child_process'
import { resourceApi } from 'joplin-api'
import { RootPath } from '../RootPath'

/**
 * for clipboard image
 */
export interface IClipboardImage {
  imgPath: string
  isExistFile: boolean
}

export class UploadResourceUtil {
  static async uploadByPath(filePath: string, isImage: boolean) {
    const title = path.basename(filePath)
    console.log('uploadFromExplorer begin: ', filePath, title)
    const res = await resourceApi.create({
      title,
      // @ts-expect-error
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
  static async getClipboardImage(fileDir: string): Promise<IClipboardImage> {
    const baseDir = path.resolve(fileDir, 'ClipboardImage')
    mkdirpSync(baseDir)
    const imagePath = path.resolve(baseDir, `${Date.now()}.png`)
    return await new Promise<IClipboardImage>((resolve, reject): void => {
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
          execution = spawn('sh', [scriptPath, imagePath])
        }
      } catch (err) {
        reject(err)
        throw err
      }
      execution.on('error', reject)
      execution.stdout.on('data', (data: Buffer) => {
        if (platform === 'linux') {
          if (data.toString().trim() === 'no xclip') {
            resolve({
              isExistFile: false,
              imgPath: 'xclip not found, Please install xclip before run picgo',
            })
            return
          }
        }
        const imgPath = data.toString().trim()
        let isExistFile = existsSync(imgPath)
        // in macOS if your copy the file in system, it's basename will not equal to our default basename
        if (path.basename(imgPath) !== path.basename(imagePath)) {
          if (existsSync(imgPath)) {
            isExistFile = true
          }
        }
        resolve({
          imgPath,
          isExistFile,
        })
      })
    })
  }
}
