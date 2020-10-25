import * as MarkdownIt from 'markdown-it'
import path = require('path')
import * as vscode from 'vscode'
import { TypeEnum } from 'joplin-api'
import { JoplinLinkRegex, JoplinResourceRegex } from './constant'

export function wrapLink(id: string, type: TypeEnum.Resource | TypeEnum.Note) {
  switch (type) {
    case TypeEnum.Resource:
      return 'vscode://rxliuli.joplin-vscode-plugin/resource?id=' + id
    case TypeEnum.Note:
      return 'vscode://rxliuli.joplin-vscode-plugin/open?id=' + id
    default:
      throw new Error('无法处理的链接类型')
  }
}

export function useJoplinLink() {
  return function (md: MarkdownIt) {
    const defaultRender =
      md.renderer.rules.link_open ||
      function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
      }

    md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
      for (const attr of ['href', 'data-href']) {
        const aIndex = tokens[idx].attrIndex(attr)
        if (aIndex >= 0) {
          const linkUrl = tokens[idx].attrs![aIndex][1]
          // 匹配 joplin 内部引用链接
          // 匹配 joplin 的资源
          console.log('link: ', linkUrl)
          if (JoplinLinkRegex.test(linkUrl)) {
            tokens[idx].attrs![aIndex][1] = wrapLink(
              linkUrl.match(JoplinLinkRegex)![1],
              TypeEnum.Note,
            )
          } else if (JoplinResourceRegex.test(linkUrl)) {
            tokens[idx].attrs![aIndex][1] = wrapLink(
              linkUrl.match(JoplinResourceRegex)![1],
              TypeEnum.Resource,
            )
          }
        }
      }

      // pass token to default renderer.
      return defaultRender(tokens, idx, options, env, self)
    }
    return md
  }
}
