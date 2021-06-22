import { RouteConfig } from 'react-router-config'
import { lazy } from 'react'
import { i18n } from '../../common/I18n'

export type RouteMenuConfig = RouteConfig & { title: string }
export const routeList = () =>
  [
    {
      path: '/',
      component: lazy(() => import('../../pages/home')),
      exact: true,
      title: i18n.t('menu.home'),
    },
    {
      path: '/settings',
      component: lazy(() => import('../../pages/settings')),
      title: i18n.t('menu.settings'),
    },
    {
      path: '/unusedResource',
      component: lazy(() => import('../../pages/unusedResource')),
      title: i18n.t('menu.unusedResource'),
    },
    {
      path: '/notFoundResource',
      component: lazy(() => import('../../pages/notFoundResource')),
      title: i18n.t('menu.notFoundResource'),
    },
    {
      path: '/convertExternalLink',
      component: lazy(() => import('../../pages/convertExternalLink')),
      title: i18n.t('menu.convertExternalLink'),
    },
  ] as RouteMenuConfig[]
