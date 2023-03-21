/**
 * 封装所有的请求函数
 */
// import Axios from 'axios'
import Ajax from './ajax'
import base from './base'

// 以前的
// const api={
//     toRegister(){
//         // return Ajax.get('/',)
//     },
// }
// export default api

/**
 * 获取首页轮播图
 * @returns [{id:'',imgURl:''},{},{}]
 */
export const getBanner = () => Ajax.get(base.banner)


/**
 * 获取首页热门房源列表
 * @param {*} params 
 * @returns  {city:'北京'}
 */
export const getHotHouse=(params)=>Ajax.get(base.hothouse,{params})

/**
 * 获取城市选择  热门城市
 * @returns 
 */
export const getHotCity=()=>Ajax.get(base.selectCity)

/**
 * 搜索房源接口
 * params: 当前城市、搜索关键字、请求页码
 * city：城市
 * val：搜索关键词
 * page:页码
 * http://localhost:8888/search?city=北京&val=123 &page=
 * @param {*} params 
 * @returns  [{},{}]
 */
export const getSearch=(params)=>Ajax.get(base.search,{params:params})

/**
 * 房屋详情--信息接口----【详情页需要展示的】
 * {id:房屋id}
 */
export const getDetail=(params)=>Ajax.get(base.houseInfo,{params})


/**
 * 房屋的评价信息
 * id:房屋id
 * page:第几页
 */
export const getComment=(params)=>Ajax.get(base.comment,{params})


/**
 * 购物车列表数据
 * @param {*} params 
 * @returns {user:'xxx'}
 */
export const getCart=(params)=>Ajax.get(base.cart,{params})