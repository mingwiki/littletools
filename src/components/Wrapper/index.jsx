import React, { useEffect, useRef } from 'react'
import { Layout } from 'antd'
import { gsap } from 'gsap'
import styled from 'styled-components'

const { Content } = Layout
const StyledContent = styled(Content)`
  margin: 16px;
  padding: 24px;
  border: 2px dashed;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
`
export default ({ children }) => {
  const contentRef = useRef(null)
  useEffect(() => {
    const t = gsap.timeline()
    t.set(contentRef.current, {
      x: '-100%',
      opacity: 0,
    }).to(contentRef.current, {
      x: '0',
      opacity: 1,
    })
  }, [])
  return <StyledContent ref={contentRef}>{children}</StyledContent>
}
