<template>
    <div>
        <h2>News组件</h2>
        <!-- <Header/> -->
        <Header>
            <!-- 动态插槽 -->
            <template v-slot:[str]>
                <span>新闻左侧，还是右侧，我也不确定</span>
            </template>
        </Header>
    </div>
</template>

<script>
import Header from './Header.vue'
    export default {
        components:{
            Header
        },
        data() {
            return {
                str:"right"
            }
        },
    }
</script>

<style lang="less" scoped>

</style>