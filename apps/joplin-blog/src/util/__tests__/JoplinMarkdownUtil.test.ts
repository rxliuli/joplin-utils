import { expect, it, describe } from 'vitest'
import { JoplinMarkdownUtil } from '../JoplinMarkdownUtil'

describe('测试 JoplinMarkdownUtil', () => {
  it('测试 trimBody', () => {
    expect(JoplinMarkdownUtil.trimBodyHeader('## sub header')).toBe('## sub header')
    expect(
      JoplinMarkdownUtil.trimBodyHeader(`# header

## sub header

content
`),
    ).toBe(`## sub header

content
`)
  })
})
