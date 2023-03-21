import React, { Component } from 'react'
import Child from './Child';

export default class Input extends Component {
    constructor(){
        super()
        this.state = {
            val:'123'
        }
        // 1、创建唯一ref
        this.myRef=React.createRef();
        this.h3Ref=React.createRef();
        this.childRef=React.createRef();

    }
    // 修改state数据
    changVal=(e)=>{
        // 获取文本框输入的值
        console.log(e.target.value);
        // this.setState({
        //     val:e.target.value
        // })
    }
    // 获取文本框输入的值
    getInput=()=>{
        console.log(this.myRef.current);
        console.log(this.myRef.current.value);

    }
    // 点我改变颜色
    changeColor=()=>{
        console.log(this.h3Ref.current);
        this.h3Ref.current.style.color='red';
    }
    //点我获取子组件 
    getChild=()=>{
        console.log(this.childRef.current);
        console.log(this.childRef.current.state.msg);

        this.childRef.current.demo();
    }
    render() {
        return (
            <div>
                <h2>受控组件：状态受React管控的组件</h2>
                <p>
                    <input type="text" placeholder='ssss' value={this.state.val} onChange={this.changVal}/>
                    <input type="text" placeholder='ssss' value={this.state.val} onChange={(e)=>{this.setState({val:e.target.value})}}/>
                </p>
                <hr />
                <h2>非受控组件：状态不受React管控的组件</h2>
                <p>
                    {/* 2、绑定到元素 */}
                    <input type="text" name="" id="" ref={this.myRef} />
                    
                </p>
                <p>
                    <button onClick={this.getInput}>获取文本框输入的值</button>
                </p>
                <h3 ref={this.h3Ref} onClick={this.changeColor}>点我改变颜色</h3>
                <p>
                    <button onClick={this.getChild}>点我获取子组件</button>
                </p>
                <hr />
                <Child ref={this.childRef}/>
            </div>
        )
    }
}
