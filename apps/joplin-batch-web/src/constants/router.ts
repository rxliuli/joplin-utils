import HomePage from '../views/home'
import SettingsPage from '../views/settings'
import UnusedResourcePage from '../views/unusedResource'
import NotFoundResourceCheckPage from '../views/notFoundResource'
import ConvertExternalLinkPage from '../views/convertExternalLink'
import CheckParentNotebookPage from '../views/checkParentNotebook'
import FixFileExtensionPage from '../views/fixFileExtendsion'
import CheckActionApiView from '../views/checkActionApi'
import { createHashHistory, RouteConfig } from '@liuli-util/react-router'
import { TranslateType } from '../i18n'

export type MenuRouteConfig = RouteConfig & { title: keyof TranslateType }

export const history = createHashHistory()

export const routeList: MenuRouteConfig[] = [
  {
    path: '/',
    component: HomePage,
    title: 'home.title',
  },
  {
    path: '/settings',
    component: SettingsPage,
    title: 'settings.title',
  },
  {
    path: '/unusedResource',
    component: UnusedResourcePage,
    title: 'unusedResource.title',
  },
  {
    path: '/notFoundResource',
    component: NotFoundResourceCheckPage,
    title: 'notFoundResource.title',
  },
  {
    path: '/convertExternalLink',
    component: ConvertExternalLinkPage,
    title: 'convertExternalLink.title',
  },
  {
    path: '/checkParentNotebook',
    component: CheckParentNotebookPage,
    title: 'checkParentNotebook.title',
  },
  {
    path: '/fixFileExtension',
    component: FixFileExtensionPage,
    title: 'fixFileExtension.title',
  },
  {
    path: '/checkActionApi',
    component: CheckActionApiView,
    title: 'checkActionApi.title',
  },
]
