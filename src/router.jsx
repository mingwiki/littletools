import React, { Suspense, useState } from 'react'
import logo from './logo.svg'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { Layout, Menu, Spin } from 'antd'
import { sidebar, appTitle } from './tools/data.js'
import styled from 'styled-components'

const { Sider, Footer } = Layout
const StyledLayout = styled(Layout)`
  height: 100vh;
`
const StyledFooter = styled(Footer)`
  text-align: center;
`
const Welcome = React.lazy(() => import('./tools/Welcome'))
const AppPageToUrl = React.lazy(() => import('./tools/AppPageToUrl'))

const Component = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const toggle = () => setIsCollapsed(!isCollapsed)
  return (
    <HashRouter>
      <Layout>
        <Sider collapsible collapsed={isCollapsed} onCollapse={toggle}>
          <div className="logo" style={{ textAlign: 'center' }}>
            <Link to='/'>
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={sidebar}
          />
        </Sider>
        <StyledLayout>
          <Suspense fallback={<Spin size="large" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />} >
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/AppPageToUrl" element={<AppPageToUrl />} />
            </Routes>
          </Suspense>
          <StyledFooter>{appTitle} &copy; {new Date().getFullYear()}</StyledFooter>
        </StyledLayout>
      </Layout>
    </HashRouter>
  )
}
export default Component
