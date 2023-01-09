import React, { forwardRef, useContext } from 'react'
import { Button, PageHeader } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react'
import context from '../../stores'
const Component = observer(
  forwardRef((props, ref) => {
    const { headerRef } = ref
    const { AuthStore, UserStore } = useContext(context)
    const { logout } = AuthStore
    const { currentUser } = UserStore
    const navigate = useNavigate()
    const location = useLocation()

    const lr = currentUser
      ? [
          <Button
            key={99}
            type={location.pathname === '/changePassword' && 'primary'}
            onClick={() => navigate('/changePassword')}>
            修改密码
          </Button>,
          <Button key={100} type='primary' danger onClick={() => logout()}>
            注销
          </Button>,
        ]
      : [
          <Button
            key={99}
            type={location.pathname === '/login' && 'primary'}
            onClick={() => navigate('/login')}>
            登录
          </Button>,
          <Button
            key={100}
            type={location.pathname === '/register' && 'primary'}
            onClick={() => navigate('/register')}>
            注册
          </Button>,
        ]
    return (
      <div ref={headerRef}>
        <PageHeader
          {...props}
          {...{
            ghost: false,
            onBack: () => navigate(-1),
            title: '',
            subTitle: '',
            extra: [
              <Button
                key={1}
                type={location.pathname === '/' && 'primary'}
                onClick={() => {
                  navigate('/')
                }}>
                首页
              </Button>,
              <Button
                key={2}
                type={location.pathname === '/01' && 'primary'}
                onClick={() => {
                  navigate('01')
                }}>
                生成链接
              </Button>,
              <Button
                key={3}
                type={location.pathname === '/02' && 'primary'}
                onClick={() => {
                  navigate('02')
                }}>
                查询链接
              </Button>,
              ...lr,
            ],
          }}
        />
      </div>
    )
  })
)

export default Component
