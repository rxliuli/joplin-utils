import * as React from 'react'
import { Suspense, useState } from 'react'
import { renderRoutes } from 'react-router-config'
import { routeList, RouteMenuConfig } from './constants/router'
import { Layout, Menu } from 'antd'
import css from './App.module.css'
import { Link } from 'react-router-dom'
import { useMount } from 'react-use'
import { i18n } from './common/I18n'
import { getLanguage } from './common/getLanguage'

type AppProps = {}

export const App: React.FC<AppProps> = () => {
  const [list, setList] = useState<RouteMenuConfig[]>([])
  useMount(async () => {
    await i18n.load(getLanguage())
    setList(routeList())
  })
  return (
    <Layout className={css.app}>
      <Layout.Sider className={css.sider} width="max-content">
        <h2 className={css.logo}>Joplin Batch</h2>
        <Menu>
          {list.map((item) => (
            <Menu.Item key={item.path as string}>
              <Link to={item.path as string}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Layout.Sider>
      <Layout.Content className={css.main}>
        <Suspense fallback={'loading...'}>{renderRoutes(list)}</Suspense>
      </Layout.Content>
    </Layout>
  )
}
