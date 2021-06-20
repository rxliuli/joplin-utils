import { exhaustMapByParam } from '../exhaustMapByParam'
import { repeatedCall } from '@liuli-util/test'

it('exhaustMapByParam', async () => {
  const mockFn = jest.fn()
  const fn = exhaustMapByParam(mockFn)
  await repeatedCall(() => fn(1), 100)
  expect(mockFn.mock.calls.length).toBe(1)
  mockFn.mockClear()
  await repeatedCall((i) => fn(i % 2), 100)
  expect(mockFn.mock.calls.length).toBe(2)
})
