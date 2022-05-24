import { makeAutoObservable } from 'mobx'
import { Url } from '../models/index'

class DrawerStore {
  constructor() {
    makeAutoObservable(this)
  }
  visible = false
  isSyncing = false
  localUrls = []
  setVisible = (visible) => {
    this.visible = visible
  }
  setIsSyncing = (isSyncing) => {
    this.isSyncing = isSyncing
  }
  setLocalUrls = (localUrls) => {
    const temp = [...localUrls] || []
    this.localUrls = temp
  }
  checkEnterId = (enterId, appId, pagePath) => {
    return new Promise((resolve, reject) => {
      Url.checkEnterId(enterId, appId, pagePath).then(
        (res) => {
          resolve(res)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }
  checkSourceOrigin = (sourceOrigin, appId, pagePath) => {
    return new Promise((resolve, reject) => {
      Url.checkSourceOrigin(sourceOrigin, appId, pagePath).then(
        (res) => {
          resolve(res)
        },
        (error) => {
          reject(error)
        }
      )
    })
  }
  uploadUrl = ({ name, url, enterId, sourceOrigin }) => {
    return new Promise((resolve, reject) => {
      Url.upload({ name, url, enterId, sourceOrigin }).then(
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
}

export default new DrawerStore()
