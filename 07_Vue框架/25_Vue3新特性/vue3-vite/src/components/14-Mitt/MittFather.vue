<template>
  <div>
    <h1>父组件</h1>
    <Son1/>
    <hr>
    <Son2 />
  </div>
</template>

<script>
import Son1 from "./Son1.vue";
import Son2 from "./Son2.vue";
export default {
  components: {
    Son1,
    Son2
  }
};
</script>

<style lang="less" scoped>
</style>