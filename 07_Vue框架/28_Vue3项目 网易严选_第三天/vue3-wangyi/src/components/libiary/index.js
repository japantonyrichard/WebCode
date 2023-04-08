//利用vue编写插件方式，添加 注册全局组件
import AppBanner from './AppBanner.vue'
import AppMore  from './AppMore.vue'
import AppSkeleton  from './AppSkeleton.vue'

export default {
    install: (app, options) => {
      // 注册全局组件  Vue.compoent('name',{})
      app.component(AppBanner.name,AppBanner);
      app.component(AppMore.name,AppMore)
      app.component(AppSkeleton.name,AppSkeleton)
    }
  }