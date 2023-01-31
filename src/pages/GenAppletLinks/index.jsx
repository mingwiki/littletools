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
      <div style={{ border: '1px dashed gray', padding: '5px 10px' }}>
        <Radio.Group
          value={radioValue}
          onChange={(e) => setRadioValue(e.target.value)}>
          <Radio value={'alipay'}>
            <AlipayCircleOutlined /> 支付宝小程序
          </Radio>
          <Radio value={'redirect'}>
            <CodepenCircleOutlined /> 存量H5重定向
          </Radio>
        </Radio.Group>
      </div>
      <UI />
    </>
  )
})

export default Component
