import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  LinkOutlined,
  CloudUploadOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Login, Register } from './pages'
import { No1, No2, No3 } from './tools'

export const main = () => {
  return (
    <>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='01' element={<No1 />} />
      <Route path='02' element={<No2 />} />
      <Route path='03' element={<No3 />} />
    </>
  )
}
export const sidebar = [
  {
    key: '1',
    icon: <LinkOutlined />,
    label: <Link to='01'>生成小程序链接</Link>,
  },
  {
    key: '2',
    icon: <CloudUploadOutlined />,
    label: <Link to='02'>批量上传小程序链接</Link>,
  },
  {
    key: '3',
    icon: <UserOutlined />,
    label: <Link to='03'>个人中心</Link>,
  },
]
export const appTitle = '小小工具箱'
