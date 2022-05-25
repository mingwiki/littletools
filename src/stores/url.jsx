import { makeAutoObservable } from 'mobx'
import { Url } from '../models/index'
class UrlStore {
  appId = null
  pagePath = ''
  pageCheckQueries = {}
  pageInputQueries = [{ key: '', val: '' }]
  globalInputQueries = [{ key: '', val: '' }]
  linkName = ''
  pageCheckData = []
  constructor() {
    makeAutoObservable(this)
  }
  getPathUrl = () => {
    return this.pagePath
  }
  getPageCheckUrl = () => {
    return Object.keys(this.pageCheckQueries).length === 0
      ? ''
      : Object.entries(this.pageCheckQueries)
          .map((e) => (e[1].length !== 0 ? `${e[0]}=${e[1]}` : ''))
          .filter((e) => e !== '')
          .join('&')
  }
  getPageInputUrl = () => {
    return this.pageInputQueries.length === 1 &&
      this.pageInputQueries[0].key === '' &&
      this.pageInputQueries[0].val === ''
      ? ''
      : this.pageInputQueries
          .map((e) => (e.key !== '' && e.val !== '' ? `${e.key}=${e.val}` : ''))
          .filter((e) => e !== '')
          .join('&')
  }
  getGlobalInputUrl = () => {
    return this.globalInputQueries.length === 1 &&
      this.globalInputQueries[0].key === '' &&
      this.globalInputQueries[0].val === ''
      ? ''
      : this.globalInputQueries
          .map((e) => (e.key !== '' && e.val !== '' ? `${e.key}=${e.val}` : ''))
          .filter((e) => e !== '')
          .join('&')
  }
  getEncodePage = () => {
    return encodeURIComponent(
      this.getPathUrl() +
        (this.getPageCheckUrl() === '' &&
        this.getPageInputUrl() === '' &&
        this.getGlobalInputUrl() === ''
          ? ''
          : '?') +
        this.getPageCheckUrl() +
        (this.getPageCheckUrl() !== '' && this.getPageInputUrl() !== ''
          ? '&'
          : '') +
        this.getPageInputUrl()
    )
  }
  getEncodeGlobal = () => {
    return (
      (this.getGlobalInputUrl() !== '' ? '&query=' : '') +
      encodeURIComponent(this.getGlobalInputUrl())
    )
  }
  getEncodedUrl = () => {
    return this.pagePath === ''
      ? ''
      : `alipays://platformapi/startapp?appId=${
          this.appId
        }&page=${this.getEncodePage()}${this.getEncodeGlobal()}`
  }
  setAppId = (appId) => {
    this.appId = appId
  }
  setPagePath = (pagePath) => {
    this.pagePath = pagePath
  }
  setPageCheckQueries = (pageCheckQueries) => {
    this.pageCheckQueries = pageCheckQueries
  }
  setPageInputQueries = (pageInputQueries) => {
    this.pageInputQueries = pageInputQueries
  }
  setGlobalInputQueries = (globalInputQueries) => {
    this.globalInputQueries = globalInputQueries
  }
  setLinkName = (linkName) => {
    this.linkName = linkName.trim()
  }
  setPageCheckData = (pageCheckData) => {
    this.pageCheckData = pageCheckData
  }
  splitEnterId = (url) => {
    const temp = decodeURIComponent(url).split('?')
    const query = temp[temp.length - 1]
      .split('&query=')
      .flatMap((e) => e.split('&'))
      .map((e) => e.split('='))
    const res = []
    for (let [key, val] of query) {
      if (key === 'enter' || key === 'enterId') res.push(val)
    }
    return res
  }
  splitSourceOrigin = (url) => {
    const temp = decodeURIComponent(url).split('?')
    const query = temp[temp.length - 1]
      .split('&query=')
      .flatMap((e) => e.split('&'))
      .map((e) => e.split('='))
    const res = []
    for (let [key, val] of query) {
      if (key === 'sourceOrigin') res.push(val)
    }
    return res
  }
  splitAppId = (url) => {
    const temp = decodeURIComponent(url).split('?')
    const query = Object.fromEntries(
      temp[1].split('&').map((e) => e.split('='))
    )
    return query['appId']
  }
  splitPagePath = (url) => {
    const temp = decodeURIComponent(url).split('?')
    const query = Object.fromEntries(
      temp[1].split('&').map((e) => e.split('='))
    )
    return query['page']
  }
  checkEnterId = (url) => {
    return new Promise((resolve, reject) => {
      Url.checkEnterId(url).then(
        (res) => {
          resolve(res)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }
  checkSourceOrigin = (url) => {
    return new Promise((resolve, reject) => {
      Url.checkSourceOrigin(url).then(
        (res) => {
          resolve(res)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }
  uploadUrl = ({ name, url, enterId, sourceOrigin, appId, pagePath }) => {
    return new Promise((resolve, reject) => {
      Url.upload({ name, url, enterId, sourceOrigin, appId, pagePath }).then(
        (res) => {
          resolve(res)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }
  queryAll = () => {
    return new Promise((resolve, reject) => {
      Url.queryAll().then(
        (res) => {
          resolve(res)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }
  deleteUrl = (id) => {
    Url.delete(id)
  }
  uploadAll = (urls) => {
    return new Promise((resolve, reject) => {
      Url.uploadAll(urls).then(
        (res) => {
          resolve(res)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }
  clear = () => {
    this.appId = ''
    this.pagePath = ''
    this.pageCheckQueries = {}
    this.pageInputQueries = [{ key: '', val: '' }]
    this.globalInputQueries = [{ key: '', val: '' }]
    this.linkName = ''
    this.pageCheckData = []
  }
}

export default new UrlStore()
