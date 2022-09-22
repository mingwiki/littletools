import React, { forwardRef, useContext } from 'react'
import { Button, PageHeader } from 'antd'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react'
import context from '../../stores'
const Component = observer(
  forwardRef((props, ref) => {
    const { headerRef } = ref
    const { AuthStore, UserStore } = useContext(context)
    const { logout } = AuthStore
    const { currentUser } = UserStore
    const navigate = useNavigate()
    const lr = currentUser
      ? [
          <Button key={99} onClick={() => navigate('/changePassword')}>
            修改密码
          </Button>,
          <Button key={100} type='primary' danger onClick={() => logout()}>
            注销
          </Button>,
        ]
      : [
          <Button key={99} type='primary' onClick={() => navigate('/login')}>
            登录
          </Button>,
          <Button
            key={100}
            type='primary'
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
                onClick={() => {
                  navigate('/')
                }}>
                首页
              </Button>,
              <Button
                key={2}
                onClick={() => {
                  navigate('01')
                }}>
                生成链接
              </Button>,
              <Button
                key={3}
                onClick={() => {
                  navigate('02')
                }}>
                生成二维码
              </Button>,
              <Button
                key={4}
                onClick={() => {
                  navigate('03')
                }}>
                管理链接
              </Button>,
              ...lr,
            ],
          }}
        />
      </div>
    )
  }),
)

export default Component
