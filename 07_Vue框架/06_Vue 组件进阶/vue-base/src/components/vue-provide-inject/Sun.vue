

<template>
  <div>
    <p>孙子组件</p>
    <p>爷爷传来的money：{{money}}</p>
    <!-- <p>provide-inject:{{house}}</p> -->
    <!-- <p>provide-inject:{{caichan}}</p> -->
    <p>provide-inject:{{zichan}}</p>

  </div>
</template>

<script>
export default {
  props: ["money"],
  //   接受数据 第一种写法：数组
  //   inject: ["house"],
  //   inject: ["caichan"]
  //  接受数据 第2种写法：对象 可以重新命名
  inject:{
    // 重新命名
    zichan:{
        from:'caichan'
    }
  }
};
</script>

<style lang="less" scoped>
</style>