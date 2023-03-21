

import React from 'react'
import { connect } from 'react-redux'
import { delUserAction } from '../../store/action/actions'
import './Mine.less'

function Mine(props) {
  // 退出登录
  function loginOut(){
    // 1、Redux 删除username
    props.delUser()
    // 2、删除本地存储
    localStorage.removeItem('username')

    // 3、页面跳转
    props.history.goBack();

  }
  return (
    <>
      <div className="mine-header">
        <div className="user-img">
          {/* 头像ICON */}
          <i className='iconfont icon-wode'></i>
        </div>
        <i className='iconfont icon-setting'></i>
      </div>

      <button onClick={loginOut}>退出登录</button>
    </>
  )
}


export default connect(null,dispatch=>({
  // {type:'del_',}
  delUser:()=>{dispatch(delUserAction())}
}))(Mine)