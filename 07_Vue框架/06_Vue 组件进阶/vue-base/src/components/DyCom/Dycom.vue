<template>
    <div>
        <h2>动态组件</h2>
        <div class="tabs">
            <div class="tabItem" @click="changeTab('Home')">Home</div>
            <div class="tabItem" @click="changeTab('Personal')">Personal</div>
        </div>
        <!-- 动态组件 -->
        <keep-alive :exclude="['Home']">
            <component :is="comName"></component>
        </keep-alive>
        
    </div>
</template>

<script>
// import Home from './Home'
const Home=()=>import('./Home.vue') // 异步组件

import Personal from './Personal'
export default {
    components: {
        Personal,
        // Home,
        Home:()=>import('./Home.vue')
    },
    data() {
        return {
            comName: 'Personal'
        }
    },
    methods:{
        changeTab(tab){
            this.comName=tab;
        }
    }
}
</script>

<style lang="less" scoped>
.tabs {
    display: flex;
    .tabItem{
        flex: 1;
        height: 40px;
        line-height: 40px;
        border: 1px solid #ccc;
    }
}
</style>