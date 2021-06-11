import { checkNoteResource } from '../CheckNoteResourceWorker'

it('测试 checkNoteResource', () => {
  const res = checkNoteResource.check(`
    # 测试笔记

测试内容

[如何实现根据多个字段排序对象数组](:/46404926f54549ad9988b16638d8e90e)

[unist-util-visit](https://unifiedjs.com/explore/package/unist-util-visit/)
  `)
  console.log(res)
})
