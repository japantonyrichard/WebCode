
<template>
  <div>
    <h4>孙子</h4>
    {{money}}
    <button @click="change">孙子花钱</button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup(props) {
    const money = inject("money");
    // 接受祖先组件传递过来的方法
    const changeMoney = inject("update");

    const change = () => {
      // 调用
      changeMoney(20);
    };

    return { money, change };
  }
};
</script>

<style lang="less" scoped>
</style>