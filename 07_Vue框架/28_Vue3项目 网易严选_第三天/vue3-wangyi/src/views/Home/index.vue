<template>
  <div class="w">
    <!-- 轮播图 -->
    <HomeBanner/>
    <!-- 新鲜好物 -->
    <HomeNews/>
    <!-- 人气推荐 -->
    <HomeHot/>
    <!-- 商品区块 -->
    <HomeProduct/>

  </div>
</template>

<script>
import HomeBanner from "./HomeBanner.vue";
import HomeNews  from './HomeNews.vue'
import HomeHot  from './HomeHot.vue'
import HomeProduct from './HomeProduct.vue'
export default {
  components: {
    HomeBanner,
    HomeNews,
    HomeHot,
    HomeProduct
  }
};
</script>

<style lang="less" scoped>
</style>