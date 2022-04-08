import { overrideConsole } from './util/overrideConsole'
import { setupTestEnv } from './util/setupTestEnv'

beforeAll(async () => {
  overrideConsole()
  await setupTestEnv()
})
