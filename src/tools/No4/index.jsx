import React from 'react'
import { observer } from 'mobx-react'
import context from '../../stores'
import { NeedLogin } from '../index'
const GetPagePath = React.lazy(() => import('./GetPagePath'))
const Component = observer(() => {
  const { UserStore } = React.useContext(context)
  const { currentUser } = UserStore
  return <>{currentUser ? <GetPagePath /> : <NeedLogin />}</>
})
export default Component
