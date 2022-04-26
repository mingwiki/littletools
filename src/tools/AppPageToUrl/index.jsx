import React, { useState } from 'react'
import { Select, Cascader, Segmented } from 'antd'
import { miniAppIds, miniAppPages } from './data.js'

const { Option } = Select
const appPageData = Object.entries(miniAppPages).map(e => {
  const app = {
    value: e[0],
    label: e[0],
    children: Object.keys(e[1]).map(e => {
      const page = {
        value: e,
        label: e
      }
      return page
    })
  }
  return app
})
const Component = () => {
  const [text, setText] = useState('小程序名称和对应页面')
  const [appId, setAppId] = useState(null)
  const [pagePath, setPagePath] = useState(null)
  const [segOption, setSegOption] = useState('选择')
  const onChangeProtocol = (value) => {
    console.log(`selected ${value}`)
  }
  const onChangeAppPage = (value) => {
    setText(value.join(', '))
    setAppId(miniAppIds[value[0]])
    setPagePath(miniAppPages[value[0]][value[1]])
  }
  const url = pagePath === null ? null : `alipays://platformapi/startapp?appId=${appId}&page=${pagePath}` + '?'
  return (
    <>
      <Select defaultValue="alipay" style={{ width: 120 }} onChange={onChangeProtocol}>
        <Option value="alipay">Alipay 协议</Option>
      </Select>
      <div>
        {text}
        &nbsp;
        <Cascader options={appPageData} onChange={onChangeAppPage}>
          <a href="#">点击选择</a>
        </Cascader>
      </div>

      {!url
        ? null
        : <>
          <div>
            <Segmented options={['选择', '输入']} value={segOption} onChange={setSegOption} />
          </div>
          <div>{url}</div>
        </>
      }
    </>
  )
}

export default Component
