import * as React from 'react'
import LayoutPage from './pages/layout'
import { HashRouter } from 'react-router-dom'

export const App: React.FC = () => {
  return (
    <HashRouter>
      <LayoutPage />
    </HashRouter>
  )
}
