
<template>
  <div>
    <h3>儿子组件</h3>
    <p>父组件传递过来的数据：{{qian}}</p>
    <hr>
    <Sun />
  </div>
</template>

<script>
import { inject } from "vue";
import Sun from "./Sun.vue";
export default {
  components: {
    Sun
  },
  setup(props) {
    // 接受祖先传递过来的数据
    const qian = inject("money");

    return { qian };
  }
};
</script>

<style lang="less" scoped>
</style>