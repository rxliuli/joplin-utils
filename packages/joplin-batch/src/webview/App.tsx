import { Button } from './components/ui/button'
import { Link, RouteConfig, RouterView, useLocation, useMatch } from '@liuli-util/react-router'
import { DemoView } from './views/DemoView'
import { CheckUnusedResourceView } from './views/UnusedResourceView'
import { SettingsView } from './views/SettingsView'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './components/ui/sheet'
import { useDeepSignal } from 'deepsignal/react'
import { useEffect } from 'react'
import { ReplaceAllView } from './views/ReplaceAllView'
import { Separator } from './components/ui/separator'

function HomeView() {
  return <div>home</div>
}

type MenuConfig = RouteConfig & {
  meta?: {
    title: string
  }
}
export const routeList: MenuConfig[] = [
  {
    path: '/',
    component: CheckUnusedResourceView,
    meta: {
      title: 'Unused Resources',
    },
  },
  {
    path: '/replace-all',
    component: ReplaceAllView,
    meta: {
      title: 'Replace All',
    },
  },
  {
    path: '/settings',
    component: SettingsView,
    meta: {
      title: 'Settings',
    },
  },
  // {
  //   path: '/demo',
  //   component: DemoView,
  //   meta: {
  //     title: 'Demo',
  //   },
  // },
]

function MenuItem(route: Pick<MenuConfig, 'path' | 'meta'>) {
  const loc = useLocation()
  return (
    <Link to={route.path} key={route.path}>
      <Button variant={loc.pathname === route.path ? 'secondary' : 'ghost'} className="w-full justify-start">
        {route.meta?.title}
      </Button>
    </Link>
  )
}

function Sidebar() {
  const loc = useLocation()
  return (
    <aside className="space-y-1">
      {routeList
        .filter((it) => it.meta)
        .map((route) => (
          <Link to={route.path} key={route.path}>
            <Button variant={loc.pathname === route.path ? 'secondary' : 'ghost'} className="w-full justify-start">
              {route.meta!.title}
            </Button>
          </Link>
        ))}
    </aside>
  )
}

export default function App() {
  const isOpen = useDeepSignal({
    value: false,
  })
  useEffect(() => {
    isOpen.value = false
  }, [useLocation()])
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b flex justify-between items-center">
        <div className="flex items-center">
          <Sheet open={isOpen.value} onOpenChange={(value) => (isOpen.value = value)}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" onClick={() => (isOpen.value = !isOpen.value)}>
                <Menu className={'h-6 w-6'} />
              </Button>
            </SheetTrigger>
            <SheetContent side={'left'}>
              <SheetHeader>
                <SheetTitle>
                  <Link to={'/'} className={'px-4 block'}>
                    Joplin Batch
                  </Link>
                </SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <div className="flex-grow">
        <div className="h-full px-4 py-6 lg:px-8">
          <RouterView />
        </div>
      </div>
    </div>
  )
}
