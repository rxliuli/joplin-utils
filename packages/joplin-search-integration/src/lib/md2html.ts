import { fromMarkdown } from 'mdast-util-from-markdown'
import { toHast } from 'mdast-util-to-hast'
import { selectAll } from 'unist-util-select'
import { toHtml } from 'hast-util-to-html'
import { Element } from 'hast'

export function md2html(
  md: string,
  options: {
    baseUrl: string
    token: string
  },
): string {
  const root = toHast(fromMarkdown(md))
  const isInternal = (url: string): boolean => url.startsWith(':/')
  const images = (selectAll('[tagName="img"]', root) as Element[]).filter(
    (it) => typeof it.properties.src === 'string' && isInternal(it.properties.src),
  )
  images.forEach((it) => {
    const id = (it.properties.src as string).slice(2)
    it.properties.src = `${options.baseUrl}/resources/${id}/file?token=${options.token}`
  })

  const links = (selectAll('[tagName="a"]', root) as Element[]).filter(
    (it) => typeof it.properties.href === 'string' && isInternal(it.properties.href),
  )

  links.forEach((it) => {
    const id = (it.properties.href as string).slice(2)
    it.properties.href = browser.runtime.getURL(`/options.html#/note/${id}`)
  })
  return toHtml(root)
}
