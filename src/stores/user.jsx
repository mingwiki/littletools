import { makeAutoObservable } from 'mobx'
import { Auth } from '../models/index'

class UserStore {
  currentUser = null
  constructor() {
    makeAutoObservable(this)
  }
  getCurrentUser = async () => {
    this.currentUser = await Auth.getCurrentUser()
  }
  resetCurrentUser = () => {
    this.currentUser = null
  }
}

export default new UserStore()
