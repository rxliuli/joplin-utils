import { WriterFunction, WriterFunctionOrValue } from 'ts-morph'

type NativeTypeLiteral = 'string' | 'number' | 'boolean'

/**
 * ts-morph 的一些 WriterFunction 工具函数
 */
export class WriterFunctionUtil {
  /**
   * tuple 类型
   * @param tokens
   */
  static tuple(
    tokens: { name: string; type: NativeTypeLiteral | WriterFunctionOrValue }[],
  ): WriterFunction {
    return (writer) => {
      writer.write('[')
      for (let token of tokens) {
        writer.write(token.name)
        writer.write(': ')
        if (typeof token.type === 'function') {
          token.type(writer)
        } else {
          writer.write(token.type.toString())
        }
        writer.write(', ')
      }
      writer.write(']')
    }
  }

  /**
   * 字面量类型
   * @param type
   */
  static literal(type: string | number): WriterFunction {
    return (writer) => {
      if (typeof type === 'number') {
        writer.write(type.toString())
        return
      }
      writer.write("'")
      writer.write(type.replace(new RegExp("'", 'g'), "\\'"))
      writer.write("'")
    }
  }
}
