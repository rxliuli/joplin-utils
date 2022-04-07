import { config } from 'joplin-api'
import MarkdownIt from 'markdown-it'
import { JoplinLinkRegex } from '../constant'
import { useJoplinImage, useJoplinLink } from '../useJoplinLink'

describe('测试 markdown-it', () => {
  it('基本示例', () => {
    const md = new MarkdownIt()
    md.use(useJoplinLink(new Map().set('id', [{ id: '5783eb31e1924a4f9bc0023483f5ab13' }]))).use(
      useJoplinImage({ token: '', port: 41488 }),
    )
    const res = md.render(`# test 2

![c4cad43066f695cc7d49725b04ebc1bc.png](:/5783eb31e1924a4f9bc0023483f5ab13)

[1. Welcome to Joplin!](:/f248ee4013224815a0813c52d83dac5b)
`)
    console.log(res)
  })
  it('测试解析图片链接', () => {
    const str = '![c4cad43066f695cc7d49725b04ebc1bc.png](:/5783eb31e1924a4f9bc0023483f5ab13)'
    const md = new MarkdownIt()
    const token = md.parseInline(str, null)
    const res = token[0].children?.find((item) => item.type === 'image')?.attrGet('src')
    expect(res).toBe(':/5783eb31e1924a4f9bc0023483f5ab13')
  })
})
