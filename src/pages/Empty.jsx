import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import context from '../stores'
import Container from '../components/Container'
const Component = () => {
  const { HeaderStore } = useContext(context)
  const { setHeaders } = HeaderStore
  useEffect(() => {
    setHeaders({
      ghost: false,
      onBack: () => window?.history.back(),
      title: '',
      subTitle: '',
      extra: [],
    })
  }, [])
  return (
    <Container>
      <h1>404，此页面不存在，请检查网址是否正确。</h1>
      <Link to='/'>点击返回首页</Link>
    </Container>
  )
}

export default Component
