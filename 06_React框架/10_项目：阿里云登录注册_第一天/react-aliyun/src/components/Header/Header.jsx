import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import style from './Header.module.less'

export default function Header() {
  return (
    <div className={style.Header}>
        <Link to='/'>
            <img className={style.logo} src={logo} alt="" />
        </Link>
        <h2 className={style.title}>
            <Link  to='/signin'>登录 </Link>
            <Link  to='/signup'> 注册</Link>

        </h2>
    </div>
  )
}
