/**
 * 导出所有接口请求函数
 * 
 */
import base from './base'
import req from './request'
import loginReq from './loginReq'
import wangyiReq from './wangyiReq' //网易

/**
 * 获取轮播图数据
 * @returns 
 */
export const getBanner = () => req.get(base.bannerUrl)

/**
 * 登录
 * @param {*} params   {user:'',pwd:''}
 * @returns 
 * 
 * get 传参
 * 1、字符串拼接   user='yhm'&pwd='123'
 * 2、params 传参
 */
export const toLogin = (params) => {
    console.log(params);
    return loginReq.get(base.login, {
        params
    })
}

/**
 * 获取蓝莓酱列表
 * @param {*} params  {blueBerryjam_id：1}
 * @returns 
 */
export const getLanmei = (params) => req.get(base.lanmei, {
    params
})


/**
 * 
 * @param {*} type   类型
 *  @param {*} num   页码  第几页 
 * @returns 
 * 0-10.html
 *  参数：
 * 第一个参数： 开始位置（下标）  0 
 * 第二个参数：一页显示多少条   pageSize  10
 * 
 *      0-9  10-19  20-29
 * 页码： 1    2       3   num     (num-1)*10
 */
export const getNews = (type, num) => {
    // BAI67OGGwangning/0-10.html
    return wangyiReq.get(base.news + type + '/' + (num - 1) * 10 + '-10.html').then(res => {
        // console.log('===================', res.slice(9, -1));
        // ''.slice(开始下标，结束下标)  保护开始下标，不包含结束下标
        // res.slice(9,-1)
        let data = JSON.parse(res.slice(9, -1)) //==>{}
        // console.log(data);
        return data[type] //属性值[]
    })
}


/**
 * 搜索
 * @param {*} params   {keyword:''}
 * @returns 
 */
export const getSearch = (params) => wangyiReq.get(base.serach, {
    params
})

/**
 * 今日推荐
 * @returns 
 */
export const getRecommend=()=>wangyiReq.get(base.recommend)