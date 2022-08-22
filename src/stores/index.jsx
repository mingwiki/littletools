import { createContext } from 'react'
import AuthStore from './auth'
import UserStore from './user'
import UrlStore from './url'
import QueyLinksStore from './queyLinks'
import HeaderStore from './header'
import QrcodeStore from './qrcode'
const context = createContext({
  AuthStore,
  UserStore,
  UrlStore,
  QueyLinksStore,
  HeaderStore,
  QrcodeStore,
})
// window.context = {
//   AuthStore,
//   UserStore,
//   UrlStore,
//   QueyLinksStore,
//   HeaderStore,
// }
export default context
