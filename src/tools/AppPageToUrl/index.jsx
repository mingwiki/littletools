import { Cascader } from 'antd'
import React, { useState } from 'react'
import { miniAppPages } from './data.js'

const options = Object.entries(miniAppPages).map(e => {
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
