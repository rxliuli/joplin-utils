import { expect, it } from 'vitest'
import { fileSuffix } from '../fileSuffix'

it('fileSuffix', () => {
  expect(fileSuffix('/a/test.png', '107b79a2167d4bcabbfaff819120a31b').replaceAll('\\', '/')).eq(
    '/a/test_107b79a2167d4bcabbfaff819120a31b.png',
  )
  expect(fileSuffix('/a/test.md', '107b79a2167d4bcabbfaff819120a31b').replaceAll('\\', '/')).eq(
    '/a/test_107b79a2167d4bcabbfaff819120a31b.md',
  )
  expect(fileSuffix('/a/test.km.svg', '107b79a2167d4bcabbfaff819120a31b').replaceAll('\\', '/')).eq(
    '/a/test_107b79a2167d4bcabbfaff819120a31b.km.svg',
  )
})
