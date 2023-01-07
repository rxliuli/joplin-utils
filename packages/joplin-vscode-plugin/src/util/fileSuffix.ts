import path from 'path'

export function fileSuffix(filePath: string, id: string): string {
  const dirPath = path.dirname(filePath)
  const name = path.basename(filePath)
  const i = name.indexOf('.')
  if (i === -1 || i === name.length - 1) {
    return path.join(dirPath, name + '_' + id)
  }
  return path.join(dirPath, name.slice(0, i) + '_' + id + name.slice(i))
}
