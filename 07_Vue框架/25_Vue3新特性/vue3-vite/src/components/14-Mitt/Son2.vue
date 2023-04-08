<template>
  <div>
    <h2>Son2</h2>
  </div>
</template>

<script>
// 引入
import emmiter from "../../utils/eventBus";
export default {
    setup(props) {
        // 监听 第一种写法
        // emmiter.on('sengMsg',(msg)=>{
        //     console.log(msg);
        // })
        // 第二种写法：
        emmiter.on('*',(EventType,msg)=>{
            console.log(`监听到的事件类型：${EventType} ,参数：`,msg);
        })


    }
};
</script>

<style lang="less" scoped>
</style>