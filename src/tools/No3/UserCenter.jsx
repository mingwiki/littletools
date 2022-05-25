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
  Cascader,
} from 'antd'
import { DeleteOutlined, DoubleRightOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import QRCode from 'qrcode.react'
import context from '../../stores'
import {
  cascaderData,
  miniAppIds,
  miniAppPages,
  miniAppPageExtra,
} from '../../data'

const StyledHistoryLine = styled.div`
  margin-bottom: 10px;
`
const CardFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  const {
    textInfo,
    appId,
    pagePath,
    setTextInfo,
    setAppId,
    setPagePath,
    setPageCheckData,
    queryAll,
    queryAllByCondition,
    deleteUrl,
    uploadAll,
  } = UrlStore
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
  const syncPullByCondition = (appId, pagePath) => {
    setIsSyncing(true)
    queryAllByCondition(appId, pagePath)
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
  const onChangeAppPage = (value) => {
    setTextInfo(
      <>
        {value[0]} <DoubleRightOutlined /> {value[1]}
      </>
    )
    setAppId(miniAppIds[value[0]])
    setPagePath(miniAppPages[value[0]][value[1]])
    if (
      miniAppPageExtra[miniAppIds[value[0]]][miniAppPages[value[0]][value[1]]]
    ) {
      setPageCheckData(
        Object.entries(
          miniAppPageExtra[miniAppIds[value[0]]][
            miniAppPages[value[0]][value[1]]
          ]
        ).map((e) => {
          if (typeof e[1] === 'boolean') {
            e[1] = e[1].toString()
          }
          if (!Array.isArray(e[1])) {
            e[1] = [e[1]]
          }
          return e
        })
      )
    } else {
      setPageCheckData([])
    }
  }
  return (
    <>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title='No. 3'
        subTitle='个人中心管理面板'
        extra={[
          localStorage.getItem('encodedUrl_history') && (
            <Button
              key={0}
              type='primary'
              danger
              onClick={() => {
                syncOld(JSON.parse(localStorage.getItem('encodedUrl_history')))
              }}>
              上传本地存储数据
            </Button>
          ),
          <Button key={1} type='primary' danger onClick={() => syncPull()}>
            查询所有数据
          </Button>,
          <Button
            key={2}
            type='primary'
            disabled
            style={{ backgroundColor: '#66a80f', color: 'white' }}>
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
          <Space>
            <Cascader
              options={cascaderData}
              onChange={onChangeAppPage}
              size='large'
              notFoundContent='无数据'>
              <a href='/#'>
                <Button type='primary'>点击选择或切换</Button>
              </a>
            </Cascader>
            <Button
              type='dashed'
              disabled
              style={{ backgroundColor: '#ffc9c9', color: '#ff3300' }}>
              {textInfo}
            </Button>
            {appId && pagePath ? (
              <Button
                type='primary'
                onClick={() => {
                  syncPullByCondition(appId, pagePath)
                }}>
                查询此页面对应数据
              </Button>
            ) : null}
          </Space>
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
                        <CardFlex>
                          <Space>
                            {e?.attributes?.enterId?.length > 0 && (
                              <Text code>
                                入口ID: {e?.attributes?.enterId.join(', ')}
                              </Text>
                            )}
                            {e?.attributes?.sourceOrigin?.length > 0 && (
                              <Text code>
                                订单来源:{' '}
                                {e?.attributes?.sourceOrigin.join(', ')}
                              </Text>
                            )}
                          </Space>
                          <Space>
                            <Button
                              type='dashed'
                              shape='round'
                              onClick={() => {
                                navigator.clipboard.writeText(
                                  e?.attributes?.url
                                )
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
                        </CardFlex>
                      </Card>
                    </Badge.Ribbon>
                  </StyledHistoryLine>
                ))
            ) : (
              <Text strong>请根据筛选条件查询所需数据</Text>
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
