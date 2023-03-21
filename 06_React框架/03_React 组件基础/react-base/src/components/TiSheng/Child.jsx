import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        sonMsg: '我是大头儿子'
    }
    // 触发
    sendParent = () => {
        console.log(1111);
        // 触发父组件方法，带着参数
        this.props.getSonData(this.state.sonMsg)
    }
    // 子组件修改父组件num
    changeParentNum=()=>{
        // this.props.num=20
        // 触发父组件方法,通知父组件去修改num.
        this.props.changeParentNum(30);
    }
    render() {
        return (
            <div>
                <h2>子组件</h2>
                <p>父组件传递过来的数据 msg：{this.props.msg}</p>
                <p>父组件传递过来的数据 num：{this.props.num}</p>
                <p>子组件自己的数据：{this.state.sonMsg}</p>
                <p>
                    {/* 2、子组件 触发父组件方法 */}
                    <button onClick={this.sendParent}>子组件向父组件传递数据</button>
                </p>
                <p>
                    <button onClick={this.changeParentNum}>子组件修改父组件num</button>
                </p>
            </div>
        )
    }
}
