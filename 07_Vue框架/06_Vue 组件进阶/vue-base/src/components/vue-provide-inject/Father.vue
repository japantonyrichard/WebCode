<template>
  <div>
    <h3>父亲组件</h3>
    <p>爷爷留给我的 ：{{money}}</p>
    <hr />
    <Son :money='money'/>
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  props: ["money"],
  components: {
    Son
  }
};
</script>

<style lang="less" scoped>
</style>