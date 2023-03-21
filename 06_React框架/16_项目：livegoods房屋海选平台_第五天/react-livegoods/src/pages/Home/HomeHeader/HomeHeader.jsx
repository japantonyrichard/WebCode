import React from 'react'
import { Link } from 'react-router-dom'
import MyInput from '../../../components/MyInput/MyInput'
import './HomeHeader.less'

export default function HomeHeader(props) {
  return (
    <div className='home-header'>
      {/* 左侧 */}
      <div className="address">
        <Link className='city' to={'/city'}>
          {props.city}
          <i className='iconfont icon-xia'></i>
        </Link>
      </div>
      {/* 中间 搜索 */}
      <div className="search">
        <MyInput />
      </div>

      {/*右侧 */}
      <div className="cart">
        <Link to={'/cart'}>
          <i className='iconfont icon-cart'></i>
        </Link>
      </div>
    </div>
  )
}

