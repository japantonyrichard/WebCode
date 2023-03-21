import React, { Component } from 'react'

import MyMenu from '../components/MyMenu/MyMenu'
import MyFooter from '../components/MyFooter'

export default class Layout extends Component {
  render() {
    return (
      <div>
        {/* 顶部导航 */}
        <div>
          <MyMenu />
        </div>

        <div>
          {/* 路由出口 */}
          {this.props.children}
        </div>

        {/* 公共底部*/}
        <div style={{marginTop:'40px'}}>
          <MyFooter />
        </div>
      </div>
    )
  }
}
