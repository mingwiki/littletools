import GenAppletLinks from './GenAppletLinks'
import React from 'react'
import context from '../../stores'
import { observer } from 'mobx-react'
import { NeedLogin } from '../index'
const Component = observer(() => {
  const { UserStore } = React.useContext(context)
  const { currentUser } = UserStore
  return (
    <>
      {currentUser ? (
        <GenAppletLinks />
      ) : <NeedLogin />}
    </>
  )
})
export default Component
