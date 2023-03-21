import React, { Component } from 'react'
import logo from '../../../assets/imgs/logo.jpg'
import './Ignore.less'

export default class Ignore extends Component {
  render() {
    console.log('接受父组件传递过来的数据：',this.props.ignore);
    return (
      <>
        <ul className="list">
          {
            this.props.ignore.map(item => {
              return (
                <li className='item' key={item.uniqueId}>
                  <div className="icon">
                    拍卖中
                  </div>
                  <img src={item.picture} alt="" width={290} height={220} />
                  <div className="info">
                    <div className="th">
                      {item.houseLocation} {item.shortTitle}
                    </div>
                    <div>{item.floorArea}㎡ | {item.orientation} | {item.roomHall}</div>
                    <div className="money">
                      起拍价 <span className='num'>{item.startPrice/10000}万 </span>
                      市场价 <span>{item.marketPrice/10000}万</span>
                    </div>
                    <div className="tags">
                      <span>{item.discount}</span>
                      <span>{item.auctionStageValue}</span>
                      <span>{item.houseType}</span>
                    </div>
                    <ul className="time">
                      <li>{item.auctionStageValue}</li>
                      <li>{item.startTime} 结束</li>
                    </ul>
                  </div>
                </li>
              )
            })
          }



        </ul>
      </>
    )
  }
}
