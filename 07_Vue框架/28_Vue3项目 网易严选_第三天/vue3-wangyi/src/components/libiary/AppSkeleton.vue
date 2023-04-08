<template>
  <div :style="{width:width,height,background:bg}"></div>
</template>

<script>
export default {
  name: "AppSkeleton",
  props: {
    width: {
      type: String,
      default: "100px"
    },
    height: {
      type: String,
      default: "100px"
    },
    bg: {
      type: String,
      default: "#ddd"
    }
  }
};
</script>

<style lang="less" scoped>
</style>