

import React, { useRef } from 'react'
import { connect } from 'react-redux';
import logo from '../../assets/images/logo.jpg'
import {setUserAction} from '../../store/action/actions'
import './Login.less' 

function Login(props) {
    // 创建ref  :获取DOM元素；
    let myRef = useRef();

    // 去登录
    function login() {
        // 获取用户名
        let val = myRef.current.value;
        // 1. 把用户信息存到Redux（token,用户名，islogin）
        props.setUser(val)
        // 2. 登录信息持久化到本地
        localStorage.setItem('username',val)

        // 3. 跳转页面  返回上一页
        props.history.goBack();


    }


    return (
        <div>
            {/* 背景 */}
            <div className='login-bg'>
                <img className='login-logo' src={logo} alt="" />
            </div>

            {/* 登录窗口 */}
            <div className="login-box">
                <div>
                    {/* 受控组件，非受控组件 */}
                    <input className="inp" ref={myRef} type="text" placeholder='用户名' />
                </div>
                <div>
                    <input className="inp" type="text" placeholder='密码' />
                </div>
                <button onClick={login}>登录</button>

            </div>





        </div>
    )
}


export default connect(null,dispatch=>({
    // {type:'',payload:username}
    setUser:(username)=>{dispatch(setUserAction(username))}
}))(Login)