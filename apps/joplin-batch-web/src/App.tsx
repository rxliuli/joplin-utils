import * as React from 'react'
import { renderRoutes } from 'react-router-config'
import { routeList } from './constants/router'
import { Layout, Menu } from 'antd'
import css from './App.module.css'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'

type AppProps = {}

export const App: React.FC<AppProps> = () => {
  return (
    <Layout className={css.app}>
      <Layout.Sider className={css.sider}>
        <h2 className={css.logo}>Joplin Batch Web</h2>
        <Menu>
          {routeList.map((item) => (
            <Menu.Item key={item.path as string}>
              <Link to={item.path as string}>{item.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Layout.Sider>
      <Layout.Content className={css.main}>
        <Suspense fallback={'loading...'}>{renderRoutes(routeList)}</Suspense>
      </Layout.Content>
    </Layout>
  )
}
