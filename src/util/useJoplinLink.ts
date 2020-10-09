import * as MarkdownIt from 'markdown-it'
import path = require('path')
import * as vscode from 'vscode'

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

        const doc = vscode.window.activeTextEditor?.document
        const joplinMdRegexp = new RegExp(`${path.sep}edit-(\\w{32})\\.md$`)
        const isJoplinNote =
          doc?.languageId === 'markdown' && joplinMdRegexp.test(doc.fileName)
        console.log('markdown render: ', isJoplinNote, doc)
        if (!isJoplinNote) {
          return defaultRender(tokens, idx, options, env, self)
        }

        if (aIndex >= 0) {
          const linkUrl = tokens[idx].attrs![aIndex][1]
          // 匹配 joplin 内部引用链接
          const JoplinRefLinkRegex = /^:\/([0-9a-f]+)$/
          // 匹配 joplin 的资源
          const JoplinResourceRegex = /^resources\/([\w\.]+?)\.[\w]+$/
          console.log('link: ', linkUrl)
          if (JoplinRefLinkRegex.test(linkUrl)) {
            tokens[idx].attrs![aIndex][1] =
              'vscode://rxliuli.joplin-vscode-plugin/open?id=' +
              linkUrl.match(JoplinRefLinkRegex)![1]
          } else if (JoplinResourceRegex.test(linkUrl)) {
            tokens[idx].attrs![aIndex][1] =
              'vscode://rxliuli.joplin-vscode-plugin/resource?id=' +
              linkUrl.match(JoplinResourceRegex)![1]
          }
        }
      }

      // pass token to default renderer.
      return defaultRender(tokens, idx, options, env, self)
    }
    return md
  }
}
