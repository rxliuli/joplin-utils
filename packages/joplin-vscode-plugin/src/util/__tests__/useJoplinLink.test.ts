import { config, ResourceGetRes } from 'joplin-api'
import MarkdownIt from 'markdown-it'
import { beforeEach, it, describe, expect } from 'vitest'
import { useJoplinLink } from '../useJoplinLink'

let md: MarkdownIt
beforeEach(() => {
  md = new MarkdownIt()
})

describe('useJoplinLink', () => {
  beforeEach(() => {
    md.use(
      useJoplinLink(
        new Map<string, ResourceGetRes[]>().set('056e24dca7ac43c3a39d96ca576d5e02', [
          { id: '73331fba1a064ca9b1a8591c874a088f', title: 'EA23aL.png' },
          { id: '4b638fd91af2417e9fd0942c3e04ea0c', title: 'test.mp3' },
          { id: 'b160280b7d94417bb7f64d5fd1969230', title: 'flower.webm' },
        ] as ResourceGetRes[]),
      ),
    )
  })
  it('external resource', () => {
    expect(md.render('[github](https://github.com)').trim()).to.eq('<p><a href="https://github.com">github</a></p>')
  })
  it('audio resource', () => {
    expect(md.render('[test](https://rxliuli.com/test.mp3)').trim()).to.eq(
      '<p><a href="https://rxliuli.com/test.mp3">test</a></p>',
    )
  })
  it('video resource', () => {
    expect(md.render('[test](https://rxliuli.com/test.mp4)').trim()).to.eq(
      '<p><a href="https://rxliuli.com/test.mp4">test</a></p>',
    )
  })
  it('joplin resource', () => {
    expect(md.render('[EA23aL.png](:/73331fba1a064ca9b1a8591c874a088f)').trim()).to.eq(
      `<p><a href="vscode://rxliuli.joplin-vscode-plugin/resource?${encodeURIComponent(
        'id=73331fba1a064ca9b1a8591c874a088f',
      )}">EA23aL.png</a></p>`,
    )
  })
  it('joplin audio resource', () => {
    expect(md.render('[test.mp3](:/4b638fd91af2417e9fd0942c3e04ea0c)').trim()).to.eq(
      `<p><audio controls><source src="${config.baseUrl}/resources/4b638fd91af2417e9fd0942c3e04ea0c/file?token=${config.token}" type="audio/mpeg"></audio></p>`,
    )
  })
  it('joplin video resource', () => {
    expect(md.render('[flower.webm](:/b160280b7d94417bb7f64d5fd1969230)').trim()).to.eq(
      `<p><video controls><source src="${config.baseUrl}/resources/4b638fd91af2417e9fd0942c3e04ea0c/file?token=${config.token}" type="video/webm"></video></p>`,
    )
  })
})
