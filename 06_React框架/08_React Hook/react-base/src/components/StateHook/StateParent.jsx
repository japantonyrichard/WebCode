import React, { Component } from 'react'
import CompClass from './CompClass'
import CompFun from './CompFun'

export default class StateParent extends Component {
  render() {
    return (
      <div>
          <h1>State Hook</h1>
          <hr />
          <CompClass/>
          <hr />
          <CompFun/>

      </div>
    )
  }
}
