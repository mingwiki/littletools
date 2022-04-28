import React, { useState } from 'react'
import { Cascader, message, Button, Space, Popover, Radio, Checkbox, PageHeader, Layout } from 'antd'
import { AlipayCircleOutlined, DoubleRightOutlined, GroupOutlined, GlobalOutlined } from '@ant-design/icons'
import { miniAppIds, miniAppPages, miniAppPageExtra } from './data.js'
import styled from 'styled-components'
import QRCode from 'qrcode.react'

const { Content } = Layout
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
const ParamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid;
`
const StyledInput = styled.input`
  &:invalid {
    background-color: red;
  }
`
const cascaderData = Object.entries(miniAppPages).map(e => {
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
let pageCheckData = []
const Component = () => {
  const [text, setText] = useState('小程序名称和对应页面')
  const [appId, setAppId] = useState('')
  const [pagePath, setPagePath] = useState('')
  const [pageCheckQuerie, setPageCheckQuerie] = useState({})
  const [pageInputQueries, setPageInputQueries] = useState([{ key: '', val: '' }])
  const [globalInputQueries, setGlobalInputQueries] = useState([{ key: '', val: '' }])
  const [isShowPopover, setIsShowPopover] = useState(false)
  const onChangeAppPage = (value) => {
    setText(<>{value[0]} <DoubleRightOutlined /> {value[1]}</>)
    setAppId(miniAppIds[value[0]])
    setPagePath(miniAppPages[value[0]][value[1]])
    if (miniAppPageExtra[miniAppIds[value[0]]][miniAppPages[value[0]][value[1]]]) {
      pageCheckData = Object.entries(miniAppPageExtra[miniAppIds[value[0]]][miniAppPages[value[0]][value[1]]]).map((e) => {
        if (typeof e[1] === 'boolean') {
          e[1] = e[1].toString()
        }
        if (!Array.isArray(e[1])) {
          e[1] = [e[1]]
        }
        return e
      })
    } else {
      pageCheckData = []
    }
  }
  const pathUrl = `pages/${pagePath}`
  const pageCheckUrl = Object.keys(pageCheckQuerie).length === 0 ? '' : Object.entries(pageCheckQuerie).map((e) => e[1].length !== 0 ? `${e[0]}=${e[1]}` : '').filter(e => e !== '').join('&')
  const pageInputUrl = pageInputQueries.length === 1 && pageInputQueries[0].key === '' && pageInputQueries[0].val === '' ? '' : pageInputQueries.map(e => e.key !== '' && e.val !== '' ? `${e.key}=${e.val}` : '').filter(e => e !== '').join('&')
  const globalInputUrl = globalInputQueries.length === 1 && globalInputQueries[0].key === '' && globalInputQueries[0].val === '' ? '' : globalInputQueries.map(e => e.key !== '' && e.val !== '' ? `${e.key}=${e.val}` : '').filter(e => e !== '').join('&')
  const encodePage = encodeURIComponent(pathUrl + (pageCheckUrl === '' && pageInputUrl === '' && globalInputUrl === '' ? '' : '?') + pageCheckUrl + (pageCheckUrl !== '' && pageInputUrl !== '' ? '&' : '') + pageInputUrl)
  const encodeGlobal = (globalInputUrl !== '' ? '&query=' : '') + encodeURIComponent(globalInputUrl)
  const encodedUrl = pagePath === '' ? '' : `alipays://platformapi/startapp?appId=${appId}&page=${encodePage}${encodeGlobal}`
  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>
        ]}
      >
      </PageHeader>
      <Content className="content">
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360, display: 'flex', flexDirection: 'column', gap: 20 }} >
          <Radio.Group value={'alipay'} size='large'>
            <Radio value={'alipay'}><AlipayCircleOutlined /> Alipay 协议</Radio>
          </Radio.Group>
          <div>
            <Cascader options={cascaderData} onChange={onChangeAppPage} size='large' notFoundContent='无数据'>
              <a href="#">点击选择</a>
            </Cascader>
            &nbsp;
            {text}
          </div>
          {!encodedUrl
            ? null
            : <>
              <ParamsWrapper>
                <div><GroupOutlined /> 页面级参数</div>
                {pageCheckData.length === 0
                  ? null
                  : pageCheckData.map((val, idx) => {
                    return <div key={idx}>
                      {val[0]}: <Checkbox.Group options={val[1]} value={pageCheckQuerie[val[0]]} onChange={(e) => {
                        const temp = { ...pageCheckQuerie }
                        e.length < 2 ? temp[val[0]] = e : temp[val[0]] = e.filter(x => !temp[val[0]].includes(x))
                        setPageCheckQuerie(temp)
                      }} />
                    </div>
                  })}
                {pageInputQueries.map(({ key, val }, idx) => {
                  return <StyledInputWrapper key={idx}>
                    <StyledInput placeholder="输入key，最长20位，以字母开头" value={key} maxLength="20" size="30" pattern="^[A-Za-z](\w)*" onChange={(e) => {
                      const temp = [...pageInputQueries]
                      temp[idx].key = e.target.value
                      setPageInputQueries(temp)
                    }} />
                    <StyledInput placeholder="输入value，最长20位" value={val} maxLength="20" size="30" pattern="(\w)*" onChange={(e) => {
                      const temp = [...pageInputQueries]
                      temp[idx].val = e.target.value
                      setPageInputQueries(temp)
                    }} />
                    <Button type="primary" onClick={() => {
                      let temp = [...pageInputQueries]
                      if (pageInputQueries.length !== 1) {
                        temp.splice(idx, 1)
                      } else {
                        temp = [{ key: '', val: '' }]
                      }
                      setPageInputQueries(temp)
                    }}>-</Button>
                    {idx === pageInputQueries.length - 1
                      ? <Button type="primary" onClick={() => {
                        const temp = [...pageInputQueries]
                        temp.push({ key: '', val: '' })
                        setPageInputQueries(temp)
                      }}>+</Button>
                      : null}
                  </StyledInputWrapper>
                })}
              </ParamsWrapper>
              <ParamsWrapper>
                <div><GlobalOutlined /> 全局级参数</div>
                {globalInputQueries.map(({ key, val }, idx) => {
                  return <StyledInputWrapper key={idx}>
                    <StyledInput placeholder="输入key，最长20位，以字母开头" value={key} maxLength="20" size="30" pattern="^[A-Za-z](\w)*" onChange={(e) => {
                      const temp = [...globalInputQueries]
                      temp[idx].key = e.target.value
                      setGlobalInputQueries(temp)
                    }} />
                    <StyledInput placeholder="输入value，最大长度20位" value={val} maxLength="20" size="30" pattern="(\w)*" onChange={(e) => {
                      const temp = [...globalInputQueries]
                      temp[idx].val = e.target.value
                      setGlobalInputQueries(temp)
                    }} />
                    <Button type="primary" onClick={() => {
                      let temp = [...globalInputQueries]
                      if (globalInputQueries.length !== 1) {
                        temp.splice(idx, 1)
                      } else {
                        temp = [{ key: '', val: '' }]
                      }
                      setGlobalInputQueries(temp)
                    }}>-</Button>
                    {idx === globalInputQueries.length - 1
                      ? <Button type="primary" onClick={() => {
                        const temp = [...globalInputQueries]
                        temp.push({ key: '', val: '' })
                        setGlobalInputQueries(temp)
                      }}>+</Button>
                      : null}
                  </StyledInputWrapper>
                })}
              </ParamsWrapper>
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
        </div>
      </Content>
    </>
  )
}

export default Component
