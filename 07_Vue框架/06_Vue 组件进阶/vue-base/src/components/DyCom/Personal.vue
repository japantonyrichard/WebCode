<template>
    <div>
        Personal 组件
    </div>
</template>

<script>
    export default {
        mounted(){
            console.log('Personal mounted');
        },
        beforeDestroy(){
            console.log('Personal beforeDestroy');
        },
        activated(){
            console.log('Personal 被激活了........');
        },
        deactivated(){
            console.log('Personal 失活了........');
        }
    }
</script>

<style lang="less" scoped>

</style>