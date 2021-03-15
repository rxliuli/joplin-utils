import { Application } from './Application'
import { GoogleSearchEngineAdapter } from './engine/GoogleSearchEngineAdapter'
import { BingSearchEngineAdapter } from './engine/BingSearchEngineAdapter'

new Application([
  new GoogleSearchEngineAdapter(),
  new BingSearchEngineAdapter(),
]).start()
