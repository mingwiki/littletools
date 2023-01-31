import React, { useEffect, lazy, useContext, createRef } from 'react'
import { HashRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import 'antd/dist/antd.min.css'
import { Layout } from 'antd'
import context from './stores'
import Routers from './router.config'
import styled from 'styled-components'
import gsap from 'gsap'
const MainLayout = styled(Layout)`
  height: 100vh;
  overflow: hidden;
`
const PageHeader = lazy(() => import('./components/PageHeader'))
const Wrapper = lazy(() => import('./components/Wrapper'))
const App = () => {
  const { UserStore } = useContext(context)
  const { getCurrentUser } = UserStore
  const ref = {
    headerRef: createRef(null),
    contentRef: createRef(null),
  }
  useEffect(() => {
    getCurrentUser()
    const t = gsap.timeline()
    t.to('#root', { maxWidth: '1800px', width: '80vw', duration: 0.6 }).to(
      '#root',
      {
        backgroundColor: 'black',
      }
    )
  }, [])
  return (
    <HashRouter>
      <MainLayout>
        <Layout>
          <PageHeader ref={ref} />
          <Wrapper ref={ref}>
            <Routers />
          </Wrapper>
        </Layout>
      </MainLayout>
    </HashRouter>
  )
}

export default observer(App)
