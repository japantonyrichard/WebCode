<template>
  <div>
    <h2>A</h2>
    <h3>
      喜欢♥
      <button @click="goodBtn">{{loading?'网络请求中....':'喜欢♥'}}</button>
    </h3>
  </div>
</template>

<script>
import {GoodMixin} from './mixin'
export default {
    mixins:[GoodMixin]
//   data() {
//     return {
//       loading: false
//     };
//   },
//   methods: {
//     goodBtn() {
//       this.loading = true;
//       // 模拟发请求
//       setTimeout(() => {
//         this.loading = false;
//       }, 2000);
//     }
//   }
};
</script>

<style lang="less" scoped>
</style>