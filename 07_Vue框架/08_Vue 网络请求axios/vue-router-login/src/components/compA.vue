<template>
    <div>
        <h2>A组件</h2>
        <button @click="toB">向B发消息</button>
    </div>
</template>

<script>
    export default {
        methods:{
            toB(){
                // 2.触发  this.$bus.$emit('自定义事件名','参数')
                this.$bus.$emit('change','A发来的数据')
            }
        }
    }
</script>

<style lang="less" scoped>

</style>