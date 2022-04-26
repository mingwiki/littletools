import { Cascader } from 'antd'
import React, { useState } from 'react'
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou'
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing'
      }
    ]
  }
]
const Component = () => {
  const [text, setText] = useState('未选择')

  const onChange = (value, selectedOptions) => {
    setText(selectedOptions.map(o => o.label).join(', '))
  }
  return (
    <>
      {text}
      &nbsp;
      <Cascader options={options} onChange={onChange}>
        <a href="#">点击选择</a>
      </Cascader>
    </>
  )
}

export default Component
