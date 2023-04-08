// 导出所有的接口请求函数
import base from './base'
import req from './request'

/**
 * 获取分类列表
 * @returns 
 */
export const getCategoryList=()=>req.get(base.baseUrl)

/**
 * 获取首页轮播图数据
 * @returns 
 */
export const getBannerList=()=>req.get(base.bannerUrl)


/**
 * 获取新鲜好物
 * @returns 
 */
export const  getNewsList=()=>req.get(base.getNewsUrl)


/**
 * 获取人气推荐
 * @returns 
 */
export const getHotList=()=>req.get(base.hotUrl)


/**
 * 获取商品区块
 * @returns 
 */
export const getProductList=()=>req.get(base.productUrl)








// export default {
//     getList(){

//     },
//     getDetail(){

//     }
// }



// import api from  '@/api'
// api.getList(),then()