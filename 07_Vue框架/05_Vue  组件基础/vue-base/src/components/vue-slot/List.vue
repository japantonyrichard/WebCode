<template>
    <div>
        <h2>List组件</h2>
        <!-- 匿名插槽 -->
        <!-- <Header>
            11111111
            <div>afsfa</div>
            <p>ghrewgwgwe</p>
        </Header> -->

        <!-- 具名插槽 -->
        <Header class="myHeader">
            <!-- <template v-slot:left>  语法糖：#插槽名字 -->
            <template #left>
                <span>列表左侧</span>
            </template>

            <Span>标题</Span>

            <template v-slot:right="obj">
                <span>列表右侧--插槽传来的数据：{{ obj }}</span>
            </template>
        </Header>
    </div>
</template>

<script>
import Header from './Header.vue'
export default {
    components: {
        Header
    }
}
</script>

<style lang="less" scoped>
.myHeader{
    display: flex;
    span{
        flex: 1;
    }
}
</style>