import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import City from '../pages/City/City'
import Home from '../pages/Home/Home'
import Layout from '../pages/Layout/Layout'
import Live from '../pages/Live/Live'
import Mine from '../pages/Mine/Mine'
import Search from '../pages/Search/Search'
import Shop from '../pages/Shop/Shop'
import HouseDetail  from '../pages/HouseDetail/HouseDetail'
import Login from '../pages/Login/Login'
import Cart from '../pages/Cart/Cart'


export default function AppRouter() {
    return (
        <>
            <Router>

                <Switch>
                  
                    {/* 城市选择列表 */}
                    <Route path={'/city'} component={City} />
                      {/* 搜索 */}
                    <Route path={'/search/:val'} component={Search}/>
                     {/* 房屋详情 */}
                     <Route path={'/detail/:id'} component={HouseDetail}/>
                     {/* 登录 */}
                     <Route path={'/login'} component={Login}/>
                      {/* 购物车列表 */}
                      <Route path={'/cart'} component={Cart}/>
                    


                    <Layout>
                        <Route exact path={'/'} component={Home} />
                        <Route path={'/shop'} component={Shop} />
                        <Route path={'/live'} component={Live} />
                        <Route path={'/mine'} component={Mine} />

                    </Layout>
                </Switch>
            </Router>

        </>
    )
}
