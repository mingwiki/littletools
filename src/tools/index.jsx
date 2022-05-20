import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { Link } from 'react-router-dom'
import { LinkOutlined } from '@ant-design/icons'

export const No1 = React.lazy(() => import('./No1'))
export const sidebar = [
  {
    key: '1',
    icon: <LinkOutlined />,
    label: <Link to='01'>生成小程序链接</Link>
  }
]
export const appTitle = '小小工具箱'
const { Header, Content } = Layout
const Component = () => {
  useEffect(() => {
    document.title = '欢迎使用'
  }, [])
  return (
    <>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content className="content">
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360, display: 'flex', flexDirection: 'column', gap: 20 }} >
          <div style={{ fontSize: 50 }}>欢迎使用，《{appTitle}》</div>
          <div>有任何建议或意见请提Issue或Pull Request</div>
          <div>仓库地址：<a href="//github.com/mingwiki/toolkits" target="_blank" rel="noreferrer">github.com/mingwiki/toolkits</a></div>
          <div>镜像地址：<a href="//gitee.com/mingwiki/toolkits" target="_blank" rel="noreferrer">gitee.com/mingwiki/toolkits</a></div>
          <div>工具地址：<a href="//mingwiki.gitee.io/toolkits" target="_blank" rel="noreferrer">mingwiki.gitee.io/toolkits</a></div>
          <div>备用地址：<a href="//zed.ink/toolkits" target="_blank" rel="noreferrer">zed.ink/toolkits</a></div>
          <div>邮件：mingwiki@gmail.com</div>
        </div>
      </Content>
    </>
  )
}
export default Component
export const Empty = () => {
  return (
    <h1>此页面不存在，请检查网址是否正确。</h1>
  )
}
