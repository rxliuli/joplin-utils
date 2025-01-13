import { describe, expect, it } from 'vitest'
import { CheckResult, checkNote } from '../FixInternalLinkTitleView'

describe('checkNote', () => {
  it('basic', () => {
    const list = checkNote(
      {
        '4ceebc36276b448dab40cc6c3388fbf3': {
          title: 'test 1',
          body: '',
        },
        c0ae6f9be8404a68998e7de53305326f: {
          title: 'test 2',
          body: '',
        },
      },
      '[Test 1](:/4ceebc36276b448dab40cc6c3388fbf3) [test 2](:/c0ae6f9be8404a68998e7de53305326f)',
    )
    expect(list).deep.eq([
      {
        id: '4ceebc36276b448dab40cc6c3388fbf3',
        url: '4ceebc36276b448dab40cc6c3388fbf3',
        title: 'Test 1',
        noteTitle: 'test 1',
      } as CheckResult,
    ])
    console.log(list)
  })
  it('no match', () => {
    const list = checkNote(
      {
        '4ceebc36276b448dab40cc6c3388fbf3': {
          title: 'test 1',
          body: '',
        },
        c0ae6f9be8404a68998e7de53305326f: {
          title: 'test 2',
          body: '',
        },
      },
      '[test 1](:/4ceebc36276b448dab40cc6c3388fbf3) [test 2](:/c0ae6f9be8404a68998e7de53305326f)',
    )
    expect(list).deep.eq([])
  })
  it('match with sub title link', () => {
    const list = checkNote(
      {
        c0ae6f9be8404a68998e7de53305326f: {
          title: 'test 1',
          body: '## sub title',
        },
      },
      '[test1  # sub title](:/c0ae6f9be8404a68998e7de53305326f#sub-title)',
    )
    expect(list).deep.eq([
      {
        id: 'c0ae6f9be8404a68998e7de53305326f',
        url: 'c0ae6f9be8404a68998e7de53305326f#sub-title',
        title: 'test1  # sub title',
        noteTitle: 'test 1 # sub title',
      } as CheckResult,
    ])
  })
})
