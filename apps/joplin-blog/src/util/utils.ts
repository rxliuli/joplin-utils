import figlet from 'figlet'

/**
 * 生成一个字符画
 * @param txt
 * @param options
 */
export function figletPromise(
  txt: string,
  options?: figlet.Options,
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    figlet(txt, options, (error, result) => {
      if (error) {
        reject(error)
        return
      }
      resolve(result!)
    })
  })
}
