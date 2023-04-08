<!-- =================== 根组件 ================== -->
<template>
  <div id="app">

    <!-- 8.路由导航 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/news">新闻</router-link>

    <!-- 7.定义路由出口（舞台） -->
    <router-view></router-view>


  </div>
</template>

<script>
// 2.引入局部组件


export default {
  name: 'App',
  // 3.注册组件
  components: {
    
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
