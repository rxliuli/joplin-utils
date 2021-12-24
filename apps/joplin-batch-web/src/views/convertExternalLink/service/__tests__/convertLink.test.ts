import { ContentLink, MarkdownLinkUtil } from '../MarkdownLinkUtil'

describe('测试 convertLink', () => {
  const content = `[internal](:/123)

[external](https://blog.rxliuli.com/p/91fc75b3/)
`
  it('测试 parseLink', () => {
    expect(MarkdownLinkUtil.parseLink(content).length).toBe(2)
  })
  it('测试转换', () => {
    const convertLinks = MarkdownLinkUtil.parseLink(content).filter((item) =>
      item.url.startsWith('https://blog.rxliuli.com/p'),
    )
    const convertLinkMap = convertLinks.reduce((res, item) => {
      res[item.url] = {
        title: 'test',
        url: ':/test',
      }
      return res
    }, {} as Record<string, ContentLink>)
    const res = MarkdownLinkUtil.convertLink(content, convertLinkMap)
    console.log(res)
    expect(res.includes('https://blog.rxliuli.com/p')).toBeFalsy()
  })
  describe('边界情况', () => {
    it('链接没有标题', () => {
      const content = `[](:/123)`
      expect(MarkdownLinkUtil.parseLink(content)[0].title).toBeUndefined()
      const res = MarkdownLinkUtil.convertLink(content, {
        ':/123': {
          title: 'test',
          url: ':/123',
        },
      })
      expect(res.includes('test')).toBeTruthy()
    })
  })
})
