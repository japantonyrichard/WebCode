


import React, { Component } from 'react'

class CompParams extends Component {
    render() {
        return (
            <div>
                <h2>带参数的高阶组件</h2>
                {this.props.title}
            </div>
        )
    }
}

// 不带参数
// function HOCParams(Comp){ //接受组件
//     return class extends Component{
//         render(){
//             return <Comp title='123'/>
//         }
//     }
// }

function HOCParams(val, fn) { //接受组件

    console.log('接受到的参数：', val, fn);

    return function (Comp) {
        return class extends Component {
            render() {
                return <Comp title='123' />
            }
        }
    }
}

export default HOCParams({val:'456'}, function () { })(CompParams)

// 以后项目中经常用：
// connect()(CompParams)