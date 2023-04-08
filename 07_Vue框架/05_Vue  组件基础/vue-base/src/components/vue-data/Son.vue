<template>
    <div>
        <h3>Son 子组件</h3>
        <p>
            <button @click="getParent">获取父组件</button>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                info:'大头儿子'
            }
        },
        methods:{
            getParent(){
                console.log(this);
                console.log(this.$parent.msg); // 父组件数据
                this.$parent.run();
            }
        }
    }
</script>

<style lang="less" scoped>

</style>