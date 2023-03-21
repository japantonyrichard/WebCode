import React, { Component } from 'react'
import { Input } from 'antd';

import './Home.less'
import Ignore from './Ignore/Ignore';
import api from '../../api';
import Service from './Service/Service';
import Story from './Story/Story';

export default class Home extends Component {
  state = {
    houseInfo: {}, //当前城市的房源信息
    ignoreList: [], //捡漏房源列表
    storyList: [],//成功故事
  }

  // 生命周期
  componentDidMount() {
    this.loadHouseInfo();
    this.loadIgnoreList();
    this.loadSuccessStory();
  }
  /**
   * 获取当前城市的房源信息
   */
  loadHouseInfo() {
    api.getHouseInfo({ city: 110100 }).then(res => {
      console.log(res.data.data);
      this.setState({
        houseInfo: res.data.data
      })
    }).catch(error => {
      console.log(error);
    })
  }
  /**
   * 加载捡漏房源
   */
  loadIgnoreList() {
    api.getIgnoreList({ pageNo: 0, pageSize: 4, city: 110100 }).then(res => {
      // console.log('=============',res.data.data.content);
      this.setState({
        ignoreList: res.data.data.content
      })
    }).catch(err => {
      console.log(err);
    })
  }
  /**
   * 加载成功故事
   */
  loadSuccessStory() {
    api.getSuccessStory({ pageNo: 0, pageSize: 4, title: "法拍房真实案例", authorId: "129465", sortId: 1, city: 110100 }).then(res => {
      console.log(res.data);
      this.setState({
        storyList: res.data.data.content
      })
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    const { addCount, strikeCount, overCount, cancelCount } = this.state.houseInfo;
    return (
      <div>
        {/* 1、搜索区域 */}
        <div className="main">
          {/* 列表*/}
          <div className="main-content">
            <ul className='main-info'>
              <li>
                今日
                <div className="info">
                  法拍快讯
                </div>
              </li>
              <li>
                {addCount} 套
                <div className="info">
                  今日上拍
                </div>
              </li>
              <li>
                {strikeCount} 套
                <div className="info">
                  今日成交
                </div>
              </li>
              <li>
                {overCount} 套
                <div className="info">
                  今日流拍
                </div>
              </li>
              <li>
                {cancelCount} 套
                <div className="info">
                  今日撤拍
                </div>
              </li>
            </ul>

          </div>
          {/* 搜索 */}
          <div className="main-search">
            <Input placeholder="搜索...." />
          </div>
        </div>


        {/* 3、捡漏房源  Ignore */}
        <div className="w">
          <h2 className='title'>捡漏房源 | <span>IGNORE HOUSES</span></h2>
          <Ignore ignore={this.state.ignoreList} />
        </div>


        {/* 4、全程服务 */}
        <div className="w">
          <h2 className='title'>全程服务 | <span>FULL SERVICE</span></h2>
          <Service />
        </div>

        {/* 4、成交故事 */}
        <div className="w">
          <h2 className='title'>成交故事 | <span>SUCCESSFUL CASE</span></h2>
          <Story story={this.state.storyList}/>
        </div>




      </div>
    )
  }
}
