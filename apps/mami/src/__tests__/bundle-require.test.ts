import { bundleRequire } from 'bundle-require'
import path from 'path'
import { expect, it } from 'vitest'
import configTemplate from './assets/configTemplate'

it('bundleRequire', async () => {
  const { mod } = await bundleRequire({
    filepath: path.resolve(__dirname, 'assets/configTemplate.ts'),
  })
  expect(mod.default).to.deep.eq(configTemplate)
})
