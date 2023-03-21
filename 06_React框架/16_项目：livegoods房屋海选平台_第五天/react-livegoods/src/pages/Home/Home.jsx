import React, { useEffect, useState } from 'react'
import { getBanner, getHotHouse } from '../../api'
import MyCarousel from '../../components/MyCarousel/MyCarousel'
import HomeHeader from './HomeHeader/HomeHeader'

import './Home.less'
import House from './House/House'
import { connect } from 'react-redux'



function Home(props) {

  // 定义变量
  let [list, setList] = useState([]);//轮播图
  let [houses, setHouses] = useState([]);//热门房源

  // 生命周期，页面一挂载完成 ==》类组件：componentDidMount() 函数组件：useEffect
  useEffect(() => {
    getBannerList();

  }, [])

  /**
   * 获取轮播图列表
   */
  async function getBannerList() {
    try {
      const res = await getBanner();
      setList(res.banner)
    } catch (error) {
      console.log(error);
    }
  }

  // 基于依赖去发请求 =》城市变化
  useEffect(() => {
    getHotHouseList();
    /**
   * 获取首页热门房源列表
   */
    async function getHotHouseList() {
      try {
        const res = await getHotHouse({ city: props.city });
        setHouses(res.list)
      } catch (error) {
        console.log(error);
      }
    }
  }, [props.city])



  return (
    <div>
      {/* 1、头部区域 */}
      <HomeHeader city={props.city} />

      {/* 2、轮播图 */}
      <MyCarousel list={list} />


      {/* 3、找室友 */}
      <div className="navs">
        <div className="item">找舍友</div>
        <div className="item">宜居社区</div>
      </div>


      {/* 4、热门房源 */}
      <House list={houses} />

    </div>
  )
}


export default connect(state => ({
  city: state.city
}))(Home)