import React, { useState } from 'react'
import logo from './logo.svg'
import './index.css'
import 'antd/dist/antd.css'
import { Layout, Menu } from 'antd'
import Router from './router'
import { sidebar } from './tools/cons.js'
import styled from 'styled-components'

const { Sider, Content, Header, Footer } = Layout
const StyledLayout = styled(Layout)`
  height: 100vh; 
`
const StyledFooter = styled(Footer)`
  text-align: center;
`
const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const toggle = () => setIsCollapsed(!isCollapsed)
  const appTitle = '常用小工具'
  React.useEffect(() => {
    document.title = appTitle
  }, [])
  return (
    <StyledLayout>
      <Sider collapsible collapsed={isCollapsed} onCollapse={toggle} width='fit-content'>
        <div className="logo" style={{ textAlign: 'center' }}>
          <a href="/" >
            <img src={logo} href="/" className="App-logo" alt="logo" />
          </a>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={sidebar}
        />
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content className="content">
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }} >
            <Router />
          </div>
        </Content>
        <StyledFooter>{appTitle} &copy; {new Date().getFullYear()}</StyledFooter>
      </Layout>
    </StyledLayout >
  )
}

export default App
