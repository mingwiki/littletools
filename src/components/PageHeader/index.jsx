import { useEffect, useRef } from 'react'
import { PageHeader } from 'antd'
import { gsap } from 'gsap'

export default (props) => {
  const pageHeaderRef = useRef(null)
  useEffect(() => {
    const t = gsap.timeline()
    t.set(pageHeaderRef.current, {
      y: '-100%',
      opacity: 0,
    }).to(pageHeaderRef.current, {
      y: '0',
      opacity: 1,
    })
  }, [])
  return (
    <div ref={pageHeaderRef}>
      <PageHeader {...props} />
    </div>
  )
}
