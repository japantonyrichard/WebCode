<!-- =================== 根组件 ================== -->
<template>
  <div id="app">
    <!-- 动态组件 -->
    <!-- <DyCom/> -->

    <!-- 错误捕获 -->
    <!-- <ErrorFather/> -->

    <!-- 过渡 -->
    <!-- <Transition/> -->

    <!-- 动画 -->
    <!-- <animationend/> -->

    <!-- provide-inject 深层传递 -->
    <!-- <GrandFather/> -->

    <!-- 自定义指令 -->
    <!-- <Directive/> -->

    <!-- 过滤器 -->
    <VueFilter/>

  </div>
</template>

<script>
// 2.引入局部组件
import DyCom from './components/DyCom/Dycom'
import ErrorFather from './components/vue-errorCaptured/ErrorFather.vue'
import Transition from './components/vue-transition/Transition'
import animationend from './components/vue-transition/animationend'
import GrandFather from './components/vue-provide-inject/GrandFather'
import Directive from './components/vue-directive/Directive'
import VueFilter from './components/vue-filter/VueFilter'

export default {
  name: 'App',
  // 3.注册组件
  components: {
    DyCom,
    ErrorFather,
    Transition,
    animationend,
    GrandFather,
    Directive,
    VueFilter
  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style lang="less">
h2 {
  color: red;
}
</style>
