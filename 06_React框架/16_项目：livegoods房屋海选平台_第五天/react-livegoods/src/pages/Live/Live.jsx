import React, { useState } from 'react'
import MyTabs from '../../components/MyTabs/MyTabs'

export default function Live() {
  const [num, setNum] = useState('1');
  // 父组件接受子组件传递过来的key
  function callback(key) {
    console.log('父组件接受子组件传递过来的key:', key);
    setNum(key)
  }
  return (
    <div>
      <h2>自己封装选项卡</h2>
      <MyTabs defaultActiveKey={num} onChange={callback}>
        <div tab="标题1" key="1">
          <h2>内容1</h2>
          <p>11111</p>
          <p>2222</p>
        </div>
        <div tab="标题2" key="2">内容2</div>
        <div tab="标题3" key="3">内容3</div>
        <div tab="标题4" key="4">内容4</div>
      </MyTabs>
    </div>
  )
}
