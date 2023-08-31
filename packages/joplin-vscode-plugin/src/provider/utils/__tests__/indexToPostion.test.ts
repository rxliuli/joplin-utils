import { expect, it } from 'vitest'
import { indexToPostion } from '../indexToPostion'

it('indexToPostion', () => {
  const content = 'Hello, world!\nThis is a test.\nAnother line.'
  const position = { start: 13, end: 25 }
  const result = indexToPostion(content, position)
  expect(result).deep.eq({ start: { line: 0, character: 13 }, end: { line: 1, character: 11 } })
})
