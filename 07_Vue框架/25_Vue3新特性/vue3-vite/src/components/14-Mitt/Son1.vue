<template>
  <div>
    <h2>Son1</h2>
    <button @click="toSon2">给Son2发信息</button>
  </div>
</template>

<script>
import emmiter  from  '../../utils/eventBus'
export default {
  setup(props) {
    const toSon2 = () => {
        // 触发事件 emmiter.emit('自定义事件名',参数)
        emmiter.emit('sengMsg',{name:'zs',age:18})
    };

    return { toSon2 };
  }
};
</script>

<style lang="less" scoped>
</style>