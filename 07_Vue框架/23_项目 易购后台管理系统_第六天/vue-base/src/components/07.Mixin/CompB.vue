<template>
  <div>
    <h2>B</h2>点赞
    <a @click="goodBtn">{{loading?'网络请求中....':'点赞'}}</a>
  </div>
</template>

<script>
import { GoodMixin } from "./mixin";
export default {
  mixins: [GoodMixin]
};
</script>

<style lang="less" scoped>
</style>