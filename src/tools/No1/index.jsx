import GenAppletLinks from './GenAppletLinks';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Layout } from 'antd'
import context from '../../stores'
import { observer } from 'mobx-react';
const { Header, Content } = Layout
const Component = observer((props) => {
  const { UserStore } = React.useContext(context)
  return <>
    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
    <Content className="content">
      {(UserStore?.currentUser) ? <GenAppletLinks /> : <div style={{ display: 'flex', fontSize: '30px' }}>
        请先<Link to='/login'>登录</Link>或者<Link to='/register'>注册</Link>
      </div>}
    </Content>
  </>
})
export default Component;