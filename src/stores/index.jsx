import { createContext } from 'react'
import AuthStore from './auth'
import UserStore from './user'
import UrlStore from './url'
import QueyLinksStore from './queyLinks'
import HeaderStore from './header'
const context = createContext({
  AuthStore,
  UserStore,
  UrlStore,
  QueyLinksStore,
  HeaderStore,
})
// window.context = {
//   AuthStore,
//   UserStore,
//   UrlStore,
//   QueyLinksStore,
//   HeaderStore,
// }
export default context
