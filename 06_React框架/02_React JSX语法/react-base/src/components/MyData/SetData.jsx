// rcc
import React, { Component } from 'react'

export default class SetData extends Component {
    constructor(){
        super()
        this.state={
            // msg:'123'
            count:10
        }
    }

    // // 类组件定义状态的简写方式：
    // state = {
    //     msg: '123'
    // }

    // 修改count的值  --- 通过对象的方式
    // 对象语法：
    // 更新可能是异步的，当在事件环中使用this.setState对象语法就是同步。
    // 出于性能考虑，React可能会把多个setState()调用合并成一个调用，并且取最后一次
    // 遇到宏任务和微任务时，就变成同步的了。
    // 宏任务：setTimeout setInterval   微任务：Promise
    changeCountByObject=()=>{
        this.setState({
            // count:this.state.count+5    // 异步
            count:this.state.count+1    // 异步
        },()=>{ // 后面加上回调函数
            console.log('-------------------',this.state.count);  
        })
        console.log(this.state.count);  // 同步 10 先打印没加的10

        this.setState({
            // count:this.state.count+5    // 异步
            count:this.state.count+2    // 异步
        },()=>{ // 后面加上回调函数
            console.log('-------------------',this.state.count);
        })
        // console.log(this.state.count);  // 同步 10 先打印没加的10

        this.setState({
            count:this.state.count+5    // 异步
        },()=>{ // 后面加上回调函数
            console.log('-------------------',this.state.count); // 15  
        })
        // console.log(this.state.count);  // 同步 10 先打印没加的10   // 只用了最后一次的结果，前面的不工作

        // 同步
        setTimeout(() => {
            this.setState({
                count: this.state.count + 5   //20
            })
        }, 1000);

        Promise.resolve().then(() => {
            this.setState({
                count: this.state.count + 5   //25
            })
        })
    }

    // 函数方式修改状态state 是同步的      // 函数语法：永远都是同步的，一步一步来，拿的是上次计算结果的state
    changeCountByFunction=()=>{
        this.setState((state,props)=>{
            return{
                count:state.count+5
            }
        })
        this.setState((state,props)=>{
            return{
                count:state.count+5
            }
        })
        this.setState((state,props)=>{
            return{
                count:state.count+5
            }
        })
    }
    
    render() {
        return (
            <div>
                <h2>修改state的方式</h2>
                <p>count:{this.state.count}</p>
                <p>
                    <button onClick={this.changeCountByObject}>通过对象方式 修改count</button>
                </p>

                <p>
                    <button onClick={this.changeCountByFunction}>通过函数方式 修改count</button>
                </p>

                {/* {this.state.msg} */}
            </div>
        )
    }
}
