import { render } from 'preact'
import Router, { Route } from 'preact-router'
import { createHashHistory } from 'history'
import SettingsView from './views/settings'
import './index.css'
import { loadConfig } from './utils/loadConfig'
import NoteView from './views/note'

const his = createHashHistory()
function App() {
  return (
    <Router history={his as any}>
      <Route path="/note" component={NoteView} />
      <Route path="/" component={SettingsView} />
    </Router>
  )
}

render(<App />, document.querySelector('#app')!)

document.documentElement.classList.toggle('dark', (await loadConfig()).theme === 'dark')
