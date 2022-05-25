import { observer } from 'mobx-react'
import React, { useState, useContext } from 'react'
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
} from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import QRCode from 'qrcode.react'
import context from '../../stores'

const StyledHistoryLine = styled.div`
  margin-bottom: 10px;
`
const { Text } = Typography
const { Content } = Layout
const Component = observer(() => {
  const { AuthStore, UserStore, UrlStore, UserCenterStore } =
    useContext(context)
  const { logout } = AuthStore
  const { currentUser } = UserStore
  const { isSyncing, localUrls, setIsSyncing, setLocalUrls, clear } =
    UserCenterStore
  const { queryAll, deleteUrl, uploadAll } = UrlStore
  const [isShowDrawerQR, setIsShowDrawerQR] = useState([])
  const [syncOldErr, setSyncOldErr] = useState(false)
  const syncOld = (urls) => {
    setIsSyncing(true)
    uploadAll(urls)
      .then(
        (res) => {
          res.map((item) => {
            notification.success({
              description: `已上传${item?.attributes?.name}`,
            })
          })
        },
        (error) => {
          setSyncOldErr(true)
          notification.error({ description: `上传失败请联系开发人员` })
          notification.error({ description: JSON.stringify(error) })
        }
      )
      .finally(() => {
        setIsSyncing(false)
        if (!syncOldErr) localStorage.removeItem('encodedUrl_history')
        syncPull()
      })
  }
  const syncPull = () => {
    setIsSyncing(true)
    queryAll()
      .then(
        (res) => {
          setIsShowDrawerQR(new Array(Object.entries(res).length).fill(false))
          setLocalUrls(res)
          if (Object.entries(res).length === 0) {
            notification.info({
              description: `暂无数据`,
            })
          } else {
            notification.success({
              description: `同步成功`,
            })
          }
        },
        (error) => {
          notification.error({ description: `上传失败请联系开发人员` })
          notification.error({ description: JSON.stringify(error) })
        }
      )
      .finally(() => {
        setIsSyncing(false)
      })
  }
  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title='No. 3'
        subTitle='个人中心管理面板'
        extra={[
          <Button key={2} type='primary'>
            {currentUser?.attributes?.realname}
          </Button>,
          <Button key={3} type='primary' danger onClick={() => logout()}>
            注销
          </Button>,
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
          {currentUser?.attributes?.realname}的上传记录
          <Button
            type='link'
            onClick={() => {
              if (localStorage.getItem('encodedUrl_history')) {
                syncOld(JSON.parse(localStorage.getItem('encodedUrl_history')))
              } else {
                syncPull()
              }
            }}>
            云同步
          </Button>
          {!isSyncing ? (
            localUrls?.length > 0 ? (
              localUrls
                .slice()
                .sort((a, b) => (a.name < b.name ? -1 : 1))
                .map((e, idx) => (
                  <StyledHistoryLine key={idx}>
                    <Badge.Ribbon text={idx + 1}>
                      <Card
                        title={<Text strong>{e?.attributes?.name}</Text>}
                        size='small'
                        hoverable={true}
                        type='inner'>
                        <Space>
                          <Button
                            type='dashed'
                            shape='round'
                            onClick={() => {
                              navigator.clipboard.writeText(e?.attributes?.url)
                              notification.success({
                                description: '链接已复制到剪切板',
                              })
                            }}>
                            点击复制链接
                          </Button>
                          <Popover
                            content={
                              <QRCode value={e?.attributes?.url} size={200} />
                            }
                            title='请扫描二维码'
                            trigger='click'
                            visible={isShowDrawerQR[idx]}
                            onVisibleChange={() => {
                              const temp = [...isShowDrawerQR]
                              temp[idx] = !temp[idx]
                              setIsShowDrawerQR(temp)
                            }}>
                            <Button
                              type='dashed'
                              shape='round'
                              onClick={() => {
                                notification.info({
                                  description: '查看历史链接二维码',
                                })
                              }}>
                              点击查看二维码
                            </Button>
                          </Popover>
                          <DeleteOutlined
                            style={{ color: 'red' }}
                            onClick={() => {
                              localUrls.splice(idx, 1)
                              setLocalUrls(localUrls)
                              deleteUrl(e.id)
                            }}
                          />
                        </Space>
                      </Card>
                    </Badge.Ribbon>
                  </StyledHistoryLine>
                ))
            ) : (
              <div>请点击云同步或上传链接</div>
            )
          ) : (
            <Spin tip='正在和云服务器同步数据' size='large' />
          )}
        </div>
      </Content>
    </>
  )
})
export default Component
