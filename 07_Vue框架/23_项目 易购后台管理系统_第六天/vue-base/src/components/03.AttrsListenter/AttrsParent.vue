<template>
  <div>
    <h2>`$attrs`和`$listeners`</h2>
    <MyButton id="btn" class="button" style="btnStyle" type='danger' size='large' title='标题' msg='hello' @run='run' @say='say'/>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
export default {
  components: {
    MyButton
  },
  methods: {
    run(){
        console.log(111);
    },
    say(){
        
    }
  },
};
</script>

<style lang="less" scoped>
</style>