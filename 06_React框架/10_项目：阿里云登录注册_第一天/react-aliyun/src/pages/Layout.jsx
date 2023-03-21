import React from 'react'
import FlashMsgList from '../components/Flash/FlashMsgList'
import Header from '../components/Header/Header'

const style = {
  width: '300px',
  position: 'absolute',
  left: '50%',
  marginLeft: '-150px',
  zIndex:999
}

export default function Layout(props) {
  return (
    <div>
      <div style={style} >
        <FlashMsgList />
      </div>
      
      <Header />

      {/* 路由出口 */}
      <div>
        {props.children}
      </div>
    </div>
  )
}
