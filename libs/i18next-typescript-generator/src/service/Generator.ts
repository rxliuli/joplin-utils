import { WriterFunctionUtil } from '../util/WriterFunctionUtil'
import { Project, StructureKind, WriterFunction, Writers } from 'ts-morph'
import { RandomUtil } from '../util/RandomUtil'

/**
 * 翻译的字符串
 */
export interface TranslateKeyConfig {
  key: string
  params?: string[]
}

/**
 * 根据解析的结果生成类型定义
 */
export class Generator {
  private project = new Project()

  convert(configs: TranslateKeyConfig[]): WriterFunction[] {
    return configs.map(({ key, params }) => {
      const tokens = [{ name: 'key', type: WriterFunctionUtil.literal(key) }]
      if (params) {
        tokens.push({
          name: 'params',
          type: Writers.object(
            params.reduce((res, p) => {
              res[p] = Writers.unionType('string', 'number')
              return res
            }, {} as Record<string, WriterFunction>),
          ),
        })
      }
      return WriterFunctionUtil.tuple(tokens)
    })
  }

  generate(configs: TranslateKeyConfig[]) {
    const types = this.convert(configs)
    const sourceFile = this.project.createSourceFile(RandomUtil.string(), {
      statements: [
        {
          kind: StructureKind.TypeAlias,
          name: 'TranslateParams',
          isExported: true,
          type: WriterFunctionUtil.union(types),
        },
      ],
    })
    sourceFile.formatText()
    return sourceFile.getText()
  }
}
