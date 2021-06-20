import { WriterFunctionUtil } from '../WriterFunctionUtil'
import { Project, StructureKind, WriterFunction } from 'ts-morph'
import { areSame } from '../areSame'

export function print(type: WriterFunction) {
  const project = new Project()
  const sourceFile = project.createSourceFile('', {
    statements: [
      {
        kind: StructureKind.TypeAlias,
        name: 'S',
        type,
      },
    ],
  })
  sourceFile.print()
  return sourceFile.getText()
}

describe('测试 WriterFunctionUtil', () => {
  describe('测试 tuple', () => {
    it('基本示例', () => {
      const txt = print(
        WriterFunctionUtil.tuple([
          { name: 'name', type: 'string' },
          { name: 'age', type: 'number' },
        ]),
      )
      expect(areSame(txt, 'type S = [name: string, age: number]')).toBeTruthy()
    })
  })
  describe('测试 literal', () => {
    it('基本示例', () => {
      const res = print(WriterFunctionUtil.literal('px'))
      expect(areSame(res, 'type S = "px"')).toBeTruthy()
    })
    it('包含需要转义的内容', () => {
      const res = print(WriterFunctionUtil.literal("hello '"))
      expect(areSame(res, `type S = "hello '"`)).toBeTruthy()
    })
  })
})
