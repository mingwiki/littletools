import React from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { LinkOutlined } from '@ant-design/icons'
import { No1 } from './tools';

export const main = () => {
  return (
    <Route path="01" element={<No1 />} />
  )
}
export const sidebar = [
  {
    key: '1',
    icon: <LinkOutlined />,
    label: <Link to='01'>生成小程序链接</Link>
  }
]
export const appTitle = '小小工具箱'
