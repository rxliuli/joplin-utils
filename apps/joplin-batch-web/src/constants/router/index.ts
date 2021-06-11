import { RouteConfig } from 'react-router-config'
import { lazy } from 'react'
import UnusedResourcePage from '../../pages/unusedResource'

export const routeList: (RouteConfig & { title: string })[] = [
  {
    path: '/',
    component: lazy(() => import('../../pages/home')),
    exact: true,
    title: '首页',
  },
  {
    path: '/settings',
    component: lazy(() => import('../../pages/settings')),
    title: '设置',
  },
  {
    path: '/unusedResource',
    component: UnusedResourcePage,
    title: '检查未使用的附件资源',
  },
]
