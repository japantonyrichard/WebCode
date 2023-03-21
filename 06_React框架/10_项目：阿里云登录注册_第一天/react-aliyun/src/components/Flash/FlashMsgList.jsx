


import React from 'react'
import { connect } from 'react-redux'
import FlashMsg from './FlashMsg/FlashMsg'


function FlashMsgList(props) {
    return (
        <div>
            {
                props.flashList.map(item => {
                    return <FlashMsg item={item} key={item.id}/>
                })

            }
        </div>
    )
}

// 两个回调函数;必须要有返回值
export default connect(state => {  //获取仓库里的所有状态
    console.log(state);

    return {
        flashList: state.flash
    }

},null)(FlashMsgList)