import React, { useState } from 'react'
import { Cascader, message, Button, Space, Popover, Radio, Checkbox } from 'antd'
import { AlipayCircleOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { miniAppIds, miniAppPages, miniAppPageExtra } from './data.js'
import styled from 'styled-components'
import QRCode from 'qrcode.react'

const StyledInputWrapper = styled.div`
  display: flex;
  gap: 10px;
`
const StyledUrlWrapper = styled.p`
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  padding: 10px;
  box-shadow: 0px 0px 5px 2px #5D7EA3;
`
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
let appCheckData = []
const Component = () => {
  const [text, setText] = useState('小程序名称和对应页面')
  const [appId, setAppId] = useState('')
  const [pagePath, setPagePath] = useState('')
  const [checkQueries, setCheckQueries] = useState({})
  const [inputQueries, setInputQueries] = useState([{ key: '', val: '' }])
  const [isShowPopover, setIsShowPopover] = useState(false)
  const onChangeAppPage = (value) => {
    setText(<>{value[0]} <DoubleRightOutlined /> {value[1]}</>)
    setAppId(miniAppIds[value[0]])
    setPagePath(miniAppPages[value[0]][value[1]])
    if (miniAppPageExtra[miniAppIds[value[0]]][miniAppPages[value[0]][value[1]]]) {
      appCheckData = Object.entries(miniAppPageExtra[miniAppIds[value[0]]][miniAppPages[value[0]][value[1]]]).map((e) => {
        if (typeof e[1] === 'boolean') {
          e[1] = e[1].toString()
        }
        if (!Array.isArray(e[1])) {
          e[1] = [e[1]]
        }
        return e
      })
    }
  }
  const addInputBox = () => {
    const temp = [...inputQueries]
    temp.push({ key: '', val: '' })
    setInputQueries(temp)
  }
  const delInputBox = (idx) => {
    const temp = [...inputQueries]
    temp.splice(idx, 1)
    setInputQueries(temp)
  }
  const pathUrl = `pages/${pagePath}`
  const checkUrl = Object.keys(checkQueries).length === 0 ? '' : Object.entries(checkQueries).map((e) => e[1].length !== 0 ? `${e[0]}=${e[1]}` : '').filter(e => e !== '').join('&')
  const inputUrl = inputQueries.length === 1 && inputQueries[0].key === '' && inputQueries[0].val === '' ? '' : inputQueries.map(e => e.key !== '' && e.val !== '' ? `${e.key}=${e.val}` : '').filter(e => e !== '').join('&')
  const url = pathUrl + (checkUrl === '' && inputUrl === '' ? '' : '?') + checkUrl + (checkUrl !== '' && inputUrl !== '' ? '&' : '') + inputUrl
  const encodedUrl = pagePath === '' ? '' : `alipays://platformapi/startapp?appId=${appId}&page=${encodeURIComponent(url)}`
  return (
    <>
      <Radio.Group value={'alipay'} size='large'>
        <Radio value={'alipay'}><AlipayCircleOutlined /> Alipay 协议</Radio>
      </Radio.Group>
      <div>
        <Cascader options={appPageData} onChange={onChangeAppPage} size='large' notFoundContent='无数据'>
          <a href="#">点击选择</a>
        </Cascader>
        &nbsp;
        {text}
      </div>
      {!encodedUrl
        ? null
        : <>
          {appCheckData.length === 0
            ? null
            : appCheckData.map((val, idx) => {
              return <div key={idx}>
                {val[0]}: <Checkbox.Group options={val[1]} value={checkQueries[val[0]]} onChange={(e) => {
                  const temp = { ...checkQueries }
                  e.length < 2 ? temp[val[0]] = e : temp[val[0]] = e.filter(x => !temp[val[0]].includes(x))
                  setCheckQueries(temp)
                }} />
              </div>
            })}
          {inputQueries.map(({ key, val }, idx) => {
            return <StyledInputWrapper key={idx}>
              <input placeholder="输入key" value={key} onChange={(e) => {
                const temp = [...inputQueries]
                temp[idx].key = e.target.value
                setInputQueries(temp)
              }} />
              <input placeholder="输入value" value={val} onChange={(e) => {
                const temp = [...inputQueries]
                temp[idx].val = e.target.value
                setInputQueries(temp)
              }} />
              {inputQueries.length === 1
                ? null
                : <Button type="primary" onClick={() => delInputBox(idx)}>-</Button>}
              {idx === inputQueries.length - 1
                ? <Button type="primary" onClick={() => addInputBox()}>+</Button>
                : null}
            </StyledInputWrapper>
          })}
          <StyledUrlWrapper>{encodedUrl}</StyledUrlWrapper>
          <Space>
            <Button type="primary" onClick={() => {
              navigator.clipboard.writeText(encodedUrl)
              message.success('链接已复制到剪切板')
            }}>点击复制链接</Button>
            <Popover
              content={<QRCode value={encodedUrl} size={200} />}
              title="请扫描二维码"
              trigger="click"
              visible={isShowPopover}
              onVisibleChange={() => setIsShowPopover(!isShowPopover)}
            >
              <Button type="primary">点击生成二维码</Button>
            </Popover>
          </Space>
        </>
      }
    </>
  )
}

export default Component
