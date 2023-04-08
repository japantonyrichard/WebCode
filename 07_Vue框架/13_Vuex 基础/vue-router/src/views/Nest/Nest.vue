<template>
    <div>
        Nest嵌套路由
        <!-- 路由链接 -->
        <ul>
            <li><router-link to="/nest/nest1">Nest1</router-link></li>
            <li><router-link to="/nest/nest2">Nest2</router-link></li>
        </ul>
        <!-- 路由导航 -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>

</style>