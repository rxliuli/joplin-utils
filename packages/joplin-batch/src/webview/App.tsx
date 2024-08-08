import { Button } from './components/ui/button'
import { Link, RouteConfig, RouterView, useLocation } from '@liuli-util/react-router'
import { CleanUnusedResourcesView } from './views/CleanUnusedResourcesView'
import { SettingsView } from './views/SettingsView'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './components/ui/sheet'
import { useDeepSignal } from 'deepsignal/react'
import { useEffect, useMemo } from 'react'
import { FindAndReplaceView } from './views/FindAndReplaceView'

type MenuConfig = RouteConfig & {
  meta?: {
    title: string
  }
}
export const routeList: MenuConfig[] = [
  {
    path: '/',
    component: CleanUnusedResourcesView,
    meta: {
      title: 'Clean Unused Resources',
    },
  },
  {
    path: '/find-and-replace',
    component: FindAndReplaceView,
    meta: {
      title: 'Find and Replace',
    },
  },
  {
    path: '/settings',
    component: SettingsView,
    meta: {
      title: 'Settings',
    },
  },
]

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
  const loc = useLocation()
  const title = useMemo(
    () => routeList.find((it) => it.path === loc.pathname)?.meta?.title ?? 'Joplin Batch',
    [loc.pathname],
  )
  return (
    <div className="h-screen flex flex-col">
      <header className="border-b flex justify-between items-center">
        <div className="flex items-center">
          <Sheet open={isOpen.value} onOpenChange={(value) => (isOpen.value = value)}>
            <div className={'flex items-center'}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => (isOpen.value = !isOpen.value)}>
                  <Menu className={'h-6 w-6'} />
                </Button>
              </SheetTrigger>
              <h2 className="ml-4">{title}</h2>
            </div>
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
      <div className="flex-1 overflow-hidden flex-grow">
        <div className="h-full px-4 py-6 lg:px-8">
          <RouterView />
        </div>
      </div>
    </div>
  )
}
