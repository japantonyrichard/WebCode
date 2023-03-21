import React, { Component } from 'react'
// 导入
import MyContext from './MyContext'

export default class Cent4 extends Component {
    static contextType=MyContext;
    render() {
        console.log(this);  //context {}
        return (
            <div>Cent4
                <p>
                    {this.context.data.msg}
                </p>
            </div>
        )
    }
}

// 第二种写法：
// Cent4.contextType=MyContext;