import { makeAutoObservable } from 'mobx'

class DrawerStore {
  constructor() {
    makeAutoObservable(this)
  }
  visible = false
  isSyncing = false
  setVisible = (visible) => {
    this.visible = visible
  }
  setIsSyncing = (isSyncing) => {
    this.isSyncing = isSyncing
  }
}

export default new DrawerStore()
