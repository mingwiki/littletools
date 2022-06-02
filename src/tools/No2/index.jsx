import React from 'react'
import { observer } from 'mobx-react'
import context from '../../stores'
import { NeedLogin } from '../index'
const UploadAllLinks = React.lazy(() => import('./UploadAllLinks'))
const Component = observer(() => {
  const { UserStore } = React.useContext(context)
  const { currentUser } = UserStore
  return <>{currentUser ? <UploadAllLinks /> : <NeedLogin />}</>
})
export default Component
