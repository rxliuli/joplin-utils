import { beforeAll } from 'vitest'
import { clearDatabase } from './util/clearDatabase'
import { overrideConsole } from './util/overrideConsole'
import { setupTestEnv } from './util/setupTestEnv'

beforeAll(async () => {
  overrideConsole()
  await setupTestEnv()
  await clearDatabase()
})
