import React from 'react'
import './index.css'
import 'antd/dist/antd.min.css'
import Router from './router'
import context from './stores'

const App = () => {
  const { UserStore } = React.useContext(context)
  const { getCurrentUser } = UserStore
  React.useEffect(() => {
    getCurrentUser()
  }, [UserStore])
  return <Router />
}

export default App
