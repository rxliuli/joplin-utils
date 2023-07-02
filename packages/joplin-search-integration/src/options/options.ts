interface RouteConfig {
  path: string
  component: () => Promise<any>
}

const routes: RouteConfig[] = [
  { path: '/note', component: () => import('./views/note') },
  { path: '/', component: () => import('./views/settings') },
]

function getRoute() {
  const p = new URLSearchParams(location.search)
  const path = p.get('path') ?? '/'
  return routes.find((item) => item.path === path)
}

const route = getRoute()
console.log('route', route)
route?.component()

export {}
