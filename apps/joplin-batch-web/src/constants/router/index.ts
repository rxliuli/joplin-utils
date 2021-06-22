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
      title: i18n.t('home.title'),
    },
    {
      path: '/settings',
      component: lazy(() => import('../../pages/settings')),
      title: i18n.t('settings.title'),
    },
    {
      path: '/unusedResource',
      component: lazy(() => import('../../pages/unusedResource')),
      title: i18n.t('unusedResource.title'),
    },
    {
      path: '/notFoundResource',
      component: lazy(() => import('../../pages/notFoundResource')),
      title: i18n.t('notFoundResource.title'),
    },
    {
      path: '/convertExternalLink',
      component: lazy(() => import('../../pages/convertExternalLink')),
      title: i18n.t('convertExternalLink.title'),
    },
    {
      path: '/checkParentNotebook',
      component: lazy(() => import('../../pages/checkParentNotebook')),
      title: i18n.t('checkParentNotebook.title'),
    },
  ] as RouteMenuConfig[]
