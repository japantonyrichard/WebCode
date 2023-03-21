import React from 'react'
import Hello from './Hello'

export default class Header extends React.Component{
    render(){
        console.log(this); //this 指向→实例
        return (
            <div>
                <h2>我的第一个类组件</h2>
                <Hello></Hello>
            </div>
        )
    }

}

// export default Header