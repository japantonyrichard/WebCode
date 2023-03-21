// 快捷键 rcc
import React, { Component } from 'react'

export default class Data extends Component {
    constructor() {
        super();
        // 第一种定义状态：特点：1.只能组件内部使用 2.数据是响应式的 3.访问：this.state.xxx
        this.state = {
            msg: 'Hi,React!',
            count: 10,
            obj: {
                name: '大毛',
                age: 18
            }
        }
    }

    // 第二种定义状态：特点：1.只能组件内部使用 2.数据不是响应式的，视图（看到的界面 html）不更新 3.访问：this.xxx
    num = 100;

    changeMsg=()=>{
        // 界面立马更新了
        this.setState({
            msg:'你好，React！'
        })
    }

    changeNum=()=>{
        this.num = 200; // 修改了，界面不更新
        console.log(this.num); // 200
    }

    render() {
        return (
            <div>
                <h2>React 状态</h2>
                <p>msg:{this.state.msg}</p>
                <p>num:{this.num}</p>

                {/* 定义事件： on + 事件名称  组成，驼峰法 */}
                <p>
                    <button onClick={this.changeMsg}>修改msg</button>
                </p>

                <p>
                    <button onClick={this.changeNum}>修改num</button>
                </p>
            </div>
        )
    }
}
