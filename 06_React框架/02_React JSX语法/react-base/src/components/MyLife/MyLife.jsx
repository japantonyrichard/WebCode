import React, { Component } from 'react'
import Son from './Son'

export default class MyLife extends Component {

    state = {
        isShow: true,
        msg: 'Hi，son!'
    }
    changeShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        return (
            <div>
                <h1>生命周期</h1>
                <p>
                    <button onClick={()=>{this.setState({msg:'我是你爸爸'})}}>父组件更新自己的msg</button>

                </p>
                <p>
                    <button onClick={this.changeShow}>显示隐藏子组件</button>
                </p>

                <hr />
                {
                    this.state.isShow ? <Son msg={this.state.msg} /> : ''
                }
            </div>
        )
    }
}
