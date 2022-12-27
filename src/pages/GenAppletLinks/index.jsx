/** @format */

import React, {
  useState,
  useEffect,
  useDeferredValue,
  useContext,
  useMemo,
} from 'react'
import { observer } from 'mobx-react'
import {
  Cascader,
  notification,
  Button,
  Space,
  Popover,
  Radio,
  Checkbox,
  Typography,
  Input,
} from 'antd'
import {
  AlipayCircleOutlined,
  CodepenCircleOutlined,
  DoubleRightOutlined,
  GroupOutlined,
  GlobalOutlined,
  EditOutlined,
} from '@ant-design/icons'
import styled from 'styled-components'
import context from '../../stores'
import {
  cascaderData,
  miniAppIds,
  miniAppPages,
  miniAppPageExtra,
} from '../../data'
import { copyToClipboard } from '../../utils'
import { QRCodeCanvas } from 'qrcode.react'
const { Text } = Typography

const StyledInputWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
const StyledUrlWrapper = styled.p`
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  padding: 10px;
  box-shadow: 0px 0px 5px 2px #5d7ea3;
`
const ParamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border: 1px solid;
`
const StyledInput = styled.input`
  min-width: 30%;
  max-width: 100%;
  &:invalid {
    background-color: red;
  }
`
const StyledMaxInput = styled.input`
  width: 100%;
  &:invalid {
    background-color: red;
  }
`
const WrapSpace = styled(Space)`
  flex-wrap: wrap;
`
const alipayComponent = observer(() => {
  const [isShowPopover, setIsShowPopover] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const { UrlStore } = useContext(context)
  const {
    textInfo,
    pageCheckQueries,
    pageInputQueries,
    globalInputQueries,
    linkName,
    pageCheckData,
    getEncodedUrl,
    setTextInfo,
    setAppId,
    setPagePath,
    setPageCheckQueries,
    setPageInputQueries,
    setGlobalInputQueries,
    setLinkName,
    setPageCheckData,
    splitEnterId,
    splitSourceOrigin,
    checkEnterId,
    uploadUrl,
  } = UrlStore
  const deferredEncodedUrl = useDeferredValue(getEncodedUrl())
  const redirectUrl = `https://gkzx.jujienet.com/broadband-web/redirect/${encodeURIComponent(
    deferredEncodedUrl
  )}`
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
  notification.config({
    placement: 'bottomRight',
    duration: 3,
  })
  const confirmAndUpload = () => {
    if (deferredEncodedUrl === '') {
      notification.error({
        description: '当前链接地址为空，请检查。',
      })
    } else {
      uploadUrl({
        name: linkName || deferredEncodedUrl,
        url: deferredEncodedUrl,
      }).then(
        (res) => {
          console.log(res)
          notification.success({
            description: `已上传${linkName}`,
          })
          setIsUploaded(true)
        },
        (error) => {
          notification.error({
            description: `上传失败请联系开发人员`,
          })
          notification.error({
            description: JSON.stringify(error),
          })
        }
      )
    }
  }
  useEffect(() => {
    setIsUploaded(false)
  }, [deferredEncodedUrl])
  return (
    <>
      <WrapSpace>
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
          style={{ backgroundColor: '#ffc9c9', color: 'black' }}>
          {textInfo}
        </Button>
      </WrapSpace>
      {!deferredEncodedUrl ? null : (
        <>
          <ParamsWrapper>
            <div>
              <GroupOutlined /> <Text keyboard>页面级参数</Text>
            </div>
            {pageCheckData.length === 0
              ? null
              : pageCheckData.map((val, idx) => {
                  return (
                    <div key={idx}>
                      {val[0]}:{' '}
                      <Checkbox.Group
                        options={val[1]}
                        value={pageCheckQueries[val[0]]}
                        onChange={(e) => {
                          const temp = { ...pageCheckQueries }
                          e.length < 2
                            ? (temp[val[0]] = e)
                            : (temp[val[0]] = e.filter(
                                (x) => !temp[val[0]].includes(x)
                              ))
                          setPageCheckQueries(temp)
                        }}
                      />
                    </div>
                  )
                })}
            {pageInputQueries.map(({ key, val }, idx) => {
              return (
                <StyledInputWrapper key={idx}>
                  <StyledInput
                    placeholder='输入key，最长20位，以字母开头'
                    value={key}
                    maxLength='20'
                    size='28'
                    pattern='^[A-Za-z](\w)*'
                    onChange={(e) => {
                      const temp = [...pageInputQueries]
                      temp[idx].key = e.target.value.trim()
                      setPageInputQueries(temp)
                    }}
                  />
                  <StyledInput
                    placeholder='输入value，最长50位'
                    value={val}
                    maxLength='50'
                    size='28'
                    pattern='(\w)*'
                    onChange={(e) => {
                      const temp = [...pageInputQueries]
                      temp[idx].val = e.target.value.trim()
                      setPageInputQueries(temp)
                    }}
                  />
                  <Button
                    type='primary'
                    onClick={() => {
                      let temp = [...pageInputQueries]
                      if (pageInputQueries.length !== 1) {
                        temp.splice(idx, 1)
                      } else {
                        temp = [{ key: '', val: '' }]
                      }
                      setPageInputQueries(temp)
                    }}>
                    -
                  </Button>
                  {idx === pageInputQueries.length - 1 ? (
                    <Button
                      type='primary'
                      onClick={() => {
                        const temp = [...pageInputQueries]
                        temp.push({ key: '', val: '' })
                        setPageInputQueries(temp)
                      }}>
                      +
                    </Button>
                  ) : null}
                </StyledInputWrapper>
              )
            })}
          </ParamsWrapper>
          <ParamsWrapper>
            <div>
              <GlobalOutlined /> <Text keyboard>全局级参数</Text>
            </div>
            {globalInputQueries.map(({ key, val }, idx) => {
              return (
                <StyledInputWrapper key={idx}>
                  <StyledInput
                    placeholder='输入key，最长20位，以字母开头'
                    value={key}
                    maxLength='20'
                    size='28'
                    pattern='^[A-Za-z](\w)*'
                    onChange={(e) => {
                      const temp = [...globalInputQueries]
                      temp[idx].key = e.target.value.trim()
                      setGlobalInputQueries(temp)
                    }}
                  />
                  <StyledInput
                    placeholder='输入value，最大长度50位'
                    value={val}
                    maxLength='50'
                    size='28'
                    pattern='(\w)*'
                    onChange={(e) => {
                      const temp = [...globalInputQueries]
                      temp[idx].val = e.target.value.trim()
                      setGlobalInputQueries(temp)
                    }}
                  />
                  <Button
                    type='primary'
                    onClick={() => {
                      let temp = [...globalInputQueries]
                      if (globalInputQueries.length !== 1) {
                        temp.splice(idx, 1)
                      } else {
                        temp = [{ key: '', val: '' }]
                      }
                      setGlobalInputQueries(temp)
                    }}>
                    -
                  </Button>
                  {idx === globalInputQueries.length - 1 ? (
                    <Button
                      type='primary'
                      onClick={() => {
                        const temp = [...globalInputQueries]
                        temp.push({ key: '', val: '' })
                        setGlobalInputQueries(temp)
                      }}>
                      +
                    </Button>
                  ) : null}
                </StyledInputWrapper>
              )
            })}
          </ParamsWrapper>
          <StyledUrlWrapper>{deferredEncodedUrl}</StyledUrlWrapper>
          <StyledInputWrapper>
            <EditOutlined />
            <StyledMaxInput
              type='text'
              placeholder='请输入链接名称'
              value={linkName}
              pattern='.+'
              autoFocus={true}
              onChange={(e) => {
                setLinkName(e.target.value.trim())
              }}
            />
          </StyledInputWrapper>
          {splitEnterId(deferredEncodedUrl).length > 0 ? (
            <>
              <Button
                type='primary'
                style={{
                  color: 'white',
                  backgroundColor: '#cc5de8',
                  border: 'none',
                }}
                onClick={() => {
                  checkEnterId(deferredEncodedUrl).then(
                    (res) => {
                      console.log(res)
                      if (res.length > 0) {
                        res.map((item) =>
                          notification.error({
                            description: `此${item.enterId}已经存在于${item.linkName}由${item.nickname}上传`,
                          })
                        )
                      } else {
                        notification.success({
                          description: `当前Enter ID可用`,
                        })
                      }
                    },
                    (err) => {
                      notification.error({
                        description: JSON.stringify(err),
                      })
                    }
                  )
                }}>
                入口ID查重
              </Button>
              <span>
                (当前为<b>{splitEnterId(deferredEncodedUrl).join(',')}</b>)
              </span>
            </>
          ) : null}
          {splitSourceOrigin(deferredEncodedUrl).length > 0 ? (
            <>
              <Button
                type='primary'
                disabled
                style={{
                  color: 'white',
                  backgroundColor: 'grey',
                  border: 'none',
                }}>
                订单来源查重
              </Button>
              <span>
                (当前为
                <b>{splitSourceOrigin(deferredEncodedUrl).join(',')}</b>)
              </span>
            </>
          ) : null}
          <WrapSpace
            onClick={() => {
              if (!isUploaded) confirmAndUpload()
            }}>
            <Button
              type='primary'
              onClick={() => {
                copyToClipboard(deferredEncodedUrl).then(
                  () =>
                    notification.success({
                      description: '链接已复制到剪切板',
                    }),
                  () => notification.error({ description: '链接复制失败' })
                )
              }}>
              点击复制链接
            </Button>
            <Popover
              content={<QRCodeCanvas value={deferredEncodedUrl} size={200} />}
              title='请扫描二维码'
              trigger='click'
              open={isShowPopover}
              onOpenChange={() => {
                setIsShowPopover(!isShowPopover)
                notification.success({ description: '二维码已生成' })
              }}>
              <Button type='primary'>点击生成二维码</Button>
            </Popover>
            <Button
              type='primary'
              style={{
                color: 'white',
                backgroundColor: '#74b816',
                border: 'none',
              }}
              onClick={() => {
                copyToClipboard(redirectUrl).then(
                  () =>
                    notification.success({
                      description: '链接已复制到剪切板',
                    }),
                  () => notification.error({ description: '链接复制失败' })
                )
              }}>
              点击复制跳转链接
            </Button>
          </WrapSpace>
          （点击以上按钮会自动上传链接）
        </>
      )}
    </>
  )
})
const redirectComponent = observer(() => {
  const [redirectValue, setRediectValue] = useState('')
  const [returnLinks, setReturnLinks] = useState([])
  return (
    <>
      <Space>
        <Input
          placeholder='渠道入口id'
          value={redirectValue}
          size='28'
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
            const res = await fetch(`api/redirect/${redirectValue}`).then(
              (res) => res.text()
            )
            if (res) {
              setReturnLinks((pre) => [
                ...pre,
                { link: res, name: redirectValue },
              ])
            } else {
              setReturnLinks((pre) => [
                ...pre,
                { link: '查询失败', name: redirectValue },
              ])
            }
          }}>
          查询
        </Button>
      </Space>
      {returnLinks?.map((i, idx) => (
        <div
          style={{ borderLeft: '2px solid lightblue', paddingLeft: '20px' }}
          key={idx}>
          <Space>
            <Text>{i.name}</Text>
            <Button
              type='primary'
              style={{
                color: 'white',
                backgroundColor: '#74b816',
                border: 'none',
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
              复制
            </Button>
          </Space>
          <div
            style={{
              margin: '20px 0',
              padding: '20px',
              border: '1px dashed',
              whiteSpace: 'wrap',
              wordBreak: 'break-all',
            }}>
            {i.link}
          </div>
        </div>
      ))}
    </>
  )
})
const Component = observer(() => {
  const [radioValue, setRadioValue] = useState('alipay')
  const UI = useMemo(() => {
    if (radioValue === 'alipay') {
      return alipayComponent
    } else {
      return redirectComponent
    }
  }, [radioValue])
  useEffect(() => {
    document.title = '生成小程序链接'
  }, [])
  return (
    <>
      <Radio.Group
        value={radioValue}
        size='large'
        onChange={(e) => setRadioValue(e.target.value)}>
        <Radio value={'alipay'}>
          <AlipayCircleOutlined /> alipays 协议
        </Radio>
        <Radio value={'redirect'}>
          <CodepenCircleOutlined /> 存量H5重定向
        </Radio>
      </Radio.Group>
      <UI />
    </>
  )
})

export default Component
