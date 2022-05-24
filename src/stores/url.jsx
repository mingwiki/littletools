import { makeAutoObservable } from 'mobx'

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
    return `pages/${this.pagePath}`
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
  getEnterId = () => {
    return (
      this.pageInputQueries.find(
        (e) => e.key === 'enterId' || e.key === 'enter'
      )?.val ||
      this.globalInputQueries.find(
        (e) => e.key === 'enterId' || e.key === 'enter'
      )?.val
    )
  }
  getSourceOrigin = () => {
    return (
      this.pageInputQueries.find((e) => e.key === 'sourceOrigin')?.val ||
      this.globalInputQueries.find((e) => e.key === 'sourceOrigin')?.val
    )
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
    this.linkName = linkName
  }
  setPageCheckData = (pageCheckData) => {
    this.pageCheckData = pageCheckData
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
