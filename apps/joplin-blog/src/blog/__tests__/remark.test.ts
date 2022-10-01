import { expect, it } from 'vitest'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkStringify from 'remark-stringify'
import { format, Options } from 'prettier'

const md = unified().use(remarkParse).use(remarkGfm).use(remarkStringify, {
  bullet: '-',
  fences: true,
  incrementListMarker: false,
})

it('测试任务列表序列化', () => {
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
it('查看 list 的 ast', async () => {
  const node = md.parse(`
- 1
  - [2](/2)
- [3](/3)
  `)
  // await writeJson(path.resolve(__dirname, 'temp/list.json'), node)
})
