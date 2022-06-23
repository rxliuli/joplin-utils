import MarkdownIt from 'markdown-it'
import { Config, TypeEnum } from 'joplin-api'
import { JoplinLinkRegex } from './constant'
import { ResourceGetRes } from 'joplin-api/dist/modal/ResourceGetRes'

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

export function useJoplinLink(openNoteResourceMap: Map<string, ResourceGetRes[]>) {
  return (md: MarkdownIt) => {
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
          // 匹配 joplin 内部引用链接和资源
          console.log('link: ', linkUrl)
          if (JoplinLinkRegex.test(linkUrl)) {
            const resourceIdList = new Set([...openNoteResourceMap.values()].flat().map((item) => item.id))
            const id = linkUrl.match(JoplinLinkRegex)![1]
            console.log(resourceIdList, id)
            if (resourceIdList.has(id)) {
              tokens[idx].attrs![aIndex][1] = wrapLink(id, TypeEnum.Resource)
            } else {
              tokens[idx].attrs![aIndex][1] = wrapLink(id, TypeEnum.Note)
            }
          }
        }
      }

      // pass token to default renderer.
      return defaultRender(tokens, idx, options, env, self)
    }
    return md
  }
}

export function useJoplinImage(config: Config) {
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
