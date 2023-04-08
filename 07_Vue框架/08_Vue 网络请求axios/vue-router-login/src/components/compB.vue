<template>
    <div>
        <h2>B组件</h2>
    </div>
</template>

<script>
    export default {
        beforeMount(){
            // 3.监听  this.$bus.$on('自定义事件名',(接收的信息)=>{})
            this.$bus.$on('change',(msg)=>{
                console.log(msg);
            });
        },
    }
</script>

<style lang="less" scoped>

</style>