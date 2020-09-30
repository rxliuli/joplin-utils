import * as MarkdownIt from 'markdown-it'

export function useJoplinLink() {
  return function (md: MarkdownIt) {
    // Default renderer
    const defaultRender =
      md.renderer.rules.link_open ||
      function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
      }

    md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
      for(const attr of ['href', 'data-href']) {
        const aIndex = tokens[idx].attrIndex(attr)

        if (aIndex >= 0) {
          const linkUrl = tokens[idx].attrs![aIndex][1]
          const regexMatch = linkUrl.match(/^:\/([0-9a-f]+)$/)
          if (regexMatch)
            tokens[idx].attrs![aIndex][1] =
              'vscode://rxliuli.joplin-vscode-plugin/open?id=' + regexMatch[1]
        }
      }

      // pass token to default renderer.
      return defaultRender(tokens, idx, options, env, self)
    }
    return md
  }
}
