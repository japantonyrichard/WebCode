<template>
    <div>
        <h3>子组件</h3>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$attrs,this.$listeners);
        },
    }
</script>

<style lang="less" scoped>

</style>