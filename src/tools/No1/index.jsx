import React from 'react'
import { observer } from 'mobx-react'
import context from '../../stores'
import { NeedLogin } from '../index'

const GenAppletLinks = React.lazy(() => import('./GenAppletLinks'))
const Component = observer(() => {
  const { UserStore } = React.useContext(context)
  const { currentUser } = UserStore
  return <>{currentUser ? <GenAppletLinks /> : <NeedLogin />}</>
})
export default Component
