import React, { useEffect, useRef } from 'react'
import { Layout } from 'antd'
import { gsap } from 'gsap'

const { Content } = Layout

export default ({ children }) => {
  const contentRef = useRef(null)
  useEffect(() => {
    const t = gsap.timeline()
    t.set(contentRef.current, {
      x: '100%',
      opacity: 0,
      ease: 'ease-in-out',
      duration: 1,
    }).to(contentRef.current, {
      x: '0',
      opacity: 1,
      ease: 'ease-in-out',
      duration: 1,
    })
  }, [])
  return (
    <Content
      ref={contentRef}
      style={{
        margin: '16px',
        padding: '24px',
        border: '2px dashed',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        overflow: 'auto',
      }}>
      {children}
    </Content>
  )
}
