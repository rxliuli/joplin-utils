import { TypeEnum } from 'joplin-api'
import type MarkdownIt from 'markdown-it'
import * as vscode from 'vscode'
import { ResourceGetRes } from 'joplin-api'
import { arrayToMap } from '@liuli-util/array'
import path from 'path'
import { GlobalContext } from '../constants/context'
import { ExtConfig } from '../constants/config'
import { logger } from '../constants/logger'

const JOPLIN_ID_REGEX = /^[0-9a-f]{32}$/

export function wrapLink(id: string, type: TypeEnum.Resource | TypeEnum.Note) {
  const q = encodeURIComponent(`id=${id}`)
  switch (type) {
    case TypeEnum.Resource:
      return `vscode://rxliuli.joplin-vscode-plugin/resource?${q}`
    case TypeEnum.Note:
      return `vscode://rxliuli.joplin-vscode-plugin/open?${q}`
    default:
      throw new Error('Do not support this type ' + type)
  }
}

function useJoplinLink(extConfig: ExtConfig, openNoteResourceMap: Map<string, ResourceGetRes[]>) {
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
          const matched = linkUrl.match(/^:\/([0-9a-f]{32})$/)
          if (matched) {
            const id = matched[1]
            const resourceIdMap = arrayToMap([...openNoteResourceMap.values()].flat(), (item) => item.id)
            if (resourceIdMap.has(id)) {
              const resource = resourceIdMap.get(id)
              if (resource?.title) {
                const ext = path.extname(resource.title).slice(1)
                if (audioExts.includes(ext)) {
                  tokens[idx + 1].attrSet(joplinDeleteAttr, 'true')
                  tokens[idx + 2].attrSet(joplinDeleteAttr, 'true')
                  return `<audio controls><source src="${extConfig.baseUrl}/resources/${id}/file?token=${extConfig.token}" type="audio/mpeg"></audio>`
                }
                if (videoExts.includes(ext)) {
                  tokens[idx + 1].attrSet(joplinDeleteAttr, 'true')
                  tokens[idx + 2].attrSet(joplinDeleteAttr, 'true')
                  return `<video controls><source src="${extConfig.baseUrl}/resources/${id}/file?token=${extConfig.token}" type="video/webm"></video>`
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

function useJoplinImage(config: ExtConfig) {
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
        const matched = linkUrl.match(/^:\/([0-9a-f]{32})$/)
        if (matched) {
          const id = matched[1]
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
  const extConfig = vscode.workspace.getConfiguration('joplin') as vscode.WorkspaceConfiguration & ExtConfig
  return md.use(useJoplinLink(extConfig, GlobalContext.openNoteResourceMap)).use(
    useJoplinImage({
      token: extConfig.token!,
      baseUrl: extConfig.baseUrl!,
    }),
  )
  // .use(
  //   htmlImageLink({
  //     token: config.token!,
  //     baseUrl: config.baseUrl!,
  //   }),
  // )
}
