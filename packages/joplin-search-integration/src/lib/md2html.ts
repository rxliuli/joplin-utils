import { fromMarkdown } from 'mdast-util-from-markdown'
import { toHast } from 'mdast-util-to-hast'
import { selectAll } from 'unist-util-select'
import { toHtml } from 'hast-util-to-html'
import { Element } from 'hast'
import { math } from 'micromark-extension-math'
import { mathFromMarkdown } from 'mdast-util-math'
import { escapeJoplinMathExceptions, processLatex, unescapeJoplinMathExceptions } from '$lib/katex-render'

export function md2html(
  md: string,
  options: {
    baseUrl: string
    token: string
  },
): string {
  md = escapeJoplinMathExceptions(md)
  const tree = fromMarkdown(md, {
    extensions: [math()],
    mdastExtensions: [mathFromMarkdown()],
  })
  const root = toHast(tree, { allowDangerousHtml: true })
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

  // Process LaTeX using KaTeX
  const codeNodes = selectAll('[tagName="code"]', root)
  // @ts-ignore
  processLatex(codeNodes, md)
  const textNodes = selectAll('text', root)
  // @ts-ignore
  unescapeJoplinMathExceptions(textNodes)

  return toHtml(root, { allowDangerousHtml: true })
}
