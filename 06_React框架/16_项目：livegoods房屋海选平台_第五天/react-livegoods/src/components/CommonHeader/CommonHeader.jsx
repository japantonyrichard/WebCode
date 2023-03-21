import React from 'react'
import './CommonHeader.less'
import {useHistory} from 'react-router-dom'

export default function CommonHeader(props) {
  let history=useHistory();


  // 返回上一页
  function back(){
    // 第二种：useHistory
    history.goBack();
  }

  return (
    <div className='city-header'>
      {/* 返回按钮 */}
        <i className='iconfont icon-back' onClick={back}></i>
        <div className='title'>
            {/* 预留空间 */}
            {props.children}
        </div>
    </div>
  )
}
