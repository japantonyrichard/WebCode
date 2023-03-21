import React, { Component } from 'react'
import Child from './Child'

export default class RefParent extends Component {

    constructor() {
        super();
        // 1、创建
        this.myRef=React.createRef();
    }

    getChild=()=>{
        console.log(this.myRef.current);
        this.myRef.current.style.color='red'
    }

    render() {
        return (
            <div>
                <h1>RefParent</h1>
                <hr />
                {/* 2、绑定 */}
                <Child  ref={this.myRef}/>
                <button onClick={this.getChild}>获取子组件</button>
            </div>
        )
    }
}
