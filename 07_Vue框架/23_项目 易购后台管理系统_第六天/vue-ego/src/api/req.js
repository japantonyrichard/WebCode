import Axios from 'axios'
// npm i query-string -S
import qs from 'query-string'

const instance = Axios.create({
    // baseURL: '/foo',
    timeout: 5000
})


// 请求拦截
instance.interceptors.request.use(config => {
    console.log('-------------------------', config);
    // 统一处理POST请求参数
    if (config.method == 'post') {
        config.data = qs.stringify(config.data)
        console.log(config.data);
    }


    return config;
}, err => {
    return Promise.reject(err);
})

// 相应拦截
instance.interceptors.response.use(res => {


    return res.data;
}, err => {
    return Promise.reject(err);
})


// 导出二次封装
export default instance