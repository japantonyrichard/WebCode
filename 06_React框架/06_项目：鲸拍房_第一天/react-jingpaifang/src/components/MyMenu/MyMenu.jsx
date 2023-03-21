import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Dropdown } from 'antd';
import api from '../../api/index'
import logo from '../../assets/images/logo.jpg'
import './MyMenu.less'
// import axios from 'axios';



export default class MyMenu extends Component {

    // state = {
    //     cities: [], // 城市下拉列表
    // }

    // // 页面一加载
    // componentDidMount() {
    //     // axios.get('http://www.jingpaifang.cn/api/api/api/app/available/cities')
    //     // .then(res=>{
    //     //     console.log(res);
    //     // })

    //     // api.getCities().then(res=>{
    //     //     console.log(res);
    //     // })

    //     // this.getCityList();
    // }
    /**
     * 获取城市下拉列表
     */
    // getCityList() {
    //     api.getCities().then(res => {
    //         console.log(res.data.data);  //[{},{},{}]
    //         this.setState({
    //             cities: res.data.data
    //         })
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

    render() {

        const items = [
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="##">
                        北京
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="##">
                        上海
                    </a>
                ),
            },
            {
                key: '3',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="##">
                        重庆
                    </a>
                ),
            },
        ];

        return (
            <div>
                <div className="menu">
                    <div className="contaner">
                        {/* 左侧 */}
                        <div className="left">
                            <img src={logo} width={180} height={'72px'} alt="" />
                            {/* 城市切换 */}
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="bottom"
                                arrow
                            >
                                <Button>北京</Button>
                            </Dropdown>
                        </div>
                        {/* 右侧 */}
                        <div className="right">
                            <NavLink exact to={'/'}>首页</NavLink>
                            <NavLink to={'/house'}>法拍房源</NavLink>
                            <NavLink to={'/news'}>法拍资讯</NavLink>
                            <NavLink to={'/success'}>成功案例</NavLink>
                            <NavLink to={'/join'}>登录注册</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// ----------------------------------------- api无效 ----------------------------------------------

// import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
// import { Menu, Dropdown, Button, Space } from 'antd';
// import api from '../../api/index'
// import logo from '../../assets/images/logo.jpg'
// import './MyMenu.less'


// export default class MyMenu extends Component {

//     state = {
//         cities: [], //城市下拉列表
//     }

//     // 页面一加载
//     componentDidMount() {
//         this.getCityList();
//     }
//     /**
//      * 获取城市下拉列表
//      */
//     getCityList() {
//         api.getCities().then(res => {
//             console.log(res.data.data);  //[{},{},{}]
//             this.setState({
//                 cities: res.data.data
//             })
//         }).catch(err=>{
//             console.log(err);
//         })
//     }

//     render() {
//         const menu = (
//             <Menu>
//                 {
//                     this.state.cities.map(item => {
//                         return (
//                             <Menu.Item key={item.id}>
//                                 <a target="_blank" rel="noopener noreferrer" href="##">
//                                     {item.name}
//                                 </a>
//                             </Menu.Item>
//                         )
//                     })
//                 }

//             </Menu>
//         );

//         return (
//             <div>
//                 <div className="menu">
//                     <div className="contaner">
//                         {/* 左侧 */}
//                         <div className="left">
//                             <img src={logo} width={180} height={'72px'} alt="" />
//                             {/* 城市切换 */}
//                             <Dropdown overlay={menu} placement="bottom">
//                                 <Button>北京</Button>
//                             </Dropdown>
//                         </div>
//                         {/* 右侧 */}
//                         <div className="right">
//                             <NavLink exact to={'/'}>首页</NavLink>
//                             <NavLink to={'/house'}>法拍房源</NavLink>
//                             <NavLink to={'/news'}>法拍咨询</NavLink>
//                             <NavLink to={'/success'}>成功案例</NavLink>
//                             <NavLink to={'/join'}>登录注册</NavLink>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         )
//     }
// }
