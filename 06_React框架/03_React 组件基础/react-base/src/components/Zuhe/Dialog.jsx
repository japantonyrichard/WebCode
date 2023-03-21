import React, { Component } from 'react'
import './Dialog.css'

export default class Dialog extends Component {
    // 关闭哦
    close = () => {
        this.props.hideLogin();
    }
    render() {
        return (
            <div className='bg'>
                <div className="dialog">
                    {/* 头部 */}
                    <div className="header">
                        <span>{this.props.title}</span>
                        <span className='close' onClick={this.close}>X</span>
                    </div>
                    {/* 中间  预留空间 */}
                    <div>
                        {this.props.children}
                    </div>

                    {/* 底部 */}
                    <div className="footer">
                        立即注册
                    </div>
                </div>
            </div>
        )
    }
}
