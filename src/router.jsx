import React, { Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import { config } from './router.config'
import Index, { Empty } from './tools'
import styled from 'styled-components'

const StyledSpin = styled(Spin)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const MainLayout = styled(Layout)`
  height: 100vh;
  overflow: hidden;
`
const Sidebar = React.lazy(() => import('./components/Sidebar'))
const Component = () => {
  return (
    <HashRouter>
      <MainLayout>
        <Sidebar />
        <MainLayout>
          <Suspense fallback={<StyledSpin size='large' />}>
            <Routes>
              <Route path='/' element={<Index />} />
              {config()}
              <Route path='*' element={<Empty />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </MainLayout>
    </HashRouter>
  )
}
export default Component
