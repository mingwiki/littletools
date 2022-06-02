import React, { Suspense, useState, useRef, useEffect } from 'react'
import logo from './favicon.png'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { Layout, Menu, Spin } from 'antd'
import Index, { Empty } from './tools'
import { config, sidebar } from './router.config'
import gsap from 'gsap'

const { Sider } = Layout

const Component = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const toggle = () => setIsCollapsed(!isCollapsed)
  const logoRef = useRef(null)
  const sidebarRef = useRef(null)
  const layoutRef = useRef(null)
  useEffect(() => {
    const t = gsap.timeline()
    t.set(sidebarRef.current, {
      x: '-100%',
      ease: 'ease-in-out',
      duration: 1,
    })
      .to(sidebarRef.current, {
        x: '0',
        opacity: 1,
        ease: 'ease-in-out',
        duration: 1,
      })
      .to(logoRef.current, {
        x: '50',
        ease: 'ease-in-out',
        duration: 1,
        opacity: 0.5,
      })
      .to(logoRef.current, {
        x: '-50',
        ease: 'ease-in-out',
        duration: 1,
        opacity: 0,
      })
      .to(logoRef.current, {
        x: '0',
        ease: 'ease-in-out',
        duration: 1,
        opacity: 1,
      })
      .to(logoRef.current, { rotationY: '-360', duration: 1 })
  }, [])
  return (
    <HashRouter>
      <Layout style={{ height: '100vh' }}>
        <Sider
          collapsible
          collapsed={isCollapsed}
          onCollapse={toggle}
          ref={sidebarRef}
          style={{ backgroundColor: '#343a40' }}>
          <div className='logo' style={{ textAlign: 'center' }}>
            <Link to='/'>
              <img src={logo} className='App-logo' alt='logo' ref={logoRef} />
            </Link>
          </div>
          <Menu
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '6px',
              boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.8)',
              border: 'none',
              outline: 'none',
            }}
            mode='inline'
            items={sidebar}
          />
        </Sider>
        <Layout>
          <Suspense
            fallback={
              <Spin
                size='large'
                style={{
                  position: 'fixed',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            }>
            <Routes>
              <Route path='/' element={<Index />} />
              {config()}
              <Route path='*' element={<Empty />} />
            </Routes>
          </Suspense>
        </Layout>
      </Layout>
    </HashRouter>
  )
}
export default Component
