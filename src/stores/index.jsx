import { createContext } from 'react'
import AuthStore from './auth'
import UserStore from './user'
import UrlStore from './url'
const context = createContext({
  AuthStore,
  UserStore,
  UrlStore,
})
window.context = {
  AuthStore,
  UserStore,
  UrlStore,
}
export default context
