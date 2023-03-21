import React, { Component } from 'react'

export default class detail extends Component {
  render() {
      console.log(this.props);
    return (
      <div>
          <h2>商品详情</h2>
          <p>参数：{this.props.match.params.msg}</p>
      </div>
    )
  }
}
