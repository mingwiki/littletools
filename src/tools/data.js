import React from 'react'
import { Link } from 'react-router-dom'
import { LinkOutlined } from '@ant-design/icons'
export const sidebar = [
  {
    key: '1',
    icon: <LinkOutlined />,
    label: <Link to='AppPageToUrl'>生成小程序链接</Link>
  }
]
export const appTitle = '小小工具箱'
