/**
 * 导出所有的接口请求函数
 */

import Axios from 'axios'
import base from './base'
import qs from 'query-string'

const api={
    // 注册
    /**
     * 
     * @param {*} params 
     * 
     * 后端要求传输数据的headers为application/x-www-form-urlencoded方式
 * 属性名=属性值&属性名=属性值
     * confirmPwd=11&email=11%40qq.com&password=11&username=123
     * {
        * username:'',
        * email:'',
        * password:'',
        * confirmPwd:''
        * }
     */
    toRegister(params){
        console.log(qs.stringify(params));
        return Axios.post(base.register,qs.stringify(params))
    },
    // 登陆
    toLogin(){

    }
}

export default api