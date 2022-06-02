import React, { Suspense, useState, useMemo } from 'react'
import logo from './logo.svg'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { Layout, Menu, Spin } from 'antd'
import Index, { Empty } from './tools'
import { config, sidebar } from './router.config'

const { Sider } = Layout

const Component = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const toggle = () => setIsCollapsed(!isCollapsed)
  return (
    <HashRouter>
      <Layout style={{ height: '100vh' }}>
        <Sider collapsible collapsed={isCollapsed} onCollapse={toggle}>
          <div className='logo' style={{ textAlign: 'center' }}>
            <Link to='/'>
              <img src={logo} className='App-logo' alt='logo' />
            </Link>
          </div>
          <Menu theme='dark' mode='inline' items={sidebar} />
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
