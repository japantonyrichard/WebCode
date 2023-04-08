/**
 * 导出所有的接口请求函数
 * 
 */
import base from './base'
import req from './req'
/**
 * 获取商品列表
 * @param {*} params   参数：page 页码
 * @returns 
 */
export const getGoodsList = (params) => req.get(base.goodsList, {
    params
});


/**
 * 搜索
 * @param {*} params  参数：search  {search:xx}
 * @returns 
 */
export const getSearchList = (params) => req.get(base.search, {
    params
});


/**
 * 类目选择
 * 接口说明：接口不同的参数cid 返回不同的类目数据 后台接受变量：id 
 * @param {*} params   {id:cid} 
 * @returns 
 */
export const getCategory = (params) => req.get(base.category, {
    params
})


/**
 * * 商品添加
 * 参数： title cid  category sellPoint price num descs paramsInfo image
 * @param {*} params {}
 * @returns 
 */
export const addGoods = (params) => req.get(base.addGoods, {
    params
})


/**
 * 商品删除接口 id
 * {id:xxx}
 */
export const delGoods = (params) => req.get(base.delGoods, {
    params
})


/**
 * 商品修改
 * @param {*} params  {id:'',.........}
 * @returns 
 */
export const updateGoods = (params) => req.get(base.updateGoods, {
    params
})


/**
 * 登陆
 * post 请求传参：
 * 1、直接传对象 {username:'123',password:'456'} ==>前提是后台允许直接传对象  username=123&password=567
 * 2、post  urlencoded ，前端不能直接传递对象 'username=123&password=567'
 * @param {*} params  接受的字段：{username,password}
 * @returns 
 */
export const login = (params) => {
    // console.log(base.login,params);
    return req.post(base.login, params)
}


/**
 * 获取规格参数列表
 * @param {*} params   规格参数列表  参数 {page:xx}
 * @returns 
 */
export const getParams = (params) => req.get(base.params, {
    params
})


/**
 * 添加规格参数
 * @param {*} params   参数：itemCatId,content,specsName
 * @returns 
 */
export const addParams = (params) => req.get(base.insertItemParam, {
    params
})


/**
 *根据cid查询商品的规格参数  {cid:xx}
 */
export const getCategoryData=(params)=>req.get(base.categoryData,{params})