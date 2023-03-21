import React, { useEffect, useState } from 'react'
import CityHeader from './CityHeader/CityHeader'
import { getHotCity } from '../../api'

import './City.less'
import { connect } from 'react-redux';
import { setCityAction } from '../../store/action/actions';
import CommonHeader from '../../components/CommonHeader/CommonHeader';


 function City(props) {
    let [cities, setCities] = useState([]); //热门城市


    // 生命周期  页面一加载 DidMount() 
    useEffect(() => {
        getCity();
    }, [])

    async function getCity() {
        try {
            const res = await getHotCity();
            setCities(res.data.indexCitys.hot)
        } catch (error) {
            console.log(error);
        }
    }

    function selectCity(name){
        // 存到redux
        props.setCity(name)
        // 跳转页面
        props.history.goBack();
        // 持久化
        localStorage.setItem('city',name)

    }


    return (
        <div>
            {/* 头部 */}
            {/* <CityHeader /> */}
            <CommonHeader>城市选择</CommonHeader>

            {/* 当前城市 */}
            <div className="city-box">
                <div className="city-title">
                    当前城市
                </div>
                <div className="city-name">
                    {props.cityName}
                </div>
            </div>


            {/* 热门城市 */}
            <div className="city-box">
                <div className="city-title">
                    热门城市
                </div>
                {
                    cities.map(item => {
                        return (
                            <div className="city-name" key={item.id} onClick={selectCity.bind(null,item.name)}>
                                {item.name}
                            </div>
                        )
                    })
                }

            </div>


        </div>
    )
}


const mapStateToProps=(state)=>{
    return {
        cityName:state.city
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setCity:(name)=>{dispatch(setCityAction(name))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(City)