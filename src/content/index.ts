import { Application } from './Application'
import { GoogleSearchEngineAdapter } from './engine/GoogleSearchEngineAdapter'

new Application([new GoogleSearchEngineAdapter()]).start()
