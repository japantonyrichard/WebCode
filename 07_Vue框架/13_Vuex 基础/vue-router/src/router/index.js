import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由组件
import HomeView from '../views/HomeView.vue'

const User=()=>import('@/views/User.vue')
const Nest=()=>import('@/views/Nest/Nest.vue')
// 安装VueRouter
Vue.use(VueRouter)

// 定义路由表（配置路由规则）
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    alias:'/bbb', // 给用户的感觉就是在bbb上，但实际上还是在about里
    // 异步组件
    component: () => import('../views/AboutView.vue'),
    // 路由独享守卫===》针对这一条路由规则，对其他的不起作用
    beforeEnter: (to, from, next) => {
      // ...
      console.log('路由独享守卫-------about');
      next();
    },
    // 路由元（meta）信息   需要登录，才能进入该组件
    meta:{
      isLogin:true
    }
  },{
    // 动态路由 以冒号开头 /路径/:参数/:参数
    path:'/user/:id/:name', // 地址
    name:'user',////////////
    component:User,
    // 第一步:支持动态路由传参
    props:true,
    meta:{
      isLogin:false // 不需要登录，就能进入该组件
    }
  },{
    path:'/nest',
    component:Nest,
    // 重定向  地址本来是 /a  重定向到 /b
    redirect:'/nest/nest2',
    // children 配置二级路由  [{},{},{}]  /nest/nest1
    children:[{
      path:'nest1',
      component:()=>import('@/views/Nest/Nest1.vue')
    },{
      path:'nest2', //    /nest/nest2
      component:()=>import('@/views/Nest/Nest2.vue')
    }]
  },{
    path:'/login',
    component:()=>import('@/views/Login.vue')
  }
]


// router 实例
const router = new VueRouter({
  routes,
  mode:"history", // 不设置的话，默认是hash（#）
  // 导航高亮 全局修改  推荐使用
  linkActiveClass:'aa',
  linkExactActiveClass:'bb'
})

// 全局前置守卫（全局前置钩子） 特点：每个组件进入的时候，都要拦截一下
router.beforeEach((to,from,next)=>{
      console.log(from);
      console.log(to);
      console.log('全局前置守卫（全局前置钩子）');
      // 要么不写，写了一定要放行
      // next(false);
      // next();

      if(to.meta.isLogin){  // true 需要登录，才能进入该组件
        // 再来判断有没有用户登录信息
        const user='';  // token 唯一性标记  标记用户是否真实登录
        if(user){  // 有用户信息，用户已经登录
          next(); // 放行
        }else{
          next('/login'); // 没有用户信息，去登录页面
        }
      }else{  // false 不需要登录，就能进入该组件
        next();
      }
})

// 全局解析守卫
router.beforeResolve((to,from,next)=>{
  console.log('全局解析守卫');
  next();
})

// 全局后置钩子
router.afterEach((to, from) => {
  console.log('全局后置钩子');
})



// 导出
export default router
