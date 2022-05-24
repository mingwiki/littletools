import React from 'react'
import './index.css'
import 'antd/dist/antd.min.css'
import Router from './router'
import context from './stores'

const App = () => {
  const { UserStore } = React.useContext(context)
  React.useEffect(() => {
    UserStore.getCurrentUser()
  }, [])
  return <Router />
}

export default App
