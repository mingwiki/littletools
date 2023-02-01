import React, { useEffect, useContext, useState } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import context from '../stores'
import { Button } from 'antd'
import { useNavigate, Link } from 'react-router-dom'
const Welcome = styled.div`
  font-size: 50px;
`
const Component = observer(() => {
  const { AuthStore, UserStore } = useContext(context)
  const { currentUser } = UserStore
  const { logout, getAllUsers } = AuthStore
  const [users, setUsers] = useState([])

  let navigate = useNavigate()
  const handleGetAllUsers = () => {
    getAllUsers().then((res) => setUsers(res))
  }
  const pad = (v) => {
    return v < 10 ? '0' + v : v
  }
  const getDateString = (date) => {
    const d = new Date(date)
    const year = d.getFullYear()
    const month = pad(d.getMonth() + 1)
    const day = pad(d.getDate())
    const hour = pad(d.getHours())
    const min = pad(d.getMinutes())
    const sec = pad(d.getSeconds())
    return `${year.toString().slice(-2)}/${month}/${day} ${hour}:${min}:${sec}`
  }
  useEffect(() => {
    document.title = appTitle
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
      <h1>若以下数据异常或无法正常显示请联系我重启服务</h1>
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
                    {user.create_time ? getDateString(user.create_time) : null}
                  </td>
                  <td>
                    {user.update_time ? getDateString(user.update_time) : null}
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

export const appTitle = 'op小工具'
