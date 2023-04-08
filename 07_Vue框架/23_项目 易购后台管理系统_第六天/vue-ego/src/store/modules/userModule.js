

import {
    Message
} from 'element-ui'
import router from '@/router'
// 引入解密
import jwt from 'jwt-decode'
import {
    login
} from '@/api/index'

// 存放所有需要共享的状态
const state = {
    userinfo: {
        // username:(localStorage.getItem('userinfo')&&JSON.parse(localStorage.getItem('userinfo')).username) ||'',
        username: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).username : '', //用户名
        token: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : '' //登陆信息
    },

}

// 修改state数据唯一方式；特点：同步
// 本质：方法
const mutations = {
    // 修改state里面的userinfo
    setUser(state, payload) {
        state.userinfo = payload;
    },
    // 清空用户信息
    delUser(state) {
        state.userinfo = {
            username: '',
            token: ''
        }
        // 清空本地存储
        localStorage.removeItem('user')
    }
}

// 异步  action  本质 ：方法
const actions = {
    // context 上下文
    async toLogin({
        commit
    }, payload) {
        // 发送网络请求  ==》返回token
        try {
            const res = await login(payload);

            if (res.status == 200) {
                let userinfo = {
                    username: jwt(res.data).username,
                    token: res.data
                }
                // 1、修改state数据  commit()
                commit('setUser', userinfo)

                // 2、数据持久化
                localStorage.setItem('user', JSON.stringify(userinfo))

                // 3、友好提醒
                Message.success('登录成功！');

                // 4、跳转页面
                router.push('/')
            }else{
                Message.error('登录失败！')
            }

        } catch (error) {
            console.log(error);
            Message.error('登录失败！')
        }

    }
}

// 包装加工state,==>计算属性
const getters = {
    showUser(state) {
        return '哈喽啊，' + state.userinfo.username
    }
}


export default {
    namespaced: true, //分模块管理
    state,
    mutations,
    actions,
    getters
}