<template>
  <div>
    <h4>儿子组件</h4>
    <hr>
    <Sun :money='money'/>
  </div>
</template>

<script>
import Sun from './Sun.vue'
export default {
  props: ["money"],
  components:{
    Sun
  }
};
</script>

<style lang="less" scoped>
</style>