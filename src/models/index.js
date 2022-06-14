import UrlStore from '../stores/url'
const { splitEnterId, splitSourceOrigin, splitAppId, splitPagePath } = UrlStore
const API = window.location.origin + '/api'
const Auth = {
  register(username, password, realname) {
    return new Promise((resolve, reject) => {
      fetch(`${API}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filter: {
            username,
            password,
            nickname: realname,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          resolve(data)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  login(username, password) {
    return new Promise((resolve, reject) => {
      fetch(`${API}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filter: {
            username,
            password,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          resolve(data)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  logout() {
    fetch(`${API}/users/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => res[0])
  },
  getCurrentUser() {
    return fetch(`${API}/users/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => res[0])
  },
}
const Url = {
  upload({ name, url, enterId, sourceOrigin, appId, pagePath }) {
    return new Promise((resolve, reject) => {
      fetch(`${API}/links/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            linkName: name,
            url,
            enterId,
            sourceOrigin,
            appId,
            pagePath,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          resolve(data)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
    // const avObj = new AV.Object('toolkits_01')
    // return new Promise((resolve, reject) => {
    //   avObj.set('show', true)
    //   avObj.set('name', name)
    //   avObj.set('url', url)
    //   avObj.set('enterId', enterId)
    //   avObj.set('sourceOrigin', sourceOrigin)
    //   avObj.set('appId', appId)
    //   avObj.set('pagePath', pagePath)
    //   avObj.set('owner', AV.User.current())
    //   avObj.set('user', AV.User.current()?.attributes?.realname)
    //   avObj.save().then(
    //     (res) => resolve(res),
    //     (error) => reject(error)
    //   )
    // })
  },
  uploadAll(urls) {
    // return new Promise((resolve, reject) => {
    //   const objects = []
    //   Object.entries(urls).forEach(([key, value]) => {
    //     const avObj = new AV.Object('toolkits_01')
    //     avObj.set('show', true)
    //     avObj.set('name', key)
    //     avObj.set('url', value)
    //     avObj.set('enterId', splitEnterId(value))
    //     avObj.set('sourceOrigin', splitSourceOrigin(value))
    //     avObj.set('appId', splitAppId(value))
    //     avObj.set('pagePath', splitPagePath(value))
    //     avObj.set('owner', AV.User.current())
    //     avObj.set('user', AV.User.current()?.attributes?.realname)
    //     objects.push(avObj)
    //   })
    //   AV.Object.saveAll(objects).then(
    //     (res) => resolve(res),
    //     (error) => reject(error)
    //   )
    // })
  },
  uploadAllbyArr(urls) {
    // return new Promise((resolve, reject) => {
    //   const objects = []
    //   urls.forEach((value) => {
    //     const avObj = new AV.Object('toolkits_01')
    //     avObj.set('show', true)
    //     avObj.set('name', value.key)
    //     avObj.set('url', value.val)
    //     avObj.set('enterId', splitEnterId(value.val))
    //     avObj.set('sourceOrigin', splitSourceOrigin(value.val))
    //     avObj.set('appId', splitAppId(value.val))
    //     avObj.set('pagePath', splitPagePath(value.val))
    //     avObj.set('owner', AV.User.current())
    //     avObj.set('user', AV.User.current()?.attributes?.realname)
    //     objects.push(avObj)
    //   })
    //   AV.Object.saveAll(objects).then(
    //     (res) => resolve(res),
    //     (error) => reject(error)
    //   )
    // })
  },
  checkEnterId(url) {
    // const avQuery = new AV.Query('toolkits_01')
    // avQuery.equalTo('appId', splitAppId(url))
    // avQuery.equalTo('pagePath', splitPagePath(url))
    // avQuery.equalTo('show', true)
    // avQuery.containedIn('enterId', splitEnterId(url))
    // return new Promise((resolve, reject) => {
    //   avQuery.find().then(
    //     (result) => resolve(result),
    //     (error) => reject(error)
    //   )
    // })
  },
  checkSourceOrigin(url) {
    // const avQuery = new AV.Query('toolkits_01')
    // avQuery.equalTo('appId', splitAppId(url))
    // avQuery.equalTo('pagePath', splitPagePath(url))
    // avQuery.equalTo('show', true)
    // avQuery.containedIn('sourceOrigin', splitSourceOrigin(url))
    // return new Promise((resolve, reject) => {
    //   avQuery.find().then(
    //     (result) => resolve(result),
    //     (error) => reject(error)
    //   )
    // })
  },
  queryAll(appId, pagePath, bool) {
    return new Promise((resolve, reject) => {
      fetch(`${API}/links/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filter: {
            isShow: 1,
            [appId ? 'appId' : null]: appId,
            [pagePath ? 'pagePath' : null]: pagePath,
          },
          data: {
            orderBy: 'create_time DESC',
          },
          type: bool,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          resolve(data)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
  delete(id) {
    return new Promise((resolve, reject) => {
      fetch(`${API}/links/delete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filter: {
            id: id,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          resolve(data)
        })
        .catch((error) => {
          console.log(error)
          reject(error)
        })
    })
  },
}
export { Auth, Url }
