import React from 'react'
import { HashRouter } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import { Layout } from 'antd'
import context from './stores'
import { config } from './router.config'
import styled from 'styled-components'

const MainLayout = styled(Layout)`
  height: 100vh;
  overflow: hidden;
`
const Sidebar = React.lazy(() => import('./components/Sidebar'))
const PageHeader = React.lazy(() => import('./components/PageHeader'))
const Wrapper = React.lazy(() => import('./components/Wrapper'))
const App = () => {
  const { UserStore } = React.useContext(context)
  const { getCurrentUser } = UserStore
  React.useEffect(() => {
    getCurrentUser()
  }, [UserStore, getCurrentUser])
  return (
    <HashRouter>
      <MainLayout>
        <Sidebar />
        <MainLayout>
          <PageHeader />
          <Wrapper>{config()}</Wrapper>
        </MainLayout>
      </MainLayout>
    </HashRouter>
  )
}

export default App
