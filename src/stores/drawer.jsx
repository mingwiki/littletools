import { makeAutoObservable } from 'mobx'

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
  clear= () => {
    this.visible = false
    this.isSyncing = false
    this.localUrls = []
  }
}

export default new DrawerStore()
