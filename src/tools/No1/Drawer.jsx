import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import {
  Drawer,
  Badge,
  Card,
  notification,
  Button,
  Space,
  Popover,
  Typography,
  Spin,
} from 'antd'
import styled from 'styled-components'
import QRCode from 'qrcode.react'
import context from '../../stores'

const { Text } = Typography
const StyledHistoryLine = styled.div`
  margin-bottom: 10px;
`
const Component = observer(() => {
  const { UserStore, DrawerStore } = useContext(context)
  const { currentUser } = UserStore
  const { visible, setVisible, isSyncing, setIsSyncing } = DrawerStore
  const [isShowDrawerQR, setIsShowDrawerQR] = useState([])
  useEffect(() => {
    setIsShowDrawerQR(
      new Array(
        Object.entries(
          JSON.parse(localStorage.getItem('encodedUrl_history')) || {}
        ).length
      ).fill(false)
    )
  }, [])
  return (
    <>
      <Drawer
        title={
          <>
            {currentUser?.attributes?.realname}的上传记录
            <Button
              type='link'
              onClick={() => {
                setIsSyncing(true)
              }}>
              云同步
            </Button>
          </>
        }
        placement='right'
        onClose={() => setVisible(false)}
        visible={visible}>
        {!isSyncing ? (
          Object.entries(
            JSON.parse(localStorage.getItem('encodedUrl_history')) || {}
          )
            .sort((a, b) => (a[0] < b[0] ? -1 : 1))
            .map((e, idx) => (
              <StyledHistoryLine key={idx}>
                <Badge.Ribbon text={idx + 1}>
                  <Card
                    title={<Text strong>{e[0]}</Text>}
                    size='small'
                    hoverable={true}
                    type='inner'>
                    <Space>
                      <Button
                        type='dashed'
                        shape='round'
                        onClick={() => {
                          navigator.clipboard.writeText(e[1])
                          notification.success({
                            description: '链接已复制到剪切板',
                          })
                        }}>
                        点击复制链接
                      </Button>
                      <Popover
                        content={<QRCode value={e[1]} size={200} />}
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
                    </Space>
                  </Card>
                </Badge.Ribbon>
              </StyledHistoryLine>
            ))
        ) : (
          <Spin tip='正在和云服务器同步数据' />
        )}
      </Drawer>
    </>
  )
})
export default Component
