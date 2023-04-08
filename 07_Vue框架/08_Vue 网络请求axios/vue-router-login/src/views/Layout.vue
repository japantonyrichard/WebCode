<template>
    <div>
        <h2>布局</h2>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/login">去登录吧</router-link>
        </nav>
        <!-- 二级路由  路由出口 -->
        <router-view/>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped></style>