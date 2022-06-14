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
const Sidebar = lazy(() => import('./components/Sidebar'))
const PageHeader = lazy(() => import('./components/PageHeader'))
const Wrapper = lazy(() => import('./components/Wrapper'))
const App = () => {
  const { UserStore, HeaderStore } = useContext(context)
  const { getCurrentUser } = UserStore
  const { headers } = HeaderStore
  const ref = {
    logoRef: createRef(null),
    sidebarRef: createRef(null),
    menuRef: createRef(null),
    headerRef: createRef(null),
    contentRef: createRef(null),
  }
  const { sidebarRef, menuRef, contentRef, headerRef } = ref
  useEffect(() => {
    getCurrentUser()
    const t = gsap.timeline()
    t.set(sidebarRef.current, {
      y: '-100%',
      opacity: 0,
    })
      .set(menuRef.current.menu.list, {
        x: '-100%',
        opacity: 0,
        paddingRight: '100%',
      })
      .set(headerRef.current, { y: '-100%', opacity: 0 })
      .set(contentRef.current, {
        opacity: 0,
      })
      .to('#root', { padding: '0 5vw', duration: 1 })
      .to(sidebarRef.current, {
        y: '0',
        opacity: 1,
      })
      .to(menuRef.current.menu.list, {
        x: '0',
        opacity: 1,
      })
      .to(menuRef.current.menu.list, {
        paddingRight: '0',
        ease: 'ease-in-out',
        duration: 1,
      })
      .to(headerRef.current, {
        y: '0',
        opacity: 1,
      })
      .to(contentRef.current, {
        opacity: 1,
      })
      .to('#root', {
        backgroundColor: 'black',
      })
  }, [getCurrentUser])
  return (
    <HashRouter>
      <MainLayout>
        <Sidebar ref={ref} />
        <Layout>
          <PageHeader {...headers} ref={ref} />
          <Wrapper ref={ref}>
            <Routers />
          </Wrapper>
        </Layout>
      </MainLayout>
    </HashRouter>
  )
}

export default observer(App)
