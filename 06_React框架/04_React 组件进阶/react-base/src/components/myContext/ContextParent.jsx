import React, { Component } from 'react'
import Ceng2 from './Ceng2'
// 导入
import MyContext from './MyContext'

export default class ContextParent extends Component {
    constructor() {
        super()
        this.state = {
            num: 10,
            msg:'qqqqq'
        }
    }

    changeNum=()=>{
        this.setState({
            num:this.state.num+5
        })
    }


    render() {
        return (
            <div>
                <h1>最顶层的组件 --祖先</h1>
                <p>num：{this.state.num}</p>
                <p>
                    <button onClick={this.changeNum}>修改num</button>
                </p>
                <hr />
                {/* <Ceng2 num={this.state.num}/> */}

                {/* 2、提供数据   只传数据*/}
                {/* <MyContext.Provider value={this.state}>
                    <Ceng2/>
                </MyContext.Provider> */}

                <MyContext.Provider value={{data:this.state,changeFn:this.changeNum}}>
                    <Ceng2 />
                </MyContext.Provider>

            </div>
        )
    }
}
