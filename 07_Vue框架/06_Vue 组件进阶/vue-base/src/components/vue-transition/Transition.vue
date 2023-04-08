<template>
    <div>
        <button @click="isShow=!isShow">点击切换</button>
        <Transition name="slide">
            <div v-show="isShow" class="box"></div>
        </Transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow:true
            }
        },
    }
</script>

<style lang="less" scoped>
@import url("https://cdn.jsdelivr.net/npm/animate.css@3.5.1");
.box{
    width: 500px;
    height: 300px;
    background-color: pink;
}

// 最初的样式
.slide-enter{
    width: 0;
    height: 0;
    opacity: 0;// 不显示 看不到
    background-color: green;
}
// 最终的样式
.slide-enter-to{
    width: 500px;
    opacity: 1;
}
// 中间过渡持续时间
.slide-enter-active{
    transition: all 5s;
}
</style>