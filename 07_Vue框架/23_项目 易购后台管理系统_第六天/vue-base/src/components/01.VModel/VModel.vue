<template>
  <div>
    <h2>V-model原理</h2>
    <p>{{msg}}</p>
    <!-- v-model 语法糖  简写 -->
    <input type="text" v-model="msg" />
    <!-- 原理 
        1、通过v-bind动态绑定value属性
        2、通过v-on监听input事件   
    -->
    <input type="text" :value="msg" @input="change" />
    <hr />
    <CustomeInput :val="msg" @changeVal="getVal" />
  </div>
</template>

<script>
import CustomeInput from "./CustomeInput.vue";
export default {
  components: {
    CustomeInput
  },
  data() {
    return {
      msg: "123"
    };
  },
  methods: {
    change(e) {
      // console.log(e.target.value);
      this.msg = e.target.value;
    },
    getVal(val) {
      this.msg = val;
    }
  }
};
</script>

<style lang="less" scoped>
</style>