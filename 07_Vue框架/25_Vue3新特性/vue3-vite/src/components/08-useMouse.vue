
<template>
  <div>
    <h2>知识运用案例</h2>
    <p>
      <!-- x:{{mouse.x}}---y:{{mouse.y}} -->
      x:{{x}}---y:{{y}}
    </p>
    <hr />
    <p>
      count:{{count}}
      <button @click="add">count++</button>
    </p>
  </div>
</template>


<script>
import { reactive, onMounted, toRefs, ref, onUnmounted } from "vue";

const useMouse = () => {
  // 1、定义一个响应式数据对象，包含x和y属性
  const mouse = reactive({
    x: 0,
    y: 0
  });
  // 2、监听document的鼠标移动事件  ==>事件绑定，
  onMounted(() => {
    document.addEventListener("mousemove", move);
  });
  // 3、move函数为事件对应方法
  const move = e => {
    console.log(e.pageX, e.pageY);
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  };
  // 4、解绑事件
  onUnmounted(() => {
    document.removeEventListener("mousemove", move);
  });

  return mouse;
};

const useCount = () => {
  // 定义响应式的基本数据类型
  let count = ref(0);

  // 累加
  const add = () => {
    count.value++;
  };

  return { count, add };
};

export default {
  setup(props) {
    //调用封装好的获取鼠标位置的函数
    const mouse = useMouse();
    //  计数
    const countOBj = useCount();

    //
    return { ...toRefs(mouse), ...countOBj };
  }
};
</script>

<style lang="less" scoped>
</style>