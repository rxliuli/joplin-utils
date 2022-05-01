import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { history, routeList } from './constants/router'
import LayoutView from './views/layout'
import { ReactRouter } from '@liuli-util/react-router'

ReactDOM.render(
  <React.StrictMode>
    <ReactRouter history={history} routes={[{ path: '/', component: LayoutView, children: routeList }]} />
  </React.StrictMode>,
  document.getElementById('root'),
)
