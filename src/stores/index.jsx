import { createContext } from 'react'
import AuthStore from './auth'
import UserStore from './user'
import UrlStore from './url'
import QueyLinksStore from './queyLinks'
import QrcodeStore from './qrcode'
const context = createContext({
  AuthStore,
  UserStore,
  UrlStore,
  QueyLinksStore,
  QrcodeStore,
})
export default context
