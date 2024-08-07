import { createRoot } from 'react-dom/client'
import App, { routeList } from './App'
import './styles.css'
import { createHashHistory, ReactRouter } from '@liuli-util/react-router'

createRoot(document.getElementById('joplin-plugin-content')!).render(
  <ReactRouter
    history={createHashHistory()}
    routes={[
      {
        path: '/',
        component: App,
        children: routeList,
      },
    ]}
  />,
)
