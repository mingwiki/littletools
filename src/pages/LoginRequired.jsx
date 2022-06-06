import React from 'react'
import { Link } from 'react-router-dom'
const Login = styled.div`
  display: flex;
  font-size: 30px;
`
export default LoginRequired = () => {
  return (
    <>
      <Login>
        请先<Link to='/login'>登录</Link>或者
        <Link to='/register'>注册</Link>
      </Login>
    </>
  )
}
