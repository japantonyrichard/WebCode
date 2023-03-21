import React from 'react'
import './CityHeader.less'
import {withRouter,useHistory} from 'react-router-dom'

export default function CityHeader(props) {
  let history=useHistory();


  // 返回上一页
  function back(){
    // 第一种：withRouer  
    // props.history.goBack();
    // 第二种：useHistory
    history.goBack();
  }

  return (
    <div className='city-header'>
        <i className='iconfont icon-back' onClick={back}></i>
        <div className='title'>
            城市选择
        </div>
    </div>
  )
}

// 第一种：withRouer  
// export default  withRouter(CityHeader)