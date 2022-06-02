import React from 'react'
import { Layout } from 'antd'

const { Content } = Layout

export default ({ children }) => {
  return (
    <Content
      style={{
        margin: '16px',
        padding: '24px',
        border: '2px dashed',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        overflow: 'auto',
      }}>
      {children}
    </Content>
  )
}
