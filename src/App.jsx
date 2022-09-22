import React, { useEffect, lazy, useContext, createRef, useMemo } from 'react'
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
    logoRef: createRef(null),
    menuRef: createRef(null),
    headerRef: createRef(null),
    contentRef: createRef(null),
  }
  const { menuRef, contentRef, headerRef } = ref
  useEffect(() => {
    getCurrentUser()
    const t = gsap.timeline()
    t.to('#root', { padding: '0 5vw', duration: 0.5 }).to('#root', {
      backgroundColor: 'black',
    })
  }, [getCurrentUser])
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
