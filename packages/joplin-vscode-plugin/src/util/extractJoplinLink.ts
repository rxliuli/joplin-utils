/**
 * 提取 joplin 中的链接
 * @param text
 * @returns
 */
export function extractJoplinLink(text: string) {
  const regex = /\[.*\]\(:\/(.*)\)/g
  const r = text.matchAll(regex)
  return [...r].map((item) => item[1])
}
