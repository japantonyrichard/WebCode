<template>
    <div class="header">
        <!-- <h3>Header</h3> -->
        <!-- 默认插槽 -->
        <!-- <slot></slot> -->
        <!-- <slot/> -->
        <!-- <slot name="defalut"></slot> -->

        <!-- 具名插槽 -->
        <slot name="left">左侧</slot>

        <!-- 可以有一个不取名字的插槽 -->
        <slot>我是默认内容</slot>
        
        <!-- 作用域插槽：msg="123" :num="num" -->
        <slot name="right" msg="123" :num="num"/>

    </div>
</template>

<script>
export default {
    data() {
        return {
            num:'来自子组件插槽的数据'
        }
    },
}
</script>

<style lang="less" scoped>
.header {
    height: 40px;
    line-height: 40px;
    background-color: #ccc;
}
</style>