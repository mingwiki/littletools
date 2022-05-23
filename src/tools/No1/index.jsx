import GenAppletLinks from './GenAppletLinks';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Layout } from 'antd'

const { Header, Content } = Layout
const Component = (props) => {
  const [isLogin, isLoginSet] = React.useState(false);
  const [isRegister, isRegisterSet] = React.useState(false);
  return <>
    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
    <Content className="content">
      {isLogin ? <GenAppletLinks /> : <div style={{ display: 'flex', fontSize: '30px' }}>
        请先<Link to='/login'>登录</Link>或者<Link to='/register'>注册</Link>
      </div>}
    </Content>
  </>
}
export default Component;