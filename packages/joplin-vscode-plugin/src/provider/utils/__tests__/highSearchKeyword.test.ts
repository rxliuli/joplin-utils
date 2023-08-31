import { expect, it } from 'vitest'
import { highSearchKeyword, SearchMatchResult } from '../highSearchKeyword'

it('highSearchKeyword', () => {
  expect(highSearchKeyword('The quick brown fox jumped over the lazy dog', 'over')).deep.eq([
    {
      context: 'The quick brown fox jumped over the lazy dog',
      match: 'over',
      start: 27,
      end: 31,
      globalStart: 27,
      globalEnd: 31,
    },
  ] as SearchMatchResult[])
  expect(highSearchKeyword('这是一个测试字符串，测试字符串是用来测试的。', '测试 字符串')).deep.eq(
    (
      [
        { context: '这是一个测试字符串，测试字符串是用来测试的。', match: '测试', start: 4, end: 6 },
        { context: '这是一个测试字符串，测试字符串是用来测试的。', match: '字符串', start: 6, end: 9 },
        {
          context: '这是一个测试字符串，测试字符串是用来测试的。',
          match: '测试',
          start: 10,
          end: 12,
        },
        {
          context: '这是一个测试字符串，测试字符串是用来测试的。',
          match: '字符串',
          start: 12,
          end: 15,
        },
        {
          context: '这是一个测试字符串，测试字符串是用来测试的。',
          match: '测试',
          start: 18,
          end: 20,
        },
      ] as SearchMatchResult[]
    ).map((it) => ({
      ...it,
      globalStart: it.start,
      globalEnd: it.end,
    })),
  )
  expect(
    highSearchKeyword(
      `这是一个测试字符串，
  测试字符串是用来测试的。
  这里有多行文本。`,
      '测试 字符串',
    ),
  ).deep.eq([
    {
      context: '这是一个测试字符串，',
      match: '测试',
      start: 4,
      end: 6,
      globalStart: 4,
      globalEnd: 6,
    },
    {
      context: '这是一个测试字符串，',
      match: '字符串',
      start: 6,
      end: 9,
      globalStart: 6,
      globalEnd: 9,
    },
    {
      context: '  测试字符串是用来测试的。',
      match: '测试',
      start: 2,
      end: 4,
      globalStart: 13,
      globalEnd: 15,
    },
    {
      context: '  测试字符串是用来测试的。',
      match: '字符串',
      start: 4,
      end: 7,
      globalStart: 15,
      globalEnd: 18,
    },
    {
      context: '  测试字符串是用来测试的。',
      match: '测试',
      start: 10,
      end: 12,
      globalStart: 21,
      globalEnd: 23,
    },
  ] as SearchMatchResult[])
  expect(
    highSearchKeyword(
      `这是一个测试字符串，
  TeSt字符串是用来测试的。
  这里有多行文本。`,
      'test',
    ),
  ).deep.eq([
    {
      context: '  TeSt字符串是用来测试的。',
      match: 'TeSt',
      start: 2,
      end: 6,
      globalStart: 13,
      globalEnd: 17,
    },
  ])
})
