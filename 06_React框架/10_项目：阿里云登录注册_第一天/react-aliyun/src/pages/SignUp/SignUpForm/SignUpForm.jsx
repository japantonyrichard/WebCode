


import React, { useState } from 'react'
import classnames from 'classnames'
import api from '../../../api';
import './SignUpForm.less'
import { connect } from 'react-redux';

function SignUpForm(props) {

    let [username, setUsername] = useState('123');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [confirmPwd, setConfirmPwd] = useState('');
    let [errors, setErrors] = useState({})

    function setUser(e) {
        console.log(e.target.value);
        setUsername(e.target.value)
    }


    // 提交表单
    function onSubmit(e) {
        e.preventDefault();
        // 获取表单元素
        console.log(username, email, password, confirmPwd);

        api.toRegister({ username, email, password, confirmPwd }).then(res => {
            /**
             * {
             *  username: '用户名不能为空', 
             *  password: '密码不能为空', 
             *  email: '不合法的邮箱格式'
             * }
             */
            console.log(res.data);
            if (res.data.status === 200) {
                // 成功
                // alert('注册成功')
                props.addFlashMsg({
                    msg: res.data.msg,
                    type: 'success',
                    id: Math.random().toString().slice(2)
                })

            }
            if (res.data.status === 401) {
                // alert('注册失败')
                props.addFlashMsg({
                    msg: res.data.msg,
                    type: 'danger',
                    id: Math.random().toString().slice(2)
                })
            }
            if (res.data.status === 400) {
                // 验证失败,前端输入不合法
                console.log(res.data.errors);
                setErrors(res.data.errors)
            }

        }).catch(err => {
            console.log(err);
        })

    }

    return (
        <div className='signup'>
            <h2 className='title'>欢迎注册阿里云</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        value={username}
                        onChange={setUser}
                        // className="form-control is-invalid"
                        className={classnames('form-control', { 'is-invalid': errors.username })}
                        placeholder='请输入用户名'
                    />
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        // className="form-control"
                        className={classnames('form-control', { 'is-invalid': errors.email })}
                        placeholder='请输入邮箱'
                    />
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        // className="form-control"
                        className={classnames('form-control', { 'is-invalid': errors.password })}
                        placeholder='请输入密码'
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        value={confirmPwd}
                        onChange={(e) => { setConfirmPwd(e.target.value) }}
                        className={classnames('form-control', { 'is-invalid': errors.confirmPwd })}
                        placeholder='请输入确认密码'
                    />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-lg btn-block">注册</button>
                </div>


            </form>
        </div>
    )
}

export default connect(null, dispatch => {

    return {
        // action {type:'add_flash',{}}
        addFlashMsg: (msgObj) => { dispatch({ type: 'add_flash', payload: msgObj }) }
    }
})(SignUpForm)