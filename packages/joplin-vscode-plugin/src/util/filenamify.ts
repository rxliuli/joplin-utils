const UnixFilename = /[<>:"/\\|?*\u0000-\u001F]/g
const WindowsFilename = /[<>:"/\\|?*\u0000-\u001F]/g

export function filenamify(name: string) {
  return name.replace(UnixFilename, '_').replace(WindowsFilename, '_')
}
