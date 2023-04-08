<template>
  <div>
    <h2>09_RefAttr.vue</h2>
    <!-- 3、加给某个DOM元素 -->
    <div ref="myRef">123</div>
  </div>
</template>

<script>
import { ref ,onMounted} from "vue";
export default {
  setup(props) {
    // 1、定义一个空的ref 响应式数据
    const myRef = ref(null);
    
    // 想要获取，一定要写在onMounted里
    onMounted(() => {
        console.log(myRef.value);
    })

    // 2、返回
    return {myRef}
  }
};
</script>

<style lang="less" scoped>
</style>