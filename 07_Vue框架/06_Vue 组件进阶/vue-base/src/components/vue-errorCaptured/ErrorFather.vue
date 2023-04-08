<template>
    <div>
        <h2>errorCaptured</h2>
        <Son/>
    </div>
</template>

<script>
import Son from './Son'
    export default {
        components:{
            Son
        },
        // 父组件里捕获错误，不往上抛错
        // errorCaptured: (err, vm, info) => {
        //     console.log(err);
        //     console.log(vm);
        //     console.log(info);
        //     return false
        // },
    }
</script>

<style lang="less" scoped>

</style>