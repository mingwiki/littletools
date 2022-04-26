import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Spin } from 'antd'

const AppPageToUrl = React.lazy(() => import('./tools/AppPageToUrl'))

const Component = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin size="large" />} >
        <Routes>
          <Route path="/" element={<h1>欢迎使用</h1>} />
          <Route path="/AppPageToUrl" element={<AppPageToUrl />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
export default Component
