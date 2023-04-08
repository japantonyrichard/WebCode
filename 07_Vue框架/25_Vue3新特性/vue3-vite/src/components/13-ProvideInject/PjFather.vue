

<template>
  <div>
    <h2>祖先组件</h2>
    <p>
      money:{{money}}
      <button @click="update">修改</button>
    </p>
    <hr>
    <Son />
  </div>
</template>

<script>
import { ref, provide } from "vue";
import Son from "./Son.vue";
export default {
  components: {
    Son
  },
  setup(props) {
    const money = ref(100);
    // 祖先组件接受后代组件传递过来的值
    const update = (val) => {
        money.value-=val
    };
    // 1、将数据往后代传递
    provide("money", money);
    // 2、将方法传递给后代
    provide('update',update)

    return { money, update };
  }
};
</script>

<style lang="less" scoped>
</style>