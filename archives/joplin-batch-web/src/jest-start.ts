import { setupTestEnv } from './util/setupTestEnv'
import { beforeAll } from 'vitest'

beforeAll(async () => {
  await setupTestEnv()
})
