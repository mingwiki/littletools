import React, { useState, Suspense } from 'react'
import logo from './logo.svg'
import './index.css'
import 'antd/dist/antd.css'
import { Layout, Menu, Spin } from 'antd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'

const AppPageToUrl = React.lazy(() => import('./tools/AppPageToUrl'))
const { Sider, Content, Header, Footer } = Layout

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const toggle = () => setIsCollapsed(!isCollapsed)
  const appTitle = '常用小工具'
  React.useEffect(() => {
    document.title = appTitle
  }, [])
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider collapsible collapsed={isCollapsed} onCollapse={toggle}>
        <div className="logo" style={{ textAlign: 'center' }}>
          <a href="/" >
            <img src={logo} href="/" className="App-logo" alt="logo" />
          </a>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}

          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '拼接小程序链接'
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2'
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3'
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
        <Content className="content">
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360, position: 'relative' }}>
            <BrowserRouter>
              <Suspense fallback={<Spin size="large" />} >
                <Routes>
                  <Route path="/" element={<AppPageToUrl />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>{appTitle} &copy; {new Date().getFullYear()}</Footer>
      </Layout>
    </Layout>
  )
}

export default App
