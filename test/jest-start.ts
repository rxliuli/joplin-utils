import { overrideConsole } from './util/overrideConsole'
import { setupTestEnv } from './util/setupTestEnv'

beforeAll(() => {
  overrideConsole()
  setupTestEnv()
})
