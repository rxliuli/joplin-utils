import { Application } from './Application'
import { GoogleSearchEngineAdapter } from './engine/GoogleSearchEngineAdapter'
import { BingSearchEngineAdapter } from './engine/BingSearchEngineAdapter'
import { BaiduSearchEngineAdapter } from './engine/BaiduSearchEngineAdapter'

new Application([
  new GoogleSearchEngineAdapter(),
  new BingSearchEngineAdapter(),
  new BaiduSearchEngineAdapter(),
]).start()
