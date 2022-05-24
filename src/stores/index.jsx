import { createContext } from 'react'
import AuthStore from './auth'
import UserStore from './user'
import UrlStore from './url'
import DrawerStore from './drawer'
const context = createContext({
  AuthStore,
  UserStore,
  UrlStore,
  DrawerStore,
})
window.context = {
  AuthStore,
  UserStore,
  UrlStore,
  DrawerStore,
}
export default context
