import React, { Component } from 'react'
import showTime from './showTime'

class Time2 extends Component {
  render() {
    return (
      <div>
          <h2>Time2 加载时间---{this.props.lodingTime}</h2>
      </div>
    )
  }
}

export default  showTime(Time2);


