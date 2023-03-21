import React from 'react'
import MyBottomNav from '../../components/MyBottomNav/MyBottomNav'

import  './Layout.less'

export default function Layout(props) {
  return (
    <div>
        {/* 路由出口 */}
        <div className="content">
            {
                props.children
            }
        </div>
        {/* 公共底部 */}
        <div className="footer">
           <MyBottomNav />
        </div>
    </div>
  )
}
