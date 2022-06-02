import React, { useState, useEffect, useRef, useContext } from 'react'
import { Layout, Menu } from 'antd'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { sidebar } from '../../router.config'
import gsap from 'gsap'
import keqing from '../../keqing.png'
import favicon from '../../favicon.svg'
import context from '../../stores'
const { Sider } = Layout
export default observer(() => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const toggle = () => setIsCollapsed(!isCollapsed)
  const logoRef = useRef(null)
  const sidebarRef = useRef(null)
  const { UserStore } = useContext(context)
  const { currentUser } = UserStore
  useEffect(() => {
    const t = gsap.timeline()
    t.set(sidebarRef.current, {
      x: '-100%',
      ease: 'ease-in-out',
      duration: 1,
    })
      .to(sidebarRef.current, {
        x: '0',
        opacity: 1,
        ease: 'ease-in-out',
        duration: 1,
      })
      .to(logoRef.current, {
        x: '50',
        ease: 'ease-in-out',
        duration: 1,
        opacity: 0.5,
      })
      .to(logoRef.current, {
        x: '-50',
        ease: 'ease-in-out',
        duration: 1,
        opacity: 0,
      })
      .to(logoRef.current, {
        x: '0',
        ease: 'ease-in-out',
        duration: 1,
        opacity: 1,
      })
      .to(logoRef.current, { rotationY: '-360', duration: 1 })
  }, [currentUser])
  return (
    <Sider
      collapsible
      collapsed={isCollapsed}
      onCollapse={toggle}
      ref={sidebarRef}
      style={{ backgroundColor: '#343a40' }}>
      <div className='logo' style={{ textAlign: 'center' }}>
        <Link to='/'>
          <img
            src={currentUser ? keqing : favicon}
            className='App-logo'
            alt='logo'
            ref={logoRef}
          />
        </Link>
      </div>
      <Menu
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '6px',
          boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.8)',
          border: 'none',
          outline: 'none',
        }}
        mode='inline'
        items={sidebar}
      />
    </Sider>
  )
})
