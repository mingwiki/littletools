/** @format */

import { makeAutoObservable } from 'mobx'
import { Config } from '../models/index'

class ConfigStore {
  config = []
  appletsDB = []
  constructor() {
    makeAutoObservable(this)
  }
  getConfig = () => {
    Config.queryAll().then((res) => {
      this.config = res
    })
  }
  getConfigGroupBy = (arg) => {
    const groupBy = (items, key) =>
      items.reduce(
        (result, item) => ({
          ...result,
          [item[key]]: [...(result[item[key]] || []), item],
        }),
        {}
      )
    return groupBy(this.config, arg) || {}
  }
  cascaderData = () => {
    const miniAppPages = Object.fromEntries(
      Object.entries(this.getConfigGroupBy('appName')).map((i) => {
        i[1] = Object.fromEntries(
          i[1].map((i) => {
            const { pageName, pagePath } = i
            return [pageName, pagePath]
          })
        )
        return i
      })
    )
    return Object.entries(miniAppPages).map((e) => {
      const app = {
        value: e[0],
        label: e[0],
        children: Object.keys(e[1]).map((e) => {
          return {
            value: e,
            label: e,
          }
        }),
      }
      return app
    })
  }
  getApplets = () => {
    Config.queryApplets().then((res) => {
      this.appletsDB = res
    })
  }
  applets = ([appName, pageName]) => {
    const temp = Object.fromEntries(
      Object.entries(this.getConfigGroupBy('appName')).map((i) => {
        i[1] = Object.fromEntries(
          i[1].map((i) => {
            const { pageName, appId, pagePath } = i
            return [pageName, [appId, pagePath]]
          })
        )
        return i
      })
    )
    return temp[appName][pageName]
  }
  appletPresets = ([appName, pageName], check = true) => {
    const temp = Object.fromEntries(
      Object.entries(this.getConfigGroupBy('appName')).map((i) => {
        i[1] = Object.fromEntries(
          i[1].map((i) => {
            const { pageName, presets } = i
            const filterPresets = Object.fromEntries(
              Object.entries(JSON.parse(presets)).filter((i) =>
                check ? i[1] : !i[1]
              )
            )
            return [pageName, filterPresets]
          })
        )
        return i
      })
    )
    return check
      ? temp[appName][pageName]
      : Object.entries(temp[appName][pageName]).map((i) => ({
          key: i[0],
          val: i[1],
        }))
  }
}

export default new ConfigStore()
