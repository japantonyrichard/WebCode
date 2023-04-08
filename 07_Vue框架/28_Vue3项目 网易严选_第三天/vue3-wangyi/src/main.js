import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入初始化样式
import '@/assets/css/base.css'

// 引入 elementui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


// 引入全局组件
import components   from  './components/libiary/index'


createApp(App).use(store).use(router).use(ElementPlus).use(components).mount('#app')
