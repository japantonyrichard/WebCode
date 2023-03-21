import React, { Component } from 'react'
// 1、导入
import PropTypes from 'prop-types'

export default class Child extends Component {
  render() {
    return (
      <div>
          <h2>分页器</h2>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          ...
          <span>总页数：{this.props.totalNum}</span>
          <p>
              {
                  this.props.msg?'是':'不是'
              }
          </p>
      </div>
    )
  }
}

Child.propTypes={
    totalNum:PropTypes.number,
    msg:PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    // 必传
    count:PropTypes.number.isRequired
}

// 设置默认值：
// 功能：就是在使用组件的时候，不传参数，就取默认值；传了，就用传递的值
Child.defaultProps={
    totalNum:200
}