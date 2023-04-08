/**
 * axios二次封装
 * 1.配置基础路径和超时时间
 * 2.显示隐藏进度条
 * 3.请求拦截
 * 4.响应拦截
 */

// 引入axios
import Axios from 'axios'
import base from './base'
// 引入进度条
import Nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
import qs from 'query-string'

// 1.配置基础路径和超时时间
const instance = Axios.create({
    // baseURL:base.hostURL, // 基础域名
    // baseURL:'',  // 基础域名
    timeout:5000 // 超时时间
})

// 3.请求拦截
instance.interceptors.request.use(config=>{
    // // 开启进度条
    Nprogress.start();

    // // 统一处理POST请求
    // // 前端传递的参数是对象的话 {name:'',age:17} 直接往后台发；如果后端没有做处理，前端将其转为 'name=zs&age=18'
    // // 前端需要装 query-string 然后再引入
    // if(config.method==='post'){
    //     config.data=qs.stringify(config.data);
    // }

    // // 统一加token
    // config.headers.token='11111111';

    return config;
})


// 4.响应拦截
instance.interceptors.response.use(res=>{
    // 关闭进度条
    Nprogress.done();

    // 成功之后的回调
    console.log(res); // status、header、...data

    return res.data;
},error=>{
    // 关闭进度条
    Nprogress.done();

    // 错误处理  当后台只返给前端状态码，但是没有返回错误文字信息，那么我们自己手动添加  error.response.status
    if (error && error.response) {
        switch (error.response.status) {
            case 400:
                error.message = '400-表示请求报文中存在语法错';
                break;
            case 401:
                error.message = '401-未经许可，需要通过HTTP认证';
                break;
            case 403:
                error.message = '403-服务器拒绝该次访问（访问权限出现问题）';
                break;
            case 500:
                error.message = '500-表示服务器在执行请求时发生了错误，也有可能是web应用存在的bug或某些临时的错误时；';
                break;
            default:
                error.message = `连接服务器${error.response.status}`;
        }
    } else {
        error.message = '连接服务器失败';
    }


    // 失败之后的回调   Promise的失败 成功：Promise.resolve()  return '23' return false
    // 失败 Promise.reject()


    return Promise.reject(error);
})


// 导出axios实例
export default instance;