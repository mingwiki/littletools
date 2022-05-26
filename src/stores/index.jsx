import { createContext } from 'react'
import AuthStore from './auth'
import UserStore from './user'
import UrlStore from './url'
import UserCenterStore from './userCenter'
const context = createContext({
  AuthStore,
  UserStore,
  UrlStore,
  UserCenterStore,
})
// window.context = {
//   AuthStore,
//   UserStore,
//   UrlStore,
//   UserCenterStore,
// }
export default context
