export interface SearchMatchResult {
  context: string
  match: string
  start: number
  end: number
  globalStart: number
  globalEnd: number
}

/**
 * 找到匹配的搜索结果
 * @param text
 * @param keyword
 */
export function highSearchKeyword(text: string, keyword: string): SearchMatchResult[] {
  const searchWords = keyword.toLowerCase().split(' ') // 转换为小写
  const results: SearchMatchResult[] = []
  const lines = text.split('\n')

  let globalIndex = 0

  for (const line of lines) {
    const lowerCaseLine = line.toLowerCase() // 转换为小写
    for (const word of searchWords) {
      let startIndex = 0
      while (startIndex < lowerCaseLine.length) {
        const position = lowerCaseLine.indexOf(word, startIndex)
        if (position === -1) break

        const result: SearchMatchResult = {
          context: line,
          match: line.substring(position, position + word.length), // 使用原文本以保留原始大小写
          start: position,
          end: position + word.length,
          globalStart: globalIndex + position,
          globalEnd: globalIndex + position + word.length,
        }

        results.push(result)
        startIndex = position + word.length
      }
    }

    globalIndex += line.length + 1
  }

  results.sort((a, b) => a.globalStart - b.globalStart)

  return results
}
