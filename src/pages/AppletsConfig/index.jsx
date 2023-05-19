import React, { useState, useEffect, useContext } from 'react'
import { observer } from 'mobx-react'
import { Button, Input, notification, Radio, Space } from 'antd'
import context from '../../stores'
import { toJS } from 'mobx'
const Component = observer(() => {
  const [radioValue, setRadioValue] = useState('')
  const [currentInputs, setCurrentInputs] = useState([])
  const [isInit, setIsInit] = useState(false)
  const { UrlStore, ConfigStore } = useContext(context)
  const {
    linkConfig,
    getLinkConfig,
    getConfigGroupBy,
    updateLinkConfig,
    updateConfig,
  } = ConfigStore
  const currentPageConfig =
    getConfigGroupBy('appName')[radioValue] ||
    getConfigGroupBy('appName')[Object.keys(getConfigGroupBy('appName'))[0]]
  useEffect(() => {
    document.title = '配置小程序链接'
    getLinkConfig().then(() => setIsInit((pre) => !pre))
  }, [])
  useEffect(() => {
    if (currentPageConfig?.length > 0) setCurrentInputs(currentPageConfig)
  }, [radioValue, isInit])
  return (
    <>
      <div style={{ border: '1px dashed gray', padding: '5px 10px' }}>
        <Radio.Group
          value={radioValue || Object.keys(getConfigGroupBy('appName'))[0]}
          onChange={(e) => setRadioValue(e.target.value)}>
          {Object.keys(getConfigGroupBy('appName')).map((item, idx) => (
            <Radio key={idx} value={item}>
              {item}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      {currentInputs?.map(
        (item, idx) =>
          !item.hide && (
            <div key={idx} style={{ display: 'flex', gap: '20px' }}>
              <div style={{ width: '60vw', display: 'flex', gap: '20px' }}>
                <Input
                  size='28'
                  value={item.pageName}
                  onChange={(e) => {
                    setCurrentInputs((pre) => {
                      const temp = [...pre]
                      temp[idx].pageName = e.target.value
                      return temp
                    })
                  }}
                />
                <Input
                  size='28'
                  value={item.pagePath}
                  onChange={(e) => {
                    setCurrentInputs((pre) => {
                      const temp = [...pre]
                      temp[idx].pagePath = e.target.value
                      return temp
                    })
                  }}
                />
              </div>
              {currentInputs?.length > 1 && (
                <Button
                  type='primary'
                  onClick={() => {
                    setCurrentInputs((pre) => {
                      const temp = [...pre]
                      temp[idx].hide = true
                      return temp
                    })
                  }}>
                  -
                </Button>
              )}
              {idx === currentInputs.length - 1 ? (
                <Button
                  type='primary'
                  onClick={() => {
                    setCurrentInputs((pre) => {
                      const temp = { ...pre[0] }
                      temp.id = null
                      temp.pageName = ''
                      temp.pagePath = ''
                      temp.presets = '{}'
                      temp.hide = null
                      return [...pre, temp]
                    })
                  }}>
                  +
                </Button>
              ) : null}
            </div>
          )
      )}
      <Button
        type='primary'
        onClick={() => {
          currentInputs.map((i) => updateLinkConfig(i.id, i))
          updateConfig(currentInputs).then((res) => {
            if (res?.length === 0) {
              notification.success({ description: '上传成功' })
            } else {
              notification.error({ description: JSON.stringify(res) })
            }
          })
        }}>
        保存修改
      </Button>
    </>
  )
})

export default Component
