import React, { Component } from 'react'
import NewComp,{Comp} from './Comp'
import CompParams from './CompParams'
import Time1 from './Time1'
import Time2 from './Time2'

export default class HOCParent extends Component {
  render() {
    return (
      <div>
          <h1>父组件</h1>
          <hr />
          {/* 原来的组件：
          <Comp/>
          <hr />
          新的组件：
          <NewComp /> */}

          {/* <Time1/>
          <hr />
          <Time2/> */}
          <CompParams />
      </div>
    )
  }
}
