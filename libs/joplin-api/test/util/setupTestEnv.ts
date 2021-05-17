import { config } from '../../src'

export function setupTestEnv() {
  config.port = 27583
  config.token = process.env.TOKEN!
}
