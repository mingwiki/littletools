import React from 'react'
import './index.css'
import 'antd/dist/antd.css'
import { appTitle } from './tools/data.js'
import Router from './router'

const App = () => {
  React.useEffect(() => {
    document.title = appTitle
  }, [])
  return <Router />
}

export default App
