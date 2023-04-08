
<template>
  <div>
    <h2>父组件</h2>

    {{money}}
    <hr />
    <Son :money="money" msg='好消息' title='标题'  @changeMoney="update" />
  </div>
</template>

<script>
import { ref } from "vue";
import Son from "./Son.vue";
export default {
  components: {
    Son
  },
  setup(props) {
    const money = ref(100);
    // 修改值
    const update = val => {
      money.value -= val;
    };

    return { money, update };
  }
};
</script>

<style lang="less" scoped>
</style>