<template>
    <div>
        <h2>自定义事件</h2>
        msg:{{ msg }}
        <hr>
        <!-- 2.父组件中，通过 v-on 来监听子组件事件 语法糖：@change -->
        <Son :msg="msg" v-on:change="fatherChange"/>
    </div>
</template>

<script>
import Son from './Son.vue'
    export default {
        components:{
            Son
        },
        data(){
            return{
                msg:'小头爸爸'
            }
        },
        methods:{
            // 父组件修改msg
            fatherChange(val){
                this.msg+=val;
            }
        }
    }
</script>

<style lang="less" scoped>

</style>