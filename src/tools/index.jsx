import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { appTitle } from '../router.config'
import context from '../stores'
import { observer } from 'mobx-react'
import Wrapper from '../components/Wrapper'

const Component = observer(() => {
  const { UserStore } = React.useContext(context)
  const { currentUser } = UserStore
  useEffect(() => {
    document.title = appTitle
  }, [])
  return (
    <Wrapper>
      <div style={{ fontSize: 50 }}>
        欢迎使用，{currentUser?.attributes?.realname || `《${appTitle}》`}
      </div>
      <div>有任何建议或意见请提Issue或Pull Request</div>
      <div>
        仓库地址：
        <a
          href='//github.com/mingwiki/toolkits'
          target='_blank'
          rel='noreferrer'>
          github.com/mingwiki/toolkits
        </a>
      </div>
      <div>
        镜像地址：
        <a
          href='//gitee.com/mingwiki/toolkits'
          target='_blank'
          rel='noreferrer'>
          gitee.com/mingwiki/toolkits
        </a>
      </div>
      <div>
        工具地址：
        <a href='//mingwiki.gitee.io/toolkits' target='_blank' rel='noreferrer'>
          mingwiki.gitee.io/toolkits
        </a>
      </div>
      <div>
        备用地址：
        <a href='//zed.ink/toolkits' target='_blank' rel='noreferrer'>
          zed.ink/toolkits
        </a>
      </div>
      <div>邮件：mingwiki@gmail.com</div>
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
      <div style={{ display: 'flex', fontSize: '30px' }}>
        请先<Link to='/login'>登录</Link>或者
        <Link to='/register'>注册</Link>
      </div>
    </Wrapper>
  )
}
