import router from './index'
import store from '../store/index'

router.beforeEach((to, from, next) => {
    // 1、判断将要去的组件是否需要登录
    if (to.meta.isLogin) { //需要登录才能进入
        // 2、再判断用户是否已经登录 
        // token  从vuex取出来
        let token = store.state.LoginModule.userinfo.token;
        if (token) {
            // 已经登录了
            next();
        } else {
            next('/login')
        }
    } else {
        // 不需要登录
        next();
    }

})