/**
 * @link https://www.mtu.edu/umc/services/websites/writing/characters-avoid/
 * @param str
 */
export function replaceFilename(str: string): string {
  const regExp = new RegExp('[#%&{}\\<>*?/ $!\'":@+`|=\r\n]', 'g')
  return str.replace(regExp, '')
}
