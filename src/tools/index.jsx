import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import context from '../stores'
const Welcome = styled.div`
  font-size: 50px;
`
const Login = styled.div`
  display: flex;
  font-size: 30px;
`
const Wrapper = React.lazy(() => import('../components/Wrapper'))
const Component = observer(() => {
  const { UserStore } = React.useContext(context)
  const { currentUser } = UserStore
  useEffect(() => {
    document.title = appTitle
  }, [])
  return (
    <Wrapper>
      <Welcome>欢迎使用，{`《${appTitle}》`}</Welcome>
      <Welcome>
        当前用户：{currentUser ? currentUser?.attributes?.realname : '未登录'}
      </Welcome>
    </Wrapper>
  )
})
export default Component

export const Empty = () => {
  return (
    <Wrapper>
      <h1>404，此页面不存在，请检查网址是否正确。</h1>
    </Wrapper>
  )
}
export const NeedLogin = () => {
  return (
    <Wrapper>
      <Login>
        请先<Link to='/login'>登录</Link>或者
        <Link to='/register'>注册</Link>
      </Login>
    </Wrapper>
  )
}
export const appTitle = '小小工具箱'