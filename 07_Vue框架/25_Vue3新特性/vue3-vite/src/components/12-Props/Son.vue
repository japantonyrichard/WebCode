

<template>
  <div>
    <h3>子组件</h3>
    <p>父向子传递的数据：{{money}}</p>
    <p>
      <button @click="updateMoney">花了20</button>
    </p>
  </div>
</template>

<script>

export default {
  props: ["money",'msg'],
  //   context 上下文对象 {attrs、emit、slots}
  setup(props, {attrs}) {
    // 获取父向子传递的数据
    console.log(props.money);
    // console.log(context);
    console.log(attrs);

    const updateMoney = () => {
      // 通知父组件去修改 this.$emit('','')
      emit('changeMoney',20)
    };

    return { updateMoney };
  }
};
</script>

<style lang="less" scoped>
</style>