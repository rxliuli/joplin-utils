import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import { HashRouter } from 'react-router-dom'
import { App } from './App'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={'loading...'}>
        <App />
      </Suspense>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
