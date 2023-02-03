import { expect, it, describe, beforeEach } from 'vitest'
import MarkdownIt from 'markdown-it'
import { htmlImageLink } from '../htmlImageLink'
import { useJoplinImage, useJoplinLink } from '../useJoplinLink'

describe('测试 markdown-it', () => {
  let md: MarkdownIt
  beforeEach(() => {
    md = new MarkdownIt()
  })
  it('基本示例', () => {
    md.use(useJoplinLink(new Map().set('id', [{ id: '5783eb31e1924a4f9bc0023483f5ab13' }]))).use(
      useJoplinImage({ token: '', baseUrl: 'http://localhost:41488' }),
    )
    expect(md.render('![c4cad43066f695cc7d49725b04ebc1bc.png](:/5783eb31e1924a4f9bc0023483f5ab13)').trim()).toBe(
      '<p><img src="http://localhost:41488/resources/5783eb31e1924a4f9bc0023483f5ab13/file?token=" alt=""></p>',
    )
    expect(md.render('[test](:/f248ee4013224815a0813c52d83dac5b)').trim()).toBe(
      '<p><a href="vscode://rxliuli.joplin-vscode-plugin/open?id%3Df248ee4013224815a0813c52d83dac5b">test</a></p>',
    )
  })
  it('测试解析图片链接', () => {
    const str = '![c4cad43066f695cc7d49725b04ebc1bc.png](:/5783eb31e1924a4f9bc0023483f5ab13)'
    const token = md.parseInline(str, null)
    const res = token[0].children?.find((item) => item.type === 'image')?.attrGet('src')
    expect(res).toBe(':/5783eb31e1924a4f9bc0023483f5ab13')
  })
  it('测试拦截 img 标签', () => {
    md = new MarkdownIt({ html: true, linkify: true })
    md.use(htmlImageLink({ token: '', baseUrl: 'http://localhost:41488' }))
    expect(md.render(`<img src=":/f248ee4013224815a0813c52d83dac5b" />`)).toBe(
      '<img src="http://localhost:41488/resources/f248ee4013224815a0813c52d83dac5b/file?token=">',
    )
    expect(md.render(`<img src=":/f248ee4013224815a0813c52d83dac5b" alt="test" />`)).toBe(
      '<img src="http://localhost:41488/resources/f248ee4013224815a0813c52d83dac5b/file?token=" alt="test">',
    )
    expect(md.render(`test <img src=":/f248ee4013224815a0813c52d83dac5b" alt="test" />`).trim()).toBe(
      `<p>test <img src="http://localhost:41488/resources/f248ee4013224815a0813c52d83dac5b/file?token=" alt="test"></p>`,
    )
    expect(md.render(`<img src="http://github.com" />`).trim()).toBe(`<img src="http://github.com" />`)
  })
  it('html media', () => {
    const r = md
      .use((md) => {
        const defaultRender =
          md.renderer.rules.link_open ||
          function (tokens, idx, options, env, self) {
            return md.renderer.renderToken(tokens, idx, options)
          }
        md.renderer.rules.link_open = (tokens, idx, opt, env, self) => {
          const href = tokens[idx].attrGet('href')
          if (href?.endsWith('.mp3')) {
            return `<audio controls src="${href}" type="audio/mpeg">`
          }
          return defaultRender(tokens, idx, opt, env, self)
        }
      })
      .render('[audio](test.mp3)')
    expect(r).to.be.include('audio')
  })
})
