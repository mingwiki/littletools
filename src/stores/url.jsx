import { makeAutoObservable } from 'mobx'

class UrlStore {
  appId = null
  pagePath = ''
  pageCheckQueries = {}
  pageInputQueries = [{ key: '', val: '' }]
  globalInputQueries = [{ key: '', val: '' }]
  linkName = ''
  url = ''
  enterId = ''
  orderFrom = ''
  pageCheckData = []
  constructor() {
    makeAutoObservable(this)
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
  getUrl = () => {
    return this.urlf
  }
  getEnterId = () => {
    return this.enterId
  }
  getOrderFrom = () => {
    return this.orderFrom
  }
  clear = () => {
    this.appId = ''
    this.pagePath = ''
    this.pageCheckQueries = {}
    this.pageInputQueries = [{ key: '', val: '' }]
    this.globalInputQueries = [{ key: '', val: '' }]
    this.name = ''
    this.url = ''
    this.enterId = ''
    this.orderFrom = ''
    this.pageCheckData = []
  }
}

export default new UrlStore()
