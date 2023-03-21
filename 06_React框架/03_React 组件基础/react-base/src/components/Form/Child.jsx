import React, { Component } from 'react'

export default class Child extends Component {
    state={
        msg:'123'
    }
    demo=()=>{
        console.log(1111);
    }
  render() {
    return (
      <div>Child</div>
    )
  }
}
