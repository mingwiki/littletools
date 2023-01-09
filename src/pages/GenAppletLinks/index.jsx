import React, { useState, useEffect, useMemo } from 'react'
import { observer } from 'mobx-react'
import { Radio } from 'antd'
import { AlipayCircleOutlined, CodepenCircleOutlined } from '@ant-design/icons'
import AlipayComponent from './alipay'
import RedirectComponent from './redirect'

const Component = observer(() => {
  const [radioValue, setRadioValue] = useState('alipay')
  const UI = useMemo(() => {
    switch (radioValue) {
      case 'alipay':
        return AlipayComponent
      case 'redirect':
        return RedirectComponent
      default:
        return <>无此组件</>
    }
  }, [radioValue])
  useEffect(() => {
    document.title = '生成小程序链接'
  }, [])
  return (
    <>
      <Radio.Group
        buttonStyle='solid'
        value={radioValue}
        onChange={(e) => setRadioValue(e.target.value)}>
        <Radio.Button value={'alipay'}>
          <AlipayCircleOutlined /> 支付宝小程序
        </Radio.Button>
        <Radio.Button value={'redirect'}>
          <CodepenCircleOutlined /> 存量H5重定向
        </Radio.Button>
      </Radio.Group>
      <UI />
    </>
  )
})

export default Component
