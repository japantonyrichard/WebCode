/**
 * 导出所有的接口请求函数
 */

import base from './base'
import req from './request'  //天行
import sinaReq from './sinaReq'  //新浪
import elseReq  from './elseReq'  //轮播图


/**
 * 获取首页新闻和全国数据
 * @returns 
 */
export const getCovNews=()=>{
    return req.get(base.CovNews)
}

/**
 * 新浪 全国 全世界 数据   地图展示
 * @returns 
 */
export const getMapData=()=>sinaReq.get(base.mapUrl)


/**
 * 获取轮播图
 * @returns 
 */
export const  getSwiper=()=>elseReq.get(base.bannerUrl)
 