import React, { Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Spin } from 'antd'
import { appTitle } from './tools/data'

const AppPageToUrl = React.lazy(() => import('./tools/AppPageToUrl'))

const Component = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Spin size="large" />} >
        <Routes>
          <Route path="/" element={<>
          <div style={{ fontSize: 50 }}>欢迎使用，《{appTitle}》</div>
          <div>有任何建议或意见请提Issue或Pull Request</div>
          <div>仓库地址：<a href="//github.com/mingwiki/toolkits">github.com/mingwiki/toolkits</a></div>
          <div>镜像地址：<a href="//gitee.com/mingwiki/toolkits">gitee.com/mingwiki/toolkits</a></div>
          <div>工具地址：<a href="//mingwiki.gitee.io/toolkits">mingwiki.gitee.io/toolkits</a></div>
          <div>备用地址：<a href="//zed.ink/toolkits">zed.ink/toolkits</a></div>
          <div>邮件：mingwiki@gmail.com</div>
          </>} />
          <Route path="/AppPageToUrl" element={<AppPageToUrl />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}
export default Component
