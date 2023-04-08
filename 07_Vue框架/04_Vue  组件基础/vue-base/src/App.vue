<!-- =================== 根组件 ================== -->
<template>
  <div id="app">
    <!-- <h2>123</h2> -->
    <!-- 二.使用全局组件 -->
    <!-- <component-a></component-a> -->
    <!-- 4.使用 -->
    <!-- <comB/> -->
    <!-- <comC></comC> -->


    <!-- props -->
    <!-- <PropsFather/> -->

    <!-- 自定义事件 -->
    <EmitFather/>
  </div>
</template>

<script>
// 2.引入局部组件
import comB from './components/cmp/comB'
import comC from './components/cmp/comC.vue'
import PropsFather from './components/vue-props/PropsFather.vue'
import EmitFather from './components/vue-emit/EmitFather.vue'

export default {
  name: 'App',
  // 3.注册组件
  components: {
    // comB
    comB:comB,
    comC,
    PropsFather,
    EmitFather
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
