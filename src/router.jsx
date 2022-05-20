import React, { Suspense, useState, useMemo } from 'react'
import logo from './logo.svg'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { Layout, Menu, Spin } from 'antd'
import styled from 'styled-components'
import Index, { Empty } from './tools'
import { main, sidebar, appTitle } from './main'

const { Sider, Footer } = Layout
const StyledLayout = styled(Layout)`
  height: 100vh;
`
const StyledFooter = styled(Footer)`
  text-align: center;
`
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
            items={sidebar}
          />
        </Sider>
        <StyledLayout>
          <Suspense fallback={<Spin size="large" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />} >
            <Routes>
              <Route path="/" element={<Index />} />
              {main()}
              <Route path="*" element={<Empty />} />
            </Routes>
          </Suspense>
          <StyledFooter>{appTitle} &copy; {useMemo(() => new Date().getFullYear(), [])}</StyledFooter>
        </StyledLayout>
      </Layout>
    </HashRouter>
  )
}
export default Component
