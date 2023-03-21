import React, { Component } from 'react'
import { Link, NavLink,withRouter } from 'react-router-dom'

import './main.css'

class Main extends Component {
    /**
     * 跳转
     */
    toPage(url){
        console.log(this.props);
        this.props.history.push(url)
    }
    render() {
        return (
            <div>
                <h2>文档界面</h2>
                {/* 左侧：路由出口 */}
                <div style={{ float: 'left', width: '500px' }}>
                    {this.props.children}
                </div>
                {/* 右侧：导航链接 */}
                <div className="nav-right" style={{ float: 'right', width: '200px' }}>
                    {/* <ul>
                        <li>
                            <Link to={'/doc/hello'}>Hello React</Link>
                        </li>
                        <li>
                            <Link to={'/doc/use'}> React 使用</Link>
                        </li>
                        <li>
                            <Link to={'/doc/ele'}>React 渲染</Link>
                        </li>
                    </ul> */}


                    {/* 路由高亮 */}
                    {/* <ul>
                        <li>
                            <NavLink to={'/doc/hello'}>Hello React</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/doc/use'}> React 使用</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/doc/ele'}>React 渲染</NavLink>
                        </li>
                    </ul> */}
                    {/* 编程式导航 */}
                    <ul>
                        <li onClick={this.toPage.bind(this,'/doc/hello')}>Hello React</li>
                        <li onClick={this.toPage.bind(this,'/doc/use')}>React 使用</li>
                        <li onClick={this.toPage.bind(this,'/doc/ele')}>React 渲染</li>
                    </ul>
                </div>
            </div>
        )
    }
}

// withRouter 高阶组件包裹，导出；当前组件就有了this.props.history
export default withRouter(Main)