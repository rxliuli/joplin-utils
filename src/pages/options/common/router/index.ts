import { RouteConfig } from 'react-router-config'
import { lazy } from 'react'

export const routeList: RouteConfig[] = [
  {
    path: '/',
    component: lazy(() => import('../../pages/settings')),
    exact: true,
  },
  {
    path: '/note/:id',
    component: lazy(() => import('../../pages/note')),
  },
]
