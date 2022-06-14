import React, { useEffect, useContext } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import context from '../stores'
import acct from '../20220614152412.png'

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
      extra: [],
    })
  }, [])
  return (
    <>
      <Welcome>欢迎使用，{`《${appTitle}》`}</Welcome>
      <Welcome>
        当前用户：{currentUser ? currentUser.nickname : '未登录'}
      </Welcome>
      <h1>原有服务器挂了，先已改有公司测试服务器。</h1>
      <h1>原有账户名不变，默认登录密码为123。</h1>
      <img src={acct} alt='accounts' />
    </>
  )
})
export default Component

export const appTitle = '小小工具箱'
