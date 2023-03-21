import React, { Component } from 'react'

export default class CompClass extends Component {

    constructor() {
        super()
        this.state = {
            num: 10,
        }
    }

    render() {
        return (
            <div>
                <h2>类组件</h2>
                <p>
                    num:{this.state.num}
                </p>
                <p>
                    <button onClick={()=>{this.setState({num:this.state.num+5})}}>num+5</button>
                </p>
            </div>
        )
    }
}
