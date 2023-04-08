<template>
  <div>
    <h3>Son</h3>
    {{money}}
    <p>
        <!-- 语法：$emit('update:属性名',money-100) -->
        <button @click="$emit('update:money',money-100)">儿子花钱</button>
    </p>
  </div>
</template>

<script>
export default {
  props: ["money"]
};
</script>

<style lang="less" scoped>
</style>