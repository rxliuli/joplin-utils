export function indexToPostion(
  content: string,
  position: { start: number; end: number },
): {
  start: { line: number; character: number }
  end: { line: number; character: number }
} {
  let line = 0
  let character = 0

  const start = { line: 0, character: 0 }
  const end = { line: 0, character: 0 }

  for (let i = 0; i < content.length; i++) {
    // 更新开始位置
    if (i === position.start) {
      start.line = line
      start.character = character
    }

    // 更新结束位置
    if (i === position.end) {
      end.line = line
      end.character = character
      break // 找到结束位置后，退出循环
    }

    // 更新行和字符计数
    if (content[i] === '\n') {
      line++
      character = 0
    } else {
      character++
    }
  }

  // 如果结束位置是文本的最后一个字符
  if (position.end === content.length) {
    end.line = line
    end.character = character
  }

  return { start, end }
}
