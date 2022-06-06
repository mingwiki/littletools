import React, { useEffect, lazy, useContext } from 'react'
import { HashRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import 'antd/dist/antd.min.css'
import { Layout, PageHeader } from 'antd'
import context from './stores'
import Routers from './router.config'
import styled from 'styled-components'

const MainLayout = styled(Layout)`
  height: 100vh;
  overflow: hidden;
`
const Sidebar = lazy(() => import('./components/Sidebar'))
const Wrapper = lazy(() => import('./components/Wrapper'))
const App = () => {
  const { UserStore, HeaderStore } = useContext(context)
  const { getCurrentUser } = UserStore
  const { headers } = HeaderStore
  useEffect(() => {
    getCurrentUser()
  }, [UserStore, getCurrentUser])
  return (
    <HashRouter>
      <MainLayout>
        <Sidebar />
        <MainLayout>
          {Object.keys(headers)?.length > 0 ? (
            <PageHeader {...headers} />
          ) : null}
          <Wrapper>
            <Routers />
          </Wrapper>
        </MainLayout>
      </MainLayout>
    </HashRouter>
  )
}

export default observer(App)
