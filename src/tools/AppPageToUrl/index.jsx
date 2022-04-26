/*eslint-disable*/
import React, { useState, useCallback } from 'react'
import { Select, Cascader, Segmented, message, Button, Space, Popover } from 'antd'
import { miniAppIds, miniAppPages } from './data.js'
import styled from 'styled-components'
import QRCode from 'qrcode.react';

const { Option } = Select
const StyledSelect = styled(Select)`
  width: 120px;
`
const StyledButton = styled(Button)`
  margin-right: 20px;
`
const StyledWrapper = styled.div`
  padding: 10px;
  border: 1px solid;
`
const StyledInputWrapper = styled.div`
  display: 'flex';
  gap: 10px;
  margin-top: 10px;
`
const StyledUrlWrapper = styled.div`
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
const Component = () => {
  const [text, setText] = useState('小程序名称和对应页面')
  const [appId, setAppId] = useState(null)
  const [pagePath, setPagePath] = useState(null)
  const [extraQueries, setextraQueries] = useState([{ choice: '选择', key: '', val: '' }])
  const [isShowPopover, setIsShowPopover] = useState(false)

  const onChangeProtocol = (value) => {
    console.log(`selected ${value}`)
  }
  const onChangeAppPage = (value) => {
    setText(value.join(', '))
    setAppId(miniAppIds[value[0]])
    setPagePath(miniAppPages[value[0]][value[1]])
  }
  const addInputBox = (choice) => {
    let temp = [...extraQueries]
    temp.push({ choice: choice, key: '', val: '' })
    setextraQueries(temp)
  }
  const delInputBox = (idx) => {
    let temp = [...extraQueries]
    temp.splice(idx, 1)
    setextraQueries(temp)
  }
  const url = pagePath === null ? null : `alipays://platformapi/startapp?appId=${appId}&page=${pagePath}` + '?'
  return (
    <>
      <StyledSelect defaultValue="alipay" onChange={onChangeProtocol}>
        <Option value="alipay">Alipay 协议</Option>
      </StyledSelect>
      <div>
        <Cascader options={appPageData} onChange={onChangeAppPage}>
          <a href="#">点击选择</a>
        </Cascader>
        &nbsp;
        {text}
      </div>
      {!url
        ? null
        : <>
          {extraQueries.map(({ choice, key, val }, idx) => {
            return <StyledWrapper key={idx}>
              {idx === extraQueries.length - 1
                ? <StyledButton type="primary" onClick={() => addInputBox(choice)}>+</StyledButton>
                : <StyledButton type="primary" onClick={() => delInputBox(idx)}>-</StyledButton>}
              <Segmented options={['选择', '输入']} value={choice} onChange={(value) => {
                const temp = [...extraQueries]
                temp[idx].choice = value
                setextraQueries(temp)
              }} />
              {choice === '输入'
                ? (<StyledInputWrapper>
                  <input placeholder="输入key" value={key} onChange={(e) => {
                    const temp = [...extraQueries]
                    temp[idx].key = e.target.value
                    setextraQueries(temp)
                  }} />
                  <input placeholder="输入value" value={val} onChange={(e) => {
                    const temp = [...extraQueries]
                    temp[idx].val = e.target.value
                    setextraQueries(temp)
                  }} />

                </StyledInputWrapper>)
                : null}
            </StyledWrapper>
          })}
          <StyledUrlWrapper>{url}</StyledUrlWrapper>
          <Space>
            <Button type="primary" onClick={() => {
              navigator.clipboard.writeText(url)
              message.success('链接已复制到剪切板')
            }}>点击复制链接</Button>
            <Popover
              content={<QRCode value={url} size={200} />}
              title="扫描二维码"
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
// 存量小程序: {
//   'index/index': {
//     pathname: 'splitItem' | 'swiperItem' | 'singleItem',
//   },
// },

// vv会员: {
//   'index/index': {
//     upgrade: true,
//     type: 'basic',
//     frame: 'single',
//     anchor: 'call' | 'life' | 'fee',
//   },

//   'exit/index': {
//     type: 'vip' | 'basic',
//   },

//   'manage/index': {
//     type: 'vip' | 'basic',
//   },

//   'memberRule/index': {
//     type: 'vip' | 'basic',
//   },

//   'question/index': {
//     type: 'vip' | 'basic',
//   },

//   'strategy/index': {
//     type: 'vip' | 'basic',
//   },
// },