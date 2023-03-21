


import React from 'react'
import classnames from 'classnames'
import { connect } from "react-redux";

function FlashMsg(props) {

  // 删除
  function closeHandle() {
    console.log(props.item.id);
    props.delMsg(props.item.id)

  }

  return (
    //      {
    //           msg:'注册失败',
    //           type:'danger',
    //           id:10002
    //       }
    // className='alert alert-success'
    <div className={classnames('alert', { 'alert-success': props.item.type === 'success', 'alert-danger': props.item.type === 'danger' })}>
      {props.item.msg}
      <div className='button' onClick={closeHandle} style={{ display: 'inline-block', float: 'right' }}>X</div>
    </div>
  )
}

// 两个回调函数，每个回调函数都有return ,返回给你的子组件
// 第一个回调函数： state=> 仓库里的所有状态
// 第2个回调函数：  dispatch 触发指定action  删除

export default connect(null, dispatch => (
  {
    delMsg: (id) => { dispatch({ type: 'del_flash', payload:id}) },
  }
)
)(FlashMsg)

// export default connect(null,dispatch=>{
//   return {
//     delMsg:(id)=>{dispatch({type:'del_flash',id})}
//   }
// })(FlashMsg)