import path from 'path'
import { expect, it, vi } from 'vitest'
import { convert, InputPlugin, Note, OutputPlugin } from '../convert'

it('convert', async () => {
  const generateVirtual: InputPlugin = {
    name: 'generateVirtual',
    async *generate() {
      yield { id: 'test1', title: 'test1' } as Note
      yield { id: 'test2', title: 'test2' } as Note
    },
  }
  const mockFn = vi.fn()
  const outputVirtual: OutputPlugin = {
    name: 'outputVirtual',
    handle: mockFn,
  }
  await convert({ root: path.resolve(), plugins: [generateVirtual, outputVirtual] })

  expect(mockFn.mock.calls.length).eq(2)
})
