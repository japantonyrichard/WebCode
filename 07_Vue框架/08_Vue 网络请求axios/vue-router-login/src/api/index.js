/**
 * 导出所有的接口请求函数
 */

import req from './request'    // 导入二次封装的axios
import base from './base'   // 导入接口地址
// export const getBanner=()=>{
//     return req.get(base.banner)
// }

/**
 * 获取轮播图
 * @returns 
 */
export const getBanner=()=>req.get(base.banner)  // 简写