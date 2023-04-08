<template>
  <div>
    <h2>爷爷组件</h2>
    <p>爷爷自己的money:{{money}}</p>
    <button @click="change">传递的数据不是响应式的</button>
    <hr />
    <Father :money="money" />
  </div>
</template>

<script>
import Father from "./Father.vue";
export default {
  components: {
    Father
  },
  data() {
    return {
      money: 1000000
    };
  },
  // 提供数据的 写法1：对象方式
  // provide:{
  //     house:'四合院2套'
  // }
  // 提供数据的 写法2：函数方式【常用】
  provide() {
    return {
      caichan: "奔驰2辆" + this.money
    };
  },
  methods: {
    change() {
      this.money = 0;
    }
  }
};
</script>

<style lang="less" scoped>
</style>