import { RouteConfig } from 'react-router-config'
import { lazy } from 'react'
import UnusedResourcePage from '../../pages/unusedResource'

export const routeList: RouteConfig[] = [
  {
    path: '/',
    component: lazy(() => import('../../pages/home')),
    exact: true,
  },
  {
    path: '/about',
    component: lazy(() => import('../../pages/about')),
  },
  {
    path: '/settings',
    component: lazy(() => import('../../pages/settings')),
  },
  {
    path: '/unusedResource',
    component: UnusedResourcePage,
  },
]
