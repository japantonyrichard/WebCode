import React, { Component } from 'react'
import style from './House.module.less'
import house from '../../assets/imgs/house.png'
import MyPagination from '../../components/MyPagination/MyPagination'
import api from '../../api'

export default class House extends Component {
  state = {
    houseData: {},//列表
  }
  // 页面一加载，加载第0页数据
  componentDidMount() {
    this.loadHouseList(0);
  }
  /**
   * 根据页码去请求数据
   * @param {页码} pageNo 
   */
  loadHouseList = (pageNo) => {
    api.getHouse({
      auctionStageId: [],
      auctionStatusId: [],
      auctionType: [],
      businessCircleIds: [],
      city: 110100,
      houseTypeId: [],
      keyword: "",
      limitBuy: [],
      pageNo: pageNo,
      pageSize: 21,
      room: [],
      sortId: 1,
      subwayStationIds: [],
    }).then(res => {
      console.log('housee=========', res.data.data);
      this.setState({
        houseData: res.data.data
      })
    }).catch(err => {
      console.log(err);
    })
  }
  /**
   * 状态提升：父组件接收子组件传递过来的页码
   */
  getPageNo = (pageNo) => {
    // console.log('父组件接收子组件传递过来的页码:',pageNo);
    this.loadHouseList(pageNo);
  }
  render() {
    return (
      <div>
        <div className={style.w}>
          {/* 1、选择 */}
          <img src={house} alt="" />
          {/* 2、列表渲染 */}
          <div className={style.content}>
            {/* 自己去写列表渲染 */}
          </div>

          {/* 分页组件 */}

          <MyPagination total={this.state.houseData.total} pageSize={20} getPage={this.getPageNo} />

        </div>




      </div>
    )
  }
}
