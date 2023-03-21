import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Dropdown, Button, Space } from 'antd';
import api from '../../api/index'
import logo from '../../assets/imgs/logo.jpg'
import './MyMenu.less'


export default class MyMenu extends Component {

    state = {
        cities: [], //城市下拉列表
    }

    // 页面一加载
    componentDidMount() {
        this.getCityList();
    }
    /**
     * 获取城市下拉列表
     */
    getCityList() {
        api.getCities().then(res => {
            // console.log(res.data.data);  //[{},{},{}]
            this.setState({
                cities: res.data.data
            })
        }).catch(err=>{
            console.log(err);
        })
    }

    render() {
        const menu = (
            <Menu>
                {
                    this.state.cities.map(item => {
                        return (
                            <Menu.Item key={item.id}>
                                <a target="_blank" rel="noopener noreferrer" href="##">
                                    {item.name}
                                </a>
                            </Menu.Item>
                        )
                    })
                }

            </Menu>
        );

        return (
            <div>
                <div className="menu">
                    <div className="contaner">
                        {/* 左侧 */}
                        <div className="left">
                            <img src={logo} width={180} height={'72px'} alt="" />
                            {/* 城市切换 */}
                            <Dropdown overlay={menu} placement="bottom">
                                <Button>北京</Button>
                            </Dropdown>
                        </div>
                        {/* 右侧 */}
                        <div className="right">
                            <NavLink exact to={'/'}>首页</NavLink>
                            <NavLink to={'/house'}>法拍房源</NavLink>
                            <NavLink to={'/news'}>法拍咨询</NavLink>
                            <NavLink to={'/success'}>成功案例</NavLink>
                            <NavLink to={'/join'}>登录注册</NavLink>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
