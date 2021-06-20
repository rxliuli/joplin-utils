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
import {
  Project,
  StructureKind,
  WriterFunction,
  WriterFunctionOrValue,
  Writers,
} from 'ts-morph'
import { TranslateHandler } from '../TranslateHandler'

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

class WriterUtil {
  static tuple(
    tokens: { name: string; value: WriterFunctionOrValue }[],
  ): WriterFunction {
    return (writer) => {
      writer.write('[')
      for (let token of tokens) {
        writer.write(token.name)
        writer.write(': ')
        if (typeof token.value === 'function') {
          token.value(writer)
        } else {
          writer.write(token.value.toString())
        }
        writer.write(', ')
      }
      writer.write(']')
    }
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
                type: WriterUtil.tuple([
                  { name: 'key', value: Writers.unionType("'liuli'", "'rx'") },
                  { name: 'age', value: 'number' },
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
            WriterUtil.tuple([
              {
                name: 'key',
                value: "'test.hello'",
              },
            ]),
            WriterUtil.tuple([
              {
                name: 'key',
                value: "'test.params'",
              },
              {
                name: 'params',
                value: Writers.object({
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
