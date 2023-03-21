import React, { Component } from 'react'
import Child from './Child'

export default class PropParent extends Component {
  render() {
    return (
      <div>
          <h1>父组件</h1>
          <hr/>
          <Child totalNum={100} msg={true} count={11}/>
      </div>
    )
  }
}
