/**
 * 封装所有的 请求方法
 */
import axios from "axios";
import base from './base'


const api = {
    /**
     * 获取城市切换列表
     */
    getCities() {
        return axios.get(base.host + base.city)
    },
    /**
     * 获取当前城市的房源信息
     * @param {对象} params  {city:110100}
     * @returns 
     * http://www.jingpaifang.cn/api/api/api/app/daily/summary?city=110100
     * 
     * axios.get('',) 两种方式：
     * 第一种方式： 字符串拼接 xxx=aa&yyy=bbb
     * 第二种方式： params  params:{
                                city:'110100',
                                aa:bb
                            }
     */
    getHouseInfo(params) {
        return axios.get(base.host + base.houseInfo, {
            params
        })
    },

    /**
     * 获取捡漏房源列表
     * @param {*} params {pageNo: 0, pageSize: 4, city: 110100}
     * @returns 
     * 
     */
    getIgnoreList(params){
        return axios.post(base.host+base.ignore,params)
    },
    /**
     * 获取成功故事
     * @param {*} params {pageNo: 0, pageSize: 4, title: "法拍房真实案例", authorId: "129465", sortId: 1, city: 110100}
     * @returns 
     */
    getSuccessStory(params){
        // console.log(base.host+base.story);
        return axios.post(base.host+base.story,params)
    },

    /**
     * 法拍房源  POST请求
     * @param {*} params 
     * @returns 
     
      {auctionStageId: []
        auctionStatusId: []
        auctionType: []
        businessCircleIds: []
        city: 110100
        houseTypeId: []
        keyword: ""
        limitBuy: []
        pageNo: 0
        pageSize: 21
        room: []
        sortId: 1
        subwayStationIds: []}
         
    
     */
    getHouse(params){
        return axios.post(base.host+base.houses,params)
    }

}


export default api