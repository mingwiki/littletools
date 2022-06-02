import React from 'react'
import { observer } from 'mobx-react'
import context from '../../stores'
import { NeedLogin } from '../index'
const UserCenter = React.lazy(() => import('./UserCenter'))
const Component = observer(() => {
  const { UserStore } = React.useContext(context)
  const { currentUser } = UserStore
  return (
    <>
      {currentUser ? (
        <UserCenter />
      ) : <NeedLogin />}
    </>
  )
})
export default Component
