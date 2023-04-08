<template>
  <div>
    <!-- 1、顶部通栏 -->
    <AppTopNav />

    <!-- 2、头部区域 -->
    <Header />

    <!-- 3、主体区域 -->
    <div class="main">
      <!-- 二级路由出口 -->
      <router-view></router-view>
    </div>

    <!-- 4、顶部区域 -->
    <div>顶部区域</div>
  </div>
</template>

<script>
import AppTopNav from "../components/AppTopNav.vue";
import Header from '../components/Header.vue'
import {useStore} from 'vuex'
export default {
  components: {
    AppTopNav,
    Header
  },
  // created  发网络请求 ==》存到vuex 里
  setup(props) {
    const store= useStore();
    // 触发
    store.dispatch('categoryModule/getList')
  }
};
</script>

<style lang="less" scoped>
</style>