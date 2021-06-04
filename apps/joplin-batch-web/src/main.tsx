import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { renderRoutes } from 'react-router-config'
import { routeList } from './constants/router'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={'loading...'}>{renderRoutes(routeList)}</Suspense>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
