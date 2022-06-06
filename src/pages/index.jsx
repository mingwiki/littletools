import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import context from '../stores'
const Welcome = styled.div`
  font-size: 50px;
`
const Component = observer(() => {
  const { UserStore } = React.useContext(context)
  const { currentUser } = UserStore
  useEffect(() => {
    document.title = appTitle
  }, [])
  return (
    <>
      <Welcome>欢迎使用，{`《${appTitle}》`}</Welcome>
      <Welcome>
        当前用户：{currentUser ? currentUser?.attributes?.realname : '未登录'}
      </Welcome>
    </>
  )
})
export default Component

export const appTitle = '小小工具箱'
