




import React from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { DEL_USER } from '../../redux/actions/action-type'
import { delUserAction } from '../../redux/actions/actions'
import style from './Header.module.less'

function Header(props) {

  const history = useHistory();

  // 退出登陆
  function logout() {
    props.logout();
    // 清除本地存储
    localStorage.removeItem('user')
    // 返回登录页
    history.push('/signin');
  }
  return (
    <div className={style.Header}>
      <Link to='/'>
        <img className={style.logo} src={logo} alt="" />
      </Link>
      <h2 className={style.title}>
        {
          props.auth.user && props.auth.user.token ?
            <span>
              Hello,{props.auth.user.username}!
              <a onClick={logout}> 退出登陆</a>
            </span> :
            <div>
              <Link to='/signin'>登录 </Link>
              <Link to='/signup'> 注册</Link>
            </div>
        }




      </h2>
    </div>
  )
}

export default connect(state => ({
  auth: state.auth
}), dispatch => ({
  // logout: () => dispatch({ type: DEL_USER })
  logout: () => dispatch(delUserAction())
}))(Header)
