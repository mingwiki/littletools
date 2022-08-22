import React, { Suspense, useContext, lazy, useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Spin } from 'antd'
import styled from 'styled-components'
import context from './stores'
import { observer } from 'mobx-react'
const Index = lazy(() => import('./pages/index'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const ChangePassword = lazy(() => import('./pages/ChangePassword'))
const Empty = lazy(() => import('./pages/Empty'))
const LoginRequired = lazy(() => import('./pages/LoginRequired'))
const No1 = lazy(() => import('./tools/GenAppletLinks'))
const No2 = lazy(() => import('./tools/GenQRCode'))
const No3 = lazy(() => import('./tools/QueyLinks'))
const No4 = lazy(() => import('./tools/GetPagePath'))
const No5 = lazy(() => import('./tools/UploadAllLinks'))

const StyledSpin = styled(Spin)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Component = () => {
  const { UserStore } = useContext(context)
  const { currentUser } = UserStore
  return (
    <Suspense fallback={<StyledSpin size='large' />}>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='changePassword' element={<ChangePassword />} />
        {currentUser ? (
          [
            { path: '01', element: <No1 /> },
            { path: '02', element: <No2 /> },
            { path: '03', element: <No3 /> },
            { path: '04', element: <No4 /> },
            { path: '05', element: <No5 /> },
            { path: '*', element: <Empty /> },
          ].map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))
        ) : (
          <Route path='*' element={<LoginRequired />} />
        )}
      </Routes>
    </Suspense>
  )
}
export default observer(Component)
