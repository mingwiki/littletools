import React, { Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import { config } from './router.config'
import Index, { Empty } from './tools'

const Sidebar = React.lazy(() => import('./components/Sidebar'))
const Component = () => {
  return (
    <HashRouter>
      <Layout style={{ height: '100vh' }}>
        <Sidebar />
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
