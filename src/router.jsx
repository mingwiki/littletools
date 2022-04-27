import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Spin } from 'antd'
import { appTitle } from './tools/data'

const AppPageToUrl = React.lazy(() => import('./tools/AppPageToUrl'))

const Component = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin size="large" />} >
        <Routes>
          <Route path="/" element={<>
          <div style={{ fontSize: 50 }}>欢迎使用，《{appTitle}》</div>
          <div>有任何建议或意见请提Issue或Pull Request</div>
          <div>仓库地址：<a href="https://github.com/mingwiki/littletools">https://github.com/mingwiki/littletools</a></div>
          <div>邮件：mingwiki@gmail.com</div>
          </>} />
          <Route path="/AppPageToUrl" element={<AppPageToUrl />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
export default Component
