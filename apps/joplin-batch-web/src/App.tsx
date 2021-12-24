import * as React from 'react'
import LayoutPage from './views/layout'
import { HashRouter } from 'react-router-dom'
import { ReloadPrompt } from './ReloadPrompt'

export const App: React.FC = () => {
  return (
    <HashRouter>
      <LayoutPage />
      <ReloadPrompt />
    </HashRouter>
  )
}
