import { createHashHistory, RouteConfig } from '@liuli-util/react-router'
import { TranslateType } from '../i18n'

export type MenuRouteConfig = RouteConfig & { title: keyof TranslateType }

export const history = createHashHistory()

export const routeList: MenuRouteConfig[] = [
  {
    path: '/',
    component: () => import('../views/home'),
    title: 'home.title',
  },
  {
    path: '/settings',
    component: () => import('../views/settings'),
    title: 'settings.title',
  },
  {
    path: '/unusedResource',
    component: () => import('../views/unusedResource'),
    title: 'unusedResource.title',
  },
  {
    path: '/notFoundResource',
    component: () => import('../views/notFoundResource'),
    title: 'notFoundResource.title',
  },
  {
    path: '/convertExternalLink',
    component: () => import('../views/convertExternalLink'),
    title: 'convertExternalLink.title',
  },
  {
    path: '/checkParentNotebook',
    component: () => import('../views/checkParentNotebook'),
    title: 'checkParentNotebook.title',
  },
  {
    path: '/fixFileExtension',
    component: () => import('../views/fixFileExtendsion'),
    title: 'fixFileExtension.title',
  },
  {
    path: '/checkActionApi',
    component: () => import('../views/checkActionApi'),
    title: 'checkActionApi.title',
  },
  {
    path: '/replace',
    component: () => import('../views/replace'),
    title: 'replace.title',
  },
]
