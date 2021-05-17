import * as React from 'react'
import { StrictMode, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { routeList } from './common/router'

const App: React.FC = () => {
  return (
    <StrictMode>
      <HashRouter>
        <Suspense fallback={'加载中...'}>{renderRoutes(routeList)}</Suspense>
      </HashRouter>
    </StrictMode>
  )
}

export default App
