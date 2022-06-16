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
  changePassword(password) {
    return new Promise((resolve, reject) => {
      fetch(`${API}/users/changePassword`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filter: {
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
  },
  checkEnterId(url) {
    return new Promise((resolve, reject) => {
      fetch(`${API}/links/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filter: {
            appId: splitAppId(url),
            pagePath: splitPagePath(url),
            enterId: splitEnterId(url),
          },
          data: {
            orderBy: 'create_time DESC',
          },
          type: true,
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
  checkSourceOrigin(url) {
    return new Promise((resolve, reject) => {
      fetch(`${API}/links/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filter: {
            appId: splitAppId(url),
            pagePath: splitPagePath(url),
            sourceOrigin: splitSourceOrigin(url),
          },
          data: {
            orderBy: 'create_time DESC',
          },
          type: true,
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
  queryAll(appId, pagePath, bool) {
    return new Promise((resolve, reject) => {
      fetch(`${API}/links/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filter: {
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
