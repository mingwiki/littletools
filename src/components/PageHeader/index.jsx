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
    const tabs = [
      { name: '首页', path: '/' },
      { name: '生成链接', path: '/01' },
      { name: '配置', path: '/02' },
      { name: '历史', path: '/03' },
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
              ...tabs.map((tab, idx) => (
                <Button
                  key={idx}
                  type={location.pathname === tab.path && 'primary'}
                  onClick={() => {
                    navigate(tab.path)
                  }}>
                  {tab.name}
                </Button>
              )),
              ...lr,
            ],
          }}
        />
      </div>
    )
  })
)

export default Component
