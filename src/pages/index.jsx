import React, { useEffect, useContext } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import context from '../stores'
import acct from '../20220614152412.png'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
const Welcome = styled.div`
  font-size: 50px;
`
const Component = observer(() => {
  const { UserStore, HeaderStore } = useContext(context)
  const { currentUser } = UserStore
  const { setHeaders } = HeaderStore
  useEffect(() => {
    document.title = appTitle
    setHeaders({
      ghost: false,
      onBack: () => window?.history.back(),
      title: '',
      subTitle: '',
      extra: [
        <Button key={2} onClick={() => navigate('/changePassword')}>
          修改密码
        </Button>,
        <Button key={3} type='primary' danger onClick={() => logout()}>
          注销
        </Button>,
      ],
    })
  }, [])
  return (
    <>
      <Welcome>欢迎使用，{`《${appTitle}》`}</Welcome>
      <Welcome>
        当前用户：{currentUser ? currentUser.nickname : '未登录'}
      </Welcome>
      <h1>
        原有服务器挂了，现已改用公司测试服务器。请使用下方的局域网链接，在公司内部访问。
      </h1>
      <h1>
        http://172.16.57.114:3001/
        <a href='http://172.16.57.114:3001/'>点击跳转</a>
      </h1>
      <h1>
        原有账户名不变，默认登录密码为123。请登录后在查询链接页修改密码。现有账户名如下:
      </h1>
      <img src={acct} alt='accounts' width='600px' />
    </>
  )
})
export default Component

export const appTitle = '小小工具箱'
