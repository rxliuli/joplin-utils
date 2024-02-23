import { Config, TypeEnum, config } from 'joplin-api'
import type MarkdownIt from 'markdown-it'
import type { RenderRule } from 'markdown-it/lib/renderer'
// import parse from 'node-html-parser'

export const JoplinLinkRegex = /^:\/(\w{32})$/

// /**
//  * 替换 html 标签
//  * @param config
//  * @returns
//  */
// export function htmlImageLink(config: Config): MarkdownIt.PluginSimple {
//   return (md) => {
//     const htmlUrlReplace: RenderRule = (tokens, idx, options, env, self) => {
//       if (tokens[idx].content.startsWith('<img')) {
//         const code = tokens[idx].content
//         const img = parse(code).querySelector('img')!
//         const linkUrl = img.getAttribute('src')
//         if (linkUrl && JoplinLinkRegex.test(linkUrl)) {
//           const id = linkUrl.match(JoplinLinkRegex)![1]
//           img.setAttribute('src', `${config.baseUrl}/resources/${id}/file?token=${config.token}`)
//           return img.toString()
//         }
//       }

//       return tokens[idx].content
//     }
//     md.renderer.rules.html_block = htmlUrlReplace
//     md.renderer.rules.html_inline = htmlUrlReplace
//     return md
//   }
// }

import { ResourceGetRes } from 'joplin-api'
import { arrayToMap } from '@liuli-util/array'
import path from 'path'
import { GlobalContext } from '../constants/context'

export function wrapLink(id: string, type: TypeEnum.Resource | TypeEnum.Note) {
  const q = encodeURIComponent(`id=${id}`)
  switch (type) {
    case TypeEnum.Resource:
      return `vscode://rxliuli.joplin-vscode-plugin/resource?${q}`
    case TypeEnum.Note:
      return `vscode://rxliuli.joplin-vscode-plugin/open?${q}`
    default:
      throw new Error('无法处理的链接类型')
  }
}

function useJoplinLink(openNoteResourceMap: Map<string, ResourceGetRes[]>) {
  // ref: https://code.visualstudio.com/updates/v1_72#_builtin-preview-for-some-audio-and-video-files
  const audioExts = ['wav', 'mp3', 'ogg']
  const videoExts = ['webm', 'mp4']
  return (md: MarkdownIt) => {
    const defaultRenderToken = md.renderer.renderToken.bind(md.renderer)
    const defaultLinkOpenRender = md.renderer.rules.link_open?.bind(md.renderer.rules) || defaultRenderToken
    const defaultLinkCloseRender = md.renderer.rules.link_close?.bind(md.renderer.rules) || defaultRenderToken
    const defaultTextRender = md.renderer.rules.text?.bind(md.renderer.rules) || defaultRenderToken

    const joplinDeleteAttr = 'joplin-delete'
    md.renderer.rules.text = (tokens, idx, opt, env, self) => {
      if (tokens[idx].attrGet(joplinDeleteAttr)) {
        return ''
      }
      return defaultTextRender(tokens, idx, opt, env, self)
    }
    md.renderer.rules.link_close = (tokens, idx, opt, env, self) => {
      if (tokens[idx].attrGet(joplinDeleteAttr)) {
        return ''
      }
      return defaultLinkCloseRender(tokens, idx, opt, env, self)
    }
    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      for (const attr of ['href', 'data-href']) {
        const aIndex = tokens[idx].attrIndex(attr)
        if (aIndex >= 0) {
          const linkUrl = tokens[idx].attrs![aIndex][1]
          // 匹配 joplin 内部引用链接和资源
          // console.log('link: ', linkUrl)
          if (JoplinLinkRegex.test(linkUrl)) {
            const resourceIdMap = arrayToMap([...openNoteResourceMap.values()].flat(), (item) => item.id)
            const id = linkUrl.match(JoplinLinkRegex)![1]
            if (resourceIdMap.has(id)) {
              const resource = resourceIdMap.get(id)
              if (resource?.title) {
                const ext = path.extname(resource.title).slice(1)
                if (audioExts.includes(ext)) {
                  tokens[idx + 1].attrSet(joplinDeleteAttr, 'true')
                  tokens[idx + 2].attrSet(joplinDeleteAttr, 'true')
                  return `<audio controls><source src="${config.baseUrl}/resources/${id}/file?token=${config.token}" type="audio/mpeg"></audio>`
                }
                if (videoExts.includes(ext)) {
                  tokens[idx + 1].attrSet(joplinDeleteAttr, 'true')
                  tokens[idx + 2].attrSet(joplinDeleteAttr, 'true')
                  return `<video controls><source src="${config.baseUrl}/resources/${id}/file?token=${config.token}" type="video/webm"></video>`
                }
              }
              tokens[idx].attrs![aIndex][1] = wrapLink(id, TypeEnum.Resource)
            } else {
              tokens[idx].attrs![aIndex][1] = wrapLink(id, TypeEnum.Note)
            }
          }
        }
      }

      // pass token to default renderer.
      return defaultLinkOpenRender(tokens, idx, options, env, self)
    }
    return md
  }
}

function useJoplinImage(config: Config) {
  return (md: MarkdownIt) => {
    const defaultRender =
      md.renderer.rules.link_open ||
      function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
      }

    md.renderer.rules.image = function (tokens, idx, options, env, self) {
      const aIndex = tokens[idx].attrIndex('src')
      if (aIndex >= 0) {
        const linkUrl = tokens[idx].attrs![aIndex][1]
        // 匹配 joplin 内部资源
        if (JoplinLinkRegex.test(linkUrl)) {
          const id = linkUrl.match(JoplinLinkRegex)![1]
          tokens[idx].attrs![aIndex][1] = `${config.baseUrl}/resources/${id}/file?token=${config.token}`
        }
      }

      // pass token to default renderer.
      return defaultRender(tokens, idx, options, env, self)
    }
    return md
  }
}

export function extendMarkdownIt(md: MarkdownIt) {
  return md.use(useJoplinLink(GlobalContext.openNoteResourceMap)).use(
    useJoplinImage({
      token: config.token!,
      baseUrl: config.baseUrl!,
    }),
  )
  // .use(
  //   htmlImageLink({
  //     token: config.token!,
  //     baseUrl: config.baseUrl!,
  //   }),
  // )
}
