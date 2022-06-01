import React, { useEffect, useState } from 'react';
import {
  Button,
  PageHeader,
  Layout,
  Typography,
  notification,
  Space,
  Badge,
  Card,
  Popover,
  Spin,
  Cascader,
  Empty,
  Radio,
  Input,
} from 'antd'
import styled from 'styled-components'
import UrlStore from '../../stores/url'
const { splitEnterId, splitSourceOrigin, splitAppId, splitPagePath, getPageType } = UrlStore
const { Text } = Typography
const { Content } = Layout
const { Search } = Input;

const StyledInput = styled.input`
  &:invalid {
    background-color: red;
  }
`

const Component = () => {
  const [url, setUrl] = useState('')
  const [response, setResponse] = useState('')
  useEffect(() => {
    document.title = '解析Page参数'
  }, [])
  const alipaysUrl = decodeURIComponent(response || '')?.split("'")?.filter(e => /^alipays/i.test(e))?.[0]
  const pageParms = alipaysUrl?.split('&page=')[1]?.split('&query=')[0]
  return <>
    <PageHeader
      ghost={false}
      onBack={() => window.history.back()}
      title='No. 4'
      subTitle='截取重定向中的page参数, 并且decode。'
      extra={[
      ]}
    />
    <Content className='content'>
      <div
        className='site-layout-background'
        style={{
          padding: 24,
          minHeight: 360,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}>
        <Space direction='vertical'>
          <StyledInput
            placeholder="请输入https://benefit.jujienet.com开头网址"
            pattern='^https?://benefit\.jujienet\.com.+'
            style={{ width: '100%' }}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button type='primary' onClick={() => {
            console.log(url)
            fetch(url)
              .then((response) => response.text())
              .then((data) => {
                setResponse(data)
                if (data !== '404') {
                  notification.success({ description: '查询成功' })
                } else {
                  notification.error({ description: '无数据' })
                }
              }, {
                credentials: 'include',
                method: 'GET',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Credentials': 'true',
                },
              }).catch((e) => {
                notification.error({ description: '查询失败' })
                alert(JSON.stringify(e))
              })
          }}>查询</Button>
        </Space>
        {pageParms && <Space direction='vertical'>
          <Space>
            <Text strong>Alipay链接</Text>
            <Button type='dashed' onClick={() => {
              navigator.clipboard.writeText(alipaysUrl)
              notification.success({ description: 'Alipay链接已复制到剪贴板' })
            }}>复制此链接</Button>
          </Space>
          <Text style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{alipaysUrl}</Text>
          <Space>
            <Text strong>{getPageType(alipaysUrl)}</Text>
            <Button type='primary' onClick={() => {
              navigator.clipboard.writeText(pageParms)
              notification.success({ description: 'page参数已复制到剪贴板' })
            }}>复制下面的page参数</Button>
          </Space>
          <Text style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{pageParms}</Text>
        </Space>}
      </div>
    </Content>
  </>
}

export default Component