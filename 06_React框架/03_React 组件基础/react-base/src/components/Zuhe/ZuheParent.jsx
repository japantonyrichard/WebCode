import React, { Component } from 'react'
import Child from './Child'
import Dialog from './Dialog'
import QR from '../../assets/images/QR.png'

export default class ZuheParent extends Component {
    state = {
        isShow1: false,
        isShow2: false,
    }
    // 显示扫描登陆框
    showQRLogin = () => {
        this.setState({
            isShow1: true
        })
    }
    // 显示账号登陆框
    showUseLogin = () => {
        this.setState({
            isShow2: true
        })
    }
    // 隐藏登录框
    hideLogin = () => {
        this.setState({
            isShow1: false,
            isShow2:false
        })
    }
    render() {
        return (
            <div>
                <h1>ZuheParent 父组件</h1>
                <button onClick={this.showQRLogin}>扫描登陆</button>
                <button onClick={this.showUseLogin}>账号登陆</button>

                <hr />
                {
                    this.state.isShow1 ? <Dialog title='扫码登陆' hideLogin={this.hideLogin}>
                        <img src={QR} alt="" />
                    </Dialog> : ''
                }

                {
                    this.state.isShow2 ? <Dialog title='账号登陆' hideLogin={this.hideLogin}>
                        <form>
                            <p>
                                账号：<input />
                            </p>
                            <p>
                                密码：<input /></p>
                        </form>
                    </Dialog> : ''
                }













                {/* <Child>
              <h3>213</h3>
              dfs
              <p>1232131321</p>
          </Child> */}


            </div>
        )
    }
}
