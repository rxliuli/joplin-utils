import { RouteConfig } from 'react-router-config'
import { lazy } from 'react'

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
    component: lazy(() => import('../../pages/unusedResource')),
    title: '检查未使用的附件资源',
  },
  {
    path: '/notFoundResource',
    component: lazy(() => import('../../pages/notFoundResource')),
    title: '检查笔记中引用失效的资源',
  },
]
