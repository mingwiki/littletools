import React, { Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Spin } from 'antd'

const Welcome = React.lazy(() => import('./tools/Welcome'))
const AppPageToUrl = React.lazy(() => import('./tools/AppPageToUrl'))

const Component = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Spin size="large" />} >
        <Routes>
        <Route path="/" element={<Welcome/>} />
          <Route path="/AppPageToUrl" element={<AppPageToUrl />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
export default Component
