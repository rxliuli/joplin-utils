import init, { cut } from 'jieba-wasm'
import { it } from 'vitest'

it('jieba-wasm', async () => {
  // console.log(Object.keys(init))
  // await init()
  const start = Date.now()
  const r = cut('中华人民共和国武汉市长江大桥', true)
  console.log(r, Date.now() - start)
})
