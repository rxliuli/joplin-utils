import { ts } from 'ts-morph'
import { RandomUtil } from './RandomUtil'
import { createMinifier } from 'dts-minify'
import { format } from 'prettier'
/**
 * 比较两个 ts 代码从 ast 上看是否一致
 * 实际上仍然有问题。。。
 * @link https://github.com/dsherret/ts-morph/issues/499#issuecomment-440079701
 * @param text1
 * @param text2
 */
export function areSame(text1: string, text2: string) {
  if (formatCode(text1) === formatCode(text2)) {
    return true
  }
  const tokens1 = getTokens(text1)
  const tokens2 = getTokens(text2)

  while (true) {
    const token1 = tokens1.next()
    const token2 = tokens2.next()

    if (token1.done && token2.done) return true
    if (token1.done || token2.done) return false
    if (token1.value !== token2.value) return false
  }
}

const minifier = createMinifier(ts)
export function formatCode(text: string) {
  return format(minifier.minify(text), {
    parser: 'typescript',
  })
}

function* getTokens(text: string) {
  const scanner = ts.createScanner(ts.ScriptTarget.Latest, true)
  scanner.setText(formatCode(text))
  scanner.setOnError((message) => console.error(message))
  scanner.setLanguageVariant(
    getLanguageVariantFromFileName(RandomUtil.string()),
  )

  while (scanner.scan() !== ts.SyntaxKind.EndOfFileToken)
    yield scanner.getTokenText()
}

function getLanguageVariantFromFileName(fileName: string) {
  const lowerCaseFileName = fileName.toLowerCase()
  const isJsxOrTsxFile =
    lowerCaseFileName.endsWith('.tsx') || lowerCaseFileName.endsWith('.jsx')
  return isJsxOrTsxFile ? ts.LanguageVariant.JSX : ts.LanguageVariant.Standard
}
