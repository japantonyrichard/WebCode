import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom'
import api from '../../../api';
import { ADD_USER } from '../../../redux/actions/action-type';
import { addUserAction } from '../../../redux/actions/actions';

function SignInForm(props) {
    // 引入 history
    let histoty = useHistory();

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    function onSubmit(e) {
        // 阻止默认行为
        e.preventDefault();
        // 调用登录接口
        api.toLogin({ username, password }).then(res => {
            console.log('========',res.data);
            if (res.data.status === 200) {  //成功
                // 1、提示框
                //      {
                //           msg:'注册失败',
                //           type:'danger',
                //           id:10002  
                //       }
                // 0.221312
                props.addMsg({
                    msg: '登录成功！',
                    type: 'success',
                    id: Math.random().toString().slice(2)
                })
                // 2、把用户信息存到redux
                props.setUser({
                    token:res.data.token,
                    username:res.data.username
                })

                // 3、持久化用户信息，
                localStorage.setItem('user',JSON.stringify({
                    token:res.data.token,
                    username:res.data.username
                }))

                // 4、跳转页面 首页
                histoty.replace('/')
            } else {  //失败
                props.addMsg({
                    msg: res.data.msg,
                    type: 'danger',
                    id: Math.random().toString().slice(2)
                })

            }
        }).catch(err => {
            console.log(err);
        })

    }

    return (
        <div className='signup'>
            <h2 className='title'>欢迎登录阿里云</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => { setUsername(e.target.value) }}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg btn-block">登录</button>
                </div>
            </form>
        </div>
    )
}


export default connect(null, dispatch => ({
    addMsg: (msgObj) => { dispatch({ type: 'add_flash', payload: msgObj }) },
    // setUser:(payload)=>{dispatch({type:ADD_USER,payload})}
    setUser:(payload)=>{dispatch(addUserAction(payload))}
}))(SignInForm)