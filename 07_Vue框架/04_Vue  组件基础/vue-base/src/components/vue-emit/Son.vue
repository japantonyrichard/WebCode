<template>
    <div>
        <h3>子组件</h3>
        msg:{{ msg }}
        <!-- vue不允许子组件直接修改父组件的数据 -->
        <!-- <button @click="msg+='========='">改变msg</button> -->
        <!-- 办法：自定义事件 -->
        <button @click="changeMsg">改变msg</button>
    </div>
</template>

<script>
    export default {
        props:['msg'],
        methods:{
            changeMsg(){
                // 1.子组件中，通过this.$emit('自定义事件名','传参数') 触发
                this.$emit('change','我是大头儿子')
            }
        },
    }
</script>

<style lang="less" scoped>

</style>