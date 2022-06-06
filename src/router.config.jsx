import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Spin } from 'antd'
import styled from 'styled-components'
const Index = React.lazy(() => import('./pages/index'))
const Login = React.lazy(() => import('./pages/Login'))
const Register = React.lazy(() => import('./pages/Register'))
const Empty = React.lazy(() => import('./pages/Empty'))
const No1 = React.lazy(() => import('./tools/GenAppletLinks'))
const No2 = React.lazy(() => import('./tools/UploadAllLinks'))
const No3 = React.lazy(() => import('./tools/UserCenter'))
const No4 = React.lazy(() => import('./tools/GetPagePath'))

const StyledSpin = styled(Spin)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const config = () => {
  return (
    <Suspense fallback={<StyledSpin size='large' />}>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='01' element={<No1 />} />
        <Route path='02' element={<No2 />} />
        <Route path='03' element={<No3 />} />
        <Route path='04' element={<No4 />} />
        <Route path='*' element={<Empty />} />
      </Routes>
    </Suspense>
  )
}
