// rcc
import React, { Component } from 'react'
import { Input } from 'antd';
import './Home.less'

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* 1.搜索区域 */}
        <div className="main">
          {/* 列表 */}
          <div className="main-content">
            <ul className='main-info'>
              <li>
                今日
                <div className="info">
                  法拍快讯
                </div>
              </li>
              <li>
                8套
                <div className="info">
                  今日上拍
                </div>
              </li>
              <li>
                9套
                <div className="info">
                  今日成交
                </div>
              </li>
              <li>
                14套
                <div className="info">
                  今日流拍
                </div>
              </li>
              <li>
                1套
                <div className="info">
                  今日撤拍
                </div>
              </li>
            </ul>
          </div>
          {/* 搜索 */}
          <div className="main-search">
            <Input placeholder="搜索小区房源" />
          </div>
        </div>
      </div>
    )
  }
}
