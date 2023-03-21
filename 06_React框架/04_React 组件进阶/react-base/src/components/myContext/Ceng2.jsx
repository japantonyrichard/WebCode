import React, { Component } from 'react'
import Ceng3 from './Ceng3'

export default class Ceng2 extends Component {
  render() {
    return (
      <div>
          <h2>第二层</h2>
          <hr />
          {/* <Ceng3 num={this.props.num}/> */}
          <Ceng3 />
      </div>
    )
  }
}
