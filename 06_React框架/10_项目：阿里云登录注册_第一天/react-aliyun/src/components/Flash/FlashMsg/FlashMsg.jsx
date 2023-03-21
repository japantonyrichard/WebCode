import React from 'react'
import classnames from 'classnames'

export default function FlashMsg(props) {
    console.log('==========',props.item);
  return (
    // className='alert alert-success'
    <div  className={classnames('alert',{'alert-success':props.item.type==='success','alert-danger':props.item.type==='danger'})}>
        {props.item.msg}
    </div>
  )
}
