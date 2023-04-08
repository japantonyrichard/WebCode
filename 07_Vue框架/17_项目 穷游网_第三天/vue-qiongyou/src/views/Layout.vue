<template>
  <div>
    <!-- 路由导航 -->
    <MyMenu/>

    <!-- 二级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from "@/components/MyMenu.vue";
export default {
  components: {
    MyMenu
  }
};
</script>

<style lang="less" scoped>
</style>