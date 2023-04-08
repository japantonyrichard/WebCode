import { createApp } from 'vue'
import App from './App.vue'  //根组件
import './index.css'

// 引入仓库
import store from './store'

// 创建一个Vue 的应用
createApp(App).use(store).mount('#app')
