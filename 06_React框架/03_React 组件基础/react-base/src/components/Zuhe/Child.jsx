import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
          <h2>Child 子组件</h2>
          {/* 预留空间 */}
          {this.props.children}
      </div>
    )
  }
}
