import unified = require('unified')
import { Link } from 'mdast'
import { Node } from 'unist'
import map = require('unist-util-map')
import remarkStringify = require('remark-stringify')
import prettier = require('prettier')
import { Options } from 'prettier'
import { Settings } from 'unified'
import visit = require('unist-util-visit')
import * as remarkParse from 'remark-parse'

describe('测试 remark.js', () => {
  const settings: Settings = {
    bullet: '-',
    fences: true,
    incrementListMarker: false,
  }
  const text = `
# title

- test

[Joplin VSCode 插件编写](:/d4ab4244b77b4529a68782f2fdcce07e)
[github](https://github.com/)
`
  const options: Options = { parser: 'markdown', tabWidth: 2 }
  it('基本示例 解析 markdown 然后输出 markdown', async () => {
    const processor = unified().use(remarkParse).use(remarkStringify, settings)
    const res = processor.stringify(processor.parse(text))

    expect(prettier.format(res, options)).toBe(prettier.format(text, options))
  })
  it('测试 map', () => {
    const processor = unified().use(remarkParse).use(remarkStringify, settings)
    const url = '/resource'
    const tree = map(processor.parse(text), (node) => {
      if (node.type !== 'link') {
        return node
      }
      return {
        ...node,
        url: url,
      } as Link
    })
    visit(tree, 'link', (node: Link) => {
      expect(node.url).toBe(url)
    })
  })
  it('测试 filter', () => {
    const processor = unified().use(remarkParse).use(remarkStringify, settings)

    const res: Node[] = []
    visit(processor.parse(text), (node) => {
      if (node.type === 'link') {
        res.push(node)
      }
    })

    res.forEach((node) => {
      console.log(node)
      expect(node.type).toBe('link')
    })
  })
})
