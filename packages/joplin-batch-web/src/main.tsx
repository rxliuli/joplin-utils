import React from 'react'
import 'antd/dist/antd.css'
import { history, routeList } from './constants/router'
import LayoutView from './views/layout'
import { ReactRouter } from '@liuli-util/react-router'
import { createRoot } from 'react-dom/client'
import { init } from './constants/joplinApiGenerator'

init()
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactRouter history={history} routes={[{ path: '/', component: LayoutView, children: routeList }]} />
  </React.StrictMode>,
)
