import { retry } from '../retry'

it('basic', async () => {
  const f = jest.fn().mockImplementation(() => Promise.reject(new Error()))
  const fn = retry(f, 3)
  await expect(() => fn()).rejects.toThrowError()
  expect(f.mock.calls.length).toBe(4)
})

it('res', async () => {
  const f = jest.fn().mockImplementation(async (i: number) => {
    if (i === 0) {
      throw new Error()
    }
    return i
  })
  const fn = retry(f, 3)
  expect(await fn(1)).toBe(1)
  await expect(() => fn(0)).rejects.toThrowError()
})
