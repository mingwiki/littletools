import AV from 'leancloud-storage'
AV.init({
  appId: 'Co2HYYsX3YsrSM8hLn35yMVq-gzGzoHsz',
  appKey: 'vpslFNPbTpcTFj4XHIGHP9eH',
  serverURL: 'https://api.naizi.fun',
})
const avUser = new AV.User()
const avObj = new AV.Object('toolkits_01')
const avQuery = new AV.Query('toolkits_01')
const Auth = {
  register(username, password, realname) {
    avUser.setUsername(username)
    avUser.setPassword(password)
    avUser.set('realname', realname)
    return new Promise((resolve, reject) => {
      avUser.signUp().then(
        (res) => resolve(res),
        (error) => reject(error)
      )
    })
  },
  login(username, password) {
    return new Promise((resolve, reject) => {
      AV.User.logIn(username, password).then(
        (res) => resolve(res),
        (error) => reject(error)
      )
    })
  },
  logout() {
    AV.User.logOut()
  },
  getCurrentUser() {
    return AV.User.current()
  },
}
const Url = {
  upload({ name, url, enterId, orderFrom }) {
    return new Promise((resolve, reject) => {
      avObj.set('name', name)
      avObj.set('url', url)
      avObj.set('enterId', enterId)
      avObj.set('orderFrom', orderFrom)
      avObj.set('owner', AV.User.current())
      avObj.save().then(
        (res) => resolve(res),
        (error) => reject(error)
      )
    })
  },
  checkEnterId(enterId) {
    avQuery.equalTo('enterId', enterId)
    return new Promise((resolve, reject) => {
      avQuery.find().then(
        (result) => resolve(result),
        (error) => reject(error)
      )
    })
  },
  checkOrderFrom(orderFrom) {
    avQuery.equalTo('orderFrom', orderFrom)
    return new Promise((resolve, reject) => {
      avQuery.find().then(
        (result) => resolve(result),
        (error) => reject(error)
      )
    })
  },
}
export { Auth, Url }
