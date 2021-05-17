import { i18n, LanguageEnum } from '../I18n'

describe('测试 i18n', () => {
  /**
   * 因为 i18next 默认使用 `:` 作为命名空间，`.` 作为嵌套 key 的分隔符，所以在 key 中使用这两个字符都是比较麻烦的
   * @link https://github.com/i18next/i18next/issues/361
   */
  it('测试只显示 title 参数的问题', async () => {
    await i18n.load(LanguageEnum.ZH_CN)
    const res = i18n.t(
      'blog.[{{rate}}/{{all}}] is reading note attachments and tags: {{title}}' as any,
      {
        rate: 1,
        all: 100,
        title: '前端工程化实践',
      },
    )
    console.log(res)
  })
})
