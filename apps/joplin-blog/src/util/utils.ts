import figlet from 'figlet'

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
