/**
 * 对axios进行二次包装
1. 配置通用的基础路径和超时
2. 显示请求进度条
  显示进度条: 请求拦截器回调
  结束进度条: 响应拦截器回调
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理
5. 每个请求自动携带userTempId的请求头: 在请求拦截器中实现
6. 如果当前有token, 自动携带token的请求头
 */

import Axios from 'axios'
import Nprogress from 'nprogress' //进度条
import 'nprogress/nprogress.css' //进度条样式
// import qs from 'query-string'

// 创建实例
const service = Axios.create({
    // 1. 配置通用的基础路径和超时 5s
    baseURL: '/api', //会给你的每一个请求链接加上  /api
    timeout: 5000
})

// 2、请求拦截:发送请求之前，进行统一配置
service.interceptors.request.use(config => {
    // console.log(config); 
    // 显示请求进度条
    Nprogress.start();

    // 加token
    // config.headers.token = '111111111';

    // if(config.method==='post'){
    //     config.data=qs.stringify(config.data)
    // }



    return config;
})

// 3、响应拦截
service.interceptors.response.use(res => {
    // 结束进度条
    Nprogress.done();

    // 错误判断  500  200

    return res.data
},err=>{
    // 结束进度条
    Nprogress.done();

    return Promise.reject(err);
})

// 导出
export default service



// promise 成功  Promise.resolve(1)  return false
// 失败：Promise.reject(err);