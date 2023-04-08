import router from './index'

import store from '@/store/index'

// 路由拦截
router.beforeEach((to, from, next) => {

    // if (to.meta.isLogin) { //需要登陆才能进入
    // to.matched 当前路由和父路由 [].some  只要有一个符合条件，及返回true
    if(to.matched.some(item=>item.meta.isLogin)){
        // 再判断是否有登陆信息, 从vuex 读取
        let token = store.state.userModule.userinfo.token;
        if (token) { //已经登陆
            next();
        } else { //没登陆
            next('/login')
        }

    } else {
        // 不需要登陆，直接放行
        next();
    }

})