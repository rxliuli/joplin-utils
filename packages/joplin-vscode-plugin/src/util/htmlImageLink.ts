import type { Config } from 'joplin-api'
import type MarkdownIt from 'markdown-it'
import type { RenderRule } from 'markdown-it/lib/renderer'
import parse from 'node-html-parser'
import { JoplinLinkRegex } from './constant'

/**
 * 替换 html 标签
 * @param config
 * @returns
 */
export function htmlImageLink(config: Config): MarkdownIt.PluginSimple {
  return (md) => {
    const htmlUrlReplace: RenderRule = (tokens, idx, options, env, self) => {
      if (tokens[idx].content.startsWith('<img')) {
        const code = tokens[idx].content
        const img = parse(code).querySelector('img')!
        const linkUrl = img.getAttribute('src')
        if (linkUrl && JoplinLinkRegex.test(linkUrl)) {
          const id = linkUrl.match(JoplinLinkRegex)![1]
          img.setAttribute('src', `${config.baseUrl}/resources/${id}/file?token=${config.token}`)
          return img.toString()
        }
      }

      return tokens[idx].content
    }
    md.renderer.rules.html_block = htmlUrlReplace
    md.renderer.rules.html_inline = htmlUrlReplace
    return md
  }
}
