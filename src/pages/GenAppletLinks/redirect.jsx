import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { notification, Button, Space, Input, Typography } from 'antd'
import { copyToClipboard } from '../../utils'
const { Text } = Typography
const Component = observer(() => {
  const [redirectValue, setRediectValue] = useState('')
  const [returnLinks, setReturnLinks] = useState([])
  return (
    <>
      <Space>
        <Input
          style={{ minWidth: '600px' }}
          placeholder='请输入渠道入口id或者完整存量h5链接'
          value={redirectValue}
          size='36'
          onChange={(e) => {
            setRediectValue(e.target.value.trim())
          }}
        />
        <Button
          type='primary'
          style={{
            color: 'white',
            backgroundColor: '#74b816',
            border: 'none',
          }}
          onClick={async () => {
            if (redirectValue) {
              const res = await fetch(
                `api/redirect/${encodeURIComponent(encodeURIComponent(redirectValue))}`
              ).then((res) => res.text())
              if (res) {
                setReturnLinks((pre) => [
                  ...pre,
                  { link: res, name: redirectValue },
                ])
                setRediectValue('')
              } else {
                setReturnLinks((pre) => [
                  ...pre,
                  { link: '查询失败', name: redirectValue },
                ])
              }
            } else {
              notification.error({ description: '查询内容不得为空' })
            }
          }}>
          查询
        </Button>
      </Space>
      {returnLinks?.map((i, idx) => (
        <div
          style={{
            borderLeft: '6px solid lightblue',
            paddingLeft: '20px',
            marginTop: '26px',
          }}
          key={idx}>
          <Text>{i.name}</Text>
          <div
            style={{
              margin: '5px',
              padding: '5px 20px',
              border: '1px dashed',
              whiteSpace: 'wrap',
              wordBreak: 'break-all',
            }}
            onClick={() => {
              copyToClipboard(i.link).then(
                () =>
                  notification.success({
                    description: '链接已复制到剪切板',
                  }),
                () => notification.error({ description: '链接复制失败' })
              )
            }}>
            {i.link}
          </div>
          <Space>
            <Button
              type='primary'
              onClick={() => {
                copyToClipboard(i.link).then(
                  () =>
                    notification.success({
                      description: '链接已复制到剪切板',
                    }),
                  () => notification.error({ description: '链接复制失败' })
                )
              }}>
              复制链接
            </Button>
            {i.link?.startsWith('alipay') && (
              <>
                <Button
                  type='primary'
                  style={{
                    color: 'white',
                    backgroundColor: '#74b816',
                    border: 'none',
                  }}
                  onClick={() => {
                    copyToClipboard(
                      decodeURIComponent(
                        Object.fromEntries(
                          i.link
                            .split('?')[1]
                            .split('&')
                            .map((i) => i.split('='))
                        )['page']
                      )
                        .split('?')[1]
                        .split('&')
                        .map((i) => i.split('='))
                        .find((i) => i[0] === 'pathname')[1]
                    ).then(
                      () =>
                        notification.success({
                          description: '链接已复制到剪切板',
                        }),
                      () => notification.error({ description: '链接复制失败' })
                    )
                  }}>
                  复制页面路径
                </Button>
                <Button
                  type='primary'
                  style={{
                    color: 'white',
                    backgroundColor: '#74b816',
                    border: 'none',
                  }}
                  onClick={() => {
                    copyToClipboard(
                      decodeURIComponent(
                        Object.fromEntries(
                          i.link
                            .split('?')[1]
                            .split('&')
                            .map((i) => i.split('='))
                        )['page']
                      ).split('?')[1]
                    ).then(
                      () =>
                        notification.success({
                          description: '链接已复制到剪切板',
                        }),
                      () => notification.error({ description: '链接复制失败' })
                    )
                  }}>
                  复制页面参数
                </Button>
                <Button
                  type='primary'
                  style={{
                    color: 'white',
                    backgroundColor: '#74b816',
                    border: 'none',
                  }}
                  onClick={() => {
                    copyToClipboard(
                      decodeURIComponent(
                        Object.fromEntries(
                          i.link
                            .split('?')[1]
                            .split('&')
                            .map((i) => i.split('='))
                        )['query']
                      )
                    ).then(
                      () =>
                        notification.success({
                          description: '链接已复制到剪切板',
                        }),
                      () => notification.error({ description: '链接复制失败' })
                    )
                  }}>
                  复制Query参数
                </Button>
              </>
            )}
          </Space>
        </div>
      ))}
    </>
  )
})

export default Component
