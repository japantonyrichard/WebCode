// rcc
import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
import MyMenu from '../components/MyMenu/MyMenu'

export default class Layout extends Component {
    render() {
        return (
            <div>
                {/* 顶部导航 */}
                <div>
                    {/* <NavLink to={'/'}>首页</NavLink>
                    <NavLink to={'/house'}>房屋</NavLink>
                    <NavLink to={'/news'}>新闻</NavLink>
                    <NavLink to={'/success'}>成功案例</NavLink>
                    <NavLink to={'/join'}>登录注册</NavLink> */}

                    <MyMenu/>
                </div>
                <div>
                    {/* 路由出口 */}
                    {this.props.children}
                </div>
            </div>
        )
    }
}
