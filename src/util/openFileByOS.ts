import * as open from 'open'
import { existsSync } from 'fs-extra'

/**
 * 使用系统打开一些资源
 * @param filePath
 */
export function openFileByOS(filePath: string) {
  if (!existsSync(filePath)) {
    return
  }
  open(filePath)
}
