<template>
  <div>
    <input type="text" :value="val" @input="$emit('changeVal',$event.target.value)"/>
  </div>
</template>

<script>
export default {
  props: ["val"]
};
</script>

<style lang="less" scoped>
</style>