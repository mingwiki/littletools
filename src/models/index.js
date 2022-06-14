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
  upload({ name, url }) {
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
            enterId: splitEnterId(url),
            sourceOrigin: splitSourceOrigin(url),
            appId: splitAppId(url),
            pagePath: splitPagePath(url),
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
  uploadAllbyArr(urls) {
    const data = urls.map((url) => {
      return {
        linkName: url.key,
        url: url.val,
        enterId: splitEnterId(url.val),
        sourceOrigin: splitSourceOrigin(url.val),
        appId: splitAppId(url.val),
        pagePath: splitPagePath(url.val),
      }
    })
    return new Promise((resolve, reject) => {
      fetch(`${API}/links/upload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data,
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
