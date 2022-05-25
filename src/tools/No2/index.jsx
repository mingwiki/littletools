import UploadAllLinks from './UploadAllLinks'
import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'antd'
import context from '../../stores'
import { observer } from 'mobx-react'
const { Header, Content } = Layout
const Component = observer(() => {
  const { UserStore } = React.useContext(context)
  const { currentUser } = UserStore
  return (
    <>
      <Header
        className='site-layout-sub-header-background'
        style={{ padding: 0 }}
      />
      <Content className='content'>
        {currentUser ? (
          <UploadAllLinks />
        ) : (
          <div style={{ display: 'flex', fontSize: '30px' }}>
            请先<Link to='/login'>登录</Link>或者
            <Link to='/register'>注册</Link>
          </div>
        )}
      </Content>
    </>
  )
})
export default Component
