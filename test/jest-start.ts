import { overrideConsole } from './util/overrideConsole'
import { setupTestEnv } from './setupTestEnv'

beforeAll(() => {
  overrideConsole()
  setupTestEnv()
})
