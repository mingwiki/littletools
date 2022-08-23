import React, { useEffect, useContext, useState } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import context from '../stores'
import acct from '../20220614152412.png'
import { Button } from 'antd'
import { useNavigate, Link } from 'react-router-dom'
const Welcome = styled.div`
  font-size: 50px;
`
const Component = observer(() => {
  const { AuthStore, UserStore, HeaderStore } = useContext(context)
  const { currentUser } = UserStore
  const { setHeaders } = HeaderStore
  const { logout, getAllUsers } = AuthStore
  const [users, setUsers] = useState([])

  let navigate = useNavigate()
  const handleGetAllUsers = () => {
    getAllUsers().then((res) => setUsers(res))
  }
  useEffect(() => {
    document.title = appTitle
    setHeaders({
      ghost: false,
      onBack: () => window?.history.back(),
      title: '',
      subTitle: '',
      extra: currentUser
        ? [
            <Button key={2} onClick={() => navigate('/changePassword')}>
              修改密码
            </Button>,
            <Button key={3} type='primary' danger onClick={() => logout()}>
              注销
            </Button>,
          ]
        : [
            <Button key={1} type='primary' onClick={() => navigate('/login')}>
              登录
            </Button>,
            <Button
              key={2}
              type='primary'
              onClick={() => navigate('/register')}>
              注册
            </Button>,
          ],
    })
  }, [currentUser])
  useEffect(() => {
    handleGetAllUsers()
  }, [])
  return (
    <>
      <Welcome>欢迎使用，{`《${appTitle}》`}</Welcome>
      <Welcome>
        当前用户：{currentUser ? currentUser.nickname : '未登录'}
      </Welcome>
      {window.location.hostname !== '172.16.57.114' ? (
        <>
          <h1>
            原有服务器挂了，现已改用公司测试服务器。请使用下方的局域网链接，在公司内部访问。
          </h1>
          <h1>
            http://172.16.57.114:3001/
            <a href='http://172.16.57.114:3001/'>点击跳转</a>
          </h1>
        </>
      ) : null}
      <div style={{ textAlign: 'center' }}>
        <table border={1} cellPadding={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>用户名</th>
              <th>昵称</th>
              <th>注册时间</th>
              <th>上次登录时间</th>
              <th>状态</th>
            </tr>
          </thead>
          {users?.length > 0 && (
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.nickname}</td>
                  <td>
                    {user.create_time
                      ? new Date(user.create_time).toLocaleString()
                      : null}
                  </td>
                  <td>
                    {user.update_time
                      ? new Date(user.update_time).toLocaleString()
                      : null}
                  </td>
                  <td>{user.disabled === 1 ? '已禁用' : '正常'}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  )
})
export default Component

export const appTitle = '小小工具箱'
