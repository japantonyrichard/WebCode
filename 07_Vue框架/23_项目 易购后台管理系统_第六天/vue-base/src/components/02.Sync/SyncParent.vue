<template>
  <div>
    <h2>.sync 属性修饰符</h2>
    <Son :money.sync='money'/>
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  components: {
    Son
  },
  data() {
    return {
        money:1000
    }
  },
};
</script>

<style lang="less" scoped>
</style>