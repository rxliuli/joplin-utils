import { RouteConfig } from 'react-router-config'
import { i18n } from '../i18n'
import HomePage from '../../views/home'
import SettingsPage from '../../views/settings'
import UnusedResourcePage from '../../views/unusedResource'
import NotFoundResourceCheckPage from '../../views/notFoundResource'
import ConvertExternalLinkPage from '../../views/convertExternalLink'
import CheckParentNotebookPage from '../../views/checkParentNotebook'
import FixFileExtensionPage from '../../views/fixFileExtendsion'

export type RouteMenuConfig = RouteConfig & { title: string }

export function routeList(): RouteMenuConfig[] {
  return [
    {
      path: '/',
      component: HomePage,
      exact: true,
      title: i18n.t('home.title'),
    },
    {
      path: '/settings',
      component: SettingsPage,
      title: i18n.t('settings.title'),
    },
    {
      path: '/unusedResource',
      component: UnusedResourcePage,
      title: i18n.t('unusedResource.title'),
    },
    {
      path: '/notFoundResource',
      component: NotFoundResourceCheckPage,
      title: i18n.t('notFoundResource.title'),
    },
    {
      path: '/convertExternalLink',
      component: ConvertExternalLinkPage,
      title: i18n.t('convertExternalLink.title'),
    },
    {
      path: '/checkParentNotebook',
      component: CheckParentNotebookPage,
      title: i18n.t('checkParentNotebook.title'),
    },
    {
      path: '/fixFileExtension',
      component: FixFileExtensionPage,
      title: i18n.t('fixFileExtension.title'),
    },
  ] as RouteMenuConfig[]
}
