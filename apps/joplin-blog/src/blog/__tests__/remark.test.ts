import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkStringify from 'remark-stringify'
import { format, Options } from 'prettier'

it('测试任务列表序列化', () => {
  const md = unified().use(remarkParse).use(remarkGfm).use(remarkStringify, {
    bullet: '-',
    fences: true,
    incrementListMarker: false,
  })
  const text = `
# test

- [x] task 1
- [ ] task 2
  `
  const tree = md.parse(text)
  const res = md.stringify(tree)

  console.log(text)
  console.log(res)
  console.log(format(res, { parser: 'markdown', tabWidth: 2 } as Options))
})
