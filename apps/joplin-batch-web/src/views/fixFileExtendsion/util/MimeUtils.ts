import { mimeTypes } from './MimeUtilsTypes'

/**
 * @link https://github.com/laurent22/joplin/blob/dev/packages/lib/mime-utils.js
 */
export class MimeUtils {
  static fromFileExtension(ext: string): string | null {
    ext = ext.toLowerCase()
    for (let i = 0; i < mimeTypes.length; i++) {
      const t = mimeTypes[i]
      if (t.e.indexOf(ext) >= 0) {
        return t.t
      }
    }
    return null
  }
  static fromFilename(name: string): string | null {
    if (!name) return null
    const splitted = name.trim().split('.')
    if (splitted.length <= 1) return null
    return MimeUtils.fromFileExtension(splitted[splitted.length - 1])
  }
  static toFileExtension(mimeType: string): string | null {
    mimeType = mimeType.toLowerCase()
    for (let i = 0; i < mimeTypes.length; i++) {
      const t = mimeTypes[i]
      if (mimeType == t.t) {
        // Return the first file extension that is 3 characters long
        // If none exist return the first one in the list.
        for (let j = 0; j < t.e.length; j++) {
          if (t.e[j].length == 3) return t.e[j]
        }
        return t.e[0]
      }
    }
    return null
  }
  static fromDataUrl(dataUrl: string): string {
    // Example: data:image/jpeg;base64,/9j/4AAQSkZJR.....
    const defaultMime = 'text/plain'
    const p = dataUrl.substr(0, dataUrl.indexOf(',')).split(';')
    let s = p[0]
    const temp = s.split(':')
    if (temp.length <= 1) return defaultMime
    s = temp[1]
    return s.indexOf('/') >= 0 ? s : defaultMime // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
  }
}
