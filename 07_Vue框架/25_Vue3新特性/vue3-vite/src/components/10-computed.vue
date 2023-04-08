<template>
  <div>
    <div>
      美元：{{money}}
      <button @click="changeMoney">+1</button>
    </div>
    <div>人民币：{{newMoney}}</div>
    <hr>
    <input type="text" v-model="newMoney">
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  setup() {
    // Vue3 计算属性:依赖于现有的响应式数据，计算得到
    let money = ref(1);
    // let newMoney = computed(() => {
    //   // 返回值就是计算属性的值
    //   return money.value * 6;
    // });

    let newMoney=computed({
        get(){
            return money.value * 6;
        },
        set(val){
            money.value=val/6
        }
    })

    // 修改moeny
    const changeMoney = () => {
      money.value += 1;
    };

    return { money, newMoney, changeMoney };
  }
};
</script>
<style lang="less" scoped>
</style>