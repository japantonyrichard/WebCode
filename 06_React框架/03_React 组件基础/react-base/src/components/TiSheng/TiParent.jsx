import React, { Component } from 'react'
import Child from './Child'

export default class TiParent extends Component {
    state = {
        msg:'我是小头爸爸',
        num:10,
        sonData:''
    }
    // 从子组件获取数据
    getData=(data)=>{
        console.log(data);
        this.setState({
            sonData:data
        })
    }
    // 父组件修改自己的num
    changNum=(data)=>{
        this.setState({
            num:this.state.num+data
        })
    }
    render() {
        return (
            <div>
                <h1>父组件</h1>
                <p>父组件自己的数据 msg : {this.state.msg}</p>
                <p>父组件自己的数据 num : {this.state.num}</p>
                <p>
                    子组件传递过来的数据：{this.state.sonData}
                </p>

                <hr />
                {/* 1、父组件 传递函数给子组件 */}
                <Child msg={this.state.msg} num={this.state.num} getSonData={this.getData} changeParentNum={this.changNum}/>
            </div>
        )
    }
}
