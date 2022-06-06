import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styled from 'styled-components'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
`
const Component = ({ children }) => {
  const ref = useRef()
  useEffect(() => {
    const t = gsap.timeline()
    t.set(ref.current, {
      y: '100%',
      opacity: 0,
    }).to(ref.current, {
      y: '0',
      opacity: 1,
    })
  }, [])
  return <Container ref={ref}>{children}</Container>
}

export default Component
