import React from 'react'
import 'antd/dist/antd.min.css'
import Router from './router'
import context from './stores'

const App = () => {
  const { UserStore } = React.useContext(context)
  const { getCurrentUser } = UserStore
  React.useEffect(() => {
    getCurrentUser()
  }, [UserStore, getCurrentUser])
  return <Router />
}

export default App
