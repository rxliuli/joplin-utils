import {
  createPrinter,
  createSourceFile,
  factory,
  ListFormat,
  Node,
  ScriptTarget,
  SyntaxKind,
} from 'typescript'
import path from 'path'
import { Project, StructureKind, Writers } from 'ts-morph'
import { WriterFunctionUtil } from '../util/WriterFunctionUtil'

class TypeScriptASTUtil {
  static toString(...nodes: Node[]) {
    const sourceFile = createSourceFile('', '', ScriptTarget.ESNext)
    const printer = createPrinter()
    return printer.printList(
      ListFormat.MultiLine,
      factory.createNodeArray(nodes),
      sourceFile,
    )
  }
}

describe('测试 typescript ast', () => {
  it('手动创建 ts ast', () => {
    const nameProp = factory.createPropertySignature(
      undefined,
      factory.createIdentifier('name'),
      undefined,
      factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
    )
    console.log(nameProp)
  })
  it('将 ts ast 转换为字符串', () => {
    const nameProp = factory.createPropertySignature(
      undefined,
      factory.createIdentifier('name'),
      undefined,
      factory.createKeywordTypeNode(SyntaxKind.StringKeyword),
    )
    const nodes = factory.createNodeArray([nameProp])
    const sourceFile = createSourceFile(
      path.resolve(__dirname, 'temp/test.d.ts'),
      '',
      ScriptTarget.ESNext,
    )
    const printer = createPrinter()
    const outputFile = printer.printList(
      ListFormat.MultiLine,
      nodes,
      sourceFile,
    )
    console.log(outputFile)
  })
  it('将 ts 代码解析为 ast', () => {})
})

describe('使用 ts-morph', () => {
  const project = new Project()
  it('构建一个 ast 并转换为代码', () => {
    const sourceFile = project.createSourceFile('', {
      statements: [
        {
          kind: StructureKind.Interface,
          name: 'Person',
          isExported: true,
          properties: [
            {
              name: 'name',
              type: 'string',
            },
            {
              name: 'name',
              type: 'number',
            },
          ],
        },
      ],
    })
    console.log('code: ', sourceFile.print())
  })
  describe('构建一个元组类型', () => {
    it('使用 ts 原生 api 构建', () => {
      const tuple = factory.createTupleTypeNode([
        factory.createNamedTupleMember(
          undefined,
          factory.createIdentifier('key'),
          undefined,
          factory.createLiteralTypeNode(
            factory.createStringLiteral('test.hello'),
          ),
        ),
      ])
      console.log('tuple code: ', TypeScriptASTUtil.toString(tuple))
    })
    it('构建一个 WriteUtil 辅助工具', () => {
      console.log(
        project
          .createSourceFile('', {
            statements: [
              {
                kind: StructureKind.TypeAlias,
                name: 'S',
                type: WriterFunctionUtil.tuple([
                  { name: 'key', type: Writers.unionType("'liuli'", "'rx'") },
                  { name: 'age', type: 'number' },
                ]),
              },
            ],
          })
          .print(),
      )
    })
  })
  it('构建一个复杂的联合类型', () => {
    const sourceFile = project.createSourceFile('', {
      statements: [
        {
          kind: StructureKind.TypeAlias,
          name: 'I18nextTranslateParams',
          isExported: true,
          type: Writers.unionType(
            WriterFunctionUtil.tuple([
              {
                name: 'key',
                type: "'test.hello'",
              },
            ]),
            WriterFunctionUtil.tuple([
              {
                name: 'key',
                type: "'test.params'",
              },
              {
                name: 'params',
                type: Writers.object({
                  what: Writers.unionType('string', 'number'),
                  how: Writers.unionType('string', 'number'),
                }),
              },
            ]),
          ),
        },
      ],
    })
    console.log('code: ', sourceFile.print())
  })
})
