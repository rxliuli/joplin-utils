import { JoplinMarkdownUtil, ListNode } from '../JoplinMarkdownUtil'

it('测试 buildList', () => {
  const nodeList = [
    {
      id: '1',
      title: '1',
      children: [
        {
          id: '2',
          title: '2',
        },
      ],
    },
    {
      id: '3',
      title: '3',
    },
  ] as ListNode[]

  const res = JoplinMarkdownUtil.buildList(nodeList)
  console.log(res)
})
