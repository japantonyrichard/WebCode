

<template>
  <div>
    <h2>watch</h2>
    <p>
      count:{{count}}
      <button @click="changeCount">count++</button>
    </p>
    <p>
      obj:{{obj}}
      <button @click="changName">修改obj.name</button>
      <button @click="changeAge">修改obj.age++</button>
      <button @click="changeCar">修改obj.car.name 变化</button>

    </p>
  </div>
</template>

<script>
import { ref, watch, reactive } from "vue";
export default {
  setup(props) {
    let count = ref(0);
    const changeCount = () => {
      count.value++;
    };
    // 1、监听ref 定义一个响应式数据数据
    watch(count, (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });

    // 2、监听reactive定义的响应式数据
    const obj = reactive({
      name: "zs",
      age: "18",
      car: {
        name: "宝马"
      }
    });
    // 修改name
    const changName = () => {
      obj.name += "=========";
    };
    const changeAge = () => {
      obj.age++;
    };
    const changeCar=()=>{
        obj.car.name='自行车。。。。'
    }




    // 特点：任何属性的变化，都能侦听到
    watch(obj, () => {
      console.log("obj对象变化了......");
    });

    // 3、监听多个响应式数据数据。只要有一个变化，就会触发回调函数
    watch([count, obj], () => {
      console.log("同时监听多个响应式数据数据");
    });

    // 4、监听reactive定义的响应式数据，某一个属性
    watch(
      () => obj.age,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      }
    );

    
    watch(()=>obj.car,()=>{
        console.log('car name 变了....');
    },{
        // 5、深度监听
        deep:true,
        // 6、默认执行
        immediate:true
    })

    // 侦听响应式对象数据变化，并打印新值、旧值
    watch(()=>({...obj}), (newVal, oldVal) => {
      console.log("obj对象变化了......",newVal, oldVal);
    });



    return { count, changeCount, obj, changName, changeAge,changeCar };
  }
};
</script>

<style lang="less" scoped>
</style>