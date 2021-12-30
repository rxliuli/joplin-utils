import * as React from 'react'
import { HashRouter } from 'react-router-dom'
import LayoutView from './views/layout'

export const App: React.FC = () => {
  return (
    <HashRouter>
      <LayoutView />
    </HashRouter>
  )
}
