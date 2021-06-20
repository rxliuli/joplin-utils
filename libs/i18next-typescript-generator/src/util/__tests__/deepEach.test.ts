import { deepEach } from '../deepEach'

describe('测试 deepEach', () => {
  it('基本示例', () => {
    deepEach(
      {
        name: 'liuli',
        info: {
          code: '1',
        },
      },
      (value, paths) => {
        if (typeof value === 'object') {
          return Object.entries(value)
        }
        console.log(value)
        console.log(paths)
      },
    )
  })
  it('遍历树结构', () => {
    const node = {
      value: 1,
      label: '1',
      children: [
        {
          value: 2,
          label: '2',
        },
      ],
    }
    deepEach(node, (value: any, paths) => {
      paths.pop()
      paths.push(value.value)
      console.log(value.value, paths)
      if (Array.isArray(value.children)) {
        return value.children.map((item: { value: string }) => {
          return [item.value, item]
        })
      }
    })
  })
})
